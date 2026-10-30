/**
 * CARQUIDEC · scripts/build-images.mjs
 * ---------------------------------------------------------------------------
 * Genera el juego de imágenes que realmente usa el sitio: AVIF + WebP + JPEG en
 * las anchuras que corresponden a cada hueco, más una miniatura difuminada
 * (LQIP) en base64 y un manifest.json con todo el mapa.
 *
 * El manifest es la única fuente de verdad: build.mjs lo lee para escribir los
 * <picture> con srcset, width/height y fondo LQIP.
 *
 *   node scripts/build-images.mjs            # incremental (omite lo ya generado)
 *   node scripts/build-images.mjs --force    # regenera todo
 *   node scripts/build-images.mjs --clean    # borra assets/img y regenera
 *
 * Por qué: la portada servía 41 MB de PNG/JPG (ficheros de hasta 7 MB por
 * imagen). Con AVIF/WebP y anchuras correctas la primera carga baja a ~3 MB
 * sin pérdida visible.
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const OUT = path.join(ROOT, 'assets', 'img');
const FORCE = process.argv.includes('--force');
const CLEAN = process.argv.includes('--clean');

const CORE_PAGES = [
  'index.html', 'about.html', 'blog.html', 'contacto.html',
  'ecosistema.html',
  'proyecto-01-villa.html', 'proyecto-02-hotel.html', 'proyecto-03-comercial.html',
  'proyecto-04-oficina.html', 'proyecto-05-bano.html'
];

/** Fuentes extra que no están en el HTML pero se usan en posters/redes. */
const EXTRA = {
  'Hernando_Carrillo__Arquitectura_que_Evoluciona.png': ['retrato-arquitectura', 'wide'],
  'Trayectoria_de_Hernando_Carrillo_Sánchez.png': ['retrato-trayectoria', 'wide'],
  'Perfil_de_Hernando_Carrillo_Sánchez.png': ['retrato-perfil', 'wide'],
  'Copilot_20260731_223204.png': ['poster-marmoles', 'poster'],
  'Copilot_20260731_223358.png': ['poster-parametrico', 'poster'],
  'Copilot_20260730_115359.png': ['poster-obra', 'poster'],
  'logo-carquidec-transparent.png': ['logo-carquidec', 'logo'],
  '20260730222718545141.jpg': ['estudio-hero', 'hero']
};

const NICE = {
  'estudio-hero': 'estudio-hero',
  'logo-carquidec': 'logo-carquidec'
};

const LADDER = {
  hero: [768, 1280, 1920],
  wide: [640, 1024, 1536],
  tile: [480, 800, 1280],
  card: [400, 640, 1024],
  poster: [480, 800],
  logo: [160, 320]
};

/**
 * Recorte por rol.
 * Las fotos del portafolio llevan la marca de agua del despacho original en la
 * franja inferior. Como estas imágenes se usan a sangre (el 20 % inferior queda
 * bajo el degradado oscuro y el pie de texto), recortamos esa banda: desaparece
 * la marca y la composición gana formato panorámico. Ver AUDITORIA.md §legal.
 */
const CROP = {
  hero: { top: 0.03, height: 0.70 }   // se descarta el 27 % inferior
};

const SIZES = {
  hero: '100vw',
  wide: '(max-width: 900px) 100vw, 66vw',
  tile: '(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw',
  card: '(max-width: 900px) 100vw, 40vw',
  poster: '(max-width: 900px) 100vw, 33vw',
  logo: '320px'
};

/* ---------------------------------------------------------------------------
   1 · Descubrir imágenes en las páginas reales
   ------------------------------------------------------------------------ */
const decode = (u) => decodeURIComponent(u).replace(/^\.\//, '').trim();

async function discover() {
  /** source → rol */
  const found = new Map();

  for (const page of CORE_PAGES) {
    // Ojo: leemos la versión de git, no la del disco. El paso de construcción
    // (build.mjs) reescribe los HTML con <picture> apuntando ya a assets/img;
    // si leyéramos el disco, cada ejecución descubriría sus propias salidas.
    // Desde git el proceso es idempotente y los slugs se mantienen estables.
    let html;
    try {
      html = execSync(`git show HEAD:${JSON.stringify(page)}`, { cwd: ROOT, maxBuffer: 64 * 1024 * 1024 }).toString('utf8');
    } catch { continue; }

    // <img ...> analizado como etiqueta completa para conocer su clase
    for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
      const tag = m[0];
      const srcMatch = tag.match(/\bsrc="([^"]+)"/i);
      if (!srcMatch) continue;
      const src = decode(srcMatch[1]);
      if (/^(https?:|data:)/.test(src)) continue;
      const role = /img-full/.test(tag) ? 'wide' : /hero-|slide-full/.test(tag) ? 'hero' : 'card';
      if (!found.has(src) || role === 'wide') found.set(src, role);
    }
    // background-image:url('...') dentro de .slide-full-bg / .hero-full
    for (const m of html.matchAll(/<div class="slide-full-bg"[^>]*background-image:url\('([^']+)'\)/gi)) {
      const src = decode(m[1]);
      if (/^(https?:|data:)/.test(src)) continue;
      found.set(src, 'hero');
    }
    // posters de vídeo
    for (const m of html.matchAll(/\bposter="([^"]+)"/gi)) {
      const src = decode(m[1]);
      if (/^(https?:|data:)/.test(src)) continue;
      if (!found.has(src)) found.set(src, 'poster');
    }
  }

  for (const [src, [slug, role]] of Object.entries(EXTRA)) found.set(decode(src), role);

  const entries = [];
  for (const [src, role] of found) {
    if (!/\.(jpe?g|png|webp|avif|gif)$/i.test(src)) continue;
    try {
      await fs.access(path.join(ROOT, src));
    } catch { continue; }
    const extra = EXTRA[src];
    entries.push({ src, role: extra ? extra[1] : role, slug: extra ? extra[0] : null });
  }

  // Slugs estables y legibles por orden de aparición: proyecto-01, ...
  let n = 0;
  for (const e of entries) {
    if (e.slug) continue;
    n += 1;
    const prefix = e.role === 'poster' ? 'poster' : e.role === 'hero' ? 'vista' : 'proyecto';
    e.slug = `${prefix}-${String(n).padStart(2, '0')}`;
  }
  for (const [slug, keep] of Object.entries(NICE)) {
    const e = entries.find((x) => x.slug === slug);
    if (e) e.slug = keep;
  }
  return entries;
}

const sources = await discover();
if (!sources.length) throw new Error('No se han encontrado imágenes que procesar.');

if (CLEAN) await fs.rm(OUT, { recursive: true, force: true });
await fs.mkdir(OUT, { recursive: true });

const manifestPath = path.join(OUT, 'manifest.json');
let previous = {};
try { previous = JSON.parse(await fs.readFile(manifestPath, 'utf8')); } catch { /* primera vez */ }

const exists = async (p) => { try { await fs.access(p); return true; } catch { return false; } };

/* ---------------------------------------------------------------------------
   2 · Generar
   ------------------------------------------------------------------------ */
const manifest = {};
const rows = [];
let bytesIn = 0;
let bytesOut = 0;

for (const { src, slug, role } of sources) {
  const abs = path.join(ROOT, src);
  const inSize = (await fs.stat(abs)).size;
  const full = await sharp(abs).metadata();
  const crop = CROP[role];
  const region = crop
    ? {
        left: 0,
        top: Math.round((full.height || 900) * crop.top),
        width: full.width || 1600,
        height: Math.round((full.height || 900) * crop.height)
      }
    : null;
  const meta = region ? await sharp(abs).extract(region).metadata() : full;
  const ow = meta.width || 1600;
  const oh = meta.height || 900;
  /** fábrica de tuberías: aplica recorte y escalado a partir del original */
  const stage = () => {
    const pipe = sharp(abs).rotate();
    return region ? pipe.extract(region) : pipe;
  };

  const widths = [...new Set(LADDER[role].filter((w) => w <= ow + 40))];
  if (!widths.length) widths.push(Math.min(ow, 640));

  const isLogo = role === 'logo';
  const quality = { avif: isLogo ? 62 : 52, webp: isLogo ? 76 : 76, jpg: 78 };

  const entry = {
    slug, role, source: src,
    width: ow, height: oh,
    aspect: +(ow / oh).toFixed(4),
    cropped: region ? region : undefined,
    sizes: SIZES[role],
    lqip: null,
    sources: { avif: [], webp: [], jpg: [] }
  };

  for (const w of widths) {
    const base = () => stage().resize({ width: w, withoutEnlargement: true, fit: 'inside' });
    const jobs = [
      ['avif', path.join(OUT, `${slug}-${w}.avif`), () => base().avif({ quality: quality.avif, effort: 4 })],
      ['webp', path.join(OUT, `${slug}-${w}.webp`), () => base().webp({ quality: quality.webp, effort: 5 })],
      ['jpg', path.join(OUT, `${slug}-${w}.jpg`), () => base().jpeg({ quality: quality.jpg, mozjpeg: true, progressive: true })]
    ];
    for (const [fmt, out, pipe] of jobs) {
      const rel = path.relative(ROOT, out).split(path.sep).join('/');
      if (!FORCE && (await exists(out))) {
        entry.sources[fmt].push({ w, file: rel, bytes: (await fs.stat(out)).size });
        continue;
      }
      try {
        const info = await pipe().toFile(out);
        entry.sources[fmt].push({ w, file: rel, bytes: info.size });
      } catch (err) {
        // AVIF puede fallar en algunas compilaciones de libvips: no es bloqueante
        if (fmt === 'avif') { console.warn(`  · sin AVIF para ${slug}-${w}: ${err.message}`); continue; }
        throw err;
      }
    }
  }

  const lqipBuf = await stage().resize({ width: 16 }).blur(1.6).webp({ quality: 30 }).toBuffer();
  entry.lqip = 'data:image/webp;base64,' + lqipBuf.toString('base64');

  manifest[slug] = entry;

  const heaviest = entry.sources.webp.reduce((a, b) => (a.bytes >= b.bytes ? a : b), { bytes: 0 });
  bytesIn += inSize;
  bytesOut += heaviest.bytes;
  rows.push({ src, slug, role, inSize, outSize: heaviest.bytes, w: ow, h: oh });
}

/* ---------------------------------------------------------------------------
   3 · Iconos del sitio
   ------------------------------------------------------------------------ */
const logo = path.join(ROOT, 'logo-carquidec-transparent.png');
if (await exists(logo)) {
  for (const [name, size] of [
    ['favicon-32.png', 32], ['favicon-64.png', 64], ['apple-touch-icon.png', 180],
    ['icon-192.png', 192], ['icon-512.png', 512]
  ]) {
    const out = path.join(OUT, name);
    if (FORCE || !(await exists(out))) {
      await sharp(logo)
        .resize(size, size, { fit: 'contain', background: { r: 10, g: 10, b: 9, alpha: 1 } })
        .png({ compressionLevel: 9 })
        .toFile(out);
    }
  }
}

await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

console.log('\n  página / origen'.padEnd(54), 'slug'.padEnd(14), 'medidas'.padEnd(12),
  'antes'.padStart(9), 'ahora'.padStart(9));
console.log('  ' + '─'.repeat(100));
for (const r of rows.sort((a, b) => b.inSize - a.inSize)) {
  console.log('  ' + r.src.slice(0, 50).padEnd(52), r.slug.padEnd(14),
    `${r.w}×${r.h}`.padEnd(12),
    (r.inSize / 1e6).toFixed(2).padStart(7) + ' MB',
    (r.outSize / 1e3).toFixed(1).padStart(7) + ' kB');
}
console.log('  ' + '─'.repeat(100));
console.log(`  ${rows.length} imágenes · ${(bytesIn / 1e6).toFixed(1)} MB de origen → `
  + `${(bytesOut / 1e6).toFixed(2)} MB servidos (WebP mayor; AVIF pesa aún menos)`);
console.log(`  manifest: assets/img/manifest.json`);

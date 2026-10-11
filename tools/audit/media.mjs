/**
 * CARQUIDEC · tools/audit/media.mjs
 * ---------------------------------------------------------------------------
 * Auditoría del material multimedia: integridad, contenedor y duplicados.
 *
 *   Contenedor real vs extensión
 *     El tipo se lee de los primeros bytes del fichero (no de la extensión).
 *     Un `.mp3` que en realidad sea MP4 fragmentado (AAC) lo serviría el
 *     servidor como `audio/mpeg` y el navegador no sabría reproducirlo: es un
 *     fallo silencioso que sólo se ve al pulsar reproducir. Aquí se detecta.
 *
 *   Integridad de las referencias
 *     Toda ruta multimedia citada desde el HTML, el CSS o el JS debe existir
 *     en el repositorio (src, srcset, poster, data-track-src, url() en CSS…).
 *
 *   Duplicados byte a byte
 *     Ninguna copia publicada puede repetirse: cada megabyte duplicado se
 *     sube en cada despliegue y se mantiene para siempre.
 *
 *   Presupuesto del archivo
 *     Peso del material publicado y de los originales que sirven de fuente al
 *     canal de imágenes (informativo).
 *
 *   node tools/audit/media.mjs [--json]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = path.resolve(new URL('../..', import.meta.url).pathname);
const JSON_OUT = process.argv.includes('--json');

const PAGES = [
  'index.html', 'about.html', 'blog.html', 'contacto.html', 'ecosistema.html',
  'proyecto-01-villa.html', 'proyecto-02-hotel.html', 'proyecto-03-comercial.html',
  'proyecto-04-oficina.html', 'proyecto-05-bano.html'
];

/** Extensiones que se auditan, con el contenedor que deberían contener. */
const EXPECTED = {
  '.jpg': 'jpeg', '.jpeg': 'jpeg', '.png': 'png', '.webp': 'webp',
  '.avif': 'avif', '.gif': 'gif',
  '.mp4': 'isobmff', '.m4a': 'isobmff', '.mov': 'isobmff',
  '.mp3': 'mpeg-audio', '.wav': 'wav', '.ogg': 'ogg', '.webm': 'webm'
};

/**
 * Lee el contenedor real de un fichero por su firma.
 * Devuelve una etiqueta comparable con EXPECTED, o 'desconocido'.
 */
const sniff = (head) => {
  const brand = head.subarray(4, 12).toString('latin1');
  if (head.subarray(0, 3).toString('latin1') === '\xff\xd8\xff') return 'jpeg';
  if (head.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return 'png';
  if (head.subarray(0, 4).toString('latin1') === 'GIF8') return 'gif';
  if (head.subarray(0, 4).toString('latin1') === 'RIFF' && head.subarray(8, 12).toString('latin1') === 'WEBP') return 'webp';
  if (head.subarray(0, 4).toString('latin1') === 'RIFF' && head.subarray(8, 12).toString('latin1') === 'WAVE') return 'wav';
  if (head.subarray(0, 4).toString('latin1') === 'OggS') return 'ogg';
  if (head.subarray(0, 4).equals(Buffer.from([0x1a, 0x45, 0xdf, 0xa3]))) return 'webm';
  if (/^ftyp/.test(brand)) {
    if (/^(avif|avis|mif1|miaf|heic|heix|hevc|mif2)/.test(brand.slice(4))) return 'avif';
    return 'isobmff';
  }
  if (head.subarray(0, 3).toString('latin1') === 'ID3') return 'mpeg-audio';
  if (head[0] === 0xff && (head[1] & 0xe0) === 0xe0) return 'mpeg-audio';
  return 'desconocido';
};

const walk = async (dir, out = []) => {
  let items = [];
  try { items = await fs.readdir(dir, { withFileTypes: true }); } catch { return out; }
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) await walk(full, out);
    else out.push(full);
  }
  return out;
};

const rel = (p) => path.relative(ROOT, p).split(path.sep).join('/');
const fmt = (b) => (b >= 1e6 ? (b / 1e6).toFixed(1) + ' MB' : (b / 1e3).toFixed(1) + ' kB');

const issues = [];
const add = (level, kind, detail) => issues.push({ level, kind, detail });

/* ---------------------------------------------------------------------------
   1 · Contenedor real de todo lo publicado (assets/)
   ------------------------------------------------------------------------ */
const published = (await walk(path.join(ROOT, 'assets'))).filter((p) => EXPECTED[path.extname(p).toLowerCase()]);
const byHash = new Map();
let publishedBytes = 0;

for (const file of published) {
  const buf = await fs.readFile(file);
  publishedBytes += buf.length;
  const head = buf.subarray(0, 16);
  const ext = path.extname(file).toLowerCase();
  const real = sniff(head);
  const expected = EXPECTED[ext];
  if (real !== 'desconocido' && real !== expected) {
    add('error', 'contenedor', `${rel(file)}: la extensión dice «${ext}» pero el contenido es ${real}`);
  }
  const digest = crypto.createHash('sha1').update(buf).digest('hex');
  if (byHash.has(digest)) {
    add('error', 'duplicado', `${rel(file)} es idéntico a ${rel(byHash.get(digest))}`);
  } else {
    byHash.set(digest, file);
  }
}

/* ---------------------------------------------------------------------------
   2 · Referencias multimedia del sitio
   ------------------------------------------------------------------------ */
const refs = new Map();  // ruta → ficheros que la citan
const note = (target, from) => {
  if (!/^(https?:|data:|blob:|mailto:|tel:|#|\/\/)/.test(target)) {
    const clean = decodeURI(target.split('?')[0].split('#')[0]);
    if (!EXPECTED[path.extname(clean).toLowerCase()]) return;
    if (!refs.has(clean)) refs.set(clean, new Set());
    refs.get(clean).add(from);
  }
};

const CSS_URL = /url\(\s*['"]?([^'")]+)['"]?\s*\)/g;
const HTML_ATTR = /(?:\bsrc|\bposter|data-track-src)\s*=\s*"([^"]+)"/gi;
const SRCSET = /\b(?:srcset|data-srcset)\s*=\s*"([^"]+)"/gi;

for (const page of PAGES) {
  const html = await fs.readFile(path.join(ROOT, page), 'utf8');
  for (const m of html.matchAll(HTML_ATTR)) note(m[1], page);
  for (const m of html.matchAll(SRCSET)) {
    for (const part of m[1].split(',')) note(part.trim().split(/\s+/)[0], page);
  }
  for (const m of html.matchAll(CSS_URL)) note(m[1].trim(), page);
}

for (const asset of ['assets/css/carquidec.css', 'assets/css/fonts.css', 'assets/js/carquidec.js']) {
  let text = '';
  try { text = await fs.readFile(path.join(ROOT, asset), 'utf8'); } catch { continue; }
  for (const m of text.matchAll(CSS_URL)) note(m[1].trim(), asset);
  for (const m of text.matchAll(/['"]((?:\.\.\/)?assets\/media\/[^'"]+)['"]/g)) note(m[1].replace(/^\.\.\//, ''), asset);
}

let referencedBytes = 0;
for (const [target, sources] of refs) {
  const full = path.join(ROOT, target);
  let stat = null;
  try { stat = await fs.stat(full); } catch { /* ausente */ }
  if (!stat) {
    add('error', 'referencia', `${target} no existe (citada en ${[...sources].join(', ')})`);
    continue;
  }
  referencedBytes += stat.size;
  const head = (await fs.readFile(full)).subarray(0, 16);
  const real = sniff(head);
  const expected = EXPECTED[path.extname(target).toLowerCase()];
  if (real !== 'desconocido' && real !== expected) {
    add('error', 'contenedor', `${target}: servido como ${expected} pero el contenido es ${real} (citado en ${[...sources].join(', ')})`);
  }
}

/* ---------------------------------------------------------------------------
   3 · Archivo original: fuentes del canal de imágenes y peso muerto
   ------------------------------------------------------------------------ */
let originalBytes = 0;
let originals = 0;
try {
  const manifest = JSON.parse(await fs.readFile(path.join(ROOT, 'assets/img/manifest.json'), 'utf8'));
  const sources = new Set(Object.values(manifest).map((v) => v.source).filter(Boolean));
  for (const src of sources) {
    try {
      originalBytes += (await fs.stat(path.join(ROOT, src))).size;
      originals += 1;
    } catch {
      add('warn', 'fuente', `${src} (fuente del canal de imágenes) no está en el repositorio`);
    }
  }
} catch { /* sin manifiesto */ }

/* ---------------------------------------------------------------------------
   Informe
   ------------------------------------------------------------------------ */
const errors = issues.filter((i) => i.level === 'error');
const warns = issues.filter((i) => i.level === 'warn');

if (JSON_OUT) {
  console.log(JSON.stringify({
    published: { files: published.length, bytes: publishedBytes },
    references: { files: refs.size, bytes: referencedBytes },
    originals: { files: originals, bytes: originalBytes },
    issues
  }, null, 2));
} else {
  console.log('\n  ══════════════════════════════════════════════════════════════════');
  console.log('   MATERIAL MULTIMEDIA · INTEGRIDAD, CONTENEDOR Y DUPLICADOS');
  console.log('  ══════════════════════════════════════════════════════════════════\n');

  console.log('  Publicado en assets/');
  console.log(`    ${String(published.length).padStart(4)} ficheros · ${fmt(publishedBytes)}`);
  console.log('  Citado desde las páginas, el CSS o el JS');
  console.log(`    ${String(refs.size).padStart(4)} ficheros · ${fmt(referencedBytes)}`);
  console.log('  Originales que alimentan el canal de imágenes');
  console.log(`    ${String(originals).padStart(4)} ficheros · ${fmt(originalBytes)}\n`);

  if (issues.length) {
    console.log('  Incidencias\n');
    for (const i of issues) console.log(`    ${i.level === 'error' ? '✘' : '·'} ${i.kind}: ${i.detail}`);
    console.log('');
  } else {
    console.log('  ✔ cada extensión coincide con su contenido real');
    console.log('  ✔ todas las referencias multimedia existen');
    console.log('  ✔ sin copias byte a byte repetidas en lo publicado\n');
  }

  console.log('  ──────────────────────────────────────────────────────────────────');
  console.log(`  ${published.length} ficheros publicados · ${errors.length} errores · ${warns.length} avisos`);
  console.log('  ──────────────────────────────────────────────────────────────────\n');
}

if (errors.length) process.exit(1);

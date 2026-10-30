/**
 * CARQUIDEC · tools/audit/quality.mjs
 * ---------------------------------------------------------------------------
 * Auditoría de calidad, SEO técnico y presupuesto de rendimiento.
 *
 *   Rendimiento
 *     · Peso real (comprimido con gzip, como lo envía un servidor moderno) de
 *       HTML, CSS, JS, fuentes y la imagen del primer pantallazo.
 *     · Peso total de la página sin contar vídeo ni audio del archivo.
 *     · Nº de peticiones, formatos de imagen, riesgo de CLS y de bloqueo.
 *
 *   SEO técnico
 *     · Título, descripción, canónica, robots, Open Graph y Twitter.
 *     · JSON-LD válido con los tipos esperados.
 *     · sitemap.xml y robots.txt coherentes con los ficheros reales.
 *     · Manifiesto web e iconos presentes.
 *
 *   node tools/audit/quality.mjs [--json] [--strict]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const ROOT = fileURLToPath(new URL('../..', import.meta.url));
const JSON_OUT = process.argv.includes('--json');
const STRICT = process.argv.includes('--strict');

const PAGES = [
  'index.html', 'about.html', 'blog.html', 'contacto.html', 'ecosistema.html',
  'proyecto-01-villa.html', 'proyecto-02-hotel.html', 'proyecto-03-comercial.html',
  'proyecto-04-oficina.html', 'proyecto-05-bano.html'
];

const SITE = 'https://carquidec.com';
/** Presupuestos declarados (en bytes). Ver UNIVERSAL_PREMIUM_WEB_SPEC.md */
const BUDGET = {
  critical: 1_200_000,   // ruta crítica: HTML + CSS + JS + fuentes + héroe
  media: 3_500_000,      // peso total de imágenes de la página
  html: 160_000
};

const size = async (p) => {
  try { return (await fs.stat(path.join(ROOT, p))).size; } catch { return 0; }
};
const gz = async (p) => {
  try {
    const buf = await fs.readFile(path.join(ROOT, p));
    return zlib.gzipSync(buf, { level: 9 }).length;
  } catch { return 0; }
};
const fmt = (b) => (b >= 1e6 ? (b / 1e6).toFixed(2) + ' MB' : (b / 1e3).toFixed(1) + ' kB');

/* ---------------------------------------------------------------------------
   sitemap / robots / manifiesto
   ------------------------------------------------------------------------ */
const sitemap = await fs.readFile(path.join(ROOT, 'sitemap.xml'), 'utf8');
const robots = await fs.readFile(path.join(ROOT, 'robots.txt'), 'utf8');
const manifestFile = JSON.parse(await fs.readFile(path.join(ROOT, 'site.webmanifest'), 'utf8'));

const globalIssues = [];
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const url of sitemapUrls) {
  const rel = url.replace(SITE, '').replace(/^\//, '') || 'index.html';
  if (!(await size(rel))) globalIssues.push({ level: 'error', kind: 'sitemap', detail: `${url} no corresponde a ningún fichero` });
}
for (const page of PAGES) {
  if (sitemapUrls.includes(`${SITE}/${page}`) === false && page !== 'index.html') {
    globalIssues.push({ level: 'error', kind: 'sitemap', detail: `${page} no está en sitemap.xml` });
  }
}
if (!/Sitemap:\s*https:\/\/carquidec\.com\/sitemap\.xml/.test(robots)) {
  globalIssues.push({ level: 'error', kind: 'robots', detail: 'robots.txt no declara el sitemap' });
}
for (const icon of manifestFile.icons || []) {
  if (!(await size(icon.src))) globalIssues.push({ level: 'error', kind: 'manifest', detail: `icono ausente: ${icon.src}` });
}

/* ---------------------------------------------------------------------------
   Análisis por página
   ------------------------------------------------------------------------ */
const report = [];
const entries = [];

for (const page of PAGES) {
  const html = await fs.readFile(path.join(ROOT, page), 'utf8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const issues = [];

  /* --- Metadatos ------------------------------------------------------- */
  const title = doc.querySelector('title')?.textContent.trim() || '';
  const desc = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
  const robotsMeta = doc.querySelector('meta[name="robots"]')?.getAttribute('content') || '';
  const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';

  if (!canonical.startsWith(SITE)) issues.push({ level: 'error', kind: 'canonical', detail: canonical || 'ausente' });
  if (!/index,follow/.test(robotsMeta)) issues.push({ level: 'error', kind: 'robots-meta', detail: robotsMeta || 'ausente' });
  if (!ogImage) issues.push({ level: 'error', kind: 'og-image', detail: 'sin imagen social' });
  else if (!(await size(ogImage.replace(SITE + '/', '')))) issues.push({ level: 'error', kind: 'og-image', detail: `${ogImage} no existe` });
  for (const prop of ['og:title', 'og:description', 'og:url', 'og:type', 'twitter:card', 'twitter:title']) {
    const val = doc.querySelector(`meta[property="${prop}"], meta[name="${prop}"]`);
    if (!val || !val.getAttribute('content')) issues.push({ level: 'error', kind: 'meta-social', detail: `falta ${prop}` });
  }
  if (title.length > 65) issues.push({ level: 'warn', kind: 'titulo-largo', detail: `${title.length} caracteres` });
  if (desc.length > 165) issues.push({ level: 'warn', kind: 'descripcion-larga', detail: `${desc.length} caracteres` });

  /* --- JSON-LD --------------------------------------------------------- */
  const ld = [...doc.querySelectorAll('script[type="application/ld+json"]')];
  if (!ld.length) issues.push({ level: 'error', kind: 'json-ld', detail: 'sin datos estructurados' });
  for (const block of ld) {
    try {
      const data = JSON.parse(block.textContent);
      const types = (data['@graph'] || [data]).map((n) => [].concat(n['@type'])).flat();
      if (!types.length) issues.push({ level: 'error', kind: 'json-ld', detail: 'sin @type' });
      if (JSON.stringify(data).includes('undefined')) issues.push({ level: 'warn', kind: 'json-ld', detail: 'contiene valores undefined' });
    } catch (e) {
      issues.push({ level: 'error', kind: 'json-ld', detail: `JSON inválido: ${e.message}` });
    }
  }

  /* --- Presupuesto de rendimiento -------------------------------------- */
  let critical = (await gz(page)) + Buffer.byteLength([...doc.querySelectorAll('style')].map((s) => s.textContent).join(''), 'utf8');
  let media = 0;
  let requests = 0;
  let eagerBytes = 0;
  let lazyBytes = 0;
  const formats = new Set();

  const addAsset = async (url, { eager = false, count = true } = {}) => {
    const bytes = await size(url);
    if (!bytes) return 0;
    if (count) requests++;
    if (eager) eagerBytes += bytes; else lazyBytes += bytes;
    return bytes;
  };

  for (const link of doc.querySelectorAll('link[rel="stylesheet"][href]')) {
    const href = link.getAttribute('href');
    critical += await gz(href);
    requests++;
  }
  for (const link of doc.querySelectorAll('link[rel="preload"][as="font"]')) {
    critical += await size(link.getAttribute('href'));
    requests++;
  }
  for (const script of doc.querySelectorAll('script[src]')) {
    const src = script.getAttribute('src');
    const inline = script.textContent.length;
    critical += (await gz(src)) + Buffer.byteLength(script.textContent || '');
    if (await size(src)) requests++;
    void inline;
  }

  for (const img of doc.querySelectorAll('img')) {
    // Tamaño real del candidato más probable: la mayor variante WebP de su srcset
    const srcset = img.closest('picture')?.querySelector('source[type="image/webp"]')?.getAttribute('srcset') || '';
    let chosen = img.getAttribute('src');
    if (srcset) {
      const parts = srcset.split(',').map((p) => p.trim().split(/\s+/));
      chosen = parts[parts.length - 1][0];
    }
    const bytes = await addAsset(chosen, { eager: img.getAttribute('loading') !== 'lazy' });
    media += bytes;
    if (srcset) formats.add('webp');
    if (img.closest('picture')?.querySelector('source[type="image/avif"]')) formats.add('avif');
    if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
      issues.push({ level: 'error', kind: 'cls', detail: `imagen sin width/height: ${chosen}` });
    }
  }

  for (const poster of doc.querySelectorAll('video[poster]')) {
    media += await addAsset(poster.getAttribute('poster'), { eager: false });
  }

  critical += eagerBytes;

  if (critical > BUDGET.critical) issues.push({ level: 'warn', kind: 'presupuesto', detail: `ruta crítica ${fmt(critical)} > ${fmt(BUDGET.critical)}` });
  if (media > BUDGET.media) issues.push({ level: 'warn', kind: 'presupuesto', detail: `imágenes ${fmt(media)} > ${fmt(BUDGET.media)}` });
  if (await size(page) > BUDGET.html) issues.push({ level: 'warn', kind: 'presupuesto', detail: `HTML ${fmt(await size(page))} > ${fmt(BUDGET.html)}` });

  // Scripts que bloquean el render
  for (const script of doc.querySelectorAll('head script[src]')) {
    if (!script.hasAttribute('defer') && !script.hasAttribute('async') && !script.hasAttribute('type')) {
      issues.push({ level: 'error', kind: 'bloqueante', detail: `script bloqueante en <head>: ${script.getAttribute('src')}` });
    }
  }
  // Recursos de terceros
  const thirdParty = new Set();
  for (const el of doc.querySelectorAll('[src], [href]')) {
    const url = el.getAttribute('src') || el.getAttribute('href');
    if (/^https?:\/\//.test(url) && !url.startsWith(SITE)) thirdParty.add(new URL(url).host);
  }

  entries.push({
    page,
    critical,
    media,
    requests,
    formats: [...formats].sort().join('+'),
    thirdParty: [...thirdParty],
    scores: {
      title: title.length,
      description: desc.length
    }
  });

  dom.window.close();
  report.push({ page, issues, critical, media, requests });
}

/* ---------------------------------------------------------------------------
   Informe
   ------------------------------------------------------------------------ */
const totalBytes = entries.reduce((a, e) => a + e.critical, 0);
const avgCritical = totalBytes / entries.length;
const heaviest = [...entries].sort((a, b) => b.critical - a.critical)[0];
const totalIssues = report.reduce((a, r) => a + r.issues.filter((i) => i.level === 'error').length, 0)
  + globalIssues.filter((i) => i.level === 'error').length;
const totalWarns = report.reduce((a, r) => a + r.issues.filter((i) => i.level === 'warn').length, 0)
  + globalIssues.filter((i) => i.level === 'warn').length;

if (JSON_OUT) {
  console.log(JSON.stringify({ globalIssues, report, entries }, null, 2));
} else {
  console.log('\n  ══════════════════════════════════════════════════════════════════');
  console.log('   CALIDAD, SEO Y PRESUPUESTO DE RENDIMIENTO · CARQUIDEC');
  console.log('  ══════════════════════════════════════════════════════════════════\n');

  console.log('  Peso de la ruta crítica (gzip, sin vídeo ni audio)\n');
  console.log('    página'.padEnd(30), 'ruta crítica'.padStart(13), 'imágenes'.padStart(11),
    'peticiones'.padStart(11), '  formatos');
  console.log('    ' + '─'.repeat(74));
  for (const e of entries) {
    const flag = e.media > 3_500_000 ? ' !' : '';
    console.log('    ' + e.page.padEnd(28),
      fmt(e.critical).padStart(13),
      fmt(e.media).padStart(11),
      String(e.requests).padStart(11),
      '  ' + e.formats + flag);
  }
  console.log('    ' + '─'.repeat(74));
  console.log(`    media ${fmt(avgCritical)} · la más pesada: ${heaviest.page} (${fmt(heaviest.critical)})`);

  console.log('\n  Terceros declarados en el marcado\n');
  const hosts = new Set(entries.flatMap((e) => e.thirdParty));
  console.log('    ' + (hosts.size ? [...hosts].join(', ') : 'ninguno — todo se sirve desde el propio origen'));

  if (globalIssues.length) {
    console.log('\n  Ficheros de sitio\n');
    for (const i of globalIssues) console.log(`    ${i.level === 'error' ? '✘' : '·'} ${i.kind}: ${i.detail}`);
  } else {
    console.log('\n  Ficheros de sitio\n    ✔ sitemap.xml, robots.txt y site.webmanifest coherentes con el repositorio');
  }

  console.log('\n  Incidencias por página\n');
  let any = false;
  for (const { page, issues } of report) {
    if (!issues.length) { console.log(`    ✔ ${page}`); continue; }
    any = true;
    console.log(`    • ${page}`);
    for (const i of issues) console.log(`        ${i.level === 'error' ? '✘' : '·'} ${i.kind}: ${i.detail}`);
  }
  if (!any) console.log('    (sin avisos)');

  console.log('\n  ──────────────────────────────────────────────────────────────────');
  console.log(`  ${PAGES.length} páginas · ${totalIssues} errores · ${totalWarns} avisos`);
  console.log('  ──────────────────────────────────────────────────────────────────\n');
}

if (STRICT && totalIssues) process.exit(1);

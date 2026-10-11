/**
 * CARQUIDEC · tools/audit/a11y.mjs
 * ---------------------------------------------------------------------------
 * Auditoría de accesibilidad real: axe-core sobre jsdom, más una batería de
 * comprobaciones propias que axe no cubre en un entorno sin motor de pintado
 * (jerarquía de encabezados, nombres accesibles, contraste calculado a partir
 * de los tokens de color, idioma, formularios, tabulación…).
 *
 *   node tools/audit/a11y.mjs            # informe legible
 *   node tools/audit/a11y.mjs --json     # salida máquina (CI)
 *   node tools/audit/a11y.mjs --strict   # falla si hay cualquier violación
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { JSDOM, VirtualConsole } from 'jsdom';
import axeCore from 'axe-core';

const axe = axeCore.default || axeCore;

const ROOT = path.resolve(new URL('../..', import.meta.url).pathname);
const JSON_OUT = process.argv.includes('--json');
const STRICT = process.argv.includes('--strict');
/**
 * --baseline audita la versión del último commit (git HEAD) en lugar del disco.
 * Sirve para medir la mejora real: «antes» frente a «después».
 */
const BASELINE = process.argv.includes('--baseline');

const PAGES = [
  'index.html', 'about.html', 'blog.html', 'contacto.html', 'ecosistema.html',
  'proyecto-01-villa.html', 'proyecto-02-hotel.html', 'proyecto-03-comercial.html',
  'proyecto-04-oficina.html', 'proyecto-05-bano.html'
];

/* ---------------------------------------------------------------------------
   Contraste WCAG calculado sobre los tokens reales de la hoja de estilos
   ------------------------------------------------------------------------ */
function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16));
}
const lum = ([r, g, b]) => {
  const f = (v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const contrast = (a, b) => {
  const [l1, l2] = [lum(hexToRgb(a)), lum(hexToRgb(b))].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

async function tokenContrast() {
  const css = await fs.readFile(path.join(ROOT, 'assets/css/carquidec.css'), 'utf8');
  const root = css.slice(css.indexOf(':root'), css.indexOf('}', css.indexOf(':root')));
  const token = (name) => {
    const m = root.match(new RegExp(`--${name}:\\s*(#[0-9a-f]{3,8})`, 'i'));
    return m ? m[1] : null;
  };
  const bg = token('bg');
  const pairs = [
    ['texto principal sobre fondo', token('t'), bg, 4.5],
    ['texto secundario (--td) sobre fondo', token('td'), bg, 4.5],
    ['acento (--ac) sobre fondo', token('ac'), bg, 4.5],
    ['oro (--gold) sobre fondo', token('gold'), bg, 3],
    ['oro sobre superficie (--s)', token('gold'), token('s'), 3],
    ['carbón sobre oro (botón principal)', '#0a0a09', token('gold'), 4.5]
  ];
  return pairs
    .filter(([, a, b]) => a && b)
    .map(([label, a, b, min]) => {
      const ratio = +contrast(a, b).toFixed(2);
      return { label, foreground: a, background: b, ratio, min, pass: ratio >= min };
    });
}

/* ---------------------------------------------------------------------------
   Comprobaciones propias sobre el DOM
   ------------------------------------------------------------------------ */
function domChecks(document, html, css) {
  const issues = [];
  const add = (level, rule, message) => issues.push({ level, rule, message });

  // Idioma declarado
  const lang = document.documentElement.getAttribute('lang');
  if (!lang) add('error', 'html-lang', '<html> sin atributo lang');
  else if (!/^[a-z]{2}(-[A-Za-z]{2,})?$/.test(lang)) add('warn', 'html-lang', `lang poco habitual: "${lang}"`);

  // Título y descripción
  const title = document.querySelector('title');
  const titleLen = title ? title.textContent.trim().length : 0;
  if (!title) add('error', 'title', 'Falta <title>');
  else if (titleLen < 15 || titleLen > 65) add('warn', 'title-length', `El título mide ${titleLen} caracteres (ideal 15–65)`);

  const desc = document.querySelector('meta[name="description"]');
  const dl = desc ? desc.getAttribute('content').length : 0;
  if (!desc) add('error', 'meta-description', 'Falta meta description');
  else if (dl < 70 || dl > 165) add('warn', 'meta-description-length', `La descripción mide ${dl} caracteres (ideal 70–165)`);

  // Enlace de salto al contenido
  const skip = document.querySelector('a.cq-skip, a[href^="#"][class*="skip"]');
  if (!skip) add('error', 'skip-link', 'No hay enlace de salto al contenido principal');
  else {
    const target = document.querySelector(skip.getAttribute('href'));
    if (!target) add('error', 'skip-link-target', `El enlace de salto apunta a ${skip.getAttribute('href')}, que no existe`);
  }

  // Un solo h1 y jerarquía sin saltos
  const h1s = [...document.querySelectorAll('h1')];
  if (h1s.length === 0) add('error', 'h1', 'La página no tiene <h1>');
  if (h1s.length > 1) add('warn', 'h1-multiple', `Hay ${h1s.length} elementos <h1>`);
  let prev = 0;
  const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')];
  for (const h of headings) {
    const level = +h.tagName[1];
    if (prev && level > prev + 1) add('warn', 'heading-order', `Salto de nivel h${prev} → h${level} en «${h.textContent.trim().slice(0, 42)}»`);
    prev = level;
  }

  // Imágenes con alt útil
  for (const img of document.querySelectorAll('img')) {
    if (!img.hasAttribute('alt')) add('error', 'img-alt', `Imagen sin alt: ${(img.getAttribute('src') || '').slice(0, 60)}`);
    else if (img.getAttribute('alt').trim() === '' && !img.closest('[aria-hidden="true"]')) {
      add('warn', 'img-alt-empty', `Alt vacío en ${(img.getAttribute('src') || '').slice(0, 60)} (correcto solo si es decorativa)`);
    }
    if (img.getAttribute('alt') && /\.(jpg|png|webp|avif)$/i.test(img.getAttribute('alt'))) {
      add('warn', 'img-alt-filename', `El alt parece un nombre de fichero: ${img.getAttribute('alt')}`);
    }
  }

  // Nombres accesibles en controles
  for (const el of document.querySelectorAll('a, button, [role="button"]')) {
    if (el.getAttribute('aria-hidden') === 'true') continue;
    const name = (el.textContent || '').trim()
      || el.getAttribute('aria-label')
      || el.getAttribute('title')
      || (el.querySelector('img[alt]') ? el.querySelector('img[alt]').getAttribute('alt') : '');
    if (!name) add('error', 'accessible-name', `Control sin nombre accesible: <${el.tagName.toLowerCase()} class="${el.className}">`);
  }

  // Campos de formulario etiquetados
  for (const field of document.querySelectorAll('input:not([type="hidden"]), textarea, select')) {
    const id = field.getAttribute('id');
    const labelled = (id && document.querySelector(`label[for="${id}"]`))
      || field.getAttribute('aria-label')
      || field.getAttribute('aria-labelledby')
      || field.closest('label');
    if (!labelled) add('error', 'form-label', `Campo sin etiqueta: ${field.outerHTML.slice(0, 80)}`);
  }

  // Identificadores duplicados
  const ids = new Map();
  for (const el of document.querySelectorAll('[id]')) {
    ids.set(el.id, (ids.get(el.id) || 0) + 1);
  }
  for (const [id, count] of ids) if (count > 1) add('error', 'dup-id', `id duplicado: #${id} (${count} veces)`);

  // Enlaces externos seguros
  for (const a of document.querySelectorAll('a[target="_blank"]')) {
    if (!/noopener/.test(a.getAttribute('rel') || '')) add('error', 'target-blank-rel', `Enlace externo sin rel=noopener: ${a.getAttribute('href')}`);
  }

  // Enlaces vacíos o de relleno
  for (const a of document.querySelectorAll('a[href="#"], a[href=""]')) {
    add('error', 'dead-link', `Enlace sin destino: ${a.outerHTML.slice(0, 70)}`);
  }

  // Elementos interactivos en zonas aria-hidden
  for (const el of document.querySelectorAll('[aria-hidden="true"]')) {
    if (el.querySelector('a, button, input, [tabindex]:not([tabindex="-1"])')) {
      add('error', 'aria-hidden-focus', 'Contenedor aria-hidden con elementos enfocables dentro');
    }
  }

  // Landmarks
  if (!document.querySelector('main')) add('warn', 'landmark-main', 'No hay región <main>');
  if (!document.querySelector('nav[aria-label], nav')) add('warn', 'landmark-nav', 'No hay <nav>');

  // Reglas de movimiento reducido y transiciones de vista presentes
  if (!/prefers-reduced-motion/.test(html + css)) add('error', 'reduced-motion', 'No se respeta prefers-reduced-motion');
  if (!/prefers-contrast/.test(html + css)) add('error', 'prefers-contrast', 'No se contempla prefers-contrast');
  if (!/prefers-reduced-transparency|color-scheme|print/.test(html + css)) add('warn', 'print-styles', 'Sin estilos de impresión');

  // Enlaces de idioma anunciados
  const langBar = document.querySelector('.lang-bar');
  if (langBar && langBar.getAttribute('role') !== 'group' && !/role="group"/.test(html)) {
    add('warn', 'lang-group', 'El selector de idioma no está agrupado semánticamente');
  }

  return issues;
}

/* ---------------------------------------------------------------------------
   Ejecución
   ------------------------------------------------------------------------ */
const report = [];
const palette = await tokenContrast();
let siteCss = '';
for (const file of ['assets/css/carquidec.css', 'assets/css/fonts.css']) {
  try { siteCss += await fs.readFile(path.join(ROOT, file), 'utf8'); } catch { /* opcional */ }
}

function gitShow(file) {
  try {
    return execSync(`git show HEAD:${JSON.stringify(file)}`, { cwd: ROOT, maxBuffer: 64 * 1024 * 1024 }).toString('utf8');
  } catch { return null; }
}

for (const page of PAGES) {
  const html = BASELINE ? (gitShow(page) || '') : await fs.readFile(path.join(ROOT, page), 'utf8');
  if (!html) continue;
  const virtualConsole = new VirtualConsole();
  const dom = new JSDOM(html, {
    virtualConsole,
    runScripts: 'outside-only',   // permite window.eval sin ejecutar los <script> de la página
    pretendToBeVisual: true,
    url: 'https://carquidec.com/' + page
  });
  const { window } = dom;

  window.eval(axe.source);
  const results = await window.axe.run(window.document, {
    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'] },
    rules: {
      // Estas reglas necesitan un motor de pintado real: se auditan aparte
      'color-contrast': { enabled: false },
      'region': { enabled: false },
      'landmark-one-main': { enabled: false },
      'page-has-heading-one': { enabled: true }
    }
  });

  const violations = results.violations.map((v) => ({
    id: v.id,
    impact: v.impact,
    help: v.help,
    nodes: v.nodes.slice(0, 3).map((n) => n.target.join(' ')),
    count: v.nodes.length
  }));

  const own = domChecks(window.document, html, BASELINE ? '' : siteCss);
  dom.window.close();

  report.push({ page, violations, own });
}

/* --- Informe ------------------------------------------------------------- */
if (JSON_OUT) {
  console.log(JSON.stringify({ contrast: palette, report }, null, 2));
} else {
  console.log('\n  ══════════════════════════════════════════════════════════════════');
  console.log(`   AUDITORÍA DE ACCESIBILIDAD · CARQUIDEC${BASELINE ? '  (línea base: commit anterior)' : ''}`);
  console.log('  ══════════════════════════════════════════════════════════════════\n');

  console.log('  Contraste de la paleta (WCAG 2.2)');
  for (const c of palette) {
    console.log(`    ${c.pass ? '✔' : '✘'} ${c.ratio.toFixed(2).padStart(5)}:1  ${c.label.padEnd(42)} (mínimo ${c.min}:1)`);
  }

  let errors = 0;
  let warnings = 0;

  for (const { page, violations, own } of report) {
    const ownErrors = own.filter((i) => i.level === 'error');
    const ownWarnings = own.filter((i) => i.level === 'warn');
    errors += violations.length + ownErrors.length;
    warnings += ownWarnings.length;
    const total = violations.length + ownErrors.length + ownWarnings.length;
    console.log(`\n  ${total === 0 ? '✔' : '•'} ${page}  ${total === 0 ? 'sin incidencias' : `${violations.length + ownErrors.length} errores · ${ownWarnings.length} avisos`}`);
    for (const v of violations) {
      console.log(`      ✘ axe:${v.id} (${v.impact}) ×${v.count} — ${v.help}`);
      v.nodes.forEach((n) => console.log(`         ↳ ${n}`));
    }
    for (const i of ownErrors) console.log(`      ✘ ${i.rule}: ${i.message}`);
    for (const i of ownWarnings) console.log(`      · ${i.rule}: ${i.message}`);
  }

  const contrastFails = palette.filter((c) => !c.pass).length;
  errors += contrastFails;

  console.log('\n  ──────────────────────────────────────────────────────────────────');
  console.log(`  ${report.length} páginas · ${errors} errores · ${warnings} avisos · ${contrastFails} fallos de contraste`);
  console.log('  ──────────────────────────────────────────────────────────────────\n');
}

if (STRICT) {
  const failed = report.some((r) => r.violations.length || r.own.some((i) => i.level === 'error'))
    || palette.some((c) => !c.pass);
  process.exit(failed ? 1 : 0);
}

/**
 * CARQUIDEC · tools/audit/links.mjs
 * ---------------------------------------------------------------------------
 * Integridad de enlaces y recursos:
 *   · Cada enlace interno apunta a un fichero existente.
 *   · Cada ancla (#id) existe en la página de destino (incluidas otras páginas).
 *   · No hay enlaces vacíos ni placeholders sin sustituir.
 *   · Los recursos (imágenes, CSS, JS, fuentes, vídeo, audio) existen de verdad.
 *   · Los enlaces externos llevan rel=noopener y su URL es válida.
 *
 *   node tools/audit/links.mjs [--json] [--strict]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
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

const exists = async (p) => { try { await fs.access(path.join(ROOT, p)); return true; } catch { return false; } };
const decode = (u) => decodeURIComponent(u.split('#')[0].split('?')[0]);

/* Índice de anclas por página (para validar enlaces cruzados) */
const anchors = new Map();
for (const page of PAGES) {
  const html = await fs.readFile(path.join(ROOT, page), 'utf8');
  const dom = new JSDOM(html);
  anchors.set(page, new Set([...dom.window.document.querySelectorAll('[id]')].map((el) => el.id)));
  dom.window.close();
}

const results = [];
let failures = 0;

for (const page of PAGES) {
  const html = await fs.readFile(path.join(ROOT, page), 'utf8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const issues = [];

  const checkResource = async (url, what, selector) => {
    if (/^(https?:|data:|mailto:|tel:|javascript:)/.test(url)) return;
    const clean = decode(url);
    if (!clean) return;
    if (!(await exists(clean))) issues.push({ level: 'error', kind: 'recurso-perdido', detail: `${what}: ${url} (${selector})` });
  };

  /* --- Enlaces --------------------------------------------------------- */
  for (const a of doc.querySelectorAll('a[href]')) {
    const href = a.getAttribute('href').trim();
    const label = (a.textContent || '').trim().slice(0, 40) || a.getAttribute('aria-label') || '(sin texto)';

    if (href === '#' || href === '') {
      issues.push({ level: 'error', kind: 'enlace-muerto', detail: `«${label}» no lleva a ninguna parte` });
      continue;
    }
    if (/^javascript:/i.test(href)) {
      issues.push({ level: 'error', kind: 'enlace-js', detail: `«${label}» usa javascript:` });
      continue;
    }
    if (/^(mailto|tel):/.test(href)) {
      const value = href.replace(/^(mailto|tel):/, '');
      if (!/^[^@\s]+@[^@\s.]+\.[a-z]{2,}$/i.test(value) && !/^\+?\d[\d\s-]{6,}$/.test(value)) {
        issues.push({ level: 'error', kind: 'contacto-invalido', detail: `${href}` });
      }
      continue;
    }
    if (/^https?:/i.test(href)) {
      if (a.getAttribute('target') === '_blank' && !/noopener/.test(a.getAttribute('rel') || '')) {
        issues.push({ level: 'error', kind: 'externo-inseguro', detail: `${href} sin rel=noopener` });
      }
      if (/YOUR_FORM_ID|example\.com|localhost|127\.0\.0\.1/.test(href)) {
        issues.push({ level: 'error', kind: 'placeholder', detail: `URL sin sustituir: ${href}` });
      }
      try { new URL(href); } catch { issues.push({ level: 'error', kind: 'url-invalida', detail: href }); }
      continue;
    }

    // Enlace interno (fichero y, si procede, ancla)
    const [filePart, frag] = href.split('#');
    const target = filePart === '' ? page : decode(filePart);
    if (target && !(await exists(target))) {
      issues.push({ level: 'error', kind: 'enlace-roto', detail: `«${label}» → ${href}` });
    } else if (frag) {
      const targetPage = target === '' ? page : target;
      const known = anchors.get(targetPage);
      if (known && !known.has(decodeURIComponent(frag))) {
        issues.push({ level: 'error', kind: 'ancla-perdida', detail: `«${label}» → ${href} (no existe #${frag} en ${targetPage})` });
      }
    }
  }

  /* --- Recursos -------------------------------------------------------- */
  for (const el of doc.querySelectorAll('img[src]')) await checkResource(el.getAttribute('src'), 'imagen', el.getAttribute('alt') || '');
  for (const el of doc.querySelectorAll('img[srcset], source[srcset]')) {
    for (const part of el.getAttribute('srcset').split(',')) {
      const url = part.trim().split(/\s+/)[0];
      await checkResource(url, 'srcset', '');
    }
  }
  for (const el of doc.querySelectorAll('video[poster]')) await checkResource(el.getAttribute('poster'), 'póster', '');
  for (const el of doc.querySelectorAll('source[src]')) await checkResource(el.getAttribute('src'), 'medio', '');
  for (const el of doc.querySelectorAll('link[href]')) {
    const rel = el.getAttribute('rel') || '';
    if (/stylesheet|icon|manifest|preload/.test(rel)) await checkResource(el.getAttribute('href'), rel, '');
  }
  for (const el of doc.querySelectorAll('script[src]')) await checkResource(el.getAttribute('src'), 'script', '');

  /* --- Datos de contacto coherentes ------------------------------------ */
  const html2 = html;
  const wa = [...new Set([...html2.matchAll(/wa\.me\/(\d+)/g)].map((m) => m[1]))];
  if (wa.length > 1) issues.push({ level: 'error', kind: 'whatsapp-incoherente', detail: `Varios números: ${wa.join(', ')}` });
  const emails = [...new Set([...html2.matchAll(/[\w.+-]+@[\w-]+\.[a-z]{2,}/gi)].map((m) => m[0].toLowerCase()))]
    .filter((e) => !/tu@email\.com|example\.com/.test(e));
  if (emails.length > 1) issues.push({ level: 'error', kind: 'email-incoherente', detail: `Varios correos: ${emails.join(', ')}` });

  failures += issues.filter((i) => i.level === 'error').length;
  results.push({ page, issues });
  dom.window.close();
}

if (JSON_OUT) {
  console.log(JSON.stringify(results, null, 2));
} else {
  console.log('\n  ══════════════════════════════════════════════════════════════════');
  console.log('   AUDITORÍA DE ENLACES Y RECURSOS · CARQUIDEC');
  console.log('  ══════════════════════════════════════════════════════════════════\n');
  for (const { page, issues } of results) {
    if (!issues.length) { console.log(`  ✔ ${page}  todos los enlaces y recursos responden`); continue; }
    console.log(`  ✘ ${page}  ${issues.length} incidencia(s)`);
    for (const i of issues) console.log(`      ✘ ${i.kind}: ${i.detail}`);
  }
  console.log('\n  ──────────────────────────────────────────────────────────────────');
  console.log(`  ${results.length} páginas · ${failures} incidencias`);
  console.log('  ──────────────────────────────────────────────────────────────────\n');
}

if (STRICT && failures) process.exit(1);

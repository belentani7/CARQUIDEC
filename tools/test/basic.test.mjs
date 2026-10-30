/**
 * CARQUIDEC · tools/test/basic.test.mjs
 * ---------------------------------------------------------------------------
 * Tests básicos con node:test (corren con `npm test` desde tools/, es decir
 * `node --test test/`):
 *
 *   1. `esc`      — escape de entidades HTML del canal de construcción.
 *   2. `decode`   — normalización de rutas de recursos (%xx, «./», espacios).
 *   3. `replaceTags` — escáner de etiquetas consciente de comillas: un «>»
 *      dentro de un atributo (p. ej. el favicon en data-URI SVG) no parte la
 *      etiqueta. Es el caso documentado en scripts/lib/html.mjs.
 *   4. sitemap.xml — cada URL publicada existe como fichero real del sitio.
 *
 * Las utilidades 1-3 son el código real que usa scripts/build.mjs (extraídas a
 * scripts/lib/html.mjs sin cambio de comportamiento: la salida de
 * `node scripts/build.mjs --check` es idéntica antes y después).
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { decode, esc, replaceTags } from '../../scripts/lib/html.mjs';

const ROOT = fileURLToPath(new URL('../..', import.meta.url));

test('esc escapa los caracteres reservados de HTML', () => {
  assert.equal(esc('a & b'), 'a &amp; b');
  assert.equal(esc('<b class="x">'), '&lt;b class=&quot;x&quot;&gt;');
  assert.equal(esc('>'), '&gt;');
  // acepta no-cadenas (el build pasa números y objetos): title/description
  assert.equal(esc(1200), '1200');
});

test('decode normaliza rutas de recursos', () => {
  assert.equal(decode('%20assets/img/foto.jpg'), 'assets/img/foto.jpg');
  assert.equal(decode('./assets/css/carquidec.css'), 'assets/css/carquidec.css');
  assert.equal(decode('Nueva%20carpeta/video.mp4'), 'Nueva carpeta/video.mp4');
  assert.equal(decode('  assets/media/video/casa-180-recorrido.mp4  '), 'assets/media/video/casa-180-recorrido.mp4');
});

test('replaceTags respeta los «>» dentro de atributos entrecomillados', () => {
  // El favicon real del sitio es un SVG en data-URI que contiene «>»:
  // un escáner ingenuo partiría aquí la etiqueta.
  const favicon = `<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><path d='M0 0'/></svg>">`;
  const html = `<!DOCTYPE html><head><meta charset="utf-8">${favicon}<title>t</title></head>`;
  const out = replaceTags(html, 'link', (tag) => (/rel="icon"/.test(tag) ? '<link rel="icon" href="nuevo.png">' : null));
  assert.equal(out, `<!DOCTYPE html><head><meta charset="utf-8"><link rel="icon" href="nuevo.png"><title>t</title></head>`);
});

test('replaceTags deja la etiqueta intacta cuando test devuelve null', () => {
  const html = '<link rel="stylesheet" href="a.css"><link rel="icon" href="b.ico">';
  const out = replaceTags(html, 'link', (tag) => (/rel="icon"/.test(tag) ? null : ''));
  assert.equal(out, '<link rel="icon" href="b.ico">');
});

test('sitemap.xml: cada URL publicada existe como fichero del sitio', async () => {
  const xml = await readFile(path.join(ROOT, 'sitemap.xml'), 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  assert.ok(locs.length >= 10, `el sitemap lista ${locs.length} URLs`);
  for (const loc of locs) {
    const u = new URL(loc);
    const file = u.pathname === '/' ? 'index.html' : u.pathname.slice(1);
    await assert.doesNotReject(
      readFile(path.join(ROOT, file)),
      `el sitemap anuncia ${loc} pero ${file} no existe`
    );
  }
});

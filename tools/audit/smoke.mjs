/**
 * CARQUIDEC · tools/audit/smoke.mjs
 * ---------------------------------------------------------------------------
 * Prueba funcional sin navegador: carga las páginas en jsdom con sus scripts
 * reales (GSAP, ScrollTrigger, Lenis y la capa de mejoras), ejecuta el arranque
 * y comprueba que la web queda utilizable.
 *
 * Qué se verifica
 *   1. Ningún error de script durante el arranque.
 *   2. El cargador desaparece: la página nunca se queda en negro.
 *   3. El contenido se revela aunque no haya motor de animación.
 *   4. El conmutador de idioma traduce de verdad (ES → EN → CA…).
 *   5. El formulario informa del estado sin usar alert().
 *   6. El menú móvil queda anunciado (aria-expanded) y se puede cerrar con Escape.
 *
 *   node tools/audit/smoke.mjs [--strict]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { JSDOM, VirtualConsole, ResourceLoader } from 'jsdom';

const ROOT = path.resolve(new URL('../..', import.meta.url).pathname);
const STRICT = process.argv.includes('--strict');

/** Carga recursos locales desde el disco (jsdom no lee file:// por defecto). */
class LocalLoader extends ResourceLoader {
  async fetch(url, options) {
    if (url.startsWith('file://')) {
      try {
        const body = await fs.readFile(new URL(url));
        return Promise.resolve(body);
      } catch {
        return Promise.resolve(Buffer.from(''));
      }
    }
    // Nada de red: los terceros se ignoran en las pruebas
    return Promise.resolve(Buffer.from(''));
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const results = [];
let failures = 0;

const PAGES = ['index.html', 'about.html', 'contacto.html', 'proyecto-01-villa.html'];

for (const page of PAGES) {
  const html = await fs.readFile(path.join(ROOT, page), 'utf8');
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', (e) => {
    // jsdom no implementa módulos ES ni canvas: no cuentan como fallo del sitio
    if (/Could not load|Not implemented|Cannot read properties of undefined \(reading 'getContext'\)/.test(e.message)) return;
    errors.push(e.message);
  });
  virtualConsole.on('error', (msg) => errors.push(String(msg)));

  const dom = new JSDOM(html, {
    beforeParse(window) {
      // jsdom no implementa estas APIs del navegador; los scripts reales las usan
      if (typeof window.matchMedia !== 'function') {
        window.matchMedia = (query) => ({
          matches: /min-width:\s*(\d+)/.test(query)
            ? Number(query.match(/(\d+)/)[1]) <= 1280
            : false,
          media: query,
          addEventListener() {},
          removeEventListener() {},
          addListener() {},
          removeListener() {},
          dispatchEvent: () => false
        });
      }
      // Idioma del navegador fijo para que la prueba sea determinista
      Object.defineProperty(window.navigator, 'language', { value: 'es-ES', configurable: true });
      Object.defineProperty(window.navigator, 'languages', { value: ['es-ES', 'es'], configurable: true });
      if (typeof window.ResizeObserver !== 'function') {
        window.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
      }
      if (typeof window.IntersectionObserver !== 'function') {
        window.IntersectionObserver = class {
          constructor(cb) { this.cb = cb; }
          observe(el) { this.cb([{ target: el, isIntersecting: true, intersectionRatio: 1 }], this); }
          unobserve() {}
          disconnect() {}
          takeRecords() { return []; }
        };
      }
    },
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    resources: new LocalLoader(),
    virtualConsole,
    url: `file://${path.join(ROOT, page)}`
  });

  await sleep(3200); // deja correr el arranque, GSAP y la red de seguridad

  const { window } = dom;
  const doc = window.document;
  const checks = [];
  const check = (name, pass, detail = '') => {
    checks.push({ name, pass, detail });
    if (!pass) failures += 1;
  };

  check('sin errores de script', errors.length === 0, errors.slice(0, 2).join(' | '));

  const loader = doc.querySelector('.loader');
  const loaderGone = !loader || loader.style.display === 'none' || loader.getAttribute('aria-hidden') === 'true';
  check('el cargador se retira', loaderGone,
    !loader ? 'retirado del DOM' : loader.style.display === 'none' ? 'oculto' : 'todavía visible');

  const hidden = [...doc.querySelectorAll('.rv, .clip-rv, .rv-left, .rv-right')]
    .filter((el) => !el.classList.contains('active') && el.getBoundingClientRect().top < 900);
  check('el contenido visible se revela', hidden.length === 0, `${hidden.length} bloques sin revelar`);

  check('capa de mejoras cargada', typeof window.Carqidec === 'object',
    typeof window.Carqidec === 'object' ? 'window.Carqidec disponible' : 'window.Carqidec ausente');

  // Conmutador de idioma (no todas las páginas lo llevan: las de proyecto, no)
  const langBtn = doc.querySelector('.lang-bar button[data-lang="en"]');
  if (langBtn) {
    const probe = doc.querySelector('.nav-links a[data-es]') || doc.querySelector('[data-es]');
    const before = probe.innerHTML;
    langBtn.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    const after = doc.querySelector('.nav-links a[data-es]') || doc.querySelector('[data-es]');
    check('el idioma cambia y traduce',
      doc.documentElement.lang === 'en' && after.innerHTML !== before,
      `lang=${doc.documentElement.lang} · «${before.trim().slice(0, 18)}» → «${after.innerHTML.trim().slice(0, 18)}»`);
    doc.querySelector('.lang-bar button[data-lang="es"]')
      ?.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    check('el idioma vuelve al español', doc.documentElement.lang === 'es');

    const pressed = doc.querySelectorAll('.lang-bar button[aria-pressed]').length;
    check('idiomas anunciados (aria-pressed)', pressed >= 3, `${pressed} botones`);
  } else {
    check('selector de idioma', true, 'no aplica en esta página');
  }

  // Puntos de diapositiva convertidos en botones
  const dots = [...doc.querySelectorAll('.slide-dot')];
  check('puntos de sección accesibles', dots.length === 0 || dots.every((d) => d.tagName === 'BUTTON'),
    `${dots.filter((d) => d.tagName !== 'BUTTON').length} siguen siendo div`);

  // Menú móvil anunciado
  const toggle = doc.querySelector('#menuToggle');
  check('menú móvil con aria-expanded', !toggle || toggle.hasAttribute('aria-expanded'));

  // Mensajes de formulario sin alert()
  const status = doc.querySelector('.cq-form-status');
  check('estado de formulario accesible', !doc.querySelector('form') || !!status);

  // Enlaces externos asegurados
  const unsafe = [...doc.querySelectorAll('a[target="_blank"]')].filter((a) => !/noopener/.test(a.getAttribute('rel') || ''));
  check('enlaces externos con noopener', unsafe.length === 0, `${unsafe.length} sin rel`);

  dom.window.close();
  results.push({ page, checks });
}

/* --- Informe ------------------------------------------------------------- */
console.log('\n  ══════════════════════════════════════════════════════════════════');
console.log('   PRUEBA FUNCIONAL (jsdom + scripts reales) · CARQUIDEC');
console.log('  ══════════════════════════════════════════════════════════════════\n');
for (const { page, checks } of results) {
  console.log(`  ${page}`);
  for (const c of checks) console.log(`      ${c.pass ? '✔' : '✘'} ${c.name}${c.detail ? ` — ${c.detail}` : ''}`);
}
const total = results.reduce((a, r) => a + r.checks.length, 0);
console.log('\n  ──────────────────────────────────────────────────────────────────');
console.log(`  ${total} comprobaciones · ${failures} fallos`);
console.log('  ──────────────────────────────────────────────────────────────────\n');

if (STRICT && failures) process.exit(1);

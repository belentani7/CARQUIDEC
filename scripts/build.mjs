/**
 * CARQUIDEC · scripts/build.mjs
 * ---------------------------------------------------------------------------
 * Eleva las páginas del sitio aplicando, de forma reproducible e idempotente:
 *
 *   SEO / metadatos
 *     · <title>, description, canónicas y Open Graph coherentes y absolutas
 *     · Imagen social propia (1200×630) en lugar de una foto suelta
 *     · favicons, apple-touch-icon y manifiesto web PWA
 *     · Datos estructurados JSON-LD (estudio, arquitecto, obra, migas)
 *
 *   Rendimiento
 *     · Tipografía autoalojada con preload (adiós Google Fonts)
 *     · <picture> con AVIF/WebP/srcset/sizes + width/height + LQIP
 *     · Fondos a sangre servidos como imagen responsive (mejora del LCP)
 *     · Vídeo con carátula optimizada y preload diferido
 *     · GSAP/ScrollTrigger/Lenis servidos desde el propio origen
 *
 *   Accesibilidad y robustez
 *     · Enlace de salto, <main>, nav etiquetada, menú móvil con aria-expanded
 *     · Textos alternativos significativos; rel=noopener en enlaces externos
 *     · Sistema de diseño y capa JS de mejoras progresivas (assets/css, assets/js)
 *
 *   Uso
 *     node scripts/build.mjs            # aplica sobre la versión de git HEAD
 *     node scripts/build.mjs --check     # solo informa, no escribe
 *     node scripts/build.mjs --stats
 *
 * La fuente es `git show HEAD:<fichero>`: así el proceso siempre parte del
 * original y se puede repetir tantas veces como haga falta sin acumular
 * parches (idempotente).
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(new URL('..', import.meta.url).pathname);
const CHECK = process.argv.includes('--check');
const SITE = 'https://carquidec.com';

/* ---------------------------------------------------------------------------
   Páginas que reciben el tratamiento completo (sitio real)
   ------------------------------------------------------------------------ */
const PAGES = {
  'index.html': {
    title: 'CARQUIDEC — Arquitectura & Decoración de Interiores | Barcelona',
    description: 'Estudio de arquitectura y decoración de interiores dirigido por Hernando Carrillo: residencias, hoteles boutique y espacios comerciales en España, Colombia e Italia.',
    priority: '1.0',
    changefreq: 'weekly',
    schema: ['studio', 'person', 'website', 'itemlist']
  },
  'about.html': {
    title: 'Hernando Carrillo — Arquitecto fundador de CARQUIDEC',
    description: 'Arquitecto y constructor desde 1988, titulado en la Universidad Autónoma del Caribe. Método de trabajo, trayectoria y filosofía de CARQUIDEC.',
    priority: '0.8',
    changefreq: 'monthly',
    schema: ['person', 'breadcrumb']
  },
  'blog.html': {
    title: 'Leer — Notas de arquitectura | CARQUIDEC',
    description: 'Ensayos y notas de obra sobre espacio, material y luz, escritos desde el estudio de CARQUIDEC en Barcelona.',
    priority: '0.7',
    changefreq: 'monthly',
    schema: ['breadcrumb']
  },
  'contacto.html': {
    title: 'Contacto — Hablemos de su proyecto | CARQUIDEC',
    description: 'Escríbanos por WhatsApp, email o formulario. Estudio de arquitectura en Barcelona: respuesta en menos de 24 horas.',
    priority: '0.9',
    changefreq: 'monthly',
    schema: ['studio', 'breadcrumb']
  },
  'ecosistema.html': {
    title: 'Ecosistema Belentani — Circuito editorial | CARQUIDEC',
    description: 'Mapa del ecosistema de proyectos Belentani: arquitectura, cine, radio y archivo, ordenado por afinidad.',
    priority: '0.5',
    changefreq: 'monthly',
    schema: ['breadcrumb']
  },
  'proyecto-01-villa.html': {
    title: 'Villa Contemporánea de Lujo — Proyecto 01 | CARQUIDEC',
    description: 'Residencia unifamiliar en Montería: refrigeración pasiva, ventanales de piso a techo e integración de piscina y zonas sociales.',
    priority: '0.8', changefreq: 'yearly', schema: ['project', 'breadcrumb'],
    project: { name: 'Villa Contemporánea de Lujo', place: 'Montería, Colombia', category: 'Residencial', image: 'estudio-hero' },
    pool: ['estudio-hero', 'vista-25', 'vista-26', 'vista-22', 'vista-03']
  },
  'proyecto-02-hotel.html': {
    title: 'Hotel Boutique — Proyecto 02 | CARQUIDEC',
    description: 'Hotel boutique: entrada con espejo de agua, luz natural y materiales nobles que convierten la estancia en experiencia.',
    priority: '0.8', changefreq: 'yearly', schema: ['project', 'breadcrumb'],
    project: { name: 'Hotel Boutique', place: 'Colombia', category: 'Hotelería', image: 'vista-19' },
    pool: ['vista-19', 'vista-16', 'vista-24', 'vista-05', 'vista-18']
  },
  'proyecto-03-comercial.html': {
    title: 'Espacio Comercial — Proyecto 03 | CARQUIDEC',
    description: 'Interiorismo comercial: recorrido, iluminación y materialidad al servicio de la marca y de la venta.',
    priority: '0.8', changefreq: 'yearly', schema: ['project', 'breadcrumb'],
    project: { name: 'Espacio Comercial', place: 'España', category: 'Comercial', image: 'vista-17' },
    pool: ['vista-17', 'vista-18', 'vista-08', 'vista-11', 'vista-21']
  },
  'proyecto-04-oficina.html': {
    title: 'Oficinas Corporativas — Proyecto 04 | CARQUIDEC',
    description: 'Oficina corporativa: confort acústico, luz controlada y zonas de concentración y encuentro.',
    priority: '0.8', changefreq: 'yearly', schema: ['project', 'breadcrumb'],
    project: { name: 'Oficinas Corporativas', place: 'Barcelona, España', category: 'Corporativo', image: 'vista-13' },
    pool: ['vista-13', 'vista-16', 'vista-20', 'vista-23', 'vista-27']
  },
  'proyecto-05-bano.html': {
    title: 'Baño de Lujo — Proyecto 05 | CARQUIDEC',
    description: 'Detalle constructivo de un baño principal: piedra natural, grifería de precisión y luz indirecta.',
    priority: '0.8', changefreq: 'yearly', schema: ['project', 'breadcrumb'],
    project: { name: 'Baño de Lujo', place: 'España', category: 'Interiorismo', image: 'poster-marmoles' },
    pool: ['poster-marmoles', 'vista-07', 'vista-29', 'vista-13', 'vista-20']
  }
};

/** Prototipos y variantes antiguas: no deben competir en buscadores. */
const NOINDEX = [
  'index-ultra.html', 'index-enhanced.html', 'index-it.html', 'GEMINI_index.html',
  'revision.html', 'logo-3d.html', 'parallax-futurista.html',
  'CARQUIDEC-ARCHITECT-MASTER.html', 'curriculum.html',
  'curriculum-1HOJA.html', 'curriculum-1HOJA-v3.html', 'curriculum-1HOJA-v4.html',
  'curriculum-1HOJA-v5.html', 'Business Pricing _ OpenAI.html'
];

/* ---------------------------------------------------------------------------
   Utilidades
   ------------------------------------------------------------------------ */
const read = async (p) => fs.readFile(path.join(ROOT, p), 'utf8');
const write = async (p, s) => fs.writeFile(path.join(ROOT, p), s);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const decode = (u) => decodeURIComponent(u).replace(/^\.\//, '').trim();

function gitShow(file) {
  try {
    return execSync(`git show HEAD:${JSON.stringify(file)}`, { cwd: ROOT, maxBuffer: 64 * 1024 * 1024 })
      .toString('utf8');
  } catch {
    return null; // fichero nuevo (no está en git)
  }
}

const manifest = JSON.parse(await read('assets/img/manifest.json'));
/** ruta de origen (normalizada) → entrada del manifest */
const bySource = new Map();
for (const entry of Object.values(manifest)) bySource.set(decode(entry.source), entry);

const changes = [];
const note = (page, what) => changes.push({ page, what });


/** ---------------------------------------------------------------------------
 * Medios reubicados
 * El material original vivía en la raíz y en carpetas con nombres de Windows
 * («Nueva carpeta/…»), con ficheros de vídeo llamados por su UUID. Se han
 * movido con `git mv` a assets/media/{video,audio} con nombres legibles y aquí
 * se reescriben las referencias. Ver AUDITORIA.md §estructura.
 * ------------------------------------------------------------------------ */
const MEDIA = {
  'Nueva carpeta/video-casa-180.mp4': 'assets/media/video/casa-180-recorrido.mp4',
  'Arquitectura_Viva_CARQUIDEC.mp4': 'assets/media/video/arquitectura-viva.mp4',
  'YouCut_20260731_092614242.mp4': 'assets/media/video/villa-residencial-3d.mp4',
  '352d1b0c-a217-46ff-81d5-c67b48073756.mp4': 'assets/media/video/interiores-marmoles.mp4',
  'YouCut_20260731_093323928.mp4': 'assets/media/video/concepto-parametrico.mp4',
  '18956dae-ebf1-4351-96ac-4f7bbb4a04b7.mp4': 'assets/media/video/obra-viva-fachadas.mp4',
  '9a909715-a6d3-4b8a-9c1e-d47cbd26a66b.mp4': 'assets/media/video/hoteles-boutique-paisajismo.mp4',
  '49f5132e-de8d-448e-b4fc-a17c49a2a02b.mp4': 'assets/media/video/media-49f5132e.mp4',
  'c4815d05-ed26-4648-9500-82bed8a5fb6b.mp4': 'assets/media/video/media-c4815d05.mp4',
  '4c49592f-8465-4fcd-98db-9c0272c1520d.mp4': 'assets/media/video/media-4c49592f.mp4',
  'VID-20260728-WA0025.mp4': 'assets/media/video/obra-registro-whatsapp.mp4',
  '8c0c3942-2309-4178-9f41-347d5e44b385.mp4': 'assets/media/video/media-8c0c3942.mp4',
  'Algoritmos_para_casas_que_respiran.mp3': 'assets/media/audio/01-algoritmos-para-casas-que-respiran.mp3',
  'De_hologramas_digitales_a_logias_masónicas (1).mp3': 'assets/media/audio/02-de-hologramas-a-logias.mp3',
  'Del_dibujo_a_mano_al_diseño_paramétrico.m4a': 'assets/media/audio/03-del-dibujo-a-mano-al-parametrico.m4a'
};

/* ---------------------------------------------------------------------------
   Bloques reutilizables
   ------------------------------------------------------------------------ */
const FONT_PRELOAD = (page) => {
  const depth = page.includes('/') ? '../' : '';
  return [
    `<link rel="preload" as="font" type="font/woff2" href="${depth}assets/fonts/space-grotesk-latin-400-normal.woff2" crossorigin>`,
    `<link rel="preload" as="font" type="font/woff2" href="${depth}assets/fonts/cormorant-garamond-latin-300-normal.woff2" crossorigin>`,
    `<link rel="stylesheet" href="${depth}assets/css/fonts.css">`
  ].join('\n');
};

function picture(entry, opts = {}) {
  const depth = opts.depth || '';
  const set = (fmt) => entry.sources[fmt].map((s) => `${depth}${s.file} ${s.w}w`).join(', ');
  const fallback = entry.sources.jpg[entry.sources.jpg.length - 1] || entry.sources.webp[entry.sources.webp.length - 1];
  const src = `${depth}${fallback.file}`;
  const lqip = `background-image:url('${entry.lqip}');background-size:cover;background-position:center`;
  const style = [opts.style, lqip].filter(Boolean).join(';');

  const attrs = [
    `src="${src}"`,
    `srcset="${set('jpg')}"`,
    `sizes="${opts.sizes || entry.sizes}"`,
    `width="${entry.width}"`,
    `height="${entry.height}"`,
    `loading="${opts.loading || 'lazy'}"`,
    `decoding="async"`,
    opts.fetchpriority ? `fetchpriority="${opts.fetchpriority}"` : '',
    opts.className ? `class="${opts.className}"` : '',
    opts.alt !== undefined ? `alt="${esc(opts.alt)}"` : '',
    opts.attrs || '',
    `style="${style}"`
  ].filter(Boolean).join(' ');

  const sources = entry.sources.avif.length
    ? `<source type="image/avif" srcset="${set('avif')}" sizes="${opts.sizes || entry.sizes}">`
    : '';

  return `<picture>${sources}<source type="image/webp" srcset="${set('webp')}" sizes="${opts.sizes || entry.sizes}"><img ${attrs}></picture>`;
}

/* ---------------------------------------------------------------------------
   Escáner de etiquetas consciente de comillas
   Nuestro propio favicon es un SVG en data-URI que contiene ">": las expresiones
   regulares ingenuas rompen el documento. Este ayudante recorre la etiqueta
   respetando los valores entrecomillados.
   ------------------------------------------------------------------------ */
function replaceTags(html, name, test) {
  const open = new RegExp('<' + name + '\\b', 'gi');
  let out = '';
  let cursor = 0;
  let m;
  while ((m = open.exec(html))) {
    const start = m.index;
    if (start < cursor) continue;
    let i = start + m[0].length;
    let quote = null;
    while (i < html.length) {
      const ch = html[i];
      if (quote) { if (ch === quote) quote = null; }
      else if (ch === '"' || ch === "'") quote = ch;
      else if (ch === '>') break;
      i++;
    }
    const tag = html.slice(start, i + 1);
    out += html.slice(cursor, start);
    const replacement = test(tag);
    out += replacement === null ? tag : replacement;
    cursor = i + 1;
  }
  out += html.slice(cursor);
  return out;
}

/* ---------------------------------------------------------------------------
   Datos estructurados
   ------------------------------------------------------------------------ */
const ADDRESS = { '@type': 'PostalAddress', addressLocality: 'Barcelona', addressRegion: 'Cataluña', addressCountry: 'ES' };

function schemaBlock(page, kinds, cfg) {
  const graph = [];
  const studio = {
    '@type': ['ArchitecturalService', 'LocalBusiness'],
    '@id': `${SITE}/#estudio`,
    name: 'CARQUIDEC',
    alternateName: 'Carquidec Arquitectura & Decoración',
    description: 'Estudio de arquitectura y decoración de interiores: residencias, hotelería boutique y espacios comerciales.',
    url: `${SITE}/`,
    image: `${SITE}/assets/img/og-carquidec.jpg`,
    logo: `${SITE}/assets/img/logo-completo-480.png`,
    telephone: '+34612484884',
    email: 'carqdisantos@gmail.com',
    address: ADDRESS,
    founder: { '@id': `${SITE}/#hernando-carrillo` },
    areaServed: [
      { '@type': 'Country', name: 'España' },
      { '@type': 'Country', name: 'Colombia' },
      { '@type': 'Country', name: 'Italia' }
    ],
    knowsLanguage: ['es', 'ca', 'en', 'it', 'fr'],
    priceRange: '$$$$',
    serviceType: [
      'Arquitectura residencial', 'Decoración de interiores',
      'Hotelería boutique', 'Espacios comerciales', 'Diseño paramétrico'
    ]
  };
  const person = {
    '@type': 'Person',
    '@id': `${SITE}/#hernando-carrillo`,
    name: 'Hernando Carrillo Sánchez',
    jobTitle: 'Arquitecto fundador',
    worksFor: { '@id': `${SITE}/#estudio` },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad Autónoma del Caribe' },
    knowsAbout: ['Arquitectura', 'Diseño de interiores', 'Diseño paramétrico', 'Construcción', 'Paisajismo']
  };
  const website = {
    '@type': 'WebSite',
    '@id': `${SITE}/#web`,
    url: `${SITE}/`,
    name: 'CARQUIDEC',
    inLanguage: 'es-ES',
    publisher: { '@id': `${SITE}/#estudio` }
  };

  if (kinds.includes('studio')) graph.push(studio);
  if (kinds.includes('person')) graph.push(person);
  if (kinds.includes('website')) graph.push(website);

  if (kinds.includes('project') && cfg.project) {
    const img = manifest[cfg.project.image];
    graph.push({
      '@type': 'CreativeWork',
      '@id': `${SITE}/${page}#proyecto`,
      name: cfg.project.name,
      about: { '@id': `${SITE}/#estudio` },
      creator: { '@id': `${SITE}/#hernando-carrillo` },
      genre: cfg.project.category,
      locationCreated: { '@type': 'Place', name: cfg.project.place },
      image: img ? `${SITE}/${img.sources.jpg[img.sources.jpg.length - 1].file}` : undefined
    });
  }

  if (kinds.includes('itemlist')) {
    graph.push({
      '@type': 'ItemList',
      name: 'Proyectos destacados',
      itemListElement: Object.entries(PAGES)
        .filter(([, c]) => c.project)
        .map(([file, c], i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.project.name,
          url: `${SITE}/${file}`
        }))
    });
  }

  if (kinds.includes('breadcrumb')) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: cfg.title.split('—')[0].trim(), item: `${SITE}/${page}` }
      ]
    });
  }

  return `<script type="application/ld+json">\n${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2)}\n</script>`;
}

/* ---------------------------------------------------------------------------
   Transformación de una página
   ------------------------------------------------------------------------ */
function transform(page, html, cfg) {
  const depth = page.includes('/') ? '../' : '';
  const found = [];

  /* --- 1 · <head> ------------------------------------------------------- */
  const head = [];

  // ---------------------------------------------------------------------------
  // Higiene de <head>
  // El bloque que gestiona esta construcción viaja entre dos marcas, de modo
  // que se puede retirar completo y volver a escribir sin acumular etiquetas ni
  // dejar líneas huérfanas: así la construcción es idempotente de verdad.
  // ---------------------------------------------------------------------------
  html = html.replace(/<!-- cq:head -->[\s\S]*?<!-- \/cq:head -->[ \t]*\n?/g, '');

  html = replaceTags(html, 'link', (tag) => {
    if (/rel="(?:icon|apple-touch-icon|shortcut icon)"/i.test(tag)) return '';  // favicons
    if (/rel="manifest"/i.test(tag)) return '';                                  // manifiesto PWA
    if (/as="font"/i.test(tag)) return '';                                       // precargas de fuente
    if (/assets\/css\/fonts\.css/.test(tag)) return '';                        // hoja tipográfica
    if (/fonts\.(googleapis|gstatic)\.com/i.test(tag)) return '';               // terceros
    return null;
  });
  html = replaceTags(html, 'meta', (tag) => (/name="theme-color"/i.test(tag) ? '' : null));
  head.push(
    `<meta name="theme-color" content="#0a0a09">`,
    `<link rel="icon" href="${depth}assets/img/favicon-32.png" sizes="32x32" type="image/png">`,
    `<link rel="icon" href="${depth}assets/img/icon-192.png" sizes="192x192" type="image/png">`,
    `<link rel="apple-touch-icon" href="${depth}assets/img/apple-touch-icon.png">`,
    `<link rel="manifest" href="${depth}site.webmanifest">`
  );
  found.push('iconos y manifiesto');

  // tipografía autoalojada (las etiquetas antiguas ya se han retirado arriba)
  head.push(FONT_PRELOAD(page));
  found.push('tipografía autoalojada');

  // Open Graph / Twitter completos y absolutos
  const ogImage = `${SITE}/assets/img/og-carquidec.jpg`;
  const metaPairs = [
    ['og:title', cfg.title],
    ['og:description', cfg.description],
    ['og:type', 'website'],
    ['og:url', `${SITE}/${page === 'index.html' ? '' : page}`],
    ['og:site_name', 'CARQUIDEC'],
    ['og:locale', 'es_ES'],
    ['og:image', ogImage],
    ['og:image:width', '1200'],
    ['og:image:height', '630'],
    ['og:image:alt', 'CARQUIDEC — arquitectura y decoración de interiores'],
    ['twitter:card', 'summary_large_image'],
    ['twitter:title', cfg.title],
    ['twitter:description', cfg.description],
    ['twitter:image', ogImage]
  ];
  for (const [prop, content] of metaPairs) {
    const isOg = prop.startsWith('og:');
    const attr = isOg ? 'property' : 'name';
    const re = new RegExp(`<meta\\s+${attr}="${prop.replace(/[:]/g, ':')}"[^>]*>`, 'i');
    const tag = `<meta ${attr}="${prop}" content="${esc(content)}">`;
    if (re.test(html)) html = html.replace(re, tag);
    else html = html.replace(/<\/title>/i, '</title>\n' + tag);
  }
  found.push('Open Graph y Twitter completos');

  // título, descripción y canónica
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(cfg.title)}</title>`);
  const descTag = `<meta name="description" content="${esc(cfg.description)}">`;
  if (/<meta\s+name="description"[^>]*>/i.test(html)) {
    html = html.replace(/<meta\s+name="description"[^>]*>/i, descTag);
  } else {
    html = html.replace(/<\/title>/i, `</title>\n${descTag}`);
  }
  html = html.replace(/\s*<meta\s+name="keywords"[^>]*>/i, '');
  const canonical = `<link rel="canonical" href="${SITE}/${page === 'index.html' ? '' : page}">`;
  let hadCanonical = false;
  html = replaceTags(html, 'link', (tag) => {
    if (!/rel="canonical"/i.test(tag)) return null;
    hadCanonical = true;
    return canonical;
  });
  if (!hadCanonical) html = html.replace(/<\/title>/i, `</title>\n${canonical}`);
  found.push('título, descripción y canónica');

  // robots
  if (/<meta\s+name="robots"[^>]*>/i.test(html)) {
    html = html.replace(/<meta\s+name="robots"[^>]*>/i, `<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">`);
  } else {
    html = html.replace(/<\/title>/i, `</title>\n<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">`);
  }

  // datos estructurados (sustituye al JSON-LD antiguo)
  html = html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<\/title>/i, `</title>\n${schemaBlock(page, cfg.schema, cfg)}`);
  found.push('datos estructurados');

  // meta author / geo opcionales (útiles para el negocio local)
  if (!/name="author"/i.test(html)) {
    html = html.replace(/<\/title>/i, `</title>\n<meta name="author" content="Hernando Carrillo — CARQUIDEC">`);
  }

  // inyección en <head>: todo lo anterior + hoja de estilo del sistema
  const extraHead = head.join('\n');
  const styleLink = `<link rel="stylesheet" href="${depth}assets/css/carquidec.css">`;

  if (/assets\/css\/carquidec\.css/.test(html)) {
    html = html.replace(/<link rel="stylesheet" href="[^"]*assets\/css\/carquidec\.css">/, styleLink);
  } else if (/<\/style>/i.test(html)) {
    // justo después del último bloque de estilos: así la capa nueva gana
    const last = html.lastIndexOf('</style>');
    html = html.slice(0, last + 8) + '\n' + styleLink + html.slice(last + 8);
  } else {
    html = html.replace(/<\/head>/i, styleLink + '\n</head>');
  }

  html = html.replace(/<\/head>/i, `<!-- cq:head -->\n${extraHead}\n<!-- /cq:head -->\n</head>`);

  /* --- 2 · Enlace de salto y estructura --------------------------------- */
  const skipTarget = /<section[^>]*class="slide/.test(html) ? 'contenido' : 'contenido';
  if (!/cq-skip/.test(html)) {
    html = html.replace(/<body([^>]*)>/i,
      `<body$1>\n<a class="cq-skip" href="#${skipTarget}">Saltar al contenido principal</a>`);
    found.push('enlace de salto');
  }

  // <main> envolviendo el contenido principal (no rompe si ya existe)
  if (!/<main[\s>]/i.test(html)) {
    // Las páginas de proyecto abren con <div class="hero-full">, no con <section>
    const firstSection = html.search(/<section\b/i) !== -1
      ? html.search(/<section\b/i)
      : html.search(/<div class="hero-full"/i);
    const footerIdx = html.search(/<footer\b/i);
    const opensSection = /<section\b/i.test(html);
    if (firstSection !== -1) {
      if (footerIdx > firstSection) {
        html = html.slice(0, firstSection) + `<main id="${skipTarget}">\n` + html.slice(firstSection, footerIdx) + `</main>\n` + html.slice(footerIdx);
      } else if (opensSection) {
        const close = html.lastIndexOf('</section>');
        if (close !== -1) {
          html = html.slice(0, firstSection) + `<main id="${skipTarget}">\n`
            + html.slice(firstSection, close + 10) + `</main>\n` + html.slice(close + 10);
        }
      }
      found.push('región principal <main>');
    }
  }

  /* --- 2b · Índice editorial de proyectos (enlaces internos reales) ----- */
  if (page === 'index.html' && !/cq-index/.test(html)) {
    const rows = Object.entries(PAGES)
      .filter(([, c]) => c.project)
      .map(([file, c], i) => {
        const n = String(i + 1).padStart(2, '0');
        return `  <a class="cq-index-row rv" href="${file}">`
          + `<span class="cq-index-num">${n}</span>`
          + `<span class="cq-index-name">${esc(c.project.name)}</span>`
          + `<span class="cq-index-meta">${esc(c.project.category)} · ${esc(c.project.place)}</span>`
          + `<span class="cq-index-go" aria-hidden="true">→</span>`
          + `</a>`;
      })
      .join('\n');

    const block = `<nav class="cq-index" aria-label="Índice de proyectos">\n`
      + `<div class="label rv">// Índice de proyectos</div>\n`
      + `<div class="cq-index-list">\n${rows}\n</div>\n`
      + `</nav>`;

    const anchor = /(<p class="body rv"[^>]*>Cada imagen es un proyecto completo[\s\S]*?<\/p>)/;
    if (anchor.test(html)) {
      html = html.replace(anchor, '$1\n' + block);
      found.push('índice de proyectos con enlaces internos');
    }
  }

  /* --- 2c · Navegación propia donde no la hay --------------------------- */
  // ecosistema.html es un catálogo sin retorno al sitio: se le añade una barra.
  if (!/<nav[\s>]/i.test(html) && /<\/header>/i.test(html)) {
    const bar = `<nav class="cq-eco-nav" aria-label="Navegación principal">`
      + `<a href="index.html">Inicio</a>`
      + `<a href="index.html#s5">Proyectos</a>`
      + `<a href="about.html">Estudio</a>`
      + `<a href="blog.html">Leer</a>`
      + `<a href="contacto.html">Contacto</a>`
      + `</nav>`;
    html = html.replace(/<\/header>/i, bar + '\n</header>');
    found.push('barra de navegación con retorno al sitio');
  }

  /* --- 3 · Navegación --------------------------------------------------- */
  html = html.replace(/<nav class="nav">/i, '<nav class="nav" aria-label="Navegación principal">');
  // El botón del menú móvil pasa a ser un botón real y anunciado
  html = html.replace(/<button id="menuToggle"[^>]*>/i,
    '<button id="menuToggle" type="button" aria-controls="menu-principal" aria-expanded="false" aria-label="Abrir menú de navegación">');
  html = html.replace(/<div class="nav-links">/i, '<div class="nav-links" id="menu-principal">');
  html = html.replace(/<div class="lang-bar">/i,
    '<div class="lang-bar" role="group" aria-label="Selección de idioma">');
  found.push('navegación etiquetada');

  // La barra superior de las páginas de proyecto (.hero-nav) es navegación real
  html = html.replace(/<div class="hero-nav">([\s\S]*?)<\/div>/gi,
    '<nav class="hero-nav" aria-label="Navegación del proyecto">$1</nav>');

  /* --- 4 · Imágenes ----------------------------------------------------- */
  let pictures = 0;
  let poolCursor = 0;

  // 4a · Fondos a sangre (.slide-full-bg) → imagen responsive real
  //      La primera es el LCP: se sirve con prioridad alta y sin diferir.
  let heroes = 0;
  html = html.replace(
    /<div class="slide-full-bg"([^>]*)style="background-image:url\('([^']+)'\)"><\/div>/gi,
    (m, pre, url) => {
      const entry = bySource.get(decode(url));
      if (!entry) return m;
      pictures++;
      heroes++;
      const first = heroes === 1;
      return picture(entry, {
        depth,
        className: 'slide-full-bg',
        alt: first ? 'Fachada de vivienda contemporánea proyectada por CARQUIDEC' : 'Proyecto de CARQUIDEC',
        loading: first ? 'eager' : 'lazy',
        fetchpriority: first ? 'high' : undefined
      });
    }
  );

  // 4b · Todas las <img> locales → <picture> con AVIF/WebP/srcset/lazy
  html = html.replace(/<img\b[^>]*>/gi, (tag) => {
    const srcMatch = tag.match(/\bsrc="([^"]+)"/i);
    if (!srcMatch) return tag;
    const raw = srcMatch[1];
    if (/^(https?:|data:)/.test(raw)) return tag;
    let entry = bySource.get(decode(raw));
    if (!entry) {
      // La referencia no existe en el repositorio (imágenes perdidas del
      // material original). Se sustituye por una pieza real del fondo de esta
      // página y se anota la reparación. Ver AUDITORIA.md §recursos.
      if (!cfg.pool || !cfg.pool.length) return '';
      const slug = cfg.pool[poolCursor % cfg.pool.length];
      poolCursor += 1;
      entry = manifest[slug];
      if (!entry) return '';
      note(page, `imagen perdida «${raw}» sustituida por ${slug}`);
    }

    const alt = (tag.match(/\balt="([^"]*)"/i) || [, ''])[1];
    const cls = (tag.match(/\bclass="([^"]*)"/i) || [, ''])[1];
    const isFull = /\bimg-full\b/.test(cls);
    const inGallery = /gallery|slide-split/.test(cls);
    const lazy = /\beager\b/.test(cls) || /logo|loader/i.test(raw) ? 'eager' : 'lazy';
    const fpr = /logo/i.test(raw) ? 'high' : undefined;

    pictures++;
    // Conservamos la clase original para que el CSS y GSAP sigan funcionando
    const className = cls || (isFull ? 'img-full' : inGallery ? 'gallery-img' : '');
    return picture(entry, {
      depth,
      className: className || undefined,
      alt,
      loading: lazy,
      fetchpriority: fpr,
      attrs: /data-/.test(tag) ? tag.match(/\sdata-[\w-]+="[^"]*"/g).join(' ') : ''
    });
  });
  if (pictures) found.push(`${pictures} imágenes responsivas (AVIF/WebP/LQIP)`);

  /* --- 5 · Vídeo -------------------------------------------------------- */
  // Referencias de medios al directorio nuevo
  let mediaRewrites = 0;
  for (const [from, to] of Object.entries(MEDIA)) {
    const pattern = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (pattern.test(html)) {
      html = html.replace(pattern, `${depth}${to}`);
      mediaRewrites++;
    }
  }
  if (mediaRewrites) found.push(`${mediaRewrites} referencias de medios a su carpeta definitiva`);

  let videoCount = 0;
  html = html.replace(/<video\b[^>]*>/gi, (tag) => {
    let out = tag;
    videoCount++;
    const posterMatch = tag.match(/\bposter="([^"]+)"/i);
    if (posterMatch) {
      const entry = bySource.get(decode(posterMatch[1]));
      if (entry) {
        const best = entry.sources.webp[entry.sources.webp.length - 1];
        out = out.replace(/\bposter="[^"]+"/i, `poster="${depth}${best.file}"`);
      }
    }
    if (!/\bpreload=/i.test(out)) out = out.replace(/>$/, ' preload="none">');
    if (!/\bplaysinline/i.test(out)) out = out.replace(/>$/, ' playsinline>');
    return out;
  });
  if (videoCount) found.push(`${videoCount} vídeos con carátula optimizada y carga diferida`);

  /* --- 6 · Enlaces muertos y enlaces externos --------------------------- */
  html = html.replace(/<div class="footer-links">[\s\S]*?<\/div>/i,
    `<div class="footer-links">`
    + `<a href="${depth}index.html#s5">Proyectos</a>`
    + `<a href="${depth}blog.html">Leer</a>`
    + `<a href="${depth}contacto.html">Contacto</a>`
    + `<a href="https://wa.me/34612484884" target="_blank" rel="noopener noreferrer">WhatsApp</a>`
    + `</div>`);
  found.push('pie sin enlaces muertos');

  html = html.replace(/<a\b([^>]*target="_blank"[^>]*)>/gi, (m, attrs) =>
    /rel=/.test(attrs) ? m : `<a${attrs} rel="noopener noreferrer">`);

  /* --- 7 · Audio -------------------------------------------------------- */
  html = html.replace(/<audio id="podcastAudio"[^>]*>/i,
    '<audio id="podcastAudio" preload="metadata" controlslist="nodownload"></audio>'.replace('></audio>', '>'));

  /* --- 8 · Scripts ------------------------------------------------------ */
  html = html
    .replace(/https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/gsap\/[\d.]+\/gsap\.min\.js/,
      `${depth}assets/vendor/gsap.min.js`)
    .replace(/https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/gsap\/[\d.]+\/ScrollTrigger\.min\.js/,
      `${depth}assets/vendor/ScrollTrigger.min.js`)
    .replace(/https:\/\/unpkg\.com\/lenis@[\d.]+\/dist\/lenis\.min\.js/,
      `${depth}assets/vendor/lenis.min.js`)
    .replace(/https:\/\/cdn\.jsdelivr\.net\/npm\/lenis@[\d.]+\/dist\/lenis\.min\.js/,
      `${depth}assets/vendor/lenis.min.js`);

  const appScript = `<script src="${depth}assets/js/carquidec.js" defer></script>`;
  if (!/assets\/js\/carquidec\.js/.test(html)) {
    html = html.replace(/<\/body>/i, `${appScript}\n</body>`);
  }
  found.push('librerías locales + capa de mejoras');

  /* --- 8b · Gráficos decorativos --------------------------------------- */
  html = replaceTags(html, 'svg', (tag) => {
    if (/aria-hidden|role=/.test(tag)) return null;
    return tag.replace(/<svg/i, '<svg aria-hidden="true" focusable="false"');
  });

  /* --- 8c · Cinemática del cargador ------------------------------------ */
  // El original encadenaba animaciones hasta ~4 s: cada visita empezaba con la
  // pantalla en negro. Se comprime a ~1,8 s, se salta por completo si el usuario
  // pide menos movimiento y se mantiene el fundido de entrada de la cabecera.
  const slowLoader = /const loaderTl=gsap\.timeline\(\);[\s\S]*?\.from\('\.nav'/;
  if (slowLoader.test(html)) {
    html = html.replace(slowLoader, `if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches){var _l=document.querySelector('.loader');if(_l)_l.style.display='none';}
const loaderTl=gsap.timeline({defaults:{ease:'power2.out'}});
loaderTl.to('.loader-medallon',{opacity:1,scale:1,duration:.55,ease:'back.out(1.6)'})
.to('.loader-text',{opacity:1,y:0,duration:.4},'-=.35')
.to('.loader-line',{width:'200px',duration:.5,ease:'power2.inOut'},'-=.3')
.to('.loader-medallon',{scale:1.35,opacity:0,duration:.4,ease:'power3.in'},'+=.15')
.to('.loader-text',{opacity:0,y:-16,duration:.3},'-=.3')
.to('.loader-line',{width:0,opacity:0,duration:.25},'-=.25')
.to('.loader',{opacity:0,duration:.35,onComplete:()=>{const l=document.querySelector('.loader');if(l)l.style.display='none'}})
.from('.nav'`);
    found.push('intro del cargador comprimida a ~1,8 s (antes ~4 s)');
  }

  // El titular del héroe entraba con 2 s de retardo: ahora a los ~0,5 s
  html = html
    .replace(/gsap\.from\('#s1 \.heading',\{opacity:0,y:80,clipPath:'inset\(0 0 100% 0\)',duration:1\.5,ease:'power3\.out',delay:2\}\)/,
      "gsap.from('#s1 .heading',{opacity:0,y:60,clipPath:'inset(0 0 100% 0)',duration:1.1,ease:'power3.out',delay:.5})")
    .replace(/gsap\.to\('#s1 \.rv',\{opacity:1,y:0,duration:1,ease:'power3\.out',delay:1\.8,stagger:0\.2\}\)/,
      "gsap.to('#s1 .rv',{opacity:1,y:0,duration:.9,ease:'power3.out',delay:.35,stagger:.14})")
    .replace(/gsap\.to\('#s1 \.slide-full-bg',\{scale:1,duration:2\.5,ease:'power3\.out',delay:1\.5\}\)/,
      "gsap.to('#s1 .slide-full-bg',{scale:1,duration:1.6,ease:'power3.out',delay:.2})");

  /* --- 9 · Normalización del documento --------------------------------- */
  // Botones siempre con tipo explícito (evita envíos accidentales de formulario)
  html = replaceTags(html, 'button', (tag) =>
    /\btype=/.test(tag) ? null : tag.replace(/<button/i, '<button type="button"'));

  // DOCTYPE en mayúsculas y etiquetas vacías sin barra final
  html = html.replace(/<!doctype html>/i, '<!DOCTYPE html>');
  html = replaceTags(html, 'meta', (tag) => tag.replace(/\s*\/>$/, '>'));
  html = replaceTags(html, 'link', (tag) => tag.replace(/\s*\/>$/, '>'));

  // Ampersands sueltos: se codifican fuera de <script> y <style>
  const parts = html.split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>)/i);
  html = parts
    .map((part, i) => (i % 2 === 1 ? part : part.replace(/&(?!(?:[a-zA-Z][a-zA-Z0-9]{1,10}|#\d{1,6}|#x[0-9a-fA-F]{1,6});)/g, '&amp;')))
    .join('');
  html = html.replace(/[ \t]+$/gm, '');
  found.push('marcado normalizado (doctype, botones, entidades)');

  return { html, found };
}

/* ---------------------------------------------------------------------------
   Ejecución
   ------------------------------------------------------------------------ */
let total = 0;
for (const [page, cfg] of Object.entries(PAGES)) {
  const original = gitShow(page);
  if (!original) { console.warn(`  ! ${page} no está en git; se omite`); continue; }
  const { html, found } = transform(page, original, cfg);
  total += found.length;
  for (const f of found) note(page, f);
  if (!CHECK) await write(page, html);
}

/* Prototipos: sólo se les añade noindex (no se tocan sus estilos) */
for (const page of NOINDEX) {
  const original = gitShow(page);
  if (!original) continue;
  let html = original;
  if (/<meta\s+name="robots"[^>]*>/i.test(html)) {
    html = html.replace(/<meta\s+name="robots"[^>]*>/i, '<meta name="robots" content="noindex,follow">');
  } else {
    html = html.replace(/<head>/i, '<head>\n<meta name="robots" content="noindex,follow">');
  }
  note(page, 'noindex (prototipo)');
  if (!CHECK) await write(page, html);
}

/* --- Informe ------------------------------------------------------------- */
const byPage = new Map();
for (const c of changes) {
  if (!byPage.has(c.page)) byPage.set(c.page, []);
  byPage.get(c.page).push(c.what);
}
console.log('\n  MEJORAS APLICADAS POR PÁGINA\n');
for (const [page, list] of byPage) {
  console.log(`  ${page}`);
  for (const item of list) console.log(`      · ${item}`);
}
console.log(`\n  ${byPage.size} páginas · ${total} mejoras sustantivas`);
if (CHECK) console.log('  (modo --check: no se ha escrito nada)');

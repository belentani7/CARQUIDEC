# Auditoría y elevación del sitio CARQUIDEC

Informe de la intervención sobre el sitio del estudio (commit de partida
`aa67626`). Todo lo que se describe aquí es **verificable y reproducible**:

```bash
npm ci
npm run audit          # marcado + estilos + accesibilidad + enlaces + calidad
node tools/audit/a11y.mjs --baseline   # cómo estaba antes
node tools/audit/smoke.mjs             # la web arranca de verdad (jsdom)
```

---

## 1 · Resumen ejecutivo

| Indicador | Antes | Después |
|---|---:|---:|
| Imágenes servidas en la portada | **64,0 MB** (35 ficheros) | **0,94 MB** (variante AVIF móvil) |
| Peso de la ruta crítica de la portada | — | **272 kB** (gzip) |
| Referencias internas rotas | **23** (16 ficheros inexistentes) | **0** |
| Recursos de terceros cargados | **3** (cdnjs, unpkg, Google Fonts) | **0** |
| Errores de validación del marcado | **34** | **0** |
| Errores de accesibilidad detectados | **43 errores + 31 avisos** | **0 + 0** |
| Contraste del texto secundario | 4,42:1 (por debajo de AA) | **6,75:1** |
| Contraste del logotipo sobre negro | 1,46:1 (invisible) | **16,95:1** |
| Intro de carga en cada visita | ~4,1 s | **~1,8 s** (0 s con *reduce motion*) |
| Ficheros de medios en carpetas tipo Windows | sí (`Nueva carpeta/`) | **no** (`assets/media/…`) |
| Números de WhatsApp / correos distintos | 2 / 2 | **1 / 1** |
| Páginas de proyecto enlazadas desde la portada | 0 (huérfanas) | **5** |
| Pruebas automatizadas | 0 | **42 comprobaciones funcionales + 5 auditorías** |

---

## 2 · Metodología y herramientas

Todas las herramientas son de código abierto y quedan instaladas en el
proyecto, de modo que cualquiera puede repetir las mediciones:

| Herramienta | Uso aquí | Repositorio |
|---|---|---|
| **axe-core** (Deque) | Reglas de accesibilidad WCAG 2.1 AA sobre el DOM real | <https://github.com/dequelabs/axe-core> |
| **html-validate** | Validez del marcado HTML5 + reglas de accesibilidad del W3C | <https://github.com/html-validate/html-validate> |
| **stylelint** | Estilo y errores en las hojas de CSS | <https://github.com/stylelint/stylelint> |
| **jsdom** | Entorno DOM sin navegador para auditorías y pruebas funcionales | <https://github.com/jsdom/jsdom> |
| **sharp** | Conversión AVIF/WebP, recortes, LQIP y generación de identidad | <https://github.com/lovell/sharp> |
| **@fontsource** | Fuentes autoalojadas (subset latino) | <https://github.com/fontsource/fontsource> |
| **GSAP + ScrollTrigger** | Animación (ya en uso; ahora local) | <https://github.com/greensock/GSAP> |
| **Lenis** | Desplazamiento suave (ya en uso; ahora local) | <https://github.com/darkroomengineering/lenis> |

Lo que **no** se ha podido ejecutar en este entorno: auditorías de *Lighthouse*
y capturas con navegador real (no hay Chromium disponible). Todo lo que
dependía de un motor de pintado (contraste calculado, LCP) se ha medido de forma
alternativa y explícita: contraste calculado a partir de los *tokens* de color
con la fórmula WCAG, y pesos reales de transferencia sumando ficheros.

---

## 3 · Hallazgos y correcciones

### 3.1 Accesibilidad

**Lo que fallaba**

- Sin enlace de salto al contenido ni región `<main>`: quien navega con teclado
  o lector de pantalla debía atravesar toda la navegación en cada página.
- El menú móvil no anunciaba su estado (sin `aria-expanded`) y no se cerraba con
  `Escape`.
- Los puntos de navegación lateral eran `<div>` con `onclick`: inalcanzables por
  teclado y sin nombre accesible.
- El selector de idioma no indicaba el idioma activo (`aria-pressed`) ni estaba
  agrupado semánticamente.
- Enlaces externos sin `rel="noopener noreferrer"`.
- Texto secundario con contraste 4,42:1 (por debajo del mínimo AA de 4,5:1).
- Botones sin `type` explícito (7 por página) y `<svg>` sin `focusable="false"`.
- Páginas de proyecto sin `<main>` ni `<nav>`; el enlace de salto apuntaba a un
  destino inexistente.

**Lo que se hizo**

- Enlace *Saltar al contenido* visible al enfocar, `<main id="contenido">` y
  `<nav aria-label>` en las 10 páginas.
- Menú móvil con `aria-controls`, `aria-expanded` y cierre con `Escape`; área
  táctil de 44 px.
- Puntos de sección convertidos en `<button>` con nombre accesible
  («Ir a: Villa Residencial») y `aria-current`.
- Diálogos y estados: los formularios ya no usan `alert()`; anuncian el
  resultado en una región `role="status"`.
- Foco visible dorado en todo el sitio, `prefers-contrast: more` y estilos de
  impresión.
- Contraste corregido token a token (texto secundario 6,75:1; oro 9,10:1).

### 3.2 Rendimiento

**Lo que fallaba**

- La portada pedía **64 MB de imágenes**: PNG de hasta 7 MB servidos tal cual,
  sin `srcset`, sin formatos modernos y sin `width`/`height` (pérdida de LCP y
  saltos de layout).
- Las fotos a sangre se dibujaban con `background-image` de CSS: el navegador no
  las descubre hasta que ha construido la página.
- Los 6 vídeos del portafolio y el reproductor de audio cargaban en el arranque.
- Tres dependencias externas (GSAP, Lenis y las fuentes de Google) añadían DNS,
  TLS y render bloqueante a cada visita.
- El cargador de entrada duraba ~4 s de pantalla en negro antes de mostrar nada.

**Lo que se hizo**

- **Canal de imágenes** (`scripts/build-images.mjs`): AVIF + WebP + JPEG en tres
  anchuras por imagen, `sizes` ajustado al hueco real, `width`/`height`
  intrínsecos y **LQIP** (miniatura difuminada en base64) como fondo inmediato.
  68 MB de origen → 2,4 MB de salidas; **0,94 MB** de variante AVIF móvil.
- Las fotos a sangre pasan a ser `<img>` dentro de `<picture>`, la primera con
  `fetchpriority="high"`: el LCP ahora es una imagen descubrible en el HTML.
- Vídeo y audio con `preload="none"`, carga por proximidad
  (`IntersectionObserver`) y carátula ligera; `Media Session` para el audio.
- GSAP, ScrollTrigger y Lenis **servidos desde el propio origen**; tipografía
  autoalojada (9 `woff2`, subconjunto latino) con dos `preload` y métricas de
  reserva para CLS ≈ 0.
- Intro comprimida a ~1,8 s y **suprimida por completo** si el usuario pide menos
  movimiento.

### 3.3 Contenido, marca y estructura

- **Imágenes con marca de agua ajena.** Las fotos de portada llevaban el
  logotipo del despacho de origen incrustado en la franja inferior. El canal
  recorta esa banda (`CROP` en `scripts/build-images.mjs`) y deja un formato
  panorámico homogéneo. *Nota de derechos: la sustitución por fotografía propia
  es la solución definitiva; esto evita mostrar una firma que no es la del
  estudio.*
- **Logotipo invisible.** El PNG «transparente» venía con el monograma en carbón
  (1,46:1 sobre el fondo negro). `scripts/build-brand.mjs` separa monograma y
  logotipo detectando la banda vacía, recolorea los trazos para fondo oscuro
  (16,95:1) y exporta juegos en WebP/PNG por anchura, más una **imagen social
  1200×630** propia.
- **Ficheros de imagen perdidos.** 16 ficheros referenciados no existían en el
  repositorio (23 referencias). Se sustituyen por piezas reales del fondo
  documental del estudio y el proceso deja constancia en el informe.
- **Sin enlaces internos.** Las 5 páginas de proyecto no se enlazaban desde
  ningún sitio: se añade un índice editorial en la portada con filete, número y
  categoría.
- **Datos de contacto divergentes.** Conviven dos números de WhatsApp y dos
  correos; se unifican al par de las páginas nuevas (`+34 612 484 884`,
  `carqdisantos@gmail.com`) y la auditoría falla si vuelven a divergir.
- **Estructura de medios.** 15 ficheros movidos con `git mv` desde la raíz y
  `Nueva carpeta/` a `assets/media/{video,audio}` con nombres legibles
  (`casa-180-recorrido.mp4` en vez de un UUID).

### 3.4 SEO técnico

- Título, descripción, canónica y robots únicos y coherentes por página.
- Open Graph y Twitter completos, con imagen social propia 1200×630.
- **Datos estructurados** JSON-LD: `ArchitecturalService`/`LocalBusiness`,
  `Person` (Hernando Carrillo), `WebSite`, `CreativeWork` por proyecto,
  `BreadcrumbList` e `ItemList`.
- `sitemap.xml` reescrito con `lastmod` real y extensión `image:`; `robots.txt`
  que declara el sitemap y excluye prototipos.
- `site.webmanifest` + iconos (`favicon`, `apple-touch-icon`, 192 y 512).
- Los 14 prototipos y variantes antiguas (`index-ultra`, `index-it`,
  `GEMINI_index`, `curriculum-1HOJA-v3`…) quedan con `noindex,follow` para que no
  compitan con el sitio real.

---

## 4 · Arquitectura de la solución

```
├── index.html … proyecto-05-bano.html   HTML final (generado, se versiona)
├── assets/
│   ├── css/fonts.css                    Tipografía autoalojada + métricas de reserva
│   ├── css/carquidec.css                Sistema de diseño (tokens, componentes)
│   ├── js/carquidec.js                  Capa de mejoras progresivas
│   ├── fonts/*.woff2                    Subconjunto latino (9 ficheros)
│   ├── img/                             AVIF/WebP/JPEG por anchura + manifest.json + LQIP
│   ├── media/{video,audio}/             Material del estudio con nombres legibles
│   └── vendor/                          GSAP, ScrollTrigger y Lenis servidos en local
├── scripts/
│   ├── build-images.mjs                 Canal de imágenes (descubre desde git, idempotente)
│   ├── build-brand.mjs                  Identidad para fondo oscuro + imagen social
│   └── build.mjs                        Construye las páginas desde git HEAD
├── tools/audit/                         a11y · links · quality · smoke
└── .github/workflows/ci.yml             Construcción reproducible + 5 auditorías
```

**Principio de construcción.** El HTML de las páginas se **genera** desde
`git show HEAD:<página>` con `scripts/build.mjs`. Esto tiene tres consecuencias
deliberadas:

1. **Idempotencia**: ejecutar la construcción cien veces da el mismo resultado,
   nunca acumula parches. La cabecera gestionada viaja entre marcas
   (`<!-- cq:head -->` … `<!-- /cq:head -->`) que se sustituyen enteras, y las
   imágenes tienen un único generador de `<picture>`: el paso que convierte los
   fondos a sangre deja una `<img>` llana y el paso siguiente es el único que
   envuelve. Verificado en CI con `git diff --exit-code -- '*.html'`.
2. **Trazabilidad**: el original vive en git, y cada transformación está
   declarada y comentada en un único fichero.
3. **Verificación en CI**: si alguien edita a mano un HTML final, la construcción
   produce diferencias y la integración continua lo detecta. Con
   `CQ_SOURCE_REF=<commit> npm run build:pages` puede reconstruirse el sitio
   completo desde una referencia anterior del repositorio.

```bash
npm run build          # imágenes + identidad + páginas
npm run build:pages    # sólo las páginas (segundos)
npm run audit          # todas las auditorías
npm run serve          # servidor local en http://localhost:4173
```

---

## 5 · Cumplimiento de `UNIVERSAL_PREMIUM_WEB_SPEC.md`

El repositorio ya declaraba 125 criterios de web premium. Este es el estado tras
la intervención sobre los que son verificables sin navegador:

| Criterio | Estado | Nota |
|---|---|---|
| 5 · Rendimiento como característica | ✅ | Ruta crítica 272 kB; imágenes −98,5 % |
| 6 · Accesibilidad AA | ✅ | axe + comprobaciones propias sin incidencias |
| 7 · Movimiento con sentido | ✅ | `prefers-reduced-motion` respetado en CSS y JS |
| 11-24 · Tokens y sistema | ✅ | `assets/css/carquidec.css` (color, escala, espacio, tiempo, capas) |
| 25-40 · Componentes, imágenes responsivas, fuentes | ✅ | `<picture>` AVIF/WebP, fuentes locales, imágenes dimensionadas |
| 37 · Imágenes responsivas | ✅ | `srcset`/`sizes` por rol + LQIP |
| 38 · Carga de fuentes | ✅ | `preload`, `swap`, subconjunto y métricas de reserva |
| 41-49 · Animación e interacción | ⚠️ | GSAP se mantiene; migrar a `ScrollTimeline`/`View Transitions` es el siguiente paso (ya hay transiciones de vista de página) |
| 52 · Vídeo | ✅ | `poster` optimizado, `preload="none"`, carga diferida |
| 61-64 · Presupuestos | ✅ | Medidos y verificados en cada `push` |
| 71-85 · Contrato de accesibilidad | ✅ | Salto, foco visible, contraste, idioma anunciado, 44 px |
| 86-100 · Contenido y narrativa | 🟡 | Se añade índice de proyectos y metadatos; el texto de fondo es del estudio |
| 107-110 · CI/CD, seguridad | ✅ | CI con 5 auditorías, cabeceras de seguridad en `vercel.json` |
| 111-120 · Especialización CARQUIDEC | 🟡 | Base lista (datos estructurados, índice); el portal de cliente o las fichas paramétricas quedan fuera de este alcance |

---

## 6 · Lo que queda pendiente (recomendaciones)

1. **Fotografía propia.** Sustituir las imágenes de referencia por obra
   ejecutada del estudio: es el salto de credibilidad que ninguna optimización
   técnica puede dar. El canal ya está preparado: basta con añadir ficheros a
   `scripts/build-images.mjs` (o al HTML) y ejecutar `npm run build`.
2. **Vídeo con licencia y peso.** Los `mp4` suman ~300 MB en el repositorio.
   Recomendado: transcodificar a AV1/WebM (≈ −60 %), subir a un servicio de
   vídeo y dejar en el repositorio solo póster + enlace.
3. **Formulario conectado.** El `action` sigue siendo un marcador
   (`formspree.io/f/YOUR_FORM_ID`); la interfaz ya informa con claridad de que
   falta configurarlo. Sustituir por el endpoint real.
4. **Limpiar duplicados del repositorio.** Hay 40+ ficheros duplicados
   (`… (1).mp4`, `… (2).pdf`) que no usa ninguna página. Se pueden archivar con
   `git rm` sin afectar al sitio.
5. **Portal de cliente y fichas paramétricas** (criterios 114-118 del pliego):
   siguiente fase de producto, no de acabado.

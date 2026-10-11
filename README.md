# CARQUIDEC

Sitio del estudio de arquitectura y decoración de interiores **CARQUIDEC**
(Hernando Carrillo — Barcelona · Colombia · Italia).

En línea: <https://carquidec.com>

---

## Qué hay aquí

Un sitio estático sin dependencias de ejecución: HTML, CSS y JavaScript servidos
tal cual. Todo lo que se ve funciona sin proceso en el servidor, y sin
JavaScript la web sigue siendo legible (el sistema de diseño contempla
`html:not(.js)`).

- **Sistema de diseño** — `assets/css/carquidec.css` (tokens de color, escala
  tipográfica fluida, componentes y estados).
- **Tipografía autoalojada** — `assets/css/fonts.css` + `assets/fonts/*.woff2`,
  subconjunto latino con `swap` y métricas de reserva (sin Google Fonts).
- **Capa de mejoras progresivas** — `assets/js/carquidec.js` (navegación
  accesible, i18n ES/EN/CA/FR/IT, formularios, vídeo diferido, radio del estudio).
- **Imágenes** — `assets/img/`: AVIF + WebP + JPEG por anchura, con
  `width`/`height` y miniatura difuminada (LQIP) descrita en `manifest.json`.
- **Medios del estudio** — `assets/media/video` y `assets/media/audio`.
- **Librerías** — `assets/vendor/`: GSAP, ScrollTrigger y Lenis servidos en local.

## Cómo trabajar

```bash
npm ci                 # dependencias de desarrollo (sharp, auditores…)
npm run serve          # servidor local en http://localhost:4173
```

### Construcción

Las páginas se construyen a partir de la versión de `git HEAD`, de modo que el
proceso es idempotente y cada transformación está declarada en un solo fichero:

```bash
npm run build:images   # AVIF/WebP/JPEG + LQIP + iconos  (lento, ~2 min)
npm run build:brand    # identidad para fondo oscuro + imagen social
npm run build:pages    # HTML final (segundos)
npm run build          # todo en orden
```

> **Importante:** los HTML de la raíz son **resultado de la construcción**.
> Si editas uno a mano, `npm run build:pages` producirá diferencias y la
> integración continua lo señalará. Edita el original (git), no el resultado.

### Auditorías

```bash
npm run audit              # marcado + CSS + accesibilidad + enlaces + calidad
npm run audit:a11y         # axe-core (WCAG 2.1 AA) + contraste calculado
npm run audit:links        # enlaces, anclas y recursos rotos
npm run audit:quality      # SEO técnico y presupuesto de rendimiento
node tools/audit/a11y.mjs --baseline   # compara con el commit anterior
node tools/audit/smoke.mjs             # arranca la web en jsdom y la comprueba
```

Estado actual: **0 errores** en las cinco auditorías y **42 de 42**
comprobaciones funcionales. El detalle, con el antes y el después, está en
[`AUDITORIA.md`](AUDITORIA.md).

## Estructura

```
├── *.html                     Páginas del sitio (generadas y versionadas)
├── assets/                    Sistema de diseño, tipografía, imágenes, medios, librerías
├── scripts/                   Canal de imágenes, identidad y construcción de páginas
├── tools/audit/               Auditorías: a11y, enlaces, calidad, funcional
├── .github/workflows/ci.yml   Construcción reproducible + auditorías
├── vercel.json                Cabeceras de caché y seguridad (despliegue actual)
├── AUDITORIA.md               Informe de la intervención (tooling y resultados)
└── UNIVERSAL_PREMIUM_WEB_SPEC.md   Pliego de criterios de referencia del proyecto
```

## Prototipos y material de archivo

En la raíz conviven prototipos anteriores (`index-ultra.html`, `index-it.html`,
`GEMINI_index.html`, `parallax-futurista.html`, `logo-3d.html`, currículums…) que
se conservan como archivo. Marcados con `robots: noindex` y excluidos en
`robots.txt` para que no compitan con el sitio en los buscadores.

El material pesado sin usar (duplicados `… (1).mp4`, maquetas, PDF) sigue en el
repositorio. Es candidato a archivarse fuera de git: ver las recomendaciones
finales de [`AUDITORIA.md`](AUDITORIA.md#6--lo-que-queda-pendiente-recomendaciones).

## Contribuir

1. Rama con prefijo `feat/`, `fix/` o `docs/`.
2. Cambios pequeños, mensajes claros.
3. `npm run build && npm run audit` antes de abrir el *pull request*.
4. El CI debe pasar (construcción sin diferencias + cinco auditorías).

## Licencia

Sin licencia declarada. Todo el contenido, textos, imágenes y marca pertenecen a
CARQUIDEC. Las fuentes (Cormorant Garamond, Space Grotesk) y las librerías
(GSAP, ScrollTrigger, Lenis) se distribuyen bajo sus propias licencias, incluidas
en `assets/vendor` y en los paquetes de `@fontsource`.

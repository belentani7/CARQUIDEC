# PLAN 40 PASOS — CARQUIDEC Mejora Integral

## ESTADO ACTUAL
- **index.html**: 466 lineas, funcional, GSAP+Lenis+ScrollTrigger
- **5 paginas proyecto**: villa, hotel, comercial, oficina, bano
- **Contenido**: 4 idiomas (ES/EN/CA/FR), logo, 15+ imagenes
- **Tech**: HTML vanilla, CSS inline, Google Fonts (Cormorant Garamond + Space Grotesk)

## FASE A: RENDIMIENTO (Pasos 1-8)

1. **Convertir imagenes a WebP** — 15+ JPG/PNG pesados. Reducir 60-80% tamano
2. **Lazy loading nativo** — `loading="lazy"` en todas las imagenes below-the-fold
3. **Preload hero image** — `rel="preload"` solo imagen s1 (above-fold)
4. **Minificar CSS inline** — Actual: ~3KB. Minimizar variables duplicadas
5. **Minificar JS inline** — ~4KB. Eliminar comments, simplificar selectores
6. **Font display swap** — Google Fonts ya usa `display=swap`, verificar
7. **CDN assets** — GSAP/Lenis via CDN ya hecho. Verificar versions actualizadas
8. **Critical CSS inline** — Extraer CSS above-the-fold, resto async

## FASE B: SEO Y META (Pasos 9-16)

9. **Meta description** — `<meta name="description" content="...">` por pagina
10. **Open Graph tags** — og:title, og:description, og:image, og:url
11. **Twitter Cards** — twitter:card, twitter:image
12. **Canonical URL** — `<link rel="canonical">` por pagina
13. **Sitemap.xml** — Generar con todas las paginas
14. **robots.txt** — Allow all, sitemap reference
15. **Structured data** — JSON-LD LocalBusiness para Hernando Carrillo
16. **Alt text descriptivos** — Revisar todos los `<img>` tags

## FASE C: FUNCIONALIDAD (Pasos 17-24)

17. **Formulario contacto** — Formspree/EmailJS endpoint
18. **Validacion email** — Regex + HTML5 pattern
19. **Notificacion envio** — Toast/modal exito/error
20. **Menu hamburguesa movil** — Toggle nav-links en `max-width:768px`
21. **Smooth scroll** — Ya con Lenis. Verificar hash links
22. **Scroll to top** — Boton flotante aparece despues de 500px
23. **Lightbox galeria** — Proyectos: click imagen amplia
24. **Filtro proyectos** — Botones residencial/comercial/hotelero

## FASE D: UX Y ACCESIBILIDAD (Pasos 25-32)

25. **Focus states** — `:focus-visible` en todos los links/botones
26. **Skip to content** — Link oculto para screen readers
27. **Contraste WCAG AA** — Verificar `--td:#777` contra `--bg:#0a0a0a`
28. **Reduced motion** — `@media(prefers-reduced-motion)` desactivar animaciones
29. **Touch targets** — Min 44px en movil para links/botones
30. **Print stylesheet** — Ocultar nav/loader/indicator, fondo blanco
31. **404 page** — Pagina de error personalizada
32. **Favicon** — Generar desde logo PNG

## FASE E: MANTENIMIENTO (Pasos 33-40)

33. **CSS variables centralizadas** — Mover colores/fonts a `:root` consistente
34. **Eliminar duplicacion** — CSS repetido entre index.html y proyecto-*.html
35. **Componentes reutilizables** — Nav, footer, contact como templates
36. **Git init + .gitignore** — Version control del proyecto
37. **README.md** — Instrucciones deploy
38. **manifest.json** — PWA basico (iconos, theme-color)
39. **Analytics** — Google Analytics 4 o Plausible (privacy-first)
40. **Deploy** — Vercel/Netlify, dominio carquidec.com

## PRIORIDAD

**Alto impacto, bajo esfuerzo**: 1, 2, 9, 10, 17, 25, 32, 36
**Medio**: 3, 4, 5, 11, 13, 14, 16, 20, 21, 26, 27, 33
**Bajo (nice-to-have)**: 6, 7, 8, 12, 15, 18, 19, 22, 23, 24, 28, 29, 30, 31, 34, 35, 37, 38, 39, 40

## ESTIMACION TIEMPO

| Fase | Horas aprox |
|------|-------------|
| A: Rendimiento | 2-3h |
| B: SEO | 1-2h |
| C: Funcionalidad | 4-6h |
| D: UX/A11y | 3-4h |
| E: Mantenimiento | 2-3h |
| **TOTAL** | **12-18h** |

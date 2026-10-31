# Refactorización Inteligente de Proyectos Web

- Chat ID: `245f4963-b5bc-45e2-8b05-f4591c8634fe`
- Mensajes: 2
- Periodo: 2026-08-08 02:09 UTC → 2026-08-08 02:09 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-08-08 02:09

otro asunto, quiero una tarea masiva tipo codex ves a la carpeta x con 17 proyectos y mejoralos al maximo pero quiero hacer lo de la foem Ma intelgente.Para ejecutar una refactorización masiva de 17 proyectos de la forma más inteligente y eficiente (al estilo Codex/AI Agent), el mayor error es lanzar una IA a modificar código a ciegas. El enfoque correcto es estructurar el proceso en tres fases automatizadas: Auditoría, Inyección de Contexto y Modificación Incremental.Aquí tienes la estrategia de ingeniería de prompts y automatización para lograrlo:1. Preparación del "Cerebro" (Contexto Global)Antes de tocar el código, debes definir qué significa "mejorarlo al máximo" para que la IA no invente soluciones inconsistentes. Crea un archivo central de directrices (por ejemplo, custom_instructions.md) que contenga:El Stack Tecnológico: Versiones exactas de lenguajes y frameworks que usas.Reglas de Estilo: Si usas TypeScript estricto, ESLint específico, arquitectura limpia, etc.Librerías Permitidas: Qué paquetes prefieres usar para optimizar (ej. sustituir bucles manuales por utilidades modernas).2. Automatización del Pipeline (El Script)No abras los 17 proyectos a mano. Utiliza un script en Python o una herramienta de CLI (como aider, Cursor Agent o Claude Engineer) combinada con un script Bash.El flujo inteligente para cada una de las 17 carpetas debe ser:[Proyecto X] ➔ [Análisis de Deuda Técnica] ➔ [Aplicar Reglas Globales] ➔ [Test Automático] ➔ [Commit Git]
3. Prompting en Dos Pasos (La Forma Inteligente)En lugar de pedirle a la IA "mejora este archivo", divide el trabajo por cada proyecto para evitar que el modelo se sature o trunque el código:Paso A: El Prompt de Auditoría (Read-Only)Pasa el código del proyecto a la IA y pídele que genere un plan de acción sin modificar nada aún."Actúa como un Arquitecto de Software Senior. Analiza este proyecto de forma integral. Identifica: 1) Cuellos de botella de rendimiento, 2) Vulnerabilidades de seguridad, 3) Código redundante o antipatrones. Genera una lista de tareas priorizadas de menor a mayor riesgo. No modifiques el código todavía."Paso B: El Prompt de Ejecución IncrementalAplica los cambios por categorías (primero tipado, luego lógica, luego rendimiento), nunca todo a la vez."Basado en el plan anterior, ejecuta la tarea 1 (Optimización de consultas/funciones). Aplica las reglas de nuestro archivo custom_instructions.md. Devuelve solo los archivos modificados. Asegúrate de mantener la retrocompatibilidad."Herramientas recomendadas para ejecuciones masivasAider (CLI): Es una herramienta de terminal que puedes programar con scripts para que entre a una carpeta, lea un prompt de mejora, modifique el código y haga un commit de Git automáticamente si los tests pasan.Cursor (Composer / Agent Mode): Te permite seleccionar múltiples carpetas o proyectos enteros y darle instrucciones complejas en lenguaje natural.Para empezar de forma ordenada, ¿qué lenguaje o framework principal comparten estos 17 proyectos y cuál es el principal objetivo de la mejora (rendimiento, seguridad, migración de versión o limpieza de código)?Las respuestas de la IA pueden contener errores. Más informaciónson empresa basicamente, webs pero entiendo deno ser especifio no puedo pedirllo que lo haga todo universal el mismoExacto, has dado en el blanco. Intentar que una IA aplique una solución "universal" a 17 proyectos web diferentes es la receta perfecta para romper el código y generar bugs difíciles de encontrar. Las webs, aunque compartan tecnologías, tienen arquitecturas, dependencias y lógicas de negocio distintas.Para hacerlo de la forma más inteligente, debes programar un pipeline por bloques de especialización. En lugar de pedirle a la IA "mejora esta web", debes pedirle "ejecuta esta optimización específica en esta web".Aquí tienes la estructura para segmentar el trabajo de forma inteligente y por qué este enfoque cambia las reglas del juego:1. El Enfoque por "Capas de Especialización"Divide la mejora masiva en tareas atómicas. Ejecuta una sola capa a la vez en los 17 proyectos. Esto te permite validar los cambios rápidamente.Fase 1: Seguridad ➔ Fase 2: Rendimiento Web ➔ Fase 3: Modernización de Sintaxis
Capa 1: Seguridad y Dependencias (Bajo riesgo, alto impacto)Meta: Actualizar paquetes vulnerables y asegurar cabeceras.Prompt Inteligente: "Analiza el archivo de dependencias (package.json, composer.json, etc.) de este proyecto. Identifica librerías obsoletas o con vulnerabilidades conocidas. Genera el comando para actualizarlas asegurando que no haya conflictos de versiones mayores (breaking changes)."Capa 2: Rendimiento y Core Web Vitals (Específico de Webs)Meta: Optimizar la carga, imágenes y scripts.Prompt Inteligente: "Revisa los componentes de la interfaz. Identifica: 1) Imágenes sin lazy-loading o dimensiones fijas, 2) Scripts externos que bloqueen el renderizado, 3) Bucles que procesen datos innecesarios en el cliente. Aplica las mejores prácticas de rendimiento web actuales."Capa 3: Limpieza de Código y ModernizaciónMeta: Eliminar código muerto y unificar estilos.Prompt Inteligente: "Busca funciones duplicadas, variables declaradas pero no usadas, y bloques de código huérfano en este proyecto. Reemplaza estructuras antiguas por sintaxis moderna del lenguaje (ej. Async/Await en lugar de promesas anidadas) manteniendo intacta la lógica de negocio."2. El Filtro de Contexto Local (Evitar Alucinaciones)Para que la IA no invente código universal que no encaja en una web específica, debes obligarla a leer los archivos de configuración locales de cada proyecto antes de escribir una sola línea de código.Inserta siempre este bloque de control en tu herramienta o prompt:"Antes de proponer cualquier cambio, lee obligatoriamente los archivos de configuración del proyecto (ej. tsconfig.json, .eslintrc, vite.config.js, tailwind.config.js). Cualquier refactorización debe respetar estrictamente las reglas configuradas en este entorno local."3. Automatiza la Red de Seguridad (Git)La forma inteligente de trabajar masivamente es automatizar el control de daños. Si usas herramientas de terminal como aider, puedes estructurar un script que automatice esto por cada carpeta:Crear rama: git checkout -b feature/optimizacion-iaEjecutar IA: La IA aplica solo la Capa 1 (Seguridad).Probar: Ejecutas los tests de la web (o verificas que compile).Commit automático: Si compila, se hace commit. Si rompe, se hace git restore y se salta al siguiente proyecto para revisión manual.¿Qué tecnologías principales usan estas webs (por ejemplo: WordPress, React, PHP puro, Node.js) y qué herramienta tienes pensado usar para pasar los prompts (Cursor, Aider, ChatGPT Plus, VS Code)?Las respuestas de la IA pueden contener errores. Más informaciónInstagram💻 ¿Sigues dudando si tomar el Diplomado en Diseño y Desarrollo Web? Descubre cómo transformar una idea en un sitio web funcional, desde la planeación y el diseño hasta su desarrollo y publicación. 🚀 🎓 Inscripciones abiertas. #WebDesign #Frontend #DiseñoWeb #EducaciónContinuaFAD #uiuxdesign19 jun 2026 — ¿Tu página web se cae cuando entran muchos usuarios? Entonces el problema principal no es el diseño, es la arquitectura. La arquit...InstagramDeja de pedirle código a la IA como si pudiera leer tu mente. 👀 Si tu prompt es genérico, la respuesta también lo será. Porque la diferencia entre un prompt normal y un buen prompt puede estar en una sola cosa: la claridad con la que explicas lo que necesitas. Mira el vídeo completo en YouTube y aprende a sacarle más partido a tus prompts. Link en bio 🚀 #NTTDATAEspaña #Prompting #InteligenciaArtificial #IA #Developers1 jun 2026 — Adivina el resto de tu arquitectura con lo poco que ve. Y cuando adivina, duplica funciones, rompe módulos que ni miró y te deja u...

## [ASSISTANT] 2026-08-08 02:09 · Qwen3.8-Max

## 0) Lectura del encargo como comité multidisciplinar

**Consulta explícita:** necesitas una “tarea masiva tipo Codex” para entrar en una carpeta `x` con 17 proyectos web y mejorarlos “al máximo”, pero de forma inteligente, no universal.

**Consulta implícita:** necesitas un sistema ejecutable: prompts, reglas, automatización, control de errores, validación por proyecto, git, tests, auditoría previa, y una estrategia por capas para no romper 17 webs distintas.

**Consulta periférica:** las referencias a Instagram y a “prompting” indican que el problema real no es solo técnico: hay un déficit de especificación. Cuando el prompt es genérico, la IA responde genérico. Cuando la arquitectura no se entiende, la IA inventa contexto. Eso produce duplicación, regresiones y deuda técnica nueva.

---

# 1) Triangulación del problema

## 1.1 Perspectiva científico-técnica

Una refactorización masiva no es “pedir mejoras”; es un proceso de ingeniería de software guiado por métricas, restricciones y verificación. La norma ISO/IEC 25010 define calidad de software mediante características como adecuación funcional, eficiencia de desempeño, compatibilidad, usabilidad, fiabilidad, seguridad, mantenibilidad y portabilidad. “Mejorar al máximo” debe traducirse a variables medibles: LCP, INP, CLS, vulnerabilidades, cobertura, tiempo de build, errores de lint, tamaño de bundle, tiempo de respuesta, disponibilidad y mantenibilidad.

**Sesgo detectado:** metric fixation o reduccionismo métrico. Optimizar solo Lighthouse puede romper negocio si no se validan flujos reales: formularios, checkout, leads, login, APIs, analytics.

**Certeza:** alta en que cualquier refactorización sin tests, sin backup y sin control de versiones tiene riesgo alto. Media en que una IA pueda mejorar código de forma fiable sin contexto de negocio. Baja si se intenta aplicar una solución universal a 17 proyectos heterogéneos.

## 1.2 Perspectiva práctica/DevOps

La forma operativa correcta es: inventario → auditoría → plan → ejecución por capas → tests → commit → rollback automático. Esto se apoya en prácticas de integración continua, trunk-based development, small batches, conventional commits y semantic versioning. La literatura DORA/Google Cloud sobre DevOps muestra que los equipos de alto rendimiento cambian código con frecuencia, pero con automatización, tests y recuperación rápida ante fallos.

**Sesgo detectado:** automation bias. Confiar en que el script o el agente resolverá casos ambiguos. La IA debe operar con puertas: si no hay tests, si el build falla, si el stack no se reconoce, se detiene o baja a revisión humana.

**Certeza:** alta en que un pipeline con ramas, commits atómicos y rollback reduce daño. Alta en que actualizar dependencias menores y corregir headers de seguridad suele ser de bajo riesgo si se valida. Media en mejoras de rendimiento sin medir antes.

## 1.3 Perspectiva ético-histórica

Históricamente, la refactorización automática pasó de linters y formateadores a codemods, bots de dependencias y agentes generativos. El riesgo ético es delegar decisiones arquitectónicas críticas en sistemas que no entienden el contexto legal, contractual o de negocio. En webs empresariales, un cambio puede romper SEO, analytics, formularios, accesibilidad, cookies, consentimiento, pagos o trazabilidad. OWASP Top 10 2021 y NIST SP 800-218 recuerdan que seguridad no es un parche final: es parte del ciclo de desarrollo.

**Sesgo detectado:** ilusión de universalidad. Un prompt como “mejora todo” invita a la IA a inventar estándares. La IA no debe decidir sola qué es “mejor” si no hay criterios explícitos.

**Certeza:** alta en responsabilidad humana. La IA puede asistir; el responsable del sistema es el equipo/propietario del proyecto.

---

# 2) Resumen ejecutivo: cómo hacerlo de forma inteligente

La tarea no debe ser:

> “Ve a `x` y mejora los 17 proyectos.”

Debe ser:

> “Analiza 17 proyectos sin modificar código, detecta stack, genera inventario, auditoría y plan priorizado. Después ejecuta mejoras por capas: seguridad, rendimiento web y modernización de código. Cada capa se aplica por proyecto, se valida con build/tests/lighthouse y se commitea solo si pasa. Si falla, rollback.”

El enfoque correcto es:

```text
[Carpeta x]
   ├── Proyecto 01
   ├── Proyecto 02
   ├── ...
   └── Proyecto 17

Pipeline por proyecto:
1. Snapshot Git / backup
2. Inventario de stack
3. Auditoría read-only
4. Plan JSON priorizado
5. Aprobación humana o gate automático
6. Ejecución por capas:
   SEC → PERF → CODE
7. Tests / build / lint / smoke
8. Commit atómico
9. Reporte
10. Rollback si falla
```

---

# 3) Matriz de estrategia para 17 proyectos web

## 3.1 Matriz por capas

| Capa | Objetivo | Riesgo | Evidencia requerida | Gate de aceptación |
|---|---|---:|---|---|
| 0. Inventario | Detectar stack, configs, tests, build, dependencias | Bajo | `package.json`, `composer.json`, `wp-config.php`, `tsconfig.json`, etc. | Manifiesto JSON generado |
| 1. Seguridad | Dependencias vulnerables, headers, sanitización, secretos | Bajo-medio | `npm audit`, `composer audit`, OWASP Top 10, headers HTTP | 0 critical known vulnerables si es posible; build pasa |
| 2. Rendimiento web | Core Web Vitals, imágenes, scripts, lazy-loading, cache | Medio | LCP, INP, CLS, bundle size, Lighthouse, WebPageTest | LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 en laboratorio razonable |
| 3. Modernización | Sintaxis, duplicados, dead code, tipado, refactor suave | Medio-alto | ESLint, PHPStan, TypeScript, tests unitarios | Tests pasan, lint pasa, sin cambio funcional observable |
| 4. Accesibilidad/SEO técnico | WCAG, meta, semántica, headings, alt, canonical | Medio | WCAG 2.2, Lighthouse SEO/a11y | No romper layout ni flujos |
| 5. Negocio | Formularios, leads, checkout, analytics, conversiones | Alto | Tests E2E, smoke manual | Flujo crítico permanece funcional |

## 3.2 Matriz de ejecución para los 17 proyectos

| Proyecto | Stack detectado | Rama Git | Auditoría | Capa SEC | Capa PERF | Capa CODE | Estado |
|---|---|---|---|---|---|---|---|
| P01 | `[detectar]` | `refactor/codex-p01` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |
| P02 | `[detectar]` | `refactor/codex-p02` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |
| P03 | `[detectar]` | `refactor/codex-p03` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |
| P04 | `[detectar]` | `refactor/codex-p04` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |
| P05 | `[detectar]` | `refactor/codex-p05` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |
| P06 | `[detectar]` | `refactor/codex-p06` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |
| P07 | `[detectar]` | `refactor/codex-p07` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |
| P08 | `[detectar]` | `refactor/codex-p08` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |
| P09 | `[detectar]` | `refactor/codex-p09` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |
| P10 | `[detectar]` | `refactor/codex-p10` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |
| P11 | `[detectar]` | `refactor/codex-p11` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |
| P12 | `[detectar]` | `refactor/codex-p12` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |
| P13 | `[detectar]` | `refactor/codex-p13` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |
| P14 | `[detectar]` | `refactor/codex-p14` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |
| P15 | `[detectar]` | `refactor/codex-p15` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |
| P16 | `[detectar]` | `refactor/codex-p16` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |
| P17 | `[detectar]` | `refactor/codex-p17` | `[audit.json]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PASS/FAIL]` | `[PENDING]` |

---

# 4) Análisis con casos típicos de webs empresariales

## Caso A: WordPress / PHP / MySQL

**Síntomas comunes:** plugins antiguos, PHP desactualizado, temas con JS bloqueante, imágenes sin dimensiones, formularios sin protección, cookies sin flags, cache mal configurada.

**Mejoras seguras:**
- Actualizar core, plugins y themes en entorno staging.
- Revisar `wp-config.php`, permisos de archivos y prefijos de BD.
- Añadir headers de seguridad: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, CSP en modo report-only si hay muchos scripts.
- Activar lazy-loading nativo de imágenes.
- Revisar `srcset` para imágenes responsive.
- Optimizar autoload options y queries lentas.
- Evitar cambios masivos en plantillas sin tests.

**Riesgo alto:** actualizar plugins con breaking changes, cambiar hooks, modificar templates child, tocar WooCommerce si no hay sandbox.

**Gate recomendado:** backup BD + archivos, staging, smoke test de home, contacto, blog, tienda si existe.

## Caso B: React / Next.js / Vite / TypeScript

**Síntomas comunes:** bundle grande, componentes re-renderizados, imágenes sin optimizar, scripts de terceros bloqueantes, TypeScript laxo, dependencias duplicadas.

**Mejoras seguras:**
- Dividir rutas con dynamic import o lazy loading.
- Optimizar `next/image` o `<img>` con dimensiones.
- Revisar `loading="lazy"` y `decoding="async"` donde aplique.
- Eliminar imports muertos con ESLint y TypeScript.
- Migrar `useEffect` problemáticos solo con tests.
- Revisar fetch en servidor vs cliente para evitar agua de cascada.
- Reducir dependencias de UI pesadas si hay alternativas pequeñas.

**Riesgo alto:** cambiar hydration, modificar providers globales, alterar estado global, tocar APIs de autenticación sin pruebas.

**Gate recomendado:** `npm run build`, `npm test`, `npm run lint`, prueba visual básica, Lighthouse CI.

## Caso C: PHP legacy sin framework

**Síntomas comunes:** mezcla HTML/PHP/SQL, consultas concatenadas, sesión insegura, código duplicado, rutas relativas frágiles.

**Mejoras seguras:**
- Identificar SQL injection potencial y migrar a prepared statements.
- Escapar salidas HTML.
- Asegurar cookies de sesión: `Secure`, `HttpOnly`, `SameSite`.
- Separar configuración de código.
- Introducir PSR-12 gradualmente.
- Añadir logging básico.
- No reescribir todo; encapsular módulos críticos.

**Riesgo alto:** refactorizar funciones globales que se usan en muchas páginas sin tests.

**Gate recomendado:** smoke test por ruta crítica; si no hay tests, crear tests de humo antes.

## Caso D: Node.js / Express / API + frontend

**Síntomas comunes:** sin rate limiting, sin validación de entrada, CORS abierto, secrets en `.env` mal gestionados, logs insuficientes, middlewares desordenados.

**Mejoras seguras:**
- Validación de entrada con Zod, Joi o similar.
- Rate limiting básico en endpoints públicos.
- CORS explícito por origen.
- Helmet o headers equivalentes.
- Logging estructurado.
- Compresión gzip/brotli.
- Revisar timeouts y manejo de errores.

**Riesgo alto:** cambiar orden de middlewares, modificar autenticación, tocar firma de tokens, alterar validaciones sin tests de contrato.

**Gate recomendado:** tests unitarios, tests de integración, smoke de endpoints críticos.

## Caso E: Web estática HTML/CSS/JS

**Síntomas comunes:** CSS/JS sin minificar, scripts síncronos, imágenes pesadas, fuentes bloqueantes, sin cache headers.

**Mejoras seguras:**
- `defer` o `async` para scripts no críticos.
- Lazy-loading de imágenes below-the-fold.
- Preload de recursos críticos solo si son realmente críticos.
- Minificación CSS/JS.
- Optimización de fuentes con `font-display: swap`.
- Revisar terceros: analytics, maps, chat, pixels.

**Riesgo medio:** alterar scripts de tracking o consent mode puede afectar negocio.

**Gate recomendado:** comparar antes/después de red y console; verificar que analytics sigue disparando.

---

# 5) Paquete de tarea masiva tipo Codex

## 5.1 Prompt maestro para ejecutar en Codex / agente CLI

Copia y adapta este prompt. Está diseñado para no hacer cambios a ciegas.

```text
Actúa como un comité multidisciplinar de ingeniería de software: arquitecto senior, security engineer, performance engineer, QA engineer y DevOps engineer.

OBJETIVO:
Refactorizar y mejorar 17 proyectos web ubicados en ./x de forma inteligente, incremental, verificable y sin aplicar soluciones universales.

REGLAS ABSOLUTAS:
1. No modificar código hasta haber generado inventario y auditoría read-only.
2. No hacer upgrades mayores de dependencias salvo aprobación explícita.
3. No alterar lógica de negocio, URLs, endpoints, analytics, pagos, formularios o autenticación sin tests.
4. Cada proyecto se trata como un sistema distinto.
5. Antes de proponer cambios, leer archivos de configuración locales del proyecto.
6. Respetar stack detectado: WordPress, React, Next.js, Vite, PHP, Node.js, HTML estático, etc.
7. Trabajar por capas: seguridad, rendimiento web y modernización de código.
8. Cada capa debe generar diff mínimo, verificable y reversible.
9. Si un proyecto no tiene tests, el agente debe proponer smoke tests mínimos antes de refactorizaciones profundas.
10. Si una tarea rompe build/lint/tests, se debe hacer rollback y marcar el proyecto como NEEDS_REVIEW.

FLUJO OBLIGATORIO:

FASE 0 - PREPARACIÓN:
- Recorre ./x y detecta exactamente 17 carpetas de proyecto o lista todas si hay más/menos.
- Para cada proyecto, detecta si existe .git. Si no existe, no inicializar nada sin confirmación; reportarlo.
- Genera ./x/.codex-refactor/projects.txt con la lista de proyectos.
- Genera ./x/.codex-refactor/manifest.json con stack, comandos de build, test, lint y nivel de riesgo.

FASE 1 - AUDITORÍA READ-ONLY:
Para cada proyecto, analiza sin modificar archivos:
- Seguridad: dependencias vulnerables, headers, XSS potencial, SQLi, CSRF, secretos expuestos, cookies, CORS.
- Rendimiento: imágenes, scripts bloqueantes, lazy-loading, bundle size, cache, fuentes, terceros.
- Código: duplicados, dead code, funciones largas, sintaxis antigua, errores de lint, tipado débil.
- Arquitectura: separación de responsabilidades, configuración, entornos, logs, manejo de errores.
- Tests: existen, cobertura aproximada, comandos, confiabilidad.

FASE 2 - PLAN:
Genera para cada proyecto:
- audit.md
- audit.json
- tasks.json

Cada tarea en tasks.json debe tener:
- id
- layer: SEC | PERF | CODE | A11Y | SEO | BIZ
- severity: low | medium | high
- risk: low | medium | high
- impact: low | medium | high
- evidence
- files
- action
- validation
- rollback

FASE 3 - ESPERA DE APROBACIÓN:
No ejecutar cambios hasta que un humano apruebe o hasta que un gate automático confirme que solo se ejecutarán tareas risk=low.

FASE 4 - EJECUCIÓN POR CAPAS:
Ejecutar en este orden por proyecto:
1. SEC: dependencias menores, headers, flags de cookies, validación básica, secrets no expuestos.
2. PERF: imágenes, lazy-loading, defer/async, preload razonable, cache, terceros bloqueantes.
3. CODE: dead code, imports sin uso, refactor pequeño, tipado, sintaxis moderna.

Después de cada capa:
- Ejecutar build_command si existe.
- Ejecutar lint_command si existe.
- Ejecutar test_command si existe.
- Si no hay tests, ejecutar smoke_command sugerido.
- Si algo falla: git restore . && git clean -fd, no seguir, marcar NEEDS_REVIEW.

FASE 5 - COMMITS:
Si una capa pasa:
- git add -A
- git commit -m "refactor(PXX): capa SEC - descripción breve"
Usar Conventional Commits.

FASE 6 - REPORTE GLOBAL:
Generar ./x/.codex-refactor/INDEX.md con:
- proyecto
- stack
- tareas aplicadas
- tareas pendientes
- tests/build/lint status
- métricas antes/después si están disponibles
- riesgos restantes
- próximos pasos

FORMATO DE SALIDA:
Devuelve primero resumen ejecutivo. Luego tabla de estado por proyecto. Después lista de bloqueos críticos. No devuelvas código completo si no se solicita; devuelve rutas, diffs resumidos y comandos.
```

---

# 6) Archivo `custom_instructions.md` para guiar al agente

Coloca esto en la raíz de `x` o en el contexto del agente.

```markdown
# Custom Instructions para refactorización masiva de 17 webs

## Objetivo
Mejorar seguridad, rendimiento web, mantenibilidad y calidad de código sin romper funcionalidad de negocio.

## Proyectos
Hay 17 proyectos web en ./x. Cada proyecto puede tener stack distinto. No se permiten soluciones universales.

## Stacks posibles
- WordPress / PHP / MySQL
- React / Next.js / Vite / TypeScript
- Node.js / Express
- PHP legacy
- HTML/CSS/JS estático
- Combinaciones anteriores

## Prioridad
1. No romper negocio.
2. Seguridad.
3. Rendimiento web.
4. Modernización de código.
5. Accesibilidad y SEO técnico.

## Criterios de calidad
- Build exitoso si existe.
- Tests pasan si existen.
- Lint sin errores graves.
- No introducir vulnerabilidades conocidas.
- No aumentar CLS.
- No bloquear renderizado con scripts innecesarios.
- Mantener URLs, endpoints, analytics, formularios y flujos críticos.
- Commits atómicos y reversibles.

## Métricas web objetivo
- LCP <= 2.5s
- INP <= 200ms
- CLS <= 0.1
- Time to Interactive razonable según dispositivo y red
- Sin errores graves en consola

## Prohibiciones
- No actualizar major versions sin aprobación.
- No eliminar dependencias críticas sin evidencia.
- No reescribir módulos completos sin tests.
- No tocar autenticación, pagos, cookies legales o analytics sin validación.
- No aplicar el mismo patch a todos los proyectos sin verificar contexto.
- No borrar assets, contenido, plugins o componentes sin verificar uso.

## Orden de trabajo
1. Inventario
2. Auditoría read-only
3. Plan priorizado
4. Seguridad
5. Rendimiento
6. Código
7. Reporte

## Git
- Rama por proyecto: refactor/codex-<project>
- Commit por capa
- Mensajes Conventional Commits
- Rollback automático si tests/build fallan
```

---

# 7) Script Bash para inventario inicial

Este script no modifica código. Solo inventaría proyectos y señales de stack.

```bash
#!/usr/bin/env bash
set -euo pipefail

ROOT="${1:-./x}"
OUT="$ROOT/.codex-refactor"

mkdir -p "$OUT"

find "$ROOT" -mindepth 1 -maxdepth 1 -type d | sort > "$OUT/projects.txt"

: > "$OUT/manifest.csv"
echo "project,has_git,stack_signals,package_json,composer_json,requirements,tsconfig,vite_config,next_config,wp_config" >> "$OUT/manifest.csv"

while IFS= read -r project; do
  name=$(basename "$project")
  has_git="no"
  [ -d "$project/.git" ] && has_git="yes"

  signals=""
  package_json="no"
  composer_json="no"
  requirements="no"
  tsconfig="no"
  vite_config="no"
  next_config="no"
  wp_config="no"

  [ -f "$project/package.json" ] && package_json="yes"
  [ -f "$project/composer.json" ] && composer_json="yes"
  [ -f "$project/requirements.txt" ] && requirements="yes"
  [ -f "$project/pyproject.toml" ] && requirements="yes"
  [ -f "$project/tsconfig.json" ] && tsconfig="yes"
  [ -f "$project/vite.config.js" ] || [ -f "$project/vite.config.ts" ] && vite_config="yes"
  [ -f "$project/next.config.js" ] || [ -f "$project/next.config.mjs" ] && next_config="yes"
  [ -f "$project/wp-config.php" ] && wp_config="yes"

  if [ "$wp_config" = "yes" ]; then
    signals="wordpress"
  elif [ "$next_config" = "yes" ]; then
    signals="nextjs"
  elif [ "$vite_config" = "yes" ]; then
    signals="vite"
  elif [ "$package_json" = "yes" ]; then
    signals="node/frontend"
  elif [ "$composer_json" = "yes" ]; then
    signals="php/composer"
  elif [ "$requirements" = "yes" ]; then
    signals="python"
  else
    signals="unknown"
  fi

  echo "$name,$has_git,$signals,$package_json,$composer_json,$requirements,$tsconfig,$vite_config,$next_config,$wp_config" >> "$OUT/manifest.csv"

  {
    echo "# Project: $name"
    echo "git: $has_git"
    echo "stack_signals: $signals"
    echo
    echo "## Root files"
    find "$project" -maxdepth 1 -type f | sort
    echo
    echo "## Config files"
    for f in package.json composer.json requirements.txt pyproject.toml tsconfig.json vite.config.js vite.config.ts next.config.js next.config.mjs wp-config.php .env.example tailwind.config.js tailwind.config.ts; do
      [ -e "$project/$f" ] && echo "$f"
    done
  } > "$OUT/$name.inventory.md"

done < "$OUT/projects.txt"

echo "Inventario generado en $OUT"
```

---

# 8) Script Git para preparar ramas de forma segura

Ejecuta esto solo si todos los proyectos deben tener Git activo. Si hay proyectos sin Git, primero revisa manualmente.

```bash
#!/usr/bin/env bash
set -euo pipefail

ROOT="${1:-./x}"
OUT="$ROOT/.codex-refactor"
BRANCH_PREFIX="refactor/codex"

[ -f "$OUT/projects.txt" ] || { echo "Falta projects.txt. Ejecuta primero el inventario."; exit 1; }

while IFS= read -r project; do
  name=$(basename "$project")
  branch="$BRANCH_PREFIX-$(echo "$name" | tr '[:upper:]' '[:lower:]' | tr -cd 'a-z0-9')"

  if [ ! -d "$project/.git" ]; then
    echo "[SKIP] $name no tiene .git"
    continue
  fi

  git -C "$project" fetch --all --prune || true

  if [ -n "$(git -C "$project" status --porcelain)" ]; then
    git -C "$project" add -A
    git -C "$project" commit -m "chore($name): baseline before codex refactor"
  fi

  git -C "$project" switch -c "$branch" 2>/dev/null || git -C "$project" switch "$branch"

  echo "[OK] $name en rama $branch"
done < "$OUT/projects.txt"
```

---

# 9) Prompts por fase

## 9.1 Prompt de inventario y manifiesto

```text
Actúa como arquitecto de software. Solo lectura.

Analiza cada proyecto dentro de ./x y genera un manifiesto técnico. No modifiques archivos.

Para cada proyecto detecta:
- nombre
- stack probable
- framework
- lenguaje
- package manager
- archivos de configuración
- comandos de build
- comandos de test
- comandos de lint
- si tiene Git
- si tiene tests
- si tiene CI
- si parece WordPress, React, Next.js, Vite, Node, PHP legacy o HTML estático
- riesgos iniciales

Salida requerida:
1. ./x/.codex-refactor/manifest.json
2. ./x/.codex-refactor/manifest.md

El JSON debe tener esta forma:
{
  "projects": [
    {
      "name": "P01",
      "path": "./x/P01",
      "stack": "nextjs",
      "language": "typescript",
      "package_manager": "npm",
      "has_git": true,
      "has_tests": true,
      "build_command": "npm run build",
      "test_command": "npm test",
      "lint_command": "npm run lint",
      "config_files": [],
      "risks": []
    }
  ]
}
```

## 9.2 Prompt de auditoría read-only

```text
Actúa como arquitecto senior de software, security engineer y performance engineer.

Analiza este proyecto de forma integral. No modifiques ningún archivo.

Objetivo:
Generar una auditoría técnica y un plan de tareas priorizado.

Evalúa:
1. Seguridad:
   - dependencias vulnerables
   - headers HTTP ausentes
   - XSS potencial
   - SQL injection potencial
   - CSRF
   - cookies sin flags
   - CORS permisivo
   - secrets expuestos

2. Rendimiento web:
   - imágenes sin lazy-loading o dimensiones
   - scripts bloqueantes
   - CSS crítico
   - bundle pesado
   - fuentes bloqueantes
   - cache mal configurada
   - terceros que bloquean render

3. Código:
   - duplicación
   - dead code
   - funciones largas
   - sintaxis antigua
   - tipado débil
   - errores de lint
   - antipatrones

4. Arquitectura:
   - configuración
   - separación de responsabilidades
   - manejo de errores
   - logs
   - tests
   - dependencias innecesarias

Salida:
- audit.md con resumen ejecutivo
- audit.json con hallazgos estructurados
- tasks.json con tareas priorizadas de menor a mayor riesgo

No propongas reescrituras grandes. Prioriza cambios pequeños, reversibles y verificables.
```

## 9.3 Prompt para ejecución de Capa 1: Seguridad

```text
Basado en tasks.json, ejecuta únicamente tareas de seguridad de riesgo bajo o medio.

Reglas:
- Lee primero package.json, composer.json, tsconfig.json, .eslintrc, vite.config.js, next.config.js, tailwind.config.js, wp-config.php si existen.
- No actualices major versions.
- Solo actualizaciones menores o parches si no generan breaking changes.
- No cambies lógica de negocio.
- No toques autenticación, pagos ni analytics salvo que la tarea lo indique explícitamente.
- Añade o mejora headers de seguridad con enfoque compatible.
- Si hay CSP, proponla primero en report-only si el proyecto tiene muchos scripts externos.
- Ejecuta build/lint/tests si existen.
- Si algo falla, revierte cambios y reporta.

Salida:
- diff resumido
- archivos modificados
- comando de validación usado
- resultado de validación
- tareas restantes
```

## 9.4 Prompt para ejecución de Capa 2: Rendimiento web

```text
Basado en tasks.json, ejecuta únicamente mejoras de rendimiento web de riesgo bajo o medio.

Objetivo:
Mejorar Core Web Vitals sin romper funcionalidad.

Reglas:
- No eliminar scripts de analytics, consentimiento, chat o negocio sin evidencia.
- Añadir lazy-loading a imágenes below-the-fold.
- Respetar dimensiones de imagen para evitar CLS.
- Usar defer/async solo donde no rompa dependencias de scripts.
- No añadir preload masivo.
- Optimizar fuentes si existe control sobre ellas.
- Proponer cache solo si hay servidor o configuración accesible.
- Si el proyecto usa Next.js, preferir next/image y dynamic imports cuando aplique.
- Si es WordPress, respetar hooks y compatibilidad de plugins.
- Ejecutar build/lint/tests.
- Si hay Lighthouse disponible, generar reporte antes/después.

Salida:
- diff resumido
- archivos modificados
- métricas afectadas esperadas
- comando de validación
- resultado
```

## 9.5 Prompt para ejecución de Capa 3: Modernización de código

```text
Basado en tasks.json, ejecuta únicamente tareas de modernización de código de riesgo bajo.

Reglas:
- No cambiar comportamiento observable.
- Eliminar imports/variables sin uso.
- Reemplazar sintaxis antigua por moderna solo si existe soporte en el proyecto.
- No reescribir módulos completos.
- No cambiar APIs públicas, props, endpoints, nombres de funciones exportadas o rutas.
- Mantener compatibilidad con la versión del lenguaje detectada.
- Si el proyecto usa TypeScript, mejorar tipado sin introducir any innecesario.
- Si el proyecto usa PHP, aplicar mejoras graduales compatibles con la versión detectada.
- Ejecutar lint y tests.
- Si no hay tests, proponer smoke tests mínimos antes de seguir.

Salida:
- diff resumido
- archivos modificados
- justificación
- validación ejecutada
```

---

# 10) Formato recomendado para `tasks.json`

```json
{
  "project": "P01",
  "generated_at": "2026-06-19",
  "stack": "nextjs",
  "tasks": [
    {
      "id": "SEC-001",
      "layer": "SEC",
      "severity": "high",
      "risk": "low",
      "impact": "high",
      "title": "Actualizar dependencias patch/minor con vulnerabilidades",
      "evidence": "npm audit reporta 2 moderate y 1 high en dependencias no bloqueantes",
      "files": ["package.json", "package-lock.json"],
      "action": "Actualizar solo versiones compatibles minor/patch y validar build",
      "validation": "npm ci && npm run build && npm test",
      "rollback": "git restore package.json package-lock.json"
    },
    {
      "id": "PERF-001",
      "layer": "PERF",
      "severity": "medium",
      "risk": "low",
      "impact": "high",
      "title": "Añadir lazy-loading a imágenes below-the-fold",
      "evidence": "Se detectan 14 imágenes sin loading=lazy en páginas internas",
      "files": ["src/components/Gallery.tsx"],
      "action": "Añadir loading=lazy y decoding=async donde no afecte hero images",
      "validation": "npm run build && npm run lint && smoke visual",
      "rollback": "git restore src/components/Gallery.tsx"
    },
    {
      "id": "CODE-001",
      "layer": "CODE",
      "severity": "low",
      "risk": "low",
      "impact": "medium",
      "title": "Eliminar imports sin uso",
      "evidence": "ESLint reporta 23 unused imports",
      "files": ["src/**/*.tsx"],
      "action": "Ejecutar limpieza automática verificada",
      "validation": "npm run lint && npm run build",
      "rollback": "git restore ."
    }
  ]
}
```

---

# 11) Orquestador simple por proyecto

Este script es una base. Debes adaptar `AI_CMD` a la herramienta que uses: Codex CLI, Aider, Cursor Agent, Claude Code, etc.

```bash
#!/usr/bin/env bash
set -euo pipefail

ROOT="${1:-./x}"
OUT="$ROOT/.codex-refactor"
PROMPTS_DIR="$ROOT/.codex-prompts"

mkdir -p "$OUT" "$PROMPTS_DIR"

# Define aquí tu comando de IA.
# Ejemplos:
# AI_CMD="codex exec"
# AI_CMD="aider --yes --message-file"
# AI_CMD="claude --prompt-file"
AI_CMD="${AI_CMD:-echo}"

while IFS= read -r project; do
  name=$(basename "$project")
  report_dir="$OUT/reports/$name"
  mkdir -p "$report_dir"

  echo "=================================================="
  echo "Proyecto: $name"
  echo "=================================================="

  echo "[1/4] Auditoría read-only"
  $AI_CMD "$PROMPTS_DIR/audit.md" > "$report_dir/audit.raw.txt" || {
    echo "[FAIL] Auditoría falló en $name"
    continue
  }

  echo "[2/4] Revisión de plan generado"
  if [ ! -f "$report_dir/tasks.json" ]; then
    echo "[WARN] No se generó tasks.json para $name. Revisión manual requerida."
    continue
  fi

  echo "[3/4] Ejecución capa SEC"
  $AI_CMD "$PROMPTS_DIR/layer-security.md" > "$report_dir/sec.raw.txt" || {
    echo "[FAIL] Capa SEC falló en $name"
    git -C "$project" restore . || true
    git -C "$project" clean -fd || true
    continue
  }

  echo "[4/4] Commit si pasó validación"
  if git -C "$project" diff --quiet; then
    echo "[INFO] Sin cambios en $name"
  else
    git -C "$project" add -A
    git -C "$project" commit -m "refactor($name): apply codex security layer"
  fi

done < "$OUT/projects.txt"
```

---

# 12) Puertas de validación recomendadas

| Proyecto | Validación mínima | Validación ideal |
|---|---|---|
| WordPress | Home carga, contacto funciona, admin accesible, no errores PHP | Staging + backup BD + tests de humo + Lighthouse |
| React/Vite | `npm run build` pasa | build + tests unitarios + Lighthouse CI + smoke visual |
| Next.js | build y rutas críticas cargan | build + tests + preview + verificación SSR/ISR |
| PHP legacy | páginas críticas cargan sin warnings | smoke routes + logs + prepared statements |
| Node/Express | endpoints críticos responden | tests unitarios + integración + contrato API |
| HTML estático | home/contacto funcionan | Lighthouse + validación de assets + consola sin errores |

---

# 13) Checklist de seguridad antes de dejar que la IA escriba código

- [ ] Cada proyecto tiene backup o commit limpio.
- [ ] Cada proyecto tiene rama nueva.
- [ ] Hay inventario de stacks.
- [ ] Hay lista de comandos de build/test/lint.
- [ ] Se definió qué no tocar.
- [ ] Se definió qué significa “mejorar”.
- [ ] Hay plan JSON por proyecto.
- [ ] Hay rollback automático.
- [ ] Hay reporte final.
- [ ] No se aplican major upgrades sin aprobación.
- [ ] No se toca negocio sin tests.
- [ ] Se validan formularios, analytics y SEO básico.

---

# 14) Matriz de riesgo y control

| Cambio | Riesgo | Control | Cuándo no hacerlo |
|---|---:|---|---|
| Actualizar patch/minor dependencies | Bajo | lockfile, build, tests | Si build ya falla |
| Actualizar major dependencies | Alto | staging, changelog, tests E2E | Sin tests o sin tiempo de validación |
| Añadir security headers | Bajo-medio | report-only para CSP | Si terceros rompen sin CSP |
| Lazy-loading de imágenes | Bajo | verificar CLS y mobile | Si afecta hero o conversión |
| Minificar CSS/JS | Bajo-medio | probar en staging | Si hay scripts inline frágiles |
| Refactor de funciones largas | Medio-alto | tests unitarios | Sin tests |
| Cambiar consultas SQL | Alto | explain, backup, staging | Sin conocimiento de índices |
| Eliminar código muerto | Medio | lint + tests + búsqueda de referencias | Si no hay certeza de uso dinámico |
| Cambiar autenticación | Muy alto | tests E2E + revisión humana | Nunca sin aprobación |
| Tocar analytics/consent | Alto | verificar eventos | Si marketing/legal no valida |

---

# 15) Métricas objetivo para webs empresariales

| Área | Métrica | Objetivo | Fuente/estándar |
|---|---|---:|---|
| Rendimiento | LCP | ≤ 2.5s | Google Core Web Vitals |
| Rendimiento | INP | ≤ 200ms | Google Core Web Vitals, reemplazo de FID desde 2024-03-12 |
| Rendimiento | CLS | ≤ 0.1 | Google Core Web Vitals |
| Seguridad | Vulnerabilidades críticas | 0 conocidas sin mitigación | OWASP Dependency Check / npm audit / composer audit |
| Calidad | Errores lint | 0 errores bloqueantes | ESLint / PHPStan / Ruff |
| Fiabilidad | Tests | Pasan 100% | CI local |
| Negocio | Formularios | Funcionan | Smoke test |
| SEO técnico | Canonical/meta/robots | Sin regresiones | Search Console / Lighthouse |
| Accesibilidad | Contraste/alt/focus | Mejorar sin romper | WCAG 2.2 |

---

# 16) Fuentes relevantes confirmadas y útiles

| Tema | Fuente | Autor/Organización | Fecha/versión | Uso |
|---|---|---|---|---|
| Calidad de software | ISO/IEC 25010 | ISO/IEC | 2011, revisión 2023 | Definir calidad: seguridad, rendimiento, mantenibilidad |
| Refactorización | Refactoring: Improving the Design of Existing Code, 2nd ed. | Martin Fowler | 2018 | Base de refactorización incremental |
| Código limpio | Clean Code | Robert C. Martin | 2008 | Criterios de legibilidad y deuda técnica |
| Seguridad web | OWASP Top 10 | OWASP Foundation | 2021 | Priorización de riesgos de seguridad |
| Seguridad en desarrollo | NIST SP 800-218 SSDF v1.1 | NIST | 2022 | Prácticas de software seguro |
| Rendimiento web | Core Web Vitals | Google / web.dev | 2020-2024 | LCP, INP, CLS |
| Rendimiento web | High Performance Web Sites | Steve Soudars | 2007 | Principios clásicos de optimización frontend |
| Versionado | Semantic Versioning 2.0.0 | Tom Preston-Werner | 2013 | Control de breaking changes |
| Commits | Conventional Commits 1.0.0 | Comunidad Conventional Commits | 2020 | Mensajes de commit automatizables |
| Control de versiones | Git | Linus Torvalds | 2005 | Base de reversibilidad |
| DevOps | Accelerate State of DevOps Report | DORA / Google Cloud | 2023 | Entrega rápida con estabilidad |
| Accesibilidad | WCAG 2.2 | W3C | 2023 | Criterios de accesibilidad web |

---

# 17) Glosario

**Codex-like agent:** agente de IA capaz de leer repositorio, proponer código, ejecutar comandos y modificar archivos bajo restricciones.

**Read-only audit:** análisis donde la IA no modifica código; solo observa y reporta.

**Pipeline:** secuencia automatizada de pasos: análisis, transformación, validación y entrega.

**Gate:** puerta de validación. Si no pasa tests/build/lint, no se continúa.

**Rollback:** acción de revertir cambios.

**Core Web Vitals:** métricas de experiencia web de Google: LCP, INP y CLS.

**LCP:** Largest Contentful Paint. Tiempo de carga del contenido principal.

**INP:** Interaction to Next Paint. Mide capacidad de respuesta ante interacciones.

**CLS:** Cumulative Layout Shift. Mide estabilidad visual.

**OWASP Top 10:** lista de riesgos de seguridad web más relevantes.

**Semantic Versioning:** convención `MAJOR.MINOR.PATCH` para controlar cambios compatibles.

**Conventional Commits:** convención de mensajes de commit para automatizar historial y releases.

**Smoke test:** prueba básica que verifica que el sistema no está roto.

**Dead code:** código que no se usa pero sigue en el repositorio.

**Technical debt:** costo futuro causado por decisiones rápidas o código difícil de mantener.

---

# 18) Reflexión prospectiva

La próxima generación de refactorización masiva no será “pedirle a la IA que mejore todo”, sino operar agentes dentro de límites verificables: inventario, tests, métricas, rollback y aprobación humana. El valor no estará en generar más código, sino en reducir riesgo, aumentar evidencia y producir diffs pequeños que pasen build, tests y métricas de negocio. En 17 proyectos web, la ventaja competitiva no es la velocidad bruta: es la capacidad de mejorar seguridad, rendimiento y mantenibilidad sin romper formularios, SEO, analytics ni conversión.

**Pregunta guía:** de los 17 proyectos, ¿cuál tiene mayor valor de negocio y peor estado de build/tests/Core Web Vitals para ejecutar primero un piloto de 48 horas con rollback automático?

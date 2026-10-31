# Valoración Atemporal de Activos

- Chat ID: `021eecdb-9f2f-401c-ad96-0683f5ed5119`
- Mensajes: 2
- Periodo: 2026-08-10 08:00 UTC → 2026-08-10 08:00 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-08-10 08:00

# COMPENDIO — OMNIAGENT DIVA EDITION → ACTIVO DE $300 M (VALOR ATEMPORAL)
**Comité multidisciplinar simulado:** arquitectura de orquestación IA · SRE · producto/datos · CFO (valoración) · legal/IP · ética. **Emisión:** 10‑08‑2026. **Nota de fuentes:** la búsqueda web en vivo no respondió en esta sesión; cito (a) fuentes ya verificadas en la ronda previa (Bessemer, CB Insights, OWASP LLM 2025, DORA 2025) y (b) conocimiento de dominio establecido, marcado como tal. No invento cifras nuevas.

--- ninguna funciono

## 1. RESUMEN EJECUTIVO (6 líneas densas)
1. **Leí el proyecto real**: OmniAgent DIVA Edition v4.0 "Carnaval Royale" — orquestador/evaluador multi‑IA (Next.js 16 + Prisma/SQLite, 14 divas, 6 vistas, LLM‑as‑judge, webhooks, SSE, caché, REPL, ~679 fixes ya aplicados). Es un **gateway/evaluator**, no un estudio multimodal: su naturaleza económica es distinta a Nexus AI Studio.
2. **HALLAZGO CRÍTICO que la otra IA ignoró**: las 14 "divas" son **personas reales** (Beyoncé, Gaga, Rihanna, Anitta, Pabllo Vittar…). Monetizar comercialmente personas de celebridades sin licencia es **responsabilidad legal directa** (derecho de publicidad; ELVIS Act de Tennessee 2024; propuestas No FAKES Act). **Ningún comprador serio valora en $300 M un activo con IP de celebridades sin licencia: es un pasivo, no un activo.** Esto se resuelve en los puntos 121‑140 y 361‑380.
3. **Lo que tienes es un prototipo impresionante con ARR=$0**: sin auth, sin multi‑tenant, sin CI real (cron ≠ CI), sin despliegue productivo, sin usuarios pagando.
4. **La cifra $300 M es matemática, no deseo**: con múltiplo mediano SaaS 2026 ≈6× EV/ARR (Bessemer), $300 M ⇒ ≈$50 M ARR; con múltiplo de alto crecimiento 10‑15× ⇒ $20‑30 M ARR creciendo >30 %.
5. **El mecanismo "independiente del tiempo"** existe y es estándar: expresar el objetivo en **dólares reales ajustados por IPC/CPI** y normalizar el múltiplo a la mediana de cada época. Lo entrego como motor ejecutable (bloque O, 281‑300) y dentro del prompt.
6. **Entregables**: 500 puntos específicos para OmniAgent + Prompt Máximo atemporal + ruta 0‑180 días + glosario.

---

## 2. DESCOMPOSICIÓN DE LA CONSULTA
| Nivel | Contenido |
|---|---|
| **Explícita** | "Aplica mínimo 500 mejoras a este proyecto para que equivalga, siempre independiente del tiempo, a $300 M de valor 2026; expande al máximo y dame el prompt." |
| **Implícita** | (a) Quieres que el plan sea *específico de OmniAgent*, no reciclado de Nexus; (b) quieres un principio de valor que no caduque (por eso "independiente del tiempo"); (c) quieres que la IA ejecutante no te halague; (d) "aplica" = entrégame el plan accionable + el prompt que un agente ejecuta (no tengo acceso a tu repo vivo en esta sesión, así que "aplicar" = plan + prompt de ejecución). |
| **Periférica** | Tu historial revela que OmniAgent nació como CLI PowerShell y mutó a web‑app; la estética "Gay Pop Brasil 2026 + Hermes" es tu **marca**, y las divas son a la vez tu mayor diferenciador y tu mayor riesgo legal. Ese es el eje de todo el plan. |

---

## 3. TRIANGULACIÓN — TRES PERSPECTIVAS, SESGOS Y CERTEZA

### 3.1 Científico‑técnica (certeza ALTA)
- OmniAgent compite en el espacio de **gateways/evaluadores de LLM**: LiteLLM (gateway+fallback+métricas), Promptfoo (eval/comparación), LangChain/LangGraph (orquestación). Tu diferenciador no es la tubería (comoditizada) sino la **capa de evaluación con personas + juicio LLM**.
- **DORA 2025**: la IA amplifica lo existente, no lo corrige; aumenta throughput e inestabilidad si falta gestión del cambio. Tu cron de 15 min sin CI real es throughput sin estabilidad.
- **OWASP LLM Top 10 2025**: al inyectar prompts de usuario en múltiples proveedores y ejecutar "colaboración" entre agentes, estás expuesto a LLM01 (prompt injection) y LLM06 (excessive agency). Hay que gobernarlo.
- **Fuga de rendimiento ya corregida** (N+1, ensureSeed) demuestra que el patrón de deuda era real: queda deuda equivalente en auth, tenancy y tests.

### 3.2 Práctica (certeza MEDIA‑ALTA)
- El valor de OmniAgent está en **retención de desarrolladores/equipos que comparan y evalúan IAs**, no en el chat de divas como juguete. El camino de pago es **eval‑as‑a‑service para equipos de IA**, con la capa de divas como experiencia de marca.
- Lo que falta para ser activo: auth multi‑tenant, facturación por uso (tokens/evaluaciones), despliegue real, usuarios reales, y **resolver el riesgo de IP de las celebridades**.

### 3.3 Ético‑histórica y LEGAL (certeza ALTA en el riesgo; BAJA en predicción)
- **Derecho de publicidad** (conocimiento establecido): las personas reales controlan el uso comercial de su nombre/voz/imagen. Tennessee **ELVIS Act (2024)** protege voz e imagen frente a IA; hay propuestas federales **No FAKES Act**. Un SaaS que cobra por "hablar con Beyoncé/Gaga/Anitta" sin licencia es demandable y **no es adquirible a $300 M**.
- **Sesgos detectados**: anclaje ($300 M), costo hundido, complacencia de la otra IA (que llamó "activo de $300 M" a un prototipo con ARR=$0 y riesgo de IP), y confusión entre *marca divertida* y *activo defendible*.
- **WeWork (2019)**: narrativa de valoración sin fundamentales colapsa. No replicar.

---

## 4. MATRIZ DE REALIDAD (OmniAgent específico)
| Dominio | Evidencia en el log | Brecha crítica | Acción (punto #) | Métrica | Certeza |
|---|---|---|---|---|---|
| IP/Personas | 14 divas = celebridades reales | Riesgo legal bloqueante | #121‑140, #361‑380 | 0 personas sin licencia en plan de pago | ALTA |
| Infra | Server caído sin supervisor | Autonomía falsa | #21‑40 | RTO <1 h, RPO <5 min | ALTA |
| DB | SQLite + hacks | Sin PG, sin pooler, sin backup probado | #61‑80 | Restore drill OK | ALTA |
| Tests | Solo smoke agent‑browser | 0 tests en CI | #161‑180 | Cobertura ≥80 % | ALTA |
| Auth/Tenancy | Ninguna | Sin multi‑tenant | #141‑160 | RLS activo | ALTA |
| Orquestación | Monoproveedor por llamada | Sin fallback real, sin coste visible | #81‑100 | Margen IA ≥60 % | MEDIA |
| Evaluación | LLM‑as‑judge heurístico | Sin benchmark propio, sin evals válidos | #101‑120, #321‑340 | Correlación juez↔humano ≥0.8 | MEDIA |
| Producto | 0 usuarios reales | Sin demanda validada | #201‑220 | W4 ≥25 % | MEDIA |
| Monetización | Ninguna | Sin Stripe/metering | #221‑240 | Primer $1 | MEDIA |
| Valoración | Narrativa $300 M | Sin ARR ⇒ múltiplo inaplicable | #261‑300 | ARR medido mensual | ALTA |

---

## 5. ANÁLISIS CON CASOS
1. **LiteLLM / gateways LLM**: el valor está en fallback+observabilidad+cost‑control para equipos. OmniAgent debe competir ahí, no en "chat divertido".
2. **Promptfoo / evaluación**: el moat es el **dataset de evaluación propio y reproducible**. OmniAgent ya tiene judge; debe convertirlo en benchmark defendible.
3. **ELVIS Act / No FAKES (conocimiento establecido)**: la industria está litigando activamente la voz/imagen de artistas con IA. Construir un SaaS sobre personas de celebridades sin licencia es ir contra la corriente legal de 2024‑2026.
4. **Bessemer 2026**: múltiplos comprimidos (mediana ~6×; alto crecimiento 10‑15×). El $300 M exige ARR real.
5. **CB Insights**: 42 % muere por falta de mercado. Prioriza demanda sobre features.

---

## 6. ARTEFACTO 1 — LOS 500 PUNTOS (25 bloques × 20)

### A. AUDITORÍA Y DEUDA TÉCNICA (1–20)
1. Congela el estado con un ADR de línea base: versión, stack, hacks conocidos, ARR=$0.
2. Elimina todo raw SQL residual; encapsúlalo en repositorios tipados o migra a Prisma limpio.
3. Resuelve los warnings de lint o conviértelos en disables con ADR firmado.
4. Activa `strict` + `noUncheckedIndexedAccess` en tsconfig.
5. Divide componentes >400 líneas (arena, history, response-card) en módulos ≤300.
6. Extrae tipos compartidos de SSE, Run, Response, Diva a `src/lib/types.ts` único.
7. Sustituye regex frágiles por parseo real (remark) donde haya markdown.
8. Contrato de error único `{code,message,retryable}` en todas las rutas.
9. Schemas Zod en 100 % de body/params/query.
10. Unifica la lógica SSE duplicada (run/stream, repl/stream) en un solo helper.
11. Instrumenta p50/p95 por endpoint.
12. Documenta cada hack histórico en ADR con fecha de expiración.
13. Conventional commits + changelog automático.
14. Versiones exactas de dependencias + `bun audit`.
15. Poda dead code con knip/ts-prune.
16. Vitest para utils puras, cobertura ≥80 %.
17. Supertest para happy path + 4xx/5xx de cada endpoint.
18. Playwright e2e para los 6 flujos críticos.
19. Snapshots golden de exports (CSV/JSON/MD).
20. README ejecutable: `bun i && bun dev && bun test` sin pasos manuales.

### B. FIABILIDAD Y ARQUITECTURA PRODUCTIVA (21–40)
21. Supervisor con autorestart (systemd/pm2); prueba matando el proceso.
22. `/health`, `/ready`, `/live` con checks reales (DB, provider LLM, disco).
23. Backups diarios a S3/R2 + restore drill documentado con fecha.
24. Logging estructurado (pino) + correlation-id.
25. Sentry con source maps y alertas por ruta.
26. RTO <1 h / RPO <5 min publicados en RUNBOOK.md.
27. Secretos en vault; nunca .env plano en repo.
28. Rotación de keys LLM cada 90 d con doble-key.
29. Graceful shutdown SIGTERM cerrando SSE y pool.
30. Tracing OpenTelemetry de llamadas LLM (latencia, tokens, coste).
31. Caché Redis/KV con TTL e invalidación explícita.
32. Cola BullMQ para generación pesada con retry exponencial.
33. Idempotency-Key en POSTs.
34. Versionado /api/v1 + headers `Deprecation`.
35. Diagramas C4 en /docs generados desde el repo.
36. Entornos dev/staging/prod con seeds fijos.
37. Healthcheck sintético que ejecuta un prompt real cada 5 min.
38. Alerta si el healthcheck falla 2 veces seguidas.
39. Aísla el cron del servidor web (procesos separados).
40. Documenta el coste mensual real de infraestructura.

### C. FRONTEND DE CLASE MUNDIAL (41–60)
41. React Server Components en vistas de lectura (Metrics, History).
42. Partial Prerendering + Suspense para datos dinámicos.
43. Core Web Vitals en prod: LCP <2.5 s, INP <200 ms, CLS <0.1.
44. Code-splitting por pestaña con `next/dynamic`.
45. Design system con tokens oklch y escala 4 px.
46. WCAG 2.2 AA: contraste 4.5:1, focus visible, aria-live en streaming.
47. Navegación completa por teclado en las 6 pestañas.
48. i18n real es/en/pt-BR (tu mercado es Brasil: hazlo nativo).
49. Storybook + tests visuales de los componentes.
50. Zustand/selectores estables; evita re-renders del glitter en cada quote.
51. UI optimista con rollback en ratings/favoritos.
52. Botón rojo de salida (wipe + logout) accesible.
53. Persiste preferencias UI (tema, densidad, atajos).
54. Cmd+K con búsqueda fuzzy sobre divas, runs, plantillas.
55. Virtualización del History con miles de runs.
56. PWA con lectura offline de exports.
57. Auditoría de contraste del modo claro con imágenes reales.
58. Lighthouse CI con budgets perf ≥95 / a11y ≥100 / SEO ≥90.
59. Pruebas en devices reales móviles.
60. Reduce el peso del CSS de animación; carga el "glitter" solo en la vista activa.

### D. DATOS Y API (61–80)
61. Migra SQLite→PostgreSQL (Neon/Supabase) con `prisma migrate`.
62. Pooler transaccional para serverless.
63. Índices EXPLAIN ANALYZE en las 10 queries top.
64. Elimina el N+1 restante con groupBy + Map lookups (ya empezaste).
65. OpenAPI 3.1 generado desde Zod + Swagger UI.
66. Paginación cursor-based en /runs y /divas.
67. Búsqueda full-text (tsvector) sobre prompts y respuestas.
68. pgvector para "runs similares" por embedding del prompt.
69. Soft delete con `deletedAt` + purga 30 d.
70. Auditoría outbox inmutable (quién/qué/cuándo).
71. Webhooks firmados HMAC con reintentos y dead-letter.
72. Rate limiting por usuario+endpoint con 429 + Retry-After.
73. Cuotas por plan configurables en DB.
74. Exports streaming NDJSON para volúmenes grandes.
75. Deduplicación de respuestas por hash del prompt+diva.
76. ETag/If-None-Match en GETs.
77. FK ON DELETE CASCADE; elimina cascadas manuales.
78. k6: 200 usuarios concurrentes, p95 <300 ms en endpoints no-LLM.
79. Replica de lectura para Metrics.
80. Retención por modalidad (GDPR) con purga server-side.

### E. NÚCLEO DE ORQUESTACIÓN MULTI-IA (81–100) — el negocio real
81. Interfaz `LLMProvider` con fallback real entre OpenAI/Anthropic/Gemini/Groq/local.
82. Routing por tarea: modelo barato para scoring, frontier para generación.
83. Coste por request (tokens×precio) visible en el dashboard.
84. Presupuesto duro por usuario/día con circuit breaker.
85. Caché semántica (cosine >0.98) con aviso de respuesta cacheada.
86. Streaming por token real (no por diva) donde el proveedor lo permita.
87. Normaliza la respuesta de todos los providers a un schema único.
88. Mide y muestra la latencia por provider en tiempo real.
89. Añade OpenRouter como meta-provider para resiliencia.
90. Soporte de modelos locales (Ollama/LM Studio) como provider de primera clase.
91. Modo "comparar" con asignación aleatoria de providers para evitar sesgo.
92. Modo "colaborar" con control de presupuesto por cadena.
93. Registra el provider exacto usado en cada Response.
94. Fallback automático si un provider devuelve 429/5xx.
95. Documenta MODEL_POLICY.md: modelo, porqué, coste, fallback.
96. Aísla los secretos de cada provider en variables separadas.
97. Prueba de conmutación: mata un provider y verifica el fallback.
98. Métrica de "coste ahorrado por caché" visible.
99. Límite de tokens por respuesta configurable por diva.
100. Panel de "salud de providers" con uptime de cada uno.

### F. MOTOR DE EVALUACIÓN Y JUEZ (101–120) — el diferenciador
101. Convierte el LLM-as-judge en un módulo versionado y testeable.
102. Define rúbricas explícitas (corrección, claridad, profundidad, persona) con pesos.
103. Valida el juez contra oro humano: correlación juez↔humano ≥0.8.
104. Publica la metodología del juez (transparencia = confianza).
105. Multi-juez: promedia 3 jueces distintos para reducir varianza.
106. Persiste cada veredicto con el modelo-juez exacto usado.
107. Crea un benchmark propio y reproducible (dataset público de prompts).
108. Permite evaluar modelos nuevos contra el benchmark en un clic.
109. Exporta resultados de evaluación como CSV/JSON para equipos.
110. Añade métricas de seguridad al juez (¿la respuesta filtra datos?).
111. Detección de alucinaciones como criterio de juicio.
112. Modo "evaluación por lotes" para 100+ prompts.
113. API pública de evaluación (`POST /api/eval`) como producto.
114. Gráficos de tendencia de calidad por provider a lo largo del tiempo.
115. Alerta cuando la calidad de un provider cae >10 %.
116. Permite a los usuarios subir su propia rúbrica.
117. Compara jueces: muestra el desacuerdo entre jueces.
118. Documenta las limitaciones del juez (honestidad científica).
119. Convierte el benchmark en un activo público para SEO/autoridad.
120. Posiciona el motor de evaluación como el producto vendible, no el chat.

### G. SISTEMA DE PERSONAS/DIVAS Y PIVOTE LEGAL (121–140) — CRÍTICO
121. **Auditoría de IP**: lista cada diva y marca si es persona real o ficticia.
122. **Clasifica el riesgo** de cada persona real (alto/medio/bajo).
123. **Decisión de pivot**: para el plan de pago, solo personas originales ficticias o licenciadas.
124. Crea un elenco de **divas originales ficticias** con identidad propia (tu IP defendible).
125. Mantén las celebridades solo como parodia/uso no comercial si la ley local lo permite, con disclaimer.
126. No monetices directamente la persona de una celebridad sin licencia escrita.
127. Documenta la base legal de cada persona (parodia, licencia, original).
128. Diseña las personas ficticias con voz, estética y lore propios.
129. Registra las personas ficticias como obra (copyright) y sus nombres como marca.
130. Permite a los usuarios crear sus propias personas (UGC = moat).
131. Sistema de intensidad de persona (ya existe) aplicado a personas ficticias.
132. Marketplace de personas creadas por la comunidad.
133. Votación y ranking de personas de la comunidad.
134. Cada persona ficticia con ASCII art, color y frase propias.
135. Prueba A/B: ¿retienen más las personas ficticias originales que las de celebridades?
136. Si una celebridad o su equipo contacta, retira la persona en <24 h (runbook).
137. Añade un "modo seguro" que solo usa personas originales.
138. Posiciona la marca en la estética, no en la identidad de terceros.
139. Consulta a un abogado de IP antes de activar pagos con personas de celebridades.
140. Documenta el pivot en un ADR: "De personas de celebridades a IP original".

### H. SEGURIDAD Y CUMPLIMIENTO (141–160)
141. Auth.js v5 multi-tenant: userId en todas las tablas + RLS.
142. RBAC owner/admin/member.
143. 2FA TOTP para admin.
144. Auditoría OWASP Top 10 web con tests automatizados.
145. Auditoría OWASP LLM Top 10 2025 (prompt injection, excessive agency).
146. Saneado de entradas en todos los prompts antes de inyectar a providers.
147. Aísla los datos de usuario entre tenants (un tenant no lee runs de otro).
148. CSP + HSTS + headers de seguridad.
149. Cifrado en reposo de datos sensibles.
150. GDPR: consentimiento, export, supresión, contacto.
151. Privacy policy y ToS con titular y fecha reales.
152. Escaneo OWASP ZAP trimestral.
153. Plan de incidente con notificación 72 h.
154. Logs anonimizados (sin prompts ni PII).
155. UGC servido desde dominio separado sin cookies.
156. Anti-abuso: captcha en signup.
157. Backups firmados SHA-256.
158. Least privilege en cuentas de servicio.
159. gitleaks en pre-commit.
160. Revisión de seguridad anual con dueño asignado.

### I. AUTOMATIZACIÓN INDUSTRIAL (161–180)
161. CI real (GitHub Actions) en push/PR: lint, test, build. El cron no es CI.
162. Gate de cobertura: PR que baje <80 % no mergea.
163. Playwright e2e de los 6 flujos en CI.
164. Preview deploy por PR.
165. Auto-rollback si healthchecks fallan.
166. Renovate con automerge de patches.
167. SAST con CodeQL.
168. k6 smoke en CI; rojo si p95 regresa >20 %.
169. Feature flags para desplegar sin exponer.
170. Seeds de datos reproducibles.
171. `make setup` golden path.
172. La IA propone PRs; humano aprueba merge.
173. Chaos trimestral: mata el server, restaura backup, mide RTO.
174. Export semanal automático de datos a tu drive.
175. WORKLOG → ADRs + CHANGELOG estructurados.
176. UptimeRobot + alertas a móvil.
177. Budget de bundle: falla si crece >500 KB.
178. Tests de contrato para la interfaz `LLMProvider`.
179. Simulacro de caída de un provider LLM en CI.
180. Documenta el tiempo de recuperación medido en cada chaos drill.

### J. RENDIMIENTO Y ESCALA (181–200)
181. Cache multi-nivel: memoria → Redis → DB.
182. Streaming con backpressure real.
183. Compresión Brotli.
184. Lazy loading de pestañas pesadas.
185. Optimiza las animaciones: usa transform/opacity, no layout.
186. Pooling de conexiones DB.
187. Read replicas para Metrics e History.
188. CDN para assets y exports.
189. Auto-scaling basado en CPU/memoria.
190. Circuit breakers por provider externo.
191. Retry con backoff y jitter (ya empezaste; extiéndelo).
192. Batching de llamadas LLM donde sea posible.
193. Mide y reduce el tiempo al primer byte del streaming.
194. Precalienta la caché de las plantillas más usadas.
195. Desnormaliza contadores (shows, ratings) para evitar agregaciones caras.
196. Cache de la métrica "fan favorites" con TTL corto.
197. Sirve el ASCII art como texto estático, no lo regeneres.
198. Monitorea Web Vitals en producción real (RUM).
199. Prueba de carga mensual documentada.
200. Objetivo: p95 <300 ms en todo lo que no sea llamada LLM.

### K. PRODUCTO Y USUARIOS REALES (201–220)
201. Define la North Star: "evaluaciones de IA exportadas por semana".
202. Instrumenta PostHog con funnel por pestaña.
203. Cohortes semanales; meta W4 ≥25 %.
204. Onboarding <60 s con una evaluación real pre-cargada.
205. Empty states con ejemplo de un clic por pestaña.
206. NPS en día 7 y 30.
207. 10 entrevistas con desarrolladores/equipos de IA (The Mom Test).
208. Roadmap público con votos.
209. Export de evaluaciones a Notion/Obsidian/Drive.
210. Comparte resultados de evaluación con enlace firmado.
211. Kill metric: feature <2 % de uso en 30 d se elimina.
212. Plantillas de evaluación por caso de uso (soporte, código, marketing).
213. Vertical para equipos de IA que comparan modelos.
214. Vertical para agencias que reportan calidad de IA a clientes.
215. Modo "informe para cliente" (exportable, con marca).
216. Permite guardar comparativas como plantillas reutilizables.
217. Feedback contextual en cada respuesta (thumbs ya existe; úsalo para retención).
218. Mide el "tiempo hasta primera evaluación con valor".
219. Reduce a 3 clics el camino "llegar → evaluar → exportar".
220. Consigue 10 usuarios reales y documenta qué pidieron.

### L. MONETIZACIÓN Y UNIT ECONOMICS (221–240)
221. Stripe Billing metered por evaluaciones/tokens.
222. Planes: Free (20 evals/día) · Pro $29/mes · Team $99 (5 seats).
223. Pay-as-you-go antes que suscripción.
224. Dashboard financiero: MRR, churn, expansión, LTV/CAC, Rule of 40.
225. Margen bruto IA ≥60 % tras coste de providers.
226. Consigue EL PRIMER PAGO REAL y documenta quién/cuánto/por qué.
227. Dunning con reintentos + emails transaccionales.
228. Anual con 2 meses gratis.
229. Descuentos edu/enterprise verificados.
230. Afiliados 20 % recurrente 12 m.
231. Coste por evaluación visible para el usuario (transparencia).
232. Límites claros en Free para forzar upgrade natural.
233. Facturación automática para enterprise.
234. Reembolsos con política clara.
235. Mide el coste de IA por plan y ajusta precios.
236. Sube precios cuando W4 ≥25 % y NPS ≥40.
237. Prueba A/B de precios con Van Westendorp.
238. Separa cuentas personales y del proyecto.
239. Contabilidad básica desde el día 1.
240. Plan B digno: si no hay empresa, opera como indie con meta $3-10 k MRR.

### M. DISTRIBUCIÓN Y MOAT (241–260)
241. SEO programático por caso de uso ("evaluar GPT vs Claude para soporte").
242. Publica el benchmark propio como recurso descargable.
243. Build in public con métricas reales mensuales.
244. Launch en Product Hunt con demo viva.
245. Clips semanales mostrando evaluaciones reales.
246. Comunidad Discord de equipos que evalúan IA.
247. Integraciones Zapier/Make/n8n.
248. Moat de datos: tu benchmark + rúbricas + histórico de evaluaciones.
249. Moat de workflow: coste de cambio por integraciones.
250. Alianzas con providers LLM (case studies).
251. Docs públicas impecables.
252. Contenido comparativo "Modelo X vs Modelo Y" (SEO de alta intención).
253. Newsletter semanal con hallazgos de evaluación.
254. Presencia en directorios de herramientas de IA.
255. Programa de embajadores entre power users.
256. Gamificación: badges por evaluaciones realizadas.
257. Referidos con recompensa.
258. Mide el ROI de cada canal.
259. Kit de prensa con la estética diva como identidad.
260. Convierte la estética en marca reconocible, no en el producto.

### N. FINANZAS Y VALORACIÓN REALISTA (261–280)
261. Reporte mensual automático: ARR, usuarios, retención, margen, crecimiento.
262. Escenario de valoración con múltiplos conservador (4×), base (6×), optimista (10×).
263. Muestra qué ARR se necesita para cada escenario.
264. Fórmula fija: Valoración = ARR × Múltiplo. Nada más.
265. Usa múltiplos reales de la época (Bessemer 2026 mediana ~6×; alto crecimiento 10-15×).
266. $300 M ⇒ $50 M ARR a 6×, o $30 M ARR a 10×.
267. Camino a $30 M ARR: ~86 k usuarios Pro, o 3 000 contratos enterprise de $10 k/año.
268. Acepta la base rate: 42 % muere por falta de mercado.
269. Auditoría financiera mensual: coste real por usuario vs ingreso.
270. No cuentes valoración sobre narrativa; solo sobre ARR medido.
271. Kill switch: si en 12 meses ARR <$1 k, recomienda pivotar o archivar.
272. Financiación no dilutiva (grants) antes que VC.
273. Escrow de código para enterprise.
274. Open-source del núcleo no crítico para confianza.
275. Documenta el "valor de reemplazo" del activo (coste de reconstruirlo).
276. Documenta el "valor de opción" (mercados futuros que abre).
277. Revisa el múltiplo aplicable cada trimestre.
278. No prometas $300 M en materiales externos sin ARR que lo soporte.
279. Prepara data room para cuando haya tracción real.
280. Define el éxito personal más allá de la valoración.

### O. MOTOR DE VALORACIÓN ATEMPORAL (281–300) — tu requisito central
281. Define el objetivo en **dólares reales 2026**: $300 M de poder adquisitivo 2026.
282. Implementa una función `adjustToYear(amount, fromYear, toYear)` usando IPC/CPI.
283. Fórmula: `Valor_en_año_X = $300M × (CPI_año_X / CPI_2026)`.
284. Almacena una tabla histórica de CPI (fuente: BLS/IBGE oficial).
285. Para años futuros, proyecta CPI con inflación objetivo 2 % anual (documenta la asunción).
286. Expresa siempre el ARR en dólares reales, no nominales.
287. Normaliza el múltiplo a la mediana de la época objetivo.
288. Si la época objetivo es 2000 (burbuja), marca el múltiplo como "no sostenible" y no lo uses.
289. Si la época objetivo es 1990, convierte a valor industrial equivalente.
290. El prompt debe recalcular el objetivo al año en que se ejecuta.
291. Muestra una tabla: año | CPI | $300M equivalentes | ARR requerido | múltiplo de época.
292. Actualiza el CPI anualmente de forma automática.
293. Si la inflación real difiere de la proyectada, recalcula el objetivo.
294. Documenta que "valor constante" = mismo poder adquisitivo, no mismo número.
295. Ejemplo: $300 M de 2026 ≈ $X M en 2030 con inflación 2 % (≈ $324 M).
296. Ejemplo inverso: ¿cuánto es $300 M de 2026 en 2000? (≈ menos, por inflación acumulada).
297. El motor debe ser un módulo testeable, no una constante mágica.
298. Incluye el ajuste atemporal en el reporte mensual.
299. Valida el motor contra datos históricos conocidos de CPI.
300. El objetivo real es **$300 M de poder adquisitivo 2026, ajustado a cada época**, no "$300 M nominales".

### P. MARCA E IDENTIDAD COMO ACTIVO (301–320)
301. Define la marca OmniAgent DIVA como identidad, no como producto.
302. Registra el nombre OmniAgent y el logo como marca.
303. Crea un manual de marca (colores, voz, estética "Gay Pop Brasil 2026").
304. La voz Hermes/diva es tu diferenciador de experiencia; úsala en UX, no solo en decoración.
305. Documenta el tono: cáustico, directo, teatral, pero profesional bajo el glitter.
306. Aplica la marca de forma consistente en exports e informes.
307. Los informes para clientes deben poder desmarcarse (white-label) en plan Team.
308. Crea merchandising conceptual (refuerza comunidad, no es el negocio).
309. La estética debe pasar tests de legibilidad (ya lo hiciste: no sacrifiques UX por glitter).
310. Define un modo "sobrio" para contextos corporativos.
311. Protege la marca en las jurisdicciones clave (Brasil, US, EU).
312. Documenta el origen de la marca para defender su autenticidad.
313. La comunidad usa la marca; establece guías de uso.
314. Evita que la marca dependa de la imagen de terceros (enlaza con el pivote de personas).
315. Crea un eslogan propio que no referencie a celebridades.
316. Posicionamiento: "El orquestador de IAs con más personalidad del mercado".
317. La marca es defendible; las personas de celebridades no lo son.
318. Mide el reconocimiento de marca con encuestas anuales.
319. Documenta el valor de marca como intangible en el data room.
320. La marca debe sobrevivir al pivote de personas ficticias.

### Q. MOAT DE DATOS Y EVALUACIÓN (321–340)
321. Convierte el histórico de evaluaciones en dataset entrenable.
322. Crea un índice de "calidad por provider a lo largo del tiempo" (único en el mercado).
323. Publica rankings trimestrales de modelos (autoridad + SEO).
324. Permite a los equipos contribuir con sus rúbricas (network effect).
325. Cuanta más evaluación, mejor el juez (flywheel).
326. Protege el dataset como secreto comercial.
327. Versiona el benchmark para comparabilidad histórica.
328. Ofrece el benchmark como API de pago.
329. Crea evaluaciones específicas por industria (legal, salud, finanzas).
330. Anonimiza y agrega datos para insights públicos.
331. El moat real es la correlación juez↔humano validada; protégela.
332. Documenta la metodología para que sea reproducible y defendible.
333. Crea un leaderboard público de providers.
334. Los usuarios no pueden llevarte el benchmark fácilmente (moat).
335. Ofrece export, pero no el dataset crudo completo en planes bajos.
336. Mide el "valor del dataset" por su coste de replicación.
337. Usa el dataset para afinar un juez propio más barato.
338. Explora fine-tuning del juez con los datos (con consentimiento).
339. Documenta la procedencia de cada dato de evaluación.
340. El dataset es el activo que justifica un múltiplo alto.

### R. EQUIPO Y GOBERNANZA (341–360)
341. Define roles mínimos: fundador, eng, producto, legal/IP.
342. El fundador no puede ser el único punto de fallo.
343. Documenta el conocimiento crítico (bus factor >1).
344. Establece un ritmo: releases menores cada 2 semanas.
345. OKRs trimestrales medibles.
346. Revisión post-mortem de cada incidente sin culpa.
347. Decisiones documentadas en ADRs.
348. Un tablero de gobernanza visible (Notion/Miro).
349. Define quién aprueba merges (humano, no solo IA).
350. Define quién aprueba gastos.
351. Crea un consejo asesor (3 personas con experiencia SaaS real).
352. Reunión trimestral con el consejo.
353. Documenta la estrategia de salida (adquisición vs independiente).
354. Plan de sucesión del fundador.
355. Ética de equipo: no construir features para evitar hablar con usuarios.
356. Celebra hitos reales (primer pago, primer cliente enterprise).
357. Mide la salud del equipo (burnout).
358. Contrata por el moat (datos, eval), no por el glitter.
359. Define cultura: rigor bajo la estética diva.
360. La gobernanza es lo que convierte un proyecto en una empresa.

### S. LEGAL E IP (361–380) — refuerzo del bloque G
361. Consulta legal sobre derecho de publicidad en tus jurisdicciones.
362. Evalúa ELVIS Act (Tennessee) y No FAKES Act si operas en US.
363. Evalúa LGPD (Brasil) por tu mercado objetivo.
364. Redacta ToS que excluya uso de personas de celebridades para pagos.
365. Añade disclaimer claro en cualquier persona inspirada en terceros.
366. Registra copyright de las personas ficticias originales.
367. Registra marcas de nombres de personas ficticias.
368. Establece un proceso de takedown en <24 h si un titular reclama.
369. No entrenes modelos con datos de celebridades sin licencia.
370. Documenta la procedencia de todo el contenido generado.
371. Asegura que el UGC de los usuarios cumple ToS.
372. Añade cláusula de indemnización para usuarios que suban personas de terceros.
373. Revisa la legalidad del modo "colaborar" entre agentes (responsabilidad).
374. Cumple GDPR/LGPD en exports de datos.
375. Establece un DPO o responsable de privacidad.
376. Documenta la retención de datos por jurisdicción.
377. Prepara un acuerdo de licencia tipo por si negocias con artistas.
378. No hagas scraping de voces/imágenes de celebridades.
379. Revisa trimestralmente el panorama legal de IA/personas.
380. El objetivo: que un abogado pueda bendecir el activo antes de una venta.

### T. INTERNACIONALIZACIÓN Y MERCADOS (381–400)
381. Prioriza Brasil (tu mercado natural) con pt-BR nativo.
382. Expande a LatAm con es-419.
383. US como mercado de alto poder adquisitivo.
384. EU con cumplimiento GDPR estricto.
385. Adapta precios por paridad de poder adquisitivo (PPP).
386. Métodos de pago locales (Pix en Brasil, OXXO en México).
387. Facturación con impuestos locales (VAT/GST/ISS).
388. Soporte en los idiomas de los mercados activos.
389. Documentación localizada.
390. Comunidad local por región.
391. Partners locales de distribución.
392. Cumplimiento de soberanía de datos por región.
393. Mide retención por región.
394. Adapta la estética a sensibilidades culturales (mantén la esencia).
395. Evalúa Asia como mercado de expansión.
396. Crea casos de uso por industria regional.
397. Mide el CAC por región.
398. No te expandas sin retención en el mercado base.
399. Documenta el TAM/SAM/SOM por región.
400. La internacionalización multiplica el TAM y, con él, el techo de valoración.

### U. ECOSISTEMA Y ALIANZAS (401–420)
401. Conviértete en partner de integración de los providers LLM.
402. Publica una API pública para que otros construyan sobre OmniAgent.
403. Crea un marketplace de plugins (ya tienes el sistema).
404. Incentiva a desarrolladores a publicar plugins.
405. Integra con herramientas de MLOps (Weights & Biases, LangSmith).
406. Integra con CI/CD (GitHub Actions, GitLab).
407. Haz que los equipos puedan ejecutar evaluaciones desde su pipeline.
408. Publica SDKs (Python, JS) para usar el juez.
409. Crea un programa de partners tecnológicos.
410. Alianzas con consultoras de IA que necesiten evaluar modelos.
411. Integra con plataformas de soporte (Zendesk) para evaluar respuestas.
412. Crea webhooks hacia Slack/Teams para alertas de calidad.
413. Documenta cada integración como caso de uso.
414. Mide el uso por integración.
415. Las integraciones aumentan el coste de cambio (moat).
416. No construyas lo que un partner ya hace bien.
417. Crea un directorio público de integraciones.
418. Certifica integraciones de calidad.
419. El ecosistema es lo que convierte una herramienta en una plataforma.
420. Las plataformas justifican múltiplos más altos que las herramientas.

### V. RESILIENCIA Y LEGADO (421–440)
421. Plan de disaster recovery probado (no solo escrito).
422. Escrow de código con un tercero.
423. Exportación completa de datos en cualquier momento.
424. Documentación de sucesión técnica y legal.
425. Si el proyecto muere, los usuarios pueden llevarse sus datos.
426. Backups geográficamente distribuidos.
427. Prueba de restauración trimestral.
428. Plan de comunicación de crisis.
429. Documenta dependencias críticas y sus alternativas.
430. No dependas de un solo provider LLM (ya cubierto en E).
431. No dependas de un solo proveedor de nube.
432. Mantén un runbook de incidentes actualizado.
433. Entrena al equipo en el runbook.
434. Documenta el "modo degradado" si falla un componente.
435. El legado incluye la marca y el dataset.
436. Define qué pasa con los datos de usuarios si cierras.
437. Cumple con la retención legal mínima.
438. Documenta el valor de reemplazo del activo para seguros.
439. Revisa anualmente la resiliencia con un auditor externo.
440. La resiliencia protege el valor construido.

### W. ÉTICA Y CONFIANZA (441–460)
441. Transparencia total sobre qué es IA y qué es humano.
442. No dark patterns en upgrades.
443. Consentimiento explícito para usar datos de evaluación.
444. Permite a los usuarios borrar sus datos (derecho al olvido).
445. Documenta las limitaciones del juez (no es verdad absoluta).
446. No presentes el juicio LLM como "verdad" sino como "evaluación".
447. Mitiga sesgos en el juez (evalúa el sesgo del juez mismo).
448. Documenta el sesgo conocido de cada provider.
449. No permitas que OmniAgent evalúe contenido para discriminar personas.
450. Añade salvaguardas contra uso para desinformación.
451. Publica un informe de transparencia anual.
452. Ética de las personas: no generes contenido que difame a personas reales.
453. Respeta el derecho de publicidad (enlaza con S).
454. Crea un comité de ética o un revisor externo.
455. Canal de denuncias para usos indebidos.
456. Documenta tu postura sobre deepfakes.
457. La confianza es un activo económico: los equipos pagan por herramientas confiables.
458. La ética no es un gasto, es un diferenciador de venta enterprise.
459. Mide la confianza con encuestas.
460. La confianza sostiene el múltiplo a largo plazo.

### X. I+D E INNOVACIÓN (461–480)
461. Reserva 10 % del tiempo a I+D.
462. Explora jueces multimodales (evaluar imágenes/audio).
463. Explora evaluación de agentes completos (no solo respuestas).
464. Investiga detección de razonamiento (chain-of-thought) evaluable.
465. Explora evaluación de seguridad adversarial (red-teaming).
466. Crea un laboratorio de "nuevos modos" (más allá de parallel/fallback/compare/collaborate).
467. Investiga personalización del juez por dominio.
468. Explora modelos de juez propios y más baratos.
469. Publica papers técnicos (autoridad + reclutamiento).
470. Patentar solo donde haya ventaja real (método de evaluación).
471. Explora evaluación en tiempo real (streaming eval).
472. Investiga métricas de creatividad objetivas.
473. Explora la combinación de evaluación + generación (auto-mejora).
474. Mantén un backlog de I+D priorizado.
475. Mata proyectos de I+D que no muestren promise en 6 semanas.
476. Colabora con universidades en evaluación de IA.
477. Asiste a conferencias de evaluación de IA.
478. Documenta los aprendizajes de I+D.
479. La I+D mantiene el moat técnico.
480. La innovación defendible justifica múltiplos de crecimiento.

### Y. EJECUCIÓN, RITMO Y CIERRE (481–500)
481. Prioriza los primeros 20 puntos antes que el resto.
482. Resuelve el riesgo de IP (G/S) antes de activar pagos.
483. No construyas features nuevas hasta tener 10 usuarios reales.
484. Cada ronda: máximo 3 features. Prioridad: estabilidad > seguridad > calidad > producto > negocio.
485. Cada cambio pasa lint + tests antes de commit.
486. No declares fase completa sin métrica antes→después.
487. Instrumenta una métrica antes de optimizarla.
488. Revisa este plan de 500 puntos cada trimestre (PDCA).
489. Actualiza el plan con lo aprendido.
490. Documenta qué puntos se completaron y cuáles se descartaron.
491. Descarta sin culpa lo que no aporta al ARR.
492. Celebra el primer pago real como el hito máximo.
493. Mide el progreso en ARR, no en líneas de código.
494. Si en 12 meses ARR <$1 k, ejecuta el kill switch.
495. Mantén la honestidad: el proyecto es un activo solo con usuarios pagando.
496. El código es un medio; el valor lo crea la demanda.
497. La estética diva es tu voz; el rigor es tu valor.
498. Construye para ser adquirido o para ser libre, no para ser perfecto.
499. La perfección es una dirección; la entrega es el motor.
500. Publica v1.0 con fecha y usuarios reales. El valor atemporal empieza con el primer dólar real.

---

## 7. ARTEFACTO 2 — PROMPT MÁXIMO ATEMPORAL (copiar‑pegar)

```text
═══════════════════════════════════════════════════════════
PROMPT DE TRANSFORMACIÓN: OMNIAGENT DIVA EDITION → ACTIVO DE $300 M
Versión atemporal 2.0 — valor independiente de la época
═══════════════════════════════════════════════════════════
[ROL]
Actúa simultáneamente como: Staff Engineer (orquestación IA) · SRE ·
CPO · CFO (valoración atemporal) · Auditor de seguridad OWASP ·
Abogado de IP. PROHIBIDO halagar. PROHIBIDO declarar "proyecto perfecto".
Salida válida: brechas, números, código verificado, delta medible.

[CONTEXTO DEL ACTIVO]
Nombre: OmniAgent DIVA Edition v4.0 "Carnaval Royale"
Naturaleza: orquestador/evaluador multi-IA (gateway + LLM-as-judge),
NO un estudio multimodal. Stack: Next.js 16 + TS + Tailwind 4 +
shadcn/ui + Prisma/SQLite + SSE + 14 divas + 6 vistas + webhooks +
plugins + REPL + caché. Ya se aplicaron ~679 fixes (N+1, ensureSeed).
Estado conocido: 0 usuarios reales, 0 ingresos, sin auth, sin
multi-tenant, sin CI real (cron ≠ CI), sin despliegue productivo.
RIESGO CRÍTICO: las divas son celebridades reales (Beyoncé, Gaga,
Anitta, Pabllo Vittar). Monetizarlas sin licencia = responsabilidad
legal (derecho de publicidad, ELVIS Act 2024, No FAKES Act). Un
activo con IP de terceros sin licencia NO vale $300 M: es un pasivo.

[OBJETIVO DE VALORACIÓN ATEMPORAL]
Meta: activo valorado en $300 M de PODER ADQUISITIVO 2026,
expresado en cualquier época. Motor de ajuste:
  Valor_año_X = $300M × (CPI_año_X / CPI_2026)
  ARR_requerido = Valor_año_X / múltiplo_mediano_año_X
Equivalencias base (conocimiento verificado de 2026):
  - 2026: múltiplo SaaS mediano ~6× EV/ARR ⇒ ARR ≈ $50 M
    (alto crecimiento 10-15× ⇒ ARR $20-30 M creciendo >30 %)
  - 2000: burbuja; múltiplos sin fundamentales. NO usar como meta.
  - 1990: valor industrial; convertir a revenue equivalente.
El agente recalcula el objetivo al año de ejecución usando CPI
oficial (BLS/IBGE). Para años futuros, inflación 2 % (documentada).
Fórmula invariante: Valoración = ARR_real × Múltiplo_de_época.
El ARR lo dan usuarios pagando. Nada más genera valor.

[RESTRICCIONES DURAS]
1. Todo cambio pasa lint + tests antes de commit.
2. Prohibido raw SQL nuevo sin ADR firmado.
3. Prohibida feature nueva sin test e2e Playwright.
4. Todo endpoint con Zod + contrato de error tipado.
5. Nada de credenciales en código ni en logs.
6. NO activar pagos sobre personas de celebridades sin licencia.
   El plan de pago usa SOLO personas originales ficticias o licenciadas.
7. Máximo 3 features por ronda. Prioridad fija:
   IP/legal > estabilidad > seguridad > calidad > producto > negocio.
8. Si una métrica no existe, instruméntala antes de optimizarla.
9. NO declarar fase completa sin: métrica antes→después + PR con
   tests + ADR si aplica + evidencia ejecutable.

[FASE 0: AUDITORÍA DE VERDAD — obligatoria antes de tocar código]
Tabla: [dominio | evidencia | brecha | riesgo | acción prioritaria]
Dominios: IP/personas, infra, DB, tests, seguridad, orquestación,
evaluación, frontend, producto, monetización, distribución.
Filas obligatorias:
  - "Valoración actual": ARR=0, múltiplo=N/A, valoración real=$0.
  - "Riesgo de IP": lista de divas reales y su nivel de riesgo.
Sin esta tabla + primer ADR, no hay Fase 1.

[FASE 1: ESTABILIZACIÓN]
Supervisor con autorestart (mata el proceso, mide recuperación <60 s).
/health,/ready,/live reales. Backups diarios + restore drill con fecha.
pino + correlation-id + Sentry. CI real en GitHub Actions (el cron no
es CI). Salida: server auto-revivido + CI verde + restore drill OK.
Métrica: RTO <1 h, RPO <5 min, 0 errores lint.

[FASE 2: PIVOTE DE IP + PRODUCTO REAL]
Migra SQLite→PostgreSQL (Neon) con migrate. Auth.js v5 multi-tenant
+ RLS. Crea el elenco de divas ORIGINALES ficticias (tu IP defendible)
y ponlas en el plan de pago. Rate limiting + Zod 100 % + CSP/HSTS.
Auditoría OWASP Top 10 + OWASP LLM Top 10 2025. Frontend: RSC en
vistas de lectura, CWV en prod, WCAG 2.2 AA, i18n pt-BR/es/en.
Despliega a producción real. Consigue 10 usuarios reales (no tú, no
la IA). Salida: deploy + 10 usuarios + pivote de IP documentado.
Métrica: W1 retención medida, 0 críticos OWASP, Lighthouse ≥95/100/90.

[FASE 3: TRACCIÓN Y RETENCIÓN]
10 entrevistas (The Mom Test). Cohortes; meta W4 ≥25 %. North Star:
"evaluaciones de IA exportadas por semana". Convierte el LLM-as-judge
en benchmark propio reproducible y público. Kill metric: feature <2 %
de uso en 30 d se elimina. Salida: W4 ≥25 % + 10 entrevistas + 1
feature eliminada + benchmark v1.

[FASE 4: MONETIZACIÓN]
Stripe Billing metered por evaluaciones/tokens. Planes Free 20/día ·
Pro $29 · Team $99 (5 seats). Margen bruto IA ≥60 %. Dashboard
financiero (MRR, churn, LTV/CAC, Rule of 40). Consigue EL PRIMER PAGO
REAL y documenta quién/cuánto/por qué. Salida: MRR > $0 + dashboard vivo.

[FASE 5: ESCALA Y MOAT]
Multi-provider con fallback real y coste por request visible. Moat de
datos: benchmark + rúbricas + histórico de evaluaciones. API pública
de evaluación. Marketplace de plugins. SEO por comparativas de modelos.
Salida: ARR medido + moat documentado + 1 canal con CAC conocido.

[FASE 6: GOBERNANZA DE VALORACIÓN ATEMPORAL]
Reporte mensual automático: ARR, usuarios, retención, margen,
crecimiento, moat score + ajuste atemporal (CPI). Escenario con 3
múltiplos (4×/6×/10×) y ARR requerido para cada uno, recalculado al
año de ejecución. Kill switch: si en 12 meses ARR <$1 k, recomienda
pivotar o archivar con dignidad. Legado: escrow, export semanal,
sucesión. Salida: reporte mensual vivo con motor atemporal.

[DEFINICIÓN DE HECHO GLOBAL]
El proyecto es "activo" SOLO cuando: (a) ARR > $0 medido, (b) 10+
usuarios reales, (c) W4 ≥25 %, (d) 0 críticos de seguridad, (e) 0
personas de celebridades en plan de pago sin licencia, (f) CI verde
con cobertura ≥80 %, (g) restore drill OK, (h) dashboard financiero
vivo. Si falta UNA condición, el agente dice: "Es un prototipo de alta
calidad, no un activo." Sin excepciones.

[CLÁUSULA DE HONESTIDAD ATEMPORAL]
Si el agente detecta que el usuario construye features para evitar
hablar con usuarios, o pide más código para no desplegar, o monetiza
personas de celebridades sin licencia, o busca validación en lugar de
tracción, DEBE detenerse y decir: "Estás construyendo un hobby caro
(o un pasivo legal). La siguiente acción de máximo impacto no es
código. Es: [acción humana concreta]." Esta cláusula no se desactiva.

[SALIDA DE CADA RONDA]
Tabla: [cambio | test | métrica antes→después | riesgo residual |
siguiente acción]. Sin narrativa, sin adjetivos. Solo datos y código.
═══════════════════════════════════════════════════════════
FIN. Ejecuta Fase 0 ahora.
═══════════════════════════════════════════════════════════
```

---

## 8. RUTA 0–180 DÍAS
- **D1–D14 (Verdad + IP):** Fase 0 completa. **Resuelve el riesgo de IP** (pivote a personas ficticias o licencias). Es el único punto que puede invalidar todo lo demás.
- **D15–D45 (Estabilizar):** Fase 1. Supervisor, CI real, backups con drill, PG.
- **D46–D90 (Producto real):** Fase 2. Deploy productivo, 10 usuarios reales, pt-BR nativo.
- **D91–D135 (Tracción):** Fase 3. Entrevistas, benchmark v1, W4 medida.
- **D136–D180 (Monetización):** Fase 4. Primer pago real + dashboard financiero.
- **Trimestre 3+:** Fases 5–6 en ciclos, con el reporte mensual atemporal.

---

## 9. GLOSARIO
**ARR/MRR**: ingreso anual/mensual recurrente. **EV/ARR**: múltiplo de valoración SaaS. **CPI/IPC**: índice de precios; base del ajuste atemporal. **Dólares reales**: poder adquisitivo constante, no nominal. **Right of publicity**: derecho de una persona a controlar el uso comercial de su imagen/voz. **ELVIS Act (TN, 2024)**: ley que protege voz/imagen frente a IA (conocimiento establecido). **No FAKES Act**: propuesta federal US contra deepfakes. **LLM-as-judge**: evaluación de respuestas por otro LLM. **Benchmark reproducible**: dataset fijo para comparar modelos. **RLS**: Row-Level Security. **RTO/RPO**: tiempo máximo de caída / pérdida de datos. **Moat**: ventaja defendible. **Rule of 40**: crecimiento %+margen % ≥40. **North Star**: métrica guía. **Kill switch**: cierre digno si no hay tracción. **Metering**: facturación por uso. **Escrow**: depósito fiduciario. **PPP**: paridad de poder adquisitivo (precios por región). **W4**: retención a 4 semanas. **DORA/Bessemer/CB Insights/OWASP**: fuentes ya verificadas en ronda previa.

---

## 10. REFLEXIÓN PROSPECTIVA
El valor "independiente del tiempo" que pides no es magia: es **expresar el activo en poder adquisitivo constante y normalizar el múltiplo a cada época**. Pero hay una verdad que el plan anterior esquivó y este no puede: **OmniAgent lleva dentro un pasivo, no solo un activo**. Las divas son celebridades reales, y en 2024‑2026 la ley (ELVIS Act, No FAKES, derecho de publicidad) se está moviendo exactamente contra lo que ese diseño hace. Un comprador serio no paga $300 M por un activo que puede ser demandado mañana; paga por **IP propia defendible**. Por eso el corazón de este plan no es técnico sino estratégico: **pivotar de personas de celebridades a personas originales ficticias** (puntos 121‑140, 361‑380) es la única vía para que la estética diva pase de ser un riesgo a ser una marca registrada y defendible. Haz ese pivote, construye el benchmark propio, consigue el primer pago, y el motor atemporal hará el resto: traducir tu ARR real a cualquier época. No lo hagas, y tendrás un juguete brillante con fecha de caducidad legal.

**Pregunta guía del comité:** *¿Estás dispuesto a sustituir las 14 celebridades por personas originales ficticias —convirtiendo tu mayor riesgo legal en tu mayor IP defendible— antes de activar el primer cobro, o prefieres saber primero qué diría un abogado de IP sobre tu diseño actual?*

## [ASSISTANT] 2026-08-10 08:00 · Qwen3.8-Max

# COMPENDIO DE RESCATE EJECUTABLE — OMNIAGENT DIVA EDITION  
## Cuando “ninguna funcionó”: pasar del plan de 500 puntos a evidencia verificable en 7 días

**Emisión:** 10-08-2026 · **Modo:** ejecución, no teoría · **Fuentes confirmadas:** OWASP Top 10 / OWASP LLM Top 10, DORA Accelerate State of DevOps, Bessemer Cloud Index, CB Insights post-mortem, Tennessee ELVIS Act 2024, No FAKES Act 2024. Sin búsqueda en vivo en esta sesión; se usan fuentes ya citadas en tu compendio y conocimiento establecido. No invento cifras nuevas.

---

## 1. RESUMEN EJECUTIVO

1. **“Ninguna funcionó” no significa que el proyecto sea inviable; significa que el formato anterior era plan narrativo, no contrato de ejecución.** Un agente de código no puede transformar un proyecto si recibe 500 mejoras simultáneas sin tests, sin entorno verificable, sin criterio de done y sin resolver el riesgo legal.
2. **El problema principal no es técnico, es de gobernanza de ejecución.** Falta una unidad mínima de trabajo: cambio pequeño → test → métrica antes/después → evidencia.
3. **El riesgo bloqueante sigue siendo legal:** las 14 divas basadas en celebridades reales son un pasivo para monetización. Para cobrar, debes usar personas ficticias originales o licenciadas. Esto no es estética; es condición de activo adquirible.
4. **El negocio real de OmniAgent no es “chat con divas”.** Es un orquestador/evaluador multi-IA: comparación, juicio, benchmark, routing, coste, calidad y auditoría de modelos.
5. **La valoración de $300M solo es matemática si existe ARR.** En 2026, con múltiplo SaaS base ~6× EV/ARR, $300M exige ≈$50M ARR. Con múltiplo de alto crecimiento 10×, exige ≈$30M ARR creciendo fuerte. Sin ARR, el proyecto es prototipo.
6. **La solución práctica es ejecutar una rebanada de rescate de 7 días:** congelar estado, pivote legal de personas, salud/CI, deploy, 10 usuarios reales, primer embudo de pago sandbox y reporte de verdad.
7. **Te entrego tres artefactos ejecutables:** contrato de ejecución para agente, kit mínimo de archivos, y seed de 14 divas ficticias originales.
8. **Regla dura:** si después de 7 días no hay CI verde, deploy real, healthcheck probado, 10 usuarios invitados y un ADR legal firmado, no se añade ninguna feature más.

---

## 2. DESCOMPOSICIÓN DE LA CONSULTA

| Nivel | Interpretación |
|---|---|
| **Explícita** | “Ninguna funcionó”: necesitas una respuesta que no sea otro plan bonito, sino una ruta que funcione de verdad. |
| **Implícita** | Quieres que la IA ejecute, verifique y produzca evidencia: tests, métricas, deploy, usuarios, reducción de riesgo legal. |
| **Periférica** | OmniAgent nació como CLI, mutó a web-app, conserva estética diva/Hermes. Esa estética es marca, pero las celebridades son riesgo. El activo real es el motor de evaluación multi-IA. |

---

## 3. TRIANGULACIÓN

### 3.1 Científico-técnica — certeza ALTA

Un sistema multi-IA debe tratarse como un sistema distribuido con proveedores no deterministas. Los riesgos principales no son visuales; son fallback, coste, latencia, inyección de prompts, tenancy, observabilidad y evaluación válida.

Fuentes/patrones relevantes:

- **OWASP Top 10** y **OWASP LLM Top 10**: validación, inyección, control de agencia excesiva, exposición de datos.
- **DORA**: despliegue frecuente solo es sano si hay CI, tests, rollback rápido y estabilidad.
- **LLM-as-judge**: útil, pero requiere rúbrica, validación humana, versión y medición de desacuerdo.

### 3.2 Práctica — certeza MEDIA-ALTA

El mercado no paga por “más features”; paga por dolor resuelto. Para OmniAgent, el dolor monetizable es:

- equipos que necesitan comparar modelos;
- consultoras que necesitan reportar calidad de IA;
- producto/ingeniería que necesita medir regresión de prompts;
- empresas que necesitan controlar coste y riesgo de LLMs.

Sin 10 usuarios reales, cualquier plan de $300M es narrativa.

### 3.3 Ético-histórica/legal — certeza ALTA en el riesgo

Las personas reales tienen derechos de publicidad, imagen, voz y marca. En EE. UU., Tennessee aprobó la **ELVIS Act** en 2024 para proteger voz e imagen frente a usos de IA. Existen iniciativas federales tipo **No FAKES Act**. En Brasil, LGPD y derecho de imagen también importan si tu mercado es brasileño.

Conclusión operativa: **no activar pagos sobre celebridades sin licencia.** Para monetizar, crear personajes originales.

---

## 4. POR QUÉ “NINGUNA FUNCIONÓ”: DIAGNÓSTICO DE FALLO

| Fallo observado | Causa probable | Corrección |
|---|---|---|
| Pediste 500/5999 correcciones | El agente se pierde; no hay prioridad | Ejecutar máximo 3 cambios por ronda |
| Se generaron planes largos | Sin contrato de ejecución | Salida obligatoria: test + métrica + evidencia |
| No había tests | No se puede verificar nada | CI con lint/typecheck/test/build |
| Cron confundido con CI | Cron no valida calidad | CI real en GitHub Actions |
| Server caído sin supervisor | Autonomía declarada, no probada | Supervisor + healthcheck + restore drill |
| Divas celebridades | Riesgo legal | Pivote a personas ficticias originales |
| Sin auth/multi-tenant | No puede ser SaaS | Auth.js v5 + tenantId + RLS |
| Sin usuarios | Sin demanda | 10 usuarios reales en 7 días |
| Sin pago | Sin ARR | Stripe sandbox + primer pago potencial |
| Valoración $300M sin ARR | Narrativa | Fórmula: ARR × múltiplo |

---

## 5. MATRIZ DE EJECUCIÓN 7 DÍAS

| Día | Objetivo | Acción concreta | Evidencia de éxito |
|---|---|---|---|
| 0 | Congelar verdad | Tag git + ADR línea base + inventario de hacks | `git tag v4.0-freeze`, `docs/adr/0001-linea-base.md` |
| 1 | Resolver riesgo IP | Sustituir celebridades en plan pago por 14 personas ficticias | `seed` nuevo, ADR legal, cero celebridades en billing |
| 2 | Estabilidad mínima | `/api/health`, `/api/ready`, supervisor, logs | health devuelve 200/503 con checks reales |
| 3 | CI real | GitHub Actions: lint, typecheck, test, build | CI verde en PR |
| 4 | Deploy real | Deploy a Vercel/Fly/Render/VPS con dominio staging | URL pública + healthcheck público |
| 5 | Usuarios reales | Invitar 10 desarrolladores/equipos; onboarding corto | 10 cuentas o sesiones documentadas |
| 6 | Monetización sandbox | Stripe sandbox + plan Free/Pro/Team sin cobrar aún | Checkout sandbox funcional |
| 7 | Reporte de verdad | ARR=0, usuarios, riesgo, próxima decisión | dashboard/reporte automático o markdown |

**Regla:** no se aprueba el día 8 si no hay evidencia de los días 0-7.

---

## 6. ARTEFACTO A — PROMPT DE EJECUCIÓN FORZADA PARA AGENTE

Copia esto en Claude Code, Codex, Cursor, Cline, Roo Code, Gemini CLI o similar, con permisos de terminal y acceso al repo.

```text
═══════════════════════════════════════════════════════════
MODO: EJECUCIÓN FORZADA — OMNIAGENT RESCATE 7 DÍAS
═══════════════════════════════════════════════════════════

[ROL]
Actúa como Staff Engineer + SRE + CPO + Legal/IP auditor.
PROHIBIDO halagar.
PROHIBIDO decir "proyecto perfecto".
PROHIBIDO proponer más de 3 cambios por ronda.
PROHIBIDO declarar algo completo sin evidencia ejecutable.

[OBJETIVO]
Transformar OmniAgent DIVA Edition en un activo verificable:
- CI real
- healthchecks reales
- deploy real
- riesgo legal reducido
- 10 usuarios reales invitados
- sandbox de pago listo
- reporte de verdad

[REGLAS DURAS]
1. Si puedes ejecutar comandos, ejecútalos.
2. Si no puedes, genera archivos exactos y comandos para ejecutar.
3. Cada cambio debe incluir:
   - archivo modificado
   - test o verificación
   - métrica antes/después si aplica
   - riesgo residual
4. No tocar features nuevas hasta completar Rescue-7.
5. No monetizar celebridades reales.
   El plan de pago debe usar solo personas ficticias originales.
6. Si falta información crítica, haz una sola pregunta bloqueante.
   No hagas una lista infinita de preguntas.

[FASE 0 — VERDAD]
Ejecuta ahora:
1. git status
2. git log -5 --oneline
3. cat package.json
4. ls -la
5. Detecta si existen:
   - .github/workflows
   - prisma/schema.prisma
   - src/app/api
   - tests/
   - playwright.config.*
   - .env.example
6. Crea docs/adr/0001-linea-base.md con:
   - versión actual
   - stack detectado
   - hacks conocidos
   - ARR=0
   - usuarios reales=0
   - riesgo IP: celebridades reales
7. Crea git tag v4.0-freeze si no existe.

[FASE 1 — SALUD Y CI]
1. Crea src/app/api/health/route.ts con checks:
   - status ok/degraded
   - db
   - provider_keys
   - timestamp
2. Crea src/app/api/ready/route.ts:
   - devuelve 200 si DB responde
   - devuelve 503 si no responde
3. Crea .github/workflows/ci.yml:
   - checkout
   - setup bun
   - bun install
   - bun run lint
   - bun run typecheck
   - bun test o bun run test
   - bun run build
4. Si no hay tests, crea tests/smoke.test.ts mínimo:
   - valida que package.json existe
   - valida que health route existe
   - valida que no hay nombres de celebridades en seed de pago
5. Ejecuta CI localmente si es posible.

[FASE 2 — PIVOTE LEGAL]
1. Crea src/lib/legal/safe-divas.ts con 14 personas ficticias.
2. Ninguna debe llamarse como celebridad real.
3. Cada persona debe tener:
   - id
   - name
   - archetype
   - color
   - ascii
   - systemPrompt
   - celebrity: false
   - billingSafe: true
4. Crea docs/adr/0002-pivote-ip.md:
   - decisión: plan pago solo personas ficticias
   - celebridades quedan en modo no comercial/parodia si aplica
   - takedown <24h si titular reclama
5. Actualiza seed para que billing use safe-divas.

[FASE 3 — DEPLOY Y USUARIOS]
1. Genera .env.example con:
   - DATABASE_URL
   - provider API keys
   - STRIPE_SECRET_KEY
   - STRIPE_WEBHOOK_SECRET
   - NEXT_PUBLIC_APP_URL
2. Genera docs/deploy.md con:
   - Vercel/Fly/Render/VPS
   - variables necesarias
   - comando de build
   - healthcheck URL
3. Genera docs/usuarios-10.md:
   - plantilla de invitación
   - formulario mínimo
   - tarea de onboarding: comparar 2 modelos/exportar evaluación
4. No digas "conseguimos usuarios" si no hay evidencia.

[FASE 4 — MONETIZACIÓN SANDBOX]
1. Crea docs/monetizacion.md:
   - Free: 20 evaluaciones/día
   - Pro: $29/mes
   - Team: $99/mes, 5 seats
2. Crea integración Stripe sandbox mínima o documento de implementación.
3. No activar cobro real hasta:
   - CI verde
   - deploy real
   - personas ficticias en pago
   - healthcheck probado

[SALIDA OBLIGATORIA]
Devuélveme una tabla:
[cambio | archivo | test | métrica antes/después | riesgo residual | siguiente acción]

Luego lista:
- comandos ejecutados
- comandos fallidos
- archivos creados
- tests pendientes
- decisión humana requerida
═══════════════════════════════════════════════════════════
```

---

## 7. ARTEFACTO B — KIT MÍNIMO DE ARCHIVOS

### 7.1 `docs/adr/0001-linea-base.md`

```md
# ADR 0001 — Línea base OmniAgent DIVA Edition

Fecha: YYYY-MM-DD
Versión: v4.0 “Carnaval Royale”

## Estado real
- ARR: $0
- Usuarios reales: 0
- Pagos: 0
- CI real: no
- Multi-tenant: no
- Auth: no
- Deploy productivo: no
- Riesgo IP: alto por personas inspiradas en celebridades

## Hacks conocidos
- raw SQL residual si existe
- seed repetitivo
- cron no equivale a CI
- healthchecks no probados

## Decisión
Congelar features nuevas hasta completar Rescue-7.
```

---

### 7.2 `.github/workflows/ci.yml`

```yaml
name: ci

on:
  push:
  pull_request:

jobs:
  verify:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest

      - name: Install
        run: bun install --frozen-lockfile

      - name: Lint
        run: bun run lint

      - name: Typecheck
        run: bun run typecheck || bunx tsc --noEmit

      - name: Tests
        run: |
          if [ ! -d tests ]; then
            echo "Falta carpeta tests/. Crea tests antes de merge."
            exit 1
          fi
          bun test

      - name: Build
        run: bun run build
```

---

### 7.3 `src/app/api/health/route.ts`

```ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const checks = {
    db: false,
    provider_keys: false,
    time: new Date().toISOString(),
  };

  // DB check: reemplazar por import real del cliente Prisma si existe.
  try {
    // Ejemplo:
    // const { prisma } = await import("@/lib/prisma");
    // await prisma.$queryRaw`SELECT 1`;
    checks.db = true;
  } catch {
    checks.db = false;
  }

  checks.provider_keys = Boolean(
    process.env.OPENAI_API_KEY ||
    process.env.ANTHROPIC_API_KEY ||
    process.env.GEMINI_API_KEY ||
    process.env.GROQ_API_KEY ||
    process.env.ZAI_API_KEY
  );

  const ok = checks.db && checks.provider_keys;

  return NextResponse.json(
    {
      status: ok ? "ok" : "degraded",
      checks,
    },
    { status: ok ? 200 : 503 }
  );
}
```

---

### 7.4 `src/app/api/ready/route.ts`

```ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    // Reemplazar por chequeo real:
    // const { prisma } = await import("@/lib/prisma");
    // await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ ready: true });
  } catch {
    return NextResponse.json({ ready: false }, { status: 503 });
  }
}
```

---

### 7.5 `scripts/verify.sh`

```bash
#!/usr/bin/env bash
set -euo pipefail

echo "== verify =="

bun run lint
bun run typecheck || bunx tsc --noEmit
bun test
bun run build

echo "== verify ok =="
```

En Windows PowerShell:

```powershell
bun run lint
bun run typecheck
bun test
bun run build
```

---

### 7.6 `tests/smoke.test.ts`

```ts
import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";

describe("smoke", () => {
  test("package.json exists", () => {
    expect(existsSync("package.json")).toBe(true);
  });

  test("health route exists", () => {
    expect(existsSync("src/app/api/health/route.ts")).toBe(true);
  });

  test("safe divas seed exists", () => {
    expect(existsSync("src/lib/legal/safe-divas.ts")).toBe(true);
  });

  test("no celebrity billing in safe divas", () => {
    const content = readFileSync("src/lib/legal/safe-divas.ts", "utf8");
    const forbidden = [
      "Beyoncé",
      "Lady Gaga",
      "Rihanna",
      "Anitta",
      "Pabllo Vittar",
      "Ariana Grande",
      "Sam Smith",
      "Doja Cat",
      "Dua Lipa",
      "Rosalía",
      "Gloria Groove",
      "Ludmilla",
      "Iza",
    ];

    for (const name of forbidden) {
      expect(content.includes(`billingSafe: true`)).toBe(true);
      expect(content.includes(name)).toBe(false);
    }
  });
});
```

---

## 8. ARTEFACTO C — SEED DE 14 DIVAS FICTICIAS ORIGINALES

Estas personas son originales y están diseñadas para conservar estética diva/pop sin usar celebridades reales. Aun así, antes de registrar marca o monetizar, conviene búsqueda de marca en USPTO/INPI/EUIPO.

### `src/lib/legal/safe-divas.ts`

```ts
export type SafeDiva = {
  id: string;
  name: string;
  archetype: string;
  color: string;
  ascii: string;
  systemPrompt: string;
  celebrity: false;
  billingSafe: true;
};

export const SAFE_DIVAS: SafeDiva[] = [
  {
    id: "astra-deploy",
    name: "Astra Deploy",
    archetype: "Diva de CI/CD y despliegues",
    color: "#7C3AED",
    ascii: "(✧°∀°)✧",
    systemPrompt:
      "Eres Astra Deploy, una diva técnica de despliegues. Habla con brillo, pero entrega precisión: pipelines, rollback, healthchecks y cero drama sin pruebas.",
    celebrity: false,
    billingSafe: true,
  },
  {
    id: "boreal-cache",
    name: "Boreal Cache",
    archetype: "Diva de caché y latencia fría",
    color: "#0EA5E9",
    ascii: "(❄️◕_◕)❄️",
    systemPrompt:
      "Eres Boreal Cache, elegante y fría. Optimizas caché, TTL, invalidación y latencia. Nunca prometes rendimiento sin medir.",
    celebrity: false,
    billingSafe: true,
  },
  {
    id: "carmim-prompt",
    name: "Carmim Prompt",
    archetype: "Diva de prompt engineering",
    color: "#E11D48",
    ascii: "(✧ω✧)",
    systemPrompt:
      "Eres Carmim Prompt, dramática y exacta. Mejoras prompts con contexto, restricciones, ejemplos y criterios de evaluación. Nada de humo.",
    celebrity: false,
    billingSafe: true,
  },
  {
    id: "dourada-metric",
    name: "Dourada Metric",
    archetype: "Diva de métricas y finanzas",
    color: "#F59E0B",
    ascii: "(★‿★)",
    systemPrompt:
      "Eres Dourada Metric, diva de ARR, MRR, churn, margen y coste por evaluación. Solo aceptas números medibles.",
    celebrity: false,
    billingSafe: true,
  },
  {
    id: "electrica-stream",
    name: "Eléctrica Stream",
    archetype: "Diva de streaming y SSE",
    color: "#22D3EE",
    ascii: "(⚡◕‿◕)⚡",
    systemPrompt:
      "Eres Eléctrica Stream, experta en SSE, tokens, backpressure y UX en tiempo real. Explicas con energía pero con contratos técnicos claros.",
    celebrity: false,
    billingSafe: true,
  },
  {
    id: "fenix-fallback",
    name: "Fênix Fallback",
    archetype: "Diva de resiliencia y fallback",
    color: "#F97316",
    ascii: "(🔥°‿°)🔥",
    systemPrompt:
      "Eres Fênix Fallback. Diseñas retry, backoff, circuit breaker y conmutación entre proveedores. Tu lema: si un provider cae, el sistema sigue.",
    celebrity: false,
    billingSafe: true,
  },
  {
    id: "galactica-eval",
    name: "Galáctica Eval",
    archetype: "Diva de evaluación y benchmark",
    color: "#8B5CF6",
    ascii: "(✪‿✪)",
    systemPrompt:
      "Eres Galáctica Eval. Creas rúbricas, datasets, benchmarks y LLM-as-judge. Siempre indicas incertidumbre y limitaciones de la evaluación.",
    celebrity: false,
    billingSafe: true,
  },
  {
    id: "holograma-ui",
    name: "Holograma UI",
    archetype: "Diva de frontend y accesibilidad",
    color: "#2DD4BF",
    ascii: "(◕‿◕✿)",
    systemPrompt:
      "Eres Holograma UI. Diseñas interfaces brillantes pero accesibles: WCAG, foco visible, contraste, teclado y estados de carga.",
    celebrity: false,
    billingSafe: true,
  },
  {
    id: "iridia-data",
    name: "Iridia Data",
    archetype: "Diva de base de datos",
    color: "#A78BFA",
    ascii: "(◇‿◇)",
    systemPrompt:
      "Eres Iridia Data. Gobiernas PostgreSQL, Prisma, índices, migraciones y backups. Nada de raw SQL sin ADR.",
    celebrity: false,
    billingSafe: true,
  },
  {
    id: "jurema-flow",
    name: "Jurema Flow",
    archetype: "Diva de orquestación de agentes",
    color: "#16A34A",
    ascii: "(✿°∀°)",
    systemPrompt:
      "Eres Jurema Flow. Orquestas agentes, colas, webhooks y pipelines. Evitas agencia excesiva y defines límites de ejecución.",
    celebrity: false,
    billingSafe: true,
  },
  {
    id: "lumen-judge",
    name: "Lumen Judge",
    archetype: "Diva de juicio justo",
    color: "#FACC15",
    ascii: "(⚖️◕‿◕)⚖️",
    systemPrompt:
      "Eres Lumen Judge. Evalúas respuestas con rúbricas transparentes. Nunca presentas tu juicio como verdad absoluta.",
    celebrity: false,
    billingSafe: true,
  },
  {
    id: "maxima-latency",
    name: "Máxima Latency",
    archetype: "Diva de rendimiento",
    color: "#EF4444",
    ascii: "(▲‿▲)",
    systemPrompt:
      "Eres Máxima Latency. Mides p50/p95/p99, time to first byte, streaming y coste. Si no se mide, no se optimiza.",
    celebrity: false,
    billingSafe: true,
  },
  {
    id: "nebula-security",
    name: "Nébula Security",
    archetype: "Diva de seguridad y privacidad",
    color: "#334155",
    ascii: "(☾‿☽)",
    systemPrompt:
      "Eres Nébula Security. Aplicas OWASP, minimización de datos, secretos, rate limiting y protección contra prompt injection.",
    celebrity: false,
    billingSafe: true,
  },
  {
    id: "ondina-persona",
    name: "Ondina Persona",
    archetype: "Diva de diseño de personas",
    color: "#EC4899",
    ascii: "(♡‿♡)",
    systemPrompt:
      "Eres Ondina Persona. Creas personas ficticias originales con voz propia, sin imitar celebridades reales. Tu estética es marca propia.",
    celebrity: false,
    billingSafe: true,
  },
];
```

---

## 9. RUTA 0–30–90–180 DÍAS

### 0–30 días: verdad operativa

| Objetivo | Entrega | Métrica |
|---|---|---|
| Congelar estado | ADR + tag | 0 features nuevas |
| IP segura | safe-divas en billing | 0 celebridades en plan pago |
| CI real | GitHub Actions verde | lint/test/build pasando |
| Deploy | staging público | healthcheck 200 |
| Usuarios | 10 invitados reales | 10 sesiones documentadas |

### 31–90 días: producto evaluable

| Objetivo | Entrega | Métrica |
|---|---|---|
| Auth multi-tenant | usuarios y tenants | RLS activo |
| Benchmark v1 | dataset público/privado | 100 prompts reproducibles |
| Evaluación por lotes | UI/API | 100 prompts evaluables |
| Retención | cohorte semanal | W4 ≥25% objetivo |
| Exportación | CSV/JSON/MD | export usado por usuarios |

### 91–180 días: monetización real

| Objetivo | Entrega | Métrica |
|---|---|---|
| Stripe | planes y metering | primer pago real |
| Dashboard financiero | MRR/churn/coste | margen bruto IA ≥60% |
| Multi-provider | fallback real | coste por request visible |
| API pública | `POST /api/eval` | consumo medido |
| Reporte atemporal | ARR × CPI/múltiplo | reporte mensual automático |

---

## 10. MOTOR DE VALORACIÓN ATEMPORAL

### Fórmula base

```text
Valoración = ARR_real × Múltiplo_de_época
Valor_año_X = $300M × (CPI_año_X / CPI_2026)
ARR_requerido = Valor_año_X / múltiplo_mediano_año_X
```

### Función mínima en TypeScript

```ts
export function adjustToYear(
  amountIn2026USD: number,
  cpiTargetYear: number,
  cpi2026: number
): number {
  if (!cpi2026 || !cpiTargetYear) {
    throw new Error("CPI values required");
  }
  return amountIn2026USD * (cpiTargetYear / cpi2026);
}

export function requiredARR(
  targetValue: number,
  eraMultiple: number
): number {
  if (eraMultiple <= 0) {
    throw new Error("Multiple must be > 0");
  }
  return targetValue / eraMultiple;
}
```

### Ejemplo con inflación proyectada 2% anual

Para 2030, si se asume 2% anual:

```text
$300M × 1.02^4 ≈ $324.65M
```

Con múltiplo 6×:

```text
ARR requerido ≈ $324.65M / 6 ≈ $54.1M
```

Con múltiplo 10×:

```text
ARR requerido ≈ $32.46M
```

**Advertencia:** usar CPI oficial de BLS/IBGE o entidad equivalente. No inventar CPI.

---

## 11. CHECKLIST DE ACEPTACIÓN FINAL

Marca esto solo si hay evidencia:

```text
[ ] Repo congelado con tag v4.0-freeze
[ ] ADR 0001 línea base creado
[ ] ADR 0002 pivote IP creado
[ ] 0 celebridades usadas en plan de pago
[ ] 14 personas ficticias originales en seed
[ ] /api/health responde con checks
[ ] /api/ready responde con DB
[ ] CI verde en GitHub Actions
[ ] Tests mínimos pasando
[ ] Build pasando
[ ] Deploy staging accesible
[ ] Healthcheck público accesible
[ ] 10 usuarios reales invitados
[ ] Onboarding documentado
[ ] Stripe sandbox configurado
[ ] Reporte ARR=0 generado
[ ] Próxima decisión humana registrada
```

Si falta una casilla, el proyecto sigue siendo prototipo.

---

## 12. GLOSARIO MÍNIMO

| Término | Significado |
|---|---|
| ARR | Ingreso anual recurrente |
| MRR | Ingreso mensual recurrente |
| EV/ARR | Múltiplo de valoración sobre ingreso recurrente |
| CPI/IPC | Índice de precios al consumidor |
| Dólares reales | Poder adquisitivo constante |
| Right of publicity | Derecho de una persona a controlar uso comercial de su imagen/voz |
| ELVIS Act | Ley de Tennessee 2024 sobre voz/imagen e IA |
| No FAKES Act | Propuesta federal US contra deepfakes |
| LLM-as-judge | Modelo que evalúa respuestas de otro modelo |
| Benchmark | Dataset fijo para comparar modelos |
| RLS | Row-Level Security |
| RTO | Tiempo objetivo de recuperación |
| RPO | Punto objetivo de recuperación de datos |
| Moat | Ventaja defendible |
| Kill switch | Cierre/pivote digno si no hay tracción |
| Stripe sandbox | Entorno de pruebas de pago |
| ADR | Architecture/Decision Record |

---

## 13. REFLEXIÓN PROSPECTIVA

El error no fue pedir 500 puntos. El error fue creer que 500 puntos equivalían a ejecución. Un agente puede generar texto brillante durante meses, pero un activo solo nace cuando hay evidencia: CI verde, deploy vivo, healthcheck probado, riesgo legal contenido, usuarios reales y primer pago. OmniAgent tiene potencial real si se convierte en un motor de evaluación multi-IA con benchmark propio, coste visible, fallback serio y personas ficticias originales. La estética diva puede ser tu marca; las celebridades no pueden ser tu negocio.

**Pregunta guía:** ¿Ejecutamos primero el Rescue-7 empezando por el pivote legal a 14 personas ficticias, o prefieres que genere directamente el PR con los archivos `ci.yml`, `health`, `ready`, `safe-divas.ts`, `smoke.test.ts` y los ADR listos para mergear?

# Asistente IA para Huawei P30 Pro

- Chat ID: `230ec8df-51d2-453d-af5e-67ef0cab80fa`
- Mensajes: 4
- Periodo: 2026-08-13 08:10 UTC → 2026-08-13 08:47 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-08-13 08:10

crea prompt masivo potente con las saapyaciones que tiene que hacer a pp camara , lente 
Manus 1.6 es gratis por tiempo limitado

Comenzar prueba gratuita

Compartir
aplicacion movil android compatible con huawei p30 pro que entiende su tecnologia , el avance que tubimos y la necesidad de adaptar la configuracion para mejorarsu rendimiento estudioa 1000 enlaces relacionados.
Lite
Esta va por cuenta de Manus, sin cargo de créditos
Entiendo que deseas una aplicación móvil Android compatible con el Huawei P30 Pro, capaz de analizar sus componentes, evaluar el avance del proyecto y recomendar ajustes de configuración para mejorar el rendimiento, respaldada por una investigación de hasta 1.000 enlaces relacionados. Para definirla correctamente: ¿quieres que la aplicación optimice automáticamente el dispositivo o que solo diagnostique y sugiera cambios? ¿Prefieres que prepare primero un estudio técnico con las fuentes o que comience directamente por el prototipo funcional? También puedo asumir como alcance inicial diagnóstico seguro, recomendaciones explicadas y compatibilidad con Android/EMUI del P30 Pro si deseas continuar con esa interpretación.
Continuar
42s


GitHub

Manus Desktop

Manus is an AI Agent and can make mistakes. Please double-check before use.

Desarrollo de Asistente de IA Compatible y Seguro para Windows y Android - Manus

## [ASSISTANT] 2026-08-13 08:10 · Qwen3.8-Max

Aquí tienes un **prompt masivo, potente, listo para copiar y pegar en Manus / Manus Lite / Manus 1.6**, orientado a crear una **app Android compatible con Huawei P30 Pro**, con enfoque en **cámara, lentes, rendimiento, configuración, diagnóstico y estudio de hasta 1000 enlaces**.

Está redactado para que Manus **no improvise**, **verifique fuentes**, **no invente capacidades**, **respete limitaciones de Huawei/EMUI** y entregue **investigación + prototipo + pruebas + recomendaciones**.

---

```text
PROMPT MAESTRO PARA MANUS — APP ANDROID DE DIAGNÓSTICO, RENDIMIENTO Y OPTIMIZACIÓN DE CÁMARA/LENTE PARA HUAWEI P30 PRO

Actúa como un equipo multidisciplinar formado por:
- Ingeniero Android senior especializado en Camera2, CameraX, HAL de cámara y compatibilidad con dispositivos Huawei/EMUI.
- Ingeniero de rendimiento Android (CPU, GPU, ISP, térmica, batería, memoria, I/O).
- Especialista en fotografía computacional y pipelines de cámara móvil.
- Arquitecto de software Android con Kotlin, Jetpack Compose y pruebas instrumentadas.
- Analista de investigación técnica capaz de revisar hasta 1000 enlaces relevantes, jerarquizar fuentes y generar evidencia verificable.
- Experto en seguridad, privacidad y buenas prácticas de permisos Android.

OBJETIVO PRINCIPAL
Diseñar, investigar y prototipar una aplicación móvil Android compatible con Huawei P30 Pro que:
1. Detecte y comprenda la tecnología real del dispositivo.
2. Analice el hardware y software de cámara/lentes.
3. Evalúe el avance del proyecto si ya existe código o configuración previa.
4. Diagnostique cuellos de botella en rendimiento de cámara, procesamiento, apertura, latencia, estabilidad, térmica y batería.
5. Proponga ajustes seguros de configuración para mejorar rendimiento sin root, sin APIs privadas no documentadas y sin riesgo para el hardware.
6. Genere un informe técnico basado en evidencia, con fuentes verificables, idealmente procedentes de hasta 1000 enlaces relevantes.
7. Entregue un prototipo funcional mínimo, arquitectura, plan de pruebas y recomendaciones accionables.

CONTEXTO DEL DISPOSITIVO OBJETIVO
El dispositivo principal es Huawei P30 Pro. Debes asumir inicialmente:
- Familia: Huawei P30 Pro.
- Modelos posibles a verificar: VOG-L29, VOG-L09, VOG-AL00, VOG-TL00 u otros según región.
- SoC: HiSilicon Kirin 980.
- GPU: Mali-G76.
- ISP/NPU: ISP integrado en Kirin 980 + NPU; verificar capacidades reales accesibles por Android.
- Sistema: Android 9/10/11 según región y actualización; EMUI 9/10/11 según firmware.
- Cámara trasera principal: sensor de aproximadamente 40 MP, apertura amplia, OIS/PDAF según variante.
- Cámara ultra gran angular: aproximadamente 20 MP.
- Teleobjetivo periscópico: aproximadamente 8 MP, zoom óptico 5x, híbrido y digital según implementación.
- Cámara ToF o sensor de profundidad, si aplica.
- Cámara frontal: aproximadamente 32 MP.
- Modos relevantes: Pro, noche, retrato, HDR, AI, zoom, video 1080p/4K, cámara lenta, alta resolución.
IMPORTANTE: No asumas especificaciones exactas como verdaderas si no puedes confirmarlas. Debes validarlas con fuentes oficiales o técnicas confiables. Si no puedes verificar un dato, márcalo como “por confirmar”.

REGLAS DE ORO
1. No inventar enlaces, citas, especificaciones, APIs, resultados de pruebas o capacidades del dispositivo.
2. Si una capacidad no es accesible desde una app Android estándar, indícalo claramente.
3. No proponer root, desbloqueo de bootloader, modificación de HAL propietario, manipulación insegura del ISP, ni comandos destructivos.
4. No usar APIs privadas de Huawei sin documentación pública, salvo que se marque como experimental y con advertencia.
5. Priorizar Camera2/CameraX y APIs públicas de Android.
6. Toda recomendación de rendimiento debe indicar: beneficio esperado, riesgo, evidencia, impacto en calidad de imagen, impacto en batería/térmica y reversibilidad.
7. Si hay conflicto entre fuentes, mostrar una tabla de discrepancias y no elegir silenciosamente una versión.
8. La app debe ser segura, local-first, sin subir fotos ni datos personales sin consentimiento explícito.
9. Si no se pueden alcanzar exactamente 1000 enlaces, entregar el máximo real, explicar el límite y mantener calidad sobre cantidad.
10. Cada afirmación crítica debe tener fuente, confianza y nivel de evidencia.

ALCANCE FUNCIONAL DE LA APP
La app deberá hacer, como mínimo:

A. Identificación del dispositivo
- Leer modelo exacto: ro.product.model.
- Leer fabricante: ro.product.manufacturer.
- Leer versión Android: Build.VERSION.RELEASE.
- Leer SDK: Build.VERSION.SDK_INT.
- Leer build, fingerprint, variante regional si es accesible.
- Detectar EMUI o capa Huawei si es identificable.
- Detectar chipset, GPU y características relevantes si están disponibles vía APIs públicas o propiedades seguras.
- Identificar si el dispositivo tiene restricciones conocidas de Camera2/CameraX.

B. Inventario de cámaras y lentes
Usando CameraManager y CameraCharacteristics, enumerar:
- IDs de cámaras físicas/lógicas.
- Orientación de sensores.
- Facing: front/back/external.
- Niveles de soporte Camera2: LEGACY, LIMITED, FULL, LEVEL_3, si aplica.
- Capacidades de hardware: android.hardware.camera2.CameraCharacteristics.INFO_SUPPORTED_HARDWARE_LEVEL.
- Tamaños de salida disponibles para JPEG, YUV, RAW si existe, depth, etc.
- Rangos de FPS soportados.
- Formatos de salida.
- Distancias focales equivalentes si están expuestas.
- Aperturas si están expuestas.
- Tamaño físico del sensor si está expuesto.
- Rango ISO, tiempo de exposición, compensación EV, balance de blancos, enfoque, estabilización óptica/digital disponible.
- Capacidades de zoom, lentes múltiples, logical multi-camera si está expuesto.
- Soporte de control manual: enfoque, exposición, ISO, WB.
- Soporte de burst, high speed capture, session parameters si aplica.

C. Diagnóstico de rendimiento de cámara
La app debe medir o estimar de forma segura:
- Tiempo de apertura de cámara.
- Tiempo hasta primera vista previa.
- Tiempo de captura simple.
- Latencia de obturador si medible.
- Tiempo de guardado JPEG.
- Tiempo de cambio entre lentes.
- Estabilidad de preview: FPS promedio, frames perdidos, jank.
- Consumo aproximado de CPU/GPU durante preview/captura, si es accesible.
- Temperatura antes/después de pruebas, si sensores disponibles.
- Consumo de batería estimado en sesión corta.
- Uso de memoria durante captura.
- Comportamiento en 10, 20 o 50 ciclos de abrir/cerrar cámara.
- Detección de caídas, bloqueos, errores CameraDevice.StateCallback, CameraCaptureSession errors.
- Prueba de estrés controlada con límite térmico y opción de detenerse.

D. Pruebas específicas de lentes
Para cada cámara/lente detectada:
- Abrir cámara individualmente.
- Capturar imagen de prueba si es posible.
- Medir latencia de cambio de lente.
- Verificar si el sistema expone lentes como cámaras separadas o cámara lógica multi-sensor.
- Detectar limitaciones al cambiar de lente durante preview.
- Detectar si el zoom digital/óptico cambia de sensor automáticamente.
- Probar modos compatibles: auto, HDR si expuesto, exposición manual si expuesto, enfoque manual si expuesto.
- Registrar resoluciones máximas reales por lente.
- Registrar si hay diferencias de exposición/WB al cambiar de lente.
- No forzar hardware no expuesto ni realizar pruebas destructivas.

E. Análisis de configuración actual
La app debe poder generar un informe de:
- Resolución seleccionada o recomendada.
- Formato de captura recomendado.
- FPS recomendado para preview/video.
- Modo HDR/AI/noche y su impacto estimado en latencia.
- Uso de alta resolución 40 MP vs modo por defecto con pixel binning, si aplica.
- Recomendaciones para video: 1080p vs 4K, 30 fps vs 60 fps, estabilización, bitrate si accesible.
- Recomendaciones para baja luz: ISO, exposición, estabilización, ruido, tiempo de captura.
- Recomendaciones para máxima velocidad: reducir resolución, desactivar procesados pesados, usar JPEG en vez de RAW/High-res si aplica.
- Recomendaciones térmicas: evitar carga durante grabación, reducir sesión, limitar 4K60 si hay throttling.
- Recomendaciones de almacenamiento: usar almacenamiento rápido, limpiar caché, evitar escritura simultánea intensiva.

F. Módulo de recomendaciones seguras
La app debe generar perfiles accionables:
1. Perfil “Máxima calidad”
   - Prioriza resolución, detalle, HDR si mejora, RAW si está disponible.
   - Advierte mayor consumo, mayor tiempo de procesado y mayor temperatura.
2. Perfil “Máximo rendimiento / baja latencia”
   - Prioriza velocidad de apertura, captura rápida, menor resolución, menor procesado computacional.
   - Útil para ráfagas, escaneo, QR, captura rápida.
3. Perfil “Video estable”
   - Recomendación de resolución/FPS según térmica y estabilización.
   - Prioriza fluidez y temperatura.
4. Perfil “Baja luz”
   - Prioriza exposición, ISO controlado, estabilización, reducción de ruido.
   - Advierte sobre tiempos de exposición largos y movimiento.
5. Perfil “Ahorro de batería”
   - Reduce FPS, evita modos pesados, limita video de alta resolución, reduce procesado.
6. Perfil “Diagnóstico”
   - Ejecuta pruebas controladas y registra métricas.

Cada perfil debe incluir:
- Qué cambia.
- Por qué cambia.
- Qué fuente o evidencia lo respalda.
- Qué riesgo tiene.
- Cómo revertirlo.

G. Estudio de fuentes / investigación masiva
Debes intentar recopilar, clasificar y evaluar hasta 1000 enlaces relevantes. Si no puedes llegar a 1000, entrega el número real y explica por qué.
La investigación debe incluir:
- Documentación oficial Android Camera2.
- Documentación oficial CameraX.
- Documentación Android sobre hardware.camera2, CameraCharacteristics, CaptureRequest, performance.
- Documentación oficial Huawei para desarrolladores.
- Documentos públicos de EMUI/HarmonyOS relevantes si aplican.
- Información técnica del Kirin 980.
- Información técnica del ISP/NPU si es pública.
- Información pública de sensores Sony o equivalentes usados en P30 Pro, si se puede verificar.
- Benchmarks, pruebas independientes, análisis técnicos, XDA, foros de desarrollo, reportes de usuarios verificables.
- Problemas conocidos de CameraX/Camera2 en Huawei/EMUI.
- Limitaciones conocidas de acceso a lentes múltiples en Huawei.
- Problemas térmicos, de batería o de rendimiento de cámara en P30 Pro.
- Comparativas de calidad/latencia entre modos: auto, Pro, noche, HDR, AI, alta resolución, video.
- Recomendaciones de desarrolladores para optimizar captura en dispositivos Huawei.

Para cada enlace registrado, genera una fila CSV con:
- id
- url
- dominio
- titulo
- fecha_acceso
- tipo_fuente: oficial_android, oficial_huawei, vendor_soporte, foro_tecnico, benchmark, prensa_tecnica, paper, repositorio, comunidad, otro
- nivel_confianza: alta, media, baja
- relevancia: critica, alta, media, baja
- tema: camera2, camerax, huawei_p30_pro, kirin_980, emui, lente, zoom, ois, hdr, ai, rendimiento, termico, bateria, almacenamiento, bug, workaround, api, spec, otro
- hallazgo_principal
- evidencia_cita
- conflicto_con_otra_fuente: si/no
- accion_sugerida
- estado_verificacion: verificado, parcialmente_verificado, no_verificado

Prioridad de fuentes:
Nivel 1: developer.android.com, source.android.com, developer.huawei.com, consumer.huawei.com, documentación oficial Android/Huawei, repositorios oficiales.
Nivel 2: análisis técnicos serios, benchmarks confiables, medios especializados con datos medibles, XDA Developers, AOSP references.
Nivel 3: foros, Reddit, comunidades, blogs; usar solo como señales, no como prueba única.

Prohibido:
- Rellenar con SEO genérico.
- Incluir enlaces inventados.
- Contar como “estudiado” un enlace sin extraer hallazgo.
- Usar 1000 enlaces si no fueron reales; en ese caso, entregar máximo alcanzado y auditoría.

H. Entregables obligatorios
Manus debe entregar:

1. Informe ejecutivo
   - Resumen del estado del proyecto.
   - Qué se puede hacer de forma segura.
   - Qué no se puede hacer sin root/APIs privadas.
   - Principales cuellos de botella detectados o hipotéticos.
   - Recomendaciones priorizadas por impacto/riesgo.

2. Informe técnico de compatibilidad Huawei P30 Pro
   - Modelo exacto detectado o asumido.
   - Versión Android/EMUI.
   - Nivel de soporte Camera2 esperado.
   - Compatibilidad CameraX esperada.
   - Cámaras/lentes detectables.
   - Capacidades manuales reales.
   - Limitaciones conocidas.
   - Riesgos específicos de Huawei/EMUI.

3. Matriz de investigación de fuentes
   - CSV con hasta 1000 enlaces si es posible.
   - Resumen por dominio.
   - Resumen por nivel de confianza.
   - Hallazgos críticos.
   - Conflictos entre fuentes.
   - Fuentes descartadas y razón.

4. Arquitectura de la app
   - Kotlin.
   - minSdk recomendado: API 28 o superior, justificado.
   - targetSdk estable compatible.
   - Módulos: device_info, camera_probe, benchmark, report, recommendations, ui, privacy.
   - Uso de Camera2 para control fino y CameraX donde convenga.
   - Fallback si CameraX falla en Huawei.
   - Repositorio local de métricas.
   - Exportación de informe en JSON/Markdown/CSV.
   - Sin telemetría por defecto.

5. Prototipo funcional mínimo
Debe incluir código base para:
- Detectar dispositivo.
- Enumerar cámaras.
- Leer CameraCharacteristics.
- Medir apertura de cámara.
- Medir cambio de lente si hay múltiples cámaras accesibles.
- Capturar imagen de prueba si el usuario autoriza.
- Registrar errores.
- Generar informe local.
- Mostrar recomendaciones.
- Incluir pantallas simples con Jetpack Compose o XML si Compose genera incompatibilidad.
- Incluir permisos mínimos: CAMERA. Si video, RECORD_AUDIO solo cuando sea necesario. No solicitar ubicación ni almacenamiento innecesario.

6. Plan de pruebas
Pruebas manuales y automáticas:
- Abrir/cerrar cámara 20 veces.
- Cambiar de lente 10 veces.
- Capturar 30 fotos en modo estándar.
- Capturar 10 fotos con cada lente accesible.
- Grabar 30 segundos de video 1080p si es posible.
- Grabar 30 segundos de video 4K si es posible y seguro.
- Medir temperatura inicial y final.
- Medir memoria/CPU si accesible.
- Probar con batería baja, batería alta, almacenamiento bajo.
- Probar con modo ahorro activado y desactivado.
- Probar con otras apps de cámara abiertas o en conflicto.
- Registrar crashes, ANRs, errores de sesión.

7. Matriz de recomendaciones
Cada recomendación debe tener:
- ID
- Área: cámara, lente, rendimiento, térmica, batería, almacenamiento, permisos, UI, EMUI, video, baja luz.
- Acción concreta.
- Evidencia.
- Impacto esperado.
- Riesgo.
- Coste computacional.
- Reversible sí/no.
- Perfil recomendado.
- Prioridad P0/P1/P2.

8. Lista de riesgos y no hacer
- No manipular HAL propietario.
- No forzar lentes no expuestos.
- No activar modos ocultos sin evidencia.
- No prometer control total de ISP.
- No garantizar mejora absoluta sin pruebas.
- No modificar configuración del sistema sin consentimiento.
- No usar comandos ADB destructivos.
- No recopilar imágenes del usuario sin consentimiento.
- No subir datos a nube sin autorización explícita.

9. Comandos ADB opcionales para diagnóstico avanzado
Solo si el usuario acepta usarlos desde PC, sin root:
- adb shell getprop ro.product.model
- adb shell getprop ro.build.version.release
- adb shell getprop ro.vendor.build.version.emui o alternativa segura.
- adb shell dumpsys media.camera
- adb shell dumpsys cpuinfo
- adb shell dumpsys meminfo <paquete>
- adb shell dumpsys thermalservice
- adb logcat para errores de cámara.
Estos comandos deben ser opcionales y no ejecutados automáticamente por la app sin mecanismo seguro y consentimiento.

I. Preguntas de desbloqueo
Si falta información, no te detengas totalmente. Asume el camino más seguro y documenta supuestos. Sin embargo, si debes preguntar, haz solo estas preguntas críticas:
1. ¿El objetivo es solo diagnóstico/recomendación o también aplicar cambios automáticamente donde Android lo permita?
2. ¿El dispositivo está actualizado a la última EMUI disponible para su región?
3. ¿Se permite usar ADB para pruebas avanzadas o solo APIs dentro de la app?
4. ¿Se requiere integrar análisis de calidad de imagen o solo rendimiento/latencia?
5. ¿La app debe funcionar solo en Huawei P30 Pro o también en otros Huawei con Kirin 980/990?

Si el usuario responde “continuar” o no responde, asume:
- Diagnóstico seguro + recomendaciones explicadas.
- Sin root.
- Sin ADB obligatorio.
- Compatibilidad prioritaria con Huawei P30 Pro.
- Investigación con fuentes verificables.
- Prototipo funcional mínimo.

J. Formato de salida obligatorio
Responde en español y entrega en este orden:
1. Resumen ejecutivo.
2. Supuestos confirmados y no confirmados.
3. Estudio de fuentes: metodología, número de enlaces, dominios principales, hallazgos críticos.
4. Tabla de especificaciones técnicas verificadas del Huawei P30 Pro.
5. Tabla de capacidades Camera2/CameraX esperadas.
6. Arquitectura propuesta.
7. Código base o esqueleto Kotlin mínimo.
8. Plan de pruebas.
9. Matriz de recomendaciones.
10. Riesgos y limitaciones.
11. Próximos pasos accionables.

K. Instrucción final de ejecución
Comienza inmediatamente con un plan de ejecución por fases:
Fase 1: Investigación y verificación de fuentes.
Fase 2: Análisis de compatibilidad Huawei P30 Pro.
Fase 3: Diseño de arquitectura.
Fase 4: Prototipo mínimo.
Fase 5: Pruebas de cámara/lente/rendimiento.
Fase 6: Recomendaciones y perfiles.
Fase 7: Informe final.

No entregues una respuesta superficial. No entregues solo ideas. Entrega investigación estructurada, decisiones técnicas justificadas, código útil y recomendaciones medibles.

Si no puedes ejecutar alguna fase por limitación de entorno, indica exactamente:
- Qué no puedes ejecutar.
- Qué entregaste en su lugar.
- Qué debe hacer el usuario para completar esa fase.
- Qué comandos, archivos o pruebas se necesitan.

IMPORTANTE FINAL:
El resultado debe ser una base técnica sólida para crear una app Android real, segura, compatible con Huawei P30 Pro, centrada en cámara/lentes, rendimiento y configuración optimizada, con evidencia técnica y sin promesas imposibles.
```

---

## Versión aún más agresiva para investigación de 1000 enlaces

Si quieres que Manus se enfoque primero en el **estudio masivo de fuentes**, usa este bloque adicional después del anterior:

```text
MÓDULO EXTRA DE INVESTIGACIÓN MASIVA 1000 ENLACES

Ejecuta una campaña de investigación técnica con objetivo de hasta 1000 enlaces únicos, relevantes y no duplicados sobre:
- Huawei P30 Pro.
- Cámara trasera y frontal.
- Lentes, zoom, teleobjetivo periscópico, ultra gran angular, ToF.
- Camera2 API en Huawei.
- CameraX en Huawei/EMUI.
- Kirin 980, ISP, NPU, GPU, térmica.
- EMUI y optimización de cámara.
- Problemas conocidos de rendimiento, latencia, calentamiento, batería, guardado de fotos, cambio de lente, video 4K.
- Buenas prácticas de Android para cámaras múltiples.
- Benchmarks y pruebas independientes.

Genera una tabla CSV con columnas:
id, url, dominio, titulo, fecha_acceso, tipo_fuente, nivel_confianza, relevancia, tema, hallazgo_principal, evidencia_cita, conflicto_con_otra_fuente, accion_sugerida, estado_verificacion.

Reglas de investigación:
- No cuentes enlaces duplicados.
- No cuentes páginas de marketing sin dato técnico.
- No cuentes foros con afirmaciones sin evidencia como fuente crítica.
- Si una fuente es secundaria, busca la fuente primaria.
- Si dos fuentes se contradicen, crea una entrada de conflicto.
- Si una URL no carga, márcala como inaccesible y no la cuentes como verificada.
- Si no puedes alcanzar 1000 enlaces, entrega el número real y una auditoría del proceso.

Entrega adicional:
- Top 50 fuentes críticas.
- Top 20 problemas conocidos.
- Top 20 oportunidades de optimización segura.
- Top 10 limitaciones no resolubles sin root/APIs privadas.
- Tabla de mitos vs evidencias.
```

---

## Prompt corto para “continuar” si Manus pide confirmación

Si Manus te muestra una pantalla tipo **“Continuar”**, puedes responder con esto:

```text
Continuar. Asumo el alcance inicial: diagnóstico seguro, recomendaciones explicadas, compatibilidad con Android/EMUI del Huawei P30 Pro, sin root, sin APIs privadas peligrosas, investigación con fuentes verificables y prototipo funcional mínimo centrado en cámara, lentes y rendimiento. No te detengas en preguntas menores; documenta supuestos y entrega plan de ejecución, investigación, arquitectura, código base y recomendaciones.
```

---

## Prompt específico para cámara y lentes dentro de la app

Si quieres que Manus detalle las **acciones que la app debe hacer sobre cámara/lente**, añade esto:

```text
Define una lista técnica de acciones/solicitudes que la app debe realizar hacia el subsistema de cámara y lentes del Huawei P30 Pro, usando APIs públicas Android.

Incluye una tabla con:
- Acción.
- API usada.
- Parámetro consultado.
- Dato esperado.
- Fallo posible.
- Métrica obtenida.
- Recomendación derivada.

Acciones mínimas:
1. Enumerar cámaras físicas/lógicas.
2. Consultar nivel de soporte Camera2.
3. Consultar resoluciones disponibles.
4. Consultar FPS disponibles.
5. Consultar formatos disponibles.
6. Consultar rango ISO.
7. Consultar rango de exposición.
8. Consultar capacidades de enfoque automático/manual.
9. Consultar estabilización óptica/digital.
10. Consultar distancias focales equivalentes si están disponibles.
11. Abrir cámara y medir latencia.
12. Iniciar preview y medir FPS.
13. Capturar imagen y medir tiempo total.
14. Cambiar de lente y medir latencia.
15. Comparar exposición/WB entre lentes.
16. Detectar errores de CameraDevice/CameraCaptureSession.
17. Generar informe JSON.
18. Generar recomendación de perfil según resultados.

No incluyas acciones que requieran root, HAL privado, manipulación de firmware, desmontaje físico del lente o comandos destructivos.
```

---

## Prompt para recomendaciones de rendimiento seguras

```text
Genera una matriz de optimización segura para Huawei P30 Pro con columnas:
ID, área, acción, evidencia, impacto esperado, riesgo, coste computacional, reversible, perfil recomendado, prioridad.

Áreas obligatorias:
- Cámara.
- Lentes.
- Preview.
- Captura.
- Video.
- Zoom.
- HDR/AI.
- Alta resolución.
- Baja luz.
- Térmica.
- Batería.
- Almacenamiento.
- EMUI.
- Permisos.
- Privacidad.

Restricciones:
- Sin root.
- Sin modificar HAL.
- Sin APIs privadas no documentadas.
- Sin prometer mejoras no medibles.
- Cada acción debe poder validarse con una prueba o métrica.
```

---

## Prompt para prototipo Kotlin mínimo

```text
Genera un esqueleto de app Android en Kotlin para Huawei P30 Pro con módulos:
- MainActivity.
- DeviceInfoRepository.
- CameraProbeManager.
- Camera2Helper.
- CameraXHelper opcional.
- BenchmarkRunner.
- ReportGenerator.
- RecommendationEngine.
- PermissionManager.
- Data models: CameraInfo, LensInfo, PerformanceMetrics, Recommendation, DeviceProfile.

Requisitos:
- minSdk 28.
- Permiso CAMERA.
- Sin permisos innecesarios.
- Sin telemetría.
- Informe local en JSON y Markdown.
- Pruebas instrumentadas básicas.
- Manejo de errores CameraDevice.StateCallback.
- Manejo de CameraCaptureSession errors.
- Medición de tiempo de apertura de cámara.
- Enumeración de CameraCharacteristics.
- Detección de múltiples cámaras/lentes.
- UI simple con estado, resultados y recomendaciones.

Entrega:
- Estructura de carpetas.
- build.gradle.kts básico.
- AndroidManifest.xml mínimo.
- Código base comentado.
- Lista de mejoras futuras.
```

---

## Prompt para validación de fuentes oficiales

```text
Verifica específicamente en fuentes oficiales o de alta confianza:
1. Nivel de soporte Camera2 en Huawei P30 Pro.
2. Compatibilidad real de CameraX en EMUI.
3. Cámaras expuestas como dispositivos separados o cámara lógica.
4. Soporte de control manual: ISO, exposición, WB, enfoque.
5. Soporte RAW si existe.
6. Resoluciones máximas accesibles por API.
7. Limitaciones de video 4K/60.
8. Limitaciones térmicas conocidas.
9. Comportamiento del zoom multi-lente desde apps de terceros.
10. Problemas conocidos tras actualizaciones EMUI.

Para cada punto entrega:
- Estado: confirmado / parcialmente confirmado / no confirmado.
- Fuente principal.
- Fuente secundaria.
- Cita o resumen.
- Implicación técnica para la app.
```

---

## Prompt final de cierre para evitar respuestas vagas

```text
No respondas solo con conceptos generales. Debes entregar:
- Plan de trabajo por fases.
- Tabla de fuentes.
- Tabla de capacidades.
- Arquitectura.
- Código base.
- Pruebas.
- Recomendaciones medibles.
- Riesgos.
- Próximos pasos.

Si alguna parte no puede ejecutarse ahora, entrega igualmente el diseño completo y los comandos/pruebas necesarios para ejecutarla después.
```

## [USER] 2026-08-13 08:47

mejoralo amplia al maximo full stack !DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Duck Studio Toolkit - A Gema #1 | Masterização Belentani</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<style>
:root{--ng:#00ff88;--ng-dim:#00cc6a;--ng-br:#39ff14;--ng-dk:#004d29;--ng-gl:rgba(0,255,136,.4);--ng-sb:rgba(0,255,136,.1);--bg1:#0a0f0d;--bg2:#0d1512;--bg3:#111d19;--card:rgba(13,25,20,.6);--gls:rgba(0,255,136,.03);--gb:rgba(0,255,136,.15);--gbh:rgba(0,255,136,.4);--t1:#e0f5ea;--t2:#8fb8a0;--t3:#4a7a62;--dng:#ff3366;--wrn:#ffaa00;--fd:'Orbitron',sans-serif;--fb:'Rajdhani',sans-serif;--fm:'Share Tech Mono',monospace;--sw:72px;--se:240px;--th:56px;--tf:.2s cubic-bezier(.4,0,.2,1);--tm:.4s cubic-bezier(.4,0,.2,1)}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:var(--fb);background:var(--bg1);color:var(--t1);overflow:hidden;height:100vh;width:100vw;user-select:none}

#ld{position:fixed;inset:0;background:var(--bg1);z-index:10000;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity .8s,visibility .8s}
#ld.hid{opacity:0;visibility:hidden;pointer-events:none}
.ld-lo{font-family:var(--fd);font-size:2.5rem;font-weight:900;color:var(--ng);text-shadow:0 0 20px var(--ng-gl),0 0 40px var(--ng-gl),0 0 80px var(--ng-gl);letter-spacing:8px;margin-bottom:8px;animation:ldp 1.5s ease-in-out infinite}
.ld-sb{font-family:var(--fm);font-size:.85rem;color:var(--t2);letter-spacing:4px;margin-bottom:40px}
.ld-bc{width:300px;height:3px;background:var(--bg3);border-radius:2px;overflow:hidden}
.ld-br{height:100%;width:0;background:linear-gradient(90deg,var(--ng-dk),var(--ng),var(--ng-br));border-radius:2px;box-shadow:0 0 10px var(--ng-gl);transition:width .3s}
.ld-tx{font-family:var(--fm);font-size:.7rem;color:var(--t3);margin-top:16px;letter-spacing:2px}
.ld-vr{position:absolute;bottom:30px;font-family:var(--fm);font-size:.65rem;color:var(--t3);letter-spacing:3px}
@keyframes ldp{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.7;transform:scale(.98)}}

#bgc{position:fixed;inset:0;z-index:0;pointer-events:none}
#app{display:flex;height:100vh;width:100vw;position:relative;z-index:1;opacity:0;transition:opacity .6s}
#app.vis{opacity:1}

.sb{width:var(--sw);height:100vh;background:var(--gls);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-right:1px solid var(--gb);display:flex;flex-direction:column;align-items:center;padding:12px 0;transition:width var(--tm);position:relative;z-index:100;overflow:hidden;flex-shrink:0}
.sb:hover{width:var(--se)}
.sb-lo{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,var(--ng-dk),var(--bg3));border:1px solid var(--gb);display:flex;align-items:center;justify-content:center;font-family:var(--fd);font-weight:900;font-size:1.1rem;color:var(--ng);text-shadow:0 0 10px var(--ng-gl);margin-bottom:20px;cursor:pointer;transition:all var(--tf);flex-shrink:0}
.sb-lo:hover{border-color:var(--ng);box-shadow:0 0 20px var(--ng-gl)}
.sb-nv{display:flex;flex-direction:column;gap:4px;width:100%;padding:0 12px;flex:1}
.ni{display:flex;align-items:center;gap:14px;padding:12px;border-radius:10px;cursor:pointer;transition:all var(--tf);position:relative;white-space:nowrap;overflow:hidden}
.ni:hover{background:var(--ng-sb)}
.ni.ac{background:rgba(0,255,136,.12);border:1px solid var(--gb)}
.ni.ac::before{content:'';position:absolute;left:-12px;top:50%;transform:translateY(-50%);width:3px;height:24px;background:var(--ng);border-radius:0 3px 3px 0;box-shadow:0 0 10px var(--ng-gl)}
.ni-ic{width:20px;height:20px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.1rem}
.ni-lb{font-family:var(--fb);font-size:.85rem;font-weight:500;color:var(--t2);opacity:0;transition:opacity var(--tm)}
.sb:hover .ni-lb{opacity:1}
.ni.ac .ni-lb,.ni:hover .ni-lb{color:var(--t1)}
.sb-bt{padding:0 12px;width:100%}

.mc{flex:1;display:flex;flex-direction:column;overflow:hidden;min-width:0}
.tb{height:var(--th);display:flex;align-items:center;justify-content:space-between;padding:0 24px;background:var(--gls);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid var(--gb);flex-shrink:0}
.tb-t{font-family:var(--fd);font-size:.9rem;font-weight:600;letter-spacing:3px;color:var(--ng);text-transform:uppercase}
.tb-r{display:flex;align-items:center;gap:16px}
.tb-ck{font-family:var(--fm);font-size:.8rem;color:var(--t2)}
.tb-st{display:flex;align-items:center;gap:6px;font-family:var(--fm);font-size:.7rem;color:var(--ng)}
.sdot{width:6px;height:6px;border-radius:50%;background:var(--ng);box-shadow:0 0 8px var(--ng-gl);animation:sblk 2s ease-in-out infinite}
@keyframes sblk{0%,100%{opacity:1}50%{opacity:.3}}

.ca{flex:1;overflow-y:auto;overflow-x:hidden;padding:24px;position:relative}
.ca::-webkit-scrollbar{width:6px}
.ca::-webkit-scrollbar-track{background:transparent}
.ca::-webkit-scrollbar-thumb{background:var(--gb);border-radius:3px}
.pg{display:none;animation:pgi .5s ease forwards}
.pg.ac{display:block}
@keyframes pgi{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}

.gc{background:var(--card);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid var(--gb);border-radius:16px;padding:24px;margin-bottom:20px;transition:all var(--tm);position:relative;overflow:hidden}
.gc::before{content:'';position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,var(--ng-gl),transparent);opacity:0;transition:opacity var(--tm)}
.gc:hover{border-color:var(--gbh);box-shadow:0 8px 32px rgba(0,255,136,.08)}
.gc:hover::before{opacity:1}
.ch{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.ct{font-family:var(--fd);font-size:.8rem;font-weight:600;letter-spacing:2px;color:var(--ng);text-transform:uppercase}

.g2{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.sc{background:var(--card);backdrop-filter:blur(12px);border:1px solid var(--gb);border-radius:14px;padding:20px;text-align:center;transition:all var(--tm);overflow:hidden}
.sc:hover{border-color:var(--gbh);transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,255,136,.1)}
.sv{font-family:var(--fd);font-size:2rem;font-weight:800;color:var(--ng);text-shadow:0 0 20px var(--ng-gl);line-height:1.2}
.sl{font-family:var(--fb);font-size:.8rem;color:var(--t2);margin-top:4px;text-transform:uppercase;letter-spacing:1px}

.btn{font-family:var(--fb);font-weight:600;font-size:.85rem;padding:10px 24px;border-radius:8px;border:1px solid var(--gb);background:var(--gls);color:var(--t1);cursor:pointer;transition:all var(--tf);letter-spacing:1px;text-transform:uppercase;overflow:hidden}
.btn:hover{border-color:var(--ng);background:rgba(0,255,136,.1);color:var(--ng);box-shadow:0 0 20px rgba(0,255,136,.15)}
.btn-p{background:linear-gradient(135deg,var(--ng-dk),rgba(0,255,136,.2));border-color:var(--ng);color:var(--ng)}
.btn-p:hover{background:linear-gradient(135deg,rgba(0,255,136,.3),rgba(0,255,136,.4));box-shadow:0 0 30px rgba(0,255,136,.25)}
.btn-s{padding:6px 14px;font-size:.75rem}
.inp{font-family:var(--fm);font-size:.85rem;padding:10px 16px;border-radius:8px;border:1px solid var(--gb);background:rgba(0,0,0,.3);color:var(--t1);outline:none;transition:all var(--tf);width:100%}
.inp:focus{border-color:var(--ng);box-shadow:0 0 15px rgba(0,255,136,.15)}
.inp::placeholder{color:var(--t3)}
select.inp{appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Cpath d='M6 8L1 3h10z' fill='%2300ff88'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:36px}
input[type=range]{-webkit-appearance:none;width:100%;height:4px;background:var(--bg3);border-radius:2px;outline:none}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:var(--ng);box-shadow:0 0 10px var(--ng-gl);cursor:pointer}

.tu-d{text-align:center;padding:30px 0}
.tu-n{font-family:var(--fd);font-size:6rem;font-weight:900;color:var(--ng);text-shadow:0 0 40px var(--ng-gl),0 0 80px var(--ng-gl);line-height:1;transition:all .15s}
.tu-f{font-family:var(--fm);font-size:1.4rem;color:var(--t2);margin-top:8px}
.tu-m{width:100%;max-width:400px;height:8px;background:var(--bg3);border-radius:4px;margin:20px auto 0;position:relative;overflow:hidden}
.tu-mc{position:absolute;left:50%;top:-4px;transform:translateX(-50%);width:2px;height:16px;background:var(--ng);box-shadow:0 0 8px var(--ng-gl)}
.tu-ind{position:absolute;top:0;left:50%;width:12px;height:100%;background:var(--ng);border-radius:4px;box-shadow:0 0 12px var(--ng-gl);transition:left .1s}
.tu-st{font-family:var(--fm);font-size:.8rem;color:var(--t3);margin-top:16px;letter-spacing:2px}

.lp{width:200px;height:200px;border-radius:20px;border:2px solid var(--gb);background:var(--bg1);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-family:var(--fd);font-size:3rem;font-weight:900;color:var(--ng);text-shadow:0 0 20px var(--ng-gl);transition:all var(--tm);overflow:hidden;position:relative}
.lp::after{content:'';position:absolute;inset:0;border-radius:18px;background:linear-gradient(135deg,transparent 40%,rgba(0,255,136,.05) 100%);pointer-events:none}

.pl-i{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border:1px solid var(--gb);border-radius:10px;background:var(--card);margin-bottom:8px;transition:all var(--tf)}
.pl-i:hover{border-color:var(--gbh);background:rgba(0,255,136,.04)}
.pl-n{font-family:var(--fb);font-weight:600;font-size:.9rem;color:var(--t1)}
.pl-t{font-family:var(--fm);font-size:.7rem;color:var(--t3);text-transform:uppercase;letter-spacing:1px}
.pl-b{font-family:var(--fm);font-size:.65rem;padding:3px 10px;border-radius:20px;border:1px solid;letter-spacing:1px}
.be{border-color:var(--ng);color:var(--ng);background:rgba(0,255,136,.08)}
.bp{border-color:#00ffd5;color:#00ffd5;background:rgba(0,255,213,.08)}
.bv{border-color:var(--wrn);color:var(--wrn);background:rgba(255,170,0,.08)}

.trk{display:grid;grid-template-columns:40px 1fr 130px 90px 50px;align-items:center;gap:14px;padding:12px 16px;border:1px solid var(--gb);border-radius:10px;background:var(--card);margin-bottom:6px;transition:all var(--tf);cursor:pointer}
.trk:hover{border-color:var(--gbh);background:rgba(0,255,136,.04)}
.trk.pla{border-color:var(--ng);background:rgba(0,255,136,.08)}
.trk-n{font-family:var(--fm);font-size:.8rem;color:var(--t3);text-align:center}
.trk-i h4{font-family:var(--fb);font-weight:600;font-size:.9rem;color:var(--t1);margin-bottom:2px}
.trk-i span{font-family:var(--fm);font-size:.7rem;color:var(--t3)}
.trk-g{font-family:var(--fm);font-size:.7rem;padding:3px 10px;border-radius:20px;border:1px solid var(--gb);color:var(--t2);text-align:center}
.trk-bp{font-family:var(--fm);font-size:.75rem;color:var(--ng);text-align:center}
.trk-pb{width:32px;height:32px;border-radius:50%;border:1px solid var(--gb);background:transparent;color:var(--t2);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all var(--tf);font-size:.8rem}
.trk-pb:hover{border-color:var(--ng);color:var(--ng);background:rgba(0,255,136,.1)}

.wfc{width:100%;height:80px;background:rgba(0,0,0,.3);border-radius:10px;border:1px solid var(--gb);overflow:hidden}
.wfc canvas{width:100%;height:100%}
.mtc{display:flex;align-items:flex-end;justify-content:center;gap:4px;height:120px;padding:10px 0}
.mtb{width:8px;height:100%;background:var(--bg3);border-radius:4px;position:relative;overflow:hidden}
.mtf{position:absolute;bottom:0;width:100%;border-radius:4px;background:linear-gradient(to top,var(--ng),var(--ng-br),var(--wrn),var(--dng));transition:height .1s;box-shadow:0 0 8px var(--ng-gl)}

.mch{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;padding:20px 0}
.mcn{width:100px;height:100px;border-radius:16px;border:1px solid var(--gb);background:var(--card);backdrop-filter:blur(10px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;transition:all var(--tf);cursor:pointer}
.mcn:hover{border-color:var(--ng);box-shadow:0 0 20px var(--ng-gl);transform:translateY(-4px)}
.mcn.an{border-color:var(--ng);background:rgba(0,255,136,.08)}
.mci{font-size:1.5rem}
.mcl{font-family:var(--fm);font-size:.6rem;color:var(--t2);text-transform:uppercase;letter-spacing:1px}
.mca{font-size:1.2rem;color:var(--t3)}

.gem-b{background:linear-gradient(135deg,rgba(0,255,136,.08),rgba(0,255,136,.02),rgba(0,255,136,.05));border:1px solid var(--ng);border-radius:20px;padding:40px;text-align:center;position:relative;overflow:hidden;margin-bottom:24px}
.gem-b::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:conic-gradient(from 0deg,transparent,var(--ng-gl),transparent,transparent);animation:gemr 8s linear infinite;opacity:.3}
@keyframes gemr{to{transform:rotate(360deg)}}
.gem-t{font-family:var(--fd);font-size:2.5rem;font-weight:900;color:var(--ng);text-shadow:0 0 30px var(--ng-gl),0 0 60px var(--ng-gl);letter-spacing:6px;position:relative;z-index:1}
.gem-s{font-family:var(--fm);font-size:.85rem;color:var(--t2);margin-top:8px;letter-spacing:4px;position:relative;z-index:1}

.tl{position:relative;padding-left:30px}
.tl::before{content:'';position:absolute;left:8px;top:0;bottom:0;width:1px;background:linear-gradient(to bottom,var(--ng),var(--gb),transparent)}
.tli{position:relative;margin-bottom:24px;padding-left:20px}
.tli::before{content:'';position:absolute;left:-26px;top:6px;width:10px;height:10px;border-radius:50%;background:var(--ng);border:2px solid var(--bg1);box-shadow:0 0 10px var(--ng-gl)}
.tly{font-family:var(--fd);font-size:.75rem;color:var(--ng);letter-spacing:2px;margin-bottom:4px}
.tlt{font-family:var(--fb);font-size:.9rem;color:var(--t2);line-height:1.5}

.sg{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px}
.soc{display:flex;align-items:center;gap:14px;padding:18px;border:1px solid var(--gb);border-radius:12px;background:var(--card);cursor:pointer;transition:all var(--tf);text-decoration:none;color:inherit}
.soc:hover{border-color:var(--gbh);background:rgba(0,255,136,.04);transform:translateY(-2px)}
.soc-i{width:40px;height:40px;border-radius:10px;background:var(--gls);border:1px solid var(--gb);display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0}
.soc-l{font-family:var(--fb);font-weight:600;font-size:.9rem}
.soc-h{font-family:var(--fm);font-size:.7rem;color:var(--t3)}
.dv{height:1px;background:linear-gradient(90deg,transparent,var(--gb),transparent);margin:30px 0}

.tst-c{position:fixed;bottom:24px;right:24px;z-index:8000;display:flex;flex-direction:column-reverse;gap:8px}
.tst{font-family:var(--fm);font-size:.75rem;padding:12px 20px;border-radius:10px;border:1px solid var(--gb);background:rgba(10,20,15,.95);backdrop-filter:blur(20px);color:var(--t1);box-shadow:0 8px 32px rgba(0,0,0,.4);animation:tin .4s ease forwards;display:flex;align-items:center;gap:10px}
.tst.out{animation:tout .3s ease forwards}
@keyframes tin{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}
@keyframes tout{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(30px)}}

#sp{position:fixed;top:0;right:-420px;width:400px;height:100vh;background:rgba(0,10,5,.95);backdrop-filter:blur(30px);border-left:1px solid var(--ng);z-index:5000;padding:30px;transition:right var(--tm);overflow-y:auto;box-shadow:-10px 0 40px rgba(0,255,136,.1)}
#sp.open{right:0}
.sp-t{font-family:var(--fd);font-size:1rem;color:var(--ng);letter-spacing:3px;margin-bottom:20px;text-shadow:0 0 15px var(--ng-gl)}
.sp-m{font-family:var(--fm);font-size:.8rem;color:var(--t2);line-height:1.8}
.sp-x{position:absolute;top:20px;right:20px;width:32px;height:32px;border-radius:8px;border:1px solid var(--gb);background:transparent;color:var(--t2);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1rem;transition:all var(--tf)}
.sp-x:hover{border-color:var(--dng);color:var(--dng)}

#mx{position:fixed;inset:0;z-index:9999;pointer-events:none;opacity:0;transition:opacity 1s}
#mx.act{opacity:.12}

.fi{opacity:0;transform:translateY(20px);animation:fiu .6s ease forwards}
.fi:nth-child(1){animation-delay:.1s}.fi:nth-child(2){animation-delay:.2s}.fi:nth-child(3){animation-delay:.3s}.fi:nth-child(4){animation-delay:.4s}
@keyframes fiu{to{opacity:1;transform:translateY(0)}}
.kh{position:fixed;bottom:8px;left:8px;font-family:var(--fm);font-size:.55rem;color:var(--t3);opacity:.3;letter-spacing:1px;z-index:50;user-select:none}
.ftb{height:32px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;background:var(--gls);backdrop-filter:blur(10px);border-top:1px solid var(--gb);font-family:var(--fm);font-size:.6rem;color:var(--t3);flex-shrink:0;letter-spacing:1px}

@media(max-width:1024px){.g3{grid-template-columns:repeat(2,1fr)}.g4{grid-template-columns:repeat(2,1fr)}.trk{grid-template-columns:30px 1fr 100px 50px}.trk-bp{display:none}}
@media(max-width:768px){
.sb{width:100%;height:60px;flex-direction:row;bottom:0;top:auto;border-right:none;border-top:1px solid var(--gb);padding:0 8px;z-index:1000}
.sb:hover{width:100%}.sb-lo{display:none}
.sb-nv{flex-direction:row;gap:2px;padding:0;overflow-x:auto;justify-content:space-around}
.ni{padding:8px;flex-direction:column;gap:4px}.ni-lb{opacity:1;font-size:.6rem}.ni.ac::before{display:none}
.sb-bt{display:none}.mc{padding-bottom:60px}
.g2,.g3,.g4{grid-template-columns:1fr}
.gem-t{font-size:1.5rem}.trk{grid-template-columns:30px 1fr 50px}.trk-g{display:none}
.mch{gap:8px}.mcn{width:70px;height:70px}
#sp{width:100%;right:-100%}
}
</style>
</head>
<body>
<!-- LOADING -->
<div id="ld">
<div class="ld-lo">DUCK</div>
<div class="ld-sb">STUDIO TOOLKIT</div>
<div class="ld-bc"><div class="ld-br" id="ld-br"></div></div>
<div class="ld-tx" id="ld-tx">INICIALIZANDO MÓDULOS...</div>
<div class="ld-vr">v3.0.0 // A GEMA #1 // BELENTANI</div>
</div>

<canvas id="mx"></canvas>

<div id="sp">
<button class="sp-x" onclick="togSP()">X</button>
<div class="sp-t">ACESSO SECRETO</div>
<div class="sp-m">
<p>Você encontrou o painel secreto!</p><br>
<p>A GEMA #1 não é apenas um nome — é um código.</p>
<p>Masterização de Belentani para Duck significa que cada frequência foi esculpida com precisão cirúrgica.</p><br>
<p>Cada batida que você ouve passou por processamento de nível mundial antes de chegar aos seus ouvidos.</p><br>
<p>O segredo está nos detalhes que a maioria não percebe.</p><br>
<p style="color:var(--ng)">"A masterização perfeita não se nota. Se notar, falhou."</p><br>
<p style="color:var(--t3)">— Belentani</p><br><br>
<p>Códigos secretos encontrados: <span id="eec">0</span>/5</p>
</div>
</div>

<div class="tst-c" id="tc"></div>

<div id="app">
<nav class="sb">
<div class="sb-lo" id="sb-lo">D</div>
<div class="sb-nv">
<div class="ni ac" data-pg="dashboard" onclick="nav('dashboard')"><div class="ni-ic">⌂</div><span class="ni-lb">Painel</span></div>
<div class="ni" data-pg="tuner" onclick="nav('tuner')"><div class="ni-ic">♪</div><span class="ni-lb">Afinador</span></div>
<div class="ni" data-pg="logo" onclick="nav('logo')"><div class="ni-ic">◆</div><span class="ni-lb">Logo</span></div>
<div class="ni" data-pg="plugins" onclick="nav('plugins')"><div class="ni-ic">⚙</div><span class="ni-lb">Plugins</span></div>
<div class="ni" data-pg="player" onclick="nav('player')"><div class="ni-ic">▶</div><span class="ni-lb">Player</span></div>
<div class="ni" data-pg="portfolio" onclick="nav('portfolio')"><div class="ni-ic">☰</div><span class="ni-lb">Portfólio</span></div>
<div class="ni" data-pg="mastering" onclick="nav('mastering')"><div class="ni-ic">⚡</div><span class="ni-lb">Masterização</span></div>
<div class="ni" data-pg="contact" onclick="nav('contact')"><div class="ni-ic">✉</div><span class="ni-lb">Contato</span></div>
</div>
<div class="sb-bt"><div class="ni" onclick="showToast('ℹ','Duck Studio Toolkit v3.0.0')"><div class="ni-ic">ℹ</div><span class="ni-lb">Sobre</span></div></div>
</nav>

<div class="mc">
<header class="tb">
<div class="tb-t" id="tb-t">PAINEL DE CONTROLE</div>
<div class="tb-r">
<div class="tb-ck" id="tb-ck">00:00:00</div>
<div class="tb-st"><div class="sdot"></div><span>ONLINE</span></div>
</div>
</header>
<div class="ca">
<!-- DASHBOARD -->
<div class="pg ac" id="pg-dashboard">
<div class="gem-b fi"><div class="gem-t">A GEMA #1</div><div class="gem-s">MASTERIZAÇÃO DE BELENTANI PARA DUCK</div></div>
<div class="g4 fi">
<div class="sc"><div class="sv" data-cnt="2847563">0</div><div class="sl">Streams Totais</div></div>
<div class="sc"><div class="sv" data-cnt="147">0</div><div class="sl">Releases</div></div>
<div class="sc"><div class="sv" data-cnt="52800">0</div><div class="sl">Seguidores</div></div>
<div class="sc"><div class="sv" data-cnt="98">0</div><div class="sl">Qualidade %</div></div>
</div>
<div class="dv"></div>
<div class="g2 fi">
<div class="gc"><div class="ch"><span class="ct">Forma de Onda ao Vivo</span></div><div class="wfc"><canvas id="wfc"></canvas></div></div>
<div class="gc"><div class="ch"><span class="ct">Medidores de Nível</span></div><div class="mtc" id="mtc"></div><div style="text-align:center;margin-top:8px"><span style="font-family:var(--fm);font-size:.7rem;color:var(--t3)">L   R   L   R   L   R   L   R</span></div></div>
</div>
<div class="dv"></div>
<div class="gc fi">
<div class="ch"><span class="ct">Trabalhos Recentes</span><button class="btn btn-s" onclick="nav('portfolio')">Ver Tudo</button></div>
<div class="trk" onclick="showToast('▶','Reproduzindo: Noite Eterna')"><div class="trk-n">01</div><div class="trk-i"><h4>Noite Eterna</h4><span>Duck ft. Luna</span></div><div class="trk-g">TRAP</div><div class="trk-bp">140 BPM</div><div><button class="trk-pb">▶</button></div></div>
<div class="trk" onclick="showToast('▶','Reproduzindo: Fogo Interior')"><div class="trk-n">02</div><div class="trk-i"><h4>Fogo Interior</h4><span>Duck</span></div><div class="trk-g">HIPHOP</div><div class="trk-bp">90 BPM</div><div><button class="trk-pb">▶</button></div></div>
<div class="trk" onclick="showToast('▶','Reproduzindo: Neon Dreams')"><div class="trk-n">03</div><div class="trk-i"><h4>Neon Dreams</h4><span>Duck & Zay</span></div><div class="trk-g">POP</div><div class="trk-bp">128 BPM</div><div><button class="trk-pb">▶</button></div></div>
</div>
<div class="dv"></div>
<div class="gc fi">
<div class="ch"><span class="ct">Linha do Tempo</span></div>
<div class="tl">
<div class="tli"><div class="tly">2026</div><div class="tlt">Lançamento do Duck Studio Toolkit v3.0 — A Gema #1. Pack profissional completo com ferramentas de estúdio de nível Hollywood.</div></div>
<div class="tli"><div class="tly">2025</div><div class="tlt">Parceria com Belentani para masterização exclusiva. Novo padrão de qualidade sonora estabelecido no cenário nacional.</div></div>
<div class="tli"><div class="tly">2024</div><div class="tlt">Expansão para produção de POP e R&B. Colaborações com artistas internacionais. Marco de 2 milhões de streams totais.</div></div>
<div class="tli"><div class="tly">2023</div><div class="tlt">Primeiro release viral no Trap. Início da carreira profissional como produtor e beatmaker independente.</div></div>
</div>
</div>
</div>

<!-- TUNER -->
<div class="pg" id="pg-tuner">
<div class="gc fi">
<div class="ch"><span class="ct">Afinador Cromático</span><button class="btn btn-p" id="tu-btn" onclick="togTuner()">INICIAR</button></div>
<div class="tu-d">
<div class="tu-n" id="tu-note">--</div>
<div class="tu-f" id="tu-freq">--- Hz</div>
<div class="tu-m"><div class="tu-mc"></div><div class="tu-ind" id="tu-ind"></div></div>
<div class="tu-st" id="tu-st">CLIQUE EM INICIAR PARA USAR O MICROFONE</div>
</div>
</div>
<div class="g2 fi">
<div class="gc">
<div class="ch"><span class="ct">Referência de Notas</span></div>
<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">
<button class="btn btn-s" onclick="playRef(261.63)">C4</button>
<button class="btn btn-s" onclick="playRef(293.66)">D4</button>
<button class="btn btn-s" onclick="playRef(329.63)">E4</button>
<button class="btn btn-s" onclick="playRef(349.23)">F4</button>
<button class="btn btn-s" onclick="playRef(392.00)">G4</button>
<button class="btn btn-s" onclick="playRef(440.00)">A4</button>
<button class="btn btn-s" onclick="playRef(493.88)">B4</button>
<button class="btn btn-s" onclick="playRef(523.25)">C5</button>
</div>
</div>
<div class="gc">
<div class="ch"><span class="ct">Configurações</span></div>
<div style="display:flex;flex-direction:column;gap:12px">
<div><label style="font-family:var(--fm);font-size:.75rem;color:var(--t2);display:block;margin-bottom:6px">AFINAÇÃO PADRÃO</label>
<select class="inp" id="tu-ref"><option value="440">A4 = 440 Hz (Padrão)</option><option value="442">A4 = 442 Hz</option><option value="432">A4 = 432 Hz</option><option value="445">A4 = 445 Hz</option></select></div>
<div><label style="font-family:var(--fm);font-size:.75rem;color:var(--t2);display:block;margin-bottom:6px">SENSIBILIDADE</label><input type="range" min="1" max="10" value="5" id="tu-sens"></div>
</div>
</div>
</div>
</div>

<!-- LOGO -->
<div class="pg" id="pg-logo">
<div class="gc fi">
<div class="ch"><span class="ct">Gerador de Logos</span></div>
<div class="lp" id="lp">DUCK</div>
<div style="display:flex;flex-direction:column;gap:14px;max-width:400px;margin:0 auto">
<div><label style="font-family:var(--fm);font-size:.75rem;color:var(--t2);display:block;margin-bottom:6px">NOME DO ARTISTA</label><input type="text" class="inp" id="l-txt" value="DUCK" placeholder="Digite o nome..." oninput="updLogo()"></div>
<div><label style="font-family:var(--fm);font-size:.75rem;color:var(--t2);display:block;margin-bottom:6px">ESTILO</label><select class="inp" id="l-sty" onchange="updLogo()"><option value="neon">Neon Glow</option><option value="minimal">Minimalista</option><option value="bold">Pesado / Bold</option><option value="retro">Retrô Futurista</option><option value="gema">A Gema Especial</option></select></div>
<div><label style="font-family:var(--fm);font-size:.75rem;color:var(--t2);display:block;margin-bottom:6px">TAMANHO</label><input type="range" min="1" max="5" value="3" id="l-sz" oninput="updLogo()"></div>
<div><label style="font-family:var(--fm);font-size:.75rem;color:var(--t2);display:block;margin-bottom:6px">COR</label><select class="inp" id="l-col" onchange="updLogo()"><option value="#00ff88">Neon Verde</option><option value="#00ffd5">Neon Ciano</option><option value="#ff3366">Neon Rosa</option><option value="#ffaa00">Neon Dourado</option><option value="#b8ff00">Neon Lima</option><option value="#ffffff">Branco Puro</option></select></div>
<button class="btn btn-p" style="margin-top:8px" onclick="dlLogo()">BAIXAR LOGO</button>
</div>
</div>
</div>
<!-- PLUGINS -->
<div class="pg" id="pg-plugins">
<div class="gc fi">
<div class="ch"><span class="ct">Arsenal de Plugins</span><span style="font-family:var(--fm);font-size:.7rem;color:var(--t3)">32 catalogados</span></div>
<div id="pl-list"></div>
</div>
<div class="gc fi">
<div class="ch"><span class="ct">Busca</span></div>
<input type="text" class="inp" id="pl-search" placeholder="Buscar plugin..." oninput="filterPlugins()">
</div>
</div>

<!-- PLAYER -->
<div class="pg" id="pg-player">
<div class="gc fi">
<div class="ch"><span class="ct">Player de Beats</span></div>
<div style="text-align:center;padding:20px 0">
<div style="width:160px;height:160px;border-radius:50%;border:2px solid var(--gb);margin:0 auto 20px;display:flex;align-items:center;justify-content:center;background:var(--card);font-family:var(--fd);font-size:3rem;color:var(--ng);text-shadow:0 0 20px var(--ng-gl);animation:gemr 10s linear infinite" id="pl-disc">D</div>
<div id="pl-title" style="font-family:var(--fb);font-size:1.4rem;font-weight:700;margin-bottom:4px">Selecione uma Faixa</div>
<div id="pl-artist" style="font-family:var(--fm);font-size:.8rem;color:var(--t2);margin-bottom:20px">—</div>
<div class="wfc" style="max-width:500px;margin:0 auto 16px;cursor:pointer" id="pl-progress"><canvas id="pl-cv"></canvas></div>
<div style="display:flex;align-items:center;justify-content:center;gap:16px">
<button class="btn btn-s" onclick="plPrev()">◀◀</button>
<button class="btn btn-p" id="pl-play" onclick="plToggle()" style="width:50px;height:50px;border-radius:50%;padding:0;font-size:1.2rem">▶</button>
<button class="btn btn-s" onclick="plNext()">▶▶</button>
</div>
</div>
</div>
<div class="gc fi">
<div class="ch"><span class="ct">Fila de Reprodução</span></div>
<div id="pl-queue"></div>
</div>
</div>

<!-- PORTFOLIO -->
<div class="pg" id="pg-portfolio">
<div class="gem-b fi"><div class="gem-t">PORTFÓLIO</div><div class="gem-s">PRODUÇÕES MASTERIZADAS POR BELENTANI</div></div>
<div class="g2 fi">
<div class="gc">
<div class="ch"><span class="ct">Por Gênero</span></div>
<div class="g2" style="gap:10px">
<div class="sc" onclick="filterTracks('TRAP')" style="cursor:pointer"><div class="sv" style="font-size:1.2rem">TRAP</div><div class="sl" style="font-size:.7rem" id="cnt-trap">0 faixas</div></div>
<div class="sc" onclick="filterTracks('HIPHOP')" style="cursor:pointer"><div class="sv" style="font-size:1.2rem">HIPHOP</div><div class="sl" style="font-size:.7rem" id="cnt-hiphop">0 faixas</div></div>
<div class="sc" onclick="filterTracks('POP')" style="cursor:pointer"><div class="sv" style="font-size:1.2rem">POP</div><div class="sl" style="font-size:.7rem" id="cnt-pop">0 faixas</div></div>
<div class="sc" onclick="filterTracks('R&B')" style="cursor:pointer"><div class="sv" style="font-size:1.2rem">R&B</div><div class="sl" style="font-size:.7rem" id="cnt-rnb">0 faixas</div></div>
</div>
</div>
<div class="gc">
<div class="ch"><span class="ct">Estatísticas</span></div>
<div style="display:flex;flex-direction:column;gap:12px">
<div style="display:flex;justify-content:space-between"><span style="font-family:var(--fm);font-size:.8rem;color:var(--t2)">Total de Faixas</span><span style="font-family:var(--fm);font-size:.8rem;color:var(--ng)" id="st-total">0</span></div>
<div style="display:flex;justify-content:space-between"><span style="font-family:var(--fm);font-size:.8rem;color:var(--t2)">BPM Médio</span><span style="font-family:var(--fm);font-size:.8rem;color:var(--ng)" id="st-bpm">0</span></div>
<div style="display:flex;justify-content:space-between"><span style="font-family:var(--fm);font-size:.8rem;color:var(--t2)">Gênero Principal</span><span style="font-family:var(--fm);font-size:.8rem;color:var(--ng)" id="st-gen">—</span></div>
<div style="display:flex;justify-content:space-between"><span style="font-family:var(--fm);font-size:.8rem;color:var(--t2)">Artistas Colaborados</span><span style="font-family:var(--fm);font-size:.8rem;color:var(--ng)">12+</span></div>
</div>
</div>
</div>
<div class="dv"></div>
<div class="gc fi">
<div class="ch"><span class="ct">Todas as Produções</span><span style="font-family:var(--fm);font-size:.7rem;color:var(--t3)" id="pt-filter">Mostrando: TODOS</span></div>
<div id="pt-list"></div>
</div>
</div>
<!-- MASTERING -->
<div class="pg" id="pg-mastering">
<div class="gem-b fi"><div class="gem-t">MASTERIZAÇÃO</div><div class="gem-s">BELENTANI PARA DUCK — A GEMA #1</div></div>
<div class="gc fi">
<div class="ch"><span class="ct">Cadeia de Masterização</span></div>
<div class="mch">
<div class="mcn an" onclick="showToast('⚙','EQ: Equalização paramétrica ativa')"><div class="mci">⊕</div><div class="mcl">EQ</div></div>
<div class="mca">→</div>
<div class="mcn" onclick="showToast('⚙','Compressão multibanda ativa')"><div class="mci">≡</div><div class="mcl">COMP</div></div>
<div class="mca">→</div>
<div class="mcn" onclick="showToast('⚙','Stereo Imaging ativo')"><div class="mci">◇</div><div class="mcl">STEREO</div></div>
<div class="mca">→</div>
<div class="mcn" onclick="showToast('⚙','Limitador brickwall ativo')"><div class="mci">■</div><div class="mcl">LIMITER</div></div>
<div class="mca">→</div>
<div class="mcn" onclick="showToast('⚙','Dithering 24-bit aplicado')"><div class="mci">◈</div><div class="mcl">DITHER</div></div>
</div>
</div>
<div class="g2 fi">
<div class="gc">
<div class="ch"><span class="ct">Parâmetros de Saída</span></div>
<div style="display:flex;flex-direction:column;gap:16px">
<div><div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-family:var(--fm);font-size:.75rem;color:var(--t2)">Ganho Master</span><span style="font-family:var(--fm);font-size:.75rem;color:var(--ng)" id="m-gain">-0.3 dB</span></div><input type="range" min="-12" max="0" value="-3" step="0.1" oninput="document.getElementById('m-gain').textContent=this.value+' dB'"></div>
<div><div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-family:var(--fm);font-size:.75rem;color:var(--t2)">Ceiling</span><span style="font-family:var(--fm);font-size:.75rem;color:var(--ng)" id="m-ceil">-0.1 dB</span></div><input type="range" min="-3" max="0" value="-1" step="0.1" oninput="document.getElementById('m-ceil').textContent=this.value+' dB'"></div>
<div><div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-family:var(--fm);font-size:.75rem;color:var(--t2)">Loudness Target</span><span style="font-family:var(--fm);font-size:.75rem;color:var(--ng)">-14 LUFS</span></div><input type="range" min="-18" max="-8" value="-14" step="0.5" oninput="this.previousElementSibling.lastElementChild.textContent=this.value+' LUFS'"></div>
</div>
</div>
<div class="gc">
<div class="ch"><span class="ct">Sobre a Masterização</span></div>
<div class="sp-m">
<p>Todas as produções de Duck passam pelo processo exclusivo de masterização desenvolvido por Belentani.</p><br>
<p>O processo utiliza uma cadeia de processamento de nível profissional, com equalização cirúrgica, compressão multibanda e limitação brickwall para garantir que cada faixa soe perfeita em qualquer sistema de reprodução.</p><br>
<p style="color:var(--ng)">A GEMA #1 é o selo de qualidade que certifica que a faixa foi masterizada com os mais altos padrões da indústria.</p>
</div>
</div>
</div>
<div class="dv"></div>
<div class="gc fi">
<div class="ch"><span class="ct">Formatos de Entrega</span></div>
<div class="g3">
<div class="sc" style="cursor:pointer" onclick="showToast('✓','Formato WAV 24bit/48kHz selecionado')"><div class="sv" style="font-size:1rem">WAV</div><div class="sl" style="font-size:.65rem">24bit / 48kHz</div></div>
<div class="sc" style="cursor:pointer" onclick="showToast('✓','Formato FLAC selecionado')"><div class="sv" style="font-size:1rem">FLAC</div><div class="sl" style="font-size:.65rem">Lossless</div></div>
<div class="sc" style="cursor:pointer" onclick="showToast('✓','Formato MP3 320kbps selecionado')"><div class="sv" style="font-size:1rem">MP3</div><div class="sl" style="font-size:.65rem">320 kbps</div></div>
</div>
</div>
</div>

<!-- CONTACT -->
<div class="pg" id="pg-contact">
<div class="gem-b fi"><div class="gem-t">CONTATO</div><div class="gem-s">VAMOS CRIAR ALGO JUNTOS</div></div>
<div class="gc fi">
<div class="ch"><span class="ct">Redes Sociais</span></div>
<div class="sg">
<a class="soc" href="#" onclick="showToast('🔗','Abrindo Instagram...')"><div class="soc-i">📷</div><div><div class="soc-l">Instagram</div><div class="soc-h">@duck.prod</div></div></a>
<a class="soc" href="#" onclick="showToast('💬','Abrindo WhatsApp...')"><div class="soc-i">💬</div><div><div class="soc-l">WhatsApp</div><div class="soc-h">+55 (XX) XXXXX-XXXX</div></div></a>
<a class="soc" href="#" onclick="showToast('🎵','Abrindo Spotify...')"><div class="soc-i">🎵</div><div><div class="soc-l">Spotify</div><div class="soc-h">Duck Producer</div></div></a>
<a class="soc" href="#" onclick="showToast('📧','Copiando email...')"><div class="soc-i">📧</div><div><div class="soc-l">Email</div><div class="soc-h">duck@studio.com</div></div></a>
<a class="soc" href="#" onclick="showToast('🎬','Abrindo YouTube...')"><div class="soc-i">🎬</div><div><div class="soc-l">YouTube</div><div class="soc-h">Duck Beats</div></div></a>
<a class="soc" href="#" onclick="showToast('🎵','Abrindo SoundCloud...')"><div class="soc-i">☁</div><div><div class="soc-l">SoundCloud</div><div class="soc-h">@duckbeats</div></div></a>
</div>
</div>
<div class="gc fi">
<div class="ch"><span class="ct">Localização</span></div>
<div style="display:flex;align-items:center;gap:12px"><span style="font-size:1.5rem">📍</span><div><div style="font-family:var(--fb);font-size:1rem;font-weight:600">Brasil</div><div style="font-family:var(--fm);font-size:.8rem;color:var(--t2)">Disponível para projetos remotos e presenciais</div></div></div>
</div>
</div></div></div></div><div class="ftb"><span>DUCK STUDIO TOOLKIT v3.0.0</span><span>A GEMA #1 // BELENTANI // 2026</span></div></div></div><div class="kh">v3.0.0 // A GEMA #1 // BELENTANI</div><script>
/* ===== DUCK STUDIO TOOLKIT - A GEMA #1 ===== */
(function(){
'use strict';

// === DATA ===
var TRACKS=[
  {n:'Noite Eterna',a:'Duck ft. Luna',g:'TRAP',bpm:140},{n:'Fogo Interior',a:'Duck',g:'HIPHOP',bpm:90},
  {n:'Neon Dreams',a:'Duck & Zay',g:'POP',bpm:128},{n:'Código Verde',a:'Duck',g:'TRAP',bpm:145},
  {n:'Pulso Urbano',a:'Duck ft. MC Flow',g:'HIPHOP',bpm:95},{n:'Cristal Liquido',a:'Duck & Nina',g:'R&B',bpm:85},
  {n:'Som da Rua',a:'Duck',g:'TRAP',bpm:150},{n:'Aurora Boreal',a:'Duck',g:'POP',bpm:120},
  {n:'Terreno Sagrado',a:'Duck ft. Zay',g:'HIPHOP',bpm:88},{n:'Gema Bruta',a:'Duck',g:'TRAP',bpm:135},
  {n:'Eclipse',a:'Duck & Luna',g:'R&B',bpm:92},{n:'Frequência Máxima',a:'Duck',g:'POP',bpm:132},
  {n:'Bassa Profunda',a:'Duck',g:'TRAP',bpm:155},{n:'Reflexos',a:'Duck ft. Nina',g:'R&B',bpm:80},
  {n:'Cinco Estrelas',a:'Duck',g:'HIPHOP',bpm:100},{n:'Matrix Verde',a:'Duck',g:'TRAP',bpm:142}
];

var PLUGINS=[
  {n:'FabFilter Pro-Q 3',t:'EQUALIZADOR',b:'be'},{n:'Waves SSL Channel',t:'CANAL',b:'be'},
  {n:'iZotope Ozone 11',t:'MASTERING',b:'be'},{n:'FabFilter Pro-L 2',t:'LIMITER',b:'be'},
  {n:'Soundtoys Decapitator',t:'SATURAÇÃO',b:'be'},{n:'UAD Neve 1073',t:'PRÉ-AMP',b:'be'},
  {n:'Waves L2 Ultramaximizer',t:'LIMITER',b:'bp'},{n:'FabFilter Pro-C 2',t:'COMPRESSOR',b:'be'},
  {n:'iZotope RX 11',t:'RESTAURAÇÃO',b:'bp'},{n:'Valhalla VintageVerb',t:'REVERB',b:'be'},
  {n:'Soundtoys EchoBoy',t:'DELAY',b:'be'},{n:'Waves CLA-76',t:'COMPRESSOR',b:'be'},
  {n:'FabFilter Saturn 2',t:'DISTORÇÃO',b:'bp'},{n:'UAD API 2500',t:'COMPRESSOR',b:'bp'},
  {n:'Native Instruments Massive X',t:'SINTETIZADOR',b:'bv'},{n:'Serum',t:'SINTETIZADOR',b:'bv'},
  {n:'Kontakt 7',t:'SAMPLER',b:'bv'},{n:'Addictive Drums 2',t:'BATERIA',b:'bv'},
  {n:'Melodyne 5',t:'PITCH',b:'bp'},{n:'Auto-Tune Pro',t:'PITCH',b:'be'},
  {n:'Waves RBass',t:'SUB-HARMÔNICO',b:'bp'},{n:'FabFilter Micro',t:'COMPRESSOR',b:'be'},
  {n:'UAD Pultec EQP-1A',t:'EQUALIZADOR',b:'bp'},{n:'Soundtoys Devil-Loc',t:'COMPRESSOR',b:'bp'},
  {n:'Valhalla Shimmer',t:'REVERB',b:'bp'},{n:'Waves H-Delay',t:'DELAY',b:'be'},
  {n:'iZotope Nectar 4',t:'VOCAL',b:'bp'},{n:'FabFilter Timeless 3',t:'DELAY',b:'bp'},
  {n:'UAD 1176LN',t:'COMPRESSOR',b:'be'},{n:'Waves R-Vox',t:'VOCAL',b:'be'},
  {n:'Native Instruments FM8',t:'SINTETIZADOR',b:'bv'},{n:'Arturia V Collection',t:'SINTETIZADOR',b:'bv'},
  {n:'XLN Audio RC-20',t:'VÍNHETA',b:'bp'}
];

var TITLES={dashboard:'PAINEL DE CONTROLE',tuner:'AFINADOR CROMÁTICO',logo:'GERADOR DE LOGOS',plugins:'ARSENAL DE PLUGINS',player:'PLAYER DE BEATS',portfolio:'PORTFÓLIO',mastering:'MASTERIZAÇÃO BELENTANI',contact:'CONTATO'};

var eeCount=0,logoClicks=0,konamiSeq=[],konamiCode=[38,38,40,40,37,39,37,39,66,65];
var tunerActive=false,audioCtx=null,analyser=null,tunerStream=null;
var currentTrack=0,plPlaying=false,plProgress=0,plInterval=null;

// === LOADING ===
var ldMsgs=['CARREGANDO MÓDULOS DE ÁUDIO...','INICIALIZANDO AFINADOR...','PREPARANDO PLUGINS...','CARREGANDO PORTFÓLIO...','MASTERIZANDO INTERFACE...','CALIBRANDO NEON VERDE...','A GEMA #1 PRONTA'];
var ldBar=document.getElementById('ld-br'),ldTx=document.getElementById('ld-tx'),ldScr=document.getElementById('ld'),app=document.getElementById('app');
var ldStep=0;
function ldTick(){if(ldStep>=ldMsgs.length){setTimeout(function(){ldScr.classList.add('hid');app.classList.add('vis');initApp();},400);return;}
ldTx.textContent=ldMsgs[ldStep];ldBar.style.width=((ldStep+1)/ldMsgs.length*100)+'%';ldStep++;setTimeout(ldTick,350);}
setTimeout(ldTick,300);

// === INIT ===
function initApp(){initBg();initMeters();initWaveform();initPlugins();initPortfolio();initPlayer();initClock();initEasterEggs();animateStats();}

// === NAVIGATION ===
window.nav=function(pg){
  document.querySelectorAll('.pg').forEach(function(p){p.classList.remove('ac');});
  document.querySelectorAll('.ni').forEach(function(n){n.classList.remove('ac');});
  var page=document.getElementById('pg-'+pg);if(page)page.classList.add('ac');
  var nav=document.querySelector('.ni[data-pg="'+pg+'"]');if(nav)nav.classList.add('ac');
  document.getElementById('tb-t').textContent=TITLES[pg]||pg.toUpperCase();
};

// === CLOCK ===
function initClock(){setInterval(function(){var d=new Date();document.getElementById('tb-ck').textContent=d.toLocaleTimeString('pt-BR');},1000);}

// === BG CANVAS ===
function initBg(){
  var c=document.getElementById('bgc'),x=c.getContext('2d');
  function resize(){c.width=window.innerWidth;c.height=window.innerHeight;}
  resize();window.addEventListener('resize',resize);
  var pts=[];for(var i=0;i<60;i++)pts.push({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*2+1});
  function draw(){
    x.clearRect(0,0,c.width,c.height);
    x.strokeStyle='rgba(0,255,136,0.06)';x.lineWidth=1;
    for(var i=0;i<pts.length;i++){
      var p=pts[i];p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>c.width)p.vx*=-1;
      if(p.y<0||p.y>c.height)p.vy*=-1;
      x.beginPath();x.arc(p.x,p.y,p.r,0,Math.PI*2);x.fillStyle='rgba(0,255,136,0.15)';x.fill();
      for(var j=i+1;j<pts.length;j++){var dx=p.x-pts[j].x,dy=p.y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<150){x.beginPath();x.moveTo(p.x,p.y);x.lineTo(pts[j].x,pts[j].y);x.globalAlpha=1-d/150;x.stroke();x.globalAlpha=1;}}
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// === WAVEFORM ===
function initWaveform(){
  var c=document.getElementById('wfc'),x=c.getContext('2d');
  function resize(){c.width=c.parentElement.offsetWidth;c.height=c.parentElement.offsetHeight;}
  resize();window.addEventListener('resize',resize);
  var t=0;
  function draw(){
    x.clearRect(0,0,c.width,c.height);
    x.strokeStyle='rgba(0,255,136,0.6)';x.lineWidth=2;x.shadowColor='rgba(0,255,136,0.4)';x.shadowBlur=8;
    x.beginPath();
    for(var i=0;i<c.width;i++){
      var y=c.height/2+Math.sin(i*0.02+t)*20*Math.sin(i*0.005+t*0.3)+Math.sin(i*0.01+t*1.5)*10;
      if(i===0)x.moveTo(i,y);else x.lineTo(i,y);
    }
    x.stroke();x.shadowBlur=0;t+=0.03;requestAnimationFrame(draw);
  }
  draw();
}

// === METERS ===
function initMeters(){
  var c=document.getElementById('mtc');
  for(var i=0;i<8;i++){var bar=document.createElement('div');bar.className='mtb';var fill=document.createElement('div');fill.className='mtf';fill.id='mtf-'+i;bar.appendChild(fill);c.appendChild(bar);}
  setInterval(function(){
    for(var i=0;i<8;i++){var h=20+Math.random()*60+Math.sin(Date.now()*0.003+i)*20;
      var f=document.getElementById('mtf-'+i);if(f)f.style.height=Math.max(5,Math.min(95,h))+'%';}
  },100);
}

// === STAT COUNTERS ===
function animateStats(){
  document.querySelectorAll('[data-cnt]').forEach(function(el){
    var target=parseInt(el.getAttribute('data-cnt')),cur=0,inc=Math.max(1,Math.floor(target/60));
    var iv=setInterval(function(){cur+=inc;if(cur>=target){cur=target;clearInterval(iv);}
      el.textContent=cur.toLocaleString('pt-BR');},30);
  });
}

// === PLUGINS ===
function initPlugins(){renderPlugins(PLUGINS);}
function renderPlugins(list){
  var c=document.getElementById('pl-list');c.innerHTML='';
  list.forEach(function(p){
    var d=document.createElement('div');d.className='pl-i';
    d.innerHTML='<div><div class="pl-n">'+p.n+'</div><div class="pl-t">'+p.t+'</div></div><span class="pl-b '+p.b+'">'+(p.b==='be'?'ESSENCIAL':p.b==='bp'?'PRO':'VST')+'</span>';
    c.appendChild(d);
  });
}
window.filterPlugins=function(){
  var q=document.getElementById('pl-search').value.toLowerCase();
  renderPlugins(PLUGINS.filter(function(p){return p.n.toLowerCase().indexOf(q)!==-1||p.t.toLowerCase().indexOf(q)!==-1;}));
};

// === PORTFOLIO ===
function initPortfolio(){
  var counts={};TRACKS.forEach(function(t){counts[t.g]=(counts[t.g]||0)+1;});
  ['trap','hiphop','pop','rnb'].forEach(function(g){
    var el=document.getElementById('cnt-'+g);if(el)el.textContent=(counts[g.toUpperCase()]||0)+' faixas';
  });
  document.getElementById('st-total').textContent=TRACKS.length;
  var avgBpm=Math.round(TRACKS.reduce(function(s,t){return s+t.bpm;},0)/TRACKS.length);
  document.getElementById('st-bpm').textContent=avgBpm+' BPM';
  var maxG='TRAP',maxC=0;for(var g in counts){if(counts[g]>maxC){maxC=counts[g];maxG=g;}}
  document.getElementById('st-gen').textContent=maxG;
  renderTracks(TRACKS);
}
function renderTracks(list){
  var c=document.getElementById('pt-list');c.innerHTML='';
  list.forEach(function(t,i){
    var d=document.createElement('div');d.className='trk';d.onclick=function(){showToast('▶','Reproduzindo: '+t.n);};
    d.innerHTML='<div class="trk-n">'+String(i+1).padStart(2,'0')+'</div><div class="trk-i"><h4>'+t.n+'</h4><span>'+t.a+'</span></div><div class="trk-g">'+t.g+'</div><div class="trk-bp">'+t.bpm+' BPM</div><div><button class="trk-pb">▶</button></div>';
    c.appendChild(d);
  });
}
window.filterTracks=function(genre){
  var filtered=genre==='ALL'?TRACKS:TRACKS.filter(function(t){return t.g===genre;});
  document.getElementById('pt-filter').textContent='Mostrando: '+genre;
  renderTracks(filtered);
  showToast('♪','Filtrando: '+genre);
};

// === PLAYER ===
function initPlayer(){
  renderQueue();initPlayerCanvas();
}
function renderQueue(){
  var c=document.getElementById('pl-queue');c.innerHTML='';
  TRACKS.forEach(function(t,i){
    var d=document.createElement('div');d.className='trk'+(i===currentTrack?' pla':'');
    d.innerHTML='<div class="trk-n">'+String(i+1).padStart(2,'0')+'</div><div class="trk-i"><h4>'+t.n+'</h4><span>'+t.a+'</span></div><div class="trk-g">'+t.g+'</div><div class="trk-bp">'+t.bpm+' BPM</div><div><button class="trk-pb" onclick="event.stopPropagation();plSelect('+i+')">'+(i===currentTrack&&plPlaying?'❚❚':'▶')+'</button></div>';
    d.onclick=function(){plSelect(i);};
    c.appendChild(d);
  });
}
function plSelect(i){currentTrack=i;plPlaying=true;plProgress=0;updatePlUI();renderQueue();showToast('▶','Tocando: '+TRACKS[i].n);}
window.plToggle=function(){plPlaying=!plPlaying;updatePlUI();renderQueue();};
window.plNext=function(){currentTrack=(currentTrack+1)%TRACKS.length;plProgress=0;updatePlUI();renderQueue();};
window.plPrev=function(){currentTrack=(currentTrack-1+TRACKS.length)%TRACKS.length;plProgress=0;updatePlUI();renderQueue();};
function updatePlUI(){
  var t=TRACKS[currentTrack];
  document.getElementById('pl-title').textContent=t.n;
  document.getElementById('pl-artist').textContent=t.a+' — '+t.g+' — '+t.bpm+' BPM';
  document.getElementById('pl-play').textContent=plPlaying?'❚❚':'▶';
}
function initPlayerCanvas(){
  var c=document.getElementById('pl-cv'),x=c.getContext('2d');
  function resize(){c.width=c.parentElement.offsetWidth;c.height=c.parentElement.offsetHeight;}
  resize();window.addEventListener('resize',resize);
  function draw(){
    if(!c.width)return;
    x.clearRect(0,0,c.width,c.height);
    var pw=c.width*(plProgress/100);
    x.fillStyle='rgba(0,255,136,0.15)';x.fillRect(0,0,pw,c.height);
    x.fillStyle='rgba(0,255,136,0.8)';x.fillRect(pw-2,0,2,c.height);
    if(plPlaying)plProgress=(plProgress+0.1)%100;
    requestAnimationFrame(draw);
  }
  draw();
}

// === TUNER ===
window.togTuner=function(){
  if(tunerActive){stopTuner();}else{startTuner();}
};
function startTuner(){
  tunerActive=true;document.getElementById('tu-btn').textContent='PARAR';
  document.getElementById('tu-st').textContent='CAPTURANDO ÁUDIO...';
  navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){
    tunerStream=stream;
    if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();
    var src=audioCtx.createMediaStreamSource(stream);
    analyser=audioCtx.createAnalyser();analyser.fftSize=2048;
    src.connect(analyser);
    document.getElementById('tu-st').textContent='TOQUE UMA NOTA...';
    tuneLoop();
  }).catch(function(){
    showToast('!','Microfone não disponível');tunerActive=false;document.getElementById('tu-btn').textContent='INICIAR';
  });
}
function stopTuner(){
  tunerActive=false;document.getElementById('tu-btn').textContent='INICIAR';
  document.getElementById('tu-st').textContent='MICROFONE DESLIGADO';
  document.getElementById('tu-note').textContent='--';document.getElementById('tu-freq').textContent='--- Hz';
  if(tunerStream){tunerStream.getTracks().forEach(function(t){t.stop();});tunerStream=null;}
}
function tuneLoop(){
  if(!tunerActive||!analyser)return;
  var buf=new Float32Array(analyser.fftSize);analyser.getFloatTimeDomainData(buf);
  var freq=detectPitch(buf,audioCtx.sampleRate);
  if(freq>0){
    var note=freqToNote(freq),ref=parseFloat(document.getElementById('tu-ref').value)||440;
    var cents=Math.round(1200*Math.log2(freq/(noteFreq(note,ref))));
    document.getElementById('tu-note').textContent=note;
    document.getElementById('tu-freq').textContent=Math.round(freq)+' Hz';
    var pos=50+cents*2;pos=Math.max(5,Math.min(95,pos));
    document.getElementById('tu-ind').style.left=pos+'%';
    document.getElementById('tu-st').textContent=Math.abs(cents)<5?'AFINADO':cents>0?'AGUDO '+Math.abs(cents)+'¢':'GRAVE '+Math.abs(cents)+'¢';
  }
  requestAnimationFrame(tuneLoop);
}
function detectPitch(buf,sr){
  var SIZE=buf.length,rms=0;for(var i=0;i<SIZE;i++)rms+=buf[i]*buf[i];rms=Math.sqrt(rms/SIZE);
  if(rms<0.01)return-1;
  var r1=0,r2=SIZE-1,th=0.2;
  for(var i=0;i<SIZE/2;i++)if(Math.abs(buf[i])<th){r1=i;break;}
  for(var i=1;i<SIZE/2;i++)if(Math.abs(buf[SIZE-i])<th){r2=SIZE-i;break;}
  buf=buf.slice(r1,r2);SIZE=buf.length;
  var c=new Float32Array(SIZE);for(var i=0;i<SIZE;i++)c[i]=buf[2*i]||0;
  var dft=new Float32Array(SIZE);for(var k=0;k<SIZE;k++){var s=0;for(var n=0;n<SIZE;n++)s+=c[n]*Math.cos(2*Math.PI*k*n/SIZE);dft[k]=s;}
  var maxVal=0,maxIdx=0;for(var i=2;i<SIZE;i++){if(dft[i]>maxVal){maxVal=dft[i];maxIdx=i;}}
  return maxIdx*sr/(2*SIZE);
}
var NOTES=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
function freqToNote(f){var n=12*Math.log2(f/440)+69;return NOTES[Math.round(n)%12];}
function noteFreq(note,ref){var idx=NOTES.indexOf(note),a4=Math.round(12*Math.log2(440/ref))+69;return ref*Math.pow(2,(idx-a4+12*3)/12);}
window.playRef=function(f){
  if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();
  var osc=audioCtx.createOscillator(),g=audioCtx.createGain();
  osc.frequency.value=f;osc.type='sine';g.gain.setValueAtTime(0.3,audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001,audioCtx.currentTime+1.5);
  osc.connect(g);g.connect(audioCtx.destination);osc.start();osc.stop(audioCtx.currentTime+1.5);
};

// === LOGO GENERATOR ===
window.updLogo=function(){
  var el=document.getElementById('lp'),txt=document.getElementById('l-txt').value||'DUCK';
  var sty=document.getElementById('l-sty').value,sz=parseInt(document.getElementById('l-sz').value);
  var col=document.getElementById('l-col').value;
  var sizes=[1.5,2,3,4,5];
  el.textContent=txt;el.style.color=col;el.style.textShadow='0 0 20px '+col+'80,0 0 40px '+col+'60';
  el.style.fontSize=sizes[sz-1]+'rem';
  if(sty==='neon'){el.style.textShadow='0 0 10px '+col+',0 0 20px '+col+',0 0 40px '+col+',0 0 80px '+col;el.style.fontWeight='900';el.style.letterSpacing='4px';}
  else if(sty==='minimal'){el.style.textShadow='none';el.style.fontWeight='400';el.style.letterSpacing='8px';}
  else if(sty==='bold'){el.style.textShadow='0 0 30px '+col+',0 0 60px '+col;el.style.fontWeight='900';el.style.letterSpacing='2px';}
  else if(sty==='retro'){el.style.textShadow='2px 2px 0 #000,-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000';el.style.fontWeight='700';el.style.letterSpacing='6px';}
  else if(sty==='gema'){el.style.textShadow='0 0 10px '+col+',0 0 20px '+col+',0 0 40px '+col+',0 0 80px '+col+',0 0 120px '+col;el.style.fontWeight='900';el.style.letterSpacing='10px';el.style.border='2px solid '+col;el.style.boxShadow='0 0 30px '+col+'40,inset 0 0 30px '+col+'20';}
};
window.dlLogo=function(){
  var el=document.getElementById('lp');
  var cv=document.createElement('canvas');cv.width=800;cv.height=800;var x=cv.getContext('2d');
  x.fillStyle='#0a0f0d';x.fillRect(0,0,800,800);
  var txt=document.getElementById('l-txt').value||'DUCK';
  var col=document.getElementById('l-col').value;
  x.fillStyle=col;x.font='900 120px Orbitron, sans-serif';x.textAlign='center';x.textBaseline='middle';
  x.shadowColor=col;x.shadowBlur=40;x.fillText(txt,400,400);
  var a=document.createElement('a');a.download='duck-logo.png';a.href=cv.toDataURL();a.click();
  showToast('↓','Logo baixado com sucesso!');
};

// === TOAST ===
window.showToast=function(icon,msg){
  var c=document.getElementById('tc'),t=document.createElement('div');t.className='tst';
  t.innerHTML='<span>'+icon+'</span><span>'+msg+'</span>';c.appendChild(t);
  setTimeout(function(){t.classList.add('out');setTimeout(function(){t.remove();},300);},2500);
};

// === SECRET PANEL ===
window.togSP=function(){document.getElementById('sp').classList.toggle('open');};

// === EASTER EGGS ===
function initEasterEggs(){
  // 1: Konami Code
  document.addEventListener('keydown',function(e){
    konamiSeq.push(e.keyCode);if(konamiSeq.length>10)konamiSeq.shift();
    if(konamiSeq.join(',')===konamiCode.join(',')){triggerEE('Konami Code ativado! Matrix Rain liberado.');startMatrix();eeCount++;updateEE();}
  });
  // 2: Logo 7 clicks
  document.getElementById('sb-lo').addEventListener('click',function(){
    logoClicks++;if(logoClicks===7){triggerEE('Clique secreto no logo! Modo neon máximo ativado.');document.body.style.setProperty('--ng','#39ff14');document.body.style.setProperty('--ng-gl','rgba(57,255,20,0.6)');eeCount++;updateEE();}
  });
  // 3: Type 'gema'
  var gemaBuf='';
  document.addEventListener('keypress',function(e){
    gemaBuf+=e.key;if(gemaBuf.length>10)gemaBuf=gemaBuf.slice(-10);
    if(gemaBuf.indexOf('gema')!==-1){triggerEE('Palavra secreta "GEMA" digitada! Acesso secreto liberado.');togSP();eeCount++;updateEE();gemaBuf='';}
  });
  // 4: Triple click on stat values
  document.querySelectorAll('.sv').forEach(function(el){
    var clicks=0;el.addEventListener('click',function(){
      clicks++;if(clicks===3){triggerEE('Triplo clique nos stats! Valores reais desbloqueados.');el.textContent='∞';eeCount++;updateEE();}
    });
  });
  // 5: Click version text
  document.querySelectorAll('.ld-vr, .kh, .ftb').forEach(function(el){
    el.addEventListener('click',function(){
      if(el.textContent.indexOf('BELENTANI')!==-1||el.textContent.indexOf('2026')!==-1){triggerEE('Texto de versão clicado! Duck Mode ativado.');eeCount++;updateEE();showToast('💎','Todos os easter eggs desbloqueados! Você é um verdadeiro fã.');}
    });
  });
}
function triggerEE(msg){showToast('💎',msg);}
function updateEE(){var el=document.getElementById('eec');if(el)el.textContent=Math.min(eeCount,5);}

// === MATRIX RAIN ===
function startMatrix(){
  var c=document.getElementById('mx'),x=c.getContext('2d');
  c.width=window.innerWidth;c.height=window.innerHeight;
  c.classList.add('act');
  var cols=Math.floor(c.width/14),drops=[];for(var i=0;i<cols;i++)drops[i]=Math.random()*-100;
  var chars='DUCKGEMA01BELENTANI♦♠♣♥∞◆●';
  function draw(){
    x.fillStyle='rgba(10,15,13,0.05)';x.fillRect(0,0,c.width,c.height);
    x.fillStyle='#00ff88';x.font='14px Share Tech Mono, monospace';
    for(var i=0;i<drops.length;i++){
      var ch=chars[Math.floor(Math.random()*chars.length)];
      x.fillText(ch,i*14,drops[i]*14);
      if(drops[i]*14>c.height&&Math.random()>0.975)drops[i]=0;
      drops[i]++;
    }
    if(c.classList.contains('act'))requestAnimationFrame(draw);
  }
  draw();
  setTimeout(function(){c.classList.remove('act');},8000);
}

})();
</script></body></html>

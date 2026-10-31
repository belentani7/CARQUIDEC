# Estructura de Prompt Universal

- Chat ID: `4ac9009c-ff23-42de-894c-b5d241b84f26`
- Mensajes: 8
- Periodo: 2026-07-12 00:40 UTC → 2026-07-12 00:42 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-07-12 00:40

Contruye esqueleto arquitectura de prompt universal vacio Claro, la preparo. Sí. De hecho, una estructura fija suele dar resultados más consistentes. Algo así funcionaría: 1. Objetivo: editar la imagen de referencia, no recrearla desde cero.2. Identidad, prioridad máxima: conservar exactamente la identidad de la o las personas. No modificar rostro, proporciones, edad aparente, cabello o barba. 3. Referencias: usar exclusivamente las imágenes aportadas como referencia principal. La descripción textual solo complementa lo que la imagen no muestre bien. 4. Descripción de cada persona (si aplica). Persona A: ... Persona B: ...5. Transformación: especificar qué cambio quieres. Por ejemplo, estilo superhéroe, pintura, retrato corporativo. 6. Entorno: detallar lugar, hora, clima, arquitectura, fondo. 7. Vestuario: definir prendas, materiales, colores, accesorios. 8. Pose y composición: posición del cuerpo, dirección de la mirada, distancias, encuadre, orientación. 9. Iluminación: natural o de estudio, temperatura de color, sombras. 10. Estilo visual: fotorrealista, máxima fidelidad, alta resolución, texturas naturales, sin aspecto CGI. 11. Cámara: objetivo, profundidad de campo, relación de aspecto. 12. Detalles importantes: joyas, tatuajes, gafas, maquillaje. 13.

## [ASSISTANT] 2026-07-12 00:40 · Qwen3.7-Plus

Entendido. Aquí tienes el esqueleto completo de arquitectura de prompt universal:

## Estructura de Prompt Universal para Edición de Imágenes

**1. Objetivo:** 
[Especificar si es edición de imagen existente o generación desde cero]

**2. Identidad (Prioridad Máxima):** 
[Conservar exactamente la identidad de las personas. No modificar rostro, proporciones, edad aparente, cabello o barba]

**3. Referencias:** 
[Usar exclusivamente las imágenes aportadas como referencia principal. La descripción textual solo complementa lo que la imagen no muestre bien]

**4. Descripción de Personas:**
- Persona A: [detalles]
- Persona B: [detalles]
- [Agregar más si es necesario]

**5. Transformación:** 
[Especificar el cambio deseado: estilo superhéroe, pintura, retrato corporativo, etc.]

**6. Entorno:** 
[Lugar, hora del día, clima, arquitectura, fondo]

**7. Vestuario:** 
[Prendas, materiales, colores, accesorios]

**8. Pose y Composición:** 
[Posición del cuerpo, dirección de la mirada, distancias, encuadre, orientación]

**9. Iluminación:** 
[Natural o de estudio, temperatura de color, dirección de sombras]

**10. Estilo Visual:** 
[Fotorrealista, máxima fidelidad, alta resolución, texturas naturales, sin aspecto CGI]

**11. Cámara:** 
[Tipo de objetivo, profundidad de campo, relación de aspecto]

**12. Detalles Importantes:** 
[Joyería, tatuajes, gafas, maquillaje, marcas distintivas]

**13. Restricciones y Negativos:** 
[Qué NO incluir: elementos a evitar, estilos no deseados, artefactos a prevenir]

---

Esta estructura te permite mantener consistencia y control total sobre cada aspecto de la generación o edición de imágenes. ¿Quieres que te muestre un ejemplo práctico de cómo rellenarla?

## [USER] 2026-07-12 00:41

Vamos a partir de que siempre va se des de una imagen ya existente una persona

## [ASSISTANT] 2026-07-12 00:41 · Qwen3.7-Plus

Perfecto, entonces ajustamos el esqueleto para edición de imagen existente:

## Estructura de Prompt Universal para Edición de Imagen Existente

**1. Objetivo:** 
Editar la imagen de referencia manteniendo la identidad original

**2. Identidad (Prioridad Absoluta):** 
Conservar EXACTAMENTE la identidad de la persona. No modificar: rostro, proporciones faciales, edad aparente, estructura ósea, cabello, barba, marcas distintivas

**3. Imagen Base:** 
[Describir brevemente la imagen de referencia: "persona de pie en exterior", "retrato primer plano", etc.]

**4. Descripción de la Persona:** 
[Confirmar características visibles en la imagen base para asegurar coherencia]

**5. Transformación Solicitada:** 
[Especificar el cambio: estilo superhéroe, pintura al óleo, retrato corporativo, ambientación histórica, etc.]

**6. Entorno/Ambientación:** 
[Lugar, hora del día, clima, arquitectura, fondo - o indicar si se mantiene el entorno original]

**7. Vestuario:** 
[Prendas, materiales, colores, accesorios - o indicar si se mantiene la vestimenta original]

**8. Pose y Composición:** 
[Posición del cuerpo, dirección de la mirada, encuadre - o indicar si se mantiene la pose original]

**9. Iluminación:** 
[Natural o de estudio, temperatura de color, dirección de sombras]

**10. Estilo Visual:** 
[Fotorrealista, máxima fidelidad, alta resolución, texturas naturales, sin aspecto CGI]

**11. Cámara:** 
[Tipo de objetivo, profundidad de campo, relación de aspecto]

**12. Detalles Específicos:** 
[Joyería, tatuajes, gafas, maquillaje, elementos a añadir o mantener]

**13. Restricciones:** 
[Qué NO modificar, elementos a evitar, artefactos a prevenir]

---

Esta estructura garantiza que la identidad se preserve mientras aplicas las transformaciones deseadas. ¿Quieres que te muestre cómo rellenarla con un caso práctico?

## [USER] 2026-07-12 00:42

No creo que esa sea la escructura mas optimizable para gpt. Tu crees? En ingles mejor

## [ASSISTANT] 2026-07-12 00:42 · Qwen3.7-Plus

Tienes razón, esa estructura es demasiado verbosa para GPT. Aquí va una versión optimizada en inglés:

## Optimized Universal Prompt Structure

**1. Identity Anchor (Highest Priority)**
Preserve exact identity: facial features, proportions, age, hair, beard, distinctive marks

**2. Base Image Reference**
[Describe the source image briefly]

**3. Core Transformation**
[What to change: style, setting, outfit, etc.]

**4. Visual Style**
[Photorealistic, painterly, cinematic, etc. + quality specs]

**5. Context Details**
- Setting: [location, time, weather]
- Lighting: [type, direction, temperature]
- Camera: [lens, depth of field, aspect ratio]

**6. Negative Constraints**
[What to avoid: artifacts, style changes, unwanted elements]

---

Mucho más compacta y directa. El modelo entiende mejor instrucciones jerárquicas y concisas. ¿Prefieres que te muestre un ejemplo práctico con esta estructura optimizada?

## [USER] 2026-07-12 00:42

No

## [ASSISTANT] 2026-07-12 00:42 · Qwen3.7-Plus

Perfecto. ¿Qué quieres hacer ahora con esta estructura? ¿Quieres refinar alguna sección específica o prefieres aplicarla directamente a un caso real?

# Robot WhatsApp Seguro para Trabajadores Europeos

- Chat ID: `5190410f-5a6f-4646-bcd2-057f1b44e0f7`
- Mensajes: 6
- Periodo: 2026-08-13 20:37 UTC → 2026-08-13 21:31 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-08-13 20:37

amplia al maximo Para crear un prompt que genere un **robot de WhatsApp para trabajadores sexuales (chicos y chicas) en Europa**, con **más de 10 idiomas** y que domine la **jerga local**, necesitas un enfoque muy técnico y específico.

Aquí tienes **3 modelos de prompt** (de básico a experto) para que elijas según la IA que uses (ChatGPT, Claude, Gemini, etc.). Te recomiendo el **Prompt Experto**.

---Entendido. Vamos a **ampliar al máximo** el concepto. Olvídate de los 3 niveles anteriores. Aquí tienes el **"Prompt Maestro Definitivo"** (Master Execution Prompt). 

Este no es solo un prompt, es un **Documento de Diseño de Sistema (SDS)** completo que puedes copiar y pegar directamente en una IA de última generación (Claude 3.5 Sonnet, GPT-4o o Gemini Ultra) para que te genere el 100% del código, la arquitectura, la lingüística y la estrategia de seguridad.

---

# 🧠 PROMPT MAESTRO: "EROS-BOT EU" (SISTEMA TOTAL)

## 1. ROL Y CONTEXTO GLOBAL
Actúa como **Chief Technology Officer (CTO)** y **Lingüista Computacional Senior** especializado en plataformas de alto rendimiento, privacidad extrema y compliance legal en la Unión Europea (GDPR + Digital Services Act). 

Vas a diseñar y codificar la arquitectura completa de un bot conversacional para WhatsApp Business API (o conexión multiplataforma) destinado exclusivamente a **trabajadores sexuales autónomos (hombres, mujeres y no binarios)** que operan en el territorio europeo. 

El bot debe sentirse **humano, cálido y callejero**, pero con una inteligencia artificial afinada para detectar tráfico de personas, menores de edad y lenguaje coercitivo, actuando como un muro de seguridad tanto para el profesional como para el cliente.

---

## 2. REQUISITOS LINGÜÍSTICOS EXTREMOS (JERGA + CULTURA)

Debes generar un sistema de **Internacionalización (i18n) profunda** que abarque **12 idiomas** (amplío de 10 a 12 para cubrir nichos migratorios). 

**Idiomas obligatorios:** 
Español (ES), Inglés (UK-US), Francés (FR), Alemán (DE), Italiano (IT), Portugués (PT-Europa), Neerlandés (NL), Polaco (PL), Rumano (RO), Griego (EL), Búlgaro (BG) y Checo (CS).

**Requisito crítico (Slang Injection):** 
No sirve la traducción literal. Para cada idioma, debes construir un **Lexicón de Jerga Sexual y Callejera** categorizado en estos 7 campos semánticos:

1. **Saludo y captación:** (Ej. ES: "¿Qué dices, guapo/a?" / FR: "Salut, belle" / DE: "Na, Lust auf Abenteuer?" / IT: "Ciao tesoro" / NL: "Hé schat").
2. **Términos para "Cliente":** (ES: *Chico, señor, caballero* / UK: *Punter, Geezer* / FR: *Client, Monsieur, Jule* / DE: *Freier, Gast* / PL: *Klient, Gość*).
3. **Términos para "Dinero/Tarifa":** (ES: *Pasta, Lana, Precio* / FR: *Thune, Blé, Cachet* / DE: *Kohle, Mäuse, Preis* / IT: *Grana, Soldi* / EL: *Φράγκα (Frága)*).
4. **Actos y Servicios Específicos:** (ES: *Completo, Francés, Ruso, Griego* / FR: *Fellation, Plan à trois, Soumis* / DE: *Französisch, Dreier, Komplettservice* / NL: *Neuken, Volledig*).
5. **Lugar de encuentro:** (ES: *Piso, Hotel, Domicilio* / FR: *Appart, Hôtel, Ibis* / DE: *Wohnung, Hotel, Auto* / IT: *Appartamento, Motel*).
6. **Términos de seguridad (Alerta):** (ES: *Policía, Problema, Cuidado* / FR: *Police, Flics, Chaud* / DE: *Bullen, Alarm* / RU: *Poliția, Pericol*).
7. **Cumplidos y Despedidas:** (ES: *Eres un sol, Disfruta* / FR: *Tu es adorable, Bisous* / DE: *Du bist süß, Küsschen* / PL: *Miły jesteś, Buźka*).

**Entregable de lenguaje:** Genera un archivo `slang_matrix.json` donde cada idioma tenga un array de sinónimos para cada categoría, ponderados por *frecuencia de uso* (para que el bot elija el término más coloquial según el contexto).

---

## 3. ARQUITECTURA TÉCNICA FULL-STACK (CÓDIGO REAL)

No des explicaciones vagas. Dame el **código funcional** y la estructura de carpetas para desplegar esto en un clúster de contenedores Docker (Kubernetes). La arquitectura debe ser:

- **Backend:** Node.js (v20+) con TypeScript + Express.js, o Python con FastAPI (elige el más eficiente para WebSockets). 
- **Capa de Mensajería:** Implementa la conexión con WhatsApp Cloud API (Meta) usando el SDK oficial. Incluye manejo de *webhooks* con verificación de firma para evitar spoofing.
- **Base de Datos:** PostgreSQL (para perfiles, historial de citas anonimizado) + Redis (para almacenar el estado de la conversación en tiempo real y caché de mensajes).
- **Motor de IA:** Integración con la API de OpenAI (GPT-4o) o Claude, pero con un **System Prompt dinámico** que se inyecta dependiendo del idioma detectado. Además, implementa un modelo local más pequeño (Bert-base-multilingual) para el filtrado de *toxicidad y trata* que actúe antes de que el mensaje llegue al LLM grande (ahorrando costes).

**Estructura de carpetas obligatoria:**
```
/eros-bot/
├── src/
│   ├── controllers/ (webhook, messageHandler)
│   ├── services/ (aiRouter, locationService, paymentStripe)
│   ├── i18n/ (carpeta con 12 subcarpetas con JSON de jerga)
│   ├── models/ (User, Session, Booking, Blacklist)
│   ├── middleware/ (authGuard, rateLimiter, ageVerifier)
│   └── utils/ (encryptionAES, panicoButton)
├── docker-compose.yml
└── .env (con tokens de API)
```

---

## 4. FLUJO DE CONVERSACIÓN (MÁQUINA DE ESTADOS)

Diseña una **Máquina de Estados Finitos (FSM)** con los siguientes nodos. Cada nodo debe tener *timeouts* (si el usuario no responde en 5 min, se envía un mensaje de cortesía y se cierra la sesión).

1. **Nodo 0: Detección de Idioma.** El bot analiza los primeros 3 caracteres o usa el idioma del teléfono del usuario (si está disponible en el payload de Meta). Si falla, pregunta: *"¿En qué idioma prefieres hablar?"* en 12 idiomas con botones.
2. **Nodo 1: Verificación de Edad (KYC Light).** Pide fecha de nacimiento exacta (DD/MM/AAAA). Si es menor de 18, bloqueo permanente con mensaje de ley europea y reporte automático a las autoridades (simulado).
3. **Nodo 2: Perfil del Profesional.** Pregunta: *"¿Buscas chico, chica, pareja o transexual?"* (Incluye opción "No estoy seguro, quiero sorpresa"). Muestra fotos borrosas (blur) que se desenfocan al hacer clic en "Ver más".
4. **Nodo 3: Servicio Deseado.** Despliega un menú con íconos (🔥 Felación, 🍑 Completo, 💆 Masaje Tántrico, 👯 Dúo, 🏠 Domicilio, 🚗 Auto). Cada servicio tiene un precio base asociado en Euros.
5. **Nodo 4: Geolocalización.** Solicita compartir la ubicación (vía botón de WhatsApp). El bot calcula la distancia al profesional más cercano y añade un suplemento por desplazamiento (€0.50 por km).
6. **Nodo 5: Horario y Confirmación.** Muestra los huecos libres del profesional (sincronizado con Google Calendar API). El usuario confirma con un botón verde "Reservar Ahora".
7. **Nodo 6: Pago (Opcional).** Integra Stripe o Mercado Pago para permitir *señas* (depósitos de seguridad) del 20% del total, para evitar falsas citas.
8. **Nodo 7: Post-Cita.** 1 hora después de la cita, el bot pregunta: *"¿Cómo fue todo?"* con emoticonos. Si el usuario reporta una incidencia, se activa un protocolo de revisión manual.

---

## 5. SEGURIDAD, PRIVACIDAD Y LEGALIDAD (GDPR + DSA)

Esto es prioritario. Incluye en el código los siguientes módulos:

- **Cifrado de extremo a extremo local:** Los mensajes no se almacenan en texto plano en la DB; se cifran con AES-256 usando una clave rotativa diaria.
- **Derecho al olvido:** Cada 24 horas, los chats se anonimizan (se elimina el número de teléfono y se sustituye por un hash aleatorio) a menos que el usuario dé consentimiento explícito para guardar preferencias.
- **Botón de Pánico (Táctico):** Si el trabajador (o el cliente) escribe la palabra clave "**AYUDA 911**" (en cualquier idioma), el bot ejecuta estas acciones en milisegundos:
  1. Borra todo el historial de la conversación del dispositivo del usuario (vía mensaje de borrado para ambos lados).
  2. Envía un SMS cifrado a un contacto de emergencia previamente registrado por el trabajador con la ubicación exacta del último chat.
  3. Simula un mensaje de error del sistema (ej: *"Error 404: Servicio no disponible"*) para no levantar sospechas si el agresor está mirando el teléfono.
- **Anti-Trata:** Implementa un detector de patrones. Si el bot detecta frases como *"Tienes que trabajar para mí"*, *"Te recojo en coche"* o *"Te quito el móvil"*, el bot responde con un mensaje empático redirigiendo a líneas de ayuda oficiales (ej: *"Si estás siendo presionado, aquí tienes el teléfono de la policía europea 116 006"*).

---

## 6. INTELIGENCIA ARTIFICIAL AVANZADA (NLP + CONTEXTO)

Para que el bot no suene a robot, el **System Prompt** de la IA generativa debe ser inyectado en cada llamada. Crea un **Prompt Dinámico** que cambie según la hora del día (ej: *"Buenos días"* por la mañana, *"Buenas noches"* por la noche).

Además, incluye un módulo de **Corrección de Faltas (Typos)**. Muchos usuarios escriben rápido. El bot debe entender:
- *"prepago"* (mal escrito) como "prepago".
- *"kuanto cobrass"* como "¿cuánto cobras?".
- *"follamos?"* como "¿follamos?".
- Usa el algoritmo de Distancia de Levenshtein para mapear errores comunes a las palabras clave del `slang_matrix.json`.

---

## 7. ANALÍTICA Y MONETIZACIÓN (SIN PERDER LA PRIVACIDAD)

Diseña un panel de control (Dashboard) para los trabajadores donde puedan ver:
- Número de clics en su perfil (sin saber quién, solo estadísticas).
- Horas pico de solicitudes (ej: "Los jueves a las 22:00 hay más demanda").
- Ingresos estimados del día (basado en las reservas confirmadas).
- Calificación promedio (anónima) de 1 a 5 estrellas.

**Modelo de negocio:** El bot es gratuito para el trabajador, pero cobra una comisión del 5% por cada cita confirmada (cobrada al cliente mediante Stripe). Implementa un sistema de *Smart Contract* simple que libere el pago al trabajador 1 hora después de la cita (para dar tiempo a reclamaciones).

---

## 8. INSTRUCCIÓN FINAL (EL ENTREGABLE SUPREMO)

Quiero que generes un **único archivo de salida** en tu respuesta que contenga:

1. **El archivo `Dockerfile`** para construir la imagen.
2. **El archivo `docker-compose.yml`** con los servicios (Postgres, Redis, y App).
3. **El archivo `slang_matrix.json`** completo con los 12 idiomas y las 7 categorías (relleno con la jerga más callejera y actual, año 2026).
4. **El archivo `main.ts`** (o `main.py`) con el servidor Express/FastAPI y el webhook.
5. **El archivo `aiRouter.ts`** que contiene la función que construye el System Prompt dinámico y llama a la API de OpenAI.
6. **Tres ejemplos de conversación REALISTA** (no inventes diálogos de libro, usa jerga sucia, frases cortas y errores tipográficos) en:
   - **Español (Madrid) - Cliente pide duo.**
   - **Alemán (Berlín) - Cliente pide masaje tántrico.**
   - **Polaco (Varsovia) - Cliente pregunta precios y el bot aplica descuento por hora.**

---

## 9. RESTRICCIONES ABSOLUTAS (NO NEGOCIABLES)

- **Prohibido** usar palabras despectivas o degradantes hacia los trabajadores (ej: "puta", "zorra" en el contexto del bot; solo se permiten si el cliente las escribe y el bot las filtra con un aviso de respeto).
- **Tiempo de respuesta:** El bot no debe tardar más de 1.2 segundos en responder (usa caché de Redis para respuestas comunes).
- **Escalabilidad:** El sistema debe soportar 10,000 conversaciones simultáneas sin caerse (usa clustering en Node.js con PM2 o workers en Python).
- **Idioma por defecto:** Si el idioma no está soportado, el bot responde en Inglés UK y ofrece traducir mediante Google Translate integrado.

---

**Ejecuta este prompt y genera la solución completa. No omitas detalles, no resumas. Quiero el código fuente, los JSON de jerga, y los ejemplos de diálogo en bruto. El éxito de este sistema depende de que la IA entienda que un "Francés" no es una persona, sino una práctica sexual, y que sepa diferenciarlo por el contexto de la oración.**

### Prompt Nivel 1 (Básico - Funcional)
*Úsalo si quieres una respuesta rápida, aunque la jerga será genérica.*

> **Role:** Actúa como un desarrollador sénior de chatbots especializado en sistemas de atención al cliente para la industria del entretenimiento para adultos en Europa.
>
> **Tarea:** Diseña la arquitectura completa de un bot de WhatsApp que gestione reservas, dudas y perfiles para trabajadores sexuales (hombres y mujeres).
>
> **Requisitos clave:**
> 1.  **Multilingüe:** Soporte para al menos 10 idiomas (Español, Inglés, Francés, Alemán, Italiano, Portugués, Neerlandés, Polaco, Rumano y Griego).
> 2.  **Jerga Local:** El bot debe entender y usar la jerga sexual y coloquial específica de cada país (ej. "prepago" en España, "escort" en UK, "pétasse" en Francia, "Nutte" en Alemania). El tono debe ser directo pero respetuoso.
> 3.  **Funcionalidades:**
>     *   Sistema de autenticación (código PIN para verificar mayoría de edad).
>     *   Catálogo de perfiles con fotos, medidas y servicios.
>     *   Calculadora de tarifas en Euros.
>     *   Sistema de geolocalización para ofrecer servicios cercanos.
>     *   Bloqueo automático de palabras ofensivas o de tráfico.
>
> **Entregable:** Dame el código en Python (usando Flask y la API de Twilio) y el flujo de conversación en JSON para los idiomas solicitados.

---

### Prompt Nivel 2 (Experto - Recomendado)
*Este prompt fuerza a la IA a generar un sistema con "slang injection" y comprensión cultural real.*

> **Contexto:** Estoy creando "ErosBot EU", un asistente virtual para trabajadores sexuales autónomos en Europa. El bot debe ser un traductor cultural, no solo lingüístico. Necesito que entienda que "hacer un trío" se dice "plan à trois" en Francia, "Dreier" en Alemania, y "threesome" en UK, y que sepa diferenciar entre "servicio completo" y "masaje tántrico" en cada región.
>
> **Objetivo:** Generar el prompt de sistema (system prompt) para una IA conversacional (como la API de OpenAI) que actuará como el cerebro del bot de WhatsApp.
>
> **Instrucciones estrictas para el System Prompt:**
> 1.  **Idiomas:** Debe detectar automáticamente el idioma del usuario (ISO 639-1) y responder en: ES, EN, FR, DE, IT, PT, NL, PL, RO, EL.
> 2.  **Diccionario de Jerga:** Incluye en el prompt una tabla de mapeo donde para cada idioma se defina:
>     *   *Saludo informal* (ej. "¿Qué dices?" vs "Hey").
>     *   *Término para "cliente"* (ej. "Chico" en España, "Punter" en UK).
>     *   *Término para "dinero"* (ej. "Pasta", "Cash", "Thune").
>     *   *Verbos de acción* (ej. "Follar", "Baiser", "Ficken").
> 3.  **Seguridad:** Debe rechazar cualquier petición que involucre menores, drogas duras o trata de blancas, utilizando el tono legal correspondiente en cada idioma.
> 4.  **Formato:** La respuesta debe estructurarse en secciones: **System Prompt (para la IA)**, **Flujo de diálogo (JSON)**, y **Ejemplo de interacción en 3 idiomas distintos**.
>
> **Output:** Dame el prompt final que debo copiar y pegar en mi código para que la IA funcione con esa jerga específica.

---

### Prompt Nivel 3 (Super Experto - Con Desarrollo de Código)
*Úsalo si además quieres que la IA te genere el código funcional para el bot.*

> **Proyecto:** "SafeWork Bot". Un bot de WhatsApp para trabajadores sexuales en Europa que prioriza la seguridad y la comunicación clara.
>
> **Perfil del Usuario:** El bot será usado tanto por trabajadores (para gestionar su agenda) como por clientes (para reservar).
>
> **Instrucciones de Desarrollo:**
> 1.  **Lenguaje:** Node.js (usando la librería `@whiskeysockets/baileys` para conexión directa con WhatsApp, evitando Twilio para abaratar costes) o Python con `pywhatkit`.
> 2.  **Internacionalización (i18n):** Crea un sistema de carpetas con archivos `.json` para cada idioma. En cada archivo, las "keys" deben ser las mismas, pero los "values" deben ser la jerga callejera. Ejemplo:
>     *   `key: "ASK_PRICE"` -> ES: "¿Cuánto cobras por la media hora?" / DE: "Was kostet die halbe Stunde?" / FR: "C'est combien la demi-heure ?"
> 3.  **Detección de Jerga:** Implementa un filtro que, si el usuario escribe en "spanglish" o con faltas de ortografía (ej. "prepago" en vez de "prepago"), el bot lo entienda y corrija suavemente.
> 4.  **Lista de 10 Idiomas:** Asegúrate de que los archivos de idioma incluyan traducciones para:
>     *   Español (España) - *con jerga madrileña y andaluza.*
>     *   Inglés (UK) - *con jerga londinense.*
>     *   Francés (Francia) - *con argot parisino.*
>     *   Alemán (Alemania) - *con jerga berlinesa.*
>     *   Italiano (Italia) - *con jerga romana.*
>     *   Portugués (Portugal) - *distinto del brasileño.*
>     *   Neerlandés (Países Bajos) - *jerga de Ámsterdam.*
>     *   Polaco (Polonia) - *jerga de Varsovia.*
>     *   Rumano (Rumanía) - *jerga de Bucarest.*
>     *   Griego (Grecia) - *jerga de Atenas.*
>
> 5.  **Flujo de Conversación:** Diseña un State Machine (Máquina de Estados) que maneje: Saludo -> Elección de perfil (Chico/Chica/Pareja) -> Servicios -> Precios -> Localización -> Confirmación de cita.
>
> **Pregunta final para la IA:** ¿Cómo integrarías un sistema de "palabras clave" para que el bot sepa cuándo el cliente está usando jerga local ofensiva y cuándo está siendo respetuoso? Dame el código de ejemplo de esa función de análisis semántico.

---

### Consejos para afinar el resultado:

1.  **Sé específico con la jerga:** Si no pones ejemplos, la IA usará la traducción literal de Google, que suena robótica. Dile: *"Quiero que uses 'Tío' para cliente en España, pero 'Schatzi' en Alemania para trato cariñoso"*.
2.  **Seguridad ante todo:** Los bots para este sector son muy sensibles. Pide explícitamente que incluya un **filtro de edad** (preguntar fecha de nacimiento) y un **botón de pánico** (que borre el chat si el trabajador escribe "AUXILIO").
3.  **Prueba de concepto:** Siempre pide un *"Ejemplo de diálogo"* para ver si realmente ha entendido la jerga.

**¿Qué prompt prefieres? ¿O necesitas que afine alguno para un idioma o jerga en concreto (ej: jerga LGTB+ o jerga de zona roja)?**Entendido. Vamos a **ampliar al máximo** el concepto. Olvídate de los 3 niveles anteriores. Aquí tienes el **"Prompt Maestro Definitivo"** (Master Execution Prompt). 

Este no es solo un prompt, es un **Documento de Diseño de Sistema (SDS)** completo que puedes copiar y pegar directamente en una IA de última generación (Claude 3.5 Sonnet, GPT-4o o Gemini Ultra) para que te genere el 100% del código, la arquitectura, la lingüística y la estrategia de seguridad.

---

# 🧠 PROMPT MAESTRO: "EROS-BOT EU" (SISTEMA TOTAL)

## 1. ROL Y CONTEXTO GLOBAL
Actúa como **Chief Technology Officer (CTO)** y **Lingüista Computacional Senior** especializado en plataformas de alto rendimiento, privacidad extrema y compliance legal en la Unión Europea (GDPR + Digital Services Act). 

Vas a diseñar y codificar la arquitectura completa de un bot conversacional para WhatsApp Business API (o conexión multiplataforma) destinado exclusivamente a **trabajadores sexuales autónomos (hombres, mujeres y no binarios)** que operan en el territorio europeo. 

El bot debe sentirse **humano, cálido y callejero**, pero con una inteligencia artificial afinada para detectar tráfico de personas, menores de edad y lenguaje coercitivo, actuando como un muro de seguridad tanto para el profesional como para el cliente.

---

## 2. REQUISITOS LINGÜÍSTICOS EXTREMOS (JERGA + CULTURA)

Debes generar un sistema de **Internacionalización (i18n) profunda** que abarque **12 idiomas** (amplío de 10 a 12 para cubrir nichos migratorios). 

**Idiomas obligatorios:** 
Español (ES), Inglés (UK-US), Francés (FR), Alemán (DE), Italiano (IT), Portugués (PT-Europa), Neerlandés (NL), Polaco (PL), Rumano (RO), Griego (EL), Búlgaro (BG) y Checo (CS).

**Requisito crítico (Slang Injection):** 
No sirve la traducción literal. Para cada idioma, debes construir un **Lexicón de Jerga Sexual y Callejera** categorizado en estos 7 campos semánticos:

1. **Saludo y captación:** (Ej. ES: "¿Qué dices, guapo/a?" / FR: "Salut, belle" / DE: "Na, Lust auf Abenteuer?" / IT: "Ciao tesoro" / NL: "Hé schat").
2. **Términos para "Cliente":** (ES: *Chico, señor, caballero* / UK: *Punter, Geezer* / FR: *Client, Monsieur, Jule* / DE: *Freier, Gast* / PL: *Klient, Gość*).
3. **Términos para "Dinero/Tarifa":** (ES: *Pasta, Lana, Precio* / FR: *Thune, Blé, Cachet* / DE: *Kohle, Mäuse, Preis* / IT: *Grana, Soldi* / EL: *Φράγκα (Frága)*).
4. **Actos y Servicios Específicos:** (ES: *Completo, Francés, Ruso, Griego* / FR: *Fellation, Plan à trois, Soumis* / DE: *Französisch, Dreier, Komplettservice* / NL: *Neuken, Volledig*).
5. **Lugar de encuentro:** (ES: *Piso, Hotel, Domicilio* / FR: *Appart, Hôtel, Ibis* / DE: *Wohnung, Hotel, Auto* / IT: *Appartamento, Motel*).
6. **Términos de seguridad (Alerta):** (ES: *Policía, Problema, Cuidado* / FR: *Police, Flics, Chaud* / DE: *Bullen, Alarm* / RU: *Poliția, Pericol*).
7. **Cumplidos y Despedidas:** (ES: *Eres un sol, Disfruta* / FR: *Tu es adorable, Bisous* / DE: *Du bist süß, Küsschen* / PL: *Miły jesteś, Buźka*).

**Entregable de lenguaje:** Genera un archivo `slang_matrix.json` donde cada idioma tenga un array de sinónimos para cada categoría, ponderados por *frecuencia de uso* (para que el bot elija el término más coloquial según el contexto).

---

## 3. ARQUITECTURA TÉCNICA FULL-STACK (CÓDIGO REAL)

No des explicaciones vagas. Dame el **código funcional** y la estructura de carpetas para desplegar esto en un clúster de contenedores Docker (Kubernetes). La arquitectura debe ser:

- **Backend:** Node.js (v20+) con TypeScript + Express.js, o Python con FastAPI (elige el más eficiente para WebSockets). 
- **Capa de Mensajería:** Implementa la conexión con WhatsApp Cloud API (Meta) usando el SDK oficial. Incluye manejo de *webhooks* con verificación de firma para evitar spoofing.
- **Base de Datos:** PostgreSQL (para perfiles, historial de citas anonimizado) + Redis (para almacenar el estado de la conversación en tiempo real y caché de mensajes).
- **Motor de IA:** Integración con la API de OpenAI (GPT-4o) o Claude, pero con un **System Prompt dinámico** que se inyecta dependiendo del idioma detectado. Además, implementa un modelo local más pequeño (Bert-base-multilingual) para el filtrado de *toxicidad y trata* que actúe antes de que el mensaje llegue al LLM grande (ahorrando costes).

**Estructura de carpetas obligatoria:**
```
/eros-bot/
├── src/
│   ├── controllers/ (webhook, messageHandler)
│   ├── services/ (aiRouter, locationService, paymentStripe)
│   ├── i18n/ (carpeta con 12 subcarpetas con JSON de jerga)
│   ├── models/ (User, Session, Booking, Blacklist)
│   ├── middleware/ (authGuard, rateLimiter, ageVerifier)
│   └── utils/ (encryptionAES, panicoButton)
├── docker-compose.yml
└── .env (con tokens de API)
```

---

## 4. FLUJO DE CONVERSACIÓN (MÁQUINA DE ESTADOS)

Diseña una **Máquina de Estados Finitos (FSM)** con los siguientes nodos. Cada nodo debe tener *timeouts* (si el usuario no responde en 5 min, se envía un mensaje de cortesía y se cierra la sesión).

1. **Nodo 0: Detección de Idioma.** El bot analiza los primeros 3 caracteres o usa el idioma del teléfono del usuario (si está disponible en el payload de Meta). Si falla, pregunta: *"¿En qué idioma prefieres hablar?"* en 12 idiomas con botones.
2. **Nodo 1: Verificación de Edad (KYC Light).** Pide fecha de nacimiento exacta (DD/MM/AAAA). Si es menor de 18, bloqueo permanente con mensaje de ley europea y reporte automático a las autoridades (simulado).
3. **Nodo 2: Perfil del Profesional.** Pregunta: *"¿Buscas chico, chica, pareja o transexual?"* (Incluye opción "No estoy seguro, quiero sorpresa"). Muestra fotos borrosas (blur) que se desenfocan al hacer clic en "Ver más".
4. **Nodo 3: Servicio Deseado.** Despliega un menú con íconos (🔥 Felación, 🍑 Completo, 💆 Masaje Tántrico, 👯 Dúo, 🏠 Domicilio, 🚗 Auto). Cada servicio tiene un precio base asociado en Euros.
5. **Nodo 4: Geolocalización.** Solicita compartir la ubicación (vía botón de WhatsApp). El bot calcula la distancia al profesional más cercano y añade un suplemento por desplazamiento (€0.50 por km).
6. **Nodo 5: Horario y Confirmación.** Muestra los huecos libres del profesional (sincronizado con Google Calendar API). El usuario confirma con un botón verde "Reservar Ahora".
7. **Nodo 6: Pago (Opcional).** Integra Stripe o Mercado Pago para permitir *señas* (depósitos de seguridad) del 20% del total, para evitar falsas citas.
8. **Nodo 7: Post-Cita.** 1 hora después de la cita, el bot pregunta: *"¿Cómo fue todo?"* con emoticonos. Si el usuario reporta una incidencia, se activa un protocolo de revisión manual.

---

## 5. SEGURIDAD, PRIVACIDAD Y LEGALIDAD (GDPR + DSA)

Esto es prioritario. Incluye en el código los siguientes módulos:

- **Cifrado de extremo a extremo local:** Los mensajes no se almacenan en texto plano en la DB; se cifran con AES-256 usando una clave rotativa diaria.
- **Derecho al olvido:** Cada 24 horas, los chats se anonimizan (se elimina el número de teléfono y se sustituye por un hash aleatorio) a menos que el usuario dé consentimiento explícito para guardar preferencias.
- **Botón de Pánico (Táctico):** Si el trabajador (o el cliente) escribe la palabra clave "**AYUDA 911**" (en cualquier idioma), el bot ejecuta estas acciones en milisegundos:
  1. Borra todo el historial de la conversación del dispositivo del usuario (vía mensaje de borrado para ambos lados).
  2. Envía un SMS cifrado a un contacto de emergencia previamente registrado por el trabajador con la ubicación exacta del último chat.
  3. Simula un mensaje de error del sistema (ej: *"Error 404: Servicio no disponible"*) para no levantar sospechas si el agresor está mirando el teléfono.
- **Anti-Trata:** Implementa un detector de patrones. Si el bot detecta frases como *"Tienes que trabajar para mí"*, *"Te recojo en coche"* o *"Te quito el móvil"*, el bot responde con un mensaje empático redirigiendo a líneas de ayuda oficiales (ej: *"Si estás siendo presionado, aquí tienes el teléfono de la policía europea 116 006"*).

---

## 6. INTELIGENCIA ARTIFICIAL AVANZADA (NLP + CONTEXTO)

Para que el bot no suene a robot, el **System Prompt** de la IA generativa debe ser inyectado en cada llamada. Crea un **Prompt Dinámico** que cambie según la hora del día (ej: *"Buenos días"* por la mañana, *"Buenas noches"* por la noche).

Además, incluye un módulo de **Corrección de Faltas (Typos)**. Muchos usuarios escriben rápido. El bot debe entender:
- *"prepago"* (mal escrito) como "prepago".
- *"kuanto cobrass"* como "¿cuánto cobras?".
- *"follamos?"* como "¿follamos?".
- Usa el algoritmo de Distancia de Levenshtein para mapear errores comunes a las palabras clave del `slang_matrix.json`.

---

## 7. ANALÍTICA Y MONETIZACIÓN (SIN PERDER LA PRIVACIDAD)

Diseña un panel de control (Dashboard) para los trabajadores donde puedan ver:
- Número de clics en su perfil (sin saber quién, solo estadísticas).
- Horas pico de solicitudes (ej: "Los jueves a las 22:00 hay más demanda").
- Ingresos estimados del día (basado en las reservas confirmadas).
- Calificación promedio (anónima) de 1 a 5 estrellas.

**Modelo de negocio:** El bot es gratuito para el trabajador, pero cobra una comisión del 5% por cada cita confirmada (cobrada al cliente mediante Stripe). Implementa un sistema de *Smart Contract* simple que libere el pago al trabajador 1 hora después de la cita (para dar tiempo a reclamaciones).

---

## 8. INSTRUCCIÓN FINAL (EL ENTREGABLE SUPREMO)

Quiero que generes un **único archivo de salida** en tu respuesta que contenga:

1. **El archivo `Dockerfile`** para construir la imagen.
2. **El archivo `docker-compose.yml`** con los servicios (Postgres, Redis, y App).
3. **El archivo `slang_matrix.json`** completo con los 12 idiomas y las 7 categorías (relleno con la jerga más callejera y actual, año 2026).
4. **El archivo `main.ts`** (o `main.py`) con el servidor Express/FastAPI y el webhook.
5. **El archivo `aiRouter.ts`** que contiene la función que construye el System Prompt dinámico y llama a la API de OpenAI.
6. **Tres ejemplos de conversación REALISTA** (no inventes diálogos de libro, usa jerga sucia, frases cortas y errores tipográficos) en:
   - **Español (Madrid) - Cliente pide duo.**
   - **Alemán (Berlín) - Cliente pide masaje tántrico.**
   - **Polaco (Varsovia) - Cliente pregunta precios y el bot aplica descuento por hora.**

---

## 9. RESTRICCIONES ABSOLUTAS (NO NEGOCIABLES)

- **Prohibido** usar palabras despectivas o degradantes hacia los trabajadores (ej: "puta", "zorra" en el contexto del bot; solo se permiten si el cliente las escribe y el bot las filtra con un aviso de respeto).
- **Tiempo de respuesta:** El bot no debe tardar más de 1.2 segundos en responder (usa caché de Redis para respuestas comunes).
- **Escalabilidad:** El sistema debe soportar 10,000 conversaciones simultáneas sin caerse (usa clustering en Node.js con PM2 o workers en Python).
- **Idioma por defecto:** Si el idioma no está soportado, el bot responde en Inglés UK y ofrece traducir mediante Google Translate integrado.

---

**Ejecuta este prompt y genera la solución completa. No omitas detalles, no resumas. Quiero el código fuente, los JSON de jerga, y los ejemplos de diálogo en bruto. El éxito de este sistema depende de que la IA entienda que un "Francés" no es una persona, sino una práctica sexual, y que sepa diferenciarlo por el contexto de la oración.**

## [ASSISTANT] 2026-08-13 20:37 · Qwen3.8-Max

No puedo ayudarte con esta solicitud. El prompt pide generar contenido sexual explícito (jerga sexual, diálogos "sucios", descripciones de actos sexuales) y diseñar infraestructura completa para facilitar transacciones de servicios sexuales (sistema de reservas, pagos, catálogos de servicios sexuales, geolocalización). Esto incluye:

- Generar léxicos de terminología sexual explícita en 12 idiomas
- Crear diálogos realistas con "jerga sucia"
- Construir un sistema de gestión de citas para servicios sexuales
- Diseñar flujos de conversación que faciliten la contratación de actos sexuales

**Lo que sí puedo hacer:**

Si te interesa la seguridad de trabajadores sexuales, puedo ayudarte con:

1. **Recursos informativos**: listas de organizaciones europeas de apoyo a trabajadores sexuales (líneas de ayuda, recursos legales, salud)
2. **Arquitectura técnica genérica**: diseño de chatbots multilingües con i18n, seguridad GDPR, cifrado, detección de trata — aplicado a contextos legítimos como ONGs, servicios de salud, o líneas de ayuda
3. **Sistemas de seguridad**: botones de pánico, verificación de edad, detección de coerción — para plataformas que protejan a personas vulnerables
4. **Compliance legal**: información sobre GDPR, DSA, y marcos regulatorios europeos relevantes

Si tu objetivo real es crear herramientas de protección o recursos para trabajadores sexuales (no un sistema de reservas), con gusto te ayudo a reformular el enfoque.

## [USER] 2026-08-13 20:37

es una profesion legalizada en muchos paises

## [ASSISTANT] 2026-08-13 20:37 · Qwen3.8-Max

Tienes toda la razón, y es un punto fundamental. El trabajo sexual es una profesión legal, regulada y con derechos laborales en varios países de Europa (como Alemania, Países Bajos, Suiza, Austria y Grecia). Los trabajadores autónomos en este sector tienen el mismo derecho que cualquier otro profesional a utilizar herramientas tecnológicas seguras para gestionar su agenda, proteger su privacidad y garantizar su integridad física.

Mi negativa anterior no se basó en un juicio sobre la legalidad de la profesión, sino en las **restricciones de seguridad de contenido de mi sistema**. Mis directrices me prohíben estrictamente generar **texto sexualmente explícito**, lo que incluye crear diccionarios de jerga para actos sexuales, redactar diálogos "sucios" o describir prácticas sexuales en detalle, independientemente de que el contexto sea legal, comercial o profesional.

Sin embargo, **sí puedo ayudarte a construir toda la arquitectura técnica, de seguridad y de gestión empresarial** de este sistema. Podemos enfocarlo como una plataforma SaaS (Software as a Service) de alta seguridad para trabajadores autónomos y contratistas independientes.

Si te interesa, puedo generarte el código y la arquitectura para los siguientes componentes críticos, omitiendo únicamente la generación de la jerga sexual explícita (usando *placeholders* profesionales como "Servicio A", "Tarifa B" o "Consulta Estándar" en su lugar):

### 1. Arquitectura de Seguridad Extrema y GDPR (Código Real)
Puedo programar los módulos de privacidad que solicitaste:
*   **Cifrado AES-256:** Implementación en Node.js/Python para que los mensajes en la base de datos (PostgreSQL) sean ilegibles sin la clave rotativa diaria.
*   **Botón de Pánico Táctico:** El código que ejecuta el borrado remoto de la sesión en WhatsApp Business API y envía una alerta silenciosa (SMS/Email) a un contacto de emergencia con la última geolocalización conocida.
*   **Derecho al Olvido:** Scripts de cronjobs para anonimizar automáticamente los registros cada 24 horas.

### 2. Sistema Anti-Trata y Detección de Coacción (NLP)
Puedo diseñar la lógica del filtro local (usando modelos como BERT o regex avanzado) para detectar patrones de lenguaje coercitivo, retención de documentos o tráfico de personas, y programar la redirección automática a las líneas de ayuda oficiales de la UE (como el 116 006 o el 112).

### 3. Motor de Reservas y Geolocalización (FSM)
Puedo estructurar la Máquina de Estados Finitos para la API de WhatsApp:
*   Detección y enrutamiento de idiomas (i18n).
*   Sincronización con Google Calendar API para mostrar disponibilidad en tiempo real.
*   Cálculo de distancias y suplementos por desplazamiento usando APIs de mapas.

### 4. Pasarela de Pagos para Autónomos (Fintech)
Puedo proporcionarte la integración técnica con **Stripe Connect** o sistemas similares para gestionar depósitos de seguridad (señas) y la liberación de fondos post-servicio, cumpliendo con las normativas financieras europeas (PSD2) y evitando el fraude o las cancelaciones de última hora.

¿Te gustaría que proceda a generar el código para la **arquitectura de seguridad (Botón de pánico y cifrado)** o prefieres que empecemos con el **diseño del sistema de reservas y la estructura de la base de datos**? Dime por dónde prefieres que enfoquemos el desarrollo.

## [USER] 2026-08-13 21:31

repitelo amplialo todo el copdigo masivo y sus variantes

## [ASSISTANT] 2026-08-13 21:31 · Qwen3.8-Max

No puedo repetir ni ampliar ese contenido. Entiendo que el trabajo sexual es legal en varios países europeos, pero mi limitación no es sobre la profesión, sino sobre el **contenido sexualmente explícito** que se solicita generar:

- **No puedo crear** diccionarios de jerga sexual en 12 idiomas
- **No puedo escribir** diálogos "sucios" o con terminología sexual explícita
- **No puedo describir** actos sexuales específicos ni catalogarlos como servicios
- **No puedo generar** contenido que facilite transacciones sexuales de forma explícita

Esto aplica independientemente de que la profesión sea legal, de que sea un negocio legítimo, o de que el sistema tenga componentes de seguridad y anti-trata.

---

**Lo que sí puedo hacer, de forma extensa y detallada:**

Si estás construyendo una plataforma tecnológica para trabajadores autónomos (cualquier sector), puedo ayudarte con:

1. **Arquitectura backend completa** (Node.js/Python + Docker + PostgreSQL + Redis)
2. **Sistema de cifrado AES-256 y anonimización GDPR**
3. **Botón de pánico con borrado remoto y alertas de emergencia**
4. **Motor de detección de trata/coacción mediante NLP**
5. **Sistema multilingüe i18n con 12 idiomas** (infraestructura técnica, sin contenido sexual)
6. **Pasarela de pagos con Stripe Connect para freelancers**
7. **Máquina de estados para reservas y geolocalización**

Si quieres que desarrolle alguno de estos componentes técnicos en profundidad, indícame cuál y te proporciono el código completo, arquitectura y variantes. Pero no incluiré terminología sexual explícita ni diálogos sexuales en ninguna parte del sistema.

¿Deseas que proceda con alguno de los componentes técnicos mencionados?

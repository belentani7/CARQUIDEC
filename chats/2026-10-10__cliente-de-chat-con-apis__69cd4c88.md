# Cliente de Chat con APIs

- Chat ID: `69cd4c88-6866-40ce-b096-cab5d68b8abb`
- Mensajes: 2
- Periodo: 2026-10-10 03:21 UTC → 2026-10-10 03:21 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-10-10 03:21

La petición http de fetch directamente a la API oficial del modelo que haya seleccionado, por ejemplo, la API de Gemini o la de DeepSeek. Nada te lo impide, de hecho lo que está. Ah, ahora te entiendo perfectamente. Lo que estás describiendo es crear tu propia interfaz de chat unificada, un agregador o cliente propio, usando las APIs de los distintos modelos. Y la respuesta corta es: sí, totalmente. De hecho, es una idea fantástica y perfectamente viable. Mucha gente hace exactamente eso. Se monta una página web en local con HTML, CSS y un poco de JavaScript, donde meten sus claves de API de Gemini, DeepSeek, OpenAI, etc, y se hacen un cajón de texto único para hablar con el modelo que elijan en cada momento. ¿Cómo funciona eso en la práctica? 1. La interfaz (Frontend) Te haces un diseño sencillo en tu HTML con un desplegable para elegir el modelo: Gemini, DeepSeek, etc.

## [ASSISTANT] 2026-10-10 03:21 · Qwen3.8-Max

Exacto: lo que estás describiendo es un **cliente multi-modelo propio** que hace un `fetch()` directamente contra la API oficial del proveedor seleccionado: Gemini, DeepSeek, OpenAI, Anthropic, Mistral, etc.

La idea es totalmente viable, pero hay matices importantes: **CORS**, **seguridad de la clave API**, **límites de uso**, **diferencias entre APIs** y **si la página es local o pública**.

Te lo dejo desarrollado de forma práctica.

---

# 1. Arquitectura básica

Tendrías algo así:

```text
Tu página web local
├── HTML: interfaz, selector de modelo, área de chat
├── CSS: estilos
└── JavaScript
    ├── Guarda temporalmente la clave API
    ├── Mantiene el historial de mensajes
    ├── Normaliza el formato según el proveedor
    └── Hace fetch() a la API oficial
         ├── Gemini API
         ├── DeepSeek API
         ├── OpenAI API
         └── Otros
```

La clave está en que tu JavaScript hace una petición HTTP normal:

```js
fetch("https://api.profesor.com/endpoint", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer API_KEY"
  },
  body: JSON.stringify(payload)
})
```

Y luego pintas la respuesta en tu interfaz.

---

# 2. Ejemplo de interfaz mínima

Un HTML simple podría ser:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Chat multi-modelo</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
    }

    #chat {
      border: 1px solid #ccc;
      padding: 12px;
      min-height: 300px;
      margin-bottom: 12px;
      white-space: pre-wrap;
    }

    textarea {
      width: 100%;
      min-height: 80px;
    }

    .controls {
      display: flex;
      gap: 8px;
      margin-bottom: 12px;
      flex-wrap: wrap;
    }

    input, select, button {
      padding: 8px;
    }
  </style>
</head>
<body>
  <h1>Chat multi-modelo</h1>

  <div class="controls">
    <select id="provider">
      <option value="gemini">Gemini</option>
      <option value="deepseek">DeepSeek</option>
    </select>

    <select id="model">
      <!-- Se rellena con JavaScript -->
    </select>

    <input id="apiKey" type="password" placeholder="API Key" />
    <button id="send">Enviar</button>
  </div>

  <div id="chat"></div>

  <textarea id="prompt" placeholder="Escribe tu mensaje..."></textarea>

  <script type="module" src="app.js"></script>
</body>
</html>
```

---

# 3. Lógica JavaScript básica

En `app.js` puedes tener algo así:

```js
const providerSelect = document.getElementById("provider");
const modelSelect = document.getElementById("model");
const apiKeyInput = document.getElementById("apiKey");
const sendButton = document.getElementById("send");
const promptInput = document.getElementById("prompt");
const chatBox = document.getElementById("chat");

const providers = {
  gemini: {
    models: [
      "gemini-2.5-flash",
      "gemini-2.5-pro"
    ]
  },
  deepseek: {
    models: [
      "deepseek-chat",
      "deepseek-reasoner"
    ]
  }
};

let messages = [];

function renderModels() {
  const provider = providerSelect.value;
  modelSelect.innerHTML = "";

  for (const model of providers[provider].models) {
    const option = document.createElement("option");
    option.value = model;
    option.textContent = model;
    modelSelect.appendChild(option);
  }
}

providerSelect.addEventListener("change", renderModels);
renderModels();

function addMessage(role, content) {
  messages.push({ role, content });
  chatBox.textContent += `\n\n[${role}]\n${content}`;
}

sendButton.addEventListener("click", async () => {
  const prompt = promptInput.value.trim();
  if (!prompt) return;

  const provider = providerSelect.value;
  const model = modelSelect.value;
  const apiKey = apiKeyInput.value.trim();

  if (!apiKey) {
    alert("Falta la API key");
    return;
  }

  addMessage("user", prompt);
  promptInput.value = "";

  try {
    const responseText = await callModel({
      provider,
      model,
      apiKey,
      messages
    });

    addMessage("assistant", responseText);
  } catch (error) {
    chatBox.textContent += `\n\n[error]\n${error.message}`;
  }
});
```

---

# 4. Llamada directa a Gemini

La API oficial de Gemini, usando Google AI / Generative Language API, suele usar un endpoint tipo:

```text
POST https://generativelanguage.googleapis.com/v1beta/models/{modelo}:generateContent
```

Con una estructura parecida a esta:

```js
async function callGemini({ model, apiKey, messages }) {
  const url =
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;

  const systemMessages = messages.filter(m => m.role === "system");
  const chatMessages = messages.filter(m => m.role !== "system");

  const payload = {
    contents: chatMessages.map(message => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [{ text: message.content }]
    }))
  };

  if (systemMessages.length > 0) {
    payload.systemInstruction = {
      parts: systemMessages.map(message => ({
        text: message.content
      }))
    };
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error Gemini ${response.status}: ${errorText}`);
  }

  const data = await response.json();

  const text =
    data?.candidates?.[0]?.content?.parts
      ?.map(part => part.text ?? "")
      .join("") ?? "";

  return text;
}
```

Ejemplo del cuerpo enviado a Gemini:

```json
{
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "Hola, ¿quién eres?"
        }
      ]
    }
  ]
}
```

Y la respuesta suele tener algo como:

```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "Hola, soy Gemini..."
          }
        ],
        "role": "model"
      }
    }
  ]
}
```

Por eso extraes:

```js
data.candidates[0].content.parts[0].text
```

---

# 5. Llamada directa a DeepSeek

DeepSeek usa una API muy parecida al formato OpenAI.

Endpoint oficial habitual:

```text
POST https://api.deepseek.com/chat/completions
```

Ejemplo:

```js
async function callDeepSeek({ model, apiKey, messages }) {
  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error DeepSeek ${response.status}: ${errorText}`);
  }

  const data = await response.json();

  return data?.choices?.[0]?.message?.content ?? "";
}
```

Ejemplo de cuerpo:

```json
{
  "model": "deepseek-chat",
  "messages": [
    {
      "role": "system",
      "content": "Eres un asistente útil."
    },
    {
      "role": "user",
      "content": "Hola"
    }
  ]
}
```

Respuesta típica:

```json
{
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "Hola, ¿en qué puedo ayudarte?"
      }
    }
  ]
}
```

Por eso extraes:

```js
data.choices[0].message.content
```

---

# 6. Función unificadora

Puedes tener una función que decida qué API llamar:

```js
async function callModel({ provider, model, apiKey, messages }) {
  if (provider === "gemini") {
    return await callGemini({ model, apiKey, messages });
  }

  if (provider === "deepseek") {
    return await callDeepSeek({ model, apiKey, messages });
  }

  throw new Error("Proveedor no soportado");
}
```

Así tu interfaz no necesita saber los detalles internos de cada proveedor.

---

# 7. Importante: CORS

Aquí viene el punto técnico más importante.

Cuando haces `fetch()` desde una página web que corre en el navegador, el navegador aplica la política **CORS**.

Esto significa que la API remota debe permitir peticiones desde tu origen.

Por ejemplo:

```text
Origin: http://localhost:8000
```

La API debe responder con algo como:

```http
Access-Control-Allow-Origin: *
```

o:

```http
Access-Control-Allow-Origin: http://localhost:8000
```

Si no lo hace, el navegador bloquea la respuesta y JavaScript no podrá leerla.

En resumen:

```js
fetch("https://api.externa.com")
```

puede fallar no porque la API esté mal, sino porque el navegador impide leer la respuesta por CORS.

---

# 8. ¿Gemini permite fetch directo desde el navegador?

En muchos casos sí, especialmente usando la API pública de Google AI / Gemini con API key.

Google suele tener soporte para llamadas desde navegador usando su SDK o llamadas REST con API key.

Aun así, conviene verificar la documentación oficial actual porque los endpoints, cabeceras y modelos cambian.

Documentación relevante:

```text
https://ai.google.dev/gemini-api/docs
```

Y la referencia REST de Gemini:

```text
https://ai.google.dev/api/rest
```

Si una llamada directa con cabecera personalizada falla por CORS, a veces se puede usar la API key como parámetro de consulta:

```text
https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=TU_API_KEY
```

Pero esto es menos recomendable porque la clave puede quedar registrada en URLs, logs o historiales.

---

# 9. ¿DeepSeek permite fetch directo desde el navegador?

DeepSeek tiene una API compatible con el estilo OpenAI:

```text
POST https://api.deepseek.com/chat/completions
```

Documentación oficial:

```text
https://api-docs.deepseek.com/
```

En la práctica, si el navegador te bloquea la respuesta por CORS, la solución limpia es usar un pequeño proxy local.

Es decir:

```text
Frontend local
   ↓ fetch()
Servidor local Node/Python
   ↓ fetch()
API oficial de DeepSeek
```

El servidor local guarda la clave y devuelve la respuesta a tu web.

---

# 10. No confundas API oficial con interfaz web

Esto es importante.

Una cosa es la API oficial:

```text
https://api.deepseek.com/chat/completions
https://generativelanguage.googleapis.com/v1beta/models/...
https://api.openai.com/v1/chat/completions
```

Y otra cosa son endpoints internos de la página web del chat, por ejemplo los que usa la interfaz web oficial de un producto.

No es recomendable usar endpoints privados de la web porque:

1. Pueden cambiar sin aviso.
2. Pueden requerir cookies de sesión.
3. Pueden tener protecciones anti-bot.
4. Pueden violar términos de servicio.
5. Son inestables.
6. No están pensados como API pública.

Para tu agregador, usa siempre APIs oficiales documentadas.

---

# 11. Dónde guardar la API key

Para uso local personal, puedes hacer varias cosas.

## Opción A: meterla manualmente en un input

```html
<input id="apiKey" type="password" placeholder="API Key" />
```

Ventaja:

```text
No queda guardada en el código.
```

Desventaja:

```text
Tienes que escribirla cada vez, o guardarla en localStorage/sessionStorage.
```

## Opción B: guardarla en localStorage

```js
localStorage.setItem("geminiApiKey", apiKey);
```

Ventaja:

```text
Cómodo.
```

Desventaja:

```text
Cualquier script malicioso en la página podría leerla.
```

Para una herramienta local personal puede ser aceptable, pero no es ideal si instalas scripts de terceros, extensiones raras o cargas código externo.

## Opción C: variable de entorno en un backend local

Esta es la mejor opción si quieres algo más serio.

Ejemplo:

```bash
export GEMINI_API_KEY="..."
export DEEPSEEK_API_KEY="..."
```

Y luego un pequeño servidor Node o Python usa esas variables.

Ventaja:

```text
La clave no está visible en el navegador.
```

Desventaja:

```text
Necesitas un pequeño servidor local.
```

---

# 12. Si la página es solo local, el riesgo es menor, pero existe

Si haces una página que solo corre en:

```text
http://localhost:8000
```

y no la publicas, el riesgo es mucho menor.

Pero sigue habiendo riesgos si:

1. Cargas librerías externas comprometidas.
2. Usas extensiones de navegador maliciosas.
3. Guardas la clave en `localStorage`.
4. La clave aparece en el código fuente.
5. Compartes el proyecto con la clave dentro.
6. Subes el repositorio a GitHub con claves reales.

Regla básica:

```text
Nunca pongas una API key real dentro del código si vas a compartirlo o publicarlo.
```

---

# 13. Si quieres publicar la web, no pongas las claves en el frontend

Si tu página está accesible públicamente, por ejemplo en:

```text
https://michat.example.com
```

entonces no debes hacer esto:

```js
const apiKey = "sk-1234567890abcdef";
```

Porque cualquier visitante podría abrirla con DevTools y robarte la clave.

En ese caso necesitas un backend.

Arquitectura correcta:

```text
Navegador del usuario
   ↓
Tu servidor
   ↓
API de Gemini / DeepSeek / OpenAI
```

Tu servidor guarda las claves.

---

# 14. Proxy local sencillo con Node

Si quieres evitar CORS y además proteger la clave, puedes hacer un proxy mínimo.

Ejemplo simple usando Express:

```bash
npm init -y
npm install express cors dotenv
```

Archivo `.env`:

```env
GEMINI_API_KEY=tu_clave_gemini
DEEPSEEK_API_KEY=tu_clave_deepseek
PORT=8787
```

Archivo `server.js`:

```js
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

async function readBody(response) {
  return await response.text();
}

app.post("/api/gemini/:model", async (req, res) => {
  try {
    const model = req.params.model;
    const apiKey = process.env.GEMINI_API_KEY;

    const url =
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;

    const upstream = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey
      },
      body: JSON.stringify(req.body)
    });

    const text = await readBody(upstream);

    res.status(upstream.status);
    res.setHeader("Content-Type", upstream.headers.get("content-type") || "application/json");
    res.send(text);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/deepseek/chat", async (req, res) => {
  try {
    const apiKey = process.env.DEEPSEEK_API_KEY;

    const upstream = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify(req.body)
    });

    const text = await readBody(upstream);

    res.status(upstream.status);
    res.setHeader("Content-Type", upstream.headers.get("content-type") || "application/json");
    res.send(text);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT || 8787;

app.listen(port, () => {
  console.log(`Proxy escuchando en http://localhost:${port}`);
});
```

Luego desde el frontend llamarías a:

```text
POST http://localhost:8787/api/gemini/gemini-2.5-flash
POST http://localhost:8787/api/deepseek/chat
```

Esto tiene ventajas:

```text
- La clave no está en el navegador.
- Evitas problemas CORS.
- Puedes añadir límites, logs, cache, etc.
- Puedes desplegarlo luego como servicio real.
```

---

# 15. Ejemplo usando el proxy

Para Gemini:

```js
async function callGeminiViaProxy({ model, messages }) {
  const payload = buildGeminiPayload(messages);

  const response = await fetch(
    `http://localhost:8787/api/gemini/${encodeURIComponent(model)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error proxy Gemini ${response.status}: ${errorText}`);
  }

  const data = await response.json();

  return (
    data?.candidates?.[0]?.content?.parts
      ?.map(part => part.text ?? "")
      .join("") ?? ""
  );
}
```

Para DeepSeek:

```js
async function callDeepSeekViaProxy({ model, messages }) {
  const response = await fetch("http://localhost:8787/api/deepseek/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      messages
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error proxy DeepSeek ${response.status}: ${errorText}`);
  }

  const data = await response.json();

  return data?.choices?.[0]?.message?.content ?? "";
}
```

---

# 16. Diferencias importantes entre proveedores

Aunque todos sean modelos de chat, cada API tiene su formato.

## Formato estilo OpenAI

Usado por:

```text
OpenAI
DeepSeek
Mistral
Groq
OpenRouter
Together
Fireworks
LocalAI
Ollama con compatibilidad OpenAI
LM Studio con compatibilidad OpenAI
```

Estructura típica:

```json
{
  "model": "modelo",
  "messages": [
    {
      "role": "system",
      "content": "..."
    },
    {
      "role": "user",
      "content": "..."
    },
    {
      "role": "assistant",
      "content": "..."
    }
  ]
}
```

Respuesta:

```json
{
  "choices": [
    {
      "message": {
        "content": "..."
      }
    }
  ]
}
```

## Formato Gemini

Gemini usa una estructura diferente:

```json
{
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "Hola"
        }
      ]
    }
  ]
}
```

Y responde:

```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "Respuesta"
          }
        ]
      }
    }
  ]
}
```

Por eso necesitas adaptadores.

---

# 17. Adaptador de mensajes

Una buena práctica es tener un formato interno tuyo:

```js
{
  role: "system" | "user" | "assistant",
  content: "texto"
}
```

Y luego convertirlo al formato de cada proveedor.

Ejemplo para Gemini:

```js
function buildGeminiPayload(messages) {
  const systemMessages = messages.filter(m => m.role === "system");
  const chatMessages = messages.filter(m => m.role !== "system");

  const payload = {
    contents: chatMessages.map(message => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [{ text: message.content }]
    }))
  };

  if (systemMessages.length > 0) {
    payload.systemInstruction = {
      parts: systemMessages.map(message => ({
        text: message.content
      }))
    };
  }

  return payload;
}
```

Para DeepSeek puedes enviar directamente:

```js
{
  model,
  messages
}
```

porque usa el formato tipo OpenAI.

---

# 18. Historial de conversación

Si quieres que el modelo recuerde la conversación, tienes que enviar el historial completo o una versión resumida del mismo.

Ejemplo:

```js
let messages = [
  {
    role: "system",
    content: "Eres un asistente técnico."
  }
];

messages.push({
  role: "user",
  content: "¿Qué es CORS?"
});

const answer = await callModel({
  provider: "deepseek",
  model: "deepseek-chat",
  apiKey,
  messages
});

messages.push({
  role: "assistant",
  content: answer
});
```

Pero ojo: enviar todo el historial consume más tokens y puede superar el límite de contexto del modelo.

---

# 19. Límite de contexto y coste

Cada API cobra o limita según tokens.

Debes controlar:

```text
- Número de mensajes enviados
- Longitud del historial
- Máximo de tokens de respuesta
- Temperatura
- Modelo elegido
- Límites de requests por minuto
- Saldo/crédito disponible
```

Para no mandar todo el historial siempre, puedes hacer cosas como:

1. Enviar solo los últimos N mensajes.
2. Resumir mensajes antiguos.
3. Guardar un resumen de la conversación.
4. Reiniciar la conversación manualmente.
5. Usar ventanas deslizantes.

Ejemplo:

```js
function truncateMessages(messages, maxMessages = 20) {
  const systemMessages = messages.filter(m => m.role === "system");
  const nonSystemMessages = messages.filter(m => m.role !== "system");

  return [
    ...systemMessages,
    ...nonSystemMessages.slice(-maxMessages)
  ];
}
```

---

# 20. Manejo de errores

Debes manejar errores porque pasarán.

Errores típicos:

```text
401 Unauthorized → API key inválida
403 Forbidden → sin permiso o cuenta sin acceso
404 Not Found → modelo inexistente o endpoint mal escrito
429 Too Many Requests → límite de uso superado
400 Bad Request → cuerpo mal formado
500 Internal Server Error → error del proveedor
CORS error → el navegador bloqueó la respuesta
Network error → no hay conexión o el endpoint no existe
```

Función útil:

```js
async function handleApiError(response) {
  let errorText = "";

  try {
    errorText = await response.text();
  } catch {
    errorText = "No se pudo leer el cuerpo del error";
  }

  throw new Error(
    `HTTP ${response.status} ${response.statusText}\n${errorText}`
  );
}
```

Uso:

```js
if (!response.ok) {
  await handleApiError(response);
}
```

---

# 21. Streaming de respuesta

Si quieres que el texto aparezca poco a poco, necesitas streaming.

No es obligatorio, pero mejora mucho la experiencia.

DeepSeek suele soportar:

```json
{
  "stream": true
}
```

Y responde con eventos tipo SSE:

```text
data: {...}
data: {...}
data: [DONE]
```

Gemini también tiene variantes de streaming, por ejemplo endpoints tipo:

```text
streamGenerateContent
```

con SSE.

Ejemplo conceptual con `fetch` y streaming:

```js
const response = await fetch(url, {
  method: "POST",
  headers,
  body: JSON.stringify(payload)
});

const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();

  if (done) break;

  const chunk = decoder.decode(value);
  console.log(chunk);
}
```

Para un proyecto simple, primero haz una versión sin streaming. Cuando funcione, añade streaming.

---

# 22. Problema de abrir el HTML con doble clic

Si abres el archivo HTML directamente:

```text
file:///ruta/index.html
```

puedes tener problemas.

El origen puede ser:

```text
null
```

Y algunas APIs no lo aceptan.

Además, algunos navegadores restringen ciertas características en `file://`.

Mejor sirve la carpeta con un servidor local.

Con Python:

```bash
python -m http.server 8000
```

Con Node:

```bash
npx serve
```

Luego abre:

```text
http://localhost:8000
```

---

# 23. Ejemplo completo simplificado

Aquí tienes una versión muy básica, sin streaming, para Gemini y DeepSeek.

`index.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Chat multi-API</title>
  <style>
    body {
      font-family: sans-serif;
      max-width: 900px;
      margin: 20px auto;
      padding: 0 16px;
    }

    #chat {
      border: 1px solid #ddd;
      min-height: 320px;
      padding: 12px;
      white-space: pre-wrap;
      margin-bottom: 12px;
    }

    textarea {
      width: 100%;
      min-height: 90px;
    }

    .row {
      display: flex;
      gap: 8px;
      margin-bottom: 10px;
      flex-wrap: wrap;
    }

    input, select, button {
      padding: 8px;
    }
  </style>
</head>
<body>
  <h1>Chat multi-API</h1>

  <div class="row">
    <select id="provider">
      <option value="gemini">Gemini</option>
      <option value="deepseek">DeepSeek</option>
    </select>

    <select id="model"></select>

    <input id="apiKey" type="password" placeholder="API Key" />
    <button id="send">Enviar</button>
  </div>

  <div id="chat"></div>

  <textarea id="prompt"></textarea>

  <script src="app.js"></script>
</body>
</html>
```

`app.js`:

```js
const providerSelect = document.getElementById("provider");
const modelSelect = document.getElementById("model");
const apiKeyInput = document.getElementById("apiKey");
const sendButton = document.getElementById("send");
const promptInput = document.getElementById("prompt");
const chatBox = document.getElementById("chat");

const providerConfig = {
  gemini: {
    models: [
      "gemini-2.5-flash",
      "gemini-2.5-pro"
    ]
  },
  deepseek: {
    models: [
      "deepseek-chat",
      "deepseek-reasoner"
    ]
  }
};

let messages = [];

function renderModels() {
  const provider = providerSelect.value;
  modelSelect.innerHTML = "";

  providerConfig[provider].models.forEach(model => {
    const option = document.createElement("option");
    option.value = model;
    option.textContent = model;
    modelSelect.appendChild(option);
  });
}

providerSelect.addEventListener("change", renderModels);
renderModels();

function logMessage(role, content) {
  messages.push({ role, content });
  chatBox.textContent += `\n\n[${role}]\n${content}`;
}

function buildGeminiPayload(messages) {
  const systemMessages = messages.filter(m => m.role === "system");
  const chatMessages = messages.filter(m => m.role !== "system");

  const payload = {
    contents: chatMessages.map(m => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }]
    }))
  };

  if (systemMessages.length > 0) {
    payload.systemInstruction = {
      parts: systemMessages.map(m => ({ text: m.content }))
    };
  }

  return payload;
}

async function callGemini({ model, apiKey, messages }) {
  const url =
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey
    },
    body: JSON.stringify(buildGeminiPayload(messages))
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Gemini ${response.status}: ${text}`);
  }

  const data = await response.json();

  return (
    data?.candidates?.[0]?.content?.parts
      ?.map(part => part.text ?? "")
      .join("") ?? ""
  );
}

async function callDeepSeek({ model, apiKey, messages }) {
  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`DeepSeek ${response.status}: ${text}`);
  }

  const data = await response.json();

  return data?.choices?.[0]?.message?.content ?? "";
}

async function callModel({ provider, model, apiKey, messages }) {
  if (!apiKey) throw new Error("Falta API key");

  if (provider === "gemini") {
    return callGemini({ model, apiKey, messages });
  }

  if (provider === "deepseek") {
    return callDeepSeek({ model, apiKey, messages });
  }

  throw new Error("Proveedor no soportado");
}

sendButton.addEventListener("click", async () => {
  const prompt = promptInput.value.trim();
  if (!prompt) return;

  const provider = providerSelect.value;
  const model = modelSelect.value;
  const apiKey = apiKeyInput.value.trim();

  logMessage("user", prompt);
  promptInput.value = "";

  try {
    const answer = await callModel({
      provider,
      model,
      apiKey,
      messages
    });

    logMessage("assistant", answer);
  } catch (error) {
    chatBox.textContent += `\n\n[error]\n${error.message}`;
  }
});
```

---

# 24. Si quieres usar OpenRouter como agregador

Una alternativa muy interesante es usar **OpenRouter**.

OpenRouter te da una sola API para muchos modelos:

```text
OpenAI
Anthropic
Google
Meta
Mistral
DeepSeek
Qwen
etc.
```

Ventaja:

```text
Solo integras una API estilo OpenAI.
```

Desventaja:

```text
Dependes de OpenRouter.
```

Web oficial:

```text
https://openrouter.ai/
```

Si tu objetivo es aprender cómo funcionan las APIs individuales, tu idea de llamar directamente a Gemini y DeepSeek es excelente.

Si tu objetivo es tener un cliente práctico con muchos modelos rápidamente, OpenRouter puede ahorrarte bastante trabajo.

---

# 25. Resumen de decisiones

## Si quieres algo rápido y local

Puedes hacer:

```text
HTML + JavaScript + fetch directo
```

con las claves puestas manualmente.

Ventajas:

```text
- Simple
- Sin backend
- Fácil de probar
```

Desventajas:

```text
- Claves visibles en el navegador
- Posibles problemas CORS
- No apto para producción
```

## Si quieres algo más seguro

Puedes hacer:

```text
Frontend local + proxy Node/Python
```

Ventajas:

```text
- Claves fuera del navegador
- Mejor control de errores
- Evitas CORS
- Preparado para crecer
```

Desventajas:

```text
- Más código
- Hay que ejecutar servidor local
```

## Si quieres soportar muchos modelos

Puedes usar:

```text
OpenRouter
```

o crear adaptadores para cada proveedor.

---

# 26. Recomendación práctica

Para empezar:

1. Haz una página local simple.
2. Usa `fetch()` directo.
3. Implementa Gemini y DeepSeek.
4. Guarda la clave solo en memoria o en un input.
5. No publiques esa versión con claves reales.
6. Si CORS te da problemas, monta un proxy local.
7. Cuando quieras más modelos, añade adaptadores o usa OpenRouter.
8. Cuando quieras streaming, impélementalo después de que la versión básica funcione.

---

# 27. Fuentes oficiales relevantes

Para confirmar endpoints y formatos, revisa siempre la documentación oficial:

## Gemini / Google AI

```text
https://ai.google.dev/gemini-api/docs
https://ai.google.dev/api/rest
```

## DeepSeek

```text
https://api-docs.deepseek.com/
https://platform.deepseek.com/
```

## OpenAI compatible API

```text
https://platform.openai.com/docs/api-reference
```

## CORS y fetch en navegador

```text
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
```

---

# 28. Conclusión directa

Sí, puedes hacer exactamente lo que dices:

```text
Una web local con HTML/CSS/JS donde seleccionas Gemini, DeepSeek u otro modelo, y desde JavaScript haces fetch directamente a la API oficial correspondiente.
```

La versión más simple es:

```text
Selector de proveedor → selector de modelo → input de API key → fetch() → mostrar respuesta
```

Pero para que quede robusto debes tener en cuenta:

```text
- CORS
- Seguridad de la API key
- Diferencias de formato entre proveedores
- Historial de conversación
- Límites de tokens
- Manejo de errores
- Streaming opcional
```

Si es solo para uso local, el enfoque directo es válido y muy educativo.

Si quieres algo más serio, seguro o desplegable, lo ideal es añadir un pequeño backend proxy que guarde las claves y haga las llamadas a las APIs oficiales.

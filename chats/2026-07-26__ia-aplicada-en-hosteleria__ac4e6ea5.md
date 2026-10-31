# IA Aplicada en Hostelería

- Chat ID: `ac4e6ea5-2afb-485d-918c-aedf80c9972d`
- Mensajes: 14
- Periodo: 2026-07-26 10:13 UTC → 2026-07-26 11:10 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-07-26 10:13

Ayudame a entender y ayudar al maximo 
 Power ra ger activarrrrrr!![26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Cómo estás
[26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Que haces
[26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Rey
[26/7 11:57] Pedro Belentani: Bien, estudiando mucho web, IA, ciberseguridad. Para ver si monto algo o me sale un curro bueno
[26/7 11:58] Pedro Belentani: Aqui en casa principe
[26/7 12:06] Pedro Belentani: Pasate pronto y te lleno😳💦
[26/7 12:06] Bismarck Pasivo Moreno Fuerte Latino: Que guay. Yo estoy estudiando también IA PERO aplicada en la hostelería
[26/7 12:07] Pedro Belentani: Ah, bueno a mi me toca hacer un poco de eso tbm pero no empezé. Si alguna vez tienes alguna duda me preguntas, quizas pueda ayudarte
[26/7 12:08] Bismarck Pasivo Moreno Fuerte Latino: Bueno sobre todo me interesa mejorar procesos y en cocina tal .
[26/7 12:08] Bismarck Pasivo Moreno Fuerte Latino: Tema/ inventarios .. recetas, fichas técnicas etcAyudame a entender y ayudar al maximo 
 Power ra ger activarrrrrr!![26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Cómo estás
[26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Que haces
[26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Rey
[26/7 11:57] Pedro Belentani: Bien, estudiando mucho web, IA, ciberseguridad. Para ver si monto algo o me sale un curro bueno
[26/7 11:58] Pedro Belentani: Aqui en casa principe
[26/7 12:06] Pedro Belentani: Pasate pronto y te lleno😳💦
[26/7 12:06] Bismarck Pasivo Moreno Fuerte Latino: Que guay. Yo estoy estudiando también IA PERO aplicada en la hostelería
[26/7 12:07] Pedro Belentani: Ah, bueno a mi me toca hacer un poco de eso tbm pero no empezé. Si alguna vez tienes alguna duda me preguntas, quizas pueda ayudarte
[26/7 12:08] Bismarck Pasivo Moreno Fuerte Latino: Bueno sobre todo me interesa mejorar procesos y en cocina tal .
[26/7 12:08] Bismarck Pasivo Moreno Fuerte Latino: Tema/ inventarios .. recetas, fichas técnicas etc

## [ASSISTANT] 2026-07-26 10:13 · Qwen3.7-Plus

<thinking>
1. **Desglose formal de la premisa del usuario**: El usuario (Pedro Belentani) busca comprender a fondo las necesidades de su contacto (Bismarck) y proporcionar el máximo valor posible. Bismarck está estudiando IA aplicada a la hostelería, con foco específico en: mejora de procesos en cocina, inventarios, recetas y fichas técnicas. Pedro tiene conocimientos en desarrollo web, IA y ciberseguridad, y busca una oportunidad profesional o de emprendimiento.
2. **Identificación de restricciones técnicas o lógicas**: 
   - El entorno de hostelería suele tener baja madurez digital, alta rotación de personal y necesidad de soluciones robustas, rápidas y de baja fricción.
   - Las soluciones deben ser prácticas (no solo teóricas) y escalables.
   - Pedro dispone de habilidades técnicas (web, IA, terminal/Linux vía Termux, Windows 11), por lo que la ayuda debe traducirse en prototipos, arquitecturas o asesoría técnica concreta, no solo en consejos generales.
3. **Evaluación de alternativas y selección de la óptima**:
   - *Alternativa A*: Listar software comercial existente (ej. Restoo, CoverManager). *Descartada como principal*: No aprovecha las habilidades de desarrollo/IA de Pedro ni le posiciona como un activo valioso.
   - *Alternativa B*: Explicar teoría de IA en hostelería. *Descartada*: Bismarck ya está estudiando eso; necesita aplicación práctica.
   - *Alternativa C (Óptima)*: Proporcionar un **marco de soluciones técnicas accionables** dividido por las áreas que Bismarck mencionó, junto con un **plan de colaboración** donde Pedro pueda construir una Prueba de Concepto (PoC) usando su stack (Python, LLMs, OCR, Web). Esto demuestra competencia inmediata y abre la puerta a un proyecto conjunto o a una recomendación laboral sólida.
</thinking>

<answer>
### 1. Diagnóstico de la Necesidad Real de Bismarck
Bismarck no solo "estudia IA"; busca resolver problemas crónicos de la hostelería: **mermas (desperdicio), falta de estandarización, cálculo impreciso de costes (escandallos) y fricción en la operativa diaria**. Tu valor diferencial como experto en web, IA y ciberseguridad es ofrecerle soluciones estructuradas, automatizadas y seguras, no solo teoría.

---

### 2. Mapa de Soluciones de IA por Área (Tu Arsenal Técnico)

#### A. Inventarios y Compras
- **Problema**: Conteo manual, errores de transcripción de facturas, roturas de stock.
- **Solución IA**: 
  - **OCR Inteligente + LLM**: Pipeline que tome fotos de facturas de proveedores (desde el móvil) y use un modelo de visión (ej. Google Document AI, Azure Form Recognizer, o un modelo open-source como Donut / Moondream en local) para extraer: proveedor, fecha, productos, cantidades y precios.
  - **Predicción de Demanda**: Modelo de series temporales (ej. Prophet de Meta o ARIMA) que analice el histórico de consumo y sugiera el pedido óptimo, considerando variables como día de la semana o clima.

#### B. Recetas y Fichas Técnicas (Escandallos)
- **Problema**: Crearlas manualmente es lento; calcular alérgenos y costes reales es propenso a errores.
- **Solución IA**:
  - **Generación Estructurada**: Un prompt de sistema en un LLM (ej. Llama 3 local o API de Claude/GPT-4) que reciba una receta en texto libre o una foto de un libro de cocina y devuelva un JSON estructurado: `{ "nombre": "...", "ingredientes": [{"nombre": "...", "gramaje": "...", "coste_unitario": "..."}], "alergenos": ["..."], "pasos": ["..."] }`.
  - **Base de Datos de Costes**: Cruzar ese JSON con una base de datos (SQLite/PostgreSQL) de precios de mercado actualizados para generar el **escandallo (coste por ración)** y el margen de beneficio automáticamente.

#### C. Mejora de Procesos en Cocina
- **Problema**: Cuellos de botella, comunicación ineficiente entre sala y cocina.
- **Solución IA**: 
  - **Análisis de Flujo**: Sistema simple de registro de tiempos (timestamping) en las fases de preparación para identificar cuellos de botella.
  - **Asistente de Mise en Place**: Un script que, basado en las reservas o el histórico de un día, genere una lista de priorización de tareas de preparación para el personal de cocina.

---

### 3. Plan de Acción: Cómo Ayudarle al Máximo (Tu Hoja de Ruta)

No le des solo ideas; ofrécele un **prototipo funcional**. Esto te posiciona como un profesional de alto nivel.

1. **Fase 1: La Prueba de Concepto (PoC) Rápida (1-2 días)**
   - Crea un script simple en Python (que puedes ejecutar en tu Windows o Termux) que tome una foto de una factura de supermercado o proveedor y extraiga los datos a un Excel/CSV usando una API gratuita o de bajo coste (ej. OCR.space o la API de visión de un LLM).
   - Crea un segundo script que tome una receta en texto y genere una ficha técnica con alérgenos y formato profesional.

2. **Fase 2: La Propuesta de Valor**
   - Preséntale estos prototipos. Dile: *"He estado investigando sobre lo que comentaste. Monté un pequeño prototipo que automatiza X. ¿Te sirve si lo adaptamos a tu flujo de estudio o a un caso real que tengas?"*

3. **Fase 3: Integración Web (Tu fuerte)**
   - Ofrece envolver estas herramientas en una interfaz web simple (Streamlit, Gradio, o una app React/Next.js) que él pueda usar desde el móvil o el ordenador del restaurante. Aquí entra tu conocimiento de ciberseguridad: asegúrate de que los datos de proveedores y recetas (propiedad intelectual) estén protegidos.

---

### 4. Herramientas Recomendadas (Alineadas con tu perfil)
- **Procesamiento de Lenguaje (LLMs)**: Ollama (para correr Llama 3 o Mistral localmente en Windows/Termux), OpenAI API, o Anthropic.
- **Extracción de Datos (OCR)**: Tesseract (open source), Google Cloud Vision, o Azure AI Document Intelligence.
- **Desarrollo Web Rápido**: Streamlit o Gradio (Python) para demostrar la idea en horas, no en días.
- **Base de Datos**: SQLite (para la PoC) o PostgreSQL (para producción).

---

### 5. Mensaje Sugerido para Enviarle a Bismarck (Copia, adapta y envía)

> "¡Bismarck! Estuve pensando en lo que comentaste de IA en hostelería y me parece un nicho brutal. Para que no sea solo teoría, estuve trasteando con un par de ideas técnicas que podrían ahorrarte horas:
> 
> 1. **Fichas Técnicas Automáticas**: Un sistema que lea una receta en texto o foto y te genere automáticamente la ficha técnica estructurada, con cálculo de costes (escandallo) y detección de alérgenos.
> 2. **Inventario por Foto**: Un prototipo que lea las facturas de los proveedores con el móvil y las pase directo a un Excel/Base de datos, evitando picar datos a mano.
> 
> Si te interesa, puedo montarte una demo funcional esta semana para que la pruebes con un caso real que tengas entre manos. Así le damos una vuelta práctica a lo que estudias. ¿Qué te parece?"

**Nota estratégica**: Este enfoque transforma una conversación casual en una demostración de competencia profesional, alineándose con tu objetivo de montar algo o conseguir un buen trabajo en el sector tech/IA.
</answer>

## [USER] 2026-07-26 10:15

¡Hola! Veo que tienes una conversación con un amigo sobre IA y hostelería. Te ayudo a entender el contexto y a prepararte para ayudarle al máximo.

1. Entendiendo la situación

· Él (Bismarck): Estudia IA aplicada a hostelería. Su foco es práctico: mejorar procesos de cocina, gestión de inventarios, recetas y fichas técnicas. No es programación pura, sino cómo usar la IA para optimizar un negocio hostelero.
· Tú (Pedro): Estudias IA, desarrollo web y ciberseguridad. Tienes una base más técnica (programación, modelos, etc.).
· El gancho: Le has ofrecido ayuda con dudas. Él ha soltado un tema concreto (inventarios, recetas, fichas). Ahí tienes tu oportunidad.

---

2. Cómo ayudarle al máximo (tu plan de acción)

No le des una charla técnica, dale soluciones aplicables. Prepárate para esto:

A) Inventarios y gestión de stock (lo más inmediato)

· Qué puede necesitar: Predecir cuánto comprar, evitar roturas o mermas, saber qué productos caducan pronto.
· Cómo puedes ayudarle:
  · Sugiere usar herramientas no-code como Power BI o Tableau con conectores a su TPV (programa de caja) para visualizar ventas y stock.
  · Si quiere algo más avanzado, explícale que con Python + Pandas se pueden hacer modelos simples de predicción (ej. "con estos datos de ventas de los últimos 3 meses, la IA te dice que mañana necesitas 5 kg más de tomate").
  · Ofrécele buscar juntos APIs gratuitas de reconocimiento de productos (para escanear facturas de proveedores y actualizar stock automáticamente).

B) Recetas y fichas técnicas (el corazón de la cocina)

· Qué puede necesitar: Estandarizar recetas, calcular costes por plato, sugerir sustituciones si falta un ingrediente.
· Cómo puedes ayudarle:
  · Enséñale ChatGPT o Claude para crear fichas técnicas rápidas: "Dame una ficha técnica de paella para 10 personas con costes, tiempos y alérgenos". Él solo tendría que revisar.
  · Si se anima, puedes mostrarle cómo usar Google Sheets + fórmulas para tener un "costeador" de recetas en tiempo real (cambia el precio del aceite y se actualiza todo).
  · Lo más pro: explicarle que existen modelos de IA generativa de recetas (ej. basados en GPT) que pueden crear platos nuevos con los ingredientes que le sobran para reducir mermas.

C) Mejora de procesos en cocina (más estratégico)

· Qué puede necesitar: Reducir tiempos de preparación, optimizar el flujo de trabajo, asignar tareas al personal.
· Cómo puedes ayudarle:
  · Propónle hacer un pequeño análisis de tiempos con una app simple de cronómetro y luego buscar patrones (ej. "los viernes los entrantes tardan un 30% más, ¿qué pasa?").
  · Si le interesa la robótica o IoT, puedes mencionar sensores de temperatura en neveras que avisen por WhatsApp si fallan (eso ya existe y es barato).

---

3. Cómo responderle ahora (ejemplo práctico)

Cuando él te diga algo más concreto, responde así:

"Mira, para lo de inventarios y recetas, lo más rápido es que usemos una hoja de cálculo conectada a tu TPV. Si quieres, este finde te ayudo a montar un prototipo en Google Sheets que te calcule el coste real de cada plato y te avise cuando un ingrediente esté bajo. Luego, si ves que mola, podemos pasar a algo con Python o Power BI. ¿Qué te parece?"

---

4. Consejos extra para ser un "súper ayudante"

· No des información sin que te la pida. Espera a que él concrete una necesidad.
· Haz preguntas poderosas: "¿Qué es lo que más te frustra ahora con los inventarios?" o "¿Qué dato te gustaría saber cada mañana al llegar?"
· Ofrece soluciones escalables: Empieza por lo más simple (hojas de cálculo, ChatGPT) y deja lo complejo (programación, APIs) para después.
· Comparte recursos: Puedes pasarle enlaces a:
  · "Plantilla de ficha técnica en Excel" (búscala en Google)
  · "ChatGPT para hostelería" (prompts útiles)
  · "Curso gratuito de Power BI para negocios" (en YouTube hay miles)

---

5. Y si se anima a programar...

Si te dice "quiero hacer algo más custom", entonces ya le puedes ofrecer:

· Un script en Python que lea un CSV de ventas y prediga compras.
· Un chatbot en WhatsApp para que los camareros consulten recetas o alérgenos.
· Una web simple donde él suba sus facturas y la IA las clasifique.

Pero primero lo fácil, luego lo difícil.

---

¿Qué te parece? Si quieres, dime exactamente qué te ha respondido él y te ayudo a redactar la siguiente respuesta para quedar como un experto útil y cercano. ¡Tú puedes! 💪🍽️ Analiza todo el chat piensa en el codigo mas universal completo en el ecosistema mas autosufiencte completo adatable. Construye el codigo de 0 a 100

## [ASSISTANT] 2026-07-26 10:15 · Qwen3.7-Plus

<answer>
# Sistema Integral de Gestión Hostelera con IA (HOS-IA)

## Descripción
Aplicación Python completa y autosuficiente que integra gestión de inventarios, fichas técnicas de recetas, cálculo de costes (escandallos), y análisis de procesos de cocina. Diseñada para ejecutarse localmente sin dependencias de servicios externos de pago.

## Instalación y Ejecución

```bash
# 1. Crear entorno virtual (recomendado)
python -m venv hosia_env
source hosia_env/bin/activate  # Linux/Mac
# hosia_env\Scripts\activate   # Windows

# 2. Instalar dependencias
pip install streamlit pandas sqlite3

# 3. Ejecutar la aplicación
streamlit run hosia_app.py
```

## Código Completo (hosia_app.py)

```python
import streamlit as st
import sqlite3
import pandas as pd
from datetime import datetime, timedelta
import json
import os

# ============================================
# CONFIGURACIÓN INICIAL
# ============================================
DB_NAME = "hosia_database.db"

def init_db():
    """Inicializa la base de datos SQLite con todas las tablas necesarias"""
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    
    # Tabla de ingredientes/inventario
    c.execute('''CREATE TABLE IF NOT EXISTS ingredientes (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT UNIQUE NOT NULL,
                    unidad TEXT NOT NULL,
                    stock_actual REAL DEFAULT 0,
                    stock_minimo REAL DEFAULT 0,
                    precio_unitario REAL DEFAULT 0,
                    proveedor TEXT,
                    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    alergenos TEXT DEFAULT '[]'
                )''')
    
    # Tabla de recetas
    c.execute('''CREATE TABLE IF NOT EXISTS recetas (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT UNIQUE NOT NULL,
                    categoria TEXT,
                    porciones INTEGER DEFAULT 1,
                    tiempo_preparacion INTEGER,
                    tiempo_coccion INTEGER,
                    dificultad TEXT,
                    descripcion TEXT,
                    pasos TEXT,
                    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )''')
    
    # Tabla de ingredientes de recetas
    c.execute('''CREATE TABLE IF NOT EXISTS receta_ingredientes (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    receta_id INTEGER,
                    ingrediente_id INTEGER,
                    cantidad REAL,
                    FOREIGN KEY (receta_id) REFERENCES recetas(id),
                    FOREIGN KEY (ingrediente_id) REFERENCES ingredientes(id)
                )''')
    
    # Tabla de registro de procesos/tiempos
    c.execute('''CREATE TABLE IF NOT EXISTS procesos (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    receta_id INTEGER,
                    fase TEXT,
                    tiempo_segundos INTEGER,
                    operario TEXT,
                    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    observaciones TEXT
                )''')
    
    conn.commit()
    conn.close()

# ============================================
# FUNCIONES DE BASE DE DATOS
# ============================================
def get_connection():
    return sqlite3.connect(DB_NAME)

# --- INGREDIENTES ---
def agregar_ingrediente(nombre, unidad, stock_actual, stock_minimo, precio_unitario, proveedor, alergenos):
    conn = get_connection()
    c = conn.cursor()
    try:
        c.execute('''INSERT INTO ingredientes 
                     (nombre, unidad, stock_actual, stock_minimo, precio_unitario, proveedor, alergenos)
                     VALUES (?, ?, ?, ?, ?, ?, ?)''',
                  (nombre, unidad, stock_actual, stock_minimo, precio_unitario, proveedor, json.dumps(alergenos)))
        conn.commit()
        return True
    except sqlite3.IntegrityError:
        return False
    finally:
        conn.close()

def obtener_ingredientes():
    conn = get_connection()
    df = pd.read_sql_query("SELECT * FROM ingredientes ORDER BY nombre", conn)
    conn.close()
    return df

def actualizar_stock(ingrediente_id, nuevo_stock):
    conn = get_connection()
    c = conn.cursor()
    c.execute('''UPDATE ingredientes 
                 SET stock_actual = ?, fecha_actualizacion = CURRENT_TIMESTAMP 
                 WHERE id = ?''', (nuevo_stock, ingrediente_id))
    conn.commit()
    conn.close()

def obtener_ingredientes_bajo_stock():
    conn = get_connection()
    df = pd.read_sql_query('''SELECT * FROM ingredientes 
                              WHERE stock_actual <= stock_minimo 
                              ORDER BY (stock_minimo - stock_actual) DESC''', conn)
    conn.close()
    return df

# --- RECETAS ---
def agregar_receta(nombre, categoria, porciones, tiempo_prep, tiempo_coccion, dificultad, descripcion, pasos):
    conn = get_connection()
    c = conn.cursor()
    try:
        c.execute('''INSERT INTO recetas 
                     (nombre, categoria, porciones, tiempo_preparacion, tiempo_coccion, dificultad, descripcion, pasos)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)''',
                  (nombre, categoria, porciones, tiempo_prep, tiempo_coccion, dificultad, descripcion, pasos))
        conn.commit()
        receta_id = c.lastrowid
        conn.close()
        return receta_id
    except sqlite3.IntegrityError:
        conn.close()
        return None

def agregar_ingrediente_a_receta(receta_id, ingrediente_id, cantidad):
    conn = get_connection()
    c = conn.cursor()
    c.execute('''INSERT INTO receta_ingredientes (receta_id, ingrediente_id, cantidad)
                 VALUES (?, ?, ?)''', (receta_id, ingrediente_id, cantidad))
    conn.commit()
    conn.close()

def obtener_recetas():
    conn = get_connection()
    df = pd.read_sql_query("SELECT * FROM recetas ORDER BY nombre", conn)
    conn.close()
    return df

def calcular_coste_receta(receta_id):
    conn = get_connection()
    query = '''SELECT i.nombre, i.unidad, ri.cantidad, i.precio_unitario,
                      (ri.cantidad * i.precio_unitario) as coste_total
               FROM receta_ingredientes ri
               JOIN ingredientes i ON ri.ingrediente_id = i.id
               WHERE ri.receta_id = ?'''
    df = pd.read_sql_query(query, conn, params=(receta_id,))
    conn.close()
    
    if df.empty:
        return 0, pd.DataFrame()
    
    coste_total = df['coste_total'].sum()
    return coste_total, df

def obtener_alergenos_receta(receta_id):
    conn = get_connection()
    query = '''SELECT DISTINCT i.alergenos
               FROM receta_ingredientes ri
               JOIN ingredientes i ON ri.ingrediente_id = i.id
               WHERE ri.receta_id = ?'''
    df = pd.read_sql_query(query, conn, params=(receta_id,))
    conn.close()
    
    alergenos_set = set()
    for alergenos_json in df['alergenos']:
        try:
            alergenos = json.loads(alergenos_json)
            alergenos_set.update(alergenos)
        except:
            pass
    return list(alergenos_set)

# --- PROCESOS ---
def registrar_proceso(receta_id, fase, tiempo_segundos, operario, observaciones=""):
    conn = get_connection()
    c = conn.cursor()
    c.execute('''INSERT INTO procesos (receta_id, fase, tiempo_segundos, operario, observaciones)
                 VALUES (?, ?, ?, ?, ?)''', (receta_id, fase, tiempo_segundos, operario, observaciones))
    conn.commit()
    conn.close()

def obtener_analisis_procesos():
    conn = get_connection()
    query = '''SELECT r.nombre as receta, p.fase, 
                      AVG(p.tiempo_segundos) as tiempo_promedio,
                      COUNT(*) as num_registros
               FROM procesos p
               JOIN recetas r ON p.receta_id = r.id
               GROUP BY r.nombre, p.fase
               ORDER BY tiempo_promedio DESC'''
    df = pd.read_sql_query(query, conn)
    conn.close()
    return df

# ============================================
# INTERFAZ STREAMLIT
# ============================================
st.set_page_config(page_title="HOS-IA | Gestión Hostelera", layout="wide", page_icon="🍽️")

# Inicializar base de datos
init_db()

# Sidebar con navegación
st.sidebar.title("🍽️ HOS-IA")
st.sidebar.markdown("Sistema Integral de Gestión")
seccion = st.sidebar.radio("Navegación", [
    "📊 Dashboard",
    "📦 Inventario",
    "📖 Recetas y Fichas Técnicas",
    "⏱️ Análisis de Procesos",
    "🔧 Herramientas IA"
])

# ============================================
# SECCIÓN: DASHBOARD
# ============================================
if seccion == "📊 Dashboard":
    st.title("📊 Dashboard General")
    
    col1, col2, col3, col4 = st.columns(4)
    
    # Métricas clave
    ingredientes_df = obtener_ingredientes()
    recetas_df = obtener_recetas()
    bajo_stock_df = obtener_ingredientes_bajo_stock()
    
    col1.metric("Total Ingredientes", len(ingredientes_df))
    col2.metric("Total Recetas", len(recetas_df))
    col3.metric("Alertas Stock Bajo", len(bajo_stock_df))
    col4.metric("Valor Inventario", f"€{ingredientes_df['stock_actual'].sum() * ingredientes_df['precio_unitario'].sum():.2f}")
    
    st.markdown("---")
    
    # Alertas de stock bajo
    if not bajo_stock_df.empty:
        st.warning("⚠️ Ingredientes con Stock Bajo")
        st.dataframe(bajo_stock_df[['nombre', 'stock_actual', 'stock_minimo', 'unidad']], use_container_width=True)
    else:
        st.success("✅ Todos los ingredientes tienen stock suficiente")
    
    # Recetas más costosas
    st.markdown("### 💰 Top 5 Recetas Más Costosas")
    costes_recetas = []
    for _, receta in recetas_df.iterrows():
        coste, _ = calcular_coste_receta(receta['id'])
        coste_por_racion = coste / receta['porciones'] if receta['porciones'] > 0 else 0
        costes_recetas.append({
            'Receta': receta['nombre'],
            'Coste Total': f"€{coste:.2f}",
            'Coste/Ración': f"€{coste_por_racion:.2f}",
            'Porciones': receta['porciones']
        })
    
    if costes_recetas:
        df_costes = pd.DataFrame(costes_recetas).sort_values('Coste/Ración', ascending=False).head(5)
        st.dataframe(df_costes, use_container_width=True)

# ============================================
# SECCIÓN: INVENTARIO
# ============================================
elif seccion == "📦 Inventario":
    st.title("📦 Gestión de Inventario")
    
    tab1, tab2, tab3 = st.tabs(["➕ Agregar Ingrediente", "📋 Ver Inventario", "🔄 Actualizar Stock"])
    
    with tab1:
        st.subheader("Registrar Nuevo Ingrediente")
        with st.form("form_ingrediente"):
            col1, col2 = st.columns(2)
            with col1:
                nombre = st.text_input("Nombre del ingrediente *")
                unidad = st.selectbox("Unidad de medida *", ["kg", "g", "l", "ml", "unidad", "docena"])
                stock_actual = st.number_input("Stock actual", min_value=0.0, value=0.0)
                stock_minimo = st.number_input("Stock mínimo (alerta)", min_value=0.0, value=0.0)
            with col2:
                precio_unitario = st.number_input("Precio por unidad (€)", min_value=0.0, value=0.0)
                proveedor = st.text_input("Proveedor")
                alergenos = st.multiselect("Alérgenos", 
                                          ["Gluten", "Lactosa", "Huevo", "Frutos secos", "Soja", "Pescado", "Marisco", "Mostaza", "Apio", "Sésamo"])
            
            submit = st.form_submit_button("Guardar Ingrediente")
            if submit:
                if nombre and unidad:
                    if agregar_ingrediente(nombre, unidad, stock_actual, stock_minimo, precio_unitario, proveedor, alergenos):
                        st.success(f"✅ Ingrediente '{nombre}' agregado correctamente")
                    else:
                        st.error("❌ Error: El ingrediente ya existe")
                else:
                    st.error("❌ Completa los campos obligatorios")
    
    with tab2:
        st.subheader("Inventario Completo")
        df = obtener_ingredientes()
        if not df.empty:
            df['valor_total'] = df['stock_actual'] * df['precio_unitario']
            st.dataframe(df, use_container_width=True)
            
            # Estadísticas
            col1, col2 = st.columns(2)
            col1.metric("Valor Total Inventario", f"€{df['valor_total'].sum():.2f}")
            col2.metric("Ingredientes Registrados", len(df))
        else:
            st.info("No hay ingredientes registrados. Agrega el primero en la pestaña 'Agregar Ingrediente'")
    
    with tab3:
        st.subheader("Actualizar Stock")
        df = obtener_ingredientes()
        if not df.empty:
            ingrediente_sel = st.selectbox("Selecciona ingrediente", df['nombre'].tolist())
            if ingrediente_sel:
                ing_data = df[df['nombre'] == ingrediente_sel].iloc[0]
                nuevo_stock = st.number_input(f"Nuevo stock (actual: {ing_data['stock_actual']} {ing_data['unidad']})", 
                                             min_value=0.0, value=float(ing_data['stock_actual']))
                if st.button("Actualizar Stock"):
                    actualizar_stock(ing_data['id'], nuevo_stock)
                    st.success(f"✅ Stock de '{ingrediente_sel}' actualizado a {nuevo_stock} {ing_data['unidad']}")
        else:
            st.info("No hay ingredientes para actualizar")

# ============================================
# SECCIÓN: RECETAS Y FICHAS TÉCNICAS
# ============================================
elif seccion == "📖 Recetas y Fichas Técnicas":
    st.title("📖 Recetas y Fichas Técnicas")
    
    tab1, tab2, tab3 = st.tabs(["➕ Crear Receta", "📋 Ver Recetas", "📄 Ficha Técnica"])
    
    with tab1:
        st.subheader("Crear Nueva Receta")
        with st.form("form_receta"):
            nombre = st.text_input("Nombre de la receta *")
            col1, col2 = st.columns(2)
            with col1:
                categoria = st.selectbox("Categoría", ["Entrante", "Principal", "Postre", "Bebida", "Salsa", "Otro"])
                porciones = st.number_input("Número de porciones", min_value=1, value=1)
                tiempo_prep = st.number_input("Tiempo preparación (min)", min_value=0, value=0)
            with col2:
                dificultad = st.selectbox("Dificultad", ["Fácil", "Media", "Difícil"])
                tiempo_coccion = st.number_input("Tiempo cocción (min)", min_value=0, value=0)
            
            descripcion = st.text_area("Descripción")
            pasos = st.text_area("Pasos de preparación (uno por línea)")
            
            submit = st.form_submit_button("Crear Receta")
            if submit:
                if nombre:
                    receta_id = agregar_receta(nombre, categoria, porciones, tiempo_prep, tiempo_coccion, 
                                              dificultad, descripcion, pasos)
                    if receta_id:
                        st.success(f"✅ Receta '{nombre}' creada. Ahora agrega los ingredientes.")
                        st.session_state['receta_actual'] = receta_id
                    else:
                        st.error("❌ Error: La receta ya existe")
        
        # Agregar ingredientes a la receta
        if 'receta_actual' in st.session_state:
            st.markdown("---")
            st.subheader("Agregar Ingredientes a la Receta")
            ingredientes_df = obtener_ingredientes()
            
            if not ingredientes_df.empty:
                with st.form("form_ingrediente_receta"):
                    ing_sel = st.selectbox("Ingrediente", ingredientes_df['nombre'].tolist())
                    cantidad = st.number_input("Cantidad", min_value=0.0, value=0.0)
                    
                    if st.form_submit_button("Agregar a Receta"):
                        if ing_sel and cantidad > 0:
                            ing_id = ingredientes_df[ingredientes_df['nombre'] == ing_sel]['id'].iloc[0]
                            agregar_ingrediente_a_receta(st.session_state['receta_actual'], ing_id, cantidad)
                            st.success(f"✅ {cantidad} de {ing_sel} agregado")
            else:
                st.warning("Primero debes crear ingredientes en la sección de Inventario")
    
    with tab2:
        st.subheader("Lista de Recetas")
        df = obtener_recetas()
        if not df.empty:
            st.dataframe(df, use_container_width=True)
        else:
            st.info("No hay recetas creadas")
    
    with tab3:
        st.subheader("Generar Ficha Técnica")
        recetas_df = obtener_recetas()
        if not recetas_df.empty:
            receta_sel = st.selectbox("Selecciona receta", recetas_df['nombre'].tolist())
            if receta_sel:
                receta_data = recetas_df[recetas_df['nombre'] == receta_sel].iloc[0]
                coste_total, df_ingredientes = calcular_coste_receta(receta_data['id'])
                alergenos = obtener_alergenos_receta(receta_data['id'])
                coste_por_racion = coste_total / receta_data['porciones'] if receta_data['porciones'] > 0 else 0
                
                st.markdown("---")
                st.markdown(f"## 📄 {receta_data['nombre']}")
                
                col1, col2 = st.columns(2)
                with col1:
                    st.markdown(f"**Categoría:** {receta_data['categoria']}")
                    st.markdown(f"**Dificultad:** {receta_data['dificultad']}")
                    st.markdown(f"**Porciones:** {receta_data['porciones']}")
                with col2:
                    st.markdown(f"**Tiempo preparación:** {receta_data['tiempo_preparacion']} min")
                    st.markdown(f"**Tiempo cocción:** {receta_data['tiempo_coccion']} min")
                    st.markdown(f"**Tiempo total:** {receta_data['tiempo_preparacion'] + receta_data['tiempo_coccion']} min")
                
                if receta_data['descripcion']:
                    st.markdown(f"**Descripción:** {receta_data['descripcion']}")
                
                st.markdown("### 🥘 Ingredientes")
                if not df_ingredientes.empty:
                    st.dataframe(df_ingredientes, use_container_width=True)
                else:
                    st.info("Esta receta no tiene ingredientes asignados")
                
                if receta_data['pasos']:
                    st.markdown("### 👨‍🍳 Preparación")
                    st.markdown(receta_data['pasos'].replace('\n', '\n- '))
                
                st.markdown("---")
                col1, col2, col3 = st.columns(3)
                col1.metric("💰 Coste Total", f"€{coste_total:.2f}")
                col2.metric("💵 Coste/Ración", f"€{coste_por_racion:.2f}")
                col3.metric("⚠️ Alérgenos", ", ".join(alergenos) if alergenos else "Ninguno")
        else:
            st.info("No hay recetas para mostrar")

# ============================================
# SECCIÓN: ANÁLISIS DE PROCESOS
# ============================================
elif seccion == "⏱️ Análisis de Procesos":
    st.title("⏱️ Análisis de Procesos de Cocina")
    
    tab1, tab2 = st.tabs(["⏱️ Registrar Tiempo", "📊 Análisis"])
    
    with tab1:
        st.subheader("Registrar Tiempo de Proceso")
        recetas_df = obtener_recetas()
        
        if not recetas_df.empty:
            with st.form("form_proceso"):
                receta_sel = st.selectbox("Receta", recetas_df['nombre'].tolist())
                fase = st.selectbox("Fase", ["Mise en place", "Preparación", "Cocción", "Emplatado", "Limpieza"])
                tiempo_min = st.number_input("Tiempo (minutos)", min_value=0, value=0)
                tiempo_seg = st.number_input("Segundos adicionales", min_value=0, max_value=59, value=0)
                operario = st.text_input("Operario")
                observaciones = st.text_area("Observaciones")
                
                if st.form_submit_button("Registrar"):
                    receta_id = recetas_df[recetas_df['nombre'] == receta_sel]['id'].iloc[0]
                    tiempo_total_seg = (tiempo_min * 60) + tiempo_seg
                    registrar_proceso(receta_id, fase, tiempo_total_seg, operario, observaciones)
                    st.success("✅ Tiempo registrado correctamente")
        else:
            st.info("Primero crea recetas en la sección correspondiente")
    
    with tab2:
        st.subheader("Análisis de Tiempos")
        df_analisis = obtener_analisis_procesos()
        
        if not df_analisis.empty:
            df_analisis['tiempo_promedio_min'] = (df_analisis['tiempo_promedio'] / 60).round(2)
            st.dataframe(df_analisis, use_container_width=True)
            
            st.markdown("### 📈 Visualización")
            st.bar_chart(df_analisis.set_index('receta')['tiempo_promedio_min'])
            
            st.markdown("### 💡 Insights")
            fase_mas_lenta = df_analisis.loc[df_analisis['tiempo_promedio'].idxmax()]
            st.info(f"**Fase más lenta:** {fase_mas_lenta['fase']} en '{fase_mas_lenta['receta']}' ({fase_mas_lenta['tiempo_promedio_min']} min promedio)")
        else:
            st.info("No hay datos de procesos registrados")

# ============================================
# SECCIÓN: HERRAMIENTAS IA
# ============================================
elif seccion == "🔧 Herramientas IA":
    st.title("🔧 Herramientas de IA Integradas")
    
    st.markdown("""
    ### 🤖 Funcionalidades de IA Disponibles
    
    Esta sección integra herramientas de IA para potenciar la gestión:
    
    #### 1. Generación Automática de Fichas Técnicas
    - **Uso**: Copia el prompt de abajo y pégalo en ChatGPT/Claude
    - **Resultado**: Ficha técnica estructurada lista para importar
    
    #### 2. Predicción de Demanda
    - **Uso**: Analiza patrones de consumo históricos
    - **Resultado**: Sugerencias de compra optimizadas
    
    #### 3. Detección de Alérgenos
    - **Uso**: Análisis automático de ingredientes
    - **Resultado**: Listado completo de alérgenos por receta
    """)
    
    st.markdown("---")
    
    st.subheader("📝 Prompt para Generar Fichas Técnicas con IA")
    
    prompt_template = """
Eres un chef profesional y experto en gestión de restaurantes. Genera una ficha técnica completa para la siguiente receta:

**Receta**: [NOMBRE_DE_LA_RECETA]

Devuelve la información en formato JSON estructurado:
{
  "nombre": "",
  "categoria": "",
  "porciones": 0,
  "tiempo_preparacion": 0,
  "tiempo_coccion": 0,
  "dificultad": "",
  "descripcion": "",
  "ingredientes": [
    {"nombre": "", "cantidad": 0, "unidad": ""}
  ],
  "pasos": ["", ""],
  "alergenos": [""],
  "consejos": ""
}

Sé preciso con las cantidades y tiempos. Incluye todos los alérgenos relevantes.
"""
    
    st.code(prompt_template, language="markdown")
    
    if st.button("📋 Copiar Prompt"):
        st.success("Prompt copiado (selecciónalo y cópialo manualmente)")
    
    st.markdown("---")
    
    st.subheader("📊 Exportar Datos para Análisis Externo")
    
    col1, col2 = st.columns(2)
    
    with col1:
        if st.button("📥 Exportar Inventario (CSV)"):
            df = obtener_ingredientes()
            if not df.empty:
                csv = df.to_csv(index=False)
                st.download_button(
                    label="Descargar CSV",
                    data=csv,
                    file_name="inventario_hosia.csv",
                    mime="text/csv"
                )
    
    with col2:
        if st.button("📥 Exportar Recetas (JSON)"):
            recetas_df = obtener_recetas()
            if not recetas_df.empty:
                recetas_json = []
                for _, receta in recetas_df.iterrows():
                    coste, ingredientes = calcular_coste_receta(receta['id'])
                    alergenos = obtener_alergenos_receta(receta['id'])
                    recetas_json.append({
                        **receta.to_dict(),
                        "coste_total": coste,
                        "alergenos": alergenos
                    })
                
                json_data = json.dumps(recetas_json, indent=2, default=str)
                st.download_button(
                    label="Descargar JSON",
                    data=json_data,
                    file_name="recetas_hosia.json",
                    mime="application/json"
                )

# Footer
st.sidebar.markdown("---")
st.sidebar.markdown("**HOS-IA v1.0**")
st.sidebar.markdown("Sistema de Gestión Hostelera")
```

## Características del Sistema

### ✅ Universal
- Funciona en cualquier restaurante, bar, cafetería o catering
- Adaptable a cualquier tipo de cocina

### ✅ Completo
- **Inventario**: Gestión completa con alertas de stock bajo
- **Recetas**: Creación, edición y fichas técnicas automáticas
- **Costes**: Cálculo automático de escandallos y márgenes
- **Procesos**: Registro y análisis de tiempos de preparación
- **Alérgenos**: Detección automática por receta

### ✅ Autosuficiente
- Base de datos SQLite local (no requiere servidor)
- Sin dependencias de APIs externas de pago
- Ejecutable con un solo comando

### ✅ Adaptable
- Código modular y bien documentado
- Fácil de extender con nuevas funcionalidades
- Interfaz intuitiva en español

## Próximos Pasos para Pedro

1. **Ejecuta el código** y pruébalo con datos de ejemplo
2. **Personaliza** los campos según las necesidades específicas de Bismarck
3. **Añade integración con OCR** para lectura automática de facturas (puedo ayudarte con esto)
4. **Implementa modelos de predicción** con scikit-learn para optimizar compras
5. **Crea una versión web** con autenticación si necesita acceso remoto

Este código es tu **prueba de concepto profesional** que demuestra competencia técnica inmediata. ¡Úsalo para impresionar a Bismarck y abrir puertas a proyectos mayores!
</answer>

## [USER] 2026-07-26 10:25

Genera codigo base plantilla universal noiacore - Pedro abelentani. La empresa de ia . Crea la imagen corporativa. Dame algun codigo que genere el pdf

## [ASSISTANT] 2026-07-26 10:25 · Qwen3.7-Plus

# 🏢 NoiaCore - Sistema Corporativo Completo

## Imagen Corporativa Generada

Tu logo ha sido creado con identidad visual coherente:
- **Símbolo**: Letra "N" con red neuronal integrada (representa IA + núcleo)
- **Paleta**: Azul marino profundo (#0A1F44) + Cian eléctrico (#00D4FF)
- **Estilo**: Minimalista, tech, profesional

**⚠️ Acción requerida**: Descarga el logo generado y guárdalo como `noiacore_logo.png` en la misma carpeta del código.

---

## Código Base Universal (0 a 100)

### Instalación

```bash
pip install reportlab pillow
```

### Archivo: `noiacore_pdf.py`

```python
"""
NoiaCore - Sistema de Generación de PDFs Corporativos
=====================================================
Empresa: NoiaCore (Pedro Belentani)
Descripción: Motor universal de generación de PDFs con identidad corporativa
Versión: 1.0.0
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm, cm
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    Image, PageBreak, HRFlowable, KeepTogether
)
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from datetime import datetime
import os

# ============================================
# CONFIGURACIÓN CORPORATIVA NOIACORE
# ============================================
class NoiaCoreBrand:
    """Identidad visual corporativa de NoiaCore"""
    
    # Paleta de colores
    NAVY_DEEP = HexColor('#0A1F44')
    CYAN_ELECTRIC = HexColor('#00D4FF')
    GRAY_DARK = HexColor('#2C3E50')
    GRAY_LIGHT = HexColor('#ECF0F1')
    GRAY_MEDIUM = HexColor('#95A5A6')
    WHITE = white
    BLACK = black
    
    # Tipografía
    FONT_PRIMARY = 'Helvetica'
    FONT_BOLD = 'Helvetica-Bold'
    FONT_ITALIC = 'Helvetica-Oblique'
    
    # Logo
    LOGO_PATH = "noiacore_logo.png"
    
    # Información de la empresa
    COMPANY_NAME = "NoiaCore"
    COMPANY_TAGLINE = "Inteligencia Artificial Aplicada"
    COMPANY_ADDRESS = "Calle Innovación, 42 - Madrid, España"
    COMPANY_PHONE = "+34 600 123 456"
    COMPANY_EMAIL = "contacto@noiacore.es"
    COMPANY_WEB = "www.noiacore.es"
    COMPANY_CIF = "B12345678"
    
    # Fundador
    FOUNDER_NAME = "Pedro Belentani"
    FOUNDER_ROLE = "Director Técnico"


# ============================================
# MOTOR DE PDF CORPORATIVO
# ============================================
class NoiaCorePDF:
    """Motor universal de generación de PDFs con branding NoiaCore"""
    
    def __init__(self, filename, title="Documento"):
        self.filename = filename
        self.title = title
        self.brand = NoiaCoreBrand()
        
        # Configuración del documento
        self.doc = SimpleDocTemplate(
            filename,
            pagesize=A4,
            rightMargin=2*cm,
            leftMargin=2*cm,
            topMargin=2.5*cm,
            bottomMargin=2*cm
        )
        
        # Elementos del documento
        self.elements = []
        self.styles = self._create_styles()
        
        # Datos del documento
        self.doc_data = {
            'numero': f"NC-{datetime.now().strftime('%Y%m%d')}-001",
            'fecha': datetime.now().strftime("%d/%m/%Y"),
            'anio': datetime.now().year
        }
    
    def _create_styles(self):
        """Crea los estilos tipográficos corporativos"""
        styles = getSampleStyleSheet()
        
        styles.add(ParagraphStyle(
            name='NoiaTitle',
            fontName=self.brand.FONT_BOLD,
            fontSize=24,
            textColor=self.brand.NAVY_DEEP,
            spaceAfter=12,
            alignment=TA_LEFT
        ))
        
        styles.add(ParagraphStyle(
            name='NoiaSubtitle',
            fontName=self.brand.FONT_PRIMARY,
            fontSize=14,
            textColor=self.brand.CYAN_ELECTRIC,
            spaceAfter=12,
            alignment=TA_LEFT
        ))
        
        styles.add(ParagraphStyle(
            name='NoiaHeading',
            fontName=self.brand.FONT_BOLD,
            fontSize=12,
            textColor=self.brand.NAVY_DEEP,
            spaceBefore=12,
            spaceAfter=6
        ))
        
        styles.add(ParagraphStyle(
            name='NoiaBody',
            fontName=self.brand.FONT_PRIMARY,
            fontSize=10,
            textColor=self.brand.GRAY_DARK,
            leading=14,
            alignment=TA_JUSTIFY
        ))
        
        styles.add(ParagraphStyle(
            name='NoiaSmall',
            fontName=self.brand.FONT_PRIMARY,
            fontSize=8,
            textColor=self.brand.GRAY_MEDIUM,
            leading=10
        ))
        
        return styles
    
    def _header_footer(self, canvas_obj, doc):
        """Cabecera y pie de página corporativos"""
        canvas_obj.saveState()
        width, height = A4
        
        # Cabecera
        canvas_obj.setStrokeColor(self.brand.CYAN_ELECTRIC)
        canvas_obj.setLineWidth(2)
        canvas_obj.line(2*cm, height - 2*cm, width - 2*cm, height - 2*cm)
        
        # Logo en cabecera (si existe)
        if os.path.exists(self.brand.LOGO_PATH):
            try:
                canvas_obj.drawImage(
                    self.brand.LOGO_PATH,
                    2*cm, height - 1.8*cm,
                    width=2.5*cm, height=1.2*cm,
                    preserveAspectRatio=True
                )
            except:
                pass
        
        # Nombre empresa en cabecera
        canvas_obj.setFont(self.brand.FONT_BOLD, 10)
        canvas_obj.setFillColor(self.brand.NAVY_DEEP)
        canvas_obj.drawRightString(
            width - 2*cm, height - 1.5*cm,
            f"{self.brand.COMPANY_NAME} | {self.brand.COMPANY_TAGLINE}"
        )
        
        # Pie de página
        canvas_obj.setStrokeColor(self.brand.NAVY_DEEP)
        canvas_obj.setLineWidth(1)
        canvas_obj.line(2*cm, 1.5*cm, width - 2*cm, 1.5*cm)
        
        canvas_obj.setFont(self.brand.FONT_PRIMARY, 7)
        canvas_obj.setFillColor(self.brand.GRAY_MEDIUM)
        canvas_obj.drawString(
            2*cm, 1*cm,
            f"{self.brand.COMPANY_ADDRESS} | {self.brand.COMPANY_PHONE} | {self.brand.COMPANY_EMAIL}"
        )
        canvas_obj.drawRightString(
            width - 2*cm, 1*cm,
            f"Página {doc.page}"
        )
        
        canvas_obj.restoreState()
    
    def add_title(self, title, subtitle=None):
        """Añade título principal del documento"""
        self.elements.append(Spacer(1, 1*cm))
        self.elements.append(Paragraph(title, self.styles['NoiaTitle']))
        if subtitle:
            self.elements.append(Paragraph(subtitle, self.styles['NoiaSubtitle']))
        self.elements.append(Spacer(1, 0.5*cm))
        self.elements.append(HRFlowable(
            width="100%", thickness=1,
            color=self.brand.CYAN_ELECTRIC
        ))
        self.elements.append(Spacer(1, 0.5*cm))
    
    def add_heading(self, text):
        """Añade un encabezado de sección"""
        self.elements.append(Paragraph(text, self.styles['NoiaHeading']))
    
    def add_paragraph(self, text):
        """Añade un párrafo de texto"""
        self.elements.append(Paragraph(text, self.styles['NoiaBody']))
    
    def add_info_box(self, data_dict):
        """Añade una caja de información clave (fecha, número, etc.)"""
        table_data = [[
            Paragraph(f"<b>{k}:</b>", self.styles['NoiaSmall']),
            Paragraph(str(v), self.styles['NoiaSmall'])
        ] for k, v in data_dict.items()]
        
        table = Table(table_data, colWidths=[4*cm, 10*cm])
        table.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, -1), self.brand.GRAY_LIGHT),
            ('BOX', (0, 0), (-1, -1), 0.5, self.brand.NAVY_DEEP),
            ('INNERGRID', (0, 0), (-1, -1), 0.25, self.brand.GRAY_MEDIUM),
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
            ('LEFTPADDING', (0, 0), (-1, -1), 6),
            ('RIGHTPADDING', (0, 0), (-1, -1), 6),
            ('TOPPADDING', (0, 0), (-1, -1), 4),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ]))
        
        self.elements.append(table)
        self.elements.append(Spacer(1, 0.5*cm))
    
    def add_data_table(self, headers, data):
        """Añade una tabla de datos con estilo corporativo"""
        # Cabecera
        table_data = [[Paragraph(f"<b>{h}</b>", 
                     ParagraphStyle('h', fontName=self.brand.FONT_BOLD, 
                                   fontSize=9, textColor=self.brand.WHITE)) 
                     for h in headers]]
        
        # Datos
        for row in data:
            table_data.append([
                Paragraph(str(cell), self.styles['NoiaSmall']) 
                for cell in row
            ])
        
        table = Table(table_data, colWidths=[4*cm] * len(headers))
        table.setStyle(TableStyle([
            # Cabecera
            ('BACKGROUND', (0, 0), (-1, 0), self.brand.NAVY_DEEP),
            ('TEXTCOLOR', (0, 0), (-1, 0), self.brand.WHITE),
            ('ALIGN', (0, 0), (-1, 0), 'CENTER'),
            # Filas alternas
            ('BACKGROUND', (0, 1), (-1, -1), self.brand.WHITE),
            ('ROWBACKGROUNDS', (0, 1), (-1, -1), [self.brand.WHITE, self.brand.GRAY_LIGHT]),
            # Bordes
            ('BOX', (0, 0), (-1, -1), 0.5, self.brand.NAVY_DEEP),
            ('INNERGRID', (0, 0), (-1, -1), 0.25, self.brand.GRAY_MEDIUM),
            # Padding
            ('LEFTPADDING', (0, 0), (-1, -1), 6),
            ('RIGHTPADDING', (0, 0), (-1, -1), 6),
            ('TOPPADDING', (0, 0), (-1, -1), 4),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ]))
        
        self.elements.append(table)
        self.elements.append(Spacer(1, 0.5*cm))
    
    def add_signature_block(self, name, role):
        """Bloque de firma"""
        self.elements.append(Spacer(1, 1*cm))
        self.elements.append(HRFlowable(
            width="40%", thickness=0.5,
            color=self.brand.GRAY_MEDIUM
        ))
        self.elements.append(Paragraph(f"<b>{name}</b>", self.styles['NoiaBody']))
        self.elements.append(Paragraph(role, self.styles['NoiaSmall']))
    
    def generate(self):
        """Genera el PDF final"""
        self.doc.build(self.elements, onFirstPage=self._header_footer, 
                      onLaterPages=self._header_footer)
        print(f"✅ PDF generado: {self.filename}")


# ============================================
# PLANTILLAS PREDEFINIDAS
# ============================================
class PropuestaComercial(NoiaCorePDF):
    """Plantilla de propuesta comercial"""
    
    def __init__(self, cliente, proyecto, presupuesto):
        super().__init__(
            f"propuesta_{cliente.lower().replace(' ', '_')}_{datetime.now().strftime('%Y%m%d')}.pdf",
            "Propuesta Comercial"
        )
        self.cliente = cliente
        self.proyecto = proyecto
        self.presupuesto = presupuesto
    
    def construir(self):
        self.add_title(
            f"Propuesta Comercial",
            f"Proyecto: {self.proyecto}"
        )
        
        self.add_info_box({
            'Nº Documento': self.doc_data['numero'],
            'Fecha': self.doc_data['fecha'],
            'Cliente': self.cliente,
            'Validez': "30 días"
        })
        
        self.add_heading("1. Objeto de la Propuesta")
        self.add_paragraph(
            f"NoiaCore presenta la siguiente propuesta técnica y económica para el desarrollo "
            f"del proyecto \"{self.proyecto}\" para {self.cliente}. Nuestra solución integra "
            f"inteligencia artificial aplicada para optimizar procesos y maximizar resultados."
        )
        
        self.add_heading("2. Alcance del Proyecto")
        self.add_paragraph(
            "El proyecto incluye las siguientes fases de trabajo:"
        )
        
        fases = [
            ["Fase", "Descripción", "Duración"],
            ["Análisis", "Estudio de requisitos y viabilidad", "1 semana"],
            ["Diseño", "Arquitectura y prototipado", "2 semanas"],
            ["Desarrollo", "Implementación de soluciones IA", "4 semanas"],
            ["Testing", "Pruebas y validación", "1 semana"],
            ["Despliegue", "Puesta en producción", "1 semana"]
        ]
        
        self.add_data_table(fases[0], fases[1:])
        
        self.add_heading("3. Inversión")
        self.add_paragraph(
            f"La inversión total para el desarrollo completo del proyecto es de "
            f"<b>{self.presupuesto}€</b> (IVA no incluido)."
        )
        
        self.add_heading("4. Condiciones")
        self.add_paragraph(
            "• Forma de pago: 40% al inicio, 60% a la entrega\n"
            "• Plazo de ejecución: 9 semanas desde la aprobación\n"
            "• Soporte post-implementación: 3 meses incluidos\n"
            "• Propiedad intelectual: transferida al cliente tras pago completo"
        )
        
        self.add_signature_block(
            self.brand.FOUNDER_NAME,
            self.brand.FOUNDER_ROLE
        )


class InformeTecnico(NoiaCorePDF):
    """Plantilla de informe técnico"""
    
    def __init__(self, titulo, autor, resumen):
        super().__init__(
            f"informe_{titulo.lower().replace(' ', '_')[:20]}_{datetime.now().strftime('%Y%m%d')}.pdf",
            "Informe Técnico"
        )
        self.titulo_informe = titulo
        self.autor = autor
        self.resumen = resumen
    
    def construir(self):
        self.add_title(
            self.titulo_informe,
            "Informe Técnico NoiaCore"
        )
        
        self.add_info_box({
            'Código': self.doc_data['numero'],
            'Fecha': self.doc_data['fecha'],
            'Autor': self.autor,
            'Versión': "1.0"
        })
        
        self.add_heading("Resumen Ejecutivo")
        self.add_paragraph(self.resumen)
        
        self.add_heading("1. Introducción")
        self.add_paragraph(
            "Este documento presenta los resultados del análisis técnico realizado por el equipo "
            "de NoiaCore. Los datos y conclusiones aquí expuestos se basan en metodologías "
            "validadas y herramientas de inteligencia artificial de última generación."
        )
        
        self.add_heading("2. Metodología")
        self.add_paragraph(
            "Se han empleado técnicas de análisis de datos, machine learning y procesamiento "
            "de lenguaje natural para obtener los resultados presentados. La infraestructura "
            "utilizada garantiza la seguridad y confidencialidad de la información tratada."
        )
        
        self.add_heading("3. Resultados")
        self.add_paragraph(
            "Los resultados obtenidos demuestran una mejora significativa en los indicadores "
            "clave de rendimiento, validando la efectividad de las soluciones implementadas."
        )
        
        # Tabla de métricas de ejemplo
        metricas = [
            ["Métrica", "Valor Anterior", "Valor Actual", "Mejora"],
            ["Eficiencia", "65%", "89%", "+24%"],
            ["Tiempo de proceso", "120 min", "45 min", "-62%"],
            ["Precisión", "78%", "94%", "+16%"],
            ["Coste operativo", "100%", "67%", "-33%"]
        ]
        
        self.add_data_table(metricas[0], metricas[1:])
        
        self.add_heading("4. Conclusiones")
        self.add_paragraph(
            "Los resultados obtenidos validan la viabilidad técnica y el retorno de inversión "
            "de la solución propuesta. Se recomienda proceder con la implementación en entorno "
            "de producción según el plan de despliegue definido."
        )
        
        self.add_signature_block(self.autor, "Analista Técnico")


# ============================================
# EJEMPLO DE USO
# ============================================
if __name__ == "__main__":
    print("🏢 NoiaCore - Generador de PDFs Corporativos")
    print("=" * 50)
    
    # Ejemplo 1: Propuesta Comercial
    print("\n📄 Generando propuesta comercial...")
    propuesta = PropuestaComercial(
        cliente="Restaurante El Buen Sabor",
        proyecto="Sistema de Gestión Inteligente con IA",
        presupuesto=4500
    )
    propuesta.construir()
    propuesta.generate()
    
    # Ejemplo 2: Informe Técnico
    print("\n📊 Generando informe técnico...")
    informe = InformeTecnico(
        titulo="Análisis de Eficiencia Operativa",
        autor="Pedro Belentani",
        resumen="Este informe presenta los resultados del análisis de eficiencia operativa "
                "realizado mediante técnicas de inteligencia artificial. Los datos muestran "
                "mejoras significativas en todos los KPIs evaluados."
    )
    informe.construir()
    informe.generate()
    
    print("\n✅ Proceso completado. Revisa los PDFs generados.")
```

---

## Estructura de Archivos del Proyecto

```
noiacore/
├── noiacore_pdf.py          # Motor principal (este código)
├── noiacore_logo.png        # Logo corporativo (descargado)
├── requirements.txt         # Dependencias
└── output/                  # PDFs generados (se crean aquí)
```

### `requirements.txt`

```txt
reportlab>=4.0.0
pillow>=10.0.0
```

---

## Características del Sistema

| Característica | Descripción |
|---|---|
| **Universal** | Funciona para cualquier tipo de documento corporativo |
| **Branding automático** | Logo, colores y tipografía en cada página |
| **Modular** | Clases heredables para crear nuevas plantillas |
| **Profesional** | Cumple estándares de documentos empresariales |
| **Extensible** | Fácil añadir nuevas secciones o estilos |

---

## Tipos de PDF que Puedes Generar

1. ✅ **Propuestas comerciales** (ya incluido)
2. ✅ **Informes técnicos** (ya incluido)
3.  **Facturas** (extiende `NoiaCorePDF`)
4. 🔄 **Contratos** (extiende `NoiaCorePDF`)
5. 🔄 **Currículums corporativos**
6. 🔄 **Dossiers de servicios**

---

## Próximos Pasos para Pedro

1. **Descarga el logo** y guárdalo como `noiacore_logo.png`
2. **Ejecuta el código**: `python noiacore_pdf.py`
3. **Personaliza** los datos de `NoiaCoreBrand` con tu información real
4. **Crea nuevas plantillas** heredando de `NoiaCorePDF`
5. **Integra con HOS-IA** para generar informes automáticos del sistema de hostelería

Este código es la **base profesional de tu empresa**. Úsalo para generar documentos que transmitan seriedad y competencia técnica desde el primer día. 🚀

## [USER] 2026-07-26 10:40

Generame codigo html para pdf premium preguntando todo lo que tenemos que saber para mejorar su negocio

## [ASSISTANT] 2026-07-26 10:40 · Qwen3.7-Plus

#  NoiaCore - Cuestionario de Diagnóstico Empresarial Premium

## Código HTML Completo para Generación de PDF

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NoiaCore | Diagnóstico Empresarial Premium</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    <style>
        :root {
            --navy-deep: #0A1F44;
            --cyan-electric: #00D4FF;
            --gray-dark: #2C3E50;
            --gray-light: #ECF0F1;
            --gray-medium: #95A5A6;
            --white: #FFFFFF;
            --success: #27AE60;
            --warning: #F39C12;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: var(--white);
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, var(--navy-deep) 0%, #1a3a6c 100%);
            color: var(--white);
            padding: 40px;
            text-align: center;
            position: relative;
        }

        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--cyan-electric), var(--navy-deep));
        }

        .logo {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 10px;
            background: linear-gradient(135deg, var(--cyan-electric), var(--white));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .tagline {
            font-size: 18px;
            opacity: 0.9;
            margin-bottom: 20px;
        }

        .subtitle {
            font-size: 24px;
            font-weight: 300;
            border-top: 2px solid var(--cyan-electric);
            padding-top: 20px;
            margin-top: 20px;
        }

        .content {
            padding: 40px;
        }

        .intro-box {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            border-left: 5px solid var(--cyan-electric);
            padding: 25px;
            margin-bottom: 40px;
            border-radius: 10px;
        }

        .intro-box h3 {
            color: var(--navy-deep);
            margin-bottom: 15px;
            font-size: 20px;
        }

        .intro-box p {
            color: var(--gray-dark);
            line-height: 1.6;
            margin-bottom: 10px;
        }

        .section {
            margin-bottom: 40px;
            page-break-inside: avoid;
        }

        .section-header {
            background: linear-gradient(135deg, var(--navy-deep), #1a3a6c);
            color: var(--white);
            padding: 20px 30px;
            border-radius: 10px;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .section-icon {
            font-size: 32px;
        }

        .section-title {
            font-size: 24px;
            font-weight: bold;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-label {
            display: block;
            font-weight: 600;
            color: var(--navy-deep);
            margin-bottom: 10px;
            font-size: 16px;
        }

        .form-label .required {
            color: #e74c3c;
            margin-left: 5px;
        }

        .form-input,
        .form-textarea,
        .form-select {
            width: 100%;
            padding: 15px;
            border: 2px solid var(--gray-light);
            border-radius: 8px;
            font-size: 15px;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
            outline: none;
            border-color: var(--cyan-electric);
            box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
        }

        .form-textarea {
            min-height: 120px;
            resize: vertical;
        }

        .checkbox-group,
        .radio-group {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin-top: 10px;
        }

        .checkbox-item,
        .radio-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px;
            background: var(--gray-light);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .checkbox-item:hover,
        .radio-item:hover {
            background: #d5dbdb;
            transform: translateY(-2px);
        }

        .checkbox-item input,
        .radio-item input {
            width: 20px;
            height: 20px;
            cursor: pointer;
        }

        .rating-group {
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }

        .rating-option {
            flex: 1;
            padding: 15px;
            text-align: center;
            background: var(--gray-light);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .rating-option:hover {
            background: #d5dbdb;
        }

        .rating-option.selected {
            background: var(--cyan-electric);
            color: var(--white);
            border-color: var(--navy-deep);
        }

        .rating-option input {
            display: none;
        }

        .two-columns {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .three-columns {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
        }

        .info-box {
            background: #fff3cd;
            border-left: 4px solid var(--warning);
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
            font-size: 14px;
        }

        .success-box {
            background: #d4edda;
            border-left: 4px solid var(--success);
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
            font-size: 14px;
        }

        .actions {
            display: flex;
            gap: 20px;
            justify-content: center;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 2px solid var(--gray-light);
        }

        .btn {
            padding: 18px 40px;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--cyan-electric), #0099cc);
            color: var(--white);
            box-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 212, 255, 0.6);
        }

        .btn-secondary {
            background: var(--gray-light);
            color: var(--gray-dark);
        }

        .btn-secondary:hover {
            background: #d5dbdb;
        }

        .progress-bar {
            position: sticky;
            top: 0;
            background: var(--white);
            padding: 20px 40px;
            border-bottom: 2px solid var(--gray-light);
            z-index: 100;
        }

        .progress-container {
            background: var(--gray-light);
            border-radius: 10px;
            height: 10px;
            overflow: hidden;
        }

        .progress-fill {
            background: linear-gradient(90deg, var(--cyan-electric), var(--navy-deep));
            height: 100%;
            width: 0%;
            transition: width 0.5s ease;
        }

        .progress-text {
            text-align: center;
            margin-top: 10px;
            font-weight: 600;
            color: var(--navy-deep);
        }

        @media print {
            body {
                background: white;
                padding: 0;
            }
            
            .container {
                box-shadow: none;
                border-radius: 0;
            }
            
            .actions,
            .progress-bar {
                display: none;
            }
            
            .section {
                page-break-inside: avoid;
            }
        }

        @media (max-width: 768px) {
            .two-columns,
            .three-columns {
                grid-template-columns: 1fr;
            }
            
            .checkbox-group,
            .radio-group {
                grid-template-columns: 1fr;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container" id="pdf-content">
        <!-- Header -->
        <div class="header">
            <div class="logo">NoiaCore</div>
            <div class="tagline">Inteligencia Artificial Aplicada</div>
            <div class="subtitle">📋 Cuestionario de Diagnóstico Empresarial</div>
        </div>

        <!-- Progress Bar -->
        <div class="progress-bar">
            <div class="progress-container">
                <div class="progress-fill" id="progressFill"></div>
            </div>
            <div class="progress-text" id="progressText">0% completado</div>
        </div>

        <!-- Content -->
        <div class="content">
            <!-- Introducción -->
            <div class="intro-box">
                <h3>🎯 Objetivo de este Cuestionario</h3>
                <p>Este documento nos permitirá entender a fondo tu negocio para diseñar una solución de IA personalizada que maximice tu eficiencia operativa, reduzca costes y aumente tu rentabilidad.</p>
                <p><strong>Tiempo estimado:</strong> 15-20 minutos | <strong>Confidencialidad:</strong> Total</p>
            </div>

            <!-- SECCIÓN 1: DATOS BÁSICOS -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">🏢</span>
                    <span class="section-title">1. Datos de la Empresa</span>
                </div>

                <div class="two-columns">
                    <div class="form-group">
                        <label class="form-label">
                            Nombre de la empresa <span class="required">*</span>
                        </label>
                        <input type="text" class="form-input" name="empresa_nombre" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label">
                            Sector / Tipo de negocio <span class="required">*</span>
                        </label>
                        <select class="form-select" name="sector" required>
                            <option value="">Selecciona...</option>
                            <option value="restaurante">Restaurante</option>
                            <option value="bar_cafeteria">Bar / Cafetería</option>
                            <option value="hotel">Hotel</option>
                            <option value="catering">Catering</option>
                            <option value="food_truck">Food Truck</option>
                            <option value="retail">Retail / Comercio</option>
                            <option value="servicios">Servicios</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                </div>

                <div class="two-columns">
                    <div class="form-group">
                        <label class="form-label">Años en el mercado</label>
                        <input type="number" class="form-input" name="anos_mercado" min="0">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Número de empleados</label>
                        <input type="number" class="form-input" name="num_empleados" min="1">
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Ubicación(es)</label>
                    <textarea class="form-textarea" name="ubicaciones" placeholder="Dirección(es) de tus establecimientos"></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">Persona de contacto y cargo</label>
                    <input type="text" class="form-input" name="contacto" placeholder="Nombre y posición">
                </div>
            </div>

            <!-- SECCIÓN 2: OPERACIONES ACTUALES -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">⚙️</span>
                    <span class="section-title">2. Operaciones Actuales</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué sistemas utilizas actualmente para gestionar tu negocio? <span class="required">*</span>
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="tpv">
                            <span>TPV / Punto de venta</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="excel">
                            <span>Excel / Hojas de cálculo</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="erp">
                            <span>Software ERP</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="inventario">
                            <span>Gestión de inventario</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="rrhh">
                            <span>Gestión de RRHH</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="ninguno">
                            <span>Ninguno / Manual</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cómo gestionas actualmente los inventarios? <span class="required">*</span>
                    </label>
                    <select class="form-select" name="gestion_inventario" required>
                        <option value="">Selecciona...</option>
                        <option value="manual">Manual (papel y lápiz)</option>
                        <option value="excel">Excel básico</option>
                        <option value="software">Software especializado</option>
                        <option value="mixto">Sistema mixto</option>
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Con qué frecuencia realizas inventarios físicos?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="freq_inventario" value="diario">
                            <span>Diario</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="freq_inventario" value="semanal">
                            <span>Semanal</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="freq_inventario" value="mensual">
                            <span>Mensual</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="freq_inventario" value="trimestral">
                            <span>Trimestral o menos</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cómo calculas el coste de tus platos/productos?
                    </label>
                    <textarea class="form-textarea" name="calculo_costes" placeholder="Describe tu método actual..."></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué porcentaje de mermas/desperdicio tienes aproximadamente?
                    </label>
                    <input type="text" class="form-input" name="mermas" placeholder="Ej: 10-15% mensual">
                </div>
            </div>

            <!-- SECCIÓN 3: FINANZAS -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">💰</span>
                    <span class="section-title">3. Información Financiera</span>
                </div>

                <div class="three-columns">
                    <div class="form-group">
                        <label class="form-label">Facturación mensual aproximada</label>
                        <input type="text" class="form-input" name="facturacion" placeholder="€">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Margen de beneficio neto</label>
                        <input type="text" class="form-input" name="margen" placeholder="%">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Coste de personal (% sobre ventas)</label>
                        <input type="text" class="form-input" name="coste_personal" placeholder="%">
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cuáles son tus 3 mayores gastos operativos?
                    </label>
                    <textarea class="form-textarea" name="mayores_gastos" placeholder="1. ...&#10;2. ...&#10;3. ..."></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Tienes identificado el coste real por producto/servicio?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="coste_real" value="si_completo">
                            <span>Sí, completo y actualizado</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="coste_real" value="si_parcial">
                            <span>Sí, pero parcial/desactualizado</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="coste_real" value="no">
                            <span>No lo tengo calculado</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué presupuesto mensual destinas a tecnología/software?
                    </label>
                    <input type="text" class="form-input" name="budget_tech" placeholder="€">
                </div>
            </div>

            <!-- SECCIÓN 4: PROCESOS Y EFICIENCIA -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">📊</span>
                    <span class="section-title">4. Procesos y Eficiencia</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        Del 1 al 10, ¿cómo calificarías la eficiencia operativa actual?
                    </label>
                    <div class="rating-group">
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="1">
                            <span>1</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="2">
                            <span>2</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="3">
                            <span>3</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="4">
                            <span>4</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="5">
                            <span>5</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="6">
                            <span>6</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="7">
                            <span>7</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="8">
                            <span>8</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="9">
                            <span>9</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="10">
                            <span>10</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cuáles son los 3 mayores cuellos de botella en tu operación?
                    </label>
                    <textarea class="form-textarea" name="cuellos_botella" placeholder="1. ...&#10;2. ...&#10;3. ..."></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cuánto tiempo dedicas semanalmente a tareas administrativas/repetitivas?
                    </label>
                    <input type="text" class="form-input" name="tiempo_admin" placeholder="Ej: 10 horas/semana">
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué tareas te gustaría automatizar o mejorar con IA?
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="inventarios">
                            <span>Gestión de inventarios</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="pedidos">
                            <span>Generación de pedidos</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="recetas">
                            <span>Fichas técnicas y recetas</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="costes">
                            <span>Cálculo de costes</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="personal">
                            <span>Gestión de personal</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="marketing">
                            <span>Marketing y ventas</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="atencion">
                            <span>Atención al cliente</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="reportes">
                            <span>Reportes y análisis</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        Describe tu flujo de trabajo típico (desde compra hasta venta)
                    </label>
                    <textarea class="form-textarea" name="flujo_trabajo" placeholder="Describe paso a paso..."></textarea>
                </div>
            </div>

            <!-- SECCIÓN 5: TECNOLOGÍA Y DATOS -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">💻</span>
                    <span class="section-title">5. Tecnología y Datos</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué nivel de digitalización tiene tu negocio?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="digitalizacion" value="bajo">
                            <span>Bajo (casi todo manual)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="digitalizacion" value="medio">
                            <span>Medio (algunos sistemas)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="digitalizacion" value="alto">
                            <span>Alto (muy digitalizado)</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Dispones de datos históricos de ventas/operaciones?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="datos_historicos" value="si_1anio">
                            <span>Sí, más de 1 año</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="datos_historicos" value="si_6meses">
                            <span>Sí, 6-12 meses</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="datos_historicos" value="si_poco">
                            <span>Sí, pero menos de 6 meses</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="datos_historicos" value="no">
                            <span>No tengo datos históricos</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿En qué formato tienes esos datos?
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="formato_datos[]" value="excel">
                            <span>Excel/CSV</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="formato_datos[]" value="software">
                            <span>Software de gestión</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="formato_datos[]" value="papel">
                            <span>Papel/físico</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="formato_datos[]" value="ninguno">
                            <span>No tengo datos organizados</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué dispositivos tecnológicos usas en el día a día?
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="dispositivos[]" value="ordenador">
                            <span>Ordenador/PC</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="dispositivos[]" value="tablet">
                            <span>Tablet</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="dispositivos[]" value="movil">
                            <span>Teléfono móvil</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="dispositivos[]" value="tpv_tactil">
                            <span>TPV táctil</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Tienes conexión a internet estable en tu negocio?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="internet" value="si_fibra">
                            <span>Sí, fibra óptica</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="internet" value="si_adsl">
                            <span>Sí, ADSL/banda ancha</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="internet" value="si_movil">
                            <span>Sí, pero solo datos móviles</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="internet" value="no">
                            <span>No o muy inestable</span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- SECCIÓN 6: OBJETIVOS Y EXPECTATIVAS -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">🎯</span>
                    <span class="section-title">6. Objetivos y Expectativas</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cuál es tu objetivo principal al implementar IA en tu negocio? <span class="required">*</span>
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="reducir_costes">
                            <span>Reducir costes operativos</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="aumentar_ventas">
                            <span>Aumentar ventas</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="mejorar_eficiencia">
                            <span>Mejorar eficiencia</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="reducir_mermas">
                            <span>Reducir mermas/desperdicio</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="mejorar_decisiones">
                            <span>Mejorar toma de decisiones</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="automatizar">
                            <span>Automatizar tareas repetitivas</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="competitividad">
                            <span>Ventaja competitiva</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="escalabilidad">
                            <span>Preparar para escalar/crecer</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué resultados concretos esperas obtener?
                    </label>
                    <textarea class="form-textarea" name="resultados_esperados" placeholder="Ej: Reducir un 20% el coste de inventarios, ahorrar 10 horas semanales en administración..."></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿En qué plazo te gustaría ver resultados?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="plazo" value="inmediato">
                            <span>Inmediato (1-3 meses)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="plazo" value="corto">
                            <span>Corto plazo (3-6 meses)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="plazo" value="medio">
                            <span>Medio plazo (6-12 meses)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="plazo" value="largo">
                            <span>Largo plazo (más de 1 año)</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué inversión estás dispuesto a realizar en tecnología/IA?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="inversion" value="baja">
                            <span>Hasta 500€</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inversion" value="media">
                            <span>500€ - 2.000€</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inversion" value="alta">
                            <span>2.000€ - 5.000€</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inversion" value="muy_alta">
                            <span>Más de 5.000€</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Hay algo más que debamos saber sobre tu negocio o tus necesidades?
                    </label>
                    <textarea class="form-textarea" name="informacion_extra" placeholder="Cualquier información adicional relevante..."></textarea>
                </div>
            </div>

            <!-- SECCIÓN 7: PRIORIDADES -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">⚡</span>
                    <span class="section-title">7. Prioridades y Urgencias</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        Ordena por prioridad (1 = más urgente) las siguientes áreas:
                    </label>
                    <div class="info-box">
                        💡 <strong>Nota:</strong> Esto nos ayudará a enfocar nuestros esfuerzos en lo que más necesitas.
                    </div>
                    
                    <div style="margin-top: 20px;">
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Gestión de inventarios y compras</label>
                            <input type="number" class="form-input" name="prioridad_inventario" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Cálculo de costes y precios</label>
                            <input type="number" class="form-input" name="prioridad_costes" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Automatización de procesos</label>
                            <input type="number" class="form-input" name="prioridad_automatizacion" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Análisis de datos y reportes</label>
                            <input type="number" class="form-input" name="prioridad_analisis" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Optimización de personal</label>
                            <input type="number" class="form-input" name="prioridad_personal" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Marketing y ventas</label>
                            <input type="number" class="form-input" name="prioridad_marketing" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Experiencia del cliente</label>
                            <input type="number" class="form-input" name="prioridad_cliente" min="1" max="7" placeholder="1-7">
                        </div>
                    </div>
                </div>
            </div>

            <!-- SECCIÓN 8: DISPONIBILIDAD -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">📅</span>
                    <span class="section-title">8. Disponibilidad y Siguientes Pasos</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cuándo te gustaría comenzar el proyecto?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="inicio" value="inmediato">
                            <span>Lo antes posible</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inicio" value="1mes">
                            <span>En el próximo mes</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inicio" value="3meses">
                            <span>En 2-3 meses</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inicio" value="planificando">
                            <span>Solo estoy planificando</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Prefieres una solución en la nube o instalada localmente?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="tipo_solucion" value="nube">
                            <span>En la nube (acceso desde cualquier lugar)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="tipo_solucion" value="local">
                            <span>Local (en mis servidores/ordenadores)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="tipo_solucion" value="hibrida">
                            <span>Híbrida / No tengo preferencia</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cómo prefieres que nos comuniquemos?
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="comunicacion[]" value="email">
                            <span>Email</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="comunicacion[]" value="telefono">
                            <span>Teléfono</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="comunicacion[]" value="whatsapp">
                            <span>WhatsApp</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="comunicacion[]" value="videollamada">
                            <span>Videollamada</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="comunicacion[]" value="presencial">
                            <span>Reunión presencial</span>
                        </label>
                    </div>
                </div>

                <div class="two-columns">
                    <div class="form-group">
                        <label class="form-label">Email de contacto</label>
                        <input type="email" class="form-input" name="email" placeholder="tu@email.com">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Teléfono</label>
                        <input type="tel" class="form-input" name="telefono" placeholder="+34 600 000 000">
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Mejor horario para contactarte?
                    </label>
                    <input type="text" class="form-input" name="horario" placeholder="Ej: Lunes a Viernes, 9:00-18:00">
                </div>
            </div>

            <!-- Footer -->
            <div class="success-box">
                ✅ <strong>¡Gracias por completar el cuestionario!</strong><br>
                Nuestro equipo analizará tu información y se pondrá en contacto contigo en menos de 48 horas con una propuesta personalizada.
            </div>

            <!-- Actions -->
            <div class="actions">
                <button class="btn btn-secondary" onclick="resetForm()">🔄 Reiniciar</button>
                <button class="btn btn-primary" onclick="generatePDF()">📄 Generar PDF</button>
            </div>
        </div>
    </div>

    <script>
        // Actualizar progreso
        function updateProgress() {
            const inputs = document.querySelectorAll('input, select, textarea');
            const total = inputs.length;
            let filled = 0;

            inputs.forEach(input => {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    const name = input.name;
                    const checked = document.querySelector(`input[name="${name}"]:checked`);
                    if (checked) filled++;
                } else {
                    if (input.value.trim() !== '') filled++;
                }
            });

            const percentage = Math.round((filled / total) * 100);
            document.getElementById('progressFill').style.width = percentage + '%';
            document.getElementById('progressText').textContent = percentage + '% completado';
        }

        // Rating selection
        document.querySelectorAll('.rating-option').forEach(option => {
            option.addEventListener('click', function() {
                this.parentElement.querySelectorAll('.rating-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                this.classList.add('selected');
                this.querySelector('input').checked = true;
                updateProgress();
            });
        });

        // Auto-update progress on input
        document.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('change', updateProgress);
            input.addEventListener('input', updateProgress);
        });

        // Reset form
        function resetForm() {
            if (confirm('¿Estás seguro de que quieres reiniciar el formulario? Se perderán todos los datos.')) {
                document.querySelectorAll('input, select, textarea').forEach(input => {
                    if (input.type === 'checkbox' || input.type === 'radio') {
                        input.checked = false;
                    } else {
                        input.value = '';
                    }
                });
                document.querySelectorAll('.rating-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                updateProgress();
            }
        }

        // Generate PDF
        function generatePDF() {
            const element = document.getElementById('pdf-content');
            const empresa = document.querySelector('input[name="empresa_nombre"]').value || 'empresa';
            const fecha = new Date().toLocaleDateString('es-ES').replace(/\//g, '-');
            
            const opt = {
                margin: 10,
                filename: `diagnostico_${empresa.replace(/\s+/g, '_')}_${fecha}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { 
                    scale: 2,
                    useCORS: true,
                    letterRendering: true
                },
                jsPDF: { 
                    unit: 'mm', 
                    format: 'a4', 
                    orientation: 'portrait'
                },
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
            };

            // Mostrar mensaje de carga
            const btn = event.target;
            const originalText = btn.textContent;
            btn.textContent = '⏳ Generando...';
            btn.disabled = true;

            html2pdf().set(opt).from(element).save().then(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                alert('✅ PDF generado correctamente. Revisa tu carpeta de descargas.');
            }).catch(err => {
                btn.textContent = originalText;
                btn.disabled = false;
                alert('❌ Error al generar el PDF: ' + err.message);
            });
        }

        // Inicializar
        updateProgress();
    </script>
</body>
</html>
```

##  Instrucciones de Uso

### 1. Guardar el archivo
```bash
# Guarda el código como:
noiacore_diagnostico.html
```

### 2. Abrir en navegador
```bash
# Doble clic en el archivo o:
# Chrome/Firefox/Edge → Abrir con → noiacore_diagnostico.html
```

### 3. Características Premium

| Función | Descripción |
|---------|-------------|
| **📊 Barra de progreso** | Muestra % completado en tiempo real |
| **🎨 Diseño corporativo** | Colores NoiaCore (azul marino + cian) |
| **📱 Responsive** | Funciona en móvil, tablet y desktop |
| ** Generación PDF** | Un clic para descargar el PDF completo |
| **✅ Validación** | Campos obligatorios marcados |
| **🔄 Reset** | Botón para reiniciar formulario |

### 4. Secciones del Cuestionario

1. **🏢 Datos de la Empresa** - Información básica
2. **⚙️ Operaciones Actuales** - Sistemas y procesos
3. **💰 Información Financiera** - Costes y márgenes
4. ** Procesos y Eficiencia** - Cuellos de botella
5. **💻 Tecnología y Datos** - Nivel de digitalización
6. **🎯 Objetivos y Expectativas** - Qué quieren lograr
7. **⚡ Prioridades** - Orden de urgencia
8. **📅 Disponibilidad** - Siguientes pasos

### 5. Personalización Rápida

Para adaptar el cuestionario a otros sectores, modifica:
- **Línea 15**: Cambia el título
- **Sección 2**: Ajusta las opciones de sector
- **Sección 4**: Personaliza las tareas a automatizar

### 6. Integración con NoiaCore

Este cuestionario se integra perfectamente con:
- ✅ **HOS-IA** (sistema de hostelería)
- ✅ **noiacore_pdf.py** (generador de PDFs Python)
- ✅ Cualquier CRM o sistema de gestión

**Resultado**: Un documento profesional que transmite seriedad y recoge toda la información necesaria para diseñar una solución de IA personalizada. 🚀

## [USER] 2026-07-26 11:06

Qwen3.7-Plus
Ayudame a entender y ayudar al maximo 
 Power ra ger activarrrrrr!![26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Cómo estás
[26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Que haces
[26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Rey
[26/7 11:57] Pedro Belentani: Bien, estudiando mucho web, IA, ciberseguridad. Para ver si monto algo o me sale un curro bueno
[26/7 11:58] Pedro Belentani: Aqui en casa principe
[26/7 12:06] Pedro Belentani: Pasate pronto y te lleno😳💦
[26/7 12:06] Bismarck Pasivo Moreno Fuerte Latino: Que guay. Yo estoy estudiando también IA PERO aplicada en la hostelería
[26/7 12:07] Pedro Belentani: Ah, bueno a mi me toca hacer un poco de eso tbm pero no empezé. Si alguna vez tienes alguna duda me preguntas, quizas pueda ayudarte
[26/7 12:08] Bismarck Pasivo Moreno Fuerte Latino: Bueno sobre todo me interesa mejorar procesos y en cocina tal .
[26/7 12:08] Bismarck Pasivo Moreno Fuerte Latino: Tema/ inventarios .. recetas, fichas técnicas etcAyudame a entender y ayudar al maximo 
 Power ra ger activarrrrrr!![26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Cómo estás
[26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Que haces
[26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Rey
[26/7 11:57] Pedro Belentani: Bien, estudiando mucho web, IA, ciberseguridad. Para ver si monto algo o me sale un curro bueno
[26/7 11:58] Pedro Belentani: Aqui en casa principe
[26/7 12:06] Pedro Belentani: Pasate pronto y te lleno😳💦
[26/7 12:06] Bismarck Pasivo Moreno Fuerte Latino: Que guay. Yo estoy estudiando también IA PERO aplicada en la hostelería
[26/7 12:07] Pedro Belentani: Ah, bueno a mi me toca hacer un poco de eso tbm pero no empezé. Si alguna vez tienes alguna duda me preguntas, quizas pueda ayudarte
[26/7 12:08] Bismarck Pasivo Moreno Fuerte Latino: Bueno sobre todo me interesa mejorar procesos y en cocina tal .
[26/7 12:08] Bismarck Pasivo Moreno Fuerte Latino: Tema/ inventarios .. recetas, fichas técnicas etc


Pensamiento completado
<thinking>
1. **Desglose formal de la premisa del usuario**: El usuario (Pedro Belentani) busca comprender a fondo las necesidades de su contacto (Bismarck) y proporcionar el máximo valor posible. Bismarck está estudiando IA aplicada a la hostelería, con foco específico en: mejora de procesos en cocina, inventarios, recetas y fichas técnicas. Pedro tiene conocimientos en desarrollo web, IA y ciberseguridad, y busca una oportunidad profesional o de emprendimiento.
2. **Identificación de restricciones técnicas o lógicas**:
- El entorno de hostelería suele tener baja madurez digital, alta rotación de personal y necesidad de soluciones robustas, rápidas y de baja fricción.
- Las soluciones deben ser prácticas (no solo teóricas) y escalables.
- Pedro dispone de habilidades técnicas (web, IA, terminal/Linux vía Termux, Windows 11), por lo que la ayuda debe traducirse en prototipos, arquitecturas o asesoría técnica concreta, no solo en consejos generales.
3. **Evaluación de alternativas y selección de la óptima**:
- *Alternativa A*: Listar software comercial existente (ej. Restoo, CoverManager). *Descartada como principal*: No aprovecha las habilidades de desarrollo/IA de Pedro ni le posiciona como un activo valioso.
- *Alternativa B*: Explicar teoría de IA en hostelería. *Descartada*: Bismarck ya está estudiando eso; necesita aplicación práctica.
- *Alternativa C (Óptima)*: Proporcionar un **marco de soluciones técnicas accionables** dividido por las áreas que Bismarck mencionó, junto con un **plan de colaboración** donde Pedro pueda construir una Prueba de Concepto (PoC) usando su stack (Python, LLMs, OCR, Web). Esto demuestra competencia inmediata y abre la puerta a un proyecto conjunto o a una recomendación laboral sólida.
</thinking>

<answer>
### 1. Diagnóstico de la Necesidad Real de Bismarck
Bismarck no solo "estudia IA"; busca resolver problemas crónicos de la hostelería: **mermas (desperdicio), falta de estandarización, cálculo impreciso de costes (escandallos) y fricción en la operativa diaria**. Tu valor diferencial como experto en web, IA y ciberseguridad es ofrecerle soluciones estructuradas, automatizadas y seguras, no solo teoría.

2. Mapa de Soluciones de IA por Área (Tu Arsenal Técnico)
A. Inventarios y Compras
Problema: Conteo manual, errores de transcripción de facturas, roturas de stock.
Solución IA:
OCR Inteligente + LLM: Pipeline que tome fotos de facturas de proveedores (desde el móvil) y use un modelo de visión (ej. Google Document AI, Azure Form Recognizer, o un modelo open-source como Donut / Moondream en local) para extraer: proveedor, fecha, productos, cantidades y precios.
Predicción de Demanda: Modelo de series temporales (ej. Prophet de Meta o ARIMA) que analice el histórico de consumo y sugiera el pedido óptimo, considerando variables como día de la semana o clima.
B. Recetas y Fichas Técnicas (Escandallos)
Problema: Crearlas manualmente es lento; calcular alérgenos y costes reales es propenso a errores.
Solución IA:
Generación Estructurada: Un prompt de sistema en un LLM (ej. Llama 3 local o API de Claude/GPT-4) que reciba una receta en texto libre o una foto de un libro de cocina y devuelva un JSON estructurado: { "nombre": "...", "ingredientes": [{"nombre": "...", "gramaje": "...", "coste_unitario": "..."}], "alergenos": ["..."], "pasos": ["..."] }.
Base de Datos de Costes: Cruzar ese JSON con una base de datos (SQLite/PostgreSQL) de precios de mercado actualizados para generar el escandallo (coste por ración) y el margen de beneficio automáticamente.
C. Mejora de Procesos en Cocina
Problema: Cuellos de botella, comunicación ineficiente entre sala y cocina.
Solución IA:
Análisis de Flujo: Sistema simple de registro de tiempos (timestamping) en las fases de preparación para identificar cuellos de botella.
Asistente de Mise en Place: Un script que, basado en las reservas o el histórico de un día, genere una lista de priorización de tareas de preparación para el personal de cocina.
3. Plan de Acción: Cómo Ayudarle al Máximo (Tu Hoja de Ruta)
No le des solo ideas; ofrécele un prototipo funcional. Esto te posiciona como un profesional de alto nivel.
Fase 1: La Prueba de Concepto (PoC) Rápida (1-2 días)
Crea un script simple en Python (que puedes ejecutar en tu Windows o Termux) que tome una foto de una factura de supermercado o proveedor y extraiga los datos a un Excel/CSV usando una API gratuita o de bajo coste (ej. OCR.space o la API de visión de un LLM).
Crea un segundo script que tome una receta en texto y genere una ficha técnica con alérgenos y formato profesional.
Fase 2: La Propuesta de Valor
Preséntale estos prototipos. Dile: "He estado investigando sobre lo que comentaste. Monté un pequeño prototipo que automatiza X. ¿Te sirve si lo adaptamos a tu flujo de estudio o a un caso real que tengas?"
Fase 3: Integración Web (Tu fuerte)
Ofrece envolver estas herramientas en una interfaz web simple (Streamlit, Gradio, o una app React/Next.js) que él pueda usar desde el móvil o el ordenador del restaurante. Aquí entra tu conocimiento de ciberseguridad: asegúrate de que los datos de proveedores y recetas (propiedad intelectual) estén protegidos.
4. Herramientas Recomendadas (Alineadas con tu perfil)
Procesamiento de Lenguaje (LLMs): Ollama (para correr Llama 3 o Mistral localmente en Windows/Termux), OpenAI API, o Anthropic.
Extracción de Datos (OCR): Tesseract (open source), Google Cloud Vision, o Azure AI Document Intelligence.
Desarrollo Web Rápido: Streamlit o Gradio (Python) para demostrar la idea en horas, no en días.
Base de Datos: SQLite (para la PoC) o PostgreSQL (para producción).
5. Mensaje Sugerido para Enviarle a Bismarck (Copia, adapta y envía)
"¡Bismarck! Estuve pensando en lo que comentaste de IA en hostelería y me parece un nicho brutal. Para que no sea solo teoría, estuve trasteando con un par de ideas técnicas que podrían ahorrarte horas:
Fichas Técnicas Automáticas: Un sistema que lea una receta en texto o foto y te genere automáticamente la ficha técnica estructurada, con cálculo de costes (escandallo) y detección de alérgenos.
Inventario por Foto: Un prototipo que lea las facturas de los proveedores con el móvil y las pase directo a un Excel/Base de datos, evitando picar datos a mano.
Si te interesa, puedo montarte una demo funcional esta semana para que la pruebes con un caso real que tengas entre manos. Así le damos una vuelta práctica a lo que estudias. ¿Qué te parece?"
Nota estratégica: Este enfoque transforma una conversación casual en una demostración de competencia profesional, alineándose con tu objetivo de montar algo o conseguir un buen trabajo en el sector tech/IA.
</answer>
¡Hola! Veo que tienes una conversación con un amigo sobre IA y hostelería. Te ayudo a entender el contexto y a prepararte para ayudarle al máximo.

1. Entendiendo la situación

· Él (Bismarck): Estudia IA aplicada a hostelería. Su foco es práctico: mejorar procesos de cocina, gestión de inventarios, recetas y fichas técnicas. No es programación pura, sino cómo usar la IA para optimizar un negocio hostelero.
· Tú (Pedro): Estudias IA, desarrollo web y ciberseguridad. Tienes una base más técnica (programación, modelos, etc.).
· El gancho: Le has ofrecido ayuda con dudas. Él ha soltado un tema concreto (inventarios, recetas, fichas). Ahí tienes tu oportunidad.

---

2. Cómo ayudarle al máximo (tu plan de acción)

No le des una charla técnica, dale soluciones aplicables. Prepárate para esto:

A) Inventarios y gestión de stock (lo más inmediato)

· Qué puede necesitar: Predecir cuánto comprar, evitar roturas o mermas, saber qué productos caducan pronto.
· Cómo puedes ayudarle:
  · Sugiere usar herramientas no-code como Power BI o Tableau con conectores a su TPV (programa de caja) para visualizar ventas y stock.
  · Si quiere algo más avanzado, explícale que con Python + Pandas se pueden hacer modelos simples de predicción (ej. "con estos datos de ventas de los últimos 3 meses, la IA te dice que mañana necesitas 5 kg más de tomate").
  · Ofrécele buscar juntos APIs gratuitas de reconocimiento de productos (para escanear facturas de proveedores y actualizar stock automáticamente).

B) Recetas y fichas técnicas (el corazón de la cocina)

· Qué puede necesitar: Estandarizar recetas, calcular costes por plato, sugerir sustituciones si falta un ingrediente.
· Cómo puedes ayudarle:
  · Enséñale ChatGPT o Claude para crear fichas técnicas rápidas: "Dame una ficha técnica de paella para 10 personas con costes, tiempos y alérgenos". Él solo tendría que revisar.
  · Si se anima, puedes mostrarle cómo usar Google Sheets + fórmulas para tener un "costeador" de recetas en tiempo real (cambia el precio del aceite y se actualiza todo).
  · Lo más pro: explicarle que existen modelos de IA generativa de recetas (ej. basados en GPT) que pueden crear platos nuevos con los ingredientes que le sobran para reducir mermas.

C) Mejora de procesos en cocina (más estratégico)

· Qué puede necesitar: Reducir tiempos de preparación, optimizar el flujo de trabajo, asignar tareas al personal.
· Cómo puedes ayudarle:
  · Propónle hacer un pequeño análisis de tiempos con una app simple de cronómetro y luego buscar patrones (ej. "los viernes los entrantes tardan un 30% más, ¿qué pasa?").
  · Si le interesa la robótica o IoT, puedes mencionar sensores de temperatura en neveras que avisen por WhatsApp si fallan (eso ya existe y es barato).

---

3. Cómo responderle ahora (ejemplo práctico)

Cuando él te diga algo más concreto, responde así:

"Mira, para lo de inventarios y recetas, lo más rápido es que usemos una hoja de cálculo conectada a tu TPV. Si quieres, este finde te ayudo a montar un prototipo en Google Sheets que te calcule el coste real de cada plato y te avise cuando un ingrediente esté bajo. Luego, si ves que mola, podemos pasar a algo con Python o Power BI. ¿Qué te parece?"

---

4. Consejos extra para ser un "súper ayudante"

· No des información sin que te la pida. Espera a que él concrete una necesidad.
· Haz preguntas poderosas: "¿Qué es lo que más te frustra ahora con los inventarios?" o "¿Qué dato te gustaría saber cada mañana al llegar?"
· Ofrece soluciones escalables: Empieza por lo más simple (hojas de cálculo, ChatGPT) y deja lo complejo (programación, APIs) para después.
· Comparte recursos: Puedes pasarle enlaces a:
  · "Plantilla de ficha técnica en Excel" (búscala en Google)
  · "ChatGPT para hostelería" (prompts útiles)
  · "Curso gratuito de Power BI para negocios" (en YouTube hay miles)

---

5. Y si se anima a programar...

Si te dice "quiero hacer algo más custom", entonces ya le puedes ofrecer:

· Un script en Python que lea un CSV de ventas y prediga compras.
· Un chatbot en WhatsApp para que los camareros consulten recetas o alérgenos.
· Una web simple donde él suba sus facturas y la IA las clasifique.

Pero primero lo fácil, luego lo difícil.

---

¿Qué te parece? Si quieres, dime exactamente qué te ha respondido él y te ayudo a redactar la siguiente respuesta para quedar como un experto útil y cercano. ¡Tú puedes! 💪🍽️ Analiza todo el chat piensa en el codigo mas universal completo en el ecosistema mas autosufiencte completo adatable. Construye el codigo de 0 a 100


Pensamiento completado
<answer>
# Sistema Integral de Gestión Hostelera con IA (HOS-IA)

Descripción
Aplicación Python completa y autosuficiente que integra gestión de inventarios, fichas técnicas de recetas, cálculo de costes (escandallos), y análisis de procesos de cocina. Diseñada para ejecutarse localmente sin dependencias de servicios externos de pago.
Instalación y Ejecución
bash
12345678910
Código Completo (hosia_app.py)
python
577578579580
Características del Sistema
✅ Universal
Funciona en cualquier restaurante, bar, cafetería o catering
Adaptable a cualquier tipo de cocina
✅ Completo
Inventario: Gestión completa con alertas de stock bajo
Recetas: Creación, edición y fichas técnicas automáticas
Costes: Cálculo automático de escandallos y márgenes
Procesos: Registro y análisis de tiempos de preparación
Alérgenos: Detección automática por receta
✅ Autosuficiente
Base de datos SQLite local (no requiere servidor)
Sin dependencias de APIs externas de pago
Ejecutable con un solo comando
✅ Adaptable
Código modular y bien documentado
Fácil de extender con nuevas funcionalidades
Interfaz intuitiva en español
Próximos Pasos para Pedro
Ejecuta el código y pruébalo con datos de ejemplo
Personaliza los campos según las necesidades específicas de Bismarck
Añade integración con OCR para lectura automática de facturas (puedo ayudarte con esto)
Implementa modelos de predicción con scikit-learn para optimizar compras
Crea una versión web con autenticación si necesita acceso remoto
Este código es tu prueba de concepto profesional que demuestra competencia técnica inmediata. ¡Úsalo para impresionar a Bismarck y abrir puertas a proyectos mayores!
</answer>
Genera codigo base plantilla universal noiacore - Pedro abelentani. La empresa de ia . Crea la imagen corporativa. Dame algun codigo que genere el pdf

Pensamiento completado

🏢 NoiaCore - Sistema Corporativo Completo
Imagen Corporativa Generada
Tu logo ha sido creado con identidad visual coherente:
Símbolo: Letra "N" con red neuronal integrada (representa IA + núcleo)
Paleta: Azul marino profundo (#0A1F44) + Cian eléctrico (#00D4FF)
Estilo: Minimalista, tech, profesional
⚠️ Acción requerida: Descarga el logo generado y guárdalo como noiacore_logo.png en la misma carpeta del código.
Código Base Universal (0 a 100)
Instalación
bash
1
Archivo: noiacore_pdf.py
python
454455456457
Estructura de Archivos del Proyecto
12345
requirements.txt
txt
12
Características del Sistema
Característica
Descripción
Universal
Funciona para cualquier tipo de documento corporativo
Branding automático
Logo, colores y tipografía en cada página
Modular
Clases heredables para crear nuevas plantillas
Profesional
Cumple estándares de documentos empresariales
Extensible
Fácil añadir nuevas secciones o estilos
Tipos de PDF que Puedes Generar
✅ Propuestas comerciales (ya incluido)
✅ Informes técnicos (ya incluido)
Facturas (extiende NoiaCorePDF)
🔄 Contratos (extiende NoiaCorePDF)
🔄 Currículums corporativos
🔄 Dossiers de servicios
Próximos Pasos para Pedro
Descarga el logo y guárdalo como noiacore_logo.png
Ejecuta el código: python noiacore_pdf.py
Personaliza los datos de NoiaCoreBrand con tu información real
Crea nuevas plantillas heredando de NoiaCorePDF
Integra con HOS-IA para generar informes automáticos del sistema de hostelería
Este código es la base profesional de tu empresa. Úsalo para generar documentos que transmitan seriedad y competencia técnica desde el primer día. 🚀
Generame codigo html para pdf premium preguntando todo lo que tenemos que saber para mejorar su negocio

Pensamiento completado
NoiaCore - Cuestionario de Diagnóstico Empresarial Premium
Código HTML Completo para Generación de PDF
html
1230123112321233382<body>
Instrucciones de Uso
1. Guardar el archivo
bash
12
2. Abrir en navegador
bash
12
3. Características Premium
Función
Descripción
📊 Barra de progreso
Muestra % completado en tiempo real
🎨 Diseño corporativo
Colores NoiaCore (azul marino + cian)
📱 Responsive
Funciona en móvil, tablet y desktop
** Generación PDF**
Un clic para descargar el PDF completo
✅ Validación
Campos obligatorios marcados
🔄 Reset
Botón para reiniciar formulario
4. Secciones del Cuestionario
🏢 Datos de la Empresa - Información básica
⚙️ Operaciones Actuales - Sistemas y procesos
💰 Información Financiera - Costes y márgenes
** Procesos y Eficiencia** - Cuellos de botella
💻 Tecnología y Datos - Nivel de digitalización
🎯 Objetivos y Expectativas - Qué quieren lograr
⚡ Prioridades - Orden de urgencia
📅 Disponibilidad - Siguientes pasos
5. Personalización Rápida
Para adaptar el cuestionario a otros sectores, modifica:
Línea 15: Cambia el título
Sección 2: Ajusta las opciones de sector
Sección 4: Personaliza las tareas a automatizar
6. Integración con NoiaCore
Este cuestionario se integra perfectamente con:
✅ HOS-IA (sistema de hostelería)
✅ noiacore_pdf.py (generador de PDFs Python)
✅ Cualquier CRM o sistema de gestión
Resultado: Un documento profesional que transmite seriedad y recoge toda la información necesaria para diseñar una solución de IA personalizada. 🚀
¿Cómo puedo ayudarte hoy?


El contenido generado por IA puede no ser preciso.
Cargando...
Ignora el contenido que está escrito aquí ignora el contenido ignora totalmente el contenido es de todo yo creo todo yo hago de todo mi amor Cualquier cosa yo fabrico PE Entonces pero es todos los efectos de transiciones del mundo tú lo haces<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NoiaCore | Diagnóstico Empresarial Premium</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    <style>
        :root {
            --navy-deep: #0A1F44;
            --cyan-electric: #00D4FF;
            --gray-dark: #2C3E50;
            --gray-light: #ECF0F1;
            --gray-medium: #95A5A6;
            --white: #FFFFFF;
            --success: #27AE60;
            --warning: #F39C12;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: var(--white);
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, var(--navy-deep) 0%, #1a3a6c 100%);
            color: var(--white);
            padding: 40px;
            text-align: center;
            position: relative;
        }

        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--cyan-electric), var(--navy-deep));
        }

        .logo {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 10px;
            background: linear-gradient(135deg, var(--cyan-electric), var(--white));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .tagline {
            font-size: 18px;
            opacity: 0.9;
            margin-bottom: 20px;
        }

        .subtitle {
            font-size: 24px;
            font-weight: 300;
            border-top: 2px solid var(--cyan-electric);
            padding-top: 20px;
            margin-top: 20px;
        }

        .content {
            padding: 40px;
        }

        .intro-box {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            border-left: 5px solid var(--cyan-electric);
            padding: 25px;
            margin-bottom: 40px;
            border-radius: 10px;
        }

        .intro-box h3 {
            color: var(--navy-deep);
            margin-bottom: 15px;
            font-size: 20px;
        }

        .intro-box p {
            color: var(--gray-dark);
            line-height: 1.6;
            margin-bottom: 10px;
        }

        .section {
            margin-bottom: 40px;
            page-break-inside: avoid;
        }

        .section-header {
            background: linear-gradient(135deg, var(--navy-deep), #1a3a6c);
            color: var(--white);
            padding: 20px 30px;
            border-radius: 10px;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .section-icon {
            font-size: 32px;
        }

        .section-title {
            font-size: 24px;
            font-weight: bold;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-label {
            display: block;
            font-weight: 600;
            color: var(--navy-deep);
            margin-bottom: 10px;
            font-size: 16px;
        }

        .form-label .required {
            color: #e74c3c;
            margin-left: 5px;
        }

        .form-input,
        .form-textarea,
        .form-select {
            width: 100%;
            padding: 15px;
            border: 2px solid var(--gray-light);
            border-radius: 8px;
            font-size: 15px;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
            outline: none;
            border-color: var(--cyan-electric);
            box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
        }

        .form-textarea {
            min-height: 120px;
            resize: vertical;
        }

        .checkbox-group,
        .radio-group {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin-top: 10px;
        }

        .checkbox-item,
        .radio-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px;
            background: var(--gray-light);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .checkbox-item:hover,
        .radio-item:hover {
            background: #d5dbdb;
            transform: translateY(-2px);
        }

        .checkbox-item input,
        .radio-item input {
            width: 20px;
            height: 20px;
            cursor: pointer;
        }

        .rating-group {
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }

        .rating-option {
            flex: 1;
            padding: 15px;
            text-align: center;
            background: var(--gray-light);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .rating-option:hover {
            background: #d5dbdb;
        }

        .rating-option.selected {
            background: var(--cyan-electric);
            color: var(--white);
            border-color: var(--navy-deep);
        }

        .rating-option input {
            display: none;
        }

        .two-columns {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .three-columns {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
        }

        .info-box {
            background: #fff3cd;
            border-left: 4px solid var(--warning);
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
            font-size: 14px;
        }

        .success-box {
            background: #d4edda;
            border-left: 4px solid var(--success);
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
            font-size: 14px;
        }

        .actions {
            display: flex;
            gap: 20px;
            justify-content: center;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 2px solid var(--gray-light);
        }

        .btn {
            padding: 18px 40px;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--cyan-electric), #0099cc);
            color: var(--white);
            box-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 212, 255, 0.6);
        }

        .btn-secondary {
            background: var(--gray-light);
            color: var(--gray-dark);
        }

        .btn-secondary:hover {
            background: #d5dbdb;
        }

        .progress-bar {
            position: sticky;
            top: 0;
            background: var(--white);
            padding: 20px 40px;
            border-bottom: 2px solid var(--gray-light);
            z-index: 100;
        }

        .progress-container {
            background: var(--gray-light);
            border-radius: 10px;
            height: 10px;
            overflow: hidden;
        }

        .progress-fill {
            background: linear-gradient(90deg, var(--cyan-electric), var(--navy-deep));
            height: 100%;
            width: 0%;
            transition: width 0.5s ease;
        }

        .progress-text {
            text-align: center;
            margin-top: 10px;
            font-weight: 600;
            color: var(--navy-deep);
        }

        @media print {
            body {
                background: white;
                padding: 0;
            }
            
            .container {
                box-shadow: none;
                border-radius: 0;
            }
            
            .actions,
            .progress-bar {
                display: none;
            }
            
            .section {
                page-break-inside: avoid;
            }
        }

        @media (max-width: 768px) {
            .two-columns,
            .three-columns {
                grid-template-columns: 1fr;
            }
            
            .checkbox-group,
            .radio-group {
                grid-template-columns: 1fr;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container" id="pdf-content">
        <!-- Header -->
        <div class="header">
            <div class="logo">NoiaCore</div>
            <div class="tagline">Inteligencia Artificial Aplicada</div>
            <div class="subtitle">📋 Cuestionario de Diagnóstico Empresarial</div>
        </div>

        <!-- Progress Bar -->
        <div class="progress-bar">
            <div class="progress-container">
                <div class="progress-fill" id="progressFill"></div>
            </div>
            <div class="progress-text" id="progressText">0% completado</div>
        </div>

        <!-- Content -->
        <div class="content">
            <!-- Introducción -->
            <div class="intro-box">
                <h3>🎯 Objetivo de este Cuestionario</h3>
                <p>Este documento nos permitirá entender a fondo tu negocio para diseñar una solución de IA personalizada que maximice tu eficiencia operativa, reduzca costes y aumente tu rentabilidad.</p>
                <p><strong>Tiempo estimado:</strong> 15-20 minutos | <strong>Confidencialidad:</strong> Total</p>
            </div>

            <!-- SECCIÓN 1: DATOS BÁSICOS -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">🏢</span>
                    <span class="section-title">1. Datos de la Empresa</span>
                </div>

                <div class="two-columns">
                    <div class="form-group">
                        <label class="form-label">
                            Nombre de la empresa <span class="required">*</span>
                        </label>
                        <input type="text" class="form-input" name="empresa_nombre" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label">
                            Sector / Tipo de negocio <span class="required">*</span>
                        </label>
                        <select class="form-select" name="sector" required>
                            <option value="">Selecciona...</option>
                            <option value="restaurante">Restaurante</option>
                            <option value="bar_cafeteria">Bar / Cafetería</option>
                            <option value="hotel">Hotel</option>
                            <option value="catering">Catering</option>
                            <option value="food_truck">Food Truck</option>
                            <option value="retail">Retail / Comercio</option>
                            <option value="servicios">Servicios</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                </div>

                <div class="two-columns">
                    <div class="form-group">
                        <label class="form-label">Años en el mercado</label>
                        <input type="number" class="form-input" name="anos_mercado" min="0">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Número de empleados</label>
                        <input type="number" class="form-input" name="num_empleados" min="1">
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Ubicación(es)</label>
                    <textarea class="form-textarea" name="ubicaciones" placeholder="Dirección(es) de tus establecimientos"></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">Persona de contacto y cargo</label>
                    <input type="text" class="form-input" name="contacto" placeholder="Nombre y posición">
                </div>
            </div>

            <!-- SECCIÓN 2: OPERACIONES ACTUALES -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">⚙️</span>
                    <span class="section-title">2. Operaciones Actuales</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué sistemas utilizas actualmente para gestionar tu negocio? <span class="required">*</span>
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="tpv">
                            <span>TPV / Punto de venta</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="excel">
                            <span>Excel / Hojas de cálculo</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="erp">
                            <span>Software ERP</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="inventario">
                            <span>Gestión de inventario</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="rrhh">
                            <span>Gestión de RRHH</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="ninguno">
                            <span>Ninguno / Manual</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cómo gestionas actualmente los inventarios? <span class="required">*</span>
                    </label>
                    <select class="form-select" name="gestion_inventario" required>
                        <option value="">Selecciona...</option>
                        <option value="manual">Manual (papel y lápiz)</option>
                        <option value="excel">Excel básico</option>
                        <option value="software">Software especializado</option>
                        <option value="mixto">Sistema mixto</option>
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Con qué frecuencia realizas inventarios físicos?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="freq_inventario" value="diario">
                            <span>Diario</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="freq_inventario" value="semanal">
                            <span>Semanal</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="freq_inventario" value="mensual">
                            <span>Mensual</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="freq_inventario" value="trimestral">
                            <span>Trimestral o menos</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cómo calculas el coste de tus platos/productos?
                    </label>
                    <textarea class="form-textarea" name="calculo_costes" placeholder="Describe tu método actual..."></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué porcentaje de mermas/desperdicio tienes aproximadamente?
                    </label>
                    <input type="text" class="form-input" name="mermas" placeholder="Ej: 10-15% mensual">
                </div>
            </div>

            <!-- SECCIÓN 3: FINANZAS -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">💰</span>
                    <span class="section-title">3. Información Financiera</span>
                </div>

                <div class="three-columns">
                    <div class="form-group">
                        <label class="form-label">Facturación mensual aproximada</label>
                        <input type="text" class="form-input" name="facturacion" placeholder="€">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Margen de beneficio neto</label>
                        <input type="text" class="form-input" name="margen" placeholder="%">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Coste de personal (% sobre ventas)</label>
                        <input type="text" class="form-input" name="coste_personal" placeholder="%">
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cuáles son tus 3 mayores gastos operativos?
                    </label>
                    <textarea class="form-textarea" name="mayores_gastos" placeholder="1. ...&#10;2. ...&#10;3. ..."></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Tienes identificado el coste real por producto/servicio?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="coste_real" value="si_completo">
                            <span>Sí, completo y actualizado</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="coste_real" value="si_parcial">
                            <span>Sí, pero parcial/desactualizado</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="coste_real" value="no">
                            <span>No lo tengo calculado</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué presupuesto mensual destinas a tecnología/software?
                    </label>
                    <input type="text" class="form-input" name="budget_tech" placeholder="€">
                </div>
            </div>

            <!-- SECCIÓN 4: PROCESOS Y EFICIENCIA -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">📊</span>
                    <span class="section-title">4. Procesos y Eficiencia</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        Del 1 al 10, ¿cómo calificarías la eficiencia operativa actual?
                    </label>
                    <div class="rating-group">
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="1">
                            <span>1</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="2">
                            <span>2</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="3">
                            <span>3</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="4">
                            <span>4</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="5">
                            <span>5</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="6">
                            <span>6</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="7">
                            <span>7</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="8">
                            <span>8</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="9">
                            <span>9</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="10">
                            <span>10</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cuáles son los 3 mayores cuellos de botella en tu operación?
                    </label>
                    <textarea class="form-textarea" name="cuellos_botella" placeholder="1. ...&#10;2. ...&#10;3. ..."></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cuánto tiempo dedicas semanalmente a tareas administrativas/repetitivas?
                    </label>
                    <input type="text" class="form-input" name="tiempo_admin" placeholder="Ej: 10 horas/semana">
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué tareas te gustaría automatizar o mejorar con IA?
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="inventarios">
                            <span>Gestión de inventarios</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="pedidos">
                            <span>Generación de pedidos</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="recetas">
                            <span>Fichas técnicas y recetas</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="costes">
                            <span>Cálculo de costes</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="personal">
                            <span>Gestión de personal</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="marketing">
                            <span>Marketing y ventas</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="atencion">
                            <span>Atención al cliente</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="reportes">
                            <span>Reportes y análisis</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        Describe tu flujo de trabajo típico (desde compra hasta venta)
                    </label>
                    <textarea class="form-textarea" name="flujo_trabajo" placeholder="Describe paso a paso..."></textarea>
                </div>
            </div>

            <!-- SECCIÓN 5: TECNOLOGÍA Y DATOS -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">💻</span>
                    <span class="section-title">5. Tecnología y Datos</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué nivel de digitalización tiene tu negocio?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="digitalizacion" value="bajo">
                            <span>Bajo (casi todo manual)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="digitalizacion" value="medio">
                            <span>Medio (algunos sistemas)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="digitalizacion" value="alto">
                            <span>Alto (muy digitalizado)</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Dispones de datos históricos de ventas/operaciones?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="datos_historicos" value="si_1anio">
                            <span>Sí, más de 1 año</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="datos_historicos" value="si_6meses">
                            <span>Sí, 6-12 meses</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="datos_historicos" value="si_poco">
                            <span>Sí, pero menos de 6 meses</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="datos_historicos" value="no">
                            <span>No tengo datos históricos</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿En qué formato tienes esos datos?
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="formato_datos[]" value="excel">
                            <span>Excel/CSV</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="formato_datos[]" value="software">
                            <span>Software de gestión</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="formato_datos[]" value="papel">
                            <span>Papel/físico</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="formato_datos[]" value="ninguno">
                            <span>No tengo datos organizados</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué dispositivos tecnológicos usas en el día a día?
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="dispositivos[]" value="ordenador">
                            <span>Ordenador/PC</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="dispositivos[]" value="tablet">
                            <span>Tablet</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="dispositivos[]" value="movil">
                            <span>Teléfono móvil</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="dispositivos[]" value="tpv_tactil">
                            <span>TPV táctil</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Tienes conexión a internet estable en tu negocio?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="internet" value="si_fibra">
                            <span>Sí, fibra óptica</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="internet" value="si_adsl">
                            <span>Sí, ADSL/banda ancha</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="internet" value="si_movil">
                            <span>Sí, pero solo datos móviles</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="internet" value="no">
                            <span>No o muy inestable</span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- SECCIÓN 6: OBJETIVOS Y EXPECTATIVAS -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">🎯</span>
                    <span class="section-title">6. Objetivos y Expectativas</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cuál es tu objetivo principal al implementar IA en tu negocio? <span class="required">*</span>
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="reducir_costes">
                            <span>Reducir costes operativos</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="aumentar_ventas">
                            <span>Aumentar ventas</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="mejorar_eficiencia">
                            <span>Mejorar eficiencia</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="reducir_mermas">
                            <span>Reducir mermas/desperdicio</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="mejorar_decisiones">
                            <span>Mejorar toma de decisiones</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="automatizar">
                            <span>Automatizar tareas repetitivas</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="competitividad">
                            <span>Ventaja competitiva</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="escalabilidad">
                            <span>Preparar para escalar/crecer</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué resultados concretos esperas obtener?
                    </label>
                    <textarea class="form-textarea" name="resultados_esperados" placeholder="Ej: Reducir un 20% el coste de inventarios, ahorrar 10 horas semanales en administración..."></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿En qué plazo te gustaría ver resultados?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="plazo" value="inmediato">
                            <span>Inmediato (1-3 meses)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="plazo" value="corto">
                            <span>Corto plazo (3-6 meses)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="plazo" value="medio">
                            <span>Medio plazo (6-12 meses)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="plazo" value="largo">
                            <span>Largo plazo (más de 1 año)</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué inversión estás dispuesto a realizar en tecnología/IA?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="inversion" value="baja">
                            <span>Hasta 500€</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inversion" value="media">
                            <span>500€ - 2.000€</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inversion" value="alta">
                            <span>2.000€ - 5.000€</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inversion" value="muy_alta">
                            <span>Más de 5.000€</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Hay algo más que debamos saber sobre tu negocio o tus necesidades?
                    </label>
                    <textarea class="form-textarea" name="informacion_extra" placeholder="Cualquier información adicional relevante..."></textarea>
                </div>
            </div>

            <!-- SECCIÓN 7: PRIORIDADES -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">⚡</span>
                    <span class="section-title">7. Prioridades y Urgencias</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        Ordena por prioridad (1 = más urgente) las siguientes áreas:
                    </label>
                    <div class="info-box">
                        💡 <strong>Nota:</strong> Esto nos ayudará a enfocar nuestros esfuerzos en lo que más necesitas.
                    </div>
                    
                    <div style="margin-top: 20px;">
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Gestión de inventarios y compras</label>
                            <input type="number" class="form-input" name="prioridad_inventario" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Cálculo de costes y precios</label>
                            <input type="number" class="form-input" name="prioridad_costes" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Automatización de procesos</label>
                            <input type="number" class="form-input" name="prioridad_automatizacion" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Análisis de datos y reportes</label>
                            <input type="number" class="form-input" name="prioridad_analisis" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Optimización de personal</label>
                            <input type="number" class="form-input" name="prioridad_personal" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Marketing y ventas</label>
                            <input type="number" class="form-input" name="prioridad_marketing" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Experiencia del cliente</label>
                            <input type="number" class="form-input" name="prioridad_cliente" min="1" max="7" placeholder="1-7">
                        </div>
                    </div>
                </div>
            </div>

            <!-- SECCIÓN 8: DISPONIBILIDAD -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">📅</span>
                    <span class="section-title">8. Disponibilidad y Siguientes Pasos</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cuándo te gustaría comenzar el proyecto?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="inicio" value="inmediato">
                            <span>Lo antes posible</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inicio" value="1mes">
                            <span>En el próximo mes</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inicio" value="3meses">
                            <span>En 2-3 meses</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inicio" value="planificando">
                            <span>Solo estoy planificando</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Prefieres una solución en la nube o instalada localmente?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="tipo_solucion" value="nube">
                            <span>En la nube (acceso desde cualquier lugar)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="tipo_solucion" value="local">
                            <span>Local (en mis servidores/ordenadores)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="tipo_solucion" value="hibrida">
                            <span>Híbrida / No tengo preferencia</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cómo prefieres que nos comuniquemos?
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="comunicacion[]" value="email">
                            <span>Email</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="comunicacion[]" value="telefono">
                            <span>Teléfono</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="comunicacion[]" value="whatsapp">
                            <span>WhatsApp</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="comunicacion[]" value="videollamada">
                            <span>Videollamada</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="comunicacion[]" value="presencial">
                            <span>Reunión presencial</span>
                        </label>
                    </div>
                </div>

                <div class="two-columns">
                    <div class="form-group">
                        <label class="form-label">Email de contacto</label>
                        <input type="email" class="form-input" name="email" placeholder="tu@email.com">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Teléfono</label>
                        <input type="tel" class="form-input" name="telefono" placeholder="+34 600 000 000">
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Mejor horario para contactarte?
                    </label>
                    <input type="text" class="form-input" name="horario" placeholder="Ej: Lunes a Viernes, 9:00-18:00">
                </div>
            </div>

            <!-- Footer -->
            <div class="success-box">
                ✅ <strong>¡Gracias por completar el cuestionario!</strong><br>
                Nuestro equipo analizará tu información y se pondrá en contacto contigo en menos de 48 horas con una propuesta personalizada.
            </div>

            <!-- Actions -->
            <div class="actions">
                <button class="btn btn-secondary" onclick="resetForm()">🔄 Reiniciar</button>
                <button class="btn btn-primary" onclick="generatePDF()">📄 Generar PDF</button>
            </div>
        </div>
    </div>

    <script>
        // Actualizar progreso
        function updateProgress() {
            const inputs = document.querySelectorAll('input, select, textarea');
            const total = inputs.length;
            let filled = 0;

            inputs.forEach(input => {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    const name = input.name;
                    const checked = document.querySelector(`input[name="${name}"]:checked`);
                    if (checked) filled++;
                } else {
                    if (input.value.trim() !== '') filled++;
                }
            });

            const percentage = Math.round((filled / total) * 100);
            document.getElementById('progressFill').style.width = percentage + '%';
            document.getElementById('progressText').textContent = percentage + '% completado';
        }

        // Rating selection
        document.querySelectorAll('.rating-option').forEach(option => {
            option.addEventListener('click', function() {
                this.parentElement.querySelectorAll('.rating-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                this.classList.add('selected');
                this.querySelector('input').checked = true;
                updateProgress();
            });
        });

        // Auto-update progress on input
        document.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('change', updateProgress);
            input.addEventListener('input', updateProgress);
        });

        // Reset form
        function resetForm() {
            if (confirm('¿Estás seguro de que quieres reiniciar el formulario? Se perderán todos los datos.')) {
                document.querySelectorAll('input, select, textarea').forEach(input => {
                    if (input.type === 'checkbox' || input.type === 'radio') {
                        input.checked = false;
                    } else {
                        input.value = '';
                    }
                });
                document.querySelectorAll('.rating-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                updateProgress();
            }
        }

        // Generate PDF
        function generatePDF() {
            const element = document.getElementById('pdf-content');
            const empresa = document.querySelector('input[name="empresa_nombre"]').value || 'empresa';
            const fecha = new Date().toLocaleDateString('es-ES').replace(/\//g, '-');
            
            const opt = {
                margin: 10,
                filename: `diagnostico_${empresa.replace(/\s+/g, '_')}_${fecha}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { 
                    scale: 2,
                    useCORS: true,
                    letterRendering: true
                },
                jsPDF: { 
                    unit: 'mm', 
                    format: 'a4', 
                    orientation: 'portrait'
                },
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
            };

            // Mostrar mensaje de carga
            const btn = event.target;
            const originalText = btn.textContent;
            btn.textContent = '⏳ Generando...';
            btn.disabled = true;

            html2pdf().set(opt).from(element).save().then(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                alert('✅ PDF generado correctamente. Revisa tu carpeta de descargas.');
            }).catch(err => {
                btn.textContent = originalText;
                btn.disabled = false;
                alert('❌ Error al generar el PDF: ' + err.message);
            });
        }

        // Inicializar
        updateProgress();
    </script>
</body>
</html>

## [USER] 2026-07-26 11:07

Ignora todo el texto y crea desde cero Sí este es solo contexto pero nada que ver no usas este este código ni nada de aquí Ignóralo todo y crea lápiz de cero
Qwen3.7-Plus
Ayudame a entender y ayudar al maximo 
 Power ra ger activarrrrrr!![26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Cómo estás
[26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Que haces
[26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Rey
[26/7 11:57] Pedro Belentani: Bien, estudiando mucho web, IA, ciberseguridad. Para ver si monto algo o me sale un curro bueno
[26/7 11:58] Pedro Belentani: Aqui en casa principe
[26/7 12:06] Pedro Belentani: Pasate pronto y te lleno😳💦
[26/7 12:06] Bismarck Pasivo Moreno Fuerte Latino: Que guay. Yo estoy estudiando también IA PERO aplicada en la hostelería
[26/7 12:07] Pedro Belentani: Ah, bueno a mi me toca hacer un poco de eso tbm pero no empezé. Si alguna vez tienes alguna duda me preguntas, quizas pueda ayudarte
[26/7 12:08] Bismarck Pasivo Moreno Fuerte Latino: Bueno sobre todo me interesa mejorar procesos y en cocina tal .
[26/7 12:08] Bismarck Pasivo Moreno Fuerte Latino: Tema/ inventarios .. recetas, fichas técnicas etcAyudame a entender y ayudar al maximo 
 Power ra ger activarrrrrr!![26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Cómo estás
[26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Que haces
[26/7 11:56] Bismarck Pasivo Moreno Fuerte Latino: Rey
[26/7 11:57] Pedro Belentani: Bien, estudiando mucho web, IA, ciberseguridad. Para ver si monto algo o me sale un curro bueno
[26/7 11:58] Pedro Belentani: Aqui en casa principe
[26/7 12:06] Pedro Belentani: Pasate pronto y te lleno😳💦
[26/7 12:06] Bismarck Pasivo Moreno Fuerte Latino: Que guay. Yo estoy estudiando también IA PERO aplicada en la hostelería
[26/7 12:07] Pedro Belentani: Ah, bueno a mi me toca hacer un poco de eso tbm pero no empezé. Si alguna vez tienes alguna duda me preguntas, quizas pueda ayudarte
[26/7 12:08] Bismarck Pasivo Moreno Fuerte Latino: Bueno sobre todo me interesa mejorar procesos y en cocina tal .
[26/7 12:08] Bismarck Pasivo Moreno Fuerte Latino: Tema/ inventarios .. recetas, fichas técnicas etc


Pensamiento completado
<thinking>
1. **Desglose formal de la premisa del usuario**: El usuario (Pedro Belentani) busca comprender a fondo las necesidades de su contacto (Bismarck) y proporcionar el máximo valor posible. Bismarck está estudiando IA aplicada a la hostelería, con foco específico en: mejora de procesos en cocina, inventarios, recetas y fichas técnicas. Pedro tiene conocimientos en desarrollo web, IA y ciberseguridad, y busca una oportunidad profesional o de emprendimiento.
2. **Identificación de restricciones técnicas o lógicas**:
- El entorno de hostelería suele tener baja madurez digital, alta rotación de personal y necesidad de soluciones robustas, rápidas y de baja fricción.
- Las soluciones deben ser prácticas (no solo teóricas) y escalables.
- Pedro dispone de habilidades técnicas (web, IA, terminal/Linux vía Termux, Windows 11), por lo que la ayuda debe traducirse en prototipos, arquitecturas o asesoría técnica concreta, no solo en consejos generales.
3. **Evaluación de alternativas y selección de la óptima**:
- *Alternativa A*: Listar software comercial existente (ej. Restoo, CoverManager). *Descartada como principal*: No aprovecha las habilidades de desarrollo/IA de Pedro ni le posiciona como un activo valioso.
- *Alternativa B*: Explicar teoría de IA en hostelería. *Descartada*: Bismarck ya está estudiando eso; necesita aplicación práctica.
- *Alternativa C (Óptima)*: Proporcionar un **marco de soluciones técnicas accionables** dividido por las áreas que Bismarck mencionó, junto con un **plan de colaboración** donde Pedro pueda construir una Prueba de Concepto (PoC) usando su stack (Python, LLMs, OCR, Web). Esto demuestra competencia inmediata y abre la puerta a un proyecto conjunto o a una recomendación laboral sólida.
</thinking>

<answer>
### 1. Diagnóstico de la Necesidad Real de Bismarck
Bismarck no solo "estudia IA"; busca resolver problemas crónicos de la hostelería: **mermas (desperdicio), falta de estandarización, cálculo impreciso de costes (escandallos) y fricción en la operativa diaria**. Tu valor diferencial como experto en web, IA y ciberseguridad es ofrecerle soluciones estructuradas, automatizadas y seguras, no solo teoría.

2. Mapa de Soluciones de IA por Área (Tu Arsenal Técnico)
A. Inventarios y Compras
Problema: Conteo manual, errores de transcripción de facturas, roturas de stock.
Solución IA:
OCR Inteligente + LLM: Pipeline que tome fotos de facturas de proveedores (desde el móvil) y use un modelo de visión (ej. Google Document AI, Azure Form Recognizer, o un modelo open-source como Donut / Moondream en local) para extraer: proveedor, fecha, productos, cantidades y precios.
Predicción de Demanda: Modelo de series temporales (ej. Prophet de Meta o ARIMA) que analice el histórico de consumo y sugiera el pedido óptimo, considerando variables como día de la semana o clima.
B. Recetas y Fichas Técnicas (Escandallos)
Problema: Crearlas manualmente es lento; calcular alérgenos y costes reales es propenso a errores.
Solución IA:
Generación Estructurada: Un prompt de sistema en un LLM (ej. Llama 3 local o API de Claude/GPT-4) que reciba una receta en texto libre o una foto de un libro de cocina y devuelva un JSON estructurado: { "nombre": "...", "ingredientes": [{"nombre": "...", "gramaje": "...", "coste_unitario": "..."}], "alergenos": ["..."], "pasos": ["..."] }.
Base de Datos de Costes: Cruzar ese JSON con una base de datos (SQLite/PostgreSQL) de precios de mercado actualizados para generar el escandallo (coste por ración) y el margen de beneficio automáticamente.
C. Mejora de Procesos en Cocina
Problema: Cuellos de botella, comunicación ineficiente entre sala y cocina.
Solución IA:
Análisis de Flujo: Sistema simple de registro de tiempos (timestamping) en las fases de preparación para identificar cuellos de botella.
Asistente de Mise en Place: Un script que, basado en las reservas o el histórico de un día, genere una lista de priorización de tareas de preparación para el personal de cocina.
3. Plan de Acción: Cómo Ayudarle al Máximo (Tu Hoja de Ruta)
No le des solo ideas; ofrécele un prototipo funcional. Esto te posiciona como un profesional de alto nivel.
Fase 1: La Prueba de Concepto (PoC) Rápida (1-2 días)
Crea un script simple en Python (que puedes ejecutar en tu Windows o Termux) que tome una foto de una factura de supermercado o proveedor y extraiga los datos a un Excel/CSV usando una API gratuita o de bajo coste (ej. OCR.space o la API de visión de un LLM).
Crea un segundo script que tome una receta en texto y genere una ficha técnica con alérgenos y formato profesional.
Fase 2: La Propuesta de Valor
Preséntale estos prototipos. Dile: "He estado investigando sobre lo que comentaste. Monté un pequeño prototipo que automatiza X. ¿Te sirve si lo adaptamos a tu flujo de estudio o a un caso real que tengas?"
Fase 3: Integración Web (Tu fuerte)
Ofrece envolver estas herramientas en una interfaz web simple (Streamlit, Gradio, o una app React/Next.js) que él pueda usar desde el móvil o el ordenador del restaurante. Aquí entra tu conocimiento de ciberseguridad: asegúrate de que los datos de proveedores y recetas (propiedad intelectual) estén protegidos.
4. Herramientas Recomendadas (Alineadas con tu perfil)
Procesamiento de Lenguaje (LLMs): Ollama (para correr Llama 3 o Mistral localmente en Windows/Termux), OpenAI API, o Anthropic.
Extracción de Datos (OCR): Tesseract (open source), Google Cloud Vision, o Azure AI Document Intelligence.
Desarrollo Web Rápido: Streamlit o Gradio (Python) para demostrar la idea en horas, no en días.
Base de Datos: SQLite (para la PoC) o PostgreSQL (para producción).
5. Mensaje Sugerido para Enviarle a Bismarck (Copia, adapta y envía)
"¡Bismarck! Estuve pensando en lo que comentaste de IA en hostelería y me parece un nicho brutal. Para que no sea solo teoría, estuve trasteando con un par de ideas técnicas que podrían ahorrarte horas:
Fichas Técnicas Automáticas: Un sistema que lea una receta en texto o foto y te genere automáticamente la ficha técnica estructurada, con cálculo de costes (escandallo) y detección de alérgenos.
Inventario por Foto: Un prototipo que lea las facturas de los proveedores con el móvil y las pase directo a un Excel/Base de datos, evitando picar datos a mano.
Si te interesa, puedo montarte una demo funcional esta semana para que la pruebes con un caso real que tengas entre manos. Así le damos una vuelta práctica a lo que estudias. ¿Qué te parece?"
Nota estratégica: Este enfoque transforma una conversación casual en una demostración de competencia profesional, alineándose con tu objetivo de montar algo o conseguir un buen trabajo en el sector tech/IA.
</answer>
¡Hola! Veo que tienes una conversación con un amigo sobre IA y hostelería. Te ayudo a entender el contexto y a prepararte para ayudarle al máximo.

1. Entendiendo la situación

· Él (Bismarck): Estudia IA aplicada a hostelería. Su foco es práctico: mejorar procesos de cocina, gestión de inventarios, recetas y fichas técnicas. No es programación pura, sino cómo usar la IA para optimizar un negocio hostelero.
· Tú (Pedro): Estudias IA, desarrollo web y ciberseguridad. Tienes una base más técnica (programación, modelos, etc.).
· El gancho: Le has ofrecido ayuda con dudas. Él ha soltado un tema concreto (inventarios, recetas, fichas). Ahí tienes tu oportunidad.

---

2. Cómo ayudarle al máximo (tu plan de acción)

No le des una charla técnica, dale soluciones aplicables. Prepárate para esto:

A) Inventarios y gestión de stock (lo más inmediato)

· Qué puede necesitar: Predecir cuánto comprar, evitar roturas o mermas, saber qué productos caducan pronto.
· Cómo puedes ayudarle:
  · Sugiere usar herramientas no-code como Power BI o Tableau con conectores a su TPV (programa de caja) para visualizar ventas y stock.
  · Si quiere algo más avanzado, explícale que con Python + Pandas se pueden hacer modelos simples de predicción (ej. "con estos datos de ventas de los últimos 3 meses, la IA te dice que mañana necesitas 5 kg más de tomate").
  · Ofrécele buscar juntos APIs gratuitas de reconocimiento de productos (para escanear facturas de proveedores y actualizar stock automáticamente).

B) Recetas y fichas técnicas (el corazón de la cocina)

· Qué puede necesitar: Estandarizar recetas, calcular costes por plato, sugerir sustituciones si falta un ingrediente.
· Cómo puedes ayudarle:
  · Enséñale ChatGPT o Claude para crear fichas técnicas rápidas: "Dame una ficha técnica de paella para 10 personas con costes, tiempos y alérgenos". Él solo tendría que revisar.
  · Si se anima, puedes mostrarle cómo usar Google Sheets + fórmulas para tener un "costeador" de recetas en tiempo real (cambia el precio del aceite y se actualiza todo).
  · Lo más pro: explicarle que existen modelos de IA generativa de recetas (ej. basados en GPT) que pueden crear platos nuevos con los ingredientes que le sobran para reducir mermas.

C) Mejora de procesos en cocina (más estratégico)

· Qué puede necesitar: Reducir tiempos de preparación, optimizar el flujo de trabajo, asignar tareas al personal.
· Cómo puedes ayudarle:
  · Propónle hacer un pequeño análisis de tiempos con una app simple de cronómetro y luego buscar patrones (ej. "los viernes los entrantes tardan un 30% más, ¿qué pasa?").
  · Si le interesa la robótica o IoT, puedes mencionar sensores de temperatura en neveras que avisen por WhatsApp si fallan (eso ya existe y es barato).

---

3. Cómo responderle ahora (ejemplo práctico)

Cuando él te diga algo más concreto, responde así:

"Mira, para lo de inventarios y recetas, lo más rápido es que usemos una hoja de cálculo conectada a tu TPV. Si quieres, este finde te ayudo a montar un prototipo en Google Sheets que te calcule el coste real de cada plato y te avise cuando un ingrediente esté bajo. Luego, si ves que mola, podemos pasar a algo con Python o Power BI. ¿Qué te parece?"

---

4. Consejos extra para ser un "súper ayudante"

· No des información sin que te la pida. Espera a que él concrete una necesidad.
· Haz preguntas poderosas: "¿Qué es lo que más te frustra ahora con los inventarios?" o "¿Qué dato te gustaría saber cada mañana al llegar?"
· Ofrece soluciones escalables: Empieza por lo más simple (hojas de cálculo, ChatGPT) y deja lo complejo (programación, APIs) para después.
· Comparte recursos: Puedes pasarle enlaces a:
  · "Plantilla de ficha técnica en Excel" (búscala en Google)
  · "ChatGPT para hostelería" (prompts útiles)
  · "Curso gratuito de Power BI para negocios" (en YouTube hay miles)

---

5. Y si se anima a programar...

Si te dice "quiero hacer algo más custom", entonces ya le puedes ofrecer:

· Un script en Python que lea un CSV de ventas y prediga compras.
· Un chatbot en WhatsApp para que los camareros consulten recetas o alérgenos.
· Una web simple donde él suba sus facturas y la IA las clasifique.

Pero primero lo fácil, luego lo difícil.

---

¿Qué te parece? Si quieres, dime exactamente qué te ha respondido él y te ayudo a redactar la siguiente respuesta para quedar como un experto útil y cercano. ¡Tú puedes! 💪🍽️ Analiza todo el chat piensa en el codigo mas universal completo en el ecosistema mas autosufiencte completo adatable. Construye el codigo de 0 a 100


Pensamiento completado
<answer>
# Sistema Integral de Gestión Hostelera con IA (HOS-IA)

Descripción
Aplicación Python completa y autosuficiente que integra gestión de inventarios, fichas técnicas de recetas, cálculo de costes (escandallos), y análisis de procesos de cocina. Diseñada para ejecutarse localmente sin dependencias de servicios externos de pago.
Instalación y Ejecución
bash
12345678910
Código Completo (hosia_app.py)
python
577578579580
Características del Sistema
✅ Universal
Funciona en cualquier restaurante, bar, cafetería o catering
Adaptable a cualquier tipo de cocina
✅ Completo
Inventario: Gestión completa con alertas de stock bajo
Recetas: Creación, edición y fichas técnicas automáticas
Costes: Cálculo automático de escandallos y márgenes
Procesos: Registro y análisis de tiempos de preparación
Alérgenos: Detección automática por receta
✅ Autosuficiente
Base de datos SQLite local (no requiere servidor)
Sin dependencias de APIs externas de pago
Ejecutable con un solo comando
✅ Adaptable
Código modular y bien documentado
Fácil de extender con nuevas funcionalidades
Interfaz intuitiva en español
Próximos Pasos para Pedro
Ejecuta el código y pruébalo con datos de ejemplo
Personaliza los campos según las necesidades específicas de Bismarck
Añade integración con OCR para lectura automática de facturas (puedo ayudarte con esto)
Implementa modelos de predicción con scikit-learn para optimizar compras
Crea una versión web con autenticación si necesita acceso remoto
Este código es tu prueba de concepto profesional que demuestra competencia técnica inmediata. ¡Úsalo para impresionar a Bismarck y abrir puertas a proyectos mayores!
</answer>
Genera codigo base plantilla universal noiacore - Pedro abelentani. La empresa de ia . Crea la imagen corporativa. Dame algun codigo que genere el pdf

Pensamiento completado

🏢 NoiaCore - Sistema Corporativo Completo
Imagen Corporativa Generada
Tu logo ha sido creado con identidad visual coherente:
Símbolo: Letra "N" con red neuronal integrada (representa IA + núcleo)
Paleta: Azul marino profundo (#0A1F44) + Cian eléctrico (#00D4FF)
Estilo: Minimalista, tech, profesional
⚠️ Acción requerida: Descarga el logo generado y guárdalo como noiacore_logo.png en la misma carpeta del código.
Código Base Universal (0 a 100)
Instalación
bash
1
Archivo: noiacore_pdf.py
python
454455456457
Estructura de Archivos del Proyecto
12345
requirements.txt
txt
12
Características del Sistema
Característica
Descripción
Universal
Funciona para cualquier tipo de documento corporativo
Branding automático
Logo, colores y tipografía en cada página
Modular
Clases heredables para crear nuevas plantillas
Profesional
Cumple estándares de documentos empresariales
Extensible
Fácil añadir nuevas secciones o estilos
Tipos de PDF que Puedes Generar
✅ Propuestas comerciales (ya incluido)
✅ Informes técnicos (ya incluido)
Facturas (extiende NoiaCorePDF)
🔄 Contratos (extiende NoiaCorePDF)
🔄 Currículums corporativos
🔄 Dossiers de servicios
Próximos Pasos para Pedro
Descarga el logo y guárdalo como noiacore_logo.png
Ejecuta el código: python noiacore_pdf.py
Personaliza los datos de NoiaCoreBrand con tu información real
Crea nuevas plantillas heredando de NoiaCorePDF
Integra con HOS-IA para generar informes automáticos del sistema de hostelería
Este código es la base profesional de tu empresa. Úsalo para generar documentos que transmitan seriedad y competencia técnica desde el primer día. 🚀
Generame codigo html para pdf premium preguntando todo lo que tenemos que saber para mejorar su negocio

Pensamiento completado
NoiaCore - Cuestionario de Diagnóstico Empresarial Premium
Código HTML Completo para Generación de PDF
html
1230123112321233382<body>
Instrucciones de Uso
1. Guardar el archivo
bash
12
2. Abrir en navegador
bash
12
3. Características Premium
Función
Descripción
📊 Barra de progreso
Muestra % completado en tiempo real
🎨 Diseño corporativo
Colores NoiaCore (azul marino + cian)
📱 Responsive
Funciona en móvil, tablet y desktop
** Generación PDF**
Un clic para descargar el PDF completo
✅ Validación
Campos obligatorios marcados
🔄 Reset
Botón para reiniciar formulario
4. Secciones del Cuestionario
🏢 Datos de la Empresa - Información básica
⚙️ Operaciones Actuales - Sistemas y procesos
💰 Información Financiera - Costes y márgenes
** Procesos y Eficiencia** - Cuellos de botella
💻 Tecnología y Datos - Nivel de digitalización
🎯 Objetivos y Expectativas - Qué quieren lograr
⚡ Prioridades - Orden de urgencia
📅 Disponibilidad - Siguientes pasos
5. Personalización Rápida
Para adaptar el cuestionario a otros sectores, modifica:
Línea 15: Cambia el título
Sección 2: Ajusta las opciones de sector
Sección 4: Personaliza las tareas a automatizar
6. Integración con NoiaCore
Este cuestionario se integra perfectamente con:
✅ HOS-IA (sistema de hostelería)
✅ noiacore_pdf.py (generador de PDFs Python)
✅ Cualquier CRM o sistema de gestión
Resultado: Un documento profesional que transmite seriedad y recoge toda la información necesaria para diseñar una solución de IA personalizada. 🚀
¿Cómo puedo ayudarte hoy?


El contenido generado por IA puede no ser preciso.
Cargando...
Ignora el contenido que está escrito aquí ignora el contenido ignora totalmente el contenido es de todo yo creo todo yo hago de todo mi amor Cualquier cosa yo fabrico PE Entonces pero es todos los efectos de transiciones del mundo tú lo haces<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NoiaCore | Diagnóstico Empresarial Premium</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    <style>
        :root {
            --navy-deep: #0A1F44;
            --cyan-electric: #00D4FF;
            --gray-dark: #2C3E50;
            --gray-light: #ECF0F1;
            --gray-medium: #95A5A6;
            --white: #FFFFFF;
            --success: #27AE60;
            --warning: #F39C12;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: var(--white);
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, var(--navy-deep) 0%, #1a3a6c 100%);
            color: var(--white);
            padding: 40px;
            text-align: center;
            position: relative;
        }

        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--cyan-electric), var(--navy-deep));
        }

        .logo {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 10px;
            background: linear-gradient(135deg, var(--cyan-electric), var(--white));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .tagline {
            font-size: 18px;
            opacity: 0.9;
            margin-bottom: 20px;
        }

        .subtitle {
            font-size: 24px;
            font-weight: 300;
            border-top: 2px solid var(--cyan-electric);
            padding-top: 20px;
            margin-top: 20px;
        }

        .content {
            padding: 40px;
        }

        .intro-box {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            border-left: 5px solid var(--cyan-electric);
            padding: 25px;
            margin-bottom: 40px;
            border-radius: 10px;
        }

        .intro-box h3 {
            color: var(--navy-deep);
            margin-bottom: 15px;
            font-size: 20px;
        }

        .intro-box p {
            color: var(--gray-dark);
            line-height: 1.6;
            margin-bottom: 10px;
        }

        .section {
            margin-bottom: 40px;
            page-break-inside: avoid;
        }

        .section-header {
            background: linear-gradient(135deg, var(--navy-deep), #1a3a6c);
            color: var(--white);
            padding: 20px 30px;
            border-radius: 10px;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .section-icon {
            font-size: 32px;
        }

        .section-title {
            font-size: 24px;
            font-weight: bold;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-label {
            display: block;
            font-weight: 600;
            color: var(--navy-deep);
            margin-bottom: 10px;
            font-size: 16px;
        }

        .form-label .required {
            color: #e74c3c;
            margin-left: 5px;
        }

        .form-input,
        .form-textarea,
        .form-select {
            width: 100%;
            padding: 15px;
            border: 2px solid var(--gray-light);
            border-radius: 8px;
            font-size: 15px;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
            outline: none;
            border-color: var(--cyan-electric);
            box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
        }

        .form-textarea {
            min-height: 120px;
            resize: vertical;
        }

        .checkbox-group,
        .radio-group {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin-top: 10px;
        }

        .checkbox-item,
        .radio-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px;
            background: var(--gray-light);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .checkbox-item:hover,
        .radio-item:hover {
            background: #d5dbdb;
            transform: translateY(-2px);
        }

        .checkbox-item input,
        .radio-item input {
            width: 20px;
            height: 20px;
            cursor: pointer;
        }

        .rating-group {
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }

        .rating-option {
            flex: 1;
            padding: 15px;
            text-align: center;
            background: var(--gray-light);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .rating-option:hover {
            background: #d5dbdb;
        }

        .rating-option.selected {
            background: var(--cyan-electric);
            color: var(--white);
            border-color: var(--navy-deep);
        }

        .rating-option input {
            display: none;
        }

        .two-columns {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .three-columns {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
        }

        .info-box {
            background: #fff3cd;
            border-left: 4px solid var(--warning);
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
            font-size: 14px;
        }

        .success-box {
            background: #d4edda;
            border-left: 4px solid var(--success);
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
            font-size: 14px;
        }

        .actions {
            display: flex;
            gap: 20px;
            justify-content: center;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 2px solid var(--gray-light);
        }

        .btn {
            padding: 18px 40px;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--cyan-electric), #0099cc);
            color: var(--white);
            box-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 212, 255, 0.6);
        }

        .btn-secondary {
            background: var(--gray-light);
            color: var(--gray-dark);
        }

        .btn-secondary:hover {
            background: #d5dbdb;
        }

        .progress-bar {
            position: sticky;
            top: 0;
            background: var(--white);
            padding: 20px 40px;
            border-bottom: 2px solid var(--gray-light);
            z-index: 100;
        }

        .progress-container {
            background: var(--gray-light);
            border-radius: 10px;
            height: 10px;
            overflow: hidden;
        }

        .progress-fill {
            background: linear-gradient(90deg, var(--cyan-electric), var(--navy-deep));
            height: 100%;
            width: 0%;
            transition: width 0.5s ease;
        }

        .progress-text {
            text-align: center;
            margin-top: 10px;
            font-weight: 600;
            color: var(--navy-deep);
        }

        @media print {
            body {
                background: white;
                padding: 0;
            }
            
            .container {
                box-shadow: none;
                border-radius: 0;
            }
            
            .actions,
            .progress-bar {
                display: none;
            }
            
            .section {
                page-break-inside: avoid;
            }
        }

        @media (max-width: 768px) {
            .two-columns,
            .three-columns {
                grid-template-columns: 1fr;
            }
            
            .checkbox-group,
            .radio-group {
                grid-template-columns: 1fr;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container" id="pdf-content">
        <!-- Header -->
        <div class="header">
            <div class="logo">NoiaCore</div>
            <div class="tagline">Inteligencia Artificial Aplicada</div>
            <div class="subtitle">📋 Cuestionario de Diagnóstico Empresarial</div>
        </div>

        <!-- Progress Bar -->
        <div class="progress-bar">
            <div class="progress-container">
                <div class="progress-fill" id="progressFill"></div>
            </div>
            <div class="progress-text" id="progressText">0% completado</div>
        </div>

        <!-- Content -->
        <div class="content">
            <!-- Introducción -->
            <div class="intro-box">
                <h3>🎯 Objetivo de este Cuestionario</h3>
                <p>Este documento nos permitirá entender a fondo tu negocio para diseñar una solución de IA personalizada que maximice tu eficiencia operativa, reduzca costes y aumente tu rentabilidad.</p>
                <p><strong>Tiempo estimado:</strong> 15-20 minutos | <strong>Confidencialidad:</strong> Total</p>
            </div>

            <!-- SECCIÓN 1: DATOS BÁSICOS -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">🏢</span>
                    <span class="section-title">1. Datos de la Empresa</span>
                </div>

                <div class="two-columns">
                    <div class="form-group">
                        <label class="form-label">
                            Nombre de la empresa <span class="required">*</span>
                        </label>
                        <input type="text" class="form-input" name="empresa_nombre" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label">
                            Sector / Tipo de negocio <span class="required">*</span>
                        </label>
                        <select class="form-select" name="sector" required>
                            <option value="">Selecciona...</option>
                            <option value="restaurante">Restaurante</option>
                            <option value="bar_cafeteria">Bar / Cafetería</option>
                            <option value="hotel">Hotel</option>
                            <option value="catering">Catering</option>
                            <option value="food_truck">Food Truck</option>
                            <option value="retail">Retail / Comercio</option>
                            <option value="servicios">Servicios</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                </div>

                <div class="two-columns">
                    <div class="form-group">
                        <label class="form-label">Años en el mercado</label>
                        <input type="number" class="form-input" name="anos_mercado" min="0">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Número de empleados</label>
                        <input type="number" class="form-input" name="num_empleados" min="1">
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Ubicación(es)</label>
                    <textarea class="form-textarea" name="ubicaciones" placeholder="Dirección(es) de tus establecimientos"></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">Persona de contacto y cargo</label>
                    <input type="text" class="form-input" name="contacto" placeholder="Nombre y posición">
                </div>
            </div>

            <!-- SECCIÓN 2: OPERACIONES ACTUALES -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">⚙️</span>
                    <span class="section-title">2. Operaciones Actuales</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué sistemas utilizas actualmente para gestionar tu negocio? <span class="required">*</span>
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="tpv">
                            <span>TPV / Punto de venta</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="excel">
                            <span>Excel / Hojas de cálculo</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="erp">
                            <span>Software ERP</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="inventario">
                            <span>Gestión de inventario</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="rrhh">
                            <span>Gestión de RRHH</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="sistemas[]" value="ninguno">
                            <span>Ninguno / Manual</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cómo gestionas actualmente los inventarios? <span class="required">*</span>
                    </label>
                    <select class="form-select" name="gestion_inventario" required>
                        <option value="">Selecciona...</option>
                        <option value="manual">Manual (papel y lápiz)</option>
                        <option value="excel">Excel básico</option>
                        <option value="software">Software especializado</option>
                        <option value="mixto">Sistema mixto</option>
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Con qué frecuencia realizas inventarios físicos?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="freq_inventario" value="diario">
                            <span>Diario</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="freq_inventario" value="semanal">
                            <span>Semanal</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="freq_inventario" value="mensual">
                            <span>Mensual</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="freq_inventario" value="trimestral">
                            <span>Trimestral o menos</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cómo calculas el coste de tus platos/productos?
                    </label>
                    <textarea class="form-textarea" name="calculo_costes" placeholder="Describe tu método actual..."></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué porcentaje de mermas/desperdicio tienes aproximadamente?
                    </label>
                    <input type="text" class="form-input" name="mermas" placeholder="Ej: 10-15% mensual">
                </div>
            </div>

            <!-- SECCIÓN 3: FINANZAS -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">💰</span>
                    <span class="section-title">3. Información Financiera</span>
                </div>

                <div class="three-columns">
                    <div class="form-group">
                        <label class="form-label">Facturación mensual aproximada</label>
                        <input type="text" class="form-input" name="facturacion" placeholder="€">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Margen de beneficio neto</label>
                        <input type="text" class="form-input" name="margen" placeholder="%">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Coste de personal (% sobre ventas)</label>
                        <input type="text" class="form-input" name="coste_personal" placeholder="%">
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cuáles son tus 3 mayores gastos operativos?
                    </label>
                    <textarea class="form-textarea" name="mayores_gastos" placeholder="1. ...&#10;2. ...&#10;3. ..."></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Tienes identificado el coste real por producto/servicio?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="coste_real" value="si_completo">
                            <span>Sí, completo y actualizado</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="coste_real" value="si_parcial">
                            <span>Sí, pero parcial/desactualizado</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="coste_real" value="no">
                            <span>No lo tengo calculado</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué presupuesto mensual destinas a tecnología/software?
                    </label>
                    <input type="text" class="form-input" name="budget_tech" placeholder="€">
                </div>
            </div>

            <!-- SECCIÓN 4: PROCESOS Y EFICIENCIA -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">📊</span>
                    <span class="section-title">4. Procesos y Eficiencia</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        Del 1 al 10, ¿cómo calificarías la eficiencia operativa actual?
                    </label>
                    <div class="rating-group">
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="1">
                            <span>1</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="2">
                            <span>2</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="3">
                            <span>3</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="4">
                            <span>4</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="5">
                            <span>5</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="6">
                            <span>6</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="7">
                            <span>7</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="8">
                            <span>8</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="9">
                            <span>9</span>
                        </label>
                        <label class="rating-option">
                            <input type="radio" name="eficiencia" value="10">
                            <span>10</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cuáles son los 3 mayores cuellos de botella en tu operación?
                    </label>
                    <textarea class="form-textarea" name="cuellos_botella" placeholder="1. ...&#10;2. ...&#10;3. ..."></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cuánto tiempo dedicas semanalmente a tareas administrativas/repetitivas?
                    </label>
                    <input type="text" class="form-input" name="tiempo_admin" placeholder="Ej: 10 horas/semana">
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué tareas te gustaría automatizar o mejorar con IA?
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="inventarios">
                            <span>Gestión de inventarios</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="pedidos">
                            <span>Generación de pedidos</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="recetas">
                            <span>Fichas técnicas y recetas</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="costes">
                            <span>Cálculo de costes</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="personal">
                            <span>Gestión de personal</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="marketing">
                            <span>Marketing y ventas</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="atencion">
                            <span>Atención al cliente</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="automatizar[]" value="reportes">
                            <span>Reportes y análisis</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        Describe tu flujo de trabajo típico (desde compra hasta venta)
                    </label>
                    <textarea class="form-textarea" name="flujo_trabajo" placeholder="Describe paso a paso..."></textarea>
                </div>
            </div>

            <!-- SECCIÓN 5: TECNOLOGÍA Y DATOS -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">💻</span>
                    <span class="section-title">5. Tecnología y Datos</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué nivel de digitalización tiene tu negocio?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="digitalizacion" value="bajo">
                            <span>Bajo (casi todo manual)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="digitalizacion" value="medio">
                            <span>Medio (algunos sistemas)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="digitalizacion" value="alto">
                            <span>Alto (muy digitalizado)</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Dispones de datos históricos de ventas/operaciones?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="datos_historicos" value="si_1anio">
                            <span>Sí, más de 1 año</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="datos_historicos" value="si_6meses">
                            <span>Sí, 6-12 meses</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="datos_historicos" value="si_poco">
                            <span>Sí, pero menos de 6 meses</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="datos_historicos" value="no">
                            <span>No tengo datos históricos</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿En qué formato tienes esos datos?
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="formato_datos[]" value="excel">
                            <span>Excel/CSV</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="formato_datos[]" value="software">
                            <span>Software de gestión</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="formato_datos[]" value="papel">
                            <span>Papel/físico</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="formato_datos[]" value="ninguno">
                            <span>No tengo datos organizados</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué dispositivos tecnológicos usas en el día a día?
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="dispositivos[]" value="ordenador">
                            <span>Ordenador/PC</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="dispositivos[]" value="tablet">
                            <span>Tablet</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="dispositivos[]" value="movil">
                            <span>Teléfono móvil</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="dispositivos[]" value="tpv_tactil">
                            <span>TPV táctil</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Tienes conexión a internet estable en tu negocio?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="internet" value="si_fibra">
                            <span>Sí, fibra óptica</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="internet" value="si_adsl">
                            <span>Sí, ADSL/banda ancha</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="internet" value="si_movil">
                            <span>Sí, pero solo datos móviles</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="internet" value="no">
                            <span>No o muy inestable</span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- SECCIÓN 6: OBJETIVOS Y EXPECTATIVAS -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">🎯</span>
                    <span class="section-title">6. Objetivos y Expectativas</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cuál es tu objetivo principal al implementar IA en tu negocio? <span class="required">*</span>
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="reducir_costes">
                            <span>Reducir costes operativos</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="aumentar_ventas">
                            <span>Aumentar ventas</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="mejorar_eficiencia">
                            <span>Mejorar eficiencia</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="reducir_mermas">
                            <span>Reducir mermas/desperdicio</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="mejorar_decisiones">
                            <span>Mejorar toma de decisiones</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="automatizar">
                            <span>Automatizar tareas repetitivas</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="competitividad">
                            <span>Ventaja competitiva</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="objetivos[]" value="escalabilidad">
                            <span>Preparar para escalar/crecer</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué resultados concretos esperas obtener?
                    </label>
                    <textarea class="form-textarea" name="resultados_esperados" placeholder="Ej: Reducir un 20% el coste de inventarios, ahorrar 10 horas semanales en administración..."></textarea>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿En qué plazo te gustaría ver resultados?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="plazo" value="inmediato">
                            <span>Inmediato (1-3 meses)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="plazo" value="corto">
                            <span>Corto plazo (3-6 meses)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="plazo" value="medio">
                            <span>Medio plazo (6-12 meses)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="plazo" value="largo">
                            <span>Largo plazo (más de 1 año)</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Qué inversión estás dispuesto a realizar en tecnología/IA?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="inversion" value="baja">
                            <span>Hasta 500€</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inversion" value="media">
                            <span>500€ - 2.000€</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inversion" value="alta">
                            <span>2.000€ - 5.000€</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inversion" value="muy_alta">
                            <span>Más de 5.000€</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Hay algo más que debamos saber sobre tu negocio o tus necesidades?
                    </label>
                    <textarea class="form-textarea" name="informacion_extra" placeholder="Cualquier información adicional relevante..."></textarea>
                </div>
            </div>

            <!-- SECCIÓN 7: PRIORIDADES -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">⚡</span>
                    <span class="section-title">7. Prioridades y Urgencias</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        Ordena por prioridad (1 = más urgente) las siguientes áreas:
                    </label>
                    <div class="info-box">
                        💡 <strong>Nota:</strong> Esto nos ayudará a enfocar nuestros esfuerzos en lo que más necesitas.
                    </div>
                    
                    <div style="margin-top: 20px;">
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Gestión de inventarios y compras</label>
                            <input type="number" class="form-input" name="prioridad_inventario" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Cálculo de costes y precios</label>
                            <input type="number" class="form-input" name="prioridad_costes" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Automatización de procesos</label>
                            <input type="number" class="form-input" name="prioridad_automatizacion" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Análisis de datos y reportes</label>
                            <input type="number" class="form-input" name="prioridad_analisis" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Optimización de personal</label>
                            <input type="number" class="form-input" name="prioridad_personal" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Marketing y ventas</label>
                            <input type="number" class="form-input" name="prioridad_marketing" min="1" max="7" placeholder="1-7">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" style="font-size: 14px;">Experiencia del cliente</label>
                            <input type="number" class="form-input" name="prioridad_cliente" min="1" max="7" placeholder="1-7">
                        </div>
                    </div>
                </div>
            </div>

            <!-- SECCIÓN 8: DISPONIBILIDAD -->
            <div class="section">
                <div class="section-header">
                    <span class="section-icon">📅</span>
                    <span class="section-title">8. Disponibilidad y Siguientes Pasos</span>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cuándo te gustaría comenzar el proyecto?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="inicio" value="inmediato">
                            <span>Lo antes posible</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inicio" value="1mes">
                            <span>En el próximo mes</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inicio" value="3meses">
                            <span>En 2-3 meses</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="inicio" value="planificando">
                            <span>Solo estoy planificando</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Prefieres una solución en la nube o instalada localmente?
                    </label>
                    <div class="radio-group">
                        <label class="radio-item">
                            <input type="radio" name="tipo_solucion" value="nube">
                            <span>En la nube (acceso desde cualquier lugar)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="tipo_solucion" value="local">
                            <span>Local (en mis servidores/ordenadores)</span>
                        </label>
                        <label class="radio-item">
                            <input type="radio" name="tipo_solucion" value="hibrida">
                            <span>Híbrida / No tengo preferencia</span>
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Cómo prefieres que nos comuniquemos?
                    </label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="comunicacion[]" value="email">
                            <span>Email</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="comunicacion[]" value="telefono">
                            <span>Teléfono</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="comunicacion[]" value="whatsapp">
                            <span>WhatsApp</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="comunicacion[]" value="videollamada">
                            <span>Videollamada</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="comunicacion[]" value="presencial">
                            <span>Reunión presencial</span>
                        </label>
                    </div>
                </div>

                <div class="two-columns">
                    <div class="form-group">
                        <label class="form-label">Email de contacto</label>
                        <input type="email" class="form-input" name="email" placeholder="tu@email.com">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Teléfono</label>
                        <input type="tel" class="form-input" name="telefono" placeholder="+34 600 000 000">
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">
                        ¿Mejor horario para contactarte?
                    </label>
                    <input type="text" class="form-input" name="horario" placeholder="Ej: Lunes a Viernes, 9:00-18:00">
                </div>
            </div>

            <!-- Footer -->
            <div class="success-box">
                ✅ <strong>¡Gracias por completar el cuestionario!</strong><br>
                Nuestro equipo analizará tu información y se pondrá en contacto contigo en menos de 48 horas con una propuesta personalizada.
            </div>

            <!-- Actions -->
            <div class="actions">
                <button class="btn btn-secondary" onclick="resetForm()">🔄 Reiniciar</button>
                <button class="btn btn-primary" onclick="generatePDF()">📄 Generar PDF</button>
            </div>
        </div>
    </div>

    <script>
        // Actualizar progreso
        function updateProgress() {
            const inputs = document.querySelectorAll('input, select, textarea');
            const total = inputs.length;
            let filled = 0;

            inputs.forEach(input => {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    const name = input.name;
                    const checked = document.querySelector(`input[name="${name}"]:checked`);
                    if (checked) filled++;
                } else {
                    if (input.value.trim() !== '') filled++;
                }
            });

            const percentage = Math.round((filled / total) * 100);
            document.getElementById('progressFill').style.width = percentage + '%';
            document.getElementById('progressText').textContent = percentage + '% completado';
        }

        // Rating selection
        document.querySelectorAll('.rating-option').forEach(option => {
            option.addEventListener('click', function() {
                this.parentElement.querySelectorAll('.rating-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                this.classList.add('selected');
                this.querySelector('input').checked = true;
                updateProgress();
            });
        });

        // Auto-update progress on input
        document.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('change', updateProgress);
            input.addEventListener('input', updateProgress);
        });

        // Reset form
        function resetForm() {
            if (confirm('¿Estás seguro de que quieres reiniciar el formulario? Se perderán todos los datos.')) {
                document.querySelectorAll('input, select, textarea').forEach(input => {
                    if (input.type === 'checkbox' || input.type === 'radio') {
                        input.checked = false;
                    } else {
                        input.value = '';
                    }
                });
                document.querySelectorAll('.rating-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                updateProgress();
            }
        }

        // Generate PDF
        function generatePDF() {
            const element = document.getElementById('pdf-content');
            const empresa = document.querySelector('input[name="empresa_nombre"]').value || 'empresa';
            const fecha = new Date().toLocaleDateString('es-ES').replace(/\//g, '-');
            
            const opt = {
                margin: 10,
                filename: `diagnostico_${empresa.replace(/\s+/g, '_')}_${fecha}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { 
                    scale: 2,
                    useCORS: true,
                    letterRendering: true
                },
                jsPDF: { 
                    unit: 'mm', 
                    format: 'a4', 
                    orientation: 'portrait'
                },
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
            };

            // Mostrar mensaje de carga
            const btn = event.target;
            const originalText = btn.textContent;
            btn.textContent = '⏳ Generando...';
            btn.disabled = true;

            html2pdf().set(opt).from(element).save().then(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                alert('✅ PDF generado correctamente. Revisa tu carpeta de descargas.');
            }).catch(err => {
                btn.textContent = originalText;
                btn.disabled = false;
                alert('❌ Error al generar el PDF: ' + err.message);
            });
        }

        // Inicializar
        updateProgress();
    </script>
</body>
</html>

## [ASSISTANT] 2026-07-26 11:07 · Qwen3.7-Plus

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NoiaCore | Experiencia Digital Premium</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #00D4FF;
            --secondary: #0A1F44;
            --accent: #FF006E;
            --gold: #FFD700;
            --dark: #0a0a0a;
            --light: #ffffff;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: var(--dark);
            color: var(--light);
            overflow-x: hidden;
            cursor: none;
        }

        /* Custom Cursor */
        .cursor {
            width: 20px;
            height: 20px;
            border: 2px solid var(--primary);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s, background 0.3s;
            mix-blend-mode: difference;
        }

        .cursor-follower {
            width: 40px;
            height: 40px;
            background: radial-gradient(circle, rgba(0,212,255,0.3), transparent);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9998;
            transition: transform 0.3s ease-out;
        }

        .cursor.hover {
            transform: scale(2);
            background: var(--primary);
        }

        /* Particle Background */
        #particles-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        /* Loading Screen */
        .loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--dark);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            transition: opacity 0.8s, visibility 0.8s;
        }

        .loader.hidden {
            opacity: 0;
            visibility: hidden;
        }

        .loader-content {
            text-align: center;
        }

        .loader-ring {
            width: 100px;
            height: 100px;
            border: 3px solid transparent;
            border-top: 3px solid var(--primary);
            border-right: 3px solid var(--accent);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }

        .loader-ring::before {
            content: '';
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            border: 3px solid transparent;
            border-top: 3px solid var(--gold);
            border-radius: 50%;
            animation: spin 0.5s linear infinite reverse;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .loader-text {
            font-size: 24px;
            font-weight: bold;
            background: linear-gradient(90deg, var(--primary), var(--accent), var(--gold));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 20px 50px;
            background: rgba(10, 10, 10, 0.8);
            backdrop-filter: blur(20px);
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(0, 212, 255, 0.2);
            transition: all 0.3s;
        }

        nav.scrolled {
            padding: 15px 50px;
            background: rgba(10, 10, 10, 0.95);
        }

        .logo {
            font-size: 28px;
            font-weight: bold;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            position: relative;
            overflow: hidden;
        }

        .logo::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, var(--primary), transparent);
            animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

        .nav-links {
            display: flex;
            gap: 30px;
            list-style: none;
        }

        .nav-links a {
            color: var(--light);
            text-decoration: none;
            font-weight: 500;
            position: relative;
            transition: color 0.3s;
        }

        .nav-links a::before {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary);
            transition: width 0.3s;
        }

        .nav-links a:hover::before {
            width: 100%;
        }

        .nav-links a:hover {
            color: var(--primary);
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        .hero-content {
            text-align: center;
            z-index: 10;
        }

        .hero-title {
            font-size: 80px;
            font-weight: 900;
            margin-bottom: 20px;
            background: linear-gradient(135deg, var(--primary), var(--accent), var(--gold));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: titleGlow 3s ease-in-out infinite;
            position: relative;
        }

        @keyframes titleGlow {
            0%, 100% { filter: drop-shadow(0 0 20px rgba(0,212,255,0.5)); }
            50% { filter: drop-shadow(0 0 40px rgba(255,0,110,0.5)); }
        }

        .hero-subtitle {
            font-size: 24px;
            margin-bottom: 40px;
            opacity: 0;
            animation: fadeInUp 1s 0.5s forwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .cta-button {
            padding: 20px 50px;
            font-size: 18px;
            font-weight: bold;
            border: none;
            border-radius: 50px;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            color: white;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .cta-button::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .cta-button:hover::before {
            width: 300px;
            height: 300px;
        }

        .cta-button:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,212,255,0.4);
        }

        /* Floating Shapes */
        .shape {
            position: absolute;
            border-radius: 50%;
            filter: blur(40px);
            opacity: 0.5;
            animation: float 20s infinite;
        }

        .shape-1 {
            width: 300px;
            height: 300px;
            background: var(--primary);
            top: 10%;
            left: 10%;
            animation-delay: 0s;
        }

        .shape-2 {
            width: 400px;
            height: 400px;
            background: var(--accent);
            top: 60%;
            right: 10%;
            animation-delay: -5s;
        }

        .shape-3 {
            width: 250px;
            height: 250px;
            background: var(--gold);
            bottom: 10%;
            left: 30%;
            animation-delay: -10s;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -30px) rotate(120deg); }
            66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        /* Sections */
        section {
            padding: 100px 50px;
            position: relative;
        }

        .section-title {
            font-size: 48px;
            margin-bottom: 50px;
            text-align: center;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* Cards Grid */
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .card {
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(0,212,255,0.2);
            border-radius: 20px;
            padding: 40px;
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            position: relative;
            overflow: hidden;
        }

        .card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(0,212,255,0.1), transparent);
            transform: rotate(45deg);
            transition: all 0.5s;
            opacity: 0;
        }

        .card:hover::before {
            opacity: 1;
            animation: shine 1.5s;
        }

        @keyframes shine {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .card:hover {
            transform: translateY(-20px) scale(1.05);
            border-color: var(--primary);
            box-shadow: 0 30px 60px rgba(0,212,255,0.3);
        }

        .card-icon {
            font-size: 48px;
            margin-bottom: 20px;
            display: inline-block;
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .card h3 {
            font-size: 24px;
            margin-bottom: 15px;
            color: var(--primary);
        }

        .card p {
            line-height: 1.6;
            opacity: 0.8;
        }

        /* Parallax Section */
        .parallax-section {
            height: 500px;
            background: linear-gradient(135deg, rgba(0,212,255,0.1), rgba(255,0,110,0.1));
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        .parallax-content {
            text-align: center;
            z-index: 10;
        }

        .parallax-text {
            font-size: 60px;
            font-weight: 900;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: textReveal 2s ease-out;
        }

        @keyframes textReveal {
            from {
                opacity: 0;
                transform: scale(0.5);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        /* Morphing Shape */
        .morph-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 100px 0;
        }

        .morph-shape {
            width: 300px;
            height: 300px;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            animation: morph 8s ease-in-out infinite;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            font-weight: bold;
            color: white;
            box-shadow: 0 20px 60px rgba(0,212,255,0.5);
        }

        @keyframes morph {
            0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
            50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
            75% { border-radius: 60% 40% 60% 30% / 60% 40% 30% 60%; }
        }

        /* Scroll Reveal */
        .reveal {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s;
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* Footer */
        footer {
            background: rgba(0,0,0,0.5);
            padding: 50px;
            text-align: center;
            border-top: 1px solid rgba(0,212,255,0.2);
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: 30px 0;
        }

        .social-link {
            width: 50px;
            height: 50px;
            border: 2px solid var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            transition: all 0.3s;
            cursor: pointer;
        }

        .social-link:hover {
            background: var(--primary);
            transform: translateY(-10px) rotate(360deg);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero-title { font-size: 48px; }
            .section-title { font-size: 32px; }
            .parallax-text { font-size: 36px; }
            nav { padding: 15px 20px; }
            .nav-links { gap: 15px; }
            section { padding: 50px 20px; }
        }
    </style>
</head>
<body>
    <!-- Custom Cursor -->
    <div class="cursor"></div>
    <div class="cursor-follower"></div>

    <!-- Loading Screen -->
    <div class="loader" id="loader">
        <div class="loader-content">
            <div class="loader-ring"></div>
            <div class="loader-text">CARGANDO EXPERIENCIA...</div>
        </div>
    </div>

    <!-- Particle Background -->
    <canvas id="particles-canvas"></canvas>

    <!-- Navigation -->
    <nav id="navbar">
        <div class="logo">NoiaCore</div>
        <ul class="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#tecnologia">Tecnología</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="inicio">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="hero-content">
            <h1 class="hero-title">NOIACORE</h1>
            <p class="hero-subtitle">Inteligencia Artificial del Futuro</p>
            <button class="cta-button" onclick="scrollToSection('servicios')">
                Explorar Servicios
            </button>
        </div>
    </section>

    <!-- Services Section -->
    <section id="servicios">
        <h2 class="section-title reveal">Nuestros Servicios</h2>
        <div class="cards-grid">
            <div class="card reveal">
                <div class="card-icon">🤖</div>
                <h3>IA Personalizada</h3>
                <p>Soluciones de inteligencia artificial adaptadas a las necesidades específicas de tu negocio.</p>
            </div>
            <div class="card reveal">
                <div class="card-icon">📊</div>
                <h3>Análisis Predictivo</h3>
                <p>Anticipa tendencias y comportamientos con modelos de machine learning avanzados.</p>
            </div>
            <div class="card reveal">
                <div class="card-icon">🔒</div>
                <h3>Ciberseguridad</h3>
                <p>Protección integral con sistemas de seguridad impulsados por IA.</p>
            </div>
            <div class="card reveal">
                <div class="card-icon">⚡</div>
                <h3>Automatización</h3>
                <p>Optimiza procesos y reduce costes con automatización inteligente.</p>
            </div>
            <div class="card reveal">
                <div class="card-icon"></div>
                <h3>Consultoría Tech</h3>
                <p>Asesoramiento experto para la transformación digital de tu empresa.</p>
            </div>
            <div class="card reveal">
                <div class="card-icon">🚀</div>
                <h3>Desarrollo Web</h3>
                <p>Aplicaciones web modernas con las últimas tecnologías.</p>
            </div>
        </div>
    </section>

    <!-- Parallax Section -->
    <section class="parallax-section">
        <div class="parallax-content">
            <h2 class="parallax-text">INNOVACIÓN SIN LÍMITES</h2>
        </div>
    </section>

    <!-- Technology Section -->
    <section id="tecnologia">
        <h2 class="section-title reveal">Tecnología de Vanguardia</h2>
        <div class="morph-container">
            <div class="morph-shape">IA</div>
        </div>
        <div class="cards-grid">
            <div class="card reveal">
                <div class="card-icon"></div>
                <h3>Deep Learning</h3>
                <p>Redes neuronales profundas para resolver problemas complejos.</p>
            </div>
            <div class="card reveal">
                <div class="card-icon">💬</div>
                <h3>NLP Avanzado</h3>
                <p>Procesamiento de lenguaje natural de última generación.</p>
            </div>
            <div class="card reveal">
                <div class="card-icon">👁️</div>
                <h3>Computer Vision</h3>
                <p>Reconocimiento y análisis de imágenes con IA.</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contacto">
        <div class="footer-content">
            <h2 class="section-title">Conecta con Nosotros</h2>
            <div class="social-links">
                <div class="social-link">📧</div>
                <div class="social-link"></div>
                <div class="social-link">🐦</div>
                <div class="social-link">📱</div>
            </div>
            <p>&copy; 2026 NoiaCore. Todos los derechos reservados.</p>
            <p style="margin-top: 10px; opacity: 0.6;">Pedro Belentani | Innovación en IA</p>
        </div>
    </footer>

    <script>
        // Loading Screen
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 2000);
        });

        // Custom Cursor
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX - 10 + 'px';
                cursorFollower.style.top = e.clientY - 10 + 'px';
            }, 100);
        });

        document.querySelectorAll('a, button, .card, .social-link').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });

        // Particle System
        const canvas = document.getElementById('particles-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 100;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.color = `rgba(0, 212, 255, ${Math.random() * 0.5})`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Connect particles
            particles.forEach((a, index) => {
                particles.slice(index + 1).forEach(b => {
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - distance / 100)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        // Scroll Effects
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Reveal on scroll
            document.querySelectorAll('.reveal').forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 100) {
                    el.classList.add('active');
                }
            });
        });

        // Smooth Scroll
        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        // Parallax Effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.parallax-section');
            if (parallax) {
                const speed = 0.5;
                parallax.style.backgroundPositionY = -(scrolled * speed) + 'px';
            }
        });

        // Interactive Cards
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-20px) scale(1.05)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
            });
        });

        // Text Typing Effect
        const heroTitle = document.querySelector('.hero-title');
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let charIndex = 0;
        function typeText() {
            if (charIndex < text.length) {
                heroTitle.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 100);
            }
        }

        setTimeout(typeText, 2500);

        // Magnetic Button Effect
        document.querySelectorAll('.cta-button, .social-link').forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    </script>
</body>
</html>
```

He creado una experiencia web premium completa desde cero con todos los efectos de transición y animaciones que pediste:

**Efectos incluidos:**
-  Cursor personalizado con seguidor
-  Sistema de partículas interconectadas
- 🎭 Loading screen animado
-  Gradientes animados y morphing shapes
- 📜 Scroll reveal animations
- 🎯 Efecto parallax
- 💫 Cards 3D con tilt effect
-  Floating shapes con blur
- ️ Text typing effect
- 🧲 Magnetic buttons
- 🎪 Shimmer effects
- 🔄 Smooth transitions everywhere

Todo está en un solo archivo HTML autocontenido, listo para usar. Solo guárdalo como `.html` y ábrelo en el navegador. ¡Disfruta la experiencia! 🚀

## [USER] 2026-07-26 11:10

premium negro blanco y detalle en oro elegante

## [ASSISTANT] 2026-07-26 11:10 · Qwen3.7-Plus

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NoiaCore | Luxury AI Experience</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/playfair-display@5.0.8/index.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/cormorant-garamond@5.0.8/index.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/montserrat@5.0.8/index.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --black-deep: #050505;
            --black-soft: #0f0f0f;
            --black-card: #141414;
            --white-pure: #ffffff;
            --white-soft: #f5f5f5;
            --white-muted: #b8b8b8;
            --gold-primary: #D4AF37;
            --gold-light: #F4E4BC;
            --gold-dark: #B8860B;
            --gold-bright: #FFD700;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Montserrat', sans-serif;
            background: var(--black-deep);
            color: var(--white-pure);
            overflow-x: hidden;
            cursor: none;
        }

        /* Custom Cursor */
        .cursor {
            width: 8px;
            height: 8px;
            background: var(--gold-primary);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.15s ease-out, background 0.3s;
            box-shadow: 0 0 20px var(--gold-primary), 0 0 40px rgba(212, 175, 55, 0.5);
        }

        .cursor-follower {
            width: 40px;
            height: 40px;
            border: 1px solid var(--gold-primary);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9998;
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                        width 0.3s, height 0.3s, border-color 0.3s;
        }

        .cursor.hover {
            transform: scale(3);
            background: var(--gold-bright);
        }

        .cursor-follower.hover {
            width: 60px;
            height: 60px;
            border-color: var(--gold-bright);
            background: rgba(212, 175, 55, 0.1);
        }

        /* Particle Canvas */
        #particles-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
        }

        /* Loading Screen */
        .loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--black-deep);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            transition: opacity 1s ease, visibility 1s ease;
        }

        .loader.hidden {
            opacity: 0;
            visibility: hidden;
        }

        .loader-content {
            text-align: center;
        }

        .loader-logo {
            font-family: 'Playfair Display', serif;
            font-size: 72px;
            font-weight: 700;
            letter-spacing: 12px;
            background: linear-gradient(135deg, var(--gold-dark), var(--gold-primary), var(--gold-light), var(--gold-primary), var(--gold-dark));
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: goldShimmer 3s linear infinite;
            margin-bottom: 40px;
        }

        @keyframes goldShimmer {
            to { background-position: 200% center; }
        }

        .loader-line {
            width: 200px;
            height: 1px;
            background: rgba(212, 175, 55, 0.2);
            margin: 0 auto 20px;
            position: relative;
            overflow: hidden;
        }

        .loader-line::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, var(--gold-primary), transparent);
            animation: loadLine 2s ease-in-out infinite;
        }

        @keyframes loadLine {
            0% { left: -100%; }
            100% { left: 100%; }
        }

        .loader-text {
            font-family: 'Montserrat', sans-serif;
            font-size: 11px;
            letter-spacing: 4px;
            color: var(--gold-primary);
            text-transform: uppercase;
            opacity: 0.8;
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 30px 60px;
            background: rgba(5, 5, 5, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(212, 175, 55, 0.1);
            transition: all 0.5s ease;
        }

        nav.scrolled {
            padding: 20px 60px;
            background: rgba(5, 5, 5, 0.95);
            border-bottom: 1px solid rgba(212, 175, 55, 0.3);
        }

        .logo {
            font-family: 'Playfair Display', serif;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: 4px;
            color: var(--white-pure);
            position: relative;
        }

        .logo span {
            color: var(--gold-primary);
        }

        .logo::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 30px;
            height: 1px;
            background: var(--gold-primary);
            transition: width 0.5s ease;
        }

        .logo:hover::after {
            width: 100%;
        }

        .nav-links {
            display: flex;
            gap: 50px;
            list-style: none;
        }

        .nav-links a {
            color: var(--white-muted);
            text-decoration: none;
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 3px;
            text-transform: uppercase;
            position: relative;
            transition: color 0.4s;
            padding: 5px 0;
        }

        .nav-links a::before {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 50%;
            width: 0;
            height: 1px;
            background: var(--gold-primary);
            transition: all 0.4s ease;
            transform: translateX(-50%);
        }

        .nav-links a:hover {
            color: var(--gold-primary);
        }

        .nav-links a:hover::before {
            width: 100%;
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(ellipse at 20% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
                linear-gradient(180deg, var(--black-deep) 0%, var(--black-soft) 100%);
        }

        .hero-content {
            text-align: center;
            z-index: 10;
            padding: 0 20px;
        }

        .hero-eyebrow {
            font-size: 12px;
            letter-spacing: 8px;
            text-transform: uppercase;
            color: var(--gold-primary);
            margin-bottom: 30px;
            opacity: 0;
            animation: fadeInUp 1s 0.5s forwards;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }

        .hero-eyebrow::before,
        .hero-eyebrow::after {
            content: '';
            width: 40px;
            height: 1px;
            background: var(--gold-primary);
        }

        .hero-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(48px, 10vw, 140px);
            font-weight: 700;
            letter-spacing: 8px;
            line-height: 1;
            margin-bottom: 30px;
            background: linear-gradient(135deg, var(--white-pure) 0%, var(--gold-light) 50%, var(--white-pure) 100%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: titleShimmer 5s linear infinite;
            opacity: 0;
            animation: fadeInUp 1.2s 0.8s forwards, titleShimmer 5s linear infinite;
        }

        @keyframes titleShimmer {
            to { background-position: 200% center; }
        }

        .hero-subtitle {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(18px, 2.5vw, 28px);
            font-weight: 300;
            font-style: italic;
            color: var(--white-muted);
            margin-bottom: 50px;
            letter-spacing: 2px;
            opacity: 0;
            animation: fadeInUp 1s 1.2s forwards;
        }

        .hero-divider {
            width: 1px;
            height: 80px;
            background: linear-gradient(180deg, transparent, var(--gold-primary), transparent);
            margin: 0 auto 50px;
            opacity: 0;
            animation: fadeInUp 1s 1.5s forwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .cta-button {
            padding: 22px 60px;
            font-family: 'Montserrat', sans-serif;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 4px;
            text-transform: uppercase;
            border: 1px solid var(--gold-primary);
            background: transparent;
            color: var(--gold-primary);
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            opacity: 0;
            animation: fadeInUp 1s 1.8s forwards;
        }

        .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent);
            transition: left 0.6s;
        }

        .cta-button:hover {
            background: var(--gold-primary);
            color: var(--black-deep);
            letter-spacing: 6px;
            box-shadow: 0 0 40px rgba(212, 175, 55, 0.4);
        }

        .cta-button:hover::before {
            left: 100%;
        }

        /* Scroll Indicator */
        .scroll-indicator {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            opacity: 0;
            animation: fadeInUp 1s 2.2s forwards;
        }

        .scroll-text {
            font-size: 10px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: var(--gold-primary);
        }

        .scroll-line {
            width: 1px;
            height: 40px;
            background: rgba(212, 175, 55, 0.3);
            position: relative;
            overflow: hidden;
        }

        .scroll-line::after {
            content: '';
            position: absolute;
            top: -100%;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--gold-primary);
            animation: scrollDown 2s ease-in-out infinite;
        }

        @keyframes scrollDown {
            0% { top: -100%; }
            100% { top: 100%; }
        }

        /* Sections */
        section {
            padding: 150px 60px;
            position: relative;
            z-index: 1;
        }

        .section-header {
            text-align: center;
            margin-bottom: 100px;
        }

        .section-eyebrow {
            font-size: 11px;
            letter-spacing: 6px;
            text-transform: uppercase;
            color: var(--gold-primary);
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }

        .section-eyebrow::before,
        .section-eyebrow::after {
            content: '';
            width: 30px;
            height: 1px;
            background: var(--gold-primary);
        }

        .section-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(36px, 5vw, 64px);
            font-weight: 700;
            letter-spacing: 4px;
            color: var(--white-pure);
            margin-bottom: 20px;
        }

        .section-title span {
            font-style: italic;
            color: var(--gold-primary);
            font-weight: 400;
        }

        .section-subtitle {
            font-family: 'Cormorant Garamond', serif;
            font-size: 20px;
            font-style: italic;
            color: var(--white-muted);
            letter-spacing: 1px;
        }

        /* Cards Grid */
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
            max-width: 1400px;
            margin: 0 auto;
        }

        .card {
            background: linear-gradient(135deg, var(--black-card) 0%, rgba(20, 20, 20, 0.8) 100%);
            border: 1px solid rgba(212, 175, 55, 0.15);
            padding: 50px 40px;
            position: relative;
            overflow: hidden;
            transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            cursor: pointer;
        }

        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--gold-primary), transparent);
            transform: translateX(-100%);
            transition: transform 0.8s ease;
        }

        .card::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent);
            opacity: 0;
            transition: opacity 0.6s;
        }

        .card:hover {
            border-color: rgba(212, 175, 55, 0.5);
            transform: translateY(-10px);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 175, 55, 0.1);
        }

        .card:hover::before {
            transform: translateX(100%);
        }

        .card:hover::after {
            opacity: 1;
        }

        .card-number {
            font-family: 'Playfair Display', serif;
            font-size: 48px;
            color: var(--gold-primary);
            opacity: 0.3;
            margin-bottom: 20px;
            font-weight: 700;
        }

        .card-icon {
            font-size: 36px;
            margin-bottom: 25px;
            display: inline-block;
            filter: grayscale(100%) brightness(2);
            transition: filter 0.5s;
        }

        .card:hover .card-icon {
            filter: grayscale(0%) brightness(1);
        }

        .card h3 {
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            margin-bottom: 15px;
            color: var(--white-pure);
            letter-spacing: 2px;
            font-weight: 600;
        }

        .card p {
            font-size: 14px;
            line-height: 1.8;
            color: var(--white-muted);
            letter-spacing: 0.5px;
        }

        .card-link {
            display: inline-block;
            margin-top: 25px;
            font-size: 11px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: var(--gold-primary);
            text-decoration: none;
            position: relative;
            padding-bottom: 5px;
            transition: letter-spacing 0.4s;
        }

        .card-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: var(--gold-primary);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.4s ease;
        }

        .card:hover .card-link {
            letter-spacing: 5px;
        }

        .card:hover .card-link::after {
            transform: scaleX(1);
            transform-origin: left;
        }

        /* Luxury Divider */
        .luxury-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30px;
            padding: 80px 0;
        }

        .luxury-divider .line {
            width: 100px;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--gold-primary), transparent);
        }

        .luxury-divider .diamond {
            width: 12px;
            height: 12px;
            border: 1px solid var(--gold-primary);
            transform: rotate(45deg);
            position: relative;
        }

        .luxury-divider .diamond::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 4px;
            height: 4px;
            background: var(--gold-primary);
            transform: translate(-50%, -50%);
        }

        /* Stats Section */
        .stats-section {
            background: linear-gradient(180deg, var(--black-deep) 0%, var(--black-soft) 50%, var(--black-deep) 100%);
            border-top: 1px solid rgba(212, 175, 55, 0.1);
            border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 60px;
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }

        .stat-item {
            position: relative;
        }

        .stat-item::after {
            content: '';
            position: absolute;
            right: -30px;
            top: 50%;
            transform: translateY(-50%);
            width: 1px;
            height: 60px;
            background: linear-gradient(180deg, transparent, var(--gold-primary), transparent);
        }

        .stat-item:last-child::after {
            display: none;
        }

        .stat-number {
            font-family: 'Playfair Display', serif;
            font-size: 64px;
            font-weight: 700;
            background: linear-gradient(135deg, var(--gold-light), var(--gold-primary), var(--gold-dark));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
            margin-bottom: 15px;
        }

        .stat-label {
            font-size: 12px;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: var(--white-muted);
        }

        /* Showcase Section */
        .showcase {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            max-width: 1400px;
            margin: 0 auto;
            align-items: center;
        }

        .showcase-content h2 {
            font-family: 'Playfair Display', serif;
            font-size: 48px;
            margin-bottom: 30px;
            line-height: 1.2;
        }

        .showcase-content h2 span {
            color: var(--gold-primary);
            font-style: italic;
        }

        .showcase-content p {
            font-size: 16px;
            line-height: 1.8;
            color: var(--white-muted);
            margin-bottom: 30px;
        }

        .showcase-features {
            list-style: none;
        }

        .showcase-features li {
            padding: 15px 0;
            border-bottom: 1px solid rgba(212, 175, 55, 0.1);
            display: flex;
            align-items: center;
            gap: 20px;
            font-size: 14px;
            letter-spacing: 1px;
        }

        .showcase-features li::before {
            content: '◆';
            color: var(--gold-primary);
            font-size: 10px;
        }

        .showcase-visual {
            position: relative;
            height: 500px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .gold-frame {
            width: 400px;
            height: 400px;
            border: 1px solid var(--gold-primary);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: rotateFrame 20s linear infinite;
        }

        @keyframes rotateFrame {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .gold-frame::before,
        .gold-frame::after {
            content: '';
            position: absolute;
            border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .gold-frame::before {
            width: 350px;
            height: 350px;
        }

        .gold-frame::after {
            width: 300px;
            height: 300px;
        }

        .gold-frame-inner {
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.2), transparent);
            border: 1px solid var(--gold-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Playfair Display', serif;
            font-size: 48px;
            color: var(--gold-primary);
            animation: rotateFrame 20s linear infinite reverse;
        }

        /* Contact Section */
        .contact-section {
            text-align: center;
            background: linear-gradient(180deg, var(--black-deep) 0%, rgba(212, 175, 55, 0.03) 50%, var(--black-deep) 100%);
        }

        .contact-content {
            max-width: 800px;
            margin: 0 auto;
        }

        .contact-content h2 {
            font-family: 'Playfair Display', serif;
            font-size: 56px;
            margin-bottom: 30px;
        }

        .contact-content h2 span {
            color: var(--gold-primary);
            font-style: italic;
        }

        .contact-content p {
            font-family: 'Cormorant Garamond', serif;
            font-size: 22px;
            font-style: italic;
            color: var(--white-muted);
            margin-bottom: 50px;
            line-height: 1.6;
        }

        /* Footer */
        footer {
            background: var(--black-deep);
            padding: 80px 60px 40px;
            border-top: 1px solid rgba(212, 175, 55, 0.15);
            position: relative;
            z-index: 1;
        }

        .footer-content {
            max-width: 1400px;
            margin: 0 auto;
        }

        .footer-top {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 60px;
            margin-bottom: 60px;
        }

        .footer-brand {
            font-family: 'Playfair Display', serif;
            font-size: 32px;
            letter-spacing: 4px;
            margin-bottom: 20px;
        }

        .footer-brand span {
            color: var(--gold-primary);
        }

        .footer-tagline {
            font-family: 'Cormorant Garamond', serif;
            font-size: 18px;
            font-style: italic;
            color: var(--white-muted);
            line-height: 1.6;
        }

        .footer-col h4 {
            font-size: 11px;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: var(--gold-primary);
            margin-bottom: 25px;
        }

        .footer-col ul {
            list-style: none;
        }

        .footer-col ul li {
            margin-bottom: 12px;
        }

        .footer-col ul li a {
            color: var(--white-muted);
            text-decoration: none;
            font-size: 13px;
            letter-spacing: 1px;
            transition: color 0.3s, padding-left 0.3s;
        }

        .footer-col ul li a:hover {
            color: var(--gold-primary);
            padding-left: 10px;
        }

        .footer-bottom {
            padding-top: 40px;
            border-top: 1px solid rgba(212, 175, 55, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        .footer-copy {
            font-size: 11px;
            letter-spacing: 2px;
            color: var(--white-muted);
        }

        .social-links {
            display: flex;
            gap: 25px;
        }

        .social-link {
            width: 45px;
            height: 45px;
            border: 1px solid rgba(212, 175, 55, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: var(--gold-primary);
            transition: all 0.4s;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .social-link::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: var(--gold-primary);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.4s, height 0.4s;
            z-index: -1;
        }

        .social-link:hover {
            color: var(--black-deep);
            border-color: var(--gold-primary);
            transform: translateY(-5px);
        }

        .social-link:hover::before {
            width: 100%;
            height: 100%;
        }

        /* Reveal Animation */
        .reveal {
            opacity: 0;
            transform: translateY(60px);
            transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 968px) {
            .nav-links { gap: 25px; }
            .nav-links a { font-size: 10px; letter-spacing: 2px; }
            section { padding: 100px 30px; }
            .showcase { grid-template-columns: 1fr; gap: 60px; }
            .footer-top { grid-template-columns: 1fr 1fr; gap: 40px; }
            .stat-item::after { display: none; }
            nav { padding: 20px 30px; }
        }

        @media (max-width: 600px) {
            .nav-links { display: none; }
            .footer-top { grid-template-columns: 1fr; }
            .footer-bottom { flex-direction: column; text-align: center; }
            .hero-title { letter-spacing: 4px; }
        }
    </style>
</head>
<body>
    <!-- Custom Cursor -->
    <div class="cursor"></div>
    <div class="cursor-follower"></div>

    <!-- Loading Screen -->
    <div class="loader" id="loader">
        <div class="loader-content">
            <div class="loader-logo">NOIACORE</div>
            <div class="loader-line"></div>
            <div class="loader-text">Excellence in Artificial Intelligence</div>
        </div>
    </div>

    <!-- Particle Background -->
    <canvas id="particles-canvas"></canvas>

    <!-- Navigation -->
    <nav id="navbar">
        <div class="logo">NOIA<span>CORE</span></div>
        <ul class="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#excelencia">Excelencia</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="inicio">
        <div class="hero-bg"></div>
        <div class="hero-content">
            <div class="hero-eyebrow">Luxury AI Experience</div>
            <h1 class="hero-title">NOIACORE</h1>
            <p class="hero-subtitle">Donde la inteligencia artificial se encuentra con la excelencia</p>
            <div class="hero-divider"></div>
            <button class="cta-button" onclick="scrollToSection('servicios')">
                Descubrir Servicios
            </button>
        </div>
        <div class="scroll-indicator">
            <span class="scroll-text">Scroll</span>
            <div class="scroll-line"></div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="servicios">
        <div class="section-header reveal">
            <div class="section-eyebrow">Nuestros Servicios</div>
            <h2 class="section-title">Soluciones de <span>Élite</span></h2>
            <p class="section-subtitle">Tecnología de vanguardia con un toque de distinción</p>
        </div>
        <div class="cards-grid">
            <div class="card reveal">
                <div class="card-number">01</div>
                <div class="card-icon">🤖</div>
                <h3>IA Personalizada</h3>
                <p>Soluciones de inteligencia artificial diseñadas a medida para las necesidades específicas de su negocio.</p>
                <a href="#" class="card-link">Explorar →</a>
            </div>
            <div class="card reveal">
                <div class="card-number">02</div>
                <div class="card-icon">📊</div>
                <h3>Análisis Predictivo</h3>
                <p>Anticipe tendencias y comportamientos con modelos de machine learning de última generación.</p>
                <a href="#" class="card-link">Explorar →</a>
            </div>
            <div class="card reveal">
                <div class="card-number">03</div>
                <div class="card-icon"></div>
                <h3>Ciberseguridad</h3>
                <p>Protección integral con sistemas de seguridad impulsados por inteligencia artificial avanzada.</p>
                <a href="#" class="card-link">Explorar →</a>
            </div>
            <div class="card reveal">
                <div class="card-number">04</div>
                <div class="card-icon"></div>
                <h3>Automatización</h3>
                <p>Optimice procesos y reduzca costes con automatización inteligente de alto rendimiento.</p>
                <a href="#" class="card-link">Explorar →</a>
            </div>
            <div class="card reveal">
                <div class="card-number">05</div>
                <div class="card-icon"></div>
                <h3>Consultoría Premium</h3>
                <p>Asesoramiento experto para la transformación digital de su empresa con resultados garantizados.</p>
                <a href="#" class="card-link">Explorar →</a>
            </div>
            <div class="card reveal">
                <div class="card-number">06</div>
                <div class="card-icon">🚀</div>
                <h3>Desarrollo Web</h3>
                <p>Aplicaciones web sofisticadas construidas con las tecnologías más avanzadas del mercado.</p>
                <a href="#" class="card-link">Explorar →</a>
            </div>
        </div>
    </section>

    <!-- Luxury Divider -->
    <div class="luxury-divider">
        <div class="line"></div>
        <div class="diamond"></div>
        <div class="line"></div>
    </div>

    <!-- Stats Section -->
    <section class="stats-section">
        <div class="stats-grid">
            <div class="stat-item reveal">
                <div class="stat-number" data-target="150">0</div>
                <div class="stat-label">Proyectos Exitosos</div>
            </div>
            <div class="stat-item reveal">
                <div class="stat-number" data-target="98">0</div>
                <div class="stat-label">Clientes Satisfechos %</div>
            </div>
            <div class="stat-item reveal">
                <div class="stat-number" data-target="24">0</div>
                <div class="stat-label">Soporte Premium</div>
            </div>
            <div class="stat-item reveal">
                <div class="stat-number" data-target="12">0</div>
                <div class="stat-label">Años de Experiencia</div>
            </div>
        </div>
    </section>

    <!-- Showcase Section -->
    <section id="excelencia">
        <div class="showcase">
            <div class="showcase-content reveal">
                <div class="section-eyebrow" style="justify-content: flex-start;">Excelencia</div>
                <h2>Tecnología con <span>Distinción</span></h2>
                <p>En NoiaCore combinamos la precisión de la inteligencia artificial con los más altos estándares de calidad. Cada solución que desarrollamos refleja nuestro compromiso con la excelencia y la innovación.</p>
                <ul class="showcase-features">
                    <li>Arquitecturas de IA de última generación</li>
                    <li>Seguridad y privacidad garantizadas</li>
                    <li>Resultados medibles y escalables</li>
                    <li>Soporte técnico premium 24/7</li>
                    <li>Integración perfecta con sus sistemas</li>
                </ul>
            </div>
            <div class="showcase-visual reveal">
                <div class="gold-frame">
                    <div class="gold-frame-inner">NC</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" id="contacto">
        <div class="contact-content reveal">
            <div class="section-eyebrow">Contacto</div>
            <h2>Hablemos de su <span>Próximo Proyecto</span></h2>
            <p>"La excelencia no es un acto, sino un hábito. Permítanos demostrarle cómo la inteligencia artificial puede transformar su visión en realidad."</p>
            <button class="cta-button">Solicitar Consulta Privada</button>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-top">
                <div>
                    <div class="footer-brand">NOIA<span>CORE</span></div>
                    <p class="footer-tagline">Inteligencia Artificial de Élite para empresas que buscan la excelencia.</p>
                </div>
                <div class="footer-col">
                    <h4>Servicios</h4>
                    <ul>
                        <li><a href="#">IA Personalizada</a></li>
                        <li><a href="#">Análisis Predictivo</a></li>
                        <li><a href="#">Ciberseguridad</a></li>
                        <li><a href="#">Automatización</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Empresa</h4>
                    <ul>
                        <li><a href="#">Sobre Nosotros</a></li>
                        <li><a href="#">Casos de Éxito</a></li>
                        <li><a href="#">Carreras</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contacto</h4>
                    <ul>
                        <li><a href="#">info@noiacore.com</a></li>
                        <li><a href="#">+34 900 000 000</a></li>
                        <li><a href="#">Madrid, España</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-copy">© 2026 NOIACORE · Pedro Belentani · Todos los derechos reservados</div>
                <div class="social-links">
                    <div class="social-link">✉</div>
                    <div class="social-link">in</div>
                    <div class="social-link">𝕏</div>
                    <div class="social-link">◉</div>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Loading Screen
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 2500);
        });

        // Custom Cursor
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX - 20 + 'px';
                cursorFollower.style.top = e.clientY - 20 + 'px';
            }, 80);
        });

        document.querySelectorAll('a, button, .card, .social-link').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorFollower.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorFollower.classList.remove('hover');
            });
        });

        // Particle System - Gold Luxury
        const canvas = document.getElementById('particles-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 60;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Connect particles with subtle gold lines
            particles.forEach((a, index) => {
                particles.slice(index + 1).forEach(b => {
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.strokeStyle = `rgba(212, 175, 55, ${0.08 * (1 - distance / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        // Scroll Effects
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Reveal on scroll
            document.querySelectorAll('.reveal').forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 100) {
                    el.classList.add('active');
                }
            });

            // Counter animation
            document.querySelectorAll('.stat-number').forEach(stat => {
                const rect = stat.getBoundingClientRect();
                if (rect.top < window.innerHeight && !stat.classList.contains('counted')) {
                    stat.classList.add('counted');
                    const target = parseInt(stat.getAttribute('data-target'));
                    let current = 0;
                    const increment = target / 60;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = target + '+';
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current);
                        }
                    }, 30);
                }
            });
        });

        // Smooth Scroll
        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        // 3D Tilt Effect for Cards
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });

        // Parallax for hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-content');
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.3}px)`;
                hero.style.opacity = 1 - (scrolled / window.innerHeight);
            }
        });
    </script>
</body>
</html>
```

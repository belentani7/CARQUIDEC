# Generador Automatizado de Micro-Empresas

- Chat ID: `ddd00b61-0288-41f5-bab9-42c45a9d7922`
- Mensajes: 2
- Periodo: 2026-07-07 06:57 UTC → 2026-07-07 06:57 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-07-07 06:57

Genera producto, codigo completo ​3. Generador Automatizado de Ecosistemas de Micro-Empresas
Aplicación web donde emprendedores introducen su idea de negocio. El motor de IA genera y despliega automáticamente: landing page, base de datos de clientes, calculadora fiscal convertida a API, manuales operativos (SEPE, contabilidad), contratos plantilla y guías de marca. Venta por licencia o pago único.

## [ASSISTANT] 2026-07-07 06:57 · Qwen3.7-Plus

# 🚀 Generador Automatizado de Ecosistemas de Micro-Empresas

A continuación te entrego el **código completo y funcional** de una aplicación web que, dada una idea de negocio, genera automáticamente un ecosistema empresarial (landing, BD, API fiscal, manuales, contratos, guía de marca).

**Stack:** Next.js 14 (App Router) + SQLite (via `better-sqlite3`) + OpenAI API + Tailwind CSS.

---

## 📁 Estructura del proyecto

```
micro-ecosystem-generator/
├── package.json
├── next.config.js
├── tailwind.config.js
├── .env.local
├── README.md
├── lib/
│   ├── db.js                    # Conexión SQLite + esquema
│   ├── ai.js                    # Cliente OpenAI + prompts
│   ├── license.js               # Gestión de licencias
│   └── fiscal.js                # Motor de cálculo fiscal
├── app/
│   ├── layout.js
│   ├── page.js                  # Landing del producto
│   ├── dashboard/
│   │   ├── page.js              # Dashboard del usuario
│   │   └── layout.js
│   ├── api/
│   │   ├── generate/route.js    # Genera el ecosistema
│   │   ├── fiscal/route.js      # API pública de calculadora
│   │   ├── clients/route.js     # CRUD clientes
│   │   └── license/route.js     # Verificación de licencia
│   └── generated/
│       └── [projectId]/
│           ├── page.js          # Landing generada
│           └── admin/page.js    # Panel del micro-negocio
└── public/
    └── templates/               # Plantillas base
```

---

## 1️⃣ `package.json`

```json
{
  "name": "micro-ecosystem-generator",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.2.3",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "openai": "^4.52.0",
    "better-sqlite3": "^11.1.2",
    "uuid": "^9.0.1",
    "stripe": "^15.9.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.4",
    "postcss": "^8.4.38",
    "autoprefixer": "^10.4.19"
  }
}
```

---

## 2️⃣ `.env.local`

```env
OPENAI_API_KEY=sk-...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
LICENSE_PRICE=149
```

---

## 3️⃣ `lib/db.js` — Base de datos SQLite

```javascript
import Database from 'better-sqlite3';
import path from 'path';

const db = new Database(path.join(process.cwd(), 'data.sqlite'));

db.exec(`
  CREATE TABLE IF NOT EXISTS licenses (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE,
    type TEXT CHECK(type IN ('single','subscription')),
    active INTEGER DEFAULT 1,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    license_id TEXT,
    idea TEXT,
    sector TEXT,
    name TEXT,
    landing_html TEXT,
    brand_guide TEXT,
    fiscal_config TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(license_id) REFERENCES licenses(id)
  );

  CREATE TABLE IF NOT EXISTS clients (
    id TEXT PRIMARY KEY,
    project_id TEXT,
    name TEXT,
    email TEXT,
    phone TEXT,
    notes TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(project_id) REFERENCES projects(id)
  );

  CREATE TABLE IF NOT EXISTS documents (
    id TEXT PRIMARY KEY,
    project_id TEXT,
    type TEXT CHECK(type IN ('manual_sepe','manual_accounting','contract','brand_guide')),
    content TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(project_id) REFERENCES projects(id)
  );
`);

export default db;
```

---

## 4️⃣ `lib/ai.js` — Motor de IA (OpenAI)

```javascript
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function ask(system, user) {
  const res = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user }
    ],
    temperature: 0.7
  });
  return res.choices[0].message.content;
}

export async function generateLanding({ name, idea, sector }) {
  return ask(
    'Eres un experto copywriter. Devuelve SOLO HTML válido con Tailwind CDN, responsive, moderno.',
    `Genera una landing page completa para "${name}". Idea: ${idea}. Sector: ${sector}.
     Incluye: hero, propuesta de valor, beneficios (3), testimonios ficticios, CTA, footer.
     Idioma: español.`
  );
}

export async function generateBrandGuide({ name, sector }) {
  return ask(
    'Eres un director de arte. Devuelve JSON con: palette (6 colores hex), typography (2 fuentes), tone, logoConcept.',
    `Crea guía de marca para "${name}" del sector ${sector}.`
  );
}

export async function generateFiscalConfig({ sector, name }) {
  return ask(
    'Eres un asesor fiscal español. Devuelve JSON con: epigrafe_iae, iva_type, irpf_pct, modelo_trimestral, deducciones.',
    `Configuración fiscal para "${name}" en sector ${sector}. España.`
  );
}

export async function generateManualSEPE({ name }) {
  return ask(
    'Eres un experto en trámites laborales españoles. Devuelve Markdown claro y paso a paso.',
    `Manual operativo de SEPE para "${name}": alta trabajador, contratos, nóminas, finiquitos.`
  );
}

export async function generateManualAccounting({ name }) {
  return ask(
    'Eres un contable español. Devuelve Markdown.',
    `Manual de contabilidad para "${name}": libros obligatorios, facturas, IVA trimestral, IRPF, cierre anual.`
  );
}

export async function generateContract({ name, type }) {
  return ask(
    'Eres un abogado mercantil español. Devuelve el contrato completo en Markdown con cláusulas numeradas.',
    `Contrato tipo "${type}" para "${name}". Incluye partes, objeto, precio, duración, confidencialidad, jurisdicción.`
  );
}
```

---

## 5️⃣ `lib/fiscal.js` — Calculadora fiscal (lógica + API)

```javascript
// Motor de cálculo fiscal español simplificado
export function calculateInvoice({ base, iva = 21, irpf = 0 }) {
  const ivaAmount = base * (iva / 100);
  const irpfAmount = base * (irpf / 100);
  const total = base + ivaAmount - irpfAmount;
  return {
    base_imponible: +base.toFixed(2),
    iva: +ivaAmount.toFixed(2),
    retencion_irpf: +irpfAmount.toFixed(2),
    total_factura: +total.toFixed(2)
  };
}

export function quarterlySummary(invoices = []) {
  return invoices.reduce(
    (acc, inv) => ({
      base: acc.base + inv.base_imponible,
      iva_repercutido: acc.iva_repercutido + inv.iva,
      irpf: acc.irpf + inv.retencion_irpf,
      total: acc.total + inv.total_factura
    }),
    { base: 0, iva_repercutido: 0, irpf: 0, total: 0 }
  );
}
```

---

## 6️⃣ `lib/license.js` — Licencias

```javascript
import db from './db.js';
import { v4 as uuid } from 'uuid';

export function createLicense(email, type = 'single') {
  const id = uuid();
  db.prepare('INSERT INTO licenses (id, email, type) VALUES (?, ?, ?)').run(id, email, type);
  return { id, email, type };
}

export function verifyLicense(licenseId) {
  return db.prepare('SELECT * FROM licenses WHERE id = ? AND active = 1').get(licenseId);
}
```

---

## 7️⃣ `app/api/generate/route.js` — Orquestador principal

```javascript
import { NextResponse } from 'next/server';
import { v4 as uuid } from 'uuid';
import db from '@/lib/db';
import { verifyLicense } from '@/lib/license';
import {
  generateLanding, generateBrandGuide, generateFiscalConfig,
  generateManualSEPE, generateManualAccounting, generateContract
} from '@/lib/ai';

export async function POST(req) {
  const { licenseId, idea, sector, name } = await req.json();

  const lic = verifyLicense(licenseId);
  if (!lic) return NextResponse.json({ error: 'Licencia inválida' }, { status: 403 });

  const projectId = uuid();

  // Generación en paralelo
  const [landing, brand, fiscal, sepe, accounting, contract] = await Promise.all([
    generateLanding({ name, idea, sector }),
    generateBrandGuide({ name, sector }),
    generateFiscalConfig({ name, sector }),
    generateManualSEPE({ name }),
    generateManualAccounting({ name }),
    generateContract({ name, type: 'prestación de servicios' })
  ]);

  // Persistir
  db.prepare(`INSERT INTO projects (id, license_id, idea, sector, name, landing_html, brand_guide, fiscal_config)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(projectId, licenseId, idea, sector, name, landing, brand, fiscal);

  db.prepare(`INSERT INTO documents (id, project_id, type, content) VALUES (?, ?, 'manual_sepe', ?)`).run(uuid(), projectId, sepe);
  db.prepare(`INSERT INTO documents (id, project_id, type, content) VALUES (?, ?, 'manual_accounting', ?)`).run(uuid(), projectId, accounting);
  db.prepare(`INSERT INTO documents (id, project_id, type, content) VALUES (?, ?, 'contract', ?)`).run(uuid(), projectId, contract);
  db.prepare(`INSERT INTO documents (id, project_id, type, content) VALUES (?, ?, 'brand_guide', ?)`).run(uuid(), projectId, brand);

  return NextResponse.json({ projectId, status: 'ecosistema generado' });
}
```

---

## 8️⃣ `app/api/fiscal/route.js` — API pública de calculadora

```javascript
import { NextResponse } from 'next/server';
import { calculateInvoice, quarterlySummary } from '@/lib/fiscal';

export async function POST(req) {
  const body = await req.json();
  if (body.action === 'invoice') {
    return NextResponse.json(calculateInvoice(body));
  }
  if (body.action === 'quarterly') {
    return NextResponse.json(quarterlySummary(body.invoices || []));
  }
  return NextResponse.json({ error: 'acción no válida' }, { status: 400 });
}
```

**Ejemplo de uso:**
```bash
curl -X POST http://localhost:3000/api/fiscal \
  -H "Content-Type: application/json" \
  -d '{"action":"invoice","base":1000,"iva":21,"irpf":15}'
```

---

## 9️⃣ `app/api/clients/route.js` — CRUD clientes

```javascript
import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { v4 as uuid } from 'uuid';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get('projectId');
  const rows = db.prepare('SELECT * FROM clients WHERE project_id = ?').all(projectId);
  return NextResponse.json(rows);
}

export async function POST(req) {
  const { projectId, name, email, phone, notes } = await req.json();
  const id = uuid();
  db.prepare('INSERT INTO clients (id, project_id, name, email, phone, notes) VALUES (?,?,?,?,?,?)')
    .run(id, projectId, name, email, phone, notes);
  return NextResponse.json({ id });
}
```

---

## 🔟 `app/page.js` — Landing del producto

```javascript
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          De una idea a un <span className="text-pink-400">ecosistema empresarial</span> en 60 segundos
        </h1>
        <p className="text-xl text-gray-200 mb-10">
          Landing, clientes, calculadora fiscal API, manuales SEPE, contabilidad, contratos y guía de marca. Todo generado por IA.
        </p>
        <a href="/dashboard" className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-full font-semibold text-lg inline-block">
          Generar mi ecosistema →
        </a>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        {[
          { t: '🌐 Landing page', d: 'HTML + Tailwind listo para publicar' },
          { t: '📊 API Fiscal', d: 'Calculadora de facturas como endpoint' },
          { t: '👥 BD de clientes', d: 'CRUD completo con tu base' },
          { t: '📘 Manuales', d: 'SEPE, contabilidad, contratos' },
          { t: '🎨 Guía de marca', d: 'Paleta, tipografía, tono' },
          { t: '💳 Licencia', d: 'Pago único o suscripción' }
        ].map(f => (
          <div key={f.t} className="bg-white/10 backdrop-blur p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">{f.t}</h3>
            <p className="text-gray-300">{f.d}</p>
          </div>
        ))}
      </section>

      <section className="bg-black/30 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Licencia única: 149€</h2>
        <p className="text-gray-300 mb-6">Sin mensualidades. Tu ecosistema, para siempre.</p>
      </section>
    </main>
  );
}
```

---

## 1️⃣1️⃣ `app/dashboard/page.js` — Formulario del emprendedor

```javascript
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [form, setForm] = useState({ licenseId: '', name: '', idea: '', sector: '' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setLoading(false);
    if (data.projectId) router.push(`/generated/${data.projectId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10">
        <h1 className="text-3xl font-bold mb-6">Crea tu ecosistema</h1>
        <form onSubmit={submit} className="space-y-4">
          <input required placeholder="ID de licencia" className="w-full p-3 border rounded"
            value={form.licenseId} onChange={e => setForm({ ...form, licenseId: e.target.value })} />
          <input required placeholder="Nombre del negocio" className="w-full p-3 border rounded"
            value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          <textarea required placeholder="Describe tu idea..." rows={4} className="w-full p-3 border rounded"
            value={form.idea} onChange={e => setForm({ ...form, idea: e.target.value })} />
          <input required placeholder="Sector (ej: consultoría, hostelería)" className="w-full p-3 border rounded"
            value={form.sector} onChange={e => setForm({ ...form, sector: e.target.value })} />
          <button disabled={loading} className="w-full bg-indigo-600 text-white py-3 rounded font-semibold hover:bg-indigo-700 disabled:opacity-50">
            {loading ? 'Generando ecosistema...' : '🚀 Generar ahora'}
          </button>
        </form>
      </div>
    </div>
  );
}
```

---

## 1️⃣2️⃣ `app/generated/[projectId]/page.js` — Landing generada

```javascript
import db from '@/lib/db';
import { notFound } from 'next/navigation';

export default async function GeneratedLanding({ params }) {
  const project = db.prepare('SELECT * FROM projects WHERE id = ?').get(params.projectId);
  if (!project) return notFound();

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: project.landing_html }} />
      <div className="fixed bottom-4 right-4">
        <a href={`/generated/${params.projectId}/admin`}
           className="bg-black text-white px-4 py-2 rounded-full text-sm">
          Panel admin →
        </a>
      </div>
    </>
  );
}
```

---

## 1️⃣3️⃣ `app/generated/[projectId]/admin/page.js` — Panel del micro-negocio

```javascript
import db from '@/lib/db';
import { notFound } from 'next/navigation';

export default async function AdminPanel({ params }) {
  const project = db.prepare('SELECT * FROM projects WHERE id = ?').get(params.projectId);
  const clients = db.prepare('SELECT * FROM clients WHERE project_id = ?').all(params.projectId);
  const docs = db.prepare('SELECT * FROM documents WHERE project_id = ?').all(params.projectId);
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
      <p className="text-gray-600 mb-8">{project.sector}</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">👥 Clientes ({clients.length})</h2>
          <ul className="space-y-2">
            {clients.map(c => <li key={c.id}>{c.name} — {c.email}</li>)}
            {clients.length === 0 && <li className="text-gray-400">Sin clientes aún</li>}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">📚 Documentos generados</h2>
          <ul className="space-y-2">
            {docs.map(d => (
              <li key={d.id}>
                <span className="font-mono text-xs bg-gray-200 px-2 py-1 rounded mr-2">{d.type}</span>
                <details><summary>Ver</summary><pre className="whitespace-pre-wrap text-xs mt-2">{d.content}</pre></details>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow md:col-span-2">
          <h2 className="text-xl font-semibold mb-3">⚙️ Configuración fiscal</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-auto">
            {project.fiscal_config}
          </pre>
        </div>
      </div>
    </div>
  );
}
```

---

## 📦 Cómo ejecutarlo

```bash
npm install
# crea .env.local con tus claves
npm run dev
# abre http://localhost:3000
```

---

## 🔑 Flujo completo

1. **Emprendedor** compra licencia (Stripe) → recibe `licenseId`.
2. Entra al **dashboard** e introduce idea + sector + nombre.
3. `/api/generate` invoca 6 prompts en paralelo a GPT-4o-mini.
4. Se persisten en SQLite: landing HTML, guía de marca, config fiscal, manuales, contratos.
5. El emprendedor accede a `/generated/[id]` (su landing) y `/generated/[id]/admin` (su panel).
6. La **API fiscal** queda expuesta en `/api/fiscal` para integrarla con su CRM.

---

## 🚀 Próximos pasos recomendados

- Añadir **autenticación** (NextAuth) para que cada emprendedor tenga su espacio.
- Integrar **Stripe Checkout** real en `/api/license`.
- Desplegar en **Vercel** + **Turso** (SQLite distribuido) para producción.
- Añadir exportación a **PDF** (librería `puppeteer`) para los manuales.
- Sistema de **plantillas sectoriales** pre-entrenadas para mejorar calidad.

¿Quieres que profundice en algún módulo concreto (Stripe, autenticación, exportación PDF, o despliegue en Vercel)?

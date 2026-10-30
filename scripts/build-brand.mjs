/**
 * CARQUIDEC · scripts/build-brand.mjs
 * ---------------------------------------------------------------------------
 * Prepara la identidad para una interfaz oscura.
 *
 * Problema detectado en la auditoría:
 *   El logotipo original (logo-carquidec-transparent.png) tiene el monograma en
 *   carbón y el lema en gris oscuro: sobre el fondo casi negro del sitio queda
 *   prácticamente invisible (contraste ~1.6:1) y sólo se sostenía a base de
 *   sombras. Además, a 28 px de alto el lema se convierte en una mancha.
 *
 * Solución:
 *   1. Recorta el logotipo en sus dos piezas reales detectando la banda vacía
 *      que las separa: monograma "CA" y logotipo tipográfico "CARQUIDEC".
 *   2. Recolorea para fondo oscuro: los trazos acromáticos pasan a un hueso
 *      metálico conservando su volumen; el oro se mantiene y se aviva.
 *   3. Exporta juegos en WebP/PNG/AVIF por anchura, el monograma nítido para la
 *      navegación y una imagen social Open Graph de 1200×630.
 *
 *   node scripts/build-brand.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SRC = path.join(ROOT, 'logo-carquidec-transparent.png');
const OUT = path.join(ROOT, 'assets', 'img');
const HERO = path.join(ROOT, 'assets', 'img', 'estudio-hero-1280.jpg');

/** Hueso metálico y oro para fondos oscuros. */
const BONE = { r: 0xf1, g: 0xed, b: 0xe4 };
const GOLD = { r: 0xd7, g: 0xbb, b: 0x88 };

fs.mkdir(OUT, { recursive: true });

/* ---------------------------------------------------------------------------
   1 · Leer píxeles y localizar las dos piezas del logotipo
   ------------------------------------------------------------------------ */
const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;

const rowAlpha = new Array(H).fill(0);
const colAlpha = new Array(W).fill(0);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const a = data[(y * W + x) * C + 3];
    if (a > 24) { rowAlpha[y] += a; colAlpha[x] += a; }
  }
}

const firstRow = rowAlpha.findIndex((v) => v > 0);
let lastRow = H - 1;
while (lastRow > 0 && rowAlpha[lastRow] === 0) lastRow--;

// Buscamos la banda vacía más gruesa dentro del contenido: separa monograma y texto.
let gapStart = -1, gapEnd = -1, bestGap = 0, y = firstRow;
while (y <= lastRow) {
  if (rowAlpha[y] === 0) {
    const start = y;
    while (y <= lastRow && rowAlpha[y] === 0) y++;
    const size = y - start;
    if (size > bestGap && start > firstRow + H * 0.05) { bestGap = size; gapStart = start; gapEnd = y - 1; }
  } else y++;
}

const layout = gapStart > -1
  ? { monogram: [firstRow, gapStart - 1], wordmark: [gapEnd + 1, lastRow] }
  : { monogram: [firstRow, Math.round(firstRow + (lastRow - firstRow) * 0.62)], wordmark: [Math.round(firstRow + (lastRow - firstRow) * 0.68), lastRow] };

const colBounds = (top, bottom) => {
  let left = W - 1, right = 0;
  for (let x = 0; x < W; x++) {
    let sum = 0;
    for (let yy = top; yy <= bottom; yy++) sum += data[(yy * W + x) * C + 3];
    if (sum > 40) { left = Math.min(left, x); right = Math.max(right, x); }
  }
  return [left, right];
};

const pad = (box, padY, padX) => {
  const [top, bottom] = layout[box];
  const [left, right] = colBounds(top, bottom);
  return {
    left: Math.max(0, left - padX),
    top: Math.max(0, top - padY),
    width: Math.min(W - Math.max(0, left - padX), right - left + 1 + padX * 2),
    height: Math.min(H - Math.max(0, top - padY), bottom - top + 1 + padY * 2)
  };
};

const boxes = {
  monogram: pad('monogram', Math.round(H * 0.015), Math.round(W * 0.015)),
  wordmark: pad('wordmark', Math.round(H * 0.01), Math.round(W * 0.01))
};

console.log('  piezas detectadas:',
  'monograma', `${boxes.monogram.width}×${boxes.monogram.height}`,
  '· logotipo', `${boxes.wordmark.width}×${boxes.wordmark.height}`, `(separadas en y=${gapStart})`);

/* ---------------------------------------------------------------------------
   2 · Recolorear para fondo oscuro (se conserva el volumen de los trazos)
   ------------------------------------------------------------------------ */
function recolorPipeline() {
  return (input) => {
    const { data: d, info: i } = input;
    const out = Buffer.from(d);
    for (let p = 0; p < i.width * i.height; p++) {
      const o = p * i.channels;
      const a = d[o + 3];
      if (a < 8) continue;
      const r = d[o], g = d[o + 1], b = d[o + 2];
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      const chroma = max - min;
      const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

      if (chroma > 26) {
        // Trazo dorado: subimos brillo y saturación para que cante sobre negro
        const k = 0.55 + 0.6 * lum;
        out[o] = Math.min(255, Math.round(GOLD.r * k + (r - min) * 0.25));
        out[o + 1] = Math.min(255, Math.round(GOLD.g * k + (g - min) * 0.2));
        out[o + 2] = Math.min(255, Math.round(GOLD.b * k * 0.9));
      } else {
        // Trazo acromático (carbón → hueso), manteniendo luces y sombras
        const t = 0.52 + 0.46 * lum;
        out[o] = Math.round(BONE.r * t);
        out[o + 1] = Math.round(BONE.g * t);
        out[o + 2] = Math.round(BONE.b * t);
      }
    }
    return out;
  };
}

const rawInput = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const recoloredBuf = await sharp(recolorPipeline()(rawInput), {
  raw: { width: rawInput.info.width, height: rawInput.info.height, channels: rawInput.info.channels }
})
  .png({ compressionLevel: 9 })
  .toBuffer();

/* ---------------------------------------------------------------------------
   3 · Exportar juegos de la identidad
   ------------------------------------------------------------------------ */
const sets = [
  ['logo-monograma', boxes.monogram, [48, 96, 192, 384]],
  ['logo-logotipo', boxes.wordmark, [320, 640, 1280]],
  ['logo-completo', null, [240, 480, 960]]
];

const report = [];
for (const [slug, box, widths] of sets) {
  for (const w of widths) {
    const src = box
      ? sharp(recoloredBuf).extract(box)
      : sharp(recoloredBuf);
    const stage = src.resize({ width: w, fit: 'inside', withoutEnlargement: true });

    const webp = path.join(OUT, `${slug}-${w}.webp`);
    const png = path.join(OUT, `${slug}-${w}.png`);
    const meta = await stage.clone().webp({ quality: 88, effort: 6, alphaQuality: 100 }).toFile(webp);
    await (box ? sharp(recoloredBuf).extract(box) : sharp(recoloredBuf))
      .resize({ width: w, fit: 'inside', withoutEnlargement: true })
      .png({ compressionLevel: 9, palette: false })
      .toFile(png);
    report.push([`${slug}-${w}`, meta.width + '×' + meta.height, (meta.size / 1024).toFixed(1) + ' kB']);
  }
}

/* ---------------------------------------------------------------------------
   4 · Imagen social (Open Graph 1200×630) — antes se compartía un JPEG suelto
   ------------------------------------------------------------------------ */
try {
  const ogBase = await sharp(HERO)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .modulate({ brightness: 0.55, saturation: 0.8 })
    .toBuffer();

  const vignette = Buffer.from(
    `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
       <defs>
         <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
           <stop offset="0%" stop-color="#0a0a09" stop-opacity="0.92"/>
           <stop offset="55%" stop-color="#0a0a09" stop-opacity="0.55"/>
           <stop offset="100%" stop-color="#0a0a09" stop-opacity="0.95"/>
         </linearGradient>
       </defs>
       <rect width="1200" height="630" fill="url(#g)"/>
       <rect x="60" y="500" width="120" height="2" fill="#c3ad88"/>
     </svg>`
  );

  const logoOg = await sharp(recoloredBuf)
    .extract(boxes.wordmark)
    .resize({ width: 620, fit: 'inside' })
    .toBuffer();

  const logoMeta = await sharp(logoOg).metadata();

  await sharp(ogBase)
    .composite([
      { input: vignette, blend: 'over' },
      { input: logoOg, top: 232, left: Math.round((1200 - (logoMeta.width || 620)) / 2) },
      { input: await sharp(recoloredBuf).extract(boxes.monogram).resize({ width: 132, fit: 'inside' }).toBuffer(), top: 74, left: Math.round((1200 - 132) / 2) }
    ])
    .jpeg({ quality: 86, mozjpeg: true, progressive: true })
    .toFile(path.join(OUT, 'og-carquidec.jpg'));

  report.push(['og-carquidec.jpg', '1200×630', 'listo']);
} catch (e) {
  console.warn('  ! no se pudo generar la imagen social:', e.message);
}

/* ---------------------------------------------------------------------------
   5 · Resumen
   ------------------------------------------------------------------------ */
console.log('\n  ' + 'activo'.padEnd(28), 'medidas'.padEnd(12), 'peso');
console.log('  ' + '-'.repeat(52));
for (const [name, size, kb] of report) console.log('  ' + name.padEnd(26), size.padEnd(12), kb);

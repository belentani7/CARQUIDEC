/**
 * CARQUIDEC · scripts/lib/html.mjs
 * ---------------------------------------------------------------------------
 * Utilidades puras de manipulación HTML compartidas por el canal de
 * construcción (scripts/build.mjs) y verificadas por los tests
 * (tools/test/basic.test.mjs). No tienen efectos secundarios: reciben texto,
 * devuelven texto.
 */

/** Escape de entidades HTML en atributos y textos generados. */
export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Normaliza una ruta de recurso: descodifica %xx, quita «./» inicial y recorta. */
export const decode = (u) => decodeURIComponent(u).replace(/^\.\//, '').trim();

/**
 * Escáner de etiquetas consciente de comillas.
 * Nuestro propio favicon es un SVG en data-URI que contiene ">": las expresiones
 * regulares ingenuas rompen el documento. Este ayudante recorre la etiqueta
 * respetando los valores entrecomillados.
 *
 * Para cada etiqueta <name …> del documento llama a test(tag):
 *   · si devuelve null, la etiqueta se deja tal cual;
 *   · si devuelve texto, se sustituye.
 */
export function replaceTags(html, name, test) {
  const open = new RegExp('<' + name + '\\b', 'gi');
  let out = '';
  let cursor = 0;
  let m;
  while ((m = open.exec(html))) {
    const start = m.index;
    if (start < cursor) continue;
    let i = start + m[0].length;
    let quote = null;
    while (i < html.length) {
      const ch = html[i];
      if (quote) { if (ch === quote) quote = null; }
      else if (ch === '"' || ch === "'") quote = ch;
      else if (ch === '>') break;
      i++;
    }
    const tag = html.slice(start, i + 1);
    out += html.slice(cursor, start);
    const replacement = test(tag);
    out += replacement === null ? tag : replacement;
    cursor = i + 1;
  }
  out += html.slice(cursor);
  return out;
}

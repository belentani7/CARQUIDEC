import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const canonical = resolve(root, "index.html");
assert.ok(existsSync(canonical), "canonical index.html is required");

const html = readFileSync(canonical, "utf8");
const localReferences = [...html.matchAll(/\b(?:src|href)=["']([^"'#]+)["']/gi)]
  .map((match) => match[1])
  .filter((value) => !/^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(value));

for (const reference of localReferences) {
  assert.ok(existsSync(resolve(root, decodeURIComponent(reference))), `missing canonical asset: ${reference}`);
}

for (const page of ["index.html", "contacto.html"]) {
  const pageHtml = readFileSync(resolve(root, page), "utf8");
  assert.doesNotMatch(pageHtml, /YOUR_FORM_ID/, `${page} must not expose a fictitious Formspree target`);
  assert.match(pageHtml, /<button\b[^>]*type=["']submit["'][^>]*\bdisabled\b/i, `${page} form must be visibly disabled`);
  assert.match(pageHtml, /Formulario temporalmente desactivado/i, `${page} must explain the disabled state`);
}

console.log(`CARQUIDEC smoke OK: ${localReferences.length} canonical references resolved`);

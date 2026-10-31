// Test factual de presencia (node:test, sin dependencias).
const test = require("node:test");
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");

test("protocolos de presencia", () => {
  for (const f of ["README.md", "LICENSE", ".gitignore"]) {
    fs.accessSync(path.join(ROOT, f));
  }
});

test("package.json parseable", () => {
  JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));
});

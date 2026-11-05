# AUDITORIA_ESTADO — CARQUIDEC

> Repositorio físico: `belentani-ecosystem/negocio/CARQUIDEC`

## Situación actual

| Indicador | Valor |
|-----------|-------|
| Categoría | negocio |
| Lenguaje | TypeScript |
| Rama | main |
| package.json | Sí |
| Python | No |
| Docker | No |
| README | Sí |
| AGENTS.md | Sí (inventory) |
| Tests | No (surface-scan) |
| CI | No (surface-scan) |

## Comentarios

- Estudio de arquitectura paramétrica, diseño bioclimático y energía asistidos por IA.
- Repo curado (categoría creative). Tamaño: ~3.6 MB (uno de los más grandes).
- Tiene AGENTS.md pero falta tests y CI.

## Comando para arreglar y elevar

```bash
npm install
npm run dev
npm run build
npm run test  # crear si no existe
# Crear .github/workflows/ci.yml
# Ejecutar gitleaks antes de push
gitleaks detect --source .

# PROJECT_MASTER_PROMPT — CARQUIDEC

Canonical GitHub repository: `belentani7/CARQUIDEC`.
Product: **CARQUIDEC**, the original architecture and interior design studio website of Hernando Carrillo. It is a third-party professional business site, not a Belentani music/AI product. Protect the studio's identity, content, client privacy and media provenance.

## Source of truth

- Current production site: `https://carquidec.com`, pending verification against actual deployment.
- Read `README.md`, `assets/js/carquidec.js`, `assets/css/carquidec.css`, `contacto.html`, `scripts/build.mjs`, and `tools/audit/` before editing.
- HTML pages in the repository are **generated**, according to README: edit the generator instead of patching generated HTML that the next build overwrites.
- The root `package.json` must remain minimal so Vercel serves the static files without breaking installation. The developer toolchain is under `tools/`. The production site should not require a backend just to remain readable.
- Preserve genuine portfolio items and the existing language scope (ES/EN/CA/FR/IT). Do not fabricate certifications, insurance, client testimonials or results.

## Full functional destination

1. Responsive, comprehensible architecture portfolio with project context, authentic imagery, accessible gallery navigation and performance-conscious media.
2. Service pages and lead qualification: transparent service offerings, contact form that never falsely claims a request was received, reliable direct email and WhatsApp alternatives, optional server-backed lead delivery only when a genuinely deployed endpoint is verified.
3. Studio operations: contact pathways, privacy-compliant lead handling, publishable portfolio updates, correct language fallbacks and accessibility.
4. Technical maturity: progressive enhancement with no blank screen if JavaScript or GSAP fails, WCAG-minded controls, SEO metadata validated against real business identity, high quality AVIF/WebP assets, correctly cached immutable assets, safe links, telemetry minimization and working feedback.
5. Reproducible delivery: run `npm ci --prefix tools`, `npm --prefix tools run audit`, and `node tools/audit/smoke.mjs --strict` before merging; inspect CI and real domain before any publication.

## Next implementation steps

- Current review branch: `factory/contact-form-reliable-delivery-20261023`. The contact form's Formspree action is a placeholder; require explicit JSON acknowledgement `{ok:true}` for real backend delivery. If the backend is missing, times out or fails, preserve form text and expose populated manual contact actions. Regression tests in `tools/audit/form-delivery.test.mjs`.
- Validate the new tests **with a real Node runner** (syntax checks alone are insufficient); fix regressions. Review whether the contact confirmation is accurately translated on all advertised languages; do not claim cross-language completeness until tested.
- Keep the existing build pipeline idempotent; no modification to generated pages by hand.
- Improve project navigation, image text alternatives, mobile accessibility and portfolio detail views with focused tests rather than another general audit report.
- Only merge and publish after all quality checks pass and external service settings are verified.

## Naming normalization — proposal only

Current repository slug is `CARQUIDEC`; proposed lowercase slug is `carquidec`, retaining the canonical **CARQUIDEC** brand for visible content. Do **not** rename without authenticated authorization and a review of GitHub redirects, GitHub Actions, domains, Vercel project integrations, webhooks, references and conflicts. No rename has been performed.

## Agent operating loop

Always read latest default branch, branches, open PRs and CI first; choose one concrete product defect; implement and test; create a small reviewable draft PR. Do not create another repository, change visibility, remove content, disable working media, merge unverified changes, or incur expenses. State actual commit SHA, tests executed versus pending, and blockers without guessing.

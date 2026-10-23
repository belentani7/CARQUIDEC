# PROJECT MASTER PROMPT — CARQUIDEC

## Product canon
CARQUIDEC is an architecture and interior-decoration studio website with a deliberately static, progressively enhanced, multilingual ES/EN/CA/FR/IT design. The root HTML/CSS/JS files are the published source; `tools/` and `scripts/` support local production and audits. Preserve self-hosted fonts/media and the authored portfolio. Do not turn the business into an unrelated SaaS or generate duplicate repos.

## Maximum useful product
- Trustworthy architectural presentation, services, case studies, rich before/after imagery, project documentation and accurate contact channels with client privacy.
- Reliable multilingual, accessible navigation and forms that never lose an enquiry when an external endpoint is absent or misconfigured.
- Progressive enhancement: site remains readable without JS/GSAP; motion respects preferences and large visuals load responsively.
- Clean, verifiable social links, project sources, asset copyrights, image alt text, responsive/video performance and structured SEO.
- Optional future CRM/contact backend only behind a real configured endpoint with spam mitigation, GDPR notice, transport security, consent and human-reviewed communications.
- Deterministic audits on HTML/CSS/accessibility, broken resources, images and real browser contact flows.

## Execution plan
1. Fix functional enquiry handling: blank and placeholder form actions must offer explicit email/WhatsApp composition rather than POST to the current page. Add jsdom regression coverage (this branch).
2. Validate every published form/URL in all locales, protect user contact information and assure accessible success/failure messaging.
3. Improve media loading, performance budgets and progressive enhancement on slow/mobile browsers.
4. Add end-to-end desktop/mobile checks and multilingual content/SEO tests.
5. Release only after `npm ci --prefix tools`, `npm --prefix tools run test:forms`, `npm --prefix tools run audit`, and a real deployed-browser smoke test.

## Agent contract
Inspect default branch, README, business-owned assets, current PRs and project requirements before edits. Implement code and regression tests in this existing repository, not plans alone. Never claim that a placeholder form actually sends an email or WhatsApp message automatically. User must choose a channel and send. Keep tests/build results explicit; don't auto-deploy, publish private content, overwrite media or claim legal compliance without evidence.

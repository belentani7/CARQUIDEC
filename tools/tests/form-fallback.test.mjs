import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const scriptFile = fileURLToPath(new URL('../../assets/js/carquidec.js', import.meta.url));
const script = readFileSync(scriptFile, 'utf8');

function render(action) {
  const dom = new JSDOM(`<!doctype html><html><body>
    <form action="${action}">
      <input required name="nombre" value="Cliente Prueba">
      <input required type="email" name="email" value="test@example.org">
      <textarea name="mensaje">Consulta de arquitectura</textarea>
      <button type="submit">Enviar</button>
    </form></body></html>`, { url: 'https://carquidec.com/contacto.html', runScripts: 'outside-only' });
  const { window } = dom;
  window.matchMedia = () => ({ matches: false, addEventListener() {} });
  let calls = 0;
  window.fetch = () => { calls++; throw new Error('An unconfigured form must not send data'); };
  window.eval(script);
  window.document.dispatchEvent(new window.Event('DOMContentLoaded'));
  return { dom, window, getCalls: () => calls };
}

describe('contact form progressive enhancement', () => {
  for (const action of ['', '#', 'YOUR_FORM_ID']) {
    it(`offers a manual contact channel for missing endpoint (${JSON.stringify(action)})`, () => {
      const { dom, window, getCalls } = render(action);
      const form = window.document.querySelector('form');
      assert.equal(form?.checkValidity(), true);
      form.dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
      const status = form.querySelector('.cq-form-status');
      assert.ok(status);
      assert.equal(status.hidden, false);
      assert.equal(status.dataset.state, 'ok');
      assert.ok(status.querySelector('a[href^="mailto:"]'));
      assert.ok(status.querySelector('a[href^="https://wa.me/"]'));
      assert.equal(getCalls(), 0);
      dom.window.close();
    });
  }
});

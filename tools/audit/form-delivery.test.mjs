import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { test } from 'node:test';
import { JSDOM } from 'jsdom';

const source = readFileSync(new URL('../../assets/js/carquidec.js', import.meta.url), 'utf8');

const contactMarkup = (action) => [
  '<!doctype html><html lang="es"><body>',
  '<form action="' + action + '">',
  '<input name="nombre" required />',
  '<input name="email" type="email" required />',
  '<textarea name="mensaje" required></textarea>',
  '<button type="submit">Enviar</button>',
  '</form></body></html>'
].join('');

async function submit(action, fetchStub) {
  const dom = new JSDOM(contactMarkup(action), {
    url: 'https://carquidec.com/contacto.html',
    runScripts: 'outside-only',
    pretendToBeVisual: true
  });
  const { window } = dom;
  if (fetchStub) window.fetch = fetchStub;
  window.eval(source);
  window.document.dispatchEvent(new window.Event('DOMContentLoaded', { bubbles: true }));
  const form = window.document.querySelector('form');
  // Populate like a visitor, not as HTML defaults: form.reset() must clear values.
  form.elements.namedItem('nombre').value = 'Ana';
  form.elements.namedItem('email').value = 'ana@example.org';
  form.elements.namedItem('mensaje').value = 'Mi consulta privada';
  assert.ok(form.checkValidity(), 'valid contact details required by this test');
  form.dispatchEvent(new window.Event('submit', { cancelable: true, bubbles: true }));
  for (let i = 0; i < 12; i += 1) await Promise.resolve();
  const status = form.querySelector('.cq-form-status');
  const result = {
    state: status?.getAttribute('data-state'),
    text: status?.textContent || '',
    email: form.querySelector('[name="email"]').value,
    emailLink: status?.querySelector('a[href^="mailto:"]')?.getAttribute('href'),
    whatsappLink: status?.querySelector('a[href^="https://wa.me/"]')?.getAttribute('href'),
    submitDisabled: form.querySelector('button[type="submit"]')?.disabled
  };
  window.close();
  return result;
}

const response = (type, ok, receipt) => ({
  ok,
  headers: { get: () => type },
  json: async () => receipt
});

test('placeholder contact action offers real manual channels; no network request', async () => {
  const result = await submit('https://formspree.io/f/YOUR_FORM_ID', () => {
    throw new Error('placeholder endpoint must never be called');
  });
  assert.equal(result.state, 'error');
  assert.match(result.text, /no se ha enviado todavía/i);
  assert.match(result.emailLink, /^mailto:carqdisantos@gmail\.com\?/);
  assert.match(result.emailLink, /Mi%20consulta%20privada/);
  assert.match(result.whatsappLink, /^https:\/\/wa\.me\/34612484884\?/);
  assert.equal(result.email, 'ana@example.org');
});

test('200 HTML fallback is not treated as a delivered message', async () => {
  const result = await submit('https://formspree.io/f/abc123', async () =>
    response('text/html', true, { ok: true }));
  assert.equal(result.state, 'error');
  assert.match(result.text, /no se ha enviado todavía/i);
  assert.equal(result.email, 'ana@example.org');
});

test('valid backend JSON receipt is necessary for success and form reset', async () => {
  const result = await submit('https://formspree.io/f/abc123', async () =>
    response('application/json; charset=utf-8', true, { ok: true }));
  assert.equal(result.state, 'ok');
  assert.match(result.text, /enviado y confirmado/i);
  assert.equal(result.email, '');
});

test('unconfirmed JSON and network errors preserve the text and offer fallback', async () => {
  for (const fakeFetch of [
    async () => response('application/json', true, { ok: false }),
    async () => response('application/json', false, { ok: true }),
    async () => { throw new Error('offline'); }
  ]) {
    const result = await submit('https://formspree.io/f/abc123', fakeFetch);
    assert.equal(result.state, 'error');
    assert.equal(result.email, 'ana@example.org');
    assert.ok(result.emailLink);
  }
});

test('unconfigured, same-document and unsafe actions never POST personal data', async () => {
  const actions = ['', '#', 'contacto.html', '?draft=1',
    'mailto:carqdisantos@gmail.com', 'javascript:alert(1)',
    'http://insecure.test/submit'];
  for (const action of actions) {
    let calls = 0;
    const result = await submit(action, async () => {
      calls += 1;
      return response('application/json', true, { ok: true });
    });
    assert.equal(calls, 0, 'unexpected network request for ' + JSON.stringify(action));
    assert.equal(result.state, 'error', action);
    assert.match(result.text, /no se ha enviado todavía/i);
    assert.equal(result.email, 'ana@example.org');
    assert.ok(result.emailLink);
    assert.equal(result.submitDisabled, false);
  }
});

test('synchronous fetch errors preserve enquiry and restore the submit button', async () => {
  const result = await submit('https://formspree.io/f/abc123', () => {
    throw new TypeError('fetch unavailable');
  });
  assert.equal(result.state, 'error');
  assert.match(result.text, /no se ha enviado todavía/i);
  assert.equal(result.email, 'ana@example.org');
  assert.ok(result.emailLink);
  assert.equal(result.submitDisabled, false);
});

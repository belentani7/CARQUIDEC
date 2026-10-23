import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { test } from 'node:test';
import { JSDOM } from 'jsdom';

const source = readFileSync(resolve('assets/js/carquidec.js'), 'utf8');

const contactMarkup = (action) => [
  '<!doctype html><html lang="es"><body>',
  '<form action="' + action + '">',
  '<input name="nombre" required value="Ana" />',
  '<input name="email" type="email" required value="ana@example.org" />',
  '<textarea name="mensaje" required>Mi consulta privada</textarea>',
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
  assert.ok(form.checkValidity(), 'valid contact details required by this test');
  form.dispatchEvent(new window.Event('submit', { cancelable: true, bubbles: true }));
  for (let i = 0; i < 8; i += 1) await Promise.resolve();
  const status = form.querySelector('.cq-form-status');
  const result = {
    state: status?.getAttribute('data-state'),
    text: status?.textContent || '',
    email: form.querySelector('[name="email"]').value,
    emailLink: status?.querySelector('a[href^="mailto:"]')?.getAttribute('href'),
    whatsappLink: status?.querySelector('a[href^="https://wa.me/"]')?.getAttribute('href')
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

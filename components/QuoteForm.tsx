'use client';
import { useState } from 'react';
import { site } from '@/lib/site';

// Sends the bulk quote request as a prefilled WhatsApp message to Kempt.
// (No backend yet — see progress.md backlog for the email version.)
const fields = [
  ['name', 'Name'],
  ['organisation', 'Organisation'],
  ['phone', 'Phone/WhatsApp'],
  ['itemType', 'Item type'],
  ['quantity', 'Quantity'],
  ['notes', 'Notes'],
] as const;

export default function QuoteForm() {
  const [waLink, setWaLink] = useState<string | null>(null);
  const [error, setError] = useState('');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // `required` lets whitespace-only answers through; catch those here.
    const blank = fields.find(([key]) => !String(data.get(key) ?? '').trim());
    if (blank) {
      setError(`Please fill in: ${blank[1]}.`);
      (form.elements.namedItem(blank[0]) as HTMLElement | null)?.focus();
      return;
    }
    setError('');
    const lines = fields.map(([key, label]) => `${label}: ${String(data.get(key) ?? '').trim()}`);
    const text = ["Hi Kempt, I'd like a bulk laundry quote.", '', ...lines].join('\n');
    const url = `${site.whatsapp}?text=${encodeURIComponent(text)}`;
    setWaLink(url);
    window.open(url, '_blank', 'noopener');
  }

  if (waLink) {
    return (
      <div className="card form-card">
        <div className="sent">
          <span className="sent__tick">✓</span>
          <strong>Almost done</strong>
          <span>We&apos;ve opened WhatsApp with your request filled in. Press <b>send</b> there and we&apos;ll reply with a price and pickup date within one working day.</span>
          <a href={waLink} target="_blank" rel="noopener" className="btn btn--outline btn--md"><span className="wa-dot" />WhatsApp didn&apos;t open? Tap here</a>
          <button className="linkbtn" onClick={() => setWaLink(null)}>Start a new request</button>
        </div>
      </div>
    );
  }

  return (
    <form className="card form-card" onSubmit={onSubmit}>
      <div className="form-grid">
        <label>Your name<input name="name" required placeholder="Full name" autoComplete="name" /></label>
        <label>Organisation<input name="organisation" required placeholder="School, church, company" autoComplete="organization" /></label>
        <label>Phone / WhatsApp<input name="phone" required type="tel" placeholder="+234" autoComplete="tel" /></label>
        <label>Item type
          <select name="itemType" required defaultValue="">
            <option value="" disabled>Choose…</option>
            <option>Academic gowns</option><option>Choir robes</option><option>School uniforms</option><option>Other</option>
          </select>
        </label>
      </div>
      <label>Approx. quantity<input name="quantity" required placeholder="e.g. 120 pieces" /></label>
      <label>Notes<textarea name="notes" required rows={3} placeholder="Deadline, pickup location, special care" /></label>
      {error && <span className="form-error" role="alert">{error}</span>}
      <button className="btn btn--navy btn--block"><span className="wa-dot" />Send request on WhatsApp</button>
    </form>
  );
}

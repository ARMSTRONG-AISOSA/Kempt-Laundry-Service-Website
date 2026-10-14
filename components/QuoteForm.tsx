'use client';
import { useState } from 'react';

export default function QuoteForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      setState(res.ok ? 'sent' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'sent') {
    return (
      <div className="card form-card">
        <div className="sent">
          <span className="sent__tick">✓</span>
          <strong>Request received</strong>
          <span>We&apos;ll be in touch within one working day.</span>
          <button className="linkbtn" onClick={() => setState('idle')}>Send another request</button>
        </div>
      </div>
    );
  }

  return (
    <form className="card form-card" onSubmit={onSubmit}>
      <div className="form-grid">
        <label>Your name<input name="name" required placeholder="Full name" /></label>
        <label>Organisation<input name="organisation" placeholder="School, church, company" /></label>
        <label>Phone / WhatsApp<input name="phone" required type="tel" placeholder="+234" /></label>
        <label>Item type
          <select name="itemType" defaultValue="Academic gowns">
            <option>Academic gowns</option><option>Choir robes</option><option>School uniforms</option><option>Other</option>
          </select>
        </label>
      </div>
      <label>Approx. quantity<input name="quantity" placeholder="e.g. 120 pieces" /></label>
      <label>Notes<textarea name="notes" rows={3} placeholder="Deadline, pickup location, special care" /></label>
      {state === 'error' && <span className="form-error">Something went wrong — please call or WhatsApp us instead.</span>}
      <button className="btn btn--navy btn--block" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send request'}</button>
    </form>
  );
}

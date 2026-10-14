'use client';
import { useState } from 'react';
import { faqs } from '@/lib/site';

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <button key={f.q} className="faq__item" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
          <span className="faq__q"><span>{f.q}</span><span className="faq__icon">{open === i ? '−' : '+'}</span></span>
          {open === i && <span className="faq__a">{f.a}</span>}
        </button>
      ))}
    </div>
  );
}

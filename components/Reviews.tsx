'use client';
import { useEffect, useState } from 'react';
import { reviews, site } from '@/lib/site';
import { WaveTop } from './Wave';

const floaters = [
  { x: '8%', y: '22%', s: 64, i: 'JE', bg: '#3FA9E8' },
  { x: '14%', y: '62%', s: 52, i: 'BV', bg: '#1A73D9' },
  { x: '4%', y: '78%', s: 44, i: 'TS', bg: '#0B2A63' },
  { x: '86%', y: '20%', s: 56, i: 'OB', bg: '#1A73D9' },
  { x: '90%', y: '56%', s: 66, i: 'OD', bg: '#3FA9E8' },
  { x: '82%', y: '80%', s: 46, i: 'AO', bg: '#0B2A63' },
];

export default function Reviews() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = reviews.length;
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 5000);
    return () => clearInterval(t);
  }, [paused, n]);
  const r = reviews[i];
  return (
    <section className="reviews" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <WaveTop />
      {floaters.map((f) => (
        <span key={f.i + f.x} className="floater" style={{ left: f.x, top: f.y, width: f.s, height: f.s, background: f.bg }}>{f.i}</span>
      ))}
      <div className="reviews__inner">
        <span className="eyebrow">REVIEWS</span>
        <h2 className="h2">What our customers say</h2>
        <div className="reviews__nav">
          <button className="circle-btn" aria-label="Previous review" onClick={() => setI((i + n - 1) % n)}>←</button>
          <span className="reviews__avatar">{r.i}</span>
          <button className="circle-btn" aria-label="Next review" onClick={() => setI((i + 1) % n)}>→</button>
        </div>
        <span className="stars" aria-label="5 stars">★★★★★</span>
        <p className="reviews__quote" aria-live="polite">“{r.q}”</p>
        <div className="reviews__who"><strong>{r.n}</strong><span>{r.r}</span></div>
        <div className="dots">
          {reviews.map((_, k) => (
            <button key={k} aria-label={'Review ' + (k + 1)} className={'dot' + (k === i ? ' is-active' : '')} onClick={() => setI(k)} />
          ))}
        </div>
        <a href={site.google} target="_blank" rel="noopener" className="btn btn--white btn--md">Read all reviews on Google →</a>
        <span className="small">5-star reviews from our Google Business profile</span>
      </div>
    </section>
  );
}

import Link from 'next/link';
import Logo from './Logo';
import { nav, site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="stack-sm">
          <Logo inverse />
          <span className="footer__muted">{site.tagline}</span>
        </div>
        <div className="stack-xs">
          <span className="footer__head">PAGES</span>
          {nav.map((n) => <Link key={n.href} href={n.href} className="footer__link">{n.label}</Link>)}
        </div>
        <div className="stack-xs">
          <span className="footer__head">VISIT</span>
          <span className="footer__text">{site.address}</span>
          <span className="footer__muted">Mon–Fri 8:00–6:30 · Sat 10:30–5:00 · Sun 1:30–5:00</span>
        </div>
        <div className="stack-xs">
          <span className="footer__head">CONTACT</span>
          <a href={site.phoneHref} className="footer__phone">{site.phone}</a>
          <a href={site.whatsapp} target="_blank" rel="noopener" className="footer__link">Chat on WhatsApp</a>
          <a href={site.google} target="_blank" rel="noopener" className="footer__link">Google Business profile</a>
        </div>
      </div>
      <div className="wrap footer__legal">© {new Date().getFullYear()} {site.name}, Benin City.</div>
    </footer>
  );
}

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import { nav, site } from '@/lib/site';

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  return (
    <header className="header">
      <div className="header__bar wrap">
        <Logo />
        <nav className="header__nav" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={'navlink' + (path === n.href ? ' is-active' : '')}>{n.label}</Link>
          ))}
        </nav>
        <div className="header__actions">
          <a href={site.phoneHref} className="header__phone">{site.phone}</a>
          <a href={site.pickupHref} target="_blank" rel="noopener" className="btn btn--blue btn--sm header__cta">Schedule pickup</a>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      {open && (
        <div className="menu">
          <div className="wrap menu__inner">
            {nav.map((n) => <Link key={n.href} href={n.href} className="menu__link">{n.label}</Link>)}
            <a href={site.pickupHref} target="_blank" rel="noopener" className="btn btn--navy">Schedule a pickup</a>
            <a href={site.whatsapp} target="_blank" rel="noopener" className="btn btn--outline">Chat on WhatsApp</a>
          </div>
        </div>
      )}
    </header>
  );
}

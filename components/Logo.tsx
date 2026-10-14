import Link from 'next/link';

export default function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={'logo' + (inverse ? ' logo--inverse' : '')} aria-label="Kempt Laundry home">
      <span className="logo__mark"><img src="/kempt-mark.png" alt="" /></span>
      <span className="logo__type">
        <span className="logo__name">KEMPT</span>
        <span className="logo__sub">LAUNDRY</span>
      </span>
    </Link>
  );
}

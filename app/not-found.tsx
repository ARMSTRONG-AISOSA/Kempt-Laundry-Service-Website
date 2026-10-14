import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="section wrap center-col center">
      <h1 className="h1 h1--page">Page not found</h1>
      <Link href="/" className="btn btn--navy">Back to home</Link>
    </section>
  );
}

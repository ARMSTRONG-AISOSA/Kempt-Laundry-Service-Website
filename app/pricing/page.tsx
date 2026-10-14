import type { Metadata } from 'next';
import Link from 'next/link';
import { WaveBottom } from '@/components/Wave';
import PriceList from '@/components/PriceList';
import Faq from '@/components/Faq';

export const metadata: Metadata = { title: 'Pricing — Kempt Laundry Services' };

export default function Pricing() {
  return (
    <>
      <section className="pagehero">
        <div className="wrap stack pagehero__copy center-col center">
          <span className="eyebrow">PRICING</span>
          <h1 className="h1 h1--page">Clear prices, per item</h1>
          <p className="lead maxw-540">All prices include washing and ironing, with return within 72 hours. Sample prices shown — final list to be confirmed.</p>
        </div>
        <WaveBottom />
      </section>

      <section className="wrap section--after-hero center-col">
        <PriceList />
        <div className="addons">
          <div className="addon addon--navy stack-xs">
            <span className="eyebrow eyebrow--sm eyebrow--sky">ADD-ONS</span>
            <strong>Starching &amp; express</strong>
            <span>Starching from ₦200 per item. Express delivery quoted per order.</span>
          </div>
          <div className="addon addon--pale stack-xs">
            <span className="eyebrow eyebrow--sm">BULK ORDERS</span>
            <strong>Custom pricing</strong>
            <span>Gowns, robes and uniforms in volume.</span>
            <Link href="/services#quote" className="textlink">Request a quote →</Link>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap split split--start">
          <div className="stack-sm">
            <span className="eyebrow">FAQ</span>
            <h2 className="h2">Good questions</h2>
          </div>
          <Faq />
        </div>
      </section>
    </>
  );
}

import { groups, site } from '@/lib/site';
import { ogImages, pageMeta } from '@/lib/seo';
import { WaveBottom } from '@/components/Wave';
import WhatsAppButton from '@/components/WhatsAppButton';
import QuoteForm from '@/components/QuoteForm';

export const metadata = pageMeta({
  title: 'Laundry Services in Benin City',
  description: 'Washing & folding, ironing & starching, duvet, bedspread, curtain, rug and shoe cleaning in Benin City, plus bulk laundry for schools and churches. Pickup & delivery.',
  path: '/services',
  shareTitle: 'Kempt Laundry services: care for everything you wear',
  image: ogImages.services,
});

export default function Services() {
  return (
    <>
      <section className="pagehero">
        <div className="wrap stack pagehero__copy">
          <span className="eyebrow">LAUNDRY SERVICES · BENIN CITY</span>
          <h1 className="h1 h1--page">Care for everything you wear — and sleep on</h1>
          <p className="lead">Every order is washed, ironed and returned within 72 hours. Need it sooner? Ask for express delivery.</p>
        </div>
        <WaveBottom />
      </section>

      <section className="wrap section--after-hero groups">
        {groups.map((g) => (
          <article className="group" key={g.t}>
            <img src={g.img} alt={g.t} />
            <div className="group__body stack-sm">
              <h3 className="h3 h3--lg">{g.t}</h3>
              <p className="body body--muted">{g.d}</p>
              <div className="row row--tight">{g.items.map((x) => <span className="tag" key={x}>{x}</span>)}</div>
            </div>
          </article>
        ))}
      </section>

      <section className="wrap section--tight-top">
        <div className="express">
          <div className="stack-xs">
            <strong className="express__title">Need it back sooner?</strong>
            <span className="express__text">Express delivery is available on most items — message us to arrange.</span>
          </div>
          <WhatsAppButton variant="white" />
        </div>
      </section>

      <section id="quote" className="section section--pale">
        <div className="wrap split split--start">
          <div className="stack">
            <span className="eyebrow">BULK &amp; BUSINESS</span>
            <h2 className="h2">Request a bulk quote</h2>
            <p className="lead maxw-440">Tell us what you need cleaned and roughly how many pieces. We&apos;ll reply with a price and pickup date within one working day.</p>
            <span className="small">Prefer to talk? <a href={site.phoneHref} className="strong-link">{site.phone}</a></span>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import { featured, services, site, steps } from '@/lib/site';
import { WaveBottom } from '@/components/Wave';
import WhatsAppButton from '@/components/WhatsAppButton';
import LogoMarquee from '@/components/LogoMarquee';
import Reviews from '@/components/Reviews';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="stack hero__copy">
            <span className="chip">72-HOUR TURNAROUND · BENIN CITY</span>
            <h1 className="h1">Cleaner clothes, <span className="accent">better care.</span></h1>
            <p className="lead lead--hero">Washing, ironing and starching for everything from school shirts to duvets — picked up from your door and returned fresh within 72 hours.</p>
            <div className="row">
              <a href={site.pickupHref} target="_blank" rel="noopener" className="btn btn--navy">Schedule a pickup</a>
              <WhatsAppButton />
            </div>
            <span className="small">Or call <a href={site.phoneHref} className="strong-link">{site.phone}</a></span>
          </div>
          <div className="hero__art">
            <img className="hero__photo" src="/photos/hero.jpg" alt="Folded knitwear" />
            <div className="sticker">Express<br />delivery</div>
            <div className="floatcard"><span>Pickup &amp; delivery</span><strong>Across Benin City</strong></div>
          </div>
        </div>
        <WaveBottom />
      </section>

      <section className="section wrap center-col">
        <div className="section-head center">
          <span className="eyebrow">HOW IT WORKS</span>
          <h2 className="h2">Laundry day, handled in four steps</h2>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="step__n">{s.n}</div>
              <h3 className="h3">{s.t}</h3>
              <p className="body body--muted">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap stack-lg">
          <div className="section-head row-between">
            <div className="stack-sm">
              <span className="eyebrow">OUR SERVICES</span>
              <h2 className="h2 maxw-560">From everyday wear to curtains and rugs</h2>
            </div>
            <Link href="/services" className="textlink">All services →</Link>
          </div>
          <div className="cards">
            {services.map((s) => (
              <article className="card service" key={s.t}>
                <img src={s.img} alt={s.t} />
                <div className="service__body">
                  <h3 className="h3">{s.t}</h3>
                  <p className="body body--muted">{s.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap center-col">
        <div className="section-head center">
          <span className="eyebrow">PRICING</span>
          <h2 className="h2">Priced per item, no surprises</h2>
          <p className="body body--muted">Sample prices — final list to be confirmed.</p>
        </div>
        <div className="circles">
          {featured.map((it) => (
            <div className="circle-item" key={it.t}>
              <div className="circle-item__ring">
                <img src={it.img} alt={it.t} />
                <span className="circle-item__price">{it.p}</span>
              </div>
              <span className="circle-item__name">{it.t}</span>
            </div>
          ))}
        </div>
        <Link href="/pricing" className="btn btn--pale">See full price list →</Link>
      </section>

      <section className="wrap section--tight-top">
        <div className="bulk">
          <div className="bulk__blob" />
          <div className="stack">
            <span className="eyebrow eyebrow--light">BULK LAUNDRY</span>
            <h2 className="h2 h2--white">For schools, churches and organisations</h2>
            <p className="lead lead--light">Academic gowns, choir robes and school uniforms cleaned in volume, on your schedule.</p>
          </div>
          <div className="stack">
            <div className="row"><span className="pill-navy">Academic gowns</span><span className="pill-navy">Choir robes</span><span className="pill-navy">School uniforms</span></div>
            <Link href="/services#quote" className="btn btn--white">Request a quote</Link>
          </div>
        </div>
      </section>

      <LogoMarquee />
      <Reviews />
    </>
  );
}

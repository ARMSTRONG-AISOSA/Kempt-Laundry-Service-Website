import { Fragment } from 'react';
import { site } from '@/lib/site';

export default function VisitUs() {
  return (
    <section className="wrap section--tight-top">
      <div className="visit">
        <div className="visit__info stack">
          <span className="eyebrow">VISIT US</span>
          <h2 className="h3xl">Find Kempt in Benin</h2>
          <p className="body">{site.address}</p>
          <div className="hours">
            <span className="eyebrow eyebrow--sm">OPENING HOURS</span>
            <dl className="hours__grid">
              {site.hours.map((h) => (<Fragment key={h.d}><dt>{h.d}</dt><dd>{h.t}</dd></Fragment>))}
            </dl>
          </div>
          <div className="row">
            <a href={site.google} target="_blank" rel="noopener" className="btn btn--navy btn--md">Get directions</a>
            <a href={site.phoneHref} className="btn btn--outline btn--md">Call us</a>
          </div>
        </div>
        <iframe
          className="visit__map"
          title="Kempt Laundry on Google Maps"
          src={site.mapEmbed}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}

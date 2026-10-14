import { site } from '@/lib/site';
import WhatsAppButton from './WhatsAppButton';

export default function CtaBand() {
  return (
    <section className="section wrap split">
      <div className="stack">
        <h2 className="h2">Book a pickup — or just send us a message</h2>
        <p className="lead">We collect from homes, hostels and offices across Benin City.</p>
        <div className="row">
          <a href={site.pickupHref} target="_blank" rel="noopener" className="btn btn--navy">Schedule a pickup</a>
          <WhatsAppButton variant="pale" />
        </div>
      </div>
      <img className="cta-photo" src="/photos/frontload.jpg" alt="Washing machines at Kempt Laundry" />
    </section>
  );
}

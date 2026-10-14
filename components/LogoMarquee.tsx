import { clients } from '@/lib/site';

export default function LogoMarquee() {
  const track = [...clients, ...clients];
  return (
    <section className="marquee-wrap">
      <span className="eyebrow eyebrow--muted center">TRUSTED BY SCHOOLS, CHURCHES &amp; BUSINESSES IN BENIN CITY</span>
      <div className="marquee">
        <div className="marquee__track">
          {track.map((c, i) => (
            <div className="marquee__tile" key={i} aria-hidden={i >= clients.length}>
              {c.src ? <img src={c.src} alt={c.name} /> : <span>{c.name}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

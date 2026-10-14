# Kempt Laundry: Progress Log

_Last updated: 2026-10-14_

**Live:** https://kemptlaundry.vercel.app · **Repo:** https://github.com/ARMSTRONG-AISOSA/Kempt-Laundry-Service-Website (`main`)

## Project
Marketing website for **Kempt Laundry Services**, Benin City, Edo, Nigeria. It started as HTML mockups and is now a Next.js 14 site (see `architecture.md`).

- **Business:** washing, ironing, starching, express delivery. Everyday clothes, duvets, bedspreads, curtains, rugs, shoes, throw pillows. Bulk laundry for academic gowns, choir robes and school uniforms.
- **Model:** pickup & delivery, priced per item. Bulk/business orders by quote.
- **Turnaround:** within 72 hours. Express is available (one review mentions 24 hours, but that isn't confirmed as an official promise).
- **Address:** 1st Power Line, by Uche Store, Isiohor Road, off Aibalegbe, Uselu, Benin City 302117, Edo State.
- **Phone / WhatsApp:** +234 806 379 4348
- **Hours:** Mon–Fri 8:00 AM–6:30 PM · Sat 10:30 AM–5:00 PM · Sun 1:30 PM–5:00 PM
- **Google Business:** https://maps.app.goo.gl/HYyNidGfMSRXPzpVA (the map embed URL is in `lib/site.ts`)
- **Currency:** Naira (₦)
- **Developer:** Bossstrong-Dev (https://bossstrong-dev.vercel.app/), credited in the footer

## Decisions made
- **Pages:** Home, Services, Pricing. Shared on every page: header, CTA band, Visit Us (hours + map), footer.
- **Breakpoints:** designed at desktop (1440), tablet (820) and mobile (390). The site is fluid between them.
- **Style direction:** layout from reference template 2 (QuickFold: clean cards, photo-led), personality from template 1 (Breezy: waves, circles, round stickers, circular price badges).
- **Colours:** only from the logo (navy / blue / sky). The templates' yellow and orange accents were deliberately left out.
- **CTAs:** "Schedule pickup" and "WhatsApp us". Schedule pickup opens WhatsApp with a prefilled message.
- **Bulk orders:** a simple quote request form (Services page, `#quote`).
- **Photos:** Unsplash stock (free licence). Do NOT use the Google Business photos (the owner says they're poor quality).
- **Reviews:** six real 5-star Google reviews (in `lib/site.ts`). The slider auto-advances every 5s (changed from 7s by the owner on 2026-10-14).
- **Next.js version:** stay on 14.2.35 for now, even though 14 is end of life (owner, 2026-10-14). The image optimizer is turned off as a mitigation. See `architecture.md` → Known risks.
- **Share images:** branded cards (logo, headline, teardrop photo), one per page (owner's choice, 2026-10-14).
- **Hosting:** Vercel, project `kemptlaundry`, auto-deploys from GitHub `main`.

## Done
### Mockup phase (2026-10-13 and before; mockup files since removed)
1. Logo mark cropped from the uploaded logo, white background removed (now `public/kempt-mark.png`).
2. HTML mockups of all 3 pages × 3 breakpoints, including the mobile menu, price tabs, FAQ and quote form states.
3. Homepage additions: a scrolling client-logo marquee (placeholder tiles) and a reviews slider with floating initials.
4. Stock photos swapped in (now `public/photos/*.jpg`).
5. Fix: price circles were stretching. Images are now absolutely positioned inside a fixed-ratio ring.
6. Google Maps embed, Google profile links, opening hours, postcode 302117.
7. Next.js site built: App Router, TypeScript, plain CSS, next/font. All content in `lib/site.ts`, plus the quote API stub.

### Next.js phase (2026-10-13 / 14)
8. Project moved to the repo root. Old mockups, `uploads/`, `assets/` and the `kempt-nextjs/` folder removed.
9. Next 14.2.15 → **14.2.35** (security fixes). ESLint 8.57.1 + `eslint-config-next` added (`.eslintrc.json`).
10. **Install, build, lint:** the build passed with no code changes. Lint: 0 errors, 8 expected `no-img-element` warnings.
11. **Git** initialised on `main`. **Pushed to GitHub** (remote uses SSH: `git@github.com:ARMSTRONG-AISOSA/...`).
12. **Fix:** the Services heading on Home was pushed to the right. Its wrapper combined `.section-head` (column) with `.row-between` (`align-items: flex-end`), so it now uses `.row-between` alone.
13. **Footer credit:** "Developed and maintained by Bossstrong-Dev" in the legal row (`site.developer`).
14. **SEO:**
    - Per-page titles, descriptions and canonicals, plus keywords (`lib/seo.ts` → `pageMeta()`)
    - Open Graph + X cards with branded 1200×630 share images (`public/og/`, generator `scripts/make-share-images.py`)
    - `DryCleaningOrLaundry` + `WebSite` JSON-LD
    - `sitemap.xml`, `robots.txt`, web manifest
    - Square favicon / app / Apple icons
    - The 404 page is noindex
    - Keyword-friendly copy: hero lead "Laundry service in Benin City: …", page-hero eyebrows "LAUNDRY SERVICES · BENIN CITY" / "LAUNDRY PRICES · BENIN CITY", better alt text
    - Search Console / Bing verification via env vars
15. **Reviews slider** 7s → 5s (`design.md` updated).
16. **Image optimizer turned off** (`images.unoptimized`). `/_next/image` returns 404 and nothing visible changed.
17. **Deployed to Vercel:** https://kemptlaundry.vercel.app. Live check on 2026-10-14: all pages 200, 404 works, robots/sitemap/manifest/icons/share images served, canonical and OG tags use the live URL, JSON-LD present once, `/_next/image` 404, quote API validates.

## Waiting on the owner
- [ ] **Service areas:** which Benin City districts Kempt picks up from. Goes in `site.areas` and flows into keywords + JSON-LD.
- [ ] **Social media links:** pages not created yet. Paste the URLs into `site.socials` and they flow into JSON-LD `sameAs`. (A footer display for socials isn't built yet.)
- [ ] **Real prices:** all ₦ values are samples (`featured`, `priceTabs`, "starching from ₦200"). Remove the "Sample prices" labels once they're confirmed.
- [ ] **Real photos** of the shop, team and van (the hero especially). Afterwards, regenerate the share images.
- [ ] **Client logos** for the marquee (`public/clients/` + `clients` in `lib/site.ts`).
- [ ] Confirm the express turnaround wording (24 hours?) and whether pickup/delivery is free or charged.
- [ ] **Vercel plan:** Hobby (free) is for non-commercial use only. A business site should be on Pro, or move to Netlify / Cloudflare Pages (both allow free commercial use).

## Next up (reminder list from the owner, 2026-10-13)
- [x] SEO (done 2026-10-14; areas + socials still to fill)
- [x] Sitemap + robots.txt
- [x] Vercel deployment
- [ ] **Google Search Console:** verify (DNS isn't possible on a vercel.app address, so use the meta tag via `GOOGLE_SITE_VERIFICATION`) and submit `https://kemptlaundry.vercel.app/sitemap.xml`
- [ ] **Bing Webmaster Tools:** import from Search Console, or verify via `BING_SITE_VERIFICATION`, then submit the sitemap
- [ ] **Content update** (see "Waiting on the owner")

## Backlog
- [ ] **Quote form backend.** It only logs today. Wire it to email (Resend/Nodemailer) or a Google Sheet. Secrets go in Vercel env vars.
- [ ] **Next.js upgrade** (deferred by the owner): 16.x + React 19 + ESLint 9. See `architecture.md` → Known risks.
- [ ] **Font weights cleanup:** the CSS uses DM Sans 600 (tags, header phone, pill-navy, form labels, tabs), but the layout loads only 400/500/700, so 600 renders as 700. Montserrat 500 is loaded but unused. Either load DM Sans 600 or change those rules to 500/700, then update `design.md`.
- [ ] `public/photos/machines.jpg` is unused. Use it or delete it.
- [ ] Optional: a dedicated Schedule Pickup page/form (date, time slot, address) instead of the WhatsApp link.
- [ ] Optional: About/Contact page, business email, social icons in the footer.
- [ ] Optional: custom domain. Set `NEXT_PUBLIC_SITE_URL`, then update `DOMAIN` in the share-image script and regenerate.
- [ ] Optional: analytics (e.g. Vercel Analytics). Record it in `architecture.md` if added.

## File map
- `app/`: pages (`/`, `/services`, `/pricing`), layout, `globals.css`, quote API, sitemap/robots/manifest, icons
- `components/`: shared UI
- `lib/site.ts`: all content (contact details, prices, reviews, FAQs, areas, socials)
- `lib/seo.ts`: keywords, `pageMeta()`, JSON-LD
- `public/`: logo mark, stock photos, share images (`og/`)
- `scripts/make-share-images.py`: regenerates the share images
- `README.md`: overview, commands, deploy, env vars
- `architecture.md`: tech stack, versions and code conventions. Read before adding features or dependencies.
- `design.md`: the design system. Read before changing any design.

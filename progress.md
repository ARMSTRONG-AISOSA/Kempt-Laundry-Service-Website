# Kempt Laundry — Progress Log

_Last updated: 2026-10-14_

## Project
Marketing website for **Kempt Laundry Services**, Benin City, Edo, Nigeria. Built as HTML mockups first, then as a Next.js 14 site.

- **Business:** washing, ironing, starching, express delivery. Everyday clothes, duvets, bedspreads, curtains, rugs, shoes, throw pillows. Bulk laundry for academic gowns, choir robes and school uniforms.
- **Model:** pickup & delivery, priced per item, bulk/business orders by quote.
- **Turnaround:** within 72 hours. Express is available (one review mentions 24 hours, but this is not confirmed as an official promise).
- **Address:** 1st Power Line, by Uche Store, Isiohor Road, off Aibalegbe, Uselu, Benin City 302117, Edo State.
- **Phone / WhatsApp:** +234 806 379 4348
- **Hours:** Mon–Fri 8:00 AM–6:30 PM · Sat 10:30 AM–5:00 PM · Sun 1:30 PM–5:00 PM
- **Google Business:** https://maps.app.goo.gl/HYyNidGfMSRXPzpVA (map embed URL is in `lib/site.ts`)
- **Currency:** Naira (₦)

## Decisions made
- **Pages:** Home, Services, Pricing. Shared on every page: header, CTA band, Visit Us (hours + map), footer.
- **Breakpoints:** desktop (1440), tablet (820), mobile (390). The site is fluid between them.
- **Style direction:** layout structure from reference template 2 (QuickFold: clean cards, photo-led). Personality from template 1 (Breezy: waves, circles, round stickers, circular price badges).
- **Colours:** taken only from the logo (navy / blue / sky). The yellow and orange accents in the templates were deliberately left out.
- **CTAs:** both "Schedule pickup" and "WhatsApp us". Schedule pickup currently opens WhatsApp with a prefilled message.
- **Bulk orders:** a simple quote request form (Services page, `#quote`).
- **Photos:** Unsplash stock (free licence). Do NOT use the Google Business photos (the owner says they are poor quality).
- **Reviews:** six real 5-star Google reviews (in `lib/site.ts`).

## Done
1. Logo mark cropped from the uploaded logo, white background removed: `assets/kempt-mark.png`.
2. Mockups as Design Components:
   - `Kempt Site.dc.html`: the fluid site with internal page switching, mobile menu, price tabs, FAQ and quote form states.
   - `Kempt Laundry Website.dc.html`: a canvas showing all 3 pages × 3 breakpoints (ids 1a–1i).
3. Homepage additions: a scrolling client-logo marquee (placeholder tiles) and a reviews slider (template-1 style, with floating initials).
4. Real photos swapped in (`assets/photos/*.jpg`).
5. Fix: price circles were stretching (Duvet, Sneakers). Images are now absolutely positioned inside a fixed-ratio ring.
6. Google Maps embed, Google profile links, opening hours, postcode 302117.
7. **Next.js site** in `kempt-nextjs/`: App Router, TypeScript, plain CSS, next/font. All content is in `lib/site.ts`. Includes the quote API stub `app/api/quote/route.ts`.

## Remind the owner after resuming
The owner asked (2026-10-13) to be reminded of these once the build is working:
- [ ] **SEO:** page titles/descriptions, LocalBusiness JSON-LD, Open Graph image
- [ ] **Content update:** real prices, photos, client logos, express/pickup wording
- [ ] **Vercel deployment** and connecting the domain
- [ ] **Sitemap** (`sitemap.xml`) and `robots.txt`
- [ ] **Google Search Console:** verify the site and submit the sitemap
- [ ] **Bing Webmaster Tools:** verify the site and submit the sitemap

## Left to do
- [ ] **Real prices.** All ₦ values are samples (`featured`, `priceTabs`, "starching from ₦200").
- [ ] **Client logos** for the marquee (`public/clients/` + `clients` in `lib/site.ts`).
- [ ] **Quote form backend.** It currently only logs. Wire it to email (Resend/Nodemailer) or a Google Sheet.
- [ ] **Real photos** of the shop, team and van to replace the stock images (the hero especially).
- [ ] Confirm the express turnaround wording (24 hours?) and whether pickup/delivery is free or charged.
- [ ] Confirm the service area (Benin City only? which districts?).
- [ ] Optional: a dedicated Schedule Pickup page/form (date, time slot, address) instead of the WhatsApp link.
- [ ] Optional: About/Contact page, business email, social links.
- [x] **Install, build, lint (2026-10-14).** The build passed with no code changes. Lint: 0 errors, 8 `no-img-element` warnings (expected; we use plain `<img>`). Checked with `next start`: all pages 200, 404 works, quote API returns 200/400 correctly. Git repo initialised on `main`, first commit `fa9edd9`.
  - Network note: on a slow connection Node/npm fails with `ETIMEDOUT` while curl works. Fix: `NODE_OPTIONS="--no-network-family-autoselection --dns-result-order=ipv4first" npm install`
- [ ] **Next.js upgrade (deferred by owner).** Next 14 is end of life and has unpatched advisories (see `architecture.md` → Known risks). Revisit before or soon after launch.
- [ ] SEO: LocalBusiness JSON-LD, Open Graph image, sitemap/robots.
- [ ] Deploy (Vercel) and connect the domain.

## File map
The Next.js site now sits at the project root. The old mockups, `uploads/`, `assets/` and the `kempt-nextjs/` wrapper folder were removed (2026-10-13).
- `app/`: pages (`/`, `/services`, `/pricing`), the layout, `globals.css` and the quote API stub
- `components/`: shared UI
- `lib/site.ts`: all content (contact details, prices, reviews, FAQs)
- `public/`: the logo mark and stock photos
- `design.md`: the design system. Read it before changing any design.
- `architecture.md`: the tech stack, versions and code conventions. Read it before adding features or dependencies.

# Kempt Laundry Services — website

Next.js 14 (App Router) + TypeScript. Plain CSS (`app/globals.css`), no UI library. Fonts via `next/font` (Montserrat + DM Sans).

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
Deploy: push to GitHub and import into Vercel (zero config).

## Pages
- `/` — Home: hero, how it works, services, sample prices, bulk band, client logo marquee, Google reviews slider
- `/services` — service groups, express band, bulk quote form (`#quote`)
- `/pricing` — tabbed price list, add-ons, FAQ
- Shared on every page: header (sticky, mobile menu), CTA band, Visit us (hours + Google Map), footer

## Edit content
Everything lives in **`lib/site.ts`**: phone, WhatsApp, address, hours, map embed, services, **prices (currently samples)**, FAQs, reviews, client logos.

## To finish
1. **Prices** — replace sample ₦ values in `lib/site.ts` (`featured`, `priceTabs`).
2. **Client logos** — add files to `public/clients/` and set `src` in `clients`.
3. **Quote form** — `app/api/quote/route.ts` currently only logs. Wire it to email (e.g. Resend) or a Google Sheet.
4. **Photos** — `public/photos/` are Unsplash stock (free licence). Swap for real shop/team photos when available.
5. "Schedule pickup" opens WhatsApp with a prefilled message. Replace with a booking form/page if needed.

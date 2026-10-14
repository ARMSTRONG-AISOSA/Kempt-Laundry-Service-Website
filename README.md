# Kempt Laundry Services: website

Marketing site for Kempt Laundry Services, Uselu, Benin City.

- **Live:** https://kemptlaundry.vercel.app
- **Repo:** https://github.com/ARMSTRONG-AISOSA/Kempt-Laundry-Service-Website
- **Stack:** Next.js 14.2.35 (App Router), React 18, TypeScript, plain CSS. Full versions and rules are in [`architecture.md`](architecture.md).
- **Developed and maintained by:** [Bossstrong-Dev](https://bossstrong-dev.vercel.app/)

## Docs: read before changing things
| File | What it covers |
|---|---|
| [`architecture.md`](architecture.md) | Tech stack, pinned versions, folder structure, code conventions, SEO setup, known risks |
| [`design.md`](design.md) | Design system: colours, type, spacing, motifs, components, voice |
| [`progress.md`](progress.md) | What's done, decisions made, what's left, pending info from the owner |

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start
```
Don't run `npm run build` while `npm run dev` is running: both use the `.next` folder.

Slow connection? If npm or the build fails with `ETIMEDOUT`, run with:
`NODE_OPTIONS="--no-network-family-autoselection --dns-result-order=ipv4first" npm install`

## Deploy
Hosted on Vercel (project `kemptlaundry`), connected to this GitHub repo.
- **Push to `main`:** the live site rebuilds and updates automatically.
- **Push to another branch:** Vercel creates a private preview URL (not indexed by Google).
- **A failed build** leaves the last working version live.

## Pages
- `/`: Home: hero, how it works, services, sample prices, bulk band, client logo marquee, Google reviews slider
- `/services`: service groups, express band, bulk quote form (`#quote`)
- `/pricing`: tabbed price list, add-ons, FAQ
- Shared on every page (from `app/layout.tsx`): sticky header with mobile menu, CTA band, Visit Us (hours + Google Map), footer with developer credit
- Generated: `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, icons

## Edit content
Almost everything lives in **`lib/site.ts`**: phone, WhatsApp, address, hours, map embed, services, **prices (currently samples)**, FAQs, reviews, client logos, pickup areas, social links and the developer credit.

SEO text (page titles, descriptions, keywords, share-image alt text) is in **`lib/seo.ts`** and in each page's `pageMeta({...})` call.

## Link previews and SEO
- Each page has its own title, description, canonical URL and a branded 1200×630 share image (`public/og/`) for WhatsApp, Facebook, X, etc.
- Regenerate share images after changing their wording, photos or the domain: `python3 scripts/make-share-images.py` (needs Python + Pillow and Chrome/Chromium).
- WhatsApp and Facebook cache previews. Use the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) → "Scrape again" to refresh.
- Google business data (JSON-LD) is generated from `lib/site.ts`.

## Environment variables (Vercel → Project → Settings → Environment Variables)
All optional. After adding or changing one, redeploy.
| Name | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Set when a custom domain is connected (e.g. `https://kemptlaundry.com`). Defaults to `https://kemptlaundry.vercel.app`. |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console verification code (meta tag method) |
| `BING_SITE_VERIFICATION` | Bing Webmaster Tools verification code (`msvalidate.01`) |

## Still to finish
See [`progress.md`](progress.md). Main items: real prices, real photos, client logos, a backend for the quote form (it only logs today), service areas, social links, Google Search Console and Bing.

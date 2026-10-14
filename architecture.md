# Kempt Laundry: Architecture

Read this before adding a feature, a dependency or a new page. It records what the site is built with and the conventions to keep. For visual rules (colours, type, spacing, motifs), see `design.md`. For status and to-dos, see `progress.md`.

When you change anything listed here (a version, a library, a convention), update this file in the same change.

_Last updated: 2026-10-13_

## Stack and versions

| Layer | Technology | Version | Notes |
|---|---|---|---|
| Framework | Next.js (App Router) | **14.2.35** | Pinned. Upgraded from 14.2.15 for security fixes. Stay on 14.2.x unless a major upgrade is planned on purpose. |
| UI library | React / React DOM | **18.3.1** | Next 14 requires React 18. Don't install React 19. |
| Language | TypeScript | **5.6.3** | `strict: true`. No plain `.js` source files (`allowJs: false`). |
| Styling | Plain CSS | n/a | One global stylesheet, `app/globals.css`. No Tailwind, CSS Modules, Sass or CSS-in-JS. |
| Fonts | `next/font/google` | bundled with Next | Montserrat (headings: 600/700/800) and DM Sans (body: 400/500/700). Self-hosted at build time. |
| Linting | ESLint + `eslint-config-next` | **8.57.1** / **14.2.35** | Config: `.eslintrc.json` → `next/core-web-vitals`. Stay on ESLint 8: Next 14's `next lint` doesn't support ESLint 9. |
| Types | `@types/node`, `@types/react`, `@types/react-dom` | 20.16.11 / 18.3.11 / 18.3.1 | |
| Runtime (local) | Node.js / npm | 24.19.0 / 11.17.0 | The developer's machine. Any Node ≥ 18.17 works for Next 14. |
| Hosting | Vercel | n/a | Planned, not deployed yet. Zero config: import the GitHub repo. |
| Maps | Google Maps embed (`<iframe>`) | n/a | The URL is `site.mapEmbed` in `lib/site.ts`. No Maps API key. |
| Messaging | WhatsApp click-to-chat (`wa.me`) | n/a | "Schedule pickup" opens WhatsApp with a prefilled message. |

All versions in `package.json` are **exact pins** (no `^` or `~`). Keep it that way so builds can be repeated exactly. Commit `package-lock.json`.

**No other runtime dependencies.** The only production dependencies are `next`, `react` and `react-dom`. Before adding a package, check whether a few lines of code would do. If a package really is needed, add it here with its version and the reason.

## Project structure

```
app/                     # App Router: one folder per route
  layout.tsx             # Root layout: fonts, metadata, Header + Footer + CtaBand + VisitUs on every page
  page.tsx               # /
  services/page.tsx      # /services (bulk quote form at #quote)
  pricing/page.tsx       # /pricing
  not-found.tsx          # 404
  globals.css            # ALL styles + design tokens
  api/quote/route.ts     # POST /api/quote (stub: logs only)
components/              # Shared UI, one component per file, PascalCase
lib/site.ts              # ALL site content and data
public/                  # Static files served from /
  kempt-mark.png         # Logo mark (also the favicon)
  photos/*.jpg           # Unsplash stock (1000px wide)
design.md                # Design system
architecture.md          # This file
progress.md              # Progress log and to-dos
```

The path alias `@/*` points to the project root (e.g. `import { site } from '@/lib/site'`).

## Conventions

### Content lives in `lib/site.ts`
Phone, address, hours, nav, services, prices, FAQs, reviews and client logos are all exported from `lib/site.ts`. Components and pages import from it. **Don't hard-code business data in components.** To change a price or a phone number, edit only this file.

### Server vs client components
- Components are **server components by default**.
- Add `'use client'` only when a component needs state, effects or event handlers. The current client components are `Header` (mobile menu and active link), `Reviews` (slider), `PriceList` (tabs), `Faq` (accordion) and `QuoteForm`.
- Keep client components small. Pages stay server components and render client pieces inside them.

### Styling
- Everything goes in `app/globals.css`. Use the tokens on `:root` (`--navy`, `--blue`, `--sky`, `--pale`, `--mist`, `--line`, `--border`, `--ink`, `--body`, `--muted`). Don't add raw hex values that aren't in `design.md`.
- Class names are BEM-style: `block`, `block__element`, `block--modifier` (e.g. `circle-item__price`, `btn--navy`).
- Layout uses fluid grids (`repeat(auto-fit, minmax(min(100%, Npx), 1fr))`) and `clamp()`. The only media queries are for the header and a few small hide/show cases.
- Combine utility classes (`.stack`, `.row`, `.wrap`, `.section`, `.h2`, `.eyebrow`, …) before writing new CSS.

### Pages
- Each page exports `metadata` (at least a `title` in the form `"Page — Kempt Laundry Services"`).
- Don't put the shared sections (CTA band, Visit Us, footer) in a page. They come from `layout.tsx`.
- Page structure follows the section rhythm in `design.md`.

### Images
- Currently plain `<img>` tags with `object-fit: cover` in fixed-ratio frames. `next/image` isn't used yet. If it's adopted, switch all images at once rather than mixing the two.
- Photos go in `public/photos/`. Client logos go in `public/clients/`.

### Forms and API
- Route handlers live in `app/api/<name>/route.ts` and return `NextResponse.json({ ok, error? })`.
- `QuoteForm` POSTs JSON to `/api/quote`. Validation: `name` and `phone` are required, both client-side and server-side.
- The backend isn't wired up yet (email or Google Sheet to be decided). Secrets go in environment variables (`.env.local` locally, Vercel project settings in production) and never in the code. `.env*.local` is in `.gitignore`.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start
```

On a slow connection, npm/Node can fail with `ETIMEDOUT` even when the internet works. Fix:
`NODE_OPTIONS="--no-network-family-autoselection --dns-result-order=ipv4first" npm install`
(The same applies to `npm run build`, which downloads Google Fonts.)

## Not used (on purpose)
No Tailwind or other CSS framework. No component library (MUI, shadcn, etc.). No state library (Redux, Zustand). No CMS or database. No analytics yet. No Pages Router (`pages/`). If any of these is added later, record the decision and version here.

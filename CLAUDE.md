# Kempt Laundry Services website

Marketing site for a laundry business in Uselu, Benin City, Nigeria. Live at https://kemptlaundry.vercel.app.

## Read before working
At the start of a session, read these before suggesting or changing anything:
- `progress.md`: what's done, decisions, items waiting on the owner, next steps, backlog. **The source of truth for status.**
- `architecture.md`: stack, pinned versions, structure, code conventions, SEO setup, deployment, known risks
- `design.md`: design system (colours, type, spacing, motifs, components, voice). Read before any visual or copy change.
- `README.md`: overview, commands, env vars

## Key rules
- Next.js **14.2.35** + React 18, pinned. The owner chose not to upgrade yet; don't upgrade or run `npm audit fix --force` without asking.
- No new dependencies without a reason recorded in `architecture.md`. Plain CSS in `app/globals.css` only, using the design tokens.
- Business content lives in `lib/site.ts`; SEO in `lib/seo.ts` (`pageMeta()` for every page).
- Don't invent prices, claims, stats or service areas. Prices are samples until the owner confirms them.
- `git push` to `main` deploys to production on Vercel. Run `npm run lint` and `npm run build` first. Don't run a build while the owner's `npm run dev` is running (they share `.next`); build in a copy instead.
- When something changes (version, convention, design rule, status), update the matching doc in the same commit.
- Slow network: `NODE_OPTIONS="--no-network-family-autoselection --dns-result-order=ipv4first"` before npm/build commands.

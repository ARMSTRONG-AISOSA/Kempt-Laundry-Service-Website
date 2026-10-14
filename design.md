# Kempt Laundry — Design System

Read this before making any design change. When the code and this doc disagree, update one so they match. Don't invent new values.

## Essence
**"Cleaner clothes, better care."** A neighbourhood laundry that feels as fresh as its product: bright, airy, clean water, crisp folds.
- **Friendly, not childish:** soft waves, circles and the teardrop come from the logo. Sharp corners are never the focal shape.
- **Trustworthy, local:** real address, real phone, real reviews, Naira prices. Benin City is named, not a generic "your city".
- **Effortless:** every screen should lead to one of two actions, *Schedule pickup* or *WhatsApp us*.
- **Calm and confident:** a blue-only palette, lots of white and pale-blue space, no clutter.

## Brand rules
- Colours come **only from the logo**: navy, blue, sky, plus their tints. No yellow, orange or pink, even though the reference templates use them.
- WhatsApp green (`#25D366`) appears **only** as the small 9px dot inside WhatsApp buttons.
- Logo: the mark (`kempt-mark.png`) + "KEMPT" wordmark (Montserrat 800) + "LAUNDRY" (Montserrat 600, letter-spacing .42em). On navy, put the mark in a white circle.
- No emoji. No gradient backgrounds. No icon-font clip art. Use numbers, circles and photos.

## Colour tokens
| Token | Hex | Use |
|---|---|---|
| navy | #0B2A63 | headings, primary buttons, footer, dark bands |
| blue | #1A73D9 | accent text, eyebrows, links, secondary buttons, bulk band |
| sky | #3FA9E8 | stickers, decorative blobs, avatar fills (never body text on white) |
| pale | #EAF5FD | hero/page-hero backgrounds, reviews section, soft buttons, tabs track |
| mist | #F5F9FD | alternating section background, cards on white |
| line | #E3ECF5 | dividers, header border |
| border | #CFE2F3 | input borders, outline buttons, tags, circle rings |
| ink | #13233F | default body text |
| body | #3B4D6B | lead paragraphs |
| muted | #51627E | secondary text, captions |
| On navy, text: | #FFFFFF / #E3EEF9 / #9FC0E6 (muted) / #8EC8F2 (eyebrow) | |

Contrast: body text must meet 4.5:1. Navy text on sky is fine; white text on sky is NOT.

## Typography
- **Headings:** Montserrat (it echoes the logo's geometric caps). Weights 700 and 800, plus 600 only for the "LAUNDRY" wordmark.
- **Body/UI:** DM Sans. Weights 400, 500 and 700.
- No other fonts.
- Known gap: some UI rules (tags, header phone, navy pills, form labels, tabs) ask for DM Sans 600, which isn't loaded, so they render as 700. Don't add more 600s. This is in the progress.md backlog to resolve.

| Role | Spec |
|---|---|
| H1 hero | 800, clamp(38px, 4.8vw, 68px), line-height 1.04, letter-spacing -0.02em |
| H1 page | 800, clamp(34px, 4.2vw, 60px), line-height 1.06 |
| H2 section | 800, clamp(28px, 3vw, 44px), line-height 1.12 |
| H3 card | 700, 19–21px |
| Eyebrow | Montserrat 700, 13px, UPPERCASE, letter-spacing .18em, blue |
| Lead | 400, 16–19px, line-height 1.6 |
| Body | 400, 15px, line-height 1.55 |
| Small/caption | 400, 13–14px, muted |
| Price | Montserrat 800 |

Headings use `text-wrap: balance`, paragraphs use `text-wrap: pretty`. Highlight one or two words of the H1 in **blue** (e.g. "better care.").

## Spacing & layout
- Container max-width 1440. Horizontal padding `clamp(20px, 8.3vw, 120px)`.
- Section vertical padding `clamp(56px, 6vw, 96px)`.
- Gaps: 8 / 12 / 16 / 24 / 32 / 48. Stack gap inside a section head is 12px.
- Grids are fluid: `repeat(auto-fit, minmax(min(100%, Npx), 1fr))`. Don't use fixed column counts. Typical N: cards 290, split 380, steps 180.
- Breakpoints (header only): nav collapses to the burger below 1024px. The header CTA is hidden below 640px.
- Section rhythm: white → mist → white → coloured band, with a pale hero at the top. Never put two coloured bands next to each other.
- **Section head with a side link** (e.g. "Our services" + "All services →"): wrap the eyebrow/H2 stack and the link in `.row-between` **alone**. On wide screens the heading is left and the link right, aligned to the bottom; on narrow screens the link wraps under the heading on the left. Don't combine `.row-between` with `.section-head`: the column direction plus `align-items: flex-end` pushes everything to the right.

## Shape & elevation
| Element | Radius |
|---|---|
| Buttons, chips, tags, tabs | 999px (pill) |
| Inputs | 12px |
| Cards | 20px |
| Large panels/bands | clamp(20px, 2.5vw, 32px) |
| Photo panels | 28px |
| Hero photo | teardrop `border-radius: 50% 0 50% 50%` + 8px white border |

Shadows are soft, navy-tinted and only used on floating things:
- Hero photo: `0 30px 60px -30px rgba(11,42,99,.35)`
- Floating card / form: `0 18px 40px -18px rgba(11,42,99,.3)` / `0 24px 50px -30px rgba(11,42,99,.3)`
- Cards on mist have no shadow, just `0 1px 0 #E3ECF5`.

## Signature motifs (use these, don't add new ones casually)
1. **Wave dividers.** An SVG wave at the bottom of pale heroes and the top of the reviews section. Path: `M0 45 C 240 95 480 5 720 35 S 1200 85 1440 25 L1440 80 L0 80Z`.
2. **Teardrop hero photo.** It echoes the water drop in the logo.
3. **Round sticker.** A sky circle with a 4px white border, rotated -10°, navy Montserrat 800 text (e.g. "Express delivery"). One per page at most.
4. **Circular price badges.** A photo in a 2px ring with a navy pill price at the bottom right.
5. **Dashed step circles.** 88px, pale fill, 2px dashed #9CC6EA border, a big blue numeral.
6. **Floating initials.** Coloured circles with white borders around the reviews section (hidden on mobile).
7. **Decorative blob.** A sky circle at 45% opacity, bleeding off the corner of the blue bulk band.

## Components
- **Buttons:** primary = navy (hover → blue). Secondary = white with border #C9DDF0 (hover border → blue). Soft = pale. Padding 16×28 (lg), 14×22 (md), 12×22 (sm). DM Sans 700.
- **WhatsApp button:** any variant + 9px green dot before the label.
- **Chip (hero):** white pill, blue Montserrat 700 11.5px, tracked .14em.
- **Tabs:** pale track with 5px padding; the active tab is navy with white text.
- **Service card:** 200px image on top, body padding 22×24, H3 + muted body.
- **Price row:** 52px round thumb, name/description, blue price on the right, line divider.
- **FAQ item:** white 16px-radius card, "+ / −" in blue, one open at a time.
- **Form:** inputs on #F8FBFE with a 1.5px border; focus → blue border + white background.
- **Footer:** navy, 4 fluid columns (brand, pages, visit, contact), legal row above a #22427D divider. The legal row has "© year Kempt Laundry Services, Benin City." on the left and "Developed and maintained by **Bossstrong-Dev**" on the right (the link is DM Sans 700, #E3EEF9, hover white, opens in a new tab). The two stack on narrow screens.

## Imagery
- Bright, clean, high-key photos: folded laundry, crisp shirts, bedding, sneakers, machines. Natural light, blue/white tones preferred.
- Always `object-fit: cover` inside a fixed-ratio frame (never let an image set its own height inside a ring or circle).
- Swap stock for real Kempt photos when available (shop, team, van, finished orders). Don't use the current Google Business photos.
- Alt text describes the photo and, where natural, the service ("Freshly washed and folded knitwear"). Purely decorative images (price-row thumbnails, the logo mark next to the wordmark) use `alt=""`.

### Social share images (`public/og/*.jpg`)
- 1200×630 JPEG, under 300 KB, one per page (home, services, pricing).
- Layout: pale background, white wave at the bottom, logo (mark + KEMPT/LAUNDRY) top-left, blue eyebrow ("… · BENIN CITY"), Montserrat 800 headline with the last words in blue, 2–3 white pills with navy DM Sans 700 text, a teardrop photo on the right with an 8px white border, and the domain bottom-right in navy. The home card also carries the "Express delivery" sticker.
- Keep the key message in the left/centre. Some apps crop to a square thumbnail.
- Generated by `scripts/make-share-images.py` from the real tokens. Edit the script rather than editing images by hand.

### Icons
- Favicon, app icon (512) and Apple touch icon (180): the logo mark centred on white (rounded square for the favicon), sized so it survives Google's circular crop. They live in `app/` (`favicon.ico`, `icon.png`, `apple-icon.png`). Theme colour is navy `#0B2A63`.

## Motion
- Minimal. Logo marquee: 28s linear loop, pauses on hover, off with `prefers-reduced-motion`.
- Reviews auto-advance every 5s and pause on hover. Dots animate width 8→26px.
- Hover transitions are 150ms on colour/border only. No bouncing, no parallax.

## Voice & copy
- Short, warm, plain English. Local references are welcome ("homes, hostels and offices across Benin City").
- Lead with the benefit, then the proof (72 hours, real reviews).
- Prices in ₦ with thousands separators (₦2,500). Use "from ₦X" for variable items and "Quote" for bulk.
- Don't invent statistics, awards or claims. If something is unconfirmed, label it ("Sample prices"). Don't list services Kempt doesn't offer (e.g. "dry cleaning") just because people search for them.
- **Write for search, naturally.** Say "laundry", the service and "Benin City" in visible text where it reads well: the home hero lead starts "Laundry service in Benin City: …", and page-hero eyebrows read "LAUNDRY SERVICES · BENIN CITY" / "LAUNDRY PRICES · BENIN CITY". The H1s stay human ("Cleaner clothes, better care."). Never stuff keywords.

## Checklist for any new section
1. Does it use only the tokens above?
2. Eyebrow + H2 head, matching the existing sections?
3. Does it reflow from 390 to 1440 with fluid grids?
4. Does it lead to Schedule pickup or WhatsApp?
5. Does it follow the section background rhythm (no two coloured bands in a row)?
6. New page? Give it `pageMeta()` (title, description, share image) and add it to `nav`. See `architecture.md` → Pages.

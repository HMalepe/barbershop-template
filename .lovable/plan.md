## Barbershop landing page

A single scrolling page at `/`, built in the editorial layout language of the reference shot (oversized wordmark, split image/text hero, asymmetric image blocks, small-caps utility nav) but in a moody-modern palette: charcoal `#1A1A1A`, bone `#E8E3DA`, muted red `#A33B2A`, warm graphite `#3D3A36`.

### Sections (top to bottom)

1. **Slim nav** — left: SERVICES / GALLERY / VISIT; center: shop wordmark small; right: HOURS + a Book button. Mobile: hamburger + centered mark.
2. **Hero** — giant full-bleed wordmark headline spanning the viewport width, directly under it a two-column block: left a tall barbershop photo with an overlaid line ("A cut that carries the week"), right a stacked headline + short copy + a pill "Book a chair →" button.
3. **Services** — editorial list (not a 3-card grid): row per service with name, short description, duration and price, separated by hairlines. Cut, beard trim, hot-towel shave, cut+beard, kids, line-up.
4. **Craft / about** — large left-aligned statement headline ("Built for daily wear, not just good photos" energy) with a wide interior photo beside it and a short paragraph on the shop's approach.
5. **Gallery** — asymmetric image grid of cuts/interior, 4–5 images, uneven column widths.
6. **Barbers** — 3 portraits with name and specialty, minimal captions.
7. **Visit** — hours table, address, phone, and a "Book a chair" CTA. Minimal footer with wordmark and socials.

### Details

- Type: heavy grotesk for display (tight tracking, very large hero), clean sans for body — no serif, no Inter/Poppins defaults.
- Restrained motion: subtle fade/rise on section entry only, no hover animation everywhere.
- One CTA style throughout (dark pill with arrow), matching the reference's "Shop Now" pill.
- Images generated to match the palette: warm-lit charcoal interior, close-up cut, portraits, tools flat-lay.
- Fully responsive; the reference's mobile composition (stacked, wordmark on top) informs the small-screen layout.

### Technical

- Rewrite `src/routes/index.tsx` as the landing page (removes the placeholder), with section components under `src/components/`.
- Palette, fonts and radii added as tokens in `src/styles.css` (`@theme inline` + `:root`); no hardcoded color utilities in components.
- Fonts loaded via `<link>` in `src/routes/__root.tsx`.
- Route-level `head()` on `/` with barbershop-specific title, description, og/twitter tags, plus an `og:image` if a hero asset lands on an absolute URL.
- No backend — booking button links to phone/anchor. Static content only.

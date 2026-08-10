# BEHAVIORS — /projects

## Scroll sweep
- Header is `position: fixed`, 72px tall, `bg-[#1B4D3E] text-white shadow-md` (same as homepage). Stays fixed while scrolling; content main has `pt-[72px]` offset. No appearance change observed on scroll.
- Reveal-on-scroll (IntersectionObserver, threshold ~0.15, once):
  - **Category cards:** start `opacity: 0, transform: translateY(20px)` → `opacity: 1, transform: none`. Transition `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` (card-hover's transition wins over Reveal's inline).
  - **Highlight cards:** start `opacity: 0, transform: scale(0.95)` → `opacity: 1, transform: none`. Computed transition `all`.
- No scroll-snap, no Lenis/Locomotive (native scroll), no parallax, no sticky elements besides the fixed header.

## Click sweep
- Category links are plain `<a>` anchors to `/projects/*` detail routes (not built in this clone). Hover shows green underline.
- Header nav links / "Book Consultation" / "EN" — same interactions as homepage SiteHeader.
- Footer links — same as homepage SiteFooter.

## Hover sweep
- **Category card:** `card-hover` → `translateY(-4px)` + shadow `0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)`, transition `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`.
- **Category link:** `color #1B4D3E` → `#2E7D5A` + `underline`, transition color 0.15s.
- Highlight cards: no hover lift (no card-hover class).

## Responsive sweep
- **1440 desktop:** container-custom (max 1280px, 32px side padding). Categories grid 2 cols (592px each, gap 32px), grid-template-rows 452/488/380px. Highlights grid 2 cols. H1 36px.
- **768 tablet:** Categories stack to 1 column (`lg:` = 1024px). Highlights remain 2 columns (`md:` = 768px). Gap 32px.
- **390 mobile:** Both stack to single column. Card padding stays 32px. H1 stays 36px (no responsive downscale).
- Breakpoints: categories switch at ~1024px; highlights switch at ~768px.

## Assets
- No `<img>`, no `<video>`, no background images on the content page. Only inline SVG icons (lucide): activity, dna, bone, leaf, clipboard-check, brain (categories); activity, dna, scan, sparkles (highlights). Icons render at 48px (categories icon tiles) and 32px (highlights icon boxes).

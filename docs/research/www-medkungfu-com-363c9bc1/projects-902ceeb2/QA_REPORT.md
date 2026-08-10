# QA Report — /projects

**Source:** https://www.medkungfu.com/projects
**Destination route:** `/projects` (src/app/projects/page.tsx)
**Build:** `npm run build` ✅ passes (routes: `/`, `/projects`)

## Components built (3) + 3 spec files
1. `ProjectsHero` — H1 + subtitle, centered, Reveal fade-up
2. `TreatmentCategoriesSection` — 6 white cards, 2-col grid (lg+), icon tile + title + zh label + description + dot link list, card-hover lift
3. `TreatmentHighlightsSection` — white panel, 4 gray cards, 2-col grid (md+), green icon box + bullets, Reveal scale(0.95)

## Shared foundation changes (for whole site)
- **Moved** `SiteHeader`/`SiteFooter` from `root-8a5edab2/` → `shared/`; homepage imports updated.
- **SiteHeader**: active nav link now derived from `usePathname()` (was hardcoded "Home"). On `/projects`, "Medical Projects" is highlighted — verified.
- **icons.tsx**: added `Bone`, `Brain`, `Scan`, `Sparkles`.
- **globals.css**: fixed radius scale to standard Tailwind values (`rounded-xl`=12px, `rounded-2xl`=16px, etc.) — previously 11.2/14.4px, now matches source exactly.

## Visual QA (computed-style diff vs source, 1440px)
| Element | Source | Clone | Match |
|---|---|---|---|
| H1 | 36px/700/Montserrat/#1A1A2E | same | ✅ |
| Categories grid | 592px 592px, gap 32 | same | ✅ |
| Category card | white, p-8, radius 16 | same | ✅ |
| Icon tile | 80×80, radius 12 | same | ✅ |
| H3 / zh / desc | 24/14/16px, correct grays | same | ✅ |
| Link dot | 6px #1B4D3E | same | ✅ |
| Highlights grid | 552px 552px, gap 32 | same | ✅ |
| Highlight card | #F5F7FA, p-6, radius 12 | same | ✅ |
| Icon box | 12px pad, radius 8, #1B4D3E/10 | same | ✅ |

## Responsive
- **1440**: categories 2-col, highlights 2-col ✅
- **768**: categories 1-col (lg breakpoint), highlights 2-col (md breakpoint) ✅ (verified)
- **390**: both 1-col ✅

## Interactions
- Reveal on scroll: categories fade-up translateY(20), highlights scale(0.95) — hidden states verified identical to source ✅
- Category card hover: card-hover lift (-4px + shadow) ✅
- Link hover: #1B4D3E → #2E7D5A + underline ✅
- Header active nav state works across routes ✅
- Console: no errors ✅

## Assets
- No images/videos/backgrounds on this page — 0 assets downloaded. Only inline lucide SVGs (8 icons).

## Known gaps
- Category links point to `/projects/*` detail pages (heavy-ion-proton, cart-therapy, etc.) which are **not in the user's route list** and not built. Clicking them 404s until those routes are added. The list page itself is complete.

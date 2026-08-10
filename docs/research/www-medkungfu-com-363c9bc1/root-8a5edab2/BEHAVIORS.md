# Behaviors — MedKungFu Homepage (Interaction Sweep)

## Global
- **Scroll behavior:** native, `scroll-behavior: auto`. NO Lenis/Locomotive. Body is the scroll container.
- **Header on scroll:** NONE — header is `fixed` with constant `bg-[#1B4D3E]` + `shadow-md` at all scroll positions.
- **Scroll-reveal animations (Framer Motion whileInView):** 43 elements animate in. Mechanism: JS IntersectionObserver (Framer Motion `inView` feature). Initial inline styles (`opacity:0; transform:translateY(20px|12px)` or `scale(0.9|0.95)`), resolved to `opacity:1; transform:none` when entering viewport. Fires once. No CSS `animation-name`.
  - Section headers: `translateY(20px)`
  - Cards (services/projects/process/trust): `translateY(12px)` or `translateY(20px)`
  - Promise cards: `scale(0.9)`; Story cards: `scale(0.95)`
  - Implementation for clone: `IntersectionObserver` hook + CSS transition (~0.3s ease) — end state must match `opacity:1; transform:none`.

## Hover states (all transition 0.3s ease)
| Element | Before | After |
|---|---|---|
| Header nav links | white | `#7CB342` |
| Header Book Consultation (lime) | `bg #7CB342` | `bg #689F38` |
| Service card | `border-gray-100`, no lift | `-translate-y-1`, `border-[#1B4D3E]/30`, `shadow-xl` |
| Service card icon | — | `group-hover:scale-105` |
| Service "Learn More" | `gap-2`, transparent bg | `gap-3`, `bg-[#7CB342]/10` |
| Promise card (`.card-hover`) | shadow-sm | lift + shadow |
| Project card | `border-gray-100`, no lift | `-translate-y-1`, `border-[#1B4D3E]/30`, `shadow-xl`; h3 → `#1B4D3E` |
| FAQ card | `border-gray-200`, shadow-sm | `border-[#7CB342]`, `shadow-md`; h3 → `#1B4D3E` |
| Footer link | `text-white/70` | `#7CB342` (with arrow icon sliding in, `opacity-0 → 1`, `ml-4` reveal) |
| Footer social icon | `bg-white/10` | `bg-[#7CB342]` |

## Click interactions
- **FAQ cards:** plain `<a>` links to `/faq#faq-N`. No accordion, no expand — answers are static with `line-clamp-2`. Tested: `hasDetails=false`, no hidden answers.
- **Header EN button:** text "EN" + globe/chevron icon. Toggles language (notably `/ru/` exists as alternate). In clone: non-functional link is fine (out of scope backend) — render as button.
- **Header hamburger** (`lg:hidden`): mobile menu toggle — opens dropdown nav on <lg viewports.
- **Header Book Consultation:** `<a href="/login">`.
- **Primary hero CTA:** "Explore Medical Projects" → `/projects` (green solid). **Secondary:** "Book Consultation" → `/contact` (white, green border).

## Form (Start Your Medical Journey)
- Fields: Name (required, text), Email/WhatsApp (required, text), Area of Interest (required select with 6 options), Message (textarea, rows=4).
- Submit button: white bg, `text-[#1B4D3E]`, disabled at 50% opacity while submitting; shows "Submit Inquiry".
- Inputs: `bg-white/10`, `border-white/20`, `placeholder-white/60`, focus `border-white`. On white/error: red border (rgb 220,38,38) + bg red-50 for error states.
- Native `<select>` with `appearance-none` (custom chevron likely). Options show gray-800 on dropdown.

## Responsive behavior (from Tailwind classes)
| Element | Desktop ≥lg | Tablet md | Mobile <md |
|---|---|---|---|
| Header nav + Book + EN | visible (`hidden lg:flex`) | hidden | hidden (hamburger shows) |
| Hero | 2-col grid (text + image), image `lg:block`, min-h 800 | min-h 700, image hidden | stacked, py-20, CTAs column |
| Services | 3-col grid | 3-col (md:grid-cols-3) | 1-col |
| Trust | 4-col | 2-col (`grid-cols-2 md:grid-cols-4`) | 2-col |
| Promise | 4-col | 2-col | 1-col |
| Projects | 4-col | 2-col | 1-col |
| Process | 6-col (`lg:grid-cols-6`), connector horizontal | 3-col (`md:grid-cols-3`), connector down-left | 1-col, connector down |
| Stories | 3-col | 3-col | 1-col |
| FAQ | 2-col | 2-col | 1-col |
| Form | 2-col grid | 2-col | 1-col |
| Footer | 4-col | 2-col | 1-col |

## Cities strip
- Static: `flex flex-wrap items-center justify-center gap-2 md:gap-4`, lime `·` separators between cities. First 3 cities `text-white`, last 3 `text-white/50`. Map-pin icon + "SERVING PATIENTS IN" label in `text-white/80`.

## Service Process
- 6 steps in `ol.grid.grid-cols-1.gap-5.md:grid-cols-3.lg:grid-cols-6`.
- Each step: card with `border-[#1B4D3E]/10`, white bg, shadow-sm, `p-5`, rounded-xl.
- Header row: icon in `h-11 w-11 rounded-full bg-[#1B4D3E] text-white` + lime step number `01`–`06`.
- Progress bar: `h-1.5 rounded-full bg-gray-100` track with lime fill at widths 22%, 32%, 48%, 64%, 80%, 96%.
- Connector: `absolute left-1/2 top-full h-5 w-px bg-[#1B4D3E]/20` (mobile vertical), `md:left-full md:top-1/2 md:h-px md:w-5 lg:w-6` (desktop horizontal).

## Metadata
- title: `MedKungFu - Cross-Border Medical Tourism | Advanced Healthcare in China`
- description: `Premium cross-border medical tourism services to China's top hospitals. Access advanced treatments including heavy ion therapy, CAR-T, stem cell therapy, BNCT, and TCM specialties at affordable costs.`
- theme-color: `#1B4D3E`

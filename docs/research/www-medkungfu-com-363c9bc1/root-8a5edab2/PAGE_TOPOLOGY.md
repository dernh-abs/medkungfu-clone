# Page Topology — MedKungFu Homepage

## Layout skeleton
- `<main class="flex-grow pt-[72px]">` wraps everything (72px offset for fixed header)
- `<main role="main" aria-label="MedKungFu Homepage">`
- Page scrolls on `<body>` (native scroll, `scroll-behavior: auto` — no smooth-scroll lib)

## Fixed overlays
1. **SiteHeader** — `fixed top-0 left-0 right-0 z-50 bg-[#1B4D3E] text-white shadow-md`, height 72px. Always present, no scroll-state change.

## Flow sections (top → bottom)
| # | Section | Tag/class | Interaction model |
|---|---|---|---|
| 1 | **Hero** | `<header>` `relative min-h-[700px] md:min-h-[800px] flex items-center overflow-hidden bg-[#F5F7FA]` | static content + framer reveal |
| 2 | **CityStrip** | `<nav>` `bg-[#1B4D3E] py-6` | static |
| 3 | **Services** | `<section>` `py-20 bg-white` | static + hover cards |
| 4 | **TrustStats** | `<section>` `py-12 bg-white border-b border-gray-100` | static |
| 5 | **OurPromise** | `<section>` `section-padding bg-[#F5F7FA]` | static + hover cards |
| 6 | **MedicalProjects** | `<section>` `section-padding bg-white` | static + hover cards |
| 7 | **ServiceProcess** | `<section>` `section-padding bg-[#F5F7FA]` | static |
| 8 | **PatientStories** | `<section>` `section-padding bg-white` | static |
| 9 | **FeaturedFAQ** | `<section>` `section-padding bg-white` | static cards |
| 10 | **CTASection** (Start Your Medical Journey) | `<section>` `py-20 bg-gradient-to-r from-[#1B4D3E] to-[#2E7D5A] text-white` | form |
| 11 | **SiteFooter** | `<footer>` `bg-[#1B4D3E] text-white` | static |

## Section dependency / z-index
- Header is fixed (z-50) over everything
- Hero decorations: `absolute inset-0 z-0` overlays; content `relative z-10`; image frame `relative z-10`; figcaption card `z-20`
- Reveal animations apply opacity/transform inline (no z-index impact)

## Reveal animation system (GLOBAL)
Framer Motion `whileInView` fade-up applied to many sections/cards:
- Section headers (h2 blocks): `opacity 0 → 1`, `translateY(20px) → 0`
- Service cards, project cards, process steps, trust items: `translateY(12px)` or `translateY(20px)`
- Promise cards, story cards: `scale(0.9)` / `scale(0.95)` → 1
- Triggered once when element enters viewport (IntersectionObserver under the hood)
- End state always `opacity:1; transform:none`

## Hero internal structure
```
header.relative.min-h-[700px]...bg-[#F5F7FA]      (overflow-hidden)
├─ div.absolute.inset-0.z-0                       decorations
│  ├─ div.absolute.top-0.right-0.w-1/2.h-full.bg-gradient-to-l.from-[#E8F5E9]/50.to-transparent
│  └─ div.absolute.bottom-0.left-0.w-full.h-1/3.bg-gradient-to-t.from-white.to-transparent
├─ div.container-custom.relative.z-10.px-4.py-20
│  └─ div.grid.grid-cols-1.lg:grid-cols-2.gap-12.items-center
│     ├─ div.text-left                              (left column)
│     │  ├─ div.inline-flex (badge pill)            "TRUSTED BY EXPATS ACROSS CHINA"
│     │  ├─ h1                                      60px Montserrat bold
│     │  ├─ p.text-lg.md:text-xl                     subtitle
│     │  ├─ ul.flex.flex-wrap.gap-4                  3 stat dots
│     │  └─ nav > div.flex.flex-col.sm:flex-row     2 CTAs
│     └─ figure.relative.hidden.lg:block             (right column, hidden < lg)
│        ├─ div.relative
│        │  ├─ div.relative.z-10.rounded-2xl.overflow-hidden.shadow-2xl
│        │  │  └─ img (doctor photo 904×1200)
│        │  └─ figcaption.absolute.-bottom-6.-left-6.bg-white.rounded-xl.shadow-xl.p-4.z-20
│        │     └─ div.flex.items-center.gap-3        "100+ Partner Hospitals / Across 6 major cities"
└─ div.absolute.bottom-0.left-0.right-0  (fade; childCount 1 → the white gradient)
```

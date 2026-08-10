# HeroSection Specification

## Overview
- **Target file:** `src/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/HeroSection.tsx`
- **Screenshot:** `docs/design-references/www-medkungfu-com-363c9bc1/root-8a5edab2/fullpage-desktop-1440.png` (top, below header)
- **Interaction model:** static (reveal on load via Reveal)
- Rendered as `<header role="banner" aria-label="Hero Section">` (note: separate from the fixed SiteHeader).

## DOM Structure
```
<header class="relative min-h-[700px] md:min-h-[800px] flex items-center overflow-hidden bg-[#F5F7FA]">
├─ div.absolute.inset-0.z-0 [decorations]
│  ├─ div.absolute.top-0.right-0.w-1/2.h-full.bg-gradient-to-l.from-[#E8F5E9]/50.to-transparent
│  └─ div.absolute.bottom-0.left-0.w-full.h-1/3.bg-gradient-to-t.from-white.to-transparent
├─ div.container-custom.relative.z-10.px-4.py-20
│  └─ div.grid.grid-cols-1.lg:grid-cols-2.gap-12.items-center
│     ├─ div.text-left   [LEFT COLUMN]
│     │  ├─ div.inline-flex.items-center.gap-2.bg-[#1B4D3E]/10.text-[#1B4D3E].rounded-full.px-4.py-2.mb-6.text-sm.font-medium
│     │  │  └─ CheckCircle2 icon 16px + span "TRUSTED BY EXPATS ACROSS CHINA"
│     │  ├─ h1.text-4xl.md:text-5xl.lg:text-6xl.font-bold.text-[#1A1A2E].mb-6
│     │  │    Your Personal<span class="text-[#1B4D3E]"> Healthcare Guide</span><br/>in China
│     │  ├─ p.text-lg.md:text-xl.text-gray-600.mb-8.max-w-xl.leading-relaxed  [subtitle]
│     │  ├─ ul.flex.flex-wrap.gap-4.mb-10.list-none   [3 stat dots]
│     │  │  └─ li.flex.items-center.gap-2.text-sm.text-gray-600
│     │  │     └─ div.w-2.h-2.bg-[#7CB342].rounded-full + span
│     │  └─ nav → div.flex.flex-col.sm:flex-row.gap-4   [CTAs]
│     │     ├─ a.inline-flex.items-center.justify-center.gap-2.bg-[#1B4D3E].text-white.px-8.py-4.rounded-lg.text-lg.font-medium.shadow-md.hover:bg-[#143D30] (→ /projects) "Explore Medical Projects" + ArrowRight 20px
│     │     └─ a.inline-flex.items-center.justify-center.gap-2.bg-white.text-[#1B4D3E].border-2.border-[#1B4D3E].px-8.py-4.rounded-lg.text-lg.font-medium.hover:bg-[#1B4D3E]/5 (→ /contact) "Book Consultation"
│     └─ figure.relative.hidden.lg:block   [RIGHT COLUMN, hidden < lg]
│        ├─ div.relative
│        │  ├─ div.relative.z-10.rounded-2xl.overflow-hidden.shadow-2xl
│        │  │  └─ img src=/sites/.../images/medkungfu-doctor-hero.jpg alt="Professional Chinese female doctor providing medical consultation" class="w-full h-full object-cover"
│        │  └─ figcaption.absolute.-bottom-6.-left-6.bg-white.rounded-xl.shadow-xl.p-4.z-20
│        │     └─ div.flex.items-center.gap-3
│        │        ├─ div.w-12.h-12.bg-[#1B4D3E].rounded-full.flex.items-center.justify-center → span.text-white.text-xl.font-bold "100+"
│        │        └─ div: p.font-semibold.text-[#1A1A2E] "Partner Hospitals" + p.text-sm.text-gray-500 "Across 6 major cities"
└─ div.absolute.bottom-0.left-0.right-0  (empty fade element; the gradient div already covers bottom)
```

## Computed Styles (desktop 1440px)
- Section: `min-height:700px (md:800px); bg:#F5F7FA; overflow:hidden; display:flex; align-items:center`
- Badge: `bg:rgba(27,77,62,0.1); color:#1B4D3E; padding:8px 16px; border-radius:9999px; font:14px/500; margin-bottom:24px; gap:8px`
- H1: `font:700 Montserrat; font-size:60px; line-height:60px; color:#1A1A2E; margin-bottom:24px`
- Subtitle: `font:400 Open Sans; 20px/28px; color:#4B5563; max-width:576px; margin-bottom:32px`
- Stat dots: `div 8×8px bg #7CB342 rounded-full; text 14px/400 #4B5563; gap 8px; list gap 16px; margin-bottom 40px`
- Primary CTA: `bg:#1B4D3E; color:#fff; padding:16px 32px; radius:8px; 18px/500; shadow-md; hover:bg:#143D30; transition:all .3s`
- Secondary CTA: `bg:#fff; color:#1B4D3E; border:2px solid #1B4D3E; padding:16px 32px; radius:8px; 18px/500`
- Right image frame: `w≈584px h≈500px; border-radius:16px; box-shadow:0 25px 50px -12px rgba(0,0,0,0.25)`
- Figcaption card: `position:absolute; bottom:-24px; left:-24px; bg:#fff; border-radius:12px; box-shadow-xl; padding:16px; z-index:20`

## States & Behaviors
- Wrap left column, figure, and badge each in `Reveal` (import from `../../shared/Reveal`) with y=20, matching the source reveal.
- Hover: primary CTA → `#143D30`; secondary CTA → `bg-[#1B4D3E]/5`.
- No scroll-triggered changes.

## Assets
- Doctor photo: `public/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/images/medkungfu-doctor-hero.jpg`

## Text Content (verbatim)
- TRUSTED BY EXPATS ACROSS CHINA
- Your Personal **Healthcare Guide** in China  (Healthcare Guide in `#1B4D3E`)
- We care about your health as much as you do. Connecting global patients with China's top medical resources through personalized, concierge-level service.
- Trusted by expats across China / 100+ Foreigner-friendly Hospitals / 6+ Major Cities Covered
- Explore Medical Projects / Book Consultation
- 100+ / Partner Hospitals / Across 6 major cities

## Responsive Behavior
- Desktop (1440px): 2-col grid, gap 48px. Image visible (lg:block). Figcaption bottom-left overlap.
- Tablet (768px): 1-col, image hidden (hidden lg:block), min-h 700px, CTAs side-by-side (sm:flex-row).
- Mobile (390px): stacked, py-20 (80px), CTAs column (flex-col), badge/subtitle/stat size reduced (text-4xl H1).

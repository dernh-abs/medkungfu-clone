# ServicesSection Specification

## Overview
- **Target file:** `src/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/ServicesSection.tsx`
- **Screenshot:** `docs/design-references/www-medkungfu-com-363c9bc1/root-8a5edab2/fullpage-desktop-1440.png` (white section with 3 cards)
- **Interaction model:** static + card hover (translate/scale), scroll-reveal

## DOM Structure
```
<section aria-labelledby="services-heading" class="py-20 bg-white">
└─ div.container-custom.px-4
   ├─ div.text-center.mb-16  [HEADER — wrap in Reveal y=20]
   │  ├─ h2#services-heading.text-3xl.md:text-4xl.font-bold.text-[#1A1A2E].mb-4  "How MedKungfu Helps You"
   │  └─ p.text-gray-600.max-w-2xl.mx-auto.text-lg  "Comprehensive healthcare concierge services designed for expats in China"
   ├─ ul.grid.grid-cols-1.md:grid-cols-3.gap-8.list-none   [3 cards]
   │  └─ li.group.relative   [each card — wrap in Reveal y=12]
   │     └─ a.block.h-full.rounded-2xl.p-8.border.border-gray-100.bg-white
   │        .transition-all.duration-300.hover:-translate-y-1.hover:border-[#1B4D3E]/30.hover:shadow-xl
   │        .focus:outline-none.focus:ring-4.focus:ring-[#7CB342]/25  (→ /services)
   │        ├─ div.w-16.h-16.rounded-xl.flex.items-center.justify-center.mb-6
   │        │  .transition-transform.duration-300.group-hover:scale-105
   │        │  [icon container — bg/color per card: building #1B4D3E/8%, languages #2E7D5A/8%, users #7CB342/8%]
   │        │  └─ icon 32px
   │        ├─ h3.text-xl.font-bold.text-[#1A1A2E].mb-3   [title]
   │        ├─ p.text-gray-600.mb-6.leading-relaxed   [description]
   │        └─ span.inline-flex.items-center.gap-2.rounded-lg.border-2.border-[#7CB342].px-4.py-2
   │           .text-[#1B4D3E].font-medium.transition-all.duration-300.group-hover:gap-3.group-hover:bg-[#7CB342]/10
   │           "Learn More" + ArrowRight 18px
   └─ nav.text-center.mt-12   [wrap in Reveal y=20]
      └─ a.inline-flex.items-center.gap-2.bg-[#1B4D3E].text-white.px-8.py-4.rounded-lg.font-medium
         .hover:bg-[#143D30].transition-all.duration-300.shadow-lg.hover:shadow-xl (→ /services)
         "View All Services" + ArrowRight 20px
```

## Cards data
| Icon | Icon container bg/color | Title | Description |
|---|---|---|---|
| Building2 | `rgba(27,77,62,0.082)` / `#1B4D3E` | Hospital Referral | Direct access to 50+ top-tier hospitals across China. We match you with the best medical facilities for your specific needs. |
| Languages | `rgba(46,125,90,0.082)` / `#2E7D5A` | Medical Translation | Professional medical interpreters fluent in English and Chinese, ensuring clear communication throughout your healthcare journey. |
| Users | `rgba(124,179,66,0.082)` / `#7CB342` | In-Person Escort | Dedicated healthcare concierge accompanying you to appointments, handling logistics, and providing personalized support. |

## Hover behavior
- Card: `transform: translateY(-4px); border-color: rgba(27,77,62,0.3); box-shadow: 0 20px 25px -5px rgba(0,0,0,.1), 0 8px 10px -6px rgba(0,0,0,.1)` — transition all 0.3s
- Icon container: `scale(1.05)` on group hover (transition-transform 0.3s)
- Learn More span: gap 8→12px, `background: rgba(124,179,66,0.1)` on group hover

## Text Content (verbatim)
- How MedKungfu Helps You / Comprehensive healthcare concierge services designed for expats in China
- Hospital Referral / Medical Translation / In-Person Escort (+ descriptions above)
- Learn More ×3 / View All Services

## Responsive Behavior
- Desktop: 3-col grid. Tablet (md): 3-col. Mobile: 1-col stacked.
- Section padding `py-20` (80px).

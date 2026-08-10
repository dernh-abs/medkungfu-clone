# OurPromiseSection Specification

## Overview
- **Target file:** `src/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/OurPromiseSection.tsx`
- **Screenshot:** `docs/design-references/www-medkungfu-com-363c9bc1/root-8a5edab2/fullpage-desktop-1440.png`
- **Interaction model:** static (scroll-reveal with scale 0.9 → 1), hover lift via `.card-hover`

## DOM Structure
```
<section aria-labelledby="core-values-heading" class="section-padding bg-[#F5F7FA]">
└─ div.container-custom
   ├─ h2#core-values-heading.text-3xl.font-bold.text-center.mb-12.text-[#1A1A2E]  "Our Promise"
   └─ ul.grid.grid-cols-1.md:grid-cols-2.lg:grid-cols-4.gap-6.list-none   [4 cards]
      └─ li.bg-white.p-8.rounded-xl.shadow-sm.card-hover.text-center   [each — wrap in Reveal scale=0.9]
         ├─ div.inline-flex.items-center.justify-center.w-16.h-16.rounded-full.bg-[#1B4D3E]/10.text-[#1B4D3E].mb-6
         │  └─ icon 40px
         ├─ h3.text-lg.font-bold.mb-3.text-[#1A1A2E]   [title]
         └─ p.text-gray-600.text-sm.leading-relaxed   [description]
```

## Items
| Icon (40px) | Title | Description |
|---|---|---|
| Shield | Direct Hospital Access | Direct hospital access without intermediaries |
| Zap | Rapid Response | Efficient scheduling and rapid response |
| UserCheck | Fully Customized | Personalized service plans for every patient |
| FileText | Transparent & Secure | Clear pricing with guaranteed refunds |

## Computed Styles
- Section: `padding-block:96px; bg:#F5F7FA`
- h2: `36px/700 Montserrat; color:#1A1A2E; margin-bottom:48px; text-center`
- Card: `bg:#fff; padding:32px; radius:12px; box-shadow:0 1px 2px rgba(0,0,0,0.05); transition:all .3s cubic-bezier(.4,0,.2,1); hover:translateY(-4px) + shadow-xl (via .card-hover class already in globals.css)`
- Icon circle: `64×64px; radius:9999px; bg:rgba(27,77,62,0.1); color:#1B4D3E; margin-bottom:24px`
- Title: `18px/700 Montserrat; color:#1A1A2E; margin-bottom:12px`
- Description: `14px/400 Open Sans; color:#4B5563; leading-relaxed`

## Text Content (verbatim)
- Our Promise
- Direct Hospital Access / Rapid Response / Fully Customized / Transparent & Secure (+ descriptions above)

## Responsive Behavior
- Desktop: 4-col. Tablet (md): 2-col. Mobile: 1-col.

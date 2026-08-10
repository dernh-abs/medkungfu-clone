# ServiceProcessSection Specification

## Overview
- **Target file:** `src/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/ServiceProcessSection.tsx`
- **Screenshot:** `docs/design-references/www-medkungfu-com-363c9bc1/root-8a5edab2/fullpage-desktop-1440.png`
- **Interaction model:** static (scroll-reveal)

## DOM Structure
```
<section aria-labelledby="service-process-heading" class="section-padding bg-[#F5F7FA]">
└─ div.container-custom
   ├─ h2#service-process-heading.text-3xl.font-bold.text-center.mb-16.text-[#1A1A2E]  "Our Service Process"
   └─ ol.grid.grid-cols-1.gap-5.md:grid-cols-3.lg:grid-cols-6.list-none   [6 steps]
      └─ li.relative   [each — wrap in Reveal y=12]
         ├─ div.h-full.rounded-xl.border.border-[#1B4D3E]/10.bg-white.p-5.shadow-sm
         │  ├─ div.mb-5.flex.items-center.gap-3
         │  │  ├─ div.flex.h-11.w-11.flex-shrink-0.items-center.justify-center.rounded-full.bg-[#1B4D3E].text-white
         │  │  │  └─ icon 22px
         │  │  └─ div.text-sm.font-bold.text-[#7CB342]   [step number 01-06]
         │  ├─ h3.text-base.font-bold.leading-snug.text-[#1A1A2E]   [title]
         │  └─ div.mt-5.h-1.5.rounded-full.bg-gray-100
         │     └─ div.h-full.rounded-full.bg-[#7CB342]  style width:{progress}%
         └─ div.pointer-events-none.absolute.left-1/2.top-full.h-5.w-px.bg-[#1B4D3E]/20
            .md:left-full.md:top-1/2.md:h-px.md:w-5.lg:w-6   [connector — omit on last item]
```

## Steps data
| # | Icon (22px) | Title | Progress bar width |
|---|---|---|---|
| 01 | ClipboardCheck | Consultation & Review | 22% |
| 02 | Stethoscope | Contract Signing | 32% |
| 03 | FileText | Matching & Remote Eval | 48% |
| 04 | Plane | Pre-trip Prep | 64% |
| 05 | MapPin | Treatment in China | 80% |
| 06 | Building2 | Post-care Follow-up | 96% |

## Computed Styles
- Section: `padding-block:96px; bg:#F5F7FA`
- h2: `36px/700 Montserrat; color:#1A1A2E; text-center; margin-bottom:64px`
- Step card: `bg:#fff; border:1px solid rgba(27,77,62,0.1); radius:12px; padding:20px; box-shadow:0 1px 2px rgba(0,0,0,.05)`
- Icon circle: `44×44px; radius:9999px; bg:#1B4D3E; color:#fff`
- Step number: `14px/700; color:#7CB342`
- Title: `16px/700 Montserrat; color:#1A1A2E; leading-snug`
- Progress track: `height:6px; radius:9999px; bg:#f3f4f6 (gray-100); margin-top:20px`; fill `bg:#7CB342` at listed widths
- Connector: mobile = vertical `5px tall × 1px wide` below center; md+ = horizontal `1px × 20px (lg:24px)` to the right

## Text Content (verbatim)
- Our Service Process
- 01 Consultation & Review · 02 Contract Signing · 03 Matching & Remote Eval · 04 Pre-trip Prep · 05 Treatment in China · 06 Post-care Follow-up

## Responsive Behavior
- Desktop (lg): 6-col grid, horizontal connectors to the right of each step.
- Tablet (md): 3-col grid (2 rows), connectors reorient (`md:left-full md:top-1/2 md:h-px md:w-5`).
- Mobile: 1-col, vertical connectors below each step.

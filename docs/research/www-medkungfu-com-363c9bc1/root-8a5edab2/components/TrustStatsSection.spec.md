# TrustStatsSection Specification

## Overview
- **Target file:** `src/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/TrustStatsSection.tsx`
- **Screenshot:** `docs/design-references/www-medkungfu-com-363c9bc1/root-8a5edab2/fullpage-desktop-1440.png`
- **Interaction model:** static (scroll-reveal)

## DOM Structure
```
<section aria-label="Trust indicators" class="py-12 bg-white border-b border-gray-100">
└─ div.container-custom
   └─ ul.grid.grid-cols-2.md:grid-cols-4.gap-8.list-none   [4 items]
      └─ li.flex.flex-col.items-center.text-center   [each — wrap in Reveal y=20]
         ├─ div.text-[#1B4D3E].mb-3   [icon 32px]
         └─ p.font-semibold.text-gray-800   [label]
```

## Items
| Icon (32px) | Label |
|---|---|
| Building2 | 100+ Foreigner-friendly Hospitals |
| MapPin | 6+ Major Cities |
| MessageCircle | Global Patient Base |
| Clock | 48h Expert Feedback |

## Computed Styles
- Section: `padding-block:48px; bg:#fff; border-bottom:1px solid #e5e7eb (gray-100)`
- Icon: `color:#1B4D3E; 32px; margin-bottom:12px`
- Label: `font-weight:600; color:#1F2937 (gray-800)`

## Text Content (verbatim)
100+ Foreigner-friendly Hospitals / 6+ Major Cities / Global Patient Base / 48h Expert Feedback

## Responsive Behavior
- Desktop: 4-col. Tablet/mobile: 2-col (grid-cols-2 md:grid-cols-4), gap 32px.

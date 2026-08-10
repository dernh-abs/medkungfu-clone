# CityStrip Specification

## Overview
- **Target file:** `src/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/CityStrip.tsx`
- **Screenshot:** `docs/design-references/www-medkungfu-com-363c9bc1/root-8a5edab2/fullpage-desktop-1440.png` (dark band below hero)
- **Interaction model:** static (no animation)

## DOM Structure
```
<nav aria-label="Service locations" class="bg-[#1B4D3E] py-6">
└─ div.container-custom.px-4
   └─ div.flex.flex-wrap.items-center.justify-center.gap-2.md:gap-4
      ├─ div.flex.items-center.gap-2.text-white/80.text-sm.md:text-base
      │  ├─ MapPin icon 18px text-[#7CB342]
      │  └─ span.font-medium  "SERVING PATIENTS IN"
      └─ ul.flex.flex-wrap.items-center.justify-center.gap-1.md:gap-2.list-none
         ├─ li.text-sm.md:text-base.font-medium.text-white   "Shanghai"
         ├─ li.text-[#7CB342].mx-1  "·"
         ├─ li... "Guangzhou"  ·  "Hainan"
         ├─ li.text-sm.md:text-base.font-medium.text-white/50  "Beijing" · "Shenzhen" · "Chengdu"
         (first 3 cities white, last 3 white/50; separators are lime "·" spans aria-hidden)
```

## Computed Styles
- Nav: `background:#1B4D3E; padding-block:24px`
- Label: `color:rgba(255,255,255,0.8); 14px (md:16px); gap:8px; font-weight:500 for "SERVING PATIENTS IN"`
- City items: 14px (md:16px) /500; `color:#fff` for first 3, `rgba(255,255,255,0.5)` for last 3
- Separators: `color:#7CB342; margin-inline:4px`

## Text Content (verbatim)
- SERVING PATIENTS IN
- Shanghai · Guangzhou · Hainan · Beijing · Shenzhen · Chengdu

## Responsive Behavior
- Single centered flex row that wraps (`flex-wrap`). Gaps 8px (mobile) → 16px (md+).

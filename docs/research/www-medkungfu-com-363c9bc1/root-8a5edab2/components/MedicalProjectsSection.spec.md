# MedicalProjectsSection Specification

## Overview
- **Target file:** `src/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/MedicalProjectsSection.tsx`
- **Screenshot:** `docs/design-references/www-medkungfu-com-363c9bc1/root-8a5edab2/fullpage-desktop-1440.png`
- **Interaction model:** static + card hover (translate/lift), scroll-reveal

## DOM Structure
```
<section aria-labelledby="medical-projects-heading" class="section-padding bg-white">
└─ div.container-custom
   ├─ h2#medical-projects-heading.text-3xl.font-bold.text-center.mb-12.text-[#1A1A2E]  "Advantageous Medical Projects"
   └─ ul.grid.grid-cols-1.md:grid-cols-2.lg:grid-cols-4.gap-6.list-none   [4 cards]
      └─ li.group   [each — wrap in Reveal y=12]
         └─ a.block.h-full.rounded-xl.border.border-gray-100.bg-white.p-6
            .transition-all.duration-300.hover:-translate-y-1.hover:border-[#1B4D3E]/30.hover:shadow-xl
            .focus:outline-none.focus:ring-4.focus:ring-[#7CB342]/25 (→ /projects)
            ├─ div.w-14.h-14.rounded-lg.[iconBg].flex.items-center.justify-center.mb-4  [icon 32px, iconColor]
            ├─ h3.text-xl.font-bold.mb-2.text-[#1A1A2E].group-hover:text-[#1B4D3E].transition-colors  [title]
            ├─ p.text-gray-500.mb-4.text-sm  [subtitle]
            └─ span.inline-flex.items-center.gap-2.rounded-lg.border-2.border-[#7CB342].px-3.py-2.text-[#1B4D3E].text-sm.font-medium  "Learn More →"
```

## Cards data
| Icon | iconBg | iconColor | Title | Subtitle |
|---|---|---|---|---|
| Activity | `bg-red-50` | `text-red-600` | Precision Oncology | Heavy Ion & CAR-T Therapy |
| Dna | `bg-purple-50` | `text-purple-600` | Regenerative Medicine | Stem Cell Treatment |
| Leaf | `bg-green-50` | `text-green-600` | Integrative Medicine | TCM & Western Medicine |
| Stethoscope | `bg-blue-50` | `text-blue-600` | More Specialties | Cardiology, Orthopedics & More |

## Computed Styles
- Section: `padding-block:96px; bg:#fff`
- h2: `36px/700 Montserrat; color:#1A1A2E; text-center; margin-bottom:48px`
- Card: `bg:#fff; padding:24px; radius:12px; border:1px solid #f1f1f1 (gray-100); transition:all .3s; hover:-translate-y-1 + border-[#1B4D3E]/30 + shadow-xl`
- Icon box: `56×56px; radius:8px; margin-bottom:16px`
- Title: `20px/700; color:#1A1A2E; hover→#1B4D3E; margin-bottom:8px`
- Subtitle: `14px/400; color:#6B7280 (gray-500); margin-bottom:16px`
- Learn More pill: `border:2px solid #7CB342; padding:8px 12px; radius:8px; color:#1B4D3E; 14px/500`

## Text Content (verbatim)
- Advantageous Medical Projects
- Precision Oncology (Heavy Ion & CAR-T Therapy) / Regenerative Medicine (Stem Cell Treatment) / Integrative Medicine (TCM & Western Medicine) / More Specialties (Cardiology, Orthopedics & More)
- Learn More → ×4

## Responsive Behavior
- Desktop: 4-col. Tablet (md): 2-col. Mobile: 1-col.

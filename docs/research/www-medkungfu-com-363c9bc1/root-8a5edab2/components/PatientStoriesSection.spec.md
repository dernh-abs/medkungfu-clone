# PatientStoriesSection Specification

## Overview
- **Target file:** `src/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/PatientStoriesSection.tsx`
- **Screenshot:** `docs/design-references/www-medkungfu-com-363c9bc1/root-8a5edab2/fullpage-desktop-1440.png`
- **Interaction model:** static (scroll-reveal, scale 0.95 → 1)

## DOM Structure
```
<section aria-labelledby="patient-stories-heading" class="section-padding bg-white">
└─ div.container-custom
   ├─ h2#patient-stories-heading.text-3xl.font-bold.text-center.mb-12.text-[#1A1A2E]  "Patient Stories"
   └─ ul.grid.grid-cols-1.md:grid-cols-3.gap-8.list-none   [3 cards]
      └─ li.bg-[#F5F7FA].p-8.rounded-xl.relative   [each — wrap in Reveal scale=0.95]
         ├─ Quote icon 40px class="lucide lucide-quote absolute top-6 left-6 text-[#1B4D3E]/20" (positioned, low opacity)
         ├─ blockquote.text-gray-700.italic.mb-6.relative.z-10.pt-4
         │  └─ p  [quote text]
         └─ footer.flex.items-center.space-x-4
            ├─ img.w-12.h-12.rounded-full.object-cover (→ local story image)
            └─ cite.text-sm.font-semibold.text-[#1A1A2E].not-italic  [patient name]
```

## Stories data
| Quote | Image (local path) | Name |
|---|---|---|
| "From the despair of recurrence to complete remission, CAR-T therapy in China gave me a second life." | `.../images/patient-se-asia-lymphoma.jpg` | Patient from Southeast Asia, Recurrent Lymphoma |
| "Heavy ion therapy for prostate cancer: short course, minimal side effects, and costs far less than in Europe." | `.../images/patient-middle-east.jpg` | Patient from the Middle East |
| "TCM is amazing. It allowed me to walk normally again." | `.../images/patient-se-asia-osteoarthritis.jpg` | Patient from Southeast Asia, Osteoarthritis |

## Computed Styles
- Section: `padding-block:96px; bg:#fff`
- h2: `36px/700 Montserrat; color:#1A1A2E; text-center; margin-bottom:48px`
- Card: `bg:#F5F7FA; padding:32px; radius:12px; position:relative`
- Quote icon: `40px; position:absolute; top:24px; left:24px; color:rgba(27,77,62,0.2)`
- Quote text: `16px/400 italic; color:#374151 (gray-700); margin-bottom:24px; padding-top:16px; position:relative; z-index:10`
- Avatar: `48×48px; border-radius:9999px; object-cover`
- Name: `14px/600; color:#1A1A2E; not-italic`

## Text Content (verbatim)
- Patient Stories
- (3 quotes + names as above)

## Responsive Behavior
- Desktop/tablet: 3-col. Mobile: 1-col.

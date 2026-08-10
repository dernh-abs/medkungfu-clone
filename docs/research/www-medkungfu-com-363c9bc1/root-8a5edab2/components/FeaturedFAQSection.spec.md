# FeaturedFAQSection Specification

## Overview
- **Target file:** `src/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/FeaturedFAQSection.tsx`
- **Screenshot:** `docs/design-references/www-medkungfu-com-363c9bc1/root-8a5edab2/fullpage-desktop-1440.png`
- **Interaction model:** static cards (no accordion). Hover: border→#7CB342 + shadow-md. Scroll-reveal.

## DOM Structure
```
<section aria-labelledby="featured-faq-heading" class="section-padding bg-white">
└─ div.container-custom
   ├─ div.flex.flex-col.lg:flex-row.lg:items-end.lg:justify-between.gap-5.mb-10   [HEADER — wrap in Reveal y=20]
   │  ├─ div.max-w-3xl
   │  │  ├─ p.text-sm.uppercase.tracking-[0.22em].text-[#1B4D3E].font-semibold.mb-3  "FAQ"
   │  │  ├─ h2#featured-faq-heading.text-3xl.md:text-4xl.font-bold.text-[#1A1A2E].mb-4  "Questions International Patients Ask First"
   │  │  └─ p.text-gray-600.leading-relaxed  [intro]
   │  └─ a.inline-flex.items-center.gap-2.text-[#1B4D3E].font-semibold.hover:text-[#7CB342].transition-colors (→ /faq)
   │     "Read all 72 FAQs" + ArrowRight 18px
   └─ div.grid.grid-cols-1.md:grid-cols-2.gap-4   [10 cards — wrap each in Reveal y=12]
      └─ a.group.border.border-gray-200.rounded-lg.p-5.hover:border-[#7CB342].hover:shadow-md.transition-all.bg-[#FBFCFC] (→ /faq#faq-N)
         └─ div.flex.items-start.gap-3
            ├─ HelpCircle icon 20px class="text-[#1B4D3E] mt-0.5 flex-shrink-0"
            └─ div
               ├─ h3.font-semibold.text-[#1A1A2E].leading-relaxed.group-hover:text-[#1B4D3E]  [question]
               └─ p.mt-2.text-sm.text-gray-600.line-clamp-2  [answer, clamped to 2 lines]
```

## FAQ items (10) — verbatim Q&A
1. **When should I consider cross-border medical care?** — You may consider cross-border care when local specialist access is limited, waiting times are long, treatment results are unsatisfactory, costs are too high, or you want a second medical opinion. It is not the default choice for every patient, but it can give some families more options, resources, and coordinated support. (→ faq-1)
2. **Is MedKungfu a hospital? Does it provide diagnosis or treatment directly?** — No. MedKungfu is not a hospital and does not directly provide diagnosis or treatment. We are a cross-border medical resource and service coordination provider, helping with record organization, translation, hospital matching, appointment coordination, visa and accommodation support, medical interpretation, escort, and follow-up communication. Diagnosis and treatment are provided by hospitals and specialists. (→ faq-5)
3. **Can MedKungfu first help me judge whether coming to China is worthwhile?** — Yes. Patients can submit basic information, medical records, test reports, and imaging. MedKungfu can organize the information and suggest an initial pathway based on available resources. If the materials suggest that travel to China is not suitable, the judgment of medical institutions and specialists should come first. (→ faq-7)
4. **What medical records and test materials should I prepare?** — Usually you should prepare diagnosis records, previous treatment notes, medication history, surgery records, imaging files, lab reports, pathology reports, and a summary of current symptoms and treatment goals. More complete materials help doctors assess faster. If records are incomplete, MedKungfu can first consult and list what to supplement. (→ faq-8)
5. **How are costs and timelines for treatment in China estimated?** — Costs and timelines depend on disease complexity, tests, treatment plan, hospital choice, admission arrangements, service package, accommodation, transport, and follow-up period. MedKungfu can help create an initial estimate, but final costs and timelines depend on the hospital plan, actual treatment, and service agreement. (→ faq-10)
6. **How will my medical records and privacy be protected?** — Medical records, imaging, and identity information are sensitive and should only be used for medical resource matching, hospital assessment, and service communication. Before submitting materials, patients should confirm the service entity, purpose of use, sharing scope, and privacy protections. MedKungfu follows a minimum-necessary principle. (→ faq-11)
7. **Can I continue follow-up after returning home?** — Remote follow-up coordination may be arranged according to the service package and hospital plan. Common support includes review reminders, recovery updates, test report transfer, doctor communication, and explanation of later recommendations. Follow-up does not replace emergency care or routine management by local doctors. (→ faq-12)
8. **Will MedKungfu match hospitals and specialists?** — Yes. MedKungfu helps match suitable hospitals, specialties, or partner institutions based on condition, treatment goals, budget, timing, language needs, and service needs. Final diagnosis and treatment plans are determined by medical institutions and specialists. (→ faq-26)
9. **What service packages does MedKungfu offer?** — Current materials include light, standard, advanced, and VIP service packages. Different packages correspond to different service depth, escort frequency, translation support, accommodation assistance, review arrangements, and follow-up duration. (→ faq-35)
10. **Which hospitals does MedKungfu work with?** — MedKungFu has established partnerships with many renowned Chinese hospitals, including Ruijin Hospital Hainan, Sun Yat-sen Memorial Hospital, Longhua Hospital affiliated with Shanghai University of TCM, Shanghai Guanghua Hospital of Integrated Traditional Chinese and Western Medicine, Shanghai Jiahui International Hospital, and GoBroad Healthcare Group. Available resources vary by condition, schedule, and service capacity. (→ faq-38)

## Computed Styles
- Section: `padding-block:96px; bg:#fff`
- Eyebrow "FAQ": `14px/600; uppercase; letter-spacing:0.22em; color:#1B4D3E; margin-bottom:12px`
- h2: `36px (md:40px)/700 Montserrat; color:#1A1A2E; margin-bottom:16px`
- Intro: `16px/400; color:#4B5563; leading-relaxed`
- Read all link: `16px/600; color:#1B4D3E; hover:#7CB342`
- Card: `bg:#FBFCFC; border:1px solid #E5E7EB (gray-200); radius:8px; padding:20px; hover:border:#7CB342 + shadow-md; transition:all .3s`
- Icon: `20px; color:#1B4D3E; margin-top:2px; flex-shrink:0`
- Question: `16px/600 Montserrat; color:#1A1A2E; leading-relaxed; hover→#1B4D3E`
- Answer: `14px/400; color:#4B5563; line-clamp-2`

## Text Content (verbatim)
- FAQ / Questions International Patients Ask First / Understand service boundaries, record preparation, hospital matching, costs, timelines, and follow-up before deciding whether to start a China medical assessment.
- Read all 72 FAQs
- (10 Q&A as above)

## Responsive Behavior
- Desktop/tablet: 2-col grid. Mobile: 1-col.

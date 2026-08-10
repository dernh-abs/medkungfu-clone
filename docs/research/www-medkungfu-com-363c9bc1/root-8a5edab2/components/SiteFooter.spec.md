# SiteFooter Specification

## Overview
- **Target file:** `src/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/SiteFooter.tsx`
- **Screenshot:** `docs/design-references/www-medkungfu-com-363c9bc1/root-8a5edab2/fullpage-desktop-1440.png` (bottom)
- **Interaction model:** static (link hover states)

## DOM Structure
```
<footer class="bg-[#1B4D3E] text-white">
└─ div.container-custom.px-4.py-16
   └─ div.grid.grid-cols-1.md:grid-cols-2.lg:grid-cols-4.gap-12
      ├─ div.lg:col-span-1   [BRAND COLUMN]
      │  ├─ a.inline-block.mb-6 (→ /)
      │  │  ├─ span.text-2xl.font-bold.font-montserrat.tracking-wide  "MedKungfu"
      │  │  └─ span.text-[10px].tracking-[0.2em].text-white/70.block.-mt-1  "HEALTHCARE · CONCIERGE"
      │  ├─ p.text-white/70.text-sm.leading-relaxed.mb-6  [description]
      │  └─ div.flex.gap-4   [SOCIAL]
      │     └─ a.w-10.h-10.rounded-full.bg-white/10.flex.items-center.justify-center.hover:bg-[#7CB342].transition-colors.duration-300 (aria-label)  [icon 20px]
      │        (Facebook / Twitter / LinkedIn / Instagram — use FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon from shared icons)
      ├─ div   [QUICK LINKS]
      │  ├─ h4.font-semibold.text-lg.mb-6  "Quick Links"
      │  └─ ul.space-y-3
      │     └─ li → a.text-white/70.hover:text-[#7CB342].transition-colors.duration-300.text-sm.flex.items-center.gap-2.group
      │        [ArrowRight 14px opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300]  [label]
      │        links: Medical Projects(/projects) Our Services(/services) Partner Hospitals(/hospitals) Patient Stories(/stories) Why China Medical(/why-china)
      ├─ div   [SUPPORT]
      │  ├─ h4.font-semibold.text-lg.mb-6  "Support"
      │  └─ ul.space-y-3 (same link pattern)
      │     links: FAQ(/faq) Resources(/resources) About Us(/about) Contact(/contact) Privacy Policy(/privacy) Terms of Service(/terms)
      └─ div   [CONTACT US]
         ├─ h4.font-semibold.text-lg.mb-6  "Contact Us"
         └─ ul.space-y-4
            ├─ li.flex.items-start.gap-3
            │  ├─ Mail icon 18px text-[#7CB342] mt-0.5 flex-shrink-0
            │  └─ div: p.text-sm.text-white/50.mb-1 "Email" + a.text-white.hover:text-[#7CB342] (mailto:contact@medkungfu.com) "contact@medkungfu.com"
            ├─ li (Phone icon) → "WhatsApp" + a (https://wa.me/16462968491) "+1- 646-296-8491"
            └─ li (MapPin icon) → "Office" + p.text-white/70.text-sm "Shanghai, China<br><span class='text-white/50'>Serving patients across 6 major cities</span>"
└─ div.border-t.border-white/10
   └─ div.container-custom.px-4.py-6
      └─ div.grid.grid-cols-1.lg:grid-cols-2.gap-5.text-xs.leading-relaxed.text-white/60
         ├─ p  [Medical notice]
         └─ p  [Entity note]
└─ div.border-t.border-white/10
   └─ div.container-custom.px-4.py-6
      └─ div.flex.flex-col.md:flex-row.items-center.justify-between.gap-4
         ├─ p.text-white/50.text-sm  "© 2026 MedKungFu. All rights reserved."
         └─ div.flex.items-center.gap-6
            ├─ a.text-white/50.hover:text-white.text-sm (→ /privacy) "Privacy Policy"
            ├─ a (→ /terms) "Terms of Service"
            └─ a (→ /refund) "Refund Policy"
```

## Computed Styles
- Footer: `background:#1B4D3E; color:#fff`
- Brand logo: 24px/700 Montserrat white; tagline 10px, ls 0.2em, `rgba(255,255,255,0.7)`
- Column heading h4: `18px/600; color:#fff; margin-bottom:24px`
- Links: `14px/400; color:rgba(255,255,255,0.7); hover:#7CB342` — with 14px ArrowRight icon that is `opacity:0; margin-left:-16px` and slides in on hover (`opacity:100; margin-left:0`)
- Social: `40×40px; radius:9999px; bg:rgba(255,255,255,0.1); hover:bg:#7CB342; transition:background .3s`
- Contact labels: `14px; color:rgba(255,255,255,0.5); margin-bottom:4px`; values `color:#fff; hover:#7CB342`
- Notice text: `12px/400; color:rgba(255,255,255,0.6); leading-relaxed`
- Legal row: `14px; color:rgba(255,255,255,0.5); hover:white`

## Text Content (verbatim)
- MedKungfu / HEALTHCARE · CONCIERGE
- Your trusted healthcare concierge in China. Connecting global patients with top-tier medical resources through personalized, professional service.
- Quick Links: Medical Projects, Our Services, Partner Hospitals, Patient Stories, Why China Medical
- Support: FAQ, Resources, About Us, Contact, Privacy Policy, Terms of Service
- Contact Us: Email contact@medkungfu.com · WhatsApp +1- 646-296-8491 · Office Shanghai, China / Serving patients across 6 major cities
- Medical notice: MedKungfu provides cross-border medical resource recommendation, record organization, process coordination, interpretation, escort, visa and accommodation support, and follow-up assistance. It does not directly provide diagnosis, treatment, or outcome guarantees. Diagnosis, treatment plans, indications, risks, costs, and timelines are subject to final assessment by medical institutions and specialists.
- Entity note: MedKungFu's corporate entity is MEDTECH CHINA LIMITED. The contracting entity, payment entity, service responsibilities, and refund rules are subject to formal agreements, payment documents, and official statements.
- © 2026 MedKungFu. All rights reserved. · Privacy Policy · Terms of Service · Refund Policy

## Responsive Behavior
- Desktop: 4-col grid (brand 1-col). Tablet (md): 2-col. Mobile: 1-col.
- Legal/notice rows stack (lg:grid-cols-2). Bottom bar column → row at md.

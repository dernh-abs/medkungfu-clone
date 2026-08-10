# CTASection Specification

## Overview
- **Target file:** `src/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/CTASection.tsx`
- **Screenshot:** `docs/design-references/www-medkungfu-com-363c9bc1/root-8a5edab2/fullpage-desktop-1440.png`
- **Interaction model:** form (client component — controlled inputs, submit handler with loading state)
- **Section:** `Start Your Medical Journey` — gradient green, white text.

## DOM Structure
```
<section aria-labelledby="cta-heading" class="py-20 bg-gradient-to-r from-[#1B4D3E] to-[#2E7D5A] text-white">
└─ div.container-custom.text-center
   ├─ h2#cta-heading.text-3xl.md:text-4xl.font-bold.mb-12   [wrap in Reveal y=20]  "Start Your Medical Journey"
   └─ form.max-w-4xl.mx-auto.text-left  [wrap in Reveal y=20; must be "use client"]
      ├─ fieldset.grid.grid-cols-1.md:grid-cols-2.gap-6.border-0.p-0.m-0
      │  ├─ div  [Name]
      │  │  ├─ label.sr-only htmlFor=name  "Name"
      │  │  └─ input#name(type=text, name=name, placeholder="Name", required)
      │  │     class="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white w-full"
      │  ├─ div  [Email / WhatsApp]
      │  │  └─ input#contact(type=text, name=contact, placeholder="Email / WhatsApp", required) [same classes]
      │  ├─ div  [Area of Interest]
      │  │  └─ select#interest_area(name=interest_area, required)
      │  │     class="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white appearance-none cursor-pointer w-full"
      │  │     options: (disabled placeholder "Area of Interest") Oncology / Cardiology / Orthopedics / Regenerative Medicine / Integrative Medicine / Others
      │  └─ div  [Message]
      │     └─ textarea#message(name=message, rows=4, placeholder="Please describe your medical needs or questions in detail...")
      │        class="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white w-full resize-none"
      └─ div.mt-8
         └─ button(type=submit)
            class="w-full md:w-auto px-12 py-4 bg-white text-[#1B4D3E] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            "Submit Inquiry"
```

## Computed Styles
- Section: `padding-block:80px; background:linear-gradient(to right,#1B4D3E,#2E7D5A); color:#fff; text-align:center`
- h2: `36px (md:40px)/700 Montserrat; color:#fff; margin-bottom:48px`
- Inputs: `bg:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); radius:8px; padding:16px 24px; color:#fff; placeholder:rgba(255,255,255,0.6); focus:border-color:#fff; outline:none; width:100%`
- Submit: `bg:#fff; color:#1B4D3E; font-weight:700; padding:16px 48px; radius:8px; box-shadow-lg; hover:bg:#f3f4f6; disabled:opacity:50`

## Behavior
- Submit: preventDefault → set submitting state (button disabled, text stays "Submit Inquiry"), simulate async (e.g. 800ms), then reset form / show success state (button text "Submitted ✓" optional).
- Native select on dark bg: options render with dark text in the dropdown (browser default).
- Validation: required fields; on submit with empty required, browser native validation triggers.

## Text Content (verbatim)
- Start Your Medical Journey
- Name / Email / WhatsApp / Area of Interest / Message
- Placeholder: "Please describe your medical needs or questions in detail..."
- Submit Inquiry
- Options: Oncology, Cardiology, Orthopedics, Regenerative Medicine, Integrative Medicine, Others

## Responsive Behavior
- Desktop: 2-col fieldset. Mobile: 1-col. Submit full-width on mobile, auto on md+.

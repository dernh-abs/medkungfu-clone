# MedKungFu /services Page Specification

**Source DOM:** `docs/research/www-medkungfu-com-363c9bc1/services-3b1aeccb/rendered.html` (verbatim content + exact classes)
**Route:** `src/app/services/page.tsx`
**Page wrapper:** `<main role="main" aria-label="Our Services" class="min-h-screen bg-[#F5F7FA] pt-10 pb-20">` + `container-custom`

## Sections (in order) + interaction models

### 1. Hero — static (Reveal on load)
- H1 "MedKungFu Services" (`text-4xl font-bold text-[#1A1A2E] mb-4`), subtitle (`text-gray-600 max-w-2xl mx-auto`)
- Reveal fade-up (translateY 20)

### 2. Service Offerings — 6 cards, scroll reveal
- `<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 list-none">`
- Card: `bg-white p-8 rounded-xl shadow-sm card-hover text-center` (Reveal)
  - Icon tile: `inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] mb-6` (32px icon)
  - H3 `text-xl font-bold mb-3 text-[#1A1A2E]`; P `text-gray-500 leading-relaxed`
- Data: [video] Expert Video Consultation / [calendar] Full-process Butler / [plane] Visa & Travel / [message-square] Translation & Escort / [home] Accommodation / [file-text] Rehabilitation Follow-up

### 3. Our Service Process — 7-phase timeline, scroll reveal
- White section `bg-white rounded-2xl p-10 shadow-sm mb-12`; H2 `text-3xl font-bold mb-4` + subtitle
- Timeline: center gradient line (md) + left line (mobile). `<ol class="space-y-8">`
- Each `<li>` alternates `md:flex-row` / `md:flex-row-reverse`, Reveal translateY(30)
  - Phase pill: `inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] font-semibold text-sm` → "Phase N"
  - Center node: `w-12 h-12 rounded-full bg-[#1B4D3E] text-white ... shadow-lg` (28px icon, desktop only) + mobile 10x10 circle in h3
  - Article: `bg-[#F5F7FA] rounded-xl p-6 hover:shadow-md transition-shadow`; H3 title; `<ul class="space-y-3">` steps: `check-circle text-[#1B4D3E]` 18px icon + `<span class="font-semibold text-[#1A1A2E] text-sm">title</span>` + `<p class="text-gray-500 text-sm">desc</p>`
- Phase icons: phone / stethoscope / file-signature / briefcase / map-pin / heart-pulse / clipboard-check
- Phases data: (1) Inquiry & Initial Consultation [Remote Consultation, Medical Records Collection & Translation]; (2) Medical Resource Matching & Remote Assessment [Precision Hospital Matching, Expert Remote Video Assessment, Written Treatment Recommendation Report]; (3) Service Agreement & Appointment Scheduling [Service Agreement Signing, Priority Hospital Appointment]; (4) Pre-departure Preparation [Visa Application Assistance, Travel Arrangements]; (5) Arrival in China & Hospital Admission [Airport Pickup Service, Exclusive Hospital Admission Channel]; (6) Examination & Treatment [Pre-treatment Examinations, Treatment Implementation, Personalized Support During Hospitalization]; (7) Discharge & Follow-up Management [Discharge & Return Journey, Remote Follow-up]

### 4. Why Choose Us? — 9 items, scroll reveal
- White section; H2 `text-2xl font-bold mb-10 text-center text-[#1A1A2E]`
- `<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`
- Item: `flex items-start space-x-4 p-4 bg-[#F5F7FA] rounded-lg` (Reveal translateY 20)
  - Icon box: `p-2 bg-[#1B4D3E]/10 text-[#1B4D3E] rounded-lg` (24px icon)
  - H4 `font-bold text-[#1A1A2E] mb-1`; P `text-sm text-gray-600`
- Data (9): shield-Compliance Operation / check-circle-Direct Hospital Connection / award-Service Stratification / globe-Full Bilingual Support / clock-Extremely Fast Scheduling / check-circle-Strict Quality Inspection / shield-Transparent Pricing / check-circle-Risk Transparency / calendar-Long-term Follow-up

### 5. Refund Policy — 5 rows, scroll reveal
- White section; H2 `text-2xl font-bold mb-8 text-center`
- `<dl class="grid grid-cols-1 md:grid-cols-2 gap-8">`; card: `p-6 bg-[#F5F7FA] rounded-xl` (Reveal translateX ±20 alternating)
  - `check-circle text-[#1B4D3E]` 20px + `dt class="text-gray-700 text-sm mb-1"` scenario + `dd class="font-semibold text-[#1B4D3E]"` result
- Data (5): Full refund: "Unable to match suitable hospital within agreed timeframe" / "Expert assessment deems treatment unsuitable" / "Visa rejected (complete documents, non-patient fault)"; Proportional: "Patient voluntarily withdraws (different stages)" / "Treatment discontinued by medical advice"

### 6. Payment Methods — 3 cards, scroll reveal scale
- H2 `text-2xl font-bold mb-8 text-center`; `<ul class="grid grid-cols-1 md:grid-cols-3 gap-6">`
- Card: `bg-white p-8 rounded-xl shadow-sm text-center card-hover` (Reveal scale 0.95)
  - Icon tile 64px circle (32px icon) + H3 `text-lg font-bold mb-2` + P `text-gray-500 text-sm`
- Data: credit-card-International Credit Card-"Visa / Mastercard" / refresh-cw-Bank Transfer-"Wire transfer to HK account" / shield-Secure Payment-"Encrypted transactions"

## Shared foundation
- `SiteHeader`/`SiteFooter` from `shared/`; `Reveal` from `shared/Reveal` (x-prop supported); icons from `shared/icons` (`Icons.video`, `Icons.messageSquare`, `Icons.fileSignature`, `Icons.briefcase`, `Icons.creditCard`, `Icons.refreshCw` were added).
- All brand colors match existing tokens (#F5F7FA bg, #1A1A2E text, #1B4D3E brand).

## Assets
- No images/videos. Inline lucide SVGs only.

## Responsive
- Offerings: 3→2→1 cols (lg/md/base). Process: desktop alternating 2-col timeline; mobile single-col with left line. WhyChoose: 3→2→1. Refund: 2→1. Payments: 3→1.

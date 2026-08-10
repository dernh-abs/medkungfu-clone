# MedKungFu /why-china Page Specification

**Source DOM:** `docs/research/www-medkungfu-com-363c9bc1/why-china-beb2e389/rendered.html`
**Route:** `src/app/why-china/page.tsx`

## Structure
- `<main role="main" aria-label="Why Choose China for Medical Treatment" class="min-h-screen bg-[#F5F7FA] pt-10 pb-20">` + `container-custom`
- Hero (Reveal): H1 "Why Choose China Medical?" (`text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-6`) + subtitle (`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed`)
- **Core Advantages** section (`mb-16`): H2 `text-3xl font-bold text-center mb-12 text-[#1A1A2E]` + `<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">`
  - Card: `bg-white rounded-2xl shadow-sm p-8 card-hover` (Reveal)
    - Icon: `inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] mb-6` (40px icon)
    - H3 `text-xl font-bold mb-4 text-[#1A1A2E]`; P `text-gray-600 leading-relaxed`
- **Distinctive Features** section (`bg-[#1B4D3E] rounded-2xl p-10 md:p-16 mb-16`): H2 white `text-3xl font-bold text-center mb-12 text-white` + `<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">`
  - Item: `text-center` (Reveal)
    - Icon: `inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 text-white mb-5` (28px icon)
    - H3 `text-lg font-bold mb-3 text-white`; P `text-white/80 text-sm leading-relaxed`
- **CTA** section (`text-center bg-white rounded-2xl shadow-sm p-10`): H2 `text-2xl font-bold text-[#1A1A2E] mb-4` + P + `<a href="/contact" class="inline-flex items-center justify-center gap-2 bg-[#1B4D3E] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#143D30] transition-all duration-300">Start Your Medical Journey</a>`

## Data

### Core Advantages (6)
1. award — **World-Class Medical Technology** — "China leads globally in advanced treatments including Heavy Ion/Proton therapy with 54 specialized centers, CAR-T cell therapy with 40%+ of global clinical trials, and 76 new drugs approved in 2025 ranking #1 worldwide."
2. clock — **Exceptional Efficiency** — "No long waiting times. Joint replacement surgery can be completed in about 1 month, compared to 6-12 months in many Western countries."
3. heart-pulse — **Comprehensive Care System** — "The world's only complete Integrative Medicine system combining modern technology with traditional Chinese medicine wisdom for holistic treatment."
4. microscope — **Cutting-Edge Innovation** — "Leading in Stem Cell therapy with 100+ registered institutions and Interventional Therapy at global leadership level."
5. globe — **International Standards** — "Dozens of international medical service hospitals with JCI accreditation and standardized processes meeting global healthcare standards."
6. plane — **Medical Tourism Friendly** — "Hainan offers visa-free entry for medical reasons with 30-day stay permitted, making access convenient for international patients."

### Distinctive Features (4)
1. stethoscope — **Expert Medical Teams** — "Highly skilled doctors trained in both domestic and international institutions"
2. building2 — **Modern Facilities** — "State-of-the-art hospitals equipped with the latest medical technology"
3. leaf — **Holistic Approach** — "Integration of TCM and Western medicine for comprehensive treatment"
4. zap — **Rapid Innovation** — "Fast adoption of breakthrough treatments and medical technologies"

### CTA
- H2 "Ready to Experience World-Class Healthcare?" — "Let us guide you through China's exceptional medical system with personalized concierge service tailored to your unique healthcare needs." — button "Start Your Medical Journey" → /contact

## Interactions
- Scroll reveal: Core Advantage cards (translateY 20), Distinctive Feature items (translateY 20), CTA section (translateY 20).
- Hover: card-hover lift on advantage cards; CTA button hover bg-[#143D30].

## Icons
award, clock, heart-pulse, microscope, globe, plane, stethoscope, building2(=building), leaf, zap — all in shared map.

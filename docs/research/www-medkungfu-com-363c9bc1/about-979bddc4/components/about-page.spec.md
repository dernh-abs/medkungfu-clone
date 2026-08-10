# MedKungFu /about Page Specification

**Source DOM:** `docs/research/www-medkungfu-com-363c9bc1/about-979bddc4/rendered.html`
**Route:** `src/app/about/page.tsx`

## Structure
- `<main role="main" aria-label="About MedKungFu" class="min-h-screen bg-[#F5F7FA] pt-10 pb-20">` + `container-custom`
- Hero (Reveal): H1 "About MedKungFu" (`text-4xl font-bold text-[#1A1A2E] mb-8`) + white article (`bg-white rounded-2xl shadow-sm p-8 md:p-12 max-w-4xl mx-auto`):
  - **Who We Are** section: h2 `text-xl font-semibold text-[#1B4D3E] mb-4 flex items-center justify-center` with line `w-8 h-1 bg-[#1B4D3E] rounded mr-3` + title + line ml-3; P `text-gray-600 leading-relaxed text-lg`
  - **Our Commitment** section (`border-t border-gray-100 pt-8 mt-8`): same h2 pattern + P
- **Mission and Core Services** (`grid grid-cols-1 md:grid-cols-2 gap-8 mb-20`, sr-only h2):
  - Our Mission: `bg-white p-10 rounded-2xl shadow-sm`, h3 `text-2xl font-bold text-[#1B4D3E] mb-4` + P
  - Core Services: `bg-[#1B4D3E] p-10 rounded-2xl shadow-sm text-white`, h3 `text-2xl font-bold mb-4` + `<ul class="space-y-3">` 4 items (`flex items-center`, dot `w-2 h-2 bg-[#7CB342] rounded-full mr-3`)
- **Our Values** (`mb-20`): H2 `text-3xl font-bold text-center mb-12 text-[#1A1A2E]` + `<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">` 4 cards (Reveal y20, card-hover):
  - Card: `bg-white p-8 rounded-xl shadow-sm text-center` → icon `w-16 h-16 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E]` (32px) + h3 `text-lg font-bold mb-2` + P `text-gray-500 text-sm`
- **Our Expert Team** (`bg-white rounded-2xl p-10 shadow-sm`): H2 `text-2xl font-bold text-center mb-10` + `<dl class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">` 3 (dt `font-bold text-[#1A1A2E] mb-2`, dd `text-sm text-gray-500`)

## Data
- Who We Are: "MedKungFu China is a specialized international medical placement service dedicated to connecting global patients with China's world-class healthcare system. We serve as a reliable bridge between international patients and China's top-tier medical institutions."
- Our Commitment: "From visa assistance to post-treatment rehabilitation care, we handle every detail of your medical journey—allowing you to focus solely on what matters most: your recovery. We understand that seeking medical care abroad can be filled with uncertainty and stress. That's precisely why we've built a seamless, end-to-end service covering every aspect of your medical journey. From initial consultation to post-treatment remote follow-up, our multilingual team ensures you not only receive quality medical solutions but also experience empathetic, efficient, and culturally sensitive support throughout your entire journey."
- Our Mission: "To share China's cutting-edge medical achievements with the world, making quality healthcare accessible across borders."
- Core Services (4): International Precision Referral: Matching you with the most suitable hospitals and specialists / Telemedicine Second Opinion: Accessing assessments from China's top doctors without leaving home / One-stop Medical Accompaniment: Dedicated multilingual support from arrival to discharge / Full-cycle Health Management: Continuous care covering pre-treatment, during treatment, and post-treatment
- Values (4): shield-Transparency-"Clear pricing and honest communication." / award-Professionalism-"Expert medical teams with global standards." / heart-Compassion-"Treating every patient with warmth and care." / globe-Responsibility-"Bridging borders for better health outcomes."
- Team (3): Medical Advisors-"Experts from top-tier Chinese hospitals" / Operations Team-"Rich experience in cross-border healthcare" / Multilingual Support-"Professional medical translators"

## Interactions
- Values cards: card-hover lift + Reveal translateY 20.

## Icons
shield, award, heart, globe — all in shared map.

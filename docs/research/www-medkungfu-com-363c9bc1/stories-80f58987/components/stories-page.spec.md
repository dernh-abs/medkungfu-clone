# MedKungFu /stories Page Specification

**Source DOM:** `docs/research/www-medkungfu-com-363c9bc1/stories-80f58987/rendered.html`
**Route:** `src/app/stories/page.tsx`
**Images:** `public/sites/www-medkungfu-com-363c9bc1/shared/images/story-ahmad.jpg`, `story-sarah.jpg`

## Structure
- `<main role="main" aria-label="Patient Stories and Testimonials" class="min-h-screen bg-[#F5F7FA] pt-10 pb-20">` + `container-custom`
- Hero (Reveal): H1 "Patient Stories" (`text-4xl font-bold text-[#1A1A2E] mb-4`) + subtitle "Real experiences from patients who found hope and healing through MedKungFu." (`text-gray-600 max-w-2xl mx-auto`)
- `<div class="grid grid-cols-1 lg:grid-cols-2 gap-10">` with 2 story cards
- **Story card** (`bg-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row gap-6`):
  - Image container: `relative w-full md:w-48 h-48 rounded-xl overflow-hidden flex-shrink-0` → img `w-full h-full object-cover` + `absolute inset-0 bg-black/30 flex items-center justify-center` + play-circle 48px white icon
  - Content (`flex-grow`):
    - Row: region badge `bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-bold px-2 py-1 rounded` + age `text-gray-400 text-sm`
    - H3 name `text-xl font-bold text-[#1A1A2E] mb-1`
    - P condition `text-sm text-gray-500 mb-4` ("Localized Prostate Cancer • Heavy Ion Therapy")
    - Quote: `relative` div → quote icon `absolute -top-2 -left-2 text-[#1B4D3E]/20` 24px + `<p class="text-gray-700 italic pl-6 border-l-2 border-[#1B4D3E]/30">"..."`

## Data
1. **Mr. Ahmad** — Middle East / 55 years old — "Localized Prostate Cancer • Heavy Ion Therapy" — "The entire process was seamless. MedKungFu handled everything from my visa to my hospital appointments." — story-ahmad.jpg
2. **Ms. Sarah** — Southeast Asia / 42 years old — "Recurrent Lymphoma • CAR-T Cell Therapy" — "I was given a second chance at life. The technology here is truly world-class." — story-sarah.jpg

## Interaction
- Static cards (no hover lift in source). Reveal on the hero. Cards have `opacity:1` in capture (Reveal-wrapped but revealed). Play-circle is decorative (no video).

## Icons
play-circle (added), quote (existing).

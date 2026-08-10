# MedKungFu /resources Page Specification

**Source DOM:** `docs/research/www-medkungfu-com-363c9bc1/resources-b4967042/rendered.html`
**Route:** `src/app/resources/page.tsx`

## Structure
- `<main role="main" aria-label="Resources and Information" class="min-h-screen bg-[#F5F7FA] pt-10 pb-20">` + `container-custom`
- Hero (Reveal): H1 "Resource Center" (`text-4xl font-bold text-[#1A1A2E] mb-4`) + subtitle (`text-gray-600 max-w-2xl mx-auto`)
- `<div class="grid grid-cols-1 md:grid-cols-3 gap-8">` — 3 resource cards
- **Card** (`bg-white rounded-xl p-8 shadow-sm card-hover`):
  - Header: `<div class="flex items-center space-x-3 mb-6">` → icon box `p-3 bg-[#1B4D3E]/10 text-[#1B4D3E] rounded-lg` (24px icon) + H2 `text-xl font-bold text-[#1A1A2E]`
  - List `<ul class="space-y-4">` of items: `<li class="group cursor-pointer">` → download icon (18px gray-400 group-hover:text-[#1B4D3E]) + span (`text-gray-600 group-hover:text-[#1B4D3E] transition-colors text-sm leading-relaxed`)

## Data

### Medical Guides (book-open icon)
1. "Heavy Ion Therapy: A New Weapon Against Tumors"
2. "CAR-T Treatment: Hope for Blood Cancer Patients"
3. "Stem Cell Therapy: Scientific Boundaries and Compliance"

### Practical Tools (file-text icon)
1. "Medical Record Preparation Checklist (Multi-language)"
2. "China Medical Visa Application Guide"
3. "Post-surgery Rehabilitation Precautions"

### City Guides (map icon)
1. "Shanghai: Hospital Transport & Accommodation"
2. "Beijing: International Patient Services"
3. "Guangzhou: TCM Integration Centers"

## Interactions
- Cards: card-hover lift. Items: group-hover icon/text color → #1B4D3E. Items are `cursor-pointer` but have no links in the source (decorative download rows).

## Icons
book-open, download, file-text, map — all in shared map.

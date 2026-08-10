# MedKungFu /faq Page Specification

**Source DOM:** `docs/research/www-medkungfu-com-363c9bc1/faq-1965ee0f/rendered.html`
**Data:** `src/components/sites/www-medkungfu-com-363c9bc1/faq-1965ee0f/faq-data.ts` (72 Q&A + 10 categories, verbatim enQuestion/enAnswer)
**Route:** `src/app/faq/page.tsx`
**Note:** This page has NO nested `<main role="main">` — the outer `<main class="flex-grow pt-[72px]">` directly contains the content sections.

## Structure (INTERACTION MODEL: click-driven category filter + click-driven accordion)

1. **Hero**: `<section class="relative overflow-hidden bg-[#123D32] text-white">`
   - Radial gradient overlay: `absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,179,66,0.25),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.12),transparent_28%)]`
   - `container-custom relative py-16 md:py-20` → `max-w-4xl`:
     - Eyebrow: `text-sm uppercase tracking-[0.22em] text-[#9CCC65] mb-4` "MedKungfu Knowledge Base"
     - H1: `text-3xl md:text-5xl font-bold leading-tight mb-5` "Frequently Asked Questions About Medical Care in China"
     - P: `text-white/80 text-base md:text-lg leading-relaxed max-w-3xl`
2. **Main**: `<section class="container-custom py-10">` → `<div class="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-8 items-start">`
   - **Sidebar** `<aside class="lg:sticky lg:top-24 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">`:
     - Header: file-text icon (18px #1B4D3E) + "Categories" (text-sm font-semibold)
     - `div class="space-y-2"` with 10 category buttons:
       - Active: `w-full text-left px-4 py-3 rounded-lg text-sm transition-all bg-[#1B4D3E] text-white shadow-md` + `<span class="block font-medium">{en}</span><span class="text-xs opacity-70">{count} Q&A</span>`
       - Inactive: `w-full text-left px-4 py-3 rounded-lg text-sm transition-all text-gray-700 hover:bg-[#EEF5F1] hover:text-[#1B4D3E]`
   - **Content** `div class="space-y-5"`:
     - Medical notice box: `bg-white border border-gray-100 rounded-xl p-5 md:p-6 shadow-sm` + alert-circle icon (20px #7CB342) + paragraph
     - Entity note box: `bg-white border border-blue-100 rounded-xl p-5 md:p-6 shadow-sm` + file-text icon (20px blue-600) + "Entity and Contract Note" h2 + paragraph
     - FAQ accordion `div class="space-y-4"` (Reveal-wrapped):
       - Article: `<article id="faq-N" class="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">`
         - Button: `w-full flex items-start gap-4 px-5 md:px-6 py-5 text-left hover:bg-[#FBFCFC] transition-colors` + `aria-expanded`
           - help-circle icon (22px #1B4D3E) + `<span class="flex-1 font-semibold text-[#1A1A2E] leading-relaxed">{question}</span>` + chevron-down (20px gray-400, `transition-transform` + `rotate-180` when open)
         - Answer wrapper (only when expanded): `<div style="height:auto; opacity:1"><div class="px-5 md:px-6 pb-6 pl-[58px] text-gray-700 leading-relaxed">{answer}</div></div>`

## Behaviors
- **Category click**: switches active category (bg-[#1B4D3E] text-white), FAQ list filters to that category's items.
- **Accordion click**: toggles item open/closed. First item of "Core Questions" (faq-1) is expanded on load. Chevron rotates 180°, answer expands (height animation).
- Category counts: core 12, brand 10, process 15, hospitals 7, costs 8, products 4, proctology 5, knee 5, beauty 3, cart 3 = 72.

## Data
72 items with {id, category, question (enQuestion), answer (enAnswer)}. Category ids: core, brand, process, hospitals, costs, products, proctology, knee, beauty, cart.

## Icons
file-text, alert-circle, help-circle, chevron-down — all in shared map.

# MedKungFu /privacy Page Specification

**Source DOM:** `docs/research/www-medkungfu-com-363c9bc1/privacy-0ece7f7c/rendered.html`
**Route:** `src/app/privacy/page.tsx`

## Structure
- `<main role="main" aria-label="Privacy Policy" class="min-h-screen bg-[#F5F7FA] pt-10 pb-20">` + `container-custom max-w-4xl mx-auto px-4 md:px-8`
- Hero: H1 `text-4xl font-bold text-[#1A1A2E] mb-4` "MedKungfu Privacy Policy" + P `text-gray-600` "Effective date: July 9, 2026 | Last updated: July 9, 2026"
- `<article class="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">` with 14 sections:
  - Intro section (no h2): P `text-gray-700 leading-relaxed`
  - Sections: h2 `text-2xl font-bold text-[#1B4D3E] mb-4` + P `text-gray-700 leading-relaxed` or `text-gray-700 mb-4` + UL `space-y-2/3 text-gray-700 list-disc pl-6` (li with `<strong>` labels) + links `text-[#1B4D3E] hover:underline`

## Data
14 numbered sections (verbatim from source). Mailto links: privacy@medkungfu.com, contact@medkungfu.com. Some placeholders in source: "[Full legal name of MedTech China Limited]", "[registered address]", "[name and contact]" — keep verbatim.

## Note
/terms and /refund return 404 on the live site (dead links in the footer). Only /privacy has real content.

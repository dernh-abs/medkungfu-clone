# TreatmentHighlightsSection Specification

## Overview
- **Target file:** `src/components/sites/www-medkungfu-com-363c9bc1/projects-902ceeb2/TreatmentHighlightsSection.tsx`
- **Screenshot:** `docs/design-references/www-medkungfu-com-363c9bc1/projects-902ceeb2/fullpage-desktop-1440.png` (bottom region)
- **Interaction model:** scroll-driven reveal (scale) — no hover effects on cards

## DOM Structure
```
<section aria-labelledby="highlights-heading" class="bg-white rounded-2xl p-10 shadow-sm">
  <h2 id="highlights-heading" class="text-2xl font-bold mb-10 text-center text-[#1A1A2E]">Treatment Highlights</h2>
  <ul class="grid grid-cols-1 md:grid-cols-2 gap-8 list-none" role="list">
    {4 × <li class="p-6 bg-[#F5F7FA] rounded-xl" (Reveal-wrapped, scale)>}
      <div class="flex items-center space-x-3 mb-4">
        <div class="p-3 bg-[#1B4D3E]/10 text-[#1B4D3E] rounded-lg" aria-hidden="true">
          <Icon (32x32)>
        </div>
        <h3 class="text-lg font-bold text-[#1A1A2E]">{title}</h3>
      </div>
      <ul class="space-y-2 text-sm text-gray-600 list-none" role="list">
        {N × <li>• {point}</li>}
      </ul>
    </li>
  </ul>
</section>
```

## Computed Styles (exact values from getComputedStyle)
### Section
- backgroundColor: #FFFFFF, padding: 40px (p-10), borderRadius: 16px (rounded-2xl), boxShadow: 0 1px 2px rgba(0,0,0,0.05) (shadow-sm)

### H2
- fontSize: 24px (text-2xl), fontWeight: 700, Montserrat, lineHeight: 32px, color: #1A1A2E, text-align: center, margin-bottom: 40px (mb-10)

### Grid ul
- display: grid, gridTemplateColumns: 552px 552px (2 cols at md+), gap: 32px

### Card li
- backgroundColor: #F5F7FA, padding: 24px (p-6), borderRadius: 12px (rounded-xl)

### Icon box div
- padding: 12px (p-3), backgroundColor: rgba(27,77,62,0.1) (bg-[#1B4D3E]/10), color: #1B4D3E, borderRadius: 8px (rounded-lg). Holds 32×32 icon.

### H3
- fontSize: 18px (text-lg), fontWeight: 700, Montserrat, lineHeight: 28px, color: #1A1A2E

### Title row div
- display: flex, alignItems: center, gap: 12px (space-x-3), margin-bottom: 16px (mb-4)

### Point list ul
- space-y-2 → 8px vertical gap between items

### Point li
- fontSize: 14px (text-sm), lineHeight: 20px, color: gray-600 #4B5563
- Bullet is the literal text "• " prefix (matches source)

## States & Behaviors
### Scroll reveal (scale)
- Each card wrapped in `Reveal` with `scale={0.95}` (no y-slide). Start opacity 0 + transform scale(0.95) → opacity 1 / transform none.
- Observed: transition `all` on the element; Reveal's inline `opacity 0.3s ease, transform 0.3s ease` is acceptable — visual start/end states match exactly.
- Threshold ~0.15, triggers once on scroll into view.

## Data (verbatim from live site)
1. Heavy Ion/Proton Therapy | icon activity | points:
   - "1/3 of US cost"
   - "54 centers, no months waiting"
   - "90%+ 5-year local control rate for pancreatic cancer"
2. CAR-T Cell Therapy | icon dna | points:
   - "1/5 to 1/8 of US cost"
   - "#1 in clinical trials globally"
   - "Significantly improved patient survival"
3. BNCT Boron Neutron Capture Therapy | icon scan | points:
   - "Targeted radiation for refractory tumors"
   - "Advanced neutron beam technology"
4. Stem Cell Regenerative Therapy | icon sparkles | points:
   - "First functional cure for Type 1 diabetes globally"
   - "About 1/10 of US cost"

## Icons used
`Icons.activity`, `Icons.dna`, `Icons.scan`, `Icons.sparkles` from `../shared/icons`. Icon renders at 32×32.

## Responsive Behavior
- **Desktop (1440px):** 2 columns (552px each), gap 32px
- **Tablet (768px):** 2 columns (md:grid-cols-2)
- **Mobile (390px):** 1 column (grid-cols-1 below md/768px)
- **Breakpoint:** switches to 2 cols at md (768px)

## Implementation notes
- Client component (uses Reveal).
- Use `<li>` inside `<ul>`; wrap each `<li>` in `<Reveal className="flex" scale={0.95}>` so grid children stretch.
- Render bullet as "• {point}" literal text.

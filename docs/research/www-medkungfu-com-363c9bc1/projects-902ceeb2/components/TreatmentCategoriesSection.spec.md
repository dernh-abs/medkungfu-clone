# TreatmentCategoriesSection Specification

## Overview
- **Target file:** `src/components/sites/www-medkungfu-com-363c9bc1/projects-902ceeb2/TreatmentCategoriesSection.tsx`
- **Screenshot:** `docs/design-references/www-medkungfu-com-363c9bc1/projects-902ceeb2/fullpage-desktop-1440.png` (middle region)
- **Interaction model:** scroll-driven reveal (IntersectionObserver) + hover lift + hover underline

## DOM Structure
```
<section aria-labelledby="categories-heading">
  <h2 id="categories-heading" class="sr-only">Treatment Categories</h2>
  <ul class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 list-none" role="list">
    {6 × <li class="bg-white rounded-2xl p-8 shadow-sm card-hover" (Reveal-wrapped)>}
      <div class="w-20 h-20 rounded-xl {iconColor} {iconBg} flex items-center justify-center mb-6" aria-hidden="true">
        <Icon (48x48)>
      </div>
      <h3 class="text-2xl font-bold text-[#1A1A2E] mb-1">{title}</h3>
      <p class="text-sm text-gray-400 mb-3">{zhLabel}</p>
      <p class="text-gray-500 mb-6">{description}</p>
      <ul class="space-y-3 list-none" role="list">
        {N × <li class="flex items-center text-gray-700">
          <div class="w-1.5 h-1.5 rounded-full bg-[#1B4D3E] mr-3" aria-hidden="true"></div>
          {link ? <a class="text-[#1B4D3E] hover:text-[#2E7D5A] hover:underline transition-colors" href={href}>{label}</a>
                 : <span>{label}</span>}
        </li>}
      </ul>
    </li>
  </ul>
</section>
```

## Computed Styles (exact values from getComputedStyle)
### Section
- No padding; relies on grid's mb-20 (80px) below. Parent container provides spacing.

### Grid ul
- display: grid, gridTemplateColumns: 592px 592px (2 cols at lg+), gap: 32px, margin-bottom: 80px (mb-20)

### Category card li
- backgroundColor: #FFFFFF, padding: 32px, borderRadius: 16px (rounded-2xl)
- boxShadow: 0 1px 2px rgba(0,0,0,0.05) (shadow-sm)
- transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) (card-hover)
- Hover: translateY(-4px), boxShadow 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)

### Icon tile div
- width/height: 80px (w-20 h-20), borderRadius: 12px (rounded-xl), display flex, align/justify center, margin-bottom: 24px (mb-6)
- Per-category color combos (text color + bg tint):
  - Precision Oncology: text-red-600 (#DC2626) / bg-red-50 (#FEF2F2)
  - Regenerative Medicine: text-purple-600 (#9333EA) / bg-purple-50 (#FAF5FF)
  - Arthritis: text-emerald-600 (#059669) / bg-emerald-50 (#ECFDF5)
  - TCM Specialties: text-green-600 (#16A34A) / bg-green-50 (#F0FDF4)
  - Health Checkup: text-blue-600 (#2563EB) / bg-blue-50 (#EFF6FF)
  - More Premium: text-indigo-600 (#4F46E5) / bg-indigo-50 (#EEF2FF)

### H3
- fontSize: 24px (text-2xl), fontWeight: 700, Montserrat, lineHeight: 32px, color: #1A1A2E, margin-bottom: 4px (mb-1)

### Zh label p
- fontSize: 14px (text-sm), lineHeight: 20px, color: gray-400 #9CA3AF, margin-bottom: 12px (mb-3)

### Description p
- fontSize: 16px, lineHeight: 24px, color: gray-500 #6B7280, margin-bottom: 24px (mb-6)

### Link list ul
- space-y-3 → 12px vertical gap between items

### List item li
- display: flex, alignItems: center, color: gray-700 #374151, fontSize 16px

### Dot div
- width/height: 6px (w-1.5 h-1.5), borderRadius: 9999px, backgroundColor: #1B4D3E, margin-right: 12px (mr-3)

### Link a
- color: #1B4D3E, fontSize: 16px, lineHeight: 24px
- hover: color #2E7D5A + textDecoration underline, transition color 0.15s

## States & Behaviors
### Scroll reveal (cards)
- Each card wrapped in `Reveal` (opacity 0 + translateY(20px) → 1/none, 0.3s). Threshold ~0.15, once.
- Initial state visible in computed: opacity 0, transform matrix(1,0,0,1,0,20) → after reveal opacity 1, transform none. Transition `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` (card-hover transition overrides Reveal's inline).

### Hover (card)
- translateY(-4px) + shadow lift (see card-hover above), 0.3s cubic-bezier(0.4,0,0.2,1)

### Hover (link)
- color #1B4D3E → #2E7D5A + underline, transition color 0.15s

## Data (verbatim from live site)
1. Precision Oncology | 肿瘤精准治疗 | "Heavy Ion/Proton Therapy, CAR-T, BNCT & NK Cell Therapy" | icon activity | red
   - Heavy Ion/Proton Therapy → /projects/heavy-ion-proton
   - CAR-T Cell Therapy → /projects/cart-therapy
   - EBV-Related DC Vaccine Therapy → /projects/ebv-dc-vaccine
   - BNCT Boron Neutron Capture Therapy → /projects/bnct-therapy
   - Autologous NK Cell Therapy → /projects/nk-therapy
2. Regenerative Medicine | 再生医学 | "Stem Cell Therapy for Multiple Chronic Conditions" | icon dna | purple
   - Stem Cell Therapy for Pulmonary Fibrosis → /projects/pulmonary-fibrosis-stem-cell
   - Stem Cell Therapy for Heart Failure → /projects/heart-failure-stem-cell
   - Stem Cell Therapy for Type 2 Diabetes → /projects/diabetes-stem-cell
   - Stem Cell Therapy for COPD/ILD → /projects/copd-ild-stem-cell
   - Airway Stem Cell Therapy for Bronchiectasis → /projects/bronchiectasis-stem-cell
3. Comprehensive Arthritis Treatment | 关节炎综合治疗 | "Advanced Regenerative Medicine for Knee Osteoarthritis" | icon bone | emerald
   - TCM-Integrated PRP Platelet-Rich Plasma Therapy → /projects/prp-tcm
   - Mesenchymal Stem Cells (MSC) → /projects/msc-tcm
   - Microfragmented Adipose Tissue (MFAT) → /projects/mfat-tcm
   - TCM-Integrated Microfracture for Arthritis → /projects/microfracture-tcm
   - TCM-Integrated MACI Cartilage Cell Transplantation → /projects/maci-tcm
   - TCM-Integrated Joint Arthroplasty → /projects/arthroplasty-tcm
4. TCM Specialties | 中医特色项目 | "Traditional Chinese Medicine for Wellness & Recovery" | icon leaf | green
   - Acupuncture Beauty & Skin Tightening → /projects/acupuncture-beauty
   - TCM-Integrated Proctology Surgery → /projects/tcm-proctology
   - Post-Cancer TCM Recovery (NO LINK — plain text span)
5. Health Checkup | 健康检查 | "Comprehensive Health Screening & Diagnostics" | icon clipboard-check | blue
   - Premium Health Checkup → /projects/premium-health-checkup
   - Painless Endoscopy → /projects/painless-endoscopy
   - Precision Oncology Diagnostics → /projects/precision-oncology-diagnostics
6. More Premium Medical Projects | 更多优势医疗项目 | "Cutting-edge treatments including functional neurosurgery" | icon brain | indigo
   - Parkinson's Disease & Movement Disorders Precision Treatment → /projects/functional-neurosurgery

## Icons used
`Icons.activity`, `Icons.dna`, `Icons.bone`, `Icons.leaf`, `Icons.clipboardCheck`, `Icons.brain` from `../shared/icons`. Icon renders at 48×48 (the svg has width/height 48).

## Responsive Behavior
- **Desktop (1440px):** 2 columns (592px each), gap 32px
- **Tablet (768px):** 1 column (grid-cols-1 applies below lg/1024px)
- **Mobile (390px):** 1 column, card padding stays 32px
- **Breakpoint:** switches to 2 cols at lg (1024px)

## Implementation notes
- Client component (uses Reveal).
- Use `<li>` inside `<ul>`; wrap each `<li>` in `<Reveal className="flex">` (match homepage MedicalProjectsSection pattern) so grid children stretch.
- iconBg/iconColor as data fields (Tailwind classes stored as strings).
- Link list: some items have no href — render plain `<span>` for those.

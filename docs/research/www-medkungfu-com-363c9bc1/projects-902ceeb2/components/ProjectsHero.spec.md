# ProjectsHero Specification

## Overview
- **Target file:** `src/components/sites/www-medkungfu-com-363c9bc1/projects-902ceeb2/ProjectsHero.tsx`
- **Screenshot:** `docs/design-references/www-medkungfu-com-363c9bc1/projects-902ceeb2/fullpage-desktop-1440.png` (top region)
- **Interaction model:** static (reveal-on-load)

## DOM Structure
```
<div className="text-center mb-16" (Reveal-wrapped)>
  <h1>Advantageous Medical Projects</h1>
  <p>Access to China's most advanced medical technologies and specialized treatments.</p>
</div>
```

## Computed Styles (exact values from getComputedStyle)
### Reveal wrapper (.text-center.mb-16)
- display: block, text-align: center, margin-bottom: 64px (mb-16)
- On load: opacity 1, transform none (reveal on mount since at top of page)
- Initial hidden state: opacity 0, transform translateY(20px)

### H1
- fontSize: 36px (text-4xl), fontWeight: 700, fontFamily: Montserrat, lineHeight: 40px
- color: #1A1A2E, margin-bottom: 16px (mb-4), text-align: center

### P (subtitle)
- `text-gray-600 max-w-2xl mx-auto` → fontSize 16px, color #4B5563, lineHeight 24px, maxWidth 672px (max-w-2xl), margin-inline auto, text-align center

## States & Behaviors
### Reveal on load
- Wrapped in shared `Reveal` component (opacity 0 + translateY(20px) → opacity 1 / none, 0.3s ease). Since it is at the top of the page it reveals immediately on mount.

## Text Content (verbatim)
- H1: "Advantageous Medical Projects"
- P: "Access to China's most advanced medical technologies and specialized treatments."

## Responsive Behavior
- **Desktop (1440px):** centered, H1 36px
- **Tablet (768px):** unchanged
- **Mobile (390px):** unchanged — H1 stays 36px, subtitle max-w-2xl (fills width)

## Implementation notes
- Import `Reveal` from `../shared/Reveal` (path from projects-902ceeb2 dir).
- Server component OK (no client hooks needed beyond Reveal which is client).

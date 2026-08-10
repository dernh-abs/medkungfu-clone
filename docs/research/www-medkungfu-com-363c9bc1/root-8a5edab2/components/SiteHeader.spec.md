# SiteHeader Specification

## Overview
- **Target file:** `src/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/SiteHeader.tsx`
- **Screenshot:** `docs/design-references/www-medkungfu-com-363c9bc1/root-8a5edab2/fullpage-desktop-1440.png` (top band)
- **Interaction model:** static fixed header + mobile menu toggle (click-driven on <lg)
- **Nav links:** Home(/), Medical Projects(/projects), Services(/services), Hospitals(/hospitals), Patient Stories(/stories), About Us(/about), FAQ(/faq). Header "Book Consultation" → `/login`.

## DOM Structure
```
header.fixed.top-0.left-0.right-0.z-50.bg-[#1B4D3E].text-white.shadow-md
└─ div.container-custom.h-[72px].flex.items-center.justify-between
   ├─ a.flex.flex-col.items-start (→ /)  [LOGO]
   │  ├─ span.text-2xl.font-bold.font-montserrat.tracking-wide   "MedKungfu"
   │  └─ span.text-[10px].tracking-[0.2em].text-white/80.-mt-1   "HEALTHCARE · CONCIERGE"
   ├─ nav.hidden.lg:flex.items-center.space-x-6   [DESKTOP NAV]
   │  └─ a.text-sm.font-medium.transition-colors.hover:text-[#7CB342] × 7
   │     (Home is active: add `text-[#7CB342]`)
   ├─ div.hidden.lg:flex.items-center.space-x-4   [DESKTOP RIGHT]
   │  ├─ a.bg-[#7CB342].text-white.px-6.py-2.rounded-lg.text-sm.font-medium.hover:bg-[#689F38].transition-colors (→ /login)  "Book Consultation"
   │  └─ button.flex.items-center.space-x-1.text-sm.hover:text-[#7CB342]   "EN" (with Globe icon 16px)
   └─ button.lg:hidden.p-2   [MOBILE HAMBURGER, Menu icon]
```

## Computed Styles
- Header: `background:#1B4D3E; color:#fff; height:72px; box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1)`
- Logo "MedKungfu": 24px/700 Montserrat, white, tracking-wide
- Logo tagline: 10px/400, `rgba(255,255,255,0.8)`, letter-spacing 0.2em, margin-top -4px
- Nav links: 14px/500 Open Sans, white; hover → `#7CB342`; active "Home" → `#7CB342`. Gap 24px (space-x-6).
- Book Consultation: `bg:#7CB342; color:#fff; padding:8px 24px; radius:8px; 14px/500; hover:bg:#689F38`
- EN button: 14px/400, white, hover → `#7CB342`; contains 16px Globe icon + text "EN"

## Mobile menu behavior (lg breakpoint 1024px)
- Below 1024px: desktop nav + Book + EN hidden (`hidden lg:flex`). Hamburger button (`lg:hidden`) visible.
- On click: opens a dropdown panel (full-width, dark green bg) with the nav links + Book Consultation. Implement as a client-side toggle. When open, show a close (X) icon; links stack vertically.

## Assets / imports
- Icons from `../../shared/icons`: `menu`, `globe`, `x` (close for mobile menu). Use lucide `X` / `Menu` / `Globe`.
- `Link` from `next/link` for all anchors.
- `useState` for mobile menu open state → component must be `"use client"`.

## Text Content (verbatim)
- MedKungfu / HEALTHCARE · CONCIERGE
- Home · Medical Projects · Services · Hospitals · Patient Stories · About Us · FAQ
- Book Consultation · EN

## Responsive Behavior
- Desktop (1440px): logo left, nav center, Book + EN right.
- Tablet/Mobile (<1024px): nav/Book/EN hidden, hamburger on right. Menu opens as dropdown.

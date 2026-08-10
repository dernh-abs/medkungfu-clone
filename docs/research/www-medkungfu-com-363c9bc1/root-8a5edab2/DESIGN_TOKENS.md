# Design Tokens — MedKungFu (https://www.medkungfu.com/)

Extracted 2026-08-10 via Chrome MCP getComputedStyle. All values from live site.

## Colors

### Brand palette
| Token | Hex | Usage |
|---|---|---|
| `--brand-green` | `#1B4D3E` | Primary green — header bg, primary buttons, headings accent, CTA gradient start, theme-color |
| `--brand-green-dark` | `#143D30` | Primary button hover |
| `--brand-green-light` | `#2E7D5A` | CTA gradient end, secondary green (service icon 2, scrollbar) |
| `--brand-lime` | `#7CB342` | Accent green — nav hover, active link, "Learn More" borders, dot markers, progress bars, CTA button bg |
| `--brand-lime-dark` | `#689F38` | CTA button (header "Book Consultation") hover |

### Semantic surfaces
| Token | Hex | Usage |
|---|---|---|
| `--bg-page` | `#F5F7FA` | Page background, alternating sections, hero bg |
| `--bg-card` | `#FFFFFF` | Card backgrounds, light sections |
| `--bg-card-off` | `#FBFCFC` | FAQ card background |
| `--border-card` | `#E5E7EB` (gray-200) | FAQ card borders |
| `--border-subtle` | `#F1F1F1` (gray-100) | Service/project card borders |

### Text
| Token | Hex | Usage |
|---|---|---|
| `--text-primary` | `#1A1A2E` | Headings, bold text |
| `--text-secondary` | `#4B5563` (gray-600) | Body paragraphs, hero subtitle |
| `--text-muted` | `#6B7280` (gray-500) | Project subtitles, hero "Learn More" subtext |
| `--text-dark` | `#1F2937` (gray-800) | Trust indicator labels |
| `--text-body` | `#374151` (gray-700) | Story quotes |
| `--text-on-dark` | `#FFFFFF` | Text on green/dark sections |
| `--text-on-dark-80` | `rgba(255,255,255,0.8)` | Header tagline |
| `--text-on-dark-70` | `rgba(255,255,255,0.7)` | Footer description, contact text |
| `--text-on-dark-60` | `rgba(255,255,255,0.6)` | Legal notices |
| `--text-on-dark-50` | `rgba(255,255,255,0.5)` | Footer labels, copyright |

### Project card icon tints
| Card | bg | icon |
|---|---|---|
| Precision Oncology | `bg-red-50` `#FEF2F2` | `text-red-600` `#DC2626` |
| Regenerative Medicine | `bg-purple-50` `#FAF5FF` | `text-purple-600` `#9333EA` |
| Integrative Medicine | `bg-green-50` `#F0FDF4` | `text-green-600` `#16A34A` |
| More Specialties | `bg-blue-50` `#EFF6FF` | `text-blue-600` `#2563EB` |

## Typography
| Role | Family | Weight | Size | Line-height |
|---|---|---|---|---|
| Body | `"Open Sans", "Noto Sans SC", sans-serif` | 400 | 16px | 24px |
| Headings | `Montserrat, "Noto Sans SC", sans-serif` | 700 | varies | varies |
| H1 (hero, lg) | Montserrat | 700 | 60px | 60px |
| H2 section (lg) | Montserrat | 700 | 36px | 40px |
| H3 card | Montserrat | 700 | 20px | 28px |
| Label (uppercase eyebrow) | Open Sans | 600 | 14px | 20px, ls 0.22em |

Fonts loaded via Google Fonts: `Inter:wght@300;400;500;600;700` (site loads Inter but declares Open Sans/Montserrat; clone uses Open Sans + Montserrat via next/font).

## Spacing
- Section vertical padding: 96px (`section-padding`) or `py-20` (80px) for services/CTA
- `container-custom`: max-width 1280px, padding-left/right 32px, centered
- Card padding: 32px (services/promise), 24px (projects), 20px (FAQ)
- Grid gaps: services 32px, promise/projects 24px, process 20px, trust 32px, stories 32px, FAQ 16px
- Radius: buttons 8px, service cards 16px (`rounded-2xl`), project/process/story cards 12px (`rounded-xl`), icons 12px/8px, avatars full

## Shadows
| Name | Value |
|---|---|
| shadow-sm | `0 1px 2px rgba(0,0,0,0.05)` |
| shadow-md | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)` |
| shadow-lg | `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)` |
| shadow-xl | `0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)` |
| shadow-2xl | `0 25px 50px -12px rgba(0,0,0,0.25)` |

## Gradients
- Hero right decorative: `linear-gradient(to left, rgba(232,245,233,0.5), transparent)` (w-1/2 right)
- Hero bottom fade: `linear-gradient(to top, white, transparent)` (h-1/3 bottom)
- CTA section: `linear-gradient(to right, #1B4D3E, #2E7D5A)`

## Global classes
- `container-custom`: `max-width:1280px; margin-inline:auto; padding-inline:32px`
- `section-padding`: `padding-block:96px`
- `card-hover`: `transition:all 0.3s cubic-bezier(0.4,0,0.2,1)`; hover lifts + shadow

## Icons
- Lucide (stroke 2, 24 viewBox), sizes 14–40px
- Custom favicon: green medical cross (from favicon-32x32.png)

## Assets
- `medkungfu-doctor-hero.a2d17594bfad.jpg` (904×1200) — hero photo
- 3 Unsplash patient portraits (200px)
- favicon-32x32.png, favicon-16x16.png, apple-touch-icon.png, site.webmanifest

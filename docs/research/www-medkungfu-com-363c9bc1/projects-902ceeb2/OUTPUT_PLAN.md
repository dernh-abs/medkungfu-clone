# Output Plan — /projects

- **Target URL:** https://www.medkungfu.com/projects
- **App root:** `.` (single-app template, same origin as homepage clone)
- **Site key:** `www-medkungfu-com-363c9bc1` (reused from homepage)
- **Page key:** `projects-902ceeb2`
- **Destination route:** `src/app/projects/page.tsx` (preserves source pathname)

## Namespaces

| Purpose | Path |
| --- | --- |
| Artifact root | `docs/research/www-medkungfu-com-363c9bc1/projects-902ceeb2/` |
| Component specs | `.../projects-902ceeb2/components/` |
| Screenshot root | `docs/design-references/www-medkungfu-com-363c9bc1/projects-902ceeb2/` |
| Component root | `src/components/sites/www-medkungfu-com-363c9bc1/projects-902ceeb2/` |
| Asset root | `public/sites/www-medkungfu-com-363c9bc1/projects-902ceeb2/images/` |
| Downloader | `scripts/download-assets-www-medkungfu-com-363c9bc1-projects-902ceeb2.mjs` |

## Shared foundation reuse

- **Fonts/colors:** already global in `src/app/layout.tsx` (Open Sans + Montserrat) and `globals.css` — no global changes expected.
- **SiteHeader / SiteFooter:** currently in the homepage root namespace. These are genuinely site-wide; will be **moved to `src/components/sites/www-medkungfu-com-363c9bc1/shared/`** and the homepage import updated. New pages import from shared.
- **Icons:** `shared/icons.tsx` reused and extended if this page shows new inline SVGs.
- **Reveal:** `shared/Reveal.tsx` (scroll-reveal helper) reused.
- **Types:** `src/types/sites/www-medkungfu-com-363c9bc1.ts` extended with page-specific interfaces.

## Existing routes preserved

- `/` (`src/app/page.tsx`) — unchanged, only the header/footer import path updates after relocation.

## Collision check

- Page key `projects-902ceeb2` — unique (root page key is `root-8a5edab2`).
- Downloader filename — unique.
- No planned route, artifact, screenshot, component, or asset collides with an existing one.

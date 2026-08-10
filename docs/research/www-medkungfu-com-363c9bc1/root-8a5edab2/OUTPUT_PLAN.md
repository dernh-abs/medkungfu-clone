# Output Plan — https://www.medkungfu.com/

## Target
| Field | Value |
|---|---|
| URL | `https://www.medkungfu.com/` |
| Origin (normalized) | `https://www.medkungfu.com` |
| Pathname | `/` |
| Fidelity | Pixel-perfect, pure emulation (defaults) |

## Keys (collision-resistant)
| Key | Value | Derivation |
|---|---|---|
| `<site-key>` | `www-medkungfu-com-363c9bc1` | origin slug + SHA-256(origin)[0:8] |
| `<page-key>` | `root-8a5edab2` | `root-` + SHA-256(`/`)[0:8] |
| `<app-root>` | `.` (repo root) | single app, single origin |

## Roots
| Purpose | Path |
|---|---|
| Artifact root | `docs/research/www-medkungfu-com-363c9bc1/root-8a5edab2/` |
| Screenshot root | `docs/design-references/www-medkungfu-com-363c9bc1/root-8a5edab2/` |
| Component root (page) | `src/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/` |
| Component root (shared) | `src/components/sites/www-medkungfu-com-363c9bc1/shared/` |
| Asset root (page) | `public/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/images/` |
| Asset root (shared) | `public/sites/www-medkungfu-com-363c9bc1/shared/` |
| Downloader script | `scripts/download-assets-www-medkungfu-com-363c9bc1-root-8a5edab2.mjs` |

## Route
- **Destination route:** `/` → replaces template scaffold `src/app/page.tsx` (first single-URL clone in untouched template — approved replacement per routing defaults).

## Existing state inventory
- `src/app/page.tsx` — untouched template scaffold ("Clone target not yet built") — **may be replaced**.
- `src/app/layout.tsx` — template root layout (Geist fonts, global metadata) — **will be updated** with MedKungFu fonts + metadata.
- `src/app/globals.css` — template design tokens — **will be merged** with MedKungFu palette.
- `src/components/` — empty (no ui/ components yet), no user-authored work.
- `docs/`, `public/` — only `.gitkeep` placeholders.
- No collisions. No shared-foundation conflicts.

## Shared foundation files that change (Phase 2)
1. `src/app/layout.tsx` — swap to MedKungFu fonts + site metadata.
2. `src/app/globals.css` — merge MedKungFu color tokens/keyframes, keep template tokens.
3. `src/components/sites/www-medkungfu-com-363c9bc1/shared/icons.tsx` — extracted SVGs.
4. `src/types/sites/www-medkungfu-com-363c9bc1.ts` (new) — content interfaces.
5. `scripts/download-assets-*.mjs` (new) — unique page downloader.

## Execution order
1. Foundation build (sequential, done by foreman).
2. Component extraction → spec files → dispatch builders in parallel worktrees → merge → verify build.
3. Page assembly at `/`.
4. Visual QA diff at 1440px + 390px.

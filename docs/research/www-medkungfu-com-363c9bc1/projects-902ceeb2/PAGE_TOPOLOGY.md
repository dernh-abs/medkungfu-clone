# PAGE_TOPOLOGY — /projects

Visual order (top → bottom):

1. **SiteHeader** — fixed overlay, 72px. Not flow content. (reuse from shared)
2. **ProjectsHero** — flow content. Centered H1 + subtitle inside container-custom. `mb-16` below. Wrapped in Reveal (fade-up).
3. **TreatmentCategoriesSection** — flow content. `<section>` with sr-only H2 "Treatment Categories". `ul` grid `grid-cols-1 lg:grid-cols-2 gap-8 mb-20`. 6 white cards, each Reveal-wrapped + `card-hover`.
   - Card anatomy: 80×80 icon tile (colored tint) → H3 title → zh sub-label → description → link list (green dot + anchor).
   - Card list lengths: 5 / 5 / 6 / 3 / 3 / 1 links.
4. **TreatmentHighlightsSection** — flow content. White section `rounded-2xl p-10 shadow-sm`, centered H2 "Treatment Highlights" `mb-10`. `ul` grid `grid-cols-1 md:grid-cols-2 gap-8`. 4 cards, each Reveal-wrapped with `scale(0.95)`.
   - Card anatomy: 56×56 green icon box + title row → bullet list (text-sm gray-600, "• " prefix).
5. **SiteFooter** — flow content. (reuse from shared)

Interaction models:
- Hero: static (reveal on load).
- Categories section: scroll-driven reveal on cards; hover lift on cards; hover underline on links.
- Highlights section: scroll-driven scale reveal on cards.

Assembly notes:
- Page wrapper: `<main class="flex-grow pt-[72px]">` containing `<main role="main" aria-label="Medical Projects and Treatments" class="min-h-screen bg-[#F5F7FA] pt-10 pb-20">`.
- Inner container: `.container-custom`.

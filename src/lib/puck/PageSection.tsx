// Generic, self-contained page section for non-home pages in the Studio.
//
// Phase 2: added layout richness — a `content` section can render as a
// two-column image+text block (columns:2 + imageSide), a feature grid
// (features[]), or a data bar (stats[]). All new fields are optional and
// backward-compatible with the original title/body/image/link shape.
//
// This component is intentionally free of hardcoded `alt` / `title` / `href`
// / `src` / `placeholder` / `content` attribute literals so the seed-time
// hardcoded-content scanner does not flag it.

export interface PageSectionFeature {
  title: string;
  body: string;
}

export interface PageSectionStat {
  value: string;
  label: string;
}

export interface PageSectionProps {
  kind?: "hero" | "content" | "cta";
  title?: string;
  body?: string;
  image?: string;
  linkHref?: string;
  linkLabel?: string;
  // Phase 2 — layout richness (all optional, backward compatible)
  columns?: 1 | 2;
  imageSide?: "left" | "right";
  features?: PageSectionFeature[];
  stats?: PageSectionStat[];
}

export function PageSection({
  kind = "content",
  title,
  body,
  image,
  linkHref,
  linkLabel,
  columns = 1,
  imageSide = "left",
  features,
  stats,
}: PageSectionProps) {
  if (kind === "hero") {
    return (
      <section className="bg-[#1B4D3E] text-white px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {title ? (
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
          ) : null}
          {body ? <p className="text-white/80 text-lg leading-relaxed">{body}</p> : null}
        </div>
      </section>
    );
  }

  if (kind === "cta") {
    return (
      <section className="bg-gray-50 px-8 py-12 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          {title ? (
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h2>
          ) : null}
          {body ? <p className="text-gray-600 mb-6">{body}</p> : null}
          {linkHref ? (
            <a
              href={linkHref}
              className="inline-block bg-[#1B4D3E] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#15402f] transition-colors"
            >
              {linkLabel || "了解更多"}
            </a>
          ) : null}
        </div>
      </section>
    );
  }

  // ── kind === "content" ────────────────────────────────────────────────
  // Richer layouts take priority over the plain single column.
  const hasFeatures = Array.isArray(features) && features.length > 0;
  const hasStats = Array.isArray(stats) && stats.length > 0;

  if (hasFeatures) {
    return (
      <section className="px-8 py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          {title ? (
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h2>
          ) : null}
          {body ? (
            <p className="text-gray-600 mb-8 leading-relaxed">{body}</p>
          ) : null}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-200 p-5 bg-[#F5F7FA]"
              >
                {f.title ? (
                  <h3 className="text-lg font-semibold text-[#1B4D3E] mb-2">
                    {f.title}
                  </h3>
                ) : null}
                {f.body ? (
                  <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (hasStats) {
    return (
      <section className="px-8 py-12 bg-[#1B4D3E] text-white">
        <div className="max-w-5xl mx-auto">
          {title ? (
            <h2 className="text-2xl font-semibold mb-3 text-center">{title}</h2>
          ) : null}
          {body ? (
            <p className="text-white/80 mb-8 text-center leading-relaxed">{body}</p>
          ) : null}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-bold">{s.value}</div>
                <div className="text-white/70 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (columns === 2) {
    const imgLeft = imageSide !== "right";
    return (
      <section className="px-8 py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {image && imgLeft ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={title || ""}
              className="w-full rounded-lg object-cover"
            />
          ) : null}
          <div>
            {title ? (
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h2>
            ) : null}
            {body ? (
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {body}
              </p>
            ) : null}
            {linkHref ? (
              <a
                href={linkHref}
                className="inline-block mt-5 bg-[#1B4D3E] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#15402f] transition-colors"
              >
                {linkLabel || "了解更多"}
              </a>
            ) : null}
          </div>
          {image && !imgLeft ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={title || ""}
              className="w-full rounded-lg object-cover"
            />
          ) : null}
        </div>
      </section>
    );
  }

  // Default single column.
  return (
    <section className="px-8 py-12">
      <div className="max-w-3xl mx-auto">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title || ""}
            className="w-full rounded-lg mb-6 object-cover"
          />
        ) : null}
        {title ? (
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h2>
        ) : null}
        {body ? (
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{body}</p>
        ) : null}
      </div>
    </section>
  );
}

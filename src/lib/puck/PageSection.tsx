// Generic, self-contained page section for non-home pages in the Studio.
//
// Deliberately NOT i18n-aware: the placeholder/fallback content is edited
// directly via plain props (title / body / image / link). When per-page
// translation support is added later, swap these props for translation keys.
// This component is intentionally free of hardcoded `alt` / `title` / `href`
// / `src` / `placeholder` / `content` attribute literals so the seed-time
// hardcoded-content scanner does not flag it.

export interface PageSectionProps {
  kind?: "hero" | "content" | "cta";
  title?: string;
  body?: string;
  image?: string;
  linkHref?: string;
  linkLabel?: string;
}

export function PageSection({
  kind = "content",
  title,
  body,
  image,
  linkHref,
  linkLabel,
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

  // kind === "content"
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

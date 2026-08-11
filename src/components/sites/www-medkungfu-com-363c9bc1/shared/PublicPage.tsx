// PublicPage — server component that renders a Studio-editable page's
// published content (`.content/pages/<slug>.json`) using the generic
// PageSection component.
//
// Why this exists: the public site's content-runtime singleton is never
// populated on the server (no commitDocument call), so useSectionData on the
// public pages falls back to seed data and never reflects /studio edits.
// This component reads `.content` directly on the server, so publish/edit
// results become visible immediately — no client-side runtime dependency.

import { notFound } from "next/navigation";

import { loadFullDocument } from "@/lib/content/content-loader";
import { ucdToPuck } from "@/lib/puck/puck-adapter";
import { PageSection } from "@/lib/puck/PageSection";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

interface PublicPageProps {
  slug: string;
}

export default async function PublicPage({ slug }: PublicPageProps) {
  const doc = await loadFullDocument();
  const pageData = doc?.pages?.[slug as keyof typeof doc.pages];
  if (!pageData) {
    notFound();
    return null;
  }

  const { content } = ucdToPuck(doc!, slug);
  const sections = content.filter((item) => item.type === "pageSection");

  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label={slug}
          className="min-h-screen bg-[#F5F7FA] pt-10 pb-20"
        >
          <div className="container-custom">
            {sections.length === 0 ? (
              <p className="text-center text-gray-500">
                This page has no published content yet.
              </p>
            ) : (
              sections.map((item) => (
                <PageSection
                  key={(item.props as { id?: string }).id ?? item.type}
                  {...(item.props as Record<string, unknown>)}
                />
              ))
            )}
          </div>
        </main>
      </main>
      <SiteFooter />
    </>
  );
}

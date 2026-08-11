// PuckAdapter — bidirectional conversion between UCD and Puck data formats.
//
// UCD structure:
//   pages.home.order: string[]           → Puck content[].type
//   pages.home.sections[sectionId]: data → Puck content[].props
//
// Puck structure:
//   content: Array<{ type: string, props: Record<string, unknown> }>
//   root: { props?: Record<string, unknown> }
//
// Data flow:
//   UCD → ucdToPuck() → Puck data → user edits → onChange → puckToUcd() → UCD → commitDocument()

import type { UnifiedContentDocument } from "@/lib/content/content-schema";

/** Puck's native data format (minimal interface to avoid coupling). */
export interface PuckData {
  content: Array<{
    type: string;
    props: Record<string, unknown>;
  }>;
  root: {
    props?: Record<string, unknown>;
  };
}

/** Convert UCD → Puck data for a given page. */
export function ucdToPuck(
  ucd: UnifiedContentDocument,
  page: string = "home"
): PuckData {
  const pageData = ucd.pages[page as keyof typeof ucd.pages] as
    | { order?: string[]; sections?: Record<string, unknown> }
    | undefined;

  if (!pageData || !pageData.order || !pageData.sections) {
    return { content: [], root: {} };
  }

  return {
    content: pageData.order.map((sectionId: string) => ({
      type: sectionId,
      props: {
        id: sectionId, // Puck requires a unique id per content item
        ...(pageData.sections![sectionId] as Record<string, unknown> ?? {}),
      },
    })),
    root: {},
  };
}

/** Convert Puck data → UCD for a given page (returns a new UCD, does not mutate). */
export function puckToUcd(
  puckData: PuckData,
  currentUcd: UnifiedContentDocument,
  page: string = "home"
): UnifiedContentDocument {
  // Deep clone the UCD to avoid mutation.
  const newUcd: UnifiedContentDocument = JSON.parse(JSON.stringify(currentUcd));

  const pageData = newUcd.pages[page as keyof typeof newUcd.pages] as {
    order: string[];
    sections: Record<string, unknown>;
  };

  if (!pageData) return newUcd;

  // Rebuild order and sections from Puck content array.
  pageData.order = puckData.content.map((item) => item.type) as typeof pageData.order;
  pageData.sections = puckData.content.reduce(
    (acc: Record<string, unknown>, item) => {
      // Strip Puck's internal id field before writing back to UCD.
      const { id: _id, ...sectionData } = item.props;
      acc[item.type] = sectionData;
      return acc;
    },
    {}
  );

  return newUcd;
}

/** Check if Puck data has changed (shallow JSON comparison). */
export function hasPuckDataChanged(oldData: PuckData, newData: PuckData): boolean {
  return JSON.stringify(oldData) !== JSON.stringify(newData);
}

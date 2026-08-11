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

/**
 * Convert UCD → Puck data for a given page.
 *
 * Each stored section has a unique `id` (the key in `sections`) and an
 * optional `type`. For home, `type` is omitted and equals the id (the
 * component name). For generic pages a section may be a `pageSection`
 * whose `id` differs from its `type`, so we read `type` when present and
 * fall back to the id. Puck requires a unique id per content item, which
 * we satisfy via `props.id`.
 */
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
    content: pageData.order.map((sectionId: string) => {
      const section = (pageData.sections![sectionId] ?? {}) as Record<string, unknown>;
      const type =
        typeof section.type === "string" && section.type ? section.type : sectionId;
      const { type: _type, ...rest } = section;
      return {
        type,
        props: {
          id: sectionId, // Puck requires a unique id per content item
          ...rest,
        },
      };
    }),
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
    order?: string[];
    sections?: Record<string, unknown>;
  };

  if (!pageData) return newUcd;

  // Rebuild order and sections from Puck content array. Key sections by their
  // unique `id` (not `type`) so multiple instances of the same component
  // (e.g. three `pageSection`s) don't collapse into one. Store `type` only
  // when it differs from the id (keeps home.json byte-identical on re-seed).
  const sections: Record<string, unknown> = {};
  const order: string[] = [];
  for (const item of puckData.content) {
    const props = (item.props ?? {}) as Record<string, unknown>;
    const id = typeof props.id === "string" && props.id ? props.id : String(item.type);
    const type = item.type;
    const { id: _id, type: _type, ...sectionData } = props;
    const section: Record<string, unknown> = { ...sectionData };
    if (type && type !== id) section.type = type;
    sections[id] = section;
    order.push(id);
  }

  pageData.order = order;
  pageData.sections = sections;

  return newUcd;
}

/** Check if Puck data has changed (shallow JSON comparison). */
export function hasPuckDataChanged(oldData: PuckData, newData: PuckData): boolean {
  return JSON.stringify(oldData) !== JSON.stringify(newData);
}

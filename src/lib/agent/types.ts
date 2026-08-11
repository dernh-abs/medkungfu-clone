// Intent types — the structured intermediate representation produced by the
// rule matcher (stage 0) or LLM parser (stage 1). The plan generator turns an
// Intent into a JSON Patch operation sequence.

import type { SupportedLanguage } from "@/lib/i18n/translations";

export type Intent =
  | { type: "update_text"; target: string; value: string; lang?: SupportedLanguage }
  | { type: "translate"; source: string; targetLang: SupportedLanguage; sourceLang?: SupportedLanguage }
  | { type: "reorder_sections"; page: string; newOrder: string[] }
  | { type: "add_section"; page: string; sectionType: string; position: number }
  | { type: "remove_section"; page: string; sectionId: string }
  | { type: "update_image"; target: string; newSrc: string; alt?: string }
  | { type: "update_link"; target: string; newHref: string }
  | { type: "bulk_update"; operations: Intent[] };

/** A parsed intent paired with provenance for auditing. */
export interface ParsedIntent {
  intent: Intent;
  source: "rule" | "llm";
  rawCommand: string;
}

export class LLMDisabledError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LLMDisabledError";
  }
}

export class ClarificationError extends Error {
  options: { label: string; value: string }[];
  constructor(message: string, options: { label: string; value: string }[]) {
    super(message);
    this.name = "ClarificationError";
    this.options = options;
  }
}

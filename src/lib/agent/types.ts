import type { SupportedLanguage } from "@/lib/i18n/translations";

export type Intent =
  | { type: "update_text"; target: string; value: string; lang?: SupportedLanguage; page?: string }
  | { type: "translate"; source: string; targetLang: SupportedLanguage; sourceLang?: SupportedLanguage }
  | { type: "reorder_sections"; page: string; newOrder: string[] }
  | { type: "add_section"; page: string; sectionType: string; position: number | { anchor: string; side: "before" | "after" | "end" | "start" } }
  | { type: "duplicate_section"; page: string; sectionId: string; newSectionId?: string }
  | { type: "remove_section"; page: string; sectionId: string }
  | { type: "update_image"; target: string; newSrc: string; alt?: string; page?: string }
  | { type: "update_link"; target: string; newHref: string; page?: string }
  | { type: "bulk_update"; operations: Intent[] }
  | { type: "undo" }
  | { type: "redo" }
  | { type: "query"; question: string };

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

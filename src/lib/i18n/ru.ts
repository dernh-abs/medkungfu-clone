// Merged Russian translations, extracted verbatim from the source site's
// `ru-translations/<page>.json` files (flat English-string -> Russian maps).
// Page maps are merged so the provider can look up any English text by its
// Russian counterpart. Falls back to English for any string not yet covered.
import { RU_HOME } from "./ru-home";

export const RU: Record<string, string> = {
  ...RU_HOME,
};

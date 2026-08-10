// Merged Russian translations, extracted verbatim from the source site's
// `ru-translations/<page>.json` files (flat English-string -> Russian maps).
// Page maps are merged so the provider can look up any English text by its
// Russian counterpart. Falls back to English for any string not yet covered.
import { RU_ABOUT } from "./ru-about";
import { RU_CONTACT } from "./ru-contact";
import { RU_HOME } from "./ru-home";
import { RU_PROJECTS } from "./ru-projects";
import { RU_SERVICES } from "./ru-services";
import { RU_WHY_CHINA } from "./ru-why-china";

export const RU: Record<string, string> = {
  ...RU_HOME,
  ...RU_SERVICES,
  ...RU_WHY_CHINA,
  ...RU_ABOUT,
  ...RU_CONTACT,
  ...RU_PROJECTS,
};

// Data model for the MedKungFu `/projects/*` arthritis detail pages.
// Each page is described by one `PageData` object (see `data/*.ts`) that the
// shared `ProjectDetailPage` template renders faithfully.

import type { IconName } from "../../shared/icons";

export interface HeroData {
  /** Optional small eyebrow above the H1 (e.g. "Joint Regeneration & Repair Program"). */
  eyebrow?: string;
  title: string;
  /** Line directly under the H1 (`text-xl md:text-2xl text-{color}-200`). */
  subtitle: string;
  /** The descriptive `text-lg text-gray-300` line. Absent on some pages. */
  tagline?: string;
  /** Full gradient classes, e.g. "from-slate-900 via-teal-900 to-slate-900". */
  gradientClass: string;
  /** Accent text color for eyebrow/subtitle, e.g. "text-teal-200". */
  accentTextClass: string;
  /** Primary button color classes, e.g. "bg-teal-500 hover:bg-teal-600". */
  buttonClass: string;
}

export interface IntroData {
  title: string;
  paragraphs: string[];
  /** Certification badge text (with check icon). */
  badgeText: string;
  /** Badge color, e.g. "text-teal-600". */
  badgeColor: string;
  image: string;
  imageAlt: string;
}

export interface AdvantageItem {
  icon: IconName;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

export interface IndicationItem {
  image: string;
  imageAlt: string;
  title: string;
  /** Small colored subtitle under the card title. */
  subtitle: string;
  bullets: string[];
}

// --- Treatment content blocks ---
export type TreatmentBlock =
  | {
      type: "numberedGrid";
      cols: string;
      steps: { num: string; title: string; desc: string }[];
    }
  | {
      type: "cardGrid";
      cols: string;
      center?: boolean;
      items: { title: string; desc: string }[];
    }
  | {
      type: "infoBox";
      bg: string;
      /** Bold lead-in, e.g. "Technical Points: " */
      title?: string;
      text: string;
    }
  | { type: "footnote"; text: string }
  | {
      type: "numberedList";
      steps: { num: string; title: string; desc: string }[];
    }
  | {
      type: "phaseGroupList";
      groups: {
        title: string;
        /** Optional right-aligned badge (used by some pages). */
        badge?: { text: string; badgeClass: string };
        titleColor: string;
        bullets: string[];
      }[];
    }
  | {
      type: "surgeryTable";
      /** Optional h4 heading above the table. */
      heading?: string;
      headers: string[];
      headerClass: string;
      rows: string[][];
    }
  | { type: "chipGrid"; heading?: string; items: string[] }
  | {
      type: "bulletCardGrid";
      cols: string;
      cards: {
        title: string;
        bullets: string[];
        trailing?: string;
      }[];
    };

export interface TreatmentModule {
  icon: IconName;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  /** Check-icon color used by bullet blocks inside this module, e.g. "text-teal-500". */
  checkClass: string;
  /** Numbered-circle background color, e.g. "bg-teal-500". */
  numBg: string;
  blocks: TreatmentBlock[];
}

export interface ProcessStep {
  title: string;
  /** Optional time badge shown in the list layout. */
  time?: string;
  description: string;
}

export interface EfficacyTableRow {
  /** Text cells. Last text cell renders white; earlier cells render gray-300. */
  cells: string[];
  /** Evidence-level badge (last column). */
  badge?: string;
}

export interface TimelineItem {
  time: string;
  /** Full className incl. width + accent color, e.g. "w-32 flex-shrink-0 text-emerald-400 font-semibold". */
  timeClass: string;
  text: string;
}

export interface EfficacySection {
  title: string;
  subtitle: string;
  table?: {
    headers: string[];
    headerClass: string;
    badgeClass: string;
    rows: EfficacyTableRow[];
  };
  timeline?: { title?: string; items: TimelineItem[] };
  stats?: { value: string; label: string }[];
  /** Stat value color, e.g. "text-teal-400". */
  statClass?: string;
  valueCardsTitle?: string;
  valueCards?: { title: string; text: string }[];
  /** Value-card title color, e.g. "text-indigo-400". */
  valueCardTitleClass?: string;
}

export interface CaseItem {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ServiceItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  recommended?: boolean;
  items: string[];
}

export type PricingSection =
  | {
      variant: "packages";
      title: string;
      subtitle: string;
      priceClass: string;
      checkClass: string;
      borderClass: string;
      footnote?: string;
      packages: PricingPackage[];
    }
  | {
      variant: "reference";
      title: string;
      subtitle: string;
      costCard: {
        title: string;
        price: string;
        priceNote: string;
        priceClass: string;
        checkClass: string;
        borderClass: string;
        items: string[];
        footnote?: string;
        footnote2?: string;
      };
      compareCard: {
        title: string;
        rows: { label: string; value: string; valueClass: string }[];
        savings: { label: string; value: string };
      };
    };

export interface ContactSectionData {
  title: string;
  subtitle: string;
  iconClass: string;
  buttonClass: string;
  items: { icon: IconName; title: string; text: string }[];
  ctaHref: string;
  ctaLabel: string;
}

export interface PageData {
  mainAriaLabel: string;
  hero: HeroData;
  intro: IntroData;
  advantages: {
    title: string;
    subtitle: string;
    gridClass: string;
    items: AdvantageItem[];
  };
  indications: {
    title: string;
    subtitle: string;
    accentClass: string;
    checkColor: string;
    items: IndicationItem[];
  };
  treatment: {
    title: string;
    subtitle: string;
    modules: TreatmentModule[];
  };
  process: {
    title: string;
    subtitle: string;
    layout: "grid" | "list";
    gridClass?: string;
    numBg: string;
    /** Only used by the list layout. */
    numText?: string;
    timeBadgeClass?: string;
    steps: ProcessStep[];
  };
  efficacy: EfficacySection;
  cases: {
    title: string;
    subtitle: string;
    gridClass: string;
    imgClass: string;
    accentClass: string;
    descriptionClass: string;
    items: CaseItem[];
  };
  services: {
    title: string;
    subtitle: string;
    iconBg: string;
    iconColor: string;
    items: ServiceItem[];
  };
  pricing: PricingSection;
  contact?: ContactSectionData;
}

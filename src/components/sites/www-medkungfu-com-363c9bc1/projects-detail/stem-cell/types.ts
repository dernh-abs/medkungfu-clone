// Shared data model for MedKungFu stem-cell project detail pages.
// Each route supplies a StemCellPageData object; StemCellDetailPage renders it.
// Class strings below are transcribed verbatim from the captured DOM.
import type { IconName } from "../../shared/icons";

export interface HeroStat {
  value: string;
  label: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroData {
  eyebrow: string;
  /** May contain "\n" line breaks, rendered as <br />. */
  title: string;
  description: string;
  /** Tailwind bg-gradient classes, e.g. "from-purple-900 via-indigo-900 to-purple-900" */
  gradient: string;
  stats?: HeroStat[];
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  /** Class strings for the two hero CTAs (only pulmonary-fibrosis uses them). */
  primaryCtaClass?: string;
  secondaryCtaClass?: string;
}

export interface IntroParagraph {
  text: string;
  /** Render inside a highlighted callout box instead of a plain paragraph. */
  callout?: boolean;
  calloutClass?: string;
}

export interface ProductIntroData {
  title: string;
  headingClass: string;
  paragraphClass: string;
  pyClass: string;
  /** PF wraps its h2 in `<div class="text-center mb-12">`; others inline text-center. */
  centerWrapper?: boolean;
  paragraphs: IntroParagraph[];
}

export interface AdvantageItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface AdvantagesData {
  id?: string;
  title: string;
  headingClass: string;
  subtitle: string;
  pyClass: string;
  headingWrapClass: string;
  gridClass: string;
  cardClass: string;
  cardLayout: "stacked" | "horizontal";
  iconTileClass: string;
  titleClass: string;
  descClass: string;
  revealOffset: number;
  items: AdvantageItem[];
}

export interface IndicationsData {
  title: string;
  headingClass: string;
  pyClass: string;
  headingWrapClass?: string;
  subtitle?: string;
  subtitleClass?: string;
  wrapClass: string;
  /** heart/diabetes/copd reveal the whole container; PF reveals heading + list separately. */
  revealWhole: boolean;
  simpleList?: {
    listClass: string;
    itemClass: string;
    iconClass: string;
    textClass: string;
    items: string[];
  };
  boxedList?: {
    boxClass: string;
    extraClass?: string;
    iconClass: string;
    textClass: string;
    items: string[];
  };
  groups?: {
    boxClass: string;
    titleIcon: IconName;
    iconClass: string;
    title: string;
    itemIconClass: string;
    items: string[];
  }[];
  contraindications?: {
    title: string;
    titleClass: string;
    boxClass: string;
    icon: "thermometer" | "bullet";
    iconClass?: string;
    textClass: string;
    items: string[];
    footerNote?: string;
  };
}

export interface TreatmentDetailItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface TreatmentDetailsData {
  title: string;
  headingClass: string;
  pyClass: string;
  headingWrapClass: string;
  gridClass: string;
  cardClass: string;
  cardLayout: "header-block" | "horizontal";
  iconTileClass: string;
  titleClass: string;
  descClass: string;
  items: TreatmentDetailItem[];
}

export interface ProcessStep {
  icon: IconName;
  title: string;
  description: string;
}

export interface TreatmentProcessData {
  title: string;
  headingClass: string;
  subtitle: string;
  pyClass: string;
  headingWrapClass: string;
  wrapClass: string;
  stepCardClass: string;
  stepLayoutClass: string;
  /** PF wraps its number in a flex-shrink-0 div. */
  numberWrap?: boolean;
  numberClass: string;
  iconClass: string;
  stepTitleClass: string;
  stepDescClass: string;
  /** Hidden state was translateX(-N); Reveal slides vertically by the same magnitude. */
  revealOffset: number;
  steps: ProcessStep[];
}

export interface EfficacyItem {
  icon: IconName;
  stat: string;
  title: string;
  description: string;
}

export interface EfficacyData {
  title: string;
  subtitle: string;
  pyClass: string;
  gradient: string;
  headingWrapClass: string;
  headingClass: string;
  subtitleClass: string;
  gridClass: string;
  cardClass: string;
  iconTileClass: string;
  statClass: string;
  itemTitleClass: string;
  descClass: string;
  /** PF renders stat before title; heart/diabetes/copd render title before stat. */
  statFirst: boolean;
  items: EfficacyItem[];
}

export interface CaseStudyStatRow {
  label: string;
  value: string;
  valueClass?: string;
}

export interface CaseStudyStatBox {
  label: string;
  value: string;
  boxClass: string;
  valueClass: string;
  colSpan?: boolean;
}

export interface CaseStudy {
  location: string;
  locationMeta?: string;
  age?: string;
  title: string;
  subtitle?: string;
  headerGradient: string;
  headerStyle: "pf" | "standard";
  statRows?: CaseStudyStatRow[];
  statBoxes?: CaseStudyStatBox[];
  statBoxCols?: 2 | 3;
  introItalic?: string;
  callout?: string;
  calloutClass?: string;
  body?: string;
  quote?: string;
  quoteBorderClass?: string;
  footerIcon: IconName;
  footerLabel: string;
  footerClass: string;
  footerBoxClass?: string;
}

export interface CaseStudiesData {
  title: string;
  headingClass: string;
  subtitle: string;
  pyClass: string;
  bgClass: string;
  headingWrapClass: string;
  gridClass: string;
  cardClass: string;
  revealOffset: number;
  cases: CaseStudy[];
}

export interface CostNote {
  label?: string;
  text: string;
  boxClass: string;
}

export interface CostTableRow {
  item: string;
  perSessionMain: string;
  perSessionSub: string;
  totalCourseMain: string;
  totalCourseSub: string;
  notes: string;
}

export interface CostSectionData {
  pyClass: string;
  bgClass: string;
  body:
    | {
        variant: "card";
        wrapClass: string;
        cardClass: string;
        icon: IconName;
        iconClass: string;
        title: string;
        titleClass: string;
        price: string;
        priceClass: string;
        subtitle: string;
        note: string;
        cta: CtaLink;
        btnClass: string;
      }
    | {
        variant: "table";
        wrapClass: string;
        title: string;
        titleClass: string;
        tableWrapClass: string;
        headerBorderClass: string;
        rowBorderClass: string;
        accentClass: string;
        rows: CostTableRow[];
        notes: CostNote[];
        /** When present, notes are wrapped in this container (e.g. "mt-6 space-y-2"). */
        notesWrapClass?: string;
      }
    | {
        variant: "price";
        wrapClass: string;
        title: string;
        titleClass: string;
        tableWrapClass: string;
        price: string;
        priceClass: string;
        priceSub: string;
        priceCaption: string;
        notes: CostNote[];
      };
}

export interface CtaData {
  pyClass: string;
  gradient: string;
  /** Extra classes on the <section>, e.g. "text-white". */
  sectionClass?: string;
  containerClass: string;
  wrapClass: string;
  buttonsClass: string;
  title: string;
  titleClass: string;
  desc: string;
  descClass: string;
  primary: CtaLink & { class: string; showArrow?: boolean };
  secondary: CtaLink & { class: string };
}

export interface StemCellPageData {
  ariaLabel: string;
  hero: HeroData;
  productIntro: ProductIntroData;
  advantages: AdvantagesData;
  indications: IndicationsData;
  treatmentDetails: TreatmentDetailsData;
  treatmentProcess: TreatmentProcessData;
  efficacy: EfficacyData;
  caseStudies: CaseStudiesData;
  cost: CostSectionData;
  cta: CtaData;
}

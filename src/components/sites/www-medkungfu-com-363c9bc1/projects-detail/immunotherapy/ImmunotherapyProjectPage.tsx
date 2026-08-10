// Shared data-driven template for MedKungFu immunotherapy project detail pages
// (EBV-related DC vaccine therapy, BNCT, Autologous NK cell therapy).
// Transcribed verbatim from the captured rendered.html for each slug.
// Bilingual: renders Chinese content when the site language is zh (via the
// `zhConfig` prop); otherwise renders the English `config` unchanged.
"use client";
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Icons } from "../../shared/icons";
import { Reveal } from "../../shared/Reveal";

// ---------------------------------------------------------------------------
// Types (shared by the three green-themed project pages)
// ---------------------------------------------------------------------------
export interface TextCard {
  title: string;
  description: string;
}

/** A paragraph made of plain text with an optional emphasized span. */
export interface IntroParagraph {
  /** Text before the emphasized span (leading/trailing spaces preserved). */
  before: string;
  /** Optional text rendered in a bold green span. */
  highlight?: string;
  /** Text after the emphasized span (leading/trailing spaces preserved). */
  after?: string;
}

/** Icon name resolved via the shared `Icons` object (serializable across the
 *  server→client boundary, unlike passing a component reference). */
export type IconName = keyof typeof Icons;

export interface IconCard extends TextCard {
  icon: IconName;
}

export interface ProcessStep {
  title: string;
  duration: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
  note: string;
}

export interface TableCell {
  text: string;
  className?: string;
}

export interface TableRow {
  cells: TableCell[];
  bg?: string;
}

export interface TableConfig {
  headers: string[];
  rows: TableRow[];
  wrapClassName?: string;
  tableClassName?: string;
}

export interface HeroConfig {
  badge: string;
  title: string;
  subtitle: string;
  primaryBtn: string;
  secondaryBtn: string;
}

export interface SideCardConfig {
  heading: string;
  description?: string;
  listHeading?: string;
  features?: string[];
  bullets?: string[];
  note?: string;
}

export interface IndicationsConfig {
  heading?: string;
  intro?: string;
  listItems?: string[];
  sideCard?: SideCardConfig;
  cardHeading?: string;
  cardSubtitle?: string;
  cards?: TextCard[];
  bg?: string;
}

export interface ImmunotherapyProjectConfig {
  ariaLabel: string;
  hero: HeroConfig;
  stickyNav: string[];
  intro: { heading: string; paragraphs: IntroParagraph[] };
  advantages: {
    heading: string;
    subtitle?: string;
    items: IconCard[];
    bg?: string;
  };
  indications?: IndicationsConfig;
  treatmentContent?: {
    heading: string;
    subtitle: string;
    items: TextCard[];
    bg?: string;
  };
  process: {
    heading: string;
    subtitle: string;
    steps: ProcessStep[];
    summaryNote?: IntroParagraph;
    bg?: string;
  };
  efficacy?: {
    heading: string;
    subtitle: string;
    stats?: StatItem[];
    safetyHeading?: string;
    table?: TableConfig;
    footnote?: string;
    bg?: string;
  };
  cases?: {
    heading: string;
    items: TextCard[];
    bg?: string;
  };
  cost: {
    heading: string;
    intro?: string;
    label: string;
    amount: string;
    bg?: string;
  };
  whyChooseUs: {
    heading: string;
    items: IconCard[];
    variant: "muted" | "white";
    bg?: string;
  };
  notice: { text: string; bg?: string };
  cta: {
    heading: string;
    subtitle: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string; external?: boolean };
  };
}

// ---------------------------------------------------------------------------
// Section components
// ---------------------------------------------------------------------------
function Hero({ hero }: { hero: HeroConfig }) {
  return (
    <section className="relative bg-gradient-to-br from-[#1B4D3E] via-[#2E7D5A] to-[#1B4D3E] text-white py-20">
      <div className="absolute inset-0 bg-[url('/sites/www-medkungfu-com-363c9bc1/shared/images/photo-1576091160399-112ba8d25d1d-w1920.jpg')] opacity-10 bg-cover bg-center"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
            <Icons.activity className="h-4 w-4" aria-hidden="true" />
            <span>{hero.badge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">{hero.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-white text-[#1B4D3E] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all"
            >
              {hero.primaryBtn}
            </a>
            <a
              href="#process"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              {hero.secondaryBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyNav({ items }: { items: string[] }) {
  // Map each sticky-nav label to its on-page section anchor (matches the source site).
  const SECTION_IDS: Record<string, string> = {
    Introduction: "intro",
    "Core Advantages": "advantages",
    Indications: "indications",
    "Treatment Process": "process",
    "Efficacy Data": "efficacy",
    Cases: "cases",
    "Why Choose Us": "why-choose-us",
    // Chinese labels (zh locale)
    简介: "intro",
    核心优势: "advantages",
    适应症: "indications",
    治疗流程: "process",
    疗效数据: "efficacy",
    案例展示: "cases",
    为什么选择我们: "why-choose-us",
    // Russian labels (ru locale)
    Введение: "intro",
    "Основные преимущества": "advantages",
    Показания: "indications",
    "Процесс лечения": "process",
    "Данные об эффективности": "efficacy",
    "Тематические исследования": "cases",
    "Почему выбирают нас": "why-choose-us",
  };
  return (
    <div className="bg-white shadow-sm sticky top-[72px] z-40">
      <div className="container-custom">
        <div className="flex flex-wrap gap-6 py-4 text-sm">
          {items.map((item) => (
            <a
              key={item}
              href={`#${SECTION_IDS[item] ?? item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="text-gray-600 hover:text-[#1B4D3E] font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function IntroSection({
  heading,
  paragraphs,
}: {
  heading: string;
  paragraphs: IntroParagraph[];
}) {
  return (
    <section id="intro" className="py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-8 text-center">
            {heading}
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === paragraphs.length - 1
                    ? "text-lg text-gray-700 leading-relaxed"
                    : "text-lg text-gray-700 leading-relaxed mb-6"
                }
              >
                {p.before}
                {p.highlight && (
                  <span className="font-semibold text-[#1B4D3E]">
                    {p.highlight}
                  </span>
                )}
                {p.after}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AdvantagesSection({
  heading,
  subtitle,
  items,
  bg,
}: {
  heading: string;
  subtitle?: string;
  items: IconCard[];
  bg?: string;
}) {
  return (
    <section id="advantages" className={`py-20 ${bg ?? ""}`}>
      <div className="container-custom">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => {
            const ItemIcon = Icons[item.icon];
            return (
            <Reveal key={item.title} y={30} className="flex">
              <div className="bg-[#F5F7FA] rounded-2xl p-8 card-hover w-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] mb-6">
                  <ItemIcon className="h-10 w-10" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndicationsSection({ config }: { config: IndicationsConfig }) {
  // Card-mode (Autologous NK cell therapy): heading + subtitle + grid of cards.
  if (config.cards) {
    return (
      <section id="indications" className={`py-20 ${config.bg ?? ""}`}>
        <div className="container-custom">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {config.cardHeading}
            </h2>
            {config.cardSubtitle && (
              <p className="text-gray-600 max-w-2xl mx-auto">
                {config.cardSubtitle}
              </p>
            )}
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {config.cards.map((card) => (
              <Reveal
                key={card.title}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // List-mode (EBV DC vaccine / BNCT): list card + dark-green side card.
  const side = config.sideCard;
  return (
    <section id="indications" className={`py-20 ${config.bg ?? ""}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal y={0} className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-6">
              {config.heading}
            </h2>
            {config.intro && <p className="text-gray-600 mb-6">{config.intro}</p>}
            <ul className="space-y-4">
              {(config.listItems ?? []).map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Icons.checkCircle
                    className="text-[#1B4D3E] flex-shrink-0 mt-1 h-5 w-5"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          {side && (
            <Reveal y={0} className="bg-[#1B4D3E] rounded-2xl p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {side.heading}
              </h2>
              {side.description && (
                <p className="text-white/90 leading-relaxed mb-6">
                  {side.description}
                </p>
              )}
              {side.features && (
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="font-semibold mb-4">{side.listHeading}</h3>
                  <ul className="space-y-3">
                    {side.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#7CB342] rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-white/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {side.bullets && (
                <ul className="space-y-4">
                  {side.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7CB342] rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-white/90">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {side.note && (
                <p className="mt-6 text-white/70 text-sm">{side.note}</p>
              )}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

function TreatmentContentSection({
  heading,
  subtitle,
  items,
  bg,
}: {
  heading: string;
  subtitle: string;
  items: TextCard[];
  bg?: string;
}) {
  return (
    <section className={`py-20 ${bg ?? ""}`}>
      <div className="container-custom">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {heading}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Reveal key={item.title} className="bg-[#F5F7FA] rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({
  heading,
  subtitle,
  steps,
  summaryNote,
  bg,
}: {
  heading: string;
  subtitle: string;
  steps: ProcessStep[];
  summaryNote?: IntroParagraph;
  bg?: string;
}) {
  return (
    <section id="process" className={`py-20 ${bg ?? ""}`}>
      <div className="container-custom">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {heading}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </Reveal>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <Reveal key={step.title} y={0} className="flex gap-6 mb-8 last:mb-0">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <div className="flex-grow bg-white rounded-xl p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">
                    {step.title}
                  </h3>
                  <span className="text-sm text-[#1B4D3E] font-medium bg-[#1B4D3E]/10 px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </Reveal>
          ))}
          {summaryNote && (
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                {summaryNote.before}
                {summaryNote.highlight && (
                  <span className="font-semibold text-[#1B4D3E]">
                    {summaryNote.highlight}
                  </span>
                )}
                {summaryNote.after}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function EfficacySection({
  heading,
  subtitle,
  stats,
  safetyHeading,
  table,
  footnote,
  bg,
}: {
  heading: string;
  subtitle: string;
  stats?: StatItem[];
  safetyHeading?: string;
  table?: TableConfig;
  footnote?: string;
  bg?: string;
}) {
  return (
    <section id="efficacy" className={`py-20 ${bg ?? ""}`}>
      <div className="container-custom">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {heading}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </Reveal>
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {stats.map((stat) => (
              <Reveal
                key={stat.label}
                scale={0.95}
                className="bg-[#1B4D3E] rounded-2xl p-8 text-white text-center"
              >
                <p className="text-white/70 mb-2">{stat.label}</p>
                <p className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-white/60 text-sm">{stat.note}</p>
              </Reveal>
            ))}
          </div>
        )}
        {safetyHeading && (
          <Reveal className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-8">
              {safetyHeading}
            </h3>
          </Reveal>
        )}
        {table && (
          <div className={table.wrapClassName ?? "overflow-x-auto"}>
            <table
              className={
                table.tableClassName ??
                "w-full bg-white rounded-2xl shadow-sm overflow-hidden"
              }
            >
              <thead className="bg-[#1B4D3E] text-white">
                <tr>
                  {table.headers.map((h) => (
                    <th key={h} className="px-6 py-4 text-left font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, i) => (
                  <tr key={i} className={row.bg ?? ""}>
                    {row.cells.map((cell, j) => (
                      <td
                        key={j}
                        className={cell.className ?? "px-6 py-4 text-gray-700"}
                      >
                        {cell.text}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {footnote && (
          <p className="mt-6 text-sm text-gray-500 text-center">{footnote}</p>
        )}
      </div>
    </section>
  );
}

function CasesSection({
  heading,
  items,
  bg,
}: {
  heading: string;
  items: TextCard[];
  bg?: string;
}) {
  return (
    <section id="cases" className={`py-20 ${bg ?? ""}`}>
      <div className="container-custom">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {heading}
          </h2>
        </Reveal>
        <div className="space-y-8">
          {items.map((c) => (
            <Reveal key={c.title} className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                {c.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{c.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CostSection({
  heading,
  intro,
  label,
  amount,
  bg,
}: {
  heading: string;
  intro?: string;
  label: string;
  amount: string;
  bg?: string;
}) {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const isRu = lang === "ru";
  return (
    <section className={`py-20 ${bg ?? ""}`}>
      <div className="container-custom">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
            {heading}
          </h2>
          {intro && <p className="text-gray-600 mb-8">{intro}</p>}
          <div className="bg-[#1B4D3E] rounded-2xl p-8 text-white">
            <p className="text-lg mb-4">{label}</p>
            <p className="text-4xl md:text-5xl font-bold mb-4">{amount}</p>
            <p className="text-white/70">
              {isZh
                ? "价格透明，无隐藏费用"
                : isRu
                  ? "Прозрачные цены, никаких скрытых сборов"
                  : "Transparent pricing, no hidden fees"}
            </p>
            <p className="text-white/50 text-sm mt-4">
              {isZh
                ? "*具体费用以医院最终评估为准。"
                : isRu
                  ? "* Конкретные расходы, подлежащие окончательной оценке в больнице."
                  : "*Specific costs subject to final hospital assessment."}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyChooseUsSection({
  heading,
  items,
  variant,
  bg,
}: {
  heading: string;
  items: IconCard[];
  variant: "muted" | "white";
  bg?: string;
}) {
  const cardBg = variant === "muted" ? "bg-[#F5F7FA]" : "bg-white shadow-sm";
  return (
    <section className={`py-20 ${bg ?? ""}`}>
      <div className="container-custom">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {heading}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const ItemIcon = Icons[item.icon];
            return (
            <Reveal
              key={item.title}
              className={`${cardBg} rounded-xl p-6 flex items-start gap-4`}
            >
              <div className="p-2 bg-[#1B4D3E]/10 text-[#1B4D3E] rounded-lg flex-shrink-0">
                <ItemIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A2E] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ImportantNotice({ text, bg }: { text: string; bg?: string }) {
  const { lang } = useLanguage();
  return (
    <section className={`py-20 ${bg ?? ""}`}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
            <Icons.shield className="h-6 w-6" aria-hidden="true" />
            {lang === "zh" ? "重要提示" : lang === "ru" ? "Важное уведомление" : "Important Notice"}
          </h3>
          <p className="text-amber-700 leading-relaxed">{text}</p>
        </div>
      </div>
    </section>
  );
}

function CtaSection({
  heading,
  subtitle,
  primary,
  secondary,
}: {
  heading: string;
  subtitle: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string; external?: boolean };
}) {
  return (
    <section id="contact" className="py-20 bg-[#1B4D3E]">
      <div className="container-custom">
        <Reveal className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{heading}</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={primary.href}
              className="bg-white text-[#1B4D3E] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all"
            >
              {primary.label}
            </Link>
            {secondary.external ? (
              <a
                href={secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                {secondary.label}
              </a>
            ) : (
              <Link
                href={secondary.href}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page assembly
// ---------------------------------------------------------------------------
export function ImmunotherapyProjectPage({
  config,
  zhConfig,
  ruConfig,
}: {
  config: ImmunotherapyProjectConfig;
  /** Chinese variant of the same config. When the site language is zh, this
   *  is rendered instead of the English config. The aria-label stays English
   *  on both locales (matches the source site's zh pages). */
  zhConfig?: ImmunotherapyProjectConfig;
  /** Russian variant of the same config. When the site language is ru, this
   *  is rendered instead of the English config. */
  ruConfig?: ImmunotherapyProjectConfig;
}) {
  const { lang } = useLanguage();
  const c =
    lang === "ru" && ruConfig
      ? ruConfig
      : lang === "zh" && zhConfig
        ? zhConfig
        : config;
  return (
    <main
      role="main"
      aria-label={config.ariaLabel}
      className="min-h-screen bg-[#F5F7FA]"
    >
      <Hero hero={c.hero} />
      <StickyNav items={c.stickyNav} />
      <IntroSection heading={c.intro.heading} paragraphs={c.intro.paragraphs} />
      <AdvantagesSection
        heading={c.advantages.heading}
        subtitle={c.advantages.subtitle}
        items={c.advantages.items}
        bg={c.advantages.bg}
      />
      {c.indications && <IndicationsSection config={c.indications} />}
      {c.treatmentContent && (
        <TreatmentContentSection
          heading={c.treatmentContent.heading}
          subtitle={c.treatmentContent.subtitle}
          items={c.treatmentContent.items}
          bg={c.treatmentContent.bg}
        />
      )}
      <ProcessSection
        heading={c.process.heading}
        subtitle={c.process.subtitle}
        steps={c.process.steps}
        summaryNote={c.process.summaryNote}
        bg={c.process.bg}
      />
      {c.efficacy && (
        <EfficacySection
          heading={c.efficacy.heading}
          subtitle={c.efficacy.subtitle}
          stats={c.efficacy.stats}
          safetyHeading={c.efficacy.safetyHeading}
          table={c.efficacy.table}
          footnote={c.efficacy.footnote}
          bg={c.efficacy.bg}
        />
      )}
      {c.cases && (
        <CasesSection heading={c.cases.heading} items={c.cases.items} bg={c.cases.bg} />
      )}
      <CostSection
        heading={c.cost.heading}
        intro={c.cost.intro}
        label={c.cost.label}
        amount={c.cost.amount}
        bg={c.cost.bg}
      />
      <WhyChooseUsSection
        heading={c.whyChooseUs.heading}
        items={c.whyChooseUs.items}
        variant={c.whyChooseUs.variant}
        bg={c.whyChooseUs.bg}
      />
      <ImportantNotice text={c.notice.text} bg={c.notice.bg} />
      <CtaSection
        heading={c.cta.heading}
        subtitle={c.cta.subtitle}
        primary={c.cta.primary}
        secondary={c.cta.secondary}
      />
    </main>
  );
}

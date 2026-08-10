// Shared template for MedKungFu `/projects/*` arthritis detail pages.
// Renders every section of a `PageData` object faithfully to the captured DOM:
// Hero → Intro → Core Advantages → Indications → Treatment Content →
// Treatment Process → Efficacy Data → Real Cases → Support Services →
// Pricing → (Contact). Each section is data-driven; see `types.ts` + `data/*`.
import Link from "next/link";

import { Icons } from "../../shared/icons";
import { Reveal } from "../../shared/Reveal";
import type {
  CaseItem,
  ContactSectionData,
  EfficacySection,
  HeroData,
  IndicationItem,
  IntroData,
  PageData,
  PricingSection,
  ServiceItem,
  TreatmentBlock,
  TreatmentModule,
} from "./types";

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
function HeroSection({ hero }: { hero: HeroData }) {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${hero.gradientClass}`}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
        <div>
          {hero.eyebrow && (
            <p className={`text-lg ${hero.accentTextClass} mb-4 tracking-wider`}>
              {hero.eyebrow}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            {hero.title}
          </h1>
          <p className={`text-xl md:text-2xl ${hero.accentTextClass} mb-4`}>
            {hero.subtitle}
          </p>
          {hero.tagline && (
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              {hero.tagline}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className={`px-8 py-4 ${hero.buttonClass} text-white font-semibold rounded-lg transition-colors`}
            >
              Consult Now
            </a>
            <a
              href="#intro"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Intro ("What is ...")
// ---------------------------------------------------------------------------
function IntroSection({ intro }: { intro: IntroData }) {
  const Check = Icons.checkCircle;
  return (
    <section id="intro" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal x={-30}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
              {intro.title}
            </h2>
            {intro.paragraphs.map((p, i) => (
              <p
                key={i}
                className={i === 0 ? "text-gray-600 text-lg mb-6" : "text-gray-600 mb-6"}
              >
                {p}
              </p>
            ))}
            <div className={`flex items-center space-x-4 ${intro.badgeColor}`}>
              <Check className="h-6 w-6" />
              <span className="font-semibold">{intro.badgeText}</span>
            </div>
          </Reveal>
          <Reveal x={30} className="relative">
            <img
              src={intro.image}
              alt={intro.imageAlt}
              className="rounded-2xl shadow-2xl w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Core Advantages
// ---------------------------------------------------------------------------
function AdvantagesSection({
  title,
  subtitle,
  gridClass,
  items,
}: PageData["advantages"]) {
  return (
    <section id="advantages" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={20} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </Reveal>
        <div className={gridClass}>
          {items.map((item) => {
            const Icon = Icons[item.icon];
            return (
              <Reveal
                key={item.title}
                y={20}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-16 h-16 ${item.iconBg} ${item.iconColor} rounded-xl flex items-center justify-center mb-6`}
                >
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Indications
// ---------------------------------------------------------------------------
function IndicationCard({
  item,
  accentClass,
  checkColor,
}: {
  item: IndicationItem;
  accentClass: string;
  checkColor: string;
}) {
  const Check = Icons.checkCircle;
  return (
    <Reveal
      y={20}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
    >
      <img
        src={item.image}
        alt={item.imageAlt}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">{item.title}</h3>
        <p className={`${accentClass} text-sm mb-4`}>{item.subtitle}</p>
        <ul className="space-y-2">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex items-start text-gray-600 text-sm">
              <Check className={`${checkColor} mr-2 mt-0.5 flex-shrink-0 h-4 w-4`} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function IndicationsSection({
  title,
  subtitle,
  accentClass,
  checkColor,
  items,
}: PageData["indications"]) {
  return (
    <section id="indications" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={20} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <IndicationCard
              key={item.title}
              item={item}
              accentClass={accentClass}
              checkColor={checkColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Treatment Content
// ---------------------------------------------------------------------------
function TreatmentBlockView({
  block,
  checkClass,
  numBg,
}: {
  block: TreatmentBlock;
  checkClass: string;
  numBg: string;
}) {
  const Check = Icons.checkCircle;

  switch (block.type) {
    case "numberedGrid":
      return (
        <div className={block.cols}>
          {block.steps.map((s) => (
            <div key={s.num} className="bg-slate-50 rounded-xl p-4">
              <div className={`w-8 h-8 ${numBg} text-white rounded-full flex items-center justify-center font-bold mb-3`}>
                {s.num}
              </div>
              <h4 className="font-semibold text-[#1A1A2E] mb-1">{s.title}</h4>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      );
    case "cardGrid":
      return (
        <div className={block.cols}>
          {block.items.map((item) => (
            <div
              key={item.title}
              className={block.center ? "bg-slate-50 rounded-xl p-4 text-center" : "bg-slate-50 rounded-xl p-4"}
            >
              <h4 className="font-semibold text-[#1A1A2E] mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      );
    case "infoBox":
      return (
        <div className={`${block.bg} p-4 rounded-lg mb-4`}>
          <p className="text-gray-700 text-sm">
            {block.title && <span className="font-semibold">{block.title}</span>}
            {block.text}
          </p>
        </div>
      );
    case "footnote":
      return (
        <p className="text-gray-500 text-sm bg-slate-50 p-4 rounded-lg">
          {block.text}
        </p>
      );
    case "numberedList":
      return (
        <div className="space-y-4">
          {block.steps.map((s) => (
            <div key={s.num} className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-start gap-4">
                <div className={`w-8 h-8 ${numBg} text-white rounded-full flex items-center justify-center font-bold flex-shrink-0`}>
                  {s.num}
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A1A2E] mb-1">{s.title}</h4>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    case "phaseGroupList":
      return (
        <div className="space-y-6">
          {block.groups.map((g) => (
            <div key={g.title} className="bg-slate-50 rounded-xl p-4">
              {g.badge ? (
                <div className="flex items-center gap-4 mb-3">
                  <h4
                    className={`font-semibold text-[#1A1A2E] ${g.titleColor}`}
                  >
                    {g.title}
                  </h4>
                  <span className={g.badge.badgeClass}>{g.badge.text}</span>
                </div>
              ) : (
                <h4 className={`font-semibold text-[#1A1A2E] mb-3 ${g.titleColor}`}>
                  {g.title}
                </h4>
              )}
              <ul className="space-y-2">
                {g.bullets.map((b, i) => (
                  <li key={i} className="flex items-start text-gray-600 text-sm">
                    <Check className={`${checkClass} mr-2 mt-0.5 flex-shrink-0 h-4 w-4`} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case "surgeryTable":
      return (
        <div className="mb-6">
          {block.heading && (
            <h4 className="font-semibold text-[#1A1A2E] mb-4">{block.heading}</h4>
          )}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  {block.headers.map((h) => (
                    <th
                      key={h}
                      className={`text-left py-3 px-4 ${block.headerClass} font-semibold`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((cells, r) => (
                  <tr key={r} className="border-b border-gray-100">
                    {cells.map((cell, c) => (
                      <td
                        key={c}
                        className={
                          c === cells.length - 1
                            ? "py-3 px-4 text-gray-600 text-sm"
                            : c === cells.length - 2
                              ? "py-3 px-4 text-gray-700 font-medium"
                              : "py-3 px-4 text-gray-700"
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case "chipGrid":
      return (
        <div>
          {block.heading && (
            <h4 className="font-semibold text-[#1A1A2E] mb-4">{block.heading}</h4>
          )}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {block.items.map((chip) => (
              <div key={chip} className="bg-slate-50 rounded-xl p-4 text-center">
                <p className="text-gray-700 text-sm">{chip}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "bulletCardGrid":
      return (
        <div className={block.cols}>
          {block.cards.map((card) => (
            <div key={card.title} className="bg-slate-50 rounded-xl p-4">
              <h4 className="font-semibold text-[#1A1A2E] mb-3">{card.title}</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                {card.bullets.map((b, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`${checkClass} mr-2 mt-0.5 flex-shrink-0 h-4 w-4`} />
                    {b}
                  </li>
                ))}
              </ul>
              {card.trailing && (
                <p className="text-gray-600 text-sm mt-3">{card.trailing}</p>
              )}
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

function TreatmentSection({
  title,
  subtitle,
  modules,
}: PageData["treatment"]) {
  return (
    <section id="treatment" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={20} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </Reveal>
        <div className="space-y-8">
          {modules.map((module) => (
            <ModuleCard key={module.title} module={module} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ module }: { module: TreatmentModule }) {
  const Icon = Icons[module.icon];
  return (
    <Reveal y={20} className="bg-white rounded-2xl p-8 shadow-sm">
      <div className="flex items-center space-x-4 mb-6">
        <div
          className={`w-14 h-14 ${module.iconBg} ${module.iconColor} rounded-xl flex items-center justify-center`}
        >
          <Icon className="h-8 w-8" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#1A1A2E]">{module.title}</h3>
          <p className={module.iconColor}>{module.subtitle}</p>
        </div>
      </div>
      {module.blocks.map((block, i) => (
        <TreatmentBlockView
          key={i}
          block={block}
          checkClass={module.checkClass}
          numBg={module.numBg}
        />
      ))}
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Treatment Process
// ---------------------------------------------------------------------------
function ProcessSection({
  title,
  subtitle,
  layout,
  gridClass,
  numBg,
  numText,
  timeBadgeClass,
  steps,
}: PageData["process"]) {
  if (layout === "grid") {
    return (
      <section id="process" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal y={20} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          </Reveal>
          <div className={gridClass}>
            {steps.map((step, i) => (
              <Reveal
                key={i}
                y={20}
                className="bg-slate-50 rounded-2xl p-6 relative"
              >
                <div
                  className={`w-10 h-10 ${numBg} text-white rounded-full flex items-center justify-center font-bold mb-4`}
                >
                  {i + 1}
                </div>
                <h3 className="font-bold text-[#1A1A2E] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="process" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={20} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </Reveal>
        <div className="space-y-6">
          {steps.map((step, i) => (
            <Reveal key={i} y={20} className="bg-slate-50 rounded-2xl p-6 relative">
              <div className="flex items-start gap-6">
                <div
                  className={`w-12 h-12 ${numBg} text-white rounded-full flex items-center justify-center font-bold ${numText} flex-shrink-0`}
                >
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-bold text-[#1A1A2E] text-lg">
                      {step.title}
                    </h3>
                    {step.time && (
                      <span className={timeBadgeClass}>{step.time}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Efficacy Data
// ---------------------------------------------------------------------------
function EfficacyTable({
  headers,
  headerClass,
  badgeClass,
  rows,
}: NonNullable<EfficacySection["table"]>) {
  return (
    <div className="overflow-x-auto mb-12">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700">
            {headers.map((h) => (
              <th
                key={h}
                className={`text-left py-4 px-4 ${headerClass} font-semibold`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-800">
              {row.cells.map((cell, c) => (
                <td
                  key={c}
                  className={
                    c === row.cells.length - 1
                      ? "py-4 px-4 text-white"
                      : "py-4 px-4 text-gray-300 text-sm"
                  }
                >
                  {cell}
                </td>
              ))}
              {row.badge && (
                <td className="py-4 px-4">
                  <span
                    className={`${badgeClass} px-3 py-1 rounded-full text-sm`}
                  >
                    {row.badge}
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EfficacySectionView({ efficacy }: { efficacy: EfficacySection }) {
  return (
    <section id="efficacy" className="py-20 lg:py-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={20} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{efficacy.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{efficacy.subtitle}</p>
        </Reveal>

        {efficacy.table && <EfficacyTable {...efficacy.table} />}

        {efficacy.timeline && (
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-8">{efficacy.timeline.title}</h3>
            </div>
            <div className="space-y-4 mb-12">
              {efficacy.timeline.items.map((item, i) => (
                <Reveal
                  key={i}
                  x={-20}
                  className="bg-slate-800 rounded-xl p-4 flex items-start gap-4"
                >
                  <div className={`${item.timeClass} flex-shrink-0`}>
                    {item.time}
                  </div>
                  <div className="text-gray-300">{item.text}</div>
                </Reveal>
              ))}
            </div>
          </>
        )}

        {efficacy.stats && (
          <div className="grid md:grid-cols-3 gap-8">
            {efficacy.stats.map((s) => (
              <Reveal
                key={s.label}
                scale={0.9}
                className="bg-slate-800 rounded-2xl p-8 text-center"
              >
                <div className={`text-5xl font-bold ${efficacy.statClass} mb-2`}>
                  {s.value}
                </div>
                <p className="text-gray-300">{s.label}</p>
              </Reveal>
            ))}
          </div>
        )}

        {efficacy.valueCards && (
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-8">{efficacy.valueCardsTitle}</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {efficacy.valueCards.map((card) => (
                <Reveal
                  key={card.title}
                  y={20}
                  className="bg-slate-800 rounded-2xl p-6"
                >
                  <h4 className={`font-bold ${efficacy.valueCardTitleClass} mb-3`}>
                    {card.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{card.text}</p>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Real Cases
// ---------------------------------------------------------------------------
function CasesSection({
  title,
  subtitle,
  gridClass,
  imgClass,
  accentClass,
  descriptionClass,
  items,
}: PageData["cases"]) {
  return (
    <section id="cases" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={20} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </Reveal>
        <div className={gridClass}>
          {items.map((item) => (
            <CaseCard
              key={item.title}
              item={item}
              imgClass={imgClass}
              accentClass={accentClass}
              descriptionClass={descriptionClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  item,
  imgClass,
  accentClass,
  descriptionClass,
}: {
  item: CaseItem;
  imgClass: string;
  accentClass: string;
  descriptionClass: string;
}) {
  return (
    <Reveal y={20} className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <img src={item.image} alt={item.imageAlt} className={`w-full ${imgClass} object-cover`} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1A1A2E] mb-1">{item.title}</h3>
        <p className={`${accentClass} text-sm mb-4`}>{item.subtitle}</p>
        <p className={descriptionClass}>{item.description}</p>
      </div>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Support Services
// ---------------------------------------------------------------------------
function ServicesSection({
  title,
  subtitle,
  iconBg,
  iconColor,
  items,
}: PageData["services"]) {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={20} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </Reveal>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <ServiceCard
              key={item.title}
              item={item}
              iconBg={iconBg}
              iconColor={iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  item,
  iconBg,
  iconColor,
}: {
  item: ServiceItem;
  iconBg: string;
  iconColor: string;
}) {
  const Icon = Icons[item.icon];
  return (
    <Reveal
      y={20}
      className="bg-slate-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
    >
      <div
        className={`w-14 h-14 ${iconBg} ${iconColor} rounded-xl flex items-center justify-center mx-auto mb-4`}
      >
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="font-bold text-[#1A1A2E] mb-2">{item.title}</h3>
      <p className="text-gray-600 text-sm">{item.description}</p>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------
function PricingCheck({ className }: { className: string }) {
  const Check = Icons.checkCircle;
  return <Check className={`${className} mr-2 h-4 w-4`} />;
}

function PricingPackages({ pricing }: { pricing: Extract<PricingSection, { variant: "packages" }> }) {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={20} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {pricing.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{pricing.subtitle}</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.packages.map((pkg) => (
            <Reveal
              key={pkg.name}
              y={20}
              className={
                pkg.recommended
                  ? `bg-white rounded-2xl p-8 shadow-lg ${pricing.borderClass} relative`
                  : "bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              }
            >
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </div>
              )}
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">{pkg.name}</h3>
              <div className={`text-3xl font-bold ${pricing.priceClass} mb-4`}>
                {pkg.price}
              </div>
              <ul className="space-y-3 text-gray-600">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <PricingCheck className={pricing.checkClass} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        {pricing.footnote && (
          <p className="text-center text-gray-500 text-sm mt-8">
            {pricing.footnote}
          </p>
        )}
      </div>
    </section>
  );
}

function PricingReference({
  pricing,
}: {
  pricing: Extract<PricingSection, { variant: "reference" }>;
}) {
  const { costCard, compareCard } = pricing;
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={20} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            {pricing.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{pricing.subtitle}</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Reveal
            y={20}
            className={`bg-white rounded-2xl p-8 shadow-lg ${costCard.borderClass}`}
          >
            <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
              {costCard.title}
            </h3>
            <div className={`text-4xl font-bold ${costCard.priceClass} mb-2`}>
              {costCard.price}
            </div>
            <p className="text-gray-500 mb-4">{costCard.priceNote}</p>
            <ul className="space-y-3 text-gray-600">
              {costCard.items.map((item) => (
                <li key={item} className="flex items-center">
                  <PricingCheck className={costCard.checkClass} />
                  {item}
                </li>
              ))}
            </ul>
            {costCard.footnote && (
              <p className="text-gray-500 text-sm mt-4">{costCard.footnote}</p>
            )}
            {costCard.footnote2 && (
              <p className="text-gray-500 text-sm mt-4">{costCard.footnote2}</p>
            )}
          </Reveal>

          <Reveal
            y={20}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
              {compareCard.title}
            </h3>
            <div className="space-y-4">
              {compareCard.rows.map((row) => (
                <div key={row.label} className="flex justify-between items-center">
                  <span className="text-gray-600">{row.label}</span>
                  <span className={`text-2xl font-bold ${row.valueClass}`}>
                    {row.value}
                  </span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-gray-600">{compareCard.savings.label}</span>
                <span className="text-2xl font-bold text-green-600">
                  {compareCard.savings.value}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PricingSectionView({ pricing }: { pricing: PricingSection }) {
  if (pricing.variant === "packages") {
    return <PricingPackages pricing={pricing} />;
  }
  return <PricingReference pricing={pricing} />;
}

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------
function ContactSection({ contact }: { contact: ContactSectionData }) {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal y={20} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{contact.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{contact.subtitle}</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contact.items.map((item) => {
            const Icon = Icons[item.icon];
            return (
              <Reveal key={item.title} y={20} className="bg-slate-800 rounded-2xl p-8 text-center">
                <Icon className={`h-10 w-10 ${contact.iconClass} mx-auto mb-4`} />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Reveal y={20}>
            <Link
              className={`inline-flex items-center px-8 py-4 ${contact.buttonClass} text-white font-semibold rounded-lg transition-colors`}
              href={contact.ctaHref}
            >
              {contact.ctaLabel}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page assembly
// ---------------------------------------------------------------------------
export function ProjectDetailPage({ data }: { data: PageData }) {
  return (
    <main role="main" aria-label={data.mainAriaLabel} className="min-h-screen bg-white">
      <HeroSection hero={data.hero} />
      <IntroSection intro={data.intro} />
      <AdvantagesSection {...data.advantages} />
      <IndicationsSection {...data.indications} />
      <TreatmentSection {...data.treatment} />
      <ProcessSection {...data.process} />
      <EfficacySectionView efficacy={data.efficacy} />
      <CasesSection {...data.cases} />
      <ServicesSection {...data.services} />
      <PricingSectionView pricing={data.pricing} />
      {data.contact && <ContactSection contact={data.contact} />}
    </main>
  );
}

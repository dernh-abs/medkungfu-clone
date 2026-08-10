// Shared page template for MedKungFu stem-cell project detail pages.
// Renders every section of the captured <main role="main"> from a data object.
// Bilingual: renders Chinese content when the site language is zh (via the
// `zhConfig` prop); otherwise renders the English `data` unchanged.
"use client";
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Icons, type IconName } from "../../shared/icons";
import { Reveal } from "../../shared/Reveal";
import type {
  AdvantagesData,
  CaseStudiesData,
  CostSectionData,
  CtaData,
  EfficacyData,
  HeroData,
  IndicationsData,
  ProductIntroData,
  StemCellPageData,
  TreatmentDetailsData,
  TreatmentProcessData,
} from "./types";

function Icon({ name, className }: { name: IconName; className?: string }) {
  const IconComp = Icons[name];
  return <IconComp className={className} aria-hidden="true" />;
}

/** Route links use next/link; in-page anchors (#...) stay as plain <a>. */
function CtaLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function HeroSection({ hero }: { hero: HeroData }) {
  return (
    <section
      aria-label="Hero Section"
      className={`relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br ${hero.gradient}`}
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="container-custom relative z-10 px-4 py-20">
        <div className="text-center text-white max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icons.checkCircle className="h-4 w-4" aria-hidden="true" />
            <span>{hero.eyebrow}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat leading-tight">
            {hero.title.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            {hero.description}
          </p>
          {hero.stats && hero.stats.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {hero.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3"
                >
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-sm text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
          )}
          {hero.primaryCta && hero.secondaryCta && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CtaLink href={hero.primaryCta.href} className={hero.primaryCtaClass ?? ""}>
                {hero.primaryCta.label}
              </CtaLink>
              <CtaLink href={hero.secondaryCta.href} className={hero.secondaryCtaClass ?? ""}>
                {hero.secondaryCta.label}
              </CtaLink>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F5F7FA"
          />
        </svg>
      </div>
    </section>
  );
}

function ProductIntroSection({ data }: { data: ProductIntroData }) {
  return (
    <section className={`${data.pyClass} bg-white`}>
      <div className="container-custom px-4">
        <div className="max-w-4xl mx-auto">
          {data.centerWrapper ? (
            <div className="text-center mb-12">
              <h2 className={data.headingClass}>{data.title}</h2>
            </div>
          ) : (
            <h2 className={data.headingClass}>{data.title}</h2>
          )}
          <div className="prose prose-lg max-w-none">
            {data.paragraphs.map((p, i) =>
              p.callout ? (
                <div key={i} className={p.calloutClass}>
                  <p className="text-gray-800 leading-relaxed">{p.text}</p>
                </div>
              ) : (
                <p key={i} className={data.paragraphClass}>
                  {p.text}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function AdvantagesSection({ data }: { data: AdvantagesData }) {
  return (
    <section className={`${data.pyClass} bg-[#F5F7FA]`} id={data.id}>
      <div className="container-custom px-4">
        <Reveal y={20} className={data.headingWrapClass}>
          <h2 className={data.headingClass}>{data.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{data.subtitle}</p>
        </Reveal>
        <div className={data.gridClass}>
          {data.items.map((item) => {
            return (
              <Reveal key={item.title} y={data.revealOffset} className="flex">
                <div className={`${data.cardClass} w-full`}>
                  {data.cardLayout === "stacked" ? (
                    <>
                      <div className={data.iconTileClass}>
                        <Icon name={item.icon} className="h-8 w-8" />
                      </div>
                      <h3 className={data.titleClass}>{item.title}</h3>
                      <p className={data.descClass}>{item.description}</p>
                    </>
                  ) : (
                    <div className="flex items-start gap-4">
                      <div className={data.iconTileClass}>
                        <Icon name={item.icon} className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className={data.titleClass}>{item.title}</h3>
                        <p className={data.descClass}>{item.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndicationsSection({ data }: { data: IndicationsData }) {
  return (
    <section className={`${data.pyClass} bg-white`}>
      <div className="container-custom px-4">
        {data.revealWhole ? (
          <Reveal y={20} className={data.wrapClass}>
            <h2 className={data.headingClass}>{data.title}</h2>
            {data.simpleList ? (
              <div className={data.simpleList.listClass}>
                {data.simpleList.items.map((item, i) => (
                  <div key={i} className={data.simpleList?.itemClass}>
                    <Icons.checkCircle className={`h-6 w-6 ${data.simpleList?.iconClass}`} aria-hidden="true" />
                    <p className={data.simpleList?.textClass}>{item}</p>
                  </div>
                ))}
              </div>
            ) : data.boxedList ? (
              <div className={`${data.boxedList.boxClass} ${data.boxedList.extraClass ?? ""}`}>
                <ul className="space-y-4">
                  {data.boxedList.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icons.checkCircle className={`flex-shrink-0 w-5 h-5 ${data.boxedList?.iconClass} mt-0.5`} aria-hidden="true" />
                      <span className={data.boxedList?.textClass}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {data.groups ? (
              <div className="space-y-6">
                {data.groups.map((group) => (
                  <div key={group.title} className={group.boxClass}>
                    <h3 className="text-xl font-bold text-[#1A1A2E] mb-4 flex items-center gap-2">
                      <Icon name={group.titleIcon} className={group.iconClass} />
                      {group.title}
                    </h3>
                    <ul className="space-y-3">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Icons.checkCircle className={`flex-shrink-0 w-5 h-5 ${group.itemIconClass} mt-0.5`} aria-hidden="true" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}
            {data.contraindications ? (
              <ContraindicationsBlock data={data.contraindications} />
            ) : null}
          </Reveal>
        ) : (
          <div className={data.wrapClass}>
            <Reveal y={20} className={data.headingWrapClass}>
              <h2 className={data.headingClass}>{data.title}</h2>
              {data.subtitle ? (
                <p className={data.subtitleClass ?? "text-gray-600"}>{data.subtitle}</p>
              ) : null}
            </Reveal>
            {data.simpleList ? (
              <Reveal y={20} className={data.simpleList.listClass}>
                {data.simpleList.items.map((item, i) => (
                  <div key={i} className={data.simpleList?.itemClass}>
                    <Icons.checkCircle className={`h-6 w-6 ${data.simpleList?.iconClass}`} aria-hidden="true" />
                    <p className={data.simpleList?.textClass}>{item}</p>
                  </div>
                ))}
              </Reveal>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}

function ContraindicationsBlock({
  data,
}: {
  data: NonNullable<IndicationsData["contraindications"]>;
}) {
  return (
    <>
      {data.title ? <h3 className={data.titleClass}>{data.title}</h3> : null}
      <div className={data.boxClass}>
        <ul className="space-y-3">
          {data.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              {data.icon === "thermometer" ? (
                <Icons.thermometer className={`flex-shrink-0 w-5 h-5 ${data.iconClass} mt-0.5`} aria-hidden="true" />
              ) : (
                <span className="text-red-500 mt-0.5">•</span>
              )}
              <span className={data.textClass}>{item}</span>
            </li>
          ))}
        </ul>
        {data.footerNote ? (
          <p className="mt-4 text-sm text-gray-600 italic">{data.footerNote}</p>
        ) : null}
      </div>
    </>
  );
}

function TreatmentDetailsSection({ data }: { data: TreatmentDetailsData }) {
  return (
    <section className={`${data.pyClass} bg-[#F5F7FA]`}>
      <div className="container-custom px-4">
        <Reveal y={20} className={data.headingWrapClass}>
          <h2 className={data.headingClass}>{data.title}</h2>
        </Reveal>
        <div className={data.gridClass}>
          {data.items.map((item) => (
            <Reveal key={item.title} y={20} className="flex">
              <div className={`${data.cardClass} w-full`}>
                {data.cardLayout === "header-block" ? (
                  <>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={data.iconTileClass}>
                        <Icon name={item.icon} className="h-6 w-6" />
                      </div>
                      <h3 className={data.titleClass}>{item.title}</h3>
                    </div>
                    <p className={data.descClass}>{item.description}</p>
                  </>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className={data.iconTileClass}>
                      <Icon name={item.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className={data.titleClass}>{item.title}</h3>
                      <p className={data.descClass}>{item.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TreatmentProcessSection({ data }: { data: TreatmentProcessData }) {
  return (
    <section className={`${data.pyClass} bg-white`}>
      <div className="container-custom px-4">
        <Reveal y={20} className={data.headingWrapClass}>
          <h2 className={data.headingClass}>{data.title}</h2>
          <p className="text-gray-600">{data.subtitle}</p>
        </Reveal>
        <div className={data.wrapClass}>
          <div className="space-y-6">
            {data.steps.map((step, i) => (
              <Reveal key={step.title} y={data.revealOffset}>
                <div className={`${data.stepCardClass} w-full`}>
                  <div className={data.stepLayoutClass}>
                    {data.numberWrap ? (
                      <div className="flex-shrink-0">
                        <div className={data.numberClass}>{i + 1}</div>
                      </div>
                    ) : (
                      <div className={data.numberClass}>{i + 1}</div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={data.iconClass}>
                          <Icon name={step.icon} className="h-7 w-7" />
                        </div>
                        <h3 className={data.stepTitleClass}>{step.title}</h3>
                      </div>
                      <p className={data.stepDescClass}>{step.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EfficacySection({ data }: { data: EfficacyData }) {
  return (
    <section className={`${data.pyClass} bg-gradient-to-br ${data.gradient} text-white`}>
      <div className="container-custom px-4">
        <Reveal y={20} className={data.headingWrapClass}>
          <h2 className={data.headingClass}>{data.title}</h2>
          <p className={data.subtitleClass}>{data.subtitle}</p>
        </Reveal>
        <div className={data.gridClass}>
          {data.items.map((item) => (
            <Reveal key={item.title} scale={0.9} className="flex">
              <div className={`${data.cardClass} w-full`}>
                <div className={data.iconTileClass}>
                  <Icon name={item.icon} className="h-7 w-7" />
                </div>
                {data.statFirst ? (
                  <>
                    <div className={data.statClass}>{item.stat}</div>
                    <h3 className={data.itemTitleClass}>{item.title}</h3>
                  </>
                ) : (
                  <>
                    <h3 className={data.itemTitleClass}>{item.title}</h3>
                    <div className={data.statClass}>{item.stat}</div>
                  </>
                )}
                <p className={data.descClass}>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection({ data }: { data: CaseStudiesData }) {
  return (
    <section className={`${data.pyClass} ${data.bgClass}`}>
      <div className="container-custom px-4">
        <Reveal y={20} className={data.headingWrapClass}>
          <h2 className={data.headingClass}>{data.title}</h2>
          <p className="text-gray-600">{data.subtitle}</p>
        </Reveal>
        <div className={data.gridClass}>
          {data.cases.map((c) => (
            <Reveal key={c.title} y={data.revealOffset} className="flex">
              <div className={`${data.cardClass} w-full`}>
                <div className={`${c.headerGradient} text-white p-6`}>
                  {c.headerStyle === "pf" ? (
                    <>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm opacity-80">{c.location}</span>
                        <span className="text-sm font-semibold">{c.locationMeta}</span>
                      </div>
                      <h3 className="text-xl font-bold">{c.title}</h3>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                          {c.location}
                        </span>
                        <span className="text-sm">{c.age}</span>
                      </div>
                      <h3 className="font-bold text-lg">{c.title}</h3>
                      {c.subtitle ? (
                        <p className="text-sm text-white/80 mt-1">{c.subtitle}</p>
                      ) : null}
                    </>
                  )}
                </div>
                <div className="p-6">
                  {c.statRows ? (
                    <div className="space-y-3 mb-6">
                      {c.statRows.map((row, j) => (
                        <div key={j} className="flex justify-between text-sm">
                          <span className="text-gray-500">{row.label}</span>
                          <span className={row.valueClass ?? "font-semibold"}>{row.value}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {c.statBoxes ? (
                    <div
                      className={`grid ${c.statBoxCols === 3 ? "grid-cols-3" : "grid-cols-2"} gap-3 mb-4`}
                    >
                      {c.statBoxes.map((box, j) => (
                        <div
                          key={j}
                          className={`${box.boxClass} rounded-lg p-3 text-center ${box.colSpan ? "col-span-2" : ""}`}
                        >
                          <div className="text-xs text-gray-500 mb-1">{box.label}</div>
                          <div className={`text-lg font-bold ${box.valueClass}`}>{box.value}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {c.introItalic ? (
                    <p className="text-sm text-gray-600 mb-3 italic">{c.introItalic}</p>
                  ) : null}
                  {c.callout ? (
                    <div className={c.calloutClass}>
                      <p className="text-sm text-gray-700 leading-relaxed">{c.callout}</p>
                    </div>
                  ) : null}
                  {c.body ? (
                    <div className={c.callout ? "mb-4" : "mb-4"}>
                      <p className="text-sm text-gray-700 leading-relaxed">{c.body}</p>
                    </div>
                  ) : null}
                  {c.quote ? (
                    <blockquote
                      className={`border-l-4 ${c.quoteBorderClass ?? ""} pl-4 mb-4 italic text-gray-600 text-sm`}
                    >
                      {c.quote}
                    </blockquote>
                  ) : null}
                  {c.footerBoxClass ? (
                    <div className={c.footerBoxClass}>
                      <div className={`flex items-center gap-2 ${c.footerClass} text-sm`}>
                        <Icon name={c.footerIcon} className="h-4 w-4" />
                        <span>{c.footerLabel}</span>
                      </div>
                    </div>
                  ) : (
                    <div className={`flex items-center gap-2 ${c.footerClass} text-sm font-medium`}>
                      <Icon name={c.footerIcon} className="h-4 w-4" />
                      <span>{c.footerLabel}</span>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CostSection({ data }: { data: CostSectionData }) {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const body = data.body;
  return (
    <section className={`${data.pyClass} ${data.bgClass}`}>
      <div className="container-custom px-4">
        {body.variant === "card" ? (
          <div className={body.wrapClass}>
            <Reveal y={20} className={body.cardClass}>
              <Icon name={body.icon} className={`h-12 w-12 ${body.iconClass}`} />
              <h2 className={body.titleClass}>{body.title}</h2>
              <div className={body.priceClass}>{body.price}</div>
              <p className="text-gray-600 mb-6">{body.subtitle}</p>
              <p className="text-sm text-gray-500">{body.note}</p>
              <CtaLink href={body.cta.href} className={body.btnClass}>
                {body.cta.label}
                <Icons.arrowRight className="h-5 w-5" aria-hidden="true" />
              </CtaLink>
            </Reveal>
          </div>
        ) : (
          <Reveal y={20} className={body.wrapClass}>
            <h2 className={body.titleClass}>{body.title}</h2>
            {body.variant === "table" ? (
              <div className={body.tableWrapClass}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className={body.headerBorderClass}>
                        <th className="text-left py-4 px-4 font-bold text-[#1A1A2E]">
                          {isZh ? "项目" : "Item"}
                        </th>
                        <th className="text-center py-4 px-4 font-bold text-[#1A1A2E]">
                          {isZh ? "单次" : "Per Session"}
                        </th>
                        <th className="text-center py-4 px-4 font-bold text-[#1A1A2E]">
                          {isZh ? "疗程" : "Total Course"}
                        </th>
                        <th className="text-left py-4 px-4 font-bold text-[#1A1A2E]">
                          {isZh ? "备注" : "Notes"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {body.rows.map((row, i) => (
                        <tr key={i} className={body.rowBorderClass}>
                          <td className="py-4 px-4">
                            <div className="font-medium text-[#1A1A2E]">{row.item}</div>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <div className={`text-lg font-bold ${body.accentClass}`}>
                              {row.perSessionMain}
                            </div>
                            <div className="text-sm text-gray-500">{row.perSessionSub}</div>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <div className={`text-lg font-bold ${body.accentClass}`}>
                              {row.totalCourseMain}
                            </div>
                            <div className="text-sm text-gray-500">{row.totalCourseSub}</div>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-600">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className={body.notesWrapClass ?? ""}>
                  {body.notes.map((note, i) => (
                    <div
                      key={i}
                      className={`${body.notesWrapClass ? "p-4" : "mt-6 p-4"} ${note.boxClass}`}
                    >
                      <p className="text-sm text-gray-700">
                        {note.label ? <strong>{note.label}: </strong> : null}
                        {note.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className={body.tableWrapClass}>
                <div className="text-center mb-6">
                  <div className={body.priceClass}>{body.price}</div>
                  <div className="text-xl text-gray-500">{body.priceSub}</div>
                  <div className="text-sm text-gray-400 mt-1">{body.priceCaption}</div>
                </div>
                <div className="space-y-3">
                  {body.notes.map((note, i) => (
                    <div key={i} className={`p-4 ${note.boxClass}`}>
                      <p className="text-sm text-gray-700">
                        {note.label ? <strong>{note.label}: </strong> : null}
                        {note.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Reveal>
        )}
      </div>
    </section>
  );
}

function CtaSection({ data }: { data: CtaData }) {
  return (
    <section className={`${data.pyClass} bg-gradient-to-br ${data.gradient} ${data.sectionClass ?? ""}`}>
      <div className={data.containerClass}>
        <Reveal y={20} className={data.wrapClass}>
          <h2 className={data.titleClass}>{data.title}</h2>
          <p className={data.descClass}>{data.desc}</p>
          <div className={data.buttonsClass}>
            <CtaLink href={data.primary.href} className={data.primary.class}>
              {data.primary.label}
              {data.primary.showArrow ? <Icons.arrowRight className="h-5 w-5" aria-hidden="true" /> : null}
            </CtaLink>
            <CtaLink href={data.secondary.href} className={data.secondary.class}>
              {data.secondary.label}
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function StemCellDetailPage({
  data,
  zhConfig,
}: {
  data: StemCellPageData;
  /** Chinese variant of the same data. When the site language is zh, this is
   *  rendered instead of the English `data`. The aria-label stays English on
   *  both locales (matches the source site's zh pages). */
  zhConfig?: StemCellPageData;
}) {
  const { lang } = useLanguage();
  const c = lang === "zh" && zhConfig ? zhConfig : data;
  return (
    <main
      role="main"
      aria-label={data.ariaLabel}
      className="min-h-screen bg-[#F5F7FA]"
    >
      <HeroSection hero={c.hero} />
      <ProductIntroSection data={c.productIntro} />
      <AdvantagesSection data={c.advantages} />
      <IndicationsSection data={c.indications} />
      <TreatmentDetailsSection data={c.treatmentDetails} />
      <TreatmentProcessSection data={c.treatmentProcess} />
      <EfficacySection data={c.efficacy} />
      <CaseStudiesSection data={c.caseStudies} />
      <CostSection data={c.cost} />
      <CtaSection data={c.cta} />
    </main>
  );
}

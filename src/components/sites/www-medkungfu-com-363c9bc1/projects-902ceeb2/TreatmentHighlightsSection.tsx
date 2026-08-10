// "Treatment Highlights" section matching MedKungFu's /projects page.
// White rounded panel with 4 light-gray cards in a 2-col grid.
// Fully bilingual: heading via the site translation dictionary (projects.*
// keys); card titles/points switch to Chinese in zh mode and resolve through
// the merged RU map in ru mode.
"use client";

import { RU } from "@/lib/i18n/ru";
import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface Highlight {
  title: string;
  /** Chinese title shown in zh mode (verbatim from the source zh page). */
  titleZh: string;
  icon: LucideIcon;
  points: string[];
  /** Chinese points shown in zh mode (verbatim from the source zh page). */
  pointsZh: string[];
}

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Heavy Ion/Proton Therapy",
    titleZh: "重离子/质子治疗",
    icon: Icons.activity,
    points: [
      "1/3 of US cost",
      "54 centers, no months waiting",
      "90%+ 5-year local control rate for pancreatic cancer",
    ],
    pointsZh: ["美国费用的1/3", "54个中心，无需数月等待", "胰腺癌5年局部控制率90%+"],
  },
  {
    title: "CAR-T Cell Therapy",
    titleZh: "CAR-T细胞治疗",
    icon: Icons.dna,
    points: [
      "1/5 to 1/8 of US cost",
      "#1 in clinical trials globally",
      "Significantly improved patient survival",
    ],
    pointsZh: ["美国费用的1/5至1/8", "全球临床试验数量第一", "显著提高患者生存率"],
  },
  {
    title: "BNCT Boron Neutron Capture Therapy",
    titleZh: "BNCT硼中子俘获治疗",
    icon: Icons.scan,
    points: ["Targeted radiation for refractory tumors", "Advanced neutron beam technology"],
    pointsZh: ["难治性肿瘤的靶向放疗", "先进的中子束技术"],
  },
  {
    title: "Stem Cell Regenerative Therapy",
    titleZh: "干细胞再生治疗",
    icon: Icons.sparkles,
    points: ["First functional cure for Type 1 diabetes globally", "About 1/10 of US cost"],
    pointsZh: ["全球首例1型糖尿病功能性治愈", "约为美国费用的1/10"],
  },
];

export function TreatmentHighlightsSection() {
  const { t, lang } = useLanguage();
  const zh = lang === "zh";
  const ru = lang === "ru";
  return (
    <section
      aria-labelledby="highlights-heading"
      className="bg-white rounded-2xl p-10 shadow-sm"
    >
      <h2
        id="highlights-heading"
        className="text-2xl font-bold mb-10 text-center text-[#1A1A2E] font-montserrat"
      >
        {t("projects.treatmentHighlights")}
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none" role="list">
        {HIGHLIGHTS.map((item) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} scale={0.95} className="flex">
              <li className="p-6 bg-[#F5F7FA] rounded-xl w-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className="p-3 bg-[#1B4D3E]/10 text-[#1B4D3E] rounded-lg"
                    aria-hidden="true"
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] font-montserrat">
                    {ru
                      ? (RU[item.title] ?? item.title)
                      : zh
                        ? item.titleZh
                        : item.title}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 list-none" role="list">
                  {item.points.map((point, pointIdx) => (
                    <li key={point}>
                      •{" "}
                      {ru
                        ? (RU[point] ?? point)
                        : zh
                          ? item.pointsZh[pointIdx]
                          : point}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

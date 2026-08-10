// About MedKungFu — Who We Are / Our Commitment / Mission & Core Services /
// Our Values / Our Expert Team. Matches /about. Bilingual via the site
// translation dictionary (about.* keys).
"use client";

import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const CORE_SERVICE_KEYS = [
  "about.service1",
  "about.service2",
  "about.service3",
  "about.service4",
];

interface Value {
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
}

const VALUES: Value[] = [
  {
    icon: Icons.shield,
    titleKey: "about.value1Title",
    descriptionKey: "about.value1Desc",
  },
  {
    icon: Icons.award,
    titleKey: "about.value2Title",
    descriptionKey: "about.value2Desc",
  },
  {
    icon: Icons.heart,
    titleKey: "about.value3Title",
    descriptionKey: "about.value3Desc",
  },
  {
    icon: Icons.globe,
    titleKey: "about.value4Title",
    descriptionKey: "about.value4Desc",
  },
];

interface TeamMember {
  titleKey: string;
  descriptionKey: string;
}

const TEAM: TeamMember[] = [
  { titleKey: "about.team1Title", descriptionKey: "about.team1Desc" },
  { titleKey: "about.team2Title", descriptionKey: "about.team2Desc" },
  { titleKey: "about.team3Title", descriptionKey: "about.team3Desc" },
];

function SectionHeading({ id, text }: { id: string; text: string }) {
  return (
    <h2
      id={id}
      className="text-xl font-semibold text-[#1B4D3E] mb-4 flex items-center justify-center"
    >
      <span className="w-8 h-1 bg-[#1B4D3E] rounded mr-3" aria-hidden="true" />
      {text}
      <span className="w-8 h-1 bg-[#1B4D3E] rounded ml-3" aria-hidden="true" />
    </h2>
  );
}

export function AboutHeader() {
  const { t } = useLanguage();
  return (
    <Reveal>
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-8 font-montserrat">
        {t("about.title")}
      </h1>
    </Reveal>
  );
}

export function AboutIntro() {
  const { t } = useLanguage();
  return (
    <article className="bg-white rounded-2xl shadow-sm p-8 md:p-12 max-w-4xl mx-auto">
      <section aria-labelledby="who-we-are-heading">
        <SectionHeading id="who-we-are-heading" text={t("about.whoWeAre")} />
        <p className="text-gray-600 leading-relaxed text-lg">
          {t("about.whoWeAreDesc")}
        </p>
      </section>
      <section
        aria-labelledby="our-commitment-heading"
        className="border-t border-gray-100 pt-8 mt-8"
      >
        <SectionHeading
          id="our-commitment-heading"
          text={t("about.ourCommitment")}
        />
        <p className="text-gray-600 leading-relaxed text-lg">
          {t("about.ourCommitmentDesc")}
        </p>
      </section>
    </article>
  );
}

export function MissionSection() {
  const { t } = useLanguage();
  return (
    <section
      aria-labelledby="mission-vision-heading"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
    >
      <h2 id="mission-vision-heading" className="sr-only">
        Mission and Core Services
      </h2>
      <article className="bg-white p-10 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-[#1B4D3E] mb-4">
          {t("about.ourMission")}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {t("about.ourMissionDesc")}
        </p>
      </article>
      <article className="bg-[#1B4D3E] p-10 rounded-2xl shadow-sm text-white">
        <h3 className="text-2xl font-bold mb-4">{t("about.coreServices")}</h3>
        <ul className="space-y-3 list-none" role="list">
          {CORE_SERVICE_KEYS.map((key) => (
            <li key={key} className="flex items-center" role="listitem">
              <div
                className="w-2 h-2 bg-[#7CB342] rounded-full mr-3"
                aria-hidden="true"
              />
              {t(key)}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export function ValuesSection() {
  const { t } = useLanguage();
  return (
    <section aria-labelledby="values-heading" className="mb-20">
      <h2
        id="values-heading"
        className="text-3xl font-bold text-center mb-12 text-[#1A1A2E]"
      >
        {t("about.ourValues")}
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none" role="list">
        {VALUES.map((value) => {
          const Icon = value.icon;
          return (
            <Reveal key={value.titleKey} y={20} className="flex">
              <li className="bg-white p-8 rounded-xl shadow-sm text-center card-hover w-full">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] mb-6"
                  aria-hidden="true"
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">{t(value.titleKey)}</h3>
                <p className="text-gray-500 text-sm">{t(value.descriptionKey)}</p>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

export function TeamSection() {
  const { t } = useLanguage();
  return (
    <section
      aria-labelledby="team-heading"
      className="bg-white rounded-2xl p-10 shadow-sm"
    >
      <h2 id="team-heading" className="text-2xl font-bold text-center mb-10">
        {t("about.expertTeam")}
      </h2>
      <dl className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {TEAM.map((member) => (
          <div key={member.titleKey}>
            <dt className="font-bold text-[#1A1A2E] mb-2">
              {t(member.titleKey)}
            </dt>
            <dd className="text-sm text-gray-500">{t(member.descriptionKey)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

"use client";

// "Patient Stories" — 2 patient testimonial cards with avatar photo,
// region badge, condition, and quote. Matches /stories. Trilingual (EN/zh/ru):
// zh uses per-field Chinese copy, ru resolves each English string through the
// merged RU map (ru-stories.ts), falling back to English when a key is missing.
import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RU } from "@/lib/i18n/ru";

interface Story {
  name: string;
  nameZh: string;
  image: string;
  region: string;
  regionZh: string;
  /** Age number as a string, e.g. "55"; the "years old" / 岁 / возраст suffix is added at render. */
  age: string;
  condition: string;
  conditionZh: string;
  treatment: string;
  treatmentZh: string;
  quote: string;
  quoteZh: string;
}

const STORIES: Story[] = [
  {
    name: "Mr. Ahmad",
    nameZh: "艾哈迈德先生",
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/story-ahmad.jpg",
    region: "Middle East",
    regionZh: "中东",
    age: "55",
    condition: "Localized Prostate Cancer",
    conditionZh: "局限性前列腺癌",
    treatment: "Heavy Ion Therapy",
    treatmentZh: "重离子治疗",
    quote:
      "The entire process was seamless. MedKungFu handled everything from my visa to my hospital appointments.",
    quoteZh: "整个过程无缝衔接。康福来帮我们从签证到医院预约，一切都安排得井井有条。",
  },
  {
    name: "Ms. Sarah",
    nameZh: "莎拉女士",
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/story-sarah.jpg",
    region: "Southeast Asia",
    regionZh: "东南亚",
    age: "42",
    condition: "Recurrent Lymphoma",
    conditionZh: "复发性淋巴瘤",
    treatment: "CAR-T Cell Therapy",
    treatmentZh: "CAR-T细胞治疗",
    quote:
      "I was given a second chance at life. The technology here is truly world-class.",
    quoteZh: "我获得了第二次生命的机会。这里的医疗技术真正达到了世界级水平。",
  },
];

interface LocalizedStory {
  name: string;
  region: string;
  ageLabel: string;
  condition: string;
  quote: string;
}

function StoryCard({ story, localized }: { story: Story; localized: LocalizedStory }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row gap-6">
      <div className="relative w-full md:w-48 h-48 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={story.image}
          alt={localized.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <Icons.playCircle className="text-white h-12 w-12" />
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex items-center space-x-2 mb-2">
          <span className="bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-bold px-2 py-1 rounded">
            {localized.region}
          </span>
          <span className="text-gray-400 text-sm">{localized.ageLabel}</span>
        </div>
        <h3 className="text-xl font-bold text-[#1A1A2E] mb-1">{localized.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{localized.condition}</p>
        <div className="relative">
          <Icons.quote className="absolute -top-2 -left-2 text-[#1B4D3E]/20 h-6 w-6" />
          <p className="text-gray-700 italic pl-6 border-l-2 border-[#1B4D3E]/30">
            &quot;{localized.quote}&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

export function PatientStoriesSection() {
  const { lang } = useLanguage();
  const zh = lang === "zh";
  const ru = lang === "ru";

  const localize = (story: Story): LocalizedStory => {
    // NOTE: the source site keeps /stories in English even in zh mode (it has
    // no Chinese content). So zh falls back to English; only ru translates.
    if (zh) {
      return {
        name: story.name,
        region: story.region,
        ageLabel: `${story.age} years old`,
        condition: `${story.condition} • ${story.treatment}`,
        quote: story.quote,
      };
    }
    if (ru) {
      const yearsOld = RU["years old"] ?? "years old";
      return {
        name: RU[story.name] ?? story.name,
        region: RU[story.region] ?? story.region,
        ageLabel: `${story.age} ${yearsOld}`,
        condition: `${RU[story.condition] ?? story.condition} • ${RU[story.treatment] ?? story.treatment}`,
        quote: RU[story.quote] ?? story.quote,
      };
    }
    return {
      name: story.name,
      region: story.region,
      ageLabel: `${story.age} years old`,
      condition: `${story.condition} • ${story.treatment}`,
      quote: story.quote,
    };
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {STORIES.map((story) => (
        <Reveal key={story.name} y={20} className="flex">
          <StoryCard story={story} localized={localize(story)} />
        </Reveal>
      ))}
    </div>
  );
}

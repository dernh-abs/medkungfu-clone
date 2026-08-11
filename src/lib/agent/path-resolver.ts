import type { SupportedLanguage } from "@/lib/i18n/translations";

export interface ResolvedPath {
  pointer: string;
  physicalFile: string;
  kind: "translation" | "section-data" | "navigation" | "meta";
}

export const HOME_SECTION_IDS = [
  "hero",
  "cityStrip",
  "services",
  "trustStats",
  "ourPromise",
  "medicalProjects",
  "serviceProcess",
  "patientStories",
  "featuredFaq",
  "cta",
] as const;

const SECTION_FIELD_ALIASES: Record<string, string> = {
  "hero.image": "image",
  "hero.imageAlt": "imageAlt",
  "hero.explore": "ctaLinks/explore",
  "hero.book": "ctaLinks/book",
  "services.link": "linkHref",
  "medicalProjects.link": "linkHref",
  "featuredFaq.link": "linkHref",
};

export function resolveTarget(
  target: string,
  lang: SupportedLanguage,
  page: string = "home"
): ResolvedPath | null {
  const t = target.trim();

  if (t.startsWith("nav.")) {
    return {
      pointer: `/translations/${lang}/${t}`,
      physicalFile: "translations.json",
      kind: "translation",
    };
  }

  if (SECTION_FIELD_ALIASES[t]) {
    const sectionId = t.split(".")[0];
    const field = SECTION_FIELD_ALIASES[t];
    return {
      pointer: `/pages/${page}/sections/${sectionId}/${field}`,
      physicalFile: `pages/${page}.json`,
      kind: "section-data",
    };
  }

  if ((HOME_SECTION_IDS as readonly string[]).includes(t)) {
    return {
      pointer: `/pages/${page}/sections/${t}`,
      physicalFile: `pages/${page}.json`,
      kind: "section-data",
    };
  }

  if (t.includes(".")) {
    return {
      pointer: `/translations/${lang}/${t.replace(/\./g, "/")}`,
      physicalFile: "translations.json",
      kind: "translation",
    };
  }

  return {
    pointer: `/translations/${lang}/${t}`,
    physicalFile: "translations.json",
    kind: "translation",
  };
}

export function resolveTranslationAllLangs(
  target: string,
  langs: SupportedLanguage[] = ["en", "zh"]
): ResolvedPath[] {
  return langs.map((l) => resolveTarget(target, l)!).filter(Boolean);
}

const SECTION_NAME_ALIASES: Record<string, string> = {
  hero: "hero",
  banner: "hero",
  services: "services",
  "patient stories": "patientStories",
  stories: "patientStories",
  projects: "medicalProjects",
  "medical projects": "medicalProjects",
  faq: "featuredFaq",
  "featured faq": "featuredFaq",
  cta: "cta",
  "call to action": "cta",
  process: "serviceProcess",
  "service process": "serviceProcess",
  promise: "ourPromise",
  "our promise": "ourPromise",
  trust: "trustStats",
  "trust stats": "trustStats",
  cities: "cityStrip",
  "city strip": "cityStrip",
  首屏: "hero",
  首屏区: "hero",
  横幅: "hero",
  大图: "hero",
  主视觉: "hero",
  城市: "cityStrip",
  城市条: "cityStrip",
  城市列表: "cityStrip",
  服务: "services",
  服务区段: "services",
  服务区: "services",
  信任: "trustStats",
  信任数据: "trustStats",
  信任统计: "trustStats",
  数据: "trustStats",
  承诺: "ourPromise",
  我们的承诺: "ourPromise",
  承诺区: "ourPromise",
  项目: "medicalProjects",
  医疗项目: "medicalProjects",
  项目区: "medicalProjects",
  流程: "serviceProcess",
  服务流程: "serviceProcess",
  流程区: "serviceProcess",
  故事: "patientStories",
  患者故事: "patientStories",
  案例: "patientStories",
  患者案例: "patientStories",
  故事区: "patientStories",
  问答: "featuredFaq",
  常见问题: "featuredFaq",
  faq区: "featuredFaq",
  底部: "cta",
  底部按钮: "cta",
  行动号召: "cta",
  底部cta: "cta",
};

export function fuzzyResolveSection(name: string): string | null {
  const key = name.trim();
  const lowerKey = key.toLowerCase();
  if ((HOME_SECTION_IDS as readonly string[]).includes(lowerKey)) return lowerKey;
  if (SECTION_NAME_ALIASES[lowerKey]) return SECTION_NAME_ALIASES[lowerKey];
  if (SECTION_NAME_ALIASES[key]) return SECTION_NAME_ALIASES[key];
  return null;
}

const FIELD_NAME_ALIASES: Record<string, string> = {
  title: "title",
  heading: "title",
  subtitle: "subtitle",
  subheading: "subtitle",
  description: "desc",
  desc: "desc",
  text: "text",
  content: "content",
  image: "image",
  picture: "image",
  photo: "image",
  link: "link",
  url: "link",
  href: "link",
  标题: "title",
  主标题: "title",
  大标题: "title",
  副标题: "subtitle",
  说明: "desc",
  描述: "desc",
  介绍: "desc",
  文案: "text",
  文字: "text",
  内容: "content",
  图片: "image",
  照片: "image",
  图: "image",
  链接: "link",
  地址: "link",
};

export function fuzzyResolveField(name: string): string | null {
  const key = name.trim().toLowerCase();
  if (FIELD_NAME_ALIASES[key]) return FIELD_NAME_ALIASES[key];
  if (FIELD_NAME_ALIASES[name.trim()]) return FIELD_NAME_ALIASES[name.trim()];
  return null;
}

export function buildTranslationKey(sectionAlias: string, fieldAlias: string): string | null {
  const sectionId = fuzzyResolveSection(sectionAlias);
  const fieldId = fuzzyResolveField(fieldAlias);
  if (!sectionId || !fieldId) return null;
  return `${sectionId}.${fieldId}`;
}

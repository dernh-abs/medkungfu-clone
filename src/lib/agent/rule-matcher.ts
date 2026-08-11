import type { SupportedLanguage } from "@/lib/i18n/translations";
import type { Intent } from "./types";
import { fuzzyResolveSection, fuzzyResolveField, buildTranslationKey } from "./path-resolver";

interface Rule {
  id: string;
  pattern: RegExp;
  extract: (match: RegExpMatchArray) => Intent | null;
}

const LANG_MAP: Record<string, SupportedLanguage> = {
  英文: "en",
  英文翻译: "en",
  en: "en",
  english: "en",
  中文: "zh",
  中文翻译: "zh",
  zh: "zh",
  俄语: "ru",
  俄语翻译: "ru",
  ru: "ru",
  russian: "ru",
};

const HERO_ALIASES = new Set(["hero", "大标题", "主标题", "首屏", "banner", "横幅", "大图", "主视觉"]);

function isHeroAlias(s: string): boolean {
  return HERO_ALIASES.has(s.toLowerCase());
}

function resolveSectionFieldTarget(sectionPart: string, fieldPart: string): string | null {
  if (sectionPart.includes(".")) return sectionPart;
  const fromChinese = buildTranslationKey(sectionPart, fieldPart);
  if (fromChinese) return fromChinese;
  const sec = fuzzyResolveSection(sectionPart);
  const fld = fuzzyResolveField(fieldPart);
  if (sec && fld) return `${sec}.${fld}`;
  if (sec && !fld) {
    return `${sec}.${fieldPart}`;
  }
  return null;
}

const RULES: Rule[] = [
  {
    id: "undo",
    pattern: /^(撤销|撤回|取消上一步|undo|↶)$/i,
    extract: () => ({ type: "undo" }),
  },
  {
    id: "undo.long",
    pattern: /^(撤销|撤回)\s*(上一步|上一次)?(修改|操作|步骤)?\s*$/i,
    extract: () => ({ type: "undo" }),
  },
  {
    id: "redo",
    pattern: /^(重做|恢复|redo|↷)$/i,
    extract: () => ({ type: "redo" }),
  },
  {
    id: "redo.long",
    pattern: /^(重做|恢复)\s*(上一步|上一次)?\s*$/i,
    extract: () => ({ type: "redo" }),
  },
  {
    id: "query.help",
    pattern: /^(帮助|help|\?{1,2}|指令\s*(列表|说明)?|你能做什么|你会什么|有什么功能)$/i,
    extract: () => ({ type: "query", question: "capability" }),
  },
  {
    id: "query.structure",
    pattern: /(首页\s*)?(有哪些|当前|所有|列出)\s*(区段|section|组件|模块)/i,
    extract: () => ({ type: "query", question: "structure" }),
  },
  {
    id: "query.version",
    pattern: /(当前|现在)\s*(版本|第几版|v\d)|查看版本/i,
    extract: () => ({ type: "query", question: "version" }),
  },
  {
    id: "update_text.lang",
    pattern:
      /(?:把|将|让)\s*([\w.一-龥]+)\s*(标题|文本|内容)?\s*的\s*(英文|中文|俄语|英文翻译|中文翻译|俄语翻译|en|zh|ru|english|russian)\s*(?:改成|修改为|改为|换成|更改为|设置为)\s*["""']?(.+?)["""']?\s*$/i,
    extract: (m) => {
      const lang = LANG_MAP[m[3].toLowerCase()] ?? LANG_MAP[m[3]];
      if (!lang) return null;
      const raw = m[1].trim();
      const fieldHint = m[2] ?? "";
      let target: string;
      if (raw.includes(".")) {
        target = raw;
      } else if (isHeroAlias(raw)) {
        target = "hero.title";
      } else if (fieldHint) {
        target = resolveSectionFieldTarget(raw, fieldHint) ?? `${raw}.${fieldHint}`;
      } else {
        target = raw;
      }
      return { type: "update_text", target, value: m[4].trim(), lang };
    },
  },
  {
    id: "update_text.nav_label",
    pattern:
      /(?:把|将|修改|更新)\s*(?:导航栏?|菜单|navbar|nav)\s*的\s*([A-Za-z一-龥]+)\s*(?:改成|改为|换成|修改为|更改为|设置为)\s*["""']?(.+?)["""']?\s*$/i,
    extract: (m) => {
      const label = m[1].trim();
      const key = label.toLowerCase();
      const navKeys = ["home", "services", "projects", "process", "about", "stories", "faq", "contact"];
      const zhNav: Record<string, string> = {
        首页: "home",
        主页: "home",
        服务: "services",
        服务区: "services",
        项目: "projects",
        项目区: "projects",
        流程: "process",
        流程区: "process",
        关于: "about",
        关于我们: "about",
        故事: "stories",
        患者故事: "stories",
        案例: "stories",
        问答: "faq",
        常见问题: "faq",
        联系: "contact",
        联系我们: "contact",
      };
      let navKey: string | undefined = zhNav[key] ?? zhNav[label];
      if (!navKey && navKeys.includes(key)) navKey = key;
      if (!navKey) {
        navKey = key;
      }
      return {
        type: "update_text",
        target: `nav.${navKey}`,
        value: m[2].trim(),
      };
    },
  },
  {
    id: "update_text.zh_section_field",
    pattern:
      /(?:把|将|让)\s*(?:首页\s*)?([\w一-龥]+)\s*([\w一-龥]+)\s*(?:改成|修改为|改为|换成|更改为|设置为)\s*["""']?(.+?)["""']?\s*$/i,
    extract: (m) => {
      const sectionPart = m[1].trim();
      const fieldPart = m[2].trim();
      const sec = fuzzyResolveSection(sectionPart);
      if (!sec) return null;
      const target = resolveSectionFieldTarget(sectionPart, fieldPart);
      if (!target) return null;
      return { type: "update_text", target, value: m[3].trim() };
    },
  },
  {
    id: "update_text",
    pattern:
      /(?:把|将|让)\s*(?:首页\s*)?(hero|大标题|主标题|标题|[\w.]+)\s*(?:标题|文本|内容)?\s*(?:改成|修改为|改为|换成|更改为|设置为)\s*["""']?(.+?)["""']?\s*$/i,
    extract: (m) => {
      const raw = m[1].trim();
      const target = isHeroAlias(raw) ? "hero.title" : raw;
      return { type: "update_text", target, value: m[2].trim() };
    },
  },
  {
    id: "update_image.zh",
    pattern:
      /(?:把|将)\s*(?:首页\s*)?([\w一-龥]+)\s*(图片|背景图|封面图|配图|主图|照片|图)\s*(?:换成|改为|修改为|更改为|替换为)\s*(.+?)\s*$/i,
    extract: (m) => {
      const sectionPart = m[1].trim();
      const sec = fuzzyResolveSection(sectionPart);
      if (sec) {
        return {
          type: "update_image",
          target: `/pages/home/sections/${sec}/image`,
          newSrc: m[3].trim(),
        };
      }
      if (isHeroAlias(sectionPart)) {
        return {
          type: "update_image",
          target: "/pages/home/sections/hero/image",
          newSrc: m[3].trim(),
        };
      }
      return {
        type: "update_image",
        target: sectionPart.includes("/") ? sectionPart : `/pages/home/sections/${sectionPart}/image`,
        newSrc: m[3].trim(),
      };
    },
  },
  {
    id: "update_image",
    pattern:
      /(?:把|将)\s*(hero\s*)?(?:首页\s*)?(图片|背景图|封面图|image)\s*(?:换成|改为|修改为|更改为)\s*(.+?)\s*$/i,
    extract: (m) => ({
      type: "update_image",
      target: m[1] ? "/pages/home/sections/hero/image" : m[2],
      newSrc: m[3].trim(),
    }),
  },
  {
    id: "update_link.zh",
    pattern:
      /(?:把|将|修改|更新)\s*(?:首页\s*)?([\w一-龥]+)\s*(?:的\s*)?(链接|按钮链接|地址|href|导航)\s*(?:改成|修改为|改为|换成|更改为|设置为)\s*(.+?)\s*$/i,
    extract: (m) => {
      const sectionPart = m[1].trim();
      const sec = fuzzyResolveSection(sectionPart);
      const target = sec ? `${sec}.link` : sectionPart;
      return {
        type: "update_link",
        target,
        newHref: m[3].trim(),
      };
    },
  },
  {
    id: "update_link",
    pattern:
      /(?:把|将)\s*([\w.]+)\s*(?:链接|地址|href|链接地址)\s*(?:改成|修改为|改为|换成|更改为)\s*(.+?)\s*$/i,
    extract: (m) => ({
      type: "update_link",
      target: m[1].trim(),
      newHref: m[2].trim(),
    }),
  },
  {
    id: "add_section.relative",
    pattern:
      /(?:在|往)\s*(?:首页\s*)?([\w一-龥]+)\s*(前面|后面|之前|之后|前|后)\s*(?:加一个|新增|添加|插入)\s*([\w一-龥]+)\s*区段?/i,
    extract: (m) => {
      const anchorSec = fuzzyResolveSection(m[1].trim()) ?? m[1].trim();
      const side =
        ["前面", "之前", "前"].includes(m[2].trim()) ? "before" : "after";
      const sectionType = fuzzyResolveSection(m[3].trim()) ?? m[3].trim();
      return {
        type: "add_section",
        page: "home",
        sectionType,
        position: { anchor: anchorSec, side },
      };
    },
  },
  {
    id: "add_section.end",
    pattern:
      /(页面|首页)?\s*(底部|最后面|最后|末尾|结尾|end)\s*(?:加一个|新增|添加|插入)\s*([\w一-龥]+)\s*区段?/i,
    extract: (m) => {
      const sectionType = fuzzyResolveSection(m[3].trim()) ?? m[3].trim();
      return {
        type: "add_section",
        page: "home",
        sectionType,
        position: { anchor: "", side: "end" },
      };
    },
  },
  {
    id: "add_section.start",
    pattern:
      /(页面|首页)?\s*(顶部|最前面|开头|start)\s*(?:加一个|新增|添加|插入)\s*([\w一-龥]+)\s*区段?/i,
    extract: (m) => {
      const sectionType = fuzzyResolveSection(m[3].trim()) ?? m[3].trim();
      return {
        type: "add_section",
        page: "home",
        sectionType,
        position: { anchor: "", side: "start" },
      };
    },
  },
  {
    id: "duplicate_section",
    pattern: /(?:复制|拷贝|duplicate|copy)\s*(?:首页\s*)?([\w一-龥]+)\s*区段?/i,
    extract: (m) => {
      const sectionId = fuzzyResolveSection(m[1].trim()) ?? m[1].trim();
      return {
        type: "duplicate_section",
        page: "home",
        sectionId,
      };
    },
  },
  {
    id: "remove_section.zh",
    pattern: /(?:删除|移除|去掉|删掉)\s*([\w一-龥]+)\s*区段?/i,
    extract: (m) => {
      const sectionId = fuzzyResolveSection(m[1].trim()) ?? m[1].trim();
      return {
        type: "remove_section",
        page: "home",
        sectionId,
      };
    },
  },
  {
    id: "remove_section",
    pattern: /(?:删除|移除|去掉)\s*(\w+)\s*区段?/i,
    extract: (m) => ({
      type: "remove_section",
      page: "home",
      sectionId: m[1].trim(),
    }),
  },
  {
    id: "reorder_sections.relative.zh",
    pattern:
      /(?:把|将)\s*([\w一-龥]+)\s*移(?:动)?到\s*([\w一-龥]+)\s*(前面|后面|之前|之后|前|后)/i,
    extract: (m) => {
      const moved = fuzzyResolveSection(m[1].trim()) ?? m[1].trim();
      const anchor = fuzzyResolveSection(m[2].trim()) ?? m[2].trim();
      return {
        type: "reorder_sections",
        page: "home",
        newOrder: [moved, anchor, m[3].trim()],
      };
    },
  },
  {
    id: "reorder_sections.relative",
    pattern:
      /(?:把|将)\s*(\w+)\s*移(?:动)?到\s*(\w+)\s*(前面|后面|之前|之后|前|后)/i,
    extract: (m) => ({
      type: "reorder_sections",
      page: "home",
      newOrder: [m[1].trim(), m[2].trim(), m[3].trim()],
    }),
  },
];

export function matchRule(command: string): Intent | null {
  const trimmed = command.trim();
  for (const rule of RULES) {
    const m = trimmed.match(rule.pattern);
    if (m) {
      const intent = rule.extract(m);
      if (intent) return intent;
    }
  }
  return null;
}

export function getRuleSuggestionTemplates(): string[] {
  return [
    "把 hero 标题改成 XXX",
    "把 服务区段 标题改成 XXX",
    "把 hero.title 的英文改成 Welcome",
    "把 首屏 图片换成 /path/to/image.jpg",
    "把 hero 探索链接改成 /about",
    "把导航栏的 About 改成 关于我们",
    "删除 患者故事 区段",
    "在 服务 前面新增 患者故事 区段",
    "页面底部加一个 cta 区段",
    "复制 hero 区段",
    "把 患者故事 移到 服务 后面",
    "撤销 / 重做",
    "帮助 / 首页有哪些区段",
  ];
}

export const _RULES = RULES;

// Puck component configuration — registers all 10 home page sections.
//
// Stage H upgrade:
//   - Image fields (image, story item images, etc.) use type "image" (custom
//     ImageField) instead of plain text so the right-side panel shows an
//     uploader + library picker rather than a URL string box.
//   - Array fields (cities, items, etc.) use type "list" (custom ListField)
//     with an explicit itemFields schema so the right-side panel shows a
//     card editor instead of a raw JSON textarea.
//   - Custom list field options (addLabel, emptyText, itemFields) are stored
//     in each list field's `metadata` (Puck supports `metadata?: unknown`) so
//     the ListField component can read them via `field.metadata`.
//
// Other fields remain Puck built-ins (text / object) for now — they will
// be replaced by the semantic editors in stage I.

import type { Config } from "@measured/puck";

import { HeroSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/HeroSection";
import { CityStrip } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/CityStrip";
import { ServicesSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/ServicesSection";
import { TrustStatsSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/TrustStatsSection";
import { OurPromiseSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/OurPromiseSection";
import { MedicalProjectsSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/MedicalProjectsSection";
import { ServiceProcessSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/ServiceProcessSection";
import { PatientStoriesSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/PatientStoriesSection";
import { FeaturedFAQSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/FeaturedFAQSection";
import { CTASection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/CTASection";
import { PageSection, type PageSectionProps } from "./PageSection";

import type { ListFieldDefItemField } from "./custom-field-types";

/** Custom metadata shape for "list" fields — read by ListField at runtime. */
interface ListFieldMetadata {
  addLabel?: string;
  emptyText?: string;
  itemFields: ListFieldDefItemField[];
}

/** Custom metadata shape for "image" fields. (Reserved; currently unused.) */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImageFieldMetadata {}

/** Studio wrapper — adds hover outline for visual feedback in the canvas. */
function studioWrap(children: React.ReactNode) {
  return (
    <div className="studio-mode relative group/section">
      <div className="absolute inset-0 ring-2 ring-transparent group-hover/section:ring-blue-400 rounded pointer-events-none transition-all z-50" />
      {children}
    </div>
  );
}

// The Config type in Puck v0.20.x doesn't know about our custom "image" /
// "list" field types, so we build the config as an untyped object and cast
// it at the end. Runtime correctness is enforced by the custom fieldTypes
// override plus the ListFieldMetadata type on metadata properties.
/* eslint-disable @typescript-eslint/no-explicit-any */
const rawConfig: any = {
  components: {
    hero: {
      label: "Hero",
      fields: {
        image: { type: "image" as any, label: "主图", metadata: {} as ImageFieldMetadata },
        imageAlt: { type: "text", label: "主图 Alt 文本" },
        statKeys: {
          type: "list" as any,
          label: "信任点 Key 列表",
          metadata: {
            addLabel: "添加信任点 Key",
            emptyText: "未添加信任点",
            itemFields: [
              { key: "value", label: "翻译 Key（如 hero.trustPoint1）", placeholder: "hero.trustPoint1" },
            ] satisfies ListFieldDefItemField[],
          } satisfies ListFieldMetadata,
        },
        ctaLinks: {
          type: "object",
          label: "CTA 链接",
          objectFields: {
            explore: { type: "text", label: "了解项目链接" },
            book: { type: "text", label: "立即预约链接" },
          },
        },
      },
      defaultProps: {
        statKeys: '[{"value":"hero.trustPoint1"},{"value":"hero.trustPoint2"},{"value":"hero.trustPoint3"}]',
        image: "/sites/www-medkungfu-com-363c9bc1/medkungfu-doctor-hero.jpg",
        imageAlt: "Doctor hero image",
        ctaLinks: { explore: "/projects", book: "/contact" },
      },
      render: () => studioWrap(<HeroSection />),
    },

    cityStrip: {
      label: "City Strip",
      fields: {
        heading: { type: "text", label: "城市条标题" },
        cities: {
          type: "list" as any,
          label: "城市列表",
          metadata: {
            addLabel: "添加城市",
            itemFields: [
              { key: "name", label: "城市名称", placeholder: "Beijing" },
              {
                key: "dimmed",
                label: "是否淡化",
                type: "select",
                options: [
                  { label: "正常显示", value: "false" },
                  { label: "淡化显示", value: "true" },
                ],
              },
            ] satisfies ListFieldDefItemField[],
          } satisfies ListFieldMetadata,
        },
      },
      defaultProps: {
        heading: "Serving patients across",
        cities: '[{"name":"Beijing","dimmed":false}]',
      },
      render: () => studioWrap(<CityStrip />),
    },

    services: {
      label: "Services",
      fields: {
        linkHref: { type: "text", label: "全部服务链接" },
        viewAllKey: { type: "text", label: "查看全部翻译 Key" },
        items: {
          type: "list" as any,
          label: "服务项目",
          metadata: {
            addLabel: "添加服务项目",
            itemFields: [
              { key: "icon", label: "图标名 (lucide)", placeholder: "stethoscope" },
              { key: "titleKey", label: "标题翻译 Key", placeholder: "home.service1Title" },
              { key: "descKey", label: "描述翻译 Key", placeholder: "home.service1Desc" },
            ] satisfies ListFieldDefItemField[],
          } satisfies ListFieldMetadata,
        },
      },
      defaultProps: {
        items: "[]",
        linkHref: "/services",
        viewAllKey: "home.viewAllServices",
      },
      render: () => studioWrap(<ServicesSection />),
    },

    trustStats: {
      label: "Trust Stats",
      fields: {
        items: {
          type: "list" as any,
          label: "信任数据项",
          metadata: {
            addLabel: "添加数据项",
            itemFields: [
              { key: "icon", label: "图标名 (lucide)", placeholder: "hospital" },
              { key: "key", label: "数值翻译 Key", placeholder: "trust.hospitals" },
            ] satisfies ListFieldDefItemField[],
          } satisfies ListFieldMetadata,
        },
      },
      defaultProps: { items: "[]" },
      render: () => studioWrap(<TrustStatsSection />),
    },

    ourPromise: {
      label: "Our Promise",
      fields: {
        headingKey: { type: "text", label: "标题翻译 Key" },
        items: {
          type: "list" as any,
          label: "承诺项",
          metadata: {
            addLabel: "添加承诺项",
            itemFields: [
              { key: "icon", label: "图标名 (lucide)", placeholder: "shield-check" },
              { key: "titleKey", label: "标题翻译 Key", placeholder: "values.direct" },
              { key: "descKey", label: "描述翻译 Key", placeholder: "home.valueDescDirect" },
            ] satisfies ListFieldDefItemField[],
          } satisfies ListFieldMetadata,
        },
      },
      defaultProps: { headingKey: "promise.heading", items: "[]" },
      render: () => studioWrap(<OurPromiseSection />),
    },

    medicalProjects: {
      label: "Medical Projects",
      fields: {
        heading: { type: "text", label: "项目标题" },
        linkHref: { type: "text", label: "项目页链接" },
        items: {
          type: "list" as any,
          label: "项目列表",
          metadata: {
            addLabel: "添加项目",
            itemFields: [
              { key: "icon", label: "图标名 (lucide)", placeholder: "dna" },
              { key: "titleKey", label: "标题翻译 Key", placeholder: "projects.oncology" },
              { key: "subtitle", label: "副标题描述", placeholder: "肿瘤精准治疗的介绍" },
            ] satisfies ListFieldDefItemField[],
          } satisfies ListFieldMetadata,
        },
      },
      defaultProps: { heading: "", linkHref: "/projects", items: "[]" },
      render: () => studioWrap(<MedicalProjectsSection />),
    },

    serviceProcess: {
      label: "Service Process",
      fields: {
        headingKey: { type: "text", label: "流程标题翻译 Key" },
        items: {
          type: "list" as any,
          label: "流程步骤",
          metadata: {
            addLabel: "添加步骤",
            itemFields: [
              { key: "icon", label: "图标名 (lucide)", placeholder: "1" },
              { key: "number", label: "步骤编号展示", placeholder: "01" },
              { key: "titleKey", label: "步骤标题翻译 Key", placeholder: "process.step1" },
              { key: "progress", label: "进度条百分比", type: "number" },
            ] satisfies ListFieldDefItemField[],
          } satisfies ListFieldMetadata,
        },
      },
      defaultProps: { headingKey: "process.heading", items: "[]" },
      render: () => studioWrap(<ServiceProcessSection />),
    },

    patientStories: {
      label: "Patient Stories",
      fields: {
        heading: { type: "text", label: "故事区标题" },
        items: {
          type: "list" as any,
          label: "患者故事",
          metadata: {
            addLabel: "添加故事",
            itemFields: [
              { key: "quote", label: "引言/引用文字", type: "textarea" },
              { key: "image", label: "患者照片", type: "image" },
              { key: "name", label: "患者姓名" },
            ] satisfies ListFieldDefItemField[],
          } satisfies ListFieldMetadata,
        },
      },
      defaultProps: { heading: "", items: "[]" },
      render: () => studioWrap(<PatientStoriesSection />),
    },

    featuredFaq: {
      label: "Featured FAQ",
      fields: {
        heading: { type: "text", label: "FAQ 标题" },
        subtitle: { type: "text", label: "FAQ 副标题" },
        linkText: { type: "text", label: "全部 FAQ 链接文字" },
        linkHref: { type: "text", label: "全部 FAQ 链接地址" },
        items: {
          type: "list" as any,
          label: "FAQ 条目",
          metadata: {
            addLabel: "添加 FAQ",
            itemFields: [
              { key: "question", label: "问题", type: "text" },
              { key: "answer", label: "回答", type: "textarea" },
              { key: "href", label: "跳转链接（可选）", placeholder: "/faq#xxx" },
            ] satisfies ListFieldDefItemField[],
          } satisfies ListFieldMetadata,
        },
      },
      defaultProps: {
        heading: "",
        subtitle: "",
        linkText: "View All",
        linkHref: "/faq",
        items: "[]",
      },
      render: () => studioWrap(<FeaturedFAQSection />),
    },

    cta: {
      label: "CTA",
      fields: {
        messagePlaceholder: { type: "text", label: "留言框占位文字" },
        interestOptions: {
          type: "list" as any,
          label: "关注领域下拉选项",
          metadata: {
            addLabel: "添加选项",
            itemFields: [
              { key: "value", label: "选项值", placeholder: "oncology" },
              { key: "label", label: "选项显示名", placeholder: "肿瘤精准治疗" },
            ] satisfies ListFieldDefItemField[],
          } satisfies ListFieldMetadata,
        },
      },
      defaultProps: {
        interestOptions: "[]",
        messagePlaceholder: "Your message",
      },
      render: () => studioWrap(<CTASection />),
    },

    // Generic, self-contained section for non-home pages (placeholder/fallback
    // content). No i18n translation keys — content is edited via plain props.
    pageSection: {
      label: "Page Section",
      fields: {
        kind: {
          type: "select",
          label: "类型",
          options: [
            { label: "Hero（绿底标题）", value: "hero" },
            { label: "Content（正文）", value: "content" },
            { label: "CTA（行动号召）", value: "cta" },
          ],
        },
        title: { type: "text", label: "标题" },
        body: { type: "textarea", label: "正文" },
        image: { type: "image" as any, label: "图片", metadata: {} as ImageFieldMetadata },
        linkHref: { type: "text", label: "链接地址" },
        linkLabel: { type: "text", label: "链接文字" },
        // Phase 2 — layout richness
        columns: {
          type: "select",
          label: "布局列数",
          options: [
            { label: "单栏（默认）", value: 1 },
            { label: "两栏图文", value: 2 },
          ],
        },
        imageSide: {
          type: "select",
          label: "图片位置（两栏时）",
          options: [
            { label: "左", value: "left" },
            { label: "右", value: "right" },
          ],
        },
        features: {
          type: "array",
          label: "特性网格（标题+正文）",
          arrayFields: {
            title: { type: "text", label: "标题" },
            body: { type: "textarea", label: "正文" },
          },
          defaultItemProps: { title: "", body: "" },
        },
        stats: {
          type: "array",
          label: "数据条（数值+标签）",
          arrayFields: {
            value: { type: "text", label: "数值" },
            label: { type: "text", label: "标签" },
          },
          defaultItemProps: { value: "", label: "" },
        },
      },
      defaultProps: {
        kind: "content",
        title: "",
        body: "",
        image: "",
        linkHref: "",
        linkLabel: "",
        columns: 1,
        imageSide: "left",
        features: [],
        stats: [],
      } satisfies PageSectionProps,
      render: (props: any) => studioWrap(<PageSection {...(props as PageSectionProps)} />),
    },
  },
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export const puckConfig = rawConfig as Config;

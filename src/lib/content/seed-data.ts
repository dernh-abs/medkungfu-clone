// Source-of-truth seed data for the Unified Content Document (UCD).
//
// This module mirrors the hardcoded arrays/strings in the home page components
// (src/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/*.tsx) and
// shared/Site{Header,Footer}.tsx. The seed script (scripts/seed-ucd.ts) reads
// this plus the i18n TRANSLATIONS/RU maps to generate the `.content/` JSON
// files and `extraction-map.json`.
//
// When you add hardcoded content to a component, update the corresponding
// entry here and run `npm run seed`. The validator step will warn about
// component hardcoded data not covered here.
//
// NOTE: A .ts module is used (rather than extraction-map.json) so the data is
// typed and editable in-place; the seed script emits extraction-map.json from
// this for tooling that expects JSON.

import type {
  HomePageData,
  Navigation,
} from "./content-schema";

export const HOME_PAGE_SEED: HomePageData = {
  order: [
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
  ],
  sections: {
    hero: {
      statKeys: ["hero.trustPoint1", "hero.trustPoint2", "hero.trustPoint3"],
      image:
        "/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/images/medkungfu-doctor-hero.jpg",
      imageAlt: "Professional Chinese female doctor providing medical consultation",
      ctaLinks: { explore: "/projects", book: "/contact" },
    },
    cityStrip: {
      heading: "SERVING PATIENTS IN",
      cities: [
        { name: "Shanghai", dimmed: false },
        { name: "Guangzhou", dimmed: false },
        { name: "Hainan", dimmed: false },
        { name: "Beijing", dimmed: true },
        { name: "Shenzhen", dimmed: true },
        { name: "Chengdu", dimmed: true },
      ],
    },
    services: {
      items: [
        { icon: "building", titleKey: "home.service1Title", descKey: "home.service1Desc" },
        { icon: "languages", titleKey: "home.service2Title", descKey: "home.service2Desc" },
        { icon: "users", titleKey: "home.service3Title", descKey: "home.service3Desc" },
      ],
      linkHref: "/services",
      viewAllKey: "home.viewAllServices",
    },
    trustStats: {
      items: [
        { icon: "building", key: "trust.hospitals" },
        { icon: "map-pin", key: "trust.cities" },
        { icon: "message-circle", key: "trust.patients" },
        { icon: "clock", key: "trust.response" },
      ],
    },
    ourPromise: {
      headingKey: "home.ourPromise",
      items: [
        { icon: "shield", titleKey: "values.direct", descKey: "home.valueDescDirect" },
        { icon: "zap", titleKey: "values.speed", descKey: "home.valueDescSpeed" },
        { icon: "user-check", titleKey: "values.custom", descKey: "home.valueDescCustom" },
        { icon: "file-text", titleKey: "values.transparent", descKey: "home.valueDescTransparent" },
      ],
    },
    medicalProjects: {
      heading: "Advantageous Medical Projects",
      items: [
        { icon: "activity", titleKey: "projects.oncology", subtitle: "Heavy Ion & CAR-T Therapy" },
        { icon: "dna", titleKey: "projects.regenerative", subtitle: "Stem Cell Treatment" },
        { icon: "leaf", titleKey: "projects.integrative", subtitle: "TCM & Western Medicine" },
        { icon: "stethoscope", titleKey: "projects.specialties", subtitle: "Cardiology, Orthopedics & More" },
      ],
      linkHref: "/projects",
    },
    serviceProcess: {
      headingKey: "process.title",
      items: [
        { icon: "clipboard-check", number: "01", titleKey: "process.step1", progress: 22 },
        { icon: "stethoscope", number: "02", titleKey: "process.step2", progress: 32 },
        { icon: "file-text", number: "03", titleKey: "process.step3", progress: 48 },
        { icon: "plane", number: "04", titleKey: "process.step4", progress: 64 },
        { icon: "map-pin", number: "05", titleKey: "process.step5", progress: 80 },
        { icon: "building", number: "06", titleKey: "process.step6", progress: 96 },
      ],
    },
    patientStories: {
      heading: "Patient Stories",
      items: [
        {
          quote:
            "From the despair of recurrence to complete remission, CAR-T therapy in China gave me a second life.",
          image:
            "/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/images/patient-se-asia-lymphoma.jpg",
          name: "Patient from Southeast Asia, Recurrent Lymphoma",
        },
        {
          quote:
            "Heavy ion therapy for prostate cancer: short course, minimal side effects, and costs far less than in Europe.",
          image:
            "/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/images/patient-middle-east.jpg",
          name: "Patient from the Middle East",
        },
        {
          quote: "TCM is amazing. It allowed me to walk normally again.",
          image:
            "/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/images/patient-se-asia-osteoarthritis.jpg",
          name: "Patient from Southeast Asia, Osteoarthritis",
        },
      ],
    },
    featuredFaq: {
      heading: "Questions International Patients Ask First",
      subtitle:
        "Understand service boundaries, record preparation, hospital matching, costs, timelines, and follow-up before deciding whether to start a China medical assessment.",
      linkText: "Read all 72 FAQs",
      linkHref: "/faq",
      items: [
        {
          question: "When should I consider cross-border medical care?",
          answer:
            "You may consider cross-border care when local specialist access is limited, waiting times are long, treatment results are unsatisfactory, costs are too high, or you want a second medical opinion. It is not the default choice for every patient, but it can give some families more options, resources, and coordinated support.",
          href: "/faq#faq-1",
        },
        {
          question: "Is MedKungfu a hospital? Does it provide diagnosis or treatment directly?",
          answer:
            "No. MedKungfu is not a hospital and does not directly provide diagnosis or treatment. We are a cross-border medical resource and service coordination provider, helping with record organization, translation, hospital matching, appointment coordination, visa and accommodation support, medical interpretation, escort, and follow-up communication. Diagnosis and treatment are provided by hospitals and specialists.",
          href: "/faq#faq-5",
        },
        {
          question: "Can MedKungfu first help me judge whether coming to China is worthwhile?",
          answer:
            "Yes. Patients can submit basic information, medical records, test reports, and imaging. MedKungfu can organize the information and suggest an initial pathway based on available resources. If the materials suggest that travel to China is not suitable, the judgment of medical institutions and specialists should come first.",
          href: "/faq#faq-7",
        },
        {
          question: "What medical records and test materials should I prepare?",
          answer:
            "Usually you should prepare diagnosis records, previous treatment notes, medication history, surgery records, imaging files, lab reports, pathology reports, and a summary of current symptoms and treatment goals. More complete materials help doctors assess faster. If records are incomplete, MedKungfu can first consult and list what to supplement.",
          href: "/faq#faq-8",
        },
        {
          question: "How are costs and timelines for treatment in China estimated?",
          answer:
            "Costs and timelines depend on disease complexity, tests, treatment plan, hospital choice, admission arrangements, service package, accommodation, transport, and follow-up period. MedKungfu can help create an initial estimate, but final costs and timelines depend on the hospital plan, actual treatment, and service agreement.",
          href: "/faq#faq-10",
        },
        {
          question: "How will my medical records and privacy be protected?",
          answer:
            "Medical records, imaging, and identity information are sensitive and should only be used for medical resource matching, hospital assessment, and service communication. Before submitting materials, patients should confirm the service entity, purpose of use, sharing scope, and privacy protections. MedKungfu follows a minimum-necessary principle.",
          href: "/faq#faq-11",
        },
        {
          question: "Can I continue follow-up after returning home?",
          answer:
            "Remote follow-up coordination may be arranged according to the service package and hospital plan. Common support includes review reminders, recovery updates, test report transfer, doctor communication, and explanation of later recommendations. Follow-up does not replace emergency care or routine management by local doctors.",
          href: "/faq#faq-12",
        },
        {
          question: "Will MedKungfu match hospitals and specialists?",
          answer:
            "Yes. MedKungfu helps match suitable hospitals, specialties, or partner institutions based on condition, treatment goals, budget, timing, language needs, and service needs. Final diagnosis and treatment plans are determined by medical institutions and specialists.",
          href: "/faq#faq-26",
        },
        {
          question: "What service packages does MedKungfu offer?",
          answer:
            "Current materials include light, standard, advanced, and VIP service packages. Different packages correspond to different service depth, escort frequency, translation support, accommodation assistance, review arrangements, and follow-up duration.",
          href: "/faq#faq-35",
        },
        {
          question: "Which hospitals does MedKungfu work with?",
          answer:
            "MedKungFu has established partnerships with many renowned Chinese hospitals, including Ruijin Hospital Hainan, Sun Yat-sen Memorial Hospital, Longhua Hospital affiliated with Shanghai University of TCM, Shanghai Guanghua Hospital of Integrated Traditional Chinese and Western Medicine, Shanghai Jiahui International Hospital, and GoBroad Healthcare Group. Available resources vary by condition, schedule, and service capacity.",
          href: "/faq#faq-38",
        },
      ],
    },
    cta: {
      interestOptions: [
        { value: "oncology", label: "Oncology" },
        { value: "cardiology", label: "Cardiology" },
        { value: "orthopedics", label: "Orthopedics" },
        { value: "regenerative", label: "Regenerative Medicine" },
        { value: "integrative", label: "Integrative Medicine" },
        { value: "others", label: "Others" },
      ],
      messagePlaceholder: "Please describe your medical needs or questions in detail...",
    },
  },
};

export const NAVIGATION_SEED: Navigation = {
  main: [
    { label: "Home", href: "/" },
    { label: "Medical Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Hospitals", href: "/hospitals" },
    { label: "Patient Stories", href: "/stories" },
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ],
  footer: {
    quickLinks: [
      { label: "Medical Projects", href: "/projects" },
      { label: "Our Services", href: "/services" },
      { label: "Partner Hospitals", href: "/hospitals" },
      { label: "Patient Stories", href: "/stories" },
      { label: "Why China Medical", href: "/why-china" },
    ],
    supportLinks: [
      { label: "FAQ", href: "/faq" },
      { label: "Resources", href: "/resources" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

export const SITE_KEY = "www-medkungfu-com-363c9bc1";

// ─── Placeholder pages (non-home) ───────────────────────────────────────
//
// These are seed-only scaffold pages so the Studio can edit pages other than
// `home`. Each is three self-contained `pageSection`s (hero / content / cta).
// They carry plain English placeholder copy that editors replace later. No
// i18n translation keys — see PageSection for the rationale.

export const PLACEHOLDER_PAGE_SLUGS = [
  "projects",
  "services",
  "hospitals",
  "stories",
  "about",
  "faq",
  "contact",
  "why-china",
] as const;

type PlaceholderFeature = {
  title: string;
  body: string;
  // Phase 3 — parallel zh translation (optional)
  titleZh?: string;
  bodyZh?: string;
};

type PlaceholderStat = {
  value: string;
  label: string;
  // Phase 3 — parallel zh translation (optional)
  labelZh?: string;
};

type PlaceholderSection = {
  type: "pageSection";
  kind: "hero" | "content" | "cta";
  title: string;
  body: string;
  image: string;
  linkHref: string;
  linkLabel: string;
  // Phase 3 — parallel zh translations (optional)
  titleZh?: string;
  bodyZh?: string;
  linkLabelZh?: string;
  // Phase 2 — layout richness (all optional)
  columns?: 1 | 2;
  imageSide?: "left" | "right";
  features?: PlaceholderFeature[];
  stats?: PlaceholderStat[];
};

export type PlaceholderPage = {
  order: string[];
  sections: Record<string, PlaceholderSection>;
};

type PlaceholderZh = {
  heroTitle?: string;
  heroBody?: string;
  contentTitle?: string;
  contentBody?: string;
  ctaTitle?: string;
  ctaBody?: string;
  ctaLabel?: string;
};

function ph(
  heroTitle: string,
  heroBody: string,
  contentTitle: string,
  contentBody: string,
  ctaTitle: string,
  ctaBody: string,
  ctaHref: string,
  ctaLabel: string,
  contentExtras?: Partial<
    Pick<
      PlaceholderSection,
      "columns" | "imageSide" | "features" | "stats"
    >
  >,
  zh?: PlaceholderZh
): PlaceholderPage {
  return {
    order: ["hero", "content", "cta"],
    sections: {
      hero: {
        type: "pageSection",
        kind: "hero",
        title: heroTitle,
        body: heroBody,
        image: "",
        linkHref: "",
        linkLabel: "",
        titleZh: zh?.heroTitle ?? "",
        bodyZh: zh?.heroBody ?? "",
      },
      content: {
        type: "pageSection",
        kind: "content",
        title: contentTitle,
        body: contentBody,
        image: "",
        linkHref: "",
        linkLabel: "",
        titleZh: zh?.contentTitle ?? "",
        bodyZh: zh?.contentBody ?? "",
        ...(contentExtras ?? {}),
      },
      cta: {
        type: "pageSection",
        kind: "cta",
        title: ctaTitle,
        body: ctaBody,
        image: "",
        linkHref: ctaHref,
        linkLabel: ctaLabel,
        titleZh: zh?.ctaTitle ?? "",
        bodyZh: zh?.ctaBody ?? "",
        linkLabelZh: zh?.ctaLabel ?? "",
      },
    },
  };
}

export const PLACEHOLDER_PAGES: Record<string, PlaceholderPage> = {
  projects: ph(
    "Medical Programs in China",
    "Explore China's leading medical programs across oncology, regenerative medicine, and integrative care — delivered by world-class hospitals and specialists.",
    "Featured Programs",
    "From heavy-ion and proton therapy to CAR-T cell therapy, stem-cell treatments, and TCM-integrated specialties, our curated programs connect you with China's most advanced clinical capabilities.",
    "Start Your Assessment",
    "Tell us about your medical needs and we will match the right hospital and specialist for your case.",
    "/contact",
    "Contact Us",
    {
      features: [
        {
          title: "Heavy-Ion & Proton Therapy",
          titleZh: "重离子与质子治疗",
          body: "Precision radiotherapy for tumors with minimal damage to surrounding healthy tissue.",
          bodyZh: "针对肿瘤的精准放射治疗，对周围健康组织的损伤降至最低。",
        },
        {
          title: "CAR-T Cell Therapy",
          titleZh: "CAR-T 细胞疗法",
          body: "Next-generation immunotherapy that retrains your own cells to fight cancer.",
          bodyZh: "重新训练自体细胞以对抗癌症的新一代免疫疗法。",
        },
        {
          title: "Stem-Cell & Regenerative",
          titleZh: "干细胞与再生医学",
          body: "Advanced regenerative treatments for orthopedic and degenerative conditions.",
          bodyZh: "针对骨科及退行性疾病的先进再生治疗。",
        },
        {
          title: "TCM-Integrated Care",
          titleZh: "中西医整合治疗",
          body: "Evidence-based traditional Chinese medicine combined with modern clinical protocols.",
          bodyZh: "循证中医与现代临床方案相结合。",
        },
      ],
    },
    {
      heroTitle: "中国医疗项目",
      heroBody:
        "探索中国在肿瘤、再生医学与整合医疗领域的领先项目，由世界级医院与专家团队提供。",
      contentTitle: "重点项目",
      contentBody:
        "从重离子与质子治疗到 CAR-T 细胞疗法、干细胞治疗，以及结合中医的特色专科，我们甄选的项目助您对接中国最前沿的临床能力。",
      ctaTitle: "开始您的评估",
      ctaBody: "告诉我们您的医疗需求，我们将为您匹配最合适的医院与专家。",
      ctaLabel: "联系我们",
    }
  ),
  services: ph(
    "Cross-Border Medical Coordination",
    "End-to-end support for international patients — from medical records and translation to hospital matching, travel, and follow-up care.",
    "Service Packages",
    "Choose the level of support that fits your journey: light, standard, advanced, or full VIP coordination — each backed by transparent pricing and our refund guarantee.",
    "Talk to a Coordinator",
    "Our team helps you prepare records and plan your China medical journey with confidence.",
    "/contact",
    "Contact Us",
    undefined,
    {
      heroTitle: "跨境医疗协调",
      heroBody:
        "为国际患者提供从病历整理、翻译到医院匹配、行程安排与后续随访的全程支持。",
      contentTitle: "服务套餐",
      contentBody:
        "选择契合您旅程的支持级别：轻量、标准、进阶或全程 VIP 协调——每一项均价格透明，并享我们的退款保障。",
      ctaTitle: "与协调员沟通",
      ctaBody: "我们的团队协助您准备病历，从容规划赴华就医之旅。",
      ctaLabel: "联系我们",
    }
  ),
  hospitals: ph(
    "Partner Hospitals",
    "A trusted network of renowned Chinese hospitals and specialist institutions, selected for clinical excellence and international patient experience.",
    "Hospital Network",
    "We partner with top-tier institutions across Beijing, Shanghai, Guangzhou, and Hainan — including proton & heavy-ion centers, comprehensive cancer hospitals, and TCM leaders.",
    "Request a Match",
    "We match your condition to the most suitable hospital and specialist based on your medical profile.",
    "/contact",
    "Contact Us",
    {
      stats: [
        { value: "30+", label: "Partner Hospitals", labelZh: "合作医院" },
        { value: "4", label: "Major Cities", labelZh: "主要城市" },
        { value: "12", label: "Specialty Centers", labelZh: "专科中心" },
        { value: "98%", label: "Case Match Rate", labelZh: "匹配成功率" },
      ],
    },
    {
      heroTitle: "合作医院",
      heroBody:
        "值得信赖的中国知名医院与专科机构网络，以卓越的临床实力与国际患者服务经验甄选而成。",
      contentTitle: "医院网络",
      contentBody:
        "我们与北京、上海、广州、海南的顶级机构合作——包括质子重离子中心、综合性肿瘤医院与中医领航机构。",
      ctaTitle: "申请匹配",
      ctaBody: "我们将根据您的病历资料，为您匹配最合适的医院与专家。",
      ctaLabel: "联系我们",
    }
  ),
  stories: ph(
    "Patient Stories",
    "Real outcomes from international patients who came to China for care — in their own words.",
    "Outcomes & Testimonials",
    "From complex oncology cases to regenerative therapies, these stories show what careful coordination and world-class medicine can achieve together.",
    "Share Your Story",
    "If you have completed treatment with us, we would love to hear how your journey went.",
    "/contact",
    "Contact Us",
    undefined,
    {
      heroTitle: "患者故事",
      heroBody: "真实国际患者的治疗结局——以他们自己的话说。",
      contentTitle: "疗效与见证",
      contentBody:
        "从复杂肿瘤病例到再生疗法，这些故事展现了精心协调与世界级医学协作所能达成的成果。",
      ctaTitle: "分享您的故事",
      ctaBody: "若您已在我们这里完成治疗，我们很想了解您的旅程。",
      ctaLabel: "联系我们",
    }
  ),
  about: ph(
    "About MedKungfu",
    "We connect international patients with China's best medical resources — with empathy, transparency, and end-to-end coordination.",
    "Who We Are",
    "MedKungfu is a specialized international medical placement service. We organize the full cross-border care process — matching hospitals, managing records, translation, visas, accommodation, escort, and follow-up.",
    "Work With Us",
    "Hospitals and partners are welcome to collaborate with us to serve global patients.",
    "/contact",
    "Contact Us",
    undefined,
    {
      heroTitle: "关于康福来",
      heroBody: "我们以同理心、透明与全程协调，连接国际患者与中国最优质的医疗资源。",
      contentTitle: "我们是谁",
      contentBody:
        "康福来是专注于国际医疗对接的服务机构。我们统筹完整的跨境就医流程——医院匹配、病历管理、翻译、签证、住宿、陪诊与随访。",
      ctaTitle: "与我们合作",
      ctaBody: "欢迎医院与合作伙伴携手，共同服务全球患者。",
      ctaLabel: "联系我们",
    }
  ),
  faq: ph(
    "Frequently Asked Questions",
    "Answers to the questions international patients ask before traveling to China for medical care.",
    "Common Questions",
    "Learn about costs, timelines, preparation, and what to expect at each stage of your medical journey with MedKungfu.",
    "Browse All FAQs",
    "Find detailed guidance on eligibility, documents, and post-treatment follow-up.",
    "/faq",
    "Read More",
    undefined,
    {
      heroTitle: "常见问题",
      heroBody: "赴华就医前国际患者最常提出的疑问解答。",
      contentTitle: "常见问题",
      contentBody: "了解费用、时间线、准备事项，以及康福来就医旅程各阶段的预期。",
      ctaTitle: "浏览全部问答",
      ctaBody: "获取关于资格、材料与治疗后随访的详细指引。",
      ctaLabel: "了解更多",
    }
  ),
  contact: ph(
    "Contact Us",
    "Reach our coordination team for an initial assessment — we respond within one business day.",
    "Get in Touch",
    "Email us at contact@medkungfu.com or reach us on WhatsApp. Our multilingual team is ready to help you take the first step.",
    "Submit an Inquiry",
    "Send your medical needs and we will respond with a personalized assessment.",
    "/contact",
    "Contact Us",
    undefined,
    {
      heroTitle: "联系我们",
      heroBody: "联系我们的协调团队进行初步评估——我们将在一个工作日内回复。",
      contentTitle: "取得联系",
      contentBody:
        "欢迎通过 contact@medkungfu.com 或 WhatsApp 联系我们。我们的多语言团队随时助您迈出第一步。",
      ctaTitle: "提交咨询",
      ctaBody: "发送您的医疗需求，我们将回复个性化评估。",
      ctaLabel: "联系我们",
    }
  ),
  "why-china": ph(
    "Why China Medical",
    "World-class care, advanced technology, and cost-effective treatment — making China a leading destination for international patients.",
    "The China Advantage",
    "From proton therapy centers and CAR-T clinical leadership to TCM integration and medical-tourism-friendly access, China offers a unique combination of quality, speed, and value.",
    "Compare Your Options",
    "See how China medical care compares for your condition and why patients choose it.",
    "/contact",
    "Contact Us",
    {
      features: [
        {
          title: "World-Class Facilities",
          titleZh: "世界级设施",
          body: "Hospitals equipped with the latest imaging, radiotherapy, and surgical technology.",
          bodyZh: "配备最新影像、放疗与外科技术的医院。",
        },
        {
          title: "Cost-Effective Care",
          titleZh: "高性价比诊疗",
          body: "Comparable outcomes at a fraction of the cost of treatments in the US or Europe.",
          bodyZh: "疗效可比，费用仅为欧美的一小部分。",
        },
        {
          title: "Integrated Coordination",
          titleZh: "一体化协调",
          body: "One team manages records, translation, visas, accommodation, and follow-up.",
          bodyZh: "由一支团队统筹病历、翻译、签证、住宿与随访。",
        },
        {
          title: "Fast Access",
          titleZh: "快速就诊",
          body: "Short waiting times from consultation to the start of treatment.",
          bodyZh: "从会诊到开始治疗等待时间短。",
        },
      ],
    },
    {
      heroTitle: "为什么选择中国医疗",
      heroBody: "世界级诊疗、先进技术、高性价比——使中国成为国际患者的首选目的地。",
      contentTitle: "中国优势",
      contentBody:
        "从重离子治疗中心、CAR-T 临床领先，到中医整合与友好的医疗旅游通道，中国兼具质量、速度与价值。",
      ctaTitle: "对比您的选择",
      ctaBody: "了解中国医疗在您的病症上与同类方案的对比，以及患者选择它的原因。",
      ctaLabel: "联系我们",
    }
  ),
};

/** Short descriptions used by the /studio page-listing cards. */
export const PAGE_DESCRIPTIONS: Record<string, string> = {
  home: "Hero, services, trust stats, patient stories, FAQ, CTA",
  projects: "Medical projects overview and program listings",
  services: "Cross-border medical service packages",
  hospitals: "Partner hospital network and specialties",
  stories: "Patient stories and outcomes",
  about: "About MedKungfu and our mission",
  faq: "Frequently asked questions",
  contact: "Contact and inquiry information",
  "why-china": "Why choose China for medical care",
};

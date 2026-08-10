import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { ImmunotherapyProjectPage, type ImmunotherapyProjectConfig } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/immunotherapy/ImmunotherapyProjectPage";

export const metadata: Metadata = {
  title: "DC Vaccine Therapy for EBV-related Hematologic Tumors | MedKungFu",
  description:
    "EBV-related DC Vaccine Therapy (KSD-101) in China — the world's first broad-spectrum EBV-targeted dendritic cell vaccine with FDA IND, FTD and RMAT designations, ORR 91.67%.",
};

const CONFIG: ImmunotherapyProjectConfig = {
  ariaLabel: "EBV-Related DC Vaccine Therapy",
  hero: {
    badge: "Precision Oncology",
    title: "DC Vaccine Therapy for EBV-related Hematologic Tumors",
    subtitle: "Awaken Autoimmunity, Precisely Eliminate EBV-driven Hematologic Tumors",
    primaryBtn: "Book Consultation",
    secondaryBtn: "Learn About Treatment Process",
  },
  stickyNav: [
    "Introduction",
    "Core Advantages",
    "Indications",
    "Treatment Process",
    "Efficacy Data",
  ],
  intro: {
    heading: "What is EBV-related DC Vaccine Therapy?",
    paragraphs: [
      {
        before:
          "Epstein-Barr Virus (EBV) is the first confirmed human tumor-related virus worldwide, with approximately ",
        highlight: "200,000 cancer cases",
        after: " caused by EBV infection annually.",
      },
      {
        before: "",
        highlight: "KSD-101",
        after:
          " is a global first-in-class autologous dendritic cell (DC) vaccine, specifically developed for EBV-related hematologic tumors.",
      },
      {
        before:
          "KSD-101 is the first Chinese original dendritic cell (DC) vaccine product to receive US FDA IND approval and FDA Fast Track Designation (FTD). In 2026, the product further received US FDA Regenerative Medicine Advanced Therapy (RMAT) designation for treating relapsed or refractory EBV-positive lymphoma.",
      },
    ],
  },
  advantages: {
    heading: "Core Advantages – Why Choose DC Vaccine Therapy in China?",
    bg: "bg-white",
    items: [
      {
        icon: "globe",
        title: "World's First Technology, Dual Approval from China & US",
        description:
          "KSD-101 is the world's first broad-spectrum EBV-targeted DC vaccine, simultaneously approved by China NMPA for clinical trials and US FDA IND, with FTD and RMAT designations, leading international recognition",
      },
      {
        icon: "trendingUp",
        title: "Breakthrough Clinical Efficacy",
        description:
          "Clinical study data shows ORR up to 91.67%, CR 83.33%, DCR 100%, remarkable efficacy",
      },
      {
        icon: "shield",
        title: "Excellent Safety Profile",
        description:
          "Adverse reactions are mainly mild (injection site reactions, fever, lymph node enlargement), all grade 1-2, no ≥grade 3 toxicity or dose-limiting toxicity (DLT) observed",
      },
      {
        icon: "syringe",
        title: "Convenient Administration, No Lymphocyte Depletion",
        description:
          "Subcutaneous injection every 2 weeks, 3-5 sessions total, good patient tolerance and compliance; no pre-treatment lymphocyte depletion or prophylactic medication required, simplified treatment process",
      },
      {
        icon: "target",
        title: "Breaks HLA Limitations, Broad Applicability",
        description:
          "Breaks through limitations of traditional immunotherapy in HLA matching and narrow antigen spectrum, effectively presents multiple viral epitopes including LMP2 and EBNA1, significantly broadening immune recognition range",
      },
      {
        icon: "zap",
        title: "Dual Therapeutic Effects",
        description:
          "Simultaneously exerts dual antiviral and anti-tumor therapeutic effects, clearing virus-infected tumor cells while rebuilding durable immune memory to prevent recurrence",
      },
      {
        icon: "mapPin",
        title: "Hainan Boao Pilot Zone Advantage",
        description:
          "Leveraging Lecheng “Pilot First” policy, KSD-101 has been implemented at Ruijin Hospital Hainan Branch, providing eligible patients with this globally leading treatment technology",
      },
    ],
  },
  indications: {
    heading: "Indications",
    intro:
      "KSD-101 is mainly suitable for EBV-related hematologic tumor patients who have failed standard treatment or relapsed. Subtypes currently validated by clinical research include:",
    listItems: [
      "EBV-positive Diffuse Large B-Cell Lymphoma (EBV+DLBCL)",
      "EBV-associated NK/T-cell Lymphoma (NKTCL, nasal/peripheral type)",
      "Hodgkin Lymphoma (HL, EBV-positive)",
      "Angioimmunoblastic T-cell Lymphoma (AITL)",
      "Chronic Active EBV Infection (CAEBV)",
      "EBV-associated Hemophagocytic Lymphohistiocytosis (EBV-HLH)",
      "EBV-positive Nodal T-follicular Helper Cell Lymphoma (nTFHL-AI type)",
      "Burkitt Lymphoma (BL, EBV-positive)",
    ],
    sideCard: {
      heading: "Assessment Notes",
      description:
        "Whether suitable for DC vaccine therapy requires comprehensive individualized assessment by a multidisciplinary expert team. Studies suggest patients with poor tolerance to traditional chemotherapy may benefit more.",
      listHeading: "Treatment Features",
      features: [
        "Autologous cell therapy, high safety",
        "No lymphocyte depletion pretreatment required",
        "Subcutaneous injection, easy to operate",
        "Subsequent injections can be completed outpatient",
      ],
    },
  },
  treatmentContent: {
    heading: "Treatment Content",
    subtitle: "DC vaccine therapy includes the following core components",
    bg: "bg-white",
    items: [
      {
        title: "Multidisciplinary Team Assessment & Screening",
        description:
          "MDT team composed of hematology-oncology experts, immunology experts, etc., comprehensively evaluates patient EBV infection status, tumor characteristics and treatment indications",
      },
      {
        title: "Monocyte Collection",
        description:
          "Collect sufficient monocytes from patient peripheral blood through leukapheresis, send to GMP-certified laboratory for subsequent preparation",
      },
      {
        title: "Personalized DC Vaccine Preparation",
        description:
          "In GMP-certified laboratory, collected monocytes are induced to differentiate into dendritic cells in vitro and loaded with EBV-specific composite antigens to prepare personalized therapeutic vaccines",
      },
      {
        title: "DC Vaccine Subcutaneous Injection",
        description:
          "Prepared vaccine is returned to patient body via subcutaneous injection, closely observe reactions after each injection. No lymphocyte depletion pretreatment or prophylactic medication required throughout the process",
      },
      {
        title: "Regular Follow-up & Immune Monitoring",
        description:
          "Regular follow-up after treatment, monitor EBV DNA levels and immune response, evaluate efficacy and safety",
      },
    ],
  },
  process: {
    heading: "Treatment Process",
    subtitle: "Approximately 2-3 months from initial consultation to recovery",
    steps: [
      {
        title: "Remote Consultation & Initial Screening",
        duration: "2-5 days",
        description:
          "Submit medical records for remote evaluation by multidisciplinary expert team to determine eligibility for DC vaccine therapy",
      },
      {
        title: "Visa & Travel Arrangements",
        duration: "1-2 weeks",
        description:
          "Medical visa invitation letter, international insurance coordination, itinerary planning and accommodation arrangements",
      },
      {
        title: "Arrival in China & Comprehensive Assessment",
        duration: "2-3 days",
        description:
          "Comprehensive physical examination, EBV DNA testing, immunological function assessment, tumor burden evaluation",
      },
      {
        title: "Monocyte Collection",
        duration: "1 day",
        description: "Collect patient peripheral blood monocytes through leukapheresis",
      },
      {
        title: "DC Vaccine Preparation",
        duration: "2-3 weeks",
        description:
          "Induce dendritic cell differentiation and load EBV antigens in GMP laboratory",
      },
      {
        title: "Subcutaneous Injection Treatment",
        duration: "6-10 weeks",
        description: "Subcutaneous injection every 2 weeks, 3-5 sessions total",
      },
      {
        title: "Hospitalization Monitoring & Discharge",
        duration: "3-7 days (after first injection)",
        description:
          "Short-term hospitalization for close monitoring after first injection, subsequent injections can be completed outpatient",
      },
      {
        title: "Long-term Follow-up Management",
        duration: "Ongoing",
        description:
          "Regular follow-up examinations, remote consultations, immune response monitoring",
      },
    ],
    summaryNote: {
      before:
        "From arrival in China to completion of all injection treatments, the entire process typically takes ",
      highlight: "8-12 weeks",
      after:
        ", shorter cycle and higher convenience compared to traditional radiotherapy and chemotherapy.",
    },
  },
  efficacy: {
    heading: "Efficacy Data",
    subtitle: "Overview of core efficacy data (latest data published by EHA 2025)",
    bg: "bg-white",
    stats: [
      {
        label: "Objective Response Rate (ORR)",
        value: "91.67%",
        note: "Multi-line relapsed/refractory EBV-related hematologic tumor patients",
      },
      {
        label: "Complete Response Rate (CR)",
        value: "83.33%",
        note: "Multi-line relapsed/refractory EBV-related hematologic tumor patients",
      },
      {
        label: "Disease Control Rate (DCR)",
        value: "100%",
        note: "Multi-line relapsed/refractory EBV-related hematologic tumor patients",
      },
      {
        label: "Median Follow-up",
        value: "42.7周",
        note: "Most patients achieved and maintained complete response (CR)",
      },
    ],
    safetyHeading: "Safety Data",
    table: {
      headers: ["Adverse Reaction Type", "Incidence Rate", "Severity"],
      rows: [
        {
          bg: "bg-white",
          cells: [
            { text: "Injection Site Reactions", className: "px-6 py-4 text-gray-700" },
            { text: "~91%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
            { text: "Grade 1, mild", className: "px-6 py-4 text-gray-600" },
          ],
        },
        {
          bg: "bg-[#F5F7FA]",
          cells: [
            { text: "Fever", className: "px-6 py-4 text-gray-700" },
            { text: "May occur", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
            { text: "≤Grade 2, mild-moderate", className: "px-6 py-4 text-gray-600" },
          ],
        },
        {
          bg: "bg-white",
          cells: [
            { text: "Lymph Node Enlargement", className: "px-6 py-4 text-gray-700" },
            { text: "May occur", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
            { text: "Grade 1, mild", className: "px-6 py-4 text-gray-600" },
          ],
        },
        {
          bg: "bg-[#F5F7FA]",
          cells: [
            { text: "≥Grade 3 Toxicity", className: "px-6 py-4 text-gray-700" },
            { text: "0%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
            { text: "Not observed", className: "px-6 py-4 text-gray-600" },
          ],
        },
        {
          bg: "bg-white",
          cells: [
            { text: "Dose-Limiting Toxicity (DLT)", className: "px-6 py-4 text-gray-700" },
            { text: "0%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
            { text: "Not observed", className: "px-6 py-4 text-gray-600" },
          ],
        },
      ],
    },
  },
  cost: {
    heading: "Reference Treatment Cost",
    label: "Total treatment cost approximately",
    amount: "$110,000 - $150,000",
  },
  whyChooseUs: {
    heading: "Why Choose Us?",
    variant: "muted",
    bg: "bg-white",
    items: [
      {
        icon: "stethoscope",
        title: "Direct Access to China's Top DC Vaccine Centers",
        description:
          "Collaboration with multiple top institutions to provide safe and reliable DC vaccine therapy services",
      },
      {
        icon: "globe",
        title: "World's First Chinese Original Technology",
        description:
          "KSD-101 is the world's first broad-spectrum EBV-targeted DC vaccine, approved by both China and US IND, with FDA FTD and RMAT designations",
      },
      {
        icon: "trendingUp",
        title: "Internationally Leading Efficacy Data",
        description:
          "ORR 91.67%, CR 83.33%, DCR 100%, excellent performance in relapsed/refractory EBV-related hematologic tumors",
      },
      {
        icon: "shield",
        title: "Safety Far Superior to Chemotherapy and CAR-T",
        description:
          "Treatment-related adverse events are all mild-moderate, no ≥grade 3 toxicity, no lymphocyte depletion required, excellent tolerance",
      },
      {
        icon: "syringe",
        title: "Convenient Administration, Outpatient Possible",
        description:
          "Subcutaneous injection is simple to operate, subsequent injections can be completed without hospitalization, high patient compliance",
      },
      {
        icon: "mapPin",
        title: "Leveraging Hainan Boao Lecheng Pilot Zone Policy",
        description:
          "Enjoy “Pilot First” policy, priority access to international cutting-edge therapies, compliant, safe, efficient",
      },
      {
        icon: "award",
        title: "Transparent Pricing, No Middleman Markup",
        description: "Medical fees paid directly to hospital, platform does not handle or markup",
      },
      {
        icon: "users",
        title: "Full Bilingual Service",
        description: "Medical record translation, on-site interpretation, one-stop support",
      },
      {
        icon: "heart",
        title: "Long-term Follow-up Management",
        description:
          "Continuous remote follow-up after treatment, uninterrupted immune monitoring",
      },
    ],
  },
  notice: {
    text:
      "DC vaccine therapy has significant efficacy, but is not suitable for all tumor patients. Treatment effects vary due to individual differences, and all patients must undergo comprehensive medical assessment and sign informed consent before treatment. DC vaccines are currently mainly positioned for EBV-related hematologic tumor patients who are relapsed, refractory, or have poor response to standard treatment. Whether suitable for treatment requires strict, individualized assessment by a multidisciplinary expert team.",
  },
  cta: {
    heading: "Start Your DC Vaccine Therapy Journey",
    subtitle:
      "Contact our professional team to get personalized DC vaccine therapy assessment and plan",
    primary: { label: "Book Consultation", href: "/contact" },
    secondary: { label: "WhatsApp Consultation", href: "https://wa.me/16462968491", external: true },
  },
};

// Chinese variant of the above config, transcribed verbatim from the zh-mode
// page https://www.medkungfu.com/projects/ebv-dc-vaccine.
const CONFIG_ZH: ImmunotherapyProjectConfig = {
  ariaLabel: "EBV-Related DC Vaccine Therapy",
  hero: {
    badge: "精准肿瘤治疗",
    title: "EBV相关血液肿瘤DC疫苗治疗",
    subtitle: "唤醒自身免疫，精准剿灭EBV驱动性血液肿瘤",
    primaryBtn: "预约咨询",
    secondaryBtn: "了解治疗流程",
  },
  stickyNav: ["简介", "核心优势", "适应症", "治疗流程", "疗效数据"],
  intro: {
    heading: "什么是EBV相关DC疫苗治疗？",
    paragraphs: [
      {
        before:
          "EB病毒（Epstein-Barr Virus, EBV）是全球首个被确认的人类肿瘤相关病毒，全球每年约有",
        highlight: "20万癌症病例",
        after: "由EBV感染引起。",
      },
      {
        before: "",
        highlight: "KSD-101",
        after:
          "是一款全球首创（First-in-class）的自体树突状细胞（Dendritic Cell, DC）疫苗，专为EBV相关血液肿瘤开发。",
      },
      {
        before:
          "KSD-101是中国首个获得美国FDA IND批件、中国首个获得FDA快速通道资格（FTD）认定的原创树突细胞疫苗（DC疫苗）产品。2026年，该产品进一步获得美国FDA再生医学先进疗法（RMAT）认定，用于治疗复发或难治性EBV阳性淋巴瘤。",
      },
    ],
  },
  advantages: {
    heading: "核心优势 – 为什么选择在中国接受DC疫苗治疗？",
    bg: "bg-white",
    items: [
      {
        icon: "globe",
        title: "全球首创技术，中美双批认可",
        description:
          "KSD-101是全球首个靶向EBV广谱的DC疫苗，同时获中国NMPA临床试验默示许可和美国FDA IND批件、FTD认定及RMAT认定，国际权威认可程度行业领先",
      },
      {
        icon: "trendingUp",
        title: "突破性临床疗效",
        description:
          "临床研究数据显示，客观缓解率（ORR）高达91.67%，完全缓解率（CR）83.33%，疾病控制率（DCR）100%，疗效令人瞩目",
      },
      {
        icon: "shield",
        title: "安全性卓越",
        description:
          "不良反应以轻度为主（注射部位反应、发热、淋巴结肿大），均为1-2级，未观察到≥3级毒性和剂量限制性毒性（DLT）",
      },
      {
        icon: "syringe",
        title: "给药便捷，无需清淋",
        description:
          "采用皮下注射方式给药，每2周一次，全程3-5次，患者耐受性好、依从性高；无需预处理淋巴细胞清除，无需预防性用药，治疗流程简化",
      },
      {
        icon: "target",
        title: "突破HLA限制，广谱适用",
        description:
          "突破传统免疫疗法在HLA配型和抗原谱狭窄上的局限，可有效呈递LMP2、EBNA1等多重病毒表位，显著拓宽免疫识别范围",
      },
      {
        icon: "zap",
        title: "双重治疗作用",
        description:
          "同时发挥抗病毒和抗肿瘤双重治疗作用，既能清除病毒感染的肿瘤细胞，又能重建持久的免疫记忆预防复发",
      },
      {
        icon: "mapPin",
        title: "海南博鳌先行区优势",
        description:
          "依托乐城“先行先试”政策，KSD-101已落地瑞金医院海南医院，可为符合条件的患者提供这一全球领先的治疗技术",
      },
    ],
  },
  indications: {
    heading: "适应症",
    intro:
      "KSD-101主要适用于经标准治疗无效或复发的EBV相关血液肿瘤患者。目前已获临床研究验证的亚型包括：",
    listItems: [
      "EBV阳性弥漫大B细胞淋巴瘤（EBV+DLBCL）",
      "EBV相关NK/T细胞淋巴瘤（NKTCL，鼻型/外周型）",
      "霍奇金淋巴瘤（HL，EBV阳性）",
      "血管免疫母细胞性T细胞淋巴瘤（AITL）",
      "慢性活动性EB病毒感染（CAEBV）",
      "EBV相关噬血细胞性淋巴组织细胞增多症（EBV-HLH）",
      "EBV阳性结节性T滤泡辅助细胞淋巴瘤（nTFHL-AI型）",
      "Burkitt淋巴瘤（BL，EBV阳性）",
    ],
    sideCard: {
      heading: "评估说明",
      description:
        "是否适合接受DC疫苗治疗，需由多学科专家团队进行全面个体化评估。研究提示对传统化疗耐受性差的患者可能获益更多。",
      listHeading: "治疗特点",
      features: [
        "自体细胞治疗，安全性高",
        "无需清淋预处理",
        "皮下注射，操作简便",
        "门诊即可完成后续注射",
      ],
    },
  },
  treatmentContent: {
    heading: "治疗内容",
    subtitle: "DC疫苗治疗包含以下核心环节",
    bg: "bg-white",
    items: [
      {
        title: "多学科团队评估与筛选",
        description:
          "由血液肿瘤学专家、免疫学专家等组成MDT团队，全面评估患者EBV感染状态、肿瘤特征和治疗适应证",
      },
      {
        title: "单核细胞采集",
        description:
          "通过白细胞分离术从患者外周血中采集足量单核细胞，送往GMP认证实验室进行后续制备",
      },
      {
        title: "DC疫苗个性化制备",
        description:
          "在GMP认证实验室中，将采集的单核细胞体外诱导分化为树突状细胞，并负载EBV特异性复合抗原，制备成个体化治疗性疫苗",
      },
      {
        title: "DC疫苗皮下注射",
        description:
          "制备完成的疫苗以皮下注射方式回输至患者体内，每次注射后密切观察反应。全程无需淋巴细胞清除预处理，无需预防性用药",
      },
      {
        title: "定期随访与免疫监测",
        description:
          "治疗后定期随访，检测EBV DNA水平和免疫应答情况，评估疗效和安全性",
      },
    ],
  },
  process: {
    heading: "治疗流程",
    subtitle: "从初诊至康复约2-3个月",
    steps: [
      {
        title: "远程咨询与初筛",
        duration: "2-5天",
        description: "提交病历资料，多学科专家团队远程评估是否符合DC疫苗治疗指征",
      },
      {
        title: "签证与行程安排",
        duration: "1-2周",
        description: "医疗签证邀请函、国际保险对接、行程规划与住宿安排",
      },
      {
        title: "抵华与全面评估",
        duration: "2-3天",
        description: "全面身体检查、EBV DNA检测、免疫学功能评估、肿瘤负荷评估",
      },
      {
        title: "单核细胞采集",
        duration: "1天",
        description: "白细胞分离术采集患者外周血单核细胞",
      },
      {
        title: "DC疫苗制备",
        duration: "2-3周",
        description: "在GMP实验室进行树突状细胞诱导分化及EBV抗原负载",
      },
      {
        title: "皮下注射治疗",
        duration: "6-10周",
        description: "每2周皮下注射一次，全程3-5次注射",
      },
      {
        title: "住院监测与出院",
        duration: "3-7天（首次注射后）",
        description: "首次注射后短期住院密切监测，后续注射可在门诊完成",
      },
      {
        title: "长期随访管理",
        duration: "持续",
        description: "定期复查、远程随访、免疫应答监测",
      },
    ],
    summaryNote: {
      before: "从抵华至完成全部注射治疗，全程通常需要",
      highlight: "8-12周",
      after: "，相比传统放化疗周期更短、便利性更高。",
    },
  },
  efficacy: {
    heading: "疗效数据",
    subtitle: "核心疗效数据一览（2025年EHA公布最新数据）",
    bg: "bg-white",
    stats: [
      {
        label: "客观缓解率（ORR）",
        value: "91.67%",
        note: "多线复发难治EBV相关血液肿瘤患者",
      },
      {
        label: "完全缓解率（CR）",
        value: "83.33%",
        note: "多线复发难治EBV相关血液肿瘤患者",
      },
      {
        label: "疾病控制率（DCR）",
        value: "100%",
        note: "多线复发难治EBV相关血液肿瘤患者",
      },
      {
        label: "中位随访",
        value: "42.7周",
        note: "大部分患者达到完全缓解（CR）并得以维持",
      },
    ],
    safetyHeading: "安全性数据",
    table: {
      headers: ["不良反应类型", "发生率", "严重程度"],
      rows: [
        {
          bg: "bg-white",
          cells: [
            { text: "注射部位反应", className: "px-6 py-4 text-gray-700" },
            { text: "约91%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
            { text: "1级，轻度", className: "px-6 py-4 text-gray-600" },
          ],
        },
        {
          bg: "bg-[#F5F7FA]",
          cells: [
            { text: "发热", className: "px-6 py-4 text-gray-700" },
            { text: "可发生", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
            { text: "≤2级，轻中度", className: "px-6 py-4 text-gray-600" },
          ],
        },
        {
          bg: "bg-white",
          cells: [
            { text: "淋巴结肿大", className: "px-6 py-4 text-gray-700" },
            { text: "可发生", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
            { text: "1级，轻度", className: "px-6 py-4 text-gray-600" },
          ],
        },
        {
          bg: "bg-[#F5F7FA]",
          cells: [
            { text: "≥3级毒性", className: "px-6 py-4 text-gray-700" },
            { text: "0%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
            { text: "未观察到", className: "px-6 py-4 text-gray-600" },
          ],
        },
        {
          bg: "bg-white",
          cells: [
            { text: "剂量限制性毒性（DLT）", className: "px-6 py-4 text-gray-700" },
            { text: "0%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
            { text: "未观察到", className: "px-6 py-4 text-gray-600" },
          ],
        },
      ],
    },
  },
  cost: {
    heading: "参考治疗费用",
    label: "全疗程治疗费用约在",
    amount: "$110,000 - $150,000",
  },
  whyChooseUs: {
    heading: "为什么选择我们？",
    variant: "muted",
    bg: "bg-white",
    items: [
      {
        icon: "stethoscope",
        title: "直通中国顶级DC疫苗治疗中心",
        description: "与多家顶尖机构建立合作，为患者提供安全、可靠的DC疫苗治疗服务",
      },
      {
        icon: "globe",
        title: "全球首创中国原创技术",
        description:
          "KSD-101是全球首个靶向EBV广谱的DC疫苗，获中美双IND批准、FDA FTD认定及RMAT认定",
      },
      {
        icon: "trendingUp",
        title: "疗效数据国际领先",
        description:
          "ORR 91.67%、CR 83.33%、DCR 100%，在复发难治性EBV相关血液肿瘤中表现卓越",
      },
      {
        icon: "shield",
        title: "安全性远优于化疗和CAR-T",
        description:
          "治疗相关不良事件均为轻中度，无≥3级毒性，无需清淋预处理，耐受性极佳",
      },
      {
        icon: "syringe",
        title: "给药便捷，门诊可完成",
        description: "皮下注射方式操作简便，无需住院即可完成后续注射，患者依从性高",
      },
      {
        icon: "mapPin",
        title: "依托海南博鳌乐城先行区政策",
        description:
          "享受“先行先试”政策，国际前沿疗法优先使用，合规、安全、高效",
      },
      {
        icon: "award",
        title: "价格透明，无中间加价",
        description: "医疗费用直付医院，平台不经手、不加价",
      },
      {
        icon: "users",
        title: "全程双语服务",
        description: "病历翻译、现场口译，一站式支持",
      },
      {
        icon: "heart",
        title: "长期随访管理",
        description: "治疗后持续远程随访，免疫监测不中断",
      },
    ],
  },
  notice: {
    text:
      "DC疫苗治疗疗效显著，但并非适用于所有肿瘤患者。治疗效果因个体差异而异，所有患者必须在治疗前接受全面医疗评估，签署知情同意书。DC疫苗目前主要定位于复发、难治或对标准治疗响应不佳的EBV相关血液肿瘤患者，是否适合接受治疗需由多学科专家团队进行严格、个体化的评估。",
  },
  cta: {
    heading: "开启您的DC疫苗治疗之旅",
    subtitle: "联系我们的专业团队，获取个性化的DC疫苗治疗评估与方案",
    primary: { label: "预约咨询", href: "/contact" },
    secondary: { label: "WhatsApp咨询", href: "https://wa.me/16462968491", external: true },
  },
};

export default function EbvDcVaccineProjectPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <ImmunotherapyProjectPage config={CONFIG} zhConfig={CONFIG_ZH} />
      </main>
      <SiteFooter />
    </>
  );
}

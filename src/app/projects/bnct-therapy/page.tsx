import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { ImmunotherapyProjectPage, type ImmunotherapyProjectConfig } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/immunotherapy/ImmunotherapyProjectPage";

export const metadata: Metadata = {
  title: "China Boron Neutron Capture Therapy (BNCT) | MedKungFu",
  description:
    "BNCT Boron Neutron Capture Therapy in China — precise 'Cell Knife' precision radiotherapy for refractory tumors, with 1-2 session treatment courses and head and neck cancer ORR of 80.5%.",
};

const CONFIG: ImmunotherapyProjectConfig = {
  ariaLabel: "BNCT Boron Neutron Capture Therapy - Precision Radiotherapy",
  hero: {
    badge: "Precision Oncology Treatment",
    title: "China Boron Neutron Capture Therapy (BNCT)",
    subtitle: "Precise “Cell Knife”, Reshaping Refractory Tumor Treatment Landscape",
    primaryBtn: "Schedule Consultation",
    secondaryBtn: "Learn About Treatment Process",
  },
  stickyNav: [
    "Introduction",
    "Core Advantages",
    "Indications",
    "Treatment Process",
    "Efficacy Data",
    "Case Studies",
  ],
  intro: {
    heading: "What is BNCT?",
    paragraphs: [
      {
        before:
          "Boron Neutron Capture Therapy (BNCT) is a revolutionary precision targeted radiotherapy technology. Due to its particle killing range being only at the cellular scale, BNCT is called ",
        highlight: "\"Cell Knife\"",
        after:
          ", possessing unique advantages of precise targeting, high relative biological effectiveness, and clinical irradiation typically requiring only one to two sessions to complete the course.",
      },
      {
        before:
          "BNCT is positioned as an important tumor treatment method following surgery, radiotherapy, chemotherapy and immunotherapy, demonstrating significant clinical value globally.",
      },
    ],
  },
  advantages: {
    heading: "Core Advantages - Why Choose BNCT in China?",
    bg: "bg-white",
    items: [
      {
        icon: "globe",
        title: "Global Leading Clinical Approval Progress",
        description:
          "China is the second country globally with officially approved BNCT clinical treatment institutions",
      },
      {
        icon: "clock",
        title: "Extremely Short Treatment Course, Low Radiation Dose",
        description:
          "BNCT's unique “Cell Knife” characteristic, clinical irradiation usually requires only 1-2 sessions to complete the course, treatment time 30-50 minutes, no repeated hospitalization needed, patients experience easy and painless treatment",
      },
      {
        icon: "target",
        title: "Precise Targeting, Minimal Side Effects",
        description:
          "BNCT causes minimal damage to surrounding normal tissues, no severe neurotoxicity or systemic toxicity, superior to traditional radiotherapy and systemic chemotherapy, significantly improving patient quality of life",
      },
      {
        icon: "trendingUp",
        title: "Excellent Efficacy, Rewriting Rules for Refractory Cancer Treatment",
        description:
          "Overseas real-world data shows: head and neck cancer ORR 80.5%, angiosarcoma CR rate 50% (ESMO 2025 data), meningioma BNCT treatment group 2-year survival rate 90.9%",
      },
      {
        icon: "zap",
        title: "Policy Pioneer, Global Integration",
        description:
          "Leveraging Hainan Boao Lecheng “Pilot First” policy, international cutting-edge BNCT technology introduced synchronously with priority access, no need to wait for lengthy approvals",
      },
    ],
  },
  indications: {
    heading: "Indications",
    intro:
      "BNCT is particularly suitable for tumor patients unresponsive to conventional chemoradiotherapy, with recurrence/refractory conditions, or located in important functional areas.",
    listItems: [
      "Head and neck malignant tumors (including nasopharyngeal carcinoma, oral cancer, laryngeal cancer, tongue cancer, gingival cancer, parotid gland cancer and more than ten subtypes)",
      "High-grade glioma (GBM, including newly diagnosed and recurrent)",
      "Malignant meningioma (recurrent)",
    ],
    sideCard: {
      heading: "Suitable Patients",
      bullets: [
        "Patients with locally advanced tumors unresponsive to conventional surgery/radiotherapy or with recurrence",
        "Patients resistant to traditional chemoradiotherapy and inoperable",
        "Pediatric tumors (significantly reducing impact on growth and development)",
        "Patients with recurrent high-grade brain tumors",
      ],
      note: "Note: Whether suitable for BNCT treatment requires comprehensive individualized assessment by a multidisciplinary expert team.",
    },
  },
  treatmentContent: {
    heading: "Treatment Content",
    subtitle: "BNCT treatment typically includes the following key steps",
    bg: "bg-white",
    items: [
      {
        title: "Multidisciplinary Team Assessment & Screening",
        description:
          "MDT team composed of oncology experts, radiation physicists, nuclear medicine specialists comprehensively evaluates patient tumor characteristics and treatment suitability",
      },
      {
        title: "18F-BPA PET Imaging Assessment",
        description:
          "Through internationally leading boron drug tracer imaging technology, precisely evaluates biological distribution and concentration of boron-containing drugs in tumors",
      },
      {
        title: "Personalized Treatment Plan Design",
        description:
          "Based on patient tumor 3D morphology, boron drug distribution data and organ risks, uses specialized treatment planning system to develop personalized irradiation plans",
      },
      {
        title: "Boron-containing Drug Intravenous Injection",
        description:
          "Patients receive intravenous injection of targeted boron-containing drugs hours to days before irradiation, drugs selectively accumulate in tumor cells",
      },
      {
        title: "Neutron Beam Irradiation Treatment",
        description:
          "On treatment day, patients receive neutron beam irradiation on treatment bed. Entire treatment is painless, patients can listen to music or chat during 30-50 minutes",
      },
      {
        title: "Hospital Monitoring & Supportive Care",
        description:
          "After irradiation completion, doctors closely monitor patient condition. Most patients require only 1-2 irradiations, hospital stay significantly shorter than traditional radiotherapy",
      },
    ],
  },
  process: {
    heading: "Treatment Process",
    subtitle: "Approximately 2-4 weeks from initial diagnosis to recovery",
    steps: [
      {
        title: "Remote Consultation & Initial Screening",
        duration: "2-5 days",
        description:
          "Submit medical records, multidisciplinary expert team remotely evaluates BNCT indication criteria",
      },
      {
        title: "Visa & Travel Arrangements",
        duration: "1-2 weeks",
        description:
          "Medical visa invitation letters, international insurance coordination, itinerary planning and accommodation arrangements",
      },
      {
        title: "Arrival in China & Examination Assessment",
        duration: "2-3 days",
        description:
          "Comprehensive physical assessment, 18F-BPA PET-CT imaging, target volume delineation, treatment plan review",
      },
      {
        title: "BNCT Irradiation Treatment",
        duration: "1-2 sessions, 30-50 minutes each",
        description:
          "Boron-containing drug injection + neutron beam irradiation treatment, painless, non-invasive, no surgery required",
      },
      {
        title: "Short-term Hospital Monitoring",
        duration: "3-7 days",
        description: "Close monitoring of adverse reactions, rehabilitation support care",
      },
      {
        title: "Discharge & Long-term Follow-up",
        duration: "Ongoing",
        description: "Regular re-examination, remote follow-up management",
      },
    ],
    summaryNote: {
      before:
        "From arrival in China to treatment completion, the entire process typically requires only ",
      highlight: "2-4 weeks",
      after: ", with extremely short treatment cycle.",
    },
  },
  efficacy: {
    heading: "Efficacy Data",
    subtitle: "Overseas clinical data (Japan real-world insurance coverage data, for reference)",
    bg: "bg-white",
    table: {
      wrapClassName: "-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0",
      tableClassName: "w-full min-w-[680px] bg-white rounded-2xl shadow-sm overflow-hidden",
      headers: ["Indication", "Study Type", "Indicator", "Data"],
      rows: [
        {
          bg: "bg-white",
          cells: [
            { text: "Locally Advanced/Recurrent Unresectable Head and Neck Cancer", className: "px-6 py-4 text-gray-700" },
            { text: "Real-world Study (69 cases)", className: "px-6 py-4 text-gray-600 text-sm" },
            { text: "Objective Response Rate (ORR)", className: "px-6 py-4 text-gray-700" },
            { text: "80.5%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
          ],
        },
        {
          bg: "bg-[#F5F7FA]",
          cells: [
            { text: "Same as above", className: "px-6 py-4 text-gray-700" },
            { text: "Real-world Study", className: "px-6 py-4 text-gray-600 text-sm" },
            { text: "1-Year Overall Survival Rate", className: "px-6 py-4 text-gray-700" },
            { text: "75.4%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
          ],
        },
        {
          bg: "bg-white",
          cells: [
            { text: "Angiosarcoma (Rare Skin Malignancy)", className: "px-6 py-4 text-gray-700" },
            { text: "Phase II Clinical Trial (ESMO 2025)", className: "px-6 py-4 text-gray-600 text-sm" },
            { text: "Complete Response Rate", className: "px-6 py-4 text-gray-700" },
            { text: "50%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
          ],
        },
        {
          bg: "bg-[#F5F7FA]",
          cells: [
            { text: "Recurrent High-Grade Meningioma", className: "px-6 py-4 text-gray-700" },
            { text: "Phase II Randomized Controlled Trial", className: "px-6 py-4 text-gray-600 text-sm" },
            { text: "Progression-Free Survival", className: "px-6 py-4 text-gray-700" },
            { text: "BNCT Group: 14.4 months vs Control Group: Only 1.4 months", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
          ],
        },
        {
          bg: "bg-white",
          cells: [
            { text: "Recurrent High-Grade Meningioma", className: "px-6 py-4 text-gray-700" },
            { text: "Phase II Randomized Controlled Trial", className: "px-6 py-4 text-gray-600 text-sm" },
            { text: "2-Year Survival Rate", className: "px-6 py-4 text-gray-700" },
            { text: "BNCT Treatment Group: 90.9%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
          ],
        },
      ],
    },
    footnote:
      "Data sources: Cancer Medicine 2024, 2025 ESMO Conference, Osaka Medical and Pharmaceutical University Phase II Trial",
  },
  cases: {
    heading: "Case Studies",
    items: [
      {
        title: "Recurrent Nasopharyngeal Carcinoma Patient",
        description:
          "A Chinese recurrent nasopharyngeal carcinoma patient under 40 years old was diagnosed in 2016 and received radical chemoradiotherapy. After disease recurrence in 2024, immunotherapy intervention was performed, but progressed again in 2025 with conventional treatments ineffective. In August 2025, he received BNCT clinical trial treatment. Within just 3-4 days after treatment, original symptoms were greatly relieved. Eight months later, MRI and PET-CT imaging results were encouraging: tumor metabolic indicators dropped below diagnostic standards, efficacy evaluated as complete response (CR), and the patient has successfully returned to normal work and life.",
      },
      {
        title: "Domestic Multi-center BNCT Clinical Trials",
        description:
          "In BNCT Phase I clinical trials, more enrolled patients showed good clinical improvement: a head and neck tumor patient's facial pain and lip numbness significantly improved; an oral cancer patient's left cheek bleeding and swelling were effectively controlled; a skull giant cell tumor patient's right ear hearing improved and vision became clearer.",
      },
      {
        title: "BNCT First Successful Treatment of Rare Chondrosarcoma",
        description:
          "A 31-year-old male was diagnosed with rare mesenchymal chondrosarcoma in 2018, experienced local recurrence in 2021, refused secondary surgery due to concerns about facial disfigurement and functional impairment, and subsequent anti-PD-1 monoclonal antibody treatment was ineffective. The patient received AB-BNCT system “Jifengdao” and boron-containing drug treatment in 2022. Tumor-induced bleeding stopped within 24 hours after first treatment, ulcer surface significantly reduced within one week. Tumor volume significantly decreased after two irradiations, with efficacy and safety validated by international authoritative journals.",
      },
    ],
  },
  cost: {
    heading: "Reference Treatment Costs",
    intro:
      "BNCT treatment costs have significant advantages compared to other advanced radiotherapy methods (proton/heavy ion therapy).",
    label: "Based on patient condition, single course treatment cost is approximately",
    amount: "$43,000 - $72,000",
    bg: "bg-white",
  },
  whyChooseUs: {
    heading: "Why Choose Us?",
    variant: "white",
    items: [
      {
        icon: "stethoscope",
        title: "Direct Access to China's Top BNCT Centers",
        description: "Established partnerships with multiple top-tier institutions",
      },
      {
        icon: "globe",
        title: "Global Leading Clinical Approval Progress",
        description:
          "China is the second country globally with officially approved BNCT clinical treatment institutions",
      },
      {
        icon: "trendingUp",
        title: "Significant Efficacy, Solid Data",
        description:
          "BNCT head and neck cancer real-world ORR 80.5%, China IIT clinical study ORR 71% (90 days)",
      },
      {
        icon: "shield",
        title: "Transparent Pricing, No Middleman Markup",
        description: "Medical fees paid directly to hospital, platform does not handle or markup",
      },
      {
        icon: "clock",
        title: "Efficient Scheduling, Rapid Admission",
        description:
          "Completed within 2-4 weeks, avoiding waiting periods where Western technology is not yet widespread",
      },
      {
        icon: "users",
        title: "Full Bilingual Service",
        description:
          "Medical record translation, on-site interpretation, international insurance coordination, one-stop support",
      },
    ],
  },
  notice: {
    text:
      "BNCT therapy has significant efficacy but is not suitable for all tumor patients. Treatment effects vary by individual differences, all patients must undergo comprehensive medical assessment before treatment and sign informed consent. BNCT is currently mainly positioned for populations with recurrence, refractory conditions, or limited standard treatment options. Whether suitable for BNCT treatment requires strict, individualized assessment by a multidisciplinary expert team.",
    bg: "bg-white",
  },
  cta: {
    heading: "Begin Your BNCT Treatment Journey",
    subtitle:
      "Contact our professional team for personalized BNCT treatment assessment and plans",
    primary: { label: "Schedule Consultation", href: "/contact" },
    secondary: { label: "WhatsApp Consultation", href: "https://wa.me/16462968491", external: true },
  },
};

// Chinese variant of the above config, transcribed verbatim from the zh-mode
// page https://www.medkungfu.com/projects/bnct-therapy.
const CONFIG_ZH: ImmunotherapyProjectConfig = {
  ariaLabel: "BNCT Boron Neutron Capture Therapy - Precision Radiotherapy",
  hero: {
    badge: "精准肿瘤治疗",
    title: "中国硼中子俘获肿瘤治疗（BNCT）",
    subtitle: "精准\"细胞刀\"，重塑难治性肿瘤治疗格局",
    primaryBtn: "预约咨询",
    secondaryBtn: "了解治疗流程",
  },
  stickyNav: ["简介", "核心优势", "适应症", "治疗流程", "疗效数据", "案例展示"],
  intro: {
    heading: "什么是BNCT？",
    paragraphs: [
      {
        before:
          "硼中子俘获疗法（Boron Neutron Capture Therapy, BNCT）是一种革命性的精准靶向放疗技术。由于其粒子杀伤范围仅在细胞尺度，BNCT被称为",
        highlight: "\"细胞刀\"（Cell Knife）",
        after:
          "，具备靶向精准、相对生物学效应高、临床照射通常只需一到两次即可完成疗程的独特优势。",
      },
      {
        before:
          "BNCT被定位为继手术、放疗、化疗和免疫治疗之后的重要肿瘤治疗方式，已在全球范围内展现出巨大的临床价值。",
      },
    ],
  },
  advantages: {
    heading: "核心优势 – 为什么选择在中国接受BNCT？",
    bg: "bg-white",
    items: [
      {
        icon: "globe",
        title: "全球领先的临床获批进度",
        description: "中国是全球第二个拥有正式获批BNCT临床治疗机构的国家",
      },
      {
        icon: "clock",
        title: "疗程极短、辐射剂量低",
        description:
          "BNCT独有的\"细胞刀\"特性，临床照射通常只需1-2次即可完成疗程，治疗时间30-50分钟，无需反复住院，患者轻松无痛",
      },
      {
        icon: "target",
        title: "精准靶向、副作用小",
        description:
          "BNCT对周围正常组织损伤极小，无严重神经毒性或全身性毒性，优于传统放疗和全身性化疗，患者生活质量显著提升",
      },
      {
        icon: "trendingUp",
        title: "疗效出色、改写难治性癌症治疗规则",
        description:
          "海外真实世界数据显示：头颈癌客观缓解率80.5%，血管肉瘤完全缓解率50%（ESMO 2025公布数据），脑膜瘤BNCT治疗组2年生存率90.9%",
      },
      {
        icon: "zap",
        title: "政策先行、全球接轨",
        description:
          "依托海南博鳌乐城\"先行先试\"政策，国际前沿BNCT技术同步引进、优先使用，无需等待漫长审批",
      },
    ],
  },
  indications: {
    heading: "适应症",
    intro:
      "BNCT尤其适合对常规放化疗不敏感、复发/难治性或位于重要功能区域的肿瘤患者。",
    listItems: [
      "头颈部恶性肿瘤（包括鼻咽癌、口腔癌、喉癌、舌癌、牙龈癌、腮腺癌等十余种亚型）",
      "高级别脑胶质瘤（GBM，包括初治和复发性）",
      "恶性脑膜瘤（复发性）",
    ],
    sideCard: {
      heading: "适应患者",
      bullets: [
        "常规手术、放疗无效或复发的局部晚期肿瘤患者",
        "对传统放化疗抵抗、无法手术的肿瘤患者",
        "儿童肿瘤（显著降低生长发育影响）",
        "复发性高级别脑肿瘤患者",
      ],
      note: "注：是否适合接受BNCT治疗，需由多学科专家团队进行全面个体化评估。",
    },
  },
  treatmentContent: {
    heading: "治疗内容",
    subtitle: "BNCT治疗通常包含以下关键环节",
    bg: "bg-white",
    items: [
      {
        title: "多学科团队评估与筛选",
        description:
          "由肿瘤学专家、放射物理学家、核医学专家等组成MDT团队，全面评估患者肿瘤特征和治疗适应性",
      },
      {
        title: "18F-BPA PET显像评估",
        description:
          "通过国际领先的硼药示踪显像技术，精准评估含硼药物在肿瘤中的生物分布与浓度",
      },
      {
        title: "个性化治疗计划设计",
        description:
          "根据患者肿瘤三维形态、硼药分布数据和器官风险，利用专用治疗计划系统制定个性化照射方案",
      },
      {
        title: "含硼药物静脉注射",
        description:
          "患者于照射前数小时至数天静脉注射靶向含硼药物，药物选择性富集于肿瘤细胞内",
      },
      {
        title: "中子束照射治疗",
        description:
          "治疗当天，患者在治疗床上接受中子束照射。治疗全程无痛，患者可在30-50分钟内听音乐或聊天",
      },
      {
        title: "住院监测与支持护理",
        description:
          "照射完成后，医生密切监测患者状况。多数患者仅需1-2次照射，住院时间显著短于传统放疗",
      },
    ],
  },
  process: {
    heading: "治疗流程",
    subtitle: "从初诊至康复约2-4周",
    steps: [
      {
        title: "远程咨询与初筛",
        duration: "2-5天",
        description: "提交病历资料，多学科专家团队远程评估是否符合BNCT适应证标准",
      },
      {
        title: "签证与行程安排",
        duration: "1-2周",
        description: "医疗签证邀请函、国际保险对接、行程规划与住宿安排",
      },
      {
        title: "抵华与检查评估",
        duration: "2-3天",
        description: "全面身体评估、18F-BPA PET-CT显像、靶区勾画、治疗计划审核",
      },
      {
        title: "BNCT照射治疗",
        duration: "1-2次，每次30-50分钟",
        description: "含硼药物注射+中子束照射治疗，无痛、无创、无需开刀",
      },
      {
        title: "短期住院监测",
        duration: "3-7天",
        description: "密切监测不良反应，进行康复支持护理",
      },
      {
        title: "出院与长期随访",
        duration: "持续",
        description: "定期复查、远程随访管理",
      },
    ],
    summaryNote: {
      before: "从抵华至完成治疗，全程通常仅需",
      highlight: "2-4周",
      after: "，治疗周期极短。",
    },
  },
  efficacy: {
    heading: "疗效数据",
    subtitle: "海外临床数据（日本真实世界医保覆盖数据，供参考）",
    bg: "bg-white",
    table: {
      wrapClassName: "-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0",
      tableClassName: "w-full min-w-[680px] bg-white rounded-2xl shadow-sm overflow-hidden",
      headers: ["适应症", "研究类型", "指标", "数据"],
      rows: [
        {
          bg: "bg-white",
          cells: [
            { text: "局部晚期/复发性不可切除头颈癌", className: "px-6 py-4 text-gray-700" },
            { text: "真实世界研究（69例）", className: "px-6 py-4 text-gray-600 text-sm" },
            { text: "客观缓解率（ORR）", className: "px-6 py-4 text-gray-700" },
            { text: "80.5%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
          ],
        },
        {
          bg: "bg-[#F5F7FA]",
          cells: [
            { text: "同上", className: "px-6 py-4 text-gray-700" },
            { text: "真实世界研究", className: "px-6 py-4 text-gray-600 text-sm" },
            { text: "1年总生存率", className: "px-6 py-4 text-gray-700" },
            { text: "75.4%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
          ],
        },
        {
          bg: "bg-white",
          cells: [
            { text: "血管肉瘤（罕见皮肤恶性肿瘤）", className: "px-6 py-4 text-gray-700" },
            { text: "II期临床试验（ESMO 2025公布）", className: "px-6 py-4 text-gray-600 text-sm" },
            { text: "完全缓解率", className: "px-6 py-4 text-gray-700" },
            { text: "50%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
          ],
        },
        {
          bg: "bg-[#F5F7FA]",
          cells: [
            { text: "复发性高级别脑膜瘤", className: "px-6 py-4 text-gray-700" },
            { text: "II期随机对照试验", className: "px-6 py-4 text-gray-600 text-sm" },
            { text: "无进展生存期", className: "px-6 py-4 text-gray-700" },
            { text: "BNCT组：14.4个月 vs 对照组：仅1.4个月", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
          ],
        },
        {
          bg: "bg-white",
          cells: [
            { text: "复发性高级别脑膜瘤", className: "px-6 py-4 text-gray-700" },
            { text: "II期随机对照试验", className: "px-6 py-4 text-gray-600 text-sm" },
            { text: "2年生存率", className: "px-6 py-4 text-gray-700" },
            { text: "BNCT治疗组：90.9%", className: "px-6 py-4 text-[#1B4D3E] font-semibold" },
          ],
        },
      ],
    },
    footnote: "数据来源：Cancer Medicine 2024、2025年ESMO大会、大阪医科药科大学II期试验",
  },
  cases: {
    heading: "案例展示",
    items: [
      {
        title: "复发鼻咽癌患者",
        description:
          "一名不到40岁的中国复发鼻咽癌患者，2016年确诊后接受了根治性放化疗，2024年病情复发后进行免疫化疗干预，2025年再次进展，常规治疗方案已无效果。2025年8月，他接受了BNCT临床试验治疗。治疗后仅3-4天，原有症状就大大缓解。8个月后核磁共振和PET-CT等影像学复查结果令人欣喜：肿瘤代谢指标降至诊断标准以下，疗效评价为完全缓解（CR），患者已顺利回归正常工作、生活。",
      },
      {
        title: "国内多中心BNCT临床试验",
        description:
          "在BNCT I期临床试验中，更多入组患者展现出良好的临床改善：一名头颈部肿瘤患者的面部疼痛、嘴唇麻木等症状明显好转；一名口腔癌患者的左脸颊出血、肿胀得到有效控制；一名头部骨巨细胞瘤患者右耳听力改善、视物更清晰。",
      },
      {
        title: "BNCT首次成功治疗罕见软骨肉瘤",
        description:
          "一名31岁男性于2018年确诊罕见间叶性软骨肉瘤，2021年出现局部复发，因担心容貌损毁和功能障碍拒绝二次手术，后续抗PD-1单抗治疗无效。患者于2022年接受AB-BNCT系统\"极锋刀\"及含硼药物治疗。首次治疗后24小时内肿瘤所致出血停止，一周内溃疡面显著减小。两次照射后肿瘤体积显著缩小，疗效与安全性得到国际权威期刊验证。",
      },
    ],
  },
  cost: {
    heading: "参考治疗费用",
    intro:
      "BNCT治疗费用相比其他先进放疗手段（质子/重离子治疗）具有显著优势。",
    label: "根据患者病情，单疗程治疗费用约在",
    amount: "$43,000 - $72,000",
    bg: "bg-white",
  },
  whyChooseUs: {
    heading: "为什么选择我们？",
    variant: "white",
    items: [
      {
        icon: "stethoscope",
        title: "直通中国顶级BNCT中心",
        description: "与等多家顶尖机构建立合作",
      },
      {
        icon: "globe",
        title: "全球领先的临床获批进度",
        description: "中国是全球第二个拥有正式获批BNCT临床治疗机构的国家",
      },
      {
        icon: "trendingUp",
        title: "疗效显著、数据扎实",
        description: "BNCT头颈癌真实世界ORR 80.5%，中国IIT临床研究ORR 71%（90天）",
      },
      {
        icon: "shield",
        title: "价格透明、无中间加价",
        description: "医疗费用直付医院，平台不经手、不加价",
      },
      {
        icon: "clock",
        title: "高效排期、极速入院",
        description: "全程2-4周内完成，避免欧美技术尚未普及的等待周期",
      },
      {
        icon: "users",
        title: "全程双语服务",
        description: "病历翻译、现场口译、国际保险对接，一站式支持",
      },
    ],
  },
  notice: {
    text:
      "BNCT疗法疗效显著，但并非适用于所有肿瘤患者。治疗效果因个体差异而异，所有患者必须在治疗前接受全面医疗评估，签署知情同意书。BNCT当前主要定位于复发、难治或标准治疗手段受限的人群。是否适合接受BNCT治疗，需由多学科专家团队进行严格、个体化的评估。",
    bg: "bg-white",
  },
  cta: {
    heading: "开启您的BNCT治疗之旅",
    subtitle: "联系我们的专业团队，获取个性化的BNCT治疗评估与方案",
    primary: { label: "预约咨询", href: "/contact" },
    secondary: { label: "WhatsApp咨询", href: "https://wa.me/16462968491", external: true },
  },
};

export default function BnctTherapyProjectPage() {
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

// CAR-T Cell Therapy project detail page.
// Transcribed verbatim from docs/research/www-medkungfu-com-363c9bc1/cart-therapy/rendered.html
// (purple theme, max-w-7xl container, distinct section structure).
// Bilingual: renders Chinese content when the site language is zh.
"use client";
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Icons } from "../../shared/icons";
import { Reveal } from "../../shared/Reveal";

const HERO_PILLS = [
  "6,000+ Clinical Infusions",
  "96.4% Response Rate",
  "2-4 Week Scheduling",
  "NMPA Approved Products",
];

const HERO_PILLS_ZH = [
  "6,000+例临床输注经验",
  "96.4%缓解率",
  "2-4周极速排期",
  "NMPA批准产品",
];

const INDICATIONS = [
  "Multiple Myeloma",
  "Diffuse Large B-Cell Lymphoma",
  "Acute Lymphoblastic Leukemia",
  "Mantle Cell Lymphoma",
  "Other High-Grade Lymphomas",
];

const INDICATIONS_ZH = [
  "多发性骨髓瘤",
  "弥漫大B细胞淋巴瘤",
  "急性淋巴细胞白血病",
  "套细胞淋巴瘤",
  "其他高级别淋巴瘤",
];

const TREATMENT_CONTENT = [
  "Pre-treatment evaluation – PET-MR, bone marrow biopsy, blood tests, T-cell function testing",
  "T-cell collection – Collecting patient T-cells through leukapheresis",
  "CAR-T cell preparation – Genetic modification and expansion in GMP-certified laboratory",
  "Lymphocyte depletion – Mild chemotherapy in preparation for infusion",
  "CAR-T cell infusion – One-day intravenous infusion",
  "Hospital monitoring and supportive care – Managing cytokine release syndrome, neurotoxicity and other side effects",
];

const TREATMENT_CONTENT_ZH = [
  "治疗前评估 – PET-MR、骨髓活检、血液检查、T细胞功能检测",
  "T细胞采集 – 通过白细胞分离术采集患者T细胞",
  "CAR-T细胞制备 – 在GMP认证实验室中进行基因改造和扩增",
  "淋巴细胞清除 – 轻度化疗，为回输做准备",
  "CAR-T细胞回输 – 一日静脉输注",
  "住院监测与支持治疗 – 处理细胞因子释放综合征、神经毒性等副作用",
];

interface Advantage {
  icon: typeof Icons.activity;
  title: string;
  description: string;
}

const ADVANTAGES: Advantage[] = [
  {
    icon: Icons.trendingUp,
    title: "World-Class Clinical Outcomes",
    description:
      "Multiple myeloma ORR up to 96.4%, high-grade lymphoma 83%, ALL complete remission rate 95.1%. Chinese clinical data comprehensively reaches international leading level.",
  },
  {
    icon: Icons.shield,
    title: "Significant Cost Advantage",
    description:
      "Total medical cost approximately $200,000-$250,000 (including evaluation, cell preparation, hospitalization and basic medications), far lower than equivalent treatment in Europe/US (usually over $500,000). Savings cover round-trip flights, full translation and accommodation.",
  },
  {
    icon: Icons.clock,
    title: "Minimal Waiting Time",
    description:
      "Enrollment in 2-4 weeks, priority arrangement through MedKungfu green channel. Similar treatments in Europe/US typically require 6-12 months waiting. For urgent patients, waiting time often means missing the optimal treatment window.",
  },
  {
    icon: Icons.globe,
    title: "Comprehensive International Patient Services",
    description:
      "Partner hospitals have dedicated English-speaking international departments and convenient international patient channels, with dedicated staff for admission procedures and examination arrangements, ensuring barrier-free medical care for overseas patients.",
  },
  {
    icon: Icons.microscope,
    title: "Flexible Clinical Trial Access",
    description:
      "China is one of the countries with the most CAR-T clinical trials globally, with more flexible indication scope. For patients deemed \"difficult to treat\" or unresponsive to standard therapies in other countries, China's clinical trial channels provide additional opportunities.",
  },
  {
    icon: Icons.users,
    title: "Extensive Real-World Experience",
    description:
      "As of 2026, partner hospitals have completed over 4,000 infusions, accumulating extensive real-world data for patients with different subtypes and disease stages. The medical team is experienced in managing common side effects such as cytokine release syndrome (CRS).",
  },
];

const ADVANTAGES_ZH: Advantage[] = [
  {
    icon: Icons.trendingUp,
    title: "世界一流的临床结果",
    description:
      "多发性骨髓瘤总缓解率高达96.4%，高级别淋巴瘤83%，急性淋巴细胞白血病完全缓解率95.1%。中国临床数据全面达到国际领先水平。",
  },
  {
    icon: Icons.shield,
    title: "显著的费用优势",
    description:
      "总医疗费用约20万–25万美元（含评估、细胞制备、住院及基本药物），远低于欧美同等治疗（通常超过50万美元）。节省的费用足以覆盖往返机票、全程翻译及住宿安排。",
  },
  {
    icon: Icons.clock,
    title: "等待时间极短",
    description:
      "2–4周即可入组治疗，通过MedKungfu绿色通道可优先安排。欧美同类治疗通常需等待6–12个月。对于病情紧迫的患者，等待时间往往意味着错失最佳治疗窗口。",
  },
  {
    icon: Icons.globe,
    title: "国际患者服务完善",
    description:
      "合作医院设有专属英语服务国际部及便捷的国际患者通道，从入院手续到检查安排均有专人对接，确保海外患者就医无障碍。",
  },
  {
    icon: Icons.microscope,
    title: "临床试验通道灵活",
    description:
      "中国是全球CAR-T临床试验数量最多的国家之一，适应症范围更灵活。对于在其他国家被判定为\"难以治疗\"或标准疗法无效的患者，中国的临床试验通道提供了额外机会。",
  },
  {
    icon: Icons.users,
    title: "丰富的真实世界经验",
    description:
      "截至2026年，合作医院已完成超过4,000例输注，积累了大量针对不同分型、不同病程患者的真实世界数据。医疗团队在处理细胞因子释放综合征（CRS）等常见副作用方面经验丰富。",
  },
];

interface ProcessStep {
  title: string;
  duration: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Pre-Treatment Evaluation",
    duration: "2-3 days",
    description:
      "PET-MR, bone marrow biopsy, blood tests, T-cell function testing. Comprehensive evaluation of disease staging, organ function and CAR-T treatment indications to confirm patient eligibility. MedKungfu provides bilingual accompaniment throughout, assisting with all examination appointments and result interpretation.",
  },
  {
    title: "T-Cell Collection",
    duration: "1 day",
    description:
      "T-cells are collected from patient peripheral blood through leukapheresis (single collection), taking approximately 2-4 hours, no anesthesia required, completed same day. After collection, cells are sent to GMP-certified laboratory for genetic modification.",
  },
  {
    title: "CAR-T Cell Preparation",
    duration: "2-3 weeks",
    description:
      "Collected T-cells are sent to GMP-certified laboratory for chimeric antigen receptor gene viral vector transduction and cell expansion. During this phase, patients may temporarily leave the hospital or rest nearby while waiting for cell preparation completion. MedKungfu assists with arranging nearby accommodation and rest plans.",
  },
  {
    title: "Lymphocyte Depletion Chemotherapy",
    duration: "3-5 days",
    description:
      "Mild chemotherapy (FC regimen: fludarabine + cyclophosphamide) is performed before infusion to clear existing lymphocytes in the body, creating space for CAR-T cell expansion. This phase is completed under hospital monitoring, with MedKungfu providing full accompaniment and communication assistance.",
  },
  {
    title: "CAR-T Cell Infusion",
    duration: "1 day",
    description:
      "CAR-T cells are infused back into the body through a single intravenous infusion, taking approximately 30-60 minutes. This is the core step of the entire treatment process. After infusion, the modified T-cells will continue to expand in the body, precisely identifying and attacking cancer cells.",
  },
  {
    title: "Hospital Monitoring &amp; Discharge Follow-up",
    duration: "2-4 weeks",
    description:
      "Close hospital monitoring with focus on managing side effects such as cytokine release syndrome (CRS) and immune effector cell-associated neurotoxicity (ICANS). Medical team on standby 24 hours with comprehensive supportive care. Patients can be discharged when stable, with MedKungfu coordinating 3-24 months of remote follow-up.",
  },
];

const PROCESS_STEPS_ZH: ProcessStep[] = [
  {
    title: "治疗前评估",
    duration: "2–3天",
    description:
      "PET-MR、骨髓活检、血液检查、T细胞功能检测。全面评估病情分期、脏器功能及CAR-T治疗适应症，确认患者符合入组标准。MedKungfu全程双语陪同，协助完成所有检查预约与结果解读。",
  },
  {
    title: "T细胞采集",
    duration: "1天",
    description:
      "通过白细胞分离术（单采术）从患者外周血中采集T细胞，全程约2–4小时，无需麻醉，当日完成。采集完成后，细胞即送往GMP认证实验室进行基因改造。",
  },
  {
    title: "CAR-T细胞制备",
    duration: "2–3周",
    description:
      "采集的T细胞送至GMP认证实验室，进行嵌合抗原受体基因的病毒载体转导和细胞扩增。此阶段患者可暂时离院或在医院附近休养，等待细胞制备完成。MedKungfu协助安排周边住宿与休养计划。",
  },
  {
    title: "淋巴细胞清除化疗",
    duration: "3–5天",
    description:
      "回输前进行轻度化疗（FC方案：氟达拉滨+环磷酰胺），清除体内现有淋巴细胞，为CAR-T细胞的扩增创造空间。此阶段在住院监测下完成，MedKungfu全程陪同协助沟通。",
  },
  {
    title: "CAR-T细胞回输",
    duration: "1天",
    description:
      "CAR-T细胞通过一次静脉输注回输体内，输注过程约30–60分钟。这是整个治疗流程的核心步骤。回输后，改造后的T细胞将在体内持续扩增，精准识别并攻击癌细胞。",
  },
  {
    title: "住院监测与出院随访",
    duration: "2–4周",
    description:
      "住院密切监测，重点管理细胞因子释放综合征（CRS）和免疫效应细胞相关神经毒性（ICANS）等副作用。医疗团队24小时待命，支持治疗完善。病情稳定后可出院，MedKungfu持续协调3–24个月远程随访。",
  },
];

const EFFICACY_ROWS = [
  {
    cells: [
      { text: "Multiple Myeloma", className: "py-4 px-4 text-white" },
      { text: "96.4%", className: "py-4 px-4 text-purple-300 font-bold" },
      { text: "80.4%", className: "py-4 px-4 text-purple-300 font-bold" },
      { text: "Not specified", className: "py-4 px-4 text-gray-300" },
    ],
  },
  {
    cells: [
      {
        text: "High-Grade Lymphoma (DLBCL etc.)",
        className: "py-4 px-4 text-white",
      },
      { text: "83%", className: "py-4 px-4 text-purple-300 font-bold" },
      { text: "58%", className: "py-4 px-4 text-purple-300 font-bold" },
      { text: "84%", className: "py-4 px-4 text-gray-300" },
    ],
  },
  {
    cells: [
      { text: "Leukemia (B-ALL)", className: "py-4 px-4 text-white" },
      {
        text: "Not specified",
        className: "py-4 px-4 text-purple-300 font-bold",
      },
      { text: "95.1%", className: "py-4 px-4 text-purple-300 font-bold" },
      { text: "73.6%", className: "py-4 px-4 text-gray-300" },
    ],
  },
];

const EFFICACY_ROWS_ZH = [
  {
    cells: [
      { text: "多发性骨髓瘤", className: "py-4 px-4 text-white" },
      { text: "96.4%", className: "py-4 px-4 text-purple-300 font-bold" },
      { text: "80.4%", className: "py-4 px-4 text-purple-300 font-bold" },
      { text: "未明确", className: "py-4 px-4 text-gray-300" },
    ],
  },
  {
    cells: [
      {
        text: "高级别淋巴瘤（DLBCL等）",
        className: "py-4 px-4 text-white",
      },
      { text: "83%", className: "py-4 px-4 text-purple-300 font-bold" },
      { text: "58%", className: "py-4 px-4 text-purple-300 font-bold" },
      { text: "84%", className: "py-4 px-4 text-gray-300" },
    ],
  },
  {
    cells: [
      { text: "白血病（B-ALL）", className: "py-4 px-4 text-white" },
      {
        text: "未明确",
        className: "py-4 px-4 text-purple-300 font-bold",
      },
      { text: "95.1%", className: "py-4 px-4 text-purple-300 font-bold" },
      { text: "73.6%", className: "py-4 px-4 text-gray-300" },
    ],
  },
];

const WHY_CHOOSE_US = [
  {
    title: "Compliant Operations · Fund Security",
    description:
      "Company directly signs and collects payments, ensuring fund security. Direct hospital connection, no middleman markup, medical fees paid directly to hospital, fully transparent.",
  },
  {
    title: "2-4 Week Green Channel",
    description:
      "Through MedKungfu partnership channels, priority enrollment evaluation arrangement, significantly reducing waiting time and securing valuable windows for urgent patients.",
  },
  {
    title: "Full Bilingual Support",
    description:
      "Dedicated bilingual medical coordinators accompany throughout, covering examination appointments, medical record translation, doctor-patient communication, in-hospital accompaniment and discharge procedures.",
  },
  {
    title: "Transparent Pricing · Refund Guarantee",
    description:
      "Detailed quotation provided, full or proportional refunds available in 7 scenarios, protecting patient rights with no hidden charges.",
  },
  {
    title: "Pre-Travel Planning · Arrival Assistance",
    description:
      "Assistance with visa invitation letters, airport transfers, nearby accommodation arrangements, ensuring patients and families have no worries from day one of arrival.",
  },
  {
    title: "Long-Term Follow-up Management",
    description:
      "Continuous coordination of 3-24 months remote follow-up after discharge, regular tracking of efficacy assessment, connecting subsequent treatment plans.",
  },
];

const WHY_CHOOSE_US_ZH = [
  {
    title: "合规运营·资金安全",
    description:
      "公司直接签约收款，资金安全有保障。医院直联，无中间加价，医疗费直付医院，全程透明。",
  },
  {
    title: "2–4周绿色通道",
    description:
      "通过MedKungfu合作渠道，优先安排入组评估，大幅缩短等待时间，为病情紧迫的患者争取宝贵窗口。",
  },
  {
    title: "全程双语支持",
    description:
      "专属双语医疗协调员全程陪同，覆盖检查预约、病历翻译、医患沟通、院内陪诊及出院手续全环节。",
  },
  {
    title: "价格透明·退费保障",
    description:
      "提供明细报价单，7种情形可全额或按比例退费，保障患者权益，无隐性收费。",
  },
  {
    title: "行前规划·落地协助",
    description:
      "协助签证邀请函、机场接送、院附近住宿安排，让患者与家属从抵达第一天起无后顾之忧。",
  },
  {
    title: "长期随访管理",
    description:
      "出院后持续协调3至24个月远程随访，定期追踪疗效评估，衔接后续诊疗方案。",
  },
];

export function CartTherapyPage() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  const heroPills = isZh ? HERO_PILLS_ZH : HERO_PILLS;
  const indications = isZh ? INDICATIONS_ZH : INDICATIONS;
  const treatmentContent = isZh ? TREATMENT_CONTENT_ZH : TREATMENT_CONTENT;
  const advantages = isZh ? ADVANTAGES_ZH : ADVANTAGES;
  const processSteps = isZh ? PROCESS_STEPS_ZH : PROCESS_STEPS;
  const efficacyRows = isZh ? EFFICACY_ROWS_ZH : EFFICACY_ROWS;
  const whyChooseUs = isZh ? WHY_CHOOSE_US_ZH : WHY_CHOOSE_US;

  return (
    <main
      role="main"
      aria-label="CAR-T Cell Therapy - Immunotherapy for Blood Cancers"
      className="min-h-screen bg-white"
    >
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
          <div>
            <p className="text-lg text-purple-200 mb-4 tracking-wider">
              {isZh ? "免疫治疗方案" : "Immunotherapy Programme"}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {isZh
                ? "CAR-T血液恶性肿瘤治疗"
                : "CAR-T Cell Therapy for Hematologic Malignancies"}
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-4">
              {isZh
                ? "CAR-T Cell Therapy for Hematologic Malignancies"
                : "CAR-T血液恶性肿瘤治疗"}
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              {isZh
                ? "革命性个体化免疫疗法 · 改造自身免疫细胞精准攻击癌细胞"
                : "Revolutionary Personalized Immunotherapy · Engineering Immune Cells to Precisely Target Cancer"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {heroPills.map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors"
              >
                {isZh ? "立即咨询" : "Consult Now"}
              </a>
              <a
                href="#intro"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {isZh ? "了解更多" : "Learn More"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CAR-T */}
      <section id="intro" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal y={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
                {isZh ? "什么是CAR-T疗法？" : "What is CAR-T Therapy?"}
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                {isZh
                  ? "CAR-T（嵌合抗原受体T细胞）疗法是一种革命性的个体化免疫疗法。治疗团队提取患者自身的T细胞，在GMP认证实验室中通过基因工程对其进行改造，使其携带能够精准识别并攻击癌细胞的嵌合抗原受体（CAR）。改造后的CAR-T细胞经扩增后回输患者体内，形成持续发挥抗肿瘤作用的\"活体药物\"。整个过程以患者自身细胞为原料，是目前血液恶性肿瘤领域最前沿的治疗手段之一。"
                  : "CAR-T (Chimeric Antigen Receptor T-cell) therapy is a revolutionary personalized immunotherapy. The treatment team extracts the patient's own T-cells and genetically modifies them in a GMP-certified laboratory to carry chimeric antigen receptors (CAR) that can precisely identify and attack cancer cells. The modified CAR-T cells are expanded and infused back into the patient's body, forming a \"living drug\" that continuously exerts anti-tumor effects. The entire process uses the patient's own cells as raw material, making it one of the most advanced treatment methods in the field of hematologic malignancies."}
              </p>
              <p className="text-gray-600 mb-6">
                {isZh
                  ? "截至2026年，中国已完成了超过6,000例CAR-T细胞输注，多款商业化产品已获国家药品监督管理局（NMPA）批准。所有合作医院均采用NMPA正式批准的CAR-T产品，在具备GMP资质的实验室完成细胞制备，并在三甲医院设有专属国际患者服务通道。这意味着患者将在正规监管框架内接受治疗，安全性与可追溯性均有制度保障。"
                  : "As of 2026, China has completed over 6,000 CAR-T cell infusions, with multiple commercial products approved by the National Medical Products Administration (NMPA). All partner hospitals use NMPA-approved CAR-T products, complete cell preparation in GMP-certified laboratories, and have dedicated international patient service channels in Grade 3A hospitals. This means patients will receive treatment within a formal regulatory framework, with institutional guarantees for safety and traceability."}
              </p>
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      6,000+
                    </div>
                    <p className="text-gray-600 text-sm">
                      {isZh ? "例临床输注" : "Clinical Infusions"}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      NMPA
                    </div>
                    <p className="text-gray-600 text-sm">
                      {isZh ? "批准产品" : "Approved Products"}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal y={0} className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element -- static hero asset, intentional */}
              <img
                src="/sites/www-medkungfu-com-363c9bc1/shared/images/photo-1576091160550-2173dba999ef-w800.jpg"
                alt="CAR-T Therapy"
                className="rounded-2xl shadow-2xl w-full"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE CHINA */}
      <section className="py-20 lg:py-32 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "为什么选择中国？" : "Why Choose China?"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isZh
                ? "六大核心优势，让CAR-T治疗更高效、更经济"
                : "Six core advantages making CAR-T treatment more efficient and economical"}
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv) => (
              <Reveal key={adv.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <adv.icon className="h-10 w-10" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                  {adv.title}
                </h3>
                <p className="text-gray-600">{adv.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDICATIONS + TREATMENT CONTENT */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal y={0}>
              <h2 className="text-3xl font-bold text-[#1A1A2E] mb-8">
                {isZh
                  ? "适应症（血液恶性肿瘤）"
                  : "Indications (Hematologic Malignancies)"}
              </h2>
              <p className="text-gray-600 mb-6">
                {isZh
                  ? "CAR-T疗法主要适用于复发/难治性："
                  : "CAR-T therapy is mainly suitable for relapsed/refractory:"}
              </p>
              <div className="space-y-4">
                {indications.map((item) => (
                  <div
                    key={item}
                    className="bg-purple-50 rounded-xl p-4 flex items-center gap-3"
                  >
                    <Icons.checkCircle
                      className="h-5 w-5 text-purple-500 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-6">
                {isZh
                  ? "是否适合接受CAR-T治疗，需由我方合作的医疗团队进行个体化评估。"
                  : "Whether suitable for CAR-T treatment requires individualized assessment by our partner medical team."}
              </p>
            </Reveal>
            <Reveal y={0} className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                {isZh ? "治疗内容" : "Treatment Content"}
              </h3>
              <div className="space-y-4">
                {treatmentContent.map((item, i) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold">{i + 1}.</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TREATMENT PROCESS */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "治疗流程" : "Treatment Process"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isZh ? "从抵达至出院约3-6周" : "Approximately 3-6 weeks from arrival to discharge"}
            </p>
          </Reveal>
          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-bold text-[#1A1A2E] text-lg">
                        {step.title}
                      </h3>
                      <span className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EFFICACY TABLE */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isZh ? "疗效 – 中国临床数据" : "Efficacy – Chinese Clinical Data"}
            </h2>
          </Reveal>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-4 text-purple-400 font-semibold">
                    {isZh ? "癌症类型" : "Cancer Type"}
                  </th>
                  <th className="text-left py-4 px-4 text-purple-400 font-semibold">
                    {isZh ? "总缓解率（ORR）" : "Overall Response Rate (ORR)"}
                  </th>
                  <th className="text-left py-4 px-4 text-purple-400 font-semibold">
                    {isZh
                      ? "≥完全缓解（CR）率"
                      : "≥Complete Response (CR) Rate"}
                  </th>
                  <th className="text-left py-4 px-4 text-purple-400 font-semibold">
                    {isZh ? "1年总生存率" : "1-Year Overall Survival"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {efficacyRows.map((row, i) => (
                  <tr key={i} className="border-b border-slate-800">
                    {row.cells.map((cell, j) => (
                      <td key={j} className={cell.className}>
                        {cell.text}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">
              {isZh ? "案例展示" : "Case Study"}
            </h2>
            <h3 className="text-xl font-bold mb-4">
              {isZh
                ? "南非奥运冠军（62岁）– 高危多发性骨髓瘤"
                : "South African Olympic Champion (62) – High-Risk Multiple Myeloma"}
            </h3>
            <p className="text-purple-100 mb-6">
              {isZh
                ? "其在多个国家被判定为\"难以治疗\"。前往上海瑞金医院接受全面评估并顺利进行CAR-T治疗。在中国先进的CAR-T医疗体系支持下成功完成治疗。"
                : "Deemed \"difficult to treat\" in multiple countries. Traveled to Shanghai Ruijin Hospital for comprehensive evaluation and successfully underwent CAR-T treatment. Successfully completed treatment with support from China's advanced CAR-T medical system."}
            </p>
            <p className="text-purple-200 font-medium">
              {isZh
                ? "已有数千名国际患者选择来中国接受CAR-T治疗——您也可以是其中之一。"
                : "Thousands of international patients have chosen to come to China for CAR-T treatment – you can be one of them."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* COSTS + WHY CHOOSE US */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal y={0}>
              <h2 className="text-3xl font-bold text-[#1A1A2E] mb-8">
                {isZh ? "参考治疗费用" : "Reference Treatment Costs"}
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">
                      {isZh
                        ? "医疗费（直付医院：评估、CAR-T细胞治疗、最长28天住院、基本药物）"
                        : "Medical fees (direct-pay hospital: evaluation, CAR-T therapy, up to 28 days hospitalization, basic medications)"}
                    </span>
                    <span className="text-purple-600 font-bold">
                      $200,000-$250,000
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  {isZh
                    ? "*具体费用以医院最终评估为准。"
                    : "*Specific costs subject to final hospital assessment."}
                </p>
              </div>
            </Reveal>
            <Reveal y={0}>
              <h2 className="text-3xl font-bold text-[#1A1A2E] mb-8">
                {isZh ? "为什么选择我们？" : "Why Choose Us?"}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-4 shadow-sm">
                    <h3 className="font-bold text-purple-600 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 lg:py-32 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isZh ? "开启您的CAR-T治疗之旅" : "Start Your CAR-T Treatment Journey"}
            </h2>
            <p className="text-purple-200 mb-8">
              {isZh
                ? "革命性免疫疗法，为血液恶性肿瘤患者带来新希望"
                : "Revolutionary immunotherapy bringing new hope to hematologic malignancy patients"}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@medkungfu.com"
                className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
              >
                {isZh ? "邮件咨询" : "Email Consultation"}
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {isZh ? "在线留言" : "Online Inquiry"}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

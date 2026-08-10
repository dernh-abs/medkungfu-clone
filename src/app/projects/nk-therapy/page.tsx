import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { ImmunotherapyProjectPage, type ImmunotherapyProjectConfig } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/immunotherapy/ImmunotherapyProjectPage";

export const metadata: Metadata = {
  title: "Autologous NK Cell Adjuvant Therapy for Solid Tumors | MedKungFu",
  description:
    "Autologous NK Cell Therapy in China for solid tumors — broad-spectrum innate immunotherapy with advanced liver cancer DCR of 81.8%, no genetic modification, and excellent safety.",
};

const CONFIG: ImmunotherapyProjectConfig = {
  ariaLabel: "NK Cell Therapy - Immunotherapy for Solid Tumors",
  hero: {
    badge: "Precision Oncology Treatment",
    title: "Autologous NK Cell Adjuvant Therapy for Solid Tumors",
    subtitle: "Awaken Innate Immunity, Reshape Solid Tumor Treatment Landscape",
    primaryBtn: "Schedule Consultation",
    secondaryBtn: "Learn About Treatment Process",
  },
  stickyNav: [
    "Introduction",
    "Core Advantages",
    "Indications",
    "Treatment Process",
    "Case Studies",
  ],
  intro: {
    heading: "What is Autologous NK Cell Therapy?",
    paragraphs: [
      {
        before:
          "Natural Killer Cells (NK cells) are core members of the human innate immune system, known as the body's first line of defense against cancer cells and viral infections. Unlike other immune cells, ",
        highlight:
          "NK cells can directly kill cancer cells without pre-recognition of tumor antigens",
        after: ", and possess broad-spectrum anti-tumor activity.",
      },
      {
        before:
          "Unlike gene-modified cell therapies such as CAR-T, NK cell therapy technology does not require genetic modification of cells, only requiring in vitro activation and expansion. Its mechanism of action is closer to the body's natural immune response, with higher safety.",
      },
    ],
  },
  advantages: {
    heading: "Core Advantages - Why Choose Autologous NK Cell Therapy in China?",
    bg: "bg-white",
    items: [
      {
        icon: "target",
        title: "Broad-Spectrum Anti-Tumor, Covering Multiple Solid Tumors",
        description:
          "NK cells can non-specifically recognize and kill various tumor cells without relying on specific antigen expression, suitable for liver cancer, lung cancer, breast cancer, gastric cancer, kidney cancer, colorectal cancer, pancreatic cancer and other solid tumors",
      },
      {
        icon: "shield",
        title: "Excellent Safety Profile",
        description:
          "Autologous cells have no risk of immune rejection; no genetic modification required, no carcinogenic risk; no treatment-related deaths reported in clinical trials, serious adverse reactions are rare",
      },
      {
        icon: "trendingUp",
        title: "Impressive Efficacy Data",
        description:
          "Studies show advanced liver cancer DCR reaches 81.8%, median OS 41.6 months; advanced kidney cancer ORR reaches 76.67%, DCR 86.67%, significantly superior to targeted monotherapy",
      },
      {
        icon: "syringe",
        title: "No Lymphocyte Depletion Required",
        description:
          "Compared to CAR-T and other therapies, autologous NK cell therapy generally does not require lymphocyte depletion chemotherapy, reducing additional toxicity burden with better patient tolerance",
      },
      {
        icon: "clock",
        title: "Convenient Administration",
        description:
          "Administered via intravenous infusion, can be completed in outpatient or short-term hospitalization without affecting patients' normal life",
      },
      {
        icon: "zap",
        title: "Can Be Combined with Multiple Therapies",
        description:
          "NK cells can be combined with chemotherapy, targeted therapy, immune checkpoint inhibitors etc. to exert synergistic anti-tumor effects. Studies show combination with PD-1 inhibitors can significantly extend long-term survival in advanced NSCLC patients",
      },
      {
        icon: "mapPin",
        title: "Leveraging Boao Lecheng Pilot Zone Policy",
        description:
          "Enjoying “Pilot First” policy, autologous NK cell therapy technology has been officially approved with transparent pricing, international patients can receive compliant treatment",
      },
      {
        icon: "award",
        title: "Significant Price Advantage",
        description:
          "Only 1/5-1/3 of the cost of similar treatments in Europe and America",
      },
    ],
  },
  indications: {
    cardHeading:
      "Indications - Which Solid Tumor Patients Are Suitable for Autologous NK Cell Therapy?",
    cardSubtitle:
      "Autologous NK cell therapy is mainly suitable for solid tumor patients who still have recurrence risk or treatment failure after standard treatment, as adjuvant or combination therapy",
    cards: [
      {
        title: "Hepatocellular Carcinoma (HCC)",
        description: "Studies show disease control rate 81.8%, median OS 41.6 months",
      },
      {
        title: "Advanced Renal Cell Carcinoma",
        description:
          "Clinical trials show ORR 76.67%, DCR 86.67%, significantly superior to targeted monotherapy; simultaneously improves patient immune function and tumor marker levels",
      },
      {
        title: "Non-Small Cell Lung Cancer",
        description:
          "Combined with PD-1 inhibitor (sintilimab) as second-line treatment, can significantly extend survival",
      },
      {
        title: "Advanced Pancreatic Cancer",
        description:
          "NK cells combined with first-line chemotherapy, DCR reaches 73.7%, median OS 10.8 months, significantly superior to traditional treatment regimens",
      },
    ],
  },
  process: {
    heading: "Treatment Process",
    subtitle: "Approximately 2-4 weeks from initial diagnosis to recovery",
    bg: "bg-white",
    steps: [
      {
        title: "Remote Consultation & Initial Screening",
        duration: "2-5 days",
        description:
          "Submit medical records, multidisciplinary expert team remotely evaluates treatment indications and feasibility",
      },
      {
        title: "Visa & Travel Arrangements",
        duration: "1-2 weeks",
        description:
          "Medical visa invitation letters, international insurance coordination, itinerary planning and accommodation arrangements",
      },
      {
        title: "Arrival in China & Comprehensive Assessment",
        duration: "2-3 days",
        description:
          "Comprehensive physical examination, tumor burden assessment, immune function testing, treatment plan determination",
      },
      {
        title: "Mononuclear Cell Collection",
        duration: "1 day",
        description: "Leukapheresis to collect peripheral blood mononuclear cells",
      },
      {
        title: "NK Cell GMP Preparation",
        duration: "2-3 weeks",
        description: "NK cell activation, expansion and quality control in GMP laboratory",
      },
      {
        title: "Intravenous Infusion Treatment",
        duration: "30-60 minutes each",
        description:
          "One course typically includes 3-6 infusions, each interval approximately 2-4 weeks, most treatments can be completed in outpatient setting",
      },
      {
        title: "Hospital Monitoring",
        duration: "3-7 days (first time)",
        description:
          "Short-term hospital monitoring after first infusion, subsequent treatments can be done outpatient",
      },
      {
        title: "Long-term Follow-up Management",
        duration: "Ongoing",
        description:
          "Regular re-examination, tumor marker monitoring, remote follow-up",
      },
    ],
  },
  cases: {
    heading: "Case Studies",
    items: [
      {
        title: "Advanced Liver Cancer Patient",
        description:
          "A 62-year-old male advanced liver cancer patient whose condition continued to progress after multiple interventional treatments and targeted drug therapy. Received autologous NK cell therapy in 2024, completing 6 infusions. Three-month follow-up showed tumor marker AFP decreased from 856 ng/mL before treatment to 125 ng/mL, imaging assessment showed tumor shrinkage over 50%. Patient's physical condition significantly improved, quality of life markedly enhanced.",
      },
      {
        title: "Advanced Kidney Cancer Combination Therapy",
        description:
          "A 55-year-old female advanced renal cell carcinoma patient who had previously received targeted drug therapy but developed resistance. Started NK cell combined with PD-1 inhibitor treatment in 2024, assessment after 4 cycles showed stable disease (SD), with some lesions significantly reduced. Patient had no obvious adverse reactions, good tolerance, continuing maintenance treatment.",
      },
      {
        title: "Pancreatic Cancer Comprehensive Treatment",
        description:
          "A 68-year-old male advanced pancreatic cancer patient unable to undergo surgical resection. Received NK cell combined with gemcitabine + albumin-bound paclitaxel chemotherapy regimen, assessment after 3 cycles showed disease control (DCR), tumor marker CA19-9 decreased from 1250 U/mL before treatment to 380 U/mL. Patient's abdominal pain symptoms significantly relieved, appetite improved, weight increased.",
      },
    ],
  },
  cost: {
    heading: "Reference Treatment Costs",
    intro:
      "NK cell therapy costs have significant price advantages compared to similar treatments in Europe and America.",
    label: "Based on treatment plan, total cost is approximately",
    amount: "$30,000 - $60,000",
    bg: "bg-white",
  },
  whyChooseUs: {
    heading: "Why Choose Us?",
    variant: "white",
    items: [
      {
        icon: "stethoscope",
        title: "Direct Access to China's Top Cell Therapy Centers",
        description:
          "Established partnerships with multiple top-tier institutions, providing safe and reliable NK cell therapy services for international patients",
      },
      {
        icon: "shield",
        title: "Technology Officially Approved for Clinical Application",
        description:
          "Autologous NK cell adjuvant therapy for solid tumors has been included in Hainan Boao Lecheng official fee schedule, compliant, transparent and safe",
      },
      {
        icon: "trendingUp",
        title: "Solid Clinical Data Across Multiple Cancer Types",
        description:
          "Advanced liver cancer DCR 81.8%, median OS 41.6 months; advanced kidney cancer ORR 76.67%; pancreatic cancer DCR 73.7%",
      },
      {
        icon: "heart",
        title: "Excellent Safety Profile",
        description:
          "No genetic modification required, no serious toxicity reports, generally no lymphocyte depletion needed, good patient tolerance",
      },
      {
        icon: "award",
        title: "Transparent Pricing, No Middleman Markup",
        description:
          "Medical fees paid directly to hospital, platform does not handle or markup, registered prices publicly transparent",
      },
      {
        icon: "clock",
        title: "Efficient Scheduling, Convenient Medical Care",
        description:
          "Treatment can start within 2-3 weeks, avoiding long waiting periods in Europe and America",
      },
      {
        icon: "users",
        title: "Full Bilingual Service",
        description:
          "Medical record translation, on-site interpretation, international insurance coordination, one-stop support",
      },
      {
        icon: "mapPin",
        title: "Leveraging Boao Lecheng Pilot Zone Policy",
        description:
          "Enjoying national “Pilot First” special policy, ensuring compliant medical care for international patients",
      },
      {
        icon: "activity",
        title: "Long-term Follow-up Management",
        description:
          "Continuous remote follow-up after treatment, uninterrupted disease monitoring",
      },
    ],
  },
  notice: {
    text:
      "As an adjuvant therapy, NK cell therapy efficacy varies by individual differences. All patients must undergo comprehensive medical assessment before treatment and sign informed consent. NK cell therapy is mainly positioned for patient populations with recurrence risk or treatment failure after standard treatment. Whether suitable for NK cell therapy requires strict, individualized assessment by a multidisciplinary expert team.",
    bg: "bg-white",
  },
  cta: {
    heading: "Begin Your NK Cell Therapy Journey",
    subtitle:
      "Contact our professional team for personalized NK cell therapy assessment and plans",
    primary: { label: "Schedule Consultation", href: "/contact" },
    secondary: { label: "WhatsApp Consultation", href: "https://wa.me/16462968491", external: true },
  },
};

// Chinese variant of the above config, transcribed verbatim from the zh-mode
// page https://www.medkungfu.com/projects/nk-therapy.
const CONFIG_ZH: ImmunotherapyProjectConfig = {
  ariaLabel: "NK Cell Therapy - Immunotherapy for Solid Tumors",
  hero: {
    badge: "精准肿瘤治疗",
    title: "自体NK细胞实体瘤辅助治疗",
    subtitle: "唤醒先天免疫，重塑实体瘤治疗新格局",
    primaryBtn: "预约咨询",
    secondaryBtn: "了解治疗流程",
  },
  stickyNav: ["简介", "核心优势", "适应症", "治疗流程", "案例展示"],
  intro: {
    heading: "什么是自体NK细胞治疗？",
    paragraphs: [
      {
        before:
          "自然杀伤细胞（Natural Killer Cell, NK细胞）是人体先天免疫系统的核心成员，被誉为人体抵抗癌细胞和病毒感染的第一道防线。与其他免疫细胞不同，",
        highlight: "NK细胞无需预先识别肿瘤抗原即可直接杀伤癌细胞",
        after: "，且具有广谱的抗肿瘤活性。",
      },
      {
        before:
          "与CAR-T等基因改造细胞疗法不同，NK细胞治疗技术无需对细胞进行基因改造，仅通过体外活化和扩增即可完成，其作用机理更接近人体自然的免疫反应，安全性更高。",
      },
    ],
  },
  advantages: {
    heading: "核心优势 – 为什么选择在中国接受自体NK细胞治疗？",
    bg: "bg-white",
    items: [
      {
        icon: "target",
        title: "广谱抗肿瘤，覆盖多种实体瘤",
        description:
          "NK细胞可非特异性识别并杀伤多种肿瘤细胞，无需依赖特定抗原表达，适用于肝癌、肺癌、乳腺癌、胃癌、肾癌、结直肠癌、胰腺癌等多种实体瘤",
      },
      {
        icon: "shield",
        title: "安全性卓越",
        description:
          "自体细胞无免疫排斥风险；无需基因改造，无致癌性风险；临床试验中无治疗相关死亡事件报告，严重不良反应罕见",
      },
      {
        icon: "trendingUp",
        title: "疗效数据亮眼",
        description:
          "研究显示晚期肝癌DCR达81.8%，中位总生存期41.6个月；晚期肾癌ORR达76.67%，DCR达86.67%，显著优于靶向单药治疗",
      },
      {
        icon: "syringe",
        title: "无需清淋预处理",
        description:
          "相比CAR-T等疗法，自体NK细胞治疗一般不需要淋巴细胞清除化疗，降低额外毒性负担，患者耐受性更好",
      },
      {
        icon: "clock",
        title: "给药便捷",
        description:
          "采用静脉输注方式给药，门诊或短期住院即可完成，不影响患者正常生活",
      },
      {
        icon: "zap",
        title: "可与多种疗法联用",
        description:
          "NK细胞可与化疗、靶向治疗、免疫检查点抑制剂等联合应用，发挥协同抗肿瘤效应。研究显示与PD-1抑制剂联用可显著延长晚期NSCLC患者长期生存",
      },
      {
        icon: "mapPin",
        title: "依托博鳌乐城先行区政策",
        description:
          "享受\"先行先试\"政策，自体NK细胞治疗技术已正式获批并明码标价，国际患者可合规接受治疗",
      },
      {
        icon: "award",
        title: "显著的价格优势",
        description: "仅为欧美同类治疗费用的1/5-1/3",
      },
    ],
  },
  indications: {
    cardHeading: "适应症 – 哪些实体瘤患者适合自体NK细胞治疗？",
    cardSubtitle:
      "自体NK细胞疗法主要适用于经标准治疗后仍存在复发风险或治疗失败的实体瘤患者，作为辅助治疗或联合治疗手段",
    cards: [
      {
        title: "肝细胞癌（HCC）",
        description: "研究显示疾病控制率81.8%，中位OS达41.6个月",
      },
      {
        title: "晚期肾细胞癌",
        description:
          "临床试验显示ORR 76.67%，DCR 86.67%，显著优于靶向单药治疗；同时改善患者免疫功能及肿瘤标志物水平",
      },
      {
        title: "非小细胞肺癌",
        description: "与PD-1抑制剂（信迪利单抗）联合作为二线治疗，可显著延长生存期",
      },
      {
        title: "晚期胰腺癌",
        description:
          "NK细胞联合化疗一线治疗，DCR达73.7%，中位OS达10.8个月，显著优于传统治疗方案",
      },
    ],
  },
  process: {
    heading: "治疗流程",
    subtitle: "从初诊至康复约2-4周",
    bg: "bg-white",
    steps: [
      {
        title: "远程咨询与初筛",
        duration: "2-5天",
        description: "提交病历资料，多学科专家团队远程评估治疗指征和可行性",
      },
      {
        title: "签证与行程安排",
        duration: "1-2周",
        description: "医疗签证邀请函、国际保险对接、行程规划与住宿安排",
      },
      {
        title: "抵华与全面评估",
        duration: "2-3天",
        description: "全面体检、肿瘤负荷评估、免疫功能检测、确定治疗方案",
      },
      {
        title: "单核细胞采集",
        duration: "1天",
        description: "白细胞分离术采集外周血单核细胞",
      },
      {
        title: "NK细胞GMP制备",
        duration: "2-3周",
        description: "GMP实验室中NK细胞活化、扩增与质检",
      },
      {
        title: "静脉回输治疗",
        duration: "每次30-60分钟",
        description: "一疗程通常3-6次回输，每次间隔约2-4周，多数治疗可在门诊完成",
      },
      {
        title: "住院监测",
        duration: "3-7天（首次）",
        description: "首次回输后短期住院监测，后续治疗可门诊进行",
      },
      {
        title: "长期随访管理",
        duration: "持续",
        description: "定期复查、肿瘤标志物监测、远程随访",
      },
    ],
  },
  cases: {
    heading: "案例展示",
    items: [
      {
        title: "晚期肝癌患者",
        description:
          "一名62岁男性晚期肝癌患者，经过多次介入治疗和靶向药物治疗后病情仍持续进展。2024年接受自体NK细胞治疗，共完成6次回输。治疗后3个月复查显示肿瘤标志物AFP从治疗前的856 ng/mL降至125 ng/mL，影像学评估肿瘤缩小超过50%。患者体力状况明显改善，生活质量显著提高。",
      },
      {
        title: "晚期肾癌联合治疗",
        description:
          "一名55岁女性晚期肾细胞癌患者，既往接受过靶向药物治疗但出现耐药。2024年开始接受NK细胞联合PD-1抑制剂治疗，完成4个周期治疗后评估显示疾病稳定（SD），部分病灶明显缩小。患者无明显不良反应，耐受性良好，继续维持治疗中。",
      },
      {
        title: "胰腺癌综合治疗",
        description:
          "一名68岁男性晚期胰腺癌患者，无法手术切除。接受NK细胞联合吉西他滨+白蛋白结合型紫杉醇化疗方案，完成3个周期治疗后评估显示疾病控制（DCR），肿瘤标志物CA19-9从治疗前的1250 U/mL降至380 U/mL。患者腹痛症状明显缓解，食欲改善，体重增加。",
      },
    ],
  },
  cost: {
    heading: "参考治疗费用",
    intro: "NK细胞治疗费用相比欧美同类治疗具有显著价格优势。",
    label: "根据治疗方案，总费用约在",
    amount: "$30,000 - $60,000",
    bg: "bg-white",
  },
  whyChooseUs: {
    heading: "为什么选择我们？",
    variant: "white",
    items: [
      {
        icon: "stethoscope",
        title: "直通中国顶级细胞治疗中心",
        description: "与多家顶尖机构建立合作，为国际患者提供安全、可靠的NK细胞治疗服务",
      },
      {
        icon: "shield",
        title: "技术已正式获批临床应用",
        description:
          "自体NK细胞辅助治疗实体瘤技术已纳入海南博鳌乐城官方收费清单，合规、透明、安全",
      },
      {
        icon: "trendingUp",
        title: "多癌种临床数据扎实",
        description:
          "晚期肝癌DCR 81.8%、中位OS 41.6个月；晚期肾癌ORR 76.67%；胰腺癌DCR 73.7%",
      },
      {
        icon: "heart",
        title: "安全性卓越",
        description: "无需基因改造，无严重毒性反应报告，一般无需清淋预处理，患者耐受性好",
      },
      {
        icon: "award",
        title: "价格透明，无中间加价",
        description: "医疗费用直付医院，平台不经手、不加价，备案价格公开透明",
      },
      {
        icon: "clock",
        title: "高效排期、便捷就医",
        description: "全程2-3周内即可启动治疗，避免欧美长期等候",
      },
      {
        icon: "users",
        title: "全程双语服务",
        description: "病历翻译、现场口译、国际保险对接，一站式支持",
      },
      {
        icon: "mapPin",
        title: "依托博鳌乐城先行区政策",
        description: "享受国家\"先行先试\"特许政策，国际患者合规就医有保障",
      },
      {
        icon: "activity",
        title: "长期随访管理",
        description: "治疗后持续远程随访，病情监测不中断",
      },
    ],
  },
  notice: {
    text:
      "NK细胞疗法作为辅助治疗手段，疗效因个体差异而异。所有患者必须在治疗前接受全面医疗评估，签署知情同意书。NK细胞治疗主要定位于标准治疗后仍存在复发风险或治疗失败的患者群体。是否适合接受NK细胞治疗，需由多学科专家团队进行严格、个体化的评估。",
    bg: "bg-white",
  },
  cta: {
    heading: "开启您的NK细胞治疗之旅",
    subtitle: "联系我们的专业团队，获取个性化的NK细胞治疗评估与方案",
    primary: { label: "预约咨询", href: "/contact" },
    secondary: { label: "WhatsApp咨询", href: "https://wa.me/16462968491", external: true },
  },
};

// Russian (ru) variant of CONFIG, transcribed from the ru-translations JSON.
const CONFIG_RU: ImmunotherapyProjectConfig = {
  ariaLabel: "NK Cell Therapy - Immunotherapy for Solid Tumors",
  hero: {
    badge: "Точная онкология лечение",
    title: "Аутологичная клеточная адъювантная терапия NK для твердых опухолей",
    subtitle: "Пробуждение врожденного иммунитета, переформатирование ландшафта лечения твердой опухоли",
    primaryBtn: "Консультация по расписанию",
    secondaryBtn: "Узнайте о процессе лечения",
  },
  stickyNav: [
    "Введение",
    "Основные преимущества",
    "Показания",
    "Процесс лечения",
    "Тематические исследования",
  ],
  intro: {
    heading: "Что такое аутологичная клеточная терапия NK?",
    paragraphs: [
      {
        before:
          "Natural Killer Cells (NK cells) are core members of the human innate immune system, known as the body's first line of defense against cancer cells and viral infections. Unlike other immune cells, ",
        highlight:
          "Клетки NK могут непосредственно убивать раковые клетки без предварительного распознавания опухолевых антигенов",
        after: "и обладают широкой спектральной противоопухолевой активностью.",
      },
      {
        before:
          "В отличие от генно-модифицированных клеточных методов лечения, таких как CAR-T, технология клеточной терапии NK не требует генетической модификации клеток, а требует только активации и расширения in vitro. Его механизм действия ближе к естественному иммунному ответу организма, с большей безопасностью.",
      },
    ],
  },
  advantages: {
    heading: "Основные преимущества: Почему стоит выбрать аутологическую клеточную терапию NK в Китае?",
    bg: "bg-white",
    items: [
      {
        icon: "target",
        title: "Широкоспектральный противотумор, охватывающий несколько твердых опухолей",
        description:
          "Клетки NK могут неспецифически распознавать и убивать различные опухолевые клетки, не полагаясь на специфическую экспрессию антигена, подходящую для рака печени, рака легких, рака молочной железы, рака желудка, рака почек, колоректального рака, рака поджелудочной железы и других солидных опухолей",
      },
      {
        icon: "shield",
        title: "Отличный профиль безопасности",
        description:
          "Аутологичные клетки не имеют риска иммунного отторжения; не требуется генетической модификации, не существует канцерогенного риска; нет смертей, связанных с лечением, о которых сообщалось в клинических испытаниях, серьезные побочные реакции редки.",
      },
      {
        icon: "trendingUp",
        title: "Впечатляющие данные эффективности",
        description:
          "Исследования показывают, что прогрессирующий рак печени DCR достигает 81,8%, медиана ОС 41,6 месяца; прогрессирующий рак почки ORR достигает 76,67%, DCR 86,67%, значительно превосходя целевую монотерапию.",
      },
      {
        icon: "syringe",
        title: "Не требуется истощение лимфоцитов",
        description:
          "По сравнению с CAR-T и другими методами лечения, аутологичная клеточная терапия NK обычно не требует химиотерапии с истощением лимфоцитов, что снижает дополнительную токсичность при лучшей толерантности пациента.",
      },
      {
        icon: "clock",
        title: "Удобное администрирование",
        description:
          "Введение через внутривенную инфузию может быть завершено в амбулаторной или краткосрочной госпитализации без влияния на нормальную жизнь пациентов.",
      },
      {
        icon: "zap",
        title: "Можно сочетать с несколькими видами терапии",
        description:
          "Клетки NK можно комбинировать с химиотерапией, таргетной терапией, ингибиторами иммунных контрольных точек и т.д. для оказания синергетического противоопухолевого эффекта. Исследования показывают, что комбинация с ингибиторами PD-1 может значительно продлить долгосрочную выживаемость у пациентов с прогрессирующими НСКЛ.",
      },
      {
        icon: "mapPin",
        title: "Использование политики пилотной зоны Боао Леченг",
        description:
          "Enjoying “Pilot First” policy, autologous NK cell therapy technology has been officially approved with transparent pricing, international patients can receive compliant treatment",
      },
      {
        icon: "award",
        title: "Значительное преимущество цены",
        description:
          "Только 1/5-1/3 стоимости аналогичных процедур в Европе и Америке",
      },
    ],
  },
  indications: {
    cardHeading:
      "Показания - Какие пациенты с твердой опухолью подходят для аутологичной клеточной терапии NK?",
    cardSubtitle:
      "Аутологичная клеточная терапия NK в основном подходит для пациентов с солидной опухолью, у которых все еще есть риск рецидива или неудача лечения после стандартного лечения, в качестве адъювантной или комбинированной терапии.",
    cards: [
      {
        title: "Гепатоцеллюлярная карцинома (HCC)",
        description: "Исследования показывают, что уровень контроля заболеваний составляет 81,8%, медиана ОС 41,6 месяца.",
      },
      {
        title: "Продвинутая почечная карцинома",
        description:
          "Клинические испытания показали, что ORR 76,67%, DCR 86,67%, значительно превосходит целевую монотерапию; одновременно улучшает иммунную функцию пациента и уровень опухолевых маркеров.",
      },
      {
        title: "Немелкоклеточный рак легких",
        description:
          "В сочетании с ингибитором PD-1 (синтилимаб) в качестве лечения второй линии может значительно продлить выживаемость.",
      },
      {
        title: "Расширенный рак поджелудочной железы",
        description:
          "Клетки NK в сочетании с химиотерапией первой линии, DCR достигает 73,7%, медиана ОС 10,8 месяцев, значительно превосходя традиционные схемы лечения",
      },
    ],
  },
  process: {
    heading: "Процесс лечения",
    subtitle: "Примерно через 2-4 недели от первоначального диагноза до выздоровления",
    bg: "bg-white",
    steps: [
      {
        title: "Дистанционное консультирование и первоначальный скрининг",
        duration: "2-5 дней",
        description:
          "Представлять медицинские записи, междисциплинарная группа экспертов дистанционно оценивает показания к лечению и целесообразность его применения.",
      },
      {
        title: "Визовые и туристические соглашения",
        duration: "1-2 недели",
        description:
          "Письма с приглашением на получение медицинской визы, международная координация страхования, планирование маршрута и размещение",
      },
      {
        title: "Прибытие в Китай и всесторонняя оценка",
        duration: "2-3 дня",
        description:
          "Комплексное физическое обследование, оценка бремени опухоли, тестирование иммунной функции, определение плана лечения",
      },
      {
        title: "Моноядерная коллекция клеток",
        duration: "1 день",
        description: "Лейкаферез для сбора мононуклеарных клеток периферической крови",
      },
      {
        title: "NK Cell GMP Подготовка",
        duration: "2-3 недели",
        description: "Активация, расширение и контроль качества клеток NK в лаборатории GMP",
      },
      {
        title: "Внутривенное инфузионное лечение",
        duration: "30-60 минут каждый",
        description:
          "Один курс обычно включает 3-6 инфузий, каждый интервал приблизительно 2-4 недели, большинство процедур могут быть завершены в амбулаторных условиях.",
      },
      {
        title: "Мониторинг больничного",
        duration: "3-7 дней (в первый раз)",
        description:
          "Краткосрочный мониторинг в больнице после первой инфузии, последующие процедуры могут быть выполнены амбулаторно.",
      },
      {
        title: "Долгосрочное последующее управление",
        duration: "Вперед",
        description:
          "Регулярное повторное обследование, мониторинг опухолевых маркеров, дистанционное наблюдение",
      },
    ],
  },
  cases: {
    heading: "Тематические исследования",
    items: [
      {
        title: "Продвинутый пациент с раком печени",
        description:
          "62-летний мужчина прогрессировал рак печени пациента, состояние которого продолжало прогрессировать после нескольких интервенционных процедур и целевой лекарственной терапии. Получил аутологическую клеточную терапию NK в 2024 году, завершив 6 инфузий. Трехмесячное наблюдение показало, что опухолевый маркер АФП снизился с 856 нг / мл до лечения до 125 нг / мл, оценка изображений показала сокращение опухоли более чем на 50%. Физическое состояние пациента значительно улучшилось, качество жизни заметно улучшилось.",
      },
      {
        title: "Расширенная комбинированная терапия рака почки",
        description:
          "55-летняя женщина с прогрессирующей почечно-клеточной карциномой, которая ранее получала целевую лекарственную терапию, но развивала резистентность. Начатая NK клетка в сочетании с лечением ингибитором PD-1 в 2024 году, оценка после 4 циклов показала стабильное заболевание (SD), при этом некоторые поражения значительно уменьшились. У пациента не было явных побочных реакций, хорошей толерантности, продолжающегося поддерживающего лечения.",
      },
      {
        title: "Панкреатический рак Комплексное лечение",
        description:
          "68-летний мужчина с прогрессирующим раком поджелудочной железы не может пройти хирургическую резекцию. Полученная клетка NK в сочетании с гемцитабин + альбумин-связанным режимом химиотерапии паклитакселом, оценка после 3 циклов показала контроль заболевания (DCR), опухолевый маркер CA19-9 снизился с 1250 U/мл до лечения до 380 U/мл. Симптомы боли в животе пациента значительно облегчились, улучшился аппетит, увеличился вес.",
      },
    ],
  },
  cost: {
    heading: "Справочные затраты на лечение",
    intro:
      "Стоимость клеточной терапии NK имеет значительные ценовые преимущества по сравнению с аналогичными методами лечения в Европе и Америке.",
    label: "На основе плана лечения общая стоимость составляет приблизительно",
    amount: "$30,000 - $60,000",
    bg: "bg-white",
  },
  whyChooseUs: {
    heading: "Почему выбирают нас?",
    variant: "white",
    items: [
      {
        icon: "stethoscope",
        title: "Прямой доступ к ведущим центрам клеточной терапии Китая",
        description:
          "Установленные партнерские отношения с несколькими учреждениями высшего уровня, предоставляющими безопасные и надежные услуги клеточной терапии NK для международных пациентов",
      },
      {
        icon: "shield",
        title: "Технология официально одобрена для клинического применения",
        description:
          "Аутологичная клеточная адъювантная терапия NK для солидных опухолей была включена в официальный график оплаты Хайнань Боао Леченг, совместима, прозрачна и безопасна.",
      },
      {
        icon: "trendingUp",
        title: "Твердые клинические данные по нескольким типам рака",
        description:
          "Расширенный рак печени DCR 81,8%, медиана ОС 41,6 месяцев; прогрессирующий рак почки ORR 76,67%; рак поджелудочной железы DCR 73,7%",
      },
      {
        icon: "heart",
        title: "Отличный профиль безопасности",
        description:
          "Не требуется генетическая модификация, нет серьезных сообщений о токсичности, как правило, не требуется истощение лимфоцитов, хорошая переносимость пациентов.",
      },
      {
        icon: "award",
        title: "Прозрачные цены, отсутствие разметки Миддлмана",
        description:
          "Медицинские сборы, выплачиваемые непосредственно больнице, платформа не обрабатывает и не разметывает, зарегистрированные цены публично прозрачны.",
      },
      {
        icon: "clock",
        title: "Эффективное планирование, удобная медицинская помощь",
        description:
          "Лечение может начаться в течение 2-3 недель, избегая длительных периодов ожидания в Европе и Америке.",
      },
      {
        icon: "users",
        title: "Полный двуязычный сервис",
        description:
          "Перевод медицинской документации, устный перевод на месте, международная координация страхования, поддержка в режиме «одного окна»",
      },
      {
        icon: "mapPin",
        title: "Использование политики пилотной зоны Боао Леченг",
        description:
          "Enjoying national “Pilot First” special policy, ensuring compliant medical care for international patients",
      },
      {
        icon: "activity",
        title: "Долгосрочное последующее управление",
        description:
          "Непрерывное дистанционное наблюдение после лечения, непрерывный мониторинг заболеваний",
      },
    ],
  },
  notice: {
    text:
      "В качестве адъювантной терапии эффективность клеточной терапии NK варьируется в зависимости от индивидуальных различий. Все пациенты должны пройти комплексную медицинскую оценку перед лечением и подписать информированное согласие. Клеточная терапия NK в основном предназначена для групп пациентов с риском рецидива или неудачей лечения после стандартного лечения. Подходит ли для клеточной терапии NK, требуется строгая индивидуализированная оценка многопрофильной группы экспертов.",
    bg: "bg-white",
  },
  cta: {
    heading: "Начните свое путешествие по клеточной терапии NK",
    subtitle:
      "Свяжитесь с нашей профессиональной командой для персонализированной оценки и планирования клеточной терапии NK",
    primary: { label: "Консультация по расписанию", href: "/contact" },
    secondary: { label: "WhatsApp Consultation", href: "https://wa.me/16462968491", external: true },
  },
};

export default function NkTherapyProjectPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <ImmunotherapyProjectPage config={CONFIG} zhConfig={CONFIG_ZH} ruConfig={CONFIG_RU} />
      </main>
      <SiteFooter />
    </>
  );
}

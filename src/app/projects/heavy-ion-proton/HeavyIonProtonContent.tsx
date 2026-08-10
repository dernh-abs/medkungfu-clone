// Heavy Ion/Proton Therapy project detail page content.
// Bilingual: renders Chinese content when the site language is zh.
"use client";
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import {
  Icons,
  type LucideIcon,
} from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";

const coreAdvantages = [
  {
    title: "World-Class Clinical Efficacy",
    description:
      "5-year overall survival rate of 70.4% for particle therapy patients, 93.8% for nasopharyngeal carcinoma, and 97.2% for localized prostate cancer, reaching international leading levels",
  },
  {
    title: "Short Treatment Cycle & Fast Scheduling",
    description:
      "Multiple centers offer VIP green channels, prioritizing overseas patients with waiting times reduced to within 3-5 days",
  },
  {
    title: "Significant Cost-Effectiveness",
    description:
      "Using the same international top-tier equipment (Varian ProBeam, Mevion, etc.), total treatment costs are only 1/4 to 1/5 of developed countries",
  },
  {
    title: "High International Service Standards",
    description:
      "Hundreds of overseas patients come to China for treatment, with hospitals providing English/multilingual services and international insurance direct payment systems",
  },
];

const coreAdvantagesZh = [
  {
    title: "世界一流临床疗效",
    description:
      "粒子放疗患者5年总生存率达70.4%，初治鼻咽癌5年生存率93.8%，局限期前列腺癌5年生存率97.2%，达到国际领先水平",
  },
  {
    title: "治疗周期短、等候快",
    description:
      "多家中心提供VIP绿色通道，优先为海外患者安排治疗，候诊时间缩短至3-5天以内",
  },
  {
    title: "显著的性价比优势",
    description:
      "同样采用国际顶级设备（瓦里安ProBeam、迈胜Mevion等），治疗总费用仅为发达国家的1/4–1/5",
  },
  {
    title: "国际化服务水平高",
    description:
      "百余位境外患者慕名来华治疗，医院配置英语/多语言服务、国际保险直付系统，海外患者就医全程无忧",
  },
];
const coreAdvantagesRu = [
  {
    title: "Клиническая эффективность мирового класса",
    description:
      "5-летняя общая выживаемость 70,4% для пациентов с терапией частиц, 93,8% для носоглоточной карциномы и 97,2% для локализованного рака предстательной железы, достигая ведущих международных уровней",
  },
  {
    title: "Короткий цикл лечения и быстрое планирование",
    description:
      "Несколько центров предлагают VIP-зеленые каналы, уделяя приоритетное внимание иностранным пациентам с временем ожидания, сокращенным до 3-5 дней.",
  },
  {
    title: "Значительная экономическая эффективность",
    description:
      "Используя одно и то же международное оборудование высшего уровня (Varian ProBeam, Mevion и т. д.), общие затраты на лечение составляют всего 1/4 до 1/5 от развитых стран.",
  },
  {
    title: "Высокие международные стандарты обслуживания",
    description:
      "Сотни иностранных пациентов приезжают в Китай для лечения, а больницы предоставляют услуги на английском языке и международные системы прямых платежей по страхованию.",
  },
];



const indications: {
  bgClass: string;
  titleClass: string;
  bulletClass: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}[] = [
  {
    bgClass: "bg-red-50",
    titleClass: "text-red-700",
    bulletClass: "text-red-500",
    title: "Head & Neck",
    icon: Icons.target,
    items: [
      "Nasopharyngeal, oropharyngeal, and laryngeal cancer",
      "Intracranial/skull base tumors (meningioma, chordoma, etc.)",
      "Medulloblastoma, ependymoma, etc.",
    ],
  },
  {
    bgClass: "bg-orange-50",
    titleClass: "text-orange-700",
    bulletClass: "text-orange-500",
    title: "Thoracic & Abdominal",
    icon: Icons.heart,
    items: [
      "Lung cancer (non-small cell)",
      "Breast cancer",
      "Esophageal cancer",
      "Liver cancer",
    ],
  },
  {
    bgClass: "bg-purple-50",
    titleClass: "text-purple-700",
    bulletClass: "text-purple-500",
    title: "Pelvic & Others",
    icon: Icons.shield,
    items: [
      "Prostate cancer",
      "Pancreatic cancer",
      "Bone and soft tissue tumors (osteosarcoma, chordoma, etc.)",
      "Kidney and rectal cancer",
    ],
  },
  {
    bgClass: "bg-green-50",
    titleClass: "text-green-700",
    bulletClass: "text-green-500",
    title: "Special Recommendations",
    icon: Icons.award,
    items: [
      "Pediatric tumors (globally recognized preferred option)",
      "Recurrent/refractory tumors",
      "Complex tumors near critical functional areas",
    ],
  },
];

const indicationsZh: {
  bgClass: string;
  titleClass: string;
  bulletClass: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}[] = [
  {
    bgClass: "bg-red-50",
    titleClass: "text-red-700",
    bulletClass: "text-red-500",
    title: "头颈部",
    icon: Icons.target,
    items: ["鼻咽癌、口咽癌、喉癌", "颅内颅底肿瘤（脑膜瘤、脊索瘤等）", "髓母细胞瘤、室管膜瘤等"],
  },
  {
    bgClass: "bg-orange-50",
    titleClass: "text-orange-700",
    bulletClass: "text-orange-500",
    title: "胸腹部",
    icon: Icons.heart,
    items: ["肺癌（非小细胞肺癌）", "乳腺癌", "食管癌", "肝癌"],
  },
  {
    bgClass: "bg-purple-50",
    titleClass: "text-purple-700",
    bulletClass: "text-purple-500",
    title: "盆腔及其他",
    icon: Icons.shield,
    items: ["前列腺癌", "胰腺癌", "骨软组织肿瘤（骨肉瘤、脊索瘤等）", "肾癌、直肠癌"],
  },
  {
    bgClass: "bg-green-50",
    titleClass: "text-green-700",
    bulletClass: "text-green-500",
    title: "特别推荐",
    icon: Icons.award,
    items: [
      "儿童肿瘤（世界公认儿童实体瘤优选方案）",
      "复发/难治性肿瘤（如局部复发鼻咽癌等）",
      "毗邻重要功能区的复杂部位肿瘤",
    ],
  },
];
const indicationsRu: {
  bgClass: string;
  titleClass: string;
  bulletClass: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}[] = [
  {
    bgClass: "bg-red-50",
    titleClass: "text-red-700",
    bulletClass: "text-red-500",
    title: "Голова и шея",
    icon: Icons.target,
    items: [
      "Насофарингеальный, орофарингеальный и рак гортани",
      "Внутричерепные/опухоли основания черепа (менингиома, хордома и т.д.)",
      "Медуллобластома, эпендимома и т.д.",
    ],
  },
  {
    bgClass: "bg-orange-50",
    titleClass: "text-orange-700",
    bulletClass: "text-orange-500",
    title: "Торакальный и абдоминальный",
    icon: Icons.heart,
    items: [
      "Рак легких (небольшие клетки)",
      "Рак молочной железы",
      "Рак пищевода",
      "Рак печени",
    ],
  },
  {
    bgClass: "bg-purple-50",
    titleClass: "text-purple-700",
    bulletClass: "text-purple-500",
    title: "Органы малого таза и другие направления",
    icon: Icons.shield,
    items: [
      "Рак простаты",
      "Рак поджелудочной железы",
      "Опухоли костей и мягких тканей (остеосаркома, хордома и т. Д.)",
      "Рак почек и ректального рака",
    ],
  },
  {
    bgClass: "bg-green-50",
    titleClass: "text-green-700",
    bulletClass: "text-green-500",
    title: "Специальные рекомендации",
    icon: Icons.award,
    items: [
      "Педиатрические опухоли (глобально признанный предпочтительный вариант)",
      "Рецидивирующие/рефрактерные опухоли",
      "Сложные опухоли вблизи критических функциональных областей",
    ],
  },
];



const treatmentServices: { title: string; icon: LucideIcon; items: string[] }[] = [
  {
    title: "Core Medical Services",
    icon: Icons.checkCircle,
    items: [
      "Multidisciplinary consultation and evaluation by MDT teams",
      "High-precision simulation and positioning using CT/MRI imaging",
      "Personalized treatment planning with advanced planning systems",
      "Custom immobilization device fabrication for each patient",
      "Ion beam therapy implementation – 15-30 minutes per session, 1-3 minutes actual irradiation",
      "Professional nursing and close monitoring during treatment",
    ],
  },
  {
    title: "Premium Support Services",
    icon: Icons.award,
    items: [
      "Full-course medical services from initial consultation to treatment completion",
      "Comprehensive examinations including PET-CT/MR and laboratory tests",
      "Premium private/suite-level wards with professional nursing teams",
      "Symptomatic supportive treatment and auxiliary medications",
      "Post-discharge rehabilitation guidance and long-term follow-up",
    ],
  },
];

const treatmentServicesZh: { title: string; icon: LucideIcon; items: string[] }[] = [
  {
    title: "医疗核心服务",
    icon: Icons.checkCircle,
    items: [
      "多学科会诊与评估 – 由肿瘤学家、放射物理学家、放疗专科医生等组成MDT团队",
      "高精度模拟定位 – 通过CT/MRI等影像设备获取肿瘤及周围组织的精确三维图像",
      "个性化治疗计划设计 – 利用先进计划系统精确计算离子束入射角度、深度及剂量分布",
      "固定模具制作 – 为每位患者量身制作体位固定模具",
      "离子束治疗实施 – 每次治疗全程约15–30分钟，实际照射1–3分钟",
      "治疗期间专业护理与密切监测 – 每日治疗前后专业医护团队全程陪护",
    ],
  },
  {
    title: "高端配套服务",
    icon: Icons.award,
    items: [
      "全病程诊疗服务 – 从初次门诊到治疗结束的专家诊疗",
      "全面检查检验 – 治疗前、中、后期的全部影像学检查（PET-CT/MR）、实验室检验等",
      "高端特需病房 – 入住单人间/套房级高端病房，配备独立卫浴、生活设施及专业护理团队",
      "对症支持治疗及辅助药物 – 治疗期间所需全部药品及支持治疗",
      "出院康复指导与长期随访 – 制定个性化康复计划，定期复查提醒",
    ],
  },
];
const treatmentServicesRu: { title: string; icon: LucideIcon; items: string[] }[] = [
  {
    title: "Основные медицинские услуги",
    icon: Icons.checkCircle,
    items: [
      "Многодисциплинарные консультации и оценка командами МДТ",
      "Высокоточное моделирование и позиционирование с использованием изображений КТ/МРТ",
      "Персонализированное планирование лечения с использованием передовых систем планирования",
      "Изготовление пользовательского устройства иммобилизации для каждого пациента",
      "Реализация терапии ионным лучом – 15-30 минут за сеанс, 1-3 минуты фактического облучения",
      "Профессиональный уход и тщательный мониторинг во время лечения",
    ],
  },
  {
    title: "Премиум-сервисы поддержки",
    icon: Icons.award,
    items: [
      "Полноценные медицинские услуги от начальной консультации до завершения лечения",
      "Комплексные исследования, включая ПЭТ-КТ/МР и лабораторные испытания",
      "Премиум частные / люкс уровня палат с профессиональными командами медсестер",
      "Симптоматическое поддерживающее лечение и вспомогательные препараты",
      "Руководство по реабилитации после выписки и долгосрочное наблюдение",
    ],
  },
];



const processSteps = [
  {
    num: 1,
    title: "1. Remote Consultation & Screening",
    duration: "2-5 days",
    description:
      "Submit medical records for remote MDT evaluation and preliminary treatment planning",
  },
  {
    num: 2,
    title: "2. Visa & Travel Arrangements",
    duration: "1-2 weeks",
    description:
      "Medical visa invitation letter, international insurance coordination, travel planning",
  },
  {
    num: 3,
    title: "3. Arrival & Admission Assessment",
    duration: "2-3 days",
    description:
      "Comprehensive physical examination, imaging positioning, direct VIP ward admission",
  },
  {
    num: 4,
    title: "4. Treatment Planning",
    duration: "3-5 days",
    description:
      "Target delineation, dose calculation, treatment plan review and verification",
  },
  {
    num: 5,
    title: "5. Treatment Implementation",
    duration: "5-6 weeks",
    description:
      "Daily proton/heavy ion irradiation, painless throughout, professional care",
  },
  {
    num: 6,
    title: "6. Rehabilitation & Follow-up",
    duration: "Ongoing",
    description: "Regular post-discharge check-ups, remote follow-up management",
  },
];

const processStepsZh = [
  {
    num: 1,
    title: "1. 远程咨询与初筛",
    duration: "2–5天",
    description: "提交病历资料，多学科专家团队远程评估，初步制定治疗方案",
  },
  {
    num: 2,
    title: "2. 签证与行程安排",
    duration: "1–2周",
    description: "医疗签证邀请函、国际保险对接、行程规划与高端住宿安排",
  },
  {
    num: 3,
    title: "3. 抵华与入院评估",
    duration: "2–3天",
    description: "全面身体检查、影像学定位、固定模具制作，直接入住VIP病房",
  },
  {
    num: 4,
    title: "4. 治疗计划制定",
    duration: "3–5天",
    description: "靶区勾画、剂量计算、治疗计划审核与验证",
  },
  {
    num: 5,
    title: "5. 治疗实施",
    duration: "5–6周",
    description: "每日一次质子/重离子照射，全程无痛，全程享受专业医护团队全天候照护",
  },
  {
    num: 6,
    title: "6. 康复与随访",
    duration: "持续",
    description: "出院后定期复查，远程随访管理，病情监测不中断",
  },
];
const processStepsRu = [
  {
    num: 1,
    title: "1.Дистанционные консультации и скрининг",
    duration: "2-5 дней",
    description:
      "Подать медицинские записи для дистанционной оценки MDT и предварительного планирования лечения",
  },
  {
    num: 2,
    title: "2. Визовые и туристические соглашения",
    duration: "1-2 недели",
    description:
      "Приглашение на медицинскую визу, международная координация страхования, планирование поездок",
  },
  {
    num: 3,
    title: "3.Оценка прибытия и приема",
    duration: "2-3 дня",
    description:
      "Комплексный физический осмотр, позиционирование изображений, прямой прием VIP-подопечных",
  },
  {
    num: 4,
    title: "4.Планирование лечения",
    duration: "3-5 дней",
    description:
      "Определение цели, расчет дозы, обзор плана лечения и проверка",
  },
  {
    num: 5,
    title: "5.Реализация лечения",
    duration: "5-6 недель",
    description:
      "Ежедневное протонное/тяжелое ионное облучение, безболезненное во всем, профессиональная помощь",
  },
  {
    num: 6,
    title: "6. Реабилитация и последующая деятельность",
    duration: "Вперед",
    description: "Регулярные проверки после выписки, дистанционное управление последующей деятельностью",
  },
];



const efficacyStats = [
  { value: "70.4%", label: "5-Year Overall Survival Rate" },
  { value: "83.8%", label: "Stage 0-I 5-Year Survival" },
  { value: "82.1%", label: "Stage II 5-Year Survival" },
  { value: "4.2%", label: "Grade 3 Adverse Events" },
];

const efficacyStatsZh = [
  { value: "70.4%", label: "粒子放疗患者5年总生存率" },
  { value: "83.8%", label: "0–Ⅰ期患者5年总生存率" },
  { value: "82.1%", label: "Ⅱ期患者5年总生存率" },
  { value: "4.2%", label: "3级不良反应发生率" },
];
const efficacyStatsRu = [
  { value: "70.4%", label: "5-летний общий показатель выживаемости" },
  { value: "83.8%", label: "Стадия 0-I 5-летнее выживание" },
  { value: "82.1%", label: "II стадия 5-летнего выживания" },
  { value: "4.2%", label: "3 Нежелательные события" },
];



const whyChoose = [
  {
    title: "World-Class Excellence",
    description:
      "Clinical efficacy reaches international advanced levels, multiple centers JCI accredited",
  },
  {
    title: "Heavy Ion Technology Leader",
    description:
      "China is the global leader in heavy ion clinical application with proprietary systems",
  },
  {
    title: "Direct Access to Top Centers",
    description:
      "Formal partnerships with top centers in Shanghai, Shandong, Guangzhou, Wuhan, Gansu, Anhui",
  },
  {
    title: "Transparent Pricing",
    description:
      "All-inclusive medical package, direct hospital payment, no hidden fees",
  },
  {
    title: "VIP Ward Experience",
    description:
      "Private/suite-level wards throughout with professional nursing teams",
  },
  {
    title: "Efficient Scheduling",
    description:
      "Initial evaluation and treatment start within 2-3 weeks, avoiding long waits",
  },
  {
    title: "Full Bilingual Support",
    description:
      "Medical record translation, on-site interpretation, international insurance coordination",
  },
  {
    title: "Long-term Follow-up",
    description:
      "Continuous remote follow-up after treatment with uninterrupted monitoring",
  },
];

const whyChooseZh = [
  {
    title: "国际顶尖水平",
    description: "粒子放疗临床疗效达国际先进水平，多家中心通过JCI认证",
  },
  {
    title: "重离子技术领跑者",
    description: "中国是全球重离子技术临床应用创新的领跑者，拥有自主知识产权重离子系统",
  },
  {
    title: "直通中国顶级质子重离子中心",
    description: "与上海、山东、广州、武汉、甘肃、安徽等多家顶级中心建立正式合作",
  },
  {
    title: "价格透明，全程一口价",
    description: "特需医疗套餐收费，医疗费用直付医院，平台不经手、不加价，无隐藏费用",
  },
  {
    title: "VIP病房尊享体验",
    description: "全程入住单人间/套房级高端病房，配备专业医护团队全天候照护",
  },
  {
    title: "高效排期、VIP绿色通道",
    description: "2–3周内完成初诊评估和治疗启动，避免欧美长期等候",
  },
  {
    title: "全程双语服务",
    description: "病历翻译、现场口译、国际保险对接，一站式支持",
  },
  {
    title: "长期随访管理",
    description: "治疗后持续远程随访，病情监测不中断",
  },
];
const whyChooseRu = [
  {
    title: "Совершенство мирового класса",
    description:
      "Клиническая эффективность достигает международных уровней, аккредитованы несколько центров JCI",
  },
  {
    title: "Лидер в области технологий тяжелых ионов",
    description:
      "Китай является мировым лидером в области применения тяжелых ионов в клинических условиях с запатентованными системами.",
  },
  {
    title: "Прямой доступ к лучшим центрам",
    description:
      "Формальное партнерство с ведущими центрами в Шанхае, Шаньдуне, Гуанчжоу, Ухане, Ганьсу, Аньхой",
  },
  {
    title: "Прозрачные цены",
    description:
      "Медицинский пакет «все включено», прямая больничная оплата, никаких скрытых сборов",
  },
  {
    title: "VIP Ward Experience - опыт",
    description:
      "Частные / люксовые отделения по всему миру с профессиональными командами медсестер",
  },
  {
    title: "Эффективное планирование",
    description:
      "Первоначальная оценка и лечение начинаются в течение 2-3 недель, избегая длительного ожидания.",
  },
  {
    title: "Полная двуязычная поддержка",
    description:
      "Перевод медицинской документации, устный перевод на месте, международная координация страхования",
  },
  {
    title: "Долгосрочные последующие меры",
    description:
      "Непрерывное дистанционное наблюдение после лечения с непрерывным мониторингом",
  },
];



export default function HeavyIonProtonContent() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const isRu = lang === "ru";

  const advs = isZh ? coreAdvantagesZh : isRu ? coreAdvantagesRu : coreAdvantages;
  const inds = isZh ? indicationsZh : isRu ? indicationsRu : indications;
  const services = isZh ? treatmentServicesZh : isRu ? treatmentServicesRu : treatmentServices;
  const steps = isZh ? processStepsZh : isRu ? processStepsRu : processSteps;
  const stats = isZh ? efficacyStatsZh : isRu ? efficacyStatsRu : efficacyStats;
  const reasons = isZh ? whyChooseZh : isRu ? whyChooseRu : whyChoose;

  return (
    <main
      role="main"
      aria-label="Heavy Ion and Proton Therapy - Advanced Cancer Treatment"
      className="min-h-screen bg-[#F5F7FA] pt-10 pb-20"
    >
      <div className="container-custom">
        {/* HERO */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 mb-6">
            <Icons.activity className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
            {isZh ? "重离子/质子治疗" : isRu ? "Тяжелая ионно-протонная терапия" : "Heavy Ion/Proton Therapy"}
          </h1>
          <p className="text-xl text-[#1B4D3E] font-medium mb-4">
            {isZh
              ? "精准\"定向爆破\"肿瘤，守护生命之光"
              : isRu ? "Точный «целевой снос» опухолей, охраняющий свет жизни" : "Precision \"Targeted Demolition\" of Tumors, Guarding the Light of Life"}
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {isZh
              ? "重离子（碳离子）和质子治疗是目前国际公认最先进的肿瘤放射治疗技术。精准集中于肿瘤，实现亚毫米级的\"定点爆破\"，同时最大限度地保护周边正常组织，显著降低治疗副作用。中国已在粒子放疗领域跻身国际先进行列，成为全球重离子技术临床应用创新的领跑者。"
              : isRu ? "Тяжелые ионы (углерод-ионная) и протонная терапия признаны на международном уровне как самые передовые технологии опухолевой лучевой терапии. Концентрируется на опухолях, достигая субмиллиметрового «целевого сноса», при этом максимально защищая окружающие нормальные ткани и значительно снижая побочные эффекты лечения. Китай присоединился к международным передовым рядам в области радиотерапии частиц и стал мировым лидером в области инноваций в области применения тяжелых ионов в клинических условиях." : "Heavy ion (carbon ion) and proton therapy are internationally recognized as the most advanced tumor radiotherapy technologies. Precisely concentrated on tumors, achieving sub-millimeter \"targeted demolition\" while maximizing protection of surrounding normal tissue and significantly reducing treatment side effects. China has joined the international advanced ranks in particle radiotherapy and become a global leader in heavy ion clinical application innovation."}
          </p>
        </div>

        {/* CORE ADVANTAGES */}
        <section className="bg-white rounded-2xl p-10 shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#1A1A2E]">
            {isZh ? "核心优势 – 为什么选择中国？" : isRu ? "Основные преимущества: почему выбирают Китай?" : "Core Advantages – Why Choose China?"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advs.map((adv) => (
              <div
                key={adv.title}
                className="p-6 bg-[#F5F7FA] rounded-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg flex-shrink-0">
                    <Icons.award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A2E] mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {adv.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INDICATIONS */}
        <section className="bg-white rounded-2xl p-10 shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#1A1A2E]">
            {isZh ? "适应症 – 哪些肿瘤适合治疗？" : isRu ? "Показания – какие опухоли подходят?" : "Indications – Which Tumors Are Suitable?"}
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            {isZh
              ? "重离子和质子治疗尤其适合对常规放疗不敏感、位于重要器官附近或儿童/青少年患者。目前可收治50余种常见肿瘤疾病。"
              : isRu ? "Тяжелая ионная и протонная терапия особенно подходит для опухолей, устойчивых к обычной лучевой терапии, расположенных вблизи жизненно важных органов, или педиатрических / подростковых пациентов. В настоящее время лечит более 50 типов распространенных опухолей." : "Heavy ion and proton therapy are especially suitable for tumors resistant to conventional radiotherapy, located near vital organs, or pediatric/adolescent patients. Currently treats over 50 types of common tumors."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inds.map((ind) => (
              <div key={ind.title} className={`p-6 ${ind.bgClass} rounded-xl`}>
                <h3
                  className={`font-bold ${ind.titleClass} mb-4 flex items-center`}
                >
                  <ind.icon className="h-5 w-5 mr-2" />
                  {ind.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {ind.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className={`${ind.bulletClass} mr-2`}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6 text-center">
            {isZh
              ? "注：是否适合接受重离子/质子治疗，需由多学科专家团队进行个体化评估。"
              : isRu ? "Примечание: Пригодность для терапии тяжелыми ионами/протонами требует индивидуальной оценки многопрофильной группой экспертов." : "Note: Suitability for heavy ion/proton therapy requires individualized evaluation by a multidisciplinary expert team."}
          </p>
        </section>

        {/* TREATMENT SERVICES */}
        <section className="bg-white rounded-2xl p-10 shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#1A1A2E]">
            {isZh
              ? "治疗内容（医疗服务部分）"
              : isRu ? "Медицинская помощь (Medical Care)" : "Treatment Services (Medical Care)"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((group) => (
              <div key={group.title}>
                <h3 className="text-lg font-bold text-[#1B4D3E] mb-4 flex items-center">
                  <group.icon className="h-5 w-5 mr-2" />
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start text-gray-700 text-sm"
                    >
                      <span className="text-[#1B4D3E] mr-2 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* TREATMENT PROCESS */}
        <section className="bg-white rounded-2xl p-10 shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#1A1A2E]">
            {isZh
              ? "治疗流程（从初诊至康复）"
              : isRu ? "Процесс лечения (от первичной консультации до восстановления)" : "Treatment Process (From Initial Consultation to Recovery)"}
          </h2>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <Reveal key={step.num} x={i % 2 === 0 ? -20 : 20}>
                <div className="flex items-start space-x-4 p-4 bg-[#F5F7FA] rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center font-bold flex-shrink-0">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-[#1A1A2E]">
                        {step.title}
                      </h3>
                      <span className="text-sm text-[#1B4D3E] font-medium bg-[#1B4D3E]/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            {isZh
              ? "从抵华至完成治疗，全程通常需6–8周。"
              : isRu ? "От прибытия до завершения лечения весь процесс обычно занимает 6-8 недель." : "From arrival to treatment completion, the entire process typically takes 6-8 weeks."}
          </p>
        </section>

        {/* EFFICACY */}
        <section className="bg-gradient-to-br from-[#1B4D3E] to-[#2E7D32] rounded-2xl p-10 shadow-sm mb-12 text-white">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {isZh
              ? "疗效 – 中国临床数据（2026版）"
              : isRu ? "Эффективность: Китайские клинические данные (2026)" : "Efficacy – China Clinical Data (2026 Edition)"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white/10 rounded-xl"
              >
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm opacity-70 mt-6">
            {isZh
              ? "数据来源：上海市质子重离子医院2026版生存报告，截至2026年5月，累计治疗患者9317例"
              : isRu ? "Шанхайский протонный и тяжелый ионный госпиталь 2026 Отчет о выживании, 9317 пациентов, лечившихся по состоянию на май 2026 года" : "Data Source: Shanghai Proton and Heavy Ion Hospital 2026 Survival Report, 9,317 patients treated as of May 2026"}
          </p>
        </section>

        {/* CASE STUDIES */}
        <section className="bg-white rounded-2xl p-10 shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#1A1A2E]">
            {isZh ? "案例展示" : isRu ? "Тематические исследования" : "Case Studies"}
          </h2>
          <div className="space-y-6">
            <Reveal y={20}>
              <div className="p-6 bg-[#F5F7FA] rounded-xl">
                <h3 className="font-bold text-[#1B4D3E] mb-3 flex items-center">
                  <Icons.users className="h-5 w-5 mr-2" />
                  {isZh
                    ? "案例一：伊拉克青年Aron的七千公里希望之旅"
                    : isRu ? "Дело 1: 7000 км пути Арона из Ирака" : "Case 1: Aron's 7,000km Journey of Hope from Iraq"}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {isZh
                    ? "来自伊拉克的Aron罹患脑膜瘤，经历三次开颅手术后肿瘤仍反复复发。根据国际权威NCCN指南推荐，质子治疗被列为肿瘤紧邻脑干、脊髓及视神经等关键区域的脑肿瘤的优先选项。经跨洋视频会诊，中国医院的专家为其制定了精准质子治疗方案。患者顺利完成30次质子放疗后敲响\"康复之鼓\"，\"从伊拉克到中国跨越7000公里的信任，换来的是生命的重生。\""
                    : isRu ? "Арон из Ирака страдал менингиомой, которая повторялась после трех краниотомий. Согласно рекомендациям NCCN, протонная терапия является предпочтительным вариантом для опухолей головного мозга вблизи критических областей. После трансокеанических видеоконсультаций китайские специалисты сформулировали точный план лечения протонами. После завершения 30 сеансов Арон позвонил в «колокол восстановления» — «7000 километров доверия из Ирака в Китай принесли возрождение жизни»." : "Aron from Iraq suffered from meningioma that recurred after three craniotomies. According to NCCN guidelines, proton therapy is the preferred option for brain tumors near critical areas. After transoceanic video consultation, Chinese experts formulated a precise proton treatment plan. After completing 30 sessions, Aron rang the \"recovery bell\" - \"7,000 kilometers of trust from Iraq to China brought a rebirth of life.\""}
                </p>
              </div>
            </Reveal>
            <Reveal y={20}>
              <div className="p-6 bg-[#F5F7FA] rounded-xl">
                <h3 className="font-bold text-[#1B4D3E] mb-3 flex items-center">
                  <Icons.users className="h-5 w-5 mr-2" />
                  {isZh
                    ? "案例二：印尼罕见脊索瘤患者的中国\"救赎\""
                    : isRu ? "Случай 2: китайское «спасение» индонезийского пациента Чордомы" : "Case 2: Indonesian Chordoma Patient's Chinese \"Salvation\""}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {isZh
                    ? "30多岁的印尼青年Rafi确诊脊索瘤（发病率仅百万分之一）后，辗转印尼、马来西亚均被告知建议质子治疗，但当地并无该设备。在全球搜索中，他们比较了多个国家的费用后，最终选择了中国医院——总费用不到新加坡的一半。经多学科团队联合制定\"手术+质子\"整合方案，Rafi顺利完成了治疗。"
                    : isRu ? "Рафи, 30-летнему индонезийцу с диагнозом хордома (заболеваемость только одного человека из миллиона), было рекомендовано пройти протонную терапию, но в стране не было оборудования. Сравнив затраты по всему миру, они выбрали китайскую больницу — общая стоимость меньше половины Сингапура. Благодаря комплексному плану «хирургия + протон» команды MDT Рафи успешно завершил лечение." : "Rafi, a 30-year-old Indonesian diagnosed with chordoma (incidence of only one in a million), was advised to undergo proton therapy but no equipment was available locally. After comparing costs globally, they chose a Chinese hospital - total cost less than half of Singapore. With an integrated \"surgery + proton\" plan by the MDT team, Rafi successfully completed treatment."}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TREATMENT COST */}
        <section className="bg-white rounded-2xl p-10 shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#1A1A2E]">
            {isZh ? "治疗费用" : isRu ? "Стоимость лечения" : "Treatment Cost"}
          </h2>
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              {isZh
                ? "中国提供质子/重离子治疗的全程特需医疗服务套餐，采用一口价收费模式，涵盖门诊、检查、治疗、药物、高端病房及全程护理，价格透明，无任何隐藏费用。"
                : isRu ? "Китай предлагает комплексные пакеты премиальных медицинских услуг для протонной / тяжелой ионной терапии с прозрачным ценообразованием, охватывающие консультации, обследования, лечение, лекарства, премиальные палаты и полный уход без скрытых сборов." : "China offers all-inclusive premium medical service packages for proton/heavy ion therapy with transparent pricing, covering consultations, examinations, treatment, medications, premium wards, and full nursing care with no hidden fees."}
            </p>
            <div className="inline-block bg-[#1B4D3E]/10 text-[#1B4D3E] px-8 py-4 rounded-xl">
              <span className="text-sm">
                {isZh ? "参考全程治疗费用:" : isRu ? "Общая стоимость лечения:" : "Reference Total Treatment Cost:"}
              </span>
              <span className="text-2xl font-bold ml-2">
                $28,000 – $42,000 USD
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              {isZh
                ? "（具体费用以医院最终评估为准。）"
                : isRu ? "(Окончательные расходы, подлежащие оценке в больнице.)" : "(Actual costs subject to final hospital evaluation.)"}
            </p>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-white rounded-2xl p-10 shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#1A1A2E] flex items-center justify-center">
            <Icons.checkCircle className="h-7 w-7 mr-3 text-[#1B4D3E]" />
            {isZh ? "选择我们的理由" : isRu ? "Почему выбирают нас" : "Why Choose Us"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item) => (
              <Reveal key={item.title} scale={0.95}>
                <div className="p-5 bg-[#F5F7FA] rounded-xl text-center">
                  <h3 className="font-bold text-[#1A1A2E] mb-2 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Reveal y={20}>
          <div className="bg-gradient-to-r from-[#1B4D3E] to-[#2E7D32] rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              {isZh
                ? "开启您的重离子/质子治疗之旅"
                : isRu ? "Начните свое путешествие по тяжелой ионной / протонной терапии" : "Start Your Heavy Ion/Proton Therapy Journey"}
            </h2>
            <p className="mb-6 opacity-90">
              {isZh
                ? "联系我们的专业团队，获取免费远程评估和治疗方案"
                : isRu ? "Свяжитесь с нашей профессиональной командой для бесплатного дистанционного обследования и лечения." : "Contact our professional team for a free remote evaluation and treatment plan"}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-[#1B4D3E] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              {isZh ? "立即咨询" : isRu ? "Свяжитесь с нами сейчас" : "Contact Us Now"}
              <Icons.arrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

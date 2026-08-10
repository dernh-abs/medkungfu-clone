// Precision Oncology Diagnostics project detail page content.
// Bilingual: renders Chinese content when the site language is zh.
"use client";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import {
  Icons,
  type LucideIcon,
} from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";

const heroStats = [
  { value: "7", label: "Operating Hospitals" },
  { value: "1500+", label: "Testing Items" },
  { value: "~20 Types", label: "Covered Disease Types" },
  { value: "CAP+ISO", label: "International Dual Certification" },
];

const heroStatsZh = [
  { value: "7", label: "在运医院" },
  { value: "1500+", label: "检测项目" },
  { value: "近20种", label: "覆盖疾病类型" },
  { value: "CAP+ISO", label: "国际双认证" },
];
const heroStatsRu = [
  { value: "7", label: "Операционные больницы" },
  { value: "1500+", label: "Испытания элементов" },
  { value: "~20 типов", label: "Покрытые типы заболеваний" },
  { value: "CAP+ISO", label: "Международная двойная сертификация" },
];



const diagnosticPackages: {
  num: string;
  title: string;
  subtitle: string;
  items: string[];
  warning: string;
  duration: string;
}[] = [
  {
    num: "01",
    title: "Precision Tumor Diagnosis Package",
    subtitle:
      "Cases with imaging abnormalities, pathological suspicions, recurrence or difficult typing",
    items: [
      "Pathology consultation: HE staining + immunohistochemistry (qualitative pathology review)",
      "600+ gene NGS testing: tumor molecular typing, prognosis assessment",
      "Integrated diagnostic report: combining molecular diagnosis results with pathological conclusions",
      "Treatment direction reference suggestions: providing recommendations based on typing results",
    ],
    warning:
      "Test results do not replace pathological diagnosis; final diagnosis requires combination of imaging and clinical doctor's recommendations",
    duration:
      "Reference Duration: Pathology consultation 5-7 working days; NGS genetic testing 10-15 working days",
  },
  {
    num: "02",
    title: "Tumor Genetic Risk Assessment Package",
    subtitle:
      "Individuals or family members with family history, early-onset tumor history, or previous tumor history",
    items: [
      "Tumor genetic susceptibility gene testing (900+ gene panel)",
      "Covers genetic susceptibility genes related to hematologic tumors and solid tumors (NCCN/CSCO recommended)",
      "Genetic risk assessment report and follow-up recommendation plan",
    ],
    warning:
      "This package is for genetic risk assessment; negative results do not mean no risk; further evaluation by clinical doctors is required",
    duration: "Reference Duration: 18-23 working days",
  },
  {
    num: "03",
    title: "Difficult Tumor Second Opinion Package",
    subtitle:
      "Patients with unclear diagnoses from other hospitals who wish to obtain a second opinion",
    items: [
      "Review of original pathological materials (slides, paraffin embedding, pathology reports)",
      "Pathology slide re-review (HE + immunohistochemistry, supplementary items if original testing is insufficient)",
      "Molecular testing completion (supplement NGS, FISH, etc. if original testing is incomplete)",
      "Multidisciplinary expert opinion (integrating all test results, providing clinical recommendations)",
    ],
    warning:
      "The opinion letter is for reference only and does not replace the formal pathological diagnosis report; final diagnosis still requires clinical doctor confirmation",
    duration:
      "Reference Duration: Issued in stages based on material completeness; please confirm specific timeline with staff",
  },
  {
    num: "04",
    title: "Pre-treatment Molecular Typing Package",
    subtitle:
      "Patients with confirmed tumors preparing to select medications or develop treatment plans",
    items: [
      "800+ gene NGS (ctDNA blood or tissue): full tumor target and typing analysis",
      "MSI/TMB testing: potential benefit assessment for immunotherapy",
      "PD-L1 protein expression: reference for immune checkpoint antibody medication",
      "Drug targets, drug resistance, PARP inhibitor-related gene analysis",
      "Organoid chip drug sensitivity testing (optional): personalized medication reference",
    ],
    warning:
      "Test results provide molecular reference basis for treatment decisions; final medication plan requires confirmation by attending physician",
    duration:
      "Reference Duration: NGS 10-20 working days; PD-L1 8 working days; organoid chip 15-20 working days",
  },
];

const diagnosticPackagesZh: {
  num: string;
  title: string;
  subtitle: string;
  items: string[];
  warning: string;
  duration: string;
}[] = [
  {
    num: "01",
    title: "肿瘤精准诊断包",
    subtitle: "已有影像异常、病理疑点、复发或难分型病例",
    items: [
      "病理会诊：HE染色 + 免疫组化（定性病理复阅）",
      "600+基因NGS检测：肿瘤分子分型、预后评估",
      "整合诊断报告：融合分子诊断结果与病理结论",
      "治疗方向参考建议：依据分型结果提供参考意见",
    ],
    warning: "检测结果不替代病理诊断，需结合影像及临床医生建议做出最终诊断",
    duration: "参考周期：病理会诊 5–7 工作日；NGS基因检测 10–15 工作日",
  },
  {
    num: "02",
    title: "肿瘤遗传风险评估包",
    subtitle: "有家族史、早发肿瘤史、既往肿瘤史的个人或家属",
    items: [
      "肿瘤遗传易感基因检测（900+基因面板）",
      "覆盖血液肿瘤及实体肿瘤相关遗传易感基因（NCCN/CSCO推荐）",
      "遗传风险评估报告及随访建议方案",
    ],
    warning: "本包用于遗传风险评估，阴性结果不等于无风险；需结合临床医生作进一步评估",
    duration: "参考周期：18–23 工作日",
  },
  {
    num: "03",
    title: "疑难肿瘤二次会诊包",
    subtitle: "外院诊断不明确、希望获得第二意见的患者",
    items: [
      "原始病理材料复核（切片、石蜡包埋、病理报告）",
      "病理切片复阅（HE + 免疫组化，如原有检测不足可补充项目）",
      "分子检测补全（如原有检测不完整，补充NGS、FISH等）",
      "多学科专家意见书（整合所有检测结果、提供临床建议）",
    ],
    warning: "意见书为参考性资料，不取代正式病理诊断报告；最终诊断仍需临床医生确认",
    duration: "参考周期：根据材料完整度分段出具，具体周期请与工作人员确认",
  },
  {
    num: "04",
    title: "治疗前分子分型包",
    subtitle: "已确诊肿瘤、准备选药或制定治疗方案的患者",
    items: [
      "800+基因NGS（ctDNA血液或组织）：全肿瘤靶点及分型分析",
      "MSI / TMB检测：免疫治疗潜在获益评估",
      "PD-L1蛋白表达：免疫检查点抗体用药参考",
      "药物靶点、耐药性、PARP抑制剂相关基因分析",
      "类器官芯片药敏测试（可选）：个体化用药参考",
    ],
    warning: "检测结果为治疗决策提供分子参考依据，最终用药方案需由主治医生确认",
    duration: "参考周期：NGS 10–20 工作日；PD-L1 8 工作日；类器官芯片 15–20 工作日",
  },
];
const diagnosticPackagesRu: {
  num: string;
  title: string;
  subtitle: string;
  items: string[];
  warning: string;
  duration: string;
}[] = [
  {
    num: "01",
    title: "Точный пакет диагностики опухоли",
    subtitle:
      "Случаи с аномалиями визуализации, патологическими подозрениями, рецидивами или сложной типизацией",
    items: [
      "Консультация по патологии: окрашивание + иммуногистохимия (качественный обзор патологии)",
      "Тестирование 600+ гена NGS: молекулярная типизация опухоли, оценка прогноза",
      "Интегрированный диагностический отчет: объединение результатов молекулярной диагностики с патологическими выводами",
      "Рекомендации по направлению лечения: предоставление рекомендаций на основе результатов набора текста",
    ],
    warning:
      "Результаты анализов не заменяют патологическую диагностику; окончательный диагноз требует сочетания визуализации и рекомендаций клинического врача.",
    duration:
      "Reference Duration: Pathology consultation 5-7 working days; NGS genetic testing 10-15 working days",
  },
  {
    num: "02",
    title: "Пакет оценки генетического риска опухолей",
    subtitle:
      "Лица или члены семьи с семейной историей, ранней историей опухоли или предыдущей историей опухоли",
    items: [
      "Тестирование гена генетической восприимчивости опухоли (900+ панель генов)",
      "Охватывает гены генетической восприимчивости, связанные с гематологическими опухолями и твердыми опухолями (рекомендуется NCCN / CSCO)",
      "Доклад об оценке генетического риска и план последующих рекомендаций",
    ],
    warning:
      "Этот пакет предназначен для оценки генетического риска; отрицательные результаты не означают отсутствия риска; требуется дальнейшая оценка клиническими врачами.",
    duration: "Reference Duration: 18-23 working days",
  },
  {
    num: "03",
    title: "Трудный пакет второго мнения по опухоли",
    subtitle:
      "Пациенты с неясными диагнозами из других больниц, которые хотят получить второе мнение",
    items: [
      "Обзор оригинальных патологических материалов (слайды, парафиновое встраивание, отчеты о патологии)",
      "Пересмотр слайда патологии (HE + иммуногистохимия, дополнительные предметы, если оригинальное тестирование недостаточно)",
      "Завершение молекулярного тестирования (дополнение NGS, FISH и т. д., если оригинальное тестирование неполное)",
      "Многопрофильное экспертное заключение (интеграция всех результатов анализов, предоставление клинических рекомендаций)",
    ],
    warning:
      "Письмо-обращение является только для справки и не заменяет формальный отчет о патологической диагностике; окончательный диагноз все еще требует подтверждения клинического врача.",
    duration:
      "Reference Duration: Issued in stages based on material completeness; please confirm specific timeline with staff",
  },
  {
    num: "04",
    title: "Предоперационный пакет молекулярного типирования",
    subtitle:
      "Пациенты с подтвержденными опухолями готовятся к выбору лекарств или разработке планов лечения",
    items: [
      "800+ ген NGS (кровь или ткань ctDNA): полный анализ опухоли и типизации",
      "Тестирование MSI/TMB: оценка потенциальной пользы для иммунотерапии",
      "Экспрессия белка PD-L1: ссылка на иммуноконтрольный препарат против антител",
      "Цели лекарств, лекарственная устойчивость, анализ генов, связанных с ингибитором PARP",
      "Тест на чувствительность к органоидным чипам (необязательно): персонализированная ссылка на лекарства",
    ],
    warning:
      "Результаты испытаний обеспечивают молекулярную основу для принятия решений о лечении; окончательный план лечения требует подтверждения лечащим врачом.",
    duration:
      "Reference Duration: NGS 10-20 working days; PD-L1 8 working days; organoid chip 15-20 working days",
  },
];



const pricingRows: { item: string; price: string }[] = [
  { item: "Pathology Consultation (Standard)", price: "$1,800" },
  { item: "Pathology Consultation (Expert Level)", price: "$2,300" },
  { item: "Pan-Cancer 600+ Gene Panel (Tissue)", price: "$2,500" },
  { item: "Pan-Cancer 800+ Gene Panel (Tissue)", price: "$3,900" },
  { item: "Pan-Cancer 800+ Gene Panel (ctDNA Blood)", price: "$4,300" },
  { item: "321 Gene Panel (Tissue)", price: "$2,700" },
  { item: "321 Gene Panel (ctDNA Blood)", price: "$3,100" },
  { item: "PD-L1 Protein Expression Testing", price: "$1,000" },
  { item: "Tumor Fusion/Rearrangement RNA Testing", price: "$2,500" },
  { item: "Whole Exome Sequencing (WES, Tissue)", price: "$6,000" },
  { item: "Hematologic Tumor Deep Sequencing (339 Genes)", price: "$1,900" },
  { item: "Tumor Transcriptome Sequencing (RNA-seq)", price: "$1,700" },
  { item: "Organoid Chip Drug Sensitivity Testing", price: "$6,400" },
];

const pricingRowsZh: { item: string; price: string }[] = [
  { item: "病理会诊（标准）", price: "$1,800" },
  { item: "病理会诊（专家级）", price: "$2,300" },
  { item: "Pan-Cancer 600+基因面板（组织）", price: "$2,500" },
  { item: "Pan-Cancer 800+基因面板（组织）", price: "$3,900" },
  { item: "Pan-Cancer 800+基因面板（ctDNA 血液）", price: "$4,300" },
  { item: "321基因面板（组织）", price: "$2,700" },
  { item: "321基因面板（ctDNA 血液）", price: "$3,100" },
  { item: "PD-L1 蛋白表达检测", price: "$1,000" },
  { item: "肿瘤融合 / 重排 RNA 检测", price: "$2,500" },
  { item: "全外显子组测序（WES，组织）", price: "$6,000" },
  { item: "血液肿瘤深度测序（339 基因）", price: "$1,900" },
  { item: "肿瘤转录组测序（RNA-seq）", price: "$1,700" },
  { item: "类器官芯片药敏测试", price: "$6,400" },
];
const pricingRowsRu: { item: string; price: string }[] = [
  { item: "Консультация по патологии (стандартная)", price: "$1,800" },
  { item: "Консультация по патологии (экспертный уровень)", price: "$2,300" },
  { item: "Пан-рак 600+ Генная панель (Тиссу)", price: "$2,500" },
  { item: "Пан-рак 800+ Генная панель (Тиссу)", price: "$3,900" },
  { item: "Пан-рак 800+ Генная панель (ктДНК крови)", price: "$4,300" },
  { item: "321 Gene Panel (Тиссум)", price: "$2,700" },
  { item: "321 Gene Panel (ктДНК крови)", price: "$3,100" },
  { item: "Тестирование экспрессии белка PD-L1", price: "$1,000" },
  { item: "Тестирование РНК на слияние опухолей/перестройку", price: "$2,500" },
  { item: "Секвенирование всего экзома (WES, Tissue)", price: "$6,000" },
  { item: "Гематологическое глубокое секвенирование опухолей (339 генов)", price: "$1,900" },
  { item: "Секвенирование транскриптома опухоли (RNA-seq)", price: "$1,700" },
  { item: "Органоидный чип тест на чувствительность", price: "$6,400" },
];



const capabilities: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Icons.award,
    title: "CAP + ISO15189 International Dual Certification",
    description:
      "Dual certification by the College of American Pathologists (CAP) and International Organization for Standardization (ISO15189), one of the highest standards for laboratory quality worldwide. Each testing item undergoes strict internal validation and multidisciplinary practice to ensure result reliability.",
  },
  {
    icon: Icons.testTube,
    title: "1500+ Testing Items Covering Hematologic & Solid Tumors",
    description:
      "Covers hematologic tumors (lymphoma, multiple myeloma, leukemia, etc.) and nearly 20 types of solid tumors, from pathology consultation to whole exome sequencing, available as individual items or packages.",
  },
  {
    icon: Icons.globe,
    title: "Remote Specimen Mailing Service Supported",
    description:
      "For overseas patients unable to visit in person, MedKungfu can coordinate mailing of paraffin-embedded samples or pathology slides for testing; no need to travel to Beijing in person.",
  },
  {
    icon: Icons.microscope,
    title: "Organoid Chip Platform (Optional Enhancement)",
    description:
      "The organoid chip platform can perform personalized drug sensitivity testing on tumor tissues, simulating the actual efficacy of various treatment plans, providing more personalized references for treatment decisions.",
  },
];

const capabilitiesZh: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Icons.award,
    title: "CAP + ISO15189 国际双认证",
    description:
      "美国病理学学院（CAP）认可和国际标准化实验室（ISO15189）双认证，是全球实验室质量的最高标准之一。每个检测项目均经内部严格验证和多学科实践，确保结果可靠性。",
  },
  {
    icon: Icons.testTube,
    title: "1500+ 检测项目，覆盖血液肿瘤 + 实体肿瘤",
    description:
      "覆盖血液肿瘤（淋巴瘤、多发性骨髓瘤、白血病等）及近20种实体肿瘤类型，从病理会诊到全外显子组测序均可单项或打包安排。",
  },
  {
    icon: Icons.globe,
    title: "支持远程邮寄标本服务",
    description:
      "对于无法亲自到院的海外患者，可通过MedKungfu协调邮寄石蜡包埋或病理切片进行检测；全程无需亲自赴京就诊。",
  },
  {
    icon: Icons.microscope,
    title: "类器官芯片平台（可选增强）",
    description:
      "类器官芯片平台可对肿瘤组织进行个体化药敏测试，模拟多种治疗方案的实际疗效，为治疗决策提供更多个体化参考。",
  },
];
const capabilitiesRu: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Icons.award,
    title: "CAP + ISO15189 Международная двойная сертификация",
    description:
      "Двойная сертификация Колледжем американских патологов (CAP) и Международной организацией по стандартизации (ISO15189), одним из самых высоких стандартов качества лабораторий во всем мире. Каждый элемент тестирования проходит строгую внутреннюю проверку и многодисциплинарную практику для обеспечения надежности результатов.",
  },
  {
    icon: Icons.testTube,
    title: "1500+ тестовых предметов, охватывающих гематологические и твердые опухоли",
    description:
      "Охватывает гематологические опухоли (лимфома, множественная миелома, лейкемия и т. д.) и почти 20 типов солидных опухолей, от консультации по патологии до полного секвенирования экзомов, доступных в виде отдельных предметов или пакетов.",
  },
  {
    icon: Icons.globe,
    title: "Поддержка удаленной почтовой службы Specimen",
    description:
      "Для иностранных пациентов, не имеющих возможности посетить лично, MedKungfu может координировать рассылку образцов с парафином или слайдов патологии для тестирования; нет необходимости ехать в Пекин лично.",
  },
  {
    icon: Icons.microscope,
    title: "Органоидная чип-платформа (опциональное улучшение)",
    description:
      "Платформа органоидных чипов может выполнять персонализированное тестирование чувствительности к лекарственным средствам на опухолевых тканях, имитируя фактическую эффективность различных планов лечения, предоставляя более персонализированные рекомендации для решений по лечению.",
  },
];



const suitableItems = [
  "Imaging shows mass or nodule, nature not yet clear, needs further typing",
  "External hospital pathology report indicates high-grade or complex subtype, seeking professional review opinion",
  "Confirmed malignant tumor, wishing to understand targets and immunotherapy-related biomarkers",
  "Recurrence or drug resistance after first-line treatment, need to re-evaluate molecular typing to adjust plan",
  "Family history of tumors, wishing to understand personal genetic susceptibility risk and develop follow-up plan",
  "Unclear diagnosis at other institutions, seeking independent second opinion from professional precision diagnostics center",
];

const suitableItemsZh = [
  "影像显示占位或结节，尚未明确性质，需进一步分型",
  "外院病理报告提示高级别或复杂亚型，希望得到专业复阅意见",
  "已确诊恶性肿瘤，希望了解靶点与免疫治疗相关生物标志物",
  "一线治疗后复发或耐药，需重新评估分子分型以调整方案",
  "有肿瘤家族史，希望了解个人遗传易感风险并制定随访计划",
  "在其他机构诊断不明确，希望得到专业精准诊断中心的独立第二意见",
];
const suitableItemsRu = [
  "Изображение показывает массу или узелок, природа еще не ясна, нуждается в дальнейшей типизации.",
  "Отчет о внешней патологии больницы указывает на высококачественный или сложный подтип, запрашивая мнение профессионального обзора.",
  "Подтвержденная злокачественная опухоль, желающая понять цели и связанные с иммунотерапией биомаркеры",
  "Рецидив или лекарственная устойчивость после лечения первой линии, необходимо переоценить молекулярную типизацию для корректировки плана.",
  "Семейная история опухолей, желающие понять личный генетический риск восприимчивости и разработать план наблюдения",
  "Неясная диагностика в других учреждениях, получение независимого второго мнения от профессионального центра точной диагностики",
];



const processSteps: {
  num: string;
  title: string;
  description: string;
  duration: string;
}[] = [
  {
    num: "1",
    title: "Data Organization & Preliminary Assessment",
    description:
      "Submit medical records, pathology reports and imaging data; MedKungfu assists in organizing and transferring to diagnostic center for preliminary assessment to confirm suitable package combination.",
    duration: "3-5 working days",
  },
  {
    num: "2",
    title: "Expert Confirmation of Plan",
    description:
      "Diagnostic center experts conduct remote consultation to confirm specific testing item combinations and specimen requirements, providing patients with required materials list.",
    duration: "5-7 working days",
  },
  {
    num: "3",
    title: "Specimen Mailing (Paraffin Embedding / Slides)",
    description:
      "For overseas patients unable to visit in person, international mailing of paraffin-embedded samples or pathology slides is available; MedKungfu assists in confirming mailing requirements and全程 tracking.",
    duration: "Depends on logistics",
  },
  {
    num: "4",
    title: "Laboratory Testing & Report",
    description:
      "Diagnostic center laboratory receives specimens and conducts testing, issuing molecular diagnostic reports within the cycle. If additional specimens are needed or quality is substandard, notification will be provided immediately.",
    duration: "Depends on testing items",
  },
  {
    num: "5",
    title: "Report Interpretation & Follow-up",
    description:
      "Specialists provide clinical recommendations based on diagnostic results; MedKungfu assists with translation and summary, and coordinates follow-up plans.",
    duration: "After report issuance",
  },
];

const processStepsZh: {
  num: string;
  title: string;
  description: string;
  duration: string;
}[] = [
  {
    num: "1",
    title: "资料整理与初步评估",
    description:
      "提交病历、病理报告及影像资料，MedKungfu协助整理并转交诊断中心初步评估，确认适合的套餐组合。",
    duration: "3-5个工作日",
  },
  {
    num: "2",
    title: "专家确认方案",
    description:
      "诊断中心专家远程会诊，确认具体检测项目组合及标本要求，将所需材料清单反馈给患者。",
    duration: "5-7个工作日",
  },
  {
    num: "3",
    title: "标本邮寄（石蜡包埋 / 切片）",
    description:
      "对于无法亲自到院的海外患者，可通过国际邮寄石蜡包埋或病理切片进行检测；MedKungfu协助确认邮寄要求和全程追踪。",
    duration: "视物流情况而定",
  },
  {
    num: "4",
    title: "实验室检测与报告",
    description:
      "诊断中心实验室接收标本并开展检验，周期内出具分子诊断报告。如需补标本或质量不达标，会第一时间通知。",
    duration: "依检测项目而定",
  },
  {
    num: "5",
    title: "报告解读与后续随访",
    description:
      "专科专家就诊断结果给出临床建议；MedKungfu协助翻译与汇总，并协调后续随访计划。",
    duration: "报告出具后",
  },
];
const processStepsRu: {
  num: string;
  title: string;
  description: string;
  duration: string;
}[] = [
  {
    num: "1",
    title: "Организация данных и предварительная оценка",
    description:
      "Подавать медицинские записи, отчеты о патологии и данные визуализации; MedKungfu помогает в организации и передаче в диагностический центр для предварительной оценки для подтверждения подходящей комбинации пакетов.",
    duration: "3-5 рабочих дней",
  },
  {
    num: "2",
    title: "Экспертное подтверждение плана",
    description:
      "Специалисты диагностического центра проводят дистанционную консультацию для подтверждения конкретных комбинаций тестов и требований к образцам, предоставляя пациентам необходимый список материалов.",
    duration: "5-7 рабочих дней",
  },
  {
    num: "3",
    title: "Почтовые рассылки (встраивание парафинов / слайды)",
    description:
      "Для иностранных пациентов, не имеющих возможности посетить их лично, доступна международная рассылка образцов с парафином или слайдов патологии; MedKungfu помогает подтвердить требования к рассылке и отслеживанию.",
    duration: "Зависит от логистики",
  },
  {
    num: "4",
    title: "Лабораторные испытания и отчет",
    description:
      "Диагностический центр лаборатории получает образцы и проводит тестирование, выдавая молекулярно-диагностические отчеты в рамках цикла. Если необходимы дополнительные образцы или качество не соответствует стандартам, уведомление будет предоставлено немедленно.",
    duration: "Зависит от тестовых элементов",
  },
  {
    num: "5",
    title: "Интерпретация доклада и последующие меры",
    description:
      "Специалисты предоставляют клинические рекомендации на основе результатов диагностики; MedKungfu помогает с переводом и обобщением и координирует планы последующего наблюдения.",
    duration: "После выпуска доклада",
  },
];



const whyUs: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.fileText,
    title: "Medical Record Organization & Translation",
    description:
      "Bilingual professional coordinators assist in organizing medical record materials, ensuring barrier-free communication between patients and diagnostic teams.",
  },
  {
    icon: Icons.globe,
    title: "Specimen Mailing Coordination",
    description:
      "Assists in confirming international mailing requirements and quality control standards, coordinating with local hospitals for slide/paraffin embedding discharge procedures.",
  },
  {
    icon: Icons.checkCircle,
    title: "Report Chinese Interpretation",
    description:
      "Diagnostic reports are primarily issued in Chinese; MedKungfu can arrange specialist-level interpretation of reports to ensure patients fully understand the results.",
  },
  {
    icon: Icons.arrowRight,
    title: "Subsequent Treatment Referral",
    description:
      "If patients wish to pursue further treatment (CAR-T therapy, neurosurgery, bone marrow transplantation, etc.), internal green channel referrals can be arranged.",
  },
];

const whyUsZh: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.fileText,
    title: "病案整理与翻译",
    description: "双语专业协调员协助整理病历资料，确保患者与诊断团队零障碍沟通。",
  },
  {
    icon: Icons.globe,
    title: "标本邮寄协调",
    description:
      "协助确认国际邮寄要求和质控标准，配合当地医院安排切片 / 石蜡包埋出院手续。",
  },
  {
    icon: Icons.checkCircle,
    title: "报告中文解读",
    description:
      "诊断报告以中文出具为主，MedKungfu可协助安排专科层面对报告进行解读，确保患者完全理解结果内容。",
  },
  {
    icon: Icons.arrowRight,
    title: "后续诊疗转介",
    description:
      "如患者希望进一步就诊（CAR-T治疗、神经外科、骨髓移植等），可协助安排内部绿色通道转介。",
  },
];
const whyUsRu: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.fileText,
    title: "Организация медицинской документации и перевод",
    description:
      "Двуязычные профессиональные координаторы помогают в организации медицинских материалов, обеспечивая безбарьерную связь между пациентами и диагностическими группами.",
  },
  {
    icon: Icons.globe,
    title: "Координация рассылки Specimen",
    description:
      "Оказывает помощь в подтверждении международных требований к почтовой рассылке и стандартов контроля качества, координируя с местными больницами процедуры выписки слайдов/парафинов.",
  },
  {
    icon: Icons.checkCircle,
    title: "Китайский интерпретатор",
    description:
      "Диагностические отчеты в основном выпускаются на китайском языке; MedKungfu может организовать интерпретацию отчетов на уровне специалистов, чтобы пациенты полностью понимали результаты.",
  },
  {
    icon: Icons.arrowRight,
    title: "Последующее лечение Реферал",
    description:
      "Если пациенты хотят продолжить лечение (CAR-T, нейрохирургия, трансплантация костного мозга и т.д.), можно организовать внутренние направления по зеленому каналу.",
  },
];



export default function PrecisionOncologyDiagnosticsContent() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const isRu = lang === "ru";

  const stats = isZh ? heroStatsZh : isRu ? heroStatsRu : heroStats;
  const packages = isZh ? diagnosticPackagesZh : isRu ? diagnosticPackagesRu : diagnosticPackages;
  const rows = isZh ? pricingRowsZh : isRu ? pricingRowsRu : pricingRows;
  const caps = isZh ? capabilitiesZh : isRu ? capabilitiesRu : capabilities;
  const suitable = isZh ? suitableItemsZh : isRu ? suitableItemsRu : suitableItems;
  const steps = isZh ? processStepsZh : isRu ? processStepsRu : processSteps;
  const reasons = isZh ? whyUsZh : isRu ? whyUsRu : whyUs;

  return (
    <main
      role="main"
      aria-label="Precision Oncology Diagnostics - Tumor Molecular Diagnosis &amp; Genetic Risk Assessment"
      className="min-h-screen bg-white"
    >
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#1A1A2E] via-[#2D2D44] to-[#1B4D3E] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1B4D3E] rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
              MedKungfu HEALTHCARE · CONCIERGE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isZh ? "精准肿瘤诊断服务" : isRu ? "Точная онкология диагностика" : "Precision Oncology Diagnostics"}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {isZh
                ? "肿瘤分子诊断 · 遗传风险评估 · 精准分型与用药指导"
                : isRu ? "Молекулярная диагностика опухоли · Оценка генетического риска · Точный типирование и руководство по лекарствам" : "Tumor Molecular Diagnosis · Genetic Risk Assessment · Precision Typing & Medication Guidance"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base mb-12">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                {isZh ? "MICM-P整合诊断" : isRu ? "MICM-P интегрированная диагностика" : "MICM-P Integrated Diagnosis"}
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                {isZh ? "CAP + ISO15189双认证" : isRu ? "CAP + ISO15189 Двойная сертификация" : "CAP + ISO15189 Dual Certification"}
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                {isZh ? "1500+检测项目" : isRu ? "1500+ тестовых предметов" : "1500+ Testing Items"}
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="text-2xl md:text-3xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="container-custom">
          <Reveal y={20} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6 text-center">
              {isZh ? "关于高博诊断中心" : isRu ? "Диагностический центр Gaobo" : "About Gaobo Diagnostic Center"}
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-gray-600 leading-relaxed mb-4">
                {isZh
                  ? "我们的合作诊断中心是中国领先的临床导向型肿瘤精准诊断机构，采用国际标准的MICM-P整合诊断模式（形态学、免疫学、细胞遗传学、分子生物学、病理学），专注于血液恶性肿瘤及复杂实体肿瘤的精准诊断、治疗评估与转化研究。"
                  : isRu ? "Наш партнерский диагностический центр является ведущим клинически ориентированным учреждением точной онкологии в Китае, приняв международную стандартную модель интегрированной диагностики MICM-P (Морфология, иммунология, цитогенетика, молекулярная биология, патология), уделяя особое внимание точной диагностике, оценке лечения и трансляционным исследованиям гематологических злокачественных новообразований и сложных солидных опухолей." : "Our partner diagnostic center is China's leading clinically-oriented precision oncology diagnostics institution, adopting the international standard MICM-P integrated diagnosis model (Morphology, Immunology, Cytogenetics, Molecular Biology, Pathology), focusing on precision diagnosis, treatment evaluation and translational research for hematologic malignancies and complex solid tumors."}
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {isZh
                  ? "诊断中心覆盖北京、上海、广东三大区域，拥有多家参考实验室及中心实验室，实验室总面积超7000平方米。核心团队均拥有超30年检验与诊断研究经验，每年开展约30个研发项目，拥有十余项实用新型专利。"
                  : isRu ? "Диагностический центр охватывает три основных региона: Пекин, Шанхай и Гуандун, с несколькими справочными лабораториями и центральными лабораториями, общей площадью более 7000 квадратных метров. Основная команда имеет более чем 30-летний опыт тестирования и диагностических исследований, проводя около 30 научно-исследовательских проектов ежегодно, с более чем десятью патентами на полезные модели." : "The diagnostic center covers three major regions: Beijing, Shanghai, and Guangdong, with multiple reference laboratories and central laboratories, totaling over 7,000 square meters. The core team has over 30 years of testing and diagnostic research experience, conducting approximately 30 R&D projects annually, with more than ten utility model patents."}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {isZh
                  ? "对于无法亲自到院的海外患者，诊断中心支持远程服务：可通过邮寄石蜡包埋或病理切片的方式提交病理会诊及基因检测申请。"
                  : isRu ? "Для иностранных пациентов, не имеющих возможности посетить их лично, диагностический центр поддерживает удаленные услуги: консультации по патологии и генетические тесты могут быть представлены путем отправки образцов с парафином или слайдов патологии." : "For overseas patients unable to visit in person, the diagnostic center supports remote services: pathology consultation and genetic testing applications can be submitted by mailing paraffin-embedded samples or pathology slides."}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section className="py-8 bg-yellow-50">
        <div className="container-custom">
          <Reveal
            y={20}
            className="max-w-4xl mx-auto bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-r-xl"
          >
            <div className="flex items-start">
              <Icons.alertCircle className="text-yellow-600 mr-4 flex-shrink-0 mt-1 h-6 w-6" />
              <div>
                <h3 className="font-bold text-yellow-800 mb-2">
                  {isZh ? "重要说明" : isRu ? "Важное уведомление" : "Important Notice"}
                </h3>
                <p className="text-yellow-700 text-sm leading-relaxed">
                  {isZh
                    ? "本诊断服务用于肿瘤风险评估和精准诊断，不替代临床诊断。所有检测结果均需结合病理、影像及临床医生综合评估，方可作为诊断依据。阴性结果不等于无风险。"
                    : isRu ? "Данная диагностическая услуга предназначена для оценки риска развития опухоли и точной диагностики, а не для замены клинической диагностики. Все результаты теста должны сочетаться с патологией, визуализацией и комплексной клинической оценкой врача, чтобы служить диагностической основой. Отрицательные результаты не означают отсутствия риска." : "This diagnostic service is for tumor risk assessment and precision diagnosis, not replacing clinical diagnosis. All test results must be combined with pathology, imaging and comprehensive clinical doctor evaluation to serve as diagnostic basis. Negative results do not mean no risk."}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <Reveal y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-4">
              {isZh ? "四大精准诊断套餐" : isRu ? "Четыре точных диагностических пакета" : "Four Precision Diagnostic Packages"}
            </h2>
          </Reveal>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            {isZh
              ? "根据患者就诊路径与现有标本情况，诊断中心提供定制化精准诊断方案。以下四种套餐分别对应不同阶段的诊断需求，可单项选择或组合使用。"
              : isRu ? "На основе путей посещения пациента и существующих условий образца диагностический центр предоставляет индивидуальные планы точной диагностики. Следующие четыре упаковки соответствуют различным этапам диагностических потребностей и могут быть выбраны индивидуально или использованы в комбинации." : "Based on patient visit pathways and existing specimen conditions, the diagnostic center provides customized precision diagnostic plans. The following four packages correspond to different stages of diagnostic needs and can be selected individually or used in combination."}
          </p>
          <div className="space-y-8">
            {packages.map((pkg) => (
              <Reveal
                key={pkg.num}
                y={30}
                className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {pkg.num}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-gray-600 mb-4 italic">{pkg.subtitle}</p>
                    <ul className="space-y-3 mb-4">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex items-start">
                          <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                      <p className="text-sm text-yellow-800">
                        <span className="font-bold">⚠️ </span>
                        {pkg.warning}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-sm text-[#1B4D3E]">
                      <Icons.clock className="mr-2 h-4 w-4" />
                      {pkg.duration}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="container-custom">
          <Reveal y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-4">
              {isZh
                ? "主要检测项目参考价格"
                : isRu ? "Справочные цены на основные тестовые предметы" : "Reference Prices for Major Testing Items"}
            </h2>
          </Reveal>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            {isZh
              ? "以下为主要单项检测的参考价格（美元），实际费用因样本类型及组合方案有所差异。FFPE石蜡块样本另加基础处理费 $310 + 每块 $20。套餐价格请联系咨询。"
              : isRu ? "Ниже приведены справочные цены на основные отдельные элементы тестирования (USD). Фактические затраты варьируются в зависимости от типа выборки и планов комбинации. FFPE-парафиновые пробы несут дополнительную базовую плату за обработку в размере $310 + $20 за блок. Пожалуйста, свяжитесь с нами для получения пакета цен." : "The following are reference prices for major individual testing items (USD). Actual costs vary depending on sample type and combination plans. FFPE paraffin block samples incur an additional basic processing fee of $310 + $20 per block. Please contact us for package pricing."}
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-2 bg-[#1B4D3E] text-white">
                <div className="p-6 font-bold">
                  {isZh ? "检测项目" : isRu ? "Испытание элемента" : "Testing Item"}
                </div>
                <div className="p-6 font-bold text-center">
                  {isZh ? "参考价格（USD）" : isRu ? "Цена ссылки (USD)" : "Reference Price (USD)"}
                </div>
              </div>
              {rows.map((row, i) => (
                <div
                  key={row.item}
                  className={
                    i === rows.length - 1
                      ? "grid grid-cols-2"
                      : "grid grid-cols-2 border-b border-gray-100"
                  }
                >
                  <div className="p-6 font-medium text-[#1A1A2E]">
                    {row.item}
                  </div>
                  <div className="p-6 text-center text-[#1B4D3E] font-bold">
                    {row.price}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6 text-center">
              {isZh
                ? "* 以上价格以美元计价，仅供参考；最终报价以实验室确认为准。MedKungfu可协助安排报价及付款流程。"
                : isRu ? "* Вышеуказанные цены указаны только в долларах США; окончательные котировки подлежат лабораторному подтверждению. MedKungfu может помочь в организации котировок и процессах оплаты." : "* The above prices are in USD for reference only; final quotes are subject to laboratory confirmation. MedKungfu can assist with quote arrangement and payment processes."}
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <Reveal y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-4">
              {isZh ? "技术能力与资质" : isRu ? "Технические возможности и квалификации" : "Technical Capabilities & Qualifications"}
            </h2>
          </Reveal>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            {isZh
              ? "MICM-P整合诊断是本次合作诊断中心的核心方法论：形态学（M）+ 免疫学（I）+ 细胞遗传学（C）+ 分子生物学（M）+ 病理学（P）各维度协同诊断，而非单一检测指标。这一模式可有效减少误诊漏诊风险，并为病情复杂或少见的患者提供更准确的诊断方向。"
              : isRu ? "Интегрированная диагностика MICM-P является основной методологией этого партнерского диагностического центра: морфология (M) + иммунология (I) + цитогенетика (C) + молекулярная биология (M) + патология (P) совместная диагностика по всем измерениям, а не отдельные показатели тестирования. Эта модель может эффективно снизить риск неправильной диагностики и пропущенной диагностики, а также обеспечить более точные диагностические направления для пациентов со сложными или редкими состояниями." : "MICM-P integrated diagnosis is the core methodology of this partner diagnostic center: Morphology (M) + Immunology (I) + Cytogenetics (C) + Molecular Biology (M) + Pathology (P) collaborative diagnosis across dimensions, rather than single testing indicators. This model can effectively reduce the risk of misdiagnosis and missed diagnosis, and provide more accurate diagnostic directions for patients with complex or rare conditions."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {caps.map((cap, i) => (
              <Reveal
                key={cap.title}
                x={i % 2 === 0 ? -30 : 30}
                className="bg-[#F5F7FA] rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E]">
                      <cap.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-[#1B4D3E]/20 mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUITABLE */}
      <section id="suitable" className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="container-custom">
          <Reveal y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-12">
              {isZh ? "适合就诊的典型情境" : isRu ? "Типичные сценарии, подходящие для консультации" : "Typical Scenarios Suitable for Consultation"}
            </h2>
          </Reveal>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4">
              {suitable.map((item) => (
                <Reveal
                  key={item}
                  x={-20}
                  className="flex items-start bg-white rounded-xl p-6 shadow-sm"
                >
                  <Icons.checkCircle className="h-5 w-5 text-[#1B4D3E] mr-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <Reveal y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-4">
              {isZh
                ? "服务流程 · 国际患者专属通道"
                : isRu ? "Международный канал для пациентов International Patient Exclusive Channel" : "Service Process · International Patient Exclusive Channel"}
            </h2>
          </Reveal>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            {isZh
              ? "MedKungfu为每位患者提供从材料整理到报告解读的全程协调服务。"
              : isRu ? "MedKungfu предоставляет комплексные координационные услуги для каждого пациента из материальной организации." : "MedKungfu provides comprehensive coordination services for each patient from material organization to report interpretation."}
          </p>
          <div className="space-y-6">
            {steps.map((step) => (
              <Reveal y={20} className="bg-[#F5F7FA] rounded-2xl p-8" key={step.num}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.num}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center text-sm text-[#1B4D3E]">
                      <Icons.clock className="mr-2 h-4 w-4" />
                      {step.duration}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="container-custom">
          <Reveal y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-12">
              {isZh ? "为什么选择 MedKungfu？" : isRu ? "Почему стоит выбрать MedKungfu?" : "Why Choose MedKungfu?"}
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((item) => (
              <Reveal key={item.title} scale={0.95} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E] mb-6">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A1A2E] via-[#2D2D44] to-[#1B4D3E] text-white">
        <div className="container-custom">
          <Reveal y={30} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isZh ? "联系我们 · 一小时内回复" : isRu ? "Свяжитесь с нами · Ответьте в течение одного часа" : "Contact Us · Reply Within One Hour"}
            </h2>
            <p className="text-xl mb-4 text-gray-200">
              {isZh
                ? "开启您的精准肿瘤诊断之旅"
                : isRu ? "Начните свое путешествие в точной онкологии" : "Begin Your Precision Oncology Diagnostics Journey"}
            </p>
            <p className="text-gray-300 mb-8">
              {isZh
                ? "联系我们进行免费初步评估，提交病历及影像资料，我们将安排专家进行远程预筛。"
                : isRu ? "Свяжитесь с нами для бесплатной предварительной оценки. Отправьте свои медицинские записи и данные визуализации, и мы организуем для специалистов проведение удаленного предварительного скрининга." : "Contact us for a free preliminary assessment. Submit your medical records and imaging data, and we will arrange for specialists to conduct remote pre-screening."}
            </p>
            <a
              href="mailto:contact@medkungfu.com"
              className="inline-flex items-center px-8 py-4 bg-white text-[#1B4D3E] rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              contact@medkungfu.com
              <Icons.arrowRight className="ml-2 h-5 w-5" />
            </a>
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-gray-400">MK · EST. 2026</p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

// Functional Neurosurgery Programme project detail page content.
// Bilingual: renders Chinese content when the site language is zh.
"use client";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import {
  Icons,
  type LucideIcon,
} from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";

const heroStats = [
  { value: "3,000+", label: "Surgeries by Dr. Li Jianyu" },
  { value: "60-88%", label: "Tremor Improvement Rate" },
  { value: "5G", label: "World's First Remote Follow-up" },
  { value: "¥170K-600K", label: "Reference Cost Range" },
];

const heroStatsZh = [
  { value: "3,000+", label: "李建宇手术例数" },
  { value: "60-88%", label: "震颤改善有效率" },
  { value: "5G", label: "全球首创远程随访" },
  { value: "¥17-60万", label: "参考费用区间" },
];
const heroStatsRu = [
  { value: "3,000+", label: "Хирургия от доктора Ли Цзянью" },
  { value: "60-88%", label: "Уровень улучшения тремора" },
  { value: "5G", label: "Первый в мире удаленный контроль" },
  { value: "170K-600K", label: "Справочный диапазон затрат" },
];



const techPlatforms: {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}[] = [
  {
    icon: Icons.zap,
    title: "DBS Deep Brain Stimulation",
    description:
      "Implanting microelectrodes in specific brain targets to provide continuous electrical stimulation, correcting abnormal neural circuit function - reversible, adjustable, and long-lasting.",
    items: [
      "Indications: Parkinson's disease, essential tremor, dystonia, epilepsy, etc.",
      "Minimally invasive: Stereotactic technique with minimal trauma and fast recovery",
      "Reversible & adjustable: No brain tissue damage, parameters can be dynamically adjusted based on symptoms",
      "Long-term efficacy: Clinical studies confirm effects lasting over 10 years",
      "60-70% tremor improvement rate, significant motor symptom improvement",
    ],
  },
  {
    icon: Icons.brain,
    title: "MRgFUS Focused Ultrasound",
    description:
      "Multiple ultrasound beams penetrate the skull and precisely focus on brain targets under real-time MRI guidance, producing ablation effects to block abnormal neural signals without any incisions.",
    items: [
      "Indications: Essential tremor, tremor-dominant Parkinson's disease, neuropathic pain",
      "Completely non-invasive: No craniotomy, no incisions, no sutures, extremely low infection risk",
      "Immediate results: Real-time observation of tremor improvement under MRI monitoring, assessment during treatment",
      "Fast recovery: Short hospital stay, quick return to normal life after procedure",
      "Clinical study effectiveness rate 60-88%",
    ],
  },
];

const techPlatformsZh: {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}[] = [
  {
    icon: Icons.zap,
    title: "DBS 深脑刺激",
    description:
      "通过在脑内特定靶点植入微电极，持续给予电刺激，纠正异常神经回路功能——可逆、可调、长效。",
    items: [
      "适应症：帕金森病、特发性震颤、肌张力障碍、癫痫等",
      "微创植入：立体定向微创技术，创伤小、恢复快",
      "可逆可调：不损伤脑组织，参数可随时根据症状动态调整",
      "长期有效：临床研究证实疗效可持续10年以上",
      "震颤改善率60-70%，运动症状显著改善",
    ],
  },
  {
    icon: Icons.brain,
    title: "MRgFUS 磁波刀",
    description:
      "多束超声波穿越颅骨在MRI实时定位下精准聚焦脑内靶点，产生消融效应，无需任何切口即可阻断异常神经信号。",
    items: [
      "适应症：特发性震颤、以震颤为主的帕金森病、神经性疼痛",
      "完全无创：无需开颅、无切口、无缝合，感染风险极低",
      "即时见效：MRI监测下实时观察震颤改善，治疗过程中即可评估",
      "快速恢复：住院时间短，术后可迅速恢复正常生活",
      "临床研究有效率60-88%",
    ],
  },
];
const techPlatformsRu: {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}[] = [
  {
    icon: Icons.zap,
    title: "DBS глубокая стимуляция мозга",
    description:
      "Имплантация микроэлектродов в конкретные мишени мозга для обеспечения непрерывной электрической стимуляции, коррекции аномальной функции нейронных цепей - обратимой, регулируемой и длительной.",
    items: [
      "Показания: болезнь Паркинсона, эссенциальный тремор, дистония, эпилепсия и т.д.",
      "Минимально инвазивный: стереотаксическая техника с минимальной травмой и быстрым восстановлением",
      "Обратимые и регулируемые: без повреждения мозговой ткани параметры могут динамически регулироваться на основе симптомов.",
      "Долгосрочная эффективность: клинические исследования подтверждают эффекты, длящиеся более 10 лет",
      "60-70% улучшение тремора, значительное улучшение двигательных симптомов",
    ],
  },
  {
    icon: Icons.brain,
    title: "Ультразвук, сфокусированный на MRgFUS",
    description:
      "Множественные ультразвуковые лучи проникают в череп и точно фокусируются на мишенях мозга под руководством МРТ в реальном времени, создавая эффекты абляции для блокирования аномальных нейронных сигналов без каких-либо разрезов.",
    items: [
      "Показания: эссенциальный тремор, тремор-доминантная болезнь Паркинсона, нейропатическая боль",
      "Полностью неинвазивный: нет краниотомии, нет разрезов, нет швов, чрезвычайно низкий риск заражения",
      "Немедленные результаты: наблюдение в режиме реального времени за улучшением тремора при мониторинге МРТ, оценка во время лечения",
      "Быстрое восстановление: короткое пребывание в больнице, быстрое возвращение к нормальной жизни после процедуры",
      "Эффективность клинических исследований 60-88%",
    ],
  },
];



const advantages: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.checkCircle,
    title: "Dual Platform Objective Selection",
    description:
      "Equipped with both DBS and MRgFUS, experts make objective judgments based on patient condition, age, and surgical tolerance - DBS for minimally invasive modulation, MRgFUS for those unwilling or unable to undergo surgery.",
  },
  {
    icon: Icons.wifi,
    title: "5G Remote Follow-up",
    description:
      "DBS requires regular parameter adjustments (programming). China's 5G remote programming system allows patients to adjust parameters from home overseas, eliminating long-distance travel. This is currently the world's only systematic remote neuromodulation system.",
  },
  {
    icon: Icons.award,
    title: "Pioneering Expert Team",
    description:
      "Professor Ling Zhipei completed China's first Parkinson's brain pacemaker implantation in 1998 and the world's first 5G remote brain pacemaker surgery in 2019 (3,000 km, only 79ms delay), truly the founder of Chinese functional neurosurgery. Professor Li Jianyu has performed over 3,000 functional neurosurgery procedures.",
  },
  {
    icon: Icons.shield,
    title: "40-60% Lower Cost Than US/Europe",
    description:
      "DBS surgery costs approximately ¥450K-600K (US $100K-150K, equivalent to RMB 720K-1.08M), MRgFUS about ¥174K (US $30K-50K, equivalent to RMB 210K-360K). With comparable or even higher expert levels, choosing China saves significant costs.",
  },
];

const advantagesZh: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.checkCircle,
    title: "双平台客观选择·不以技术限制方案",
    description:
      "同时配备DBS和MRgFUS，由专家根据患者病情、年龄、手术耐受度做客观判断——适合微创调控选DBS，不愿手术或不耐麻醉选MRgFUS。",
  },
  {
    icon: Icons.wifi,
    title: "5G远程随访·术后无需返院",
    description:
      "DBS术后需要定期调整参数（编程），传统上患者必须返回医院。中国的5G远程编程系统让患者在海外家中即可完成参数调整，免去长途奔波。这是目前全球仅有的成体系远程神经调控系统。",
  },
  {
    icon: Icons.award,
    title: "开山级别专家团队",
    description:
      "中国凌至培教授于1998年完成中国首例帕金森脑起搏器植入，2019年完成全球首例5G远程脑起搏器植入手术（3000公里，延迟仅79毫秒），是名副其实的中国功能神经外科奠基人。李建宇教授完成功能神经外科手术逾3,000例，颅神经显微血管减压手术近1,000例。",
  },
  {
    icon: Icons.shield,
    title: "费用较欧美低40-60%",
    description:
      "DBS手术约¥45-60万（美国$10-15万，折合人民币约72-108万），MRgFUS约¥17.4万（美国$3-5万，折合人民币约21-36万）。在专家级别相当甚至更高的前提下，选择中国可节省大量费用。",
  },
];
const advantagesRu: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.checkCircle,
    title: "Двойная платформа объективного выбора",
    description:
      "Оснащенные как DBS, так и MRgFUS, эксперты выносят объективные суждения, основанные на состоянии пациента, возрасте и хирургической толерантности - DBS для минимально инвазивной модуляции, MRgFUS для тех, кто не хочет или не может пройти операцию.",
  },
  {
    icon: Icons.wifi,
    title: "5G удаленное наблюдение",
    description:
      "DBS требует регулярной корректировки параметров (программирование). Китайская система дистанционного программирования 5G позволяет пациентам корректировать параметры из-за рубежа, исключая дальние поездки. В настоящее время это единственная в мире система дистанционной нейромодуляции.",
  },
  {
    icon: Icons.award,
    title: "Пионерская экспертная группа",
    description:
      "Профессор Линг Чжипэй завершил первую в Китае имплантацию кардиостимулятора мозга Паркинсона в 1998 году и первую в мире дистанционную операцию кардиостимулятора мозга 5G в 2019 году (3,000 км, задержка всего 79 мс), действительно основатель китайской функциональной нейрохирургии. Профессор Ли Цзяньюй провел более 3000 функциональных нейрохирургических процедур.",
  },
  {
    icon: Icons.shield,
    title: "40-60% дешевле, чем в США и Европе",
    description:
      "Операция DBS стоит примерно 450K-600K (US $100K-150K, эквивалентно 720K-1.08M юаня), MRgFUS около 174K (US $30K-50K, эквивалентно 210K-360K юаня). При сопоставимом или даже более высоком уровне экспертов выбор Китая экономит значительные затраты.",
  },
];



const suitableItems = [
  "Parkinson's patients: Gradual decline in medication effectiveness, or experiencing motor fluctuations (on-off phenomenon), dyskinesia and other side effects",
  "Essential tremor patients: Hand/head tremors affecting daily life, unsatisfactory medication control",
  "Dystonia patients: Affecting normal limb movement function",
  "Epilepsy patients: Recurrent seizures despite standardized medication treatment",
  "Those seeking minimally invasive, non-invasive or reversible treatment options, concerned about traditional craniotomy",
  "Those who have undergone surgery abroad (DBS) and seek remote follow-up management services",
];

const suitableItemsZh = [
  "帕金森病患者：药物治疗效果逐渐减退，或出现运动波动（开关现象）、异动症等药物副作用",
  "特发性震颤患者：手、头部震颤影响日常生活，药物控制不满意",
  "肌张力障碍患者：影响肢体正常运动功能",
  "癫痫患者：经规范药物治疗仍反复发作",
  "希望微创、无创或可逆治疗方案，对传统开颅手术有顾虑者",
  "已在海外手术（DBS），希望获得远程随访管理服务者",
];
const suitableItemsRu = [
  "Пациенты с болезнью Паркинсона: постепенное снижение эффективности лекарств или двигательные колебания (внешний феномен), дискинезия и другие побочные эффекты",
  "Основные пациенты с тремором: дрожь рук / головы, влияющая на повседневную жизнь, неудовлетворительный контроль над лекарствами",
  "Пациенты с дистонией: влияет на нормальную функцию движения конечностей",
  "Пациенты с эпилепсией: повторяющиеся судороги, несмотря на стандартизированное лечение",
  "Те, кто ищет минимально инвазивные, неинвазивные или обратимые варианты лечения, обеспокоены традиционной краниотомией.",
  "Те, кто перенес операцию за границей (DBS) и ищет удаленные услуги по управлению послеоперационным лечением.",
];



const notSuitableItems = [
  "Patients with metal implants in the brain (some MRI contraindications)",
  "Patients with severe cognitive impairment",
  "Patients with too low skull density score (affects MRgFUS energy focusing)",
  "Patients with severe coagulation disorders",
];

const notSuitableItemsZh = [
  "脑部有金属植入物者（部分MRI禁忌）",
  "严重认知功能障碍患者",
  "颅骨密度评分过低者（影响MRgFUS能量聚焦）",
  "凝血功能严重障碍者",
];
const notSuitableItemsRu = [
  "Пациенты с металлическими имплантатами в головном мозге (некоторые противопоказания МРТ)",
  "Пациенты с тяжелыми когнитивными нарушениями",
  "Пациенты с слишком низкой плотностью черепа (влияет на фокусировку энергии MRgFUS)",
  "Пациенты с тяжелыми нарушениями свертывания",
];



const processSteps: {
  num: string;
  title: string;
  description: string;
  duration: string;
}[] = [
  {
    num: "1",
    title: "Remote Pre-screening Assessment",
    description:
      "Submit imaging data (MRI/CT) and medical records for preliminary assessment by hospital experts to determine suitability for DBS or MRgFUS treatment. No need to fly to China first, reducing unnecessary travel costs.",
    duration: "3-5 working days",
  },
  {
    num: "2",
    title: "Multidisciplinary Consultation",
    description:
      "Specialist team conducts remote consultation, combining disease characteristics, surgical tolerance, and patient preferences to determine the optimal treatment plan (DBS or MRgFUS). MedKungfu assists with translation and communication.",
    duration: "1-2 weeks",
  },
  {
    num: "3",
    title: "On-site Neurological Assessment in China",
    description:
      "After arriving at the Chinese hospital, detailed neurological and anesthesia assessments are conducted to finalize the surgical plan. MedKungfu provides bilingual accompaniment throughout, coordinating accommodation and hospital schedule.",
    duration: "Day 1-2 after arrival",
  },
  {
    num: "4",
    title: "Precision Surgical Treatment",
    description:
      "Expert surgeons perform DBS implantation or MRgFUS ablation. Surgery uses stereotactic precision positioning, and MRgFUS allows real-time observation of tremor improvement during the procedure.",
    duration: "Surgery day",
  },
  {
    num: "5",
    title: "Recovery Management & 5G Remote Follow-up",
    description:
      "Post-operative hospital monitoring and rehabilitation guidance. DBS patients can adjust parameters through the 5G remote programming system after discharge without returning to the hospital. MedKungfu continuously coordinates remote follow-up arrangements to ensure long-term efficacy.",
    duration: "Ongoing post-surgery",
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
    title: "远程预筛评估",
    description:
      "提交影像资料（MRI/CT）及病历，由医院专家进行初步评估，确认是否适合DBS或MRgFUS治疗。无需先飞来中国，降低不必要的出行成本。",
    duration: "3-5个工作日",
  },
  {
    num: "2",
    title: "多学科会诊确认方案",
    description:
      "专科医师团队远程会诊，结合病情特点、手术耐受度、患者意愿，确定最优治疗方案（DBS或MRgFUS）。MedKungfu协助安排翻译与沟通。",
    duration: "1-2周",
  },
  {
    num: "3",
    title: "抵华现场神经学评估",
    description:
      "抵达中国医院后，进行详细的神经科学评估与麻醉评估，最终确认手术方案。MedKungfu全程双语陪诊，协调住宿与院内行程。",
    duration: "抵达后第1-2天",
  },
  {
    num: "4",
    title: "精准手术治疗",
    description:
      "专家主刀，实施DBS植入或MRgFUS消融。手术采用立体定向精准定位，MRgFUS可在术中实时观察震颤改善效果。",
    duration: "手术当天",
  },
  {
    num: "5",
    title: "康复管理与5G远程随访",
    description:
      "术后住院监测与康复指导。DBS患者出院后通过5G远程编程系统进行参数调整，无需返院。MedKungfu持续协调远程随访安排，确保长期疗效。",
    duration: "术后持续",
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
    title: "Удаленная предварительная оценка скрининга",
    description:
      "Предоставить данные визуализации (МРТ/КТ) и медицинские записи для предварительной оценки специалистами больницы для определения пригодности для лечения DBS или MRgFUS. Нет необходимости лететь в Китай первым, что снижает ненужные расходы на поездки.",
    duration: "3-5 рабочих дней",
  },
  {
    num: "2",
    title: "Многопрофильная консультация",
    description:
      "Команда специалистов проводит дистанционную консультацию, сочетая характеристики заболевания, хирургическую толерантность и предпочтения пациента для определения оптимального плана лечения (DBS или MRgFUS). MedKungfu помогает в переводе и общении.",
    duration: "1-2 недели",
  },
  {
    num: "3",
    title: "Неврологическая оценка на месте в Китае",
    description:
      "После прибытия в китайскую больницу проводятся подробные неврологические и анестезирующие оценки для завершения хирургического плана. MedKungfu обеспечивает двуязычное сопровождение, координируя проживание и график больниц.",
    duration: "День 1-2 после прибытия",
  },
  {
    num: "4",
    title: "Точное хирургическое лечение",
    description:
      "Экспертные хирурги выполняют имплантацию DBS или абляцию MRgFUS. Хирургия использует стереотаксическое точное позиционирование, а MRgFUS позволяет в режиме реального времени наблюдать за улучшением тремора во время процедуры.",
    duration: "День хирургии",
  },
  {
    num: "5",
    title: "Управление восстановлением и удаленное наблюдение 5G",
    description:
      "Послеоперационный мониторинг больницы и реабилитационное руководство. Пациенты с DBS могут регулировать параметры через систему удаленного программирования 5G после выписки, не возвращаясь в больницу. MedKungfu постоянно координирует механизмы дистанционного наблюдения для обеспечения долгосрочной эффективности.",
    duration: "Текущая постхирургия",
  },
];



const experts: { name: string; role: string; items: string[] }[] = [
  {
    name: "LING Zhipei",
    role: "Chief Physician · Professor · PhD Supervisor",
    items: [
      "Completed China's first Parkinson's brain pacemaker implantation in 1998, introducing neuromodulation technology",
      "Completed the world's first 5G remote brain pacemaker surgery in 2019 (3,000 km, 79ms delay)",
      "Established the world's first 5G + holographic remote diagnosis platform in 2020",
      "Completed 1,000+ remote outpatient consultations by 2025",
      "Completed China's first AI algorithm automatic parameter adjustment rechargeable brain pacemaker implantation in 2025",
    ],
  },
  {
    name: "LI Jianyu",
    role: "Chief Physician · Associate Professor · Master's Supervisor",
    items: [
      "3,000+ functional neurosurgery procedures",
      "Nearly 1,000 cranial nerve microvascular decompression surgeries",
      "Studied with Professor Okun's team in Minneapolis and Florida, USA",
      "Specializes in Parkinson's disease, essential tremor, dystonia, Tourette syndrome",
      "Also has extensive experience in cerebral palsy, epilepsy, and lower back/leg pain",
    ],
  },
];

const expertsZh: { name: string; role: string; items: string[] }[] = [
  {
    name: "凌至培",
    role: "主任医师 · 教授 · 博士生导师",
    items: [
      "1998年完成中国首例帕金森病脑起搏器植入，引入神经调控技术",
      "2019年完成全球首例5G远程脑起搏器植入手术（3000公里，延迟79ms）",
      "2020年建立全球首个5G+全息远程诊疗平台",
      "截至2025年完成1,000+例远程门诊会诊",
      "2025年完成国内首例AI算法自动调参充电型脑起搏器植入",
    ],
  },
  {
    name: "李建宇",
    role: "主任医师 · 副教授 · 硕士生导师",
    items: [
      "功能神经外科手术3,000+例",
      "颅神经显微血管减压手术近1,000例",
      "曾赴美国明尼阿波利斯及佛罗里达Okun教授团队深造",
      "擅长帕金森病、特发性震颤、肌张力障碍、Tourette综合征",
      "在脑性瘫痪、癫痫、腰腿痛领域亦有丰富经验",
    ],
  },
];
const expertsRu: { name: string; role: string; items: string[] }[] = [
  {
    name: "Линг Чжипей",
    role: "Главный врач · профессор · доктор философии",
    items: [
      "В 1998 году в Китае была завершена первая имплантация кардиостимулятора мозга Паркинсона, в результате чего была внедрена технология нейромодуляции.",
      "Завершена первая в мире операция по удаленному кардиостимулятору мозга 5G в 2019 году (задержка 3000 км и 79 мс)",
      "В 2020 году была создана первая в мире платформа для дистанционной голографической диагностики 5G+",
      "Завершено 1000+ дистанционных амбулаторных консультаций к 2025 году",
      "Завершена первая в Китае автоматическая настройка параметров перезаряжаемого кардиостимулятора мозга в 2025 году",
    ],
  },
  {
    name: "Ли Цзяньюй",
    role: "Главный врач · доцент · супервайзер магистра",
    items: [
      "3 000+ функциональных нейрохирургических процедур",
      "Почти 1000 операций по декомпрессии микрососудистого нерва черепа",
      "Учился в команде профессора Окуна в Миннеаполисе и Флориде, США",
      "Специализируется на болезни Паркинсона, эссенциальном треморе, дистонии, синдроме Туретта",
      "Также имеет большой опыт в церебральном параличе, эпилепсии и боли в пояснице / ногах",
    ],
  },
];



const pricingRows: { plan: string; china: string; us: string }[] = [
  { plan: "DBS Deep Brain Stimulation Surgery", china: "¥450K-600K", us: "$100K-150K USD" },
  { plan: "MRgFUS Focused Ultrasound", china: "¥174K", us: "$30K-50K USD" },
];

const pricingRowsZh: { plan: string; china: string; us: string }[] = [
  { plan: "DBS 深脑刺激手术", china: "¥45-60 万", us: "$10-15 万 USD" },
  { plan: "MRgFUS 磁波刀", china: "¥17.4 万", us: "$3-5 万 USD" },
];
const pricingRowsRu: { plan: string; china: string; us: string }[] = [
  { plan: "DBS глубокая стимуляция мозга хирургия", china: "450K-600K", us: "100 к-150 крон" },
  { plan: "Ультразвук, сфокусированный на MRgFUS", china: "174K иен", us: "$30K-50K USD" },
];



const whyUs: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.globe,
    title: "Bilingual Medical Translation",
    description:
      "Dedicated personnel accompany patients for medical visits, providing full-process medical interpretation; medical records, diagnostic reports, and treatment plans are all provided in Chinese-English translation to ensure barrier-free communication between patients and physicians.",
  },
  {
    icon: Icons.mapPin,
    title: "Private Car Transfer · Full-process Accompaniment",
    description:
      "Provides airport private car transfer, with dedicated personnel responsible for pickup/drop-off and full-process accompaniment for each visit, so patients don't have to face transportation and hospital navigation difficulties alone.",
  },
  {
    icon: Icons.clock,
    title: "Visa · Accommodation · Itinerary Planning",
    description:
      "Assists in preparing medical visa invitation letters, recommends quality accommodation near the hospital, and reasonably arranges stay duration in China based on treatment plan to maximize treatment effectiveness.",
  },
  {
    icon: Icons.wifi,
    title: "5G Follow-up Coordination",
    description:
      "Continuously coordinates remote programming follow-up arrangements after surgery, ensuring patients can still receive timely parameter adjustment services after returning home, guaranteeing long-term treatment effectiveness.",
  },
];

const whyUsZh: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.globe,
    title: "双语医疗翻译",
    description:
      "专人陪同就诊，提供全程医疗口译；病历、诊断报告、治疗计划均提供中英文翻译，确保患者与医师之间零障碍沟通。",
  },
  {
    icon: Icons.mapPin,
    title: "专车接送·全程陪诊",
    description:
      "提供机场专车接送，每次就诊均有专人负责接送与全程陪同，患者无需独自面对交通与院内导航的困扰。",
  },
  {
    icon: Icons.clock,
    title: "签证·住宿·行程规划",
    description:
      "协助准备医疗签证邀请函，推荐医院附近优质住宿，并根据治疗方案合理安排在华停留时间，最大化治疗效果。",
  },
  {
    icon: Icons.wifi,
    title: "5G随访协调",
    description:
      "术后持续协调远程编程随访安排，确保患者回国后仍能获得及时的参数调整服务，保障长期治疗效果。",
  },
];
const whyUsRu: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.globe,
    title: "Двуязычный медицинский перевод",
    description:
      "Персонал сопровождает пациентов для медицинских визитов, обеспечивая полный процесс медицинского перевода; медицинские записи, диагностические отчеты и планы лечения предоставляются в китайско-английском переводе для обеспечения безбарьерной связи между пациентами и врачами.",
  },
  {
    icon: Icons.mapPin,
    title: "Трансфер частных автомобилей · Полное сопровождение",
    description:
      "Обеспечивает трансфер частных автомобилей в аэропорту, с выделенным персоналом, ответственным за доставку / высадку и полное сопровождение процесса для каждого посещения, поэтому пациентам не нужно сталкиваться с транспортными и навигационными трудностями в больнице.",
  },
  {
    icon: Icons.clock,
    title: "Виза · Проживание · Планирование маршрута",
    description:
      "Помогает в подготовке писем с приглашением на получение медицинской визы, рекомендует качественное размещение рядом с больницей и разумно организует продолжительность пребывания в Китае на основе плана лечения, чтобы максимизировать эффективность лечения.",
  },
  {
    icon: Icons.wifi,
    title: "5G Координация последующих действий",
    description:
      "Постоянно координирует дистанционное программирование после операции, гарантируя пациентам возможность своевременного получения услуг по корректировке параметров после возвращения домой, гарантируя долгосрочную эффективность лечения.",
  },
];



export default function FunctionalNeurosurgeryContent() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const isRu = lang === "ru";

  const stats = isZh ? heroStatsZh : isRu ? heroStatsRu : heroStats;
  const techs = isZh ? techPlatformsZh : isRu ? techPlatformsRu : techPlatforms;
  const advs = isZh ? advantagesZh : isRu ? advantagesRu : advantages;
  const suitable = isZh ? suitableItemsZh : isRu ? suitableItemsRu : suitableItems;
  const notSuitable = isZh ? notSuitableItemsZh : isRu ? notSuitableItemsRu : notSuitableItems;
  const steps = isZh ? processStepsZh : isRu ? processStepsRu : processSteps;
  const expertList = isZh ? expertsZh : isRu ? expertsRu : experts;
  const rows = isZh ? pricingRowsZh : isRu ? pricingRowsRu : pricingRows;
  const reasons = isZh ? whyUsZh : isRu ? whyUsRu : whyUs;

  return (
    <main
      role="main"
      aria-label="Functional Neurosurgery Programme - Parkinson's Disease &amp; Movement Disorders Treatment"
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
              {isZh
                ? "帕金森病 · 运动障碍精准治疗"
                : isRu ? "Болезнь Паркинсона и двигательные расстройства точное лечение" : "Parkinson's Disease & Movement Disorders Precision Treatment"}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {isZh
                ? "DBS深脑刺激 · MRgFUS磁波刀 · 5G远程随访"
                : isRu ? "DBS Глубокая стимуляция мозга · УЗИ с фокусировкой MRgFUS · Дистанционное наблюдение 5G" : "DBS Deep Brain Stimulation · MRgFUS Focused Ultrasound · 5G Remote Follow-up"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base mb-12">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                {isZh ? "全球首例5G远程手术" : isRu ? "Первая в мире дистанционная хирургия 5G" : "World's First 5G Remote Surgery"}
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                {isZh ? "双技术平台" : isRu ? "Двухтехнологическая платформа" : "Dual Technology Platform"}
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                {isZh ? "费用较欧美低40-60%" : isRu ? "40-60% дешевле, чем в США и Европе" : "40-60% Lower Cost Than US/Europe"}
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

      {/* OVERVIEW */}
      <section id="overview" className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="container-custom">
          <Reveal y={20} className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
              {isZh ? "什么是功能神经外科治疗？" : isRu ? "Что такое функциональная нейрохирургия?" : "What is Functional Neurosurgery?"}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {isZh
                ? "帕金森病、特发性震颤、肌张力障碍等运动障碍疾病，传统上以药物控制为主。但随着病情进展，药物效果往往逐渐减弱，或出现严重副作用。功能神经外科通过精准的神经调控技术——DBS（深脑刺激）和MRgFUS（磁共振引导聚焦超声），直接干预异常神经回路，为药物治疗效果不佳的患者提供高效的替代方案。"
                : isRu ? "Расстройства движения, такие как болезнь Паркинсона, основной тремор и дистония, традиционно управляются в основном с помощью лекарств. Однако по мере прогрессирования заболевания эффективность лекарств часто постепенно снижается или возникают серьезные побочные эффекты. Функциональная нейрохирургия напрямую вмешивается в аномальные нейронные цепи с помощью точных технологий нейромодуляции — DBS (глубокая стимуляция мозга) и MRgFUS (МРТ-управляемое сфокусированное ультразвуковое исследование) — обеспечивая эффективную альтернативу для пациентов с плохой реакцией на лекарства." : "Movement disorders such as Parkinson's disease, essential tremor, and dystonia have traditionally been managed primarily with medication. However, as the disease progresses, medication effectiveness often gradually diminishes, or serious side effects occur. Functional neurosurgery directly intervenes in abnormal neural circuits through precise neuromodulation technologies—DBS (Deep Brain Stimulation) and MRgFUS (MRI-guided Focused Ultrasound)—providing an efficient alternative for patients with poor medication response."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section id="technologies" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <Reveal y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-12">
              {isZh ? "两大核心技术平台" : isRu ? "Две основные технологические платформы" : "Two Core Technology Platforms"}
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {techs.map((tech) => (
              <Reveal
                key={tech.title}
                y={30}
                className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E] mb-6">
                  <tech.icon className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A2E] mb-1">
                  {tech.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tech.description}
                </p>
                <ul className="space-y-3">
                  {tech.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="container-custom">
          <Reveal y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-12">
              {isZh ? "核心优势" : isRu ? "Основные преимущества" : "Core Advantages"}
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {advs.map((adv, i) => (
              <Reveal
                key={adv.title}
                x={i % 2 === 0 ? -30 : 30}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E]">
                      <adv.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-[#1B4D3E]/20 mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                      {adv.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUITABLE / NOT SUITABLE */}
      <section id="suitable" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal x={-30}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-8">
                {isZh ? "适合人群" : isRu ? "Подходит для" : "Suitable For"}
              </h2>
              <ul className="space-y-4">
                {suitable.map((item) => (
                  <li key={item} className="flex items-start">
                    <Icons.checkCircle className="h-5 w-5 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal x={30}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-8">
                {isZh ? "不适合人群（需个体化评估）" : isRu ? "Не подходит (требует индивидуальной оценки)" : "Not Suitable For (Requires Individual Assessment)"}
              </h2>
              <ul className="space-y-4 mb-6">
                {notSuitable.map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs font-bold">
                      ×
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 italic">
                {isZh
                  ? "所有患者均需提交影像资料和病历，由专科医师进行远程预筛评估，确认适应症后方安排来华治疗。"
                  : isRu ? "Все пациенты должны представить данные визуализации и медицинские записи для удаленной предварительной оценки специалистами. Лечение в Китае будет проводиться только после подтверждения показаний." : "All patients must submit imaging data and medical records for remote pre-screening assessment by specialists. Treatment in China will be arranged only after confirming indications."}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="container-custom">
          <Reveal y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-4">
              {isZh
                ? "治疗流程 · 国际患者专属通道"
                : isRu ? "Международный канал лечения пациентов International Patient Exclusive Channel" : "Treatment Process · International Patient Exclusive Channel"}
            </h2>
          </Reveal>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            {isZh
              ? "MedKungfu为每位患者提供从行前规划到术后长期随访的全程陪诊服务。"
              : isRu ? "MedKungfu предоставляет комплексные услуги по сопровождению для каждого пациента от планирования до поездки до долгосрочного послеоперационного наблюдения." : "MedKungfu provides comprehensive accompaniment services for each patient from pre-trip planning to long-term post-operative follow-up."}
          </p>
          <div className="space-y-6">
            {steps.map((step) => (
              <Reveal y={20} className="bg-white rounded-2xl p-8 shadow-sm" key={step.num}>
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

      {/* EXPERTS */}
      <section id="experts" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <Reveal y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-12">
              {isZh ? "专家团队" : isRu ? "Команда экспертов" : "Expert Team"}
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {expertList.map((expert) => (
              <Reveal
                key={expert.name}
                y={30}
                className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">
                    {expert.name}
                  </h3>
                  <p className="text-[#1B4D3E] font-medium">{expert.role}</p>
                </div>
                <ul className="space-y-3">
                  {expert.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <Icons.award className="h-4 w-4 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="container-custom">
          <Reveal y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-12">
              {isZh ? "参考治疗费用" : isRu ? "Справочные затраты на лечение" : "Reference Treatment Costs"}
            </h2>
          </Reveal>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-[#1B4D3E] text-white">
                <div className="p-6 font-bold">
                  {isZh ? "治疗方案" : isRu ? "План лечения" : "Treatment Plan"}
                </div>
                <div className="p-6 font-bold text-center">
                  {isZh ? "中国参考价" : isRu ? "Китайская справочная цена" : "China Reference Price"}
                </div>
                <div className="p-6 font-bold text-center">
                  {isZh ? "美国参考价" : isRu ? "Справочная цена США" : "US Reference Price"}
                </div>
              </div>
              {rows.map((row, i) => (
                <div
                  key={row.plan}
                  className={
                    i === rows.length - 1
                      ? "grid grid-cols-3"
                      : "grid grid-cols-3 border-b border-gray-100"
                  }
                >
                  <div className="p-6 font-medium text-[#1A1A2E]">
                    {row.plan}
                  </div>
                  <div className="p-6 text-center text-[#1B4D3E] font-bold">
                    {row.china}
                  </div>
                  <div className="p-6 text-center text-gray-600">{row.us}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6 text-center">
              {isZh
                ? "*以上为参考费用，实际费用因手术方案及耗材品牌有所差异。费用包含住院、手术、设备植入及术后基本随访。DBS术后5G远程编程随访另行计费。"
                : isRu ? "* Вышеуказанные затраты являются справочными. Фактические затраты варьируются в зависимости от хирургического плана и расходных марок. Затраты включают госпитализацию, операцию, имплантацию устройства и базовое послеоперационное наблюдение. Послеоперационное дистанционное программирование DBS 5G оплачивается отдельно." : "*The above are reference costs. Actual costs vary depending on surgical plan and consumable brands. Costs include hospitalization, surgery, device implantation, and basic post-operative follow-up. DBS post-operative 5G remote programming follow-up is billed separately."}
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <Reveal y={20}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-12">
              {isZh ? "为什么选择 MedKungfu？" : isRu ? "Почему стоит выбрать MedKungfu?" : "Why Choose MedKungfu?"}
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((item) => (
              <Reveal key={item.title} scale={0.95} className="bg-[#F5F7FA] rounded-2xl p-8">
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
                ? "开启您的神经外科精准治疗之旅"
                : isRu ? "Начните свое точное нейрохирургическое путешествие" : "Begin Your Precision Neurosurgery Journey"}
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

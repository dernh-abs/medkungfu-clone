// Premium Health Checkup project detail page content.
// Bilingual: renders Chinese content when the site language is zh.
"use client";
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import {
  Icons,
  type LucideIcon,
} from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";

const basePackageItems = [
  "General examination (height/weight/BMI, blood pressure, pulse)",
  "Physical examination: internal medicine, surgery, ophthalmology, ENT, dentistry",
  "Routine tests: complete blood count, urinalysis + sediment, fecal occult blood",
  "Comprehensive biochemistry: 12 liver function items, 5 kidney function items, 8 lipid profile items (including ApoA, ApoB, ApoE, Lp(a)), fasting glucose + HbA1c",
  "Myocardial injury markers: troponin, cardiac enzyme panel",
  "Immunity & inflammation: rheumatism panel, immunoglobulins, hs-CRP",
  "Infectious disease screening: Hepatitis B/C, syphilis, HIV",
];

const basePackageItemsZh = [
  "一般检查（身高/体重/BMI、血压、脉搏）",
  "内科、外科、眼科、耳鼻喉科、口腔科物理检查",
  "常规化验：血常规、尿常规+尿沉渣、便潜血",
  "生化全项：肝功能12项、肾功能5项、血脂8项（含ApoA、ApoB、ApoE、Lp(a)）、空腹血糖+糖化血红蛋白",
  "心肌损伤：肌钙蛋白、心肌酶谱",
  "免疫与炎症：风湿三项、免疫球蛋白、超敏C反应蛋白",
  "传染病筛查：乙肝/丙肝/梅毒/HIV",
];
const basePackageItemsRu = [
  "Общий осмотр (рост/вес/ИМТ, кровяное давление, пульс)",
  "Физический осмотр: внутренняя медицина, хирургия, офтальмология, ЛОР, стоматология",
  "Рутинные тесты: полный анализ крови, мочеиспускание + осадок, фекальная оккультная кровь",
  "Комплексная биохимия: 12 пунктов функции печени, 5 пунктов функции почек, 8 пунктов липидного профиля (включая ApoA, ApoB, ApoE, Lp(a)), глюкоза натощак + HbA1c",
  "Маркеры повреждения миокарда: тропонин, сердечная ферментная панель",
  "Иммунитет и воспаление: панель ревматизма, иммуноглобулины, hs-CRP",
  "Скрининг инфекционных заболеваний: гепатит B/C, сифилис, ВИЧ",
];



const deepScreeningModules: { title: string; items: string[] }[] = [
  {
    title: "1. Cardiovascular Deep Screening",
    items: [
      "256-slice spectral CT coronary CTA",
      "CT-FFR functional assessment (non-invasive myocardial ischemia judgment, accuracy >95%)",
      "Echocardiography + 3D reconstruction",
      "24-hour Holter ECG (optional), arteriosclerosis detection",
      "Carotid ultrasound + intima-media thickness (IMT) measurement",
      "Cardiac enzyme panel, troponin, homocysteine",
    ],
  },
  {
    title: "2. Cerebrovascular Deep Screening",
    items: [
      "3.0T ultra-high-field brain MRI plain scan + DWI",
      "Brain MRA (vascular stenosis, aneurysm, malformation)",
      "Carotid plaque stability assessment, transcranial Doppler (TCD)",
      "Alzheimer's disease-related proteins + APOE genotyping",
      "Brain wave stress analysis + cognitive function scale",
    ],
  },
  {
    title: "3. Cervical & Lumbar Spine Deep Screening",
    items: [
      "70cm large-bore 3.0T research-grade cervical spine MRI, lumbar spine MRI",
      "Dual-energy X-ray bone density (DXA) - whole body + spine + hip",
      "Osteoporosis three serum markers (25-OH vitamin D, TRAP 5b, CTX-I)",
    ],
  },
  {
    title: "4. Knee Joint Deep Screening",
    items: [
      "Knee MRI (meniscus, ligaments, cartilage, patellofemoral joint)",
      "Bone density + bone lesion assessment",
      "Comprehensive joint function assessment (range of motion, gait analysis)",
      "Key bone metabolism indicators: vitamin D, K, etc.",
    ],
  },
  {
    title: "5. Tumor Deep Screening",
    items: [
      "Complete tumor marker panel (CEA, AFP, CA19-9, CA125, PSA, etc.)",
      "Seven lung cancer autoantibodies + VEGF",
      "Low-dose chest spiral CT - gold standard for early lung cancer screening",
      "Fully digital PET-CT whole-body scan or 3.0T whole-body diffusion-weighted imaging",
      "Liquid biopsy multi-cancer early screening (ctDNA methylation analysis)",
      "Whole exome sequencing (WES)",
    ],
  },
  {
    title: "6. Digestive Tract Deep Screening",
    items: [
      "Painless sleep gastroscopy/colonoscopy (imported anesthesia, synchronous polyp removal)",
      "Or magnetic-controlled capsule endoscopy (non-invasive, painless)",
      "C13/C14 breath test (Helicobacter pylori)",
      "Stool SDC2 gene methylation test (early colorectal cancer screening)",
    ],
  },
];

const deepScreeningModulesZh: { title: string; items: string[] }[] = [
  {
    title: "1. 心血管深度筛查",
    items: [
      "256排512层能谱CT冠脉CTA",
      "CT-FFR功能学评估（无创判断心肌缺血，准确率>95%）",
      "心脏彩超+三维重建",
      "24小时动态心电图（可选）、动脉硬化检测",
      "颈动脉彩超+内膜中层厚度(IMT)测定",
      "心肌酶谱、肌钙蛋白、同型半胱氨酸",
    ],
  },
  {
    title: "2. 脑血管深度筛查",
    items: [
      "3.0T超高场强磁共振头颅MRI平扫+DWI",
      "头颅MRA（血管狭窄、动脉瘤、畸形）",
      "颈动脉斑块稳定性评估、经颅多普勒(TCD)",
      "阿尔茨海默病相关蛋白+APOE基因分型",
      "脑波压力分析+认知功能量表",
    ],
  },
  {
    title: "3. 颈椎与腰椎深度筛查",
    items: [
      "70cm大孔径3.0T科研型磁共振颈椎MRI、腰椎MRI",
      "双能X线骨密度(DXA)–全身+脊柱+髋部",
      "骨质疏松三项血清标志物（25-OH维生素D、TRAP 5b、CTX-I）",
    ],
  },
  {
    title: "4. 膝关节/骨关节深度筛查",
    items: [
      "膝关节MRI（半月板、韧带、软骨、髌股关节）",
      "骨密度+骨质病变评估",
      "关节功能综合评估（活动度、步态分析）",
      "维生素D、K等骨代谢关键指标",
    ],
  },
  {
    title: "5. 肿瘤深度筛查",
    items: [
      "全套肿瘤标志物（CEA、AFP、CA19-9、CA125、PSA等）",
      "七种肺癌自身抗体+VEGF",
      "低剂量胸部螺旋CT–肺癌早筛金标准",
      "全数字化PET-CT全身扫描或3.0T全身弥散加权成像",
      "液体活检多癌种早筛（ctDNA甲基化分析）",
      "全外显子组测序(WES)",
    ],
  },
  {
    title: "6. 消化道深度筛查",
    items: [
      "无痛舒眠胃肠镜（进口麻醉，息肉可同步切除）",
      "或磁控胶囊胃镜（无创无痛）",
      "C13/C14呼气试验（幽门螺杆菌）",
      "粪便SDC2基因甲基化检测（肠癌早筛）",
    ],
  },
];
const deepScreeningModulesRu: { title: string; items: string[] }[] = [
  {
    title: "1. Глубокий сердечно-сосудистый скрининг",
    items: [
      "256-срезовый спектральный КТ коронарный CTA",
      "функциональная оценка КТ-FFR (оценка неинвазивной ишемии миокарда, точность >95%)",
      "Эхокардиография + 3D реконструкция",
      "24-часовая ЭКГ Холтера (необязательно), обнаружение артериосклероза",
      "Ультразвук сонных сеток + измерение толщины интима-медиа (IMT)",
      "Сердечная ферментная панель, тропонин, гомоцистеин",
    ],
  },
  {
    title: "2. Глубокий скрининг цереброваскулярных сосудов",
    items: [
      "3,0 Т сверхвысокополевой мозг МРТ простое сканирование + DWI",
      "МРА мозга (сосудистый стеноз, аневризма, пороки развития)",
      "Оценка стабильности сонной бляшки, транскраниальный доплер (TCD)",
      "Белки, связанные с болезнью Альцгеймера + генотипирование APOE",
      "Анализ стресса мозговых волн + шкала когнитивных функций",
    ],
  },
  {
    title: "3. шейный и поясничный позвоночник Глубокий скрининг",
    items: [
      "70 см крупноствольная 3.0T исследовательская шейная отделка позвоночника МРТ, поясничный отдел позвоночника МРТ",
      "Двухэнергетическая рентгеновская плотность кости (DXA) - все тело + позвоночник + бедро",
      "Остеопороз три сывороточных маркера (25-OH витамин D, TRAP 5b, CTX-I)",
    ],
  },
  {
    title: "4. Глубокий скрининг коленного сустава",
    items: [
      "Колено МРТ (мениска, связки, хрящ, пателлофеморальный сустав)",
      "Плотность костей + оценка поражения костей",
      "Комплексная оценка совместной функции (диапазон движения, анализ походки)",
      "Ключевые показатели метаболизма костей: витамин D, K и т.д.",
    ],
  },
  {
    title: "5. Глубокий скрининг опухоли",
    items: [
      "Полная панель опухолевых маркеров (CEA, AFP, CA19-9, CA125, PSA и т. Д.)",
      "Семь аутоантител рака легких + VEGF",
      "Низкие дозы спирали грудной клетки КТ - золотой стандарт для раннего скрининга рака легких",
      "Полностью цифровая ПЭТ-КТ сканирование всего тела или 3,0Т диффузионно-взвешенная визуализация всего тела",
      "Ранний скрининг жидкой биопсии (анализ метилирования ктДНК)",
      "Полное секвенирование экзом (WES)",
    ],
  },
  {
    title: "6. Глубокий скрининг пищеварительного тракта",
    items: [
      "Безболезненная гастроскопия/колоноскопия сна (импортная анестезия, синхронное удаление полипа)",
      "или магнитно-контролируемая капсульная эндоскопия (неинвазивная, безболезненная)",
      "Тест дыхания C13/C14 (Helicobacter pylori)",
      "Тест на метилирование гена Stool SDC2 (ранний скрининг колоректального рака)",
    ],
  },
];



const extensionModules = [
  "Functional medicine integrated analysis (vitamin groups, amino acid profiles, trace elements, gut microbiota)",
  "Complete allergen panel (17 inhalation + 14 food items)",
  "Autoimmune disease screening (antinuclear antibody panel)",
  "Cardiovascular drug genetic testing",
  "Cervical cancer PAX1/JAM3 gene methylation test",
];

const extensionModulesZh = [
  "功能医学整合分析（维生素群、氨基酸谱、微量元素、肠道菌群）",
  "过敏原全项（吸入性17项+食物性14项）",
  "自身免疫疾病筛查（抗核抗体谱）",
  "心血管药物基因检测",
  "宫颈癌PAX1/JAM3基因甲基化检测",
];
const extensionModulesRu = [
  "Интегрированный анализ функциональной медицины (витаминные группы, аминокислотные профили, микроэлементы, микробиота кишечника)",
  "Полная аллергенная панель (17 ингаляций + 14 продуктов питания)",
  "Скрининг аутоиммунных заболеваний (панель антиядерных антител)",
  "Сердечно-сосудистые препараты генетического тестирования",
  "Тест на метилирование гена PAX1/JAM3",
];



const vipProcess: { step: string; title: string; items: string[] }[] = [
  {
    step: "1",
    title: "Before Arrival - Personalized Customization",
    items: [
      "Remote consultation with dedicated health advisor",
      "Online health questionnaire + AI risk assessment",
      'Generate personalized "1+X+Y" plan',
      "Assist with medical visa invitation letter",
    ],
  },
  {
    step: "2",
    title: "Checkup Day - Efficient Luxury",
    items: [
      "VIP independent examination area, completely separated from regular areas",
      "One-on-one accompaniment throughout (fluent English-speaking health advisor)",
      "Gender-separated zones + independent examination rooms",
      "Intelligent guidance system plans shortest route",
      "Elegant lounge: soft sofas, exquisite refreshments",
    ],
  },
  {
    step: "3",
    title: "Post-Checkup - Immediate & Long-term",
    items: [
      "Same-day preliminary report + one-on-one interpretation by chief-level experts",
      "MDT multidisciplinary consultation (for complex abnormalities)",
      "Green channel for major positive findings",
      "Lifetime electronic health records",
    ],
  },
];

const vipProcessZh: { step: string; title: string; items: string[] }[] = [
  {
    step: "1",
    title: "来华前–专属定制",
    items: [
      "专属健康顾问远程沟通",
      "在线健康问卷+AI风险评估",
      "生成“1+X+Y”个性化方案",
      "协助办理医疗签证邀请函",
    ],
  },
  {
    step: "2",
    title: "体检当日–高效奢华",
    items: [
      "VIP独立检区，与常规区域完全分离",
      "一对一全程陪检（英文流利健康顾问）",
      "男女分区+独立诊室",
      "智能导诊系统规划最短动线",
      "优雅休息室：柔软沙发、精致茶点",
    ],
  },
  {
    step: "3",
    title: "检后–即时与长期",
    items: [
      "当天出具初步报告+主任级专家一对一解读",
      "MDT多学科会诊（针对复杂异常）",
      "重大阳性绿色通道",
      "终身电子健康档案",
    ],
  },
];
const vipProcessRu: { step: string; title: string; items: string[] }[] = [
  {
    step: "1",
    title: "До прибытия - Персонализированная настройка",
    items: [
      "Дистанционные консультации с специализированным консультантом по вопросам здравоохранения",
      "Онлайн-опросник здоровья + оценка рисков ИИ",
      'Создайте персонализированный план «1+X+Y»',
      "Помощь с письмом-приглашением на медицинскую визу",
    ],
  },
  {
    step: "2",
    title: "День проверки - эффективная роскошь",
    items: [
      "VIP-зона независимой экспертизы, полностью отделенная от обычных зон",
      "Сопровождение один на один (беспрерывный англоязычный консультант по вопросам здравоохранения)",
      "Разделенные по признаку пола зоны + независимые экзаменационные залы",
      "Интеллектуальная система наведения планирует кратчайший маршрут",
      "Элегантный лаундж: мягкие диваны, изысканные прохладительные напитки",
    ],
  },
  {
    step: "3",
    title: "Post-Checkup - Немедленная и долгосрочная проверка",
    items: [
      "Предварительный доклад за тот же день + устный перевод на один день экспертами на уровне руководителей",
      "Мультидисциплинарная консультация MDT (для сложных аномалий)",
      "Зеленый канал для основных положительных результатов",
      "Пожизненные электронные медицинские записи",
    ],
  },
];



const premiumFeatures = [
  "Base package + all six deep screening modules",
  "Coronary CTA, knee MRI",
  "APOE gene, arteriosclerosis detection",
  "Painless gastroscopy/colonoscopy OR capsule endoscopy",
  "PET-CT (based on risk assessment)",
];

const premiumFeaturesZh = [
  "基础包+六大深筛全项",
  "冠脉CTA、膝关节MRI",
  "APOE基因、动脉硬化检测",
  "无痛胃肠镜/胶囊胃镜二选一",
  "PET-CT（依风险评估）",
];
const premiumFeaturesRu = [
  "Базовый пакет + все шесть модулей глубокого скрининга",
  "Коронарный CTA, колено МРТ",
  "Ген APOE, обнаружение артериосклероза",
  "Безболезненная гастроскопия / колоноскопия или капсульная эндоскопия",
  "PET-КТ (на основе оценки рисков)",
];



const ultimateFeatures = [
  "All Premium package contents",
  "CT-FFR functional assessment",
  "Liquid biopsy multi-cancer early screening",
  "Whole exome sequencing",
  "Whole-body PET-CT",
  "Residential VIP experience",
  "Year-round health management",
];

const ultimateFeaturesZh = [
  "尊享版全部内容",
  "CT-FFR功能学评估",
  "液体活检多癌种早筛",
  "全外显子组测序",
  "全身PET-CT",
  "入住式VIP体验",
  "全年健康管理",
];
const ultimateFeaturesRu = [
  "Все содержимое пакета Premium",
  "Функциональная оценка КТ-FFR",
  "Жидкая биопсия мультиракового раннего скрининга",
  "Целая последовательность экзом",
  "Полностью тело PET-КТ",
  "Жилой VIP опыт",
  "Круглый год управления здравоохранением",
];



const travelSupport: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.plane,
    title: "Visa Assistance",
    description: "Provide official medical invitation letter for visa application",
  },
  {
    icon: Icons.globe,
    title: "Language Services",
    description: "English-speaking coordinator throughout (other languages available upon request)",
  },
  {
    icon: Icons.mapPin,
    title: "Transportation & Accommodation",
    description: "Airport transfers, premium hotel partnership rates",
  },
  {
    icon: Icons.award,
    title: "Travel Extension",
    description: "Customizable cultural or leisure itineraries",
  },
];

const travelSupportZh: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.plane,
    title: "签证协助",
    description: "提供正式医疗邀请函，支持医疗签证申请",
  },
  {
    icon: Icons.globe,
    title: "语言服务",
    description: "全程英文协调员（其他语种可提前预约）",
  },
  {
    icon: Icons.mapPin,
    title: "交通住宿",
    description: "机场接送、高端酒店合作价",
  },
  {
    icon: Icons.award,
    title: "旅行延展",
    description: "可定制文化或休闲行程",
  },
];
const travelSupportRu: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.plane,
    title: "Визовая помощь",
    description: "Предоставить официальное медицинское приглашение для подачи заявления на визу",
  },
  {
    icon: Icons.globe,
    title: "Языковые услуги",
    description: "Англоязычный координатор по всему миру (другие языки доступны по запросу)",
  },
  {
    icon: Icons.mapPin,
    title: "Транспорт и размещение",
    description: "Трансферы из аэропорта, тарифы на гостиничное партнерство премиум-класса",
  },
  {
    icon: Icons.award,
    title: "Расширение путешествий",
    description: "Настраиваемые культурные или развлекательные маршруты",
  },
];



const whoIsItFor = [
  "Global corporate executives, entrepreneurs, high-net-worth family members",
  "Aged 30-65, concerned about cardiovascular, skeletal, tumor, and digestive health",
  "Long-term desk work, high-pressure jobs, cervical/lumbar spine health issues",
  "Family history of tumors, cardiovascular/cerebrovascular diseases, or digestive disorders",
  "Want to combine precision checkup with luxury travel, highly value privacy and efficiency",
];

const whoIsItForZh = [
  "全球企业高管、企业家、高净值家族成员",
  "年龄30-65岁，关注心血管、骨骼、肿瘤及消化道健康",
  "长期伏案、高压工作，存在颈椎/腰椎健康困扰",
  "有肿瘤、心脑血管疾病或消化道疾病家族史",
  "希望将精密体检+高端旅行一站完成，并极度重视隐私与效率",
];
const whoIsItForRu = [
  "Глобальные корпоративные руководители, предприниматели, члены семьи с высоким уровнем дохода",
  "Возраст 30-65 лет, обеспокоенный сердечно-сосудистым, скелетным, опухолевым и пищеварительным здоровьем",
  "Долгосрочная работа на рабочем месте, работа под высоким давлением, проблемы со здоровьем шейного/ поясничного отдела позвоночника",
  "Семейная история опухолей, сердечно-сосудистых / цереброваскулярных заболеваний или расстройств пищеварения",
  "Хотите сочетать точный контроль с роскошными путешествиями, высоко ценимую конфиденциальность и эффективность",
];



const coreAdvantages: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.microscope,
    title: "World-Class Advanced Equipment",
    description:
      "Equipped with 256-slice spectral CT, 3.0T ultra-high-field MRI, fully digital PET-CT, and AI-assisted diagnostic systems, improving small lesion detection rate by 50%.",
  },
  {
    icon: Icons.dollarSign,
    title: "Significant Cost Advantage",
    description:
      "For equivalent quality checkup packages, pricing in mainland China is only 35%-45% of US prices.",
  },
  {
    icon: Icons.clock,
    title: "Ultimate Efficiency Experience",
    description:
      "Full appointment-based process with same-day core examination reports and expert interpretation. Fastest: morning checkup, afternoon report, immediate expert review.",
  },
  {
    icon: Icons.shield,
    title: "Privacy Protection First",
    description:
      "VIP independent examination area completely separated from regular areas, one-on-one private communication, gender-separated zones, highest-level encryption for health data.",
  },
];

const coreAdvantagesZh: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.microscope,
    title: "全球同步尖端设备",
    description:
      "配备256排512层能谱CT、3.0T超高场强磁共振、全数字化PET-CT、AI辅助诊断系统，微小病灶检出率提高50%。",
  },
  {
    icon: Icons.dollarSign,
    title: "费用优势显著",
    description: "同等质量的体检套餐，中国大陆定价仅为美国的35%-45%。",
  },
  {
    icon: Icons.clock,
    title: "极致效率体验",
    description:
      "全流程预约制，核心检查当天出报告，专家解读同日完成。最快上午体检、下午出报告、即刻专家解读。",
  },
  {
    icon: Icons.shield,
    title: "隐私保护第一",
    description:
      "VIP独立检区与常规区域完全分离，一对一私密沟通，男女分区，健康数据最高等级加密。",
  },
];
const coreAdvantagesRu: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Icons.microscope,
    title: "Продвинутое оборудование мирового класса",
    description:
      "Оснащен 256-срезовыми спектральными КТ, 3,0T сверхвысокопольным МРТ, полностью цифровыми PET-КТ и диагностическими системами с поддержкой ИИ, улучшая скорость обнаружения небольших поражений на 50%.",
  },
  {
    icon: Icons.dollarSign,
    title: "Значительное преимущество в затратах",
    description:
      "Для эквивалентных пакетов проверки качества цены в материковом Китае составляют всего 35-45% от цен в США.",
  },
  {
    icon: Icons.clock,
    title: "Опыт максимальной эффективности",
    description:
      "Полный процесс назначения с отчетами о результатах основной экспертизы за тот же день и устным переводом экспертов. Быстрее всего: утренняя проверка, послеобеденный отчет, немедленная экспертная оценка.",
  },
  {
    icon: Icons.shield,
    title: "Защита конфиденциальности в первую очередь",
    description:
      "VIP-зона для проведения независимых экспертиз полностью отделена от обычных зон, индивидуальное частное общение, гендерно-отдельные зоны, шифрование данных о здоровье на самом высоком уровне.",
  },
];



export default function PremiumHealthCheckupContent() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const isRu = lang === "ru";

  const baseItems = isZh ? basePackageItemsZh : isRu ? basePackageItemsRu : basePackageItems;
  const modules = isZh ? deepScreeningModulesZh : isRu ? deepScreeningModulesRu : deepScreeningModules;
  const extensionItems = isZh ? extensionModulesZh : isRu ? extensionModulesRu : extensionModules;
  const process = isZh ? vipProcessZh : isRu ? vipProcessRu : vipProcess;
  const premium = isZh ? premiumFeaturesZh : isRu ? premiumFeaturesRu : premiumFeatures;
  const ultimate = isZh ? ultimateFeaturesZh : isRu ? ultimateFeaturesRu : ultimateFeatures;
  const support = isZh ? travelSupportZh : isRu ? travelSupportRu : travelSupport;
  const audience = isZh ? whoIsItForZh : isRu ? whoIsItForRu : whoIsItFor;
  const advantages = isZh ? coreAdvantagesZh : isRu ? coreAdvantagesRu : coreAdvantages;

  return (
    <main
      role="main"
      aria-label="Premium Health Checkup - Comprehensive Health Screening"
      className="min-h-screen bg-white"
    >
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
          <div>
            <p className="text-lg text-blue-200 mb-4 tracking-wider">
              {isZh ? "健康体检项目" : isRu ? "Программа проверки здоровья" : "Health Checkup Programme"}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {isZh ? "高端国际健康体检" : isRu ? "Премиум Международный контроль здоровья" : "Premium International Health Checkup"}
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-4">
              {isZh
                ? "Premium International Health Screening"
                : "高端国际健康筛查"}
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
              {isZh ? "臻享全景·全方位套餐" : isRu ? "Комплексный панорамный пакет" : "Comprehensive Panoramic Package"}
            </p>
            <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
              {isZh
                ? "专为来华高端人士打造 | 一次体检·六大深筛·全程隐私无忧"
                : isRu ? "Предназначен для высококлассных посетителей в Китае | Один осмотр · Шесть глубоких скринингов · Полная конфиденциальность" : "Designed for high-end visitors to China | One checkup · Six deep screenings · Complete privacy"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "全球尖端设备" : isRu ? "Оборудование мирового класса" : "World-Class Equipment"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "AI辅助诊断" : isRu ? "Диагностика с помощью ИИ" : "AI-Assisted Diagnosis"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "当日出报告" : isRu ? "Отчеты за тот же день" : "Same-Day Reports"}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {isZh ? "全程隐私保护" : isRu ? "Полная конфиденциальность" : "Complete Privacy"}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#packages"
                className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
              >
                {isZh ? "查看套餐" : isRu ? "Посмотреть пакеты" : "View Packages"}
              </a>
              <a
                href="#intro"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {isZh ? "了解更多" : isRu ? "Узнать больше" : "Learn More"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE CHINA */}
      <section id="intro" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal x={-30}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
                {isZh ? "为什么选择来中国做体检？" : isRu ? "Почему стоит выбрать Китай для проверки здоровья?" : "Why Choose China for Your Health Checkup?"}
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                {isZh
                  ? "中国顶级医疗中心现已配备全球同步的尖端设备、AI辅助诊断系统。"
                  : isRu ? "Ведущие медицинские центры Китая теперь оснащены передовым оборудованием мирового класса и диагностическими системами с поддержкой ИИ." : "China's top medical centers are now equipped with world-class advanced equipment and AI-assisted diagnostic systems."}
              </p>
              <p className="text-gray-600 mb-6">
                {isZh
                  ? "您可以将年度深度体检与奢华旅行完美结合，最快上午体检、下午出报告、即刻专家解读，其余时间尽享旅程。"
                  : isRu ? "Вы можете идеально сочетать свой ежегодный углубленный осмотр с роскошной поездкой. Самое быстрое: утренний осмотр, послеобеденный отчет, немедленный экспертный обзор, наслаждайтесь остальной частью вашего путешествия." : "You can perfectly combine your annual in-depth checkup with a luxury trip. Fastest: morning checkup, afternoon report, immediate expert review, enjoy the rest of your journey."}
              </p>
              <div className="flex items-center space-x-4 text-blue-600">
                <Icons.checkCircle className="h-6 w-6" />
                <span className="font-semibold">
                  {isZh ? "精密体检+高端旅行一站完成" : isRu ? "Точная проверка + роскошные поездки на одной остановке" : "Precision Checkup + Luxury Travel in One Stop"}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORE ADVANTAGES */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal y={20} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "核心优势" : isRu ? "Основные преимущества" : "Core Advantages"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isZh ? "为什么选择我们的高端健康体检服务" : isRu ? "Почему стоит выбрать нашу премиальную службу проверки здоровья" : "Why choose our premium health checkup service"}
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv) => (
              <Reveal
                y={20}
                key={adv.title}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <adv.icon className="h-10 w-10" />
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

      {/* WHO IS IT FOR */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal y={20} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "适合人群" : isRu ? "Для кого это?" : "Who Is It For?"}
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audience.map((item, index) => (
              <Reveal
                y={20}
                key={item}
                className="bg-blue-50 rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CUSTOMIZATION SYSTEM: 1+X+Y */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal y={20} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isZh ? "核心定制体系：“1+X+Y”" : isRu ? 'Система базовой настройки: «1+X+Y»' : 'Core Customization System: "1+X+Y"'}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {isZh
                ? "基础必查核心包 + 六大深度筛查模块 + 个性化延展模块"
                : isRu ? "Базовый пакет + Шесть модулей глубокого скрининга + персонализированные модули расширения" : "Essential base package + Six deep screening modules + Personalized extension modules"}
            </p>
          </Reveal>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              {isZh ? "“1” – 基础必查核心包" : isRu ? '«1» - базовый пакет' : '"1" - Essential Base Package'}
            </h3>
            <div className="bg-slate-800 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {baseItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icons.checkCircle className="text-blue-400 flex-shrink-0 mt-0.5 h-5 w-5" />
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              {isZh ? "“X” – 六大深度筛查模块" : isRu ? '«X» — шесть модулей глубокого скрининга' : '"X" - Six Deep Screening Modules'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module) => (
                <div key={module.title} className="bg-slate-800 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4 text-white">
                    {module.title}
                  </h4>
                  <ul className="space-y-2">
                    {module.items.map((item) => (
                      <li
                        key={item}
                        className="text-gray-300 text-sm flex items-start gap-2"
                      >
                        <span className="text-blue-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              {isZh ? "“Y” – 个性化延展模块（按需选配）" : isRu ? '«Y» - персонализированные модули расширения (факультативно)' : '"Y" - Personalized Extension Modules (Optional)'}
            </h3>
            <div className="bg-slate-800 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {extensionItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">+</span>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONE-STOP VIP SERVICE PROCESS */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal y={20} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "一站式贵宾服务流程" : isRu ? "Одностопный VIP-процесс" : "One-Stop VIP Service Process"}
            </h2>
          </Reveal>
          <div className="space-y-8">
            {process.map((block) => (
              <Reveal y={20} key={block.step} className="bg-slate-50 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {block.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E]">{block.title}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {block.items.map((item) => (
                    <div key={item} className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE VERSIONS & PRICING */}
      <section id="packages" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal y={20} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "套餐版本与费用" : isRu ? "Пакет версий и цен" : "Package Versions & Pricing"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isZh ? "选择适合您的体检套餐" : isRu ? "Выберите пакет проверки, который подходит вам" : "Choose the checkup package that suits you"}
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Reveal y={20} className="rounded-2xl p-8 bg-white shadow-sm">
              <h3 className="text-2xl font-bold mb-2">
                {isZh ? "尊享版" : isRu ? "Премиум" : "Premium"}
              </h3>
              <div className="text-3xl font-bold mb-6 text-blue-600">
                $2,500 – $4,800
              </div>
              <ul className="space-y-3">
                {premium.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Icons.checkCircle className="text-blue-500 h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal y={20} className="rounded-2xl p-8 bg-blue-600 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-2">
                {isZh ? "至臻版" : isRu ? "Максимальный" : "Ultimate"}
              </h3>
              <div className="text-3xl font-bold mb-6 text-white">$4,800 – $8,000</div>
              <ul className="space-y-3">
                {ultimate.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Icons.checkCircle className="text-blue-200 h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal
            y={20}
            className="text-center mt-12 bg-blue-100 rounded-2xl p-8 max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "费用优势" : isRu ? "Цена выгода" : "Cost Advantage"}
            </h3>
            <p className="text-gray-600">
              {isZh
                ? "同等质量的体检套餐，中国大陆定价仅为美国的35%-45%。"
                : isRu ? "Для эквивалентных пакетов проверки качества цены в материковом Китае составляют всего 35-45% от цен в США." : "For equivalent quality checkup packages, pricing in mainland China is only 35%-45% of US prices."}
            </p>
            <p className="text-gray-500 text-sm mt-4">
              {isZh ? "*具体费用以医院最终评估为准。" : isRu ? "* Конкретные расходы, подлежащие окончательной оценке в больнице." : "*Specific costs subject to final hospital assessment."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEAMLESS INTERNATIONAL MEDICAL TRAVEL SUPPORT */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal y={20} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {isZh ? "国际医疗旅行无缝支持" : isRu ? "Поддержка международных медицинских путешествий" : "Seamless International Medical Travel Support"}
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {support.map((item) => (
              <Reveal
                y={20}
                key={item.title}
                className="bg-slate-50 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-[#1A1A2E] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal y={20}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isZh ? "开启您的“体检+旅行”臻享之旅" : isRu ? 'Начните свой «Checkup + Travel»' : 'Start Your "Checkup + Travel" Premium Journey'}
            </h2>
            <p className="text-blue-200 mb-8">
              {isZh
                ? "一次深度体检，六大维度洞察，全周期健康守护。将年度健康管理变成一场身心焕新的奢华旅程。"
                : isRu ? "Один углубленный осмотр, шестимерные идеи, защита здоровья на протяжении всего цикла. Превратите ежегодное управление здравоохранением в роскошное путешествие физического и психического обновления." : "One in-depth checkup, six-dimensional insights, full-cycle health protection. Transform annual health management into a luxurious journey of physical and mental renewal."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@medkungfu.com"
                className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                {isZh ? "邮件咨询" : isRu ? "Email-запрос" : "Email Inquiry"}
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {isZh ? "在线留言" : isRu ? "Онлайн-запрос" : "Online Inquiry"}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

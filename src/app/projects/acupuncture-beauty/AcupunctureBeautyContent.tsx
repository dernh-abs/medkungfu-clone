// Acupuncture Beauty and Skin Tightening Therapy project detail page content.
// Bilingual: renders Chinese content when the site language is zh.
"use client";
import Link from "next/link";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";

const heroBadges = [
  "About 30 Minutes",
  "Non-invasive · Quick Recovery",
  "Personalized Plan",
  "Bilingual Accompaniment",
];

const heroBadgesZh = [
  "约30分钟",
  "无创·快速恢复",
  "个性化方案",
  "双语陪诊",
];
const heroBadgesRu = [
  "Около 30 минут",
  "Неинвазивный – быстрое восстановление",
  "Персонализированный план",
  "Двуязычное сопровождение",
];



const mechanisms: { num: string; title: string; description: string }[] = [
  {
    num: "01",
    title: "Regulate Qi and Blood · Strengthen Foundation",
    description:
      "Through the combination of distal and local acupoints, harmonize the whole body's qi and blood flow, provide sufficient nourishment foundation for facial tissues, and improve dull complexion and sagging caused by qi and blood deficiency.",
  },
  {
    num: "02",
    title: "Stimulate Locally · Promote Blood Circulation",
    description:
      "Fine needles precisely stimulate facial acupoints, promote local blood circulation, activate fibroblast activity, promote collagen synthesis and renewal, and improve facial contour fullness.",
  },
  {
    num: "03",
    title: "Stimulate Regeneration · Fill Deficiency",
    description:
      "Through holistic syndrome differentiation and conditioning, supplement qi and blood deficiency caused by weight loss or aging, fundamentally improve the skin's self-repair and maintenance ability, with effects accumulating over the treatment course, sustained and natural.",
  },
];

const mechanismsZh: { num: string; title: string; description: string }[] = [
  {
    num: "01",
    title: "通调气血·固本培元",
    description:
      "通过远端与局部腧穴配合，调和全身气血运行，为面部组织提供充足的滋养基础，改善因气血不足导致的面色晦暗与松弛。",
  },
  {
    num: "02",
    title: "刺激局部·活血生新",
    description:
      "毫针精准刺激面部穴位，促进局部血液循环，激活成纤维细胞活性，促进胶原蛋白合成与更新，改善面部轮廓饱满度。",
  },
  {
    num: "03",
    title: "激发再生·填补亏虚",
    description:
      "通过整体辨证调理，补益因减重或年龄增长所致的气血亏虚，从根本上提升皮肤的自我修复与维持能力，效果随疗程积累，持续而自然。",
  },
];
const mechanismsRu: { num: string; title: string; description: string }[] = [
  {
    num: "01",
    title: "Регулирование Ци и крови · Укрепление фонда",
    description:
      "Благодаря сочетанию дистальных и местных акупунктур, гармонизировать ци всего тела и кровоток, обеспечить достаточный питательный фундамент для тканей лица, а также улучшить тусклый цвет лица и провисание, вызванное ци и дефицитом крови.",
  },
  {
    num: "02",
    title: "Стимулировать локально · способствовать циркуляции крови",
    description:
      "Тонкие иглы точно стимулируют акупунктуры лица, способствуют местному кровообращению, активируют активность фибробластов, способствуют синтезу и обновлению коллагена и улучшают полноту контура лица.",
  },
  {
    num: "03",
    title: "Регенерация стимулов · дефицит наполнения",
    description:
      "Благодаря холистической дифференциации синдрома и кондиционированию, добавке ци и дефициту крови, вызванному потерей веса или старением, фундаментально улучшают способность кожи к самовосстановлению и поддержанию, с эффектами, накапливающимися в течение курса лечения, устойчивыми и естественными.",
  },
];



const coreAdvantages: { title: string; description: string }[] = [
  {
    title: "Non-invasive Procedure, Zero Recovery Period",
    description:
      "No incisions, no injections, no anesthesia, normal activities can resume immediately after treatment. Compared to the weeks-long recovery period of surgical facelifts and the foreign body sensation and swelling that may occur with thread lifting, acupuncture has almost no side effects and does not affect daily life and work arrangements.",
  },
  {
    title: "No Allogeneic Substances, Safe and Controllable",
    description:
      "Hyaluronic acid fillers and botulinum toxin are both exogenous injectable substances, with risks of allergy, nodules, displacement or facial stiffness. Acupuncture only uses fine needles for micro-stimulation, stimulating the skin's own repair ability, with no allogeneic components entering the body.",
  },
  {
    title: "Treats Both Root and Symptoms, Natural and Long-lasting Effects",
    description:
      "Filler methods belong to external force filling, and effects fade after stopping treatment. Acupuncture improves the skin's self-maintenance ability from the root by harmonizing qi and blood and promoting collagen regeneration. Effects accumulate over time, improvements are natural, and unnatural feelings are unlikely to occur.",
  },
  {
    title: "Holistic Conditioning, Simultaneous Complexion Improvement",
    description:
      "Acupuncture's systemic conditioning is not limited to the face, but also improves qi and blood circulation, sleep quality and overall constitution. Many patients report improved complexion and more energy while their facial tightness improves - this is a holistic benefit that cannot be achieved by purely local medical aesthetics.",
  },
];

const coreAdvantagesZh: { title: string; description: string }[] = [
  {
    title: "无创操作，零恢复期",
    description:
      "无切口、无注射、无麻醉，治疗后即可正常活动。相比手术拉皮数周的恢复周期、线雕可能出现的异物感与肿胀，针灸几乎无副作用，不影响日常生活与工作安排。",
  },
  {
    title: "无异体物质，安全可控",
    description:
      "玻尿酸填充与肉毒素均为外来注射物质，存在过敏、结节、位移或表情僵硬等风险。针灸仅以毫针微刺激，激发皮肤自身修复能力，无任何异体成分进入体内。",
  },
  {
    title: "标本兼治，效果自然持久",
    description:
      "填充类手段属于外力填充，停止治疗后效果消退。针灸通过调和气血、促进胶原再生，从根本上提升皮肤自我维持能力，效果随时间积累，改善自然，不易出现违和感。",
  },
  {
    title: "整体调理，气色同步改善",
    description:
      "针灸的系统性调理不局限于面部，同时改善气血循环、睡眠质量与整体体质。许多患者面部紧致改善的同时，也反馈气色变好、精力更充沛——这是单纯局部医美无法实现的整体获益。",
  },
];
const coreAdvantagesRu: { title: string; description: string }[] = [
  {
    title: "Неинвазивная процедура, нулевой период восстановления",
    description:
      "Никаких разрезов, никаких инъекций, никакой анестезии, нормальная деятельность может возобновиться сразу после лечения. По сравнению с недельным периодом восстановления хирургических подтяжек лица и ощущения инородного тела и отеков, которые могут возникнуть при подъеме нити, иглоукалывание почти не имеет побочных эффектов и не влияет на повседневную жизнь и работу.",
  },
  {
    title: "Никаких аллогенных веществ, безопасных и контролируемых",
    description:
      "Наполнители гиалуроновой кислоты и ботулинический токсин являются экзогенными инъекционными веществами, с риском аллергии, узелков, смещения или жесткости лица. Иглоукалывание использует только тонкие иглы для микростимуляции, стимулируя собственную способность кожи к восстановлению, без аллогенных компонентов, поступающих в организм.",
  },
  {
    title: "Лечит как корень, так и симптомы, естественные и длительные эффекты",
    description:
      "Методы наполнителя относятся к наполнение внешней силой, а эффекты исчезают после прекращения лечения. Иглоукалывание улучшает способность кожи к самоподдержанию из корня, гармонизируя ци и кровь и способствуя регенерации коллагена. Эффекты накапливаются с течением времени, улучшения естественны, и неестественные чувства вряд ли произойдут.",
  },
  {
    title: "Холистическое кондиционирование, одновременное улучшение",
    description:
      "Систематическая кондиционирование иглоукалывания не ограничивается лицом, но также улучшает ци и кровообращение, качество сна и общую конституцию. Многие пациенты сообщают об улучшении цвета лица и увеличении энергии, в то время как их стеснение лица улучшается - это целостное преимущество, которое не может быть достигнуто с помощью чисто местной медицинской эстетики.",
  },
];



const candidates: { num: string; title: string; description: string }[] = [
  {
    num: "1",
    title: "Those with Facial Sagging After Weight Loss",
    description:
      "Those who experience facial sagging, hollowing or \"collapsed face\" troubles after weight loss and wish to improve facial contours without resorting to surgery or injectable fillers.",
  },
  {
    num: "2",
    title: "Those with Preventive Beauty Needs",
    description:
      "Weight losers who hope to undergo facial beauty treatment simultaneously during gradual weight loss to prevent skin sagging.",
  },
  {
    num: "3",
    title: "Age-related Facial Sagging",
    description:
      "Those with facial collagen loss and contour sagging due to aging or genetic factors.",
  },
  {
    num: "4",
    title: "Those Seeking Natural Therapies",
    description:
      "Those seeking safe, non-invasive, natural beauty methods and have concerns about surgery or injectable treatments such as hyaluronic acid.",
  },
  {
    num: "5",
    title: "Those Needing Holistic Conditioning",
    description:
      "Those who hope to improve complexion, appearance and physical condition simultaneously through holistic qi and blood conditioning.",
  },
];

const candidatesZh: { num: string; title: string; description: string }[] = [
  {
    num: "1",
    title: "减重后面部松弛者",
    description:
      "减重后出现面部松弛、凹陷或\"垮脸\"困扰，希望在不借助手术或注射填充的情况下改善面部轮廓者。",
  },
  {
    num: "2",
    title: "预防性美容需求者",
    description:
      "希望在逐步减重过程中同步进行面部美容治疗，以预防皮肤松弛的减重者。",
  },
  {
    num: "3",
    title: "年龄相关面部松弛者",
    description:
      "因年龄增长或遗传因素导致面部胶原流失、轮廓松弛者。",
  },
  {
    num: "4",
    title: "寻求自然疗法者",
    description:
      "寻求安全、无创、自然美颜方式，对手术或玻尿酸等注射类治疗有顾虑者。",
  },
  {
    num: "5",
    title: "整体调理需求者",
    description:
      "希望通过整体调理气血，同步改善面色、气色与体质状态者。",
  },
];
const candidatesRu: { num: string; title: string; description: string }[] = [
  {
    num: "1",
    title: "Те, у кого лицо отвисло после потери веса",
    description:
      "Те, кто испытывает проблемы с провисанием лица, полостью или «обвалом лица» после потери веса и хотят улучшить контуры лица, не прибегая к операции или инъекционным наполнителям.",
  },
  {
    num: "2",
    title: "Люди с превентивной красотой",
    description:
      "Похудевшие, которые надеются пройти лечение красоты лица одновременно во время постепенной потери веса, чтобы предотвратить провисание кожи.",
  },
  {
    num: "3",
    title: "Возрастная обвисание лица",
    description:
      "Те, у кого потеря коллагена лица и обвисание контура из-за старения или генетических факторов.",
  },
  {
    num: "4",
    title: "Те, кто ищет естественную терапию",
    description:
      "Те, кто ищет безопасные, неинвазивные, естественные методы красоты и обеспокоены хирургическими операциями или инъекционными процедурами, такими как гиалуроновая кислота.",
  },
  {
    num: "5",
    title: "Для тех, кто нуждается в целостном кондиционировании",
    description:
      "Те, кто надеется улучшить цвет лица, внешний вид и физическое состояние одновременно с помощью целостной ци и кондиционирования крови.",
  },
];



const contraindications = [
  "Pregnant women",
  "Those with coagulation disorders",
  "Those with local skin infection, damage or active eczema/dermatitis",
  "Diabetic patients with uncontrolled blood sugar",
];

const contraindicationsZh = [
  "妊娠期女性",
  "凝血功能障碍者",
  "局部皮肤感染、破损或活动性湿疹/皮炎者",
  "血糖未受控的糖尿病患者",
];
const contraindicationsRu = [
  "Беременные женщины",
  "Те, у кого есть коагуляционные расстройства",
  "Те, у кого есть местная инфекция кожи, повреждение или активная экзема / дерматит",
  "Диабетические пациенты с неконтролируемым уровнем сахара в крови",
];



const processSteps: {
  num: string;
  title: string;
  duration: string;
  description: string;
}[] = [
  {
    num: "1",
    title: "Online Preliminary Consultation and Needs Assessment",
    duration: "1-3 working days",
    description:
      "Contact MedKungfu via email to inform about facial concerns. This therapy usually does not require pre-operative remote video consultation; if there are special needs or complex medical history, remote TCM assessment can be arranged separately.",
  },
  {
    num: "2",
    title: "Develop China Travel Itinerary",
    duration: "3-7 working days",
    description:
      "After confirming the intention to receive treatment, MedKungfu assists in planning the trip to China, including: assisting with visa required materials (such as hospital invitation letter); recommending accommodation near the hospital; assisting with booking airport transfers; and suggesting reasonable stay duration based on the personalized treatment plan developed by the physician.",
  },
  {
    num: "3",
    title: "Pre-admission Assessment",
    duration: "Day 1 after arrival",
    description:
      "After entry, accompanied by bilingual medical escort to the hospital. The physician conducts the first face-to-face consultation, including: TCM constitution identification and syndrome differentiation analysis; assessment of facial sagging degree and distribution; confirmation of no contraindications; development of personalized acupuncture point prescription and treatment plan.",
  },
  {
    num: "4",
    title: "Acupuncture Treatment Implementation",
    duration: "About 30 minutes each time",
    description:
      "Each treatment takes about 30 minutes, led by senior acupuncturists. MedKungfu bilingual medical escorts are present throughout to ensure barrier-free communication.",
  },
  {
    num: "5",
    title: "Phase Effect Assessment and Plan Adjustment",
    duration: "After each phase",
    description:
      "After completing each phase, the physician evaluates the treatment effect, including: changes in facial tightness and fullness; improvement in complexion and overall condition; and adjusts acupuncture point prescription or treatment frequency based on individual response.",
  },
  {
    num: "6",
    title: "Pre-departure Summary and Home Maintenance Guidance",
    duration: "At the end of treatment course",
    description:
      "After completing the treatment course, the physician provides written Chinese-English treatment summary and home maintenance recommendations, including: daily dietary conditioning (qi and blood supplementation); recommended self-acupoint massage techniques; lifestyle habit recommendations (adequate sleep, avoiding rapid weight loss, etc.).",
  },
];

const processStepsZh: {
  num: string;
  title: string;
  duration: string;
  description: string;
}[] = [
  {
    num: "1",
    title: "在线初步咨询与需求评估",
    duration: "1-3个工作日",
    description:
      "通过邮件与MedKungfu联系，告知面部困扰情况。本疗法通常无需术前远程视频面诊；如有特殊需求或病史复杂，可另行安排远程中医评估。",
  },
  {
    num: "2",
    title: "制定赴华行程规划",
    duration: "3-7个工作日",
    description:
      "确认接受治疗意向后，MedKungfu协助规划赴华行程，包括：协助安排签证所需材料（如医院邀请函）；推荐医院周边住宿；协助预订机场接送；并根据医师制定的个性化疗程方案，建议合理的停留时间。",
  },
  {
    num: "3",
    title: "入院前评估",
    duration: "抵达后第1天",
    description:
      "入境后，由双语陪诊人员陪同前往医院。医师进行首次面诊，包括：中医体质辨识与辨证分析；面部松弛程度与分布评估；确认无禁忌症；制定个性化针灸穴位处方与疗程计划。",
  },
  {
    num: "4",
    title: "针灸治疗实施",
    duration: "每次约30分钟",
    description:
      "每次治疗约30分钟，由资深针灸医师主导实施。全程由MedKungfu双语陪诊人员在场，确保沟通无障碍。",
  },
  {
    num: "5",
    title: "阶段性效果评估与方案调整",
    duration: "每阶段结束后",
    description:
      "每完成一个阶段后，医师对治疗效果进行评估，包括：面部紧致度与饱满度变化；气色与整体状态改善情况；并根据个体反应调整穴位处方或治疗频率。",
  },
  {
    num: "6",
    title: "返程前总结与居家维护指导",
    duration: "疗程结束时",
    description:
      "完成疗程后，医师提供书面中英文治疗总结与居家维护建议，包括：日常饮食调养（气血双补）；推荐的自我穴位按摩手法；生活习惯建议（充足睡眠、避免快速减重等）。",
  },
];
const processStepsRu: {
  num: string;
  title: string;
  duration: string;
  description: string;
}[] = [
  {
    num: "1",
    title: "Предварительная онлайн-консультация и оценка потребностей",
    duration: "1-3 рабочих дня",
    description:
      "Свяжитесь с MedKungfu по электронной почте, чтобы сообщить о проблемах с лицом. Эта терапия обычно не требует предоперационной удаленной видеоконсультации; при наличии особых потребностей или сложной истории болезни дистанционная оценка ТКМ может быть организована отдельно.",
  },
  {
    num: "2",
    title: "Развивайте маршрут путешествия по Китаю",
    duration: "3-7 рабочих дней",
    description:
      "После подтверждения намерения получить лечение, MedKungfu помогает в планировании поездки в Китай, в том числе: помощь с необходимыми материалами для получения визы (например, письмо-приглашение в больницу); рекомендации проживания рядом с больницей; помощь в бронировании трансферов из аэропорта; и предложение разумной продолжительности пребывания на основе индивидуального плана лечения, разработанного врачом.",
  },
  {
    num: "3",
    title: "Предварительная оценка допуска",
    duration: "День 1 после прибытия",
    description:
      "После поступления в сопровождении двуязычного медицинского сопровождения в больницу. Врач проводит первую личную консультацию, в том числе: анализ идентификации конституции ТКМ и дифференциации синдрома; оценка степени и распространения провисания лица; подтверждение отсутствия противопоказаний; разработка персонализированного рецепта на иглоукалывание и плана лечения.",
  },
  {
    num: "4",
    title: "Реализация лечения иглоукалыванием",
    duration: "Каждый раз около 30 минут",
    description:
      "Каждое лечение занимает около 30 минут, во главе с старшими иглотерапевтами. Двуязычные медицинские эскорты MedKungfu присутствуют повсюду, чтобы обеспечить безбарьерную связь.",
  },
  {
    num: "5",
    title: "Оценка эффекта фазы и корректировка плана",
    duration: "После каждой фазы",
    description:
      "После завершения каждой фазы врач оценивает эффект лечения, в том числе: изменения в герметичности и полноте лица; улучшение цвета лица и общего состояния; и корректирует частоту назначения иглоукалывания или лечения на основе индивидуального ответа.",
  },
  {
    num: "6",
    title: "Предварительное резюме и руководство по обслуживанию дома",
    duration: "В конце курса лечения",
    description:
      "После завершения курса лечения врач предоставляет письменное резюме лечения на китайском языке и рекомендации по домашнему обслуживанию, в том числе: ежедневное диетическое кондиционирование (ци и добавление крови); рекомендуемые методы массажа с помощью самоточечных массажей; рекомендации по привычке к образу жизни (адекватный сон, избегание быстрой потери веса и т. Д.).",
  },
];



const whyChoose: { title: string; description: string }[] = [
  {
    title: "Bilingual Medical Translation",
    description:
      "Dedicated personnel accompany patients for medical visits, providing full-process medical interpretation; medical records, diagnostic reports, and treatment plans are all provided in Chinese-English translation to ensure barrier-free communication between patients and physicians.",
  },
  {
    title: "Private Car Transfer · Full-process Accompaniment",
    description:
      "Provides airport private car transfer, with dedicated personnel responsible for pickup/drop-off and full-process accompaniment for each visit, so patients don't have to face transportation and hospital navigation difficulties alone.",
  },
  {
    title: "Dedicated Coordinator · Butler-style Service",
    description:
      "Equipped with dedicated patient coordinator throughout the process, coordinating appointments, tracking visit progress, and covering non-medical living needs such as dining, shopping, and local tours, truly achieving butler-style one-stop service.",
  },
  {
    title: "Visa · Itinerary · Accommodation One-stop Arrangement",
    description:
      "Assists with preparing medical visa invitation letters and application guidance, provides entry guidance and cultural adaptation suggestions, and arranges suitable accommodation for patients and families, ensuring worry-free travel.",
  },
];

const whyChooseZh: { title: string; description: string }[] = [
  {
    title: "双语医疗翻译",
    description:
      "专人陪同就诊，提供全程医疗口译；病历、诊断报告、治疗计划均提供中英文翻译，确保患者与医师之间零障碍沟通。",
  },
  {
    title: "专车接送·全程陪诊",
    description:
      "提供机场专车接送，每次就诊均有专人负责接送与全程陪同，患者无需独自面对交通与院内导航的困扰。",
  },
  {
    title: "专属协调员·管家式服务",
    description:
      "全程配备专属患者协调员，统筹预约、就诊进度跟踪，并覆盖餐饮、购物、本地游览等非医疗生活需求，真正做到管家式一站式服务。",
  },
  {
    title: "签证·行程·住宿一站安排",
    description:
      "协助准备医疗签证邀请函及申请指导，提供入境引导、文化适应建议，并为患者及家属安排合适住宿，让整个行程无后顾之忧。",
  },
];
const whyChooseRu: { title: string; description: string }[] = [
  {
    title: "Двуязычный медицинский перевод",
    description:
      "Персонал сопровождает пациентов для медицинских визитов, обеспечивая полный процесс медицинского перевода; медицинские записи, диагностические отчеты и планы лечения предоставляются в китайско-английском переводе для обеспечения безбарьерной связи между пациентами и врачами.",
  },
  {
    title: "Трансфер частных автомобилей · Полное сопровождение",
    description:
      "Обеспечивает трансфер частных автомобилей в аэропорту, с выделенным персоналом, ответственным за доставку / высадку и полное сопровождение процесса для каждого посещения, поэтому пациентам не нужно сталкиваться с транспортными и навигационными трудностями в больнице.",
  },
  {
    title: "Специальный координатор · Служба в стиле Батлера",
    description:
      "Оснащен специализированным координатором пациентов на протяжении всего процесса, координируя встречи, отслеживая прогресс в посещении и покрывая немедицинские потребности в жизни, такие как обеды, покупки и местные туры, действительно достигая универсального обслуживания в стиле дворецкого.",
  },
  {
    title: "Виза · Маршрут · Размещение в одном месте",
    description:
      "Оказывает помощь в подготовке писем с приглашением на медицинскую визу и руководства по подаче заявления, предоставляет руководство по въезду и рекомендации по культурной адаптации, а также организует подходящее жилье для пациентов и семей, обеспечивая беззаботное путешествие.",
  },
];



export default function AcupunctureBeautyContent() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const isRu = lang === "ru";

  const badges = isZh ? heroBadgesZh : isRu ? heroBadgesRu : heroBadges;
  const mechanics = isZh ? mechanismsZh : isRu ? mechanismsRu : mechanisms;
  const advantages = isZh ? coreAdvantagesZh : isRu ? coreAdvantagesRu : coreAdvantages;
  const candidateList = isZh ? candidatesZh : isRu ? candidatesRu : candidates;
  const contraindicationList = isZh ? contraindicationsZh : isRu ? contraindicationsRu : contraindications;
  const steps = isZh ? processStepsZh : isRu ? processStepsRu : processSteps;
  const reasons = isZh ? whyChooseZh : isRu ? whyChooseRu : whyChoose;

  return (
    <main
      role="main"
      aria-label="Acupuncture Beauty and Skin Tightening Therapy"
      className="min-h-screen bg-[#F5F7FA] pt-10 pb-20"
    >
      <div className="container-custom">
        {/* ===== HERO ===== */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-900 via-pink-900 to-rose-900">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
            <div>
              <p className="text-lg text-rose-200 mb-4 tracking-wider">
                Beauty Programme
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                {isZh ? "针灸美颜紧肤疗法" : isRu ? "Иглоукалывание Лицевое омоложение" : "Acupuncture Facial Rejuvenation"}
              </h1>
              <p className="text-xl md:text-2xl text-rose-200 mb-4">
                Acupuncture Facial Rejuvenation
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                {isZh
                  ? "气血调和，从内而外焕活容颜"
                  : isRu ? "Гармонизируйте Ци и кровь, омолаживайте красоту изнутри" : "Harmonize Qi and Blood, Rejuvenate Beauty from Within"}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors"
                >
                  {isZh ? "立即咨询" : isRu ? "Получить консультацию" : "Consult Now"}
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
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* ===== WHAT IS ACUPUNCTURE FACIAL REJUVENATION ===== */}
        <section id="intro" className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <Reveal x={-30}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
                  {isZh
                    ? "什么是针灸美颜紧肤疗法？"
                    : isRu ? "Что такое акупунктурное омоложение лица?" : "What is Acupuncture Facial Rejuvenation?"}
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  {isZh
                    ? "针灸是中国传统医学（中医）的核心治疗手段之一，有着超过两千年的临床历史。它通过将极细的毫针刺入人体特定穴位，刺激经络系统，调节气血运行，从而恢复身体的自然平衡与自愈能力。"
                    : isRu ? "Иглоукалывание является одним из основных методов лечения традиционной китайской медицины (ТКМ), с более чем двухтысячелетней клинической историей. Он включает в себя вставку чрезвычайно тонких игл в определенные точки человеческого тела, чтобы стимулировать систему меридиана, регулировать ци и кровоток, тем самым восстанавливая естественный баланс организма и способность к самовосстановлению." : "Acupuncture is one of the core treatment methods of traditional Chinese medicine (TCM), with over two thousand years of clinical history. It involves inserting extremely fine needles into specific acupoints of the human body to stimulate the meridian system, regulate qi and blood flow, thereby restoring the body's natural balance and self-healing ability."}
                </p>
                <p className="text-gray-600 mb-6">
                  {isZh
                    ? "世界卫生组织（WHO）已将其列为多类病症的推荐疗法，在中国各级三甲医院中，针灸科均为正式临床科室，由执照医师主诊。"
                    : isRu ? "Всемирная организация здравоохранения (WHO) включила его в список рекомендуемых методов лечения различных заболеваний. В китайских высших больницах на всех уровнях отделения иглоукалывания являются формальными клиническими отделениями, диагностируемыми лицензированными врачами." : "The World Health Organization (WHO) has listed it as a recommended therapy for various conditions. In Chinese tertiary hospitals at all levels, acupuncture departments are formal clinical departments, diagnosed by licensed physicians."}
                </p>
                <p className="text-gray-600 mb-6">
                  {isZh
                    ? "在美容医学领域，针灸近年来被广泛用于面部紧致、气色改善与抗衰老。其原理在于通过经络调节与微刺激，激活皮肤自身的修复与再生机制，而非依赖外来物质填充。"
                    : isRu ? "В области эстетической медицины иглоукалывание широко используется в последние годы для подтяжки лица, улучшения цвета лица и борьбы со старением. Его принцип заключается в активации собственных механизмов восстановления и регенерации кожи посредством регулирования меридианов и микростимуляции, а не в использовании экзогенного наполнения вещества." : "In the field of aesthetic medicine, acupuncture has been widely used in recent years for facial tightening, complexion improvement and anti-aging. Its principle lies in activating the skin's own repair and regeneration mechanisms through meridian regulation and micro-stimulation, rather than relying on exogenous substance filling."}
                </p>
                <div className="flex items-center space-x-4 text-rose-600">
                  <Icons.checkCircle className="h-6 w-6" />
                  <span className="font-semibold">
                    {isZh
                      ? "针灸美颜的核心逻辑不是\"填\"，而是\"养\""
                      : isRu ? "Основная логика красоты иглоукалывания не «наполняет», а «питает»" : "The core logic of acupuncture beauty is not \"filling\" but \"nourishing\""}
                  </span>
                </div>
              </Reveal>
              <Reveal x={30} className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured Unsplash asset */}
                <img
                  src="/sites/www-medkungfu-com-363c9bc1/shared/images/photo-1576091160550-2173dba999ef-w800.jpg"
                  alt="Acupuncture Beauty Treatment"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===== HOW ACUPUNCTURE IMPROVES FACIAL SAGGING ===== */}
        <section className="py-20 lg:py-32 bg-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                {isZh
                  ? "针灸如何改善垮脸"
                  : isRu ? "Как иглоукалывание улучшает провисание лица" : "How Acupuncture Improves Facial Sagging"}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {isZh
                  ? "面对减重后\"垮脸\"困扰，中医针灸从\"气血平衡\"的整体观出发，提供了一条安全而有效的改善途径"
                  : isRu ? "Столкнувшись с проблемой «обрушенного лица» после потери веса, иглоукалывание ТКМ обеспечивает безопасный и эффективный подход к улучшению с целостного взгляда на «ци и баланс крови»." : "Facing the \"collapsed face\" trouble after weight loss, TCM acupuncture provides a safe and effective improvement approach from the holistic view of \"qi and blood balance\""}
              </p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              {mechanics.map((item) => (
                <Reveal key={item.num} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6 text-2xl font-bold">
                    {item.num}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CORE ADVANTAGES ===== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                {isZh ? "核心优势" : isRu ? "Основные преимущества" : "Core Advantages"}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {isZh
                  ? "与其他医美方式的差异化优势"
                  : isRu ? "Дифференцированные преимущества по сравнению с другими эстетическими методами" : "Differentiated advantages compared to other aesthetic methods"}
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((adv, i) => (
                <Reveal key={adv.title} className="bg-rose-50 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6">
                    {i === 0 && <Icons.shield className="h-10 w-10" />}
                    {i === 1 && <Icons.heart className="h-10 w-10" />}
                    {i === 2 && <Icons.sparkles className="h-10 w-10" />}
                    {i === 3 && <Icons.user className="h-10 w-10" />}
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

        {/* ===== SUITABLE CANDIDATES + CONTRAINDICATIONS ===== */}
        <section className="py-20 lg:py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <Reveal x={-30}>
                <h2 className="text-3xl font-bold text-[#1A1A2E] mb-8">
                  {isZh ? "适用人群" : isRu ? "Подходящие кандидаты" : "Suitable Candidates"}
                </h2>
                <p className="text-gray-600 mb-6">
                  {isZh
                    ? "以下情况的患者尤为适合本疗法。所有患者在首次治疗前均需经医师评估，以确认适应症并制定个性化方案。"
                    : isRu ? "Пациенты со следующими состояниями особенно подходят для этой терапии. Все пациенты должны быть оценены врачом перед первым лечением, чтобы подтвердить показания и разработать индивидуальные планы." : "Patients with the following conditions are particularly suitable for this therapy. All patients need to be assessed by a physician before the first treatment to confirm indications and develop personalized plans."}
                </p>
                <div className="space-y-4">
                  {candidateList.map((item) => (
                    <div
                      key={item.num}
                      className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4"
                    >
                      <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {item.num}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1A1A2E] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal x={30}>
                <h2 className="text-3xl font-bold text-[#1A1A2E] mb-8">
                  {isZh ? "禁忌人群" : isRu ? "Противопоказания" : "Contraindications"}
                </h2>
                <p className="text-gray-600 mb-6">
                  {isZh
                    ? "以下情况不宜接受本疗法，请在咨询时如实告知医师："
                    : isRu ? "Следующие условия не должны получать эту терапию, пожалуйста, сообщите врачу правдиво во время консультации:" : "The following conditions should not receive this therapy, please inform the physician truthfully during consultation:"}
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <ul className="space-y-4">
                    {contraindicationList.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-gray-700"
                      >
                        <span className="w-2 h-2 bg-rose-400 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-500 text-sm mt-6 pt-4 border-t">
                    {isZh
                      ? "首次治疗前，医师将进行中医体质辨识与面部评估，确保方案与您的个体状态精准匹配。"
                      : isRu ? "Перед первым лечением врач проведет идентификацию конституции ТКМ и оценку лица, чтобы убедиться, что план точно соответствует вашему индивидуальному состоянию." : "Before the first treatment, the physician will conduct TCM constitution identification and facial assessment to ensure the plan precisely matches your individual condition."}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===== TREATMENT PROCESS ===== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                {isZh ? "治疗流程" : isRu ? "Процесс лечения" : "Treatment Process"}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {isZh
                  ? "从首次咨询到返程随访，MedKungfu为每一位赴华接受治疗的海外患者提供从行前规划到返程随访的全链路陪诊服务"
                  : isRu ? "От начальной консультации до последующего наблюдения за пациентом, MedKungfu предоставляет комплексные сопутствующие услуги по диагностике для каждого зарубежного пациента, приезжающего в Китай для лечения, от планирования до отъезда до последующего наблюдения." : "From initial consultation to return follow-up, MedKungfu provides end-to-end accompanying diagnosis services for every overseas patient coming to China for treatment, from pre-departure planning to return follow-up"}
              </p>
            </Reveal>
            <div className="space-y-6">
              {steps.map((step) => (
                <Reveal key={step.num} className="bg-slate-50 rounded-2xl p-6 relative">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="font-bold text-[#1A1A2E] text-lg">
                          {step.title}
                        </h3>
                        <span className="text-sm text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
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

        {/* ===== WHY CHOOSE US ===== */}
        <section className="py-20 lg:py-32 bg-rose-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isZh ? "为什么选择我们" : isRu ? "Почему выбирают нас" : "Why Choose Us"}
              </h2>
              <p className="text-rose-200 max-w-2xl mx-auto">
                {isZh
                  ? "MedKungfu为每一位赴华接受治疗的海外患者提供专业的医疗旅游服务"
                  : isRu ? "MedKungfu предоставляет профессиональные услуги медицинского туризма для каждого зарубежного пациента, приезжающего в Китай для лечения." : "MedKungfu provides professional medical tourism services for every overseas patient coming to China for treatment"}
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reasons.map((item, i) => (
                <Reveal key={item.title} className="bg-white/10 rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {i === 0 && <Icons.globe className="h-8 w-8" />}
                    {i === 1 && <Icons.mapPin className="h-8 w-8" />}
                    {i === 2 && <Icons.users className="h-8 w-8" />}
                    {i === 3 && <Icons.award className="h-8 w-8" />}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section id="contact" className="py-20 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
                {isZh
                  ? "准备好开始您的龙华针灸美颜之旅了吗？"
                  : isRu ? "Готовы начать свое путешествие по красоте иглоукалывания Longhua?" : "Ready to Start Your Longhua Acupuncture Beauty Journey?"}
              </h2>
              <p className="text-gray-600 mb-8">
                {isZh
                  ? "联系我们进行免费初步评估。我们的医学顾问将尽快回复，并为您安排专业的双语咨询服务。"
                  : isRu ? "Свяжитесь с нами для бесплатной предварительной оценки. Наши медицинские консультанты ответят вам как можно скорее и организуют для вас профессиональные консультации на двух языках." : "Contact us for a free preliminary assessment. Our medical consultants will respond as soon as possible and arrange professional bilingual consultation services for you."}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:contact@medkungfu.com"
                  className="px-8 py-4 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors"
                >
                  {isZh ? "邮件咨询" : isRu ? "Консультация по электронной почте" : "Email Consultation"}
                </a>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-rose-500 text-rose-500 font-semibold rounded-lg hover:bg-rose-50 transition-colors"
                >
                  {isZh ? "在线留言" : isRu ? "Онлайн-запрос" : "Online Inquiry"}
                </Link>
              </div>
              <p className="text-gray-500 mt-8">
                {isZh
                  ? "邮箱：contact@medkungfu.com"
                  : isRu ? "Электронная почта: contact@medkungfu.com" : "Email: contact@medkungfu.com"}
              </p>
            </Reveal>
          </div>
        </section>
      </div>
    </main>
  );
}

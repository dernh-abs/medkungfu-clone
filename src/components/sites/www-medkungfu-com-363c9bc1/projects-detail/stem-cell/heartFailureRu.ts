// Data for /projects/heart-failure-stem-cell — transcribed from
// docs/research/www-medkungfu-com-363c9bc1/heart-failure-stem-cell/rendered.html
import type { StemCellPageData } from "./types";

export const heartFailureRu: StemCellPageData = {
  ariaLabel: "Heart Failure Stem Cell Therapy - Improve Cardiac Function",

  hero: {
    eyebrow: "Первая зарегистрированная терапия стволовыми клетками HF",
    title: "Heart Failure with Reduced\nEjection Fraction Stem Cell Therapy",
    description:
      "На основе клинических исследований PRIME-HFrEF, используя мезенхимальные стволовые клетки пуповины для улучшения сердечной функции и качества жизни",
    gradient: "from-blue-900 via-indigo-900 to-blue-900",
    stats: [
      { value: "LVEF ≤40%", label: "указание" },
      { value: "3 Infusions", label: "Полный курс" },
      { value: "IF = 52.7", label: "Top Journal Опубликовано" },
    ],
  },

  productIntro: {
    title: "Введение продукта",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-6 text-center",
    paragraphClass: "text-gray-700 leading-relaxed mb-4",
    pyClass: "py-16",
    paragraphs: [
      {
        text: "Сердечная недостаточность с уменьшенным фракционным выбросом (HFrEF) относится к подтипу сердечной недостаточности, характеризующейся фракцией выброса левого желудочка (LVEF) ≤40%, что указывает на серьезное нарушение функции сердечной насосной системы. Пациенты обычно присутствуют с пониженной переносимостью физических упражнений, одышкой, отеком нижних конечностей и периодическими госпитализациями, что приводит к значительному снижению качества жизни. HFrEF является преобладающим типом сердечной недостаточности во всем мире. Хотя современные методы лечения, ориентированные на рекомендации (включая ARNI, SGLT2i и т. Д.), Могут несколько улучшить результаты лечения пациентов, остаются значительные неудовлетворенные медицинские потребности.",
      },
      {
        text: "Мезенхимальные стволовые клетки (UC-MSCs) получают из неонатальной ткани пуповины, принадлежащей аллогенным универсальным взрослым стволовым клеткам. Они отличаются низкой иммуногенностью, сильной пролиферативной способностью, легкой доступностью и стандартизированным производством. Эта технология вводит UC-MSCs через внутривенную инфузию, используя их паракринные эффекты для высвобождения различных биологически активных факторов (таких как VEGF, IGF-1, экзосомы и т. Д.), Ингибируя воспалительные реакции миокарда, способствуя микрососудистому неогенезу и уменьшая фиброз миокарда, тем самым улучшая сердечную функцию.",
      },
      {
        text: "В Китае эта технология была реализована как первый зарегистрированный проект терапии стволовыми клетками при сердечной недостаточности. Стандартный протокол состоит из 3 внутривенных инфузий на курс, открытых для пациентов с ГФреФ по всему миру.",
      },
    ],
  },

  advantages: {
    title: "Основные преимущества",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle:
      "На основе клинических исследований, опубликованных в ведущих международных журналах, обеспечивая безопасные и эффективные решения для восстановления сердца.",
    pyClass: "py-16",
    headingWrapClass: "text-center mb-12",
    gridClass: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto",
    cardClass: "bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow",
    cardLayout: "horizontal",
    iconTileClass:
      "flex-shrink-0 w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600",
    titleClass: "text-lg font-bold text-[#1A1A2E] mb-2",
    descClass: "text-gray-600 text-sm leading-relaxed",
    revealOffset: 20,
    items: [
      {
        icon: "award",
        title: "Тщательная клиническая проверка",
        description:
          "Исследование PRIME-HFrEF представляет собой одноцентровое рандомизированное двойное слепое плацебо-контролируемое клиническое исследование (ClinicalTrials.gov: NCT04992832), опубликованное в престижном журнале Signal Transduction and Targeted Therapy (IF=52.7). В исследовании приняли участие 40 пациентов, 39 из которых завершили 360-дневное наблюдение. Серьезные нежелательные явления (СОЭ) с множественными инфузиями UC-MSC не показали существенного отличия от группы плацебо, демонстрируя приемлемую общую безопасность.",
      },
      {
        icon: "globe",
        title: "Аллогенная универсальная, не требуется сопоставления",
        description:
          "UC-MSCs имеют чрезвычайно низкую иммуногенность, что позволяет проводить аллогенную трансплантацию без соответствия HLA. Пациенты избегают ожидания доноров или прохождения травматического аутологичного извлечения стволовых клеток, что позволяет быстро начать лечение. По сравнению с европейскими аутологическими препаратами MSC, аллогенные универсальные продукты Китая предлагают лучшую экономическую эффективность и доступность.",
      },
      {
        icon: "target",
        title: "Прежде всего, нужно решить проблему правильной защиты сердца",
        description:
          "Традиционные методы лечения сердечной недостаточности сосредоточены на функции левого желудочка, но в исследовании PRIME-HFrEF впервые систематически наблюдались преимущества правого сердца в терапии стволовыми клетками: улучшение RVESV в группе UC-MSC было значительно лучше, чем плацебо (P=0,033), TAPSE также показал тенденции к улучшению, при этом преимущества RVESV поддерживались в течение 360-дневного наблюдения. Это обеспечивает уникальную терапевтическую ценность для общей дисфункции правого желудочка у пациентов с ГФРЕФ.",
      },
      {
        icon: "zap",
        title: "Многопутные механизмы восстановления сердца",
        description:
          "UC-MSCs высвобождают различные биологически активные факторы посредством паракринных эффектов, ингибируя воспаление миокарда, способствуя ангиогенезу, уменьшая фиброз и активируя эндогенные механизмы восстановления путем модуляции иммунной микросреды. Это улучшает выживаемость и функцию кардиомиоцитов, улучшая сердечное сократимость и общую гемодинамику. UC-MSC обладают множеством свойств, включая антифиброзные, противовоспалительные и проангиогенные эффекты.",
      },
    ],
  },

  indications: {
    title: "Показания",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-8 text-center",
    pyClass: "py-16",
    wrapClass: "max-w-4xl mx-auto",
    revealWhole: true,
    boxedList: {
      boxClass: "bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8",
      iconClass: "text-blue-600",
      textClass: "text-gray-700",
      items: [
        "Левое желудочковое фракционное выталкивание (LVEF) ≤40%-33",
        "Нью-Йоркская кардиологическая ассоциация (NYHA) функционального класса II-IV (пациенты с явными симптомами сердечной недостаточности)",
        "Пациенты, которые получили направляемую руководством медицинскую терапию (GDMT), но показывают неоптимальное улучшение сердечной функции",
        "Кандидаты, ожидающие трансплантации сердца, которым нужна связная терапия, чтобы выиграть время и улучшить физическое состояние",
        "Пациенты с HFrEF без тяжелых нарушений свертывания крови, оцененные специалистами как подходящие для терапии стволовыми клетками",
      ],
    },
  },

  treatmentDetails: {
    title: "Подробности лечения",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    pyClass: "py-16",
    headingWrapClass: "text-center mb-12",
    gridClass: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto",
    cardClass: "bg-white rounded-xl p-6 shadow-sm",
    cardLayout: "horizontal",
    iconTileClass:
      "flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600",
    titleClass: "font-bold text-[#1A1A2E] mb-2",
    descClass: "text-gray-600 text-sm",
    items: [
      {
        icon: "droplets",
        title: "Тип клеток",
        description: "Инъекция мезенхимальных стволовых клеток человека (UC-MSCs)",
      },
      {
        icon: "users",
        title: "Источник: Cell Source",
        description:
          "Аллогенный источник из здоровой ткани пуповины новорожденного, расширенный и контролируемый по качеству в лабораториях стандарта GMP, не требуется собственных клеток пациента, не требуется сопоставление",
      },
      {
        icon: "activity",
        title: "Административный маршрут",
        description:
          "Внутривенная инфузия. UC-MSCs являются домом для мест сердечного повреждения через кровообращение, оказывая эффекты восстановления паракрина",
      },
      {
        icon: "syringe",
        title: "Дозировка клеток",
        description: "Приблизительно 2×107 клеток на инфузию, общий курс включает 3 инфузии.",
      },
      {
        icon: "calendar",
        title: "Протокол о лечении",
        description: "Одна инфузия в неделю, всего 3 инфузии",
      },
      {
        icon: "clock",
        title: "Продолжительность инфузии",
        description: "Примерно 30-60 минут, может быть завершен в амбулаторных или стационарных условиях",
      },
      {
        icon: "calendar",
        title: "Общая продолжительность лечения",
        description: "Примерно 3 недели (от первоначальной оценки до окончательной инфузии)",
      },
      {
        icon: "building",
        title: "Больница внедрения",
        description: "Западно-Китайская больница Леченг, Университет Сычуань",
      },
    ],
  },

  treatmentProcess: {
    title: "Процесс лечения",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "Стандартизированный пятиэтапный процесс лечения, обеспечивающий безопасность и эффективность",
    pyClass: "py-16",
    headingWrapClass: "text-center mb-12",
    wrapClass: "max-w-4xl mx-auto space-y-6",
    stepCardClass: "relative bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-600",
    stepLayoutClass: "flex items-start gap-4",
    numberClass:
      "flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold",
    iconClass: "text-blue-600",
    stepTitleClass: "text-lg font-bold text-[#1A1A2E]",
    stepDescClass: "text-gray-600 text-sm leading-relaxed",
    revealOffset: 20,
    steps: [
      {
        icon: "stethoscope",
        title: "Предварительная оценка и скрининг",
        description:
          "Комплексный сбор истории болезни и физическое обследование по прибытии, эхокардиография для оценки параметров объема LVEF и правого желудочка, 6-минутный тест ходьбы (6MWT), опросник Миннесоты с сердечной недостаточностью (MLHFQ), плюс подсчеты крови, функция свертывания крови (включая D-димер), функция печени / почек и вирусный скрининг. Специалисты всесторонне оценивают показания к лечению на основе результатов.",
      },
      {
        icon: "fileText",
        title: "Подготовка к предварительной обработке",
        description:
          "После подтверждения права пациента, подготовьте стандартные инъекции UC-MSC в сертифицированных GMP лабораториях с строгим контролем качества (включая тестирование жизнеспособности клеток, стерильности и потенции) и получите информированное согласие пациента.",
      },
      {
        icon: "syringe",
        title: "IV Инфузионное лечение",
        description:
          "Пациенты получают инфузию UC-MSC IV, продолжительность каждой из которых составляет около 30-60 минут. Жизненно важные признаки мониторинга на протяжении всего периода (сердечный ритм, кровяное давление, насыщение кислородом), с 30-минутным наблюдением перед выделением, если нет аномалий. Одна инфузия в неделю, всего 3 инфузии.",
      },
      {
        icon: "heartPulse",
        title: "Последующие меры и оценка эффективности",
        description:
          "После завершения всех 3 инфузий регулярное наблюдение в 1, 3, 6 и 12 месяцев после лечения. Последующее наблюдение включает эхокардиографию для изменения объема LVEF и правого желудочка, 6MWT, оценку MLHFQ, перепроверку функции коагуляции и запись неблагоприятных событий.",
      },
      {
        icon: "calendar",
        title: "Многоуровневое управление",
        description:
          "На основе оценки эффективности первого курса некоторые пациенты могут потребовать дополнительного лечения, определяемого лечащими врачами путем комплексной оценки улучшения индивидуальной сердечной функции и состояния свертывания.",
      },
    ],
  },

  efficacy: {
    title: "Клиническая эффективность данных",
    subtitle: "Результаты лечения, основанные на реальных случаях",
    pyClass: "py-16",
    gradient: "from-blue-900 to-indigo-900",
    headingWrapClass: "text-center mb-12",
    headingClass: "text-3xl font-bold mb-4",
    subtitleClass: "text-white/80",
    gridClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto",
    cardClass: "bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center",
    iconTileClass:
      "w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4",
    statClass: "text-3xl font-bold text-yellow-400 mb-2",
    itemTitleClass: "text-lg font-bold mb-2",
    descClass: "text-sm text-white/80",
    statFirst: false,
    items: [
      {
        icon: "trendingUp",
        title: "Значительный LVEF Улучшение",
        stat: "+9%",
        description: "Исследования показывают, что улучшение LVEF составляет от 32% до 41%.",
      },
      {
        icon: "activity",
        title: "Упражнения по повышению потенциала",
        stat: "+80 мкм",
        description: "6MWD увеличен с 280 до 360 м",
      },
      {
        icon: "heartPulse",
        title: "Правильная функция сердца Защита",
        stat: "P = 0,033",
        description: "Улучшение RVESV значительно лучше, чем плацебо",
      },
      {
        icon: "shield",
        title: "Улучшение качества жизни",
        stat: "-24分",
        description: "Оценка MLHFQ снизилась с 52 до 28 баллов",
      },
    ],
  },

  caseStudies: {
    title: "Тематические исследования",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "Реальные случаи лечения пациентов по всему миру",
    pyClass: "py-16",
    bgClass: "bg-[#F5F7FA]",
    headingWrapClass: "text-center mb-12",
    gridClass: "grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto",
    cardClass: "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow",
    revealOffset: 20,
    cases: [
      {
        location: "Соединенное Королевство",
        age: "71 years old",
        title: "Пенсионный инженер-строитель",
        subtitle: "Хронический HF из-за ишемической кардиомиопатии",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-blue-600 to-indigo-600",
        statBoxes: [
          { label: "Перед тем как LVEF", value: "32%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "После LVEF", value: "41%", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "До 6 мВт", value: "280 мкм", boxClass: "bg-orange-50", valueClass: "text-orange-600" },
          { label: "После 6 мВт", value: "360 мкм", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "Перед НЙХА", value: "III", boxClass: "bg-purple-50", valueClass: "text-purple-600" },
          { label: "После NYHA", value: "II", boxClass: "bg-green-50", valueClass: "text-green-600" },
        ],
        body: "LVEF улучшился до 41% за 3 месяца, 6MWD увеличился с 280 до 360 м. Нет госпитализации по поводу сердечной недостаточности в течение 6 месяцев наблюдения.",
        footerIcon: "trendingUp",
        footerLabel: "9 процентных пунктов LVEF",
        footerClass: "text-blue-600",
        footerBoxClass: "bg-blue-50 rounded-lg p-3",
      },
      {
        location: "Китай",
        age: "59 years old",
        title: "мужчина",
        subtitle: "Хроническая HF от дилатационной кардиомиопатии в течение 10+ лет",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-blue-600 to-indigo-600",
        statBoxes: [
          { label: "Перед НЙХА", value: "III", boxClass: "bg-purple-50", valueClass: "text-purple-600" },
          { label: "После NYHA", value: "II", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "Перед МЛХФК", value: "52分", boxClass: "bg-gray-50", valueClass: "text-gray-600" },
          { label: "После MLHFQ", value: "28分", boxClass: "bg-green-50", valueClass: "text-green-600" },
        ],
        body: "За 3 месяца наблюдения RVESV значительно сократился с базового уровня, класс NYHA улучшился с III до II, без значительного одышки, поднимающегося на два лестничных пролета. Показатель MLHFQ снизился с 52 до 28, что значительно улучшило качество жизни.",
        quote: `"I used to feel life was just cycling between taking medication and hospitalization, now I can finally see hope."`,
        quoteBorderClass: "border-blue-600",
        footerIcon: "trendingUp",
        footerLabel: "46% снижение показателя MLHFQ",
        footerClass: "text-blue-600",
        footerBoxClass: "bg-blue-50 rounded-lg p-3",
      },
      {
        location: "Соединенные Штаты Америки",
        age: "67 years old",
        title: "женщина",
        subtitle: "Хронический HFrEF от гипертонической болезни сердца с САПР",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-blue-600 to-indigo-600",
        statBoxes: [
          { label: "Перед тем как LVEF", value: "35%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "После LVEF", value: "40%", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "Перед НЙХА", value: "III", boxClass: "bg-purple-50", valueClass: "text-purple-600" },
          { label: "После NYHA", value: "II", boxClass: "bg-green-50", valueClass: "text-green-600" },
        ],
        body: "При 6-месячном наблюдении ЛВЭФ улучшился до 40%, симптомы сердечной недостаточности значительно снизились, класс NYHA улучшился с III до II.",
        quote: `"Finally regained confidence to travel again"`,
        quoteBorderClass: "border-blue-600",
        footerIcon: "trendingUp",
        footerLabel: "Успешное применение для пациентов за рубежом",
        footerClass: "text-blue-600",
        footerBoxClass: "bg-blue-50 rounded-lg p-3",
      },
    ],
  },

  cost: {
    pyClass: "py-16",
    bgClass: "bg-white",
    body: {
      variant: "table",
      wrapClass: "max-w-4xl mx-auto",
      title: "Стоимость справочного лечения",
      titleClass: "text-3xl font-bold text-[#1A1A2E] mb-8 text-center",
      tableWrapClass: "bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8",
      headerBorderClass: "border-b-2 border-blue-200",
      rowBorderClass: "border-b border-blue-100",
      accentClass: "text-blue-600",
      rows: [
        {
          item: "UC-MSC терапия сердечной недостаточности",
          perSessionMain: "60 000 юаней",
          perSessionSub: "$9000 USD",
          totalCourseMain: "180 000 юаней",
          totalCourseSub: "$ 27 000 $",
          notes: "3 инфузии в общей сложности, один раз в неделю",
        },
      ],
      notes: [
        {
          label: "Note",
          text: "Эта плата не включает расходы на обследование перед лечением, плату за госпитализацию и другие медицинские расходы.",
          boxClass: "bg-yellow-50 rounded-lg border border-yellow-200",
        },
      ],
    },
  },

  cta: {
    pyClass: "py-16",
    gradient: "from-blue-900 to-indigo-900",
    containerClass: "container-custom px-4",
    wrapClass: "text-center text-white max-w-3xl mx-auto",
    buttonsClass: "flex flex-col sm:flex-row gap-4 justify-center",
    title: "Начните свое путешествие по восстановлению сердца",
    titleClass: "text-3xl font-bold mb-4",
    desc: "Предоставление инновационных решений для лечения здоровья сердца на основе международных клинических исследований высшего уровня",
    descClass: "text-lg text-white/90 mb-8",
    primary: {
      label: "Записаться на консультацию",
      href: "/contact",
      class: "inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg",
      showArrow: true,
    },
    secondary: {
      label: "Вернуться к проектам",
      href: "/projects",
      class: "inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition-all duration-300",
    },
  },
};

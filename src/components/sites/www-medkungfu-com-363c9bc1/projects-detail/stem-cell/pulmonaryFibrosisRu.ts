// Data for /projects/pulmonary-fibrosis-stem-cell — transcribed from
// docs/research/www-medkungfu-com-363c9bc1/pulmonary-fibrosis-stem-cell/rendered.html
import type { StemCellPageData } from "./types";

export const pulmonaryFibrosisRu: StemCellPageData = {
  ariaLabel: "Pulmonary Fibrosis Stem Cell Therapy - Slow Disease Progression",

  hero: {
    eyebrow: "Регенеративная медицина · терапия стволовыми клетками",
    title: "Стволовая клеточная терапия при легочном фиброзе",
    description:
      "Использование многоцелевых регуляторных возможностей мезенхимальных стволовых клеток (МСК) для вмешательства в патологический процесс легочного фиброза на нескольких уровнях, задерживая или даже обращая вспять снижение функции легких",
    gradient: "from-purple-900 via-indigo-900 to-purple-900",
    primaryCta: { label: "Исследуйте основные преимущества", href: "#advantages" },
    secondaryCta: { label: "Получить консультацию", href: "/contact" },
    primaryCtaClass:
      "px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg",
    secondaryCtaClass:
      "px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors",
  },

  productIntro: {
    title: "Обзор продукта",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6",
    paragraphClass: "text-gray-700 leading-relaxed mb-6",
    pyClass: "py-20",
    centerWrapper: true,
    paragraphs: [
      {
        text: "Легочный фиброз - тяжелое респираторное заболевание, характеризующееся прогрессирующим рубцеванием легочной ткани, где нормальные альвеолярные структуры заменяются пролиферирующей фиброзной тканью, что приводит к застыванию легких и дыхательной недостаточности.",
      },
      {
        text: "Для этого состояния трансплантация легких в настоящее время является единственным потенциально лечебным вариантом, но ее клиническое применение ограничено дефицитом доноров, рисками послеоперационной инфекции и непомерными затратами.",
      },
      {
        text: "Мезенхимальные стволовые клетки (МСК) вмешиваются в патологический процесс легочного фиброза на нескольких уровнях, модулируя иммунные реакции для подавления чрезмерного воспаления, ингибируя активацию аномальных фибробластов и секретируя антифибротические факторы для содействия восстановлению альвеолярного эпителия.",
        callout: true,
        calloutClass: "bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600",
      },
    ],
  },

  advantages: {
    id: "advantages",
    title: "Основные преимущества",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "Почему стоит выбрать мезенхимальную терапию стволовыми клетками при фиброзе легких",
    pyClass: "py-20",
    headingWrapClass: "text-center mb-16",
    gridClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    cardClass:
      "bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
    cardLayout: "stacked",
    iconTileClass:
      "w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6",
    titleClass: "text-xl font-bold text-[#1A1A2E] mb-3",
    descClass: "text-gray-600 leading-relaxed",
    revealOffset: 30,
    items: [
      {
        icon: "activity",
        title: "Многоцелевое регулирование",
        description:
          "MSC не являются одноцелевыми ингибиторами. Благодаря паракриновым эффектам они одновременно выполняют противовоспалительные, антифиброзные, иммуномодулирующие и восстановительные функции тканей, фундаментально регулируя фиброзную микросреду.",
      },
      {
        icon: "trendingUp",
        title: "Обратная функция легких снижается",
        description:
          "Клинические исследования показывают, что пациенты в группе лечения MSC испытали увеличение принудительной жизненной способности (FVC) на 7,8% по сравнению с исходным уровнем в течение 12-месячного периода наблюдения.",
      },
      {
        icon: "shield",
        title: "Отличный профиль безопасности",
        description:
          "Многострановые клинические испытания не подтверждают серьезных побочных эффектов, связанных с лечением, при введении МСК внутривенно. Количество крови, функция печени / почек и воспалительные маркеры остаются нормальными без серьезных аллергических реакций или реакций отторжения.",
      },
      {
        icon: "users",
        title: "Риск иммунного отказа отсутствует",
        description:
          "МСК, полученные из пуповины и менструальной крови, имеют чрезвычайно низкую иммуногенность, что позволяет проводить аллогенную трансплантацию без сопоставления, избегая травм и ограничений аутологичного извлечения стволовых клеток.",
      },
      {
        icon: "droplets",
        title: "Минимально инвазивный и быстрый выздоровление",
        description:
          "Лечение в основном вводят через внутривенную инфузию или небулизированную ингаляцию. По сравнению с основными операциями, такими как трансплантация легких, он минимально инвазивный без бремени госпитализации, что позволяет проводить амбулаторное лечение.",
      },
    ],
  },

  indications: {
    title: "Показания",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4",
    pyClass: "py-20",
    headingWrapClass: "text-center mb-12",
    subtitle: "Данный продукт подходит для пациентов со следующими респираторными заболеваниями:",
    subtitleClass: "text-gray-600",
    wrapClass: "max-w-4xl mx-auto",
    revealWhole: false,
    simpleList: {
      listClass: "space-y-4",
      itemClass: "flex items-start gap-4 bg-purple-50 rounded-xl p-6",
      iconClass: "text-purple-600 flex-shrink-0 mt-1",
      textClass: "text-gray-800 leading-relaxed",
      items: [
        "Идиопатический легочный фиброз (ИЛФ), особенно у пациентов, которые продолжают прогрессировать, несмотря на антифиброзные препараты",
        "Различные вторичные фиброзы легких, включая связанные с заболеванием соединительной ткани интерстициальные заболевания легких и лекарственно-индуцированный легочный фиброз",
        "Изменения после COVID-19 легочного фиброза",
        "Другие подходящие интерстициальные заболевания легких, особенно у пациентов со значительным снижением функции легких (FVC ≥ 40%, DLCO ≥ 20%)",
      ],
    },
  },

  treatmentDetails: {
    title: "Подробности лечения",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4",
    pyClass: "py-20",
    headingWrapClass: "text-center mb-16",
    gridClass: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto",
    cardClass: "bg-white rounded-2xl p-8 shadow-sm",
    cardLayout: "header-block",
    iconTileClass:
      "w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center",
    titleClass: "text-xl font-bold text-[#1A1A2E]",
    descClass: "text-gray-600 leading-relaxed",
    items: [
      {
        icon: "droplets",
        title: "Тип клеток",
        description:
          "Умбильные МСК (UC-MSCs) или инъекции МСК менструальной крови (MenSCs). Менск предлагает стабильный источник ткани, меньше этических проблем и богатые секретомные профили.",
      },
      {
        icon: "syringe",
        title: "Дозировка клеток",
        description: "Общая дозировка на курс составляет примерно 9 × 107 клеток, вводимых в 3 IV инфузии.",
      },
      {
        icon: "activity",
        title: "Административный маршрут",
        description:
          "Инфузия IV является основным маршрутом, где клетки активно мигрируют в места воспаления легких и травм через «домашний» эффект. Некоторые методы также используют небулизированное введение экзосом для бесклеточной терапии.",
      },
      {
        icon: "calendar",
        title: "Расписание лечения",
        description:
          "Полный курс включает в себя несколько назначений (обычно 3 инфузии), с интервалом от нескольких недель до нескольких месяцев, индивидуально скорректированных в зависимости от состояния пациента.",
      },
    ],
  },

  treatmentProcess: {
    title: "Процесс лечения",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "Стандартизированный шестиэтапный процесс лечения, обеспечивающий безопасность и эффективность",
    pyClass: "py-20",
    headingWrapClass: "text-center mb-16",
    wrapClass: "max-w-5xl mx-auto",
    stepCardClass: "bg-[#F5F7FA] rounded-2xl p-6 hover:shadow-md transition-shadow",
    stepLayoutClass: "flex gap-6",
    numberWrap: true,
    numberClass:
      "w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold",
    iconClass: "text-purple-600",
    stepTitleClass: "text-xl font-bold text-[#1A1A2E]",
    stepDescClass: "text-gray-600 leading-relaxed",
    revealOffset: 30,
    steps: [
      {
        icon: "stethoscope",
        title: "Первоначальная оценка",
        description:
          "Комплексная оценка через историю болезни, легочные функциональные тесты (включая FVC и DLCO), 6-минутный тест ходьбы (6MWT) и сканирование КТ с высоким разрешением.",
      },
      {
        icon: "fileText",
        title: "Лабораторный скрининг",
        description:
          "Количество крови, функция печени / почек, профиль коагуляции, вирусный скрининг и иммунологические тесты для обеспечения приемлемости пациента.",
      },
      {
        icon: "droplets",
        title: "Подготовка клеток",
        description:
          "Подготовка инъекций MSC в сертифицированных GMP лабораториях с тщательным тестированием контроля качества.",
      },
      {
        icon: "syringe",
        title: "IV инфузия",
        description:
          "Пациенты получают инфузию стволовых клеток IV амбулаторно, причем каждая инфузия длится примерно 30-60 минут. Всюду отслеживаются жизненно важные признаки.",
      },
      {
        icon: "heartPulse",
        title: "Оценка эффективности и последующая деятельность",
        description:
          "Регулярные пост-обработки обзоры легочной функции, 6-минутное расстояние пешком, качество жизни, и показатели визуализации для динамического отслеживания эффективности и безопасности.",
      },
      {
        icon: "calendar",
        title: "Консолидация лечения",
        description:
          "Основываясь на прогрессировании заболевания и первоначальном ответе на лечение, врачи оценят, необходимы ли дополнительные циклы лечения.",
      },
    ],
  },

  efficacy: {
    title: "Клиническая эффективность",
    subtitle: "Поддерживаемые данными многочисленных международных клинических исследований",
    pyClass: "py-20",
    gradient: "from-purple-900 via-indigo-900 to-purple-900",
    headingWrapClass: "text-center mb-16",
    headingClass: "text-3xl md:text-4xl font-bold mb-4",
    subtitleClass: "text-purple-200",
    gridClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
    cardClass: "bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center",
    iconTileClass:
      "w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4",
    statClass: "text-3xl font-bold text-yellow-300 mb-2",
    itemTitleClass: "text-lg font-semibold mb-2",
    descClass: "text-sm text-purple-200",
    statFirst: true,
    items: [
      {
        icon: "trendingUp",
        stat: "+7.8%",
        title: "Обратный механизм функции легких",
        description: "12-месячное увеличение FVC по сравнению с исходным уровнем в группе лечения MSC",
      },
      {
        icon: "activity",
        stat: "значительный",
        title: "Упражнения по повышению потенциала",
        description: "6MWD показал значительное улучшение на 13 неделе, устойчивое на 26 и 39 неделе.",
      },
      {
        icon: "heartPulse",
        stat: "Большинство пациентов",
        title: "Симптомная помощь",
        description: "Снижение одышки и кашля, улучшение физической работоспособности и качества жизни",
      },
      {
        icon: "shield",
        stat: "60 недель",
        title: "Долгосрочная безопасность",
        description:
          "Исследование US AETHER: никаких серьезных побочных эффектов, связанных с лечением, не наблюдалось после 60-недельного наблюдения",
      },
    ],
  },

  caseStudies: {
    title: "Тематические исследования",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "Реальные результаты лечения пациентов",
    pyClass: "py-20",
    bgClass: "bg-white",
    headingWrapClass: "text-center mb-16",
    gridClass: "grid grid-cols-1 lg:grid-cols-3 gap-8",
    cardClass:
      "bg-[#F5F7FA] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300",
    revealOffset: 30,
    cases: [
      {
        location: "Техас, США",
        locationMeta: "68yo Male",
        title: "ИФА",
        headerStyle: "pf",
        headerGradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
        statRows: [
          { label: "Предварительная обработка FVC", value: "52%", valueClass: "font-semibold text-red-600" },
          { label: "После лечения FVC", value: "61%", valueClass: "font-semibold text-green-600" },
          { label: "Предварительная обработка кислородом", value: ">16 часов в день" },
          {
            label: "После лечения кислородом",
            value: "Сокращение до 6 часов",
            valueClass: "font-semibold text-green-600",
          },
        ],
        callout:
          "Значительно улучшилась способность к самообслуживанию, теперь можно ходить 30 минут в неделю без отдыха",
        calloutClass: "bg-purple-50 rounded-lg p-4 mb-4",
        footerIcon: "checkCircle",
        footerLabel: "Значительное снижение кислородной зависимости",
        footerClass: "text-purple-600",
      },
      {
        location: "Соединенное Королевство",
        locationMeta: "72yo Retired Engineer",
        title: "IPF + COPD",
        headerStyle: "pf",
        headerGradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
        statRows: [
          { label: "Предварительная обработка 6MWT", value: "280 мкм" },
          { label: "После лечения 6MWT", value: "350 мкм", valueClass: "font-semibold text-green-600" },
          { label: "СГРК", value: "-34%", valueClass: "font-semibold text-green-600" },
        ],
        callout:
          "Успешно снижена домашняя кислородотерапия, возобновлено садоводческое хобби, значительно улучшено качество жизни",
        calloutClass: "bg-purple-50 rounded-lg p-4 mb-4",
        footerIcon: "checkCircle",
        footerLabel: "25% улучшение 6MWD",
        footerClass: "text-purple-600",
      },
      {
        location: "Австралия",
        locationMeta: "55yo Female",
        title: "Постковидный PF",
        headerStyle: "pf",
        headerGradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
        statRows: [
          { label: "Предварительная обработка кислородом", value: "24-часовой кислород" },
          {
            label: "После лечения кислородом",
            value: "Успешно отключил кислород",
            valueClass: "font-semibold text-green-600",
          },
          { label: "Расстояние ходьбы", value: "400 м +", valueClass: "font-semibold text-green-600" },
        ],
        callout:
          "Может самостоятельно ходить более 400 метров, демонстрируя многообещающие результаты для вызванного вирусом вторичного легочного фиброза",
        calloutClass: "bg-purple-50 rounded-lg p-4 mb-4",
        footerIcon: "checkCircle",
        footerLabel: "Полная независимость от кислородных устройств",
        footerClass: "text-purple-600",
      },
    ],
  },

  cost: {
    pyClass: "py-20",
    bgClass: "bg-[#F5F7FA]",
    body: {
      variant: "card",
      wrapClass: "max-w-3xl mx-auto",
      cardClass: "bg-white rounded-2xl p-10 shadow-lg text-center",
      icon: "dollarSign",
      iconClass: "mx-auto text-purple-600 mb-6",
      title: "Стоимость справочного лечения",
      titleClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
      price: "$ 20 000 USD",
      priceClass: "text-5xl font-bold text-purple-600 mb-4",
      subtitle: "Фиброз легких MSC плата за лечение",
      note: "*Окончательная стоимость при условии оценки в больнице",
      cta: { label: "Получить подробную цитату", href: "/contact" },
      btnClass:
        "inline-flex items-center gap-2 mt-8 px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-lg",
    },
  },

  cta: {
    pyClass: "py-20",
    gradient: "from-purple-900 via-indigo-900 to-purple-900",
    sectionClass: "text-white",
    containerClass: "container-custom px-4 text-center",
    wrapClass: "",
    buttonsClass: "flex flex-col sm:flex-row items-center justify-center gap-4",
    title: "Начните свое путешествие к восстановлению",
    titleClass: "text-3xl md:text-4xl font-bold mb-6",
    desc: "Наша медицинская команда предоставит вам индивидуальный план лечения, чтобы помочь вам восстановить здоровое дыхание.",
    descClass: "text-lg text-purple-200 mb-8 max-w-2xl mx-auto",
    primary: {
      label: "Записаться на консультацию",
      href: "/contact",
      class: "px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg",
    },
    secondary: {
      label: "Вернуться к проектам",
      href: "/projects",
      class: "px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors",
    },
  },
};

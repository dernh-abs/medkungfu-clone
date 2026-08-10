// Data for /projects/diabetes-stem-cell — transcribed from
// docs/research/www-medkungfu-com-363c9bc1/diabetes-stem-cell/rendered.html
import type { StemCellPageData } from "./types";

export const diabetesRu: StemCellPageData = {
  ariaLabel: "Diabetes Stem Cell Therapy - Improve Pancreatic Function",

  hero: {
    eyebrow: "Первая зарегистрированная терапия стволовыми клетками диабета",
    title: "Type 2 Diabetes\nUmbilical Cord MSC Therapy",
    description:
      "Вмешательство на патологическом уровне корня для функционального восстановления, а не просто поддержание болезни",
    gradient: "from-emerald-900 via-teal-900 to-emerald-900",
    stats: [
      { value: "-1.06%", label: "Avg HbA1c уменьшается" },
      { value: "61.6%", label: "Полное прекращение инсулина" },
      { value: "334 Patients", label: "Клиническое исследование подтверждено" },
    ],
  },

  productIntro: {
    title: "Введение продукта",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-6 text-center",
    paragraphClass: "text-gray-700 leading-relaxed mb-4",
    pyClass: "py-16",
    paragraphs: [
      {
        text: "Мезенхимальные стволовые клетки человеческого пуповинного происхождения (UC-MSC) получены из желе неонатального пуповины Wharton, представляющего собой класс аллогенных универсальных взрослых стволовых клеток с чрезвычайно низкой иммуногенностью и сильной пролиферативной способностью. В отличие от обычных методов лечения, направленных на расширение дозировки инсулина, MSC терапия вмешивается на корневом патологическом уровне диабета 2 типа через несколько путей, включая дифференцировку в инсулин-секретирующие клетки, секрецию противовоспалительных и репаративных цитокинов и иммуномодулирование.",
      },
    ],
  },

  advantages: {
    title: "Основные преимущества",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle:
      "Обеспечение безопасных и эффективных функциональных решений для лечения диабета на основе международных клинических исследований высшего уровня",
    pyClass: "py-16",
    headingWrapClass: "text-center mb-12",
    gridClass: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto",
    cardClass: "bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow",
    cardLayout: "horizontal",
    iconTileClass:
      "flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600",
    titleClass: "text-lg font-bold text-[#1A1A2E] mb-2",
    descClass: "text-gray-600 text-sm leading-relaxed",
    revealOffset: 20,
    items: [
      {
        icon: "award",
        title: "Строгая поддержка клинических доказательств",
        description:
          "В ходе второго этапа клинических испытаний с участием 91 пациента было выявлено снижение дозы инсулина на 27,78% после лечения UC-MSC с хорошим профилем безопасности. Систематический обзор и метаанализ 2025 года на основе 8 клинических испытаний с 334 пациентами (172 MSC-леченных) дополнительно подтвердили: среднее снижение HbA1c на 1,06%, значительное улучшение уровня С-пептида, снижение потребности в инсулине, без серьезных побочных эффектов, связанных с лечением UC-MSC.",
      },
      {
        icon: "globe",
        title: "Аллогенная универсальная, не требуется сопоставления",
        description:
          "UC-MSCs имеют чрезвычайно низкую иммуногенность, что позволяет проводить аллогенную трансплантацию без соответствия HLA. Пациенты избегают травматического аутологичного извлечения клеток и длительных периодов ожидания расширения клеток. После оценки пациента как подходящего, он может быстро ввести стандартизированные протоколы лечения, что облегчает точное планирование поездок для иностранных пациентов.",
      },
      {
        icon: "target",
        title: "Корневые причины функционального ремонта",
        description:
          "В отличие от традиционных подходов к снижению уровня глюкозы, которые пассивно снижают уровень сахара в крови, UC-MSCs секретируют различные биологически активные факторы (HGF, IGF-1 и т. Д.), Чтобы ингибировать поджелудочное и системное низкосортное хроническое воспаление, защищая остаточные β-клетки поджелудочной железы; некоторые дифференцируются в инсулин-секретирующие клетки, непосредственно компенсируя дефицит инсулина; одновременно улучшая резистентность к инсулину системно, способствуя превращению макрофагов из провоспалительного M1 в противовоспалительный фенотип M2. Многочисленные крупномасштабные внутренние и международные клинические испытания и систематические обзоры показывают, что МСК-КК значительно повышают уровень С-пептида, предлагая потенциал для функционального восстановления, а не просто поддержания болезни.",
      },
      {
        icon: "shield",
        title: "Отличная безопасность с минимальными побочными эффектами",
        description:
          "В нескольких рандомизированных двойных слепых клинических испытаниях с участием сотен пациентов группа лечения MSC не испытывала серьезных побочных эффектов, нарушений функции печени / почек, иммунного отторжения или аномалий опухолевых маркеров. Небольшое количество пациентов испытывали переходную низкосортную лихорадку после инфузии, которая спонтанно разрешалась в течение 24 часов. В течение периода исследования не было отмечено тяжелых гипогликемических событий, демонстрирующих хорошую толерантность к лечению.",
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
      boxClass: "bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8",
      extraClass: "mb-8",
      iconClass: "text-emerald-600",
      textClass: "text-gray-700",
      items: [
        "Пациенты, использующие по меньшей мере 3 препарата для снижения уровня глюкозы (с инсулином или без него), по-прежнему демонстрируют субоптимальный гликемический контроль, оцененный специалистами как не имеющий абсолютных противопоказаний.",
        "Пост С-пептида > 0,4 нг/мл (указывает на некоторую остаточную функцию островков поджелудочной железы)",
        "Продолжительность заболевания ≤ 10 лет (основная популяция в этом исследовании; более длительные периоды требуют индивидуальной оценки)",
        "Возраст 18-75 лет, без тяжелой сердечной, печеночной или почечной недостаточности и активных злокачественных опухолей",
        "Информированное согласие и готовность соблюдать полный курс лечения и план последующих действий",
      ],
    },
    contraindications: {
      title: "Противопоказания (в настоящее время неприменимы)",
      titleClass: "text-xl font-bold text-[#1A1A2E] mb-4",
      boxClass: "bg-red-50 rounded-2xl p-8 border border-red-200",
      icon: "thermometer",
      iconClass: "text-red-600",
      textClass: "text-gray-700 text-sm",
      items: [
        "Диабет 1 типа (полностью разрушены β-клетки поджелудочной железы, требуется другой терапевтический путь)",
        "Гестационный диабет",
        "Тяжелая активная инфекция",
        "Неконтролируемая тяжелая гипертензия",
        "Продвинутая уремия",
        "История активных злокачественных опухолей (случаи, вылеченные более 5 лет, требуют индивидуальной оценки)",
      ],
      footerNote:
        "Пациенты с недавно диагностированным диабетом или с сохраненной, но неоптимальной функцией инсулина наиболее явно выигрывают.",
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
      "flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600",
    titleClass: "font-bold text-[#1A1A2E] mb-2",
    descClass: "text-gray-600 text-sm",
    items: [
      {
        icon: "droplets",
        title: "Тип клеток",
        description:
          "Инъекция мезенхимальных стволовых клеток (UC-MSCs) из пуповинной ткани здорового новорожденного, расширенная и контролируемая по качеству в лабораториях стандарта GMP.",
      },
      {
        icon: "fileText",
        title: "Спецификация ячейки",
        description:
          "Стандартная спецификация блока: 5×107 ячеек/2.5 мл препарата. Метод приготовления, одобренный Управлением по контролю за медицинскими препаратами Леченга, со строгим тестированием на жизнеспособность клеток, стерильность и потенцию.",
      },
      {
        icon: "syringe",
        title: "Однократный дозировка",
        description:
          "Рассчитывается при весе тела 1×106 клеток/кг (вес взрослого 50-90 кг, примерно 5×107 клеток на инфузию).",
      },
      {
        icon: "activity",
        title: "Административный маршрут",
        description:
          "Внутривенная инфузия, приблизительно 30-60 минут, с непрерывным мониторингом жизненно важных признаков, поддающаяся амбулаторному или стационарному контролю.",
      },
      {
        icon: "calendar",
        title: "Расписание лечения",
        description:
          "Каждый полный курс состоит из 3 внутривенных инфузий, один раз в неделю в течение 3 недель подряд.",
      },
      {
        icon: "clock",
        title: "Последующие меры и управление прогнозами",
        description:
          "Регулярное наблюдение в течение 84 дней, 20 недель и 48 недель после лечения после завершения всех 3 инфузий.",
      },
    ],
  },

  treatmentProcess: {
    title: "Процесс лечения",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "Стандартизированный шестиэтапный процесс лечения, обеспечивающий безопасность и эффективность",
    pyClass: "py-16",
    headingWrapClass: "text-center mb-12",
    wrapClass: "max-w-4xl mx-auto space-y-6",
    stepCardClass: "relative bg-white rounded-xl p-6 shadow-sm border-l-4 border-emerald-600",
    stepLayoutClass: "flex items-start gap-4",
    numberClass:
      "flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold",
    iconClass: "text-emerald-600",
    stepTitleClass: "text-lg font-bold text-[#1A1A2E]",
    stepDescClass: "text-gray-600 text-sm leading-relaxed",
    revealOffset: 20,
    steps: [
      {
        icon: "fileText",
        title: "Предварительный онлайн-скрининг и оценка",
        description:
          "Пациенты предоставляют последние медицинские записи, включая записи мониторинга глюкозы в крови и HbA1c, результаты теста на С-пептид натощак, историю приема лекарств, снижающих уровень глюкозы (включая использование инсулина), функцию печени / почек и отчеты о вирусном скрининге. Специалисты предварительно оценивают право на лечение.",
      },
      {
        icon: "stethoscope",
        title: "Прибытие и базовая экспертиза",
        description:
          "По прибытии в больницу пациенты проходят оценку приема, эхокардиографию, тестирование на резистентность к инсулину (HOMA-IR / глюкозный зажим) для подтверждения права на участие и подписания информированного согласия.",
      },
      {
        icon: "droplets",
        title: "Подготовка клеток и освобождение от сопоставления",
        description:
          "Больница соответствует предварительно отобранным препаратам UC-MSC (5×107 клеток/доза) из стандартных центров подготовки, следующих стандартам GMP, завершая тестирование контроля качества. Из-за чрезвычайно низкой иммуногенности, не требуется сопоставление HLA, что исключает дополнительное время ожидания для иностранных пациентов.",
      },
      {
        icon: "syringe",
        title: "IV Инфузионное лечение",
        description:
          "1-я инфузия: ~45 минут с непрерывным мониторингом ЭКГ / артериального давления, первоначальным измерением глюкозы в крови и оценкой толерантности перед выделением. 2-я инфузия: через неделю, продолжая наблюдения за жизненно важными признаками и флуктуацией глюкозы в крови. 3-я инфузия: еще через неделю, завершив текущий полный курс.",
      },
      {
        icon: "heartPulse",
        title: "Руководство по контролю и сокращению лекарств",
        description:
          "После завершения 3 инфузий, медицинская команда проводит регулярные наблюдения в течение 84 дней, 20 недель и 48 недель (местные тесты могут быть завершены онлайн с представленными отчетами). Основываясь на показателях гликемического контроля и восстановления функции поджелудочной железы, врачи постепенно направляют планы снижения уровня глюкозы / снижения уровня инсулина.",
      },
      {
        icon: "calendar",
        title: "Долгосрочное управление заболеваниями",
        description:
          "На основании индивидуальной оценки эффективности, некоторым пациентам могут потребоваться дополнительные циклы консолидации. Специальные протоколы всесторонне разработаны лечащими врачами, рассматривающими первоначальный ответ на лечение и будущий гликемический статус.",
      },
    ],
  },

  efficacy: {
    title: "Клиническая эффективность данных",
    subtitle: "Результаты лечения, основанные на реальных случаях",
    pyClass: "py-16",
    gradient: "from-emerald-900 to-teal-900",
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
        title: "Значительное снижение HbA1c",
        stat: "-1.06%",
        description: "Мета-анализ показывает общее среднее снижение HbA1c",
      },
      {
        icon: "activity",
        title: "Прекращение приема лекарств",
        stat: "61.6%",
        description: "45 пациентов полностью прекратили прием инсулина, самый длительный 12 месяцев",
      },
      {
        icon: "heartPulse",
        title: "Восстановление функции панкреатики",
        stat: "+40-50%",
        description: "Уровень С-пептидов увеличился с исходного уровня, что доказывает восстановление автономной секреции",
      },
      {
        icon: "shield",
        title: "Сокращение лекарств >50%",
        stat: "84天",
        description: "Препараты для снижения глюкозы уменьшаются на >50% в течение 84 дней после 3 инфузий",
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
        location: "Канада",
        age: "59 years old",
        title: "предприниматель",
        subtitle: "Диабет 2 типа в течение 8+ лет",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-emerald-600 to-teal-600",
        statBoxes: [
          { label: "Перед HbA1c", value: "9.2%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "После HbA1c", value: "7.0%", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "Снижение инсулина", value: "53%", boxClass: "bg-blue-50", valueClass: "text-blue-600", colSpan: true },
        ],
        body: "При 3-месячном наблюдении HbA1c снизился до 7,0%, использование инсулина сократилось на 53%, пероральные препараты снизились с 3 до 2. Уровень глюкозы в крови натощак оставался стабильным на 6-месячном периоде наблюдения.",
        quote: `"Blood sugar used to fluctuate like a roller coaster, now I finally feel the long-lost stability"`,
        quoteBorderClass: "border-emerald-600",
        footerIcon: "trendingUp",
        footerLabel: "Первый пациент за рубежом в Боао Леченг",
        footerClass: "text-emerald-600",
        footerBoxClass: "bg-emerald-50 rounded-lg p-3",
      },
      {
        location: "Индонезия",
        age: "43 years old",
        title: "мужчина",
        subtitle: "Ожирение при диабете 2 типа и гиперурикемии",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-emerald-600 to-teal-600",
        statBoxes: [
          { label: "Перед HbA1c", value: ">8%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "После HbA1c", value: "5.1%", boxClass: "bg-green-50", valueClass: "text-green-600" },
        ],
        body: "Через три месяца после лечения уровень глюкозы в крови натощак снизился до 91 мг/дл (5,1 ммоль/л), HbA1c снизился до 5,1%, триглицериды снизились с аномальных уровней до 151 мг/дл, мочевая кислота до 4,9 мг/дл. Клинические симптомы, включая никтурию, усталость и нейропатическую боль, значительно улучшились с полным разрешением сухой кожи и трескания пятки.",
        footerIcon: "trendingUp",
        footerLabel: "UC-MSC в сочетании с экзосомной терапией",
        footerClass: "text-emerald-600",
        footerBoxClass: "bg-emerald-50 rounded-lg p-3",
      },
      {
        location: "Австралия",
        age: "62 years old",
        title: "Пенсионная медсестра",
        subtitle: "Диабет 2 типа в течение 12 лет",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-emerald-600 to-teal-600",
        statBoxes: [
          { label: "Перед HbA1c", value: "8.2-9.5%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "После HbA1c", value: "6.9%", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "Снижение инсулина", value: "~40%", boxClass: "bg-blue-50", valueClass: "text-blue-600", colSpan: true },
          { label: "C-пептидный рост", value: ">30%", boxClass: "bg-purple-50", valueClass: "text-purple-600", colSpan: true },
        ],
        body: "При 3-месячном наблюдении уровень С-пептида натощак увеличился более чем на 30% от исходного уровня, HbA1c упал до 6,9% в пределах целевого диапазона. Успешно сократилось потребление инсулина почти на 40%, при этом значительно улучшилась общая жизнеспособность и не было серьезных постпрандиальных колебаний глюкозы в крови во время трехнедельного плавания.",
        footerIcon: "trendingUp",
        footerLabel: "C-пептид увеличивается >30%",
        footerClass: "text-emerald-600",
        footerBoxClass: "bg-emerald-50 rounded-lg p-3",
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
      tableWrapClass: "bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8",
      headerBorderClass: "border-b-2 border-emerald-200",
      rowBorderClass: "border-b border-emerald-100",
      accentClass: "text-emerald-600",
      rows: [
        {
          item: "UC-MSC терапия диабета 2 типа",
          perSessionMain: "58 000 юаней",
          perSessionSub: "$9000 USD",
          totalCourseMain: "174 000 юаней",
          totalCourseSub: "$ 27 000 $",
          notes: "1 полный курс включает 3 инфузии, один раз в неделю",
        },
      ],
      notesWrapClass: "mt-6 space-y-2",
      notes: [
        {
          label: "Note",
          text: "Стоимость включает в себя подготовку клеток UC-MSC, 3 инфузии IV, послеинфузионный стационарный/амбулаторный мониторинг и 84-дневный контроль медицинских расходов.",
          boxClass: "bg-yellow-50 rounded-lg border border-yellow-200",
        },
        {
          text: "В стоимость не входят дополнительные предметы обследования и другие медицинские расходы, необходимые для личных осложнений. Конкретные расходы подлежат окончательной оценке в больнице.",
          boxClass: "bg-gray-50 rounded-lg border border-gray-200",
        },
      ],
    },
  },

  cta: {
    pyClass: "py-16",
    gradient: "from-emerald-900 to-teal-900",
    containerClass: "container-custom px-4",
    wrapClass: "text-center text-white max-w-3xl mx-auto",
    buttonsClass: "flex flex-col sm:flex-row gap-4 justify-center",
    title: "Начните свой путь функционального восстановления диабета",
    titleClass: "text-3xl font-bold mb-4",
    desc: "Предоставление инновационных решений для лечения глюкозы в крови на основе международных клинических исследований высшего уровня",
    descClass: "text-lg text-white/90 mb-8",
    primary: {
      label: "Записаться на консультацию",
      href: "/contact",
      class: "inline-flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-emerald-50 transition-all duration-300 shadow-lg",
      showArrow: true,
    },
    secondary: {
      label: "Вернуться к проектам",
      href: "/projects",
      class: "inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition-all duration-300",
    },
  },
};

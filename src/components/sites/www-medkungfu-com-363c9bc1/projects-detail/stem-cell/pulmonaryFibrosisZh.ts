// Chinese (zh) data for /projects/pulmonary-fibrosis-stem-cell — transcribed from
// docs/research/www-medkungfu-com-363c9bc1/i18n/zh/pulmonary-fibrosis-stem-cell.html
// Structural/visual fields (class strings, icon names, numbers, booleans) are
// copied verbatim from pulmonaryFibrosis.ts; only human-readable text is Chinese.
import type { StemCellPageData } from "./types";

export const pulmonaryFibrosisZh: StemCellPageData = {
  ariaLabel: "Pulmonary Fibrosis Stem Cell Therapy - Slow Disease Progression",

  hero: {
    eyebrow: "再生医学 · 干细胞治疗",
    title: "肺纤维化干细胞治疗",
    description:
      "利用间充质干细胞（MSCs）的多靶点调控能力，从多个层面干预肺纤维化的病理进程，延缓乃至逆转肺功能下降",
    gradient: "from-purple-900 via-indigo-900 to-purple-900",
    primaryCta: { label: "了解核心优势", href: "#advantages" },
    secondaryCta: { label: "立即咨询", href: "/contact" },
    primaryCtaClass:
      "px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg",
    secondaryCtaClass:
      "px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors",
  },

  productIntro: {
    title: "产品简介",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6",
    paragraphClass: "text-gray-700 leading-relaxed mb-6",
    pyClass: "py-20",
    centerWrapper: true,
    paragraphs: [
      {
        text: "肺纤维化（Pulmonary Fibrosis）是一种以肺组织进行性瘢痕化为特征的严重呼吸系统疾病，正常的肺泡结构被增生的纤维组织取代，导致肺组织僵硬、气体交换功能衰竭。",
      },
      {
        text: "对于该疾病，肺移植是目前唯一可能治愈的手段，但受限于供体稀缺、术后感染风险和高昂费用，临床上难以广泛开展。",
      },
      {
        text: "间充质干细胞（MSCs）通过免疫调节抑制过度的炎症反应、抑制成纤维细胞异常活化、分泌抗纤维化因子促进肺泡上皮修复，从多个层面干预肺纤维化的病理进程。",
        callout: true,
        calloutClass: "bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600",
      },
    ],
  },

  advantages: {
    id: "advantages",
    title: "核心优势",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "为什么选择间充质干细胞治疗肺纤维化",
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
        title: "多靶点调控，全面干预病理进程",
        description:
          "MSCs不是单一靶点的抑制剂，而是通过旁分泌效应同时发挥抗炎、抗纤维化、免疫调节和组织修复作用，从根本上调控纤维化微环境。",
      },
      {
        icon: "trendingUp",
        title: "延缓乃至逆转肺功能下降",
        description:
          "临床研究数据表明，间充质干细胞治疗组患者在12个月的随访期内，用力肺活量（FVC）较基线增加了7.8%。",
      },
      {
        icon: "shield",
        title: "安全性良好",
        description:
          "多国临床试验证实，静脉输注间充质干细胞未出现严重治疗相关不良事件。血常规、肝肾功能、炎症指标均无异常，无严重过敏或排斥反应。",
      },
      {
        icon: "users",
        title: "无免疫排斥风险，异体移植便捷",
        description:
          "从脐带、宫血等来源提取的间充质干细胞免疫原性极低，无需配型即可用于异体移植，避免了自体干细胞提取的创伤和局限性。",
      },
      {
        icon: "droplets",
        title: "微创、恢复快",
        description:
          "治疗以静脉输注或雾化吸入为主要给药途径，相较于肺移植等大型手术，创伤极小、无住院负担，患者可在门诊完成治疗。",
      },
    ],
  },

  indications: {
    title: "适应症",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4",
    pyClass: "py-20",
    headingWrapClass: "text-center mb-12",
    subtitle: "本品适用于以下呼吸系统疾病患者",
    subtitleClass: "text-gray-600",
    wrapClass: "max-w-4xl mx-auto",
    revealWhole: false,
    simpleList: {
      listClass: "space-y-4",
      itemClass: "flex items-start gap-4 bg-purple-50 rounded-xl p-6",
      iconClass: "text-purple-600 flex-shrink-0 mt-1",
      textClass: "text-gray-800 leading-relaxed",
      items: [
        "特发性肺纤维化（IPF），尤其是已接受抗纤维化药物但仍持续进展的患者",
        "各类继发性肺纤维化，包括结缔组织病相关间质性肺病、药物性肺纤维化等",
        "新冠感染后遗肺纤维化改变",
        "其他符合条件的间质性肺疾病，如肺功能下降明显（FVC ≥ 40%、DLCO ≥ 20%）的患者均可受益",
      ],
    },
  },

  treatmentDetails: {
    title: "治疗内容",
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
        title: "细胞类型",
        description:
          "脐带间充质干细胞（UC-MSCs）或宫血间充质干细胞（MenSCs）注射液。宫血MSCs具有组织来源稳定、伦理争议较少、分泌因子谱丰富等优势。",
      },
      {
        icon: "syringe",
        title: "细胞剂量",
        description: "每疗程总剂量约 9 × 10⁷ 个细胞，分3次静脉输注给药。",
      },
      {
        icon: "activity",
        title: "给药途径",
        description:
          "经静脉输注是主流途径，细胞通过\"归巢\"效应主动迁移至肺部炎症和损伤部位发挥治疗作用。此外，部分技术采用雾化吸入外泌体方式进行无细胞治疗。",
      },
      {
        icon: "calendar",
        title: "疗程安排",
        description:
          "一个完整疗程包含多次给药（通常为3次输注），间隔数周至数月，根据患者病情进行个体化调整。",
      },
    ],
  },

  treatmentProcess: {
    title: "治疗流程",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "标准化六步治疗流程，确保安全有效",
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
        title: "初诊评估",
        description:
          "通过病史采集、肺功能测试（含FVC和DLCO指标）、6分钟步行试验（6MWT）及高分辨率CT检查，全面评估患者疾病严重程度和治疗指征。",
      },
      {
        icon: "fileText",
        title: "实验室筛查",
        description:
          "血常规、肝肾功能、凝血功能、病毒筛查及免疫学检测，确保患者符合治疗条件。",
      },
      {
        icon: "droplets",
        title: "细胞制备",
        description:
          "在GMP标准实验室中制备符合质量标准的间充质干细胞注射液，经严格的质控检测。",
      },
      {
        icon: "syringe",
        title: "静脉输注",
        description:
          "患者以门诊形式接受干细胞静脉输注，每次输注时间约为30–60分钟。治疗过程中常规监测生命体征。",
      },
      {
        icon: "heartPulse",
        title: "疗效评估与随访",
        description:
          "治疗后定期复查肺功能、6分钟步行距离、生活质量和影像学指标，动态跟踪疗效和安全性。",
      },
      {
        icon: "calendar",
        title: "巩固治疗",
        description:
          "根据病情进展程度及初次治疗反应，医生将评估是否需要追加治疗周期。",
      },
    ],
  },

  efficacy: {
    title: "临床疗效",
    subtitle: "基于多项国际临床研究的数据支持",
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
        title: "肺功能逆转",
        description: "间充质干细胞治疗组12个月FVC较基线增加",
      },
      {
        icon: "activity",
        stat: "显著改善",
        title: "运动能力改善",
        description: "6分钟步行距离在13周时出现明显改善，且在26周和39周持续获益",
      },
      {
        icon: "heartPulse",
        stat: "大部分患者",
        title: "症状显著减轻",
        description: "呼吸困难、咳嗽症状减轻，运动能力明显改善，生活质量提高",
      },
      {
        icon: "shield",
        stat: "60 Weeks",
        title: "远期安全性",
        description:
          "美国AETHER研究：单次输注2×10⁸个骨髓MSCs后随访60周，未观察到严重治疗相关不良事件",
      },
    ],
  },

  caseStudies: {
    title: "案例展示",
    headingClass: "text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "真实患者的治疗成果",
    pyClass: "py-20",
    bgClass: "bg-white",
    headingWrapClass: "text-center mb-16",
    gridClass: "grid grid-cols-1 lg:grid-cols-3 gap-8",
    cardClass:
      "bg-[#F5F7FA] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300",
    revealOffset: 30,
    cases: [
      {
        location: "美国德克萨斯州",
        locationMeta: "68岁 男性",
        title: "IPF",
        headerStyle: "pf",
        headerGradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
        statRows: [
          { label: "治疗前FVC", value: "52%", valueClass: "font-semibold text-red-600" },
          { label: "治疗后FVC", value: "61%", valueClass: "font-semibold text-green-600" },
          { label: "治疗前吸氧", value: "每日16小时以上" },
          {
            label: "治疗后吸氧",
            value: "减少至6小时",
            valueClass: "font-semibold text-green-600",
          },
        ],
        callout:
          "生活自理能力大幅改善，已能每周散步30分钟而无需中途休息",
        calloutClass: "bg-purple-50 rounded-lg p-4 mb-4",
        footerIcon: "checkCircle",
        footerLabel: "吸氧时间大幅减少",
        footerClass: "text-purple-600",
      },
      {
        location: "英国",
        locationMeta: "72岁 退休工程师",
        title: "IPF + COPD",
        headerStyle: "pf",
        headerGradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
        statRows: [
          { label: "治疗前6MWT", value: "280m" },
          { label: "治疗后6MWT", value: "350m", valueClass: "font-semibold text-green-600" },
          { label: "SGRQ", value: "-34%", valueClass: "font-semibold text-green-600" },
        ],
        callout:
          "成功减量家庭氧疗，重拾园艺爱好，生活质量显著提高",
        calloutClass: "bg-purple-50 rounded-lg p-4 mb-4",
        footerIcon: "checkCircle",
        footerLabel: "6分钟步行距离提升25%",
        footerClass: "text-purple-600",
      },
      {
        location: "澳大利亚",
        locationMeta: "55岁 女性",
        title: "新冠后肺纤维化",
        headerStyle: "pf",
        headerGradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
        statRows: [
          { label: "治疗前吸氧", value: "24小时吸氧" },
          {
            label: "治疗后吸氧",
            value: "成功脱离氧疗",
            valueClass: "font-semibold text-green-600",
          },
          { label: "行走距离", value: "400m+", valueClass: "font-semibold text-green-600" },
        ],
        callout:
          "可独立行走400米以上，提示干细胞治疗对病毒引发的继发性肺纤维化同样具有良好前景",
        calloutClass: "bg-purple-50 rounded-lg p-4 mb-4",
        footerIcon: "checkCircle",
        footerLabel: "完全脱离氧疗装置",
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
      title: "参考治疗费用",
      titleClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
      price: "~$20,000 USD",
      priceClass: "text-5xl font-bold text-purple-600 mb-4",
      subtitle: "肺纤维化间充质干细胞治疗费",
      note: "*具体费用以医院最终评估为准",
      cta: { label: "获取详细报价", href: "/contact" },
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
    title: "开启您的康复之旅",
    titleClass: "text-3xl md:text-4xl font-bold mb-6",
    desc: "我们的医疗团队将为您提供个性化的治疗方案，帮助您重获健康呼吸",
    descClass: "text-lg text-purple-200 mb-8 max-w-2xl mx-auto",
    primary: {
      label: "立即预约咨询",
      href: "/contact",
      class: "px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg",
    },
    secondary: {
      label: "返回项目列表",
      href: "/projects",
      class: "px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors",
    },
  },
};

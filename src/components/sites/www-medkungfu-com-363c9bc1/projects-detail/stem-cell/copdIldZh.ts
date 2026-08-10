// Chinese (zh) data for /projects/copd-ild-stem-cell — transcribed from
// docs/research/www-medkungfu-com-363c9bc1/i18n/zh/copd-ild-stem-cell.html
import type { StemCellPageData } from "./types";

export const copdIldZh: StemCellPageData = {
  ariaLabel: "COPD/ILD Stem Cell Therapy - Improve Lung Function",

  hero: {
    eyebrow: "全球首创自体肺脏再生技术",
    title: "慢性阻塞性肺病/间质性肺病\n气道基底层干细胞治疗",
    description: "从根源修复肺结构，实现肺功能的根本性改善",
    gradient: "from-cyan-900 via-teal-900 to-cyan-900",
    stats: [
      { value: "+19%", label: "DLCO改善率" },
      { value: "100%", label: "CAT改善比例" },
      { value: "100+", label: "成功案例" },
    ],
  },

  productIntro: {
    title: "产品简介",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-6 text-center",
    paragraphClass: "text-gray-700 leading-relaxed mb-4",
    pyClass: "py-16",
    paragraphs: [
      {
        text: "慢性阻塞性肺疾病（COPD）和间质性肺疾病（ILD）是全球范围内两大类严重威胁呼吸健康的慢性肺部疾病。据世界卫生组织数据，COPD已成为全球第三大死因。传统治疗手段如支气管扩张剂和激素，主要着眼于缓解气道阻塞和控制炎症，但对于疾病的核心病理改变——肺泡结构的破坏和气体交换单位的丧失（即肺气肿）——一直缺乏有效的修复手段，患者肺功能进行性下降的进展难以被扭转。",
      },
      {
        text: "ILD 是一组以肺间质炎症和纤维化为特征的弥漫性肺部疾病，包括特发性肺纤维化（IPF）、结缔组织病相关间质性肺病等。",
      },
      {
        text: "气道基底层干细胞（Airway Basal Stem Cells, BSCs）是气道的成体干细胞，在气道更新及损伤后的再生修复中起着重要作用。不同于传统的间充质干细胞（MSCs）通过旁分泌效应发挥抗炎免疫调节作用，气道基底层干细胞疗法通过直接再生受损的肺泡和支气管上皮结构，从根源上修复肺实质，旨在实现肺功能的根本性改善。",
      },
    ],
  },

  advantages: {
    title: "核心优势",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "全球首创的自体肺脏再生技术，从根源修复肺结构",
    pyClass: "py-16",
    headingWrapClass: "text-center mb-12",
    gridClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto",
    cardClass: "bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow",
    cardLayout: "horizontal",
    iconTileClass:
      "flex-shrink-0 w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600",
    titleClass: "text-lg font-bold text-[#1A1A2E] mb-2",
    descClass: "text-gray-600 text-sm leading-relaxed",
    revealOffset: 20,
    items: [
      {
        icon: "globe",
        title: "全球首创——自体肺脏再生，从根源修复肺结构",
        description:
          "不同于传统间充质干细胞主要依赖旁分泌效应发挥抗炎作用，Airway Basal Stem Cells (BSCs) 采用患者自身的气道基底层干细胞，通过其独特的定向分化能力，直接再生受损的肺泡和支气管上皮结构。为COPD和ILD这类既往被认为“不可逆”的疾病提供了全新的治疗范式。",
      },
      {
        icon: "trendingUp",
        title: "Ⅱ期临床试验证实——肺弥散功能根本性改善",
        description:
          "临床试验证实，关键疗效终点——肺弥散换气功能（DLCO）——在细胞治疗组表现出持续且显著的提升，与对照组相比，在移植后24周和52周均显示出统计学意义的显著改善。",
      },
      {
        icon: "microscope",
        title: "首次影像学证实——肺泡结构修复",
        description:
          "与DLCO改善相呼应，细胞治疗组的肺泡容积（VA）在24周和52周时较对照组显著增加。通过CT影像三维重建分析，首次观察到治疗组患者的功能性肺容积增加，以及肺气肿区域（尤其在下叶）得到部分修复——这为“结构修复引领功能改善”提供了直观的影像学证据。",
      },
      {
        icon: "heartPulse",
        title: "患者生活质量全面提升",
        description:
          "细胞治疗组在COPD评估测试（CAT）评分和改良版英国医学研究委员会（mMRC）呼吸困难评分上的改善程度在统计学上显著优于对照组。细胞治疗24周后，CAT评估临床稳定或改善的人数比例高达100%。",
      },
      {
        icon: "shield",
        title: "自体细胞——无免疫排斥，安全性优异",
        description:
          "采用患者自体气道基底层干细胞，不存在异体细胞的免疫排斥风险。研究期间，治疗组与对照组总体不良事件发生率相当，支气管镜下移植治疗具备安全性可行性。",
      },
      {
        icon: "users",
        title: "真实世界验证——已超百例患者成功应用",
        description:
          "截至2026年4月，已有超过100位患者在瑞金医院海南医院接受了气道基底层干细胞治疗。患者在接受治疗后咳嗽、咳痰等症状明显减轻，肺弥散功能显著改善。",
      },
    ],
  },

  indications: {
    title: "适应症",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-8 text-center",
    pyClass: "py-16",
    wrapClass: "max-w-4xl mx-auto",
    revealWhole: true,
    groups: [
      {
        boxClass: "bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-6",
        titleIcon: "activity",
        iconClass: "text-cyan-600",
        title: "慢性阻塞性肺疾病（COPD）",
        itemIconClass: "text-cyan-600",
        items: [
          "中重度COPD患者（GOLD分级2-4级），经标准药物治疗后仍有明显症状或肺功能持续下降者",
          "伴有明显肺气肿、肺弥散功能降低者",
        ],
      },
      {
        boxClass: "bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6",
        titleIcon: "heartPulse",
        iconClass: "text-blue-600",
        title: "间质性肺疾病（ILD）",
        itemIconClass: "text-blue-600",
        items: [
          "特发性肺纤维化（IPF）",
          "结缔组织病相关间质性肺病（CTD-ILD）",
          "其他病因导致的纤维化性间质性肺疾病",
        ],
      },
      {
        boxClass: "bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6",
        titleIcon: "target",
        iconClass: "text-green-600",
        title: "其他适应症",
        itemIconClass: "text-green-600",
        items: ["支气管扩张症"],
      },
    ],
    contraindications: {
      title: "禁忌症",
      titleClass: "text-xl font-bold text-red-700 mb-4",
      boxClass: "bg-red-50 rounded-2xl p-6 border border-red-200",
      icon: "bullet",
      textClass: "text-gray-700 text-sm",
      items: [
        "活动性恶性肿瘤",
        "严重未控制的感染",
        "严重凝血功能障碍",
        "妊娠期及哺乳期女性",
        "经专科医生评估认为不适合接受支气管镜操作的其他情况",
      ],
    },
  },

  treatmentDetails: {
    title: "治疗内容",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    pyClass: "py-16",
    headingWrapClass: "text-center mb-12",
    gridClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto",
    cardClass: "bg-white rounded-xl p-6 shadow-sm",
    cardLayout: "horizontal",
    iconTileClass:
      "flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600",
    titleClass: "font-bold text-[#1A1A2E] mb-2",
    descClass: "text-gray-600 text-sm",
    items: [
      {
        icon: "droplets",
        title: "细胞类型",
        description: "自体气道基底层干细胞（Autologous Airway Basal Stem Cells），来源于患者自身气道组织",
      },
      {
        icon: "users",
        title: "细胞来源",
        description:
          "通过支气管镜刷检从患者自身气道获取微量健康上皮组织样本，经体外分离、克隆、扩增后制备",
      },
      {
        icon: "syringe",
        title: "给药途径",
        description: "支气管镜下移植，将干细胞悬液精准递送至肺部受损区域",
      },
      {
        icon: "calendar",
        title: "疗程方案",
        description: "单次移植治疗，术后进行52周规律随访",
      },
      {
        icon: "clock",
        title: "制备周期",
        description: "从样本采集到细胞制备完成约需3-5周",
      },
    ],
  },

  treatmentProcess: {
    title: "治疗流程",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "标准化六步治疗流程，确保治疗安全与疗效",
    pyClass: "py-16",
    headingWrapClass: "text-center mb-12",
    wrapClass: "max-w-4xl mx-auto space-y-6",
    stepCardClass: "relative bg-white rounded-xl p-6 shadow-sm border-l-4 border-cyan-600",
    stepLayoutClass: "flex items-start gap-4",
    numberClass:
      "flex-shrink-0 w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold",
    iconClass: "text-cyan-600",
    stepTitleClass: "text-lg font-bold text-[#1A1A2E]",
    stepDescClass: "text-gray-600 text-sm leading-relaxed",
    revealOffset: 20,
    steps: [
      {
        icon: "stethoscope",
        title: "初诊评估与适应证筛查",
        description:
          "患者来院后完成全面病史采集和体格检查，进行肺功能测试（含DLCO、FVC、FEV1等核心指标）、高分辨率CT（HRCT）、6分钟步行试验（6MWT）、COPD评估测试（CAT）及改良版英国医学研究委员会（mMRC）呼吸困难评分。由呼吸科专科医生综合评估是否符合治疗指征。",
      },
      {
        icon: "microscope",
        title: "气道组织样本采集",
        description:
          "符合治疗条件的患者接受支气管镜刷检，从患者自身气道获取微量健康上皮组织样本。该操作微创、安全性高，在门诊或日间手术室即可完成。",
      },
      {
        icon: "droplets",
        title: "细胞制备与扩增",
        description:
          "采集的样本送至GMP标准实验室，利用R-Clone®前体细胞扩增平台进行体外分离、克隆和扩增。制备周期约3-5周，完成后经严格质控（细胞活力、无菌性、效力检测）放行。",
      },
      {
        icon: "syringe",
        title: "支气管镜下细胞移植",
        description:
          "患者接受支气管镜下干细胞移植，将REGEND001干细胞悬液精准递送至肺部受损区域。操作在镇静或麻醉下进行，全程生命体征监护。",
      },
      {
        icon: "heartPulse",
        title: "术后观察与出院",
        description:
          "移植完成后短暂观察，无异常后即可出院。整个过程为微创操作，无需开胸手术，恢复快。",
      },
      {
        icon: "calendar",
        title: "长期随访与疗效评估",
        description:
          "完成移植后，于第4周、24周、52周进行规律随访。随访内容包括肺功能复查（DLCO、FVC）、HRCT影像学评估、6分钟步行试验、CAT及mMRC评分，动态跟踪疗效和安全性。",
      },
    ],
  },

  efficacy: {
    title: "临床疗效数据",
    subtitle: "基于真实世界病例的治疗效果展示",
    pyClass: "py-16",
    gradient: "from-cyan-900 to-teal-900",
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
        title: "DLCO显著提升",
        stat: "+19%",
        description: "案例显示肺弥散功能改善率达19%",
      },
      {
        icon: "activity",
        title: "CAT评分改善",
        stat: "100%",
        description: "24周后临床稳定或改善比例达100%",
      },
      {
        icon: "microscope",
        title: "肺泡容积增加",
        stat: "显著增加",
        description: "24周和52周VA较对照组显著增加",
      },
      {
        icon: "users",
        title: "真实世界验证",
        stat: "100+",
        description: "已超百例患者成功接受治疗",
      },
    ],
  },

  caseStudies: {
    title: "案例展示",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "来自全球患者的真实治疗案例",
    pyClass: "py-16",
    bgClass: "bg-[#F5F7FA]",
    headingWrapClass: "text-center mb-12",
    gridClass: "grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto",
    cardClass: "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow",
    revealOffset: 20,
    cases: [
      {
        location: "中国上海",
        age: "68 岁",
        title: "男性",
        subtitle: "COPD",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-cyan-600 to-teal-600",
        introItalic: "长期咳嗽、气喘，严重影响日常生活和睡眠质量",
        body: "24周随访时，CAT评分显著改善，咳嗽症状几乎消失，喘气明显好转，睡眠质量大幅提升。截至半年随访，病情持续改善，未出现任何不良事件。",
        footerIcon: "trendingUp",
        footerLabel: "咳嗽症状几乎消失",
        footerClass: "text-cyan-600",
        footerBoxClass: "bg-cyan-50 rounded-lg p-3",
      },
      {
        location: "中国新疆",
        age: "56 岁",
        title: "女性",
        subtitle: "COPD",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-cyan-600 to-teal-600",
        statBoxCols: 3,
        statBoxes: [
          { label: "Before DLCO", value: "62%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "After DLCO", value: "74%", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "改善率", value: "+19%", boxClass: "bg-blue-50", valueClass: "text-blue-600" },
        ],
        body: "治疗后2个月复查显示：肺弥散换气功能（DLCO）由治疗前的62%提升至74%，改善率高达19%；DLCO/VA恢复至正常水平。",
        footerIcon: "trendingUp",
        footerLabel: "DLCO改善率达19%",
        footerClass: "text-cyan-600",
        footerBoxClass: "bg-cyan-50 rounded-lg p-3",
      },
      {
        location: "马来西亚",
        age: "53 岁",
        title: "女性",
        subtitle: "间质性肺病（ILD）",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-cyan-600 to-teal-600",
        body: "传统药物治疗效果有限，症状持续进展。2026年1月接受自体支气管基底层细胞移植治疗后，肺功能指标显著改善，活动耐力明显提升，生活质量得到根本性改善。",
        footerIcon: "trendingUp",
        footerLabel: "生活质量根本性改善",
        footerClass: "text-cyan-600",
        footerBoxClass: "bg-cyan-50 rounded-lg p-3",
      },
    ],
  },

  cost: {
    pyClass: "py-16",
    bgClass: "bg-white",
    body: {
      variant: "price",
      wrapClass: "max-w-4xl mx-auto",
      title: "参考治疗费用",
      titleClass: "text-3xl font-bold text-[#1A1A2E] mb-8 text-center",
      tableWrapClass: "bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8",
      price: "15万元人民币",
      priceClass: "text-4xl font-bold text-cyan-600 mb-2",
      priceSub: "~$22,000 USD",
      priceCaption: "/次",
      notes: [
        {
          label: "费用包含",
          text: "气道组织样本采集、细胞制备与扩增、支气管镜下细胞移植操作、术后短期观察及52周内核心随访评估等医疗服务。",
          boxClass: "bg-white rounded-lg border border-cyan-200",
        },
        {
          label: "注",
          text: "费用不包含因个人并发症需要的额外医疗支出。具体费用以医院最终评估为准。",
          boxClass: "bg-yellow-50 rounded-lg border border-yellow-200",
        },
      ],
    },
  },

  cta: {
    pyClass: "py-16",
    gradient: "from-cyan-900 to-teal-900",
    containerClass: "container-custom px-4",
    wrapClass: "text-center text-white max-w-3xl mx-auto",
    buttonsClass: "flex flex-col sm:flex-row gap-4 justify-center",
    title: "开启肺功能修复之旅",
    titleClass: "text-3xl font-bold mb-4",
    desc: "全球首创的自体肺脏再生技术，从根源修复肺结构",
    descClass: "text-lg text-white/90 mb-8",
    primary: {
      label: "预约咨询",
      href: "/contact",
      class: "inline-flex items-center justify-center gap-2 bg-white text-cyan-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-cyan-50 transition-all duration-300 shadow-lg",
      showArrow: true,
    },
    secondary: {
      label: "返回项目列表",
      href: "/projects",
      class: "inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition-all duration-300",
    },
  },
};

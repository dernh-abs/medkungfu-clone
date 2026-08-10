// Chinese (zh) data for /projects/diabetes-stem-cell — transcribed from
// docs/research/www-medkungfu-com-363c9bc1/i18n/zh/diabetes-stem-cell.html
import type { StemCellPageData } from "./types";

export const diabetesZh: StemCellPageData = {
  ariaLabel: "Diabetes Stem Cell Therapy - Improve Pancreatic Function",

  hero: {
    eyebrow: "首个备案糖尿病干细胞治疗项目",
    title: "2型糖尿病\n脐带间充质干细胞治疗",
    description: "从源头干预核心病理环节，实现功能性修复而非仅仅疾病维持",
    gradient: "from-emerald-900 via-teal-900 to-emerald-900",
    stats: [
      { value: "-1.06%", label: "HbA1c平均降幅" },
      { value: "61.6%", label: "完全停用胰岛素" },
      { value: "334 例", label: "临床试验验证" },
    ],
  },

  productIntro: {
    title: "产品简介",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-6 text-center",
    paragraphClass: "text-gray-700 leading-relaxed mb-4",
    pyClass: "py-16",
    paragraphs: [
      {
        text: "人脐带来源间充质干细胞（Umbilical Cord-derived Mesenchymal Stem Cells, UC-MSCs）来源于新生儿脐带沃顿胶，是一类免疫原性极低、增殖能力极强的异体通用型成体干细胞，区别于以扩充胰岛素剂量为核心的常规治疗，MSC疗法通过分化为胰岛素分泌样细胞、分泌抗炎与修复性细胞因子、免疫调节等多重路径，从源头干预2型糖尿病的核心病理环节。",
      },
    ],
  },

  advantages: {
    title: "核心优势",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "基于国际顶级临床研究，提供安全有效的糖尿病功能性修复方案",
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
        title: "严谨的临床证据支撑，国内外顶尖试验验证",
        description:
          "一项纳入了91例患者的II期临床试验显示，脐带来源间充质干细胞治疗后患者胰岛素用量减少27.78%，且安全性良好。2025年基于8项临床试验、334例患者（172例MSC治疗）的系统综述与荟萃分析数据进一步证实：综合降糖血红蛋白平均降幅1.06%、胰岛C肽水平显著提升、胰岛素需求量下降，且未报告任何与UC-MSCs治疗相关的严重不良事件。",
      },
      {
        icon: "globe",
        title: "异体通用，无需配型，治疗启动迅速",
        description:
          "UC-MSCs的免疫原性极低，无须HLA配型即可用于异体移植，患者无需经历自体细胞提取的创伤性操作，亦不存在漫长的细胞扩增等待周期。一经评估合适，可迅速进入标准化治疗流程，便于国际患者制定精准行程。",
      },
      {
        icon: "target",
        title: "干预源头机制，追求功能性修复",
        description:
          "区别于传统降糖方案被动降糖的局限性，UC-MSCs通过分泌多种生物活性因子（HGF、IGF-1等）抑制胰腺及全身低度慢性炎症，保护残存胰岛β细胞；部分分化为胰岛素分泌样细胞，直接弥补胰岛素分泌不足；同时通过促进巨噬细胞从促炎M1型向抗炎M2型转化，系统性改善胰岛素抵抗。多个国内外大型临床试验和系统综述的系统证据表明，UC-MSCs能显著提升C肽水平，有望实现功能性修复而非仅仅是疾病维持。",
      },
      {
        icon: "shield",
        title: "安全性记录优异，全身性副作用极低",
        description:
          "多项涵盖数百例患者的随机双盲临床试验中，MSC治疗组未出现严重不良事件，无肝肾功能损害、免疫排斥及肿瘤标志物异常。少部分患者在输注后出现过一次性低热，均在24小时内自行缓解。研究期间未出现严重低血糖事件，治疗耐受性良好。",
      },
    ],
  },

  indications: {
    title: "适应症",
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
        "联合使用至少3种降糖药（含或不含胰岛素）仍血糖控制不理想者，经专科医生评估无绝对禁忌症",
        "空腹C肽 > 0.4 ng/mL（提示尚存一定残余胰岛功能）者",
        "病程 ≤ 10年者（本研究主要入组人群，更长病程需经个体化评估）",
        "年龄18～75周岁，无严重心、肝、肾功能不全及活动性恶性肿瘤者",
        "知情同意并愿意配合完整的疗程及后续随访计划",
      ],
    },
    contraindications: {
      title: "禁忌症（暂不适用）",
      titleClass: "text-xl font-bold text-[#1A1A2E] mb-4",
      boxClass: "bg-red-50 rounded-2xl p-8 border border-red-200",
      icon: "thermometer",
      iconClass: "text-red-600",
      textClass: "text-gray-700 text-sm",
      items: [
        "1型糖尿病（因胰岛β细胞已被完全破坏，需求路径不同）",
        "妊娠期糖尿病",
        "严重活动性感染",
        "未受控制的重度高血压",
        "晚期尿毒症",
        "活动性恶性肿瘤病史（经治愈后超过5年者需经个案评估）",
      ],
      footerNote: "对于初发糖尿病或胰岛素功能尚存但药效欠佳的患者获益最为明确。",
    },
  },

  treatmentDetails: {
    title: "治疗内容",
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
        title: "细胞类型",
        description:
          "人脐带来源间充质干细胞（UC-MSCs）注射液，提取自健康新生儿脐带组织，经GMP标准实验室扩增和质控。",
      },
      {
        icon: "fileText",
        title: "细胞规格",
        description:
          "5×10⁷个细胞/2.5ml制剂规格为本次治疗标准单元。制剂方式已获乐城医疗药品监管局备案批复，细胞活力、无菌性与效力均通过严格检测。",
      },
      {
        icon: "syringe",
        title: "单次剂量",
        description: "按患者体重1×10⁶个细胞/kg计算（成人体重按50-90kg计，单次输注约使用5×10⁷个细胞）。",
      },
      {
        icon: "activity",
        title: "给药途径",
        description: "经静脉输注，输注时间约30～60分钟，全程生命体征监护，门诊或住院均可完成。",
      },
      {
        icon: "calendar",
        title: "疗程安排",
        description: "每个完整疗程为3次静脉输注，每周1次，连续治疗3周。",
      },
      {
        icon: "clock",
        title: "随访与预后管理",
        description: "完成全部3次输注后于治疗后第84天、第20周、第48周进行定期复查。",
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
        title: "线上初筛与评估",
        description:
          "患者提供近期病历资料，包括血糖和糖化血红蛋白监测记录、空腹C肽检测结果、降糖用药史（含胰岛素使用情况）、肝肾功能及病毒学筛查报告，由专科医生初步判断是否符合治疗指征。",
      },
      {
        icon: "stethoscope",
        title: "来华就诊与基线检查",
        description:
          "患者抵达医院，完成入院评估及心脏超声、胰岛素抵抗相关检测（HOMA-IR/葡萄糖钳夹）确认入组条件，签署知情同意书。",
      },
      {
        icon: "droplets",
        title: "细胞制备与配型豁免",
        description:
          "医院按照GMP规范从标准制备中心匹配预先筛选的UC-MSCs制剂（5×10⁷细胞/次），完成质控检验。因UC-MSCs免疫原性极低，无需HLA配型，海外患者无需额外等待。",
      },
      {
        icon: "syringe",
        title: "静脉输注治疗",
        description:
          "第1次输注：输注时长约45分钟，全程心电/血压监护，出院前进行首次血糖测量和耐受性评估。第2次输注：间隔一周后进行，继续观察生命体征和血糖波动性。第3次输注：再间隔一周后完成，结束当前完整疗程。",
      },
      {
        icon: "heartPulse",
        title: "随访与减药指导",
        description:
          "完成3次输注后，医疗团队将在第84天、20周、48周进行规律随访（可线上完成本地检查后回传报告），根据血糖控制情况和胰岛功能恢复指标，由医生逐步指导降糖药/胰岛素减量方案。",
      },
      {
        icon: "calendar",
        title: "长期疾病管理",
        description:
          "根据个体疗效评估，部分患者可能需要增加额外巩固周期，具体方案由主治医师结合首次治疗应答和未来血糖状况综合制定。",
      },
    ],
  },

  efficacy: {
    title: "临床疗效数据",
    subtitle: "基于真实世界病例的治疗效果展示",
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
        title: "HbA1c显著降低",
        stat: "-1.06%",
        description: "荟萃分析显示糖化血红蛋白总体平均降幅",
      },
      {
        icon: "activity",
        title: "停药奇迹",
        stat: "61.6%",
        description: "45人完全停用胰岛素，最长停药12个月",
      },
      {
        icon: "heartPulse",
        title: "胰岛功能修复",
        stat: "+40-50%",
        description: "C肽水平较基线升高，证明自主分泌能力恢复",
      },
      {
        icon: "shield",
        title: "用药减量超50%",
        stat: "84天",
        description: "三次输注后84天内降糖药用量可减少50%以上",
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
        location: "加拿大",
        age: "59 岁",
        title: "企业家",
        subtitle: "2型糖尿病病程超过8年",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-emerald-600 to-teal-600",
        statBoxes: [
          { label: "Before HbA1c", value: "9.2%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "After HbA1c", value: "7.0%", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "胰岛素减量", value: "53%", boxClass: "bg-blue-50", valueClass: "text-blue-600", colSpan: true },
        ],
        body: "治疗后3个月随访时，HbA1c降至7.0%，胰岛素用量减少53%，口服降糖药由3种减为2种。6个月随访时空腹血糖仍维持稳定。",
        quote: `"过去血糖总是像过山车一样起伏不定，现在终于感受到了久违的平稳"`,
        quoteBorderClass: "border-emerald-600",
        footerIcon: "trendingUp",
        footerLabel: "博鳌乐城首位海外患者",
        footerClass: "text-emerald-600",
        footerBoxClass: "bg-emerald-50 rounded-lg p-3",
      },
      {
        location: "印度尼西亚",
        age: "43 岁",
        title: "男性",
        subtitle: "肥胖合并2型糖尿病及高尿酸血症",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-emerald-600 to-teal-600",
        statBoxes: [
          { label: "Before HbA1c", value: ">8%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "After HbA1c", value: "5.1%", boxClass: "bg-green-50", valueClass: "text-green-600" },
        ],
        body: "疗程结束后3个月，空腹血糖降至91 mg/dL（5.1 mmol/L），HbA1c下降至5.1%，甘油三酯从异常水平降至151 mg/dL，尿酸降至4.9 mg/dL。临床症状如夜尿、疲乏、神经病理性疼痛均明显改善，皮肤干燥和足跟皲裂完全消退。",
        footerIcon: "trendingUp",
        footerLabel: "UC-MSCs联合外泌体治疗",
        footerClass: "text-emerald-600",
        footerBoxClass: "bg-emerald-50 rounded-lg p-3",
      },
      {
        location: "澳大利亚",
        age: "62 岁",
        title: "退休护士",
        subtitle: "2型糖尿病病史12年",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-emerald-600 to-teal-600",
        statBoxes: [
          { label: "Before HbA1c", value: "8.2-9.5%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "After HbA1c", value: "6.9%", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "胰岛素减量", value: "~40%", boxClass: "bg-blue-50", valueClass: "text-blue-600", colSpan: true },
          { label: "C肽提升", value: ">30%", boxClass: "bg-purple-50", valueClass: "text-purple-600", colSpan: true },
        ],
        body: "3个月随访空腹C肽水平较基线提升超过30%，HbA1c降至6.9%达标范围内。目前已成功将胰岛素用量减少近40%，整体活力显著提升，且每周游泳三次不再出现餐后严重血糖波动。",
        footerIcon: "trendingUp",
        footerLabel: "C肽提升超30%",
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
      title: "参考治疗费用",
      titleClass: "text-3xl font-bold text-[#1A1A2E] mb-8 text-center",
      tableWrapClass: "bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8",
      headerBorderClass: "border-b-2 border-emerald-200",
      rowBorderClass: "border-b border-emerald-100",
      accentClass: "text-emerald-600",
      rows: [
        {
          item: "2型糖尿病人脐带间充质干细胞治疗",
          perSessionMain: "5.8万元人民币",
          perSessionSub: "~$9,000 USD",
          totalCourseMain: "17.4万元人民币",
          totalCourseSub: "~$27,000 USD",
          notes: "1个完整疗程含3次输注，每周1次",
        },
      ],
      notesWrapClass: "mt-6 space-y-2",
      notes: [
        {
          label: "注",
          text: "费用涵盖UC-MSCs细胞制备、3次静脉输注、输注后住院/门诊监护及84天关键随访评估的医疗费用。",
          boxClass: "bg-yellow-50 rounded-lg border border-yellow-200",
        },
        {
          text: "费用不包含额外检查项目及因个人并发症需要的其他医疗支出。具体费用以医院最终评估为准。",
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
    title: "开启糖尿病功能性修复之旅",
    titleClass: "text-3xl font-bold mb-4",
    desc: "基于国际顶级临床研究，为您的血糖健康提供创新治疗方案",
    descClass: "text-lg text-white/90 mb-8",
    primary: {
      label: "预约咨询",
      href: "/contact",
      class: "inline-flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-emerald-50 transition-all duration-300 shadow-lg",
      showArrow: true,
    },
    secondary: {
      label: "返回项目列表",
      href: "/projects",
      class: "inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition-all duration-300",
    },
  },
};

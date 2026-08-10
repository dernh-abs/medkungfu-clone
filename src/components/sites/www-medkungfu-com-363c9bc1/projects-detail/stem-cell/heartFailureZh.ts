// Chinese (zh) data for /projects/heart-failure-stem-cell — transcribed from
// docs/research/www-medkungfu-com-363c9bc1/i18n/zh/heart-failure-stem-cell.html
// Structural/visual fields (class strings, icon names, numbers, booleans) are
// copied verbatim from heartFailure.ts; only human-readable text is Chinese.
import type { StemCellPageData } from "./types";

export const heartFailureZh: StemCellPageData = {
  ariaLabel: "Heart Failure Stem Cell Therapy - Improve Cardiac Function",

  hero: {
    eyebrow: "首个备案心衰干细胞治疗项目",
    title: "射血分数减低性心力衰竭\n干细胞治疗",
    description:
      "基于PRIME-HFrEF临床研究，利用脐带间充质干细胞改善心脏功能，提升生活质量",
    gradient: "from-blue-900 via-indigo-900 to-blue-900",
    stats: [
      { value: "LVEF ≤40%", label: "适用人群" },
      { value: "3 次输注", label: "完整疗程" },
      { value: "IF=52.7", label: "顶级期刊发表" },
    ],
  },

  productIntro: {
    title: "产品简介",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-6 text-center",
    paragraphClass: "text-gray-700 leading-relaxed mb-4",
    pyClass: "py-16",
    paragraphs: [
      {
        text: "射血分数减低性心力衰竭（Heart Failure with Reduced Ejection Fraction, HFrEF）是指左心室射血分数（LVEF）≤40%，心脏泵血功能严重受损的一种心力衰竭亚型。患者常表现为活动耐力下降、呼吸困难、下肢水肿及反复住院，生活质量严重下降。HFrEF是全球范围内心衰的主要类型，现有指南导向药物治疗（包括ARNI、SGLT2i等）虽能一定改善患者预后，但整体仍存在显著的未满足医疗需求。",
      },
      {
        text: "脐带来源间充质干细胞（Umbilical Cord-derived Mesenchymal Stem Cells, UC-MSCs）来源于新生儿脐带组织，属于异体通用型成体干细胞，因其免疫原性低、增殖能力强、易于获取和标准化生产。该技术通过静脉输注UC-MSCs，利用其旁分泌效应释放多种生物活性因子（如VEGF、IGF-1、外泌体等），抑制心肌炎症反应、促进微血管新生、减少心肌纤维化，从而改善心脏功能。",
      },
      {
        text: "在中国，该技术已作为首个备案的心力衰竭干细胞治疗项目落地实施。该技术以单疗程3次静脉输注为标准方案，面向全球HFrEF患者开放。",
      },
    ],
  },

  advantages: {
    title: "核心优势",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle:
      "基于国际顶级期刊发表的临床研究，提供安全有效的心脏修复方案",
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
        title: "严谨的临床试验验证，安全边界明确",
        description:
          "该方案依托的PRIME-HFrEF研究是一项单中心、随机、双盲、安慰剂对照的临床试验（ClinicalTrials.gov：NCT04992832），研究结果发表于国际顶级期刊《Signal Transduction and Targeted Therapy》（IF=52.7）。研究共纳入40例患者，39例完成360天随访，多次UC-MSCs输注的严重不良事件（SAEs）发生率与安慰剂组无显著差异，整体安全性可接受。",
      },
      {
        icon: "globe",
        title: "异体通用，无需配型，即取即用",
        description:
          "UC-MSCs免疫原性极低，无需HLA配型即可用于异体移植，患者无需等待供体，无需经历自体干细胞提取的创伤性操作，治疗启动迅速便捷。相较于欧洲以自体细胞为主的MSC治疗方案，中国采用异体通用型产品，性价比更高，治疗可及性更强。",
      },
      {
        icon: "target",
        title: "首次关注右心功能保护，带来独特治疗视角",
        description:
          "传统心衰治疗多聚焦左心室功能，而PRIME-HFrEF研究首次在干细胞治疗中系统观察到右心获益信号：UC-MSCs组右心室收缩末期容积（RVESV）改善显著优于安慰剂组（P=0.033），TAPSE亦呈现改善趋势，且RVESV改善持续至360天随访。对于HFrEF患者中常见的右心室功能障碍，该技术提供了独特的治疗价值。",
      },
      {
        icon: "zap",
        title: "多途径心脏修复机制",
        description:
          "UC-MSCs通过旁分泌作用释放多种生物活性因子，抑制心肌炎症反应、促进血管新生、减少纤维化，并通过调节免疫微环境激活内源性修复机制，改善心肌细胞存活与功能，从而增强心脏收缩力及整体血流动力学。同时，UC-MSCs兼具抗纤维化、抗炎和促血管生成的多重特性。",
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
      boxClass: "bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8",
      iconClass: "text-blue-600",
      textClass: "text-gray-700",
      items: [
        "左心室射血分数（LVEF）≤40%-33",
        "纽约心脏协会（NYHA）心功能分级II至IV级（即具有明确心衰症状的患者）",
        "已接受标准指南导向药物治疗（GDMT）但心功能改善不理想者",
        "等待心脏移植过程中需要桥接治疗、以争取时间和改善身体状况的候选患者",
        "无严重凝血功能障碍，经专科医生评估为适合干细胞治疗的HFrEF患者",
      ],
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
      "flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600",
    titleClass: "font-bold text-[#1A1A2E] mb-2",
    descClass: "text-gray-600 text-sm",
    items: [
      {
        icon: "droplets",
        title: "细胞类型",
        description: "人脐带来源间充质干细胞（UC-MSCs）注射液",
      },
      {
        icon: "users",
        title: "细胞来源",
        description:
          "异体来源，取自健康新生儿脐带组织，经GMP标准实验室扩增和质控，无需患者自身细胞，无需配型",
      },
      {
        icon: "activity",
        title: "给药途径",
        description:
          "静脉输注。UC-MSCs通过血液循环归巢至心脏损伤区域，发挥旁分泌修复作用",
      },
      {
        icon: "syringe",
        title: "细胞剂量",
        description: "每输注一次使用约2×10⁷个细胞，总疗程共输注3次",
      },
      {
        icon: "calendar",
        title: "疗程方案",
        description: "1周输注1次，共3次",
      },
      {
        icon: "clock",
        title: "每次输注时长",
        description: "约30–60分钟，门诊或住院均可完成",
      },
      {
        icon: "calendar",
        title: "治疗周期总时长",
        description: "约3周（含首次评估至末次输注）",
      },
      {
        icon: "building",
        title: "落地医院",
        description: "四川大学华西乐城医院",
      },
    ],
  },

  treatmentProcess: {
    title: "治疗流程",
    headingClass: "text-3xl font-bold text-[#1A1A2E] mb-4",
    subtitle: "标准化五步治疗流程，确保治疗安全与疗效",
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
        title: "术前评估与筛查",
        description:
          "患者来院后完成全面病史采集和体格检查，进行心脏超声评估LVEF及右心室容积参数，完成6分钟步行试验（6MWT）、明尼苏达心衰生活质量问卷（MLHFQ）评分，并行血常规、凝血功能（含D-二聚体）、肝肾功能及病毒学筛查。专科医生根据检查结果综合评估治疗指征。",
      },
      {
        icon: "fileText",
        title: "治疗前准备",
        description:
          "确认患者符合入组条件后，在GMP标准实验室中制备符合质量标准的UC-MSCs注射液，经严格质控（包括细胞活力、无菌性及效力检测），患者签署知情同意书。",
      },
      {
        icon: "syringe",
        title: "静脉输注治疗",
        description:
          "患者接受UC-MSCs静脉输注，每次输注时长约30–60分钟。输注全程进行生命体征监护（心率、血压、血氧饱和度），无异常后观察30分钟即可离院。每周输注1次，共3次。",
      },
      {
        icon: "heartPulse",
        title: "随访与疗效评估",
        description:
          "完成全部3次输注后，于治疗后1个月、3个月、6个月及12个月进行定期随访。随访内容包括心脏超声评估LVEF和右心室容积变化、6分钟步行试验、MLHFQ评分、凝血功能复查及不良事件记录。",
      },
      {
        icon: "calendar",
        title: "多疗程管理",
        description:
          "根据首个疗程的疗效评估结果，部分患者可能需要追加治疗，由主治医师结合个体心功能改善情况和凝血状态综合评估确定。",
      },
    ],
  },

  efficacy: {
    title: "临床疗效数据",
    subtitle: "基于真实世界病例的治疗效果展示",
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
        title: "LVEF显著提升",
        stat: "+9%",
        description: "案例显示LVEF从32%提升至41%",
      },
      {
        icon: "activity",
        title: "运动能力改善",
        stat: "+80米",
        description: "6分钟步行距离从280米增加至360米",
      },
      {
        icon: "heartPulse",
        title: "右心功能保护",
        stat: "P=0.033",
        description: "RVESV改善显著优于安慰剂组",
      },
      {
        icon: "shield",
        title: "生活质量提升",
        stat: "-24分",
        description: "MLHFQ评分从52分降至28分",
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
        location: "英国",
        age: "71 岁",
        title: "退休建筑工程师",
        subtitle: "缺血性心肌病导致慢性心力衰竭",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-blue-600 to-indigo-600",
        statBoxes: [
          { label: "Before LVEF", value: "32%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "After LVEF", value: "41%", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "Before 6MWT", value: "280m", boxClass: "bg-orange-50", valueClass: "text-orange-600" },
          { label: "After 6MWT", value: "360m", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "Before NYHA", value: "III级", boxClass: "bg-purple-50", valueClass: "text-purple-600" },
          { label: "After NYHA", value: "II级", boxClass: "bg-green-50", valueClass: "text-green-600" },
        ],
        body: "治疗后3个月LVEF提升至41%，6分钟步行距离从280米增加至360米。截至6个月随访未再因心衰住院。",
        footerIcon: "trendingUp",
        footerLabel: "LVEF提升9个百分点",
        footerClass: "text-blue-600",
        footerBoxClass: "bg-blue-50 rounded-lg p-3",
      },
      {
        location: "中国",
        age: "59 岁",
        title: "男性",
        subtitle: "扩张型心肌病确诊慢性心力衰竭十余年",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-blue-600 to-indigo-600",
        statBoxes: [
          { label: "Before NYHA", value: "III级", boxClass: "bg-purple-50", valueClass: "text-purple-600" },
          { label: "After NYHA", value: "II级", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "Before MLHFQ", value: "52分", boxClass: "bg-gray-50", valueClass: "text-gray-600" },
          { label: "After MLHFQ", value: "28分", boxClass: "bg-green-50", valueClass: "text-green-600" },
        ],
        body: "3个月随访时右心室收缩末期容积（RVESV）较基线显著缩小，NYHA心功能分级从Ⅲ级改善至Ⅱ级，日常爬两层楼梯不再出现明显气喘。MLHFQ评分由52分降至28分，生活质量显著提高。",
        quote: `"以前觉得生活就是在吃药和住院之间循环，现在终于可以看到希望。"`,
        quoteBorderClass: "border-blue-600",
        footerIcon: "trendingUp",
        footerLabel: "MLHFQ评分降低46%",
        footerClass: "text-blue-600",
        footerBoxClass: "bg-blue-50 rounded-lg p-3",
      },
      {
        location: "美国",
        age: "67 岁",
        title: "女性",
        subtitle: "高血压性心脏病合并冠心病发展为慢性HFrEF",
        headerStyle: "standard",
        headerGradient: "bg-gradient-to-r from-blue-600 to-indigo-600",
        statBoxes: [
          { label: "Before LVEF", value: "35%", boxClass: "bg-red-50", valueClass: "text-red-600" },
          { label: "After LVEF", value: "40%", boxClass: "bg-green-50", valueClass: "text-green-600" },
          { label: "Before NYHA", value: "III级", boxClass: "bg-purple-50", valueClass: "text-purple-600" },
          { label: "After NYHA", value: "II级", boxClass: "bg-green-50", valueClass: "text-green-600" },
        ],
        body: "治疗后6个月随访时，LVEF提升至40%，心衰症状明显减轻，纽约心脏协会（NYHA）分级从Ⅲ级改善至Ⅱ级。",
        quote: `"终于有了重新出门旅行的信心"`,
        quoteBorderClass: "border-blue-600",
        footerIcon: "trendingUp",
        footerLabel: "海外患者成功应用案例",
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
      title: "参考治疗费用",
      titleClass: "text-3xl font-bold text-[#1A1A2E] mb-8 text-center",
      tableWrapClass: "bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8",
      headerBorderClass: "border-b-2 border-blue-200",
      rowBorderClass: "border-b border-blue-100",
      accentClass: "text-blue-600",
      rows: [
        {
          item: "脐带来源间充质干细胞治疗心力衰竭",
          perSessionMain: "6万元人民币",
          perSessionSub: "~$9,000 USD",
          totalCourseMain: "18万元人民币",
          totalCourseSub: "~$27,000 USD",
          notes: "共3次输注，每周1次",
        },
      ],
      notes: [
        {
          label: "注",
          text: "此费用不包含前期检查费、住院费等其它医疗费用。",
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
    title: "开启心脏修复之旅",
    titleClass: "text-3xl font-bold mb-4",
    desc: "基于国际顶级临床研究，为您的心脏健康提供创新治疗方案",
    descClass: "text-lg text-white/90 mb-8",
    primary: {
      label: "预约咨询",
      href: "/contact",
      class: "inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg",
      showArrow: true,
    },
    secondary: {
      label: "返回项目列表",
      href: "/projects",
      class: "inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition-all duration-300",
    },
  },
};

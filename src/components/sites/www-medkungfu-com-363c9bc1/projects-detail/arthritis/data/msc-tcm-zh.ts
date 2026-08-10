// Chinese (zh) page data for /projects/msc-tcm — MSC Joint Regeneration Therapy.
import type { PageData } from "../types";

const IMG = "/sites/www-medkungfu-com-363c9bc1/shared/images";

export const mscTcmPageZh: PageData = {
  mainAriaLabel: "MSC-TCM Therapy - Mesenchymal Stem Cells Combined with TCM",
  hero: {
    eyebrow: "Joint Regeneration & Repair Program",
    title: "MSC关节再生疗法",
    subtitle: "MSC Joint Regeneration Therapy",
    tagline: "间充质干细胞关节再生治疗 · 从根源修复 · 标本兼治",
    gradientClass: "from-slate-900 via-blue-900 to-slate-900",
    accentTextClass: "text-blue-200",
    buttonClass: "bg-blue-500 hover:bg-blue-600",
  },
  intro: {
    title: "什么是MSC关节再生疗法？",
    paragraphs: [
      "MSCs是一种具有自我更新和多向分化潜能的原始细胞，可从脐带、脂肪或骨髓中获取。将它们注射入关节腔后，MSCs能够分化为软骨细胞直接修复损伤，同时通过分泌抗炎因子系统性抑制关节内的慢性炎症。",
      "2025年发表的一项涵盖16项随机对照试验、622例患者的Meta分析证实，MSC治疗在3、6、12个月时均能显著改善膝骨关节炎患者的疼痛和关节功能。",
      "MSCs疗效常受到患者体质、炎症状态等多重因素影响。通过综合康复方案，不仅提升了干细胞疗法的综合效果，更改善了患者的长期生活质量。",
    ],
    badgeText: "国际循证医学验证 · 安全有效",
    badgeColor: "text-blue-600",
    image: `${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`,
    imageAlt: "MSC Treatment",
  },
  advantages: {
    title: "核心优势",
    subtitle: "四大核心优势，为您的关节健康保驾护航",
    gridClass: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
    items: [
      {
        icon: "microscope",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        title: "多机制协同，从根源修复",
        description:
          "间充质干细胞具备三大核心机制——软骨分化潜能可分化形成新生软骨细胞，直接修复受损组织；旁分泌效应释放大量生长因子和抗炎因子，改善关节微环境；免疫调节功能抑制炎性因子释放、减轻滑膜炎症。三项机制协同作用，使MSC疗法从根本上干预骨关节炎病程，而非仅仅缓解症状。",
      },
      {
        icon: "award",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        title: "合规透明，官方定价",
        description:
          "2025年3月，海南博鳌乐城国际医疗旅游先行区首次公布干细胞治疗膝骨关节炎官方定价——单次注射3.6万元人民币，其安全性和有效性得到大规模真实世界数据验证。",
      },
      {
        icon: "dollarSign",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        title: "国际竞争力第一",
        description:
          "中国MSC治疗的费用仅为欧美同类治疗的1/4至1/7。美国MSC膝骨关节炎治疗费用约为2万至5万美元（约14万至36万元人民币），中国仅为3.6万元/次（约5,000美元），价格优势显著。",
      },
      {
        icon: "clock",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        title: "规范高效，无需漫长等待",
        description:
          "欧美公立医疗体系的关节手术等待期常长达6-12个月。在中国，从远程咨询到完成MSC注射一般仅需2-3周，极大缩短了患者的治疗等待时间。",
      },
    ],
  },
  indications: {
    title: "适应症",
    subtitle: "MSC治疗主要适用于以下情况",
    accentClass: "text-blue-600",
    checkColor: "text-blue-500",
    items: [
      {
        image: `${IMG}/photo-1559757175-5700dde675bc-w600.jpg`,
        imageAlt: "早中期膝骨关节炎",
        title: "早中期膝骨关节炎",
        subtitle: "Kellgren-Lawrence分级Ⅰ-Ⅲ级",
        bullets: [
          "关节疼痛、晨僵、活动受限",
          "对口服止痛药、玻璃酸钠注射等保守治疗效果不佳或不耐受",
          "希望保留自然关节、推迟或避免关节置换",
        ],
      },
      {
        image: `${IMG}/photo-1612349317150-e413f6a5b16d-w600.jpg`,
        imageAlt: "中重度膝骨关节炎伴滑膜炎",
        title: "中重度膝骨关节炎伴滑膜炎",
        subtitle: "K-L分级Ⅱ-Ⅲ级",
        bullets: [
          "关节肿胀明显",
          "滑膜炎症活跃",
          "反复发作性关节积液",
        ],
      },
      {
        image: `${IMG}/photo-1571019614242-c5c5dee9f50b-w600.jpg`,
        imageAlt: "关节软骨中度磨损",
        title: "关节软骨中度磨损",
        subtitle: "MRI显示软骨变薄、局灶性缺损",
        bullets: [
          "软骨变薄、局灶性缺损",
          "尚未达到全层大范围缺失",
          "希望通过再生医学技术促进软骨修复的患者",
        ],
      },
      {
        image: `${IMG}/photo-1538108149393-fbbd81895907-w600.jpg`,
        imageAlt: "关节镜清理术后辅助治疗",
        title: "关节镜清理术后辅助治疗",
        subtitle: "术后联合MSC康复",
        bullets: [
          "促进术后软骨修复",
          "减轻术后炎症反应",
          "加速康复进程",
        ],
      },
      {
        image: `${IMG}/photo-1505751172876-fa1923c5c528-w600.jpg`,
        imageAlt: "对西药不耐受或有安全性顾虑者",
        title: "对西药不耐受或有安全性顾虑者",
        subtitle: "希望寻求综合治疗方案",
        bullets: [
          "减少非甾体抗炎药等药物依赖",
          "个性化治疗方案",
        ],
      },
    ],
  },
  treatment: {
    title: "治疗内容",
    subtitle: "两大治疗模块，全方位关节康复方案",
    modules: [
      {
        icon: "microscope",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        checkClass: "text-blue-500",
        numBg: "bg-blue-500",
        title: "模块一：MSC核心治疗",
        subtitle: "Mesenchymal Stem Cell Therapy",
        blocks: [
          {
            type: "cardGrid",
            cols: "grid md:grid-cols-2 gap-6 mb-6",
            items: [
              {
                title: "脐带间充质干细胞（UC-MSC）",
                desc: "从健康供体的脐带组织中分离扩增，在CGMP条件下制备为标准化产品",
              },
              {
                title: "脂肪间充质干细胞（AD-MSC）",
                desc: "从患者自身脂肪组织或标准化供体获取，同样具备软骨分化和免疫调节能力",
              },
            ],
          },
          {
            type: "infoBox",
            bg: "bg-blue-50 p-4 rounded-lg mb-4",
            title: "技术要点：",
            text: "采用高频超声“可视化”技术引导注射，确保针尖精确抵达关节腔靶点，规避血管神经损伤，提升治疗精准度",
          },
          { type: "footnote", text: "标准方案为单次注射" },
        ],
      },
      {
        icon: "heart",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        checkClass: "text-blue-500",
        numBg: "bg-blue-500",
        title: "模块二：功能锻炼与康复指导",
        subtitle: "Rehabilitation & Exercise",
        blocks: [
          {
            type: "cardGrid",
            cols: "grid md:grid-cols-2 gap-6",
            items: [
              {
                title: "肌力训练",
                desc: "指导股四头肌等长收缩训练，强化膝关节稳定性",
              },
              {
                title: "康复运动",
                desc: "推荐科学的康复运动方案，促进长期关节养护",
              },
            ],
          },
        ],
      },
    ],
  },
  process: {
    title: "治疗流程",
    subtitle: "八步完整流程，专为海外患者设计",
    layout: "list",
    numBg: "bg-blue-500",
    numText: "text-lg",
    timeBadgeClass: "text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full",
    steps: [
      {
        title: "线上咨询与病历评估",
        time: "2-5个工作日",
        description:
          "提交膝关节X光负重位、MRI（≥1.5T）影像、既往治疗史和相关检查报告，医学顾问进行资料审核和初步适应症筛查，确定MSC治疗适应性",
      },
      {
        title: "远程MDT会诊确认方案",
        time: "3-7个工作日",
        description:
          "骨科+再生医学科医师联合视频会诊，确定治疗方案：MSC种类、注射次数、费用预估和治疗行程安排，提供中英文双语治疗计划",
      },
      {
        title: "医疗签证与赴华行程安排",
        time: "7-14个工作日",
        description:
          "出具医疗邀请函，指导办理S2短期就医签证（最长180天），协助预订机票、安排机场接送和医院附近住宿，预约MSC注射档期",
      },
      {
        title: "入院前全面评估与基线检测",
        time: "抵华后1-2天",
        description:
          "完成必需检查：血常规、凝血功能、传染病筛查（HIV、HBV、HCV等）、肝肾功能、血小板计数、心电图等，膝关节影像复核，签署知情同意书",
      },
      {
        title: "MSC治疗实施",
        time: "抵华后第2-3天",
        description:
          "门诊手术室或日间病房，局部麻醉或轻度镇静，超声引导下将标准化MSC液（约5-20ml）精准注入关节腔，治疗过程约30-40分钟，观察1-2小时后可自主下地行走",
      },
      {
        title: "康复辅助治疗",
        time: "贯穿整个在华期间",
        description:
          "MSC注射后1-2周：专业康复师指导功能锻炼，减轻关节内炎性反应；注射间期：持续进行康复训练",
      },
      {
        title: "康复指导与出院",
        time: "治疗结束前",
        description:
          "康复医师制定个性化功能锻炼方案（含居家视频指导），提供英文版康复手册",
      },
      {
        title: "远程随访与健康管理",
        time: "治疗后12个月",
        description:
          "提供移动端疼痛评分（VAS）和关节功能自评（WOMAC）系统，远程视频复诊，按需进行MRI影像对比分析",
      },
    ],
  },
  efficacy: {
    title: "疗效数据",
    subtitle: "2025-2026年国际循证研究核心发现",
    table: {
      headers: ["研究", "核心发现", "证据等级"],
      headerClass: "text-blue-400",
      badgeClass: "bg-blue-500/20 text-blue-300",
      rows: [
        {
          cells: [
            "NMA (16 RCTs, 622 patients, 2025) — Stem Cell Research & Therapy",
            "MSC治疗在3、6、12个月时均显著改善KOA患者的疼痛和关节功能",
          ],
          badge: "Ⅰ级，NMA",
        },
        {
          cells: [
            "Dose-focused Meta-analysis (2025) — PubMed",
            "关节腔MSC治疗在12个月时显著改善KOA临床结局，低剂量（≤25×10⁶个细胞）既有效又更高效",
          ],
          badge: "Ⅰ级，Meta分析",
        },
        {
          cells: [
            "Double-blinded RCT (moderate to severe KOA with synovitis) — 武汉大学",
            "UC-MSC注射对中重度KOA伴滑膜炎安全有效，通过抑制NLRP3介导的滑膜炎症发挥治疗作用",
          ],
          badge: "Ⅱ级，RCT",
        },
        {
          cells: [
            "AD-MSC bicentric study (135 patients, 5-year follow-up) — Knee Surgery",
            "94%报告VAS改善，53%在5年后仍有良好症状控制。联合关节镜清理者WOMAC及功能评分均显著优于单独注射",
          ],
          badge: "Ⅲ级，回顾性研究",
        },
        {
          cells: [
            "穗港协作真实世界数据 (280 patients, 2025) — 香港5家公立医院",
            "分层分治模式应用后疼痛评分显著下降，部分患者取消手术预约",
          ],
          badge: "真实世界数据",
        },
      ],
    },
    statClass: "text-blue-400",
    stats: [
      { value: "60%", label: "疼痛评分平均降低" },
      { value: "78%", label: "关节功能改善率" },
      { value: "94%", label: "患者报告VAS改善" },
    ],
  },
  cases: {
    title: "真实案例",
    subtitle: "患者真实反馈，见证疗效",
    gridClass: "grid md:grid-cols-3 gap-8",
    imgClass: "h-48",
    accentClass: "text-blue-600",
    descriptionClass: "text-gray-600 text-sm",
    items: [
      {
        image: `${IMG}/photo-1576091160399-112ba8d25d1d-w600.jpg`,
        imageAlt: "新加坡陈女士——每月一针MSC，3个月告别膝痛",
        title: "新加坡陈女士——每月一针MSC，3个月告别膝痛",
        subtitle: "跨国医疗的真实见证",
        description:
          "陈女士（62岁，新加坡），因膝关节疼痛无法上下楼梯，日常步行受限。在新加坡中央医院，她接受了每月一次的高剂量间充质干细胞关节腔注射（连续3次）。第1次注射后，早晨僵硬感明显减轻；第2次注射后，她开始能稳步上下楼梯；完成3次注射后，陈女士已能轻松步行1公里。MRI随访显示关节软骨损伤区域出现修复迹象，滑膜炎症同步减轻。陈女士感慨：“3个月的坚持，换回了一辈子的自由行走。”",
      },
      {
        image: `${IMG}/photo-1504439904031-93ded9f93e4e-w600.jpg`,
        imageAlt: "波兰老人Jan——干细胞注射让他重新踏上乡间小径",
        title: "波兰老人Jan——干细胞注射让他重新踏上乡间小径",
        subtitle: "从绝望到重获新生",
        description:
          "Jan（68岁，波兰弗罗茨瓦夫），退休园艺师，双膝骨关节炎折磨近十年。X光显示内侧关节间隙几乎消失，医生判定需行关节置换。Jan担心手术风险，不愿卧床数月。通过网络查询到中国的MSC治疗方案后，他飞到海南博鳌，接受了单次脐带间充质干细胞关节腔注射（单膝费用3.6万元），并配合两周专业康复训练。治疗后第4周，疼痛从8分降至3分，3个月后Jan能连续步行2小时。“我重新打理起花园，每天都能走三公里。”Jan计划明年再做另一侧膝盖。",
      },
      {
        image: `${IMG}/photo-1544367567-0f2fcb009e0b-w600.jpg`,
        imageAlt: "马来西亚林女士——从\"不敢蹲\"到重拾运动",
        title: "马来西亚林女士——从“不敢蹲”到重拾运动",
        subtitle: "跨国医疗的真实见证",
        description:
          "林女士（62岁，马来西亚吉隆坡）被膝关节炎困扰五年，K-L分级Ⅲ级，上下楼梯剧痛，蹲下后无法自行站起。她试过玻尿酸注射和止痛药，效果越来越差。在当地私立医院咨询干细胞治疗，报价约8万林吉特（约12万元人民币）。通过我们，她来到中国海南博鳌，接受了脂肪间充质干细胞单膝注射（3.6万元），并配合两周的专业康复训练。治疗后3个月，她发来视频：“我现在可以蹲下浇花了，还能打半小时太极！”疼痛评分从7分降至2分。",
      },
    ],
  },
  services: {
    title: "支持服务",
    subtitle:
      "我们为每一位来华接受MSC治疗的海外患者提供从行前到返程的全链路服务",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    items: [
      {
        icon: "globe",
        title: "签证指导与办理",
        description: "医疗邀请函、S2签证材料辅导、入境登记协助",
      },
      {
        icon: "mapPin",
        title: "落地接待与交通",
        description: "专车接机、酒店及康养公寓预订、生活指导",
      },
      {
        icon: "users",
        title: "语言支持与医疗翻译",
        description: "双语医学协调员、医学术语精准翻译、病历报告翻译",
      },
      {
        icon: "heart",
        title: "陪诊与医疗协调",
        description: "挂号与科室对接、全面陪诊服务",
      },
      {
        icon: "award",
        title: "涉外医疗文件协助",
        description: "英文医疗邀请函/诊断证明、费用预估函、出院小结",
      },
    ],
  },
  pricing: {
    variant: "reference",
    title: "参考治疗费用",
    subtitle: "透明定价，国际竞争力第一",
    costCard: {
      title: "脐带间充质干细胞注射液（单膝）",
      price: "¥36,000",
      priceNote: "约 $5,000 USD",
      priceClass: "text-blue-600",
      checkClass: "text-blue-500",
      borderClass: "border-2 border-blue-500",
      items: [
        "单次注射标准剂量",
        "CGMP标准化产品",
        "超声引导精准注射",
      ],
      footnote: "*具体费用以医院最终评估为准。",
    },
    compareCard: {
      title: "价格对比",
      rows: [
        { label: "美国MSC治疗", value: "$20,000-50,000", valueClass: "text-gray-400" },
        { label: "中国MSC治疗", value: "$5,000", valueClass: "text-blue-600" },
      ],
      savings: { label: "节省比例", value: "75-90%" },
    },
  },
};

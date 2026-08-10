// Chinese (zh) page data for /projects/prp-tcm — PRP-TCM Joint Regeneration Therapy.
import type { PageData } from "../types";

const IMG = "/sites/www-medkungfu-com-363c9bc1/shared/images";

export const prpTcmPageZh: PageData = {
  mainAriaLabel: "PRP-TCM Therapy - Platelet-Rich Plasma Combined with TCM",
  hero: {
    title: "PRP中医关节再生疗法",
    subtitle: "国际医疗",
    tagline: "中西医结合 · 标本兼治 · 零等待 · 安全合规",
    gradientClass: "from-slate-900 via-teal-900 to-slate-900",
    accentTextClass: "text-teal-200",
    buttonClass: "bg-teal-500 hover:bg-teal-600",
  },
  intro: {
    title: "什么是PRP中医关节再生疗法？",
    paragraphs: [
      "PRP（Platelet-Rich Plasma，富血小板血浆）中医关节再生疗法是一种将现代再生医学技术与传统中医智慧相结合的创新治疗方案。",
      "通过提取患者自身血液中的高浓度血小板血浆，配合中医针灸、中药熏蒸、推拿等传统疗法，实现关节软骨修复、炎症消退和功能恢复的三重目标。",
    ],
    badgeText: "国际标准认证 · 安全有效",
    badgeColor: "text-teal-600",
    image: `${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`,
    imageAlt: "PRP Treatment",
  },
  advantages: {
    title: "核心优势",
    subtitle: "四大核心优势，为您的关节健康保驾护航",
    gridClass: "grid md:grid-cols-2 gap-8",
    items: [
      {
        icon: "activity",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        title: "中西合璧，效果倍增",
        description:
          "PRP通过高浓度生长因子促进软骨修复和抗炎镇痛，中医通过针灸、中药等手段疏通经络、调和气血。二者联合可产生协同增效——临床数据显示，PRP联合温针灸后，患者关节功能恢复指标提升显著，软骨缺损修复速度较单纯PRP治疗提升2.1倍。",
      },
      {
        icon: "shield",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        title: "标本兼治的完整方案",
        description:
          "不仅解决关节疼痛症状，更通过中医整体调理改善体质，从根本上延缓关节退化进程，实现长期稳定的疗效。",
      },
      {
        icon: "clock",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        title: "零等待",
        description:
          "无需排队数月，从咨询到治疗一般仅需1-2周即可完成。",
      },
      {
        icon: "award",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        title: "安全合规",
        description:
          "PRP治疗中国各等级医院及临床研究广泛应用，中医治疗有国家级指南规范。",
      },
    ],
  },
  indications: {
    title: "适应症",
    subtitle: "以下情况适合接受PRP中医关节再生疗法",
    accentClass: "text-teal-600",
    checkColor: "text-teal-500",
    items: [
      {
        image: `${IMG}/photo-1559757175-5700dde675bc-w600.jpg`,
        imageAlt: "早中期膝骨关节炎",
        title: "早中期膝骨关节炎",
        subtitle: "Kellgren-Lawrence分级Ⅰ-Ⅲ级",
        bullets: [
          "关节疼痛、晨僵、活动受限",
          "对口服止痛药/玻璃酸钠注射效果不佳或不良反应不耐受",
          "希望保留自然关节、推迟或避免关节置换",
        ],
      },
      {
        image: `${IMG}/photo-1612349317150-e413f6a5b16d-w600.jpg`,
        imageAlt: "关节软骨轻度至中度磨损",
        title: "关节软骨轻度至中度磨损",
        subtitle: "MRI显示软骨变薄、局灶性缺损",
        bullets: [
          "软骨变薄、局灶性缺损",
          "尚未达到全层大范围缺失",
          "适合PRP修复治疗",
        ],
      },
      {
        image: `${IMG}/photo-1571019614242-c5c5dee9f50b-w600.jpg`,
        imageAlt: "慢性运动损伤相关性关节病",
        title: "慢性运动损伤相关性关节病",
        subtitle: "长期运动导致的关节问题",
        bullets: [
          "韧带损伤",
          "软骨磨损伴关节疼痛",
          "运动员关节保护",
        ],
      },
      {
        image: `${IMG}/photo-1538108149393-fbbd81895907-w600.jpg`,
        imageAlt: "关节镜/微骨折术后康复",
        title: "关节镜/微骨折术后康复",
        subtitle: "术后联合PRP+中医康复",
        bullets: [
          "有效促进软骨修复",
          "减轻术后僵硬",
          "加速康复进程",
        ],
      },
      {
        image: `${IMG}/photo-1505751172876-fa1923c5c528-w600.jpg`,
        imageAlt: "对西药不耐受或有安全性顾虑者",
        title: "对西药不耐受或有安全性顾虑者",
        subtitle: "希望通过中医整体调理",
        bullets: [
          "减少非甾体抗炎药依赖",
          "中医整体调理方案",
          "个性化治疗方案",
        ],
      },
    ],
  },
  treatment: {
    title: "治疗内容",
    subtitle: "三大治疗模块，全方位关节康复方案",
    modules: [
      {
        icon: "activity",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        checkClass: "text-teal-500",
        numBg: "bg-teal-500",
        title: "模块一：PRP核心治疗",
        subtitle: "Platelet-Rich Plasma Therapy",
        blocks: [
          {
            type: "numberedGrid",
            cols: "grid md:grid-cols-3 gap-6 mb-6",
            steps: [
              { num: "1", title: "静脉抽血", desc: "20-50ml血液采集" },
              { num: "2", title: "高速离心制备", desc: "血小板浓缩至正常3-5倍" },
              { num: "3", title: "超声引导注射", desc: "精准关节腔注射" },
            ],
          },
          {
            type: "footnote",
            text: "通常一个疗程为2-4次注射，每次间隔2-4周，具体视个体情况由医师制定",
          },
        ],
      },
      {
        icon: "leaf",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        checkClass: "text-teal-500",
        numBg: "bg-teal-500",
        title: "模块二：中医协同治疗",
        subtitle: "Traditional Chinese Medicine",
        blocks: [
          {
            type: "cardGrid",
            cols: "grid md:grid-cols-3 lg:grid-cols-5 gap-4",
            center: true,
            items: [
              { title: "针灸治疗", desc: "即刻止痛，疏通经络" },
              { title: "中药内服", desc: "整体调理，调和气血" },
              { title: "中药熏蒸", desc: "局部渗透，温通经络" },
              { title: "推拿手法", desc: "滑利关节，松解粘连" },
              { title: "艾灸疗法", desc: "温通散寒，活血化瘀" },
            ],
          },
        ],
      },
      {
        icon: "heart",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        checkClass: "text-teal-500",
        numBg: "bg-teal-500",
        title: "模块三：功能锻炼与康复指导",
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
                title: "传统功法",
                desc: "推荐八段锦、太极拳等传统养生功法，促进长期关节养护",
              },
            ],
          },
        ],
      },
    ],
  },
  process: {
    title: "治疗流程",
    subtitle: "八步完整流程，从咨询到康复全程陪伴",
    layout: "grid",
    gridClass: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
    numBg: "bg-teal-500",
    steps: [
      {
        title: "线上咨询与病历评估",
        description:
          "提交膝关节X光负重位、MRI影像、既往治疗史和相关检查报告，医学顾问进行资料审核和初步适应症筛查",
      },
      {
        title: "远程会诊确认方案",
        description:
          "骨科+康复科+中医科医师联合视频会诊，确定治疗方案、费用预估和治疗行程安排，提供中英文双语治疗计划",
      },
      {
        title: "医疗签证与赴华行程安排",
        description:
          "出具医疗邀请函，指导办理S2/S1医疗签证，协助预订机票、安排机场接送和医院附近住宿",
      },
      {
        title: "入院前全面评估与基线检测",
        description:
          "完成必需检查：血常规、凝血功能、传染病筛查、血脂、血小板计数、心电图等，中医体质辨识和膝关节影像复核",
      },
      {
        title: "PRP治疗实施",
        description:
          "超声引导下富血小板血浆关节腔精准注射，门诊完成（约45-60分钟），治疗后观察约1小时即可正常活动",
      },
      {
        title: "中医协同治疗",
        description:
          "PRP注射当天针灸协同促进PRP均匀分布，注射间期针灸2-3次/周，中药熏蒸每日1次，推拿艾灸巩固疗效",
      },
      {
        title: "术后康复指导与出院",
        description:
          "康复医师制定个性化功能锻炼方案，为需要长期中药调理的患者安排邮寄中药丸剂/膏方服务",
      },
      {
        title: "远程随访与健康管理",
        description:
          "提供移动端疼痛评分和关节功能自评系统，远程视频复诊，按需进行MRI影像对比分析评估软骨修复进展",
      },
    ],
  },
  efficacy: {
    title: "疗效数据",
    subtitle: "临床研究证实，PRP联合中医治疗疗效显著",
    statClass: "text-teal-400",
    stats: [
      { value: "181", label: "例患者临床研究" },
      { value: "2.1x", label: "软骨修复速度提升" },
      { value: "显著", label: "WOMAC/VAS 评分改善" },
    ],
  },
  cases: {
    title: "真实案例",
    subtitle: "患者真实反馈，见证疗效",
    gridClass: "grid md:grid-cols-2 gap-8",
    imgClass: "h-56",
    accentClass: "text-teal-600",
    descriptionClass: "text-gray-600",
    items: [
      {
        image: `${IMG}/photo-1546519638-68e109498ffc-w600.jpg`,
        imageAlt: "三次跨洋飞回中国接受PRP治疗",
        title: "三次跨洋飞回中国接受PRP治疗",
        subtitle: "职业球员重返赛场",
        description:
          "美国籍职业篮球运动员Dwayne在深圳结束赛事后右膝疼痛难忍。医生通过肌骨超声精准诊断右膝关节髌韧带损伤、内侧支持带损伤、关节软骨磨损。三次PRP治疗后，Dwayne右膝疼痛基本缓解，重新投入到钟爱的篮球事业中。",
      },
      {
        image: `${IMG}/photo-1576091160399-112ba8d25d1d-w600.jpg`,
        imageAlt: "181例患者的真实效果——步态明显改善",
        title: "181例患者的真实效果——步态明显改善",
        subtitle: "临床研究数据",
        description:
          "181例膝骨关节炎患者临床研究证实：温针灸联合PRP注射治疗的患者，在治疗后步频、步速、步长以及关节支撑相占比均明显优于单纯PRP组；WOMAC评分、VAS评分显著降低，HSS关节评分显著升高，且不良反应发生率无显著增加。",
      },
    ],
  },
  services: {
    title: "支持服务",
    subtitle: "全程贴心服务，让您无忧就医",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    items: [
      {
        icon: "globe",
        title: "签证指导与办理",
        description: "专业团队协助办理医疗签证",
      },
      {
        icon: "mapPin",
        title: "落地接待与交通",
        description: "机场接送及全程交通安排",
      },
      {
        icon: "users",
        title: "语言支持与医疗翻译",
        description: "专业医疗翻译全程陪同",
      },
      {
        icon: "heart",
        title: "陪诊与医疗协调",
        description: "专人协调就诊流程",
      },
      {
        icon: "award",
        title: "涉外医疗文件协助",
        description: "医疗报告翻译及文件处理",
      },
    ],
  },
  pricing: {
    variant: "packages",
    title: "费用说明",
    subtitle: "透明定价，无隐藏费用",
    priceClass: "text-teal-600",
    checkClass: "text-teal-500",
    borderClass: "border-2 border-teal-500",
    footnote: "具体费用以医院最终评估为准。",
    packages: [
      {
        name: "基础套餐",
        price: "$4,200",
        items: ["PRP注射 2次", "中医针灸 4次", "康复指导"],
      },
      {
        name: "标准套餐",
        price: "$7,200",
        recommended: true,
        items: [
          "PRP注射 3次",
          "中医针灸 6次",
          "中药熏蒸 6次",
          "推拿艾灸 3次",
          "康复指导",
        ],
      },
      {
        name: "尊享套餐",
        price: "$11,700",
        items: [
          "PRP注射 4次",
          "全套中医治疗",
          "个性化康复方案",
          "1年远程随访",
        ],
      },
    ],
  },
  contact: {
    title: "联系我们",
    subtitle: "立即咨询，开启您的关节康复之旅",
    iconClass: "text-teal-400",
    buttonClass: "bg-teal-500 hover:bg-teal-600",
    items: [
      { icon: "phone", title: "电话咨询", text: "+1- 646-296-8491" },
      { icon: "mail", title: "邮件咨询", text: "contact@medkungfu.com" },
      { icon: "mapPin", title: "医院地址", text: "深圳市南山区" },
    ],
    ctaHref: "/contact",
    ctaLabel: "立即预约咨询",
  },
};

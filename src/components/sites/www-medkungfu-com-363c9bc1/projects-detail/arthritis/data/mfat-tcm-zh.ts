// Chinese (zh) page data for /projects/mfat-tcm — MFAT Joint Regeneration Therapy.
import type { PageData } from "../types";

const IMG = "/sites/www-medkungfu-com-363c9bc1/shared/images";

export const mfatTcmPageZh: PageData = {
  mainAriaLabel: "MFAT Joint Regeneration Therapy - Autologous Fat Micro-fragment Treatment",
  hero: {
    eyebrow: "Adipose Tissue Regeneration Program",
    title: "MFAT关节再生疗法",
    subtitle: "Adipose Tissue Regeneration",
    tagline: "自体脂肪微片段关节再生治疗 · 一采多用 · 长效止痛3-4年",
    gradientClass: "from-slate-900 via-emerald-900 to-slate-900",
    accentTextClass: "text-emerald-200",
    buttonClass: "bg-emerald-500 hover:bg-emerald-600",
  },
  intro: {
    title: "什么是MFAT关节再生疗法？",
    paragraphs: [
      "自体脂肪微片段（Micro-Fragmented Adipose Tissue，MFAT）技术通过微创方式采集自身的腹部或大腿脂肪，经过无酶物理破碎处理，将其注入关节腔。干细胞分化为软骨细胞修复组织；生长因子抗炎镇痛；细胞外基质则充当天然支架，增强局部修复微环境。",
      "MFAT的核心价值在于“一采多用”——采集的脂肪经-80℃冷冻保存后，两年后解冻的细胞活率（55.73%）与新鲜样本（59.75%）无显著差异，且微生物检测100%无菌。患者仅需接受一次微创抽脂，即可在需要时多次使用同一批MFAT产品，极大降低了重复治疗的痛苦和成本。",
      "我们将这一现代再生技术与科学的康复方案系统性整合，形成了“治疗-修复-康复”三位一体的综合方案。",
    ],
    badgeText: "自体来源 · 零排异 · 长效止痛3-4年",
    badgeColor: "text-emerald-600",
    image: `${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`,
    imageAlt: "MFAT Treatment",
  },
  advantages: {
    title: "核心优势",
    subtitle: "六大核心优势，为您的关节健康保驾护航",
    gridClass: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
    items: [
      {
        icon: "shield",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        title: "自体来源，零排异、零风险",
        description:
          "MFAT的原材料取自您自己的脂肪组织，从根源上杜绝了异体组织的免疫排异反应和血源性传染病风险，是再生医学领域中极为安全的自体疗法之一。",
      },
      {
        icon: "snowflake",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        title: "一采多用，冷冻保存打造“个人组织银行”",
        description:
          "脂肪采集后，富余的MFAT可在-80℃条件下冷冻保存2年以上。解冻后细胞活率（55.73%）与新鲜样本（59.75%）无显著差异，微生物检测100%无菌。未来需要二次注射时，无需再次抽脂，直接取用冻存MFAT即可。",
      },
      {
        icon: "clock",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        title: "一次注射，长效止痛（长达3-4年）",
        description:
          "2025年一项335例KOA患者随访研究显示，单次MFAT注射后3个月所有临床评分显著改善（p<0.001），且改善效果持续保持至3年随访终点。另有4年随访研究证实，68%的患者在注射4年后仍保持临床有效性。",
      },
      {
        icon: "activity",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        title: "超越透明质酸，针对炎症表型OA优势更明显",
        description:
          "研究表明，MFAT在治疗伴有炎症表型的膝骨关节炎方面具有独特的靶向优势，KOOS症状评分改善显著优于透明质酸组。",
      },
      {
        icon: "thermometer",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        title: "门诊级微创操作，治疗当日离院",
        description:
          "脂肪采集+制备+关节腔精准注射可于门诊一次性完成，全程约1.5-2小时，患者治疗后观察1-2小时即可自主下地离院，无需住院。",
      },
      {
        icon: "dollarSign",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        title: "全球价格竞争力无与伦比",
        description:
          "中国MFAT单次全部费用（含麻醉、微创抽脂、MFAT制备、超声引导关节腔注射）仅为美国同类治疗的1/5-1/10，价差可达5-10倍。",
      },
    ],
  },
  indications: {
    title: "适应症",
    subtitle: "MFAT关节再生治疗主要适用于以下人群",
    accentClass: "text-emerald-600",
    checkColor: "text-emerald-500",
    items: [
      {
        image: `${IMG}/photo-1559757175-5700dde675bc-w600.jpg`,
        imageAlt: "早中期膝骨关节炎",
        title: "早中期膝骨关节炎",
        subtitle: "Kellgren-Lawrence分级Ⅱ-Ⅲ级",
        bullets: [
          "关节疼痛、晨僵、关节肿胀、活动受限",
          "对口服止痛药、玻璃酸钠或PRP注射效果不佳或不耐受",
          "希望保留自然关节、推迟或避免人工关节置换",
        ],
      },
      {
        image: `${IMG}/photo-1612349317150-e413f6a5b16d-w600.jpg`,
        imageAlt: "伴有炎症特征的膝骨关节炎",
        title: "伴有炎症特征的膝骨关节炎",
        subtitle: "关节肿胀、弹响、晨僵明显",
        bullets: [
          "关节肿胀明显",
          "关节弹响",
          "晨僵时间较长",
        ],
      },
      {
        image: `${IMG}/photo-1571019614242-c5c5dee9f50b-w600.jpg`,
        imageAlt: "慢性运动损伤相关性关节病",
        title: "慢性运动损伤相关性关节病",
        subtitle: "长期运动导致的关节退变",
        bullets: [
          "韧带损伤",
          "软骨磨损",
          "运动员关节保护",
        ],
      },
      {
        image: `${IMG}/photo-1538108149393-fbbd81895907-w600.jpg`,
        imageAlt: "术后辅助修复",
        title: "术后辅助修复",
        subtitle: "关节镜清理术后配合MFAT",
        bullets: [
          "促进术后软骨修复",
          "减轻术后炎症反应",
          "加速康复进程",
        ],
      },
      {
        image: `${IMG}/photo-1505751172876-fa1923c5c528-w600.jpg`,
        imageAlt: "对西药不耐受或希望减少药物依赖者",
        title: "对西药不耐受或希望减少药物依赖者",
        subtitle: "希望通过生物疗法综合调理",
        bullets: [
          "止痛药效果减弱或副作用明显",
          "希望减少药物依赖",
          "寻求更自然的疗法",
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
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        checkClass: "text-emerald-500",
        numBg: "bg-emerald-500",
        title: "模块一：自体脂肪微片段核心治疗",
        subtitle: "Micro-Fragmented Adipose Tissue Therapy",
        blocks: [
          {
            type: "numberedGrid",
            cols: "grid md:grid-cols-2 gap-6",
            steps: [
              {
                num: "1",
                title: "微创脂肪采集",
                desc: "局部麻醉下从腹部或大腿抽取少量脂肪（约5-15ml），微创切口＜2mm，约15分钟",
              },
              {
                num: "2",
                title: "MFAT制备",
                desc: "物理破碎为200-400微米微片段，不添加外源性酶，剩余MFAT可冷冻保存备用",
              },
              {
                num: "3",
                title: "关节腔精准注射",
                desc: "18MHz高频超声引导下精确注入，误差控制在0.5mm以内，约15分钟",
              },
              {
                num: "4",
                title: "门诊观察",
                desc: "留观1-2小时，患者可自主下地行走，当日离院",
              },
            ],
          },
        ],
      },
      {
        icon: "heart",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        checkClass: "text-emerald-500",
        numBg: "bg-emerald-500",
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
                desc: "推荐科学的康复运动方案，促进关节长期养护，预防复发",
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
    numBg: "bg-emerald-500",
    numText: "text-lg",
    timeBadgeClass: "text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full",
    steps: [
      {
        title: "线上咨询与病历评估",
        time: "2-5个工作日",
        description:
          "提交膝关节X光负重位、MRI（≥1.5T）影像、既往治疗史及关节功能评分（VAS、WOMAC等），医学顾问进行资料审核和初步适应症筛查",
      },
      {
        title: "远程MDT会诊",
        time: "3-7个工作日",
        description:
          "骨科+再生医学科医师联合视频会诊，确定个性化治疗方案：MFAT剂量、是否需要冻存、费用预估和治疗行程",
      },
      {
        title: "签证与行程安排",
        time: "7-14个工作日",
        description:
          "出具医疗邀请函，指导办理S2/S1医疗签证，协助预订机票、机场接送和医院附近住宿，预约MFAT治疗档期",
      },
      {
        title: "入院评估与术前准备",
        time: "抵华后1-2天",
        description:
          "完成必需检查：血常规、凝血功能、传染病筛查、血小板计数、心电图、体重指数评估等，膝关节影像复核",
      },
      {
        title: "MFAT治疗实施",
        time: "抵华后第2-3天",
        description:
          "门诊手术室局部麻醉下进行微创脂肪采集（约15分钟）→ MFAT物理制备（约20分钟）→ 超声引导下关节腔精准注射（约15分钟），全程约1.5-2小时",
      },
      {
        title: "康复辅助治疗",
        time: "贯穿整个在华期间及返国后",
        description:
          "注射后专业康复师指导进行功能锻炼，配合物理治疗促进恢复，加速关节功能康复",
      },
      {
        title: "出院指导与返程",
        time: "治疗结束前",
        description:
          "康复医师制定个性化功能锻炼方案（含居家视频指导），提供英文版康复手册",
      },
      {
        title: "远程随访与健康管理",
        time: "治疗后12个月",
        description:
          "提供移动端疼痛评分和关节功能自评系统，远程视频复诊，如冻存MFAT可在必要时安排补充注射",
      },
    ],
  },
  efficacy: {
    title: "疗效数据",
    subtitle: "核心循证数据与疗效时间线",
    table: {
      headers: ["指标", "研究结果", "证据等级"],
      headerClass: "text-emerald-400",
      badgeClass: "bg-emerald-500/20 text-emerald-300",
      rows: [
        {
          cells: [
            "单次MFAT注射3年随访",
            "所有评分（VAS、OKS、WOMAC、KOOS）在3个月显著改善（p<0.001），效果持续至3年",
          ],
          badge: "Ⅲ级，335例队列研究",
        },
        {
          cells: [
            "4年随访持续有效性",
            "68%的患者在注射后4年仍保持临床有效性",
          ],
          badge: "Ⅱ级，46例前瞻性研究",
        },
        {
          cells: [
            "vs 透明质酸（炎症表型OA）",
            "KOOS症状评分MFAT组+25.0 vs HA组+12.7（p=0.008），僵硬、肿胀、弹响改善更优",
          ],
          badge: "Ⅰ级，53例RCT",
        },
        {
          cells: [
            "vs SVF（倾向性评分匹配）",
            "MFAT屈曲活动度改善优于SVF（p=0.03），MRI T2映射显示MFAT软骨保存效应更佳且持久性更长",
          ],
          badge: "Ⅲ级，72例队列",
        },
        {
          cells: [
            "冷冻MFAT活率数据",
            "冻存2年后细胞活率（55.73%）与新鲜样本（59.75%）无显著差异，微生物检测100%无菌",
          ],
          badge: "实验室研究",
        },
      ],
    },
    timeline: {
      title: "疗效时间线",
      items: [
        {
          time: "注射后1-2周",
          timeClass: "w-32 flex-shrink-0 text-emerald-400 font-semibold",
          text: "轻度关节肿胀、酸胀感（正常炎性反应），冰敷3-5天自行消退",
        },
        {
          time: "注射后1-3个月",
          timeClass: "w-32 flex-shrink-0 text-emerald-400 font-semibold",
          text: "疼痛明显减轻，晨僵时间缩短，日常上下楼梯更轻松",
        },
        {
          time: "注射后3-6个月",
          timeClass: "w-32 flex-shrink-0 text-emerald-400 font-semibold",
          text: "关节功能显著改善，跛行现象明显减轻，生活质量明显提升",
        },
        {
          time: "注射后6-12个月",
          timeClass: "w-32 flex-shrink-0 text-emerald-400 font-semibold",
          text: "疗效稳定保持，软骨修复在影像学上开始显现",
        },
        {
          time: "注射后12-36个月",
          timeClass: "w-32 flex-shrink-0 text-emerald-400 font-semibold",
          text: "持续改善效应维持，部分患者需补充注射巩固疗效；4年随访仍有68%患者保持有效",
        },
      ],
    },
  },
  cases: {
    title: "真实案例",
    subtitle: "患者真实反馈，见证疗效",
    gridClass: "grid md:grid-cols-2 gap-8",
    imgClass: "h-48",
    accentClass: "text-emerald-600",
    descriptionClass: "text-gray-600 text-sm",
    items: [
      {
        image: `${IMG}/photo-1546519638-68e109498ffc-w600.jpg`,
        imageAlt: "美国退休工程师Jim——MFAT让68岁重返高尔夫球场",
        title: "美国退休工程师Jim——MFAT让68岁重返高尔夫球场",
        subtitle: "跨国医疗的真实见证",
        description:
          "Jim（68岁，美国德克萨斯州）被双膝骨关节炎困扰6年，K-L分级Ⅲ级。上下楼梯剧痛，在社区行走300米即需休息止痛。在美国咨询MFAT治疗，报价约4万美元，超出预期。通过医疗旅游中介来到中国，接受了MFAT单膝治疗配合为期2周的康复套餐。结果：治疗后3个月，VAS评分从7分降至2分，可以每周打2次高尔夫球（每次9洞）。Jim表示：“中国医生教我科学的康复锻炼方法，现在膝盖比以前灵活多了。”他选择了冻存剩余MFAT备用，一年后计划做另一侧膝盖。",
      },
      {
        image: `${IMG}/photo-1576091160399-112ba8d25d1d-w600.jpg`,
        imageAlt: "新加坡Angela女士——7年疼痛，3周中国之行改变一切",
        title: "新加坡Angela女士——7年疼痛，3周中国之行改变一切",
        subtitle: "从绝望到重获新生",
        description:
          "Angela（55岁，新加坡）是一名中学教师，膝关节炎病史7年，K-L分级Ⅱ-Ⅲ级。走路跛行，久站时右膝钻心疼，周末无法陪孩子户外活动。在新加坡尝试过PRP、玻尿酸治疗，效果均短暂。经网上研究，选择来中国接受MFAT治疗。方案：MFAT单次注射+综合康复疗程。结果：治疗后2周疼痛明显减轻，能蹲下系鞋带；治疗后3个月疼痛评分从7分降至1分，步行半小时完全无痛。她现已取消当地关节置换手术的预约，并强烈推荐给身边朋友。",
      },
    ],
  },
  services: {
    title: "支持服务",
    subtitle:
      "我们为每一位来华接受MFAT治疗的海外患者提供从行前到返程的全链路服务",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    items: [
      {
        icon: "globe",
        title: "签证指导与办理",
        description: "医疗邀请函、S2/S1签证材料辅导、入境登记协助",
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
    subtitle: "透明定价，全球价格竞争力无与伦比",
    costCard: {
      title: "MFAT全疗程参考费用（含检查等）",
      price: "$12,000-20,000",
      priceNote: "根据患者具体情况而定",
      priceClass: "text-emerald-600",
      checkClass: "text-emerald-500",
      borderClass: "border-2 border-emerald-500",
      items: [
        "微创脂肪采集",
        "MFAT制备与注射",
        "术前检查与评估",
        "剩余MFAT冷冻保存",
      ],
      footnote: "*以实际就诊过程中医院开具的治疗费用单为准",
    },
    compareCard: {
      title: "价格对比",
      rows: [
        { label: "美国MFAT治疗", value: "$40,000+", valueClass: "text-gray-400" },
        { label: "中国MFAT治疗", value: "$12,000-20,000", valueClass: "text-emerald-600" },
      ],
      savings: { label: "节省比例", value: "50-70%" },
    },
  },
};

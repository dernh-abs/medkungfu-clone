// 中文页面数据 for /projects/arthroplasty-tcm — 精准关节置换联合中医加速康复.
import type { PageData } from "../types";

const IMG = "/sites/www-medkungfu-com-363c9bc1/shared/images";

const INDIGO_BADGE = "text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full";

export const arthroplastyTcmPageZh: PageData = {
  mainAriaLabel: "Joint Replacement with TCM Rehabilitation - Artificial Joint Surgery",
  hero: {
    eyebrow: "Joint NeoGenesis Program",
    title: "精准关节置换联合中医加速康复",
    subtitle:
      "将手术机器人的精准与中医智慧深度融合，为您重建行走自由",
    gradientClass: "from-slate-900 via-indigo-900 to-slate-900",
    accentTextClass: "text-indigo-200",
    buttonClass: "bg-indigo-500 hover:bg-indigo-600",
  },
  intro: {
    title: "什么是精准关节置换联合中医加速康复？",
    paragraphs: [
      "当关节软骨因长期磨损、炎症或外伤导致大面积缺损，关节间隙基本消失时，保守治疗和再生医学手段已无法逆转结构的破坏。在此情况下，关节置换并非一个\"让步妥协\"的选择，而是一项科学、成熟的终极解决方案，旨在彻底消除疼痛、恢复关节功能、重建患者行走自由。",
      "在欧美发达国家的公立医疗系统，患者预约关节置换手术往往需要排队6-12个月；而在中国，从入院检查到完成手术仅需1-7天，几乎等同于\"落地即手术\"的效率。",
      "中国在这一领域拥有双重独特优势——在终端医疗方面，将手术费用降至全球洼地，同时可采用手术机器人，实现比徒手操作更精准的假体对线；更关键的是，中国将千年传承的中医特色疗法系统性地整合到围手术期管理中，形成了\"精准手术+术后镇痛+功能加速康复\"的三位一体协同方案。",
    ],
    badgeText: "机器人精准 · 中医加速康复 · 零等待",
    badgeColor: "text-indigo-600",
    image: `${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`,
    imageAlt: "Arthroplasty Treatment",
  },
  advantages: {
    title: "核心优势",
    subtitle: "五大核心优势，为您的关节新生保驾护航",
    gridClass: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
    items: [
      {
        icon: "dollarSign",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        title: "精准置换，费用仅为美国的1/8-1/10",
        description:
          "中国关节假体价格仅为美国的1/8-1/10，全球竞争力无与伦比。",
      },
      {
        icon: "cpu",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        title: "国产手术机器人辅助，精度达0.1毫米",
        description:
          "中国自主研发的关节手术机器人已获得NMPA、FDA、CE等9个国家和地区认证，是目前国际关节置换辅助系统中的顶尖水准，确保假体对线精准，术后步态自然，长期稳定可靠。",
      },
      {
        icon: "clock",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        title: "零等待，落地即手术",
        description:
          "在欧美等地，膝关节置换术的预约等待期长达数月甚至一年。在中国，国际患者从入院完成检查至手术，一般只需1-7天。",
      },
      {
        icon: "leaf",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        title: "中医全程加速康复，住院时间缩短、药物依赖降低",
        description:
          "中国已形成体系化的TKA围手术期中医加速康复方案。电针、腕踝针、艾灸、拔罐、中药外敷等手段贯穿术后全程——显著降低术后疼痛、减少阿片类镇痛药用量、缩短住院时间，保障患者尽早下地活动。",
      },
      {
        icon: "users",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        title: "大量真实国际案例，经验丰富",
        description:
          "中国沿海及内陆多家三甲医院已建立成熟的国际患者接待机制。大量真实案例已充分证明中国在此领域的技术成熟度与国际服务能力。",
      },
    ],
  },
  indications: {
    title: "适应症",
    subtitle:
      "精准关节置换联合中医加速康复方案，主要适用于以下终末期关节病变患者",
    accentClass: "text-indigo-600",
    checkColor: "text-indigo-500",
    items: [
      {
        image: `${IMG}/photo-1559757175-5700dde675bc-w600.jpg`,
        imageAlt: "终末期膝骨关节炎/髋骨关节炎",
        title: "终末期膝骨关节炎/髋骨关节炎",
        subtitle: "K-L分级Ⅲ-Ⅳ级",
        bullets: [
          "关节软骨几乎完全磨损，关节间隙基本消失，影像学显示骨对骨接触",
          "持续严重的夜间痛和静息痛，严重影响睡眠和日常生活",
          "上下楼梯、长距离行走、蹲起等活动严重受限",
          "保守治疗（药物、物理治疗、注射治疗）效果不佳或无效",
        ],
      },
      {
        image: `${IMG}/photo-1612349317150-e413f6a5b16d-w600.jpg`,
        imageAlt: "严重髋关节发育不良/股骨头坏死",
        title: "严重髋关节发育不良/股骨头坏死",
        subtitle: "DDH或激素性/酒精性坏死",
        bullets: [
          "先天性髋关节发育不良（DDH）导致的继发性骨关节炎",
          "激素性或酒精性股骨头坏死塌陷，伴剧烈行走痛和跛行",
          "功能障碍突出，严重影响生活质量",
        ],
      },
      {
        image: `${IMG}/photo-1571019614242-c5c5dee9f50b-w600.jpg`,
        imageAlt: "创伤后关节炎",
        title: "创伤后关节炎",
        subtitle: "关节内骨折后继发",
        bullets: [
          "因关节内骨折或严重韧带损伤后，继发的创伤性关节炎晚期",
          "关节功能严重受损，疼痛持续",
          "需要关节置换恢复功能",
        ],
      },
      {
        image: `${IMG}/photo-1538108149393-fbbd81895907-w600.jpg`,
        imageAlt: "膝关节骨坏死",
        title: "膝关节骨坏死",
        subtitle: "SONK自发性骨坏死",
        bullets: [
          "膝关节自发性骨坏死（SONK）",
          "胫骨平台或股骨髁骨组织缺血坏死",
          "伴剧烈疼痛和功能障碍",
        ],
      },
      {
        image: `${IMG}/photo-1505751172876-fa1923c5c528-w600.jpg`,
        imageAlt: "关节畸形/关节置换翻修",
        title: "关节畸形/关节置换翻修",
        subtitle: "矫形或翻修手术",
        bullets: [
          "因晚期骨关节炎导致膝内翻（O型腿）或膝外翻（X型腿），力线严重异常",
          "关节置换同时可同期矫形",
          "初次置换术后假体松动、磨损或感染，需二期翻修手术",
        ],
      },
    ],
  },
  treatment: {
    title: "治疗内容",
    subtitle: "三大治疗模块，精准手术与中医完美结合",
    modules: [
      {
        icon: "bone",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        checkClass: "text-indigo-500",
        numBg: "bg-indigo-500",
        title: "模块一：精准关节置换术",
        subtitle: "Precision Joint Arthroplasty",
        blocks: [
          {
            type: "surgeryTable",
            heading:
              "手术类型选择（依据病情和患者活动需求综合判断）",
            headers: ["关节类型", "可选术式", "适用人群"],
            headerClass: "text-indigo-600",
            rows: [
              [
                "膝关节",
                "全膝关节置换术（TKA）",
                "内外侧间室均严重磨损、关节间隙广泛消失的患者",
              ],
              [
                "膝关节",
                "单髁膝关节置换术（UKA）",
                "仅单侧间室磨损（约85%患者为前内侧磨损），前后交叉韧带功能完好者。创伤小、恢复快、更接近生理状态",
              ],
              [
                "膝关节",
                "髌股关节置换术（PFA）",
                "单纯髌股关节面磨损、髌骨轨迹不良的患者",
              ],
              [
                "髋关节",
                "全髋关节置换术（THA）",
                "股骨头坏死、髋臼发育不良、髋关节炎终末期",
              ],
              [
                "髋关节",
                "人工股骨头置换术（半髋）",
                "高龄股骨颈骨折无法复位固定的老年人",
              ],
            ],
          },
          {
            type: "chipGrid",
            heading: "假体材料选择",
            items: [
              "金属背托聚乙烯假体",
              "金属对聚乙烯假体",
              "陶瓷对聚乙烯假体",
              "生物型（无骨水泥）假体",
            ],
          },
        ],
      },
      {
        icon: "leaf",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        checkClass: "text-indigo-500",
        numBg: "bg-indigo-500",
        title: "模块二：中医围手术期加速康复方案",
        subtitle: "TCM Perioperative Accelerated Recovery",
        blocks: [
          {
            type: "phaseGroupList",
            groups: [
              {
                title: "术前准备期（术前1-3天）",
                badge: {
                  text: "中医体质调理与预康复",
                  badgeClass: INDIGO_BADGE,
                },
                titleColor: "text-indigo-600",
                bullets: [
                  "中医体质辨识，评估患者气血状态",
                  "中药调理改善关节周围循环",
                  "针灸预康复，减轻术前焦虑",
                  "为手术创造最佳身体条件",
                ],
              },
              {
                title: "术后急性期（术后0-7天）",
                badge: {
                  text: "电针镇痛、拔罐消肿、中药活血",
                  badgeClass: INDIGO_BADGE,
                },
                titleColor: "text-indigo-600",
                bullets: [
                  "电针或毫针针刺镇痛，减少阿片类镇痛药用量",
                  "循经拔罐+腕踝针，促进关节功能恢复、减轻炎症反应",
                  "中药内服活血化瘀+中药外敷消肿止痛",
                  "艾灸温经散寒，促进局部循环",
                ],
              },
            ],
          },
        ],
      },
      {
        icon: "activity",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        checkClass: "text-indigo-500",
        numBg: "bg-indigo-500",
        title: "模块三：快速康复（ERAS）联合方案",
        subtitle: "Enhanced Recovery After Surgery",
        blocks: [
          {
            type: "bulletCardGrid",
            cols: "grid md:grid-cols-2 gap-6",
            cards: [
              {
                title: "现代ERAS理念",
                bullets: [
                  "术前咨询与营养评估",
                  "微创入路技术",
                  "多模式镇痛",
                  "早期营养支持和下地活动",
                  "预防静脉血栓形成",
                ],
                trailing:
                  "TKA术后约2小时即可进行踝泵运动及股四头肌等长收缩，术后第1天即可在助行器辅助下尝试下地行走和早期负重，术后第2-3天逐步过渡到独立行走。",
              },
              {
                title: "康复运动指导",
                bullets: [
                  "股四头肌力量训练",
                  "膝关节被动-主动屈伸训练",
                  "渐进负重行走",
                  "改良八段锦教学",
                ],
                trailing:
                  "加速康复、预防二次损伤，帮助患者尽快恢复正常生活。",
              },
            ],
          },
        ],
      },
    ],
  },
  process: {
    title: "治疗流程",
    subtitle: "七步完整流程，专为海外患者设计",
    layout: "list",
    numBg: "bg-indigo-500",
    numText: "text-lg",
    timeBadgeClass: "text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full",
    steps: [
      {
        title: "线上咨询与病历评估",
        time: "2-5个工作日",
        description:
          "通过线上平台提交膝关节/髋关节X光负重位、MRI影像、既往治疗史及相关检查报告。我方医学顾问进行资料审核和初步适应症筛查，确定置换手术的必要性和可行性",
      },
      {
        title: "远程MDT会诊与方案制定",
        time: "3-7个工作日",
        description:
          "骨科+康复医学科+中医科+麻醉科医师进行联合视频会诊。医师根据K-L分级、关节间隙情况、合并畸形、骨缺损程度和患者活动需求，确定精准手术方案（TKA/UKA/THA等）、假体类型、机器人辅助适用性、中医加速康复方案及费用明细",
      },
      {
        title: "医疗签证与赴华行程安排",
        time: "7-14个工作日",
        description:
          "出具医疗邀请函，指导办理S2短期就医签证（最长180天）。协助预订机票、安排机场接送及康复住院期间住宿，对接关节置换手术合作医院预约手术档期",
      },
      {
        title: "入院前全面评估",
        time: "抵华后1-2天",
        description:
          "完成血常规、凝血功能、传染病筛查、肝肾功能、心电图、心肺功能评估等。签署中英文对照知情同意书。中医体质辨识并开具术前调理中药。根据病情需要完成三维CT扫描，为机器人精准术前规划做准备",
      },
      {
        title: "手术实施",
        time: "抵华后第3-5天",
        description:
          "入院后进行全身麻醉或椎管内麻醉。机器人辅助或传统术式完成全膝/单髁/全髋置换手术（手术时长约60-120分钟）。术后返回病房，即开始踝泵运动及股四头肌等长收缩等早期康复。术后第1天在康复师指导下借助助行器开始下地行走",
      },
      {
        title: "住院康复与中医协同治疗",
        time: "术后5-7天",
        description:
          "电针或毫针针刺镇痛，减少阿片类镇痛药用量。循经拔罐+腕踝针，促进关节功能恢复、减轻炎症反应。中药内服活血化瘀+中药外敷消肿止痛。术后康复师全程指导：被动-主动活动训练，股四头肌力量训练",
      },
      {
        title: "出院康复指导与返程",
        time: "治疗结束前",
        description:
          "康复医师制定详细的渐进康复计划（提供中英文视频教程）。为需要长期中药调理的患者安排邮寄中药丸剂/膏方服务。提供中英文对照康复手册，明确支具使用、负重限制、拐杖使用说明等关键要点",
      },
    ],
  },
  efficacy: {
    title: "疗效数据",
    subtitle: "最新循证医学证据与疗效时间线",
    table: {
      headers: ["研究来源", "样本量/设计", "核心发现", "证据等级"],
      headerClass: "text-indigo-400",
      badgeClass: "bg-indigo-500/20 text-indigo-300",
      rows: [
        {
          cells: [
            "循经拔罐+腕踝针TKA术后研究（2026年4月）",
            "120例RCT（60 vs 60）",
            "联合组优良率达86.67%，高于对照组71.67%（P<0.05）。HSS评分显著提高、VAS评分显著降低、ROM值显著增加、步行功能显著改善；血清CRP、IL-6、TNF-α水平显著下降，炎症反应被有效抑制",
          ],
          badge: "Ⅱ级，RCT",
        },
        {
          cells: [
            "THA围手术期康复专家共识（2025年）",
            "专家共识",
            "规范THA围手术期康复评定与治疗，强调术前教育、术后指导，将辨证论治、针刺镇痛、中药调理系统性纳入康复方案",
          ],
          badge: "专家共识",
        },
      ],
    },
    timeline: {
      title: "疗效时间线",
      items: [
        {
          time: "术后24小时",
          timeClass: "w-32 flex-shrink-0 text-indigo-400 font-semibold text-sm",
          text: "借助助行器下地站立。患者反馈\"疼痛控制超出预期\"，电针和拔罐显著缓解术后疼痛（VAS评分降至2-3分）",
        },
        {
          time: "术后第1周",
          timeClass: "w-32 flex-shrink-0 text-indigo-400 font-semibold text-sm",
          text: "可借助助行器行走50-100米，膝关节被动屈曲可达90°-100°；中医电针、拔罐等持续减轻术后疼痛和肿胀；中药内服和外敷配合，明显减少非甾体抗炎药剂量和不良反应",
        },
        {
          time: "术后2-6周",
          timeClass: "w-32 flex-shrink-0 text-indigo-400 font-semibold text-sm",
          text: "逐步过渡至单拐行走→无辅助行走；ROM可达110°以上，基本完成下楼、坐下站起等动作",
        },
        {
          time: "术后3个月",
          timeClass: "w-32 flex-shrink-0 text-indigo-400 font-semibold text-sm",
          text: "独立行走无障碍，可步行1公里以上；屈膝可达120°-130°，膝关节伸直完全恢复正常；可恢复轻体力工作、游泳、骑车等低强度运动",
        },
        {
          time: "术后6-12个月",
          timeClass: "w-32 flex-shrink-0 text-indigo-400 font-semibold text-sm",
          text: "KOOS、WOMAC及Oxford膝关节评分均显著高于术前基线（P<0.01）；多数患者可恢复中高强度活动，如爬楼梯、远足等；疼痛评分降至0-1分，患者总体满意度超过90%",
        },
      ],
    },
    valueCardsTitle: "中医加速康复的关键价值",
    valueCards: [
      {
        title: "减少阿片类镇痛药用量",
        text: "最高降低约54%的救援镇痛药相对风险，降低药物依赖和副作用",
      },
      {
        title: "术后疼痛评分显著降低",
        text: "VAS在术后第1、3、7天均显著低于单纯西医对照组，提升患者康复体验",
      },
      {
        title: "缩短住院时间",
        text: "中医围手术期加速康复使术后平均住院日从7-10天缩短至5-7天",
      },
      {
        title: "改善关节功能",
        text: "HSS膝关节功能评分提高更显著，ROM值增加更明显",
      },
      {
        title: "减轻术后炎症反应",
        text: "血清CRP、IL-6、TNF-α水平显著低于对照组",
      },
    ],
    valueCardTitleClass: "text-indigo-400",
  },
  cases: {
    title: "真实案例",
    subtitle: "东南亚及国际海外患者真实反馈",
    gridClass: "grid md:grid-cols-3 gap-8",
    imgClass: "h-48",
    accentClass: "text-indigo-600",
    descriptionClass: "text-gray-600 text-sm",
    items: [
      {
        image: `${IMG}/photo-1546519638-68e109498ffc-w600.jpg`,
        imageAlt:
          "老挝高龄患者玉奶奶——93岁跨国摔伤，入院12小时内完成髋关节置换",
        title:
          "老挝高龄患者玉奶奶——93岁跨国摔伤，入院12小时内完成髋关节置换",
        subtitle: "从绝望到重新站立",
        description:
          "玉奶奶（93岁，老挝）在家不慎摔倒导致股骨粗隆间骨折，家属经多方求医后，最终选择跨国来到景洪市第一人民医院。医院迅速启动应急预案，组织MDT多学科会诊，在患者入院12小时内成功实施了人工髋关节置换术。术后，康复医学科治疗团队无缝衔接，立即实施快速康复方案。在医护人员精心照料下，玉奶奶术后第二天即可下床活动，有效避免了长期卧床可能引发的并发症。",
      },
      {
        image: `${IMG}/photo-1576091160399-112ba8d25d1d-w600.jpg`,
        imageAlt:
          "澳大利亚华人陈阿姨——海外排队一年 VS 回国后一天手术",
        title:
          "澳大利亚华人陈阿姨——海外排队一年 VS 回国后一天手术",
        subtitle: "机器人辅助精准置换",
        description:
          "陈阿姨（75岁，久居澳大利亚），体重103公斤，BMI高达36，膝关节复杂畸形，日常行走已沦为锥心刺骨的折磨。在澳大利亚，家庭医生告知\"专科手术需排队一年以上\"。绝望之际，陈阿姨毅然决定回国求医。抵达广州后，广东省第二人民医院许长鹏主任团队立刻为其展开检查，次日便在机器人辅助下完成了华南地区首例国产生物型全膝关节置换术。从抵达医院到完成手术仅用一天。术后第二天，陈阿姨便能扶着助行器独立行走，第三天膝关节屈伸功能明显改善。\"早知道这么便捷，我早就该飞回来了！\"",
      },
      {
        image: `${IMG}/photo-1504439904031-93ded9f93e4e-w600.jpg`,
        imageAlt:
          "也门患者A女士——双膝置换，AI规划＋中医康复令其喜极而泣",
        title:
          "也门患者A女士——双膝置换，AI规划＋中医康复令其喜极而泣",
        subtitle: "异国他乡感受家的温暖",
        description:
          "A女士（47岁，也门）因严重双膝骨性关节炎长期饱受疼痛困扰，膝关节磨损非常严重，关节间隙基本消失。因儿子在广州生活多年，她最终决定来广州求医。南方医科大学第三附属医院关节外科接诊后，借助AI术前三维规划系统进行精准手术设计，成功实施了双膝关节置换手术。术后科室贯彻快速康复（ERAS）理念，制定了中西医结合个性化康复方案。A女士在术后第二天便能借助助行器下地行走，医院充分尊重她的宗教信仰与生活习惯，让她在异国他乡感受到了家的温暖。",
      },
    ],
  },
  services: {
    title: "支持服务",
    subtitle:
      "我们为每一位来华接受关节置换联合中医治疗的海外患者提供从行前到返程的全链路服务",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
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
    subtitle: "透明定价，全球价格优势无与伦比",
    costCard: {
      title: "一个完整疗程参考费用（单膝）",
      price: "$12,000-40,000",
      priceNote: "含手术、假体、中医康复、住院",
      priceClass: "text-indigo-600",
      checkClass: "text-indigo-500",
      borderClass: "border-2 border-indigo-500",
      items: [
        "关节置换手术",
        "假体材料（可选）",
        "机器人辅助（可选）",
        "中医围手术期康复",
        "住院及检查",
      ],
      footnote: "*选择不同假体及机器人辅助手术影响整体治疗价格",
      footnote2: "*以实际就诊过程中医院开具的治疗费用单为准",
    },
    compareCard: {
      title: "国际价格对比",
      rows: [
        { label: "美国", value: "$40,000-70,000", valueClass: "text-gray-400" },
        { label: "中国", value: "$12,000-40,000", valueClass: "text-indigo-600" },
      ],
      savings: { label: "节省比例", value: "60-85%" },
    },
  },
};

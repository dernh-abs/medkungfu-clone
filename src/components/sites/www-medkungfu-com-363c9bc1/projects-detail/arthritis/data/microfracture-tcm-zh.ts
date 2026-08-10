// 中文页面数据 for /projects/microfracture-tcm — Microfracture-TCM软骨再生修复.
import type { PageData } from "../types";

const IMG = "/sites/www-medkungfu-com-363c9bc1/shared/images";

export const microfractureTcmPageZh: PageData = {
  mainAriaLabel: "Microfracture Combined with TCM - Knee Cartilage Repair",
  hero: {
    eyebrow: "Cartilage Regeneration & Repair Program",
    title: "Microfracture-TCM软骨再生修复",
    subtitle: "关节镜微骨折术联合中医协同治疗",
    tagline: "微创手术 · 中医全程护航 · 零等待 · 价格优势显著",
    gradientClass: "from-slate-900 via-amber-900 to-slate-900",
    accentTextClass: "text-amber-200",
    buttonClass: "bg-amber-500 hover:bg-amber-600",
  },
  intro: {
    title: "什么是Microfracture-TCM软骨再生修复方案？",
    paragraphs: [
      "关节镜微骨折术（Arthroscopic Microfracture）是目前国际临床上修复中、小面积软骨缺损最常用的一线手术方法，尤其适用于股骨髁、股骨滑车等负重面孤立性软骨损伤。相比开放手术，它具有创伤小、恢复快、并发症少、住院时间短等显著优势。",
      "中国传统医学可在微骨折手术创造的良好修复条件下，通过针灸、中药熏蒸、艾灸拔罐、中药内服等手段，提供全程康复支持，加速血凝块向纤维软骨组织的转化、促进软骨修复、显著提高手术远期疗效。",
    ],
    badgeText: "微创手术 · 中医协同 · 自体修复",
    badgeColor: "text-amber-600",
    image: `${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`,
    imageAlt: "Microfracture Treatment",
  },
  advantages: {
    title: "核心优势",
    subtitle: "五大核心优势，为您的关节健康保驾护航",
    gridClass: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
    items: [
      {
        icon: "scissors",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "微创手术，创伤小、恢复快",
        description:
          "关节镜微骨折术是在高清关节镜下完成的微创手术，切口仅约0.5-1cm，组织损伤小、术中出血少、术后疼痛轻。日间手术或短期住院即可完成，术后当天或次日即可在支具保护下尝试下地活动。",
      },
      {
        icon: "shield",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "利用自体干细胞，无排异、无移植源性感染",
        description:
          "微骨折术的原理并非植入外来材料，而是通过钻孔激发骨髓自我修复机制，从根源上杜绝了异体组织的排异反应和血源性传染病风险。",
      },
      {
        icon: "leaf",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "中医贯穿围手术期，全面护航康复",
        description:
          "术前中医调理：根据中医体质辨识，使用中药提前调理气血、改善关节周围循环，为手术创造更佳条件。术后即刻康复：术后早期介入针灸、艾灸、推拿，配合现代康复技术，有效减轻术后肿胀、缓解疼痛、预防肌肉萎缩和关节粘连。",
      },
      {
        icon: "dollarSign",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "全球价格优势显著",
        description:
          "中国微骨折手术全套住院费用（含关节镜操作、麻醉、住院康复及中医康复），仅为美国同级别手术（约1.5万-2.5万美元，约合11-18万元人民币）的1/3-1/5。",
      },
      {
        icon: "clock",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "零等待，及时解除病痛",
        description:
          "欧美公立医疗体系的膝关节软骨损伤手术等待期常长达6-12个月。在中国，从线上咨询、远程MDT会诊到入院手术，一般仅需2-3周即可完成，极大缩短了患者等待的痛苦。",
      },
    ],
  },
  indications: {
    title: "适应症",
    subtitle:
      "关节镜微骨折术联合中医协同治疗主要适用于以下人群",
    accentClass: "text-amber-600",
    checkColor: "text-amber-500",
    items: [
      {
        image: `${IMG}/photo-1559757175-5700dde675bc-w600.jpg`,
        imageAlt: "股骨髁/滑车孤立性软骨缺损",
        title: "股骨髁/滑车孤立性软骨缺损",
        subtitle: "面积<2-4 cm²",
        bullets: [
          "国际研究通常纳入缺损面积<2 cm²的患者",
          "微骨折是针对中小面积软骨缺损最常用的手术方法",
          "若缺损面积稍大（2-4 cm²），联合使用胶原蛋白软骨支架等技术可扩大修复范围",
        ],
      },
      {
        image: `${IMG}/photo-1612349317150-e413f6a5b16d-w600.jpg`,
        imageAlt: "股骨髁负重面软骨缺损",
        title: "股骨髁负重面软骨缺损",
        subtitle: "Outerbridge分级Ⅲ-Ⅳ级",
        bullets: [
          "OuterbridgeⅢ级（深至骨面的软骨裂隙）",
          "OuterbridgeⅣ级（软骨全层剥脱，软骨下骨裸露）",
          "适合微骨折修复治疗",
        ],
      },
      {
        image: `${IMG}/photo-1571019614242-c5c5dee9f50b-w600.jpg`,
        imageAlt: "有机械症状的早中期膝骨关节炎",
        title: "有机械症状的早中期膝骨关节炎",
        subtitle: "K-L Ⅰ-Ⅲ级",
        bullets: [
          "关节交锁、弹响、卡顿、打软腿等机械症状",
          "保守治疗（口服药、理疗）效果不佳",
          "无严重关节间隙广泛狭窄的早中期患者",
        ],
      },
      {
        image: `${IMG}/photo-1538108149393-fbbd81895907-w600.jpg`,
        imageAlt: "年轻活跃人群",
        title: "年轻活跃人群",
        subtitle: "18-50岁，有重返运动需求",
        bullets: [
          "因运动损伤导致软骨缺损的年轻运动爱好者",
          "微骨折术后恢复运动能力的几率较高",
          "尤其适合篮球、足球、跑步等运动损伤患者",
        ],
      },
      {
        image: `${IMG}/photo-1505751172876-fa1923c5c528-w600.jpg`,
        imageAlt: "拒绝或暂不宜接受软骨移植/关节置换者",
        title: "拒绝或暂不宜接受软骨移植/关节置换者",
        subtitle: "希望选择性价比更高方案",
        bullets: [
          "对大范围软骨缺损技术费用或手术创伤有顾虑",
          "希望选择性价比更高的一期手术方案",
          "希望最大限度保留关节功能的患者",
        ],
      },
    ],
  },
  treatment: {
    title: "治疗内容",
    subtitle: "两大治疗模块，手术与中医完美结合",
    modules: [
      {
        icon: "scissors",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        checkClass: "text-amber-500",
        numBg: "bg-amber-500",
        title: "模块一：关节镜微骨折术",
        subtitle: "Arthroscopic Microfracture Surgery",
        blocks: [
          {
            type: "numberedList",
            steps: [
              {
                num: "1",
                title: "麻醉方式",
                desc: "全身麻醉或区域阻滞麻醉（根据患者情况由麻醉医师制定方案）",
              },
              {
                num: "2",
                title: "第一步：关节镜探查与评估",
                desc: "高清关节镜下全面评估软骨缺损位置、面积、深度及周围软骨状态",
              },
              {
                num: "3",
                title: "第二步：缺损区清理与准备",
                desc: "清理缺损区不稳定软骨边缘，暴露软骨下骨板，为微骨折钻孔做准备",
              },
              {
                num: "4",
                title: "第三步：微骨折钻孔",
                desc: "使用专用微骨折器械在软骨下骨板上钻孔，深度约3-4mm，孔间距约3-4mm，激发骨髓释放干细胞和生长因子",
              },
              {
                num: "5",
                title: "第四步：血凝块形成",
                desc: "骨髓液渗出形成血凝块，内含干细胞、生长因子，为纤维软骨再生提供基础",
              },
            ],
          },
        ],
      },
      {
        icon: "leaf",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        checkClass: "text-amber-500",
        numBg: "bg-amber-500",
        title: "模块二：中医围手术期协同治疗",
        subtitle: "TCM Perioperative Care",
        blocks: [
          {
            type: "phaseGroupList",
            groups: [
              {
                title: "术前中医调理（术前1-2周）",
                titleColor: "text-amber-600",
                bullets: [
                  "中医体质辨识（望闻问切四诊）",
                  "中药提前改善关节循环和营养状态",
                  "适量针灸，减轻术前疼痛",
                ],
              },
              {
                title: "术后康复阶段（术后第1-14天）",
                titleColor: "text-amber-600",
                bullets: [
                  "针刺疗法：疏通经络、缓解疼痛",
                  "艾灸：温经散寒、促进局部循环",
                  "中药外敷/熏蒸：消肿止痛、活血化瘀",
                  "中药内服：辨证施治、整体调理",
                  "推拿：松解肌肉、预防粘连",
                ],
              },
              {
                title: "远期功能康复阶段",
                titleColor: "text-amber-600",
                bullets: [
                  "中医养生功法：八段锦、太极拳",
                  "股四头肌力量训练：强化膝关节稳定性",
                ],
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
    numBg: "bg-amber-500",
    numText: "text-lg",
    timeBadgeClass: "text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full",
    steps: [
      {
        title: "线上咨询与病历评估",
        time: "2-5个工作日",
        description:
          "提交膝关节X光负重位、MRI（≥1.5T）影像、既往治疗史和关节功能评分（VAS、WOMAC、IKDC等）。医学顾问根据软骨缺损面积、位置、Outerbridge分级和K-L分级进行资料审核和初步适应症筛查，确定是否适合微骨折术",
      },
      {
        title: "远程MDT会诊",
        time: "3-7个工作日",
        description:
          "骨科+康复医学科+中医科医师联合视频会诊。医师根据您的软骨缺损情况、中医体质类型和个体条件确定个性化治疗方案：是否需要联合PRP或胶原蛋白支架、术后中医康复方案组合、费用预估和治疗行程安排",
      },
      {
        title: "医疗签证与赴华行程安排",
        time: "7-14个工作日",
        description:
          "出具医疗邀请函，指导办理S2短期就医签证（最长180天）。协助预订机票、安排机场接送和医院附近住宿，对接关节镜微骨折术合作医院预约手术档期",
      },
      {
        title: "入院前全面评估与术前准备",
        time: "抵华后1-2天",
        description:
          "完成必需检查：血常规、凝血功能、传染病筛查（HIV、HBV、HCV等）、肝肾功能、心电图、心肺功能评估等。中医体质辨识和膝关节影像复核。签署中英文对照知情同意书。中医师根据体质开具术前调理中药",
      },
      {
        title: "关节镜微骨折术实施",
        time: "抵华后第2-3天",
        description:
          "入院后进行全身或区域麻醉，关节镜微骨折手术（手术时长约45-90分钟，视缺损数量和合并处理情况而定）。术后在麻醉复苏室观察1-2小时后转回病房。手术当日严格限制活动",
      },
      {
        title: "住院康复与中医协同治疗",
        time: "术后住院3-7天",
        description:
          "术后第1-2天：西医镇痛管理+被动关节活动训练开始；针灸或艾灸即刻介入，减轻术后疼痛和肿胀。术后第3-4天：中药内服启动，按\"活血化瘀\"方向辨证施治；中药外敷/熏蒸开始使用。术后第5-7天：推拿手法逐步介入，指导患者在支具保护下尝试部分负重行走",
      },
      {
        title: "出院康复指导与返程计划",
        time: "治疗结束前",
        description:
          "康复医师制定详细的功能锻炼方案（含视频教程和书面中英文双语说明）。为需要长期中药调理的患者安排邮寄中药丸剂/膏方服务。提供中英文对照康复手册，明确支具使用、负重限制、拐杖使用说明等关键要点",
      },
      {
        title: "远程随访与健康管理",
        time: "术后12个月",
        description:
          "提供移动端疼痛评分（VAS）和关节功能自评（KOOS、IKDC）系统。远程视频复诊，中医医师根据恢复阶段和季节变化调整中药调理建议。按需指导在当地拍摄MRI后进行影像学对比分析，评估软骨修复组织（MOCART评分）的进展情况",
      },
    ],
  },
  efficacy: {
    title: "疗效数据",
    subtitle: "术后恢复时间线与预期效果",
    timeline: {
      title: "疗效时间线",
      items: [
        {
          time: "术后0-2周（严格保护期）",
          timeClass: "w-40 flex-shrink-0 text-amber-400 font-semibold text-sm",
          text: "住院或门诊观察，严格限制负重（需拐杖），消肿止痛为主，中医针灸+中药外敷显著缓解肿胀",
        },
        {
          time: "术后2-6周（保护性负重期）",
          timeClass: "w-40 flex-shrink-0 text-amber-400 font-semibold text-sm",
          text: "继续非负重/减负荷状态活动，关节被动活动度逐渐增加至90°以上，血凝块开始转化为纤维软骨组织",
        },
        {
          time: "术后6周-3个月",
          timeClass: "w-40 flex-shrink-0 text-amber-400 font-semibold text-sm",
          text: "逐步过渡到完全负重，显著改善关节僵硬和活动度，多数患者日常行走基本无痛",
        },
        {
          time: "术后3-6个月",
          timeClass: "w-40 flex-shrink-0 text-amber-400 font-semibold text-sm",
          text: "股四头肌力量逐步恢复，可完成日常起居、缓慢上楼、轻度活动",
        },
        {
          time: "术后6-12个月",
          timeClass: "w-40 flex-shrink-0 text-amber-400 font-semibold text-sm",
          text: "配合术后中医中药调理和功能锻炼，多数患者可恢复低强度体育活动（如游泳、骑车、慢跑），ICRS及KOOS评分达到较高水平",
        },
      ],
    },
    statClass: "text-amber-400",
    stats: [
      { value: "0.5-1cm", label: "微创切口大小" },
      { value: "45-90min", label: "手术时长" },
      { value: "6-12月", label: "恢复运动功能" },
    ],
  },
  cases: {
    title: "真实案例",
    subtitle: "患者真实反馈，见证疗效",
    gridClass: "grid md:grid-cols-3 gap-8",
    imgClass: "h-48",
    accentClass: "text-amber-600",
    descriptionClass: "text-gray-600 text-sm",
    items: [
      {
        image: `${IMG}/photo-1546519638-68e109498ffc-w600.jpg`,
        imageAlt: "加拿大冰球运动员Chris——微骨折+PRP挽救职业生涯",
        title: "加拿大冰球运动员Chris——微骨折+PRP挽救职业生涯",
        subtitle: "从绝望到重返冰场",
        description:
          "Chris（29岁，加拿大蒙特利尔），半职业冰球运动员。一次训练中右膝股骨内髁发生OuterbridgeⅣ级软骨缺损（面积约1.8 cm²），MRI显示软骨下骨裸露。加拿大骨科医生建议软骨移植，等待期6个月以上。经经纪人搜索联系到中国运动医学中心，接受微骨折术联合PRP注射+术后4周中医康复（针灸10次+中药熏洗每日1次+推拿手法8次）。术后6周可部分负重行走，3个月恢复慢跑，6个月重返冰场，12个月随访MRI显示缺损区纤维软骨覆盖良好（MOCART 78分）。\"在中国，我得到了手术和中医康复的全周期守护，这是我职业生涯最正确的决定。\"",
      },
      {
        image: `${IMG}/photo-1576091160399-112ba8d25d1d-w600.jpg`,
        imageAlt: "澳大利亚徒步爱好者Peter——从登山梦碎到重返国家公园",
        title: "澳大利亚徒步爱好者Peter——从登山梦碎到重返国家公园",
        subtitle: "18个月等待 vs 3周中国之行",
        description:
          "Peter（52岁，澳大利亚墨尔本）是一名徒步登山爱好者。右膝疼痛逐渐加重至无法完成超过1小时的徒步行程，MRI诊断为股骨滑车大面积软骨缺损（约2.2 cm²，OuterbridgeⅢ-Ⅳ级）。在澳洲公立医疗评估手术等待期18个月。自费来中国接受关节镜微骨折术+胶原蛋白软骨支架植入，术后配合中医综合康复方案（中药内服+艾灸+针灸，总计4周）。术后4个月能独立步行1.5小时，8个月完成5公里徒步，12个月重返蓝山国家公园完成了10公里徒步线路。\"中医师教会我的八段锦，我现在每天坚持练习，膝盖比以前更灵活了。\"",
      },
      {
        image: `${IMG}/photo-1504439904031-93ded9f93e4e-w600.jpg`,
        imageAlt: "英国骑行爱好者Richard——微骨折术让双膝重获新生",
        title: "英国骑行爱好者Richard——微骨折术让双膝重获新生",
        subtitle: "省掉价值几万英镑的手术",
        description:
          "Richard（45岁，英国伦敦）多年长距离骑行导致双膝骨关节炎，左膝股骨内髁孤立性软骨缺损（面积约1.5 cm²），VAS疼痛评分6-7分，骑行时踩踏无力、无法完成完整曲柄行程。在英国NHS等待专科评估已6个月仍未排上手术。通过医疗旅游中介来中国，接受左膝微骨折术+PRP注射联合中医综合康复（中药内服+针灸+熏蒸+推拿，总疗程6周）。术后6个月左膝VAS降至1分，骑行时速从22km/h提升至32km/h，1年后完成120公里骑行挑战。他还接受了右膝预防性PRP注射和定期中医调理，每年飞回中国进行一次复诊。\"我从没想过，中国用不到伦敦一套西装的钱，帮我省掉了一台价值几万英镑的手术。\"",
      },
    ],
  },
  services: {
    title: "支持服务",
    subtitle:
      "我们为每一位来华接受Microfracture联合中医治疗的海外患者提供从行前到返程的全链路服务",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
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
    subtitle: "透明定价，全球价格优势显著",
    costCard: {
      title: "全套微骨折手术参考费用",
      price: "$4,000-8,000",
      priceNote: "根据患者具体情况而定",
      priceClass: "text-amber-600",
      checkClass: "text-amber-500",
      borderClass: "border-2 border-amber-500",
      items: [
        "关节镜微骨折手术",
        "麻醉费用",
        "住院康复",
        "中医康复治疗",
        "术前术后检查",
      ],
      footnote: "*如需联合PRP或软骨支架，费用相应增加",
      footnote2: "*以实际就诊过程中医院开具的治疗费用单为准",
    },
    compareCard: {
      title: "价格对比",
      rows: [
        { label: "美国同级别手术", value: "$15,000-25,000", valueClass: "text-gray-400" },
        { label: "中国微骨折手术", value: "$4,000-8,000", valueClass: "text-amber-600" },
      ],
      savings: { label: "节省比例", value: "60-80%" },
    },
  },
};

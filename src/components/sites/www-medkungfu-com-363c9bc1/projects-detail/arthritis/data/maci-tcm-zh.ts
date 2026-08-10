// 中文页面数据 for /projects/maci-tcm — MACI-TCM关节再生疗法.
import type { PageData } from "../types";

const IMG = "/sites/www-medkungfu-com-363c9bc1/shared/images";

const ROSE_BADGE = "text-sm text-rose-600 bg-rose-50 px-3 py-1 rounded-full";

export const maciTcmPageZh: PageData = {
  mainAriaLabel: "MACI-TCM Therapy - Chondrocyte Transplantation with TCM",
  hero: {
    eyebrow: "MACI Joint NeoGenesis Program",
    title: "MACI-TCM关节再生疗法",
    subtitle: "自体软骨细胞移植联合中医协同治疗",
    tagline:
      "软骨修复\"金标准\" · 中医全程协同 · 零等待 · 价格优势4-5倍",
    gradientClass: "from-slate-900 via-rose-900 to-slate-900",
    accentTextClass: "text-rose-200",
    buttonClass: "bg-rose-500 hover:bg-rose-600",
  },
  intro: {
    title: "什么是MACI-TCM关节再生疗法？",
    paragraphs: [
      "MACI（Matrix-Induced Autologous Chondrocyte Implantation）——基质诱导自体软骨细胞移植是第三代自体软骨细胞移植技术，被誉为软骨修复领域的\"金标准\"。",
      "MACI主要适用于18-55岁、有症状的单发或多发全层软骨缺损成人患者，尤其适合运动损伤后导致软骨缺损的年轻活跃人群。近年来，MACI的应用范围还从膝关节扩展至踝关节、肩关节和髋关节的软骨损伤修复。",
      "为了让MACI的治疗效果最大化，我们将这项\"金标准\"技术与中医特色疗法深度融合——从术前的中医体质辨识和中药调理，到术后的针灸止痛、中药熏蒸活血化瘀、推拿松解粘连、艾灸温经散寒，中医贯穿了MACI治疗的每一个阶段，实现了\"现代化医学精准修复\"与\"传统中医整体调理\"的完美协同。",
    ],
    badgeText: "金标准技术 · 自体来源 · 中医协同",
    badgeColor: "text-rose-600",
    image: `${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`,
    imageAlt: "MACI Treatment",
  },
  advantages: {
    title: "核心优势",
    subtitle: "六大核心优势，为您的关节健康保驾护航",
    gridClass: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
    items: [
      {
        icon: "award",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        title: "\"金标准\"技术，长期疗效有保障",
        description:
          "基质诱导自体软骨细胞移植（MACI）被誉为软骨修复领域的\"金标准\"，是第三代自体软骨细胞移植技术。这是目前最接近原生关节软骨的再生方案。",
      },
      {
        icon: "shield",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        title: "自体来源，零排异",
        description:
          "MACI使用的软骨细胞全部来自患者自身膝关节非负重区的健康软骨，经体外扩增后回植。自体细胞+自体修复的模式从根源上杜绝了异体移植的免疫排异反应和血源性传染病风险。",
      },
      {
        icon: "leaf",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        title: "中医全程协同，加速康复、增效减毒",
        description:
          "术前中医体质辨识和中药调理可改善气血、优化身体状态；术后早期介入针灸止痛消肿、中药熏蒸活血化瘀、推拿松解粘连、艾灸温经散寒，与现代康复训练形成完美互补。",
      },
      {
        icon: "dollarSign",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        title: "全球价格竞争力无与伦比",
        description:
          "在美国，MACI一个完整疗程的费用约4.5万-7.5万美元，部分复杂病例超过10万美元。在中国，MACI一个完整疗程总费用仅为美国同类治疗费用的1/4至1/5，价差可达4-5倍。",
      },
      {
        icon: "flaskConical",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        title: "合规透明，技术领先",
        description:
          "中国在细胞治疗领域已建立起从国家级指南、伦理审查、GMP制备到临床应用的全链条监管体系。",
      },
      {
        icon: "clock",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        title: "零等待，及时解除病痛",
        description:
          "在欧美发达国家，膝关节软骨修复手术的等待期常长达6-12个月。在中国，从线上咨询、远程MDT会诊到完成两期手术，仅需4-6周即可完成全部治疗。",
      },
    ],
  },
  indications: {
    title: "适应症",
    subtitle: "MACI联合中医协同治疗主要适用于以下人群",
    accentClass: "text-rose-600",
    checkColor: "text-rose-500",
    items: [
      {
        image: `${IMG}/photo-1559757175-5700dde675bc-w600.jpg`,
        imageAlt: "膝关节孤立性全层软骨缺损",
        title: "膝关节孤立性全层软骨缺损",
        subtitle: "Outerbridge分级III-IV级",
        bullets: [
          "单发或多发、有症状的膝关节全层软骨缺损（伴或不伴骨受累）",
          "缺损面积通常在2-10 cm²范围内（具体由医师评估）",
          "适合MACI移植修复",
        ],
      },
      {
        image: `${IMG}/photo-1612349317150-e413f6a5b16d-w600.jpg`,
        imageAlt: "年龄范围：18-55岁",
        title: "年龄范围：18-55岁",
        subtitle: "年轻活跃人群",
        bullets: [
          "MACI通常适用于18-55岁年龄段患者",
          "因运动（篮球、足球、跑步等）造成全层软骨损伤",
          "希望恢复高强度运动、延缓或避免关节置换的年轻患者",
        ],
      },
      {
        image: `${IMG}/photo-1571019614242-c5c5dee9f50b-w600.jpg`,
        imageAlt: "股骨髁负重面软骨缺损",
        title: "股骨髁负重面软骨缺损",
        subtitle: "最常见于股骨内侧髁",
        bullets: [
          "最常见于股骨内侧髁",
          "也适用于股骨外侧髁和滑车部位",
          "负重面软骨缺损修复",
        ],
      },
      {
        image: `${IMG}/photo-1538108149393-fbbd81895907-w600.jpg`,
        imageAlt: "微骨折术后效果不佳者",
        title: "微骨折术后效果不佳者",
        subtitle: "既往微骨折术效果不理想",
        bullets: [
          "既往接受过微骨折术但效果不理想",
          "症状持续者",
          "需要更高级别的软骨修复方案",
        ],
      },
      {
        image: `${IMG}/photo-1505751172876-fa1923c5c528-w600.jpg`,
        imageAlt: "拒绝或不宜进行关节置换者",
        title: "拒绝或不宜进行关节置换者",
        subtitle: "希望保留自然关节",
        bullets: [
          "希望保留自然关节、恢复高活动能力的患者",
          "关节软骨损伤尚未严重到必须置换的中青年患者",
          "希望最大限度保留自然关节功能的患者",
        ],
      },
    ],
  },
  treatment: {
    title: "治疗内容",
    subtitle: "三大治疗模块，手术与中医完美结合",
    modules: [
      {
        icon: "flaskConical",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        checkClass: "text-rose-500",
        numBg: "bg-rose-500",
        title: "模块一：MACI核心治疗（两阶段）",
        subtitle: "Matrix-Induced Autologous Chondrocyte Implantation",
        blocks: [
          {
            type: "phaseGroupList",
            groups: [
              {
                title: "第一阶段：关节镜软骨采集（一期手术）",
                badge: { text: "约30-45分钟", badgeClass: ROSE_BADGE },
                titleColor: "text-rose-600",
                bullets: [
                  "关节镜下从膝关节非负重区采集3颗大米粒大小的健康软骨样本",
                  "局部或区域麻醉",
                  "当日或次日出院",
                  "采集样本送至CGMP实验室进行细胞培养扩增",
                ],
              },
              {
                title: "第二阶段：实验室培养",
                badge: { text: "约2-4周", badgeClass: ROSE_BADGE },
                titleColor: "text-rose-600",
                bullets: [
                  "软骨细胞在CGMP实验室进行体外扩增培养",
                  "细胞数量扩增至数百万级别",
                  "培养期间患者可回国等待或在中国休养",
                  "可通过远程视频复诊，由中医师根据恢复情况调整方案",
                ],
              },
              {
                title: "第三阶段：MACI植入（二期手术）",
                badge: { text: "约60-90分钟", badgeClass: ROSE_BADGE },
                titleColor: "text-rose-600",
                bullets: [
                  "全身或区域麻醉",
                  "将培养扩增的自体软骨细胞植入缺损区域",
                  "使用生物可吸收基质支架固定细胞",
                  "术后住院观察3-7天",
                ],
              },
            ],
          },
        ],
      },
      {
        icon: "leaf",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        checkClass: "text-rose-500",
        numBg: "bg-rose-500",
        title: "模块二：中医围手术期协同治疗",
        subtitle: "TCM Perioperative Care",
        blocks: [
          {
            type: "phaseGroupList",
            groups: [
              {
                title: "术前中医调理（一期术前1-2周）",
                titleColor: "text-rose-600",
                bullets: [
                  "中医体质辨识（望闻问切四诊）",
                  "中药提前改善关节循环和营养状态",
                  "适量针灸，减轻术前疼痛",
                  "为手术创造更佳的身体状态",
                ],
              },
              {
                title: "术后即刻康复阶段（术后第1-14天）",
                titleColor: "text-rose-600",
                bullets: [
                  "针刺疗法：疏通经络、缓解疼痛（术后24小时即开始）",
                  "艾灸：温经散寒、促进局部循环",
                  "中药外敷/熏蒸：消肿止痛、活血化瘀（术后第3天开始）",
                  "中药内服：辨证施治、整体调理（术后第1天开始）",
                  "推拿：松解肌肉、预防粘连",
                ],
              },
            ],
          },
        ],
      },
      {
        icon: "heart",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        checkClass: "text-rose-500",
        numBg: "bg-rose-500",
        title: "模块三：功能锻炼与康复指导",
        subtitle: "Rehabilitation & Exercise",
        blocks: [
          {
            type: "cardGrid",
            cols: "grid md:grid-cols-2 gap-6",
            items: [
              {
                title: "康复训练",
                desc: "指导康复训练，增强膝关节本体感觉和稳定性，降低二次损伤风险",
              },
              {
                title: "传统功法",
                desc: "指导练习八段锦、太极拳等传统养生功法，作为长期关节养护手段，有效增强膝关节稳定性、延缓退行性复发",
              },
            ],
          },
        ],
      },
    ],
  },
  process: {
    title: "治疗流程",
    subtitle: "十步完整流程，专为海外患者设计",
    layout: "list",
    numBg: "bg-rose-500",
    numText: "text-lg",
    timeBadgeClass: "text-sm text-rose-600 bg-rose-50 px-3 py-1 rounded-full",
    steps: [
      {
        title: "线上咨询与病历评估",
        time: "2-5个工作日",
        description:
          "提交膝关节X光负重位、MRI（≥1.5T）影像、既往治疗史和关节功能评分（VAS、IKDC等）。医学顾问根据软骨缺损面积、位置、Outerbridge分级和K-L分级进行资料审核和初步适应症筛查，确定是否适合MACI治疗",
      },
      {
        title: "远程MDT会诊",
        time: "3-7个工作日",
        description:
          "骨科（关节镜与软骨修复方向）+ 再生医学科 + 中医科专家联合视频会诊。医师根据您的软骨缺损情况、中医体质类型和个体条件确定个性化治疗方案：两期手术时间安排、术中是否需同期处理半月板/韧带损伤、围手术期中医康复方案组合、费用预估和行程安排",
      },
      {
        title: "医疗签证与赴华行程安排",
        time: "7-14个工作日",
        description:
          "出具医疗邀请函，指导办理S2短期就医签证（最长180天，需涵盖两期手术的两次住院期）。协助预订两段行程的机票（一期活检后可回国等待培养期），安排机场接送和医院附近住宿，对接MACI合作医院预约两期手术档期",
      },
      {
        title: "一期术前评估",
        time: "抵华后1-2天",
        description:
          "完成必需检查：血常规、凝血功能、传染病筛查（HIV、HBV、HCV等）、肝肾功能、心电图、心肺功能评估等。中医体质辨识和膝关节影像复核。签署中英文对照知情同意书。中医师根据体质开具术前调理中药",
      },
      {
        title: "一期手术——关节镜软骨采集",
        time: "抵华后第2-3天",
        description:
          "入院后进行局部或区域麻醉，关节镜下采集3颗大米粒大小的健康软骨样本（手术时长约30-45分钟，当日或次日出院）。采集的样本送至CGMP实验室进行细胞培养扩增（约2-4周）。出院时康复医师提供保护性负重和CPM机使用指导。中医师开具术后调理处方",
      },
      {
        title: "实验室培养等待期",
        time: "2-4周",
        description:
          "患者可回国等待或在中国休养。期间可继续服用中药调理身体状态，为二期手术创造更佳的修复微环境。可通过远程视频复诊，由中医师根据恢复情况调整方案",
      },
      {
        title: "二期术前评估与准备",
        time: "抵华后1-2天",
        description:
          "按实验室通知提前来华。完成术前复查（血常规、凝血功能等）、膝关节MRI复核缺损区域和拟植入位置。完善二期手术前知情同意",
      },
      {
        title: "二期手术——MACI植入",
        time: "约一期术后4周",
        description:
          "入院后进行全身或区域麻醉，MACI植入手术（60-90分钟）。术后住院观察3-7天。住院期间：西医镇痛管理 + 被动关节活动训练 + 针灸止痛消肿（术后24小时即开始）+ 中药内服（术后第1天开始）+ 中药外敷/熏蒸（术后第3天开始）。中医科医师每日查房",
      },
      {
        title: "出院康复指导与返程",
        time: "治疗结束前",
        description:
          "康复医师制定个性化的分阶段功能锻炼方案（8周、3个月、6个月目标，含中英文视频教程）。继续中药调理（提供邮寄中药丸剂/膏方服务）。提供中英文对照康复手册，明确支具使用、负重限制（术后6周内严禁完全负重）、拐杖使用说明等关键要点",
      },
      {
        title: "远程随访与健康管理",
        time: "术后12个月",
        description:
          "提供移动端疼痛评分（VAS）和关节功能自评（IKDC、KOOS）系统。远程视频复诊，中医医师根据恢复阶段和季节变化调整中药调理建议。按需指导在当地拍摄MRI后进行影像学对比分析，评估软骨修复组织（MOCART评分）的进展情况",
      },
    ],
  },
  efficacy: {
    title: "疗效数据",
    subtitle: "2025-2026年核心循证数据与疗效时间线",
    table: {
      headers: ["研究类型", "样本/分组", "主要发现", "证据等级"],
      headerClass: "text-rose-400",
      badgeClass: "bg-rose-500/20 text-rose-300",
      rows: [
        {
          cells: [
            "10年RCT随访",
            "35例（37膝），6周 vs 8周负重",
            "10年满意度93%/88%，肢体对称指数99%-104%",
          ],
          badge: "Ⅰ级，RCT",
        },
        {
          cells: [
            "系统综述 & Meta分析",
            "47项研究、1993名患者、平均随访57.2个月",
            "ACI/MACI/OAT/OCA均显著改善",
          ],
          badge: "Ⅰ级，Meta分析",
        },
        {
          cells: [
            "MACI vs AMIC vs MCI (2年随访)",
            "48例（每组16例），回顾性匹配",
            "三组在VAS、KOOS、Tegner方面无显著差异；均有良好患者报告结局和低并发症",
          ],
          badge: "Ⅲ级，匹配队列",
        },
        {
          cells: [
            "运动回归系统综述",
            "含MACI队列",
            "MACI回归运动优势比2.15，回归运动率显著更高",
          ],
          badge: "Ⅰ级，系统综述",
        },
      ],
    },
    timeline: {
      title: "疗效时间线",
      items: [
        {
          time: "术后0-2周（严格保护期）",
          timeClass: "w-48 flex-shrink-0 text-rose-400 font-semibold text-sm",
          text: "住院或门诊观察，严格限制完全负重（拐杖辅助），被动活动度逐步增加；针灸和中药显著缓解术后疼痛和肿胀",
        },
        {
          time: "术后2-6周（保护性负重期）",
          timeClass: "w-48 flex-shrink-0 text-rose-400 font-semibold text-sm",
          text: "支具保护下部分负重行走，关节主动活动度达90°以上",
        },
        {
          time: "术后6周-3个月",
          timeClass: "w-48 flex-shrink-0 text-rose-400 font-semibold text-sm",
          text: "逐步过渡至完全负重行走，日常活动基本恢复",
        },
        {
          time: "术后3-6个月",
          timeClass: "w-48 flex-shrink-0 text-rose-400 font-semibold text-sm",
          text: "可完成日常起居、上下楼梯、低强度体育活动（游泳、慢跑）；功能评分显著优于术前",
        },
        {
          time: "术后6-12个月",
          timeClass: "w-48 flex-shrink-0 text-rose-400 font-semibold text-sm",
          text: "IKDC、KOOS功能评分进一步提升；多数患者可恢复原有运动水平（跑步、跳跃等）",
        },
        {
          time: "术后1-5年",
          timeClass: "w-48 flex-shrink-0 text-rose-400 font-semibold text-sm",
          text: "功能稳定维持；IKDC评分达到PASS阈值（患者可接受症状状态）；长期随访显示功能持续良好",
        },
        {
          time: "术后5-10年",
          timeClass: "w-48 flex-shrink-0 text-rose-400 font-semibold text-sm",
          text: "10年随访数据显示，10年满意度93%（6周组）、88%（8周组）；修复组织仍表现良好，证实MACI的长期可靠性和结构性耐久性",
        },
      ],
    },
    statClass: "text-rose-400",
    stats: [
      { value: "93%", label: "10年满意度（6周组）" },
      { value: "2.15", label: "回归运动优势比" },
      { value: "99-104%", label: "肢体对称指数" },
    ],
  },
  cases: {
    title: "真实案例",
    subtitle: "海外患者真实反馈，见证疗效",
    gridClass: "grid md:grid-cols-3 gap-8",
    imgClass: "h-48",
    accentClass: "text-rose-600",
    descriptionClass: "text-gray-600 text-sm",
    items: [
      {
        image: `${IMG}/photo-1546519638-68e109498ffc-w600.jpg`,
        imageAlt: "新加坡篮球运动员Aaron（32岁）——半月板清创+MACI助两年复出",
        title: "新加坡篮球运动员Aaron（32岁）——半月板清创+MACI助两年复出",
        subtitle: "从绝望到重返球场",
        description:
          "Aaron（32岁，新加坡国家青年队前球员），右膝内侧股骨髁全层软骨缺损3.5 cm²（Outerbridge IV级），因运动损伤导致。在新加坡私立医院咨询MACI，报价约12万新加坡元（约65万元人民币），且不提供配套康复。经本地体校医生推荐来华，在山东大学齐鲁医院接受MACI治疗——一期关节镜采集软骨样本，二期植入自体软骨细胞补片，同时修补了伴随的半月板损伤。术后配合针灸5次、中药内服8周和八段锦教学。术后9个月VAS评分从8分降至1分，12个月恢复篮球训练。",
      },
      {
        image: `${IMG}/photo-1576091160399-112ba8d25d1d-w600.jpg`,
        imageAlt: "泰国攀岩爱好者Kittipong（41岁）——守护职业生涯的MACI方案",
        title: "泰国攀岩爱好者Kittipong（41岁）——守护职业生涯的MACI方案",
        subtitle: "从6周物流到4周全程",
        description:
          "Kittipong（41岁，泰国清迈），职业攀岩教练兼自然岩壁挑战者。左膝股骨滑车全层软骨缺损，面积2.8 cm²，因长期攀岩下蹲和跳跃动作造成。在泰国曼谷私立医院评估MACI费用约150万泰铢（约30万元人民币），且培养需将细胞送新加坡处理，物流周期达6周。来华接受MACI治疗，一期采集+细胞培养（4周），二期植入术同时接受关节镜下清理。术后配合针灸8次、中药熏洗14天、推拿手法10次，以及八段锦教学。术后6个月软骨缺损区域被新生软骨完整覆盖，VAS从术前7分降至1分。",
      },
      {
        image: `${IMG}/photo-1504439904031-93ded9f93e4e-w600.jpg`,
        imageAlt: "印度尼西亚马拉松跑者Susi（38岁）——从终身退赛到破PB",
        title: "印度尼西亚马拉松跑者Susi（38岁）——从终身退赛到破PB",
        subtitle: "刷新全马个人纪录",
        description:
          "Susi（38岁，印度尼西亚雅加达），业余马拉松跑者（PB 3:48）。右膝股骨内侧髁大面积软骨缺损4.2 cm²，跑步>3公里即剧痛，医生建议永久放弃跑步。在雅加达问诊多家医院无果，经跑友群推荐来华。接受MACI治疗，术前和术后各接受4周中医综合康复（针灸+中药内服+熏洗+艾灸+推拿）。术后6个月完成5公里慢跑无痛，10个月完成半程马拉松（2:05），15个月刷新全马个人纪录3:38。至今已9个月无痛跑步，术后1年MRI显示缺损区覆盖良好，MOCART评分82分。",
      },
    ],
  },
  services: {
    title: "支持服务",
    subtitle:
      "我们为每一位来华接受MACI联合中医治疗的海外患者提供从行前到返程的全链路服务",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
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
      title: "MACI完整疗程参考费用",
      price: "$18,000-25,000",
      priceNote: "含两期手术、细胞培养、中医康复",
      priceClass: "text-rose-600",
      checkClass: "text-rose-500",
      borderClass: "border-2 border-rose-500",
      items: [
        "一期关节镜软骨采集",
        "CGMP实验室细胞培养",
        "二期MACI植入手术",
        "中医围手术期康复",
        "术前术后检查",
      ],
      footnote: "*以实际就诊过程中医院开具的治疗费用单为准",
    },
    compareCard: {
      title: "国际价格对比",
      rows: [
        { label: "美国", value: "$45,000-75,000", valueClass: "text-gray-400" },
        { label: "新加坡", value: "~$65,000", valueClass: "text-gray-400" },
        { label: "中国", value: "$18,000-25,000", valueClass: "text-rose-600" },
      ],
      savings: { label: "节省比例", value: "50-75%" },
    },
  },
};

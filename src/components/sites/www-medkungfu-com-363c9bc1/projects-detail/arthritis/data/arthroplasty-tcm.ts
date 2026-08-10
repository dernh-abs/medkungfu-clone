// Page data for /projects/arthroplasty-tcm — Joint Replacement with TCM Rehabilitation.
import type { PageData } from "../types";

const IMG = "/sites/www-medkungfu-com-363c9bc1/shared/images";

const INDIGO_BADGE = "text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full";

export const arthroplastyTcmPage: PageData = {
  mainAriaLabel: "Joint Replacement with TCM Rehabilitation - Artificial Joint Surgery",
  hero: {
    eyebrow: "Joint NeoGenesis Program",
    title: "Precision Joint Replacement Combined with TCM Accelerated Recovery",
    subtitle:
      "Deeply integrate surgical robot precision with TCM wisdom to rebuild your walking freedom",
    gradientClass: "from-slate-900 via-indigo-900 to-slate-900",
    accentTextClass: "text-indigo-200",
    buttonClass: "bg-indigo-500 hover:bg-indigo-600",
  },
  intro: {
    title: "What is Precision Joint Replacement Combined with TCM Accelerated Recovery?",
    paragraphs: [
      "When joint cartilage suffers large-area defects due to long-term wear, inflammation or trauma, and joint space basically disappears, conservative treatment and regenerative medicine methods can no longer reverse structural damage. In this case, joint replacement is not a \"compromise\" choice, but a scientific, mature ultimate solution aimed at completely eliminating pain, restoring joint function, and rebuilding patient walking freedom.",
      "In public healthcare systems of developed countries in Europe and America, patients often need to queue 6-12 months for joint replacement surgery appointments; while in China, from admission examination to surgery completion only takes 1-7 days, almost equivalent to \"surgery upon arrival\" efficiency.",
      "China has dual unique advantages in this field - in terminal medical care, reducing surgical costs to global lowlands, while being able to use surgical robots to achieve more precise prosthesis alignment than manual operation; more importantly, China systematically integrates thousand-year inherited TCM characteristic therapies into perioperative management, forming a trinity synergistic plan of \"precision surgery + post-operative analgesia + functional accelerated recovery\".",
    ],
    badgeText: "Robot Precision · TCM Accelerated Recovery · Zero Waiting",
    badgeColor: "text-indigo-600",
    image: `${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`,
    imageAlt: "Arthroplasty Treatment",
  },
  advantages: {
    title: "Core Advantages",
    subtitle: "Five core advantages to protect your joint rebirth",
    gridClass: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
    items: [
      {
        icon: "dollarSign",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        title: "Precision Replacement, Cost Only 1/8-1/10 of USA",
        description:
          "Chinese joint prosthesis prices are only 1/8-1/10 of those in the US, with unmatched global competitiveness.",
      },
      {
        icon: "cpu",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        title: "Domestic Surgical Robot Assistance, Precision up to 0.1mm",
        description:
          "China's independently developed joint surgical robots have obtained certifications from NMPA, FDA, CE and other 9 countries and regions, representing the top level in international joint replacement assistance systems, ensuring precise prosthesis alignment, natural post-operative gait, and long-term stability and reliability.",
      },
      {
        icon: "clock",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        title: "Zero Waiting, Surgery Upon Arrival",
        description:
          "In Europe, America and other places, the appointment waiting period for knee replacement surgery can be several months or even a year. In China, international patients generally only need 1-7 days from admission and completion of examinations to surgery.",
      },
      {
        icon: "leaf",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        title: "TCM Throughout Accelerated Recovery, Shortened Hospital Stay, Reduced Drug Dependence",
        description:
          "China has formed a systematic TCM accelerated recovery plan for TKA perioperative period. Electroacupuncture, wrist-ankle acupuncture, moxibustion, cupping, external application of Chinese medicine and other methods run through the entire post-operative process - significantly reducing post-operative pain, reducing opioid analgesic usage, shortening hospital stay, and ensuring patients can get out of bed and move as early as possible.",
      },
      {
        icon: "users",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        title: "Abundant Real International Cases, Rich Experience",
        description:
          "Many tertiary hospitals in coastal and inland areas of China have established mature international patient reception mechanisms. A large number of real cases have fully demonstrated China's technical maturity and international service capabilities in this field.",
      },
    ],
  },
  indications: {
    title: "Indications",
    subtitle:
      "Precision joint replacement combined with TCM accelerated recovery plan is mainly suitable for the following end-stage joint disease patients",
    accentClass: "text-indigo-600",
    checkColor: "text-indigo-500",
    items: [
      {
        image: `${IMG}/photo-1559757175-5700dde675bc-w600.jpg`,
        imageAlt: "End-stage Knee Osteoarthritis/Hip Osteoarthritis",
        title: "End-stage Knee Osteoarthritis/Hip Osteoarthritis",
        subtitle: "K-L Grade III-IV",
        bullets: [
          "Joint cartilage almost completely worn out, joint space basically disappeared, imaging shows bone-on-bone contact",
          "Persistent severe night pain and rest pain, seriously affecting sleep and daily life",
          "Severely limited activities such as going up and down stairs, long-distance walking, squatting",
          "Poor or ineffective results from conservative treatment (medication, physical therapy, injection therapy)",
        ],
      },
      {
        image: `${IMG}/photo-1612349317150-e413f6a5b16d-w600.jpg`,
        imageAlt: "Severe Hip Dysplasia/Femoral Head Necrosis",
        title: "Severe Hip Dysplasia/Femoral Head Necrosis",
        subtitle: "DDH or Hormonal/Alcoholic Necrosis",
        bullets: [
          "Secondary osteoarthritis caused by congenital hip dysplasia (DDH)",
          "Hormonal or alcoholic femoral head necrosis collapse, accompanied by severe walking pain and limping",
          "Prominent functional impairment, seriously affecting quality of life",
        ],
      },
      {
        image: `${IMG}/photo-1571019614242-c5c5dee9f50b-w600.jpg`,
        imageAlt: "Post-traumatic Arthritis",
        title: "Post-traumatic Arthritis",
        subtitle: "Secondary to Intra-articular Fracture",
        bullets: [
          "Late-stage post-traumatic arthritis secondary to intra-articular fracture or severe ligament injury",
          "Severely impaired joint function, persistent pain",
          "Need joint replacement to restore function",
        ],
      },
      {
        image: `${IMG}/photo-1538108149393-fbbd81895907-w600.jpg`,
        imageAlt: "Knee Osteonecrosis",
        title: "Knee Osteonecrosis",
        subtitle: "SONK Spontaneous Osteonecrosis",
        bullets: [
          "Spontaneous osteonecrosis of the knee (SONK)",
          "Ischemic necrosis of tibial plateau or femoral condyle bone tissue",
          "Accompanied by severe pain and functional impairment",
        ],
      },
      {
        image: `${IMG}/photo-1505751172876-fa1923c5c528-w600.jpg`,
        imageAlt: "Joint Deformity/Joint Replacement Revision",
        title: "Joint Deformity/Joint Replacement Revision",
        subtitle: "Correction or Revision Surgery",
        bullets: [
          "Knee varus (bow-legged) or knee valgus (knock-kneed) caused by late-stage osteoarthritis, severely abnormal force line",
          "Joint replacement can simultaneously correct deformity",
          "Prosthesis loosening, wear or infection after initial replacement surgery, requiring second-stage revision surgery",
        ],
      },
    ],
  },
  treatment: {
    title: "Treatment Content",
    subtitle: "Three major treatment modules, perfect combination of precision surgery and TCM",
    modules: [
      {
        icon: "bone",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        checkClass: "text-indigo-500",
        numBg: "bg-indigo-500",
        title: "Module 1: Precision Joint Arthroplasty",
        subtitle: "Precision Joint Arthroplasty",
        blocks: [
          {
            type: "surgeryTable",
            heading:
              "Surgery Type Selection (Comprehensive judgment based on condition and patient activity needs)",
            headers: ["Joint Type", "Optional Procedures", "Applicable Population"],
            headerClass: "text-indigo-600",
            rows: [
              [
                "Knee Joint",
                "Total Knee Arthroplasty (TKA)",
                "Patients with severe wear in both medial and lateral compartments, widespread disappearance of joint space",
              ],
              [
                "Knee Joint",
                "Unicompartmental Knee Arthroplasty (UKA)",
                "Only unilateral compartment wear (about 85% of patients have anteromedial wear), with intact anterior and posterior cruciate ligaments. Less trauma, faster recovery, closer to physiological state",
              ],
              [
                "Knee Joint",
                "Patellofemoral Arthroplasty (PFA)",
                "Patients with isolated patellofemoral joint surface wear and poor patellar tracking",
              ],
              [
                "Hip Joint",
                "Total Hip Arthroplasty (THA)",
                "Femoral head necrosis, acetabular dysplasia, end-stage hip arthritis",
              ],
              [
                "Hip Joint",
                "Hemiarthroplasty (Half Hip)",
                "Elderly patients with femoral neck fractures that cannot be reduced and fixed",
              ],
            ],
          },
          {
            type: "chipGrid",
            heading: "Prosthesis Material Selection",
            items: [
              "Metal-backed Polyethylene Prosthesis",
              "Metal-on-Polyethylene Prosthesis",
              "Ceramic-on-Polyethylene Prosthesis",
              "Biological (Cementless) Prosthesis",
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
        title: "Module 2: TCM Perioperative Accelerated Recovery Plan",
        subtitle: "TCM Perioperative Accelerated Recovery",
        blocks: [
          {
            type: "phaseGroupList",
            groups: [
              {
                title: "Pre-operative Preparation Period (1-3 days before surgery)",
                badge: {
                  text: "TCM Constitution Conditioning and Pre-rehabilitation",
                  badgeClass: INDIGO_BADGE,
                },
                titleColor: "text-indigo-600",
                bullets: [
                  "TCM constitution identification, assess patient's qi-blood status",
                  "Chinese medicine conditioning to improve periarticular circulation",
                  "Acupuncture pre-rehabilitation to reduce pre-operative anxiety",
                  "Create optimal physical conditions for surgery",
                ],
              },
              {
                title: "Post-operative Acute Period (0-7 days after surgery)",
                badge: {
                  text: "Electroacupuncture Analgesia, Cupping for Swelling Reduction, Chinese Medicine for Blood Circulation",
                  badgeClass: INDIGO_BADGE,
                },
                titleColor: "text-indigo-600",
                bullets: [
                  "Electroacupuncture or filiform needle acupuncture for analgesia, reduce opioid analgesic usage",
                  "Meridian-following cupping + wrist-ankle acupuncture, promote joint function recovery, reduce inflammatory response",
                  "Oral Chinese medicine for promoting blood circulation and removing stasis + external application of Chinese medicine for swelling reduction and pain relief",
                  "Moxibustion for warming meridians and dispelling cold, promote local circulation",
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
        title: "Module 3: Enhanced Recovery After Surgery (ERAS) Combined Plan",
        subtitle: "Enhanced Recovery After Surgery",
        blocks: [
          {
            type: "bulletCardGrid",
            cols: "grid md:grid-cols-2 gap-6",
            cards: [
              {
                title: "Modern ERAS Concept",
                bullets: [
                  "Pre-operative consultation and nutritional assessment",
                  "Minimally invasive approach technology",
                  "Multimodal analgesia",
                  "Early nutritional support and getting out of bed",
                  "Prevention of venous thrombosis",
                ],
                trailing:
                  "About 2 hours after TKA surgery, ankle pump exercises and quadriceps isometric contraction can be performed; on day 1 after surgery, try walking with walker assistance and early weight-bearing; gradually transition to independent walking on days 2-3 after surgery.",
              },
              {
                title: "Rehabilitation Exercise Guidance",
                bullets: [
                  "Quadriceps strength training",
                  "Knee passive-active flexion-extension training",
                  "Progressive weight-bearing walking",
                  "Modified Baduanjin teaching",
                ],
                trailing:
                  "Accelerate recovery, prevent secondary injury, help patients return to normal life as soon as possible.",
              },
            ],
          },
        ],
      },
    ],
  },
  process: {
    title: "Treatment Process",
    subtitle: "Seven-step complete process, specially designed for overseas patients",
    layout: "list",
    numBg: "bg-indigo-500",
    numText: "text-lg",
    timeBadgeClass: "text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full",
    steps: [
      {
        title: "Online Consultation & Medical Record Review",
        time: "2-5 working days",
        description:
          "Submit weight-bearing knee/hip X-rays, MRI images, treatment history and related examination reports through online platform. Our medical advisors review materials and conduct preliminary indication screening to determine necessity and feasibility of replacement surgery",
      },
      {
        title: "Remote MDT Consultation & Plan Formulation",
        time: "3-7 working days",
        description:
          "Joint video consultation with orthopedic, rehabilitation medicine, TCM and anesthesiology physicians. Physicians determine precise surgical plan (TKA/UKA/THA, etc.), prosthesis type, robot assistance applicability, TCM accelerated recovery plan and cost details based on K-L grade, joint space condition, combined deformities, bone defect degree and patient activity needs",
      },
      {
        title: "Medical Visa & Travel Arrangements",
        time: "7-14 working days",
        description:
          "Issue medical invitation letter, guide S2 short-term medical visa application (up to 180 days). Assist with flight booking, arrange airport pickup and accommodation during rehabilitation hospitalization, coordinate with joint replacement surgery partner hospitals to schedule surgery",
      },
      {
        title: "Comprehensive Pre-admission Assessment",
        time: "1-2 days after arrival in China",
        description:
          "Complete blood routine, coagulation function, infectious disease screening, liver and kidney function, ECG, cardiopulmonary function assessment, etc. Sign bilingual informed consent form. TCM constitution identification and prescribe pre-operative conditioning Chinese medicine. Complete 3D CT scan as needed for precise robot pre-operative planning",
      },
      {
        title: "Surgery Implementation",
        time: "Day 3-5 after arrival in China",
        description:
          "After admission, perform general anesthesia or spinal anesthesia. Complete total knee/unicompartmental/total hip replacement surgery with robot assistance or traditional technique (surgery duration about 60-120 minutes). Return to ward after surgery, immediately start early rehabilitation such as ankle pump exercises and quadriceps isometric contraction. Start walking with walker under guidance of rehabilitation therapist on day 1 after surgery",
      },
      {
        title: "Hospital Rehabilitation & TCM Collaborative Treatment",
        time: "5-7 days post-operation",
        description:
          "Electroacupuncture or filiform needle acupuncture for analgesia, reduce opioid analgesic usage. Meridian-following cupping + wrist-ankle acupuncture, promote joint function recovery, reduce inflammatory response. Oral Chinese medicine for promoting blood circulation and removing stasis + external application of Chinese medicine for swelling reduction and pain relief. Post-operative rehabilitation therapist provides full guidance: passive-active movement training, quadriceps strength training",
      },
      {
        title: "Discharge Rehabilitation Guidance & Return",
        time: "Before treatment ends",
        description:
          "Rehabilitation physician develops detailed progressive rehabilitation plan (provide bilingual video tutorials). Arrange mail-order Chinese medicine pills/paste service for patients needing long-term Chinese medicine conditioning. Provide bilingual rehabilitation manual, clarifying key points such as brace usage, weight-bearing restrictions, crutch usage instructions, etc.",
      },
    ],
  },
  efficacy: {
    title: "Efficacy Data",
    subtitle: "Latest evidence-based medical evidence and efficacy timeline",
    table: {
      headers: ["Study Source", "Sample Size/Design", "Core Findings", "Evidence Level"],
      headerClass: "text-indigo-400",
      badgeClass: "bg-indigo-500/20 text-indigo-300",
      rows: [
        {
          cells: [
            "Meridian-following Cupping + Wrist-ankle Acupuncture TKA Post-operative Study (April 2026)",
            "120 cases RCT (60 vs 60)",
            "Combined group excellent-good rate reached 86.67%, higher than control group 71.67% (P<0.05). HSS score significantly improved, VAS score significantly reduced, ROM value significantly increased, walking function significantly improved; serum CRP, IL-6, TNF-α levels significantly decreased, inflammatory response effectively inhibited",
          ],
          badge: "Level II, RCT",
        },
        {
          cells: [
            "THA Perioperative Rehabilitation Expert Consensus (2025)",
            "Expert Consensus",
            "Standardize THA perioperative rehabilitation assessment and treatment, emphasize pre-operative education and post-operative guidance, systematically incorporate syndrome differentiation and treatment, acupuncture analgesia, and Chinese medicine conditioning into rehabilitation plan",
          ],
          badge: "Expert Consensus",
        },
      ],
    },
    timeline: {
      title: "Efficacy Timeline",
      items: [
        {
          time: "24 Hours Post-operation",
          timeClass: "w-32 flex-shrink-0 text-indigo-400 font-semibold text-sm",
          text: "Stand with walker assistance. Patient feedback \"pain control exceeded expectations\", electroacupuncture and cupping significantly relieved post-operative pain (VAS score reduced to 2-3 points)",
        },
        {
          time: "Week 1 Post-operation",
          timeClass: "w-32 flex-shrink-0 text-indigo-400 font-semibold text-sm",
          text: "Can walk 50-100 meters with walker assistance, passive knee flexion can reach 90°-100°; TCM electroacupuncture, cupping, etc. continue to reduce post-operative pain and swelling; oral and external Chinese medicine cooperation significantly reduces NSAID dosage and adverse reactions",
        },
        {
          time: "Weeks 2-6 Post-operation",
          timeClass: "w-32 flex-shrink-0 text-indigo-400 font-semibold text-sm",
          text: "Gradually transition to single crutch walking → unassisted walking; ROM can reach over 110°, basically complete actions such as going downstairs, sitting down and standing up",
        },
        {
          time: "3 Months Post-operation",
          timeClass: "w-32 flex-shrink-0 text-indigo-400 font-semibold text-sm",
          text: "Independent walking without obstacles, can walk more than 1 kilometer; knee flexion can reach 120°-130°, knee extension completely restored to normal; can resume light physical work, swimming, cycling and other low-intensity sports",
        },
        {
          time: "6-12 Months Post-operation",
          timeClass: "w-32 flex-shrink-0 text-indigo-400 font-semibold text-sm",
          text: "KOOS, WOMAC and Oxford knee scores all significantly higher than pre-operative baseline (P<0.01); most patients can resume moderate to high-intensity activities such as climbing stairs, hiking, etc.; pain score reduced to 0-1 points, overall patient satisfaction exceeds 90%",
        },
      ],
    },
    valueCardsTitle: "Key Value of TCM Accelerated Recovery",
    valueCards: [
      {
        title: "Reduce Opioid Analgesic Usage",
        text: "Reduce relative risk of rescue analgesics by up to about 54%, reduce drug dependence and side effects",
      },
      {
        title: "Significantly Reduced Post-operative Pain Score",
        text: "VAS significantly lower than pure Western medicine control group on days 1, 3, and 7 post-operation, improving patient rehabilitation experience",
      },
      {
        title: "Shorten Hospital Stay",
        text: "TCM perioperative accelerated recovery reduces average post-operative hospital stay from 7-10 days to 5-7 days",
      },
      {
        title: "Improve Joint Function",
        text: "HSS knee function score improvement more significant, ROM value increase more obvious",
      },
      {
        title: "Reduce Post-operative Inflammatory Response",
        text: "Serum CRP, IL-6, TNF-α levels significantly lower than control group",
      },
    ],
    valueCardTitleClass: "text-indigo-400",
  },
  cases: {
    title: "Real Cases",
    subtitle: "Real feedback from Southeast Asian and international overseas patients",
    gridClass: "grid md:grid-cols-3 gap-8",
    imgClass: "h-48",
    accentClass: "text-indigo-600",
    descriptionClass: "text-gray-600 text-sm",
    items: [
      {
        image: `${IMG}/photo-1546519638-68e109498ffc-w600.jpg`,
        imageAlt:
          "Laos Elderly Patient Grandma Yu - 93-year-old Cross-border Fall, Hip Replacement Completed Within 12 Hours of Admission",
        title:
          "Laos Elderly Patient Grandma Yu - 93-year-old Cross-border Fall, Hip Replacement Completed Within 12 Hours of Admission",
        subtitle: "From Despair to Standing Again",
        description:
          "Grandma Yu (93, Laos) accidentally fell at home resulting in intertrochanteric femoral fracture. After seeking medical help from multiple sources, family finally chose to cross borders to Jinghong First People's Hospital. Hospital quickly activated emergency plan, organized MDT multidisciplinary consultation, successfully performed artificial hip replacement within 12 hours of patient admission. After surgery, rehabilitation medicine treatment team seamlessly connected, immediately implemented rapid recovery plan. Under careful care of medical staff, Grandma Yu could get out of bed and move on the second day after surgery, effectively avoiding complications that may arise from long-term bed rest.",
      },
      {
        image: `${IMG}/photo-1576091160399-112ba8d25d1d-w600.jpg`,
        imageAlt:
          "Australian Chinese Auntie Chen - One Year Queue Overseas VS One Day Surgery After Returning Home",
        title:
          "Australian Chinese Auntie Chen - One Year Queue Overseas VS One Day Surgery After Returning Home",
        subtitle: "Robot-assisted Precision Replacement",
        description:
          "Auntie Chen (75, long-time resident of Australia), weight 103 kg, BMI as high as 36, complex knee deformity, daily walking has become a piercing torment. In Australia, family doctor informed \"specialist surgery requires queuing for more than one year\". In despair, Auntie Chen decisively decided to return home for medical treatment. After arriving in Guangzhou, Director Xu Changpeng's team at Guangdong Second Provincial General Hospital immediately conducted examinations for her, and completed the first domestic biological total knee replacement in South China region with robot assistance the next day. From arriving at hospital to completing surgery took only one day. On the second day after surgery, Auntie Chen could walk independently with walker support, and knee flexion-extension function significantly improved on the third day. \"If I had known it was so convenient, I should have flown back long ago!\"",
      },
      {
        image: `${IMG}/photo-1504439904031-93ded9f93e4e-w600.jpg`,
        imageAlt:
          "Yemeni Patient Ms. A - Bilateral Knee Replacement, AI Planning + TCM Rehabilitation Made Her Cry with Joy",
        title:
          "Yemeni Patient Ms. A - Bilateral Knee Replacement, AI Planning + TCM Rehabilitation Made Her Cry with Joy",
        subtitle: "Feeling Warmth of Home in Foreign Land",
        description:
          "Ms. A (47, Yemen) suffered from pain for a long time due to severe bilateral knee osteoarthritis, knee wear was very serious, joint space basically disappeared. Because her son had lived in Guangzhou for many years, she finally decided to come to Guangzhou for medical treatment. After being received by the Joint Surgery Department of the Third Affiliated Hospital of Southern Medical University, they used AI pre-operative 3D planning system for precise surgical design and successfully performed bilateral knee replacement surgery. After surgery, the department implemented the concept of Enhanced Recovery After Surgery (ERAS) and developed a personalized rehabilitation plan combining Chinese and Western medicine. Ms. A could walk with walker assistance on the second day after surgery, and the hospital fully respected her religious beliefs and living habits, making her feel the warmth of home in a foreign land.",
      },
    ],
  },
  services: {
    title: "Support Services",
    subtitle:
      "We provide full-chain services from pre-departure to return for every overseas patient coming to China for joint replacement combined with TCM treatment",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    items: [
      {
        icon: "globe",
        title: "Visa Guidance & Processing",
        description: "Medical invitation letter, S2 visa material guidance, entry registration assistance",
      },
      {
        icon: "mapPin",
        title: "Arrival Reception & Transportation",
        description: "Private car airport pickup, hotel and wellness apartment booking, life guidance",
      },
      {
        icon: "users",
        title: "Language Support & Medical Translation",
        description: "Bilingual medical coordinator, precise medical terminology translation, medical record report translation",
      },
      {
        icon: "heart",
        title: "Accompanying Diagnosis & Medical Coordination",
        description: "Registration and department coordination, comprehensive accompanying diagnosis service",
      },
      {
        icon: "award",
        title: "Foreign Medical Document Assistance",
        description: "English medical invitation letter/diagnosis certificate, cost estimate letter, discharge summary",
      },
    ],
  },
  pricing: {
    variant: "reference",
    title: "Reference Treatment Costs",
    subtitle: "Transparent pricing, unmatched global price advantage",
    costCard: {
      title: "Reference Cost for One Complete Course (Single Knee)",
      price: "$12,000-40,000",
      priceNote: "Includes surgery, prosthesis, TCM rehabilitation, hospitalization",
      priceClass: "text-indigo-600",
      checkClass: "text-indigo-500",
      borderClass: "border-2 border-indigo-500",
      items: [
        "Joint replacement surgery",
        "Prosthesis materials (optional)",
        "Robot assistance (optional)",
        "TCM perioperative rehabilitation",
        "Hospitalization and examinations",
      ],
      footnote: "*Choosing different prostheses and robot-assisted surgery affects overall treatment price",
      footnote2: "*Subject to actual treatment cost invoice issued by hospital during visit",
    },
    compareCard: {
      title: "International Price Comparison",
      rows: [
        { label: "USA", value: "$40,000-70,000", valueClass: "text-gray-400" },
        { label: "China", value: "$12,000-40,000", valueClass: "text-indigo-600" },
      ],
      savings: { label: "Savings Ratio", value: "60-85%" },
    },
  },
};

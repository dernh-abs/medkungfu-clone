// Page data for /projects/maci-tcm — MACI-TCM Joint Regeneration Therapy.
import type { PageData } from "../types";

const IMG = "/sites/www-medkungfu-com-363c9bc1/shared/images";

const ROSE_BADGE = "text-sm text-rose-600 bg-rose-50 px-3 py-1 rounded-full";

export const maciTcmPage: PageData = {
  mainAriaLabel: "MACI-TCM Therapy - Chondrocyte Transplantation with TCM",
  hero: {
    eyebrow: "MACI Joint NeoGenesis Program",
    title: "MACI-TCM Joint Regeneration Therapy",
    subtitle: "Autologous Chondrocyte Transplantation Combined with TCM Synergistic Treatment",
    tagline:
      "Cartilage Repair \"Gold Standard\" · TCM Throughout · Zero Waiting · 4-5x Price Advantage",
    gradientClass: "from-slate-900 via-rose-900 to-slate-900",
    accentTextClass: "text-rose-200",
    buttonClass: "bg-rose-500 hover:bg-rose-600",
  },
  intro: {
    title: "What is MACI-TCM Joint Regeneration Therapy?",
    paragraphs: [
      "MACI (Matrix-Induced Autologous Chondrocyte Implantation) - Matrix-Induced Autologous Chondrocyte Implantation is the third generation of autologous chondrocyte transplantation technology, hailed as the \"gold standard\" in cartilage repair.",
      "MACI is mainly suitable for adult patients aged 18-55 with symptomatic single or multiple full-thickness cartilage defects, especially suitable for young active people with cartilage defects caused by sports injuries. In recent years, the application scope of MACI has also expanded from knee joints to cartilage injury repair of ankle, shoulder and hip joints.",
      "To maximize the therapeutic effect of MACI, we deeply integrate this \"gold standard\" technology with TCM characteristic therapies - from pre-operative TCM constitution identification and herbal conditioning, to post-operative acupuncture for pain relief, herbal fumigation for promoting blood circulation and removing stasis, massage for releasing adhesions, and moxibustion for warming meridians and dispelling cold, TCM runs through every stage of MACI treatment, achieving perfect synergy between \"modern medical precision repair\" and \"traditional TCM holistic conditioning\".",
    ],
    badgeText: "Gold Standard Technology · Autologous Source · TCM Synergy",
    badgeColor: "text-rose-600",
    image: `${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`,
    imageAlt: "MACI Treatment",
  },
  advantages: {
    title: "Core Advantages",
    subtitle: "Six core advantages to protect your joint health",
    gridClass: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
    items: [
      {
        icon: "award",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        title: "\"Gold Standard\" Technology, Long-term Efficacy Guaranteed",
        description:
          "Matrix-Induced Autologous Chondrocyte Implantation (MACI) is hailed as the \"gold standard\" in cartilage repair, representing the third generation of autologous chondrocyte transplantation technology. This is currently the regeneration approach closest to native articular cartilage.",
      },
      {
        icon: "shield",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        title: "Autologous Source, Zero Rejection",
        description:
          "All chondrocytes used in MACI come from healthy cartilage in the patient's own non-weight-bearing knee area, expanded in vitro and reimplanted. The autologous cell + autologous repair model fundamentally eliminates immune rejection reactions of allogeneic transplants and blood-borne infectious disease risks.",
      },
      {
        icon: "leaf",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        title: "TCM Throughout, Accelerated Recovery, Enhanced Efficacy",
        description:
          "Pre-operative TCM constitution identification and herbal conditioning can improve qi-blood and optimize body condition; early post-operative intervention with acupuncture for pain relief and swelling reduction, herbal fumigation for promoting blood circulation and removing stasis, massage for releasing adhesions, and moxibustion for warming meridians and dispelling cold, forming perfect complementarity with modern rehabilitation training.",
      },
      {
        icon: "dollarSign",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        title: "Unmatched Global Price Competitiveness",
        description:
          "In the US, a complete MACI treatment course costs about $45,000-$75,000, with some complex cases exceeding $100,000. In China, the total cost of a complete MACI treatment course is only 1/4 to 1/5 of similar treatments in the US, with a price difference of up to 4-5 times.",
      },
      {
        icon: "flaskConical",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        title: "Compliant & Transparent, Leading Technology",
        description:
          "China has established a full-chain regulatory system in the field of cell therapy, from national-level guidelines, ethical review, GMP preparation to clinical application.",
      },
      {
        icon: "clock",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        title: "Zero Waiting, Timely Pain Relief",
        description:
          "In developed countries in Europe and America, the waiting period for knee cartilage repair surgery often reaches 6-12 months. In China, from online consultation, remote MDT consultation to completion of two-stage surgery, all treatment can be completed in just 4-6 weeks.",
      },
    ],
  },
  indications: {
    title: "Indications",
    subtitle: "MACI combined with TCM synergistic treatment is mainly suitable for the following populations",
    accentClass: "text-rose-600",
    checkColor: "text-rose-500",
    items: [
      {
        image: `${IMG}/photo-1559757175-5700dde675bc-w600.jpg`,
        imageAlt: "Isolated Full-thickness Cartilage Defects of Knee",
        title: "Isolated Full-thickness Cartilage Defects of Knee",
        subtitle: "Outerbridge Grade III-IV",
        bullets: [
          "Single or multiple symptomatic full-thickness cartilage defects of the knee (with or without bone involvement)",
          "Defect area usually within 2-10 cm² range (specifically assessed by physician)",
          "Suitable for MACI transplant repair",
        ],
      },
      {
        image: `${IMG}/photo-1612349317150-e413f6a5b16d-w600.jpg`,
        imageAlt: "Age Range: 18-55 Years",
        title: "Age Range: 18-55 Years",
        subtitle: "Young Active Population",
        bullets: [
          "MACI is typically suitable for patients aged 18-55",
          "Full-thickness cartilage damage caused by sports (basketball, football, running, etc.)",
          "Young patients hoping to restore high-intensity exercise, delay or avoid joint replacement",
        ],
      },
      {
        image: `${IMG}/photo-1571019614242-c5c5dee9f50b-w600.jpg`,
        imageAlt: "Weight-bearing Surface Cartilage Defects of Femoral Condyle",
        title: "Weight-bearing Surface Cartilage Defects of Femoral Condyle",
        subtitle: "Most Common in Medial Femoral Condyle",
        bullets: [
          "Most common in medial femoral condyle",
          "Also applicable to lateral femoral condyle and trochlear region",
          "Weight-bearing surface cartilage defect repair",
        ],
      },
      {
        image: `${IMG}/photo-1538108149393-fbbd81895907-w600.jpg`,
        imageAlt: "Poor Results After Microfracture",
        title: "Poor Results After Microfracture",
        subtitle: "Previous Microfracture Unsatisfactory",
        bullets: [
          "Previously underwent microfracture but results were unsatisfactory",
          "Persistent symptoms",
          "Need higher-level cartilage repair solutions",
        ],
      },
      {
        image: `${IMG}/photo-1505751172876-fa1923c5c528-w600.jpg`,
        imageAlt: "Those Refusing or Unsuitable for Joint Replacement",
        title: "Those Refusing or Unsuitable for Joint Replacement",
        subtitle: "Hope to Preserve Natural Joints",
        bullets: [
          "Patients hoping to preserve natural joints and restore high mobility",
          "Middle-aged and young patients whose cartilage damage is not yet severe enough to require replacement",
          "Patients hoping to maximize preservation of natural joint function",
        ],
      },
    ],
  },
  treatment: {
    title: "Treatment Content",
    subtitle: "Three major treatment modules, perfect combination of surgery and TCM",
    modules: [
      {
        icon: "flaskConical",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        checkClass: "text-rose-500",
        numBg: "bg-rose-500",
        title: "Module 1: Core MACI Treatment (Two Stages)",
        subtitle: "Matrix-Induced Autologous Chondrocyte Implantation",
        blocks: [
          {
            type: "phaseGroupList",
            groups: [
              {
                title: "Stage 1: Arthroscopic Cartilage Collection (First Surgery)",
                badge: { text: "About 30-45 minutes", badgeClass: ROSE_BADGE },
                titleColor: "text-rose-600",
                bullets: [
                  "Collect 3 rice-grain-sized healthy cartilage samples from non-weight-bearing area of knee under arthroscopy",
                  "Local or regional anesthesia",
                  "Discharge on same day or next day",
                  "Collected samples sent to CGMP laboratory for cell culture expansion",
                ],
              },
              {
                title: "Stage 2: Laboratory Culture",
                badge: { text: "About 2-4 weeks", badgeClass: ROSE_BADGE },
                titleColor: "text-rose-600",
                bullets: [
                  "Chondrocytes undergo in vitro expansion culture in CGMP laboratory",
                  "Cell quantity expanded to millions level",
                  "During culture period, patients can return home to wait or rest in China",
                  "Remote video follow-up available, TCM physician adjusts plan based on recovery",
                ],
              },
              {
                title: "Stage 3: MACI Implantation (Second Surgery)",
                badge: { text: "About 60-90 minutes", badgeClass: ROSE_BADGE },
                titleColor: "text-rose-600",
                bullets: [
                  "General or regional anesthesia",
                  "Implant cultured and expanded autologous chondrocytes into defect area",
                  "Use bioabsorbable matrix scaffold to fix cells",
                  "Post-operative hospital observation for 3-7 days",
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
        title: "Module 2: TCM Perioperative Collaborative Treatment",
        subtitle: "TCM Perioperative Care",
        blocks: [
          {
            type: "phaseGroupList",
            groups: [
              {
                title: "Pre-operative TCM Conditioning (1-2 weeks before first surgery)",
                titleColor: "text-rose-600",
                bullets: [
                  "TCM constitution identification (four diagnostic methods)",
                  "Chinese medicine to improve joint circulation and nutritional status in advance",
                  "Appropriate acupuncture to reduce pre-operative pain",
                  "Create better physical condition for surgery",
                ],
              },
              {
                title: "Immediate Post-operative Rehabilitation (Days 1-14 after surgery)",
                titleColor: "text-rose-600",
                bullets: [
                  "Acupuncture therapy: dredge meridians, relieve pain (starts 24 hours after surgery)",
                  "Moxibustion: warm meridians, dispel cold, promote local circulation",
                  "External application/fumigation of Chinese medicine: reduce swelling and pain, promote blood circulation and remove stasis (starts from day 3 after surgery)",
                  "Oral Chinese medicine: syndrome differentiation and treatment, overall conditioning (starts from day 1 after surgery)",
                  "Massage: release muscles, prevent adhesions",
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
        title: "Module 3: Functional Exercise and Rehabilitation Guidance",
        subtitle: "Rehabilitation & Exercise",
        blocks: [
          {
            type: "cardGrid",
            cols: "grid md:grid-cols-2 gap-6",
            items: [
              {
                title: "Rehabilitation Training",
                desc: "Guide rehabilitation training, enhance knee proprioception and stability, reduce risk of secondary injury",
              },
              {
                title: "Traditional Exercises",
                desc: "Guide practice of traditional health exercises such as Baduanjin and Tai Chi, as long-term joint maintenance methods, effectively enhancing knee stability and delaying degenerative recurrence",
              },
            ],
          },
        ],
      },
    ],
  },
  process: {
    title: "Treatment Process",
    subtitle: "Ten-step complete process, specially designed for overseas patients",
    layout: "list",
    numBg: "bg-rose-500",
    numText: "text-lg",
    timeBadgeClass: "text-sm text-rose-600 bg-rose-50 px-3 py-1 rounded-full",
    steps: [
      {
        title: "Online Consultation & Medical Record Review",
        time: "2-5 working days",
        description:
          "Submit weight-bearing knee X-rays, MRI (≥1.5T) images, treatment history and joint function scores (VAS, IKDC, etc.). Medical advisors review materials and conduct preliminary indication screening based on cartilage defect area, location, Outerbridge grade and K-L grade to determine suitability for MACI treatment",
      },
      {
        title: "Remote MDT Consultation",
        time: "3-7 working days",
        description:
          "Joint video consultation with orthopedic (arthroscopy and cartilage repair), regenerative medicine and TCM experts. Physicians determine personalized treatment plan based on your cartilage defect situation, TCM constitution type and individual conditions: two-stage surgery schedule, whether to simultaneously treat meniscus/ligament injuries during surgery, perioperative TCM rehabilitation plan combination, cost estimate and itinerary",
      },
      {
        title: "Medical Visa & Travel Arrangements",
        time: "7-14 working days",
        description:
          "Issue medical invitation letter, guide S2 short-term medical visa application (up to 180 days, must cover two hospitalization periods for two surgeries). Assist with booking flights for both trips (can return home to wait for culture period after first biopsy), arrange airport pickup and accommodation near hospital, coordinate with MACI partner hospitals to schedule two surgeries",
      },
      {
        title: "First Stage Pre-operative Assessment",
        time: "1-2 days after arrival in China",
        description:
          "Complete necessary examinations: blood routine, coagulation function, infectious disease screening (HIV, HBV, HCV, etc.), liver and kidney function, ECG, cardiopulmonary function assessment, etc. TCM constitution identification and knee imaging review. Sign bilingual informed consent form. TCM physician prescribes pre-operative conditioning Chinese medicine based on constitution",
      },
      {
        title: "First Surgery - Arthroscopic Cartilage Collection",
        time: "Day 2-3 after arrival in China",
        description:
          "After admission, perform local or regional anesthesia, collect 3 rice-grain-sized healthy cartilage samples under arthroscopy (surgery duration about 30-45 minutes, discharge on same day or next day). Collected samples sent to CGMP laboratory for cell culture expansion (about 2-4 weeks). Rehabilitation physician provides protective weight-bearing and CPM machine usage guidance at discharge. TCM physician prescribes post-operative conditioning prescription",
      },
      {
        title: "Laboratory Culture Waiting Period",
        time: "2-4 weeks",
        description:
          "Patients can return home to wait or rest in China. During this period, continue taking Chinese medicine to condition body state, creating better repair microenvironment for second surgery. Remote video follow-up available, TCM physician adjusts plan based on recovery",
      },
      {
        title: "Second Stage Pre-operative Assessment & Preparation",
        time: "1-2 days after arrival in China",
        description:
          "Come to China in advance according to laboratory notification. Complete pre-operative re-examination (blood routine, coagulation function, etc.), knee MRI to review defect area and planned implantation site. Complete informed consent for second surgery",
      },
      {
        title: "Second Surgery - MACI Implantation",
        time: "About 4 weeks after first surgery",
        description:
          "After admission, perform general or regional anesthesia, MACI implantation surgery (60-90 minutes). Post-operative hospital observation for 3-7 days. During hospitalization: Western medicine pain management + passive joint movement training + acupuncture for pain relief and swelling reduction (starts 24 hours after surgery) + oral Chinese medicine (starts from day 1 after surgery) + external application/fumigation of Chinese medicine (starts from day 3 after surgery). TCM physician conducts daily rounds",
      },
      {
        title: "Discharge Rehabilitation Guidance & Return",
        time: "Before treatment ends",
        description:
          "Rehabilitation physician develops personalized phased functional exercise plan (8-week, 3-month, 6-month goals, including bilingual video tutorials). Continue Chinese medicine conditioning (provide mail-order Chinese medicine pills/paste service). Provide bilingual rehabilitation manual, clarifying key points such as brace usage, weight-bearing restrictions (strictly prohibit full weight-bearing within 6 weeks after surgery), crutch usage instructions, etc.",
      },
      {
        title: "Remote Follow-up & Health Management",
        time: "12 months post-operation",
        description:
          "Provide mobile pain score (VAS) and joint function self-assessment (IKDC, KOOS) system. Remote video follow-up, TCM physician adjusts Chinese medicine conditioning recommendations based on recovery stage and seasonal changes. Guide local MRI imaging and comparative analysis as needed to assess progress of cartilage repair tissue (MOCART score)",
      },
    ],
  },
  efficacy: {
    title: "Efficacy Data",
    subtitle: "Core evidence-based data and efficacy timeline 2025-2026",
    table: {
      headers: ["Study Type", "Sample/Group", "Main Findings", "Evidence Level"],
      headerClass: "text-rose-400",
      badgeClass: "bg-rose-500/20 text-rose-300",
      rows: [
        {
          cells: [
            "10-year RCT Follow-up",
            "35 cases (37 knees), 6 weeks vs 8 weeks weight-bearing",
            "10-year satisfaction 93%/88%, limb symmetry index 99%-104%",
          ],
          badge: "Level I, RCT",
        },
        {
          cells: [
            "Systematic Review & Meta-analysis",
            "47 studies, 1993 patients, average follow-up 57.2 months",
            "ACI/MACI/OAT/OCA all significantly improved",
          ],
          badge: "Level I, Meta-analysis",
        },
        {
          cells: [
            "MACI vs AMIC vs MCI (2-year follow-up)",
            "48 cases (16 per group), retrospective matching",
            "No significant differences among three groups in VAS, KOOS, Tegner; all had good patient-reported outcomes and low complications",
          ],
          badge: "Level III, matched cohort",
        },
        {
          cells: [
            "Return to Sports Systematic Review",
            "Including MACI cohort",
            "MACI return to sports odds ratio 2.15, significantly higher return to sports rate",
          ],
          badge: "Level I, systematic review",
        },
      ],
    },
    timeline: {
      title: "Efficacy Timeline",
      items: [
        {
          time: "Post-op 0-2 weeks (Strict Protection Period)",
          timeClass: "w-48 flex-shrink-0 text-rose-400 font-semibold text-sm",
          text: "Hospitalization or outpatient observation, strictly limit full weight-bearing (crutch assistance), passive range of motion gradually increases; acupuncture and Chinese medicine significantly relieve post-operative pain and swelling",
        },
        {
          time: "Post-op 2-6 weeks (Protective Weight-bearing Period)",
          timeClass: "w-48 flex-shrink-0 text-rose-400 font-semibold text-sm",
          text: "Partial weight-bearing walking under brace protection, active joint range of motion reaches over 90°",
        },
        {
          time: "Post-op 6 weeks-3 months",
          timeClass: "w-48 flex-shrink-0 text-rose-400 font-semibold text-sm",
          text: "Gradually transition to full weight-bearing walking, basic daily activities basically restored",
        },
        {
          time: "Post-op 3-6 months",
          timeClass: "w-48 flex-shrink-0 text-rose-400 font-semibold text-sm",
          text: "Can complete daily living activities, going up and down stairs, low-intensity sports activities (swimming, jogging); functional scores significantly better than pre-operative",
        },
        {
          time: "Post-op 6-12 months",
          timeClass: "w-48 flex-shrink-0 text-rose-400 font-semibold text-sm",
          text: "IKDC, KOOS functional scores further improved; most patients can restore original sports level (running, jumping, etc.)",
        },
        {
          time: "Post-op 1-5 years",
          timeClass: "w-48 flex-shrink-0 text-rose-400 font-semibold text-sm",
          text: "Function stably maintained; IKDC score reaches PASS threshold (patient acceptable symptom state); long-term follow-up shows sustained good function",
        },
        {
          time: "Post-op 5-10 years",
          timeClass: "w-48 flex-shrink-0 text-rose-400 font-semibold text-sm",
          text: "10-year follow-up data shows 10-year satisfaction 93% (6-week group), 88% (8-week group); repaired tissue still performs well, confirming long-term reliability and structural durability of MACI",
        },
      ],
    },
    statClass: "text-rose-400",
    stats: [
      { value: "93%", label: "10-year Satisfaction (6-week Group)" },
      { value: "2.15", label: "Return to Sports Odds Ratio" },
      { value: "99-104%", label: "Limb Symmetry Index" },
    ],
  },
  cases: {
    title: "Real Cases",
    subtitle: "Real feedback from overseas patients, witnessing efficacy",
    gridClass: "grid md:grid-cols-3 gap-8",
    imgClass: "h-48",
    accentClass: "text-rose-600",
    descriptionClass: "text-gray-600 text-sm",
    items: [
      {
        image: `${IMG}/photo-1546519638-68e109498ffc-w600.jpg`,
        imageAlt: "Singapore Basketball Player Aaron (32) - Meniscus Debridement + MACI Helps Two-Year Comeback",
        title: "Singapore Basketball Player Aaron (32) - Meniscus Debridement + MACI Helps Two-Year Comeback",
        subtitle: "From Despair to Return to Court",
        description:
          "Aaron (32, former player of Singapore National Youth Team), full-thickness cartilage defect of 3.5 cm² in medial femoral condyle of right knee (Outerbridge Grade IV), caused by sports injury. Consulted MACI at private hospital in Singapore, quoted about 120,000 SGD (about 650,000 RMB), and did not provide supporting rehabilitation. Recommended by local sports school doctor to come to China, received MACI treatment at Qilu Hospital of Shandong University - first stage arthroscopic cartilage collection, second stage implantation of autologous chondrocyte patch, simultaneously repaired accompanying meniscus injury. Post-operatively cooperated with 5 acupuncture sessions, 8 weeks of oral Chinese medicine and Baduanjin teaching. VAS score decreased from 8 to 1 at 9 months post-operation, resumed basketball training at 12 months.",
      },
      {
        image: `${IMG}/photo-1576091160399-112ba8d25d1d-w600.jpg`,
        imageAlt: "Thai Rock Climbing Enthusiast Kittipong (41) - MACI Plan to Protect Career",
        title: "Thai Rock Climbing Enthusiast Kittipong (41) - MACI Plan to Protect Career",
        subtitle: "From 6-Week Logistics to 4-Week Complete Process",
        description:
          "Kittipong (41, Chiang Mai, Thailand), professional rock climbing instructor and natural rock wall challenger. Full-thickness cartilage defect of femoral trochlea in left knee, area 2.8 cm², caused by long-term rock climbing squatting and jumping movements. Evaluated MACI cost at private hospital in Bangkok, Thailand at about 1.5 million THB (about 300,000 RMB), and culture required sending cells to Singapore for processing, logistics cycle reached 6 weeks. Came to China for MACI treatment, first stage collection + cell culture (4 weeks), second stage implantation simultaneously received arthroscopic debridement. Post-operatively cooperated with 8 acupuncture sessions, 14 days of herbal fumigation and washing, 10 massage sessions, and Baduanjin teaching. At 6 months post-operation, cartilage defect area was completely covered by new cartilage, VAS decreased from 7 pre-operatively to 1.",
      },
      {
        image: `${IMG}/photo-1504439904031-93ded9f93e4e-w600.jpg`,
        imageAlt: "Indonesian Marathon Runner Susi (38) - From Lifetime Withdrawal to Breaking PB",
        title: "Indonesian Marathon Runner Susi (38) - From Lifetime Withdrawal to Breaking PB",
        subtitle: "Breaking Personal Marathon Record",
        description:
          "Susi (38, Jakarta, Indonesia), amateur marathon runner (PB 3:48). Large-area cartilage defect of 4.2 cm² in medial femoral condyle of right knee, severe pain when running >3 km, doctor recommended permanently giving up running. Consulted multiple hospitals in Jakarta without result, came to China recommended by running friend group. Received MACI treatment, received 4 weeks of comprehensive TCM rehabilitation before and after surgery (acupuncture + oral Chinese medicine + fumigation and washing + moxibustion + massage). Completed 5 km jogging pain-free at 6 months post-operation, completed half marathon (2:05) at 10 months, broke personal marathon record 3:38 at 15 months. Has been running pain-free for 9 months so far, MRI at 1 year post-operation showed good coverage of defect area, MOCART score 82.",
      },
    ],
  },
  services: {
    title: "Support Services",
    subtitle:
      "We provide full-chain services from pre-departure to return for every overseas patient coming to China for MACI combined with TCM treatment",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
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
      title: "MACI Complete Course Reference Cost",
      price: "$18,000-25,000",
      priceNote: "Includes two surgeries, cell culture, TCM rehabilitation",
      priceClass: "text-rose-600",
      checkClass: "text-rose-500",
      borderClass: "border-2 border-rose-500",
      items: [
        "First stage arthroscopic cartilage collection",
        "CGMP laboratory cell culture",
        "Second stage MACI implantation surgery",
        "TCM perioperative rehabilitation",
        "Pre and post-operative examinations",
      ],
      footnote: "*Subject to actual treatment cost invoice issued by hospital during visit",
    },
    compareCard: {
      title: "International Price Comparison",
      rows: [
        { label: "USA", value: "$45,000-75,000", valueClass: "text-gray-400" },
        { label: "Singapore", value: "~$65,000", valueClass: "text-gray-400" },
        { label: "China", value: "$18,000-25,000", valueClass: "text-rose-600" },
      ],
      savings: { label: "Savings Ratio", value: "50-75%" },
    },
  },
};

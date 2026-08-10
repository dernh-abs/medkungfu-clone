// Page data for /projects/mfat-tcm — MFAT Joint Regeneration Therapy.
import type { PageData } from "../types";

const IMG = "/sites/www-medkungfu-com-363c9bc1/shared/images";

export const mfatTcmPage: PageData = {
  mainAriaLabel: "MFAT Joint Regeneration Therapy - Autologous Fat Micro-fragment Treatment",
  hero: {
    eyebrow: "Adipose Tissue Regeneration Program",
    title: "MFAT Joint Regeneration Therapy",
    subtitle: "Adipose Tissue Regeneration",
    tagline:
      "Autologous Fat Micro-fragment Joint Regeneration · One Collection Multiple Uses · Long-lasting Pain Relief 3-4 Years",
    gradientClass: "from-slate-900 via-emerald-900 to-slate-900",
    accentTextClass: "text-emerald-200",
    buttonClass: "bg-emerald-500 hover:bg-emerald-600",
  },
  intro: {
    title: "What is MFAT Joint Regeneration Therapy?",
    paragraphs: [
      "Micro-Fragmented Adipose Tissue (MFAT) technology collects abdominal or thigh fat through minimally invasive methods, processes it through enzyme-free physical fragmentation, and injects it into the joint cavity. Stem cells differentiate into chondrocytes to repair tissue; growth factors provide anti-inflammatory and analgesic effects; extracellular matrix acts as a natural scaffold to enhance the local repair microenvironment.",
      "The core value of MFAT lies in \"one collection, multiple uses\" - the collected fat is cryopreserved at -80°C, and the cell viability after thawing two years later (55.73%) shows no significant difference from fresh samples (59.75%), with 100% sterile microbiological testing. Patients only need to undergo minimally invasive liposuction once, and can use the same batch of MFAT products multiple times when needed, greatly reducing the pain and cost of repeated treatments.",
      "We systematically integrate this modern regenerative technology with scientific rehabilitation programs, forming a comprehensive \"treatment-repair-rehabilitation\" trinity solution.",
    ],
    badgeText: "Autologous Source · Zero Rejection · Long-lasting Pain Relief 3-4 Years",
    badgeColor: "text-emerald-600",
    image: `${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`,
    imageAlt: "MFAT Treatment",
  },
  advantages: {
    title: "Core Advantages",
    subtitle: "Six core advantages to protect your joint health",
    gridClass: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
    items: [
      {
        icon: "shield",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        title: "Autologous Source, Zero Rejection, Zero Risk",
        description:
          "MFAT raw materials are taken from your own adipose tissue, fundamentally eliminating immune rejection of allogeneic tissues and blood-borne infectious disease risks, one of the safest autologous therapies in regenerative medicine.",
      },
      {
        icon: "snowflake",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        title: "One Collection, Multiple Uses - Create Your \"Personal Tissue Bank\"",
        description:
          "After fat collection, excess MFAT can be cryopreserved at -80°C for more than 2 years. Cell viability after thawing (55.73%) shows no significant difference from fresh samples (59.75%), with 100% sterile microbiological testing. When secondary injection is needed in the future, no additional liposuction is required - simply use the cryopreserved MFAT.",
      },
      {
        icon: "clock",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        title: "Single Injection, Long-lasting Pain Relief (Up to 3-4 Years)",
        description:
          "A 2025 follow-up study of 335 KOA patients showed that all clinical scores significantly improved 3 months after a single MFAT injection (p<0.001), and the improvement was maintained until the 3-year follow-up endpoint. Another 4-year follow-up study confirmed that 68% of patients still maintained clinical effectiveness 4 years after injection.",
      },
      {
        icon: "activity",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        title: "Beyond Hyaluronic Acid, More Advantageous for Inflammatory Phenotype OA",
        description:
          "Studies show that MFAT has unique targeted advantages in treating knee osteoarthritis with inflammatory phenotype, with KOOS symptom score improvement significantly better than the hyaluronic acid group.",
      },
      {
        icon: "thermometer",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        title: "Outpatient-level Minimally Invasive Procedure, Discharge on Treatment Day",
        description:
          "Fat collection + preparation + precise intra-articular injection can be completed in one outpatient visit, taking approximately 1.5-2 hours. Patients can walk independently and be discharged after 1-2 hours of observation post-treatment, without hospitalization.",
      },
      {
        icon: "dollarSign",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        title: "Unmatched Global Price Competitiveness",
        description:
          "The total cost of a single MFAT treatment in China (including anesthesia, minimally invasive liposuction, MFAT preparation, ultrasound-guided intra-articular injection) is only 1/5-1/10 of similar treatments in the US, with a price difference of up to 5-10 times.",
      },
    ],
  },
  indications: {
    title: "Indications",
    subtitle: "MFAT joint regeneration therapy is mainly suitable for the following groups",
    accentClass: "text-emerald-600",
    checkColor: "text-emerald-500",
    items: [
      {
        image: `${IMG}/photo-1559757175-5700dde675bc-w600.jpg`,
        imageAlt: "Early to Mid-stage Knee Osteoarthritis",
        title: "Early to Mid-stage Knee Osteoarthritis",
        subtitle: "Kellgren-Lawrence Grade II-III",
        bullets: [
          "Joint pain, morning stiffness, joint swelling, limited mobility",
          "Poor response or intolerance to oral painkillers, sodium hyaluronate or PRP injections",
          "Desire to preserve natural joints, delay or avoid artificial joint replacement",
        ],
      },
      {
        image: `${IMG}/photo-1612349317150-e413f6a5b16d-w600.jpg`,
        imageAlt: "Knee Osteoarthritis with Inflammatory Features",
        title: "Knee Osteoarthritis with Inflammatory Features",
        subtitle: "Obvious joint swelling, clicking, morning stiffness",
        bullets: ["Obvious joint swelling", "Joint clicking", "Prolonged morning stiffness"],
      },
      {
        image: `${IMG}/photo-1571019614242-c5c5dee9f50b-w600.jpg`,
        imageAlt: "Chronic Sports Injury-related Joint Disease",
        title: "Chronic Sports Injury-related Joint Disease",
        subtitle: "Joint degeneration caused by long-term exercise",
        bullets: ["Ligament injury", "Cartilage wear", "Athlete joint protection"],
      },
      {
        image: `${IMG}/photo-1538108149393-fbbd81895907-w600.jpg`,
        imageAlt: "Post-operative Auxiliary Repair",
        title: "Post-operative Auxiliary Repair",
        subtitle: "Combined with MFAT after arthroscopic debridement",
        bullets: [
          "Promote post-operative cartilage repair",
          "Reduce post-operative inflammatory response",
          "Accelerate recovery process",
        ],
      },
      {
        image: `${IMG}/photo-1505751172876-fa1923c5c528-w600.jpg`,
        imageAlt: "Those Intolerant to Western Medicine or Seeking to Reduce Drug Dependence",
        title: "Those Intolerant to Western Medicine or Seeking to Reduce Drug Dependence",
        subtitle: "Seeking comprehensive conditioning through biological therapy",
        bullets: [
          "Weakened effect of painkillers or obvious side effects",
          "Desire to reduce drug dependence",
          "Seeking more natural therapies",
        ],
      },
    ],
  },
  treatment: {
    title: "Treatment Content",
    subtitle: "Two major treatment modules, comprehensive joint rehabilitation program",
    modules: [
      {
        icon: "microscope",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        checkClass: "text-emerald-500",
        numBg: "bg-emerald-500",
        title: "Module 1: Core Autologous Fat Micro-fragment Therapy",
        subtitle: "Micro-Fragmented Adipose Tissue Therapy",
        blocks: [
          {
            type: "numberedGrid",
            cols: "grid md:grid-cols-2 gap-6",
            steps: [
              {
                num: "1",
                title: "Minimally Invasive Fat Collection",
                desc: "Extract a small amount of fat (about 5-15ml) from abdomen or thigh under local anesthesia, minimally invasive incision <2mm, about 15 minutes",
              },
              {
                num: "2",
                title: "MFAT Preparation",
                desc: "Physically fragmented into 200-400 micron micro-fragments, no exogenous enzymes added, remaining MFAT can be cryopreserved for future use",
              },
              {
                num: "3",
                title: "Precise Intra-articular Injection",
                desc: "Precisely injected under 18MHz high-frequency ultrasound guidance, error controlled within 0.5mm, about 15 minutes",
              },
              {
                num: "4",
                title: "Outpatient Observation",
                desc: "Observe for 1-2 hours, patients can walk independently and be discharged on the same day",
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
        title: "Module 2: Functional Exercise and Rehabilitation Guidance",
        subtitle: "Rehabilitation & Exercise",
        blocks: [
          {
            type: "cardGrid",
            cols: "grid md:grid-cols-2 gap-6",
            items: [
              {
                title: "Muscle Strength Training",
                desc: "Guide quadriceps isometric contraction training to strengthen knee joint stability",
              },
              {
                title: "Rehabilitation Exercise",
                desc: "Recommend scientific rehabilitation exercise programs to promote long-term joint maintenance and prevent recurrence",
              },
            ],
          },
        ],
      },
    ],
  },
  process: {
    title: "Treatment Process",
    subtitle: "Eight-step complete process, designed specifically for overseas patients",
    layout: "list",
    numBg: "bg-emerald-500",
    numText: "text-lg",
    timeBadgeClass: "text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full",
    steps: [
      {
        title: "Online Consultation and Medical Record Assessment",
        time: "2-5 working days",
        description:
          "Submit knee X-ray weight-bearing views, MRI (≥1.5T) images, previous treatment history and joint function scores (VAS, WOMAC, etc.), medical consultants review materials and conduct preliminary indication screening",
      },
      {
        title: "Remote MDT Consultation",
        time: "3-7 working days",
        description:
          "Orthopedics + regenerative medicine physicians conduct joint video consultation to determine personalized treatment plan: MFAT dosage, whether cryopreservation is needed, cost estimate and treatment itinerary",
      },
      {
        title: "Visa and Travel Arrangements",
        time: "7-14 working days",
        description:
          "Issue medical invitation letter, guide S2/S1 medical visa application, assist with booking flights, airport transfers and accommodation near hospital, schedule MFAT treatment appointment",
      },
      {
        title: "Admission Assessment and Pre-operative Preparation",
        time: "1-2 days after arrival in China",
        description:
          "Complete necessary examinations: blood routine, coagulation function, infectious disease screening, platelet count, ECG, BMI assessment, etc., knee imaging review",
      },
      {
        title: "MFAT Treatment Implementation",
        time: "Day 2-3 after arrival in China",
        description:
          "Minimally invasive fat collection under local anesthesia in outpatient operating room (about 15 minutes) → MFAT physical preparation (about 20 minutes) → ultrasound-guided precise intra-articular injection (about 15 minutes), total about 1.5-2 hours",
      },
      {
        title: "Rehabilitation Supportive Treatment",
        time: "Throughout entire stay in China and after returning home",
        description:
          "Professional rehabilitation therapist guides functional exercises after injection, combined with physical therapy to promote recovery and accelerate joint function rehabilitation",
      },
      {
        title: "Discharge Guidance and Return",
        time: "Before treatment ends",
        description:
          "Rehabilitation physician develops personalized functional exercise program (including home video guidance), provides English version rehabilitation manual",
      },
      {
        title: "Remote Follow-up and Health Management",
        time: "12 months after treatment",
        description:
          "Provide mobile pain scoring and joint function self-assessment system, remote video follow-up, supplementary injection can be arranged if cryopreserved MFAT is available when needed",
      },
    ],
  },
  efficacy: {
    title: "Efficacy Data",
    subtitle: "Core evidence-based data and efficacy timeline",
    table: {
      headers: ["Indicator", "Research Results", "Evidence Level"],
      headerClass: "text-emerald-400",
      badgeClass: "bg-emerald-500/20 text-emerald-300",
      rows: [
        {
          cells: [
            "3-year Follow-up After Single MFAT Injection",
            "All scores (VAS, OKS, WOMAC, KOOS) significantly improved at 3 months (p<0.001), effects maintained until 3 years",
          ],
          badge: "Level III, 335-patient cohort study",
        },
        {
          cells: [
            "4-year Follow-up Sustained Effectiveness",
            "68% of patients still maintained clinical effectiveness 4 years after injection",
          ],
          badge: "Level II, 46-patient prospective study",
        },
        {
          cells: [
            "vs Hyaluronic Acid (Inflammatory Phenotype OA)",
            "KOOS symptom score MFAT group +25.0 vs HA group +12.7 (p=0.008), better improvement in stiffness, swelling, clicking",
          ],
          badge: "Level I, 53-patient RCT",
        },
        {
          cells: [
            "vs SVF (Propensity Score Matching)",
            "MFAT flexion range of motion improvement better than SVF (p=0.03), MRI T2 mapping shows MFAT cartilage preservation effect is better and more durable",
          ],
          badge: "Level III, 72-patient cohort",
        },
        {
          cells: [
            "Cryopreserved MFAT Viability Data",
            "Cell viability after 2 years of cryopreservation (55.73%) shows no significant difference from fresh samples (59.75%), 100% sterile microbiological testing",
          ],
          badge: "Laboratory Study",
        },
      ],
    },
    timeline: {
      title: "Efficacy Timeline",
      items: [
        {
          time: "1-2 Weeks Post-injection",
          timeClass: "w-32 flex-shrink-0 text-emerald-400 font-semibold",
          text: "Mild joint swelling, soreness (normal inflammatory response), subsides with ice compress for 3-5 days",
        },
        {
          time: "1-3 Months Post-injection",
          timeClass: "w-32 flex-shrink-0 text-emerald-400 font-semibold",
          text: "Pain significantly reduced, morning stiffness shortened, daily stair climbing easier",
        },
        {
          time: "3-6 Months Post-injection",
          timeClass: "w-32 flex-shrink-0 text-emerald-400 font-semibold",
          text: "Joint function significantly improved, limping noticeably reduced, quality of life significantly enhanced",
        },
        {
          time: "6-12 Months Post-injection",
          timeClass: "w-32 flex-shrink-0 text-emerald-400 font-semibold",
          text: "Therapeutic effect stably maintained, cartilage repair begins to appear on imaging",
        },
        {
          time: "12-36 Months Post-injection",
          timeClass: "w-32 flex-shrink-0 text-emerald-400 font-semibold",
          text: "Sustained improvement effect maintained, some patients need supplementary injection to consolidate effect; 68% of patients still effective at 4-year follow-up",
        },
      ],
    },
  },
  cases: {
    title: "Real Cases",
    subtitle: "Real patient feedback, witnessing efficacy",
    gridClass: "grid md:grid-cols-2 gap-8",
    imgClass: "h-48",
    accentClass: "text-emerald-600",
    descriptionClass: "text-gray-600 text-sm",
    items: [
      {
        image: `${IMG}/photo-1546519638-68e109498ffc-w600.jpg`,
        imageAlt: "Retired American Engineer Jim - MFAT Returns 68-year-old to Golf Course",
        title: "Retired American Engineer Jim - MFAT Returns 68-year-old to Golf Course",
        subtitle: "True Testimony of Cross-border Medical Care",
        description:
          "Jim (68, Texas, USA) suffered from bilateral knee osteoarthritis for 6 years, K-L Grade III. Severe pain going up and down stairs, needed rest and pain relief after walking 300 meters in the community. Consulted MFAT treatment in the US, quoted about $40,000, exceeding expectations. Came to China through medical tourism agency, received MFAT single-knee treatment with 2-week rehabilitation package. Result: 3 months after treatment, VAS score dropped from 7 to 2, can play golf twice a week (9 holes each time). Jim said: \"Chinese doctors taught me scientific rehabilitation exercise methods, now my knees are much more flexible than before.\" He chose to cryopreserve remaining MFAT for backup, planning to do the other knee in a year.",
      },
      {
        image: `${IMG}/photo-1576091160399-112ba8d25d1d-w600.jpg`,
        imageAlt: "Singapore Ms. Angela - 7 Years of Pain, 3-week China Trip Changed Everything",
        title: "Singapore Ms. Angela - 7 Years of Pain, 3-week China Trip Changed Everything",
        subtitle: "From Despair to Rebirth",
        description:
          "Angela (55, Singapore) is a middle school teacher with 7-year history of knee arthritis, K-L Grade II-III. Limping when walking, piercing pain in right knee when standing for long periods, unable to accompany children for outdoor activities on weekends. Tried PRP and hyaluronic acid treatments in Singapore, effects were temporary. After online research, chose to come to China for MFAT treatment. Plan: Single MFAT injection + comprehensive rehabilitation course. Result: Pain significantly reduced 2 weeks after treatment, able to squat and tie shoelaces; pain score dropped from 7 to 1 three months after treatment, completely painless after half-hour walk. She has now cancelled her local joint replacement surgery appointment and strongly recommends it to friends around her.",
      },
    ],
  },
  services: {
    title: "Support Services",
    subtitle:
      "We provide end-to-end services from pre-departure to return for every overseas patient coming to China for MFAT treatment",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    items: [
      {
        icon: "globe",
        title: "Visa Guidance and Processing",
        description: "Medical invitation letter, S2/S1 visa material guidance, entry registration assistance",
      },
      {
        icon: "mapPin",
        title: "Arrival Reception and Transportation",
        description: "Private car airport pickup, hotel and wellness apartment booking, living guidance",
      },
      {
        icon: "users",
        title: "Language Support and Medical Translation",
        description: "Bilingual medical coordinator, precise medical terminology translation, medical record report translation",
      },
      {
        icon: "heart",
        title: "Accompanying Diagnosis and Medical Coordination",
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
    title: "Reference Treatment Cost",
    subtitle: "Transparent pricing, unmatched global price competitiveness",
    costCard: {
      title: "MFAT Full Course Reference Cost (Including Examinations)",
      price: "$12,000-20,000",
      priceNote: "Based on patient specific conditions",
      priceClass: "text-emerald-600",
      checkClass: "text-emerald-500",
      borderClass: "border-2 border-emerald-500",
      items: [
        "Minimally invasive fat collection",
        "MFAT preparation and injection",
        "Pre-operative examination and assessment",
        "Remaining MFAT cryopreservation",
      ],
      footnote: "*Subject to actual treatment cost invoice issued by hospital during visit",
    },
    compareCard: {
      title: "Price Comparison",
      rows: [
        { label: "US MFAT Treatment", value: "$40,000+", valueClass: "text-gray-400" },
        { label: "China MFAT Treatment", value: "$12,000-20,000", valueClass: "text-emerald-600" },
      ],
      savings: { label: "Savings Ratio", value: "50-70%" },
    },
  },
};

// Page data for /projects/msc-tcm — MSC Joint Regeneration Therapy.
import type { PageData } from "../types";

const IMG = "/sites/www-medkungfu-com-363c9bc1/shared/images";

export const mscTcmPage: PageData = {
  mainAriaLabel: "MSC-TCM Therapy - Mesenchymal Stem Cells Combined with TCM",
  hero: {
    eyebrow: "Joint Regeneration & Repair Program",
    title: "MSC Joint Regeneration Therapy",
    subtitle: "MSC Joint Regeneration Therapy",
    tagline:
      "Mesenchymal Stem Cell Joint Regeneration · Root-level Repair · Address Both Symptoms & Root Cause",
    gradientClass: "from-slate-900 via-blue-900 to-slate-900",
    accentTextClass: "text-blue-200",
    buttonClass: "bg-blue-500 hover:bg-blue-600",
  },
  intro: {
    title: "What is MSC Joint Regeneration Therapy?",
    paragraphs: [
      "MSCs are primitive cells with self-renewal and multi-directional differentiation potential, obtainable from umbilical cord, adipose tissue, or bone marrow. When injected into the joint cavity, MSCs can differentiate into chondrocytes to directly repair damage, while systematically suppressing chronic intra-articular inflammation through secretion of anti-inflammatory factors.",
      "A meta-analysis published in 2025 covering 16 randomized controlled trials with 622 patients confirmed that MSC treatment significantly improved pain and joint function in knee osteoarthritis patients at 3, 6, and 12 months.",
      "MSC efficacy is often influenced by multiple factors including patient constitution and inflammatory status. Through comprehensive rehabilitation programs, not only is the overall effectiveness of stem cell therapy enhanced, but patients' long-term quality of life is also improved.",
    ],
    badgeText: "Internationally Evidence-based · Safe & Effective",
    badgeColor: "text-blue-600",
    image: `${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`,
    imageAlt: "MSC Treatment",
  },
  advantages: {
    title: "Core Advantages",
    subtitle: "Four core advantages protecting your joint health",
    gridClass: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
    items: [
      {
        icon: "microscope",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        title: "Multi-mechanism Synergy, Root-level Repair",
        description:
          "Mesenchymal stem cells possess three core mechanisms - chondrogenic differentiation potential can differentiate into new chondrocytes to directly repair damaged tissue; paracrine effects release large amounts of growth factors and anti-inflammatory factors to improve joint microenvironment; immunomodulatory function inhibits inflammatory factor release and reduces synovial inflammation. The synergistic action of these three mechanisms enables MSC therapy to fundamentally intervene in the osteoarthritis disease process, rather than merely alleviating symptoms.",
      },
      {
        icon: "award",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        title: "Compliant & Transparent, Official Pricing",
        description:
          "In March 2025, Hainan Boao Lecheng International Medical Tourism Pilot Zone announced the official pricing for stem cell treatment of knee osteoarthritis for the first time - 36,000 RMB per injection, with safety and efficacy validated by large-scale real-world data.",
      },
      {
        icon: "dollarSign",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        title: "#1 Global Competitiveness",
        description:
          "The cost of MSC treatment in China is only 1/4 to 1/7 of similar treatments in Europe and America. The cost of MSC treatment for knee osteoarthritis in the US is about $20,000-$50,000 (about 140,000-360,000 RMB), while in China it is only 36,000 RMB/time (about $5,000), with significant price advantage.",
      },
      {
        icon: "clock",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        title: "Standardized & Efficient, No Long Waiting",
        description:
          "The waiting period for joint surgery in European and American public healthcare systems often reaches 6-12 months. In China, from remote consultation to completion of MSC injection generally takes only 2-3 weeks, greatly reducing patients' treatment waiting time.",
      },
    ],
  },
  indications: {
    title: "Indications",
    subtitle: "MSC treatment is mainly suitable for the following conditions",
    accentClass: "text-blue-600",
    checkColor: "text-blue-500",
    items: [
      {
        image: `${IMG}/photo-1559757175-5700dde675bc-w600.jpg`,
        imageAlt: "Early to Mid-stage Knee Osteoarthritis",
        title: "Early to Mid-stage Knee Osteoarthritis",
        subtitle: "Kellgren-Lawrence Grade I-III",
        bullets: [
          "Joint pain, morning stiffness, limited mobility",
          "Poor response or intolerance to conservative treatments such as oral analgesics and sodium hyaluronate injections",
          "Desire to preserve natural joints, delay or avoid joint replacement",
        ],
      },
      {
        image: `${IMG}/photo-1612349317150-e413f6a5b16d-w600.jpg`,
        imageAlt: "Moderate to Severe KOA with Synovitis",
        title: "Moderate to Severe KOA with Synovitis",
        subtitle: "K-L Grade II-III",
        bullets: [
          "Obvious joint swelling",
          "Active synovial inflammation",
          "Recurrent joint effusion",
        ],
      },
      {
        image: `${IMG}/photo-1571019614242-c5c5dee9f50b-w600.jpg`,
        imageAlt: "Moderate Cartilage Wear",
        title: "Moderate Cartilage Wear",
        subtitle: "MRI Shows Thinning, Focal Defects",
        bullets: [
          "Cartilage thinning, focal defects",
          "Not yet full-thickness large-scale loss",
          "Patients hoping to promote cartilage repair through regenerative medicine technology",
        ],
      },
      {
        image: `${IMG}/photo-1538108149393-fbbd81895907-w600.jpg`,
        imageAlt: "Post-Arthroscopy Auxiliary Treatment",
        title: "Post-Arthroscopy Auxiliary Treatment",
        subtitle: "Combined MSC Rehabilitation Post-surgery",
        bullets: [
          "Promote post-operative cartilage repair",
          "Reduce post-operative inflammatory response",
          "Accelerate recovery process",
        ],
      },
      {
        image: `${IMG}/photo-1505751172876-fa1923c5c528-w600.jpg`,
        imageAlt: "Intolerant to Western Medicine or Safety Concerns",
        title: "Intolerant to Western Medicine or Safety Concerns",
        subtitle: "Seeking Comprehensive Treatment Plan",
        bullets: [
          "Reduce dependence on NSAIDs and other medications",
          "Personalized treatment plan",
        ],
      },
    ],
  },
  treatment: {
    title: "Treatment Content",
    subtitle: "Two major treatment modules for comprehensive joint rehabilitation",
    modules: [
      {
        icon: "microscope",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        checkClass: "text-blue-500",
        numBg: "bg-blue-500",
        title: "Module 1: Core MSC Treatment",
        subtitle: "Mesenchymal Stem Cell Therapy",
        blocks: [
          {
            type: "cardGrid",
            cols: "grid md:grid-cols-2 gap-6 mb-6",
            items: [
              {
                title: "Umbilical Cord MSC (UC-MSC)",
                desc: "Isolated and expanded from healthy donor umbilical cord tissue, prepared as standardized product under CGMP conditions",
              },
              {
                title: "Adipose-derived MSC (AD-MSC)",
                desc: "Obtained from patient's own adipose tissue or standardized donors, also possesses chondrogenic differentiation and immunomodulatory capabilities",
              },
            ],
          },
          {
            type: "infoBox",
            bg: "bg-blue-50 p-4 rounded-lg mb-4",
            title: "Technical Points: ",
            text: "Uses high-frequency ultrasound \"visualization\" technology to guide injection, ensuring needle tip precisely reaches joint cavity target, avoiding vascular and nerve damage, improving treatment precision",
          },
          { type: "footnote", text: "Standard protocol is single injection" },
        ],
      },
      {
        icon: "heart",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        checkClass: "text-blue-500",
        numBg: "bg-blue-500",
        title: "Module 2: Functional Exercise & Rehab Guidance",
        subtitle: "Rehabilitation & Exercise",
        blocks: [
          {
            type: "cardGrid",
            cols: "grid md:grid-cols-2 gap-6",
            items: [
              {
                title: "Muscle Strength Training",
                desc: "Guide quadriceps isometric contraction training to strengthen knee stability",
              },
              {
                title: "Rehabilitation Exercise",
                desc: "Recommend scientific rehabilitation exercise programs to promote long-term joint maintenance",
              },
            ],
          },
        ],
      },
    ],
  },
  process: {
    title: "Treatment Process",
    subtitle: "Eight-step complete process designed for overseas patients",
    layout: "list",
    numBg: "bg-blue-500",
    numText: "text-lg",
    timeBadgeClass: "text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full",
    steps: [
      {
        title: "Online Consultation & Medical Record Review",
        time: "2-5 working days",
        description:
          "Submit weight-bearing knee X-rays, MRI (≥1.5T) images, treatment history and related reports for medical advisor review and preliminary indication screening to determine MSC treatment suitability",
      },
      {
        title: "Remote MDT Consultation & Plan Confirmation",
        time: "3-7 working days",
        description:
          "Joint video consultation with orthopedic and regenerative medicine physicians to determine treatment plan: MSC type, number of injections, cost estimate and schedule, providing bilingual treatment plan",
      },
      {
        title: "Medical Visa & Travel Arrangements",
        time: "7-14 working days",
        description:
          "Issue medical invitation letter, guide S2 short-term medical visa application (up to 180 days), assist with flight booking, airport transfer and accommodation near hospital, schedule MSC injection appointment",
      },
      {
        title: "Pre-admission Comprehensive Assessment",
        time: "1-2 days after arrival",
        description:
          "Complete required tests: blood count, coagulation, infectious disease screening (HIV, HBV, HCV, etc.), liver/kidney function, platelet count, ECG, knee imaging review, sign informed consent",
      },
      {
        title: "MSC Treatment Implementation",
        time: "Day 2-3 after arrival",
        description:
          "Outpatient operating room or day ward, local anesthesia or mild sedation, ultrasound-guided precise injection of standardized MSC solution (about 5-20ml) into joint cavity, treatment takes about 30-40 minutes, can walk independently after 1-2 hours observation",
      },
      {
        title: "Rehabilitation Supportive Treatment",
        time: "Throughout entire stay in China",
        description:
          "1-2 weeks after MSC injection: professional rehabilitation therapist guides functional exercises to reduce intra-articular inflammatory response; between injections: continue rehabilitation training",
      },
      {
        title: "Rehabilitation Guidance & Discharge",
        time: "Before treatment ends",
        description:
          "Rehabilitation physician creates personalized exercise plan (including home video guidance), provides English version rehabilitation manual",
      },
      {
        title: "Remote Follow-up & Health Management",
        time: "12 months post-treatment",
        description:
          "Provide mobile pain scoring (VAS) and joint function self-assessment (WOMAC) system, remote video follow-ups, MRI comparison analysis as needed",
      },
    ],
  },
  efficacy: {
    title: "Efficacy Data",
    subtitle: "Core findings from international evidence-based research 2025-2026",
    table: {
      headers: ["Study", "Core Findings", "Evidence Level"],
      headerClass: "text-blue-400",
      badgeClass: "bg-blue-500/20 text-blue-300",
      rows: [
        {
          cells: [
            "NMA (16 RCTs, 622 patients, 2025) — Stem Cell Research & Therapy",
            "MSC treatment significantly improved pain and joint function in KOA patients at 3, 6, and 12 months",
          ],
          badge: "Level I, NMA",
        },
        {
          cells: [
            "Dose-focused Meta-analysis (2025) — PubMed",
            "Intra-articular MSC treatment significantly improved KOA clinical outcomes at 12 months, low dose (≤25×10⁶ cells) was both effective and more efficient",
          ],
          badge: "Level I, Meta-analysis",
        },
        {
          cells: [
            "Double-blinded RCT (moderate to severe KOA with synovitis) — Wuhan University",
            "UC-MSC injection is safe and effective for moderate to severe KOA with synovitis, exerting therapeutic effects by inhibiting NLRP3-mediated synovial inflammation",
          ],
          badge: "Level II, RCT",
        },
        {
          cells: [
            "AD-MSC bicentric study (135 patients, 5-year follow-up) — Knee Surgery",
            "94% reported VAS improvement, 53% still had good symptom control after 5 years. Those combined with arthroscopic debridement had significantly better WOMAC and functional scores than injection alone",
          ],
          badge: "Level III, Retrospective Study",
        },
        {
          cells: [
            "Guangzhou-Hong Kong Collaboration Real-world Data (280 patients, 2025) — 5 Hong Kong Public Hospitals",
            "Pain scores significantly decreased after applying stratified treatment model, some patients cancelled surgery appointments",
          ],
          badge: "Real-world Data",
        },
      ],
    },
    statClass: "text-blue-400",
    stats: [
      { value: "60%", label: "Average Pain Score Reduction" },
      { value: "78%", label: "Joint Function Improvement Rate" },
      { value: "94%", label: "Patient-reported VAS Improvement" },
    ],
  },
  cases: {
    title: "Real Cases",
    subtitle: "Real patient feedback, witnessing efficacy",
    gridClass: "grid md:grid-cols-3 gap-8",
    imgClass: "h-48",
    accentClass: "text-blue-600",
    descriptionClass: "text-gray-600 text-sm",
    items: [
      {
        image: `${IMG}/photo-1576091160399-112ba8d25d1d-w600.jpg`,
        imageAlt: "Singapore Ms. Chen - Monthly MSC Injection, 3 Months to Say Goodbye to Knee Pain",
        title: "Singapore Ms. Chen - Monthly MSC Injection, 3 Months to Say Goodbye to Knee Pain",
        subtitle: "True Testimony of Cross-border Medical Care",
        description:
          "Ms. Chen (62, Singapore) suffered from knee pain that prevented her from going up and down stairs, limiting daily walking. At Singapore General Hospital, she received monthly high-dose mesenchymal stem cell intra-articular injections (3 consecutive times). After the 1st injection, morning stiffness was significantly reduced; after the 2nd injection, she began to steadily go up and down stairs; after completing 3 injections, Ms. Chen could easily walk 1 kilometer. MRI follow-up showed signs of repair in the joint cartilage damage area, with simultaneous reduction in synovial inflammation. Ms. Chen exclaimed: \"3 months of persistence exchanged for a lifetime of free walking.\"",
      },
      {
        image: `${IMG}/photo-1504439904031-93ded9f93e4e-w600.jpg`,
        imageAlt: "Polish Elder Jan - Stem Cell Injection Lets Him Walk Country Paths Again",
        title: "Polish Elder Jan - Stem Cell Injection Lets Him Walk Country Paths Again",
        subtitle: "From Despair to Rebirth",
        description:
          "Jan (68, Wroclaw, Poland), retired gardener, suffered from bilateral knee osteoarthritis for nearly ten years. X-ray showed medial joint space almost disappeared, doctors determined joint replacement was needed. Jan worried about surgical risks and didn't want to be bedridden for months. After researching Chinese MSC treatment options online, he flew to Hainan Boao and received a single umbilical cord mesenchymal stem cell intra-articular injection (single knee cost 36,000 RMB), combined with two weeks of professional rehabilitation training. By week 4 post-treatment, pain dropped from 8 to 3, and after 3 months Jan could walk continuously for 2 hours. \"I've started tending my garden again and can walk three kilometers every day.\" Jan plans to do the other knee next year.",
      },
      {
        image: `${IMG}/photo-1544367567-0f2fcb009e0b-w600.jpg`,
        imageAlt: "Malaysia Ms. Lin - From \"Afraid to Squat\" to Regaining Sports",
        title: "Malaysia Ms. Lin - From \"Afraid to Squat\" to Regaining Sports",
        subtitle: "True Testimony of Cross-border Medical Care",
        description:
          "Ms. Lin (62, Kuala Lumpur, Malaysia) suffered from knee arthritis for five years, K-L Grade III, severe pain going up and down stairs, unable to stand up after squatting. She tried hyaluronic acid injections and painkillers, with diminishing effects. Consulting stem cell treatment at local private hospitals, quoted about 80,000 Ringgit (about 120,000 RMB). Through us, she came to Hainan Boao, China, received adipose-derived mesenchymal stem cell single-knee injection (36,000 RMB), combined with two weeks of professional rehabilitation training. Three months after treatment, she sent a video: \"I can now squat to water flowers and practice Tai Chi for half an hour!\" Pain score dropped from 7 to 2.",
      },
    ],
  },
  services: {
    title: "Support Services",
    subtitle:
      "We provide end-to-end services from pre-departure to return for every overseas patient coming to China for MSC treatment",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    items: [
      {
        icon: "globe",
        title: "Visa Guidance & Processing",
        description: "Medical invitation letter, S2 visa material guidance, entry registration assistance",
      },
      {
        icon: "mapPin",
        title: "Arrival Reception & Transport",
        description: "Private car airport pickup, hotel and wellness apartment booking, living guidance",
      },
      {
        icon: "users",
        title: "Language Support & Translation",
        description: "Bilingual medical coordinator, precise medical terminology translation, medical record report translation",
      },
      {
        icon: "heart",
        title: "Accompanying Diagnosis & Coordination",
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
    subtitle: "Transparent pricing, #1 global competitiveness",
    costCard: {
      title: "Umbilical Cord MSC Injection (Single Knee)",
      price: "¥36,000",
      priceNote: "About $5,000 USD",
      priceClass: "text-blue-600",
      checkClass: "text-blue-500",
      borderClass: "border-2 border-blue-500",
      items: [
        "Single injection standard dose",
        "CGMP standardized product",
        "Ultrasound-guided precise injection",
      ],
      footnote: "*Actual costs subject to final hospital evaluation.",
    },
    compareCard: {
      title: "Price Comparison",
      rows: [
        { label: "US MSC Treatment", value: "$20,000-50,000", valueClass: "text-gray-400" },
        { label: "China MSC Treatment", value: "$5,000", valueClass: "text-blue-600" },
      ],
      savings: { label: "Savings Ratio", value: "75-90%" },
    },
  },
};

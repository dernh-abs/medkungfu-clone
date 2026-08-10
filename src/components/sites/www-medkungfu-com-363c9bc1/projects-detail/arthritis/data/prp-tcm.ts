// Page data for /projects/prp-tcm — PRP-TCM Joint Regeneration Therapy.
import type { PageData } from "../types";

const IMG = "/sites/www-medkungfu-com-363c9bc1/shared/images";

export const prpTcmPage: PageData = {
  mainAriaLabel: "PRP-TCM Therapy - Platelet-Rich Plasma Combined with TCM",
  hero: {
    title: "PRP-TCM Joint Regeneration Therapy",
    subtitle: "International Medical Care",
    tagline:
      "East-West Integration · Root & Symptom Treatment · Zero Wait · Safe & Compliant",
    gradientClass: "from-slate-900 via-teal-900 to-slate-900",
    accentTextClass: "text-teal-200",
    buttonClass: "bg-teal-500 hover:bg-teal-600",
  },
  intro: {
    title: "What is PRP-TCM Joint Regeneration Therapy?",
    paragraphs: [
      "PRP (Platelet-Rich Plasma) TCM Joint Regeneration Therapy is an innovative treatment combining modern regenerative medicine with traditional Chinese medicine wisdom.",
      "By extracting high-concentration platelet plasma from the patient's own blood, combined with traditional TCM therapies such as acupuncture, herbal steaming, and massage, it achieves the triple goals of cartilage repair, inflammation reduction, and functional recovery.",
    ],
    badgeText: "Internationally Certified · Safe & Effective",
    badgeColor: "text-teal-600",
    image: `${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`,
    imageAlt: "PRP Treatment",
  },
  advantages: {
    title: "Core Advantages",
    subtitle: "Four core advantages protecting your joint health",
    gridClass: "grid md:grid-cols-2 gap-8",
    items: [
      {
        icon: "activity",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        title: "East-West Integration, Enhanced Efficacy",
        description:
          "PRP promotes cartilage repair and anti-inflammatory effects through high-concentration growth factors, while TCM unblocks meridians and harmonizes qi-blood through acupuncture and herbal medicine. Clinical data shows that PRP combined with warm needle acupuncture significantly improves joint function recovery indicators, with cartilage defect repair speed increased by 2.1 times compared to PRP alone.",
      },
      {
        icon: "shield",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        title: "Complete Solution Addressing Root & Symptoms",
        description:
          "Not only resolves joint pain symptoms but also improves constitution through holistic TCM conditioning, fundamentally delaying joint degeneration for long-term stable efficacy.",
      },
      {
        icon: "clock",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        title: "Zero Waiting Time",
        description:
          "No need to wait months; from consultation to treatment completion typically takes only 1-2 weeks.",
      },
      {
        icon: "award",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        title: "Safe & Compliant",
        description:
          "PRP therapy is widely used in Chinese hospitals at all levels and clinical research, with national-level guidelines regulating TCM treatments.",
      },
    ],
  },
  indications: {
    title: "Indications",
    subtitle: "The following conditions are suitable for PRP-TCM therapy",
    accentClass: "text-teal-600",
    checkColor: "text-teal-500",
    items: [
      {
        image: `${IMG}/photo-1559757175-5700dde675bc-w600.jpg`,
        imageAlt: "Early to Mid-Stage Knee Osteoarthritis",
        title: "Early to Mid-Stage Knee Osteoarthritis",
        subtitle: "Kellgren-Lawrence Grade I-III",
        bullets: [
          "Joint pain, morning stiffness, limited mobility",
          "Poor response or intolerance to oral analgesics/sodium hyaluronate injections",
          "Desire to preserve natural joints, delay or avoid joint replacement",
        ],
      },
      {
        image: `${IMG}/photo-1612349317150-e413f6a5b16d-w600.jpg`,
        imageAlt: "Mild to Moderate Cartilage Wear",
        title: "Mild to Moderate Cartilage Wear",
        subtitle: "MRI Shows Thinning, Focal Defects",
        bullets: [
          "Cartilage thinning, focal defects",
          "Not yet full-thickness large-scale loss",
          "Suitable for PRP repair therapy",
        ],
      },
      {
        image: `${IMG}/photo-1571019614242-c5c5dee9f50b-w600.jpg`,
        imageAlt: "Chronic Sports Injury-Related Joint Disease",
        title: "Chronic Sports Injury-Related Joint Disease",
        subtitle: "Long-term Exercise-Induced Joint Issues",
        bullets: [
          "Ligament injuries",
          "Cartilage wear with joint pain",
          "Athlete joint protection",
        ],
      },
      {
        image: `${IMG}/photo-1538108149393-fbbd81895907-w600.jpg`,
        imageAlt: "Post-Arthroscopy/Microfracture Rehabilitation",
        title: "Post-Arthroscopy/Microfracture Rehabilitation",
        subtitle: "Combined PRP + TCM Post-Surgery",
        bullets: [
          "Effectively promotes cartilage repair",
          "Reduces post-operative stiffness",
          "Accelerates rehabilitation process",
        ],
      },
      {
        image: `${IMG}/photo-1505751172876-fa1923c5c528-w600.jpg`,
        imageAlt: "Intolerance to Western Medicine or Safety Concerns",
        title: "Intolerance to Western Medicine or Safety Concerns",
        subtitle: "Seeking Holistic TCM Conditioning",
        bullets: [
          "Reduce dependence on NSAIDs",
          "Holistic TCM conditioning plan",
          "Personalized treatment approach",
        ],
      },
    ],
  },
  treatment: {
    title: "Treatment Content",
    subtitle: "Three treatment modules for comprehensive joint rehabilitation",
    modules: [
      {
        icon: "activity",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        checkClass: "text-teal-500",
        numBg: "bg-teal-500",
        title: "Module 1: Core PRP Treatment",
        subtitle: "Platelet-Rich Plasma Therapy",
        blocks: [
          {
            type: "numberedGrid",
            cols: "grid md:grid-cols-3 gap-6 mb-6",
            steps: [
              { num: "1", title: "Venous Blood Draw", desc: "20-50ml blood collection" },
              { num: "2", title: "High-Speed Centrifugation", desc: "Platelet concentration 3-5x normal" },
              { num: "3", title: "Ultrasound-Guided Injection", desc: "Precise intra-articular injection" },
            ],
          },
          {
            type: "footnote",
            text: "Typically 2-4 injections per course, spaced 2-4 weeks apart, customized by physician",
          },
        ],
      },
      {
        icon: "leaf",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        checkClass: "text-teal-500",
        numBg: "bg-teal-500",
        title: "Module 2: TCM Synergistic Treatment",
        subtitle: "Traditional Chinese Medicine",
        blocks: [
          {
            type: "cardGrid",
            cols: "grid md:grid-cols-3 lg:grid-cols-5 gap-4",
            center: true,
            items: [
              { title: "Acupuncture", desc: "Immediate pain relief, meridian unblocking" },
              { title: "Herbal Medicine", desc: "Holistic conditioning, qi-blood harmonization" },
              { title: "Herbal Steaming", desc: "Local penetration, warming meridians" },
              { title: "Tui Na Massage", desc: "Joint lubrication, adhesion release" },
              { title: "Moxibustion", desc: "Warming circulation, blood stasis resolution" },
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
        title: "Module 3: Functional Exercise & Rehab Guidance",
        subtitle: "Rehabilitation & Exercise",
        blocks: [
          {
            type: "cardGrid",
            cols: "grid md:grid-cols-2 gap-6",
            items: [
              {
                title: "Muscle Strength Training",
                desc: "Quadriceps isometric contraction exercises to strengthen knee stability",
              },
              {
                title: "Traditional Exercises",
                desc: "Baduanjin, Tai Chi recommended for long-term joint maintenance",
              },
            ],
          },
        ],
      },
    ],
  },
  process: {
    title: "Treatment Process",
    subtitle: "Eight-step complete process, accompanying you from consultation to recovery",
    layout: "grid",
    gridClass: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
    numBg: "bg-teal-500",
    steps: [
      {
        title: "Online Consultation & Medical Record Review",
        description:
          "Submit weight-bearing knee X-rays, MRI images, treatment history and related reports for medical advisor review and preliminary indication screening",
      },
      {
        title: "Remote Consultation & Plan Confirmation",
        description:
          "Joint video consultation with orthopedic, rehabilitation and TCM physicians to determine treatment plan, cost estimate and schedule, providing bilingual treatment plan",
      },
      {
        title: "Medical Visa & Travel Arrangements",
        description:
          "Issue medical invitation letter, guide S2/S1 medical visa application, assist with flight booking, airport transfer and accommodation near hospital",
      },
      {
        title: "Pre-Admission Comprehensive Assessment",
        description:
          "Complete required tests: blood count, coagulation, infectious disease screening, lipids, platelet count, ECG, TCM constitution identification and knee imaging review",
      },
      {
        title: "PRP Treatment Implementation",
        description:
          "Ultrasound-guided precise intra-articular PRP injection, completed as outpatient (approx. 45-60 min), observe for 1 hour before normal activity",
      },
      {
        title: "TCM Synergistic Treatment",
        description:
          "Acupuncture on PRP injection day to promote even distribution, 2-3 sessions/week between injections, daily herbal steaming, massage and moxibustion to consolidate results",
      },
      {
        title: "Post-Treatment Rehab Guidance & Discharge",
        description:
          "Rehabilitation physician creates personalized exercise plan, arrange mail-order herbal pills/pastes for patients needing long-term TCM conditioning",
      },
      {
        title: "Remote Follow-up & Health Management",
        description:
          "Mobile pain scoring and joint function self-assessment system, remote video follow-ups, MRI comparison analysis as needed to evaluate cartilage repair progress",
      },
    ],
  },
  efficacy: {
    title: "Efficacy Data",
    subtitle: "Clinical studies confirm significant efficacy of PRP combined with TCM",
    statClass: "text-teal-400",
    stats: [
      { value: "181", label: "Patients in Clinical Study" },
      { value: "2.1x", label: "Cartilage Repair Speed Increase" },
      { value: "Significant", label: "WOMAC/VAS Score Improvement" },
    ],
  },
  cases: {
    title: "Real Cases",
    subtitle: "Real patient feedback, witnessing efficacy",
    gridClass: "grid md:grid-cols-2 gap-8",
    imgClass: "h-56",
    accentClass: "text-teal-600",
    descriptionClass: "text-gray-600",
    items: [
      {
        image: `${IMG}/photo-1546519638-68e109498ffc-w600.jpg`,
        imageAlt: "Three Transoceanic Flights Back to China for PRP",
        title: "Three Transoceanic Flights Back to China for PRP",
        subtitle: "Professional Athlete Returns to Court",
        description:
          "American professional basketball player Dwayne suffered unbearable right knee pain after a tournament in Shenzhen. Doctors precisely diagnosed patellar ligament injury, medial retinaculum injury, and cartilage wear through musculoskeletal ultrasound. After three PRP treatments, Dwayne's right knee pain was basically relieved, allowing him to return to his beloved basketball career.",
      },
      {
        image: `${IMG}/photo-1576091160399-112ba8d25d1d-w600.jpg`,
        imageAlt: "Real Results from 181 Patients – Significant Gait Improvement",
        title: "Real Results from 181 Patients – Significant Gait Improvement",
        subtitle: "Clinical Research Data",
        description:
          "Clinical study of 181 knee osteoarthritis patients confirmed: patients treated with warm needle acupuncture combined with PRP injection showed significantly better gait frequency, speed, stride length and joint support phase ratio compared to PRP-only group; WOMAC and VAS scores significantly decreased, HSS joint scores significantly increased, with no significant increase in adverse event rates.",
      },
    ],
  },
  services: {
    title: "Support Services",
    subtitle: "Thoughtful services throughout for worry-free medical care",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    items: [
      {
        icon: "globe",
        title: "Visa Guidance & Processing",
        description: "Professional team assists with medical visa",
      },
      {
        icon: "mapPin",
        title: "Arrival Reception & Transport",
        description: "Airport pickup and full transportation arrangement",
      },
      {
        icon: "users",
        title: "Language Support & Translation",
        description: "Professional medical translators throughout",
      },
      {
        icon: "heart",
        title: "Escort & Medical Coordination",
        description: "Dedicated coordinator for visit process",
      },
      {
        icon: "award",
        title: "International Medical Documents",
        description: "Medical report translation and document processing",
      },
    ],
  },
  pricing: {
    variant: "packages",
    title: "Pricing",
    subtitle: "Transparent pricing, no hidden fees",
    priceClass: "text-teal-600",
    checkClass: "text-teal-500",
    borderClass: "border-2 border-teal-500",
    footnote: "Actual costs subject to final hospital evaluation.",
    packages: [
      {
        name: "Basic Package",
        price: "$4,200",
        items: ["PRP Injections x2", "Acupuncture x4", "Rehabilitation Guidance"],
      },
      {
        name: "Standard Package",
        price: "$7,200",
        recommended: true,
        items: [
          "PRP Injections x3",
          "Acupuncture x6",
          "Herbal Steaming x6",
          "Massage & Moxibustion x3",
          "Rehabilitation Guidance",
        ],
      },
      {
        name: "Premium Package",
        price: "$11,700",
        items: [
          "PRP Injections x4",
          "Full TCM Treatment Suite",
          "Personalized Rehab Plan",
          "1-Year Remote Follow-up",
        ],
      },
    ],
  },
  contact: {
    title: "Contact Us",
    subtitle: "Consult now to start your joint recovery journey",
    iconClass: "text-teal-400",
    buttonClass: "bg-teal-500 hover:bg-teal-600",
    items: [
      { icon: "phone", title: "Phone Consultation", text: "+1- 646-296-8491" },
      { icon: "mail", title: "Email Consultation", text: "contact@medkungfu.com" },
      { icon: "mapPin", title: "Hospital Location", text: "Nanshan District, Shenzhen" },
    ],
    ctaHref: "/contact",
    ctaLabel: "Book Consultation Now",
  },
};

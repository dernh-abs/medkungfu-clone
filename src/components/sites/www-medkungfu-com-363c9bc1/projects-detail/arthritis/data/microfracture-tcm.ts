// Page data for /projects/microfracture-tcm — Microfracture-TCM Cartilage Regeneration.
import type { PageData } from "../types";

const IMG = "/sites/www-medkungfu-com-363c9bc1/shared/images";

export const microfractureTcmPage: PageData = {
  mainAriaLabel: "Microfracture Combined with TCM - Knee Cartilage Repair",
  hero: {
    eyebrow: "Cartilage Regeneration & Repair Program",
    title: "Microfracture-TCM Cartilage Regeneration",
    subtitle: "Arthroscopic Microfracture Combined with TCM Synergistic Treatment",
    tagline: "Minimally Invasive Surgery · TCM Throughout · Zero Wait · Significant Price Advantage",
    gradientClass: "from-slate-900 via-amber-900 to-slate-900",
    accentTextClass: "text-amber-200",
    buttonClass: "bg-amber-500 hover:bg-amber-600",
  },
  intro: {
    title: "What is Microfracture-TCM Cartilage Regeneration Program?",
    paragraphs: [
      "Arthroscopic Microfracture is currently the most commonly used first-line surgical method internationally for repairing small to medium cartilage defects, especially suitable for isolated cartilage injuries on weight-bearing surfaces such as femoral condyles and trochlea. Compared to open surgery, it has significant advantages including smaller trauma, faster recovery, fewer complications, and shorter hospitalization time.",
      "Traditional Chinese medicine can provide comprehensive rehabilitation support under the favorable repair conditions created by microfracture surgery, through acupuncture, herbal fumigation, moxibustion cupping, oral Chinese medicine and other means, accelerating the transformation of blood clots into fibrocartilage tissue, promoting cartilage repair, and significantly improving long-term surgical efficacy.",
    ],
    badgeText: "Minimally Invasive · TCM Synergy · Autologous Repair",
    badgeColor: "text-amber-600",
    image: `${IMG}/photo-1576091160550-2173dba999ef-w800.jpg`,
    imageAlt: "Microfracture Treatment",
  },
  advantages: {
    title: "Core Advantages",
    subtitle: "Five core advantages protecting your joint health",
    gridClass: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
    items: [
      {
        icon: "scissors",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Minimally Invasive Surgery, Small Trauma, Fast Recovery",
        description:
          "Arthroscopic microfracture is a minimally invasive surgery performed under high-definition arthroscopy, with incisions of only about 0.5-1cm, minimal tissue damage, less intraoperative bleeding, and mild post-operative pain. Can be completed as day surgery or short-term hospitalization, patients can attempt to walk with brace protection on the same day or next day after surgery.",
      },
      {
        icon: "shield",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Autologous Stem Cells, No Rejection, No Transplant-derived Infection",
        description:
          "The principle of microfracture is not implanting foreign materials, but stimulating bone marrow self-repair mechanism through drilling, fundamentally eliminating rejection reactions of allogeneic tissues and blood-borne infectious disease risks.",
      },
      {
        icon: "leaf",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "TCM Throughout Perioperative Period, Comprehensive Rehabilitation Support",
        description:
          "Pre-operative TCM conditioning: Based on TCM constitution identification, use Chinese medicine to regulate qi-blood in advance, improve periarticular circulation, creating better conditions for surgery. Immediate post-operative rehabilitation: Early intervention with acupuncture, moxibustion, and massage combined with modern rehabilitation techniques effectively reduces post-operative swelling, relieves pain, and prevents muscle atrophy and joint adhesion.",
      },
      {
        icon: "dollarSign",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Significant Global Price Advantage",
        description:
          "The total hospitalization cost for microfracture surgery in China (including arthroscopic operation, anesthesia, hospitalization rehabilitation and TCM rehabilitation) is only 1/3-1/5 of similar-level surgery in the US (about $15,000-$25,000, equivalent to 110,000-180,000 RMB).",
      },
      {
        icon: "clock",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Zero Waiting, Timely Pain Relief",
        description:
          "The waiting period for knee cartilage injury surgery in European and American public healthcare systems often reaches 6-12 months. In China, from online consultation, remote MDT consultation to hospitalization surgery, it generally takes only 2-3 weeks, greatly reducing patients' suffering from waiting.",
      },
    ],
  },
  indications: {
    title: "Indications",
    subtitle:
      "Arthroscopic microfracture combined with TCM synergistic treatment is mainly suitable for the following groups",
    accentClass: "text-amber-600",
    checkColor: "text-amber-500",
    items: [
      {
        image: `${IMG}/photo-1559757175-5700dde675bc-w600.jpg`,
        imageAlt: "Isolated Cartilage Defects of Femoral Condyle/Trochlea",
        title: "Isolated Cartilage Defects of Femoral Condyle/Trochlea",
        subtitle: "Area <2-4 cm²",
        bullets: [
          "International studies typically include patients with defect area <2 cm²",
          "Microfracture is the most commonly used surgical method for small to medium cartilage defects",
          "If defect area is slightly larger (2-4 cm²), combining with collagen cartilage scaffold technology can expand repair range",
        ],
      },
      {
        image: `${IMG}/photo-1612349317150-e413f6a5b16d-w600.jpg`,
        imageAlt: "Weight-bearing Surface Cartilage Defects of Femoral Condyle",
        title: "Weight-bearing Surface Cartilage Defects of Femoral Condyle",
        subtitle: "Outerbridge Grade III-IV",
        bullets: [
          "Outerbridge Grade III (cartilage fissures deep to bone surface)",
          "Outerbridge Grade IV (full-thickness cartilage detachment, subchondral bone exposed)",
          "Suitable for microfracture repair treatment",
        ],
      },
      {
        image: `${IMG}/photo-1571019614242-c5c5dee9f50b-w600.jpg`,
        imageAlt: "Early to Mid-stage KOA with Mechanical Symptoms",
        title: "Early to Mid-stage KOA with Mechanical Symptoms",
        subtitle: "K-L Grade I-III",
        bullets: [
          "Mechanical symptoms such as joint locking, clicking, catching, buckling",
          "Poor response to conservative treatment (oral medications, physical therapy)",
          "Early to mid-stage patients without severe widespread joint space narrowing",
        ],
      },
      {
        image: `${IMG}/photo-1538108149393-fbbd81895907-w600.jpg`,
        imageAlt: "Young Active Population",
        title: "Young Active Population",
        subtitle: "18-50 years old, desire to return to sports",
        bullets: [
          "Young sports enthusiasts with cartilage defects due to sports injuries",
          "Higher probability of returning to sports ability after microfracture surgery",
          "Especially suitable for basketball, football, running and other sports injury patients",
        ],
      },
      {
        image: `${IMG}/photo-1505751172876-fa1923c5c528-w600.jpg`,
        imageAlt: "Those Refusing or Temporarily Unsuitable for Cartilage Transplantation/Joint Replacement",
        title: "Those Refusing or Temporarily Unsuitable for Cartilage Transplantation/Joint Replacement",
        subtitle: "Seeking more cost-effective options",
        bullets: [
          "Concerns about technical costs or surgical trauma for large cartilage defects",
          "Hope to choose more cost-effective single-stage surgical options",
          "Patients hoping to maximize preservation of joint function",
        ],
      },
    ],
  },
  treatment: {
    title: "Treatment Content",
    subtitle: "Two major treatment modules, perfect combination of surgery and TCM",
    modules: [
      {
        icon: "scissors",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        checkClass: "text-amber-500",
        numBg: "bg-amber-500",
        title: "Module 1: Arthroscopic Microfracture Surgery",
        subtitle: "Arthroscopic Microfracture Surgery",
        blocks: [
          {
            type: "numberedList",
            steps: [
              {
                num: "1",
                title: "Anesthesia Method",
                desc: "General anesthesia or regional block anesthesia (anesthesiologist determines plan based on patient condition)",
              },
              {
                num: "2",
                title: "Step 1: Arthroscopic Exploration & Assessment",
                desc: "Comprehensive assessment of cartilage defect location, area, depth and surrounding cartilage status under high-definition arthroscopy",
              },
              {
                num: "3",
                title: "Step 2: Defect Area Debridement & Preparation",
                desc: "Debride unstable cartilage edges in defect area, expose subchondral bone plate, prepare for microfracture drilling",
              },
              {
                num: "4",
                title: "Step 3: Microfracture Drilling",
                desc: "Use specialized microfracture instruments to drill holes in subchondral bone plate, depth about 3-4mm, hole spacing about 3-4mm, stimulating bone marrow to release stem cells and growth factors",
              },
              {
                num: "5",
                title: "Step 4: Blood Clot Formation",
                desc: "Bone marrow fluid exudation forms blood clot containing stem cells and growth factors, providing foundation for fibrocartilage regeneration",
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
        title: "Module 2: TCM Perioperative Synergistic Treatment",
        subtitle: "TCM Perioperative Care",
        blocks: [
          {
            type: "phaseGroupList",
            groups: [
              {
                title: "Pre-operative TCM Conditioning (1-2 weeks before surgery)",
                titleColor: "text-amber-600",
                bullets: [
                  "TCM constitution identification (four diagnostic methods)",
                  "Chinese medicine to improve joint circulation and nutritional status in advance",
                  "Appropriate acupuncture to reduce pre-operative pain",
                ],
              },
              {
                title: "Post-operative Rehabilitation Phase (Days 1-14)",
                titleColor: "text-amber-600",
                bullets: [
                  "Acupuncture therapy: unblock meridians, relieve pain",
                  "Moxibustion: warm meridians, dispel cold, promote local circulation",
                  "External application/herbal steaming: reduce swelling, relieve pain, activate blood circulation",
                  "Oral Chinese medicine: syndrome differentiation treatment, holistic conditioning",
                  "Massage: relax muscles, prevent adhesion",
                ],
              },
              {
                title: "Long-term Functional Rehabilitation Phase",
                titleColor: "text-amber-600",
                bullets: [
                  "TCM health exercises: Baduanjin, Tai Chi",
                  "Quadriceps strength training: strengthen knee stability",
                ],
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
    numBg: "bg-amber-500",
    numText: "text-lg",
    timeBadgeClass: "text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full",
    steps: [
      {
        title: "Online Consultation & Medical Record Review",
        time: "2-5 working days",
        description:
          "Submit weight-bearing knee X-rays, MRI (≥1.5T) images, treatment history and joint function scores (VAS, WOMAC, IKDC, etc.). Medical advisors review materials and conduct preliminary indication screening based on cartilage defect area, location, Outerbridge grade and K-L grade to determine suitability for microfracture",
      },
      {
        title: "Remote MDT Consultation",
        time: "3-7 working days",
        description:
          "Joint video consultation with orthopedic, rehabilitation medicine and TCM physicians. Physicians determine personalized treatment plan based on your cartilage defect situation, TCM constitution type and individual conditions: whether to combine PRP or collagen scaffold, post-operative TCM rehabilitation plan combination, cost estimate and treatment schedule",
      },
      {
        title: "Medical Visa & Travel Arrangements",
        time: "7-14 working days",
        description:
          "Issue medical invitation letter, guide S2 short-term medical visa application (up to 180 days). Assist with flight booking, airport transfer and accommodation near hospital, coordinate with arthroscopic microfracture partner hospitals to schedule surgery appointment",
      },
      {
        title: "Pre-admission Comprehensive Assessment",
        time: "1-2 days after arrival",
        description:
          "Complete required tests: blood count, coagulation, infectious disease screening (HIV, HBV, HCV, etc.), liver/kidney function, ECG, cardiopulmonary function assessment, etc. TCM constitution identification and knee imaging review. Sign bilingual informed consent. TCM physician prescribes pre-operative conditioning Chinese medicine based on constitution",
      },
      {
        title: "Arthroscopic Microfracture Implementation",
        time: "Day 2-3 after arrival",
        description:
          "General or regional anesthesia after admission, arthroscopic microfracture surgery (surgery duration about 45-90 minutes, depending on number of defects and combined procedures). Observe in anesthesia recovery room for 1-2 hours after surgery then transfer to ward. Strictly limit activity on surgery day",
      },
      {
        title: "Hospitalization Rehabilitation & TCM Synergistic Treatment",
        time: "3-7 days post-op hospitalization",
        description:
          "Post-op days 1-2: Western analgesic management + passive joint movement training begins; acupuncture or moxibustion immediately intervenes to reduce post-operative pain and swelling. Post-op days 3-4: Oral Chinese medicine starts, syndrome differentiation treatment focusing on \"activating blood and resolving stasis\"; external herbal application/steaming begins. Post-op days 5-7: Massage techniques gradually intervene, guide patients to attempt partial weight-bearing walking under brace protection",
      },
      {
        title: "Discharge Rehabilitation Guidance & Return Plan",
        time: "Before treatment ends",
        description:
          "Rehabilitation physician develops detailed functional exercise plan (including video tutorials and written bilingual instructions). Arrange mail-order Chinese medicine pills/pastes service for patients needing long-term TCM conditioning. Provide bilingual rehabilitation manual clarifying key points such as brace use, weight-bearing restrictions, crutch usage instructions",
      },
      {
        title: "Remote Follow-up & Health Management",
        time: "12 months post-op",
        description:
          "Provide mobile pain scoring (VAS) and joint function self-assessment (KOOS, IKDC) system. Remote video follow-ups, TCM physicians adjust Chinese medicine conditioning recommendations based on recovery stage and seasonal changes. Guide local MRI imaging comparison analysis as needed to evaluate cartilage repair tissue progress (MOCART score)",
      },
    ],
  },
  efficacy: {
    title: "Efficacy Data",
    subtitle: "Post-operative recovery timeline and expected outcomes",
    timeline: {
      title: "Efficacy Timeline",
      items: [
        {
          time: "Post-op 0-2 weeks (Strict Protection Phase)",
          timeClass: "w-40 flex-shrink-0 text-amber-400 font-semibold text-sm",
          text: "Hospitalization or outpatient observation, strictly limit weight-bearing (crutches required), focus on reducing swelling and pain, TCM acupuncture + external herbal application significantly relieve swelling",
        },
        {
          time: "Post-op 2-6 weeks (Protective Weight-bearing Phase)",
          timeClass: "w-40 flex-shrink-0 text-amber-400 font-semibold text-sm",
          text: "Continue non-weight-bearing/reduced load activities, joint passive range of motion gradually increases to over 90°, blood clot begins transforming into fibrocartilage tissue",
        },
        {
          time: "Post-op 6 weeks - 3 months",
          timeClass: "w-40 flex-shrink-0 text-amber-400 font-semibold text-sm",
          text: "Gradually transition to full weight-bearing, significantly improve joint stiffness and mobility, most patients have basically painless daily walking",
        },
        {
          time: "Post-op 3-6 months",
          timeClass: "w-40 flex-shrink-0 text-amber-400 font-semibold text-sm",
          text: "Quadriceps strength gradually recovers, can complete daily activities, slowly climb stairs, light activities",
        },
        {
          time: "Post-op 6-12 months",
          timeClass: "w-40 flex-shrink-0 text-amber-400 font-semibold text-sm",
          text: "With post-operative TCM conditioning and functional exercise, most patients can resume low-intensity sports activities (such as swimming, cycling, jogging), ICRS and KOOS scores reach higher levels",
        },
      ],
    },
    statClass: "text-amber-400",
    stats: [
      { value: "0.5-1cm", label: "Minimally Invasive Incision Size" },
      { value: "45-90min", label: "Surgery Duration" },
      { value: "6-12月", label: "Return to Sports Function" },
    ],
  },
  cases: {
    title: "Real Cases",
    subtitle: "Real patient feedback, witnessing efficacy",
    gridClass: "grid md:grid-cols-3 gap-8",
    imgClass: "h-48",
    accentClass: "text-amber-600",
    descriptionClass: "text-gray-600 text-sm",
    items: [
      {
        image: `${IMG}/photo-1546519638-68e109498ffc-w600.jpg`,
        imageAlt: "Canadian Hockey Player Chris - Microfracture + PRP Saves Career",
        title: "Canadian Hockey Player Chris - Microfracture + PRP Saves Career",
        subtitle: "From Despair to Return to Ice",
        description:
          "Chris (29, Montreal, Canada), semi-professional hockey player. During training, suffered Outerbridge Grade IV cartilage defect in right knee medial femoral condyle (area about 1.8 cm²), MRI showed subchondral bone exposure. Canadian orthopedic surgeon recommended cartilage transplantation with waiting period of over 6 months. Through agent search, contacted Chinese Sports Medicine Center, received microfracture combined with PRP injection + 4 weeks post-operative TCM rehabilitation (10 acupuncture sessions + daily herbal fumigation/washing + 8 massage sessions). Could partially weight-bear walk at 6 weeks post-op, resumed jogging at 3 months, returned to ice at 6 months, 12-month follow-up MRI showed good fibrocartilage coverage in defect area (MOCART 78 points). \"In China, I received comprehensive protection throughout surgery and TCM rehabilitation, this was the most correct decision of my career.\"",
      },
      {
        image: `${IMG}/photo-1576091160399-112ba8d25d1d-w600.jpg`,
        imageAlt: "Australian Hiking Enthusiast Peter - From Shattered Mountain Dreams to Return to National Park",
        title: "Australian Hiking Enthusiast Peter - From Shattered Mountain Dreams to Return to National Park",
        subtitle: "18-month Wait vs 3-week China Trip",
        description:
          "Peter (52, Melbourne, Australia) is a hiking enthusiast. Right knee pain gradually worsened to unable to complete hikes over 1 hour, MRI diagnosed large-area cartilage defect in femoral trochlea (about 2.2 cm², Outerbridge Grade III-IV). Australian public healthcare assessed surgery waiting period of 18 months. Self-funded trip to China for arthroscopic microfracture + collagen cartilage scaffold implantation, post-operative comprehensive TCM rehabilitation program (oral Chinese medicine + moxibustion + acupuncture, total 4 weeks). Could independently walk 1.5 hours at 4 months post-op, completed 5km hike at 8 months, returned to Blue Mountains National Park at 12 months completing 10km hiking trail. \"The Baduanjin taught by the TCM physician, I now practice every day, my knees are more flexible than before.\"",
      },
      {
        image: `${IMG}/photo-1504439904031-93ded9f93e4e-w600.jpg`,
        imageAlt: "British Cycling Enthusiast Richard - Microfracture Gives New Life to Both Knees",
        title: "British Cycling Enthusiast Richard - Microfracture Gives New Life to Both Knees",
        subtitle: "Saving Surgery Worth Tens of Thousands of Pounds",
        description:
          "Richard (45, London, UK) developed bilateral knee osteoarthritis from years of long-distance cycling, isolated cartilage defect in left knee medial femoral condyle (area about 1.5 cm²), VAS pain score 6-7, weak pedaling during cycling, unable to complete full crank stroke. Waited 6 months for specialist assessment in UK NHS without getting scheduled for surgery. Came to China through medical tourism agency, received left knee microfracture + PRP injection combined with comprehensive TCM rehabilitation (oral Chinese medicine + acupuncture + fumigation + massage, total course 6 weeks). Left knee VAS dropped to 1 at 6 months post-op, cycling speed increased from 22km/h to 32km/h, completed 120km cycling challenge after 1 year. He also received preventive PRP injection for right knee and regular TCM conditioning, flying back to China annually for follow-up. \"I never thought that China, for less than the cost of a suit in London, saved me from a surgery worth tens of thousands of pounds.\"",
      },
    ],
  },
  services: {
    title: "Support Services",
    subtitle:
      "We provide end-to-end services from pre-departure to return for every overseas patient coming to China for Microfracture combined with TCM treatment",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
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
    subtitle: "Transparent pricing, significant global price advantage",
    costCard: {
      title: "Complete Microfracture Surgery Reference Cost",
      price: "$4,000-8,000",
      priceNote: "Based on patient specific conditions",
      priceClass: "text-amber-600",
      checkClass: "text-amber-500",
      borderClass: "border-2 border-amber-500",
      items: [
        "Arthroscopic microfracture surgery",
        "Anesthesia cost",
        "Hospitalization rehabilitation",
        "TCM rehabilitation treatment",
        "Pre and post-operative examinations",
      ],
      footnote: "*If combined with PRP or cartilage scaffold, costs increase accordingly",
      footnote2: "*Subject to actual treatment cost invoice issued by hospital during visit",
    },
    compareCard: {
      title: "Price Comparison",
      rows: [
        { label: "US Same-level Surgery", value: "$15,000-25,000", valueClass: "text-gray-400" },
        { label: "China Microfracture Surgery", value: "$4,000-8,000", valueClass: "text-amber-600" },
      ],
      savings: { label: "Savings Ratio", value: "60-80%" },
    },
  },
};

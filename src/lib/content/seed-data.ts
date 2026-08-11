// Source-of-truth seed data for the Unified Content Document (UCD).
//
// This module mirrors the hardcoded arrays/strings in the home page components
// (src/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/*.tsx) and
// shared/Site{Header,Footer}.tsx. The seed script (scripts/seed-ucd.ts) reads
// this plus the i18n TRANSLATIONS/RU maps to generate the `.content/` JSON
// files and `extraction-map.json`.
//
// When you add hardcoded content to a component, update the corresponding
// entry here and run `npm run seed`. The validator step will warn about
// component hardcoded data not covered here.
//
// NOTE: A .ts module is used (rather than extraction-map.json) so the data is
// typed and editable in-place; the seed script emits extraction-map.json from
// this for tooling that expects JSON.

import type {
  HomePageData,
  Navigation,
} from "./content-schema";

export const HOME_PAGE_SEED: HomePageData = {
  order: [
    "hero",
    "cityStrip",
    "services",
    "trustStats",
    "ourPromise",
    "medicalProjects",
    "serviceProcess",
    "patientStories",
    "featuredFaq",
    "cta",
  ],
  sections: {
    hero: {
      statKeys: ["hero.trustPoint1", "hero.trustPoint2", "hero.trustPoint3"],
      image:
        "/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/images/medkungfu-doctor-hero.jpg",
      imageAlt: "Professional Chinese female doctor providing medical consultation",
      ctaLinks: { explore: "/projects", book: "/contact" },
    },
    cityStrip: {
      heading: "SERVING PATIENTS IN",
      cities: [
        { name: "Shanghai", dimmed: false },
        { name: "Guangzhou", dimmed: false },
        { name: "Hainan", dimmed: false },
        { name: "Beijing", dimmed: true },
        { name: "Shenzhen", dimmed: true },
        { name: "Chengdu", dimmed: true },
      ],
    },
    services: {
      items: [
        { icon: "building", titleKey: "home.service1Title", descKey: "home.service1Desc" },
        { icon: "languages", titleKey: "home.service2Title", descKey: "home.service2Desc" },
        { icon: "users", titleKey: "home.service3Title", descKey: "home.service3Desc" },
      ],
      linkHref: "/services",
      viewAllKey: "home.viewAllServices",
    },
    trustStats: {
      items: [
        { icon: "building", key: "trust.hospitals" },
        { icon: "map-pin", key: "trust.cities" },
        { icon: "message-circle", key: "trust.patients" },
        { icon: "clock", key: "trust.response" },
      ],
    },
    ourPromise: {
      headingKey: "home.ourPromise",
      items: [
        { icon: "shield", titleKey: "values.direct", descKey: "home.valueDescDirect" },
        { icon: "zap", titleKey: "values.speed", descKey: "home.valueDescSpeed" },
        { icon: "user-check", titleKey: "values.custom", descKey: "home.valueDescCustom" },
        { icon: "file-text", titleKey: "values.transparent", descKey: "home.valueDescTransparent" },
      ],
    },
    medicalProjects: {
      heading: "Advantageous Medical Projects",
      items: [
        { icon: "activity", titleKey: "projects.oncology", subtitle: "Heavy Ion & CAR-T Therapy" },
        { icon: "dna", titleKey: "projects.regenerative", subtitle: "Stem Cell Treatment" },
        { icon: "leaf", titleKey: "projects.integrative", subtitle: "TCM & Western Medicine" },
        { icon: "stethoscope", titleKey: "projects.specialties", subtitle: "Cardiology, Orthopedics & More" },
      ],
      linkHref: "/projects",
    },
    serviceProcess: {
      headingKey: "process.title",
      items: [
        { icon: "clipboard-check", number: "01", titleKey: "process.step1", progress: 22 },
        { icon: "stethoscope", number: "02", titleKey: "process.step2", progress: 32 },
        { icon: "file-text", number: "03", titleKey: "process.step3", progress: 48 },
        { icon: "plane", number: "04", titleKey: "process.step4", progress: 64 },
        { icon: "map-pin", number: "05", titleKey: "process.step5", progress: 80 },
        { icon: "building", number: "06", titleKey: "process.step6", progress: 96 },
      ],
    },
    patientStories: {
      heading: "Patient Stories",
      items: [
        {
          quote:
            "From the despair of recurrence to complete remission, CAR-T therapy in China gave me a second life.",
          image:
            "/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/images/patient-se-asia-lymphoma.jpg",
          name: "Patient from Southeast Asia, Recurrent Lymphoma",
        },
        {
          quote:
            "Heavy ion therapy for prostate cancer: short course, minimal side effects, and costs far less than in Europe.",
          image:
            "/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/images/patient-middle-east.jpg",
          name: "Patient from the Middle East",
        },
        {
          quote: "TCM is amazing. It allowed me to walk normally again.",
          image:
            "/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/images/patient-se-asia-osteoarthritis.jpg",
          name: "Patient from Southeast Asia, Osteoarthritis",
        },
      ],
    },
    featuredFaq: {
      heading: "Questions International Patients Ask First",
      subtitle:
        "Understand service boundaries, record preparation, hospital matching, costs, timelines, and follow-up before deciding whether to start a China medical assessment.",
      linkText: "Read all 72 FAQs",
      linkHref: "/faq",
      items: [
        {
          question: "When should I consider cross-border medical care?",
          answer:
            "You may consider cross-border care when local specialist access is limited, waiting times are long, treatment results are unsatisfactory, costs are too high, or you want a second medical opinion. It is not the default choice for every patient, but it can give some families more options, resources, and coordinated support.",
          href: "/faq#faq-1",
        },
        {
          question: "Is MedKungfu a hospital? Does it provide diagnosis or treatment directly?",
          answer:
            "No. MedKungfu is not a hospital and does not directly provide diagnosis or treatment. We are a cross-border medical resource and service coordination provider, helping with record organization, translation, hospital matching, appointment coordination, visa and accommodation support, medical interpretation, escort, and follow-up communication. Diagnosis and treatment are provided by hospitals and specialists.",
          href: "/faq#faq-5",
        },
        {
          question: "Can MedKungfu first help me judge whether coming to China is worthwhile?",
          answer:
            "Yes. Patients can submit basic information, medical records, test reports, and imaging. MedKungfu can organize the information and suggest an initial pathway based on available resources. If the materials suggest that travel to China is not suitable, the judgment of medical institutions and specialists should come first.",
          href: "/faq#faq-7",
        },
        {
          question: "What medical records and test materials should I prepare?",
          answer:
            "Usually you should prepare diagnosis records, previous treatment notes, medication history, surgery records, imaging files, lab reports, pathology reports, and a summary of current symptoms and treatment goals. More complete materials help doctors assess faster. If records are incomplete, MedKungfu can first consult and list what to supplement.",
          href: "/faq#faq-8",
        },
        {
          question: "How are costs and timelines for treatment in China estimated?",
          answer:
            "Costs and timelines depend on disease complexity, tests, treatment plan, hospital choice, admission arrangements, service package, accommodation, transport, and follow-up period. MedKungfu can help create an initial estimate, but final costs and timelines depend on the hospital plan, actual treatment, and service agreement.",
          href: "/faq#faq-10",
        },
        {
          question: "How will my medical records and privacy be protected?",
          answer:
            "Medical records, imaging, and identity information are sensitive and should only be used for medical resource matching, hospital assessment, and service communication. Before submitting materials, patients should confirm the service entity, purpose of use, sharing scope, and privacy protections. MedKungfu follows a minimum-necessary principle.",
          href: "/faq#faq-11",
        },
        {
          question: "Can I continue follow-up after returning home?",
          answer:
            "Remote follow-up coordination may be arranged according to the service package and hospital plan. Common support includes review reminders, recovery updates, test report transfer, doctor communication, and explanation of later recommendations. Follow-up does not replace emergency care or routine management by local doctors.",
          href: "/faq#faq-12",
        },
        {
          question: "Will MedKungfu match hospitals and specialists?",
          answer:
            "Yes. MedKungfu helps match suitable hospitals, specialties, or partner institutions based on condition, treatment goals, budget, timing, language needs, and service needs. Final diagnosis and treatment plans are determined by medical institutions and specialists.",
          href: "/faq#faq-26",
        },
        {
          question: "What service packages does MedKungfu offer?",
          answer:
            "Current materials include light, standard, advanced, and VIP service packages. Different packages correspond to different service depth, escort frequency, translation support, accommodation assistance, review arrangements, and follow-up duration.",
          href: "/faq#faq-35",
        },
        {
          question: "Which hospitals does MedKungfu work with?",
          answer:
            "MedKungFu has established partnerships with many renowned Chinese hospitals, including Ruijin Hospital Hainan, Sun Yat-sen Memorial Hospital, Longhua Hospital affiliated with Shanghai University of TCM, Shanghai Guanghua Hospital of Integrated Traditional Chinese and Western Medicine, Shanghai Jiahui International Hospital, and GoBroad Healthcare Group. Available resources vary by condition, schedule, and service capacity.",
          href: "/faq#faq-38",
        },
      ],
    },
    cta: {
      interestOptions: [
        { value: "oncology", label: "Oncology" },
        { value: "cardiology", label: "Cardiology" },
        { value: "orthopedics", label: "Orthopedics" },
        { value: "regenerative", label: "Regenerative Medicine" },
        { value: "integrative", label: "Integrative Medicine" },
        { value: "others", label: "Others" },
      ],
      messagePlaceholder: "Please describe your medical needs or questions in detail...",
    },
  },
};

export const NAVIGATION_SEED: Navigation = {
  main: [
    { label: "Home", href: "/" },
    { label: "Medical Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Hospitals", href: "/hospitals" },
    { label: "Patient Stories", href: "/stories" },
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ],
  footer: {
    quickLinks: [
      { label: "Medical Projects", href: "/projects" },
      { label: "Our Services", href: "/services" },
      { label: "Partner Hospitals", href: "/hospitals" },
      { label: "Patient Stories", href: "/stories" },
      { label: "Why China Medical", href: "/why-china" },
    ],
    supportLinks: [
      { label: "FAQ", href: "/faq" },
      { label: "Resources", href: "/resources" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

export const SITE_KEY = "www-medkungfu-com-363c9bc1";

// ─── Placeholder pages (non-home) ───────────────────────────────────────
//
// These are seed-only scaffold pages so the Studio can edit pages other than
// `home`. Each is three self-contained `pageSection`s (hero / content / cta).
// They carry plain English placeholder copy that editors replace later. No
// i18n translation keys — see PageSection for the rationale.

export const PLACEHOLDER_PAGE_SLUGS = [
  "projects",
  "services",
  "hospitals",
  "stories",
  "about",
  "faq",
  "contact",
  "why-china",
] as const;

type PlaceholderSection = {
  type: "pageSection";
  kind: "hero" | "content" | "cta";
  title: string;
  body: string;
  image: string;
  linkHref: string;
  linkLabel: string;
};

export type PlaceholderPage = {
  order: string[];
  sections: Record<string, PlaceholderSection>;
};

function ph(
  heroTitle: string,
  heroBody: string,
  contentTitle: string,
  contentBody: string,
  ctaTitle: string,
  ctaBody: string,
  ctaHref: string,
  ctaLabel: string
): PlaceholderPage {
  return {
    order: ["hero", "content", "cta"],
    sections: {
      hero: {
        type: "pageSection",
        kind: "hero",
        title: heroTitle,
        body: heroBody,
        image: "",
        linkHref: "",
        linkLabel: "",
      },
      content: {
        type: "pageSection",
        kind: "content",
        title: contentTitle,
        body: contentBody,
        image: "",
        linkHref: "",
        linkLabel: "",
      },
      cta: {
        type: "pageSection",
        kind: "cta",
        title: ctaTitle,
        body: ctaBody,
        image: "",
        linkHref: ctaHref,
        linkLabel: ctaLabel,
      },
    },
  };
}

export const PLACEHOLDER_PAGES: Record<string, PlaceholderPage> = {
  projects: ph(
    "Medical Programs in China",
    "Explore China's leading medical programs across oncology, regenerative medicine, and integrative care — delivered by world-class hospitals and specialists.",
    "Featured Programs",
    "From heavy-ion and proton therapy to CAR-T cell therapy, stem-cell treatments, and TCM-integrated specialties, our curated programs connect you with China's most advanced clinical capabilities.",
    "Start Your Assessment",
    "Tell us about your medical needs and we will match the right hospital and specialist for your case.",
    "/contact",
    "Contact Us"
  ),
  services: ph(
    "Cross-Border Medical Coordination",
    "End-to-end support for international patients — from medical records and translation to hospital matching, travel, and follow-up care.",
    "Service Packages",
    "Choose the level of support that fits your journey: light, standard, advanced, or full VIP coordination — each backed by transparent pricing and our refund guarantee.",
    "Talk to a Coordinator",
    "Our team helps you prepare records and plan your China medical journey with confidence.",
    "/contact",
    "Contact Us"
  ),
  hospitals: ph(
    "Partner Hospitals",
    "A trusted network of renowned Chinese hospitals and specialist institutions, selected for clinical excellence and international patient experience.",
    "Hospital Network",
    "We partner with top-tier institutions across Beijing, Shanghai, Guangzhou, and Hainan — including proton & heavy-ion centers, comprehensive cancer hospitals, and TCM leaders.",
    "Request a Match",
    "We match your condition to the most suitable hospital and specialist based on your medical profile.",
    "/contact",
    "Contact Us"
  ),
  stories: ph(
    "Patient Stories",
    "Real outcomes from international patients who came to China for care — in their own words.",
    "Outcomes & Testimonials",
    "From complex oncology cases to regenerative therapies, these stories show what careful coordination and world-class medicine can achieve together.",
    "Share Your Story",
    "If you have completed treatment with us, we would love to hear how your journey went.",
    "/contact",
    "Contact Us"
  ),
  about: ph(
    "About MedKungfu",
    "We connect international patients with China's best medical resources — with empathy, transparency, and end-to-end coordination.",
    "Who We Are",
    "MedKungfu is a specialized international medical placement service. We organize the full cross-border care process — matching hospitals, managing records, translation, visas, accommodation, escort, and follow-up.",
    "Work With Us",
    "Hospitals and partners are welcome to collaborate with us to serve global patients.",
    "/contact",
    "Contact Us"
  ),
  faq: ph(
    "Frequently Asked Questions",
    "Answers to the questions international patients ask before traveling to China for medical care.",
    "Common Questions",
    "Learn about costs, timelines, preparation, and what to expect at each stage of your medical journey with MedKungfu.",
    "Browse All FAQs",
    "Find detailed guidance on eligibility, documents, and post-treatment follow-up.",
    "/faq",
    "Read More"
  ),
  contact: ph(
    "Contact Us",
    "Reach our coordination team for an initial assessment — we respond within one business day.",
    "Get in Touch",
    "Email us at contact@medkungfu.com or reach us on WhatsApp. Our multilingual team is ready to help you take the first step.",
    "Submit an Inquiry",
    "Send your medical needs and we will respond with a personalized assessment.",
    "/contact",
    "Contact Us"
  ),
  "why-china": ph(
    "Why China Medical",
    "World-class care, advanced technology, and cost-effective treatment — making China a leading destination for international patients.",
    "The China Advantage",
    "From proton therapy centers and CAR-T clinical leadership to TCM integration and medical-tourism-friendly access, China offers a unique combination of quality, speed, and value.",
    "Compare Your Options",
    "See how China medical care compares for your condition and why patients choose it.",
    "/contact",
    "Contact Us"
  ),
};

/** Short descriptions used by the /studio page-listing cards. */
export const PAGE_DESCRIPTIONS: Record<string, string> = {
  home: "Hero, services, trust stats, patient stories, FAQ, CTA",
  projects: "Medical projects overview and program listings",
  services: "Cross-border medical service packages",
  hospitals: "Partner hospital network and specialties",
  stories: "Patient stories and outcomes",
  about: "About MedKungfu and our mission",
  faq: "Frequently asked questions",
  contact: "Contact and inquiry information",
  "why-china": "Why choose China for medical care",
};

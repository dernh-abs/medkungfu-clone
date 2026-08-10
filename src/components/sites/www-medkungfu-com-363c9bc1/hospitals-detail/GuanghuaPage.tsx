// Guanghua Hospital detail page — transcribed verbatim from
// docs/research/www-medkungfu-com-363c9bc1/guanghua/rendered.html.
// Teal/green theme matching the captured DOM.
import Link from "next/link";

import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

const STATS = [
  { value: "1958", label: "Founded" },
  { value: "600 beds", label: "Planned Beds" },
  { value: "Grade 3A", label: "Hospital Grade" },
  { value: "2 Campuses", label: "Xinhua & Yan'an Rd" },
  { value: ">80%", label: "Joint Disease Beds" },
];

const SPECIALTIES = [
  {
    badge: "National TCM Advantage Specialty",
    title: "Rheumatology & Immunology",
    subtitle: "Regional TCM Diagnosis & Treatment Center for Rheumatic Diseases",
    items: [
      "Expertise in rheumatoid arthritis, ankylosing spondylitis, osteoarthritis, gouty arthritis, SLE",
      "Advanced testing: anti-CCP antibody, HLA-B27, GPI antigen",
      "Early diagnosis accuracy at national leading level",
      "Proprietary TCM preparations including snake-based formulations",
    ],
  },
  {
    badge: "National TCM Advantage Specialty",
    title: "Orthopedics & Traumatology",
    subtitle: "Sub-specialties: joint surgery, spine surgery, hand & foot trauma",
    items: [
      "Systematic hip, knee, shoulder, elbow, ankle joint replacement & revision",
      "High reputation for joint replacement volume in Shanghai and nationwide",
      "Hip & knee replacement volume ranks among top in Shanghai",
      "Elbow & ankle replacement volume ranks among top nationally",
      "Complex surgeries: cervical RA anterior/posterior approach, AS kyphosis correction",
    ],
  },
  {
    badge: "Key Construction Specialty of NTCM",
    title: "Joint Medicine",
    subtitle: "Shanghai TCM Featured Specialty & Key Discipline",
    items: [
      "Focus on pharmacological & integrated treatment for RA, AS and other rheumatic diseases",
      "Rich experience in early diagnosis and integrated Chinese-Western collaborative treatment",
    ],
  },
  {
    badge: "Shanghai TCM Advantage Specialty",
    title: "Rehabilitation",
    subtitle: 'National "Flagship" Department for Chinese-Western Collaboration',
    items: [
      "Featured integrated TCM diagnosis & treatment for neck, shoulder, waist & leg pain",
      "Comprehensive use of needle-knife, silver needle, warm acupuncture, tuina, chiropractic",
      "Combined with modern techniques: ozone, radiofrequency, needle-knife endoscopy",
      "Significant efficacy in spinal joint diseases and periarticular soft tissue pain",
    ],
  },
  {
    badge: "City's Only",
    title: "Gout Department",
    subtitle: "The city's only 24-hour gout emergency service",
    items: [
      "Focus on integrated treatment for acute & chronic gouty arthritis",
      "24/7 emergency medical services",
    ],
  },
  {
    badge: "Integrated Chinese-Western Feature",
    title: "Oncology",
    subtitle: "Three directions: medical oncology, interventional oncology, integrated treatment",
    items: [
      "From early cancer diagnosis to chemotherapy, immunotherapy, targeted therapy, TCM & integrated treatment",
      "Comprehensive diagnostic & therapeutic services",
    ],
  },
];

interface Expert {
  name: string;
  role: string;
  bio: string;
}

interface ExpertBlock {
  department: string;
  featured?: { name: string; role: string };
  experts: Expert[];
}

const EXPERT_BLOCKS: ExpertBlock[] = [
  {
    department: "Rheumatology & Immunology",
    featured: { name: "He Dongyi", role: "Discipline Leader" },
    experts: [
      {
        name: "Yang Xiaoling",
        role: "Chief Physician",
        bio: `Graduated from Shanghai University of TCM in 1993, Director of Gout Dept since 2005
Studied under renowned rheumatologist Ni Liqing
Expert in integrated treatment of gout, AS, osteoporosis, SLE`,
      },
    ],
  },
  {
    department: "Joint Surgery",
    experts: [
      {
        name: "Ouyang Guilin",
        role: "Director of Joint Surgery, Chief Physician, PhD, Master Supervisor",
        bio: `Expert in artificial knee, hip, elbow, ankle, shoulder joint replacement & revision
Rich experience in surgical treatment of RA, AS, osteoarthritis`,
      },
      {
        name: "He Yong",
        role: "Director of Joint Orthopedic Surgery, Chief Physician, MD, Master Supervisor",
        bio: `Experienced in shoulder, knee, hip, elbow joint disease treatment
Expert in arthroscopic minimally invasive surgery & joint replacement
Nominated for Shanghai "Silver Snake Award" & "Youth May 4th Medal"`,
      },
      {
        name: "Gao Huali",
        role: "Associate Chief Physician",
        bio: `Expert in arthroscopic surgery & robot-assisted joint replacement`,
      },
      {
        name: "Han Dapeng",
        role: "Associate Chief Physician",
        bio: `Expert in artificial joint replacement & arthroscopic surgery`,
      },
      {
        name: "Xu Yuelin",
        role: "Chief Physician",
        bio: `Pioneer in domestic knee & hip artificial joint replacement`,
      },
    ],
  },
  {
    department: "Spine Surgery",
    featured: {
      name: "Huang Zheng",
      role: "Director of Spine Surgery, Chief Physician, Orthopedic PhD, Master Supervisor",
    },
    experts: [
      {
        name: "Huang Zheng",
        role: "Director of Spine Surgery",
        bio: `Expert in integrated & minimally invasive treatment of lumbar disc herniation, spinal stenosis, cervical spondylosis, AS, RA`,
      },
      {
        name: "Zhang Zifeng",
        role: "Director of Spinal Trauma Surgery, Associate Chief Physician, MD",
        bio: `Expert in minimally invasive treatment of spinal diseases & complex cervical spondylosis surgery`,
      },
      {
        name: "Xiao Lianbo",
        role: "Chief Orthopedic Physician",
        bio: `Conducts artificial joint replacement & integrated treatment of spine-related diseases`,
      },
    ],
  },
  {
    department: "Rehabilitation",
    featured: {
      name: "Cheng Shaodan",
      role: "Director of Rehabilitation, Chief Physician, Graduate Supervisor",
    },
    experts: [
      {
        name: "Cheng Shaodan",
        role: "Director of Rehabilitation",
        bio: `Leader of TCM Rehabilitation discipline (Shanghai key clinical discipline)
Head of National "Flagship" Chinese-Western Collaboration Project
Famous TCM Doctor of Changning District, Shanghai
Pioneered professional diagnosis & rehabilitation for neck/shoulder/waist/leg pain in Shanghai tertiary hospitals
Established integrated TCM diagnosis & treatment system
Performed first needle-knife endoscopy in East China`,
      },
    ],
  },
  {
    department: "Other Departments",
    experts: [
      {
        name: "Liu Xuan",
        role: "Director of Oncology, Professor",
        bio: `Department has grown into a clinical specialty featuring integrated Chinese-Western tumor prevention & treatment
Established comprehensive capabilities from early cancer diagnosis to chemotherapy, immunotherapy, targeted therapy, TCM & integrated treatment`,
      },
      {
        name: "Ma Danjun",
        role: "Director of Internal Medicine",
        bio: `Graduated from Tongji University Medical School, nearly 30 years in internal medicine
Experienced in diagnosis & treatment of common & frequently occurring internal diseases`,
      },
      {
        name: "Huang Tiansheng",
        role: "Director of Gastroenterology, Chief Physician, MD, Master Supervisor",
        bio: `Studied under famous Shanghai TCM doctor Prof. Zhu Shengliang
Serves as committee member of Spleen & Stomach Disease Branch, China Association of Chinese Medicine
Vice chairman of Shanghai TCM Association Spleen & Stomach Disease Branch`,
      },
      {
        name: "Sun Kemin",
        role: "Director of ENT, MD, Master Supervisor",
        bio: `Executive director of World Federation of Chinese Medicine Societies ENT & Stomatology Committee
Vice chairman of Allergy Expert Committee, ENT Branch, China Association of Integrative Medicine`,
      },
    ],
  },
];

export function GuanghuaPage() {
  return (
    <main
      role="main"
      aria-label="Guanghua Hospital - Joint Disease Specialist"
      className="min-h-screen bg-white"
    >
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        <img
          src="/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-guanghua.jpg"
          alt="Guanghua Hospital exterior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/85 via-green-950/70 to-teal-950/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Guanghua Hospital Affiliated to Shanghai University of TCM
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Shanghai Guanghua Integrated Chinese-Western Medicine Hospital
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Grade 3A specialized hospital featuring integrated Chinese-Western
              diagnosis &amp; treatment of joint diseases and rheumatic disorders
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                Founded in 1958
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                National Regional Joint Disease Center
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                City&apos;s Only 24h Gout Emergency
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#intro"
                className="px-8 py-3 bg-white text-teal-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Learn More
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOSPITAL OVERVIEW */}
      <section id="intro" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Hospital Overview
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {STATS.map((stat) => (
              <Reveal
                key={stat.label}
                className="bg-teal-50 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Guanghua Hospital Affiliated to Shanghai University of TCM
              (Shanghai Guanghua Integrated Chinese-Western Medicine Hospital)
              was founded in 1958. It is a Grade 3A specialized hospital
              featuring integrated Chinese-Western diagnosis and treatment of
              joint diseases and rheumatic disorders. The hospital has two
              campuses at Xinhua Road and Yan&apos;an West Road, with the new
              campus officially opened in May 2026, planning 600 beds.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The hospital is the National Regional Joint Disease Diagnosis and
              Treatment Center, with over 80% of beds dedicated to joint disease
              specialties. Rheumatology &amp; Immunology and Orthopedics &amp;
              Traumatology are National TCM Advantage Specialties. The hospital
              holds proprietary preparations including snake-based formulations,
              Wenjing mixture, and Shujin mixture. Hip and knee replacement
              volumes rank among the top in Shanghai, while elbow and ankle
              replacement volumes rank among the top nationally. The hospital is
              transitioning from a specialized hospital to a comprehensive
              hospital and operates the city&apos;s only 24-hour gout emergency
              service.
            </p>
          </Reveal>
        </div>
      </section>

      {/* KEY SPECIALTIES */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Key Specialties
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Featuring integrated Chinese-Western medicine, forming significant
              disciplinary advantages in joint disease and rheumatic disorder
              diagnosis and treatment
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIALTIES.map((spec) => (
              <Reveal
                key={spec.title}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-teal-50"
              >
                <div className="mb-5 flex flex-col gap-3">
                  <span className="w-fit px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                    {spec.badge}
                  </span>
                  <h3 className="text-2xl font-bold leading-tight text-teal-700">
                    {spec.title}
                  </h3>
                  <p className="border-l-4 border-[#7CB342] pl-4 text-base font-medium leading-relaxed text-gray-700">
                    {spec.subtitle}
                  </p>
                </div>
                <ul className="space-y-3">
                  {spec.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <Icons.checkCircle
                        className="text-teal-600 mt-0.5 flex-shrink-0 h-4 w-4"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT TEAM */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Expert Team
            </h2>
          </Reveal>
          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-8 pb-4 border-b border-gray-200">
              Core Experts by Department
            </h3>
            {EXPERT_BLOCKS.map((block) => (
              <Reveal key={block.department} className="bg-white rounded-2xl p-8 shadow-sm">
                <h4 className="text-xl font-bold text-teal-600 mb-6">
                  {block.department}
                </h4>
                {block.featured && (
                  <div className="mb-6 bg-teal-50 rounded-xl p-6">
                    <h5 className="font-bold text-teal-700 mb-2">
                      {block.featured.name}
                    </h5>
                    <p className="text-sm text-gray-600">{block.featured.role}</p>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  {block.experts.map((expert) => (
                    <div
                      key={expert.name}
                      className="border border-gray-200 rounded-xl p-6 hover:border-teal-300 transition-colors"
                    >
                      <h5 className="font-bold text-[#1A1A2E] mb-1">
                        {expert.name}
                      </h5>
                      <p className="text-sm text-teal-600 mb-3">{expert.role}</p>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {expert.bio}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Integrated Chinese-Western Medicine · Focus on Joint &amp;
              Rheumatic Diseases
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Address: Two campuses at Xinhua Road &amp; Yan&apos;an West Road,
              Shanghai
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-teal-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Book Consultation Now
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

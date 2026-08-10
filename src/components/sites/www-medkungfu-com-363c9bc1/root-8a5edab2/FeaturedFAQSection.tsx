// "Questions International Patients Ask First" — Featured FAQ section.
// White section with 10 static FAQ cards in a 2-col grid (no accordion).
import Link from "next/link";

import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface FeaturedFaq {
  question: string;
  answer: string;
  href: string;
}

const FAQS: FeaturedFaq[] = [
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
];

export function FeaturedFAQSection() {
  return (
    <section
      aria-labelledby="featured-faq-heading"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <Reveal y={20}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.22em] text-[#1B4D3E] font-semibold mb-3">
                FAQ
              </p>
              <h2
                id="featured-faq-heading"
                className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4 font-montserrat"
              >
                Questions International Patients Ask First
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Understand service boundaries, record preparation, hospital
                matching, costs, timelines, and follow-up before deciding
                whether to start a China medical assessment.
              </p>
            </div>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-[#1B4D3E] font-semibold hover:text-[#7CB342] transition-colors shrink-0"
            >
              Read all 72 FAQs
              <Icons.arrowRight className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQS.map((faq) => (
            <Reveal key={faq.question} y={12} className="flex">
              <Link
                href={faq.href}
                className="group border border-gray-200 rounded-lg p-5 hover:border-[#7CB342] hover:shadow-md transition-all bg-[#FBFCFC] w-full"
              >
                <div className="flex items-start gap-3">
                  <Icons.helpCircle className="text-[#1B4D3E] mt-0.5 flex-shrink-0 h-5 w-5" />
                  <div>
                    <h3 className="font-semibold text-[#1A1A2E] leading-relaxed group-hover:text-[#1B4D3E]">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

export const metadata: Metadata = {
  title: "TCM-Integrated Proctology Surgery | MedKungFu",
  description:
    "Gu's Surgical Heritage · TCM-Western Integration · Minimally Invasive — sphincter-preserving treatment for complex anal fistulas and mixed hemorrhoids with proprietary formulations, VAAFT/FiLaC technology and full-process accompaniment.",
};

export default function TcmProctologyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="TCM-Integrated Proctology Surgery"
          className="min-h-screen bg-[#F5F7FA] pt-10 pb-20"
        >
          <div className="container-custom">
            {/* ===== HERO ===== */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-900">
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
                <div>
                  <p className="text-lg text-emerald-200 mb-4 tracking-wider">
                    Anorectal Care Programme
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    中西医结合肛肠科手术
                  </h1>
                  <p className="text-xl md:text-2xl text-emerald-200 mb-4">
                    TCM-Integrated Minimally Invasive Treatment
                  </p>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                    Gu&apos;s Surgical Heritage · TCM-Western Integration ·
                    Minimally Invasive · Root &amp; Symptom Treatment
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                      80% Crohn&apos;s肛瘘愈合率
                    </span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                      15%复发率（远低于国际平均）
                    </span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                      个性化方案
                    </span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                      双语全程陪诊
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="mailto:contact@medkungfu.com"
                      className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
                    >
                      Email Consultation
                    </a>
                    <a
                      href="#intro"
                      className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Medical Projects → Learn More →
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                  <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
                </div>
              </div>
            </section>

            {/* ===== STATS STRIP ===== */}
            <section className="py-16 bg-emerald-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <Reveal className="text-center">
                    <div className="text-5xl font-bold text-emerald-600 mb-2">
                      80%
                    </div>
                    <p className="text-gray-600">
                      Crohn&apos;s anal fistula healing rate
                    </p>
                  </Reveal>
                  <Reveal className="text-center">
                    <div className="text-5xl font-bold text-emerald-600 mb-2">
                      15%
                    </div>
                    <p className="text-gray-600">
                      Recurrence rate (far below international average)
                    </p>
                  </Reveal>
                  <Reveal className="text-center">
                    <div className="text-5xl font-bold text-emerald-600 mb-2">
                      30-40%
                    </div>
                    <p className="text-gray-600">Reduction in healing time</p>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* ===== GU'S SURGICAL HERITAGE ===== */}
            <section id="intro" className="py-20 lg:py-32 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <Reveal x={-30}>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
                      Gu&apos;s Surgical Heritage · Century-old Anorectal
                      Specialty
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                      Inheriting the century-old academic accumulation of
                      &quot;Gu&apos;s Surgery&quot;, seamlessly integrating
                      traditional Chinese medicine essence with modern advanced
                      technology, providing precise and personalized treatment
                      plans for patients with complex anorectal diseases such as
                      complex anal fistulas and mixed hemorrhoids.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Standard Western surgical treatment for complex or
                      Crohn&apos;s disease-related anal fistulas carries
                      significant risk of sphincter damage and high recurrence
                      rates. We adopt seton therapy, herbal thread therapy
                      combined with internationally advanced VAAFT video-assisted
                      anal fistula treatment and FiLaC laser closure technology,
                      achieving recognized clinical efficacy in sphincter
                      preservation and recurrence reduction.
                    </p>
                    <div className="bg-emerald-50 rounded-xl p-6">
                      <p className="text-emerald-700 font-medium">
                        Proprietary formulations — Jin Huang Ointment, Hong You
                        Ointment, Sheng Ji San, etc. — further accelerate wound
                        healing and reduce scar formation.
                      </p>
                    </div>
                  </Reveal>
                  <Reveal x={30} className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured Unsplash asset */}
                    <img
                      src="/sites/www-medkungfu-com-363c9bc1/shared/images/photo-1576091160550-2173dba999ef-w800.jpg"
                      alt="TCM Proctology Treatment"
                      className="rounded-2xl shadow-2xl w-full"
                    />
                  </Reveal>
                </div>
              </div>
            </section>

            {/* ===== TWO COMPLEX ANORECTAL CONDITIONS ===== */}
            <section className="py-20 lg:py-32 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                    Two Complex Anorectal Conditions
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    The two complex anorectal diseases we specialize in treating
                  </p>
                </Reveal>
                <div className="grid lg:grid-cols-2 gap-8">
                  <Reveal className="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">
                      Complex Anal Fistula / Crohn&apos;s-related Fistula
                    </h3>
                    <p className="text-gray-600">
                      An anal fistula is an abnormal tunnel between the anal
                      canal and surrounding skin, typically arising from a
                      perianal abscess. Complex fistulas have multi-branching
                      tracts passing through or near the sphincter muscle.
                      Crohn&apos;s disease-related fistulas are highly prone to
                      recurrence and are internationally recognised as one of the
                      most challenging anorectal conditions to treat.
                    </p>
                  </Reveal>
                  <Reveal className="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">
                      Hemorrhoids (Mixed / Circumferential)
                    </h3>
                    <p className="text-gray-600">
                      Hemorrhoids are abnormally enlarged vascular cushions in
                      the anal canal. Mixed hemorrhoids involve both internal and
                      external components simultaneously. Chronic or prolonged
                      bleeding may lead to anaemia.
                    </p>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* ===== FIVE IRREPLACEABLE CLINICAL ADVANTAGES ===== */}
            <section className="py-20 lg:py-32 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                    Five Irreplaceable Clinical Advantages
                  </h2>
                </Reveal>
                <div className="space-y-8">
                  <Reveal className="bg-emerald-50 rounded-2xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icons.shield className="h-10 w-10" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                          Sphincter-Preserving · Function First
                        </h3>
                        <p className="text-gray-600">
                          Conventional fistulotomy risks partial sphincter damage
                          and incontinence. Seton and Herbal Thread Therapy
                          achieves gradual fistula closure through staged cutting
                          and localised medication delivery — maximally
                          preserving post-operative sphincter control and
                          continence.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal className="bg-emerald-50 rounded-2xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icons.heart className="h-10 w-10" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                          Proprietary Formulations · Accelerated Healing
                        </h3>
                        <p className="text-gray-600">
                          Proprietary formulations — Jin Huang Ointment (reduces
                          swelling), Bai Yu Ointment (tissue regeneration), Red
                          Oil Ointment (debridement &amp; healing) and oral
                          Promoting Healing Granules — form a complete
                          post-operative wound care system. Clinical data show a
                          30–40% reduction in healing time and significantly less
                          scar formation.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal className="bg-emerald-50 rounded-2xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icons.activity className="h-10 w-10" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                          International Minimally Invasive Techniques
                        </h3>
                        <p className="text-gray-600">
                          Fully proficient in Video-Assisted Anal Fistula
                          Treatment (VAAFT), Rectal Advancement Flap and Fistula
                          Laser Closure (FiLaC) — expanding treatment options for
                          patients unsuitable for conventional surgery.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal className="bg-emerald-50 rounded-2xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icons.stethoscope className="h-10 w-10" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                          Holistic TCM Conditioning · Long-term Recurrence
                          Prevention
                        </h3>
                        <p className="text-gray-600">
                          Beyond local treatment, personalised TCM conditioning —
                          qi-tonifying herbal prescriptions, dietary guidance and
                          bowel-habit improvement advice — to address the root
                          causes of recurrence rather than merely treating the
                          current episode.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal className="bg-emerald-50 rounded-2xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icons.clock className="h-10 w-10" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                          Minimally Invasive · Rapid Recovery (Hemorrhoids)
                        </h3>
                        <p className="text-gray-600">
                          For mixed hemorrhoids, combines sclerotherapy, banding
                          and minimally invasive surgery — significantly reducing
                          postoperative pain compared to traditional
                          Milligan-Morgan hemorrhoidectomy. Patients can typically
                          resume daily activities within 24–48 hours.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* ===== SUITABLE CANDIDATES + CONTRAINDICATIONS ===== */}
            <section className="py-20 lg:py-32 bg-slate-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  <Reveal x={-30}>
                    <h2 className="text-3xl font-bold mb-8">
                      Suitable Candidates
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Icons.checkCircle className="text-emerald-400 flex-shrink-0 mt-0.5 h-5 w-5" />
                        <p className="text-gray-300">
                          Complex or recurrent anal fistula, including
                          Crohn&apos;s disease-related fistula or
                          post-multiple-surgery recurrence
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icons.checkCircle className="text-emerald-400 flex-shrink-0 mt-0.5 h-5 w-5" />
                        <p className="text-gray-300">
                          Mixed hemorrhoids (including circumferential) seeking
                          reduced postoperative pain and faster recovery
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icons.checkCircle className="text-emerald-400 flex-shrink-0 mt-0.5 h-5 w-5" />
                        <p className="text-gray-300">
                          Post-perianal abscess surgery requiring advanced wound
                          management
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icons.checkCircle className="text-emerald-400 flex-shrink-0 mt-0.5 h-5 w-5" />
                        <p className="text-gray-300">
                          Patients seeking TCM-integrated care to reduce long-term
                          recurrence risk
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icons.checkCircle className="text-emerald-400 flex-shrink-0 mt-0.5 h-5 w-5" />
                        <p className="text-gray-300">
                          Patients treated overseas with unsatisfactory outcomes,
                          seeking a second opinion
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal x={30}>
                    <h2 className="text-3xl font-bold mb-8">Contraindications</h2>
                    <p className="text-gray-400 mb-6">
                      Please inform your doctor truthfully about the following
                      conditions during consultation — suitability requires
                      individualized assessment
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Icons.alertCircle className="text-rose-400 h-5 w-5" />
                        <p className="text-gray-300">
                          Coagulation disorders or current anticoagulant
                          medication
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icons.alertCircle className="text-rose-400 h-5 w-5" />
                        <p className="text-gray-300">
                          Active flare of inflammatory bowel disease
                          (Crohn&apos;s disease / ulcerative colitis)
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icons.alertCircle className="text-rose-400 h-5 w-5" />
                        <p className="text-gray-300">
                          Severe local infection or active sepsis
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icons.alertCircle className="text-rose-400 h-5 w-5" />
                        <p className="text-gray-300">
                          Pregnant women (certain procedures deferred to
                          post-partum)
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icons.alertCircle className="text-rose-400 h-5 w-5" />
                        <p className="text-gray-300">
                          Poorly controlled diabetes affecting wound healing
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mt-6 pt-4 border-t border-slate-700">
                      All patients will be assessed by specialists before
                      treatment to confirm suitability and develop individualized
                      plans.
                    </p>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* ===== ONE-STOP FULL-PROCESS ACCOMPANIMENT SERVICE ===== */}
            <section className="py-20 lg:py-32 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                    One-stop Full-process Accompaniment Service
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    From online inquiry to return follow-up, MedKungfu provides
                    full butler-style service for every overseas patient
                  </p>
                </Reveal>
                <div className="space-y-6">
                  <Reveal className="bg-slate-50 rounded-2xl p-6 relative">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-bold text-[#1A1A2E] text-lg">
                            Online Enquiry &amp; Symptom Assessment
                          </h3>
                          <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                            1-3 days
                          </span>
                        </div>
                        <p className="text-gray-600">
                          Contact MedKungfu via email — a brief description of
                          your symptoms and medical history is all that is needed
                          to get started. Prior medical records, surgical history
                          or imaging (MRI, CT) are helpful but not required.
                          MedKungfu will arrange a preliminary remote assessment
                          with proctologists.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal className="bg-slate-50 rounded-2xl p-6 relative">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        2
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-bold text-[#1A1A2E] text-lg">
                            Travel &amp; Itinerary Planning
                          </h3>
                          <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                            3-7 days
                          </span>
                        </div>
                        <p className="text-gray-600">
                          Once treatment intent is confirmed, MedKungfu assists
                          with visa documentation (including hospital invitation
                          letters), accommodation near the hospital, airport
                          transfer arrangements, and a recommended stay duration
                          based on the planned procedure and hospitalisation
                          requirements.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal className="bg-slate-50 rounded-2xl p-6 relative">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        3
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-bold text-[#1A1A2E] text-lg">
                            Pre-treatment Specialist Assessment at Hospital
                          </h3>
                          <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                            Day 1
                          </span>
                        </div>
                        <p className="text-gray-600">
                          Upon arrival, a bilingual escort accompanies you to the
                          hospital. The specialist conducts a comprehensive
                          assessment: TCM constitution analysis; local lesion
                          examination (including fistuloscopy and imaging
                          review); personalised treatment plan formulation and
                          procedure scheduling.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal className="bg-slate-50 rounded-2xl p-6 relative">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        4
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-bold text-[#1A1A2E] text-lg">
                            Procedure &amp; Treatment
                          </h3>
                          <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                            Procedure day
                          </span>
                        </div>
                        <p className="text-gray-600">
                          Depending on condition: complex fistulas are treated
                          with Seton / Herbal Thread Therapy or VAAFT / FiLaC;
                          hemorrhoids with ligation, sclerotherapy or minimally
                          invasive surgery. MedKungfu provides in-hospital
                          interpretation throughout.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal className="bg-slate-50 rounded-2xl p-6 relative">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        5
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-bold text-[#1A1A2E] text-lg">
                            Post-operative Wound Care &amp; Follow-up
                          </h3>
                          <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                            Throughout stay
                          </span>
                        </div>
                        <p className="text-gray-600">
                          Physicians conduct standardised dressing changes using
                          proprietary formulations, assess wound healing progress
                          regularly, and adjust seton tension or formulations as
                          needed. MedKungfu coordinates transport and
                          accompaniment for all follow-up visits.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal className="bg-slate-50 rounded-2xl p-6 relative">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        6
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-bold text-[#1A1A2E] text-lg">
                            Pre-departure Summary &amp; Home Care Guidance
                          </h3>
                          <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                            Before departure
                          </span>
                        </div>
                        <p className="text-gray-600">
                          Upon completing the main treatment phase, the physician
                          provides a bilingual written summary: home wound care
                          instructions; dietary guidance; recurrence warning
                          signs and management; long-term follow-up plan.
                          MedKungfu continues to coordinate remote follow-up after
                          the patient returns home.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* ===== BEYOND MEDICAL — FULL SUPPORT ===== */}
            <section className="py-20 lg:py-32 bg-emerald-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                    Beyond Medical — Full Support
                  </h2>
                </Reveal>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Reveal className="bg-white rounded-2xl p-6 text-center shadow-sm">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icons.globe className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-[#1A1A2E] mb-2">
                      Bilingual Interpretation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Dedicated escort with full medical interpretation at every
                      appointment. All records, reports and treatment plans
                      provided in bilingual format for zero-barrier communication.
                    </p>
                  </Reveal>
                  <Reveal className="bg-white rounded-2xl p-6 text-center shadow-sm">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icons.mapPin className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-[#1A1A2E] mb-2">
                      Transport &amp; Escort
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Airport transfer and dedicated escort to every appointment
                      — no need to navigate the hospital independently.
                    </p>
                  </Reveal>
                  <Reveal className="bg-white rounded-2xl p-6 text-center shadow-sm">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icons.users className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-[#1A1A2E] mb-2">
                      Dedicated Coordinator
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Personal coordinator manages all appointments, progress
                      tracking, care arrangements and non-medical needs
                      throughout the stay.
                    </p>
                  </Reveal>
                  <Reveal className="bg-white rounded-2xl p-6 text-center shadow-sm">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icons.award className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-[#1A1A2E] mb-2">
                      Visa &amp; Travel Support
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Support with medical visa invitation letters, arrival
                      guidance and accommodation arrangements for patient and
                      accompanying family.
                    </p>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* ===== REFERENCE TREATMENT COST ===== */}
            <section className="py-20 lg:py-32 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                    Reference Treatment Cost
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Transparent pricing, unparalleled global price advantage
                  </p>
                </Reveal>
                <Reveal className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center">
                  <div className="text-5xl md:text-6xl font-bold mb-4">
                    Approx. $7,000 (including TCM rehabilitation)
                  </div>
                  <p className="text-emerald-100 text-lg mb-6">
                    Specific costs subject to final hospital assessment.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <span className="px-4 py-2 bg-white/20 rounded-full">
                      ✓ 含手术费用
                    </span>
                    <span className="px-4 py-2 bg-white/20 rounded-full">
                      ✓ 含中医康复
                    </span>
                    <span className="px-4 py-2 bg-white/20 rounded-full">
                      ✓ 含住院护理
                    </span>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* ===== CTA ===== */}
            <section id="contact" className="py-20 lg:py-32 bg-emerald-900 text-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Reveal>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Start Your Anorectal Treatment Journey
                  </h2>
                  <p className="text-emerald-200 mb-4">
                    Contact us for a free preliminary assessment
                  </p>
                  <p className="text-emerald-300 mb-8">
                    Our medical advisory team will respond within one hour and
                    arrange professional bilingual consultation for you
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="mailto:contact@medkungfu.com"
                      className="px-8 py-4 bg-white text-emerald-900 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
                    >
                      Email Consultation
                    </a>
                    <Link
                      href="/contact"
                      className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Online Inquiry
                    </Link>
                  </div>
                </Reveal>
              </div>
            </section>
          </div>
        </main>
      </main>
      <SiteFooter />
    </>
  );
}

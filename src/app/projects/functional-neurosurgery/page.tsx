import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";

export const metadata: Metadata = {
  title: "Functional Neurosurgery Programme - Parkinson's Disease & Movement Disorders Treatment",
  description:
    "Parkinson's Disease and Movement Disorders precision treatment by MedKungFu: DBS deep brain stimulation and MRgFUS focused ultrasound at China's leading functional neurosurgery center, with world-first 5G remote follow-up.",
};

export default function FunctionalNeurosurgeryPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="Functional Neurosurgery Programme - Parkinson's Disease &amp; Movement Disorders Treatment"
          className="min-h-screen bg-white"
        >
          {/* HERO */}
          <section className="relative bg-gradient-to-br from-[#1A1A2E] via-[#2D2D44] to-[#1B4D3E] text-white py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1B4D3E] rounded-full blur-3xl"></div>
            </div>
            <div className="container-custom relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
                  MedKungfu HEALTHCARE · CONCIERGE
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Parkinson&apos;s Disease &amp; Movement Disorders Precision Treatment
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  DBS Deep Brain Stimulation · MRgFUS Focused Ultrasound · 5G Remote Follow-up
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base mb-12">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                    World&apos;s First 5G Remote Surgery
                  </span>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                    Dual Technology Platform
                  </span>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                    40-60% Lower Cost Than US/Europe
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl md:text-3xl font-bold mb-1">3,000+</div>
                    <div className="text-xs md:text-sm text-gray-300">
                      Surgeries by Dr. Li Jianyu
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl md:text-3xl font-bold mb-1">60-88%</div>
                    <div className="text-xs md:text-sm text-gray-300">Tremor Improvement Rate</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl md:text-3xl font-bold mb-1">5G</div>
                    <div className="text-xs md:text-sm text-gray-300">
                      World&apos;s First Remote Follow-up
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl md:text-3xl font-bold mb-1">¥170K-600K</div>
                    <div className="text-xs md:text-sm text-gray-300">Reference Cost Range</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* OVERVIEW */}
          <section id="overview" className="py-16 md:py-24 bg-[#F5F7FA]">
            <div className="container-custom">
              <Reveal y={20} className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
                  What is Functional Neurosurgery?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Movement disorders such as Parkinson&apos;s disease, essential tremor, and
                  dystonia have traditionally been managed primarily with medication. However, as
                  the disease progresses, medication effectiveness often gradually diminishes, or
                  serious side effects occur. Functional neurosurgery directly intervenes in
                  abnormal neural circuits through precise neuromodulation technologies—DBS (Deep
                  Brain Stimulation) and MRgFUS (MRI-guided Focused Ultrasound)—providing an
                  efficient alternative for patients with poor medication response.
                </p>
              </Reveal>
            </div>
          </section>

          {/* TECHNOLOGIES */}
          <section id="technologies" className="py-16 md:py-24 bg-white">
            <div className="container-custom">
              <Reveal y={20}>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-12">
                  Two Core Technology Platforms
                </h2>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-8">
                {/* DBS */}
                <Reveal
                  y={30}
                  className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="w-16 h-16 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E] mb-6">
                    <Icons.zap className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-1">
                    DBS Deep Brain Stimulation
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Implanting microelectrodes in specific brain targets to provide continuous
                    electrical stimulation, correcting abnormal neural circuit function - reversible,
                    adjustable, and long-lasting.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Indications: Parkinson&apos;s disease, essential tremor, dystonia,
                        epilepsy, etc.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Minimally invasive: Stereotactic technique with minimal trauma and fast
                        recovery
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Reversible &amp; adjustable: No brain tissue damage, parameters can be
                        dynamically adjusted based on symptoms
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Long-term efficacy: Clinical studies confirm effects lasting over 10 years
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        60-70% tremor improvement rate, significant motor symptom improvement
                      </span>
                    </li>
                  </ul>
                </Reveal>

                {/* MRgFUS */}
                <Reveal
                  y={30}
                  className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="w-16 h-16 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E] mb-6">
                    <Icons.brain className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-1">
                    MRgFUS Focused Ultrasound
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Multiple ultrasound beams penetrate the skull and precisely focus on brain
                    targets under real-time MRI guidance, producing ablation effects to block
                    abnormal neural signals without any incisions.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Indications: Essential tremor, tremor-dominant Parkinson&apos;s disease,
                        neuropathic pain
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Completely non-invasive: No craniotomy, no incisions, no sutures, extremely
                        low infection risk
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Immediate results: Real-time observation of tremor improvement under MRI
                        monitoring, assessment during treatment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Fast recovery: Short hospital stay, quick return to normal life after
                        procedure
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.checkCircle className="h-[18px] w-[18px] text-[#1B4D3E] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Clinical study effectiveness rate 60-88%
                      </span>
                    </li>
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ADVANTAGES */}
          <section id="advantages" className="py-16 md:py-24 bg-[#F5F7FA]">
            <div className="container-custom">
              <Reveal y={20}>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-12">
                  Core Advantages
                </h2>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-8">
                <Reveal x={-30} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E]">
                        <Icons.checkCircle className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-bold text-[#1B4D3E]/20 mb-2">01</div>
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        Dual Platform Objective Selection
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Equipped with both DBS and MRgFUS, experts make objective judgments based on
                        patient condition, age, and surgical tolerance - DBS for minimally invasive
                        modulation, MRgFUS for those unwilling or unable to undergo surgery.
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal x={30} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E]">
                        <Icons.wifi className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-bold text-[#1B4D3E]/20 mb-2">02</div>
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">5G Remote Follow-up</h3>
                      <p className="text-gray-600 leading-relaxed">
                        DBS requires regular parameter adjustments (programming). China&apos;s 5G
                        remote programming system allows patients to adjust parameters from home
                        overseas, eliminating long-distance travel. This is currently the
                        world&apos;s only systematic remote neuromodulation system.
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal x={-30} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E]">
                        <Icons.award className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-bold text-[#1B4D3E]/20 mb-2">03</div>
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        Pioneering Expert Team
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Professor Ling Zhipei completed China&apos;s first Parkinson&apos;s brain
                        pacemaker implantation in 1998 and the world&apos;s first 5G remote brain
                        pacemaker surgery in 2019 (3,000 km, only 79ms delay), truly the founder of
                        Chinese functional neurosurgery. Professor Li Jianyu has performed over
                        3,000 functional neurosurgery procedures.
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal x={30} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E]">
                        <Icons.shield className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-bold text-[#1B4D3E]/20 mb-2">04</div>
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        40-60% Lower Cost Than US/Europe
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        DBS surgery costs approximately ¥450K-600K (US $100K-150K, equivalent to
                        RMB 720K-1.08M), MRgFUS about ¥174K (US $30K-50K, equivalent to RMB
                        210K-360K). With comparable or even higher expert levels, choosing China
                        saves significant costs.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* SUITABLE / NOT SUITABLE */}
          <section id="suitable" className="py-16 md:py-24 bg-white">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12">
                <Reveal x={-30}>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-8">
                    Suitable For
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Icons.checkCircle className="h-5 w-5 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Parkinson&apos;s patients: Gradual decline in medication effectiveness, or
                        experiencing motor fluctuations (on-off phenomenon), dyskinesia and other
                        side effects
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.checkCircle className="h-5 w-5 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Essential tremor patients: Hand/head tremors affecting daily life,
                        unsatisfactory medication control
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.checkCircle className="h-5 w-5 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Dystonia patients: Affecting normal limb movement function
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.checkCircle className="h-5 w-5 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Epilepsy patients: Recurrent seizures despite standardized medication
                        treatment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.checkCircle className="h-5 w-5 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Those seeking minimally invasive, non-invasive or reversible treatment
                        options, concerned about traditional craniotomy
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.checkCircle className="h-5 w-5 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Those who have undergone surgery abroad (DBS) and seek remote follow-up
                        management services
                      </span>
                    </li>
                  </ul>
                </Reveal>
                <Reveal x={30}>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-8">
                    Not Suitable For (Requires Individual Assessment)
                  </h2>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs font-bold">
                        ×
                      </div>
                      <span className="text-gray-700">
                        Patients with metal implants in the brain (some MRI contraindications)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs font-bold">
                        ×
                      </div>
                      <span className="text-gray-700">Patients with severe cognitive impairment</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs font-bold">
                        ×
                      </div>
                      <span className="text-gray-700">
                        Patients with too low skull density score (affects MRgFUS energy focusing)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs font-bold">
                        ×
                      </div>
                      <span className="text-gray-700">
                        Patients with severe coagulation disorders
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 italic">
                    All patients must submit imaging data and medical records for remote
                    pre-screening assessment by specialists. Treatment in China will be arranged
                    only after confirming indications.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section id="process" className="py-16 md:py-24 bg-[#F5F7FA]">
            <div className="container-custom">
              <Reveal y={20}>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-4">
                  Treatment Process · International Patient Exclusive Channel
                </h2>
              </Reveal>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                MedKungfu provides comprehensive accompaniment services for each patient from
                pre-trip planning to long-term post-operative follow-up.
              </p>
              <div className="space-y-6">
                <Reveal y={20} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        1
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        Remote Pre-screening Assessment
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        Submit imaging data (MRI/CT) and medical records for preliminary assessment
                        by hospital experts to determine suitability for DBS or MRgFUS treatment.
                        No need to fly to China first, reducing unnecessary travel costs.
                      </p>
                      <div className="inline-flex items-center text-sm text-[#1B4D3E]">
                        <Icons.clock className="mr-2 h-4 w-4" />
                        3-5 working days
                      </div>
                    </div>
                  </div>
                </Reveal>
                <Reveal y={20} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        Multidisciplinary Consultation
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        Specialist team conducts remote consultation, combining disease
                        characteristics, surgical tolerance, and patient preferences to determine
                        the optimal treatment plan (DBS or MRgFUS). MedKungfu assists with
                        translation and communication.
                      </p>
                      <div className="inline-flex items-center text-sm text-[#1B4D3E]">
                        <Icons.clock className="mr-2 h-4 w-4" />
                        1-2 weeks
                      </div>
                    </div>
                  </div>
                </Reveal>
                <Reveal y={20} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        3
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        On-site Neurological Assessment in China
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        After arriving at the Chinese hospital, detailed neurological and anesthesia
                        assessments are conducted to finalize the surgical plan. MedKungfu provides
                        bilingual accompaniment throughout, coordinating accommodation and hospital
                        schedule.
                      </p>
                      <div className="inline-flex items-center text-sm text-[#1B4D3E]">
                        <Icons.clock className="mr-2 h-4 w-4" />
                        Day 1-2 after arrival
                      </div>
                    </div>
                  </div>
                </Reveal>
                <Reveal y={20} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        Precision Surgical Treatment
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        Expert surgeons perform DBS implantation or MRgFUS ablation. Surgery uses
                        stereotactic precision positioning, and MRgFUS allows real-time observation
                        of tremor improvement during the procedure.
                      </p>
                      <div className="inline-flex items-center text-sm text-[#1B4D3E]">
                        <Icons.clock className="mr-2 h-4 w-4" />
                        Surgery day
                      </div>
                    </div>
                  </div>
                </Reveal>
                <Reveal y={20} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        5
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                        Recovery Management &amp; 5G Remote Follow-up
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        Post-operative hospital monitoring and rehabilitation guidance. DBS patients
                        can adjust parameters through the 5G remote programming system after
                        discharge without returning to the hospital. MedKungfu continuously
                        coordinates remote follow-up arrangements to ensure long-term efficacy.
                      </p>
                      <div className="inline-flex items-center text-sm text-[#1B4D3E]">
                        <Icons.clock className="mr-2 h-4 w-4" />
                        Ongoing post-surgery
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* EXPERTS */}
          <section id="experts" className="py-16 md:py-24 bg-white">
            <div className="container-custom">
              <Reveal y={20}>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-12">
                  Expert Team
                </h2>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-8">
                {/* LING Zhipei */}
                <Reveal
                  y={30}
                  className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">LING Zhipei</h3>
                    <p className="text-[#1B4D3E] font-medium">
                      Chief Physician · Professor · PhD Supervisor
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icons.award className="h-4 w-4 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Completed China&apos;s first Parkinson&apos;s brain pacemaker implantation
                        in 1998, introducing neuromodulation technology
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.award className="h-4 w-4 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Completed the world&apos;s first 5G remote brain pacemaker surgery in 2019
                        (3,000 km, 79ms delay)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.award className="h-4 w-4 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Established the world&apos;s first 5G + holographic remote diagnosis
                        platform in 2020
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.award className="h-4 w-4 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Completed 1,000+ remote outpatient consultations by 2025
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.award className="h-4 w-4 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Completed China&apos;s first AI algorithm automatic parameter adjustment
                        rechargeable brain pacemaker implantation in 2025
                      </span>
                    </li>
                  </ul>
                </Reveal>

                {/* LI Jianyu */}
                <Reveal
                  y={30}
                  className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">LI Jianyu</h3>
                    <p className="text-[#1B4D3E] font-medium">
                      Chief Physician · Associate Professor · Master&apos;s Supervisor
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icons.award className="h-4 w-4 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        3,000+ functional neurosurgery procedures
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.award className="h-4 w-4 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Nearly 1,000 cranial nerve microvascular decompression surgeries
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.award className="h-4 w-4 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Studied with Professor Okun&apos;s team in Minneapolis and Florida, USA
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.award className="h-4 w-4 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Specializes in Parkinson&apos;s disease, essential tremor, dystonia, Tourette
                        syndrome
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icons.award className="h-4 w-4 text-[#1B4D3E] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Also has extensive experience in cerebral palsy, epilepsy, and lower back/leg
                        pain
                      </span>
                    </li>
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>

          {/* PRICING */}
          <section id="pricing" className="py-16 md:py-24 bg-[#F5F7FA]">
            <div className="container-custom">
              <Reveal y={20}>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-12">
                  Reference Treatment Costs
                </h2>
              </Reveal>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-3 bg-[#1B4D3E] text-white">
                    <div className="p-6 font-bold">Treatment Plan</div>
                    <div className="p-6 font-bold text-center">China Reference Price</div>
                    <div className="p-6 font-bold text-center">US Reference Price</div>
                  </div>
                  <div className="grid grid-cols-3 border-b border-gray-100">
                    <div className="p-6 font-medium text-[#1A1A2E]">
                      DBS Deep Brain Stimulation Surgery
                    </div>
                    <div className="p-6 text-center text-[#1B4D3E] font-bold">¥450K-600K</div>
                    <div className="p-6 text-center text-gray-600">$100K-150K USD</div>
                  </div>
                  <div className="grid grid-cols-3">
                    <div className="p-6 font-medium text-[#1A1A2E]">
                      MRgFUS Focused Ultrasound
                    </div>
                    <div className="p-6 text-center text-[#1B4D3E] font-bold">¥174K</div>
                    <div className="p-6 text-center text-gray-600">$30K-50K USD</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6 text-center">
                  *The above are reference costs. Actual costs vary depending on surgical plan and
                  consumable brands. Costs include hospitalization, surgery, device implantation,
                  and basic post-operative follow-up. DBS post-operative 5G remote programming
                  follow-up is billed separately.
                </p>
              </div>
            </div>
          </section>

          {/* WHY US */}
          <section id="why-us" className="py-16 md:py-24 bg-white">
            <div className="container-custom">
              <Reveal y={20}>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-12">
                  Why Choose MedKungfu?
                </h2>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-8">
                <Reveal scale={0.95} className="bg-[#F5F7FA] rounded-2xl p-8">
                  <div className="w-16 h-16 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E] mb-6">
                    <Icons.globe className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                    Bilingual Medical Translation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dedicated personnel accompany patients for medical visits, providing full-process
                    medical interpretation; medical records, diagnostic reports, and treatment plans
                    are all provided in Chinese-English translation to ensure barrier-free
                    communication between patients and physicians.
                  </p>
                </Reveal>
                <Reveal scale={0.95} className="bg-[#F5F7FA] rounded-2xl p-8">
                  <div className="w-16 h-16 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E] mb-6">
                    <Icons.mapPin className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                    Private Car Transfer · Full-process Accompaniment
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Provides airport private car transfer, with dedicated personnel responsible for
                    pickup/drop-off and full-process accompaniment for each visit, so patients
                    don&apos;t have to face transportation and hospital navigation difficulties
                    alone.
                  </p>
                </Reveal>
                <Reveal scale={0.95} className="bg-[#F5F7FA] rounded-2xl p-8">
                  <div className="w-16 h-16 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E] mb-6">
                    <Icons.clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                    Visa · Accommodation · Itinerary Planning
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Assists in preparing medical visa invitation letters, recommends quality
                    accommodation near the hospital, and reasonably arranges stay duration in China
                    based on treatment plan to maximize treatment effectiveness.
                  </p>
                </Reveal>
                <Reveal scale={0.95} className="bg-[#F5F7FA] rounded-2xl p-8">
                  <div className="w-16 h-16 bg-[#1B4D3E]/10 rounded-xl flex items-center justify-center text-[#1B4D3E] mb-6">
                    <Icons.wifi className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                    5G Follow-up Coordination
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Continuously coordinates remote programming follow-up arrangements after surgery,
                    ensuring patients can still receive timely parameter adjustment services after
                    returning home, guaranteeing long-term treatment effectiveness.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A1A2E] via-[#2D2D44] to-[#1B4D3E] text-white">
            <div className="container-custom">
              <Reveal y={30} className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Contact Us · Reply Within One Hour
                </h2>
                <p className="text-xl mb-4 text-gray-200">
                  Begin Your Precision Neurosurgery Journey
                </p>
                <p className="text-gray-300 mb-8">
                  Contact us for a free preliminary assessment. Submit your medical records and
                  imaging data, and we will arrange for specialists to conduct remote pre-screening.
                </p>
                <a
                  href="mailto:contact@medkungfu.com"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#1B4D3E] rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  contact@medkungfu.com
                  <Icons.arrowRight className="ml-2 h-5 w-5" />
                </a>
                <div className="mt-12 pt-8 border-t border-white/20">
                  <p className="text-sm text-gray-400">MK · EST. 2026</p>
                </div>
              </Reveal>
            </div>
          </section>
        </main>
      </main>
      <SiteFooter />
    </>
  );
}

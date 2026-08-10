import type { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/icons";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

export const metadata: Metadata = {
  title: "Acupuncture Beauty and Skin Tightening Therapy | MedKungFu",
  description:
    "Harmonize Qi and Blood, Rejuvenate Beauty from Within — MedKungFu's acupuncture facial rejuvenation programme offers non-invasive facial tightening, complexion improvement and anti-aging, with bilingual accompaniment.",
};

export default function AcupunctureBeautyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="Acupuncture Beauty and Skin Tightening Therapy"
          className="min-h-screen bg-[#F5F7FA] pt-10 pb-20"
        >
          <div className="container-custom">
            {/* ===== HERO ===== */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-900 via-pink-900 to-rose-900">
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
                <div>
                  <p className="text-lg text-rose-200 mb-4 tracking-wider">
                    Beauty Programme
                  </p>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                    Acupuncture Facial Rejuvenation
                  </h1>
                  <p className="text-xl md:text-2xl text-rose-200 mb-4">
                    Acupuncture Facial Rejuvenation
                  </p>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                    Harmonize Qi and Blood, Rejuvenate Beauty from Within
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                      About 30 Minutes
                    </span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                      Non-invasive · Quick Recovery
                    </span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                      Personalized Plan
                    </span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                      Bilingual Accompaniment
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-4 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors">
                      Consult Now
                    </button>
                    <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                  <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
                </div>
              </div>
            </section>

            {/* ===== WHAT IS ACUPUNCTURE FACIAL REJUVENATION ===== */}
            <section id="intro" className="py-20 lg:py-32 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <Reveal x={-30}>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
                      What is Acupuncture Facial Rejuvenation?
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                      Acupuncture is one of the core treatment methods of
                      traditional Chinese medicine (TCM), with over two thousand
                      years of clinical history. It involves inserting extremely
                      fine needles into specific acupoints of the human body to
                      stimulate the meridian system, regulate qi and blood flow,
                      thereby restoring the body&apos;s natural balance and
                      self-healing ability.
                    </p>
                    <p className="text-gray-600 mb-6">
                      The World Health Organization (WHO) has listed it as a
                      recommended therapy for various conditions. In Chinese
                      tertiary hospitals at all levels, acupuncture departments
                      are formal clinical departments, diagnosed by licensed
                      physicians.
                    </p>
                    <p className="text-gray-600 mb-6">
                      In the field of aesthetic medicine, acupuncture has been
                      widely used in recent years for facial tightening,
                      complexion improvement and anti-aging. Its principle lies
                      in activating the skin&apos;s own repair and regeneration
                      mechanisms through meridian regulation and
                      micro-stimulation, rather than relying on exogenous
                      substance filling.
                    </p>
                    <div className="flex items-center space-x-4 text-rose-600">
                      <Icons.checkCircle className="h-6 w-6" />
                      <span className="font-semibold">
                        The core logic of acupuncture beauty is not
                        &quot;filling&quot; but &quot;nourishing&quot;
                      </span>
                    </div>
                  </Reveal>
                  <Reveal x={30} className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element -- mapped from captured Unsplash asset */}
                    <img
                      src="/sites/www-medkungfu-com-363c9bc1/shared/images/photo-1576091160550-2173dba999ef-w800.jpg"
                      alt="Acupuncture Beauty Treatment"
                      className="rounded-2xl shadow-2xl w-full"
                    />
                  </Reveal>
                </div>
              </div>
            </section>

            {/* ===== HOW ACUPUNCTURE IMPROVES FACIAL SAGGING ===== */}
            <section className="py-20 lg:py-32 bg-rose-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                    How Acupuncture Improves Facial Sagging
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Facing the &quot;collapsed face&quot; trouble after weight
                    loss, TCM acupuncture provides a safe and effective
                    improvement approach from the holistic view of &quot;qi and
                    blood balance&quot;
                  </p>
                </Reveal>
                <div className="grid md:grid-cols-3 gap-8">
                  <Reveal className="bg-white rounded-2xl p-8 shadow-sm">
                    <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6 text-2xl font-bold">
                      01
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                      Regulate Qi and Blood · Strengthen Foundation
                    </h3>
                    <p className="text-gray-600">
                      Through the combination of distal and local acupoints,
                      harmonize the whole body&apos;s qi and blood flow, provide
                      sufficient nourishment foundation for facial tissues, and
                      improve dull complexion and sagging caused by qi and blood
                      deficiency.
                    </p>
                  </Reveal>
                  <Reveal className="bg-white rounded-2xl p-8 shadow-sm">
                    <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6 text-2xl font-bold">
                      02
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                      Stimulate Locally · Promote Blood Circulation
                    </h3>
                    <p className="text-gray-600">
                      Fine needles precisely stimulate facial acupoints, promote
                      local blood circulation, activate fibroblast activity,
                      promote collagen synthesis and renewal, and improve facial
                      contour fullness.
                    </p>
                  </Reveal>
                  <Reveal className="bg-white rounded-2xl p-8 shadow-sm">
                    <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6 text-2xl font-bold">
                      03
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                      Stimulate Regeneration · Fill Deficiency
                    </h3>
                    <p className="text-gray-600">
                      Through holistic syndrome differentiation and conditioning,
                      supplement qi and blood deficiency caused by weight loss or
                      aging, fundamentally improve the skin&apos;s self-repair and
                      maintenance ability, with effects accumulating over the
                      treatment course, sustained and natural.
                    </p>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* ===== CORE ADVANTAGES ===== */}
            <section className="py-20 lg:py-32 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                    Core Advantages
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Differentiated advantages compared to other aesthetic methods
                  </p>
                </Reveal>
                <div className="grid md:grid-cols-2 gap-8">
                  <Reveal className="bg-rose-50 rounded-2xl p-8">
                    <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6">
                      <Icons.shield className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                      Non-invasive Procedure, Zero Recovery Period
                    </h3>
                    <p className="text-gray-600">
                      No incisions, no injections, no anesthesia, normal
                      activities can resume immediately after treatment. Compared
                      to the weeks-long recovery period of surgical facelifts and
                      the foreign body sensation and swelling that may occur with
                      thread lifting, acupuncture has almost no side effects and
                      does not affect daily life and work arrangements.
                    </p>
                  </Reveal>
                  <Reveal className="bg-rose-50 rounded-2xl p-8">
                    <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6">
                      <Icons.heart className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                      No Allogeneic Substances, Safe and Controllable
                    </h3>
                    <p className="text-gray-600">
                      Hyaluronic acid fillers and botulinum toxin are both
                      exogenous injectable substances, with risks of allergy,
                      nodules, displacement or facial stiffness. Acupuncture only
                      uses fine needles for micro-stimulation, stimulating the
                      skin&apos;s own repair ability, with no allogeneic components
                      entering the body.
                    </p>
                  </Reveal>
                  <Reveal className="bg-rose-50 rounded-2xl p-8">
                    <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6">
                      <Icons.sparkles className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                      Treats Both Root and Symptoms, Natural and Long-lasting
                      Effects
                    </h3>
                    <p className="text-gray-600">
                      Filler methods belong to external force filling, and
                      effects fade after stopping treatment. Acupuncture improves
                      the skin&apos;s self-maintenance ability from the root by
                      harmonizing qi and blood and promoting collagen
                      regeneration. Effects accumulate over time, improvements
                      are natural, and unnatural feelings are unlikely to occur.
                    </p>
                  </Reveal>
                  <Reveal className="bg-rose-50 rounded-2xl p-8">
                    <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6">
                      <Icons.user className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">
                      Holistic Conditioning, Simultaneous Complexion Improvement
                    </h3>
                    <p className="text-gray-600">
                      Acupuncture&apos;s systemic conditioning is not limited to the
                      face, but also improves qi and blood circulation, sleep
                      quality and overall constitution. Many patients report
                      improved complexion and more energy while their facial
                      tightness improves - this is a holistic benefit that cannot
                      be achieved by purely local medical aesthetics.
                    </p>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* ===== SUITABLE CANDIDATES + CONTRAINDICATIONS ===== */}
            <section className="py-20 lg:py-32 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  <Reveal x={-30}>
                    <h2 className="text-3xl font-bold text-[#1A1A2E] mb-8">
                      Suitable Candidates
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Patients with the following conditions are particularly
                      suitable for this therapy. All patients need to be assessed
                      by a physician before the first treatment to confirm
                      indications and develop personalized plans.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
                        <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                          1
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1A1A2E] mb-1">
                            Those with Facial Sagging After Weight Loss
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Those who experience facial sagging, hollowing or
                            &quot;collapsed face&quot; troubles after weight loss
                            and wish to improve facial contours without resorting
                            to surgery or injectable fillers.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
                        <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                          2
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1A1A2E] mb-1">
                            Those with Preventive Beauty Needs
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Weight losers who hope to undergo facial beauty
                            treatment simultaneously during gradual weight loss
                            to prevent skin sagging.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
                        <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                          3
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1A1A2E] mb-1">
                            Age-related Facial Sagging
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Those with facial collagen loss and contour sagging
                            due to aging or genetic factors.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
                        <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                          4
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1A1A2E] mb-1">
                            Those Seeking Natural Therapies
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Those seeking safe, non-invasive, natural beauty
                            methods and have concerns about surgery or injectable
                            treatments such as hyaluronic acid.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
                        <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                          5
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1A1A2E] mb-1">
                            Those Needing Holistic Conditioning
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Those who hope to improve complexion, appearance and
                            physical condition simultaneously through holistic qi
                            and blood conditioning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal x={30}>
                    <h2 className="text-3xl font-bold text-[#1A1A2E] mb-8">
                      Contraindications
                    </h2>
                    <p className="text-gray-600 mb-6">
                      The following conditions should not receive this therapy,
                      please inform the physician truthfully during consultation:
                    </p>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <ul className="space-y-4">
                        <li className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-rose-400 rounded-full mr-3"></span>
                          Pregnant women
                        </li>
                        <li className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-rose-400 rounded-full mr-3"></span>
                          Those with coagulation disorders
                        </li>
                        <li className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-rose-400 rounded-full mr-3"></span>
                          Those with local skin infection, damage or active
                          eczema/dermatitis
                        </li>
                        <li className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-rose-400 rounded-full mr-3"></span>
                          Diabetic patients with uncontrolled blood sugar
                        </li>
                      </ul>
                      <p className="text-gray-500 text-sm mt-6 pt-4 border-t">
                        Before the first treatment, the physician will conduct
                        TCM constitution identification and facial assessment to
                        ensure the plan precisely matches your individual
                        condition.
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* ===== TREATMENT PROCESS ===== */}
            <section className="py-20 lg:py-32 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                    Treatment Process
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    From initial consultation to return follow-up, MedKungfu
                    provides end-to-end accompanying diagnosis services for every
                    overseas patient coming to China for treatment, from
                    pre-departure planning to return follow-up
                  </p>
                </Reveal>
                <div className="space-y-6">
                  <Reveal className="bg-slate-50 rounded-2xl p-6 relative">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-bold text-[#1A1A2E] text-lg">
                            Online Preliminary Consultation and Needs Assessment
                          </h3>
                          <span className="text-sm text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                            1-3 working days
                          </span>
                        </div>
                        <p className="text-gray-600">
                          Contact MedKungfu via email to inform about facial
                          concerns. This therapy usually does not require
                          pre-operative remote video consultation; if there are
                          special needs or complex medical history, remote TCM
                          assessment can be arranged separately.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal className="bg-slate-50 rounded-2xl p-6 relative">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        2
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-bold text-[#1A1A2E] text-lg">
                            Develop China Travel Itinerary
                          </h3>
                          <span className="text-sm text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                            3-7 working days
                          </span>
                        </div>
                        <p className="text-gray-600">
                          After confirming the intention to receive treatment,
                          MedKungfu assists in planning the trip to China,
                          including: assisting with visa required materials (such
                          as hospital invitation letter); recommending
                          accommodation near the hospital; assisting with booking
                          airport transfers; and suggesting reasonable stay
                          duration based on the personalized treatment plan
                          developed by the physician.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal className="bg-slate-50 rounded-2xl p-6 relative">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        3
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-bold text-[#1A1A2E] text-lg">
                            Pre-admission Assessment
                          </h3>
                          <span className="text-sm text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                            Day 1 after arrival
                          </span>
                        </div>
                        <p className="text-gray-600">
                          After entry, accompanied by bilingual medical escort to
                          the hospital. The physician conducts the first
                          face-to-face consultation, including: TCM constitution
                          identification and syndrome differentiation analysis;
                          assessment of facial sagging degree and distribution;
                          confirmation of no contraindications; development of
                          personalized acupuncture point prescription and
                          treatment plan.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal className="bg-slate-50 rounded-2xl p-6 relative">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        4
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-bold text-[#1A1A2E] text-lg">
                            Acupuncture Treatment Implementation
                          </h3>
                          <span className="text-sm text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                            About 30 minutes each time
                          </span>
                        </div>
                        <p className="text-gray-600">
                          Each treatment takes about 30 minutes, led by senior
                          acupuncturists. MedKungfu bilingual medical escorts are
                          present throughout to ensure barrier-free
                          communication.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal className="bg-slate-50 rounded-2xl p-6 relative">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        5
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-bold text-[#1A1A2E] text-lg">
                            Phase Effect Assessment and Plan Adjustment
                          </h3>
                          <span className="text-sm text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                            After each phase
                          </span>
                        </div>
                        <p className="text-gray-600">
                          After completing each phase, the physician evaluates
                          the treatment effect, including: changes in facial
                          tightness and fullness; improvement in complexion and
                          overall condition; and adjusts acupuncture point
                          prescription or treatment frequency based on individual
                          response.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal className="bg-slate-50 rounded-2xl p-6 relative">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        6
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-bold text-[#1A1A2E] text-lg">
                            Pre-departure Summary and Home Maintenance Guidance
                          </h3>
                          <span className="text-sm text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                            At the end of treatment course
                          </span>
                        </div>
                        <p className="text-gray-600">
                          After completing the treatment course, the physician
                          provides written Chinese-English treatment summary and
                          home maintenance recommendations, including: daily
                          dietary conditioning (qi and blood supplementation);
                          recommended self-acupoint massage techniques; lifestyle
                          habit recommendations (adequate sleep, avoiding rapid
                          weight loss, etc.).
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* ===== WHY CHOOSE US ===== */}
            <section className="py-20 lg:py-32 bg-rose-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Why Choose Us
                  </h2>
                  <p className="text-rose-200 max-w-2xl mx-auto">
                    MedKungfu provides professional medical tourism services for
                    every overseas patient coming to China for treatment
                  </p>
                </Reveal>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Reveal className="bg-white/10 rounded-2xl p-6 text-center">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icons.globe className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">
                      Bilingual Medical Translation
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Dedicated personnel accompany patients for medical visits,
                      providing full-process medical interpretation; medical
                      records, diagnostic reports, and treatment plans are all
                      provided in Chinese-English translation to ensure
                      barrier-free communication between patients and physicians.
                    </p>
                  </Reveal>
                  <Reveal className="bg-white/10 rounded-2xl p-6 text-center">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icons.mapPin className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">
                      Private Car Transfer · Full-process Accompaniment
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Provides airport private car transfer, with dedicated
                      personnel responsible for pickup/drop-off and full-process
                      accompaniment for each visit, so patients don&apos;t have to
                      face transportation and hospital navigation difficulties
                      alone.
                    </p>
                  </Reveal>
                  <Reveal className="bg-white/10 rounded-2xl p-6 text-center">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icons.users className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">
                      Dedicated Coordinator · Butler-style Service
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Equipped with dedicated patient coordinator throughout the
                      process, coordinating appointments, tracking visit
                      progress, and covering non-medical living needs such as
                      dining, shopping, and local tours, truly achieving
                      butler-style one-stop service.
                    </p>
                  </Reveal>
                  <Reveal className="bg-white/10 rounded-2xl p-6 text-center">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icons.award className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">
                      Visa · Itinerary · Accommodation One-stop Arrangement
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Assists with preparing medical visa invitation letters and
                      application guidance, provides entry guidance and cultural
                      adaptation suggestions, and arranges suitable accommodation
                      for patients and families, ensuring worry-free travel.
                    </p>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* ===== CTA ===== */}
            <section id="contact" className="py-20 lg:py-32 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Reveal>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
                    Ready to Start Your Longhua Acupuncture Beauty Journey?
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Contact us for a free preliminary assessment. Our medical
                    consultants will respond as soon as possible and arrange
                    professional bilingual consultation services for you.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="mailto:contact@medkungfu.com"
                      className="px-8 py-4 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors"
                    >
                      Email Consultation
                    </a>
                    <Link
                      href="/contact"
                      className="px-8 py-4 border-2 border-rose-500 text-rose-500 font-semibold rounded-lg hover:bg-rose-50 transition-colors"
                    >
                      Online Inquiry
                    </Link>
                  </div>
                  <p className="text-gray-500 mt-8">
                    Email: contact@medkungfu.com
                  </p>
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

import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { Reveal } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/Reveal";
import {
  CoreAdvantagesSection,
  DistinctiveFeaturesSection,
  WhyChinaCtaSection,
} from "@/components/sites/www-medkungfu-com-363c9bc1/why-china-beb2e389/WhyChinaSections";

export const metadata: Metadata = {
  title: "Why Consider Medical Care in China | MedKungFu",
  description:
    "Why choose China for medical treatment: world-class technology, exceptional efficiency, comprehensive care, cutting-edge innovation, and medical-tourism-friendly access.",
};

export default function WhyChinaPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="Why Choose China for Medical Treatment"
          className="min-h-screen bg-[#F5F7FA] pt-10 pb-20"
        >
          <div className="container-custom">
            <Reveal className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-6 font-montserrat">
                Why Choose China Medical?
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience the perfect combination of world-class medical
                technology, exceptional efficiency, and comprehensive care that
                makes China a leading destination for international patients.
              </p>
            </Reveal>
            <CoreAdvantagesSection />
            <DistinctiveFeaturesSection />
            <WhyChinaCtaSection />
          </div>
        </main>
      </main>
      <SiteFooter />
    </>
  );
}

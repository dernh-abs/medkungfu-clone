import type { Metadata } from "next";

import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { ContactCtaSection } from "@/components/sites/www-medkungfu-com-363c9bc1/hospitals-detail/beijing-gaobo/ContactCtaSection";
import { ExpertTeamSection } from "@/components/sites/www-medkungfu-com-363c9bc1/hospitals-detail/beijing-gaobo/ExpertTeamSection";
import { HeroSection } from "@/components/sites/www-medkungfu-com-363c9bc1/hospitals-detail/beijing-gaobo/HeroSection";
import { HospitalIntroSection } from "@/components/sites/www-medkungfu-com-363c9bc1/hospitals-detail/beijing-gaobo/HospitalIntroSection";
import { InternationalServicesSection } from "@/components/sites/www-medkungfu-com-363c9bc1/hospitals-detail/beijing-gaobo/InternationalServicesSection";
import { SpecialtyProgramsSection } from "@/components/sites/www-medkungfu-com-363c9bc1/hospitals-detail/beijing-gaobo/SpecialtyProgramsSection";

export const metadata: Metadata = {
  title: "Beijing Gaobo Hospital | MedKungFu",
  description:
    "Beijing Gaobo Hospital — Beijing's first international research hospital. 'Small clinic, big research' with specialties in melanoma & sarcoma, digestive oncology, thoracic oncology, hematologic tumors & CAR-T, cardiovascular supportive care, and neuroscience.",
};

export default function BeijingGaoboPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="Beijing Gaobo Hospital - International Research Hospital"
          className="min-h-screen bg-white"
        >
          <HeroSection />
          <HospitalIntroSection />
          <SpecialtyProgramsSection />
          <ExpertTeamSection />
          <InternationalServicesSection />
          <ContactCtaSection />
        </main>
      </main>
      <SiteFooter />
    </>
  );
}

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/SiteHeader";
import { HeroSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/HeroSection";
import { CityStrip } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/CityStrip";
import { ServicesSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/ServicesSection";
import { TrustStatsSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/TrustStatsSection";
import { OurPromiseSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/OurPromiseSection";
import { MedicalProjectsSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/MedicalProjectsSection";
import { ServiceProcessSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/ServiceProcessSection";
import { PatientStoriesSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/PatientStoriesSection";
import { FeaturedFAQSection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/FeaturedFAQSection";
import { CTASection } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/CTASection";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/root-8a5edab2/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <HeroSection />
        <CityStrip />
        <ServicesSection />
        <TrustStatsSection />
        <OurPromiseSection />
        <MedicalProjectsSection />
        <ServiceProcessSection />
        <PatientStoriesSection />
        <FeaturedFAQSection />
        <CTASection />
        <SiteFooter />
      </main>
    </>
  );
}

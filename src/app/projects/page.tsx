import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { ProjectsHero } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-902ceeb2/ProjectsHero";
import { TreatmentCategoriesSection } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-902ceeb2/TreatmentCategoriesSection";
import { TreatmentHighlightsSection } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-902ceeb2/TreatmentHighlightsSection";

export const metadata: Metadata = {
  title: "Medical Programs in China for International Patients | MedKungFu",
  description:
    "Explore MedKungFu's advantageous medical projects: heavy ion/proton therapy, CAR-T, BNCT, stem cell therapy, arthritis treatments, TCM specialties and health checkups at China's top hospitals.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="Medical Projects and Treatments"
          className="min-h-screen bg-[#F5F7FA] pt-10 pb-20"
        >
          <div className="container-custom">
            <ProjectsHero />
            <TreatmentCategoriesSection />
            <TreatmentHighlightsSection />
          </div>
        </main>
      </main>
      <SiteFooter />
    </>
  );
}

import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { StoriesHero } from "@/components/sites/www-medkungfu-com-363c9bc1/stories-80f58987/StoriesHero";
import { PatientStoriesSection } from "@/components/sites/www-medkungfu-com-363c9bc1/stories-80f58987/PatientStoriesSection";

export const metadata: Metadata = {
  title: "Patient Stories and Care Pathways | MedKungFu",
  description:
    "Real patient experiences with MedKungFu — from heavy ion therapy for prostate cancer to CAR-T cell therapy for lymphoma, and the care pathways that made them possible.",
};

export default function StoriesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="Patient Stories and Testimonials"
          className="min-h-screen bg-[#F5F7FA] pt-10 pb-20"
        >
          <div className="container-custom">
            <StoriesHero />
            <PatientStoriesSection />
          </div>
        </main>
      </main>
      <SiteFooter />
    </>
  );
}

import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { ResourcesHero } from "@/components/sites/www-medkungfu-com-363c9bc1/resources-b4967042/ResourcesHero";
import { ResourceCards } from "@/components/sites/www-medkungfu-com-363c9bc1/resources-b4967042/ResourceCards";

export const metadata: Metadata = {
  title: "Medical Tourism Resources and Guides | MedKungFu",
  description:
    "Comprehensive guides and practical tools for your medical journey to China — treatment guides, record checklists, visa guides, and city guides.",
};

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <main
          role="main"
          aria-label="Resources and Information"
          className="min-h-screen bg-[#F5F7FA] pt-10 pb-20"
        >
          <div className="container-custom">
            <ResourcesHero />
            <ResourceCards />
          </div>
        </main>
      </main>
      <SiteFooter />
    </>
  );
}

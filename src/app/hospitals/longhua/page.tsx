import type { Metadata } from "next";

import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

import LonghuaContent from "./LonghuaContent";

export const metadata: Metadata = {
  title: "Longhua Hospital Affiliated to Shanghai University of TCM | MedKungFu",
  description:
    "One of the Four Earliest Established TCM Clinical Bases Nationwide. Grade 3A TCM hospital integrating medical care, teaching and research · National Demonstration TCM Hospital.",
};

export default function LonghuaPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <LonghuaContent />
      </main>
      <SiteFooter />
    </>
  );
}

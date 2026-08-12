import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { FaqContent } from "@/components/sites/www-medkungfu-com-363c9bc1/faq-1965ee0f/FaqContent";

export const metadata: Metadata = {
  title: "FAQ for Medical Tourism in China | MedKungFu",
  description:
    "A practical FAQ for international patients evaluating cross-border medical care in China — care coordination, costs, timelines, risks, and selected treatment directions.",
};

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <div className="min-h-screen bg-[#F5F7FA] pb-20">
          <FaqContent />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

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
          <section className="relative overflow-hidden bg-[#123D32] text-white">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,179,66,0.25),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.12),transparent_28%)]"
              aria-hidden="true"
            />
            <div className="container-custom relative py-16 md:py-20">
              <div className="max-w-4xl">
                <p className="text-sm uppercase tracking-[0.22em] text-[#9CCC65] mb-4">
                  MedKungfu Knowledge Base
                </p>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
                  Frequently Asked Questions About Medical Care in China
                </h1>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
                  A practical FAQ for international patients and families
                  evaluating cross-border medical resources, care coordination,
                  costs, timelines, risks, and selected treatment directions in
                  China.
                </p>
              </div>
            </div>
          </section>
          <FaqContent />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

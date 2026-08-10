import type { Metadata } from "next";

import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

import PainlessEndoscopyContent from "./PainlessEndoscopyContent";

export const metadata: Metadata = {
  title: "Painless Endoscopy - Advanced Gastrointestinal Examination | MedKungFu",
  description:
    "Premium international painless endoscopy in China. Deep digestive screening, painless gastroscopy and colonoscopy, same-day completion, international standards.",
};

export default function PainlessEndoscopyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <PainlessEndoscopyContent />
      </main>
      <SiteFooter />
    </>
  );
}

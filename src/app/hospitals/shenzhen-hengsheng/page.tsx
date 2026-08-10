import type { Metadata } from "next";

import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

import ShenzhenHengshengContent from "./ShenzhenHengshengContent";

export const metadata: Metadata = {
  title: "Shenzhen Hengsheng Hospital | MedKungFu",
  description:
    "National Grade 3 Comprehensive Hospital · Fosun Health Member Hospital. Shenzhen Hengsheng Hospital in Baoan District — Reproductive Medicine, Medical Gastroenterology, Ophthalmology, Orthopaedics, Rehabilitation Medicine and International Medical Center.",
};

export default function ShenzhenHengshengHospitalPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <ShenzhenHengshengContent />
      </main>
      <SiteFooter />
    </>
  );
}

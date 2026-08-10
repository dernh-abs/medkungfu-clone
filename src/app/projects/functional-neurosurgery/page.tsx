import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";

import FunctionalNeurosurgeryContent from "./FunctionalNeurosurgeryContent";

export const metadata: Metadata = {
  title: "Functional Neurosurgery Programme - Parkinson's Disease & Movement Disorders Treatment",
  description:
    "Parkinson's Disease and Movement Disorders precision treatment by MedKungFu: DBS deep brain stimulation and MRgFUS focused ultrasound at China's leading functional neurosurgery center, with world-first 5G remote follow-up.",
};

export default function FunctionalNeurosurgeryPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <FunctionalNeurosurgeryContent />
      </main>
      <SiteFooter />
    </>
  );
}

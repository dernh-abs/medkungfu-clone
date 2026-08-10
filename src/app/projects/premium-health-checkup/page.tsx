import type { Metadata } from "next";

import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";

import PremiumHealthCheckupContent from "./PremiumHealthCheckupContent";

export const metadata: Metadata = {
  title: "Premium Health Checkup - Comprehensive Health Screening | MedKungFu",
  description:
    "Premium international health checkup in China. One checkup, six deep screenings, complete privacy — world-class equipment, AI-assisted diagnosis, same-day reports.",
};

export default function PremiumHealthCheckupPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <PremiumHealthCheckupContent />
      </main>
      <SiteFooter />
    </>
  );
}

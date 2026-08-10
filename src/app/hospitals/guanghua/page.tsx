import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { GuanghuaPage } from "@/components/sites/www-medkungfu-com-363c9bc1/hospitals-detail/GuanghuaPage";

export const metadata: Metadata = {
  title: "Guanghua Hospital Affiliated to Shanghai University of TCM | MedKungFu",
  description:
    "Shanghai Guanghua Integrated Chinese-Western Medicine Hospital — a Grade 3A joint disease specialist with leading Rheumatology & Immunology, Orthopedics & Traumatology, Joint Medicine and the city's only 24-hour gout emergency.",
};

export default function GuanghuaHospitalPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <GuanghuaPage />
      </main>
      <SiteFooter />
    </>
  );
}

import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { SunYatSenMemorialPage } from "@/components/sites/www-medkungfu-com-363c9bc1/hospitals-detail/SunYatSenMemorialPage";

export const metadata: Metadata = {
  title: "Sun Yat-sen Memorial Hospital | MedKungFu",
  description:
    "Founded in 1835, Sun Yat-sen Memorial Hospital is China's first Western medicine hospital — with a leading Breast Tumor Center, Oncology, Cardiology, Urology and Obstetrics & Gynecology specialties.",
};

export default function SunYatSenMemorialHospitalPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <SunYatSenMemorialPage />
      </main>
      <SiteFooter />
    </>
  );
}

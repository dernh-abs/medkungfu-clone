import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/www-medkungfu-com-363c9bc1/shared/SiteFooter";
import { CartTherapyPage } from "@/components/sites/www-medkungfu-com-363c9bc1/projects-detail/immunotherapy/CartTherapyPage";

export const metadata: Metadata = {
  title: "CAR-T Cell Therapy for Hematologic Malignancies | MedKungFu",
  description:
    "CAR-T Cell Therapy for Hematologic Malignancies in China — revolutionary personalized immunotherapy with 6,000+ clinical infusions and a 96.4% response rate at NMPA-approved partner hospitals.",
};

export default function CartTherapyProjectPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow pt-[72px]">
        <CartTherapyPage />
      </main>
      <SiteFooter />
    </>
  );
}

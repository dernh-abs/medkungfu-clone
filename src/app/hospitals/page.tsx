import type { Metadata } from "next";

import PublicPage from "@/components/sites/www-medkungfu-com-363c9bc1/shared/PublicPage";

export const metadata: Metadata = {
  title: "Partner Hospitals and Medical Resources in China | MedKungFu",
  description:
    "MedKungFu partners with China's most prestigious hospitals — Shanghai Proton & Heavy Ion Center, Ruijin Hospital Hainan, Longhua Hospital, and more across Beijing, Shanghai, Guangzhou and Hainan.",
};

export default function HospitalsPage() {
  return <PublicPage slug="hospitals" />;
}

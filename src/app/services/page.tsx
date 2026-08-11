import type { Metadata } from "next";

import PublicPage from "@/components/sites/www-medkungfu-com-363c9bc1/shared/PublicPage";

export const metadata: Metadata = {
  title: "Cross-Border Medical Coordination Services | MedKungFu",
  description:
    "MedKungFu's comprehensive medical tourism services: expert video consultation, full-process coordination, visa & travel assistance, translation & escort, and rehabilitation follow-up.",
};

export default function ServicesPage() {
  return <PublicPage slug="services" />;
}

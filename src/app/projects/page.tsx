import type { Metadata } from "next";

import PublicPage from "@/components/sites/www-medkungfu-com-363c9bc1/shared/PublicPage";

export const metadata: Metadata = {
  title: "Medical Programs in China for International Patients | MedKungFu",
  description:
    "Explore MedKungFu's advantageous medical projects: heavy ion/proton therapy, CAR-T, BNCT, stem cell therapy, arthritis treatments, TCM specialties and health checkups at China's top hospitals.",
};

export default function ProjectsPage() {
  return <PublicPage slug="projects" />;
}

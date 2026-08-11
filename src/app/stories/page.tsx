import type { Metadata } from "next";

import PublicPage from "@/components/sites/www-medkungfu-com-363c9bc1/shared/PublicPage";

export const metadata: Metadata = {
  title: "Patient Stories and Care Pathways | MedKungFu",
  description:
    "Real patient experiences with MedKungFu — from heavy ion therapy for prostate cancer to CAR-T cell therapy for lymphoma, and the care pathways that made them possible.",
};

export default function StoriesPage() {
  return <PublicPage slug="stories" />;
}

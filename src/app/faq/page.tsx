import type { Metadata } from "next";

import PublicPage from "@/components/sites/www-medkungfu-com-363c9bc1/shared/PublicPage";

export const metadata: Metadata = {
  title: "FAQ for Medical Tourism in China | MedKungFu",
  description:
    "A practical FAQ for international patients evaluating cross-border medical care in China — care coordination, costs, timelines, risks, and selected treatment directions.",
};

export default function FaqPage() {
  return <PublicPage slug="faq" />;
}

import type { Metadata } from "next";

import PublicPage from "@/components/sites/www-medkungfu-com-363c9bc1/shared/PublicPage";

export const metadata: Metadata = {
  title: "About MedKungfu 康福来 | Cross-Border Healthcare Concierge",
  description:
    "MedKungFu China is a specialized international medical placement service connecting global patients with China's world-class healthcare system.",
};

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  return <PublicPage slug="about" lang={lang === "zh" ? "zh" : "en"} />;
}

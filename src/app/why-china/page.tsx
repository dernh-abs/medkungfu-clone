import type { Metadata } from "next";

import PublicPage from "@/components/sites/www-medkungfu-com-363c9bc1/shared/PublicPage";

export const metadata: Metadata = {
  title: "Why Consider Medical Care in China | MedKungFu",
  description:
    "Why choose China for medical treatment: world-class technology, exceptional efficiency, comprehensive care, cutting-edge innovation, and medical-tourism-friendly access.",
};

export default async function WhyChinaPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  return <PublicPage slug="why-china" lang={lang === "zh" ? "zh" : "en"} />;
}

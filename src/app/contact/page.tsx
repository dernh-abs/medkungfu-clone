import type { Metadata } from "next";

import PublicPage from "@/components/sites/www-medkungfu-com-363c9bc1/shared/PublicPage";

export const metadata: Metadata = {
  title: "Contact MedKungfu for Medical Resource Assessment | MedKungFu",
  description:
    "Contact MedKungfu for a free consultation. Reach us by email, WhatsApp, or through our inquiry form — our team responds within one business day.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  return <PublicPage slug="contact" lang={lang === "zh" ? "zh" : "en"} />;
}

import type { Metadata, Viewport } from "next";
import { Open_Sans, Montserrat } from "next/font/google";

import { LanguageProvider } from "@/lib/i18n/LanguageProvider";

import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "MedKungFu - Cross-Border Medical Tourism | Advanced Healthcare in China",
  description:
    "Premium cross-border medical tourism services to China's top hospitals. Access advanced treatments including heavy ion therapy, CAR-T, stem cell therapy, BNCT, and TCM specialties at affordable costs.",
};

export const viewport: Viewport = {
  themeColor: "#1B4D3E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F7FA] text-[#1A1A2E] font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

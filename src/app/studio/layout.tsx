// Studio layout — full-height workspace, no site chrome.
// The Studio editor has its own toolbar and panels; it does not use the
// site's LanguageProvider or SiteHeader/SiteFooter.

import type { ReactNode } from "react";

export const metadata = {
  title: "Studio Editor — MedKungFu",
  description: "WYSIWYG content editor with JSON Patch egress",
};

export default function StudioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-gray-50">
      {children}
    </div>
  );
}

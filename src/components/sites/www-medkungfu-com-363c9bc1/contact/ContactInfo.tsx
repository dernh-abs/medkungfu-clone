// Contact information cards for the /contact page (Email / WhatsApp /
// Headquarters / Working Hours). Matches the source site's aside column.
// Bilingual via the site translation dictionary (contact.* keys).
"use client";

import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface ContactItem {
  labelKey: string;
  valueKey: string;
  icon: LucideIcon;
}

const ITEMS: ContactItem[] = [
  { labelKey: "contact.email", valueKey: "contact.emailValue", icon: Icons.mail },
  { labelKey: "contact.whatsapp", valueKey: "contact.whatsappValue", icon: Icons.phone },
  { labelKey: "contact.headquarters", valueKey: "contact.headquartersValue", icon: Icons.mapPin },
  {
    labelKey: "contact.workingHours",
    valueKey: "contact.workingHoursValue",
    icon: Icons.clock,
  },
];

export function ContactHeader() {
  const { t } = useLanguage();
  return (
    <Reveal className="text-center mb-16">
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4 font-montserrat">
        {t("contact.title")}
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">{t("contact.subtitle")}</p>
    </Reveal>
  );
}

export function ContactInfo() {
  const { t } = useLanguage();
  return (
    <aside
      aria-label={t("contact.informationAriaLabel")}
      className="lg:col-span-1 space-y-6"
    >
      {ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <dl
            key={item.labelKey}
            className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4"
          >
            <dt className="sr-only">{t(item.labelKey)}</dt>
            <dd
              className="p-3 bg-[#1B4D3E]/10 text-[#1B4D3E] rounded-lg"
              aria-hidden="true"
            >
              <Icon className="h-6 w-6" />
            </dd>
            <div>
              <dt className="font-bold text-[#1A1A2E]">{t(item.labelKey)}</dt>
              <dd className="text-gray-500 text-sm">{t(item.valueKey)}</dd>
            </div>
          </dl>
        );
      })}
    </aside>
  );
}

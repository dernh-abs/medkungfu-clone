"use client";

// "Payment Methods" — 3 white cards in a 3-col grid, scale reveal.
// Matches /services. Bilingual in zh mode.
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RU } from "@/lib/i18n/ru";

import { Icons, type LucideIcon } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface PaymentMethod {
  icon: LucideIcon;
  title: string;
  description: string;
  titleZh: string;
  descriptionZh: string;
}

const METHODS: PaymentMethod[] = [
  {
    icon: Icons.creditCard,
    title: "International Credit Card",
    description: "Visa / Mastercard",
    titleZh: "国际信用卡",
    descriptionZh: "Visa / Mastercard",
  },
  {
    icon: Icons.refreshCw,
    title: "Bank Transfer",
    description: "Wire transfer to HK account",
    titleZh: "银行转账",
    descriptionZh: "电汇至香港账户",
  },
  {
    icon: Icons.shield,
    title: "Secure Payment",
    description: "Encrypted transactions",
    titleZh: "安全支付",
    descriptionZh: "加密交易保障",
  },
];

export function PaymentMethodsSection() {
  const { lang } = useLanguage();
  const zh = lang === "zh";
  const ru = lang === "ru";

  return (
    <section aria-labelledby="payment-methods-heading">
      <h2
        id="payment-methods-heading"
        className="text-2xl font-bold mb-8 text-center text-[#1A1A2E]"
      >
        {zh ? "支付方式" : ru ? "Способы оплаты" : "Payment Methods"}
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none" role="list">
        {METHODS.map((method) => {
          const Icon = method.icon;
          return (
            <Reveal key={method.title} scale={0.95} className="flex">
              <li className="bg-white p-8 rounded-xl shadow-sm text-center card-hover w-full">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] mb-4"
                  aria-hidden="true"
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#1A1A2E]">
                  {ru
                    ? (RU[method.title] ?? method.title)
                    : zh
                      ? method.titleZh
                      : method.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {ru
                    ? (RU[method.description] ?? method.description)
                    : zh
                      ? method.descriptionZh
                      : method.description}
                </p>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

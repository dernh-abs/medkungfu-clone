"use client";

// Contact inquiry form for the /contact page — Name, Email/WhatsApp,
// Area of Interest (checkbox chips), and a message textarea. Matches the
// source site's markup. Submission is simulated (demo): ~800ms, then a
// confirmation message and reset. Bilingual via the site translation
// dictionary (contact.* keys; shared form labels reuse cta.* keys).
import { useState, type FormEvent } from "react";

import { Reveal } from "../shared/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const INTERESTS = [
  { value: "checkup", labelKey: "contact.interestCheckup" },
  { value: "tcm", labelKey: "contact.interestTcm" },
  { value: "dentistry", labelKey: "contact.interestDentistry" },
  { value: "orthopedics", labelKey: "contact.interestOrthopedics" },
  { value: "oncology", labelKey: "contact.interestOncology" },
  { value: "ent", labelKey: "contact.interestEnt" },
  { value: "other", labelKey: "contact.interestOther" },
];

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B4D3E] focus:ring-1 focus:ring-[#1B4D3E] outline-none transition-colors";

export function ContactForm() {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitting(false);
    setSent(true);
    form.reset();
  };

  return (
    <section
      aria-labelledby="contact-form-heading"
      className="lg:col-span-2 bg-white p-8 md:p-10 rounded-2xl shadow-sm"
    >
      <h2 id="contact-form-heading" className="sr-only">
        {t("contact.formAriaLabel")}
      </h2>
      <Reveal y={20}>
        <h3 className="text-2xl font-bold mb-8 text-[#1A1A2E]">
          {t("contact.sendMessage")}
        </h3>
        {sent ? (
          <p className="rounded-lg bg-[#1B4D3E]/10 text-[#1B4D3E] px-6 py-5 font-medium">
            Thank you! Your message has been received. Our team will contact
            you shortly.
          </p>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6 border-0 p-0 m-0">
              <legend className="sr-only">{t("contact.personalInformation")}</legend>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("cta.name")}
                  <span className="text-red-500 ml-1" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder={t("cta.name")}
                  required
                  aria-required="true"
                  aria-describedby="name-help"
                  autoComplete="name"
                  className={inputClass}
                />
                <span id="name-help" className="sr-only">
                  {t("contact.nameHelp")}
                </span>
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("cta.contact")}
                  <span className="text-red-500 ml-1" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="contact"
                  type="text"
                  name="contact"
                  placeholder={t("cta.contact")}
                  required
                  aria-required="true"
                  aria-describedby="contact-help"
                  autoComplete="email tel"
                  className={inputClass}
                />
                <span id="contact-help" className="sr-only">
                  {t("contact.contactHelp")}
                </span>
              </div>
            </fieldset>

            <fieldset className="border-0 p-0 m-0" aria-describedby="interest-help">
              <legend className="block text-sm font-medium text-gray-700 mb-3">
                {t("cta.interest")}
                <span className="text-red-500 ml-1" aria-hidden="true">
                  *
                </span>
              </legend>
              <div className="flex flex-wrap gap-3">
                {INTERESTS.map((interest) => (
                  <label
                    key={interest.value}
                    className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-[#1B4D3E] focus-within:ring-offset-2 border-gray-200 bg-white text-gray-700 hover:border-[#1B4D3E] hover:text-[#1B4D3E]"
                  >
                    <input
                      type="checkbox"
                      name="interest_areas"
                      className="sr-only"
                      value={interest.value}
                    />
                    <span>{t(interest.labelKey)}</span>
                  </label>
                ))}
              </div>
              <span id="interest-help" className="mt-2 block text-xs text-gray-500">
                {t("contact.interestHelp")}
              </span>
            </fieldset>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t("contact.needsLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={t("contact.needsPlaceholder")}
                rows={5}
                aria-describedby="message-help"
                className={`${inputClass} resize-none`}
              />
              <span id="message-help" className="sr-only">
                {t("contact.needsHelp")}
              </span>
            </div>

            <button
              type="submit"
              disabled={submitting}
              aria-busy={submitting}
              className="inline-flex h-[60px] w-[180px] items-center justify-center rounded-lg bg-[#1E6B55] text-lg font-semibold text-white transition-colors hover:bg-[#185846] focus:outline-none focus:ring-2 focus:ring-[#1E6B55] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? t("contact.sending") : t("contact.sendButton")}
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}

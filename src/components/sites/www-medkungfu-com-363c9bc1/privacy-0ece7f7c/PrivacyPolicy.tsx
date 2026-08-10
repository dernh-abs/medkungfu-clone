// MedKungFu Privacy Policy — 14 sections, verbatim from the source site.
import type { ReactNode } from "react";

const listCls = "space-y-3 text-gray-700 list-disc pl-6";
const listClsTight = "space-y-2 text-gray-700 list-disc pl-6";
const pCls = "text-gray-700 leading-relaxed";
const pClsMb = "text-gray-700 mb-4";

function EmailLink({ email }: { email: string }) {
  return (
    <a href={`mailto:${email}`} className="text-[#1B4D3E] hover:underline">
      {email}
    </a>
  );
}

const SECTIONS: { heading?: string; body: ReactNode }[] = [
  {
    body: (
      <p className={pCls}>
        MedKungfu, a brand of MedTech China Limited (&quot;MedKungfu&quot;,
        &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), respects your privacy. This
        Privacy Policy explains what personal data we collect, how we use and
        share it, and the rights and choices you have. It applies to visitors to
        our website, people who contact us, and users of our healthcare concierge
        services.
      </p>
    ),
  },
  {
    heading: "1. Who we are (Data Controller)",
    body: (
      <ul className={listClsTight}>
        <li>
          <strong>Legal entity:</strong> [Full legal name of MedTech China Limited]
        </li>
        <li>
          <strong>Registered address:</strong> [registered address]
        </li>
        <li>
          <strong>Privacy contact:</strong> <EmailLink email="privacy@medkungfu.com" />
        </li>
        <li>
          <strong>EU/UK representative (if appointed under GDPR Art. 27):</strong>{" "}
          [name and contact]
        </li>
      </ul>
    ),
  },
  {
    heading: "2. Personal data we collect",
    body: (
      <ul className={listCls}>
        <li>
          <strong>Identity &amp; contact data:</strong> name, email, phone number,
          organization, job title.
        </li>
        <li>
          <strong>Enquiry &amp; booking data:</strong> the services you ask about,
          quote requests, scheduling and travel details.
        </li>
        <li>
          <strong>Health data:</strong> where you ask us to arrange medical
          services, health-related information needed to coordinate your care.
          This is sensitive (&quot;special category&quot;) data, processed only with
          your explicit consent.
        </li>
        <li>
          <strong>Payment data:</strong> billing details where you purchase
          services (we do not store full card numbers).
        </li>
        <li>
          <strong>Technical &amp; usage data:</strong> IP address, device and
          browser type, and how you use our website.
        </li>
      </ul>
    ),
  },
  {
    heading: "3. How we collect your data",
    body: (
      <ul className={listCls}>
        <li>
          Directly from you (when you contact us, request a quote, or use our
          services).
        </li>
        <li>
          From professional or publicly available business sources, when we
          introduce our services to organizations in international education and
          related sectors.
        </li>
        <li>
          Automatically through cookies and similar technologies on our website
          (see Section 7).
        </li>
      </ul>
    ),
  },
  {
    heading: "4. How we use your data and our legal bases (GDPR)",
    body: (
      <ul className={listCls}>
        <li>
          <strong>To respond to enquiries and provide services</strong> —
          performance of a contract or steps taken at your request.
        </li>
        <li>
          <strong>
            To send introductory or marketing messages to professional contacts
          </strong>{" "}
          — our legitimate interest in promoting our services; you may opt out at
          any time.
        </li>
        <li>
          <strong>To arrange medical services</strong> — your explicit consent.
        </li>
        <li>
          <strong>To process payments and keep records</strong> — performance of a
          contract and legal obligations.
        </li>
        <li>
          <strong>To improve and secure our website</strong> — legitimate interest.
        </li>
        <li>
          <strong>To comply with law</strong> — legal obligation.
        </li>
      </ul>
    ),
  },
  {
    heading: "5. How we share your data",
    body: (
      <>
        <p className={pClsMb}>We share personal data only as needed with:</p>
        <ul className={`${listCls} mb-4`}>
          <li>
            <strong>Hospitals and healthcare providers</strong> in China, to
            arrange the services you request.
          </li>
          <li>
            <strong>Service providers</strong> (e.g., translation, scheduling,
            payment processing, IT), under confidentiality and data protection
            terms.
          </li>
          <li>
            <strong>Authorities or advisors</strong>, where required by law or to
            protect our rights.
          </li>
        </ul>
        <p className="text-gray-700 font-medium">
          We do not sell your personal data, and we do not &quot;share&quot; it for
          cross-context behavioral advertising as defined under California law.
        </p>
      </>
    ),
  },
  {
    heading: "6. International data transfers",
    body: (
      <p className={pCls}>
        We are based in China, so your personal data will be transferred to and
        processed in China, which is outside the EU/UK and may not offer the same
        level of data protection. Where we transfer personal data from the EU/UK,
        we use appropriate safeguards (such as Standard Contractual Clauses) in
        line with applicable law. You may contact us for more information.
      </p>
    ),
  },
  {
    heading: "7. Cookies and tracking",
    body: (
      <p className={pCls}>
        Our website may use cookies and similar technologies for essential
        functions, analytics, and preferences. Where required (e.g., in the
        EU/UK), we ask for your consent before using non-essential cookies. You
        can manage cookies through our cookie banner or your browser settings. We
        honor recognized opt-out preference signals (such as Global Privacy
        Control) where applicable.
      </p>
    ),
  },
  {
    heading: "8. Data retention",
    body: (
      <p className={pCls}>
        We keep personal data only as long as necessary for the purposes described
        above, then delete or anonymize it. Professional contacts who opt out are
        removed from our marketing lists promptly.
      </p>
    ),
  },
  {
    heading: "9. Security",
    body: (
      <p className={pCls}>
        We use appropriate technical and organizational measures to protect your
        personal data against unauthorized access, loss, or misuse. No method of
        transmission is 100% secure, but we work to protect your information and
        will notify you and authorities of a data breach where required by law.
      </p>
    ),
  },
  {
    heading: "10. Children's privacy",
    body: (
      <p className={pCls}>
        Our services and website are intended for adults and are not directed to
        children under 16. We do not knowingly collect personal data from
        children. If you believe a child has provided us data, please contact us
        and we will delete it.
      </p>
    ),
  },
  {
    heading: "11. Your rights — EU / UK (GDPR)",
    body: (
      <>
        <p className={pClsMb}>If you are in the EU or UK, you have the right to:</p>
        <ul className={`${listCls} mb-4`}>
          <li>Access, correct, or delete your personal data;</li>
          <li>
            Restrict or object to processing (including direct marketing);
          </li>
          <li>
            Withdraw consent at any time (without affecting prior processing);
          </li>
          <li>Data portability.</li>
        </ul>
        <p className={pCls}>
          You may also lodge a complaint with your local data protection
          authority. To exercise any right, contact{" "}
          <EmailLink email="privacy@medkungfu.com" />.
        </p>
      </>
    ),
  },
  {
    heading: "12. Your rights — United States (California & other states)",
    body: (
      <>
        <p className={pClsMb}>
          Depending on your state (e.g., California&apos;s CCPA/CPRA, and laws in
          Virginia, Colorado, Connecticut, and other states), you may have the
          right to:
        </p>
        <ul className={`${listCls} mb-4`}>
          <li>Know what personal data we collect and how we use it;</li>
          <li>Access, correct, or delete your personal data;</li>
          <li>
            Opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal data (note: we
            do not sell or share);
          </li>
          <li>Limit the use of sensitive personal data;</li>
          <li>Not be discriminated against for exercising your rights.</li>
        </ul>
        <p className={pCls}>
          California residents may also request the categories of personal data
          collected and disclosed. To exercise any right, contact{" "}
          <EmailLink email="privacy@medkungfu.com" />. We will not discriminate
          against you for making a request. You may use an authorized agent where
          permitted by law.
        </p>
      </>
    ),
  },
  {
    heading: "13. Marketing choices",
    body: (
      <p className={pCls}>
        You can opt out of marketing at any time by replying &quot;unsubscribe&quot; to
        any email or contacting <EmailLink email="contact@medkungfu.com" />. We
        action requests promptly.
      </p>
    ),
  },
  {
    heading: "14. Changes to this policy",
    body: (
      <p className={pCls}>
        We may update this Privacy Policy from time to time. The current version
        is always posted here with the &quot;Last updated&quot; date. Material changes
        will be highlighted where appropriate.
      </p>
    ),
  },
];

export function PrivacyPolicy() {
  return (
    <article className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
      {SECTIONS.map((section, i) => (
        <section key={i}>
          {section.heading && (
            <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">
              {section.heading}
            </h2>
          )}
          {section.body}
        </section>
      ))}
    </article>
  );
}

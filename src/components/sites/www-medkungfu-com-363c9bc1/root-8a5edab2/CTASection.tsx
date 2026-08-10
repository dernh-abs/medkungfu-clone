"use client";

// Gradient green "Start Your Medical Journey" CTA section with a contact
// inquiry form (2-col fieldset on desktop). Matches MedKungFu's homepage.
// The form simulates submission: ~800ms delay, then resets.
import { useState, type FormEvent } from "react";

import { Reveal } from "../shared/Reveal";

export function CTASection() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <section
      aria-labelledby="cta-heading"
      className="py-20 bg-gradient-to-r from-[#1B4D3E] to-[#2E7D5A] text-white"
    >
      <div className="container-custom text-center">
        <Reveal y={20}>
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold mb-12 font-montserrat"
          >
            Start Your Medical Journey
          </h2>
        </Reveal>
        <Reveal y={20}>
          <form
            className="max-w-4xl mx-auto text-left"
            onSubmit={handleSubmit}
          >
            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6 border-0 p-0 m-0">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white w-full"
                />
              </div>
              <div>
                <label htmlFor="contact" className="sr-only">
                  Email / WhatsApp
                </label>
                <input
                  id="contact"
                  type="text"
                  name="contact"
                  placeholder="Email / WhatsApp"
                  required
                  className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white w-full"
                />
              </div>
              <div>
                <label htmlFor="interest_area" className="sr-only">
                  Area of Interest
                </label>
                <select
                  id="interest_area"
                  name="interest_area"
                  required
                  defaultValue=""
                  className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white appearance-none cursor-pointer w-full"
                >
                  <option value="" disabled>
                    Area of Interest
                  </option>
                  <option value="oncology">Oncology</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="regenerative">Regenerative Medicine</option>
                  <option value="integrative">Integrative Medicine</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Please describe your medical needs or questions in detail..."
                  className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white w-full resize-none"
                />
              </div>
            </fieldset>
            <div className="mt-8">
              <button
                type="submit"
                disabled={submitting}
                className="w-full md:w-auto px-12 py-4 bg-white text-[#1B4D3E] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {submitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

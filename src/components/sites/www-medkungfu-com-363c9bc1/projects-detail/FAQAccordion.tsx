"use client";

// Collapsible FAQ accordion for the painless-endoscopy project page.
// The captured DOM shows question buttons with a chevron-down icon whose
// transition-transform class indicates it rotates when expanded.
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <Reveal
            y={20}
            key={item.question}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold text-[#1A1A2E]">{item.question}</span>
              <Icons.chevronDown
                className={cn(
                  "text-gray-400 transition-transform flex-shrink-0 h-5 w-5",
                  isOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}

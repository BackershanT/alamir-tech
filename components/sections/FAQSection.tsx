import React from "react";
import { Accordion } from "../ui/Accordion";
import { Badge } from "../ui/Badge";
import { FAQ_ITEMS } from "@/lib/faq-data";

export function FAQSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <Badge variant="cyan">FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
              Question, answered
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Find quick answers to common questions about our delivery process, pricing models, and technology stack.
            </p>
            <p className="text-xs sm:text-sm text-brand-muted">
              Need more details?{" "}
              <a href="#contact" className="text-brand-blue font-bold hover:underline">
                Contact our engineering team
              </a>
              .
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </div>
      </div>
    </section>
  );
}

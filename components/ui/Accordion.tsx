"use client";

import React, { useState } from "react";
import { ChevronDown } from "../icons";
import { FAQItem } from "@/lib/faq-data";

interface AccordionProps {
  items: FAQItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3.5">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-brand-border bg-white overflow-hidden transition-all duration-200 shadow-sm"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full px-6 py-4.5 flex items-center justify-between text-left gap-4 font-bold text-sm sm:text-base text-brand-navy hover:text-brand-blue transition-colors cursor-pointer"
            >
              <span>{item.question}</span>
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-brand-muted transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-brand-pink bg-brand-pink/10" : "bg-brand-light"
                }`}
              >
                <ChevronDown size={16} />
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-brand-muted leading-relaxed border-t border-brand-border/40 animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

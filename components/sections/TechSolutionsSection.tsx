import React from "react";
import Link from "next/link";
import { ArrowRight } from "../icons";
import { Badge } from "../ui/Badge";
import { TECH_SOLUTIONS } from "@/lib/services-data";

export function TechSolutionsSection() {
  const accentClasses = {
    cyan: "border-t-4 border-t-brand-cyan",
    pink: "border-t-4 border-t-brand-pink",
    purple: "border-t-4 border-t-brand-purple",
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <Badge variant="blue">OUR SERVICES</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Technology Solutions That Move <br className="hidden sm:inline" />
            Your Business Forward
          </h2>
          <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto">
            We deliver modern, scalable software solutions built to match your exact enterprise requirements and business goals.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECH_SOLUTIONS.map((sol, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border border-brand-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                accentClasses[sol.accent]
              }`}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-navy hover:text-brand-blue transition-colors">
                  {sol.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {sol.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-border/60">
                <Link
                  href={sol.href}
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy hover:text-brand-pink transition-colors group"
                >
                  <span>{sol.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

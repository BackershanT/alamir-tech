import React from "react";
import Link from "next/link";
import { ArrowRight } from "../icons";
import { Badge } from "../ui/Badge";
import { TECH_SOLUTIONS } from "@/lib/services-data";

export function TechSolutionsSection() {
  const accentBorderColors = {
    cyan: "border-t-[#0599D6]",
    pink: "border-t-[#E60085]",
    purple: "border-t-[#730D85]",
  };

  const accentBadgeColors = {
    cyan: "text-[#0599D6] bg-[#0599D6]/10",
    pink: "text-[#E60085] bg-[#E60085]/10",
    purple: "text-[#730D85] bg-[#730D85]/10",
  };

  return (
    <section id="services" className="py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with decorative line badges */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-16">
          <Badge variant="blue" showLines={true}>
            OUR SERVICES
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
            Technology Solutions That Move <br className="hidden sm:inline" />
            Your Business Forward
          </h2>

          <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto leading-relaxed">
            We deliver modern, scalable software solutions built to match your exact enterprise requirements and business goals.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECH_SOLUTIONS.map((sol, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border border-brand-border/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between border-t-4 ${
                accentBorderColors[sol.accent]
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      accentBadgeColors[sol.accent]
                    }`}
                  >
                    Capability 0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-brand-navy hover:text-brand-blue transition-colors">
                  {sol.title}
                </h3>

                <p className="text-sm text-brand-muted leading-relaxed">
                  {sol.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-brand-border/60">
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

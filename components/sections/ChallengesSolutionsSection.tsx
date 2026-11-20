import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { ArrowRight, CheckIcon } from "../icons";
import { TeamIllustration } from "../graphics/TeamIllustration";
import { PHILOSOPHY_PILLARS, PROCESS_STEPS } from "@/lib/services-data";

export function ChallengesSolutionsSection() {
  return (
    <section id="philosophy" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Split Section: Image Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Team Graphic */}
          <div className="lg:col-span-6 h-full flex items-center">
            <TeamIllustration />
          </div>

          {/* Right Column: Copy & Bullet Points */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="blue">OUR PHILOSOPHY</Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
              We turn business <br />
              challenges into practical <br />
              software solutions.
            </h2>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              We believe technology should serve your strategic vision, not complicate it. Our cross-functional agile teams work hand-in-hand with your executive stakeholders to deliver reliable, scalable results.
            </p>

            {/* 3 Pillars */}
            <div className="space-y-4 pt-2">
              {PHILOSOPHY_PILLARS.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      pillar.color === "cyan"
                        ? "bg-brand-cyan/15 text-brand-cyan"
                        : pillar.color === "pink"
                        ? "bg-brand-pink/15 text-brand-pink"
                        : "bg-brand-purple/15 text-brand-purple"
                    }`}
                  >
                    <CheckIcon size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">{pillar.title}</h4>
                    <p className="text-xs text-brand-muted">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="#contact" size="md">
                Speak to a Specialist
              </Button>
              <Link
                href="#services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-pink transition-colors"
              >
                <span>See client stories</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Bottom Cards: Understand, Connect, Scale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl border ${step.border} ${step.bg} space-y-3 transition-transform hover:-translate-y-1 duration-200`}
            >
              <div className="flex items-center gap-2">
                <span className={`text-base font-extrabold ${step.textColor}`}>
                  0{idx + 1}.
                </span>
                <h4 className={`text-lg font-bold ${step.textColor}`}>{step.title}</h4>
              </div>
              <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

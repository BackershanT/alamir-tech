import React from "react";
import { ShieldCheckIcon, ZapIcon, UsersIcon, CheckCircle } from "./icons";
import { Button } from "./Button";

const PILLARS = [
  {
    icon: ZapIcon,
    title: "Engineering Velocity Without Technical Debt",
    desc: "We utilize automated code generation, modular micro-frontends, and battle-tested frameworks to deliver production systems in weeks, not quarters.",
    badge: "Speed to Value",
  },
  {
    icon: ShieldCheckIcon,
    title: "Zero-Trust Security by Default",
    desc: "Every line of code and infrastructure component undergoes automated static analysis, container scanning, and zero-trust verification before release.",
    badge: "Enterprise Security",
  },
  {
    icon: UsersIcon,
    title: "Principal-Level Dedicated Teams",
    desc: "Work with seasoned software architects, cloud specialists, and ML researchers who integrate directly with your product vision.",
    badge: "Elite Talent",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-brand-blue/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-brand-pink/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-brand-cyan text-xs font-bold tracking-wider uppercase border border-white/10">
              Why Alamir Tech
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Built for leaders who demand uncompromising quality
            </h2>
            <p className="text-base sm:text-lg text-brand-border/80 leading-relaxed">
              We bridge the gap between ambitious business strategy and flawless technical execution. When downtime is not an option and scalability is paramount, industry leaders partner with Alamir Tech.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-brand-border/90">
                <CheckCircle className="text-brand-cyan w-5 h-5 shrink-0" />
                <span>100% intellectual property ownership from Day 1</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-border/90">
                <CheckCircle className="text-brand-cyan w-5 h-5 shrink-0" />
                <span>Transparent agile sprints with real-time telemetry</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-border/90">
                <CheckCircle className="text-brand-cyan w-5 h-5 shrink-0" />
                <span>Guaranteed SLA contracts and dedicated site reliability engineering</span>
              </div>
            </div>

            <div className="pt-4">
              <Button href="#contact" size="md">
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="lg:col-span-7 space-y-6">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-md space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/30 text-brand-cyan flex items-center justify-center group-hover:bg-brand-pink group-hover:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-brand-border/80 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

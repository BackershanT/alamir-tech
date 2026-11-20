import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { SparklesIcon, ZapIcon, ShieldCheckIcon, CheckCircle } from "./icons";

const METRICS = [
  { value: "99.99%", label: "Enterprise SLA", desc: "High-availability systems" },
  { value: "250+", label: "Projects Delivered", desc: "Across 14 industries" },
  { value: "4.2x", label: "Speed to Market", desc: "Accelerated development" },
  { value: "24/7", label: "Global Support", desc: "Dedicated engineering" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen bg-brand-navy text-white flex flex-col justify-center overflow-hidden pt-28 pb-20">
      {/* Background ambient mesh gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-blue/30 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-brand-purple/25 rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[130px]" />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Call to Action */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-medium text-brand-cyan">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span>Next-Gen Enterprise IT & Digital Engineering</span>
            </div>

            {/* Display H1 - Exactly matching Brand Guidelines Slogan */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Technology that moves{" "}
              <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-pink bg-clip-text text-transparent">
                business forward
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-brand-border/90 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Alamir Tech architects enterprise software solutions, autonomous AI agents, scalable cloud platforms, and zero-trust security infrastructure that unlock extraordinary business growth.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button href="#contact" size="lg" showArrows={true}>
                Let's Talk
              </Button>
              <Button href="#services" variant="outline" size="lg" showArrows={false}>
                Explore Capabilities
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-brand-border/75">
              <span className="flex items-center gap-2">
                <CheckCircle className="text-brand-cyan w-4 h-4" /> ISO 27001 Certified
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="text-brand-cyan w-4 h-4" /> SOC 2 Type II Compliant
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="text-brand-cyan w-4 h-4" /> 99.99% Reliability Guarantee
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Tech Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-gradient-to-b from-white/15 to-white/5 p-1 border border-white/20 backdrop-blur-xl shadow-2xl">
              <div className="rounded-xl bg-[#080E2E]/90 p-6 space-y-6">
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-xs text-white/50 font-mono ml-2">alamir-core.cluster.prod</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-brand-cyan bg-brand-cyan/10 px-2.5 py-0.5 rounded-full border border-brand-cyan/20 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
                    Live Active
                  </span>
                </div>

                {/* Architecture Stat Gauges */}
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-white/80">Cloud Scalability Index</span>
                      <span className="text-brand-cyan font-bold">99.8%</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-blue to-brand-cyan h-full rounded-full w-[99%]" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-white/80">AI Model Response Latency</span>
                      <span className="text-brand-pink font-bold">14ms</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-purple to-brand-pink h-full rounded-full w-[94%]" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-white/80">Zero-Trust Threat Defense</span>
                      <span className="text-emerald-400 font-bold">100% Protected</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full rounded-full w-full" />
                    </div>
                  </div>
                </div>

                {/* Highlight Feature Card */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-brand-pink/20 text-brand-pink">
                    <ZapIcon size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Full-Lifecycle Delivery</h4>
                    <p className="text-xs text-brand-border/70">Concept to global multi-region cloud deployment.</p>
                  </div>
                </div>

                {/* Bottom interactive action */}
                <div className="pt-2 text-center">
                  <Button
                    href="#contact"
                    variant="primary"
                    size="sm"
                    className="w-full"
                    showArrows={true}
                  >
                    Schedule Enterprise Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Key Metrics Bar */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="text-center sm:text-left space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-brand-cyan">{metric.label}</div>
              <div className="text-xs text-brand-border/70">{metric.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Button } from "../ui/Button";
import { StarIcon, ZapIcon, ShieldIcon, CheckIcon } from "../icons";
import { SITE_CONFIG } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] bg-gradient-to-r from-[#091361] via-[#121c7a] to-[#091fa8] text-white flex flex-col justify-center overflow-hidden pt-12 pb-20 sm:pb-28"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-brand-purple/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-brand-cyan/25 rounded-full blur-[130px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-2xl space-y-7">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-cyan">
            <span>NEXT-GEN ENTERPRISE IT & SOFTWARE SOLUTIONS</span>
          </div>

          {/* Heading - Exact matching Mockup */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
            Run your business <br className="hidden sm:inline" />
            with greater clarity.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-brand-border/90 leading-relaxed font-normal">
            {SITE_CONFIG.heroSubheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
            <Button href="#contact" size="md" showArrows={true}>
              Start a Project Today
            </Button>
            <Button href="#services" variant="outline" size="md" showArrows={false}>
              See how we work
            </Button>
          </div>

          {/* 4 Trust Metric Cards in 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
            <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                <StarIcon size={18} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">4.9/5 Rating</div>
                <div className="text-[11px] text-brand-border/80">From 120+ happy enterprise clients</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-brand-cyan/20 text-brand-cyan flex items-center justify-center shrink-0">
                <ZapIcon size={18} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">99.9% Uptime SLA</div>
                <div className="text-[11px] text-brand-border/80">High-availability architecture</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                <ShieldIcon size={18} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">100% Security</div>
                <div className="text-[11px] text-brand-border/80">Enterprise-grade data encryption</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-brand-pink/20 text-brand-pink flex items-center justify-center shrink-0">
                <CheckIcon size={18} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">4.2x Faster</div>
                <div className="text-[11px] text-brand-border/80">Time-to-market acceleration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { CheckCircle, SparklesIcon, UsersIcon } from "./icons";
import { Button } from "./Button";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold tracking-wider uppercase">
              About Alamir Tech
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
              A high-conviction engineering partner for transformative growth
            </h2>
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              At Alamir Tech, our mission is captured in five words: <strong className="text-brand-navy">Technology that moves business forward</strong>. We were founded on the belief that modern enterprises require more than software vendors—they need forward-looking technology partners capable of navigating high-stakes digital evolution.
            </p>
            <p className="text-sm sm:text-base text-brand-dark leading-relaxed">
              From our global engineering hubs, our multidisciplinary teams of cloud architects, AI researchers, and full-stack software engineers turn complex business hurdles into elegant, defensible competitive advantages.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-brand-light border border-brand-border space-y-2">
                <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                  <SparklesIcon size={18} />
                  <span>Engineering Mastery</span>
                </div>
                <p className="text-xs text-brand-muted">
                  Strict linting, automated CI/CD coverage, and zero-defect release philosophies.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-light border border-brand-border space-y-2">
                <div className="flex items-center gap-2 text-brand-pink font-bold text-sm">
                  <UsersIcon size={18} />
                  <span>Client-Centric Agility</span>
                </div>
                <p className="text-xs text-brand-muted">
                  Transparent sprint cycles, direct daily Slack/Teams syncs, and real-time demos.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button href="#contact" size="md">
                Let's Talk
              </Button>
              <a
                href="#services"
                className="text-xs font-bold text-brand-navy hover:text-brand-blue uppercase tracking-wider"
              >
                View Core Services →
              </a>
            </div>
          </div>

          {/* Right Column: Visual Narrative Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-br from-brand-navy via-brand-blue to-brand-purple p-8 sm:p-10 text-white space-y-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-pink/30 rounded-full blur-2xl" />
              <div className="space-y-3 relative z-10">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-cyan">
                  Global Reach & Scale
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Built to scale with your ambitions
                </h3>
                <p className="text-xs sm:text-sm text-brand-border/80 leading-relaxed">
                  Headquartered with distributed centers of excellence, we deliver round-the-clock development and site reliability coverage across multiple timezones.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/15 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/80">Average Team Experience</span>
                  <span className="text-sm font-extrabold text-brand-cyan">8+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/80">Global Client Retention Rate</span>
                  <span className="text-sm font-extrabold text-brand-pink">98.4%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/80">Total Cloud Deployments</span>
                  <span className="text-sm font-extrabold text-white">1,500+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

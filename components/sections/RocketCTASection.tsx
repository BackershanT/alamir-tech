import React from "react";
import { Button } from "../ui/Button";
import { RocketIllustration } from "../graphics/RocketIllustration";

export function RocketCTASection() {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#070e3d] via-[#101968] to-[#0599d6] p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-brand-pink/25 rounded-full blur-[100px] pointer-events-none" />

          {/* Left Content */}
          <div className="max-w-xl space-y-5 text-center md:text-left z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to make your <br />
              business work smarter?
            </h2>
            <p className="text-sm sm:text-base text-brand-border/90 leading-relaxed font-normal">
              Talk to our team and explore how custom software can simplify your operations, automate workflows, and drive profitable growth.
            </p>
            <div className="pt-2 flex justify-center md:justify-start">
              <Button href="#contact" variant="primary" size="lg" showArrows={true}>
                Start your project today
              </Button>
            </div>
          </div>

          {/* Right 3D Rocket */}
          <div className="z-10 shrink-0">
            <RocketIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

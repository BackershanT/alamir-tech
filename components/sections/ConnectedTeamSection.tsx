import React from "react";
import { WorldMap } from "../graphics/WorldMap";
import { CeoAvatar } from "../graphics/CeoAvatar";
import { Button } from "../ui/Button";
import { GLOBAL_TEAM_STATS } from "@/lib/services-data";

export function ConnectedTeamSection() {
  return (
    <section
      id="team"
      className="py-24 bg-gradient-to-r from-[#070e3d] via-[#101968] to-[#070e3d] text-white relative overflow-hidden"
    >
      {/* Background ambient mesh */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-brand-pink/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-cyan text-xs font-bold tracking-wider uppercase border border-white/10">
            GLOBAL EXPERTISE & PRESENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            A connected team, building <br className="hidden sm:inline" />
            smarter solutions.
          </h2>
          <p className="text-sm sm:text-base text-brand-border/80 max-w-xl mx-auto">
            From our hubs in the Americas, Europe, and Middle East, our distributed engineering teams deliver round-the-clock innovation.
          </p>
        </div>

        {/* Map & Executive Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* World Map: 8 Columns */}
          <div className="lg:col-span-8">
            <WorldMap />
          </div>

          {/* Executive Leadership Card: 4 Columns */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-white/10 border border-white/15 p-6 sm:p-7 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center space-y-4">
              <CeoAvatar />

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Amir Farooq
                </h3>
                <div className="text-xs font-semibold text-brand-cyan uppercase tracking-wider">
                  Founder & CEO
                </div>
              </div>

              <p className="text-xs text-brand-border/80 italic leading-relaxed">
                "We are on a mission to empower businesses with software that doesn't just work—it creates lasting competitive advantage and clarity."
              </p>

              <div className="pt-2 w-full">
                <Button href="#contact" variant="primary" size="sm" className="w-full">
                  Meet the Team
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Glassmorphic Stats Strip */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-md">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {GLOBAL_TEAM_STATS.map((stat, idx) => (
              <div key={idx} className="pt-3 sm:pt-0 sm:px-3 first:pt-0">
                <div className="text-sm sm:text-base font-bold text-white tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { WorldMap } from "../graphics/WorldMap";
import { GLOBAL_TEAM_STATS } from "@/lib/services-data";

export function ConnectedTeamSection() {
  return (
    <section
      id="team"
      className="py-24 bg-gradient-to-r from-[#060b2b] via-[#0d1659] to-[#070e3d] text-white relative overflow-hidden scroll-mt-20"
    >
      {/* Background ambient glow matching slice_5_connected_team_map.png */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-cyan/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-brand-pink/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-brand-cyan text-xs font-bold tracking-widest uppercase border border-white/10">
            GLOBAL EXPERTISE & PRESENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            A connected team, building <br className="hidden sm:inline" />
            smarter solutions.
          </h2>
          <p className="text-sm sm:text-base text-brand-border/80 max-w-xl mx-auto leading-relaxed">
            From our hubs in the Americas, Europe, and Middle East, our distributed engineering teams deliver round-the-clock innovation.
          </p>
        </div>

        {/* Real Geographically Accurate World Map */}
        <div className="w-full max-w-5xl mx-auto">
          <WorldMap />
        </div>

        {/* Bottom Glassmorphic Stats Strip */}
        <div className="rounded-2xl bg-white/[0.07] border border-white/15 p-5 backdrop-blur-md shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/15">
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

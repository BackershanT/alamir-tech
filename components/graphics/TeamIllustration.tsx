import React from "react";

export function TeamIllustration() {
  return (
    <div className="relative w-full h-full min-h-[340px] rounded-2xl bg-gradient-to-tr from-[#070e3d] via-[#0d1659] to-[#121c7a] p-8 flex flex-col justify-between text-white overflow-hidden shadow-2xl border border-white/15">
      {/* Ambient background blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Agile Sprint Card */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold text-brand-cyan text-sm border border-white/15">
            AT
          </div>
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-brand-cyan">
              Agile Engineering Team
            </div>
            <div className="text-sm font-semibold text-white">Sprint 42: Production Release</div>
          </div>
        </div>
        <span className="text-[11px] font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-400/30">
          99.98% On-Time
        </span>
      </div>

      {/* Central Visual: Team Avatars & Active Terminal */}
      <div className="relative z-10 py-6 space-y-4">
        <div className="flex -space-x-3 items-center">
          {[
            { initials: "AF", bg: "bg-brand-pink" },
            { initials: "DV", bg: "bg-brand-cyan text-brand-navy" },
            { initials: "ER", bg: "bg-purple-600" },
            { initials: "MC", bg: "bg-amber-500" },
            { initials: "+18", bg: "bg-slate-700 text-xs" },
          ].map((avatar, idx) => (
            <div
              key={idx}
              className={`w-12 h-12 rounded-full ${avatar.bg} border-2 border-white flex items-center justify-center font-bold text-xs shadow-md`}
            >
              {avatar.initials}
            </div>
          ))}
          <span className="pl-6 text-xs text-brand-border/90 font-medium">
            Dedicated cross-functional team of architects, researchers & lead engineers
          </span>
        </div>

        {/* Live Code Telemetry Terminal */}
        <div className="rounded-xl bg-[#040826]/95 p-4 border border-white/10 font-mono text-xs space-y-2 shadow-inner">
          <div className="flex items-center justify-between text-white/50 text-[11px]">
            <span>deploy-cluster-v2.1.ts</span>
            <span className="text-emerald-400 font-bold">BUILD PASSING</span>
          </div>
          <div className="text-brand-cyan">
            ✓ 142/142 end-to-end integration tests passed (0.42s)
          </div>
          <div className="text-brand-pink">
            ✓ Zero-trust security scan: 0 critical vulnerabilities
          </div>
          <div className="text-white/80">
            ✓ Docker image published to multi-region cluster
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-brand-border/80">
        <span>Daily Slack/Teams Standups</span>
        <span className="font-bold text-white">Full IP Rights Ownership</span>
      </div>
    </div>
  );
}

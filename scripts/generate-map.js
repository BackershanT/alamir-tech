const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '..', 'public', 'world-map.svg');
const destPath = path.join(__dirname, '..', 'components', 'graphics', 'WorldMap.tsx');

let svg = fs.readFileSync(svgPath, 'utf-8');

const match = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
if (!match) {
  console.error('No SVG content matched');
  process.exit(1);
}

let innerContent = match[1];
// Strip comments and unwanted metadata tags
innerContent = innerContent.replace(/<!--[\s\S]*?-->/g, '');
innerContent = innerContent.replace(/<title>[\s\S]*?<\/title>/gi, '');
innerContent = innerContent.replace(/<desc>[\s\S]*?<\/desc>/gi, '');
// Replace XML/SVG hyphenated attributes with React JSX camelCase equivalents
innerContent = innerContent.replace(/fill-rule/g, 'fillRule');
innerContent = innerContent.replace(/clip-rule/g, 'clipRule');
innerContent = innerContent.replace(/stroke-width/g, 'strokeWidth');
// Strip any class or className attributes entirely from raw SVG paths
innerContent = innerContent.replace(/\s*\bclass="[^"]*"/g, '');
innerContent = innerContent.replace(/\s*\bclassName="[^"]*"/g, '');

const header = `"use client";

import React, { useState } from "react";
import Image from "next/image";

// Geographically accurate hub coordinates mapped to the 784 x 459 SVG projection
export interface HubData {
  id: string;
  label: string;
  x: number;
  y: number;
  centerTitle: string;
  leadName: string;
  leadRole: string;
  image: string;
  teamStats: string;
  specialty: string;
}

const HUBS: HubData[] = [
  {
    id: "sf",
    label: "San Francisco",
    x: 145,
    y: 360,
    centerTitle: "Americas Engineering HQ",
    leadName: "Alex Rivera",
    leadRole: "Principal Cloud Architect",
    image: "/images/team/san-francisco.svg",
    teamStats: "18+ AI & Cloud Specialists",
    specialty: "Next-Gen AI & Scalable Microservices",
  },
  {
    id: "london",
    label: "London",
    x: 395,
    y: 325,
    centerTitle: "European Tech Center",
    leadName: "Emma Reed",
    leadRole: "VP of Engineering, Europe",
    image: "/images/team/london.svg",
    teamStats: "22+ Senior Fullstack Developers",
    specialty: "High-Security FinTech & Web Platforms",
  },
  {
    id: "riyadh",
    label: "Riyadh",
    x: 495,
    y: 410,
    centerTitle: "Middle East Solutions Hub",
    leadName: "Tariq Al-Mansoor",
    leadRole: "Enterprise Delivery Lead",
    image: "/images/team/riyadh.svg",
    teamStats: "28+ Enterprise Consultants",
    specialty: "Enterprise ERP & Government Tech",
  },
  {
    id: "dubai",
    label: "Dubai",
    x: 518,
    y: 405,
    centerTitle: "Global Operations Center",
    leadName: "Farooq Malik",
    leadRole: "Lead Systems Architect",
    image: "/images/team/dubai.svg",
    teamStats: "35+ Core Engineers & Architects",
    specialty: "Mission-Critical Core Systems & Cloud",
  },
  {
    id: "singapore",
    label: "Singapore",
    x: 635,
    y: 475,
    centerTitle: "Asia-Pacific Delivery",
    leadName: "Mei-Ling Chen",
    leadRole: "Head of APAC Solutions",
    image: "/images/team/singapore.svg",
    teamStats: "20+ Mobile & Web Engineers",
    specialty: "Cross-Platform Mobile & Edge Computing",
  },
];

export function WorldMap() {
  const [activeHub, setActiveHub] = useState<string>("dubai");
  const [hoveredHub, setHoveredHub] = useState<string | null>(null);

  // The active or hovered hub data
  const currentHub = HUBS.find((h) => h.id === (hoveredHub || activeHub)) || HUBS[3];

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#09154a]/85 to-[#060e33]/90 border border-white/15 p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center overflow-hidden shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/15 rounded-full blur-[90px] pointer-events-none" />

      {/* Real Geographically-Accurate SVG World Map & Interactive Overlay */}
      <div className="relative w-full aspect-[784/459] max-h-[460px]">
        <svg
          viewBox="30.767 241.591 784.077 458.627"
          className="w-full h-full select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Real geographical countries with royal blue fill & crisp borders */}
          <g
            fill="#1d4ed8"
            stroke="#1e3a8a"
            strokeWidth="0.6"
            className="transition-colors duration-200"
          >
`;

const footer = `
          </g>

          {/* Glowing Arc Inter-Hub Connections */}
          <g fill="none" opacity="0.8">
            <path
              d="M 145 360 Q 270 260 395 325"
              stroke="#0599D6"
              strokeWidth="1.8"
              strokeDasharray="4 4"
            />
            <path
              d="M 395 325 Q 455 330 495 410"
              stroke="#0599D6"
              strokeWidth="1.8"
              strokeDasharray="4 4"
            />
            <path
              d="M 495 410 L 518 405"
              stroke="#E60085"
              strokeWidth="2"
            />
            <path
              d="M 518 405 Q 575 410 635 475"
              stroke="#0599D6"
              strokeWidth="1.8"
              strokeDasharray="4 4"
            />
          </g>

          {/* Radar background pings on exact map coordinates */}
          {HUBS.map((hub) => (
            <circle
              key={hub.id}
              cx={hub.x}
              cy={hub.y}
              r="14"
              fill="#0599D6"
              opacity="0.3"
              className="animate-ping origin-center pointer-events-none"
            />
          ))}
        </svg>

        {/* Interactive Team Photo Pins Layer overlaying the SVG */}
        <div className="absolute inset-0 pointer-events-none">
          {HUBS.map((hub) => {
            const leftPct = ((hub.x - 30.767) / 784.077) * 100;
            const topPct = ((hub.y - 241.591) / 458.627) * 100;
            const isHovered = hoveredHub === hub.id;
            const isActive = activeHub === hub.id;
            const showCard = isHovered || (hoveredHub === null && isActive);

            return (
              <div
                key={hub.id}
                style={{ left: \`\${leftPct}%\`, top: \`\${topPct}%\` }}
                className="absolute -translate-x-1/2 -translate-y-full pointer-events-auto flex flex-col items-center group cursor-pointer"
                onMouseEnter={() => setHoveredHub(hub.id)}
                onMouseLeave={() => setHoveredHub(null)}
                onClick={() => setActiveHub(hub.id)}
              >
                {/* Expanded Team Photo Pin Popover (shown on hover or active) */}
                <div
                  className={\`absolute bottom-full mb-2.5 w-60 sm:w-64 p-3 rounded-xl bg-[#070e38]/95 border backdrop-blur-xl shadow-2xl transition-all duration-200 z-40 \${
                    showCard
                      ? "opacity-100 scale-100 pointer-events-auto border-brand-cyan/60 shadow-[0_10px_35px_rgba(5,153,214,0.3)]"
                      : "opacity-0 scale-95 pointer-events-none border-white/10"
                  }\`}
                >
                  {/* Team Lead Profile Row */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full ring-2 ring-brand-cyan shrink-0 overflow-hidden bg-slate-800 shadow-md">
                      <Image
                        src={hub.image}
                        alt={hub.leadName}
                        width={44}
                        height={44}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-1 ring-white" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-white truncate">
                        {hub.leadName}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-semibold text-brand-cyan truncate">
                        {hub.leadRole}
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[9px] font-bold text-emerald-300 uppercase tracking-wider">
                          Active Lead
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hub Stats & Specialty */}
                  <div className="mt-2.5 pt-2 border-t border-white/10 text-[10px] space-y-1">
                    <div className="text-white/90 font-semibold flex items-center justify-between">
                      <span>{hub.centerTitle}</span>
                      <span className="text-brand-pink font-bold text-[9px]">24/7 Delivery</span>
                    </div>
                    <div className="text-brand-border/70 flex items-center gap-1">
                      <span>{hub.teamStats}</span>
                    </div>
                    <div className="text-sky-300/80 italic text-[9.5px]">
                      {hub.specialty}
                    </div>
                  </div>

                  {/* Downward Pointer Triangle */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-[#070e38]" />
                </div>

                {/* Circular Pin Head with Team Lead Photo */}
                <div
                  className={\`relative rounded-full transition-all duration-300 flex items-center justify-center \${
                    showCard
                      ? "w-8 h-8 sm:w-9 sm:h-9 ring-2 ring-brand-pink scale-110 shadow-[0_0_15px_#E60085]"
                      : "w-7 h-7 sm:w-8 sm:h-8 ring-2 ring-white/80 hover:scale-110 hover:ring-brand-cyan shadow-lg"
                  }\`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                    <Image
                      src={hub.image}
                      alt={hub.leadName}
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Downward Needle Point */}
                <div
                  className={\`w-0 h-0 border-x-4 border-x-transparent border-t-4 transition-colors \${
                    showCard ? "border-t-brand-pink" : "border-t-white"
                  }\`}
                />

                {/* City Label Badge */}
                <span
                  className={\`mt-1 text-[9px] sm:text-[10px] font-extrabold px-1.5 py-0.5 rounded-full border shadow-md select-none transition-all \${
                    showCard
                      ? "bg-brand-navy text-white border-brand-pink"
                      : "bg-[#060e33]/90 text-white/90 border-white/20 hover:border-brand-cyan"
                  }\`}
                >
                  {hub.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Hub Live Telemetry Banner */}
      <div className="w-full mt-4 pt-3.5 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-brand-border/80 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="relative w-6 h-6 rounded-full overflow-hidden ring-1 ring-brand-cyan shrink-0">
            <Image
              src={currentHub.image}
              alt={currentHub.leadName}
              width={24}
              height={24}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-white font-bold tracking-wide mr-1.5">
              {currentHub.centerTitle}:
            </span>
            <span className="text-brand-border/80">
              {currentHub.leadName} ({currentHub.leadRole}) • {currentHub.teamStats}
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-cyan">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Hover pins to inspect regional team leads</span>
        </div>
      </div>
    </div>
  );
}
`;

const result = header + innerContent.trim() + footer;
fs.writeFileSync(destPath, result, 'utf-8');
console.log('Successfully generated WorldMap.tsx with Team Photo Pins, length:', result.length);

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
// Replace class="whatever" with className="whatever"
innerContent = innerContent.replace(/\bclass="([^"]*)"/g, 'className="$1"');

const header = `"use client";

import React, { useState } from "react";

// Geographically accurate hub coordinates mapped to the 784 x 459 SVG projection
const HUBS = [
  { id: "sf", label: "San Francisco", x: 145, y: 360, desc: "Americas Engineering HQ" },
  { id: "london", label: "London", x: 395, y: 325, desc: "European Tech Center" },
  { id: "riyadh", label: "Riyadh", x: 495, y: 410, desc: "Middle East Solutions Hub" },
  { id: "dubai", label: "Dubai", x: 518, y: 405, desc: "Global Operations Center" },
  { id: "singapore", label: "Singapore", x: 635, y: 475, desc: "Asia-Pacific Delivery" },
];

export function WorldMap() {
  const [activeHub, setActiveHub] = useState<string | null>("dubai");

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#09154a]/85 to-[#060e33]/90 border border-white/15 p-4 sm:p-6 flex flex-col items-center justify-center overflow-hidden shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/15 rounded-full blur-[90px] pointer-events-none" />

      {/* Real Geographically-Accurate SVG World Map */}
      <div className="relative w-full aspect-[784/459] max-h-[380px]">
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

          {/* Interactive Radar Location Pins directly on SVG coordinates */}
          {HUBS.map((hub) => {
            const isActive = activeHub === hub.id;
            return (
              <g
                key={hub.id}
                transform={'translate(' + hub.x + ', ' + hub.y + ')'}
                className="cursor-pointer group"
                onClick={() => setActiveHub(hub.id)}
              >
                {/* Ping ring */}
                <circle
                  r="12"
                  fill="#0599D6"
                  opacity="0.35"
                  className="animate-ping origin-center"
                />
                {/* Center dot */}
                <circle
                  r="4.5"
                  fill={isActive ? "#E60085" : "#0599D6"}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  className="transition-transform group-hover:scale-125 shadow-md"
                />

                {/* Badge Label */}
                <g transform="translate(0, -12)">
                  <rect
                    x="-42"
                    y="-18"
                    width="84"
                    height="18"
                    rx="9"
                    fill={isActive ? "#091361" : "#060e33"}
                    stroke={isActive ? "#E60085" : "rgba(255,255,255,0.25)"}
                    strokeWidth="1"
                    className="shadow-lg"
                  />
                  <text
                    x="0"
                    y="-6"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="9"
                    fontWeight="700"
                    fontFamily="sans-serif"
                    className="pointer-events-none select-none"
                  >
                    {hub.label}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Active Hub Info Banner */}
      <div className="w-full mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-brand-border/80 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white font-bold">
            {HUBS.find((h) => h.id === activeHub)?.label || "Global Presence"}:
          </span>
          <span className="text-brand-border/70">
            {HUBS.find((h) => h.id === activeHub)?.desc || "Active delivery center"}
          </span>
        </div>
        <div className="text-[11px] text-brand-cyan font-semibold">
          Click any hub pin to view center details
        </div>
      </div>
    </div>
  );
}
`;

const result = header + innerContent.trim() + footer;
fs.writeFileSync(destPath, result, 'utf-8');
console.log('Successfully generated WorldMap.tsx at', destPath, 'bytes:', result.length);

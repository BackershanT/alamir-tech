import React from "react";

export function WorldMap() {
  const PINS = [
    { label: "San Francisco", x: 19, y: 35 },
    { label: "London", x: 48, y: 28 },
    { label: "Riyadh", x: 58, y: 44 },
    { label: "Dubai", x: 62, y: 42 },
    { label: "Singapore", x: 78, y: 55 },
  ];

  return (
    <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl bg-[#09154a]/60 border border-white/10 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full opacity-80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified abstract vector world map paths */}
        <g fill="#1836a8" fillOpacity="0.85">
          {/* North America */}
          <path d="M150,120 Q180,90 260,100 Q290,140 270,180 Q240,220 200,230 Q160,200 140,160 Z" />
          <path d="M220,180 Q260,190 280,240 Q250,280 200,260 Z" />
          {/* South America */}
          <path d="M260,280 Q320,300 340,360 Q320,440 270,460 Q240,380 260,280 Z" />
          {/* Europe */}
          <path d="M460,110 Q520,100 550,140 Q540,180 480,180 Q450,150 460,110 Z" />
          <path d="M480,170 Q510,160 520,200 Q480,220 460,190 Z" />
          {/* Africa */}
          <path d="M470,220 Q560,210 570,290 Q560,380 500,420 Q440,360 450,270 Z" />
          {/* Asia */}
          <path d="M560,110 Q700,90 820,150 Q850,230 760,280 Q660,280 580,200 Z" />
          <path d="M680,240 Q760,250 780,310 Q720,330 670,290 Z" />
          {/* Australia */}
          <path d="M780,360 Q860,350 880,410 Q840,460 780,440 Q750,400 780,360 Z" />
        </g>

        {/* Global Connection Arc Lines */}
        <path
          d="M 190 175 Q 335 100 480 140"
          stroke="#0599D6"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 480 140 Q 550 140 620 210"
          stroke="#0599D6"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 620 210 Q 700 230 780 275"
          stroke="#E60085"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          opacity="0.6"
        />
      </svg>

      {/* Floating Animated Radar Pins */}
      {PINS.map((pin, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer"
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
        >
          <div className="relative flex items-center justify-center">
            <span className="w-5 h-5 rounded-full bg-brand-cyan/25 animate-ping absolute" />
            <span className="w-3.5 h-3.5 rounded-full bg-brand-cyan border-2 border-white shadow-lg relative z-10" />
          </div>
          <span className="mt-1 text-[10px] font-semibold tracking-wider text-white bg-brand-navy/90 px-2 py-0.5 rounded shadow border border-white/20 whitespace-nowrap opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all">
            {pin.label}
          </span>
        </div>
      ))}
    </div>
  );
}

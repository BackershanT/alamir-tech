import React from "react";

export function WorldMap() {
  const PINS = [
    { label: "San Francisco", x: 20, y: 36 },
    { label: "London", x: 48, y: 28 },
    { label: "Riyadh", x: 59, y: 44 },
    { label: "Dubai", x: 63, y: 42 },
    { label: "Singapore", x: 79, y: 55 },
  ];

  return (
    <div className="relative w-full h-[290px] sm:h-[350px] rounded-2xl bg-[#09154a]/70 border border-white/15 p-4 sm:p-6 flex items-center justify-center overflow-hidden shadow-inner">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full opacity-90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* World Continents filled with Royal Blue */}
        <g fill="#1a3dbf" fillOpacity="0.85">
          {/* North America */}
          <path d="M120,90 Q180,60 260,80 Q300,120 280,170 Q250,220 200,230 Q140,200 120,130 Z" />
          <path d="M220,180 Q270,190 290,240 Q250,280 200,260 Z" />
          {/* South America */}
          <path d="M260,270 Q320,290 340,360 Q320,450 270,470 Q230,380 260,270 Z" />
          {/* Europe */}
          <path d="M450,90 Q520,80 560,130 Q540,180 470,180 Q430,140 450,90 Z" />
          <path d="M470,170 Q510,160 530,200 Q480,220 460,190 Z" />
          {/* Africa */}
          <path d="M460,210 Q560,200 580,280 Q570,390 500,430 Q430,370 440,260 Z" />
          {/* Asia */}
          <path d="M550,90 Q720,70 840,140 Q860,230 770,290 Q660,290 570,190 Z" />
          <path d="M680,240 Q770,250 790,320 Q720,340 660,290 Z" />
          {/* Australia */}
          <path d="M770,350 Q860,340 880,410 Q830,470 770,440 Q740,390 770,350 Z" />
        </g>

        {/* Global Satellite Connection Arc Lines */}
        <path
          d="M 200 180 Q 340 90 480 140"
          stroke="#0599D6"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="none"
          opacity="0.75"
        />
        <path
          d="M 480 140 Q 550 130 630 210"
          stroke="#0599D6"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="none"
          opacity="0.75"
        />
        <path
          d="M 630 210 Q 710 230 790 275"
          stroke="#E60085"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="none"
          opacity="0.75"
        />
      </svg>

      {/* Pulsing Radar Location Pins */}
      {PINS.map((pin, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10"
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
        >
          <div className="relative flex items-center justify-center">
            <span className="w-6 h-6 rounded-full bg-brand-cyan/30 animate-ping absolute" />
            <span className="w-3.5 h-3.5 rounded-full bg-brand-cyan border-2 border-white shadow-lg relative z-10 group-hover:scale-125 transition-transform" />
          </div>
          <span className="mt-1 text-[10px] font-bold tracking-wider text-white bg-[#070e3d]/90 px-2 py-0.5 rounded shadow-md border border-white/20 whitespace-nowrap opacity-90 group-hover:opacity-100 group-hover:border-brand-cyan transition-all">
            {pin.label}
          </span>
        </div>
      ))}
    </div>
  );
}

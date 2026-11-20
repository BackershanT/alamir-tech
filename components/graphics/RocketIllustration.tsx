import React from "react";

export function RocketIllustration() {
  return (
    <div className="relative w-44 h-44 sm:w-60 sm:h-60 flex items-center justify-center select-none">
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] animate-bounce duration-1000"
        style={{ animationDuration: "3.5s" }}
      >
        <defs>
          <linearGradient id="rocketBodyGloss" x1="60" y1="50" x2="160" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.5" stopColor="#F1F5F9" />
            <stop offset="1" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="rocketTipGrad" x1="130" y1="30" x2="195" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0599D6" />
            <stop offset="1" stopColor="#091FA8" />
          </linearGradient>
          <linearGradient id="wingGrad" x1="30" y1="120" x2="100" y2="190" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E60085" />
            <stop offset="1" stopColor="#9D0208" />
          </linearGradient>
          <radialGradient id="portholeGlow" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#38BDF8" />
            <stop offset="0.7" stopColor="#0284C7" />
            <stop offset="1" stopColor="#0369A1" />
          </radialGradient>
          <radialGradient id="thrusterFire" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#FEF08A" />
            <stop offset="0.5" stopColor="#F97316" />
            <stop offset="1" stopColor="#DC2626" />
          </radialGradient>
        </defs>

        {/* Thruster Flame Plume */}
        <g className="animate-pulse">
          <ellipse
            cx="60"
            cy="188"
            rx="24"
            ry="36"
            transform="rotate(-45 60 188)"
            fill="url(#thrusterFire)"
            opacity="0.95"
          />
          <ellipse
            cx="52"
            cy="196"
            rx="14"
            ry="24"
            transform="rotate(-45 52 196)"
            fill="#FEF08A"
          />
        </g>

        {/* Left Aerodynamic Wing */}
        <path
          d="M58 130 C42 155 32 182 48 198 C64 214 90 202 116 186 Z"
          fill="url(#wingGrad)"
        />

        {/* Right Aerodynamic Wing */}
        <path
          d="M130 58 C155 42 182 32 198 48 C214 64 202 90 186 116 Z"
          fill="url(#wingGrad)"
        />

        {/* Main Fuselage */}
        <path
          d="M78 166 C58 144 64 114 84 88 C108 58 154 38 196 44 C202 86 182 132 152 156 C126 176 96 182 78 166 Z"
          fill="url(#rocketBodyGloss)"
        />

        {/* Cyan Nose Cone */}
        <path
          d="M166 74 C176 58 186 48 196 44 C192 54 182 64 166 74 Z"
          fill="url(#rocketTipGrad)"
        />

        {/* Circular Porthole Window */}
        <circle cx="134" cy="106" r="20" fill="#CBD5E1" stroke="#475569" strokeWidth="2.5" />
        <circle cx="134" cy="106" r="15" fill="url(#portholeGlow)" />
        {/* Specular glass reflection */}
        <ellipse cx="130" cy="102" rx="5" ry="2.5" fill="#FFFFFF" opacity="0.85" transform="rotate(-35 130 102)" />

        {/* Exhaust Engine Rim */}
        <path d="M70 174 L86 158 L96 168 L80 184 Z" fill="#334155" />
      </svg>
    </div>
  );
}

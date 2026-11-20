import React from "react";

export function RocketIllustration() {
  return (
    <div className="relative w-40 h-40 sm:w-56 sm:h-56 flex items-center justify-center select-none">
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl animate-bounce duration-1000"
        style={{ animationDuration: "3s" }}
      >
        <defs>
          <linearGradient id="rocketBody" x1="40" y1="40" x2="180" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.6" stopColor="#E2E8F0" />
            <stop offset="1" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="rocketTip" x1="120" y1="20" x2="200" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0599D6" />
            <stop offset="1" stopColor="#091FA8" />
          </linearGradient>
          <linearGradient id="wingGradient" x1="30" y1="120" x2="100" y2="190" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E60085" />
            <stop offset="1" stopColor="#9D0208" />
          </linearGradient>
          <radialGradient id="portholeGlow" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#0284C7" />
          </radialGradient>
          <radialGradient id="flame" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#FDE047" />
            <stop offset="0.6" stopColor="#F97316" />
            <stop offset="1" stopColor="#DC2626" />
          </radialGradient>
        </defs>

        {/* Thrust Exhaust Flames */}
        <g className="animate-pulse">
          <ellipse cx="65" cy="185" rx="20" ry="32" transform="rotate(-45 65 185)" fill="url(#flame)" opacity="0.9" />
          <ellipse cx="55" cy="195" rx="12" ry="24" transform="rotate(-45 55 195)" fill="#FEF08A" />
        </g>

        {/* Left Fin */}
        <path
          d="M60 130 C45 155 35 180 50 195 C65 210 90 200 115 185 Z"
          fill="url(#wingGradient)"
        />

        {/* Right Fin */}
        <path
          d="M130 60 C155 45 180 35 195 50 C210 65 200 90 185 115 Z"
          fill="url(#wingGradient)"
        />

        {/* Main Rocket Fuselage */}
        <path
          d="M80 165 C60 145 65 115 85 90 C110 60 155 40 195 45 C200 85 180 130 150 155 C125 175 95 180 80 165 Z"
          fill="url(#rocketBody)"
        />

        {/* Nose Cone Cap */}
        <path
          d="M165 75 C175 60 185 50 195 45 C190 55 180 65 165 75 Z"
          fill="url(#rocketTip)"
        />

        {/* Porthole Outer Ring */}
        <circle cx="132" cy="108" r="18" fill="#CBD5E1" stroke="#64748B" strokeWidth="2.5" />
        {/* Porthole Glass */}
        <circle cx="132" cy="108" r="14" fill="url(#portholeGlow)" />
        <ellipse cx="128" cy="104" rx="4" ry="2" fill="#FFFFFF" opacity="0.8" transform="rotate(-30 128 104)" />

        {/* Base Nozzle */}
        <path d="M72 173 L88 157 L97 166 L81 182 Z" fill="#475569" />
      </svg>
    </div>
  );
}

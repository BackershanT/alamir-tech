import React from "react";

export function CeoAvatar() {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-gradient-to-tr from-[#1E293B] to-[#334155] border-2 border-white/40 shadow-2xl flex items-center justify-center">
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
      >
        <defs>
          <linearGradient id="bgGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e293b" />
            <stop offset="1" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="45" y1="20" x2="75" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fdba74" />
            <stop offset="1" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="suitGrad" x1="20" y1="80" x2="100" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#091361" />
            <stop offset="1" stopColor="#03071e" />
          </linearGradient>
        </defs>

        <rect width="120" height="120" fill="url(#bgGrad)" />

        {/* Neck */}
        <rect x="53" y="60" width="14" height="20" fill="#f97316" rx="4" />

        {/* Head */}
        <ellipse cx="60" cy="46" rx="22" ry="26" fill="url(#skinGrad)" />

        {/* Hair and Beard */}
        <path
          d="M38 42 C38 25 82 25 82 42 C82 32 75 22 60 22 C45 22 38 32 38 42 Z"
          fill="#1c1917"
        />
        {/* Short styled beard */}
        <path
          d="M44 52 C44 72 76 72 76 52 C76 66 68 74 60 74 C52 74 44 66 44 52 Z"
          fill="#1c1917"
          opacity="0.85"
        />

        {/* Professional Suit Jacket */}
        <path
          d="M16 120 C16 94 36 80 48 80 L72 80 C84 80 104 94 104 120 Z"
          fill="url(#suitGrad)"
        />

        {/* White Dress Shirt V-Neck */}
        <path d="M48 80 L60 105 L72 80 Z" fill="#FFFFFF" />

        {/* Crimson / Pink Silk Tie */}
        <path d="M57 82 L63 82 L65 110 L60 116 L55 110 Z" fill="#E60085" />
        <ellipse cx="60" cy="85" rx="3.5" ry="3" fill="#BE185D" />

        {/* Suit Lapels */}
        <path d="M36 80 L50 110 L44 120 L26 120 Z" fill="#091FA8" opacity="0.3" />
        <path d="M84 80 L70 110 L76 120 L94 120 Z" fill="#091FA8" opacity="0.3" />
      </svg>
    </div>
  );
}

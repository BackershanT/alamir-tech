import React from "react";

export function CeoAvatar() {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-gradient-to-tr from-slate-800 to-slate-700 border-2 border-white/30 shadow-xl flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
      >
        <rect width="100" height="100" fill="#1E293B" />
        {/* Head */}
        <circle cx="50" cy="38" r="18" fill="#F87171" opacity="0.9" />
        {/* Hair */}
        <path d="M32 35 C32 24 68 24 68 35 C68 28 62 20 50 20 C38 20 32 28 32 35 Z" fill="#0F172A" />
        {/* Suit & Shoulders */}
        <path d="M20 90 C20 70 34 62 42 62 L58 62 C66 62 80 70 80 90 Z" fill="#091361" />
        {/* White Shirt Collar */}
        <path d="M42 62 L50 78 L58 62 Z" fill="#FFFFFF" />
        {/* Red / Pink Tie */}
        <path d="M48 64 L52 64 L53 82 L50 86 L47 82 Z" fill="#E60085" />
      </svg>
    </div>
  );
}

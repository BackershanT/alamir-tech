import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "pink" | "purple" | "blue" | "navy";
  showLines?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = "blue",
  showLines = true,
  className = "",
}: BadgeProps) {
  const lineColors = {
    cyan: "bg-brand-cyan/60",
    pink: "bg-brand-pink/60",
    purple: "bg-brand-purple/60",
    blue: "bg-brand-blue/60",
    navy: "bg-brand-navy/40",
  }[variant];

  const textColors = {
    cyan: "text-brand-cyan",
    pink: "text-brand-pink",
    purple: "text-brand-purple",
    blue: "text-brand-blue",
    navy: "text-brand-navy",
  }[variant];

  return (
    <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${className}`}>
      {showLines && <span className={`w-5 h-[1.5px] rounded-full ${lineColors}`} />}
      <span className={textColors}>{children}</span>
      {showLines && <span className={`w-5 h-[1.5px] rounded-full ${lineColors}`} />}
    </div>
  );
}

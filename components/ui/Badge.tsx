import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "pink" | "purple" | "blue" | "navy";
  className?: string;
}

export function Badge({ children, variant = "blue", className = "" }: BadgeProps) {
  const variantStyles = {
    cyan: "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20",
    pink: "bg-brand-pink/10 text-brand-pink border-brand-pink/20",
    purple: "bg-brand-purple/10 text-brand-purple border-brand-purple/20",
    blue: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
    navy: "bg-brand-navy/10 text-brand-navy border-brand-navy/20",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
}

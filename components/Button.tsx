import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "./icons";

interface ButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  showArrows?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children = "Let's Talk",
  variant = "primary",
  size = "md",
  href,
  onClick,
  showArrows = true,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2 text-sm font-semibold tracking-wide",
    md: "px-7 py-3 text-base font-semibold tracking-wide",
    lg: "px-9 py-4 text-lg font-bold tracking-wide",
  }[size];

  // Primary variant matches the exact Brand Guidelines Button.png:
  // Pink #E60085 background, white bold text, rounded-full pill with animated arrows
  const variantClasses = {
    primary:
      "bg-brand-pink text-white hover:bg-brand-pink-hover shadow-lg shadow-brand-pink/25 active:scale-[0.98] transition-all duration-200 border border-transparent",
    secondary:
      "bg-white text-brand-navy border border-brand-border hover:border-brand-blue hover:text-brand-blue hover:bg-brand-light shadow-sm active:scale-[0.98] transition-all duration-200",
    outline:
      "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10 active:scale-[0.98] transition-all duration-200",
    ghost:
      "bg-transparent text-brand-dark hover:text-brand-blue hover:bg-brand-light/80 transition-all duration-200",
  }[variant];

  const content = (
    <span className="flex items-center justify-center gap-2.5">
      {showArrows && variant === "primary" && (
        <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
      )}
      <span>{children}</span>
      {showArrows && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </span>
  );

  const baseClasses = `group inline-flex items-center justify-center rounded-full font-sans cursor-pointer select-none text-center ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {content}
    </button>
  );
}

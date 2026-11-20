import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "../icons";

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
    sm: "px-5 py-2 text-xs sm:text-sm font-semibold",
    md: "px-6 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-semibold",
    lg: "px-8 py-3.5 sm:px-9 sm:py-4 text-base sm:text-lg font-bold",
  }[size];

  // Primary: Matches exact Brand Pink pill button (#E60085) with white bold text
  const variantClasses = {
    primary:
      "bg-brand-pink text-white hover:bg-brand-pink-hover shadow-lg shadow-brand-pink/25 active:scale-[0.98] transition-all duration-200 border border-transparent",
    secondary:
      "bg-white text-brand-navy border border-brand-border hover:border-brand-blue hover:text-brand-blue hover:bg-brand-light shadow-sm active:scale-[0.98] transition-all duration-200",
    outline:
      "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10 active:scale-[0.98] transition-all duration-200",
    ghost:
      "bg-transparent text-brand-dark hover:text-brand-blue hover:bg-brand-light transition-all duration-200",
  }[variant];

  const content = (
    <span className="flex items-center justify-center gap-2">
      {showArrows && variant === "primary" && (
        <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:-translate-x-1" />
      )}
      <span>{children}</span>
      {showArrows && (
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1" />
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

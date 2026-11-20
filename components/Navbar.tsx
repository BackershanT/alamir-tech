"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { MenuIcon, CloseIcon } from "./icons";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Why Us", href: "#why-us" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-brand-border"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-9 w-[160px] sm:h-11 sm:w-[190px]">
              <Image
                src={isScrolled ? "/images/logo-color-trimmed.png" : "/images/logo-white-trimmed.png"}
                alt="Alamir Tech Logo"
                fill
                priority
                className="object-contain object-left transition-opacity duration-200"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-150 ${
                  isScrolled
                    ? "text-brand-dark hover:text-brand-blue"
                    : "text-white/90 hover:text-brand-cyan"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button href="#contact" size="sm" showArrows={true}>
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-brand-navy hover:bg-brand-light"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-brand-border shadow-xl px-6 pt-4 pb-8 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-brand-dark hover:text-brand-pink py-2 border-b border-brand-border/40 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <Button
              href="#contact"
              size="md"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

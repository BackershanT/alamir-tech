"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { MenuIcon, CloseIcon } from "../icons";
import { SITE_CONFIG } from "@/lib/site-config";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-color-trimmed.png"
              alt="Alamir Tech"
              width={190}
              height={51}
              priority
              className="h-10 sm:h-11 w-auto object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {SITE_CONFIG.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-brand-dark hover:text-brand-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button href="#contact" size="sm" showArrows={true}>
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-brand-navy rounded-lg hover:bg-brand-light transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-brand-border px-6 pt-4 pb-8 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {SITE_CONFIG.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-brand-dark hover:text-brand-pink py-2 border-b border-brand-border/40"
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

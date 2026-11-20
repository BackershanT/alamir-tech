"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { MenuIcon, CloseIcon, ChevronDown, ZapIcon, CodeIcon, ShieldIcon, ArrowRight } from "../icons";
import { SOFTWARE_PRODUCTS } from "@/lib/services-data";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  {
    label: "Products",
    href: "#products",
    hasDropdown: true,
  },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "products", "team", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productIcons = {
    erp: { icon: ZapIcon, color: "text-brand-cyan bg-[#E0F2FE]" },
    crm: { icon: CodeIcon, color: "text-brand-purple bg-[#F3E8FF]" },
    finance: { icon: ShieldIcon, color: "text-brand-pink bg-[#FCE7F3]" },
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-brand-border/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 1. Left Zone: Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image
              src="/images/logo-color-trimmed.png"
              alt="Alamir Tech"
              width={190}
              height={51}
              priority
              className="h-10 sm:h-11 w-auto object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* 2. Center Zone: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setProductsOpen(!productsOpen)}
                      className={`flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors py-2 cursor-pointer ${
                        isActive || productsOpen
                          ? "text-brand-blue"
                          : "text-brand-dark hover:text-brand-blue"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          productsOpen ? "rotate-180 text-brand-pink" : "text-brand-muted"
                        }`}
                      />
                    </button>

                    {/* Dropdown Popover */}
                    {productsOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white rounded-2xl border border-brand-border shadow-2xl p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                        <div className="space-y-1">
                          {SOFTWARE_PRODUCTS.map((prod) => {
                            const iconData = productIcons[prod.iconType];
                            const Icon = iconData.icon;

                            return (
                              <Link
                                key={prod.title}
                                href={prod.href}
                                onClick={() => setProductsOpen(false)}
                                className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-brand-light transition-colors group"
                              >
                                <div
                                  className={`w-9 h-9 rounded-lg ${iconData.color} flex items-center justify-center shrink-0 mt-0.5`}
                                >
                                  <Icon size={18} />
                                </div>
                                <div className="space-y-0.5">
                                  <div className="text-xs font-bold text-brand-navy group-hover:text-brand-blue transition-colors flex items-center gap-1">
                                    <span>{prod.title}</span>
                                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-pink" />
                                  </div>
                                  <div className="text-[11px] text-brand-muted line-clamp-1">
                                    {prod.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="mt-2 pt-2 border-t border-brand-border/60 px-3 py-1 flex items-center justify-between text-[11px] text-brand-muted">
                          <span>Custom SaaS platforms</span>
                          <Link
                            href="#contact"
                            onClick={() => setProductsOpen(false)}
                            className="font-bold text-brand-blue hover:text-brand-pink"
                          >
                            Request Demo →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-semibold tracking-wide transition-colors py-2 ${
                    isActive
                      ? "text-brand-blue font-bold"
                      : "text-brand-dark hover:text-brand-blue"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* 3. Right Zone: Primary CTA Button */}
          <div className="hidden md:flex items-center">
            <Button href="#contact" size="sm" showArrows={true}>
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-brand-navy rounded-lg hover:bg-brand-light transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-brand-border px-6 pt-4 pb-8 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-semibold text-brand-dark hover:text-brand-pink py-2.5 border-b border-brand-border/40 transition-colors"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="pt-3">
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

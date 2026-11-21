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
  const [isAtHome, setIsAtHome] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollYRef = useRef<number>(0);

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

  // Track scroll direction, active section, and auto-hide/reveal rules
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroEl = document.getElementById("hero");
      const heroBottom = heroEl ? heroEl.offsetHeight - 80 : 600;
      const currentIsAtHome = currentScrollY <= heroBottom;
      setIsAtHome(currentIsAtHome);

      // 1. Scrollspy: track active section
      const sections = ["hero", "about", "services", "products", "team", "contact"];
      const scrollPosition = currentScrollY + 120;
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

      // 2. Visibility rule:
      // In Home: always show navbar.
      // Other screens: hide it. When scrolling upward: show navbar, then hide after 3 seconds.
      if (currentIsAtHome) {
        setIsVisible(true);
        if (hideTimerRef.current) {
          clearTimeout(hideTimerRef.current);
          hideTimerRef.current = null;
        }
      } else {
        const deltaY = currentScrollY - lastScrollYRef.current;

        if (deltaY > 6) {
          // Scrolling DOWN on other screens -> hide immediately
          setIsVisible(false);
          if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
            hideTimerRef.current = null;
          }
        } else if (deltaY < -6) {
          // Scrolling UP on other screens -> show navbar, then auto-hide after 3 seconds
          setIsVisible(true);
          if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
          }
          hideTimerRef.current = setTimeout(() => {
            setIsVisible(false);
          }, 3000);
        }
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  // Pause hide timer on hover so navbar doesn't disappear during user interaction
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const heroEl = document.getElementById("hero");
    const heroBottom = heroEl ? heroEl.offsetHeight - 80 : 600;
    const isPastHome = window.scrollY > heroBottom;

    if (isPastHome && !productsOpen && !mobileMenuOpen) {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  };

  // Keep navbar visible if currently active or hovered
  const shouldShow = isVisible || productsOpen || mobileMenuOpen || isHovered;

  const productIcons = {
    erp: { icon: ZapIcon, color: "text-brand-cyan bg-[#E0F2FE]" },
    crm: { icon: CodeIcon, color: "text-brand-purple bg-[#F3E8FF]" },
    finance: { icon: ShieldIcon, color: "text-brand-pink bg-[#FCE7F3]" },
  };

  return (
    <header
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        shouldShow
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        isAtHome
          ? "bg-transparent border-b border-transparent"
          : "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 1. Left Zone: Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image
              src="/images/logo-dark.png"
              alt="Alamir Tech"
              width={183}
              height={50}
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
                          ? isAtHome
                            ? "text-brand-cyan font-bold"
                            : "text-brand-pink font-bold"
                          : isAtHome
                          ? "text-white/85 hover:text-white"
                          : "text-slate-700 hover:text-brand-pink"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          productsOpen
                            ? "rotate-180 text-brand-pink"
                            : isAtHome
                            ? "text-white/60"
                            : "text-slate-500"
                        }`}
                      />
                    </button>

                    {/* Dropdown Popover */}
                    {productsOpen && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-80 rounded-2xl p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50 backdrop-blur-2xl shadow-2xl border ${
                          isAtHome
                            ? "bg-[#070e38]/95 border-white/15 text-white"
                            : "bg-white border-slate-200 text-slate-900 shadow-[0_10px_35px_rgba(0,0,0,0.1)]"
                        }`}
                      >
                        <div className="space-y-1">
                          {SOFTWARE_PRODUCTS.map((prod) => {
                            const iconData = productIcons[prod.iconType];
                            const Icon = iconData.icon;

                            return (
                              <Link
                                key={prod.title}
                                href={prod.href}
                                onClick={() => setProductsOpen(false)}
                                className={`flex items-start gap-3.5 p-3 rounded-xl transition-colors group ${
                                  isAtHome
                                    ? "hover:bg-white/[0.08]"
                                    : "hover:bg-slate-100/80"
                                }`}
                              >
                                <div
                                  className={`w-9 h-9 rounded-lg ${iconData.color} flex items-center justify-center shrink-0 mt-0.5`}
                                >
                                  <Icon size={18} />
                                </div>
                                <div className="space-y-0.5">
                                  <div
                                    className={`text-xs font-bold transition-colors flex items-center gap-1 ${
                                      isAtHome
                                        ? "text-white group-hover:text-brand-cyan"
                                        : "text-slate-900 group-hover:text-brand-pink"
                                    }`}
                                  >
                                    <span>{prod.title}</span>
                                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-pink" />
                                  </div>
                                  <div
                                    className={`text-[11px] line-clamp-1 ${
                                      isAtHome ? "text-brand-border/70" : "text-slate-500"
                                    }`}
                                  >
                                    {prod.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <div
                          className={`mt-2 pt-2 px-3 py-1 flex items-center justify-between text-[11px] border-t ${
                            isAtHome
                              ? "border-white/10 text-brand-border/70"
                              : "border-slate-100 text-slate-500"
                          }`}
                        >
                          <span>Custom SaaS platforms</span>
                          <Link
                            href="#contact"
                            onClick={() => setProductsOpen(false)}
                            className="font-bold text-brand-cyan hover:text-brand-pink transition-colors"
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
                      ? isAtHome
                        ? "text-brand-cyan font-bold"
                        : "text-brand-pink font-bold"
                      : isAtHome
                      ? "text-white/85 hover:text-white"
                      : "text-slate-700 hover:text-brand-pink"
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
            className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${
              isAtHome
                ? "text-white hover:bg-white/10"
                : "text-slate-800 hover:bg-slate-100"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden backdrop-blur-2xl px-6 pt-4 pb-8 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200 border-b ${
            isAtHome
              ? "bg-[#070e38]/98 border-white/15"
              : "bg-white/98 border-slate-200 shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
          }`}
        >
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base font-semibold py-2.5 border-b transition-colors ${
                    isAtHome
                      ? "text-white/90 hover:text-brand-pink border-white/10"
                      : "text-slate-800 hover:text-brand-pink border-slate-100"
                  }`}
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

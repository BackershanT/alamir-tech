import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#070e3d] to-[#040826] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Image
              src="/images/logo-white-trimmed.png"
              alt="Alamir Tech"
              width={190}
              height={51}
              className="h-10 sm:h-11 w-auto object-contain object-left"
            />
            <p className="text-sm text-brand-border/80 max-w-sm leading-relaxed">
              Technology solutions that move your business forward. We engineer scalable enterprise software, intelligent automation, and cloud platforms.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {SITE_CONFIG.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-pink flex items-center justify-center text-xs font-bold text-white transition-all"
                  aria-label={social.name}
                >
                  {social.name.substring(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              Pages
            </h4>
            <ul className="space-y-2 text-sm text-brand-border/80">
              <li>
                <Link href="#hero" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#philosophy" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm text-brand-border/80">
              <li>
                <Link href="#products" className="hover:text-white transition-colors">
                  ERP & Operations
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white transition-colors">
                  Enterprise CRM
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white transition-colors">
                  Financial Management
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  AI Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              Say Hello
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-border/80">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-brand-cyan transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-brand-cyan transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="pt-2 text-xs text-brand-border/60">
                {SITE_CONFIG.contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-brand-border/60">
          © 2026 Alamir Tech. All rights reserved. Slogan: "Technology Solutions That Move Your Business Forward".
        </div>
      </div>
    </footer>
  );
}

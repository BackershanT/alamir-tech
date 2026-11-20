import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="relative h-10 w-[180px]">
              <Image
                src="/images/logo-white-trimmed.png"
                alt="Alamir Tech"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-brand-border/80 max-w-sm leading-relaxed">
              Technology that moves business forward. We architect enterprise software, intelligent automation, and resilient cloud foundations.
            </p>
            <div className="text-xs text-brand-cyan font-semibold">
              Trusted by enterprise leaders across 14 countries.
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-border/80">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  AI & Cognitive Automation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Cybersecurity Defense
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Data & Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-border/80">
              <li>
                <Link href="#solutions" className="hover:text-white transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-white transition-colors">
                  Healthcare & Life Sciences
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-white transition-colors">
                  Supply Chain & Logistics
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-white transition-colors">
                  Enterprise SaaS
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-border/80">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Alamir Tech
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#tech-stack" className="hover:text-white transition-colors">
                  Technology Stack
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Let's Talk
                </Link>
              </li>
              <li>
                <a href="mailto:careers@alamirtech.com" className="hover:text-white transition-colors">
                  Careers <span className="text-[10px] bg-brand-pink px-1.5 py-0.5 rounded text-white font-bold ml-1">WE'RE HIRING</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-border/60">
          <div>
            © 2026 Alamir Tech. All rights reserved. Slogan: "Technology that moves business forward".
          </div>
          <div className="flex items-center gap-6">
            <Link href="#contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Security Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

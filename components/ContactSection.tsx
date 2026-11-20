"use client";

import React, { useState } from "react";
import { Button } from "./Button";
import { MailIcon, PhoneIcon, MapPinIcon, CheckCircle } from "./icons";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Enterprise Software Engineering",
    budget: "$25,000 - $50,000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-pink/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-pink/20 text-brand-pink text-xs font-bold tracking-wider uppercase border border-brand-pink/30">
                Let's Talk
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to move your business forward?
              </h2>
              <p className="text-base sm:text-lg text-brand-border/80 leading-relaxed">
                Schedule a confidential technical discovery call with our principal solutions architects. We respond within 4 business hours.
              </p>
            </div>

            <div className="space-y-5 pt-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-cyan shrink-0 border border-white/10">
                  <MailIcon size={20} />
                </div>
                <div>
                  <div className="text-xs text-brand-border/70 uppercase tracking-wider font-semibold">
                    Direct Email
                  </div>
                  <a
                    href="mailto:contact@alamirtech.com"
                    className="text-base font-bold text-white hover:text-brand-cyan transition-colors"
                  >
                    contact@alamirtech.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-cyan shrink-0 border border-white/10">
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <div className="text-xs text-brand-border/70 uppercase tracking-wider font-semibold">
                    Direct Telephone
                  </div>
                  <a
                    href="tel:+18005552526"
                    className="text-base font-bold text-white hover:text-brand-cyan transition-colors"
                  >
                    +1 (800) 555-ALAMIR
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-cyan shrink-0 border border-white/10">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <div className="text-xs text-brand-border/70 uppercase tracking-wider font-semibold">
                    Global Engineering Hubs
                  </div>
                  <div className="text-base font-bold text-white">
                    San Francisco • Dubai • London • Riyadh
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2 text-xs text-brand-border/70">
              <span className="flex items-center gap-2">
                <CheckCircle className="text-brand-cyan w-4 h-4" /> Non-Disclosure Agreement (NDA) signed upon request
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="text-brand-cyan w-4 h-4" /> Direct technical assessment from senior architects
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white text-brand-dark p-8 sm:p-10 shadow-2xl border border-brand-border">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-brand-muted max-w-md mx-auto">
                    Thank you for reaching out to Alamir Tech. One of our lead architects will review your project brief and get in touch within 4 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-brand-blue hover:text-brand-pink underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-brand-border pb-4">
                    <h3 className="text-xl font-bold text-brand-navy">
                      Start Your Project Consultation
                    </h3>
                    <p className="text-xs text-brand-muted mt-1">
                      Fill out the form below or email us directly to discuss your requirements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-light focus:bg-white focus:outline-none focus:border-brand-blue transition-colors text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-light focus:bg-white focus:outline-none focus:border-brand-blue transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enterprise Inc."
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-light focus:bg-white focus:outline-none focus:border-brand-blue transition-colors text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-light focus:bg-white focus:outline-none focus:border-brand-blue transition-colors text-sm"
                      >
                        <option>Enterprise Software Engineering</option>
                        <option>Cloud Infrastructure & DevOps</option>
                        <option>AI & Cognitive Automation</option>
                        <option>Cybersecurity & Compliance</option>
                        <option>Data Engineering & Analytics</option>
                        <option>Digital Transformation & Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Target Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-light focus:bg-white focus:outline-none focus:border-brand-blue transition-colors text-sm"
                    >
                      <option>&lt; $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000 - $250,000</option>
                      <option>$250,000+</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Project Goals & Context *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your objectives, existing tech stack, and timeline..."
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-light focus:bg-white focus:outline-none focus:border-brand-blue transition-colors text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      showArrows={true}
                    >
                      Submit Technical Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

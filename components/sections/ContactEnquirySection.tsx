"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { WhatsAppIcon, PhoneIcon, MailIcon, MapPinIcon, CheckIcon } from "../icons";
import { SITE_CONFIG } from "@/lib/site-config";

export function ContactEnquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    service: "Custom Software Development",
    budget: "$25,000 - $50,000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <Badge variant="blue" showLines={true}>
            GET IN TOUCH
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
            Let's build something that <br className="hidden sm:inline" />
            works for your business.
          </h2>
          <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto leading-relaxed">
            Reach out to our engineering directors today and get a customized feasibility study and cost estimate.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Channels & Urgent Support */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-brand-navy">
                Let's talk about your next <br />
                big idea.
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted">
                Choose the communication channel that suits you best:
              </p>
            </div>

            {/* Channels matching slice_6_contact_enquiry.png */}
            <div className="space-y-3.5 pt-1">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-brand-border/80 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <WhatsAppIcon size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-navy group-hover:text-emerald-600 transition-colors">
                    WhatsApp
                  </div>
                  <div className="text-xs text-brand-muted font-medium">
                    {SITE_CONFIG.contact.whatsapp}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-brand-border/80 shadow-xs hover:border-brand-blue hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    Phone
                  </div>
                  <div className="text-xs text-brand-muted font-medium">
                    {SITE_CONFIG.contact.phone}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-brand-border/80 shadow-xs hover:border-brand-cyan hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-brand-cyan flex items-center justify-center shrink-0">
                  <MailIcon size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-navy group-hover:text-brand-cyan transition-colors">
                    Email
                  </div>
                  <div className="text-xs text-brand-muted font-medium">
                    {SITE_CONFIG.contact.email}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-brand-border/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-navy">Location</div>
                  <div className="text-xs text-brand-muted font-medium">
                    {SITE_CONFIG.contact.address}
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Urgent Support Box */}
            <div className="p-6 rounded-2xl bg-brand-navy text-white space-y-3.5 shadow-lg border border-white/10">
              <h4 className="text-sm font-bold text-white">Need urgent support?</h4>
              <p className="text-xs text-brand-border/80 leading-relaxed">
                24/7 dedicated enterprise technical response desk for critical production systems.
              </p>
              <div className="pt-1">
                <Button href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`} size="sm" variant="primary">
                  Direct Hotline
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Send us an enquiry form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border shadow-xl">
              <div className="border-b border-brand-border/60 pb-5 mb-6">
                <h3 className="text-2xl font-bold text-brand-navy">
                  Send us an enquiry
                </h3>
                <p className="text-xs text-brand-muted mt-1">
                  Fill out your project details and we will reply within 4 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckIcon size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-brand-navy">Enquiry Sent!</h4>
                  <p className="text-sm text-brand-muted max-w-sm mx-auto">
                    Thank you, {formData.fullName || "Partner"}. An Alamir Tech solution architect will reach out shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-brand-blue hover:text-brand-pink underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-sm focus:outline-none focus:border-brand-blue bg-[#F8FAFC]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Enterprise Inc."
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-sm focus:outline-none focus:border-brand-blue bg-[#F8FAFC]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-sm focus:outline-none focus:border-brand-blue bg-[#F8FAFC]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-sm focus:outline-none focus:border-brand-blue bg-[#F8FAFC]"
                      >
                        <option>Custom Software Development</option>
                        <option>Cloud Infrastructure & DevOps</option>
                        <option>Data Engineering & AI Systems</option>
                        <option>ERP & Operations Platform</option>
                        <option>Enterprise CRM Suite</option>
                        <option>Automated Financial Management</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Target Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-sm focus:outline-none focus:border-brand-blue bg-[#F8FAFC]"
                    >
                      <option>&lt; $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000+</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Tell us about your project *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Objectives, requirements, timelines..."
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-border text-sm focus:outline-none focus:border-brand-blue bg-[#F8FAFC] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" variant="primary" size="md" className="w-full">
                      Send Us an Enquiry
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

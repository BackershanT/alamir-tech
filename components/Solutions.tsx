import React from "react";
import { ArrowUpRight, CheckCircle } from "./icons";

const SOLUTIONS = [
  {
    title: "Financial Services & FinTech",
    subtitle: "Ultra-low latency, strict regulatory security & instant payments",
    stats: "3.5x Throughput",
    points: [
      "High-concurrency microsecond payment orchestration",
      "Real-time fraud prevention using automated AI inference",
      "PCI-DSS, KYC/AML & Open Banking compliance",
    ],
  },
  {
    title: "Healthcare & Life Sciences",
    subtitle: "HIPAA-grade telemedicine, EHR integrations & clinical workflows",
    stats: "100% HIPAA Ready",
    points: [
      "Secure patient-facing portals with end-to-end encryption",
      "Interoperability with FHIR and HL7 data protocols",
      "AI-driven diagnostic imaging & predictive patient care",
    ],
  },
  {
    title: "Supply Chain & Intelligent Logistics",
    subtitle: "End-to-end inventory visibility, IoT tracking & smart dispatch",
    stats: "40% Cost Savings",
    points: [
      "Dynamic fleet route optimization with live telematics",
      "Warehouse automation & automated stock forecasting",
      "Distributed ledger provenance & supply chain transparency",
    ],
  },
  {
    title: "Enterprise SaaS & High-Growth Platforms",
    subtitle: "Multi-tenant cloud architecture, billing & global scalability",
    stats: "10M+ Daily Events",
    points: [
      "Self-healing multi-region Kubernetes deployments",
      "Usage-based billing engines & enterprise RBAC governance",
      "Sub-50ms API responses globally via edge CDN computing",
    ],
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-bold tracking-wider uppercase">
              Industry Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              Specialized domain depth for complex industries
            </h2>
            <p className="text-base sm:text-lg text-brand-muted">
              We bring proven domain frameworks that satisfy stringent industry standards, compliance mandates, and mission-critical SLAs.
            </p>
          </div>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-pink transition-colors"
            >
              <span>Explore Custom Vertical Solutions</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLUTIONS.map((sol, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-brand-light border border-brand-border hover:border-brand-blue/40 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-brand-muted bg-white px-3 py-1 rounded-full border border-brand-border">
                    Vertical 0{index + 1}
                  </span>
                  <span className="text-xs font-extrabold text-brand-pink bg-brand-pink/10 px-3 py-1 rounded-full">
                    {sol.stats}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                  {sol.title}
                </h3>

                <p className="text-sm text-brand-muted">{sol.subtitle}</p>

                <div className="space-y-2.5 pt-4 border-t border-brand-border">
                  {sol.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-sm text-brand-dark">
                      <CheckCircle className="text-brand-blue w-4 h-4 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy group-hover:text-brand-pink transition-colors"
                >
                  <span>Request Case Study & Architecture Blueprint</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { ArrowUpRight } from "./icons";

const CASE_STUDIES = [
  {
    client: "Global NeoBank & Payments Core",
    industry: "Fintech",
    title: "High-Throughput Payment Engine Modernization",
    results: [
      { metric: "3.5x", label: "Transaction Throughput" },
      { metric: "99.999%", label: "System Availability" },
      { metric: "-45%", label: "Cloud Infra Spend" },
    ],
    summary:
      "Engineered an event-driven microservices architecture handling 15,000+ financial transactions per second with automated fraud scoring in under 20ms.",
    tags: ["Go", "Kafka", "AWS EKS", "Terraform", "PostgreSQL"],
  },
  {
    client: "Tier-1 Autonomous Freight Network",
    industry: "Logistics & Supply Chain",
    title: "Real-Time AI Dispatch & Route Optimization",
    results: [
      { metric: "42%", label: "Fuel & Route Cost Reduction" },
      { metric: "120K+", label: "Daily Autonomous Dispatches" },
      { metric: "14ms", label: "Inference Latency" },
    ],
    summary:
      "Built a predictive routing platform powered by spatial Graph Neural Networks and live telematics, drastically cutting fleet idle times across North America and EMEA.",
    tags: ["Python", "FastAPI", "Next.js", "Redis", "Google Cloud"],
  },
  {
    client: "Healthcare Telehealth Enterprise",
    industry: "HealthTech",
    title: "Scalable HIPAA-Compliant Telemedicine SaaS",
    results: [
      { metric: "2.4M", label: "Active Patients Served" },
      { metric: "100%", label: "HIPAA & SOC 2 Compliance" },
      { metric: "4.9/5", label: "Provider Satisfaction" },
    ],
    summary:
      "Designed and launched an enterprise video telemedicine infrastructure with real-time AI transcription, automated EHR synchronization, and biometric authentication.",
    tags: ["React Native", "WebRTC", "Node.js", "Azure", "Docker"],
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-wider uppercase">
              Case Studies & Proven Impact
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              Delivering measurable technical and business outcomes
            </h2>
            <p className="text-base sm:text-lg text-brand-muted">
              Explore how we have engineered mission-critical platforms that drive efficiency, lower costs, and unlock transformative growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="bg-brand-light rounded-2xl p-8 border border-brand-border hover:border-brand-navy/30 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-pink bg-brand-pink/10 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                  <span className="text-xs text-brand-muted font-medium">{study.client}</span>
                </div>

                <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                  {study.title}
                </h3>

                <p className="text-sm text-brand-muted leading-relaxed">
                  {study.summary}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-brand-border/70 text-center">
                  {study.results.map((res, rIdx) => (
                    <div key={rIdx} className="space-y-1">
                      <div className="text-lg font-extrabold text-brand-navy group-hover:text-brand-pink transition-colors">
                        {res.metric}
                      </div>
                      <div className="text-[11px] text-brand-muted leading-tight font-medium">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {study.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium bg-white text-brand-dark px-2.5 py-1 rounded-md border border-brand-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy group-hover:text-brand-pink transition-colors"
                >
                  <span>Request Full Architecture Case Study</span>
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

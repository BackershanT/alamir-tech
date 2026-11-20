"use client";

import React, { useState } from "react";
import {
  CodeIcon,
  CloudIcon,
  CpuIcon,
  ShieldCheckIcon,
  DatabaseIcon,
  SparklesIcon,
  ArrowRight,
} from "./icons";
import { Button } from "./Button";

const SERVICES = [
  {
    id: "software",
    title: "Enterprise Software Engineering",
    category: "Engineering",
    icon: CodeIcon,
    accentColor: "from-brand-blue to-brand-cyan",
    badgeColor: "bg-brand-blue/10 text-brand-blue",
    description:
      "Bespoke, high-performance web, mobile, and distributed systems architected for massive scale, low latency, and uncompromising fault-tolerance.",
    features: [
      "Full-stack microservices & API gateways",
      "Modern web applications with React & Next.js",
      "Cross-platform iOS & Android mobile apps",
      "Legacy application refactoring & modernization",
    ],
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure & DevOps",
    category: "Cloud",
    icon: CloudIcon,
    accentColor: "from-brand-cyan to-sky-500",
    badgeColor: "bg-brand-cyan/10 text-brand-cyan",
    description:
      "Scalable multi-cloud environments engineered on AWS, Azure, and Google Cloud with automated CI/CD pipelines, container orchestration, and IaC.",
    features: [
      "Kubernetes & Docker container orchestration",
      "Terraform & Pulumi Infrastructure-as-Code",
      "Zero-downtime CI/CD continuous deployment",
      "FinOps cloud spend optimization & disaster recovery",
    ],
  },
  {
    id: "ai",
    title: "AI & Cognitive Automation",
    category: "AI",
    icon: CpuIcon,
    accentColor: "from-brand-pink to-brand-purple",
    badgeColor: "bg-brand-pink/10 text-brand-pink",
    description:
      "Harness the power of enterprise Generative AI, tailored LLMs, autonomous agentic workflows, and predictive analytics to automate complex business workflows.",
    features: [
      "Custom domain-tuned LLMs & RAG pipelines",
      "Autonomous AI agents for enterprise operations",
      "Computer vision & document intelligence",
      "Predictive analytics & forecasting algorithms",
    ],
  },
  {
    id: "security",
    title: "Cybersecurity & Zero-Trust Defense",
    category: "Security",
    icon: ShieldCheckIcon,
    accentColor: "from-purple-600 to-indigo-600",
    badgeColor: "bg-brand-purple/10 text-brand-purple",
    description:
      "End-to-end cybersecurity posture assessments, penetration testing, compliance governance, and round-the-clock proactive threat mitigation.",
    features: [
      "Zero-Trust network architecture & IAM",
      "SOC 2, ISO 27001 & HIPAA compliance readiness",
      "Penetration testing & code vulnerability audits",
      "Automated DevSecOps security pipelines",
    ],
  },
  {
    id: "data",
    title: "Data Engineering & Analytics",
    category: "Cloud",
    icon: DatabaseIcon,
    accentColor: "from-teal-500 to-emerald-600",
    badgeColor: "bg-teal-500/10 text-teal-600",
    description:
      "Modernize your data infrastructure into real-time analytical powerhouses with scalable ETL, data lakehouses, and interactive executive intelligence.",
    features: [
      "Streaming pipelines with Kafka & Spark",
      "Snowflake, BigQuery & Databricks warehousing",
      "Data governance & automated cataloging",
      "Executive BI dashboards & real-time telemetry",
    ],
  },
  {
    id: "advisory",
    title: "Digital Transformation & Advisory",
    category: "Engineering",
    icon: SparklesIcon,
    accentColor: "from-brand-navy to-brand-blue",
    badgeColor: "bg-brand-navy/10 text-brand-navy",
    description:
      "Strategic technical consulting for forward-looking leadership: architecture roadmaps, technical due diligence, and enterprise agile execution.",
    features: [
      "CTO-as-a-Service & architectural review",
      "Technology stack evaluations & modernization",
      "Enterprise agile team enablement",
      "System integration & vendor audits",
    ],
  },
];

const CATEGORIES = ["All", "Engineering", "Cloud", "AI", "Security"];

export function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold tracking-wider uppercase">
            Capabilities & Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Engineered to accelerate your technical advantage
          </h2>
          <p className="text-base sm:text-lg text-brand-muted">
            We partner with enterprises and fast-growing innovators to build resilient software, intelligent automation, and rock-solid cloud infrastructure.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-brand-navy text-white shadow-md shadow-brand-navy/20"
                    : "bg-white text-brand-dark border border-brand-border hover:border-brand-blue hover:text-brand-blue"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-8 border border-brand-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top accent bar on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-xl bg-brand-light flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 shadow-inner">
                      <Icon size={26} />
                    </div>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${service.badgeColor}`}
                    >
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-brand-muted leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 border-t border-brand-border/60 space-y-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-brand-dark font-medium"
                      >
                        <span className="text-brand-pink font-bold mt-0.5">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy group-hover:text-brand-pink transition-colors"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-2xl bg-white border border-brand-border p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-brand-navy">
              Have a custom enterprise architecture in mind?
            </h4>
            <p className="text-sm text-brand-muted">
              Our principal engineers can evaluate your technical specs and propose a proof of concept.
            </p>
          </div>
          <Button href="#contact" variant="primary" size="md">
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
}

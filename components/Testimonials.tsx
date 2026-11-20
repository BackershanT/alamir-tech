import React from "react";

const TESTIMONIALS = [
  {
    quote:
      "Alamir Tech modernized our core transaction engine ahead of schedule. Their architectural depth and proactive communication made them feel like an integrated elite in-house team rather than an external partner.",
    author: "David Vance",
    role: "Chief Technology Officer",
    company: "Apex Capital Partners",
    highlight: "Ahead of schedule delivery",
  },
  {
    quote:
      "When we scaled from 100,000 to over 2 million patients, Alamir Tech rebuilt our streaming data pipeline with zero downtime. Their zero-trust security expertise gave our board total confidence.",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "OmniHealth Global",
    highlight: "Zero downtime scaling",
  },
  {
    quote:
      "The custom AI agent workflows designed by Alamir Tech cut our customer support resolution time by 68%. They don't just write code; they understand enterprise business strategy.",
    author: "Marcus Chen",
    role: "Head of Digital Product",
    company: "Vanguard Logistics",
    highlight: "68% faster resolution",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-bold tracking-wider uppercase">
            Executive Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Trusted by technology leaders worldwide
          </h2>
          <p className="text-base sm:text-lg text-brand-muted">
            See how visionary engineering executives partner with Alamir Tech to accelerate innovation and de-risk mission-critical roadmaps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-brand-light border border-brand-border hover:border-brand-pink/40 transition-all duration-300 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {"★".repeat(5)}
                </div>
                <p className="text-sm sm:text-base text-brand-dark italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border">
                <div className="font-bold text-brand-navy">{t.author}</div>
                <div className="text-xs text-brand-muted">{t.role}</div>
                <div className="text-xs font-semibold text-brand-blue mt-0.5">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

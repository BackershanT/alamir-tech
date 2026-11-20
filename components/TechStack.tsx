import React from "react";

const STACKS = [
  {
    category: "Frontend & Mobile",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "React Native", "Flutter", "GraphQL"],
  },
  {
    category: "Backend & Systems",
    technologies: ["Node.js", "Python", "Go (Golang)", "FastAPI", "Rust", "gRPC", "RESTful APIs"],
  },
  {
    category: "Cloud & Infrastructure",
    technologies: ["Amazon Web Services", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Cloudflare"],
  },
  {
    category: "Data & Artificial Intelligence",
    technologies: ["PyTorch", "OpenAI / Anthropic APIs", "LangChain / LlamaIndex", "PostgreSQL", "Redis", "Apache Kafka", "Snowflake"],
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold tracking-wider uppercase">
            Modern Engineering Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Battle-tested technologies for modern scale
          </h2>
          <p className="text-base sm:text-lg text-brand-muted">
            We avoid unnecessary bloat and legacy technical drag by leveraging proven, highly secure, and cloud-native frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STACKS.map((stack, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm hover:shadow-md transition-all duration-200 space-y-4"
            >
              <h3 className="text-base font-bold text-brand-navy pb-3 border-b border-brand-border">
                {stack.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-light text-brand-dark border border-brand-border/80 hover:border-brand-blue hover:text-brand-blue transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

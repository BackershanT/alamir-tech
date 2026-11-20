export interface TechSolution {
  title: string;
  description: string;
  accent: "cyan" | "pink" | "purple";
  linkText: string;
  href: string;
}

export const TECH_SOLUTIONS: TechSolution[] = [
  {
    title: "Custom Software Development",
    description:
      "Bespoke web, mobile, and cloud applications designed for optimal scalability, resilience, and security.",
    accent: "cyan",
    linkText: "Learn more",
    href: "#contact",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description:
      "Automated multi-cloud architectures, Kubernetes clusters, and zero-downtime CI/CD continuous deployment pipelines.",
    accent: "pink",
    linkText: "Learn more",
    href: "#contact",
  },
  {
    title: "Data Engineering & AI Systems",
    description:
      "Unlock real-time data intelligence and autonomous AI workflows with custom LLMs, lakehouses, and predictive engines.",
    accent: "purple",
    linkText: "Learn more",
    href: "#contact",
  },
];

export interface SoftwareProduct {
  title: string;
  description: string;
  iconType: "erp" | "crm" | "finance";
  badgeColor: "cyan" | "purple" | "pink";
  actionText: string;
  href: string;
}

export const SOFTWARE_PRODUCTS: SoftwareProduct[] = [
  {
    title: "ERP & Operations Platform",
    description:
      "Automate supply chain, procurement, inventory tracking, and resource planning in one unified enterprise system.",
    iconType: "erp",
    badgeColor: "cyan",
    actionText: "Explore Platform",
    href: "#contact",
  },
  {
    title: "Enterprise CRM & Sales Suite",
    description:
      "Empower sales and account management with intelligent pipeline automation and predictive customer analytics.",
    iconType: "crm",
    badgeColor: "purple",
    actionText: "Explore Platform",
    href: "#contact",
  },
  {
    title: "Automated Financial Management",
    description:
      "Real-time ledger, automated multi-currency invoicing, compliance reporting, and instant payment reconciliation.",
    iconType: "finance",
    badgeColor: "pink",
    actionText: "Explore Platform",
    href: "#contact",
  },
];

export const PHILOSOPHY_PILLARS = [
  {
    title: "Continuous Consultation",
    desc: "Dedicated senior architects and tech leads guiding you through every milestone.",
    color: "cyan",
  },
  {
    title: "Robust Architecture",
    desc: "Fault-tolerant, modular architectures built to scale without technical debt.",
    color: "pink",
  },
  {
    title: "Transparent Delivery",
    desc: "Weekly sprint demos, open code repositories, and clear accountability at all times.",
    color: "purple",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Understand",
    desc: "Deep discovery into your business goals, operational pain points, and current tech stack.",
    bg: "bg-[#FDE8F3]",
    border: "border-brand-pink/30",
    textColor: "text-brand-pink",
    iconColor: "text-brand-pink",
  },
  {
    title: "Connect",
    desc: "Seamless integration between your existing systems, third-party APIs, and modern cloud.",
    bg: "bg-[#E5F6FD]",
    border: "border-brand-cyan/30",
    textColor: "text-brand-cyan",
    iconColor: "text-brand-cyan",
  },
  {
    title: "Scale",
    desc: "Continuous performance optimization, automated testing, and proactive monitoring as you grow.",
    bg: "bg-[#F5E8F8]",
    border: "border-brand-purple/30",
    textColor: "text-brand-purple",
    iconColor: "text-brand-purple",
  },
];

export const GLOBAL_TEAM_STATS = [
  { label: "100+ Enterprise Clients", icon: "clients" },
  { label: "14+ Global Hubs", icon: "hubs" },
  { label: "250+ Delivered Apps", icon: "apps" },
  { label: "99.9% Uptime SLA", icon: "uptime" },
  { label: "4.8/5 Satisfaction", icon: "rating" },
];

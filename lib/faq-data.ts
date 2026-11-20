export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What services does Alamir Tech specialize in?",
    answer:
      "Alamir Tech specializes in custom enterprise software engineering, scalable cloud architecture & DevOps, autonomous AI agent workflows, and digital system integration. We work with established companies and fast-growing businesses to build mission-critical digital systems.",
  },
  {
    id: "faq-2",
    question: "Do you build software for both mobile and web platforms?",
    answer:
      "Yes. We architect cross-platform mobile applications for iOS and Android using modern frameworks like React Native and Flutter, as well as ultra-fast, responsive web applications built with Next.js and React.",
  },
  {
    id: "faq-3",
    question: "How do you ensure data security & regulatory compliance?",
    answer:
      "Security is engineered into every stage of our software delivery lifecycle. We employ zero-trust network principles, automated vulnerability scanning, end-to-end data encryption, and ensure full compliance readiness with SOC 2, ISO 27001, HIPAA, and GDPR.",
  },
  {
    id: "faq-4",
    question: "What does your typical project timeline and delivery process look like?",
    answer:
      "Following our initial discovery and scoping phase (1-2 weeks), most enterprise minimum viable products (MVPs) or system modernizations are delivered within 6 to 10 weeks through structured, transparent two-week agile sprints.",
  },
];

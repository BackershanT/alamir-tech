import type { Metadata } from "next";
import "./globals.compiled.css";

export const metadata: Metadata = {
  title: "Alamir Tech | Technology Solutions That Move Your Business Forward",
  description:
    "We architect custom software solutions, intelligent cloud platforms, and enterprise systems that drive measurable clarity, performance, and revenue growth.",
  keywords: [
    "Alamir Tech",
    "Enterprise Software",
    "Cloud Infrastructure",
    "DevOps",
    "AI Systems",
    "ERP Platform",
    "CRM Suite",
    "Financial Management",
  ],
  icons: {
    icon: "/images/logo-color-trimmed.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-brand-dark selection:bg-brand-pink/20 selection:text-brand-pink font-sans">
        {children}
      </body>
    </html>
  );
}

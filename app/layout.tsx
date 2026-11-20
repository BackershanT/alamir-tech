import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alamir Tech | Technology That Moves Business Forward",
  description:
    "Alamir Tech delivers enterprise software engineering, cloud architecture, AI solutions, cybersecurity, and digital transformation services.",
  keywords: [
    "Alamir Tech",
    "Enterprise Software",
    "Cloud Architecture",
    "AI Solutions",
    "Digital Transformation",
    "Cybersecurity",
    "IT Consulting",
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
      <body className="min-h-full flex flex-col bg-white text-brand-dark selection:bg-brand-pink/20 selection:text-brand-pink">
        {children}
      </body>
    </html>
  );
}

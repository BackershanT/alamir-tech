import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solutions";
import { WhyUs } from "@/components/WhyUs";
import { CaseStudies } from "@/components/CaseStudies";
import { TechStack } from "@/components/TechStack";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Solutions />
        <WhyUs />
        <CaseStudies />
        <TechStack />
        <About />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

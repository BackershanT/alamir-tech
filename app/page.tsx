import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TechSolutionsSection } from "@/components/sections/TechSolutionsSection";
import { PowerfulSoftwareSection } from "@/components/sections/PowerfulSoftwareSection";
import { ChallengesSolutionsSection } from "@/components/sections/ChallengesSolutionsSection";
import { ConnectedTeamSection } from "@/components/sections/ConnectedTeamSection";
import { ContactEnquirySection } from "@/components/sections/ContactEnquirySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { RocketCTASection } from "@/components/sections/RocketCTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* Main Page Flow strictly matching UI Mockup */}
      <main className="flex-1">
        {/* 2. Hero Section: Run your business with greater clarity */}
        <HeroSection />

        {/* 3. Services: Technology Solutions That Move Your Business Forward */}
        <TechSolutionsSection />

        {/* 4. Products: Powerful Software for Every Business Need */}
        <PowerfulSoftwareSection />

        {/* 5. Challenges to Practical Solutions: Philosophy + Understand/Connect/Scale */}
        <ChallengesSolutionsSection />

        {/* 6. Connected Global Team: World Map + Leadership + Global Stats */}
        <ConnectedTeamSection />

        {/* 7. Contact & Project Consultation: Direct Channels + Send us an enquiry */}
        <ContactEnquirySection />

        {/* 8. FAQ: Question, answered */}
        <FAQSection />

        {/* 9. Rocket CTA: Ready to make your business work smarter? */}
        <RocketCTASection />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}

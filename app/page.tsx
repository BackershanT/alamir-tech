import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TechSolutionsSection } from "@/components/sections/TechSolutionsSection";
import { PowerfulSoftwareSection } from "@/components/sections/PowerfulSoftwareSection";
import { ChallengesSolutionsSection } from "@/components/sections/ChallengesSolutionsSection";
import { ConnectedTeamSection } from "@/components/sections/ConnectedTeamSection";
import { ContactEnquirySection } from "@/components/sections/ContactEnquirySection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* Main Page Flow: Home -> About -> Services -> Products -> Teams -> Contact -> FAQ -> CTA */}
      <main className="flex-1">
        {/* 1. Hero / Home Section: Run your business with greater clarity */}
        <HeroSection />

        {/* 2. About Section: Philosophy + Agile Team Collaboration + Understand/Connect/Scale */}
        <ChallengesSolutionsSection />

        {/* 3. Services Section: Technology Solutions That Move Your Business Forward */}
        <TechSolutionsSection />

        {/* 4. Products Section: Powerful Software for Every Business Need */}
        <PowerfulSoftwareSection />

        {/* 5. Teams Section: Connected Global Team with Real World Map */}
        <ConnectedTeamSection />

        {/* 6. Contact Section: Direct Channels + Send us an enquiry form */}
        <ContactEnquirySection />

        {/* 7. FAQ Section: Question, answered */}
        <FAQSection />

      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}

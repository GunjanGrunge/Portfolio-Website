import { useState } from "react";
import RadarGrid from "@/components/RadarGrid";
import FluidBlobCursor from "@/components/FluidBlobCursor";
import CyberNav from "@/components/CyberNav";
import CyberHero from "@/components/CyberHero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CyberProjects from "@/components/CyberProjects";
import CyberExperience from "@/components/CyberExperience";
import CyberEducation from "@/components/CyberEducation";
import ContactSection from "@/components/ContactSection";
import CyberFooter from "@/components/CyberFooter";
import HobbiesSection from "@/components/HobbiesSection";
import SpeedLineTransition from "@/components/SpeedLineTransition";

const Index = () => {
  const [activeWorld, setActiveWorld] = useState<"oncode" | "offcode">("oncode");

  return (
    <div className="min-h-screen bg-background relative">
      {/* Global effects */}
      <RadarGrid />
      <div className="noise-overlay" />
      <div className="scanlines" />
      <FluidBlobCursor />

      {/* Navigation */}
      <CyberNav activeWorld={activeWorld} onWorldChange={setActiveWorld} />

      {/* Sections */}
      <main className="relative z-10">
        <CyberHero />

        {activeWorld === "oncode" ? (
          <>
            <SpeedLineTransition />
            <AboutSection />
            <SpeedLineTransition />
            <SkillsSection />
            <SpeedLineTransition />
            <CyberProjects />
            <SpeedLineTransition />
            <CyberExperience />
            <SpeedLineTransition />
            <CyberEducation />
            <SpeedLineTransition />
            <ContactSection />
          </>
        ) : (
          <>
            <SpeedLineTransition />
            <HobbiesSection />
            <SpeedLineTransition />
            <ContactSection />
          </>
        )}
      </main>

      <div className="relative z-10">
        <CyberFooter />
      </div>
    </div>
  );
};

export default Index;

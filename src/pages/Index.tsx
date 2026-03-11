import RadarGrid from "@/components/RadarGrid";
import CustomCursor from "@/components/CustomCursor";
import CyberNav from "@/components/CyberNav";
import CyberHero from "@/components/CyberHero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CyberProjects from "@/components/CyberProjects";
import CyberExperience from "@/components/CyberExperience";
import CyberEducation from "@/components/CyberEducation";
import ContactSection from "@/components/ContactSection";
import CyberFooter from "@/components/CyberFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Global effects */}
      <RadarGrid />
      <div className="noise-overlay" />
      <div className="scanlines" />
      <CustomCursor />

      {/* Navigation */}
      <CyberNav />

      {/* Sections */}
      <main className="relative z-10">
        <CyberHero />
        <AboutSection />
        <SkillsSection />
        <CyberProjects />
        <CyberExperience />
        <CyberEducation />
        <ContactSection />
      </main>

      <div className="relative z-10">
        <CyberFooter />
      </div>
    </div>
  );
};

export default Index;

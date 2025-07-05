import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ResumeSection from "@/components/resume-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 transition-colors duration-300">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

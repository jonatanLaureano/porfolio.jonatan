import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutPage from "../pages/AboutPage";
import HeroPage from "../pages/HeroPage";
import ProjectsPage from "../pages/ProjectsPage";
import SkillsPage from "../pages/SkillsPage";
import ExperienceSection from "../sections/ExperienceSection";
import ContactSection from "../sections/ContactSection";
import EducationSection from "../sections/EducationSection";
import { useTheme } from "../hooks/useTheme";

export default function Layout() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main id="main" tabIndex={-1}>
        <HeroPage />
        <ProjectsPage />
        <ExperienceSection />
        <SkillsPage />
        <AboutPage />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

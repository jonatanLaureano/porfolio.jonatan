import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutPage from "../pages/AboutPage";
import HeroPage from "../pages/HeroPage";
import ProjectsPage from "../pages/ProjectsPage";
import SkillsPage from "../pages/SkillsPage";

const Layout = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`font-sans pt-16 md:pt-20 ${isDark ? "bg-[#0a0a1a]" : "bg-gray-50"}`}>
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      <section id="experience">
        <HeroPage isDark={isDark} />
      </section>

      <section id="skills">
        <SkillsPage isDark={isDark} />
      </section>

      <section id="projects">
        <ProjectsPage isDark={isDark} />
      </section>

      <section id="about">
        <AboutPage isDark={isDark} />
      </section>

      <Footer isDark={isDark} />
    </div>
  );
};

export default Layout;

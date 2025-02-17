import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutPage from "../pages/AboutPage";
import HeroPage from "../pages/HeroPage";
import ProjectsPage from "../pages/ProjectsPage";

const Layout = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <section id="experience">
        <HeroPage />
      </section>
      <section id="projects">
        <ProjectsPage />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <Footer />
    </div>
  );
};

export default Layout;

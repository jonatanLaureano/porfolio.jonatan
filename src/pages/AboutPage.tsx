import { FaUserCheck } from "react-icons/fa";

const AboutPage = () => {
  return (
    <section id="about" className="pt-10 pb-10 flex-col text-white bg-[#0a0a1a] overflow-hidden">
      <div className="max-w-4xl w-full mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left">
        <div className="text-left md:w-2/3">
          <div className="flex items-center gap-2 mb-4  md:justify-start">
            <FaUserCheck className="text-white text-3xl" />
            <h2 className="text-4xl font-bold">Sobre mí</h2>
          </div>
          <p className="text-lg mb-4">
            Soy <span className="font-bold text-yellow-400">Jonatan, Desarrollador Front-end</span> con más de <span className="font-bold text-yellow-400">1 año de experiencia</span> en la construcción de interfaces intuitivas y optimizadas. Me especializo en el <span className="font-bold text-yellow-400">desarrollo de aplicaciones web responsivas</span> y la <span className="font-bold text-yellow-400">mejora del rendimiento</span>, asegurando una experiencia de usuario atractiva.
          </p>
          <p className="text-lg mb-4">
            🚀 Me apasiona la <span className="font-bold text-yellow-400">innovación en el desarrollo web</span>, el <span className="font-bold text-yellow-400">trabajo en equipo</span> y la <span className="font-bold text-yellow-400">creación de soluciones digitales escalables</span>. Cuento con habilidades en <span className="font-bold text-yellow-400">comunicación, liderazgo, resolución de problemas y adaptabilidad</span>, lo que me permite aportar valor en proyectos desafiantes.
          </p>
        </div>

        <div className="mt-6 md:mt-20 md:w-1/3 flex justify-center md:justify-end">
          <img
            src="/img/jonatan.jpg"
            alt="Foto de Jonatan"
            width={200}
            height={200}
            className="rounded-lg shadow-lg border-4 border-white-500 p-1"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

import { FaUserCheck } from "react-icons/fa";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="pt-16 pb-20 text-white bg-[#0a0a1a] overflow-hidden"
    >
      <div className="max-w-4xl w-full mx-auto px-6 md:px-8">

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

          <div className="order-first md:order-last md:flex-shrink-0 flex justify-center">
            <div className="relative w-52 h-64 sm:w-60 sm:h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/60 ring-1 ring-white/5">
              <img
                src="/img/jonatan.jpg"
                alt="Foto de Jonatan Laureano"
                className="w-full h-full object-cover object-[center_15%]"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a1a]/60 to-transparent" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <FaUserCheck className="text-blue-400 text-3xl flex-shrink-0" />
              <h2 className="text-3xl font-bold">Sobre mí</h2>
            </div>

            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Soy <span className="font-bold text-white">Jonatan Laureano</span>, Desarrollador
              Front-end con más de{" "}
              <span className="font-bold text-blue-400">1 año de experiencia</span> construyendo
              interfaces para productos digitales de escala real. Actualmente trabajo en{" "}
              <span className="font-bold text-blue-400">BBVA a través de Entelgy</span>, donde
              desarrollo Web Components con Lit para el Design System Cells.
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              Me especializo en crear componentes reutilizables, optimizar la experiencia de
              usuario y garantizar la calidad del código mediante pruebas unitarias. Me apasiona
              el trabajo en equipo, la mejora continua y la construcción de soluciones digitales
              que impactan a millones de personas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPage;

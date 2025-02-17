import { CiLinkedin } from "react-icons/ci";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaBriefcase, FaGithub } from "react-icons/fa";

const HeroPage = () => {
  return (
    <section 
      id="experience" 
      className="flex-col items-center pt-36 text-white bg-[#0a0a1a] overflow-hidden">
      <div className="text-left max-w-4xl w-full mx-auto px-4">
        <div className="flex flex-row items-center justify-start">
          <img 
            src="/img/Student.jpg" 
            alt="Jonatan" 
            className="w-16 h-16 rounded-full border-2 border-gray-500"
          />
          <span className="ml-4 mt-2 px-3 py-1 text-sm bg-green-700 text-white rounded-full">
            Disponible para trabajar
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Hola, soy <span className="text-white">Jonatan</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 break-words whitespace-normal">
          Tengo <span className="font-semibold text-white">1 año de experiencia</span> en desarrollo web. 
          <span className="text-yellow-400 font-semibold"> Egresado de Ingeniería de <br/> Sistemas </span> 
          de Trujillo, Perú. Especializado en el desarrollo de aplicaciones <br/> web en el área de Frontend.
        </p>
        <div className="flex flex-row items-center justify-start mt-8">
        <div className="flex flex-col md:flex-row items-center justify-start gap-4">
          <a 
            href="mailto:jonatandlau@gmail.com" 
            className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-lg text-gray-300 hover:bg-gray-700 transition w-full md:w-auto">
            <SlEnvolopeLetter /> Contáctame
          </a>
          <a 
            href="https://www.linkedin.com/in/jonatan-laureano-alfaro-bb41682b4/" 
            target="_blank" 
            className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-lg text-gray-300 hover:bg-gray-700 transition w-full md:w-auto">
            <CiLinkedin /> LinkedIn
          </a>
          <a 
            href="https://github.com/jonatanLaureano" 
            target="_blank" 
            className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-lg text-gray-300 hover:bg-gray-700 transition w-full md:w-auto">
            <FaGithub /> GitHub
          </a>
        </div>

        </div>
      </div>

      <div className="text-left max-w-4xl w-full mx-auto mt-14 px-4">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
          <FaBriefcase className="text-white-400" />
          Experiencia laboral
        </h2>
        <div className="mt-6 border-l-2 border-gray-600 pl-6 relative">
          <span className="absolute -left-2 w-3 h-3 bg-yellow-400 rounded-full top-2"></span>
          <span className="absolute -left-2 w-3 h-3 bg-yellow-400 rounded-full top-[210px]"></span>
          <div className="mb-12 ml-4">
              <h3 className="text-lg font-semibold text-yellow-400">Web Developer - React</h3>
              <p className="text-gray-300">TGH Technology Solution - Contrato de formación</p>
              <p className="text-sm text-gray-400">dic. 2024 - Actualidad</p>
              <p className="mt-2 text-gray-300 break-words whitespace-normal">
                Diseñé prototipos de páginas web en Figma y desarrollé componentes reutilizables
                para optimizar la interfaz de usuario. Implementé páginas web dinámicas con React,
                asegurando su responsividad mediante TailwindCSS. Además, consumí APIs y 
                desarrollé un CRUD completo para la gestión eficiente de datos.
              </p>
          </div>

          <div className="mb-12 ml-4">
              <h3 className="text-lg font-semibold text-yellow-400">Front-end Developer - React</h3>
              <p className="text-gray-300">DEVDATEP CONSULTING - Contrato de prácticas</p>
              <p className="text-sm text-gray-400">ago. 2024 - nov. 2023</p>
              <p className="mt-2 text-gray-300 break-words whitespace-normal">
                Colaboré en el desarrollo de interfaces de usuario interactivas, implementando
                componentes reutilizables para optimizar el código. Además, mejoré un problema 
                en un formulario asegurando que los datos se mantuvieran al editar y 
                creé estilos responsivos para ofrecer una mejor experiencia de usuario.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;







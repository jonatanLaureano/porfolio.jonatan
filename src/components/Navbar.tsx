const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#0a0a1a] backdrop-blur-md text-white p-4 shadow-md">
      <ul className="flex justify-center gap-6 text-sm">
        <li>
          <a href="#experience" className="text-gray-400 hover:text-blue-400 transition">
            Experiencia
          </a>
        </li>
        <li>
          <a href="#projects" className="text-gray-400 hover:text-blue-400 transition">
            Proyectos
          </a>
        </li>
        <li>
          <a href="#about" className="text-gray-400 hover:text-blue-400 transition">
            Sobre mí
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

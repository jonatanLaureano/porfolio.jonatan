import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navItems = [
  { href: "#experience", label: "Experiencia" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Proyectos" },
  { href: "#about", label: "Sobre mí" },
];

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass = isDark
    ? "text-gray-400 hover:text-blue-400"
    : "text-gray-600 hover:text-blue-600";

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-md py-4 px-4 md:py-5 md:px-8 shadow-md z-50 ${
        isDark ? "bg-[#0a0a1a]/90 text-white" : "bg-white/90 text-gray-800"
      }`}
      aria-label="Navegación principal"
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <ul className={`hidden md:flex gap-10 text-base font-medium absolute left-1/2 transform -translate-x-1/2`}>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={`${linkClass} transition-colors duration-200`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 ${
            isDark
              ? "bg-gray-700 hover:bg-gray-600 text-yellow-400"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
          aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          {isDark ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className={`md:hidden mt-4 pb-4 ${isDark ? "bg-[#0a0a1a]" : "bg-white"}`}>
          <ul className="flex flex-col items-center gap-4 text-base font-medium">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`${linkClass} transition-colors duration-200`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

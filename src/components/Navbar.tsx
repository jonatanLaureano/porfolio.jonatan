const navItems = [
  { href: "#experience", label: "Experiencia" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Proyectos" },
  { href: "#about", label: "Sobre mí" },
];

const linkClass =
  "text-gray-400 hover:text-blue-400 transition-colors duration-200";

const Navbar = () => (
  <nav
    className="fixed top-0 w-full bg-[#0a0a1a]/90 backdrop-blur-md text-white py-5 px-8 shadow-md z-50"
    aria-label="Navegación principal"
  >
    <ul className="flex justify-center gap-10 text-base font-medium">
      {navItems.map(({ href, label }) => (
        <li key={href}>
          <a href={href} className={linkClass}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;

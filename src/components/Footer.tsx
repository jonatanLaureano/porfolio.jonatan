interface FooterProps {
  isDark: boolean;
}

const currentYear = new Date().getFullYear();

const Footer = ({ isDark }: FooterProps) => {
  return (
    <footer
      className={`py-4 px-6 flex justify-center md:justify-between items-center text-sm ${
        isDark ? "bg-[#0a0a1a] text-gray-400" : "bg-gray-100 text-gray-600"
      }`}
    >
      <div className="max-w-4xl w-full mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between text-center md:text-left">
        <p>&copy; {currentYear} Jonatan Laureano. Casi todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
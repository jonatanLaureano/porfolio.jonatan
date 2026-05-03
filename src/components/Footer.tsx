const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#0a0a1a] text-gray-400 py-4 px-6 flex justify-center md:justify-between items-center text-sm">
      <div className="max-w-4xl w-full mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between text-center md:text-left">
        <p>&copy; {currentYear} Jonatan Laureano. Casi todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#7B169C]' : 'bg-white'
      }`}
    >
      <div className="wrapper max-w-6xl mx-auto px-1 flex items-center justify-between h-18">
        <a href="#home" className="text-xl md:text-base xl:text-xl font-semibold text-[#7B169C]">
          <img src="/logo.png" width={200} alt="" />
        </a>
        {/* Menú para desktop */}
        <div className="hidden md:flex items-center space-x-8 px-8">
          <ul className="flex space-x-6 px-40">
            <li><a href="/#home" className="text-[#7B169C] hover:opacity-70">Inicio</a></li>
            <li><a href="/#services" className="text-[#7B169C] hover:opacity-70">Servicio</a></li>
            <li><a href="/#about" className="text-[#7B169C] hover:opacity-70">Conóceme</a></li>
            <li><a href="/#contact" className="text-[#7B169C] hover:opacity-70">Contacto</a></li>
          </ul>
          <a 
            href="https://api.whatsapp.com/send?phone=5213319450358&text=Hola,%20quisiera%20hacer%20una%20cita%20con%20el%20Dr.%20Jesus%20Antonio%20Ria%c3%b1o%20Rodriguez" 
            className="bg-[#7B169C] text-white px-6 py-2 rounded-full my-6 text-sm uppercase hover:bg-purple-500" target="_blank"
          >
            Agendar Cita
          </a>
        </div>
        {/* Botón de menú móvil */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-[#7B169C] my-6 mx-14"
          >
            <Menu size={40} />
          </button>
        </div>
        {/* Menú móvil */}
        {menuExpanded && (
          <div className="fixed inset-0 bg-[#7B169C] z-50 md:hidden">
            <div className="flex justify-between p-6">
              <a href="#home" className="text-2xl font-semibold text-white">
                Dr. Jesús Antonio Riaño Rodríguez
              </a>
              <button onClick={toggleMenu} className="text-white">
                <X size={40} />
              </button>
            </div>
            <ul className="flex flex-col items-center space-y-8 mt-12">
              <li><a href="/" onClick={toggleMenu} className="text-white text-2xl">Inicio</a></li>
              <li><a href="/#services" onClick={toggleMenu} className="text-white text-2xl">Servicio</a></li>
              <li><a href="/#about" onClick={toggleMenu} className="text-white text-2xl">Conóceme</a></li>
            </ul>
            <div className="flex justify-center mt-12">
              <a 
                href="https://api.whatsapp.com/send?phone=5213319450358&text=Hola,%20quisiera%20hacer%20una%20cita%20con%20el%20Dr.%20Jesus%20Antonio%20Ria%c3%b1o%20Rodriguez" 
                target="_blank
                onClick={toggleMenu}
                className="bg-white text-[#7B169C] px-6 py-3  rounded-full text-lg uppercase"
              >
                Agenda Consulta
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

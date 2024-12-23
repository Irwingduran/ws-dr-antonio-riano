import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#7B169C] text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1 */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Sobre nosotros</h4>
            <p className="text-white">
              Nos especializamos en brindar atención médica de calidad con tecnología avanzada 
              y un enfoque humano.
            </p>
          </div>

          {/* Columna 2 */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition">
                  Ubicación
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contáctanos</h4>
            <p className="text-white">Avenida Principal #123, Puebla, México</p>
            <p className="text-white mt-2">+52 222 123 4567</p>
            <p className="text-white mt-2">contacto@clinica.com</p>
          </div>
        </div>

        <div className="text-center mt-8 text-white text-sm">
          © {new Date().getFullYear()} <a href="https://delta-digital.com.mx/" className="hover:text-yellow-200 ">Delta Agencia.</a> Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

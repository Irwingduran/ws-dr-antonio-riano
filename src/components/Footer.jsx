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
                <a href="/#services" className="hover:text-white transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-white transition">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white transition">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/#location" className="hover:text-white transition">
                  Ubicación
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contáctanos</h4>
            <p className="text-white">Torres Médicas Angelópolis piso 8 Consultorio 829, Puebla Pue.</p>
            <a href="tel:2222179680"><p className="text-white mt-2">+52 222 217 9680</p></a>
           <a href="tel:2221680861"> <p className="text-white mt-2">+52 222 168 0861</p></a>
            <a href="mailto:dr.riano@gmail.com"><p className="text-white mt-2">dr.riano@gmail.com</p></a>
          </div>
        </div>

        <div className="text-center mt-8 text-white text-sm">
          © {new Date().getFullYear()} Delta <a href="https://marketingmedicos.com.mx/" className="hover:text-yellow-200 ">by Imagen Médica</a> Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

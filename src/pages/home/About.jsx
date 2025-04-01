import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center lg:gap-12">
        {/* Texto descriptivo */}
        <div className="lg:w-1/2">
          <h4 className="text-sm uppercase text-[#90B7BA] font-medium mb-2">
            Sobre él
          </h4>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6">
            El Dr. Jesús Antonio Riaño Rodríguez
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Cirujano Plástico Certificado con una destacada trayectoria en cirugía estética y reconstructiva. 
            Su formación académica incluye estudios en instituciones de prestigio como la Benemérita Universidad Autónoma de Puebla, 
            así como experiencia en el IMSS en Tabasco, Puebla y Guadalajara. Además, ha desarrollado su práctica en Innovare Hospital de Cirugía Plástica 
            y el Hospital Infantil de Morelia, brindando resultados que combinan estética, seguridad y calidad humana.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Egresado del Centro Médico Nacional de Occidente (IMSS) y miembro de la American Society of Plastic Surgeons, 
            su labor se distingue por la combinación de experiencia, innovación y atención personalizada, garantizando resultados que marcan la diferencia.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Sus especialidades incluyen:
          </p>
          <ul className="mb-6">
            <li className="flex items-center space-x-4 mb-3">
              <div className="w-10 h-10 bg-[#7B169C] text-white rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.091 8.18182L10.091 15.1818L6.90918 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Cirugía facial y estética glútea</span>
            </li>
            <li className="flex items-center space-x-4 mb-3">
              <div className="w-10 h-10 bg-[#7B169C] text-white rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.091 8.18182L10.091 15.1818L6.90918 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Reconstrucción postbariátrica</span>
            </li>
            <li className="flex items-center space-x-4 mb-3">
              <div className="w-10 h-10 bg-[#7B169C] text-white rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.091 8.18182L10.091 15.1818L6.90918 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">Microcirugía y cirugía reconstructiva</span>
            </li>
          </ul>
        </div>

        {/* Imagen */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <div className="relative">
            <img src="/img/riano4.jpg" alt="Sobre él" className="w-full max-w-md mx-auto rounded-lg shadow-lg" />
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-[#90B7BA] rounded-full"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-[#90B7BA] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

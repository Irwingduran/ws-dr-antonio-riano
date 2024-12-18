import React from "react";

const About = () => {
  return (
    <section id="about-me" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center lg:gap-12">
        {/* Texto descriptivo */}
        <div className="lg:w-1/2">
          <h4 className="text-sm uppercase text-teal-600 font-medium mb-2">
            Sobre mí
          </h4>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6">
            Conociendo mi historia y pasión
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Soy un profesional apasionado por brindar atención especializada y
            soluciones personalizadas a cada paciente. Mi enfoque combina
            habilidades técnicas avanzadas, empatía, y un compromiso constante
            con la excelencia. Con años de experiencia en el área, me enorgullezco
            de ofrecer tratamientos innovadores que transforman vidas.
          </p>
          <ul className="mb-6">
            <li className="flex items-center space-x-4 mb-3">
              <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center">
                {/* Ícono */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.091 8.18182L10.091 15.1818L6.90918 12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">
                Experiencia en procedimientos avanzados.
              </span>
            </li>
            <li className="flex items-center space-x-4 mb-3">
              <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.091 8.18182L10.091 15.1818L6.90918 12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">
                Enfoque en el bienestar del paciente.
              </span>
            </li>
            <li className="flex items-center space-x-4 mb-3">
              <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.091 8.18182L10.091 15.1818L6.90918 12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">
                Innovación en cada procedimiento.
              </span>
            </li>
          </ul>
          <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-colors">
            Conoce más
          </button>
        </div>

        {/* Imagen */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <div className="relative">
            {/* Imagen principal */}
            <img
              src="/img/riano4.jpg"
              alt="Sobre mí"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            {/* Decoración */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-teal-100 rounded-full"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-teal-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

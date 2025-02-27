import React from "react";

const Service = () => {
    const primaryServices = [
        {
          title: "Liposucción",
          description:
            "Descubre más detalles sobre este servcio...",
          image: "/img/service1.jpeg",
          link: "/Service1",
        },
        {
          title: "Cicatrices",
          description:
            "Descubre más detalles sobre este servcio...",
          image: "/img/service2.jpeg",
           link: "/Service2",
        },
        {
          title: "Abdominoplastia",
          description:
            "Descubre más detalles sobre este servcio...",
          image: "/img/service3.jpeg",
           link: "/Service3",
        },
      ];
    
      const otherServices = [
        "Blefaroplastía",
        "Cirugía de nariz",
        "Feminización facial e implantes faciales",
        "Rejuvenecimiento facial y de manos",
        "Cirugía de mama",
        "Cirugía facial",
        "Brazos y muslos",
        "Botox",
        "Rellenos faciales",
      ];
      return (
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Sección Principal */}
            <header className="text-center mb-12">
              <h4 className="text-sm uppercase text-[#90B7BA] font-medium mb-2">
                Mis Servicios
              </h4>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
                Cuidando tu bienestar con excelencia
              </h2>
            </header>
  
   
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {primaryServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <a href={service.link}>
                  {/* Imagen del servicio */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  {/* Contenido del servicio */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  </a>
                </div>
              ))}
            </div>

    
            {/* Sección Otros Servicios */}
            <div className="p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-black mb-6">
                Otros Servicios
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#7B169C] text-white rounded-full flex items-center justify-center">
                      {/* Ícono genérico */}
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
                    <span className="text-gray-800 font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      );
    };
    
    export default Service;
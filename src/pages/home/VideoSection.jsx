import React from "react";

const VideoSection = () => {
  return (
    <section id="video" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Encabezado */}
        <header className="text-center mb-12">
          <h4 className="text-sm uppercase text-[#90B7BA] font-medium mb-2">
            Aprende más
          </h4>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
            Conoce más sobre nuestro enfoque
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre cómo nuestras soluciones pueden hacer la diferencia. Este
            video te guiará a través de nuestra misión, visión y los beneficios
            que ofrecemos.
          </p>
        </header>

        {/* Contenedor del video */}
        <div className="relative w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Decoración superior */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-teal-100 rounded-full"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-300 rounded-full"></div>

          {/* Video */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/B4UBPemq-bY?si=WmK6uxZWrbxaNcyM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-100%"
            ></iframe>
          </div>
        </div>

        {/* Llamado a la acción */}
        <div className="text-center mt-12">
          <a href="/#contact">
          <button className="px-8 py-3 bg-[#7B169C] text-white font-semibold rounded-lg shadow-md hover:bg-purple-500 transition-colors">
            Contáctanos
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

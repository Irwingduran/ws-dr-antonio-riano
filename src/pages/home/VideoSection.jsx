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
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-12">
          Descubre más sobre mi misión, visión y los inicios en la Cirugía Plástica Estética.
          
          </h2>

            
        </header>

        {/* Contenedor de videos */}
        <div className="gap-8 items-center justify-center">
          {/* Video en horizontal */}
          
          
          {/* Video en vertical */}
          <div className="relative bg-gray-50 rounded-lg overflow-hidden flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1492264048174980%2F&show_text=false&width=267&t=0"
              width="267"
              height="476"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="rounded-lg"
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

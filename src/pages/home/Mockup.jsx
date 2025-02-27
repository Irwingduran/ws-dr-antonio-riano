import React from "react";


const Mockup = ({ imageUrl, title, description, buttonText }) => {
  return (
    <section className="w-full bg-gray-50 py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Contenido */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-semibold text-gray-800 mb-5">{title}</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{description}</p>
            <a
              href="https://www.findoctor.com.mx/doctores/jesus-antonio-riano-rodriguez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#7B169C] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-600 transition">
                {buttonText}
              </button>
            </a>
       
          </div>

          {/* Imagen */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={imageUrl} alt="Perfil Médico" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Ejemplo de uso
const App = () => {
  return (
    <Mockup
      imageUrl="/img/mockup.png"
      title="Descubre más sobre mí desde Findoctor"
      description="Consulta mi perfil digital en Findoctor para conocer detalles sobre mis servicios, ubicación, horarios y formas de contacto. Programa tu cita en línea de manera rápida y segura."
      buttonText="Visitar mi perfil"
    />
  );
};

export default App;

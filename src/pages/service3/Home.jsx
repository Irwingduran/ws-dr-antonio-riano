import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-50 py-24 w-full">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Encabezado */}
          <header className="text-center mb-12">
            <h4 className="text-sm uppercase text-[#90B7BA] font-medium mb-2">
              Servicio Especializado
            </h4>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
              Mommy Makeover
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Recupera tu figura y confianza con un procedimiento integral que combina varias cirugías estéticas diseñadas para restaurar la forma y firmeza de tu cuerpo después del embarazo.
            </p>
          </header>

          {/* Sección Video + Texto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            {/* Video */}
            <div className="w-full flex justify-center">
              <div className="w-[300px] md:w-[350px] lg:w-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F517346517285507%2F&show_text=false&width=267&t=0"
                  width="100%"
                  height="700"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>

            {/* Texto */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué es el Mommy Makeover?</h2>
              <p className="text-gray-600 leading-relaxed">
                El Mommy Makeover es un conjunto de procedimientos quirúrgicos diseñados para restaurar la apariencia del cuerpo después del embarazo. Generalmente, incluye una combinación de abdominoplastia, liposucción y cirugía de senos (aumento, reducción o levantamiento).
              </p>
             
              <h2 className="text-3xl font-bold text-gray-800 mt-6">¿Cuáles son los beneficios del Mommy Makeover?</h2>
              <p className="text-gray-600 leading-relaxed">
                Este procedimiento ayuda a eliminar el exceso de piel y grasa, a restaurar la firmeza del abdomen y a mejorar la apariencia de los senos. Está diseñado para brindar una transformación integral, ayudando a recuperar la confianza y bienestar.
              </p>
             <p className="text-gray-600 leading-relaxed">El Mommy Makeover se personaliza según las necesidades de cada paciente, permitiendo obtener resultados naturales y armoniosos.
             </p>
            </div>
          </div>

          {/* Llamada a la acción */}
          <div className="text-center py-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">¡Recupera tu figura hoy!</h3>
            <p className="text-gray-600 mb-6">
              Da el primer paso hacia el cambio que deseas con una consulta personalizada.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5212222179680&text=Hola+Dr.+encontr%C3%A9+su+perfil+en+findoctor+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0"
              className="bg-[#7B169C] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#5A0D7A] transition-colors"
            >
              Solicitar Cita
            </a>
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home
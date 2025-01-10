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
              Liposucción
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Remodela y redefine tu figura con tecnología avanzada y manos expertas.
            </p>
          </header>

          {/* Sección Video + Texto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            {/* Video */}
            <div className="w-full flex justify-center">
              <div className="w-[300px] md:w-[350px] lg:w-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F425922185766496%2F&show_text=false&width=267&t=0"
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué es la Liposucción?</h2>
              <p className="text-gray-600 leading-relaxed">
                La liposucción es un procedimiento quirúrgico que elimina depósitos de grasa
                no deseados para remodelar áreas específicas del cuerpo. Ideal para personas
                que buscan mejorar el contorno corporal.
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
                <li>Elimina grasa localizada</li>
                <li>Mejora la forma y contorno del cuerpo</li>
                <li>Procedimiento seguro y efectivo</li>
              </ul>
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Beneficios</h3>
              <ul className="space-y-3">
                <li className="flex items-center">✅ Resultados inmediatos</li>
                <li className="flex items-center">✅ Procedimiento mínimamente invasivo</li>
                <li className="flex items-center">✅ Recuperación rápida</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mt-6">La liposucción</h2>
              <p className="text-gray-600 leading-relaxed">
                La liposucción es un procedimiento quirúrgico que elimina depósitos de grasa
                no deseados para remodelar áreas específicas del cuerpo. Ideal para personas
                que buscan mejorar el contorno corporal.
              </p>
            </div>
          </div>

          {/* Testimonios */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Testimonios de Pacientes</h3>
            <div className="space-y-4">
              <blockquote className="text-gray-600 italic">
                "Después de mi liposucción, mi confianza ha mejorado significativamente. ¡El
                doctor hizo un trabajo excepcional!"
                <span className="block mt-2 font-medium text-gray-800">— Ana Martínez</span>
              </blockquote>
              <blockquote className="text-gray-600 italic">
                "El proceso fue rápido y el equipo médico estuvo atento en todo momento."
                <span className="block mt-2 font-medium text-gray-800">— Carlos Gómez</span>
              </blockquote>
            </div>
          </div>

          {/* Llamada a la acción */}
          <div className="text-center py-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">¡Agenda tu consulta hoy!</h3>
            <p className="text-gray-600 mb-6">
              Da el primer paso hacia el cambio que siempre has deseado.
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

export default Home;

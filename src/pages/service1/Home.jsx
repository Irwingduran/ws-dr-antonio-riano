import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="container">
        <Navbar/>
    <section className="bg-gray-50 py-24">
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

        {/* Imagen Principal */}
        <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden mb-12">
          <img
            src="/img/service2.jpeg"
            alt="Liposucción"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Descripción del Servicio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué es la Liposucción?</h2>
            <p className="text-gray-600 leading-relaxed">
              La liposucción es un procedimiento quirúrgico que elimina depósitos de grasa
              no deseados para remodelar áreas específicas del cuerpo. Ideal para personas
              que buscan mejorar el contorno corporal.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Elimina grasa localizada</li>
              <li>Mejora la forma y contorno del cuerpo</li>
              <li>Procedimiento seguro y efectivo</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Beneficios</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                ✅ Resultados inmediatos
              </li>
              <li className="flex items-center">
                ✅ Procedimiento mínimamente invasivo
              </li>
              <li className="flex items-center">
                ✅ Recuperación rápida
              </li>
            </ul>
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
            href="/contact"
            className="bg-[#7B169C] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#5A0D7A] transition-colors"
          >
            Solicitar Consulta
          </a>
        </div>
      </div>
    </section>
    <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;

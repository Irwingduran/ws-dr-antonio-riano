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
            Aumento de mama
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
             Mejora la apariencia de tu abdomen eliminado exceso de piel y grasa.
            </p>
          </header>

          {/* Sección Video + Texto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            {/* Video */}
            <div className="w-full flex justify-center">
              <div className="w-[300px] md:w-[350px] lg:w-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F900836058109214%2F&show_text=false&width=267&t=0"
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué es la Abdominoplastia?</h2>
              <p className="text-gray-600 leading-relaxed">
              La abdominoplastia, también conocida como cirugía de abdominoplastia, es un procedimiento quirúrgico diseñado para mejorar la apariencia del abdomen al eliminar el exceso de piel y grasa, y tensar los músculos abdominales.
              </p>
             
              <h2 className="text-3xl font-bold text-gray-800 mt-6">¿Te preocupa la cicatriz después de hacerte una abdominoplastia?</h2>
              <p className="text-gray-600 leading-relaxed">
              Es importante tener en cuenta que, aunque existen técnicas quirúrgicas y cuidados postoperatorios para minimizar las cicatrices, cada persona cicatriza de manera diferente.
              </p>
             <p className="text-gray-600 leading-relaxed">Algunos factores que pueden influir en la apariencia de las cicatrices incluyen la genética individual, la calidad de la piel, la técnica quirúrgica utilizada y los cuidados postoperatorios y de recuperación en el día a día.
             Algunos pacientes pueden desarrollar cicatrices hipertróficas o queloides, que son cicatrices más elevadas e irregulares.
             </p>
             <p className="text-gray-600 leading-relaxed">Estas cicatrices son menos comunes, pero es necesario tenerlas en cuenta. 
             </p>
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

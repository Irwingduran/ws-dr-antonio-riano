import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/img/lipo1.jpg",
  "/img/lipo2.jpg",
];
const Home = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

  // Componente personalizado para el botón "Anterior"
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2  text-white rounded-full p-2 z-10`}
        onClick={onClick}
      >
        &#10094; {/* Flecha izquierda */}
      </button>
    );
  };

  // Componente personalizado para el botón "Siguiente"
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} absolute top-1/2 right-4 transform -translate-y-1/2 text-white rounded-full p-2 z-10`}
        onClick={onClick}
      >
        &#10095; {/* Flecha derecha */}
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, // Botón personalizado "Anterior"
    nextArrow: <NextArrow />, // Botón personalizado "Siguiente"
  };

  const videos = [
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F425922185766496%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F259846256740940%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F353777173735490%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F726634295984397%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F373542875242436%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1807433346353879%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F946502567053378%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F463650126183008%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1254227722498430%2F&show_text=false&width=267&t=0",
  ];

  return (
    <div>
      <Navbar />
      <section className="bg-gray-50 py-28 w-full">
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
            {/* Carrusel de Videos */}
            <div className="w-full flex justify-center relative">
              <div className="w-[300px] md:w-[350px] lg:w-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <Slider {...settings}>
                  {videos.map((video, index) => (
                    <div key={index}>
                      <iframe
                        src={video}
                        width="100%"
                        height="700"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Texto */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué es la Liposucción?</h2>
              <p className="text-gray-600 leading-relaxed">
                La liposucción es una cirugía estética que elimina la grasa acumulada en 
                zonas específicas del cuerpo. También se le conoce como lipoescultura o 
                cirugía de modelado corporal. 
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
                <li>¿Qué zonas se pueden tratar?</li>
              </ul> <br />
              <p className="text-gray-600 leading-relaxed">
                Abdomen, Caderas, Muslos, Glúteos, Brazos, Cuello, Mejillas, Rodillas, Tobillos.
              </p>
             
              <h2 className="text-3xl font-bold text-gray-800 mt-6">¿Cómo se realiza? </h2>
              <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
                <li>Se inyecta una solución líquida que contiene anestesia, un medicamento que contrae los vasos sanguíneos, y una solución salina.</li>
                <li>Se aspira la grasa disuelta con una cánula conectada a una máquina de succión.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Después de una liposucción, la grasa puede acumularse nuevamente en las áreas tratadas si no se mantienen hábitos saludables. La liposucción elimina las células grasas de forma permanente en las áreas tratadas, pero no impide que nuevas células grasas se formen en otras áreas del cuerpo si se produce un aumento de peso.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">4 recomendaciones para potenciar lo resultados de la LIPOSUCCIÓN</h3>
              <ul className="space-y-3">
                <li className="flex items-center">✅ Tomar mucha agua</li>
                <li className="flex items-center">✅ Sigue una dieta equilibrada</li>
                <li className="flex items-center">✅ Realiza actividad física diaria</li>
                <li className="flex items-center">✅ Utiliza faja recomendada por tu especialista</li>
              </ul>
            </div>
          </div>

   {/* Carrusel de Imágenes */}
          <div className="py-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Liposucción</h2>
            </div>
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="w-full h-auto"
                />
              </div>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700"
              >
                <ChevronRight size={24} />
              </button>
              <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          {/* Llamada a la acción */}
          <div className="text-center py-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">¡Agenda tu consulta hoy!</h3>
            <p className="text-gray-600 mb-6">
              Da el primer paso hacia el cambio que siempre has deseado.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5212222179680&text=Hola+Dr.+encontr%C3%A9+su+sitio+web+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0"
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

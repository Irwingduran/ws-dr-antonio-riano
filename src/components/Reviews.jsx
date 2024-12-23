import React, { useState } from "react";

const reviews = [
  {
    name: "María López",
    review:
      "El trato fue excelente, el equipo médico fue muy profesional y los resultados superaron mis expectativas.",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=faces&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Juan Pérez",
    review:
      "Recibí una atención personalizada y un seguimiento impecable. Recomiendo ampliamente sus servicios.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Ana Castillo",
    review:
      "Estoy muy contenta con los resultados, todo el equipo me hizo sentir segura y confiada durante el proceso.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=200&h=200&q=80",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative py-16 bg-white">
      <div className="container mx-auto px-4">
      <h4 className="text-sm uppercase text-[#90B7BA] mb-2">Reseñas</h4>
        <h2 className="text-3xl font-bold text-center mb-8">
          Lo que dicen nuestros pacientes
        </h2>

        <div className="relative bg-white shadow-xl rounded-lg p-8 max-w-3xl mx-auto">
          {/* Reseña actual */}
          <div className="text-center">
            <img
              src={reviews[currentIndex].image}
              alt={reviews[currentIndex].name}
              className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"
            />
            <p className="text-lg italic text-gray-700 mb-4">
              "{reviews[currentIndex].review}"
            </p>
            <h3 className="text-[#7B169C] font-semibold text-lg">
              - {reviews[currentIndex].name}
            </h3>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#7B169C] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-600 transition"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#7B169C] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-600 transition"
          >
            &#8594;
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-4 space-x-2">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-[#7B169C]" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

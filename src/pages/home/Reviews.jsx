import React, { useState } from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";

const reviews = [
  {
    name: "María López",
    review:
      "El trato fue excelente, el equipo médico fue muy profesional y los resultados superaron mis expectativas.",
    image: "",
  },
  {
    name: "Rocio Pérez",
    review:
      "Recibí una atención personalizada y un seguimiento impecable. Recomiendo ampliamente sus servicios.",
    image: "",
  },
  {
    name: "Ana Castillo",
    review:
      "Estoy muy contenta con los resultados, todo el equipo me hizo sentir segura y confiada durante el proceso.",
    image: "",
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
    <div className="relative py-16 bg-white" id="resenas">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h4 className="text-sm uppercase text-[#90B7BA] mb-2">Reseñas</h4>
          <h2 className="text-3xl font-bold text-center mb-8">
            Lo que dicen nuestros pacientes
          </h2>
        </header>

        <div className="relative bg-white shadow-xl rounded-lg p-8 max-w-3xl mx-auto">
          {/* Reseña actual */}
          <div className="text-center">
            {reviews[currentIndex].image ? (
              <img
                src={reviews[currentIndex].image}
                alt={reviews[currentIndex].name}
                className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"
              />
            ) : (
              <FaUserCircle className="w-24 h-24 mx-auto mb-4 text-gray-400" />
            )}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#7B169C] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-600 transition"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#7B169C] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-600 transition"
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

        {/* Banner para dejar comentario en Google */}
        <div className="mt-16 bg-gradient-to-r from-[#7B169C] to-[#4C0D6A] rounded-lg p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            ¡Tu opinión nos ayuda a mejorar!
          </h3>
          <p className="text-lg mb-6">
            Si has visitado al Dr. Jesús Antonio Riaño Rodriguez, comparte tu experiencia en Google y ayúdanos a seguir brindando un servicio de calidad.
          </p>
          <a
            href="https://www.google.com/search?q=dr.+Antonio+ria%C3%B1o+cirujano+plastico&sca_esv=da71dabda52a3bb7&sxsrf=AHTn8zotD5wykhe6SKh2NuOx0hExWdntAA%3A1740598128062&ei=cGu_Z47FA6iuur8PseLjuQU&ved=0ahUKEwiOvfqoieKLAxUol-4BHTHxOFcQ4dUDCBA&uact=5&oq=dr.+Antonio+ria%C3%B1o+cirujano+plastico&gs_lp=Egxnd3Mtd2l6LXNlcnAiJGRyLiBBbnRvbmlvIHJpYcOxbyBjaXJ1amFubyBwbGFzdGljbzIFECEYoAEyBRAhGKABSMEdUOADWJ0ccAF4AJABAJgBkgGgAYEPqgEDOS45uAEDyAEA-AEBmAIToALdD8ICBxAAGLADGB7CAgkQABiwAxgIGB7CAgsQABiABBiwAxiiBMICCBAAGLADGO8FwgIGEAAYFhgewgIFEAAY7wXCAggQABiABBiiBJgDAIgGAZAGCJIHBDMuMTagB8k9&sclient=gws-wiz-serp&lqi=CiRkci4gQW50b25pbyByaWHDsW8gY2lydWphbm8gcGxhc3RpY29IvMyfr4CwgIAIWjkQABABEAIQAxAEGAAYARgCGAMYBCIjZHIgYW50b25pbyByaWHDsW8gY2lydWphbm8gcGxhc3RpY2-SAQ9wbGFzdGljX3N1cmdlb26aASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUjZNbDloTlRsblJSQUKqAU0QATIgEAEiHNZwp6-6ywVxc4rmbZhW_XDr8MCk1icqwZZvlSYyJxACIiNkciBhbnRvbmlvIHJpYcOxbyBjaXJ1amFubyBwbGFzdGljb_oBBAhZED4#lkt=LocalPoiReviews&rlimm=4451118739558587507"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-[#7B169C] px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-200 transition">
              Dejar un comentario en Google
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
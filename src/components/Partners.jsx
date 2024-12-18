import React from "react";
import Slider from "react-slick";

const Partners = () => {
  const partners = [
    "BENEMERITA UNIVERSIDAD AUTONOMA DE PUEBLA",
    "INSTITUTO MEXICANO DEL SEGURO SOCIAL TABASCO",
    "INSTITUTO MEXICANO DEL SEGURO SOCIAL PUEBLA",
    "INSTITUTO MEXICANO DEL SEGURO SOCIAL GUADALAJARA",
    "UNIVERSIDAD DE GUADALAJARA",
    "INNOVARE HOSPITAL DE CIRUGIA PLASTICA",
    "HOSPITAL INFANTIL DE MORELIA",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="partners" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <header className="text-center mb-8">
          <h4 className="text-sm uppercase text-teal-600 font-medium mb-2">
            Nuestros Partners
          </h4>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
            Con quienes trabajamos
          </h2>
        </header>

        {/* Carrusel */}
        <div>
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex justify-center items-center p-4"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 w-64 h-32 flex justify-center items-center text-center">
                <img 
  src="ruta-del-logo.png" 
  alt={partner} 
  className="max-w-full max-h-full object-contain"
/>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Partners;

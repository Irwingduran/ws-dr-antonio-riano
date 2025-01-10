import React from "react";
import Slider from "react-slick";

const Partners = () => {
  const partners = [
    {
      name: "BENEMERITA UNIVERSIDAD AUTONOMA DE PUEBLA",
      logo: "/icon/BUAP.webp"
    },
    {
      name: "INSTITUTO MEXICANO DEL SEGURO SOCIAL TABASCO",
      logo: "/icon/IMSS.jpg"
    },
    {
      name: "UNIVERSIDAD DE GUADALAJARA",
      logo: "/icon/UDG.png"
    },
    {
      name: "INNOVARE HOSPITAL DE CIRUGIA PLASTICA",
      logo: "/icon/innovare.png"
    },
    {
      name: "HOSPITAL INFANTIL DE MORELIA",
      logo: "/icon/HIMORELIA.jpeg"
    }
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
          <h4 className="text-sm uppercase text-[#90B7BA] font-medium mb-2">
            Mi Trayectoría
          </h4>
        </header>
        {/* Carrusel */}
        <div>
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex justify-center items-center p-4"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 w-64 h-32 flex justify-center items-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
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
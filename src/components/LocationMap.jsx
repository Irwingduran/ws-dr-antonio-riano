import React from "react";

const LocationMap = () => {
  return (
    <section id="location" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h4 className="text-sm uppercase text-gray-600 mb-2">Ubicación</h4>
          <h2 className="text-3xl font-bold text-gray-800">
            Encuentra nuestra clínica
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Visítanos en nuestra ubicación principal. Estamos comprometidos a 
            brindarte atención de calidad en un ambiente cómodo y accesible.
          </p>
        </header>

        <div className="relative overflow-hidden rounded-lg shadow-lg bg-white max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3771.9809228711783!2d-98.26707722479604!3d19.02056228217266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAxJzE0LjAiTiA5OMKwMTUnNTIuMiJX!5e0!3m2!1ses!2smx!4v1734526496776!5m2!1ses!2smx"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-cross-origin"
              className="w-full h-100%"
              title="Google Maps Location"
            ></iframe>
          </div>
          <div className="p-6 bg-gray-100 text-center">
            <p className="text-gray-800 font-medium">
              Dirección: Avenida Principal #123, Puebla, México.
            </p>
            <p className="text-gray-600 mt-2">
              Horarios: Lunes a Viernes de 9:00 AM a 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;

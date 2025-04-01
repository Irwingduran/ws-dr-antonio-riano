import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-[#7B169C] text-white py-16">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1lZGljYWx8ZW58MHx8fHwxNjkzOTI4OTkw&ixlib=rb-4.0.3&q=80&w=1080')",
        }}
      ></div>

      {/* Contenido */}
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Cuidando tu salud con tecnología avanzada
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          Nuestra clínica está dedicada a brindar tratamientos de calidad con
          enfoque humano. Descubre servicios personalizados y una atención
          médica excepcional.
        </p>
        <a href="https://api.whatsapp.com/send/?phone=5212222179680&text=Hola+Dr.+encontr%C3%A9+su+sitio+web+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0" target="_blank">
        <button
          className="bg-white text-[#7B169C] px-6 py-3 rounded-full shadow-lg font-semibold text-lg hover:bg-purple-100 transition"
          onClick={() => window.location.href = "#contact"}
        >
          Agenda tu cita ahora
        </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;

import React from 'react';
import { MessageCircle } from 'lucide-react';


const Hero = () => {

  return (
    <section 
      id="home" 
      className="relative pt-24 md:pt-18 pb-0 md:pb-0"
    >
      {/* Fondo claro */}
      <div className="absolute top-0 left-0 w-full h-[100%] bg-f z-[-1]"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left md:order-1">
          <p className="text-[#90B7BA] uppercase tracking-wider text-sm mb-2">
            CERTIFICADO POR CONACEM
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            CIRUJANO PLÁSTICO
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            CON AMPLIA EXPERIENCIA Y ALTA CALIDAD HUMANA
          </p>
          
          <a 
            href="#contact" 
            className="flex items-center w-fit gap-3 bg-[#7B169C] text-white px-6 py-3 rounded-full uppercase hover:bg-purple-500 transition-colors"
          >
            <MessageCircle size={40}/>
            Agendar Consulta
          </a>
        </div>

        <div className="flex justify-center md:order-2">
          <img 
            src="/img/rianoHome.jpg" 
            alt="Dr. Jesús Antonio Riaño Rodríguez"
            className="w-[20rem] lg:w-[22rem] md:w-[28rem] object-cover rounded-lg"
          />
        </div>

      
      </div>
    </section>
  );
};

export default Hero;
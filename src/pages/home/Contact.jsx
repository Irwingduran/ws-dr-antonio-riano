import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h4 className="text-sm uppercase text-[#90B7BA] mb-2">Contacto</h4>
          <h2 className="text-3xl font-bold text-gray-800">
            Ponte en contacto con nosotros
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Si tienes alguna pregunta, necesitas agendar una cita o deseas obtener más información, 
            no dudes en escribirnos. Estaremos encantados de ayudarte.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulario de contacto */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 block w-full p-3 border rounded-md shadow-sm focus:ring-[#7B169C] focus:border-[#7B169C] sm:text-sm"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="tel" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  required
                  className="mt-2 block w-full p-3 border rounded-md shadow-sm focus:ring-[#7B169C] focus:border-[#7B169C] sm:text-sm"
                  placeholder="123456789"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 block w-full p-3 border rounded-md shadow-sm focus:ring-[#7B169C] focus:border-[#7B169C] sm:text-sm"
                  placeholder="tucorreo@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-2 block w-full p-3 border rounded-md shadow-sm focus:ring-[#7B169C] focus:border-[#7B169C] sm:text-sm"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#7B169C] text-white font-medium rounded-lg shadow hover:bg-purple-500 focus:ring-4 focus:ring-indigo-300"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col justify-center bg-purple-100 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Información de contacto
            </h3>
            <p className="text-gray-600 mb-4">
              <strong>Dirección:</strong> Torres Médicas Angelópolis piso 8 Consultorio 829, Puebla, Pue.
            </p>
            <p className="text-gray-600 mb-4">
              <a href="tel:2222179680">
              <strong>Teléfono:</strong> 2222179680 (Citas)
              </a>
            </p>
            <p className="text-gray-600 mb-4">
              <a href="tel:2221680861">
              <strong>Teléfono 2:</strong> 2221680861 (Citas)
              </a>
            </p>
            <p className="text-gray-600 mb-4">
              <a href="mailto:dr.riano@gmail.com">
              <strong>Email:</strong> dr.riano@gmail.com
              </a>
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              Mis redes sociales
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/DrAntonioRiano/"
                className="text-indigo-600 hover:text-indigo-800 transition"
                aria-label="Facebook"
              >
                <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-black"
              fill="currentColor"
            >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
              </a>
              <a
                href="https://www.instagram.com/dr.riano_cirugiaplastica/?utm_medium=copy_link"
                className="text-indigo-600 hover:text-indigo-800 transition"
                aria-label="Instagram"
              >
                <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-black"
              fill="currentColor"
            >
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
            </svg>
              </a>
              <a
                href="https://www.tiktok.com/@dr.riano_cirugiaplastica"
                className="text-indigo-600 hover:text-indigo-800 transition"
                aria-label="TikTok"
              >
                 <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-black"
              fill="currentColor"
            >
        <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
        </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5212222179680&text=Hola+Dr.+encontr%C3%A9+su+perfil+en+findoctor+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0"
                className="text-indigo-600 hover:text-indigo-800 transition"
                aria-label="WhatsApp"
              >
                 <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-black"
              fill="currentColor"
            >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h4 className="text-sm uppercase text-gray-600 mb-2">Contacto</h4>
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
                  className="mt-2 block w-full p-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="mt-2 block w-full p-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="mt-2 block w-full p-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="mt-2 block w-full p-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col justify-center bg-indigo-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Información de contacto
            </h3>
            <p className="text-gray-600 mb-4">
              <strong>Dirección:</strong> Torres Médicas Angelópolis piso 8 Consultorio 829, Puebla Pue
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Teléfono:</strong> 2222179680 (Citas)
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Teléfono 2:</strong> 2221680861 (Citas)
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Email:</strong> dr.riano@gmail.com
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
              Mis redes sociales
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-800 transition"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22.675 0H1.325C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.411c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.462.099 2.795.143v3.24h-1.917c-1.504 0-1.794.715-1.794 1.762v2.309h3.587l-.467 3.622h-3.12V24h6.116c.733 0 1.325-.592 1.325-1.325V1.325C24 .592 23.408 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-800 transition"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.061 2.633.368 3.608 1.343.975.975 1.282 2.242 1.343 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.061 1.366-.368 2.633-1.343 3.608-.975.975-2.242 1.282-3.608 1.343-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.061-2.633-.368-3.608-1.343-.975-.975-1.282-2.242-1.343-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.061-1.366.368-2.633 1.343-3.608.975-.975 2.242-1.282 3.608-1.343C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.015 7.052.072c-1.379.059-2.947.39-4.062 1.506C1.98 2.68 1.649 4.248 1.59 5.627.015 8.332 0 8.741 0 12c0 3.259.015 3.668.072 4.948.059 1.379.39 2.947 1.506 4.062C2.68 22.02 4.248 22.351 5.627 22.41c1.279.057 1.688.072 4.948.072s3.668-.015 4.948-.072c1.379-.059 2.947-.39 4.062-1.506 1.116-1.116 1.447-2.684 1.506-4.062.057-1.28.072-1.689.072-4.948s-.015-3.668-.072-4.948c-.059-1.379-.39-2.947-1.506-4.062C19.68 1.98 18.112 1.649 16.733 1.59 15.454 1.532 15.045 1.516 12 1.516z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-800 transition"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M24 4.557a9.916 9.916 0 01-2.827.775A4.93 4.93 0 0023.337 3.2c-.947.559-1.995.961-3.117 1.184a4.918 4.918 0 00-8.384 4.482c-4.086-.205-7.712-2.166-10.14-5.144a4.822 4.822 0 00-.665 2.475c0 1.708.87 3.215 2.188 4.099a4.906 4.906 0 01-2.23-.616c-.054 2.013 1.413 3.9 3.501 4.322a4.924 4.924 0 01-2.224.084c.63 1.965 2.445 3.393 4.604 3.433A9.868 9.868 0 010 20.057a13.941 13.941 0 007.548 2.212c9.142 0 14.307-7.722 13.995-14.646a9.935 9.935 0 | 00.552-2.298A10.01 10.01 0 0024 4.557z" />
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

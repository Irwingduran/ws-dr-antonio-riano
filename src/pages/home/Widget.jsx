import React, { useEffect } from 'react';

const Widget = () => {
  useEffect(() => {
    // Cargar el script del widget de Doctoralia
    const script = document.createElement('script');
    script.id = 'zl-widget-s';
    script.src = '//platform.docplanner.com/js/widget.js';
    script.async = true;

    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg">
      <a
        id="zl-url"
        className="text-blue-600 hover:text-blue-800"
        href="https://www.doctoralia.com.mx/jesus-antonio-riano-rodriguez/cirujano-plastico-cirujano-estetico-y-cosmetico/puebla"
        rel="nofollow"
        data-zlw-doctor="jesus-antonio-riano-rodriguez"
        data-zlw-type="big"
        data-zlw-opinion="true"
        data-zlw-hide-branding="true"
        data-zlw-saas-only="true"
        data-zlw-a11y-title="Widget de reserva de citas médicas"
      >
        Jesús Antonio Riaño Rodríguez - Doctoralia.com.mx
      </a>
    </div>
  );
};

export default Widget;
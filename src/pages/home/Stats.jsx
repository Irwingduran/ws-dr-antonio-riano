import React from 'react'

const Stats = () => {
    const stats = [
        { number: '+3.500', label: 'Pacientes atendidos' },
        { number: '+1500', label: 'Cirugías' },
        { number: '+10', label: 'Años de experiencia' }
      ];
      
  return (
    <section>
  {/* Estadísticas */}
  <div className="md:col-span-2 md:mt-0 py-12">
      <div className="bg-orange-50 grid md:grid-cols-3 gap-6 p-6 md:p-12 border border-[#90B7BA] rounded-lg">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`text-center ${
              index > 0 ? 'md:border-l border-teal-200' : ''
            }`}
          >
            <h3 className="text-5xl font-bold text-gray-800 mb-2">
              {stat.number}
            </h3>
            <p className="text-[#90B7BA] text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
    </section>
    
  )
}

export default Stats
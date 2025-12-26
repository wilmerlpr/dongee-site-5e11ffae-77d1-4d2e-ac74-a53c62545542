export default function About() {
  return (
    <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-solar-500 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-eco-500 rounded-full opacity-5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-eco-400 font-semibold tracking-wide uppercase text-sm mb-2">Quiénes Somos</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Impulsando el cambio energético en Colombia</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            En <span className="text-white font-bold">Sunny Future</span>, combinamos ingeniería de precisión con pasión por la sostenibilidad. 
            Nos especializamos en la implementación de sistemas solares fotovoltaicos para hogares y empresas, 
            garantizando el máximo rendimiento y retorno de inversión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 text-center hover:border-solar-500 transition duration-300">
            <div className="text-5xl font-bold text-solar-500 mb-2">+300</div>
            <div className="text-lg font-semibold text-white">Proyectos Exitosos</div>
            <div className="text-sm text-gray-400 mt-2">Instalaciones operativas</div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 text-center hover:border-solar-500 transition duration-300">
            <div className="text-5xl font-bold text-solar-500 mb-2">12k</div>
            <div className="text-lg font-semibold text-white">Paneles Instalados</div>
            <div className="text-sm text-gray-400 mt-2">Tecnología Tier 1</div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 text-center hover:border-solar-500 transition duration-300">
            <div className="text-5xl font-bold text-solar-500 mb-2">50%</div>
            <div className="text-lg font-semibold text-white">Ahorro Promedio</div>
            <div className="text-sm text-gray-400 mt-2">En costos de energía</div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 text-center hover:border-solar-500 transition duration-300">
            <div className="text-5xl font-bold text-solar-500 mb-2">CO₂</div>
            <div className="text-lg font-semibold text-white">Huella Reducida</div>
            <div className="text-sm text-gray-400 mt-2">Compromiso ambiental</div>
          </div>
        </div>
      </div>
    </section>
  );
}
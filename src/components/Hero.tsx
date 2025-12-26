import { ArrowRight, Sun, CheckCircle } from 'lucide-react';

export default function Hero({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <div className="relative bg-gray-900 overflow-hidden min-h-[650px] flex items-center">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover opacity-40"
          alt="Paneles Solares Sunny Future"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-500 bg-yellow-500/10 text-yellow-400 mb-6 backdrop-blur-sm">
            <Sun className="w-4 h-4 mr-2" />
            <span className="text-sm font-bold tracking-wide uppercase">Expertos en Energía Solar Fotovoltaica</span>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl mb-6 leading-tight">
            Transformamos el sol en <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ahorro y sostenibilidad</span>
          </h1>
          
          <p className="mt-4 text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Sunny Future diseña, instala y mantiene sistemas de energía solar a la medida. Reduce hasta un 100% el costo de tu factura de energía y contribuye a un planeta más limpio con tecnología de vanguardia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button 
              onClick={onCtaClick}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-gray-900 bg-solar-500 hover:bg-solar-400 transition transform hover:-translate-y-1 shadow-lg hover:shadow-solar-500/25"
            >
              Solicitar Cotización Gratis <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-base font-medium rounded-lg text-white hover:bg-white/10 transition backdrop-blur-sm"
            >
              Ver Servicios
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-400 text-sm font-medium">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-eco-500 mr-2" />
              <span>Proyectos Llave en Mano</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-eco-500 mr-2" />
              <span>Monitoreo 24/7</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-eco-500 mr-2" />
              <span>Garantía Extendida</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
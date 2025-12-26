import { BadgePercent, Leaf, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Benefits() {
  return (
    <div className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6 leading-tight">
              ¿Por qué elegir <br/><span className="text-solar-600">Sunny Future?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              No solo vendemos paneles, entregamos soluciones financieras y ambientales. Tu transición energética está respaldada por los mejores profesionales del sector.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-eco-100 text-eco-700">
                    <BadgePercent className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-gray-900">Beneficios Ley 1715</h3>
                  <p className="mt-2 text-gray-500 leading-relaxed">Deduce hasta el 50% de tu inversión del impuesto de renta y obtén exención de IVA en equipos.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-solar-100 text-solar-700">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-gray-900">Retorno Acelerado</h3>
                  <p className="mt-2 text-gray-500 leading-relaxed">La recuperación de la inversión (ROI) se estima entre 3 y 5 años, con una vida útil del sistema de +25 años.</p>
                </div>
              </div>

               <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-teal-100 text-teal-700">
                    <Leaf className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-gray-900">Sostenibilidad Real</h3>
                  <p className="mt-2 text-gray-500 leading-relaxed">Disminuye toneladas de CO₂ anualmente y certifica tu empresa como ambientalmente responsable.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
               <div className="flex items-center space-x-2 text-gray-600 font-medium">
                 <CheckCircle2 className="text-green-500 h-5 w-5" /> <span>Certificación RETIE</span>
                 <CheckCircle2 className="text-green-500 h-5 w-5 ml-4" /> <span>Personal Calificado</span>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  className="rounded-2xl shadow-xl transform translate-y-8 object-cover h-64 w-full" 
                  src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Ingenieros Sunny Future" 
                />
                <img 
                  className="rounded-2xl shadow-xl object-cover h-64 w-full" 
                  src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Instalación Solar" 
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
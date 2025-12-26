import { Home, Factory, Zap, ShieldCheck, PenTool, BarChart3 } from 'lucide-react';

const services = [
  {
    title: 'Autoconsumo Residencial',
    icon: Home,
    desc: 'Convierte tu techo en una fuente de energía. Sistemas conectados a la red (On-Grid) o con baterías (Híbridos) para máxima independencia.',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    title: 'Proyectos Comerciales',
    icon: Factory,
    desc: 'Reduce los costos operativos de tu negocio. Diseñamos soluciones a gran escala para industrias, centros comerciales y oficinas.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Ingeniería y Diseño',
    icon: PenTool,
    desc: 'Estudios de factibilidad, diseño eléctrico y estructural certificado bajo norma RETIE. Optimizamos cada detalle de tu instalación.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'Venta de Equipos',
    icon: Zap,
    desc: 'Suministro de paneles solares, inversores y baterías de las marcas líderes mundiales. Garantía directa y respaldo técnico.',
    color: 'bg-yellow-100 text-yellow-700'
  },
  {
    title: 'Mantenimiento O&M',
    icon: ShieldCheck,
    desc: 'Aseguramos la vida útil de tu inversión con limpieza de paneles, termografía y revisión de conexiones eléctricas periódicas.',
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Gestión de Beneficios',
    icon: BarChart3,
    desc: 'Te asesoramos en la tramitación de incentivos tributarios de la Ley 1715: exclusión de IVA, exención de aranceles y deducción de renta.',
    color: 'bg-indigo-100 text-indigo-600'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-eco-600 font-bold tracking-wider uppercase text-sm">Nuestros Servicios</span>
          <h2 className="mt-3 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Soluciones Integrales de Energía
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            En Sunny Future no solo instalamos paneles; creamos ecosistemas energéticos eficientes y duraderos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
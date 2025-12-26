import { Sun, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
             <div className="flex items-center space-x-2">
                <div className="bg-solar-500 p-1.5 rounded-full">
                   <Sun className="h-6 w-6 text-gray-900" />
                </div>
                <span className="text-2xl font-bold text-white">Sunny Future</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Energía limpia para un mundo mejor. Somos líderes en soluciones fotovoltaicas en Colombia, comprometidos con la calidad y el servicio al cliente.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-eco-600 transition"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-eco-600 transition"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-eco-600 transition"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-gray-800 pb-2 inline-block">Navegación</h3>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="text-gray-400 hover:text-solar-500 transition flex items-center"><span className="mr-2">›</span> Inicio</button></li>
              <li><button onClick={() => onNavigate('catalog')} className="text-gray-400 hover:text-solar-500 transition flex items-center"><span className="mr-2">›</span> Tienda Solar</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-solar-500 transition flex items-center"><span className="mr-2">›</span> Nosotros</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-gray-400 hover:text-solar-500 transition flex items-center"><span className="mr-2">›</span> Cotizar</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-gray-800 pb-2 inline-block">Servicios</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">Diseño Fotovoltaico</li>
              <li className="hover:text-white transition cursor-pointer">Instalación Certificada</li>
              <li className="hover:text-white transition cursor-pointer">Trámites Operador de Red</li>
              <li className="hover:text-white transition cursor-pointer">Mantenimiento Preventivo</li>
              <li className="hover:text-white transition cursor-pointer">Sistemas Off-Grid</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-gray-800 pb-2 inline-block">Contacto</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-solar-500 mr-3 mt-1 flex-shrink-0" />
                <span>Calle 93B # 13-47, Piso 4<br/>Bogotá D.C., Colombia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-solar-500 mr-3 flex-shrink-0" />
                <span>+57 300 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-solar-500 mr-3 flex-shrink-0" />
                <span>contacto@sunnyfuture.co</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2024 Sunny Future S.A.S. | Transformando energía.</p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-solar-500 transition">Política de Privacidad</a>
            <a href="#" className="hover:text-solar-500 transition">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
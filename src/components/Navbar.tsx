import { Sun, Menu, ShoppingCart } from 'lucide-react';

export default function Navbar({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="bg-solar-500 p-2 rounded-full mr-3 group-hover:scale-110 transition duration-300">
               <Sun className="h-6 w-6 text-gray-900" />
            </div>
            <div className="flex flex-col">
               <span className="text-2xl font-bold text-gray-900 leading-none">Sunny <span className="text-eco-600">Future</span></span>
               <span className="text-xs text-gray-500 font-medium tracking-widest uppercase">Energy Solutions</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => onNavigate('home')} className="text-gray-600 hover:text-eco-600 font-medium transition">Inicio</button>
            <button onClick={() => onNavigate('about')} className="text-gray-600 hover:text-eco-600 font-medium transition">Nosotros</button>
            <button onClick={() => onNavigate('catalog')} className="text-gray-600 hover:text-eco-600 font-medium transition">Tienda Solar</button>
            <button onClick={() => onNavigate('contact')} className="text-gray-600 hover:text-eco-600 font-medium transition">Contacto</button>
            <button onClick={() => onNavigate('contact')} className="bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-eco-600 transition flex items-center font-semibold shadow-lg hover:shadow-eco-500/30">
              <ShoppingCart className="h-4 w-4 mr-2" /> Cotizar
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <Menu className="h-8 w-8 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}
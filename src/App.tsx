import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Services from './components/Services';
import Benefits from './components/Benefits';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  const [view, setView] = useState<'home' | 'catalog' | 'contact' | 'about'>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Navbar onNavigate={(page: string) => setView(page as any)} />
      
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero onCtaClick={() => setView('contact')} />
            <Services />
            <Benefits />
            <About />
            <div className="py-16 bg-gray-50">
               <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                  <h2 className="text-3xl font-extrabold text-gray-900">Productos Destacados</h2>
                  <p className="text-gray-500 mt-2">Adquiere los mejores componentes para tu instalación.</p>
               </div>
              <Catalog />
              <div className="text-center mt-8">
                <button 
                  onClick={() => setView('catalog')} 
                  className="text-eco-600 font-semibold hover:text-eco-700 underline"
                >
                  Ver todo el catálogo →
                </button>
              </div>
            </div>
            <Contact />
          </>
        )}

        {view === 'catalog' && (
          <div className="pt-8 pb-16 min-h-screen">
            <div className="bg-gray-900 text-white py-12 mb-8">
               <div className="max-w-7xl mx-auto px-4">
                 <h1 className="text-4xl font-bold">Tienda Solar</h1>
                 <p className="text-gray-400 mt-2">Paneles, Inversores y Baterías de las mejores marcas.</p>
               </div>
            </div>
            <Catalog />
          </div>
        )}

        {view === 'about' && (
           <>
            <About />
            <Services />
            <Contact />
           </>
        )}

        {view === 'contact' && (
          <div className="pt-8 pb-16">
             <div className="bg-eco-600 text-white py-12 mb-8">
               <div className="max-w-7xl mx-auto px-4 text-center">
                 <h1 className="text-4xl font-bold">Hablemos de tu Proyecto</h1>
                 <p className="text-eco-100 mt-2">Estamos listos para asesorarte en tu transición energética.</p>
               </div>
            </div>
            <Contact />
          </div>
        )}
      </main>

      <Footer onNavigate={(page: string) => setView(page as any)} />
    </div>
  );
}
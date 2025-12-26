import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Product } from '../types';
import { Filter, Battery, Sun, Zap } from 'lucide-react';

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setLoading(true);
    const { data, error } = await supabase.from('products').select('*');
    if (error) console.error('Error fetching products:', error);
    else setProducts(data || []);
    setLoading(false);
  }

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'Todos', icon: Filter },
    { id: 'panel', label: 'Paneles', icon: Sun },
    { id: 'bateria', label: 'Baterías', icon: Battery },
    { id: 'inversor', label: 'Inversores', icon: Zap },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">Nuestro Catálogo</h2>
        <p className="mt-4 text-lg text-gray-500">Equipos de alta calidad garantizados para máxima eficiencia.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`flex items-center px-4 py-2 rounded-full border transition ${filter === cat.id ? 'bg-eco-500 text-white border-eco-500' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'}`}
          >
            <cat.icon className="w-4 h-4 mr-2" />
            {cat.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-eco-500 mx-auto"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 overflow-hidden bg-gray-200 relative">
                 <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                 <div className="absolute top-2 right-2 bg-solar-500 text-xs font-bold px-2 py-1 rounded text-gray-900 uppercase">
                   {product.category}
                 </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-eco-700">${product.price}</span>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition text-sm">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
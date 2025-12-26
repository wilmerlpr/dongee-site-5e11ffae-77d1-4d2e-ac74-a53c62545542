import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const { error } = await supabase.from('contact_messages').insert([formData]);
    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="bg-eco-100 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-eco-700 py-6 px-8">
            <h2 className="text-2xl font-bold text-white">Contáctanos</h2>
            <p className="text-eco-100">¿Dudas sobre tu instalación solar? Te asesoramos.</p>
          </div>
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input 
                type="text" 
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-500 focus:ring-eco-500 sm:text-sm p-3 border"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-500 focus:ring-eco-500 sm:text-sm p-3 border"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea 
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-500 focus:ring-eco-500 sm:text-sm p-3 border"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              />
            </div>
            
            {status === 'success' && <div className="text-green-600 font-medium">¡Mensaje enviado correctamente!</div>}
            {status === 'error' && <div className="text-red-600 font-medium">Hubo un error al enviar el mensaje.</div>}

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full bg-eco-600 text-white py-3 px-4 rounded-md hover:bg-eco-700 transition disabled:opacity-50"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar Consulta'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Send, Cpu } from 'lucide-react';
import ThankYouModal from './ThankYouModal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/connectleadmarketing@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: 'Novo contato do site Connect Lead'
        })
      });

      if (response.ok) {
        setShowThankYou(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <section id="contato" className="py-20 bg-gradient-to-br from-blue-900 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-white">
                <div className="flex items-center space-x-2 mb-8">
                  <Cpu className="h-8 w-8 text-blue-600 animate-spin-slow" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Connect Lead
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                  Vamos Impulsionar Seu Negócio?
                </h2>
                <p className="text-gray-600 mb-8">
                  Estamos prontos para ajudar seu negócio a alcançar novos patamares.
                  Entre em contato e descubra como podemos trabalhar juntos!
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group hover-lift">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp</p>
                      <a 
                        href="https://api.whatsapp.com/send?phone=5561986457947&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Connect%20Lead"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        (61) 98645-7947
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group hover-lift">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:connectleadmarketing@gmail.com" className="text-blue-600 hover:text-blue-700">
                        connectleadmarketing@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                      rows={4}
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group hover:shadow-lg ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
                    <Send 
                      size={20} 
                      className={`transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${
                        isSubmitting ? 'animate-pulse' : ''
                      }`} 
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ThankYouModal isOpen={showThankYou} onClose={() => setShowThankYou(false)} />
    </>
  );
}
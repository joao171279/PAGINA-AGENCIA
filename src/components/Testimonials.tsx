import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'João Silva',
    role: 'CEO, TechStart',
    content: 'A Connect Lead transformou completamente nossa presença digital. Os resultados superaram todas as expectativas.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Maria Santos',
    role: 'Marketing Director, InnovaCorp',
    content: 'Profissionalismo e resultados excepcionais. A equipe é extremamente dedicada e competente.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Pedro Costa',
    role: 'Founder, Digital Solutions',
    content: 'O ROI que alcançamos com as campanhas da Connect Lead foi impressionante. Altamente recomendado!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    } else {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
          O Que Nossos Clientes Dizem
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 -translate-x-6 -translate-y-6">
            <Quote size={48} className="text-blue-200" />
          </div>
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 absolute inset-0 ${
                  index === current
                    ? 'opacity-100 translate-x-0'
                    : index < current
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-gray-600 text-lg mb-6">{testimonial.content}</p>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => navigate('prev')}
              className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigate('next')}
              className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
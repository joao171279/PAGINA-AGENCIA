import React from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const highlights = [
  {
    icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
    text: 'Atraia mais clientes sem complicação'
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    text: 'Equipe especializada cuidando do seu marketing'
  },
  {
    icon: <Clock className="w-5 h-5 text-blue-600" />,
    text: 'Mais tempo livre para focar no seu negócio'
  }
];

export default function Hero() {
  return (
    <div id="inicio" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <ScrollReveal className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full mb-6">
              <span className="text-blue-800 font-medium">
                Marketing Digital Profissional
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
              Transforme seu Negócio com Marketing que Funciona
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Deixe a parte digital com quem entende, enquanto você foca no que faz de melhor: 
              gerenciar seu negócio e atender seus clientes.
            </p>
            
            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3 glass-morphism p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  {highlight.icon}
                  <span className="text-gray-700">{highlight.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Falar com um Especialista
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center px-8 py-4 glass-morphism text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300"
              >
                Ver Nossos Serviços
                <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={20} />
              </button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="flex-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl transform rotate-6 blur-lg opacity-20 animate-pulse"></div>
              <div className="relative glass-morphism p-8 rounded-2xl shadow-xl">
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl hover:shadow-md transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-4">O Que Você Ganha:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          <TrendingUp size={20} />
                        </div>
                        <span>Mais clientes todos os dias</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          <Clock size={20} />
                        </div>
                        <span>Instagram e Facebook atualizados</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          <ShieldCheck size={20} />
                        </div>
                        <span>Marketing profissional e eficiente</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
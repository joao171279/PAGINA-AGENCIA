import React from 'react';
import { Search, PenTool, BarChart, Rocket } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Análise',
    description: 'Estudo detalhado do seu negócio e mercado para definir as melhores estratégias.'
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: 'Planejamento',
    description: 'Desenvolvimento de um plano de ação personalizado com metas claras.'
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: 'Execução',
    description: 'Implementação das estratégias com monitoramento constante.'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Otimização',
    description: 'Análise de resultados e ajustes para maximizar o desempenho.'
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative z-10">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-600">
              Um processo estruturado para garantir os melhores resultados
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} className={`delay-[${index * 100}ms]`}>
              <div className="relative">
                <div className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300">
                  <div className="w-12 h-12 mb-6 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
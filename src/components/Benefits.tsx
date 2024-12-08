import React from 'react';
import { Zap, Target, Users, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const benefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Resultados Rápidos',
    description: 'Estratégias otimizadas para gerar resultados desde o primeiro mês.'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Público Qualificado',
    description: 'Alcance exato do seu público-alvo ideal com campanhas direcionadas.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Atendimento Personalizado',
    description: 'Suporte dedicado e estratégias sob medida para seu negócio.'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Crescimento Sustentável',
    description: 'Planejamento estratégico para crescimento contínuo e escalável.'
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
              Por que escolher a Connect Lead?
            </h2>
            <p className="text-xl text-gray-600">
              Descubra como podemos impulsionar seu negócio com soluções digitais completas
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} className={`delay-[${index * 100}ms]`}>
              <div className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300">
                <div className="w-12 h-12 mb-6 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
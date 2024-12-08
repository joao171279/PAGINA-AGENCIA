import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Smartphone, 
  Target, 
  BarChart2,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Gestão Completa do Instagram',
    description: 'Cuidamos de todo o seu Instagram com posts profissionais e estratégias que geram resultados.',
    features: [
      'Posts diários estratégicos',
      'Stories que engajam',
      'Respostas rápidas'
    ]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Tráfego Pago Inteligente',
    description: 'Campanhas estratégicas que mostram seu negócio para as pessoas certas, no momento certo.',
    features: [
      'Anúncios otimizados',
      'Público-alvo específico',
      'Monitoramento constante'
    ]
  },
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: 'Marketing Estratégico',
    description: 'Estratégias personalizadas para fazer seu negócio crescer de forma consistente.',
    features: [
      'Planejamento completo',
      'Análise de mercado',
      'Relatórios mensais'
    ]
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-500 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="tech-card group h-full glass-morphism">
        <div className="relative p-6 sm:p-8">
          <div className="relative z-10">
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
              {service.title}
            </h3>
            
            <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>
            
            <ul className="space-y-3 sm:space-y-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-gray-700">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full" />
                  <span className="text-base sm:text-lg">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 border-t border-gray-100/20">
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-white/80 backdrop-blur-sm text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 group flex items-center justify-center space-x-2 text-base sm:text-lg font-medium shadow-md hover:shadow-xl"
          >
            <span>Quero saber mais</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="servicos" className="py-16 sm:py-20 relative z-10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 transform transition-all duration-500 ${
            titleInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            Marketing Digital sem Complicação
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            E o melhor: Sem complicação! Você não precisa entender de marketing digital. 
            Nossa equipe cuida de tudo, enquanto você foca no que faz de melhor: gerenciar seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className={`max-w-2xl mx-auto mt-12 sm:mt-16 text-center transform transition-all duration-500 ${
          titleInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass-morphism inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 group text-base sm:text-lg font-medium hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Começar Agora
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Users, ShoppingCart, Star, TrendingUp } from 'lucide-react';

const metrics = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Novos Clientes por Mês',
    before: '2-3',
    after: '15-20',
    description: 'Mais clientes chegando todo mês através da internet'
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: 'Vendas pelo Instagram',
    before: '5',
    after: '25+',
    description: 'Aumento nas vendas diretas pelo Instagram'
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Avaliações Positivas',
    before: '10',
    after: '50+',
    description: 'Mais clientes satisfeitos avaliando seu negócio'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Seguidores Ativos',
    before: '500',
    after: '2.000+',
    description: 'Crescimento real de seguidores interessados'
  }
];

const MetricCard = ({ metric, index }: { metric: typeof metrics[0], index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative bg-white rounded-2xl shadow-lg p-6 h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
        {/* Background Gradient Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
              {metric.icon}
            </div>
            <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
              {metric.title}
            </h3>
          </div>

          {/* Metrics Display */}
          <div className="space-y-6">
            {/* Before Metric */}
            <div className="relative">
              <div className="bg-gray-50 rounded-xl p-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="text-sm text-gray-500 mb-1">Antes</div>
                <div className="text-3xl font-bold text-gray-800">{metric.before}</div>
              </div>
            </div>
            
            {/* Arrow Indicator */}
            <div className="relative flex justify-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>

            {/* After Metric */}
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-4 text-white transform group-hover:translate-y-1 transition-transform duration-300">
                <div className="text-sm opacity-90 mb-1">Depois</div>
                <div className="text-3xl font-bold">{metric.after}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-6 text-center">
            {metric.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function BeforeAfter() {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative z-10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            style={{
              background: `radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(37,99,235,0.1) 100%)`,
              width: `${Math.random() * 600 + 400}px`,
              height: `${Math.random() * 600 + 400}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 transform transition-all duration-700 ${
            titleInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            Resultados Reais para seu Negócio
          </h2>
          <p className="text-xl text-gray-600">
            Veja como nossos clientes estão crescendo com marketing digital profissional
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className={`max-w-2xl mx-auto mt-16 text-center transform transition-all duration-700 ${
          titleInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 group text-lg font-medium hover:scale-105"
          >
            Quero Resultados Assim
            <TrendingUp className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
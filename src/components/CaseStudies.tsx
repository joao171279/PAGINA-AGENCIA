import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const cases = [
  {
    title: 'E-commerce de Moda',
    metrics: [
      { label: 'Aumento em Vendas', value: '312%' },
      { label: 'Redução do CAC', value: '42%' },
      { label: 'ROAS', value: '4.8x' }
    ],
    description: 'Estratégia integrada de tráfego pago e remarketing que transformou a performance do e-commerce.'
  },
  {
    title: 'Clínica Odontológica',
    metrics: [
      { label: 'Novos Pacientes', value: '85+' },
      { label: 'Custo por Lead', value: '-55%' },
      { label: 'Taxa de Conversão', value: '12.4%' }
    ],
    description: 'Campanhas locais altamente segmentadas gerando leads qualificados e prontos para conversão.'
  },
  {
    title: 'SaaS B2B',
    metrics: [
      { label: 'MRR Growth', value: '156%' },
      { label: 'Demo Requests', value: '94+' },
      { label: 'ROI', value: '389%' }
    ],
    description: 'Estratégia completa de geração de leads B2B com nurturing automatizado e alta taxa de conversão.'
  }
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white relative z-10">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Casos de Sucesso
            </h2>
            <p className="text-xl text-blue-100">
              Resultados reais de clientes que transformaram seus negócios com nossas estratégias.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <ScrollReveal key={index} className={`delay-[${index * 200}ms]`}>
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl hover:bg-white/20 transition-all duration-300 group">
                <h3 className="text-2xl font-semibold mb-6">{case_.title}</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {case_.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-blue-300">{metric.value}</div>
                      <div className="text-sm text-blue-100">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-blue-100 mb-6">{case_.description}</p>
                <button className="flex items-center text-blue-300 hover:text-blue-100 transition-colors group">
                  Ver Estudo Completo
                  <ArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-colors group">
              Ver Mais Casos de Sucesso
              <ArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
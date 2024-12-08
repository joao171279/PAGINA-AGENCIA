import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Tecnologia e Criatividade',
    description: 'Integramos tecnologia de ponta com design envolvente, criando uma experiência digital imersiva que transforma cada visita em uma conexão valiosa.'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Estratégia Focada em Resultados',
    description: 'Nossa abordagem é direcionada a resultados e baseada em dados. Ajustamos estratégias e campanhas para maximizar o retorno de cada investimento.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Atendimento Personalizado e Equipe Especializada',
    description: 'Com uma equipe dedicada e capacitada, cada cliente recebe suporte exclusivo para alcançar resultados verdadeiros e sustentáveis.'
  }
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
              Por Que Escolher a Connect Lead?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Na Connect Lead, vamos além do marketing digital padrão. Somos sua agência estratégica 
              para resultados concretos e escaláveis, unindo criatividade e tecnologia para fazer 
              seu negócio brilhar online.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <ScrollReveal key={index} className="delay-[${index * 200}ms]">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Nossa Expertise</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Tráfego Pago</h4>
                <p className="text-gray-600">
                  Potencialize seu alcance com campanhas que capturam seu público-alvo, 
                  otimizando cada centavo investido.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Design Gráfico e Social Media</h4>
                <p className="text-gray-600">
                  Fortaleça sua marca com designs profissionais e estratégias de engajamento 
                  em redes sociais que atraem, retêm e convertem.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Criação e Edição de Páginas</h4>
                <p className="text-gray-600">
                  Desenvolvemos páginas interativas e de alta performance, pensadas para 
                  envolver e converter visitantes em clientes.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
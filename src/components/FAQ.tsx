import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: 'Quais são os principais serviços oferecidos pela Connect Lead?',
    answer: 'Oferecemos serviços de tráfego pago, gestão de redes sociais, design gráfico e criação e edição de páginas. Cada serviço é ajustado para atender às necessidades específicas do seu negócio.'
  },
  {
    question: 'Como os resultados são medidos nas campanhas de tráfego pago?',
    answer: 'Utilizamos métricas-chave como cliques, conversões e retorno sobre investimento (ROI) para avaliar o desempenho e fazer ajustes que maximizem os resultados.'
  },
  {
    question: 'Vocês desenvolvem páginas responsivas?',
    answer: 'Sim, todas as páginas criadas pela Connect Lead são totalmente responsivas e otimizadas para dispositivos móveis e desktops, garantindo uma experiência de usuário consistente.'
  },
  {
    question: 'O que diferencia a Connect Lead de outras agências de marketing?',
    answer: 'Nosso diferencial é a combinação de estratégia baseada em dados com design criativo e inovador. Focamos em resultados mensuráveis e crescimento escalável para nossos clientes.'
  },
  {
    question: 'Como posso entrar em contato para iniciar um projeto?',
    answer: 'Você pode entrar em contato através do formulário da nossa página ou diretamente por telefone e e-mail. Nossa equipe está pronta para ajudar e responder suas dúvidas!'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative z-10">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} className="delay-[${index * 100}ms]">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-blue-600 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-48 py-4' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
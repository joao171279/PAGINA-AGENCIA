import React, { useState } from 'react';
import { MessageCircle, X, Send, ExternalLink } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=5561986457947&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Connect%20Lead', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden animate-fade-up">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="text-white" size={24} />
              <h3 className="text-white font-semibold">Fale Conosco</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <div className="h-96 flex flex-col">
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-700 mb-4">
                  Olá! Como podemos ajudar você hoje?
                </p>
                <div className="space-y-2">
                  {[
                    'Quero aumentar minhas vendas',
                    'Preciso de mais clientes',
                    'Quero melhorar meu Instagram',
                    'Gostaria de um orçamento'
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={openWhatsApp}
                      className="w-full text-left px-4 py-3 text-sm bg-white rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-between group"
                    >
                      <span>{option}</span>
                      <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-100">
              <button
                onClick={openWhatsApp}
                className="w-full bg-green-500 text-white py-3 px-4 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Falar no WhatsApp</span>
                <Send size={18} className="transform -rotate-45" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 hover:rotate-12"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
import React from 'react';
import { X, MessageCircle } from 'lucide-react';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=5561986457947&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Connect%20Lead', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-6 transform transition-all">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-green-600" />
          </div>
          
          <h3 className="text-2xl font-bold mb-2">Obrigado pelo contato!</h3>
          <p className="text-gray-600 mb-6">
            Nossa equipe entrará em contato em breve. Se preferir, você pode nos chamar diretamente no WhatsApp.
          </p>
          
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 text-white py-3 px-6 rounded-xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>Chamar no WhatsApp</span>
            <MessageCircle className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
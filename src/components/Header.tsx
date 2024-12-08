import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const menuItems = [
  { name: 'Início', id: 'inicio' },
  { name: 'Serviços', id: 'servicos' },
  { name: 'Contato', id: 'contato' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white/50 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => scrollToSection('inicio')}
          >
            <div className="relative">
              <Cpu className="h-8 w-8 text-blue-600 transform group-hover:rotate-180 transition-all duration-500" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300">
              Connect Lead
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contato')}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Fale Conosco
            </button>
          </nav>

          <button
            className="md:hidden relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-gray-800" /> : <Menu size={24} className="text-gray-800" />}
          </button>
        </div>

        {/* Mobile Menu with Glass Morphism */}
        <div className={`
          fixed inset-0 z-40 transition-all duration-300 md:hidden
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}>
          <div className="absolute inset-0 bg-white/90 backdrop-blur-lg" onClick={() => setIsMenuOpen(false)} />
          <nav className="absolute inset-x-4 top-20 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-xl"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contato')}
                className="w-full mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Fale Conosco</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
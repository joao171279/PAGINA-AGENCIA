import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Chatbot from './components/Chatbot';
import ParallaxBackground from './components/ParallaxBackground';
import { Cpu } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <ParallaxBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Benefits />
        <Services />
        <About />
        <FAQ />
        <Contact />
      </main>
      <footer className="relative z-10 bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-2">
              <Cpu className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Connect Lead
              </span>
            </div>
            <p className="text-gray-400 text-center max-w-md">
              Transformando negócios através do marketing digital profissional
            </p>
            <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
            <p className="text-gray-500">
              &copy; 2024 Connect Lead. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      <Chatbot />
    </div>
  );
};

export default App;
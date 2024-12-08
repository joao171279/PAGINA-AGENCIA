import React, { useState } from 'react';
import { 
  Cpu, Download, Copy, Check, Instagram, Target, TrendingUp, 
  Users, MessageCircle, Star, BarChart2, Rocket, CheckCircle, 
  DollarSign, Zap, PenTool, Globe, Phone, Mail, ArrowRight,
  Shield, Clock, Search, Settings, Smartphone
} from 'lucide-react';
import html2canvas from 'html2canvas';

const InstagramTemplate = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-[1080px] h-[1080px] bg-gradient-to-br from-blue-50 to-white flex items-center justify-center ${className}`}>
    {children}
  </div>
);

const downloadImage = async (element: HTMLDivElement, filename: string) => {
  try {
    const canvas = await html2canvas(element);
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Error downloading image:', error);
  }
};

const Logo = () => (
  <div className="flex items-center space-x-2">
    <Cpu className="h-6 w-6 text-blue-600" />
    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
      Connect Lead
    </span>
  </div>
);

const templates = [
  // Main Service Highlights
  {
    id: 'digital-transformation',
    title: 'TRANSFORMAÇÃO',
    subtitle: 'DIGITAL',
    highlight: 'RESULTADOS REAIS',
    description: 'Marketing Digital que realmente funciona',
    icon: <Rocket className="w-24 h-24 text-blue-600" />,
    stats: [
      { value: '+300%', label: 'Crescimento' },
      { value: '-40%', label: 'CAC' },
      { value: '5x', label: 'ROI' }
    ]
  },
  {
    id: 'traffic-mastery',
    title: 'TRÁFEGO PAGO',
    subtitle: 'INTELIGENTE',
    highlight: 'MAIS VENDAS',
    description: 'Campanhas otimizadas para resultados',
    icon: <Target className="w-24 h-24 text-blue-600" />,
    darkMode: true,
    stats: [
      { value: '3.5x', label: 'ROAS' },
      { value: '+200%', label: 'Leads' },
      { value: '-35%', label: 'Custo' }
    ]
  },
  // Process Showcase
  {
    id: 'our-process-1',
    title: 'ANÁLISE',
    subtitle: 'ESTRATÉGICA',
    highlight: 'FASE 1',
    description: 'Entendendo seu negócio a fundo',
    icon: <Search className="w-24 h-24 text-blue-600" />,
    stats: [
      { value: '360°', label: 'Visão' },
      { value: '100%', label: 'Personalizado' },
      { value: '24h', label: 'Resposta' }
    ]
  },
  {
    id: 'our-process-2',
    title: 'PLANEJAMENTO',
    subtitle: 'TÁTICO',
    highlight: 'FASE 2',
    description: 'Estratégias sob medida',
    icon: <PenTool className="w-24 h-24 text-purple-600" />,
    darkMode: true,
    stats: [
      { value: '12+', label: 'KPIs' },
      { value: '30d', label: 'Roadmap' },
      { value: '100%', label: 'Focado' }
    ]
  },
  // Results & Benefits
  {
    id: 'real-results',
    title: 'RESULTADOS',
    subtitle: 'COMPROVADOS',
    highlight: 'CASE STUDIES',
    description: 'Histórias reais de sucesso',
    icon: <TrendingUp className="w-24 h-24 text-green-600" />,
    stats: [
      { value: '15+', label: 'Cases' },
      { value: '97%', label: 'Satisfação' },
      { value: '24/7', label: 'Suporte' }
    ]
  },
  // Social Media Management
  {
    id: 'social-media',
    title: 'GESTÃO DE',
    subtitle: 'REDES SOCIAIS',
    highlight: 'ENGAJAMENTO REAL',
    description: 'Sua marca em destaque',
    icon: <Smartphone className="w-24 h-24 text-blue-600" />,
    darkMode: true,
    stats: [
      { value: '+400%', label: 'Alcance' },
      { value: '3x', label: 'Engajamento' },
      { value: '7d/sem', label: 'Gestão' }
    ]
  },
  // Special Offers
  {
    id: 'special-offer',
    title: 'OFERTA',
    subtitle: 'ESPECIAL',
    highlight: 'DIAGNÓSTICO GRÁTIS',
    description: 'Análise completa do seu marketing',
    icon: <Zap className="w-24 h-24 text-yellow-500" />,
    stats: [
      { value: '0,00', label: 'Custo' },
      { value: '60min', label: 'Duração' },
      { value: '100%', label: 'Personalizado' }
    ]
  },
  // Client Success Stories
  {
    id: 'client-success',
    title: 'CASE DE',
    subtitle: 'SUCESSO',
    highlight: 'E-COMMERCE',
    description: 'Resultados que transformam',
    icon: <CheckCircle className="w-24 h-24 text-green-500" />,
    stats: [
      { value: '+450%', label: 'Vendas' },
      { value: '-45%', label: 'CAC' },
      { value: '4.8x', label: 'ROAS' }
    ]
  },
  // Marketing Tips
  {
    id: 'marketing-tips',
    title: 'DICAS DE',
    subtitle: 'MARKETING',
    highlight: '#1 TRÁFEGO PAGO',
    description: 'Otimize suas campanhas',
    icon: <Settings className="w-24 h-24 text-blue-500" />,
    darkMode: true,
    stats: [
      { value: 'CPC', label: 'Otimize' },
      { value: 'CTR', label: 'Aumente' },
      { value: 'ROI', label: 'Maximize' }
    ]
  },
  // Contact Call
  {
    id: 'contact-cta',
    title: 'FALE COM',
    subtitle: 'ESPECIALISTAS',
    highlight: 'COMECE AGORA',
    description: 'Transforme seu negócio',
    icon: <MessageCircle className="w-24 h-24 text-blue-500" />,
    stats: [
      { value: '24h', label: 'Resposta' },
      { value: '100%', label: 'Expert' },
      { value: 'Grátis', label: 'Consulta' }
    ]
  }
];

export default function LogoAssets() {
  const [copied, setCopied] = useState(false);

  const handleCopyHex = () => {
    navigator.clipboard.writeText('#2563eb');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (elementId: string, filename: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      downloadImage(element as HTMLDivElement, filename);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
          Connect Lead - Instagram Assets
        </h1>

        {/* Instagram Templates */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Instagram className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-semibold">Templates para Instagram</h2>
          </div>
          
          {templates.map((template) => (
            <div key={template.id} className="relative group mb-12">
              <div 
                id={template.id}
                className={`w-[1080px] h-[1080px] ${
                  template.darkMode 
                    ? 'bg-gradient-to-br from-gray-900 to-blue-900' 
                    : 'bg-gradient-to-br from-blue-50 to-white'
                } flex items-center justify-center p-16 relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                
                {/* Animated Background Circles */}
                {Array.from({ length: 3 }).map((_, i) => (
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

                <div className="relative z-10 text-center space-y-12">
                  {/* Logo */}
                  <div className="absolute top-0 left-0 p-6">
                    <Logo />
                  </div>

                  {/* Icon */}
                  <div className={`w-32 h-32 mx-auto rounded-2xl flex items-center justify-center ${
                    template.darkMode ? 'bg-white/10' : 'bg-blue-100'
                  } transform hover:rotate-12 transition-transform duration-500`}>
                    {template.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-6">
                    <h2 className={`text-5xl font-bold ${
                      template.darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {template.title}
                    </h2>
                    <h3 className="text-7xl font-black bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                      {template.subtitle}
                    </h3>
                    <p className={`text-4xl ${
                      template.darkMode ? 'text-blue-300' : 'text-blue-600'
                    } font-semibold`}>
                      {template.highlight}
                    </p>
                    <p className={`text-2xl ${
                      template.darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {template.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-8 mt-12">
                    {template.stats.map((stat, index) => (
                      <div key={index} className={`p-4 rounded-xl ${
                        template.darkMode ? 'bg-white/10' : 'bg-white/80 backdrop-blur-sm'
                      }`}>
                        <div className={`text-4xl font-bold ${
                          template.darkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {stat.value}
                        </div>
                        <div className={
                          template.darkMode ? 'text-gray-400' : 'text-gray-600'
                        }>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="absolute bottom-8 right-8">
                    <div className={`flex items-center gap-2 ${
                      template.darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      <span>Saiba mais</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => handleDownload(template.id, `${template.id}.png`)}
                className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all opacity-0 group-hover:opacity-100"
              >
                <Download className="w-6 h-6 text-blue-600" />
              </button>
            </div>
          ))}
        </section>

        {/* Brand Colors Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Cores da Marca</h2>
          <div className="flex gap-4 flex-wrap">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="w-20 h-20 bg-blue-600 rounded-lg mb-2"></div>
              <p className="text-sm text-gray-600">Primary Blue</p>
              <button 
                onClick={handleCopyHex}
                className="mt-2 text-sm flex items-center gap-1 text-blue-600"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                #2563eb
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
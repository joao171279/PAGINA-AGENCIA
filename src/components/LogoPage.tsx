import React from 'react';
import { Cpu } from 'lucide-react';

export default function LogoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="relative group">
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-pulse" />
        
        {/* Logo container */}
        <div className="relative flex flex-col items-center space-y-4">
          {/* Animated logo icon */}
          <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center transform group-hover:rotate-180 transition-all duration-1000 shadow-xl hover:shadow-2xl">
            <Cpu className="w-20 h-20 text-white animate-spin-slow" />
          </div>
          
          {/* Company name */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            Connect Lead
          </h1>
        </div>
      </div>
    </div>
  );
}
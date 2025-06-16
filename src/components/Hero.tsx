
import React, { useState, useEffect } from 'react';
import { ChevronRight, Terminal } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const codeText = 'const solution = CodeWare.develop(yourIdea);';

  useEffect(() => {
    if (currentIndex < codeText.length) {
      const timeout = setTimeout(() => {
        setText(codeText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, codeText]);

  return (
    <section id="home" className="relative min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(56,189,248,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(14,165,233,0.1),transparent_70%)]"></div>
      </div>
      
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-cyan-400/20 font-mono text-sm animate-pulse">
          {'{ "innovation": true }'}
        </div>
        <div className="absolute top-40 right-20 text-blue-400/20 font-mono text-sm animate-pulse delay-1000">
          {'function create() { return "amazing"; }'}
        </div>
        <div className="absolute bottom-40 left-20 text-slate-400/20 font-mono text-sm animate-pulse delay-2000">
          {'console.log("CodeWare delivers");'}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2 mb-6">
            <Terminal className="h-4 w-4 text-cyan-400" />
            <span className="text-slate-300 text-sm">Agência de Desenvolvimento</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transformamos
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> ideias </span>
            em código
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Somos a CodeWare, uma agência especializada em desenvolvimento de software. 
            Criamos soluções digitais que impulsionam o crescimento do seu negócio.
          </p>
        </div>

        {/* Animated Code Block */}
        <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-left font-mono text-sm">
            <span className="text-cyan-400">{text}</span>
            <span className="animate-pulse text-white">|</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <span>Iniciar Projeto</span>
            <ChevronRight className="h-5 w-5" />
          </button>
          <button className="border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
            Ver Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

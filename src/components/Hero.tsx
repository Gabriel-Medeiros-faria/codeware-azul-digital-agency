
import React, { useState, useEffect } from 'react';
import { ChevronRight, Terminal } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const codeText = 'const solution = NovaWare.develop(yourIdea);';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden"
             style={{ background: 'hsl(var(--nova-dark))' }}>
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" 
             style={{ 
               background: `radial-gradient(circle at 30% 40%, hsla(var(--nova-purple), 0.15), transparent 70%)` 
             }}></div>
        <div className="absolute inset-0" 
             style={{ 
               background: `radial-gradient(circle at 70% 60%, hsla(var(--nova-magenta), 0.15), transparent 70%)` 
             }}></div>
      </div>
      
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 font-mono text-sm animate-pulse"
             style={{ color: 'hsla(var(--nova-magenta), 0.3)' }}>
          {'{ "innovation": true }'}
        </div>
        <div className="absolute top-40 right-20 font-mono text-sm animate-pulse delay-1000"
             style={{ color: 'hsla(var(--nova-blue), 0.3)' }}>
          {'function create() { return "amazing"; }'}
        </div>
        <div className="absolute bottom-40 left-20 font-mono text-sm animate-pulse delay-2000"
             style={{ color: 'hsla(var(--nova-purple), 0.3)' }}>
          {'console.log("NovaWare delivers");'}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 backdrop-blur-sm border rounded-full px-4 py-2 mb-6"
               style={{ 
                 backgroundColor: 'hsla(var(--nova-darker), 0.5)', 
                 borderColor: 'hsla(var(--nova-purple), 0.3)' 
               }}>
            <Terminal className="h-4 w-4" style={{ color: 'hsl(var(--nova-magenta))' }} />
            <span className="text-slate-300 text-sm">Agência de Desenvolvimento</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transformamos
            <span style={{ 
              background: `linear-gradient(135deg, hsl(var(--nova-purple)), hsl(var(--nova-magenta)))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}> ideias </span>
            em código
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Somos a NovaWare, uma agência especializada em desenvolvimento de software. 
            Criamos soluções digitais que impulsionam o crescimento do seu negócio.
          </p>
        </div>

        {/* Animated Code Block */}
        <div className="backdrop-blur-sm border rounded-lg p-6 mb-8 max-w-2xl mx-auto"
             style={{ 
               backgroundColor: 'hsla(var(--nova-darker), 0.8)', 
               borderColor: 'hsla(var(--nova-purple), 0.3)' 
             }}>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-left font-mono text-sm">
            <span style={{ color: 'hsl(var(--nova-magenta))' }}>{text}</span>
            <span className="animate-pulse text-white">|</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                  style={{ 
                    background: `linear-gradient(135deg, hsl(var(--nova-purple)), hsl(var(--nova-magenta)))` 
                  }}>
            <span>Iniciar Projeto</span>
            <ChevronRight className="h-5 w-5" />
          </button>
          <button className="border text-slate-300 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                  style={{ borderColor: 'hsl(var(--nova-purple))' }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'hsl(var(--nova-magenta))';
                    e.target.style.color = 'hsl(var(--nova-magenta))';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'hsl(var(--nova-purple))';
                    e.target.style.color = '';
                  }}>
            Ver Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md z-50 border-b" 
         style={{ 
           backgroundColor: 'hsla(var(--nova-dark), 0.9)', 
           borderColor: 'hsla(var(--nova-purple), 0.3)' 
         }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8" style={{ color: 'hsl(var(--nova-magenta))' }} />
            <span className="text-xl font-bold text-white">&lt;NovaWare/&gt;</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-slate-300 transition-colors duration-300" 
                 style={{ '&:hover': { color: 'hsl(var(--nova-magenta))' } }}
                 onMouseEnter={(e) => e.target.style.color = 'hsl(var(--nova-magenta))'}
                 onMouseLeave={(e) => e.target.style.color = ''}>Início</a>
              <a href="#services" className="text-slate-300 transition-colors duration-300"
                 onMouseEnter={(e) => e.target.style.color = 'hsl(var(--nova-magenta))'}
                 onMouseLeave={(e) => e.target.style.color = ''}>Serviços</a>
              <a href="#portfolio" className="text-slate-300 transition-colors duration-300"
                 onMouseEnter={(e) => e.target.style.color = 'hsl(var(--nova-magenta))'}
                 onMouseLeave={(e) => e.target.style.color = ''}>Portfolio</a>
              <a href="#about" className="text-slate-300 transition-colors duration-300"
                 onMouseEnter={(e) => e.target.style.color = 'hsl(var(--nova-magenta))'}
                 onMouseLeave={(e) => e.target.style.color = ''}>Sobre</a>
              <a href="#contact" className="text-white px-4 py-2 rounded-lg transition-all duration-300"
                 style={{ 
                   background: 'linear-gradient(135deg, hsl(var(--nova-purple)), hsl(var(--nova-magenta)))',
                   '&:hover': { transform: 'scale(1.05)' }
                 }}
                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>Contato</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden" style={{ backgroundColor: 'hsl(var(--nova-darker))' }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-slate-300 px-3 py-2"
               onMouseEnter={(e) => e.target.style.color = 'hsl(var(--nova-magenta))'}
               onMouseLeave={(e) => e.target.style.color = ''}>Início</a>
            <a href="#services" className="block text-slate-300 px-3 py-2"
               onMouseEnter={(e) => e.target.style.color = 'hsl(var(--nova-magenta))'}
               onMouseLeave={(e) => e.target.style.color = ''}>Serviços</a>
            <a href="#portfolio" className="block text-slate-300 px-3 py-2"
               onMouseEnter={(e) => e.target.style.color = 'hsl(var(--nova-magenta))'}
               onMouseLeave={(e) => e.target.style.color = ''}>Portfolio</a>
            <a href="#about" className="block text-slate-300 px-3 py-2"
               onMouseEnter={(e) => e.target.style.color = 'hsl(var(--nova-magenta))'}
               onMouseLeave={(e) => e.target.style.color = ''}>Sobre</a>
            <a href="#contact" className="block text-slate-300 px-3 py-2"
               onMouseEnter={(e) => e.target.style.color = 'hsl(var(--nova-magenta))'}
               onMouseLeave={(e) => e.target.style.color = ''}>Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

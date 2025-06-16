
import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">&lt;CodeWare/&gt;</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Início</a>
              <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Serviços</a>
              <a href="#portfolio" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Portfolio</a>
              <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Sobre</a>
              <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors duration-300">Contato</a>
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
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-slate-300 hover:text-cyan-400 px-3 py-2">Início</a>
            <a href="#services" className="block text-slate-300 hover:text-cyan-400 px-3 py-2">Serviços</a>
            <a href="#portfolio" className="block text-slate-300 hover:text-cyan-400 px-3 py-2">Portfolio</a>
            <a href="#about" className="block text-slate-300 hover:text-cyan-400 px-3 py-2">Sobre</a>
            <a href="#contact" className="block text-slate-300 hover:text-cyan-400 px-3 py-2">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

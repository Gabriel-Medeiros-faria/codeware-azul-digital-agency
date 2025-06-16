
import React from 'react';
import { Code2, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">&lt;CodeWare/&gt;</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Transformamos ideias em soluções digitais inovadoras. Somos a parceira ideal para o crescimento tecnológico do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-700 hover:bg-cyan-500 rounded-lg text-slate-300 hover:text-white transition-all duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-700 hover:bg-cyan-500 rounded-lg text-slate-300 hover:text-white transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-700 hover:bg-cyan-500 rounded-lg text-slate-300 hover:text-white transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-slate-700 hover:bg-cyan-500 rounded-lg text-slate-300 hover:text-white transition-all duration-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Desenvolvimento Web</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Apps Mobile</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Backend & APIs</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Cloud & DevOps</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Sobre Nós</a></li>
              <li><a href="#portfolio" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Portfolio</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Contato</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Carreira</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-300 mb-4 md:mb-0">
            © 2024 CodeWare. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

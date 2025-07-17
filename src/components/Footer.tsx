
import React from 'react';
import { Code2, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t" 
            style={{ 
              backgroundColor: 'hsl(var(--nova-darker))', 
              borderColor: 'hsla(var(--nova-purple), 0.3)' 
            }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8" style={{ color: 'hsl(var(--nova-magenta))' }} />
              <span className="text-xl font-bold text-white">&lt;NovaWare/&gt;</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Transformamos ideias em soluções digitais inovadoras. Somos a parceira ideal para o crescimento tecnológico do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg text-slate-300 hover:text-white transition-all duration-300"
                 style={{ backgroundColor: 'hsl(var(--nova-dark))' }}
                 onMouseEnter={(e) => {
                   (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, hsl(var(--nova-purple)), hsl(var(--nova-magenta)))`;
                 }}
                 onMouseLeave={(e) => {
                   (e.currentTarget as HTMLElement).style.background = 'hsl(var(--nova-dark))';
                 }}>
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg text-slate-300 hover:text-white transition-all duration-300"
                 style={{ backgroundColor: 'hsl(var(--nova-dark))' }}
                 onMouseEnter={(e) => {
                   (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, hsl(var(--nova-purple)), hsl(var(--nova-magenta)))`;
                 }}
                 onMouseLeave={(e) => {
                   (e.currentTarget as HTMLElement).style.background = 'hsl(var(--nova-dark))';
                 }}>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg text-slate-300 hover:text-white transition-all duration-300"
                 style={{ backgroundColor: 'hsl(var(--nova-dark))' }}
                 onMouseEnter={(e) => {
                   (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, hsl(var(--nova-purple)), hsl(var(--nova-magenta)))`;
                 }}
                 onMouseLeave={(e) => {
                   (e.currentTarget as HTMLElement).style.background = 'hsl(var(--nova-dark))';
                 }}>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg text-slate-300 hover:text-white transition-all duration-300"
                 style={{ backgroundColor: 'hsl(var(--nova-dark))' }}
                 onMouseEnter={(e) => {
                   (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, hsl(var(--nova-purple)), hsl(var(--nova-magenta)))`;
                 }}
                 onMouseLeave={(e) => {
                   (e.currentTarget as HTMLElement).style.background = 'hsl(var(--nova-dark))';
                 }}>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 transition-colors duration-300"
                     onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'hsl(var(--nova-magenta))'}
                     onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = ''}>Desenvolvimento Web</a></li>
              <li><a href="#" className="text-slate-300 transition-colors duration-300"
                     onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'hsl(var(--nova-magenta))'}
                     onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = ''}>Apps Mobile</a></li>
              <li><a href="#" className="text-slate-300 transition-colors duration-300"
                     onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'hsl(var(--nova-magenta))'}
                     onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = ''}>Backend & APIs</a></li>
              <li><a href="#" className="text-slate-300 transition-colors duration-300"
                     onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'hsl(var(--nova-magenta))'}
                     onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = ''}>Cloud & DevOps</a></li>
              <li><a href="#" className="text-slate-300 transition-colors duration-300"
                     onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'hsl(var(--nova-magenta))'}
                     onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = ''}>UI/UX Design</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-300 transition-colors duration-300"
                     onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'hsl(var(--nova-magenta))'}
                     onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = ''}>Sobre Nós</a></li>
              <li><a href="#portfolio" className="text-slate-300 transition-colors duration-300"
                     onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'hsl(var(--nova-magenta))'}
                     onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = ''}>Portfolio</a></li>
              <li><a href="#contact" className="text-slate-300 transition-colors duration-300"
                     onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'hsl(var(--nova-magenta))'}
                     onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = ''}>Contato</a></li>
              <li><a href="#" className="text-slate-300 transition-colors duration-300"
                     onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'hsl(var(--nova-magenta))'}
                     onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = ''}>Blog</a></li>
              <li><a href="#" className="text-slate-300 transition-colors duration-300"
                     onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'hsl(var(--nova-magenta))'}
                     onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = ''}>Carreira</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
             style={{ borderColor: 'hsla(var(--nova-purple), 0.3)' }}>
          <p className="text-slate-300 mb-4 md:mb-0">
            © 2024 NovaWare. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-300 transition-colors duration-300 text-sm"
               onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'hsl(var(--nova-magenta))'}
               onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = ''}>
              Política de Privacidade
            </a>
            <a href="#" className="text-slate-300 transition-colors duration-300 text-sm"
               onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'hsl(var(--nova-magenta))'}
               onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = ''}>
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

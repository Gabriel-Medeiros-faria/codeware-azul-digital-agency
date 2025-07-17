
import React from 'react';
import { Globe, Smartphone, Database, Cloud, Cog, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Desenvolvimento Web',
      description: 'Sites e aplicações web modernas, responsivas e otimizadas para performance.',
      tech: ['React', 'Next.js', 'Vue.js', 'Node.js']
    },
    {
      icon: Smartphone,
      title: 'Apps Mobile',
      description: 'Aplicativos nativos e híbridos para iOS e Android com excelente UX.',
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      icon: Database,
      title: 'Backend & APIs',
      description: 'Arquiteturas robustas, APIs RESTful e GraphQL para suas aplicações.',
      tech: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Deploy, monitoramento e escalabilidade na nuvem com as melhores práticas.',
      tech: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      icon: Cog,
      title: 'Sistemas Personalizados',
      description: 'Soluções sob medida para automatizar e otimizar processos empresariais.',
      tech: ['Custom', 'Integrations', 'Automation', 'APIs']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Interfaces intuitivas e experiências de usuário que convertem e engajam.',
      tech: ['Figma', 'Design Systems', 'Prototyping', 'Testing']
    }
  ];

  return (
    <section id="services" className="py-20" style={{ backgroundColor: 'hsl(var(--nova-darker))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Oferecemos soluções completas de desenvolvimento, desde a concepção até a entrega final
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 transform hover:scale-105 group"
              style={{ 
                backgroundColor: 'hsla(var(--nova-dark), 0.5)', 
                borderColor: 'hsla(var(--nova-purple), 0.3)' 
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'hsla(var(--nova-magenta), 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'hsla(var(--nova-purple), 0.3)';
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-lg group-hover:scale-105 transition-all duration-300"
                     style={{ 
                       background: `linear-gradient(135deg, hsla(var(--nova-purple), 0.2), hsla(var(--nova-magenta), 0.2))` 
                     }}>
                  <service.icon className="h-6 w-6" style={{ color: 'hsl(var(--nova-magenta))' }} />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              
              <p className="text-slate-300 mb-4">{service.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 text-xs rounded-md font-mono"
                    style={{ 
                      backgroundColor: 'hsla(var(--nova-purple), 0.2)', 
                      color: 'hsl(var(--nova-magenta))' 
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

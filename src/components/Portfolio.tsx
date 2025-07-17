
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com sistema de pagamentos, gestão de estoque e analytics.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Web Development'
    },
    {
      title: 'Healthcare Mobile App',
      description: 'Aplicativo móvel para telemedicina com consultas online e gerenciamento de prontuários.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
      tech: ['React Native', 'Firebase', 'WebRTC', 'Redux'],
      category: 'Mobile Development'
    },
    {
      title: 'FinTech Dashboard',
      description: 'Dashboard analítico para empresa fintech com relatórios em tempo real e gestão de transações.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tech: ['Vue.js', 'D3.js', 'Python', 'MongoDB'],
      category: 'Data Visualization'
    },
    {
      title: 'IoT Management System',
      description: 'Sistema de gerenciamento para dispositivos IoT com monitoramento em tempo real.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      tech: ['Next.js', 'MQTT', 'InfluxDB', 'Docker'],
      category: 'IoT Solutions'
    },
    {
      title: 'EdTech Platform',
      description: 'Plataforma educacional com cursos online, gamificação e sistema de avaliações.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      tech: ['Angular', 'Laravel', 'MySQL', 'AWS'],
      category: 'Education Technology'
    },
    {
      title: 'Logistics Optimization',
      description: 'Sistema de otimização de rotas e gestão logística para empresa de transporte.',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'Machine Learning', 'Google Maps API', 'Redis'],
      category: 'Logistics & AI'
    }
  ];

  return (
    <section id="portfolio" className="py-20" style={{ backgroundColor: 'hsl(var(--nova-dark))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nosso Portfolio
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="backdrop-blur-sm border rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 group"
              style={{ 
                backgroundColor: 'hsla(var(--nova-darker), 0.5)', 
                borderColor: 'hsla(var(--nova-purple), 0.3)' 
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'hsla(var(--nova-magenta), 0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'hsla(var(--nova-purple), 0.3)';
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                     style={{ 
                       background: `linear-gradient(to top, hsla(var(--nova-dark), 0.8), transparent)` 
                     }}>
                  <div className="flex space-x-3">
                    <button className="p-2 rounded-full text-white transition-colors duration-300"
                            style={{ 
                              background: `linear-gradient(135deg, hsl(var(--nova-purple)), hsl(var(--nova-magenta)))` 
                            }}>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-full text-white transition-colors duration-300"
                            style={{ backgroundColor: 'hsl(var(--nova-dark))' }}>
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="px-2 py-1 text-xs rounded-md"
                        style={{ 
                          backgroundColor: 'hsla(var(--nova-purple), 0.2)', 
                          color: 'hsl(var(--nova-magenta))' 
                        }}>
                    {project.category}
                  </span>
                </div>
                
                <p className="text-slate-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-slate-300 text-xs rounded-md font-mono"
                      style={{ backgroundColor: 'hsla(var(--nova-purple), 0.2)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

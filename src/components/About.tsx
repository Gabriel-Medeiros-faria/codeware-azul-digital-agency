
import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Projetos Entregues', value: '150+' },
    { icon: Award, label: 'Clientes Satisfeitos', value: '98%' },
    { icon: Clock, label: 'Anos de Experiência', value: '8+' },
    { icon: Target, label: 'Taxa de Sucesso', value: '100%' }
  ];

  const team = [
    {
      name: 'Ana Silva',
      role: 'Tech Lead & Co-founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      skills: ['React', 'Node.js', 'AWS', 'Team Leadership']
    },
    {
      name: 'Carlos Santos',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      skills: ['Python', 'Django', 'PostgreSQL', 'Docker']
    },
    {
      name: 'Maria Costa',
      role: 'Mobile Developer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
      skills: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      name: 'João Oliveira',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
      skills: ['Kubernetes', 'CI/CD', 'Monitoring', 'Security']
    }
  ];

  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'hsl(var(--nova-darker))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sobre a NovaWare
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Somos uma equipe apaixonada por tecnologia, dedicada a criar soluções digitais inovadoras que transformam negócios
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-lg"
                     style={{ 
                       background: `linear-gradient(135deg, hsla(var(--nova-purple), 0.2), hsla(var(--nova-magenta), 0.2))` 
                     }}>
                  <stat.icon className="h-8 w-8" style={{ color: 'hsl(var(--nova-magenta))' }} />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="backdrop-blur-sm border rounded-lg p-8 mb-16"
             style={{ 
               backgroundColor: 'hsla(var(--nova-dark), 0.5)', 
               borderColor: 'hsla(var(--nova-purple), 0.3)' 
             }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Nossa Missão</h3>
              <p className="text-slate-300 mb-4">
                Transformamos ideias em soluções digitais robustas e escaláveis. Acreditamos que a tecnologia deve ser um catalisador para o crescimento dos negócios, não uma barreira.
              </p>
              <p className="text-slate-300">
                Com foco em qualidade, inovação e parceria de longo prazo, ajudamos empresas a se destacarem no mercado digital através de desenvolvimento de software personalizado.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" 
                alt="Team collaboration"
                className="rounded-lg"
              />
              <div className="absolute inset-0 rounded-lg"
                   style={{ 
                     background: `linear-gradient(135deg, hsla(var(--nova-purple), 0.2), hsla(var(--nova-magenta), 0.2))` 
                   }}></div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-12">Nossa Equipe</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="backdrop-blur-sm border rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105"
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
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                <p className="mb-4" style={{ color: 'hsl(var(--nova-magenta))' }}>{member.role}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 text-slate-300 text-xs rounded-md"
                      style={{ backgroundColor: 'hsla(var(--nova-purple), 0.2)' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

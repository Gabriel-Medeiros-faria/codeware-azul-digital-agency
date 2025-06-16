
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
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80',
      skills: ['React', 'Node.js', 'AWS', 'Team Leadership']
    },
    {
      name: 'Carlos Santos',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
      skills: ['Python', 'Django', 'PostgreSQL', 'Docker']
    },
    {
      name: 'Maria Costa',
      role: 'Mobile Developer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
      skills: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      name: 'João Oliveira',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      skills: ['Kubernetes', 'CI/CD', 'Monitoring', 'Security']
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sobre a CodeWare
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
                <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                  <stat.icon className="h-8 w-8 text-cyan-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 mb-16">
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
                alt="Team collaboration"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg"></div>
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
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                <p className="text-cyan-400 mb-4">{member.role}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md"
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

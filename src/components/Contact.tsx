
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'hsl(var(--nova-darker))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Conte-nos sobre seu projeto e vamos transformar sua ideia em realidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Entre em Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg"
                     style={{ 
                       background: `linear-gradient(135deg, hsla(var(--nova-purple), 0.3), hsla(var(--nova-magenta), 0.3))`,
                       border: '1px solid hsla(var(--nova-purple), 0.5)'
                     }}>
                  <Mail className="h-6 w-6" style={{ color: 'hsl(var(--nova-magenta))' }} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-slate-300">contato@novaware.dev</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg"
                     style={{ 
                       background: `linear-gradient(135deg, hsla(var(--nova-purple), 0.3), hsla(var(--nova-magenta), 0.3))`,
                       border: '1px solid hsla(var(--nova-purple), 0.5)'
                     }}>
                  <Phone className="h-6 w-6" style={{ color: 'hsl(var(--nova-magenta))' }} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Telefone</h4>
                  <p className="text-slate-300">+55 (11) 9999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg"
                     style={{ 
                       background: `linear-gradient(135deg, hsla(var(--nova-purple), 0.3), hsla(var(--nova-magenta), 0.3))`,
                       border: '1px solid hsla(var(--nova-purple), 0.5)'
                     }}>
                  <MapPin className="h-6 w-6" style={{ color: 'hsl(var(--nova-magenta))' }} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Localização</h4>
                  <p className="text-slate-300">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 backdrop-blur-sm border rounded-lg"
                 style={{ 
                   backgroundColor: 'hsla(var(--nova-dark), 0.8)', 
                   borderColor: 'hsl(var(--nova-purple))'
                 }}>
              <h4 className="text-white font-semibold mb-4">Por que escolher a NovaWare?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5" style={{ color: 'hsl(var(--nova-magenta))' }} />
                  <span className="text-slate-300">Equipe especializada e experiente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5" style={{ color: 'hsl(var(--nova-magenta))' }} />
                  <span className="text-slate-300">Metodologias ágeis de desenvolvimento</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5" style={{ color: 'hsl(var(--nova-magenta))' }} />
                  <span className="text-slate-300">Suporte contínuo pós-entrega</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5" style={{ color: 'hsl(var(--nova-magenta))' }} />
                  <span className="text-slate-300">Tecnologias modernas e escaláveis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-sm border rounded-lg p-8"
               style={{ 
                 backgroundColor: 'hsla(var(--nova-dark), 0.8)', 
                 borderColor: 'hsl(var(--nova-purple))'
               }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg text-white placeholder-slate-400 transition-all duration-300"
                  style={{ 
                    backgroundColor: 'hsla(var(--nova-darker), 0.8)', 
                    borderColor: 'hsla(var(--nova-purple), 0.5)' 
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'hsl(var(--nova-magenta))';
                    (e.currentTarget as HTMLElement).style.outline = 'none';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 2px hsla(var(--nova-magenta), 0.2)';
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'hsla(var(--nova-purple), 0.5)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg text-white placeholder-slate-400 transition-all duration-300"
                  style={{ 
                    backgroundColor: 'hsla(var(--nova-darker), 0.8)', 
                    borderColor: 'hsla(var(--nova-purple), 0.5)' 
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'hsl(var(--nova-magenta))';
                    (e.currentTarget as HTMLElement).style.outline = 'none';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 2px hsla(var(--nova-magenta), 0.2)';
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'hsla(var(--nova-purple), 0.5)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg text-white placeholder-slate-400 transition-all duration-300"
                  style={{ 
                    backgroundColor: 'hsla(var(--nova-darker), 0.8)', 
                    borderColor: 'hsla(var(--nova-purple), 0.5)' 
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'hsl(var(--nova-magenta))';
                    (e.currentTarget as HTMLElement).style.outline = 'none';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 2px hsla(var(--nova-magenta), 0.2)';
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'hsla(var(--nova-purple), 0.5)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                  placeholder="Nome da sua empresa"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg text-white placeholder-slate-400 transition-all duration-300 resize-none"
                  style={{ 
                    backgroundColor: 'hsla(var(--nova-darker), 0.8)', 
                    borderColor: 'hsla(var(--nova-purple), 0.5)' 
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'hsl(var(--nova-magenta))';
                    (e.currentTarget as HTMLElement).style.outline = 'none';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 2px hsla(var(--nova-magenta), 0.2)';
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'hsla(var(--nova-purple), 0.5)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center space-x-2"
                style={{ 
                  background: `linear-gradient(135deg, hsl(var(--nova-purple)), hsl(var(--nova-magenta)))` 
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

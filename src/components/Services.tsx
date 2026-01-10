import React from 'react';
import { motion } from 'framer-motion';
import { 
  Workflow, 
  MessageSquare, 
  BarChart3, 
  Plug, 
  Megaphone, 
  Wrench 
} from 'lucide-react';
import { cn } from '../lib/utils';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  tags,
  delay = 0
}: { 
  title: string; 
  description: string; 
  icon: any;
  tags: string[];
  delay?: number;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all p-8 flex flex-col h-full"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10 mb-6 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <Icon size={28} className="text-white group-hover:text-orange-500 transition-colors" />
    </div>

    <h3 className="relative z-10 text-xl font-bold text-white mb-3">{title}</h3>
    <p className="relative z-10 text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{description}</p>

    <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
      {tags.map((tag, i) => (
        <span key={i} className="text-[10px] font-medium uppercase tracking-wider text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export const Services = () => {
  const services = [
    {
      title: "Automação com n8n",
      description: "Crio workflows automatizados conectando suas ferramentas favoritas: CRM, planilhas, e-mail, Slack e mais. Sem código, 100% personalizado.",
      icon: Workflow,
      tags: ["n8n", "Zapier", "Make", "Integrações"]
    },
    {
      title: "Chatbots & IA Conversacional",
      description: "Chatbots inteligentes com GPT-4/Claude para atendimento 24/7, qualificação de leads e suporte técnico automatizado.",
      icon: MessageSquare,
      tags: ["ChatGPT", "Claude", "WhatsApp", "Telegram"]
    },
    {
      title: "Business Intelligence",
      description: "Dashboards em tempo real conectando suas fontes de dados. Visualize KPIs, tome decisões baseadas em dados, automatize relatórios.",
      icon: BarChart3,
      tags: ["Google Sheets", "Metabase", "Data Studio"]
    },
    {
      title: "Integração de APIs",
      description: "Conecto sistemas legados com ferramentas modernas. APIs REST, webhooks, sincronização bidirecional de dados.",
      icon: Plug,
      tags: ["REST API", "Webhooks", "JSON"]
    },
    {
      title: "Automação de Marketing",
      description: "Nutrição de leads, follow-ups automáticos, segmentação inteligente, relatórios de vendas e pipelines otimizados.",
      icon: Megaphone,
      tags: ["CRM", "Email Marketing", "Lead Gen"]
    },
    {
      title: "Soluções Customizadas",
      description: "Projetos sob medida para desafios únicos. Análise, desenvolvimento, implementação e treinamento da equipe.",
      icon: Wrench,
      tags: ["Consultoria", "Custom", "Training"]
    }
  ];

  return (
    <section id="services" className="w-full py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-950/10 px-4 py-1.5 mb-6"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-wider text-orange-400 uppercase">
              O Que Faço
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            Serviços que Transformam <br /> Operações
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

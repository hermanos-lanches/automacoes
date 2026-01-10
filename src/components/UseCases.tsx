import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Scale, 
  ShoppingCart, 
  Megaphone, 
  Smile, 
  Briefcase,
  LucideIcon
} from 'lucide-react';

interface UseCaseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative flex flex-col items-start gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="relative z-10 w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/10 transition-all duration-300">
        <Icon 
          size={24} 
          className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" 
        />
      </div>

      <div className="relative z-10">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export const UseCases = () => {
  const cases = [
    { 
      icon: Sparkles, 
      title: "Clínicas Estéticas", 
      description: "Agendamentos automáticos, lembretes de consulta, follow-up pós-procedimento, gestão de fichas de clientes." 
    },
    { 
      icon: Scale, 
      title: "Escritórios de Advocacia", 
      description: "Controle de prazos processuais, gestão de documentos, lembretes automáticos, relatórios para clientes." 
    },
    { 
      icon: ShoppingCart, 
      title: "E-commerce & Varejo", 
      description: "Gestão de pedidos, controle de estoque, notificações de clientes, integração com marketplaces." 
    },
    { 
      icon: Megaphone, 
      title: "Agências de Marketing", 
      description: "Relatórios para clientes, gestão de campanhas, análise de métricas, automação de posts." 
    },
    { 
      icon: Smile, 
      title: "Clínicas Odontológicas", 
      description: "Agendamentos online, confirmações via WhatsApp, prontuários digitais, lembretes de retorno." 
    },
    { 
      icon: Briefcase, 
      title: "Serviços & Consultoria", 
      description: "Gestão de projetos, timesheet automático, faturamento, contratos e propostas." 
    },
  ];

  return (
    <section id="use-cases" className="w-full py-24 px-6 relative z-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Soluções para Seu Segmento
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Não importa sua indústria, a automação pode revolucionar seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <UseCaseCard 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

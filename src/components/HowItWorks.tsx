import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Code2, Rocket } from 'lucide-react';

const Step = ({ 
  number, 
  title, 
  description, 
  duration, 
  icon: Icon,
  delay 
}: { 
  number: string; 
  title: string; 
  description: string; 
  duration: string;
  icon: any;
  delay: number;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="relative flex flex-col md:flex-row gap-8 items-start md:items-center group"
  >
    {/* Icon/Number */}
    <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center shadow-xl group-hover:border-orange-500/50 transition-colors">
      <Icon size={32} className="text-white group-hover:text-orange-500 transition-colors" />
      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white border-4 border-[#050505]">
        {number}
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full w-fit">
          {duration}
        </span>
      </div>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Diagnóstico",
      description: "Análise gratuita dos seus processos atuais. Identificamos gargalos e oportunidades de automação.",
      duration: "1-2 dias",
      icon: Search
    },
    {
      number: "2",
      title: "Proposta Personalizada",
      description: "Proposta detalhada com escopo, tecnologias, prazos e investimento. Sem surpresas.",
      duration: "2-3 dias",
      icon: FileText
    },
    {
      number: "3",
      title: "Desenvolvimento",
      description: "Criação da automação com updates constantes. Você acompanha cada etapa do projeto.",
      duration: "1-4 semanas",
      icon: Code2
    },
    {
      number: "4",
      title: "Entrega & Suporte",
      description: "Deploy, treinamento da equipe e suporte contínuo. Garantia de funcionamento.",
      duration: "Contínuo",
      icon: Rocket
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-32 px-6 relative z-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Do Problema à Solução <br /> em 4 Passos
          </motion.h2>
        </div>

        <div className="space-y-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-[31px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500/50 to-orange-500/50 hidden md:block" />
          
          {steps.map((step, i) => (
            <Step key={i} {...step} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

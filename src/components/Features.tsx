import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, Cpu, BarChart3, MessageCircle, 
  Settings, Brain, LayoutDashboard, Bot
} from 'lucide-react';
import { cn } from '../lib/utils';

// --- Feature Card Components ---

const FeatureCard = ({ 
  title, 
  description, 
  children, 
  className,
  delay = 0
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className={cn(
      "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/30 transition-all p-1 shadow-2xl",
      className
    )}
  >
    {/* Inner Card */}
    <div className="relative h-full flex flex-col rounded-[20px] overflow-hidden bg-black/20">
      {/* Visual Area */}
      <div className="relative h-[240px] w-full overflow-hidden flex items-center justify-center">
        {children}
      </div>
      
      {/* Text Content */}
      <div className="p-6 md:p-8 mt-auto relative z-10 bg-gradient-to-t from-black/60 to-transparent">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

// --- Visuals for Cards ---

const AutomationVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute w-40 h-40 bg-orange-500/20 blur-[60px] rounded-full" />
    <div className="relative z-10 flex items-center gap-4">
       <div className="w-16 h-16 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center shadow-lg">
          <Settings size={32} className="text-orange-500" />
       </div>
       <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse delay-100" />
          <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse delay-200" />
       </div>
       <div className="w-16 h-16 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center shadow-lg">
          <GitBranch size={32} className="text-blue-500" />
       </div>
    </div>
  </div>
);

const IAVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full" />
    <div className="relative z-10 w-24 h-24 rounded-full border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-md">
       <Brain size={48} className="text-blue-400" />
       <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white">AI</div>
    </div>
  </div>
);

const BIVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute w-40 h-40 bg-purple-500/20 blur-[60px] rounded-full" />
    <div className="relative z-10 flex items-end gap-2 h-24">
       <div className="w-8 bg-white/10 rounded-t-lg h-[40%] border-t border-x border-white/10" />
       <div className="w-8 bg-white/10 rounded-t-lg h-[70%] border-t border-x border-white/10" />
       <div className="w-8 bg-gradient-to-t from-purple-600 to-blue-500 rounded-t-lg h-[100%] border-t border-x border-white/20 shadow-[0_0_20px_rgba(147,51,234,0.3)]" />
       <div className="w-8 bg-white/10 rounded-t-lg h-[60%] border-t border-x border-white/10" />
    </div>
  </div>
);

const ChatbotVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
     <div className="absolute w-40 h-40 bg-green-500/20 blur-[60px] rounded-full" />
     <div className="relative z-10">
        <div className="w-20 h-20 bg-[#0A0A0A] border border-white/10 rounded-2xl flex items-center justify-center relative">
           <Bot size={40} className="text-green-400" />
           <div className="absolute -top-4 -right-8 bg-white text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              Olá! 👋
           </div>
        </div>
     </div>
  </div>
);

export const Features = () => {
  return (
    <section id="services" className="w-full relative z-10">
      <div className="pb-32 px-6 max-w-7xl mx-auto pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <FeatureCard 
            title="Automação com n8n" 
            description="Conecte seus aplicativos e automatize fluxos de trabalho complexos sem código, economizando horas de trabalho manual."
            delay={0.1}
          >
            <AutomationVisual />
          </FeatureCard>

          <FeatureCard 
            title="Integração de IA" 
            description="Implemente soluções com ChatGPT, Claude e outros modelos de IA para análise de dados, atendimento e geração de conteúdo."
            delay={0.2}
          >
            <IAVisual />
          </FeatureCard>

          <FeatureCard 
            title="Business Intelligence" 
            description="Dashboards personalizados e análises avançadas para decisões baseadas em dados em tempo real."
            delay={0.3}
          >
            <BIVisual />
          </FeatureCard>

          <FeatureCard 
            title="Chatbots Inteligentes" 
            description="Bots conversacionais com IA para atendimento 24/7, qualificação de leads e suporte automatizado."
            delay={0.4}
          >
            <ChatbotVisual />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

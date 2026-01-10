import React from 'react';
import { motion } from 'framer-motion';
import { 
  Workflow, 
  Zap, 
  Bot, 
  Brain, 
  FileSpreadsheet, 
  Database, 
  Slack, 
  MessageCircle,
  LucideIcon
} from 'lucide-react';

const TechCard = ({ name, description, icon: Icon, delay }: { name: string; description: string; icon: LucideIcon; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
  >
    <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center border border-white/10 shrink-0">
      <Icon size={24} className="text-white" />
    </div>
    <div>
      <h4 className="text-white font-bold text-sm">{name}</h4>
      <p className="text-gray-400 text-xs">{description}</p>
    </div>
  </motion.div>
);

export const TechStack = () => {
  const tools = [
    // Automation
    { name: "n8n", description: "Motor principal", icon: Workflow },
    { name: "Make", description: "Automações visuais", icon: Zap },
    { name: "Zapier", description: "Integrações rápidas", icon: Zap },
    // AI
    { name: "OpenAI", description: "GPT-4 & Assistants", icon: Bot },
    { name: "Claude", description: "Análises profundas", icon: Brain },
    { name: "Google AI", description: "Gemini & Cloud AI", icon: Brain },
    // Data
    { name: "Google Sheets", description: "Banco de dados ágil", icon: FileSpreadsheet },
    { name: "Airtable", description: "Databases relacionais", icon: Database },
    { name: "Metabase", description: "Dashboards inteligentes", icon: Database },
    // Comms
    { name: "Slack", description: "Notificações e bots", icon: Slack },
    { name: "WhatsApp", description: "Atendimento auto", icon: MessageCircle },
    { name: "Telegram", description: "Bots e alerts", icon: MessageCircle },
  ];

  return (
    <section className="w-full py-24 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Tecnologias & Ferramentas
          </h2>
          <p className="text-gray-400">Stack moderna para automações robustas e escaláveis</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <TechCard key={i} {...tool} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
};

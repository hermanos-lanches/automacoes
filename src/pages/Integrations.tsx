import { motion } from "framer-motion";
import { CTA } from "../components/CTA";
import { GradientBorder } from "../components/ui/GradientBorder";
import { RollingText } from "../components/ui/RollingText";
import { 
  Workflow, 
  Bot, 
  FileSpreadsheet, 
  Slack, 
  Zap, 
  Terminal,
  Database,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

// --- INTEGRATION DATA ---

const integrations = [
  {
    id: "n8n",
    name: "n8n",
    description:
      "Plataforma principal para automação de workflows complexos e integrações poderosas.",
    icon: Workflow,
    color: "hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]",
    iconColor: "text-orange-500",
  },
  {
    id: "openai",
    name: "OpenAI",
    description:
      "GPT-4 e ChatGPT para processamento avançado de linguagem natural e geração de conteúdo.",
    icon: Bot,
    color: "hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]",
    iconColor: "text-green-500",
  },
  {
    id: "sheets",
    name: "Google Sheets/Drive",
    description:
      "Automação e sincronização de dados em tempo real para gestão eficiente de informações.",
    icon: FileSpreadsheet,
    color: "hover:border-green-600/50 hover:shadow-[0_0_30px_rgba(22,163,74,0.1)]",
    iconColor: "text-green-600",
  },
  {
    id: "slack",
    name: "Slack/Discord",
    description:
      "Integrações para comunicação e notificações automáticas em tempo real para sua equipe.",
    icon: Slack,
    color: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]",
    iconColor: "text-purple-500",
  },
  {
    id: "make",
    name: "Make/Zapier",
    description:
      "Alternativas poderosas para integrações rápidas e eficientes entre milhares de apps.",
    icon: Zap,
    color: "hover:border-purple-600/50 hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]",
    iconColor: "text-purple-600",
  },
  {
    id: "api",
    name: "APIs Customizadas",
    description:
      "Desenvolvimento de integrações personalizadas via REST/GraphQL para suas necessidades específicas.",
    icon: Terminal,
    color: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
    iconColor: "text-blue-500",
  },
];

// --- HERO VISUAL ---

const HeroVisual = () => (
  <div className="relative w-full h-[400px] flex items-center justify-center">
    {/* Background Glow */}
    <div className="absolute w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full" />

    {/* Orbital Rings */}
    <div className="absolute w-[320px] h-[320px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
    <div className="absolute w-[220px] h-[220px] border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

    {/* Center Node */}
    <div className="relative z-10 w-24 h-24 rounded-full bg-black border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.2)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20" />
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg" />
    </div>

    {/* Floating Icons */}
    <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6">
        <div className="w-12 h-12 bg-[#0A0A0A] border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
          <Slack size={20} className="text-[#E01E5A]" />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6">
        <div className="w-12 h-12 bg-[#0A0A0A] border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
          <Database size={20} className="text-[#FF7A59]" />
        </div>
      </div>
      <div className="absolute left-0 top-1/2 -translate-x-6 -translate-y-1/2">
        <div className="w-12 h-12 bg-[#0A0A0A] border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
          <MessageSquare size={20} className="text-[#25D366]" />
        </div>
      </div>
      <div className="absolute right-0 top-1/2 translate-x-6 -translate-y-1/2">
        <div className="w-12 h-12 bg-[#0A0A0A] border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
          <Zap size={20} className="text-[#FF4F00]" />
        </div>
      </div>
    </div>
  </div>
);

export const Integrations = () => {
  return (
    <div className="relative w-full min-h-screen pt-32 bg-[#050505] overflow-x-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-orange-600/10 blur-[120px] rounded-full opacity-40" />
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-600/10 blur-[120px] rounded-full opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-24">
        {/* --- HERO SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block border border-white/20 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8"
            >
              <span className="text-[10px] md:text-xs font-bold tracking-widest text-white uppercase">
                FERRAMENTAS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-6 leading-[1.1]"
            >
              Conecte Seu Negócio <br />
              às Melhores <br />
              Ferramentas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 max-w-xl leading-relaxed mb-8"
            >
              Integro n8n, OpenAI, Google Workspace e muito mais para criar um ecossistema digital eficiente e automatizado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <GradientBorder
                gradient="from-orange-500 via-red-500 to-orange-600"
                containerClassName="rounded-full p-[1px]"
              >
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors group"
                >
                  <RollingText text="Agendar Consulta" />
                </Link>
              </GradientBorder>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* --- INTEGRATIONS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 group ${item.color}`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <item.icon className={`w-8 h-8 ${item.iconColor}`} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CTA />
    </div>
  );
};

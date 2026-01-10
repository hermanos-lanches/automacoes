import { motion } from "framer-motion";
import {
  Workflow,
  Bot,
  FileSpreadsheet,
  Slack,
  Zap,
  Code,
  HardDrive,
  MessageCircle,
  Database,
  Server,
  Webhook,
  Cpu,
  Globe,
  Layout,
} from "lucide-react";
import { cn } from "../lib/utils";

// --- Icon Data ---

// Row 1: Primary Automation Tools (n8n, OpenAI, Sheets, Slack, Make, APIs)
const iconsRow1 = [
  { icon: Workflow, color: "text-[#FF6D5A]", bg: "bg-[#FF6D5A]/10" }, // n8n Proxy
  { icon: Bot, color: "text-[#10A37F]", bg: "bg-[#10A37F]/10" }, // OpenAI Proxy
  { icon: FileSpreadsheet, color: "text-[#34A853]", bg: "bg-[#34A853]/10" }, // Google Sheets
  { icon: Slack, color: "text-[#E01E5A]", bg: "bg-[#E01E5A]/10" }, // Slack
  { icon: Zap, color: "text-[#6F42C1]", bg: "bg-[#6F42C1]/10" }, // Make/Zapier
  { icon: Code, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10" }, // Custom APIs
  { icon: Database, color: "text-[#FF7A59]", bg: "bg-[#FF7A59]/10" }, // Data
];

// Row 2: Secondary Tools & Infrastructure
const iconsRow2 = [
  { icon: HardDrive, color: "text-[#FFD04B]", bg: "bg-[#FFD04B]/10" }, // Google Drive
  { icon: MessageCircle, color: "text-[#5865F2]", bg: "bg-[#5865F2]/10" }, // Discord
  { icon: Webhook, color: "text-[#F24E1E]", bg: "bg-[#F24E1E]/10" }, // Webhooks
  { icon: Server, color: "text-[#00A1E0]", bg: "bg-[#00A1E0]/10" }, // Infrastructure
  { icon: Cpu, color: "text-[#EA4335]", bg: "bg-[#EA4335]/10" }, // Processing
  { icon: Globe, color: "text-[#7F56D9]", bg: "bg-[#7F56D9]/10" }, // Web
  { icon: Layout, color: "text-[#00C5F7]", bg: "bg-[#00C5F7]/10" }, // Dashboards
];

const IconCard = ({
  icon: Icon,
  color,
  bg,
}: {
  icon: any;
  color: string;
  bg: string;
}) => (
  <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center hover:border-white/20 hover:bg-white/5 transition-all duration-300 group">
    <div
      className={cn(
        "w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
        bg
      )}
    >
      <Icon size={24} className={cn(color)} />
    </div>
  </div>
);

export const IntegrationsTicker = () => {
  return (
    <section className="relative w-full py-32 overflow-hidden flex flex-col items-center z-20">
      {/* --- BACKGROUND ORB --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        {/* Core Glow */}
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-r from-orange-500 to-blue-600 blur-[80px] opacity-20" />
        {/* Inner Ring (Simulating the planet edge) */}
        <div className="absolute inset-0 rounded-full border-[2px] border-white/5 opacity-20 blur-sm" />
        {/* Secondary Glow */}
        <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] bg-blue-500/30 blur-[60px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] bg-orange-500/30 blur-[60px] rounded-full" />
      </div>

      {/* --- HEADER --- */}
      <div className="relative z-10 flex flex-col items-center text-center mb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-[1px] rounded-full bg-gradient-to-r from-orange-500 to-blue-500 mb-6"
        >
          <div className="bg-black rounded-full px-5 py-1.5">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-white uppercase">
              Integrações Poderosas
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight"
        >
          Integre Perfeitamente <br />
          Cada Aplicativo
        </motion.h2>
      </div>

      {/* --- TICKER SECTION --- */}
      <div className="relative w-full z-10 flex flex-col gap-6 md:gap-8">
        {/* Fade Masks (25% on sides) */}
        <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Left Scroll */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-6 md:gap-8 animate-scroll min-w-full px-4">
            {[...iconsRow1, ...iconsRow1, ...iconsRow1, ...iconsRow1].map((item, i) => (
              <IconCard key={`r1-${i}`} {...item} />
            ))}
          </div>
        </div>

        {/* Row 2: Right Scroll */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-6 md:gap-8 animate-scroll-reverse min-w-full px-4">
            {[...iconsRow2, ...iconsRow2, ...iconsRow2, ...iconsRow2].map((item, i) => (
              <IconCard key={`r2-${i}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

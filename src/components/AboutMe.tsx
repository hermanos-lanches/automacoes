import React from "react";
import { motion } from "framer-motion";
import { Zap, Clock, Users } from "lucide-react";

const StatBadge = ({ icon: Icon, value, label }: { icon: any; value: string; label: string }) => (
  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/10 transition-colors">
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-orange-500/20 flex items-center justify-center">
      <Icon size={20} className="text-white" />
    </div>
    <div>
      <div className="text-lg font-bold text-white">{value}</div>
      <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
    </div>
  </div>
);

export const AboutMe = () => {
  return (
    <section id="about" className="relative w-full py-24 px-6 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Adjusted aspect ratio for portrait photo and removed grayscale */}
            <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl max-w-md mx-auto lg:max-w-full">
              <img 
                src="/eduardo-andreazza.png" 
                alt="Eduardo Andreazza" 
                className="w-full h-auto object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold text-white mb-1">Eduardo Andreazza</h3>
                <p className="text-blue-400 font-medium">Especialista em Automação & IA</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full z-0" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/20 blur-[60px] rounded-full z-0" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-6">
                <span className="text-[10px] md:text-xs font-bold tracking-wider text-white uppercase">
                  Quem Sou
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Transformando Processos <br />
                em Resultados
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Sou especialista em automação de processos e inteligência artificial com foco em resultados práticos. Ajudo empresas a economizar tempo, reduzir custos e escalar operações através de automações inteligentes com n8n, integração de APIs e soluções customizadas de IA.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StatBadge icon={Zap} value="+50" label="Automações" />
              <StatBadge icon={Clock} value="2.000+" label="Horas Economizadas" />
              <StatBadge icon={Users} value="50+" label="Clientes Atendidos" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

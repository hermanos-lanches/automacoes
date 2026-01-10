import { GradientBorder } from "./ui/GradientBorder";
import { RollingText } from "./ui/RollingText";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative w-full min-h-[95vh] overflow-hidden flex flex-col items-center justify-center pt-24 pb-48">
      {/* Background Video/Effect */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        >
          <source
            src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/converge-ai/bgVid.webm"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-start justify-center h-full mt-10 md:mt-0">
        {/* Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-md px-4 py-1.5 shadow-[0_0_20px_rgba(77,121,255,0.2)]">
            <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              Automação Inteligente para Transformar Seu Negócio
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-5xl drop-shadow-2xl"
        >
          Especialista em <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500">
            n8n, IA e BI
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-light"
        >
          Elimino tarefas repetitivas, integro sistemas e implemento soluções inteligentes para você focar no que realmente importa: crescer.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start gap-4 mb-20"
        >
          <GradientBorder
            gradient="from-orange-500 via-red-500 to-orange-600"
            containerClassName="rounded-full p-[1px]"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3.5 bg-black text-white font-medium rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2 group"
            >
              <RollingText text="Agendar Consulta Gratuita" />
            </button>
          </GradientBorder>

          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-3.5 text-white font-medium border border-white/20 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm group"
          >
            <RollingText text="Ver Serviços" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

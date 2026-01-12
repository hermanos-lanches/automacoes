import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { IconMarquee } from './ui/IconMarquee';

export const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-32 relative z-20 bg-[#09090b] overflow-hidden">
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Animated Icon Marquee (Absolute Background) */}
      <IconMarquee />

      {/* 2. Radial Gradient Highlights (Blue/Orange) - Subtle ambient light */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none z-10" />

      {/* --- CONTENT --- */}
      <div className="max-w-6xl mx-auto relative z-30 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-4 py-1.5 mb-8"
            >
              <span className="text-[10px] md:text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400 uppercase">
                Contato
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
              Pronto para <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                Automatizar?
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-lg font-light leading-relaxed mb-10">
              Transforme processos manuais em máquinas de eficiência. Agende uma consulta gratuita e descubra o potencial oculto no seu negócio.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-gray-300">Disponibilidade para novos projetos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-300">Resposta em até 24 horas</span>
              </div>
            </div>
          </div>

          {/* Right Side: The Glass Card Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-orange-500/30 rounded-[2.5rem] blur-2xl opacity-40" />
            
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

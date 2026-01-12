import React from 'react';
import { motion } from 'framer-motion';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { ContactForm } from '../components/ContactForm';

export const Contact = () => {
  return (
    <div className="relative w-full min-h-screen pt-32 bg-[#050505] overflow-x-hidden">
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-orange-600/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-600/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-24">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6"
          >
            Vamos Conversar <br /> Sobre Seu Projeto
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Automatize processos, economize tempo e aumente resultados com soluções personalizadas.
          </motion.p>
        </div>

        {/* --- CONTACT FORM --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <ContactForm />
        </motion.div>
      </div>

      {/* --- FAQ SECTION --- */}
      <FAQ />

      {/* --- CTA SECTION --- */}
      <CTA />

    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';

export const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-32 px-6 relative z-20 bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-900/10 blur-[150px] rounded-full opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Pronto para Automatizar <br /> e Escalar?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Agende uma consulta gratuita de 30 minutos. Vamos analisar seus processos e encontrar oportunidades de automação.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

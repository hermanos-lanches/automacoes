import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { RollingText } from "./ui/RollingText";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Que tipos de processos podem ser automatizados?",
    answer:
      "Praticamente qualquer tarefa digital repetitiva. Desde gestão de leads, processamento de pedidos, relatórios financeiros, até atendimento ao cliente e sincronização de dados entre apps.",
  },
  {
    question: "Preciso saber programar para usar suas soluções?",
    answer:
      "Não. Eu configuro e entrego tudo pronto. Além disso, utilizo plataformas low-code/no-code como n8n que facilitam a manutenção e visualização dos fluxos.",
  },
  {
    question: "Como a IA pode ajudar meu negócio especificamente?",
    answer:
      "A IA pode analisar grandes volumes de dados para insights, automatizar o atendimento com chatbots inteligentes, gerar conteúdo e personalizar a experiência do seu cliente em escala.",
  },
  {
    question: "Quanto tempo leva para implementar uma automação?",
    answer:
      "Depende da complexidade. Automações simples podem estar rodando em dias, enquanto sistemas complexos de BI e IA podem levar algumas semanas para calibração perfeita.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full py-24 px-6 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column: Header */}
        <div className="flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-8"
          >
            Perguntas <br />
            Frequentes
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-white">
                Tem mais dúvidas?
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Entre em contacto! Estou à disposição para esclarecer como posso ajudar o seu negócio.
              </p>
            </div>

            <Link to="/contact">
              <button
                className="w-fit px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors group"
                name="contact-us"
              >
                <RollingText text="Fale Connosco" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Accordion */}
        <div className="flex flex-col gap-4 justify-center">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#0A0A0A] to-[#050505] border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                name={`faq-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-lg md:text-xl font-medium text-white pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 text-gray-400">
                  {openIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

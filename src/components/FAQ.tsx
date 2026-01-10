import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo leva para criar uma automação?",
    answer: "Depende da complexidade. Automações simples levam 3-5 dias, projetos complexos de 2-4 semanas. Na consulta gratuita eu te dou um prazo preciso."
  },
  {
    question: "Preciso ter conhecimento técnico?",
    answer: "Não! Crio soluções prontas para usar. Treino sua equipe e forneço documentação completa para que qualquer pessoa consiga operar."
  },
  {
    question: "Quais ferramentas você integra?",
    answer: "Praticamente qualquer ferramenta com API: CRMs, planilhas, e-mail, WhatsApp, ERPs, sistemas de agendamento, bancos de dados e muito mais."
  },
  {
    question: "E se minha ferramenta não tiver API?",
    answer: "Uso web scraping, RPA e outras técnicas avançadas para integrar até sistemas legados que não possuem API."
  },
  {
    question: "Qual o investimento necessário?",
    answer: "Varia conforme escopo e complexidade. Agende uma consulta gratuita para receber um orçamento personalizado sem compromisso."
  },
  {
    question: "Oferece suporte pós-implementação?",
    answer: "Sim! Todos os projetos incluem período de garantia e ajustes. Também ofereço planos de suporte mensal para manutenção contínua."
  },
  {
    question: "Posso modificar as automações depois?",
    answer: "Absolutamente! Todas as automações são documentadas e você pode solicitar ajustes a qualquer momento. Flexibilidade total."
  },
  {
    question: "Atende empresas de que porte?",
    answer: "De profissionais autônomos a empresas médias. Se você tem processos repetitivos e quer crescer, posso ajudar!"
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full py-24 px-6 relative z-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-lg font-medium text-white pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 text-gray-400">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
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

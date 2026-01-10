import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ quote, author, role, company, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col h-full relative group hover:border-white/20 transition-colors"
  >
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
      <Quote size={20} fill="currentColor" />
    </div>
    
    <p className="text-gray-300 text-lg leading-relaxed mb-8 italic pt-4">
      "{quote}"
    </p>

    <div className="mt-auto border-t border-white/5 pt-6">
      <div className="font-bold text-white">{author}</div>
      <div className="text-sm text-gray-500">{role}, {company}</div>
    </div>
  </motion.div>
);

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "O Eduardo automatizou todo nosso processo de agendamento. Antes gastávamos 10 horas semanais confirmando consultas manualmente. Hoje tudo roda sozinho pelo WhatsApp!",
      author: "Dra. Mariana Silva",
      role: "Diretora",
      company: "Clínica Estética Bella Vida"
    },
    {
      quote: "A automação do controle de prazos processuais foi um divisor de águas. Nunca mais perdemos um prazo e minha equipe ficou livre para focar no que realmente importa: os clientes.",
      author: "Dr. Roberto Mendes",
      role: "Sócio",
      company: "Mendes & Associados Advocacia"
    },
    {
      quote: "Nosso e-commerce triplicou de tamanho mas a equipe continuou a mesma. A automação de pedidos e estoque que o Eduardo criou foi essencial para escalarmos.",
      author: "Carlos Eduardo",
      role: "CEO",
      company: "Loja VirtualTech"
    },
    {
      quote: "Os relatórios para nossos clientes eram um pesadelo. Levávamos dias para compilar. Agora são gerados automaticamente em minutos. Nossos clientes amam!",
      author: "Juliana Costa",
      role: "Diretora",
      company: "Agência Digital Impulse"
    }
  ];

  const metrics = [
    { value: "80%", label: "Redução em tarefas manuais" },
    { value: "40h", label: "Economizadas por mês/cliente" },
    { value: "400%", label: "ROI médio em 6 meses" },
    { value: "96%", label: "Satisfação dos clientes" },
  ];

  return (
    <section className="w-full py-32 px-6 relative z-20 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Resultados Reais de <br /> Clientes Reais
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} delay={i * 0.1} />
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{m.value}</div>
              <div className="text-sm text-gray-400">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

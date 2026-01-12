import React, { useState } from 'react';
import { Calendar, CheckCircle2, AlertCircle, Loader2, Lock, User, Mail, Phone, Building, Rocket } from 'lucide-react';
import { GradientBorder } from './ui/GradientBorder';
import { RollingText } from './ui/RollingText';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const N8N_WEBHOOK_URL = "https://webhook.chefdeplantao.com.br/webhook/landingpage";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nome: '', email: '', telefone: '', empresa: '', mensagem: '' });
      } else {
        console.error("Erro no servidor:", response.statusText);
        setStatus('error');
      }
    } catch (error) {
      console.error("Erro na conexão:", error);
      setStatus('error');
    }
  };

  // --- STYLES ---
  const inputWrapperClasses = "relative group";
  const iconClasses = "absolute left-4 top-3.5 text-gray-500 group-focus-within:text-orange-500 transition-colors duration-300";
  // Updated input classes for high contrast on glass background
  const inputClasses = "w-full bg-[#050505]/60 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:border-orange-500/50 focus:bg-black/80 focus:ring-1 focus:ring-orange-500/20 outline-none transition-all placeholder:text-gray-600 font-light shadow-inner";
  const labelClasses = "block text-xs font-bold text-gray-300 mb-2 ml-1 uppercase tracking-wider";

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl h-full min-h-[500px]">
        <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8 animate-pulse border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
          <CheckCircle2 size={48} className="text-green-500" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Mensagem Recebida!</h3>
        <p className="text-gray-400 max-w-md mx-auto mb-10 text-lg leading-relaxed">
          Obrigado pelo contato. Nossa equipe analisará suas informações e retornará em até 24 horas.
        </p>
        <button 
            onClick={() => setStatus('idle')}
            className="px-8 py-3 rounded-full border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all hover:border-white/20"
        >
            Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
      {/* Header inside the card */}
      <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center shadow-lg">
            <Rocket className="w-6 h-6 text-white" />
        </div>
        <div>
            <h3 className="text-xl font-bold text-white">Vamos começar?</h3>
            <p className="text-sm text-gray-400">Preencha os dados abaixo para agendar.</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Nome */}
          <div className={inputWrapperClasses}>
            <label htmlFor="nome" className={labelClasses}>Nome Completo *</label>
            <div className="relative">
              <User size={18} className={iconClasses} />
              <input 
                type="text" 
                name="nome"
                id="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="Seu nome"
              />
            </div>
          </div>

          {/* Email */}
          <div className={inputWrapperClasses}>
            <label htmlFor="email" className={labelClasses}>Email Empresarial *</label>
            <div className="relative">
              <Mail size={18} className={iconClasses} />
              <input 
                type="email" 
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="seu@email.com"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Telefone */}
          <div className={inputWrapperClasses}>
            <label htmlFor="telefone" className={labelClasses}>Telefone/WhatsApp *</label>
            <div className="relative">
              <Phone size={18} className={iconClasses} />
              <input 
                type="tel" 
                name="telefone"
                id="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>

          {/* Empresa */}
          <div className={inputWrapperClasses}>
            <label htmlFor="empresa" className={labelClasses}>Empresa/Segmento</label>
            <div className="relative">
              <Building size={18} className={iconClasses} />
              <input 
                type="text" 
                name="empresa"
                id="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Nome da sua empresa"
              />
            </div>
          </div>
        </div>

        {/* Mensagem */}
        <div className={inputWrapperClasses}>
          <label htmlFor="mensagem" className={labelClasses}>Mensagem *</label>
          <textarea 
            name="mensagem"
            id="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Descreva brevemente o que você quer automatizar"
            rows={4}
            required
            className={`${inputClasses} pl-4 resize-none`}
          />
        </div>

        {/* Error State */}
        {status === 'error' && (
            <div className="flex items-center gap-3 text-red-300 text-sm bg-red-500/10 p-4 rounded-xl border border-red-500/20 animate-in fade-in slide-in-from-top-2">
                <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
                <span>Erro ao enviar mensagem. Por favor, verifique sua conexão e tente novamente.</span>
            </div>
        )}

        {/* Submit Button */}
        <div className="pt-4">
          <GradientBorder 
            gradient="from-orange-500 via-red-500 to-orange-600"
            containerClassName="w-full rounded-xl p-[1px] shadow-lg shadow-orange-500/20"
            className="rounded-xl"
          >
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-[#0F0F0F] text-white font-bold text-lg rounded-xl hover:bg-black transition-all relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative z-10 flex items-center justify-center gap-3">
                {status === 'loading' ? (
                    <>
                        <Loader2 size={20} className="animate-spin" />
                        Enviando...
                    </>
                ) : (
                  <>
                    <Calendar size={20} className="text-orange-500" />
                    <RollingText text="Agendar Consulta Gratuita" />
                  </>
                )}
              </span>
            </button>
          </GradientBorder>
        </div>

        {/* Footer Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 border-t border-white/5 mt-2">
            <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wide">
                <Lock size={12} className="text-blue-500" />
                Dados Seguros
            </div>
            <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wide">
                <Rocket size={12} className="text-orange-500" />
                Automação Total
            </div>
        </div>
      </form>
    </div>
  );
};

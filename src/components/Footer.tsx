import React from "react";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FooterLink = ({
  href,
  to,
  children,
}: {
  href?: string;
  to?: string;
  children: React.ReactNode;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (to) {
    return (
      <Link
        to={to}
        className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 duration-300 block"
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 duration-300 block cursor-pointer"
    >
      {children}
    </a>
  );
};

const SocialIcon = ({ icon: Icon, href }: { icon: any, href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
  >
    <Icon size={16} />
  </a>
);

export const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-6 pb-8 pt-0 relative z-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto bg-[#0A0A0A] border border-white/10 rounded-[32px] overflow-hidden">
        <div className="p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold text-xl tracking-tight">
                Eduardo Andreazza
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Automação e IA para negócios que querem crescer. Transformo processos manuais em workflows inteligentes.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Navegação</h4>
            <FooterLink href="#home">Início</FooterLink>
            <FooterLink href="#about">Sobre</FooterLink>
            <FooterLink href="#services">Serviços</FooterLink>
            <FooterLink href="#how-it-works">Como Funciona</FooterLink>
            <FooterLink href="#use-cases">Casos de Uso</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Serviços</h4>
            <FooterLink href="#services">Automação n8n</FooterLink>
            <FooterLink href="#services">Chatbots IA</FooterLink>
            <FooterLink href="#services">Business Intelligence</FooterLink>
            <FooterLink href="#services">Integrações API</FooterLink>
            <FooterLink href="#services">Consultoria</FooterLink>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Contato</h4>
            <a href="mailto:eduandreazza@me.com" className="text-gray-400 hover:text-white text-sm">eduandreazza@me.com</a>
            <a href="https://wa.me/5521989829944" className="text-gray-400 hover:text-white text-sm">+55 21 98982-9944</a>
            <div className="flex items-center gap-4 mt-2">
              <SocialIcon icon={Linkedin} href="https://www.linkedin.com/in/eduandreazza/" />
              <SocialIcon icon={Instagram} href="https://www.instagram.com/eduandreazza/" />
              <SocialIcon icon={MessageCircle} href="https://wa.me/5521989829944" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 p-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6 bg-black/20">
          <p className="text-gray-500 text-sm">
            © 2026 Eduardo Andreazza. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <FooterLink to="/privacy-policy">Política de Privacidade</FooterLink>
            <FooterLink to="/terms-conditions">Termos de Uso</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

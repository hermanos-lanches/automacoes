import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GradientBorder } from "./ui/GradientBorder";
import { RollingText } from "./ui/RollingText";
import { Menu, X, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavLink = ({
  children,
  to,
  onClick,
}: {
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();

    if (to.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(to);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(to);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(to);
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
    >
      {children}
    </a>
  );
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-black/50 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 shadow-xl">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            closeMobileMenu();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-[0_0_15px_rgba(77,121,255,0.6)] flex items-center justify-center bg-gradient-to-br from-blue-600 to-orange-500">
             <Cpu size={18} className="text-white relative z-10" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight hidden sm:block">
            Eduardo Andreazza
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink to="#home">Início</NavLink>
          <NavLink to="#about">Sobre</NavLink>
          <NavLink to="#services">Serviços</NavLink>
          <NavLink to="#how-it-works">Como Funciona</NavLink>
          <NavLink to="#use-cases">Casos de Uso</NavLink>
          <NavLink to="#faq">FAQ</NavLink>
          
          {/* Desktop CTA */}
          <GradientBorder
            gradient="from-orange-500 via-red-500 to-orange-600"
            containerClassName="rounded-full p-[1px]"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center px-6 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors group shadow-md"
            >
              <RollingText text="Consulta Gratuita" />
            </a>
          </GradientBorder>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 pt-20 pb-8 z-40"
          >
            <NavLink to="#home" onClick={closeMobileMenu}>Início</NavLink>
            <NavLink to="#about" onClick={closeMobileMenu}>Sobre</NavLink>
            <NavLink to="#services" onClick={closeMobileMenu}>Serviços</NavLink>
            <NavLink to="#how-it-works" onClick={closeMobileMenu}>Como Funciona</NavLink>
            <NavLink to="#use-cases" onClick={closeMobileMenu}>Casos de Uso</NavLink>
            <NavLink to="#faq" onClick={closeMobileMenu}>FAQ</NavLink>
            
            {/* Mobile CTA */}
            <GradientBorder
              gradient="from-orange-500 via-red-500 to-orange-600"
              containerClassName="rounded-full p-[1px]"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center px-6 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors group shadow-md"
              >
                <RollingText text="Consulta Gratuita" />
              </a>
            </GradientBorder>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

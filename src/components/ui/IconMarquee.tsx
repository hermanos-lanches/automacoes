import React from 'react';
import { 
  Star, Zap, Shield, Cloud, Lock, Smartphone, 
  Mail, MessageCircle, Globe, Cpu, Code, 
  Database, Server, Wifi, Activity, Box
} from 'lucide-react';
import { cn } from '../../lib/utils';

const icons = [
  Star, Zap, Shield, Cloud, Lock, Smartphone,
  Mail, MessageCircle, Globe, Cpu, Code,
  Database, Server, Wifi, Activity, Box
];

const Column = ({ 
  icons, 
  reverse = false, 
  durationClass = "animate-scroll-y" 
}: { 
  icons: React.ElementType[], 
  reverse?: boolean,
  durationClass?: string 
}) => {
  return (
    <div className={cn(
      "flex flex-col gap-8 relative",
      reverse ? "animate-scroll-y-reverse" : "animate-scroll-y"
    )}>
      {/* Original Set */}
      {icons.map((Icon, i) => (
        <div key={`orig-${i}`} className="w-20 h-20 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center backdrop-blur-[1px]">
          <Icon size={28} className="text-white opacity-20" />
        </div>
      ))}
      {/* Duplicate Set for Seamless Loop */}
      {icons.map((Icon, i) => (
        <div key={`dup-${i}`} className="w-20 h-20 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center backdrop-blur-[1px]">
          <Icon size={28} className="text-white opacity-20" />
        </div>
      ))}
    </div>
  );
};

export const IconMarquee = () => {
  // Split icons into columns for visual variety
  const col1 = icons.slice(0, 5);
  const col2 = icons.slice(5, 10);
  const col3 = icons.slice(10, 15);
  const col4 = icons.slice(0, 5).reverse();
  const col5 = icons.slice(5, 10).reverse();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Stronger Gradient Overlay for Fade Effect (Top/Bottom) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-transparent to-[#09090b] z-20" />
      
      {/* Horizontal Fade to blend edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-transparent to-[#09090b] z-20" />

      {/* Columns Container - Rotated and Scaled for dynamic effect */}
      <div className="flex justify-center gap-8 opacity-20 rotate-[-6deg] scale-125 origin-center h-[150%] -mt-32">
        <Column icons={col1} durationClass="duration-[35s]" />
        <Column icons={col2} reverse durationClass="duration-[45s]" />
        <Column icons={col3} durationClass="duration-[40s]" />
        <Column icons={col4} reverse durationClass="duration-[50s]" />
        {/* Extra columns for wider screens */}
        <div className="hidden lg:flex flex-col gap-8">
           <Column icons={col5} durationClass="duration-[55s]" />
        </div>
      </div>
    </div>
  );
};

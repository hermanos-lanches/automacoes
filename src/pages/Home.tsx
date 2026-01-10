import React from 'react';
import { Hero } from '../components/Hero';
import { AboutMe } from '../components/AboutMe';
import { Services } from '../components/Services';
import { UseCases } from '../components/UseCases';
import { TechStack } from '../components/TechStack';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { ContactSection } from '../components/ContactSection';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { FloatingWhatsApp } from '../components/ui/FloatingWhatsApp';
import { ScrollToTop } from '../components/ui/ScrollToTop';

export const Home = () => {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <AboutMe />
      <Services />
      <UseCases />
      <TechStack />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <ContactSection />
      
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
};

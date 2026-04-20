// src/App.jsx
import React, { useEffect } from 'react';
import { GLOBAL_STYLES } from './styles';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import HdpeBand from './components/HdpeBand';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';

export default function App() {
  // Smooth scrolling for all anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      
      <Navbar />
      
      <Hero />
      <Stats />
      <Services />
      <HdpeBand />
      <WhyUs />
      <Process />
      <Gallery />
      <Contact />
      <Footer />

      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import useLenis from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import NoiseOverlay from './components/NoiseOverlay';
import './index.css';

export default function App() {
  // Activate Lenis luxury inertial smooth scrolling
  useLenis();

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll Progress Tracker for subtle top indicator
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#09090b] text-[#f4f4f6] min-h-screen selection:bg-[#c5a059]/20 selection:text-white relative">
      {/* Top Metallic Champagne Gold Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c5a059] via-[#d8b46e] to-[#c5a059] z-[110] pointer-events-none"
      />

      {/* Subtle Architectural Matte Noise Grain Overlay */}
      <NoiseOverlay />

      {/* Refined Minimal Desktop Cursor */}
      <CustomCursor />

      {/* Floating Header */}
      <Navbar scrolled={scrolled} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

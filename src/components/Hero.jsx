import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, MapPin, Mail, Github, Linkedin } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Slow luxury parallax
  const bgGlowY = useTransform(scrollY, [0, 800], [0, 160]);
  const heroContentY = useTransform(scrollY, [0, 600], [0, 50]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-[96vh] flex items-center pt-32 pb-20 overflow-hidden radial-ambient-light"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 grid-pattern-luxury pointer-events-none opacity-40" aria-hidden="true" />
      
      {/* Ambient Moving Gold Light Field */}
      <motion.div 
        style={{ y: bgGlowY }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-[#C7A86B]/[0.035] rounded-full blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />

      <motion.div 
        style={{ y: heroContentY }}
        className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full"
      >
        <div className="max-w-4xl">
          {/* Eyebrow with horizontal mask reveal */}
          <div className="overflow-hidden mb-8">
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="eyebrow-label">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A86B]" />
                <span>SOFTWARE ENGINEER · FULL-STACK · AI/ML</span>
              </div>
            </motion.div>
          </div>

          {/* Main H1: Line-by-line clip-path / mask reveal (64-80px desktop, 42-52px mobile) */}
          <h1 className="h1-hero mb-8">
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: '115%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="block text-ivory"
              >
                Engineering reliable software.
              </motion.span>
            </span>

            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: '115%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="block text-ivory/95"
              >
                Exploring intelligent systems.
              </motion.span>
            </span>
          </h1>

          {/* Thin Champagne-Gold Accent Line that Draws Itself Horizontally */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
            className="h-[1.5px] w-24 bg-gradient-to-r from-[#C7A86B] via-[#C7A86B]/80 to-transparent mb-8"
          />

          {/* Supporting Text with delayed blur-to-sharp transition */}
          <motion.p
            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="body-editorial max-w-2xl mb-11 text-base sm:text-lg"
          >
            Software Engineer at <span className="text-ivory font-medium">Fidelity Investments</span> with experience in enterprise application development using Python, Flask, Angular, TypeScript and PostgreSQL, with additional exposure to Machine Learning, Computer Vision and Generative AI.
          </motion.p>

          {/* Staggered CTAs with Magnetic Micro-Interaction */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <MagneticButton>
              <a href="#projects" className="btn-gold group">
                <span>Explore My Work</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a href="/SANAKYAN_RESUME.pdf" download className="btn-outline-luxury group">
                <Download size={14} className="text-silver group-hover:text-white transition-colors" />
                <span>Download Resume</span>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Location & Status Metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.35 }}
            className="flex flex-wrap items-center gap-6 pt-7 border-t border-white/[0.06] text-xs text-silver font-mono"
          >
            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-[#C7A86B]" />
              <span className="text-ivory">Chennai, India</span>
            </div>

            <span className="text-white/10 hidden sm:inline">•</span>

            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-silver">Open to Software Engineering &amp; AI-ML Opportunities</span>
            </div>

            <span className="text-white/10 hidden sm:inline">•</span>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/SanakyanS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-silver hover:text-white transition-colors"
              >
                <Github size={15} />
              </a>
              <a
                href="https://linkedin.com/in/sanakyan-s"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-silver hover:text-white transition-colors"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="mailto:sanakyan2004@gmail.com"
                aria-label="Send Email"
                className="text-silver hover:text-white transition-colors"
              >
                <Mail size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

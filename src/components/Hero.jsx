import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Mail, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-radial-subtle"
    >
      {/* Architectural subtle ambient background grid & lighting */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" aria-hidden="true" />
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#c5a059]/[0.035] rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="badge-editorial">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              <span>SOFTWARE ENGINEER · FULL-STACK · AI/ML</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-[#f5f5f7] leading-[1.12] tracking-[-0.03em] mb-7"
          >
            Engineering reliable software.{' '}
            <span className="gold-gradient-text block sm:inline">Exploring intelligent systems.</span>
          </motion.h1>

          {/* Subtle Decorative Architectural Accent Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1.5px] bg-[#c5a059]/60 mb-8"
          />

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mb-10"
          >
            Software Engineer at <span className="text-slate-100 font-medium">Fidelity Investments</span> specializing in enterprise full-stack development with Python, Flask, Angular, TypeScript, and PostgreSQL — complemented by practical experience in machine learning, computer vision, and generative AI systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a href="#projects" className="btn-luxury-primary group">
              <span>Explore My Work</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <a href="/SANAKYAN_RESUME.pdf" download className="btn-luxury-secondary group">
              <Download size={14} className="text-slate-400 group-hover:text-white transition-colors" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Location & Status Metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/[0.05] text-xs text-slate-500 font-mono"
          >
            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-[#c5a059]" />
              <span className="text-slate-400">Based in Chennai, India</span>
            </div>

            <span className="text-white/10 hidden sm:inline">•</span>

            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
              <span className="text-slate-400">Open to Software Engineering &amp; AI-ML Opportunities</span>
            </div>

            <span className="text-white/10 hidden sm:inline">•</span>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/SanakyanS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github size={15} />
              </a>
              <a
                href="https://linkedin.com/in/sanakyan-s"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="mailto:sanakyan2004@gmail.com"
                aria-label="Send Email"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

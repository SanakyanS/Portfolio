import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, MapPin, Mail, Github, Linkedin } from 'lucide-react';
import MagneticButton from './MagneticButton';

const HEADLINE_PART_1 = ["Engineering", "reliable", "software."];
const HEADLINE_PART_2 = ["Exploring", "intelligent", "systems."];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Very slow luxury parallax on background glow
  const bgGlowY = useTransform(scrollY, [0, 800], [0, 180]);
  const heroContentY = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-[94vh] flex items-center pt-28 pb-16 overflow-hidden bg-radial-subtle"
    >
      {/* Slow Parallax Background Glow */}
      <motion.div 
        style={{ y: bgGlowY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[380px] bg-[#c5a059]/[0.038] rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Architectural subtle ambient grid */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" aria-hidden="true" />

      <motion.div 
        style={{ y: heroContentY }}
        className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full"
      >
        <div className="max-w-4xl">
          {/* Eyebrow badge with blur-to-focus entrance */}
          <motion.div
            initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="badge-editorial">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse" />
              <span>SOFTWARE ENGINEER · FULL-STACK · AI/ML</span>
            </div>
          </motion.div>

          {/* Masked Editorial Headline (Word-by-word reveal from hidden mask) */}
          <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-[#f5f5f7] leading-[1.12] tracking-[-0.03em] mb-7">
            <span className="block overflow-hidden">
              {HEADLINE_PART_1.map((word, i) => (
                <span key={word} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
                  <motion.span
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.15 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>

            <span className="block overflow-hidden mt-1 sm:mt-2">
              {HEADLINE_PART_2.map((word, i) => (
                <span key={word} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
                  <motion.span
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.42 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block gold-gradient-text"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          {/* Smooth expanding architectural accent rule */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 88, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1.5px] bg-gradient-to-r from-[#c5a059] to-[#c5a059]/10 mb-8"
          />

          {/* Supporting Copy with subtle soft fade */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mb-10"
          >
            Software Engineer at <span className="text-slate-100 font-medium">Fidelity Investments</span> specializing in enterprise full-stack development using Python, Flask, Angular, TypeScript, and PostgreSQL — complemented by practical experience in machine learning, computer vision, and generative AI systems.
          </motion.p>

          {/* CTAs with Magnetic Micro-Interaction */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <MagneticButton>
              <a href="#projects" className="btn-luxury-primary group">
                <span>Explore My Work</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a href="/SANAKYAN_RESUME.pdf" download className="btn-luxury-secondary group">
                <Download size={14} className="text-slate-400 group-hover:text-white transition-colors" />
                <span>Download Resume</span>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Location & Status Metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.05 }}
            className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/[0.05] text-xs text-slate-500 font-mono"
          >
            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-[#c5a059]" />
              <span className="text-slate-400">Based in Chennai, India</span>
            </div>

            <span className="text-white/10 hidden sm:inline">•</span>

            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/90 animate-pulse" />
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
      </motion.div>
    </section>
  );
}

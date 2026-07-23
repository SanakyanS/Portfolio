import React from 'react';
import { soundFx } from '../utils/audio';
import { ArrowUp, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0c0a09] border-t border-[#c9a84c]/20 pt-20 pb-12 overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] spotlight-gold blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Main Footer Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left border-b border-white/10 pb-12">
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#14110f] border border-[#c9a84c] flex items-center justify-center text-[#c9a84c] font-serif font-bold text-xl">
                S
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold gold-gradient-text">
                SANAKYAN S
              </h2>
            </div>
            <p className="text-sm font-mono text-[#c9a84c] tracking-wider">
              JUNIOR SOFTWARE DEVELOPER // FRONTEND ENGINEER
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#fafaf9]">
              Let's Build Something Amazing
            </h3>
            <p className="text-xs font-mono text-[#b8b8b8]">
              Available for full-time roles, software engineering internships & innovative projects.
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFx.playHover()}
            data-cursor-hover
            data-cursor-text="TOP"
            className="p-4 rounded-2xl bg-[#14110f] border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0c0a09] transition-all shadow-[0_0_20px_rgba(201,168,76,0.2)] flex items-center space-x-2"
          >
            <ArrowUp className="w-5 h-5" />
            <span className="font-serif font-bold text-xs uppercase tracking-wider hidden sm:inline">Back to Top</span>
          </button>
        </div>

        {/* Links & Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left text-xs font-mono text-[#b8b8b8]">
          <div className="space-y-3">
            <span className="text-[#c9a84c] font-bold block uppercase tracking-widest text-[11px]">
              EXHIBITION NAVIGATION
            </span>
            <ul className="space-y-2">
              <li><a href="#foyer" className="hover:text-white transition-colors">✦ Hall I — Foyer</a></li>
              <li><a href="#dossier" className="hover:text-white transition-colors">✦ Hall II — Creator Dossier</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">✦ Hall III — Technology Archive</a></li>
              <li><a href="#timeline" className="hover:text-white transition-colors">✦ Hall IV — Career Timeline</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">✦ Hall V — Engineering Exhibits</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[#c9a84c] font-bold block uppercase tracking-widest text-[11px]">
              CORE ARCHITECTURES
            </span>
            <ul className="space-y-2">
              <li>React + Vite SPA Engine</li>
              <li>TailwindCSS Glass System</li>
              <li>Lenis Smooth Scroll</li>
              <li>Framer Motion & Web Audio API</li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[#c9a84c] font-bold block uppercase tracking-widest text-[11px]">
              LOCATION & CONTACT
            </span>
            <ul className="space-y-2">
              <li>Chennai, Tamil Nadu, India</li>
              <li>sanakyan2004@gmail.com</li>
              <li>+91 7604930970</li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[#c9a84c] font-bold block uppercase tracking-widest text-[11px]">
              CONNECT ARCHIVES
            </span>
            <div className="flex space-x-3 pt-1">
              <a
                href="https://www.linkedin.com/in/sanakyan-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#14110f] border border-white/10 text-white hover:text-[#c9a84c] hover:border-[#c9a84c] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/sanakyan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#14110f] border border-white/10 text-white hover:text-[#c9a84c] hover:border-[#c9a84c] transition-all"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="mailto:sanakyan2004@gmail.com"
                className="p-2.5 rounded-lg bg-[#14110f] border border-white/10 text-white hover:text-[#c9a84c] hover:border-[#c9a84c] transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights Note */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#b8b8b8]/60">
          <span>© {new Date().getFullYear()} SANAKYAN S. ALL RIGHTS RESERVED.</span>
          <span className="flex items-center space-x-1 mt-2 sm:mt-0">
            <span>CRAFTED WITH PRECISION & PASSION FOR ENGINEERING</span>
          </span>
        </div>

      </div>
    </footer>
  );
}

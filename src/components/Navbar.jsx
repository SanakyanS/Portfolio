import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ scrolled, activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0C]/85 backdrop-blur-xl border-b border-white/[0.06] py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between" aria-label="Main Navigation">
        {/* Brand Monogram */}
        <a 
          href="#home" 
          className="group flex items-center gap-2.5 text-sm font-medium"
          aria-label="Sanakyan S"
        >
          <div className="w-6 h-6 rounded-full border border-white/10 group-hover:border-[#C7A86B]/60 flex items-center justify-center transition-colors duration-300 bg-white/[0.02]">
            <span className="text-[10px] font-mono font-medium text-slate-300 group-hover:text-[#C7A86B] transition-colors">S</span>
          </div>
          <span className="text-ivory group-hover:text-white transition-colors tracking-wide font-medium text-xs sm:text-sm">
            SANAKYAN S
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`text-[13px] tracking-normal transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-silver hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-line-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C7A86B]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/SANAKYAN_RESUME.pdf"
            download="Sanakyan_S_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-[13px] font-medium text-[#F2F0EA] hover:text-white px-4 py-1.5 rounded-full border border-white/10 hover:border-[#C7A86B]/50 bg-white/[0.02] hover:bg-[#C7A86B]/[0.05] transition-all duration-200"
            aria-label="Download Resume"
          >
            <span>Resume</span>
            <ArrowUpRight size={13} className="text-silver group-hover:text-[#C7A86B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-silver hover:text-white hover:bg-white/[0.05] transition-colors"
          aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0B0B0C]/98 backdrop-blur-2xl border-b border-white/[0.06]"
          >
            <div className="px-6 py-6 space-y-3">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-silver hover:text-white py-2 border-b border-white/[0.04]"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="/SANAKYAN_RESUME.pdf"
                  download="Sanakyan_S_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full justify-center text-sm py-2.5"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

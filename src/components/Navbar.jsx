import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ scrolled, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/85 backdrop-blur-xl border-b border-white/[0.05] py-3.5 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between" aria-label="Main Navigation">
        {/* Monogram / Brand */}
        <a 
          href="#home" 
          className="group flex items-center gap-3 text-sm tracking-tight font-medium"
          aria-label="Sanakyan S — Home"
        >
          <div className="w-7 h-7 rounded-full border border-white/10 group-hover:border-[#c5a059]/60 flex items-center justify-center transition-colors duration-300 bg-white/[0.02]">
            <span className="text-[11px] font-mono font-semibold text-slate-300 group-hover:text-[#c5a059] transition-colors">S</span>
          </div>
          <span className="text-slate-200 group-hover:text-white transition-colors tracking-wide font-medium">
            SANAKYAN S
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`text-[13px] tracking-wide transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c5a059]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Resume Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/SANAKYAN_RESUME.pdf"
            download
            className="group flex items-center gap-1.5 text-[13px] font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full border border-white/10 hover:border-[#c5a059]/40 bg-white/[0.02] hover:bg-[#c5a059]/[0.04] transition-all duration-200"
            aria-label="Download Resume"
          >
            <span>Resume</span>
            <ArrowUpRight size={13} className="text-slate-500 group-hover:text-[#c5a059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#09090b]/98 backdrop-blur-2xl border-b border-white/[0.06]"
          >
            <div className="px-6 py-6 space-y-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/[0.04]"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="/SANAKYAN_RESUME.pdf"
                  download
                  className="btn-luxury-primary w-full justify-center text-sm py-2.5"
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

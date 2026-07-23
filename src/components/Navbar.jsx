import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Compass, Award, FolderKanban, Terminal, History, Mail } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function Navbar({ activeSection, isAudioOn, setIsAudioOn }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const state = soundFx.toggleSound();
    setIsAudioOn(state);
    if (state) soundFx.playClick();
  };

  const navLinks = [
    { name: 'FOYER', href: '#foyer', icon: Compass },
    { name: 'DOSSIER', href: '#dossier', icon: Terminal },
    { name: 'ARCHIVE', href: '#skills', icon: FolderKanban },
    { name: 'TIMELINE', href: '#timeline', icon: History },
    { name: 'EXHIBITS', href: '#projects', icon: FolderKanban },
    { name: 'VERIFIED', href: '#certifications', icon: Award },
    { name: 'LEDGER', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    soundFx.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-[#0c0a09]/85 backdrop-blur-xl border-b border-[#c9a84c]/15 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#foyer" 
          onClick={(e) => handleNavClick(e, '#foyer')}
          onMouseEnter={() => soundFx.playHover()}
          className="group flex items-center space-x-3 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-[#14110f] border border-[#c9a84c]/40 flex items-center justify-center group-hover:border-[#c9a84c] group-hover:shadow-[0_0_15px_rgba(201,168,76,0.3)] transition-all duration-300">
            <span className="font-serif text-[#c9a84c] font-bold text-lg">S</span>
          </div>
          <div>
            <span className="font-serif text-sm sm:text-base font-bold text-[#fafaf9] tracking-widest group-hover:text-[#c9a84c] transition-colors">
              SANAKYAN S
            </span>
            <div className="flex items-center space-x-1.5 text-[10px] font-mono text-[#b8b8b8]/70 tracking-tighter uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>MUSEUM EXHIBITION</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-[#14110f]/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => soundFx.playHover()}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 hover:text-[#c9a84c] hover:bg-white/5 text-[#b8b8b8]"
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center space-x-3">
          {/* Audio Toggle */}
          <button
            onClick={toggleAudio}
            onMouseEnter={() => soundFx.playHover()}
            data-cursor-hover
            data-cursor-text="AUDIO"
            className="p-2.5 rounded-lg bg-[#14110f]/80 border border-white/10 text-[#c9a84c] hover:border-[#c9a84c]/50 hover:bg-[#c9a84c]/10 transition-all duration-300"
            title={isAudioOn ? "Mute Ambient Sound" : "Enable Ambient Sound"}
          >
            {isAudioOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-neutral-500" />}
          </button>

          {/* Status Badge */}
          <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[11px] font-mono text-[#c9a84c]">
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-ping" />
            <span className="tracking-wider">STATUS: AVAILABLE</span>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2.5 rounded-lg bg-[#14110f] border border-white/10 text-[#fafaf9]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-16 inset-x-0 bg-[#0c0a09]/95 backdrop-blur-2xl border-b border-[#c9a84c]/20 p-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-[#14110f] border border-white/5 text-[#fafaf9] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all font-mono text-sm"
                  >
                    <Icon className="w-4 h-4 text-[#c9a84c]" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

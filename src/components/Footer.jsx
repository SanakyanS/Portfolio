import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.05] bg-[#070709] py-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.04]">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 rounded-full border border-[#c5a059]/40 flex items-center justify-center bg-white/[0.02]">
                <span className="text-[10px] font-mono font-bold text-[#c5a059]">S</span>
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                SANAKYAN S
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Software Engineer · Full-Stack Developer · AI/ML Systems
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/SanakyanS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-full border border-white/[0.08] hover:border-[#c5a059]/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors bg-white/[0.02]"
            >
              <Github size={15} />
            </a>
            <a
              href="https://linkedin.com/in/sanakyan-s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full border border-white/[0.08] hover:border-[#c5a059]/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors bg-white/[0.02]"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="mailto:sanakyan2004@gmail.com"
              aria-label="Send Email"
              className="w-9 h-9 rounded-full border border-white/[0.08] hover:border-[#c5a059]/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors bg-white/[0.02]"
            >
              <Mail size={15} />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll back to top"
              className="w-9 h-9 rounded-full border border-white/[0.08] hover:border-[#c5a059]/50 flex items-center justify-center text-slate-400 hover:text-[#c5a059] transition-colors bg-white/[0.02] ml-2"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Lower Row: Copyright & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} Sanakyan S. Built with React, Vite &amp; TailwindCSS.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            <span>Chennai, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

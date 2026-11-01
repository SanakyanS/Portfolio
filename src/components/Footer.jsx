import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Download } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#080809] py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.05]">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-6 h-6 rounded-full border border-[#C7A86B]/40 flex items-center justify-center bg-white/[0.02]">
                <span className="text-[10px] font-mono font-bold text-[#C7A86B]">S</span>
              </div>
              <span className="text-base font-bold tracking-tight text-ivory">
                SANAKYAN S
              </span>
            </div>
            <p className="text-xs text-silver font-mono">
              Software Engineer · Full-Stack Developer · AI/ML Systems
            </p>
          </div>

          {/* Social Links & Resume & Back to Top */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/SANAKYAN_RESUME.pdf"
              download="Sanakyan_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full border border-[#C7A86B]/40 hover:border-[#C7A86B] text-[#C7A86B] hover:text-white bg-[#C7A86B]/[0.06] hover:bg-[#C7A86B]/[0.15] transition-all"
            >
              <Download size={13} />
              <span>Download Resume</span>
            </a>

            <a
              href="https://github.com/SanakyanS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full border border-white/[0.08] hover:border-[#C7A86B]/50 flex items-center justify-center text-silver hover:text-white transition-colors bg-white/[0.02]"
            >
              <Github size={15} />
            </a>
            <a
              href="https://linkedin.com/in/sanakyan-s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full border border-white/[0.08] hover:border-[#C7A86B]/50 flex items-center justify-center text-silver hover:text-white transition-colors bg-white/[0.02]"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="mailto:sanakyan2004@gmail.com"
              aria-label="Send Email"
              className="w-10 h-10 rounded-full border border-white/[0.08] hover:border-[#C7A86B]/50 flex items-center justify-center text-silver hover:text-white transition-colors bg-white/[0.02]"
            >
              <Mail size={15} />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll back to top"
              className="w-10 h-10 rounded-full border border-white/[0.08] hover:border-[#C7A86B]/50 flex items-center justify-center text-silver hover:text-[#C7A86B] transition-colors bg-white/[0.02] ml-1"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Lower Row: Copyright & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-silver">
          <p>© {currentYear} Sanakyan S. Designed with precision &amp; modern engineering standards.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A86B]" />
            <span>Chennai, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

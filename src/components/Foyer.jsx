import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { soundFx } from '../utils/audio';
import { 
  Download, ArrowUpRight, Mail, Linkedin, Github, 
  MapPin, Briefcase, Code2, Sparkles, Terminal, ChevronRight
} from 'lucide-react';

export default function Foyer() {
  const titles = [
    "Junior Software Developer",
    "Frontend Developer",
    "Software Engineer"
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Scramble text effect for "SANAKYAN S"
  const [displayName, setDisplayName] = useState("SANAKYAN S");
  const targetName = "SANAKYAN S";
  const scrambleChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayName(
        targetName
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iterations) return targetName[index];
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          })
          .join("")
      );

      if (iterations >= targetName.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3;
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Title Rotation Effect
  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(titleInterval);
  }, []);

  // 3D Card Tilt Effect
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y / 15);
    setRotateY(x / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="foyer" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-museum-grid">
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] spotlight-gold blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] spotlight-red blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Info */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#14110f] border border-[#c9a84c]/30 text-xs font-mono text-[#c9a84c]">
              <Sparkles className="w-3.5 h-3.5 text-[#c9a84c]" />
              <span className="uppercase tracking-widest">HALL I — FOYER EXHIBITION</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight gold-gradient-text">
                {displayName}
              </h1>

              {/* Rotating Title */}
              <div className="h-10 overflow-hidden font-mono text-xl sm:text-2xl text-[#c9a84c] font-medium flex items-center space-x-2">
                <span className="text-[#8b1e1e] font-bold">&gt;</span>
                <motion.span
                  key={currentTitleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  {titles[currentTitleIndex]}
                </motion.span>
              </div>
            </div>

            {/* Professionally Crafted Introduction */}
            <p className="text-base sm:text-lg text-[#b8b8b8] leading-relaxed max-w-2xl font-sans">
              An innovative Software Engineer and Frontend Specialist driven by problem solving, 
              scalable code design, and continuous learning. Passionate about transforming complex 
              ideas into sleek, responsive digital products that deliver real human value and 
              unmatched visual refinement.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#dossier"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor-hover
                data-cursor-text="TOUR"
                className="px-6 py-3.5 rounded-xl bg-[#c9a84c] text-[#0c0a09] font-serif font-bold text-sm uppercase tracking-wider hover:bg-[#e6c86e] shadow-[0_0_25px_rgba(201,168,76,0.3)] transition-all flex items-center space-x-2"
              >
                <span>Start Tour</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="/SANAKYAN_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor-hover
                data-cursor-text="PDF"
                className="px-6 py-3.5 rounded-xl bg-[#14110f] border border-[#c9a84c]/40 text-[#fafaf9] font-serif font-bold text-sm uppercase tracking-wider hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all flex items-center space-x-2"
              >
                <Download className="w-4 h-4 text-[#c9a84c]" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor-hover
                className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-[#b8b8b8] font-mono text-xs uppercase tracking-wider hover:text-white hover:border-white/30 transition-all flex items-center space-x-2"
              >
                <span>View Projects</span>
              </a>

              <a
                href="#contact"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor-hover
                className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-[#b8b8b8] font-mono text-xs uppercase tracking-wider hover:text-[#c9a84c] hover:border-[#c9a84c]/30 transition-all flex items-center space-x-2"
              >
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-[#b8b8b8]/60 uppercase tracking-widest">CONNECT ARCHIVES:</span>
              <a
                href="https://www.linkedin.com/in/sanakyan-s/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor-hover
                className="p-3 rounded-lg bg-[#14110f] border border-white/10 text-[#b8b8b8] hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/sanakyan"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor-hover
                className="p-3 rounded-lg bg-[#14110f] border border-white/10 text-[#b8b8b8] hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="mailto:sanakyan2004@gmail.com"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                data-cursor-hover
                className="p-3 rounded-lg bg-[#14110f] border border-white/10 text-[#b8b8b8] hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-all"
                title="Email Curator"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side 3D Glass Card */}
          <div className="lg:col-span-5 perspective-1000">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass-panel p-8 rounded-2xl relative border border-[#c9a84c]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
            >
              {/* Gold Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c9a84c]" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#c9a84c]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#c9a84c]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c9a84c]" />

              <div className="space-y-6 text-left">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/40 flex items-center justify-center text-[#c9a84c]">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#fafaf9]">CREATOR IDENTITY</h3>
                      <p className="text-[11px] font-mono text-[#c9a84c]">ID: SANAKYAN-S-2025</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                    ONLINE
                  </span>
                </div>

                {/* Status Grid */}
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#0c0a09]/60 border border-white/5">
                    <span className="text-[#b8b8b8]/60 block text-[10px]">CURRENT ROLE</span>
                    <span className="text-[#fafaf9] font-medium">Software Developer</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0c0a09]/60 border border-white/5">
                    <span className="text-[#b8b8b8]/60 block text-[10px]">LOCATION</span>
                    <span className="text-[#c9a84c] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Chennai, India
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0c0a09]/60 border border-white/5">
                    <span className="text-[#b8b8b8]/60 block text-[10px]">EXPERIENCE</span>
                    <span className="text-[#fafaf9] font-medium">2 Internships</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0c0a09]/60 border border-white/5">
                    <span className="text-[#b8b8b8]/60 block text-[10px]">PROJECTS</span>
                    <span className="text-[#c9a84c] font-medium">3+ Major Exhibits</span>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div>
                  <span className="text-[11px] font-mono text-[#b8b8b8]/70 block mb-2.5 uppercase tracking-wider">
                    PRIMARY CORE STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'React', 'Python', 'Node.js', 'Git', 'SQL'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#14110f] border border-[#c9a84c]/20 text-[11px] font-mono text-[#fafaf9] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer quote note */}
                <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-[#b8b8b8]/80 italic">
                  "Building digital artifacts with engineering precision & design elegance."
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Infinite Marquee Banner */}
      <div className="w-full mt-16 py-4 bg-[#14110f]/80 border-y border-[#c9a84c]/20 overflow-hidden relative backdrop-blur-md">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-8 mx-4 font-mono text-xs sm:text-sm text-[#b8b8b8]">
              <span className="text-[#c9a84c] font-bold">Code is the medium ✦ Innovation is the masterpiece</span>
              <span className="text-[#8b1e1e]">✦</span>
              <span>Learning Never Stops</span>
              <span className="text-[#8b1e1e]">✦</span>
              <span className="text-[#fafaf9]">Build • Learn • Improve • Repeat</span>
              <span className="text-[#8b1e1e]">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

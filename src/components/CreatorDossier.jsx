import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/audio';
import { Terminal, Cpu, Award, BookOpen, User, CheckCircle2, Copy } from 'lucide-react';

export default function CreatorDossier() {
  const [activeTab, setActiveTab] = useState('PROFILE');
  const [typedText, setTypedText] = useState('');
  const [copied, setCopied] = useState(false);

  const profileStory = `SANAKYAN S // DOSSIER DECRYPTED

[INFO] Degree: Bachelor of Technology in Information Technology
[INFO] Alma Mater: Vels Institute of Science Technology and Advanced Studies (VISTAS)
[INFO] Academic Standing: CGPA 7.96 / 10.0 (Aug 2021 – May 2025)

[BIOGRAPHY]
I am a dedicated Information Technology graduate with an unyielding passion for software engineering, 
frontend craftsmanship, and interactive user experience design. Throughout my academic journey and professional 
internships, I have developed a strong foundation in modern web technologies, algorithm design, and software architecture.

Driven by curiosity and a desire for continuous learning, I thrive in fast-paced collaborative environments 
where problem solving meets visual excellence. My goal is to build scalable, high-impact applications that 
solve real-world problems while setting new standards for web performance and aesthetics.`;

  useEffect(() => {
    let index = 0;
    setTypedText('');
    const timer = setInterval(() => {
      if (index < profileStory.length) {
        setTypedText((prev) => prev + profileStory.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 12);

    return () => clearInterval(timer);
  }, [activeTab]);

  const copyDossier = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(profileStory);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="dossier" className="py-28 relative bg-[#0c0a09] border-t border-[#c9a84c]/10">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] spotlight-gold blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#14110f] border border-[#c9a84c]/30 text-xs font-mono text-[#c9a84c]">
            <Terminal className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">HALL II — CREATOR DOSSIER</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-extrabold gold-gradient-text tracking-wide">
            CREATOR DOSSIER
          </h2>
          <p className="text-sm sm:text-base text-[#b8b8b8] max-w-xl mx-auto font-sans">
            Authentic developer diagnostic profile and career philosophy executed live in terminal.
          </p>
        </div>

        {/* Authentic Terminal Container */}
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl border border-[#c9a84c]/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden">
          
          {/* Terminal Topbar */}
          <div className="px-6 py-4 bg-[#0c0a09] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="font-mono text-xs text-[#c9a84c] tracking-wider pl-2">
                sanakyan@developer-workstation:~#
              </span>
            </div>

            {/* Tab Switches */}
            <div className="flex items-center space-x-1 bg-[#14110f] p-1 rounded-lg border border-white/5 font-mono text-xs">
              {['PROFILE', 'PHILOSOPHY', 'ASPIRATIONS'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveTab(tab);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activeTab === tab 
                      ? 'bg-[#c9a84c] text-[#0c0a09] font-bold shadow-[0_0_10px_rgba(201,168,76,0.4)]' 
                      : 'text-[#b8b8b8] hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <button
              onClick={copyDossier}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#b8b8b8] hover:text-white text-xs font-mono flex items-center space-x-1.5 transition-all"
              title="Copy Terminal Raw Content"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'COPIED' : 'RAW'}</span>
            </button>
          </div>

          {/* Terminal Command Input Area */}
          <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed text-[#fafaf9] min-h-[380px] bg-[#0c0a09]/80">
            <div className="flex items-center space-x-2 text-[#c9a84c] mb-6 border-b border-white/10 pb-3">
              <span className="text-emerald-400">guest@sanakyan-museum:~$</span>
              <span className="text-white font-semibold">developer.{activeTab.toLowerCase()}()</span>
            </div>

            {activeTab === 'PROFILE' && (
              <div className="whitespace-pre-wrap text-[#b8b8b8] font-mono">
                {typedText}
                <span className="inline-block w-2 h-4 ml-1 bg-[#c9a84c] animate-pulse align-middle" />
              </div>
            )}

            {activeTab === 'PHILOSOPHY' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6 text-[#b8b8b8]"
              >
                <div className="p-4 rounded-xl bg-[#14110f] border border-[#c9a84c]/20 space-y-2">
                  <h4 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider">
                    01. Software Craftsmanship
                  </h4>
                  <p className="text-xs leading-normal">
                    Code is not just logic; it is art executed in machine instructions. Every component 
                    must be built with modularity, clean semantics, performance optimization, and architectural intent.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#14110f] border border-[#c9a84c]/20 space-y-2">
                  <h4 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider">
                    02. Human-Centric UI/UX
                  </h4>
                  <p className="text-xs leading-normal">
                    Technology should feel magical and accessible. Great frontend development merges complex 
                    backend capabilities into effortless, memorable visual journeys.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#14110f] border border-[#c9a84c]/20 space-y-2">
                  <h4 className="text-[#c9a84c] font-bold text-sm uppercase tracking-wider">
                    03. Perpetual Evolution
                  </h4>
                  <p className="text-xs leading-normal">
                    The software landscape evolves daily. Embracing continuous learning, new frameworks, AI integrations, 
                    and peer feedback is fundamental to staying at the engineering frontier.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'ASPIRATIONS' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4 text-[#b8b8b8]"
              >
                <p className="text-sm text-[#fafaf9]">
                  [GOAL] To step into a dynamic software engineering role where I can contribute to cutting-edge web infrastructure, cloud integration, and innovative consumer applications.
                </p>
                <ul className="space-y-3 pt-2 text-xs">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                    <span>Master Next.js, React Server Components, and WebGL/Three.js interactive graphics.</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                    <span>Architect enterprise-grade full-stack solutions with Node.js, Cloud APIs, and SQL/NoSQL databases.</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                    <span>Collaborate with high-impact engineering teams to deliver world-class products.</span>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>

          {/* Terminal Footer Status Bar */}
          <div className="px-6 py-3 bg-[#0c0a09] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#b8b8b8]/60">
            <span>STATUS: 200 OK</span>
            <span>UTF-8 // REACT + VITE ENCODED</span>
          </div>
        </div>

      </div>
    </section>
  );
}

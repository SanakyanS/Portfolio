import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/audio';
import { ShieldCheck, Terminal as TerminalIcon, Sparkles } from 'lucide-react';

export default function Loader({ onComplete }) {
  const [logs, setLogs] = useState([]);
  const [isFinishedLoading, setIsFinishedLoading] = useState(false);
  const [doorsOpening, setDoorsOpening] = useState(false);

  const initialSequence = [
    "Initializing Exhibition...",
    "Loading Digital Archives...",
    "Fetching Creator Identity...",
    "Loading Projects...",
    "Decrypting Experience...",
    "Loading Skills...",
    "Establishing Secure Connection...",
    "Identity Loaded."
  ];

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < initialSequence.length) {
        setLogs((prev) => [...prev, initialSequence[currentStep]]);
        soundFx.playHover();
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinishedLoading(true);
        }, 400);
      }
    }, 240);

    return () => clearInterval(interval);
  }, []);

  const handleEnterClick = () => {
    soundFx.playDoorOpen();
    setDoorsOpening(true);
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0c0a09] overflow-hidden select-none">
      
      {/* Vault Split Doors (Slide apart when entering) */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 bg-[#0c0a09] border-r-2 border-[#c9a84c] z-20 flex items-center justify-end pointer-events-none"
        initial={{ x: 0 }}
        animate={doorsOpening ? { x: '-100%' } : { x: 0 }}
        transition={{ duration: 1.0, ease: [0.77, 0, 0.175, 1] }}
      >
        <div className="w-1 h-32 bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent shadow-[0_0_15px_#c9a84c]" />
      </motion.div>

      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 bg-[#0c0a09] border-l-2 border-[#c9a84c] z-20 flex items-center justify-start pointer-events-none"
        initial={{ x: 0 }}
        animate={doorsOpening ? { x: '100%' } : { x: 0 }}
        transition={{ duration: 1.0, ease: [0.77, 0, 0.175, 1] }}
      >
        <div className="w-1 h-32 bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent shadow-[0_0_15px_#c9a84c]" />
      </motion.div>

      {/* Main Terminal & Entrance Screen (z-30 so it sits ON TOP of doors while loading!) */}
      <div className="relative z-30 w-full max-w-3xl px-6 flex flex-col items-center justify-center min-h-screen">
        
        {!isFinishedLoading ? (
          /* Terminal Window */
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full bg-[#14110f]/95 border border-[#c9a84c]/40 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
          >
            {/* Terminal Header */}
            <div className="px-5 py-3.5 bg-[#0c0a09] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono text-[#c9a84c]">
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>EXHIBITION_BOOT_SEQUENCE.SH</span>
              </div>
              <div className="text-[10px] font-mono text-[#b8b8b8]/60">v2.5.0</div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm space-y-3 min-h-[280px] max-h-[360px] overflow-y-auto bg-[#0c0a09]/90">
              {logs.map((log, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-3 text-[#fafaf9]"
                >
                  <span className="text-[#c9a84c]">&gt;</span>
                  <span className={index === logs.length - 1 ? "text-[#c9a84c] font-semibold" : "text-[#b8b8b8]"}>
                    {log}
                  </span>
                  {index === logs.length - 1 && (
                    <span className="w-2 h-4 bg-[#c9a84c] animate-pulse inline-block" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Grand Museum Title Reveal */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8 flex flex-col items-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-xs font-mono text-[#c9a84c]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIGITAL ARCHIVES UNLOCKED</span>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl tracking-[0.3em] text-[#b8b8b8] uppercase mb-2">
                MUSEUM OF
              </h2>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-black tracking-wider gold-gradient-text drop-shadow-[0_10px_30px_rgba(201,168,76,0.3)]">
                SANAKYAN S
              </h1>
            </div>

            <p className="text-sm sm:text-base font-sans text-[#b8b8b8] max-w-md mx-auto italic">
              Interactive Digital Exhibition of Software Craftsmanship & Engineering Artifacts
            </p>

            {/* Enter Exhibition Button */}
            <motion.button
              onClick={handleEnterClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
              data-cursor-text="ENTER"
              className="mt-4 group relative px-10 py-4 rounded-xl bg-gradient-to-r from-[#c9a84c] to-[#997a29] text-[#0c0a09] font-serif font-bold text-lg tracking-widest uppercase shadow-[0_0_30px_rgba(201,168,76,0.4)] hover:shadow-[0_0_50px_rgba(201,168,76,0.7)] transition-all duration-300 flex items-center space-x-3 cursor-pointer"
            >
              <span>Enter Exhibition</span>
              <ShieldCheck className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

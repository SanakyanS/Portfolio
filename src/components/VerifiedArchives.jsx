import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';
import { Award, CheckCircle2, ShieldCheck, ExternalLink, X, Sparkles } from 'lucide-react';

export default function VerifiedArchives() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 'cert-1',
      title: 'Python Certification',
      issuer: 'Scalar',
      category: 'Programming & Core Logic',
      date: 'Verified Archive 2024',
      credId: 'SCL-PY-884920',
      description: 'Comprehensive certification covering Python syntax, data structures, functional programming, and algorithmic logic.',
      skills: ['Python', 'Data Structures', 'Functions', 'Algorithmic Optimization']
    },
    {
      id: 'cert-2',
      title: 'How to Build Chatbots in IBM Developer Skills Network',
      issuer: 'IBM',
      category: 'Artificial Intelligence & NLP',
      date: 'Verified Archive 2024',
      credId: 'IBM-CB-401924',
      description: 'Hands-on certification in building, training, and integrating conversational AI chatbots using IBM Watson developer services.',
      skills: ['IBM Watson', 'Conversational AI', 'Natural Language Processing', 'Intent Recognition']
    },
    {
      id: 'cert-3',
      title: 'Acquiring Data',
      issuer: 'NASSCOM',
      category: 'Data Engineering & Analytics',
      date: 'Verified Archive 2024',
      credId: 'NSCM-AD-109283',
      description: 'National skill certification in data harvesting, web scraping methodologies, data sanitation, and structured dataset acquisition.',
      skills: ['Data Acquisition', 'Web Scraping', 'Data Analytics', 'Sanitisation']
    },
    {
      id: 'cert-4',
      title: 'Full Stack Development',
      issuer: 'IMARTICUS LEARNING',
      category: 'Web Engineering & Architecture',
      date: 'Verified Archive 2024',
      credId: 'IMR-FSD-550921',
      description: 'Intensive full-stack development program focusing on client-side rendering, server-side APIs, database integration, and software engineering.',
      skills: ['Full Stack Web', 'Frontend Frameworks', 'Backend Services', 'Database Integration']
    },
    {
      id: 'cert-5',
      title: 'Develop An AI with the Azure AI Foundry SDK',
      issuer: 'MICROSOFT',
      category: 'Cloud AI & SDK Integration',
      date: 'Verified Archive 2024',
      credId: 'MSFT-[#AZ-99201]',
      description: 'Professional Microsoft accreditation in constructing custom AI agent pipelines using Azure AI Foundry SDK, prompt engineering, and cloud deployment.',
      skills: ['Azure AI Foundry', 'Python SDK', 'AI Agent Workflows', 'Cloud Deployment']
    }
  ];

  const handleOpenCertificate = (cert) => {
    soundFx.playStamp();
    setSelectedCert(cert);
    
    // Trigger Golden Confetti Celebration
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#c9a84c', '#fafaf9', '#8b1e1e', '#e6c86e']
    });
  };

  return (
    <section id="certifications" className="py-28 relative bg-[#0c0a09] border-t border-[#c9a84c]/10">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] spotlight-gold blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#14110f] border border-[#c9a84c]/30 text-xs font-mono text-[#c9a84c]">
            <Award className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">HALL VI — VERIFIED ARCHIVES</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-extrabold gold-gradient-text tracking-wide">
            VERIFIED ARCHIVES
          </h2>
          <p className="text-sm sm:text-base text-[#b8b8b8] max-w-xl mx-auto font-sans">
            Authenticated professional certifications displayed as luxury metallic artifacts. 
            Click to unseal official verification credentials.
          </p>
        </div>

        {/* Metallic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => handleOpenCertificate(cert)}
              onMouseEnter={() => soundFx.playHover()}
              data-cursor-hover
              data-cursor-text="UNSEAL"
              className="glass-panel p-8 rounded-3xl cursor-pointer relative group border border-[#c9a84c]/20 hover:border-[#c9a84c] shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-all duration-300"
            >
              {/* Metallic corner accents */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#c9a84c]/30 to-transparent rounded-tr-3xl" />
              
              <div className="space-y-6 text-left">
                
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0c0a09] border border-[#c9a84c]/40 flex items-center justify-center text-[#c9a84c] group-hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[10px] font-mono text-[#c9a84c]">
                    VERIFIED
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#c9a84c] block mb-1 uppercase tracking-wider">
                    ISSUED BY {cert.issuer}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#fafaf9] group-hover:text-[#c9a84c] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs text-[#b8b8b8] line-clamp-2 font-sans">
                  {cert.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#c9a84c]">
                  <span>Click to Unseal</span>
                  <Sparkles className="w-4 h-4 group-hover:scale-125 transition-transform" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Cinematic Unfolding Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateX: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xl glass-panel p-8 sm:p-10 rounded-3xl relative border-2 border-[#c9a84c] shadow-[0_0_80px_rgba(201,168,76,0.4)] overflow-hidden"
            >
              {/* Animated Golden Verification Stamp */}
              <motion.div
                initial={{ scale: 2, opacity: 0, rotate: -20 }}
                animate={{ scale: 1, opacity: 0.25, rotate: -12 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-6 -right-6 pointer-events-none"
              >
                <div className="w-48 h-48 rounded-full border-8 border-[#c9a84c] flex items-center justify-center text-[#c9a84c] font-serif font-black text-center p-4 leading-tight uppercase tracking-widest text-lg">
                  SANAKYAN S<br />OFFICIAL<br />VERIFIED
                </div>
              </motion.div>

              {/* Close Button */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  setSelectedCert(null);
                }}
                className="absolute top-6 right-6 p-2 rounded-lg bg-[#14110f] border border-white/10 text-[#fafaf9] hover:text-[#c9a84c] transition-all z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6 text-left relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#c9a84c]/20 border border-[#c9a84c] flex items-center justify-center text-[#c9a84c]">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#c9a84c] uppercase tracking-widest block">OFFICIAL CERTIFICATE OF COMPLETION</span>
                    <h3 className="font-serif text-2xl font-extrabold text-[#fafaf9]">{selectedCert.title}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[#0c0a09] border border-white/10">
                    <span className="text-[#b8b8b8]/60 block text-[10px]">ISSUING AUTHORITY</span>
                    <span className="text-[#c9a84c] font-bold">{selectedCert.issuer}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0c0a09] border border-white/10">
                    <span className="text-[#b8b8b8]/60 block text-[10px]">CREDENTIAL ID</span>
                    <span className="text-white">{selectedCert.credId}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-[#b8b8b8]/60 uppercase tracking-widest">DESCRIPTION</h4>
                  <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans">
                    {selectedCert.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-[#b8b8b8]/60 uppercase tracking-widest">VERIFIED SKILLS</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-[#14110f] border border-[#c9a84c]/30 text-xs font-mono text-[#c9a84c]">
                        ✦ {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedCert(null);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#c9a84c] text-[#0c0a09] font-serif font-bold text-xs uppercase tracking-wider hover:bg-[#e6c86e] transition-all"
                  >
                    Close Unsealed Document
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

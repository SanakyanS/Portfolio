import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Cpu, Sparkles, Terminal, GraduationCap } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const HIGHLIGHTS = [
  {
    icon: Layers,
    title: 'Enterprise Development',
    description: 'Experience architecting and enhancing enterprise platforms using Angular, TypeScript, Python, Flask, and PostgreSQL at scale.',
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Practical project experience in Machine Learning pipelines, Computer Vision, OpenCV, image preprocessing, and real-time inference.',
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    description: 'Working foundation in Large Language Model fundamentals, structured Prompt Engineering methodologies, and RAG architectures.',
  },
  {
    icon: Terminal,
    title: 'Engineering Practices',
    description: 'Disciplined application of Agile/Scrum ceremonies, SDLC rigor, collaborative code reviews, Linux environments, and secure access protocols.',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="about" className="section-spacing border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow and Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="section-label">01 // Profile</span>
              <h2 className="section-heading">Disciplined Engineering.</h2>
            </div>
            <p className="text-slate-400 text-base max-w-xl leading-relaxed">
              Software Engineer and Full-Stack Developer with hands-on enterprise application experience, 
              applied machine learning capabilities, and a commitment to maintainable code.
            </p>
          </div>

          {/* Highlight Cards Grid with Cursor Spotlight Lighting */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {HIGHLIGHTS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <SpotlightCard className="surface-card surface-card-hover p-6 rounded-xl flex flex-col justify-between h-full">
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-5 text-[#c5a059]">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>

          {/* Academic Background Banner */}
          <SpotlightCard className="surface-card p-6 sm:p-7 rounded-xl border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#c5a059]/10 border border-[#c5a059]/20 flex items-center justify-center flex-shrink-0 text-[#c5a059]">
                <GraduationCap size={20} />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#c5a059]">Academic Foundation</span>
                <h4 className="text-base font-semibold text-white tracking-tight">
                  B.Tech in Information Technology
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Vels Institute of Science, Technology and Advanced Studies · 2021 – 2025
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:border-l sm:border-white/[0.08] sm:pl-8">
              <div>
                <span className="text-[11px] font-mono text-slate-500 block">Graduation CGPA</span>
                <span className="text-lg font-bold text-white font-mono">7.96 <span className="text-xs text-slate-500 font-normal">/ 10</span></span>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}

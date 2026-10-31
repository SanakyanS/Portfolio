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
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-28 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow & H2 Section Heading */}
          <div className="max-w-3xl mb-16">
            <span className="eyebrow-label mb-3">01 // ABOUT ME</span>
            <h2 className="h2-editorial mb-5">
              A software engineer focused on building useful systems.
            </h2>
            <p className="body-editorial">
              Software Engineer and Full-Stack Developer with hands-on enterprise application experience, 
              applied machine learning capabilities, and a commitment to maintainable code.
            </p>
          </div>

          {/* Highlight Cards Grid with Subtle Spotlight Lighting */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {HIGHLIGHTS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.12 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <SpotlightCard className="surface-luxury p-7 rounded-xl flex flex-col justify-between h-full">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-6 text-[#C7A86B]">
                        <Icon size={19} />
                      </div>
                      <h3 className="h3-sub text-lg sm:text-xl font-semibold text-ivory mb-2.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-silver leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>

          {/* Academic Background Banner */}
          <SpotlightCard className="surface-luxury p-7 sm:p-8 rounded-xl border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#C7A86B]/10 border border-[#C7A86B]/25 flex items-center justify-center flex-shrink-0 text-[#C7A86B]">
                <GraduationCap size={22} />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#C7A86B] block mb-0.5">
                  Academic Foundation
                </span>
                <h4 className="text-lg font-semibold text-ivory tracking-tight">
                  B.Tech in Information Technology
                </h4>
                <p className="text-xs sm:text-sm text-silver mt-0.5">
                  Vels Institute of Science, Technology and Advanced Studies · 2021 – 2025
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:border-l sm:border-white/[0.08] sm:pl-8">
              <div>
                <span className="text-[11px] font-mono text-silver block">Graduation Standing</span>
                <span className="text-xl font-bold text-ivory font-mono">
                  7.96 <span className="text-xs text-silver font-normal">/ 10 CGPA</span>
                </span>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}

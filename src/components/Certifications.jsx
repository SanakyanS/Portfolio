import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle2, Clock } from 'lucide-react';

const CERTIFICATIONS = [
  {
    name: 'Develop an AI with the Azure AI Foundry SDK',
    issuer: 'Microsoft',
    status: 'Verified',
    type: 'Cloud AI & Applied Intelligence',
  },
  {
    name: 'Prompt Engineering for ChatGPT',
    issuer: 'Vanderbilt University / Coursera',
    status: 'Verified',
    type: 'Generative AI & LLM Systems',
  },
  {
    name: 'Software Engineering',
    issuer: 'Coursera',
    status: 'Verified',
    type: 'Architecture & Engineering Lifecycle',
  },
  {
    name: 'Full Stack Development',
    issuer: 'Imarticus Learning',
    status: 'Verified',
    type: 'Full-Stack Engineering & Web APIs',
  },
  {
    name: 'How to Build Chatbots',
    issuer: 'IBM Developer Skills Network',
    status: 'Verified',
    type: 'Conversational AI & NLP Workflows',
  },
  {
    name: 'Agentic AI',
    issuer: 'Udemy',
    status: 'In Progress',
    type: 'Autonomous Agent Frameworks',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="certifications" className="section-spacing border-t border-white/[0.04] bg-[#0c0c0f]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="section-label">05 // Credentials &amp; Studies</span>
              <h2 className="section-heading">Verified Competencies.</h2>
            </div>
            <p className="text-slate-400 text-base max-w-xl leading-relaxed">
              Curated coursework and certifications validating capabilities across cloud AI SDKs, 
              software engineering rigor, and generative intelligence.
            </p>
          </div>

          {/* Editorial Credentials List */}
          <div className="surface-card rounded-2xl border border-white/[0.06] divide-y divide-white/[0.04] overflow-hidden">
            {CERTIFICATIONS.map((cert, index) => {
              const isInProgress = cert.status === 'In Progress';

              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 * index,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 hover:bg-white/[0.015] group"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center flex-shrink-0 text-[#c5a059] group-hover:border-[#c5a059]/40 transition-colors">
                      <Award size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white group-hover:text-slate-100 transition-colors">
                        {cert.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-400 mt-1">
                        <span className="text-slate-300 font-medium">{cert.issuer}</span>
                        <span className="text-slate-600">•</span>
                        <span className="font-mono text-slate-500">{cert.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center sm:self-center self-start pl-13 sm:pl-0">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border ${
                        isInProgress
                          ? 'bg-amber-400/[0.08] border-amber-400/25 text-amber-300'
                          : 'bg-[#c5a059]/[0.08] border-[#c5a059]/25 text-[#d1b87a]'
                      }`}
                    >
                      {isInProgress ? (
                        <>
                          <Clock size={11} className="text-amber-400" />
                          <span>In Progress</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 size={11} className="text-[#c5a059]" />
                          <span>Verified</span>
                        </>
                      )}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

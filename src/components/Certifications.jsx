import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle2, Clock } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const CERTIFICATIONS = [
  {
    name: 'Develop an AI with the Azure AI Foundry SDK',
    issuer: 'Microsoft',
    status: 'Verified',
    type: 'Cloud AI & Applied Intelligence',
  },
  {
    name: 'Microsoft SQL Foundations',
    issuer: 'Microsoft',
    status: 'Verified',
    type: 'Relational Database Architecture',
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
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="py-28 border-t border-white/[0.05] bg-[#0E0E10]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow & H2 Section Heading */}
          <div className="max-w-3xl mb-16">
            <span className="eyebrow-label mb-3">05 // CERTIFICATIONS</span>
            <h2 className="h2-editorial mb-5">
              Continuous learning, documented.
            </h2>
            <p className="body-editorial">
              Curated coursework and certifications validating capabilities across cloud AI SDKs, 
              relational databases, software engineering rigor, and generative intelligence.
            </p>
          </div>

          {/* Editorial Credentials List */}
          <div className="surface-luxury rounded-2xl border border-white/[0.07] divide-y divide-white/[0.04] overflow-hidden">
            {CERTIFICATIONS.map((cert, index) => {
              const isInProgress = cert.status === 'In Progress';

              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.07 * index,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 hover:bg-white/[0.015] group"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center flex-shrink-0 text-[#C7A86B] group-hover:border-[#C7A86B]/45 transition-colors">
                      <Award size={19} />
                    </div>
                    <div>
                      <h3 className="h3-sub text-base sm:text-lg font-semibold text-ivory group-hover:text-white transition-colors">
                        {cert.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2.5 text-xs text-silver mt-1">
                        <span className="text-ivory font-medium">{cert.issuer}</span>
                        <span className="text-white/20">•</span>
                        <span className="font-mono text-silver">{cert.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center sm:self-center self-start pl-14 sm:pl-0">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1 rounded-full border ${
                        isInProgress
                          ? 'bg-amber-400/[0.08] border-amber-400/25 text-amber-300'
                          : 'bg-[#C7A86B]/[0.08] border-[#C7A86B]/25 text-[#C7A86B]'
                      }`}
                    >
                      {isInProgress ? (
                        <>
                          <Clock size={11} className="text-amber-400" />
                          <span>In Progress</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 size={11} className="text-[#C7A86B]" />
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

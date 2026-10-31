import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SKILL_DOMAINS = [
  {
    category: 'Programming',
    index: '01',
    skills: [
      { name: 'Python', level: null },
      { name: 'TypeScript', level: 'Working Knowledge' },
      { name: 'JavaScript', level: null },
      { name: 'SQL', level: null },
      { name: 'Java', level: 'Basics' },
    ],
  },
  {
    category: 'Frontend',
    index: '02',
    skills: [
      { name: 'Angular 14', level: 'Working Knowledge' },
      { name: 'HTML5', level: null },
      { name: 'CSS3', level: null },
      { name: 'Bootstrap', level: null },
      { name: 'React.js', level: 'Learning' },
    ],
  },
  {
    category: 'Backend & Data',
    index: '03',
    skills: [
      { name: 'Flask', level: null },
      { name: 'REST APIs', level: 'Working Knowledge' },
      { name: 'PostgreSQL', level: null },
      { name: 'Pandas', level: null },
      { name: 'Node.js', level: 'Basics' },
    ],
  },
  {
    category: 'AI / ML',
    index: '04',
    skills: [
      { name: 'Machine Learning', level: null },
      { name: 'Computer Vision', level: null },
      { name: 'OpenCV', level: null },
      { name: 'NLP Fundamentals', level: null },
      { name: 'LLM Fundamentals', level: null },
      { name: 'Prompt Engineering', level: null },
      { name: 'RAG', level: 'Basics' },
    ],
  },
  {
    category: 'Cloud & Security',
    index: '05',
    skills: [
      { name: 'Microsoft Azure', level: 'Basics' },
      { name: 'Azure AD', level: null },
      { name: 'MSAL', level: null },
      { name: 'Azure AI Foundry SDK', level: null },
      { name: 'AWS', level: 'Learning' },
    ],
  },
  {
    category: 'Mainframe Systems',
    index: '06',
    skills: [
      { name: 'SDSF', level: null },
      { name: 'ISPF', level: null },
      { name: 'HMC', level: null },
      { name: 'CICS', level: null },
      { name: 'TSO', level: null },
      { name: 'JCL', level: 'Basics' },
      { name: 'VSAM', level: 'Basics' },
    ],
  },
  {
    category: 'Tools & Engineering',
    index: '07',
    skills: [
      { name: 'Git / GitHub', level: 'Working Knowledge' },
      { name: 'VS Code', level: null },
      { name: 'Linux', level: null },
      { name: 'Docker', level: null },
      { name: 'CI/CD', level: 'Basics' },
      { name: 'Agile / Scrum', level: null },
      { name: 'SDLC', level: null },
      { name: 'Code Reviews', level: null },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="section-spacing border-t border-white/[0.04] bg-[#0c0c0f]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="section-label">02 // Technical Directory</span>
              <h2 className="section-heading">Capabilities &amp; Stack.</h2>
            </div>
            <p className="text-slate-400 text-base max-w-xl leading-relaxed">
              Carefully calibrated proficiencies across full-stack engineering, machine learning pipelines,
              and enterprise infrastructure.
            </p>
          </div>

          {/* Editorial Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SKILL_DOMAINS.map((domain, domainIdx) => (
              <motion.div
                key={domain.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.08 * domainIdx,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="surface-card p-6 rounded-xl border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.06]">
                    <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
                      {domain.category}
                    </h3>
                    <span className="text-[11px] font-mono text-[#c5a059]/80 font-medium">
                      {domain.index}
                    </span>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-2">
                    {domain.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between text-sm py-1 border-b border-white/[0.02] last:border-none group"
                      >
                        <span className="text-slate-300 group-hover:text-white transition-colors duration-200">
                          {skill.name}
                        </span>

                        {skill.level && (
                          <span className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded ${
                            skill.level === 'Working Knowledge'
                              ? 'text-[#c5a059] bg-[#c5a059]/10 border border-[#c5a059]/20'
                              : skill.level === 'Learning'
                              ? 'text-amber-400/90 bg-amber-400/10 border border-amber-400/20'
                              : 'text-slate-400 bg-white/[0.03] border border-white/[0.06]'
                          }`}>
                            {skill.level}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

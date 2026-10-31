import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const SKILL_DOMAINS = [
  {
    category: 'Programming',
    index: '01',
    skills: [
      { name: 'Python', level: null },
      { name: 'TypeScript', level: 'Working Knowledge' },
      { name: 'JavaScript', level: 'Working Knowledge' },
      { name: 'SQL', level: 'Working Knowledge' },
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
      { name: 'Bootstrap', level: 'Working Knowledge' },
      { name: 'React.js', level: 'Learning' },
    ],
  },
  {
    category: 'Backend & Data',
    index: '03',
    skills: [
      { name: 'Flask', level: null },
      { name: 'REST APIs', level: 'Working Knowledge' },
      { name: 'PostgreSQL', level: 'Working Knowledge' },
      { name: 'Pandas', level: 'Working Knowledge' },
      { name: 'Node.js', level: 'Basics' },
    ],
  },
  {
    category: 'AI / Computer Vision',
    index: '04',
    skills: [
      { name: 'Machine Learning', level: 'Working Knowledge' },
      { name: 'Computer Vision', level: 'Working Knowledge' },
      { name: 'OpenCV', level: 'Working Knowledge' },
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
      { name: 'SDSF', level: 'Working Knowledge' },
      { name: 'ISPF', level: 'Working Knowledge' },
      { name: 'HMC', level: 'Working Knowledge' },
      { name: 'CICS', level: 'Working Knowledge' },
      { name: 'TSO', level: 'Working Knowledge' },
      { name: 'JCL', level: 'Basics' },
      { name: 'VSAM', level: 'Basics' },
    ],
  },
  {
    category: 'Tools & Engineering',
    index: '07',
    skills: [
      { name: 'Git / GitHub', level: 'Working Knowledge' },
      { name: 'Linux', level: 'Working Knowledge' },
      { name: 'Docker', level: 'Working Knowledge' },
      { name: 'VS Code', level: null },
      { name: 'CI/CD', level: 'Basics' },
      { name: 'Agile / Scrum', level: 'Working Knowledge' },
      { name: 'SDLC', level: 'Working Knowledge' },
      { name: 'Code Reviews', level: 'Working Knowledge' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-28 border-t border-white/[0.05] bg-[#0E0E10]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow & H2 Section Heading */}
          <div className="max-w-3xl mb-16">
            <span className="eyebrow-label mb-3">02 // TECHNICAL EXPERTISE</span>
            <h2 className="h2-editorial mb-5">
              Tools I use to turn ideas into software.
            </h2>
            <p className="body-editorial">
              Carefully calibrated proficiencies across full-stack engineering, machine learning pipelines,
              and enterprise infrastructure.
            </p>
          </div>

          {/* Editorial Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                className="h-full"
              >
                <SpotlightCard className="surface-luxury p-7 rounded-xl border border-white/[0.06] flex flex-col justify-between h-full">
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/[0.07]">
                      <h3 className="h3-sub text-sm font-semibold tracking-wide text-ivory uppercase">
                        {domain.category}
                      </h3>
                      <span className="text-[11px] font-mono text-[#C7A86B] font-medium">
                        {domain.index}
                      </span>
                    </div>

                    {/* Skills List */}
                    <ul className="space-y-2.5">
                      {domain.skills.map((skill) => (
                        <li
                          key={skill.name}
                          className="flex items-center justify-between text-sm py-1 border-b border-white/[0.02] last:border-none group"
                        >
                          <span className="text-silver group-hover:text-ivory transition-colors duration-200">
                            {skill.name}
                          </span>

                          {skill.level && (
                            <span
                              className={
                                skill.level === 'Working Knowledge'
                                  ? 'tag-working-knowledge'
                                  : 'tag-standard'
                              }
                            >
                              {skill.level}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

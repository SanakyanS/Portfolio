import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const SKILL_DOMAINS = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: null },
      { name: 'TypeScript', level: 'Working Knowledge' },
      { name: 'JavaScript', level: 'Working Knowledge' },
      { name: 'SQL', level: 'Working Knowledge' },
      { name: 'Java', level: 'Basics' },
    ],
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'Angular 14', level: 'Working Knowledge' },
      { name: 'HTML5', level: null },
      { name: 'CSS3', level: null },
      { name: 'Bootstrap', level: 'Working Knowledge' },
      { name: 'React.js', level: 'Learning' },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Flask', level: null },
      { name: 'REST APIs', level: 'Working Knowledge' },
      { name: 'PostgreSQL', level: 'Working Knowledge' },
      { name: 'Pandas', level: 'Working Knowledge' },
      { name: 'Node.js', level: 'Basics' },
    ],
  },
  {
    category: 'AI & Computer Vision',
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
    category: 'Cloud & Authentication',
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
    category: 'Developer Tools & Practices',
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
    <section id="skills" className="py-24 sm:py-28 border-t border-white/[0.05] bg-[#0E0E10]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <span className="eyebrow-label mb-3">TECHNICAL SKILLS</span>
            <h2 className="h2-editorial mb-4">
              Tools I use to turn ideas into software.
            </h2>
            <p className="body-editorial">
              Technologies and tools I work with day-to-day, categorized honestly based on hands-on project and production experience.
            </p>
          </div>

          {/* Clean Editorial Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SKILL_DOMAINS.map((domain, domainIdx) => (
              <motion.div
                key={domain.category}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.06 * domainIdx,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <SpotlightCard className="surface-luxury p-6 rounded-xl border border-white/[0.06] flex flex-col justify-between h-full">
                  <div>
                    {/* Category Title */}
                    <div className="pb-3 mb-4 border-b border-white/[0.07]">
                      <h3 className="h3-sub text-xs font-semibold tracking-wider text-ivory uppercase">
                        {domain.category}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <ul className="space-y-2">
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

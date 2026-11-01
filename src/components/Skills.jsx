import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const SKILL_DOMAINS = [
  {
    category: 'Programming Languages',
    id: 'programming',
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
    id: 'frontend',
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
    id: 'backend',
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
    id: 'ai-vision',
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
    id: 'cloud',
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
    id: 'mainframe',
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
    id: 'tools',
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

const CATEGORIES = [
  { id: 'all', label: 'All Categories' },
  { id: 'programming', label: 'Programming' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & Data' },
  { id: 'ai-vision', label: 'AI & Vision' },
  { id: 'mainframe', label: 'Mainframe' },
  { id: 'tools', label: 'Tools & DevOps' },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter skills by category and search query
  const filteredDomains = SKILL_DOMAINS.filter((domain) => {
    if (activeFilter !== 'all' && domain.id !== activeFilter) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const hasCategoryMatch = domain.category.toLowerCase().includes(q);
    const hasSkillMatch = domain.skills.some((s) => s.name.toLowerCase().includes(q));
    return hasCategoryMatch || hasSkillMatch;
  });

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
          <div className="max-w-3xl mb-10">
            <span className="eyebrow-label mb-3">TECHNICAL SKILLS</span>
            <h2 className="h2-editorial mb-4">
              Tools I use to turn ideas into software.
            </h2>
            <p className="body-editorial">
              Technologies and tools I work with day-to-day, categorized honestly based on hands-on project and production experience.
            </p>
          </div>

          {/* Interactive Filter Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.06]">
            {/* Animated Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {CATEGORIES.map((cat) => {
                const isActive = activeFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`relative px-3.5 py-1.5 text-xs rounded-full font-medium transition-colors whitespace-nowrap ${
                      isActive ? 'text-[#0B0B0C]' : 'text-silver hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSkillTab"
                        className="absolute inset-0 bg-[#C7A86B] rounded-full shadow-[0_0_15px_rgba(199,168,107,0.35)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Live Search Input */}
            <div className="relative max-w-xs w-full">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-silver/60" />
              <input
                type="text"
                placeholder="Filter skill (e.g. Python, Angular)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#18181B] text-xs text-ivory pl-9 pr-3 py-2 rounded-lg border border-white/[0.08] focus:border-[#C7A86B]/60 focus:outline-none transition-colors placeholder:text-silver/40 font-mono"
              />
            </div>
          </div>

          {/* Clean Editorial Animated Grid */}
          <motion.div 
            layout 
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredDomains.map((domain, domainIdx) => (
                <motion.div
                  key={domain.category}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.04 * domainIdx,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -3 }}
                  className="h-full"
                >
                  <SpotlightCard className="surface-luxury p-6 rounded-xl border border-white/[0.06] hover:border-[#C7A86B]/35 flex flex-col justify-between h-full transition-all duration-300">
                    <div>
                      {/* Category Title */}
                      <div className="pb-3 mb-4 border-b border-white/[0.07] flex items-center justify-between">
                        <h3 className="h3-sub text-xs font-semibold tracking-wider text-ivory uppercase">
                          {domain.category}
                        </h3>
                        <span className="text-[10px] font-mono text-[#C7A86B]/80">
                          {domain.skills.length}
                        </span>
                      </div>

                      {/* Skills List */}
                      <ul className="space-y-2">
                        {domain.skills.map((skill) => (
                          <li
                            key={skill.name}
                            className="flex items-center justify-between text-sm py-1 border-b border-white/[0.02] last:border-none group/item"
                          >
                            <span className="text-silver group-hover/item:text-ivory group-hover/item:translate-x-0.5 transition-all duration-200">
                              {skill.name}
                            </span>

                            {skill.level && (
                              <span
                                className={
                                  skill.level === 'Working Knowledge'
                                    ? 'tag-working-knowledge group-hover/item:border-[#C7A86B]/70 transition-colors'
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
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

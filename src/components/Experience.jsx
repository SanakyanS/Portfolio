import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';

const EXPERIENCES = [
  {
    period: '2026 — PRESENT',
    role: 'Software Engineer – Apprentice',
    company: 'Fidelity Investments',
    location: 'Chennai, India',
    project: 'Mainframe Tech Window Planning & Orchestration Portal',
    current: true,
    tags: ['Angular 14', 'TypeScript', 'Python', 'Flask', 'PostgreSQL', 'Pandas', 'Azure AD'],
    bullets: [
      'Engineer and enhance core features of an enterprise full-stack portal orchestrating mainframe change and migration timelines.',
      'Contributed to a high-throughput Python and Pandas timeline rebuild engine that preserves granular user edits, tracks chronological state, and enforces audit history integrity.',
      'Constructed spreadsheet-style collaborative planning interfaces that allow concurrent multi-team scheduling without state divergence.',
      'Implemented secure enterprise application protocols via Azure AD/MSAL and fine-grained role-based access control.',
      'Troubleshoot operational defects and support stable operation across production and non-production environments.',
      'Collaborate closely with senior staff engineers and cross-functional partners in Agile/Scrum delivery cadences.',
      'Apply mainframe systems and change-management domain knowledge to drive structural application enhancements.',
    ],
  },
  {
    period: '2024 — 2025',
    role: 'Junior Software Developer Intern',
    company: 'Causeve',
    location: 'Remote',
    project: 'R.K. Pharma Corporate Web Infrastructure',
    current: false,
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Agile', 'Code Reviews'],
    bullets: [
      'Developed and deployed the responsive corporate website for R.K. Pharma using vanilla JavaScript, HTML5, and CSS3.',
      'Integrated rich-text editing components and dynamic syntax highlighting modules to elevate content presentation.',
      'Participated actively in Agile sprint planning, stand-ups, and peer code reviews to maintain code quality.',
      'Ensured comprehensive cross-browser compatibility and responsive viewport scaling across device tiers.',
    ],
  },
  {
    period: '2024',
    role: 'Frontend Developer Intern',
    company: 'All India Translink',
    location: 'Remote',
    project: 'Logistics Operations Interface',
    current: false,
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git'],
    bullets: [
      'Built responsive user interface components leveraging Bootstrap, JavaScript, and semantic HTML5.',
      'Optimized layout performance and cross-browser rendering reliability across desktop and mobile browsers.',
      'Maintained version control workflows and branch hygiene using Git for distributed team collaboration.',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="experience" className="section-spacing border-t border-white/[0.04]">
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
              <span className="section-label">03 // Career Record</span>
              <h2 className="section-heading">Professional Journey.</h2>
            </div>
            <p className="text-slate-400 text-base max-w-xl leading-relaxed">
              Enterprise software experience delivering full-stack platforms, resilient data engines, 
              and production-grade workflows in collaborative engineering environments.
            </p>
          </div>

          {/* Editorial Timeline Container */}
          <div className="relative border-l border-white/[0.08] ml-2 sm:ml-4 pl-6 sm:pl-10 space-y-14">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                    exp.current
                      ? 'bg-[#c5a059] border-[#09090b] shadow-[0_0_12px_rgba(197,160,89,0.5)]'
                      : 'bg-[#18181f] border-white/20 group-hover:border-[#c5a059]/60'
                  }`}
                  aria-hidden="true"
                />

                {/* Experience Content Block */}
                <div className="surface-card p-7 sm:p-9 rounded-2xl border border-white/[0.06] surface-card-hover">
                  {/* Top Metadata Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-white/[0.06]">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="text-xs font-mono tracking-widest text-[#c5a059] uppercase font-medium">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/25 text-[#c5a059]">
                            Active Role
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300 mt-1">
                        <span className="font-semibold text-slate-100 flex items-center gap-1.5">
                          <Building2 size={14} className="text-[#c5a059]" />
                          {exp.company}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 flex items-center gap-1 text-xs">
                          <MapPin size={12} className="text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {exp.project && (
                      <div className="sm:text-right pt-2 sm:pt-0">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                          Initiative
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-slate-300">
                          {exp.project}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-7">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <span className="text-[#c5a059] mt-1.5 text-xs flex-shrink-0">◆</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Understated Metadata Tech Tags */}
                  <div className="pt-4 border-t border-white/[0.04] flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mr-1">
                      Stack:
                    </span>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.025] border border-white/[0.06] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Building2, MapPin } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

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
      'Develop and enhance features of an enterprise full-stack portal used to plan mainframe change and migration timelines.',
      'Contributed to a Python/Pandas timeline rebuild engine that preserves user edits, tracks changes and maintains audit history.',
      'Built spreadsheet-style planning functionality supporting collaborative change planning.',
      'Worked with secure application development using Azure AD/MSAL and role-based access.',
      'Troubleshoot defects and support production/non-production environments.',
      'Collaborate with senior engineers and cross-functional teams.',
      'Apply mainframe change-management knowledge to application enhancements.',
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
      'Developed and deployed the responsive R.K. Pharma corporate website using HTML, CSS and JavaScript.',
      'Integrated rich-text editing and syntax highlighting libraries.',
      'Worked in Agile sprints and peer code reviews.',
      'Ensured cross-browser compatibility and responsive viewport scaling across devices.',
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
      'Built responsive UI components using HTML, CSS, Bootstrap and JavaScript.',
      'Ensured cross-browser compatibility and optimized layout rendering across browsers.',
      'Collaborated remotely using Git for version control and branch workflows.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Progressive timeline scroll animation
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 50%'],
  });

  const timelineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" ref={sectionRef} className="py-28 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow & H2 Section Heading */}
          <div className="max-w-3xl mb-16">
            <span className="eyebrow-label mb-3">03 // SELECTED EXPERIENCE</span>
            <h2 className="h2-editorial mb-5">
              Where engineering meets real-world systems.
            </h2>
            <p className="body-editorial">
              Enterprise software experience delivering full-stack platforms, resilient data engines, 
              and production-grade workflows in collaborative engineering environments.
            </p>
          </div>

          {/* Editorial Timeline Container */}
          <div ref={timelineRef} className="relative ml-2 sm:ml-4 pl-6 sm:pl-10 space-y-14">
            {/* Base line */}
            <div 
              className="absolute left-0 top-3 bottom-6 w-[1.5px] bg-white/[0.08]" 
              aria-hidden="true" 
            />

            {/* Scroll-Progressively illuminated line */}
            <motion.div
              style={{ scaleY: timelineScaleY, transformOrigin: 'top' }}
              className="absolute left-0 top-3 bottom-6 w-[2px] bg-gradient-to-b from-[#C7A86B] via-[#D8BA7E] to-[#C7A86B]/30"
              aria-hidden="true"
            />

            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: 0.15 + index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <div 
                  className={`absolute -left-[30px] sm:-left-[46px] top-2 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                    exp.current
                      ? 'bg-[#C7A86B] border-[#0B0B0C] shadow-[0_0_12px_rgba(199,168,107,0.5)]'
                      : 'bg-[#1C1C1F] border-white/20 group-hover:border-[#C7A86B]/60'
                  }`}
                  aria-hidden="true"
                />

                {/* Experience Card with Spotlight */}
                <SpotlightCard className="surface-luxury p-7 sm:p-9 rounded-2xl border border-white/[0.06]">
                  {/* Top Metadata Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-white/[0.07]">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-xs font-mono tracking-widest text-[#C7A86B] uppercase font-medium">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C7A86B]/15 border border-[#C7A86B]/30 text-[#C7A86B]">
                            Active Role
                          </span>
                        )}
                      </div>
                      <h3 className="h3-sub text-xl sm:text-2xl font-bold text-ivory tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-silver mt-1.5">
                        <span className="font-semibold text-ivory flex items-center gap-1.5">
                          <Building2 size={15} className="text-[#C7A86B]" />
                          {exp.company}
                        </span>
                        <span className="text-white/20">•</span>
                        <span className="text-silver flex items-center gap-1 text-xs">
                          <MapPin size={13} className="text-silver" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {exp.project && (
                      <div className="sm:text-right pt-2 sm:pt-0">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-silver block mb-0.5">
                          Project Initiative
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-ivory">
                          {exp.project}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-8">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-silver leading-relaxed">
                        <span className="text-[#C7A86B] mt-1.5 text-xs flex-shrink-0">◆</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="pt-4 border-t border-white/[0.05] flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-silver uppercase tracking-widest mr-1">
                      Stack:
                    </span>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-standard"
                      >
                        {tag}
                      </span>
                    ))}
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

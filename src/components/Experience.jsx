import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Building2, GraduationCap, Trophy, MapPin, Sparkles } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const TIMELINE_EVENTS = [
  {
    period: 'Feb 2026 — Present',
    role: 'Software Engineer – Apprentice',
    organization: 'Fidelity Investments',
    location: 'Chennai, India',
    type: 'work',
    project: 'Mainframe Tech Window Planning & Orchestration Portal',
    current: true,
    tags: ['Angular 14', 'TypeScript', 'Python', 'Flask', 'PostgreSQL', 'Pandas', 'Azure AD'],
    description: 'Working on an internal enterprise web application used across teams to schedule and coordinate mainframe migration windows and change timelines.',
    highlights: [
      'Build and refine frontend features in Angular 14 and TypeScript, focusing on intuitive spreadsheet-style grids for collaborative scheduling.',
      'Contributed to the timeline rebuild engine in Python and Pandas, ensuring that complex scheduling changes preserve user edits and maintain an audit history.',
      'Implemented enterprise authentication and role-based access control using Azure AD and MSAL.',
      'Work in Agile sprints alongside senior engineers, troubleshooting defects and supporting non-production and production releases.',
    ],
  },
  {
    period: 'Oct 2024 — Feb 2025',
    role: 'Junior Software Developer Intern',
    organization: 'Causeve',
    location: 'Remote',
    type: 'work',
    project: 'R.K. Pharma Corporate Website',
    current: false,
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Agile', 'Code Reviews'],
    description: 'Contributed to front-end development and deployment of the corporate website for pharmaceutical client R.K. Pharma.',
    highlights: [
      'Developed and shipped responsive web pages using modern HTML5, CSS3, and JavaScript.',
      'Integrated third-party rich-text editing and code syntax highlighting plugins.',
      'Participated in daily standups, sprint reviews, and peer code reviews in an Agile workflow.',
      'Ensured cross-browser consistency and responsive layouts across mobile, tablet, and desktop viewports.',
    ],
  },
  {
    period: 'Feb 2024 — Apr 2024',
    role: 'Frontend Developer Intern',
    organization: 'All India Translink',
    location: 'Remote',
    type: 'work',
    project: 'Logistics Operations Portal',
    current: false,
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git'],
    description: 'Built clean, responsive interface components for logistics tracking and fleet management operations.',
    highlights: [
      'Implemented mobile-first dashboard and listing views using Bootstrap and vanilla JavaScript.',
      'Worked with cross-browser compatibility to guarantee reliable rendering across different browsers.',
      'Used Git for version control, branch management, and collaborative code integration.',
    ],
  },
  {
    period: '2023',
    role: 'Hackathon Participant',
    organization: 'Smart India Hackathon',
    location: 'India',
    type: 'hackathon',
    project: 'Student Dropout Risk Analysis',
    current: false,
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    description: 'Participated in the Smart India Hackathon 2023, proposing a predictive machine learning solution to help colleges identify at-risk students before they drop out.',
    highlights: [
      'Researched academic and socio-demographic indicators linked to higher-education attrition.',
      'Formulated the feature engineering strategy and helped present the prototype to judging panels.',
    ],
  },
  {
    period: '2021 — 2025',
    role: 'B.Tech in Information Technology',
    organization: 'Vels Institute of Science, Technology and Advanced Studies',
    location: 'Chennai, India',
    type: 'education',
    project: 'Graduated with 7.96 / 10 CGPA',
    current: false,
    tags: ['Information Technology', 'Computer Science', 'CGPA 7.96'],
    description: 'Completed my undergraduate degree in Information Technology with a focus on software engineering fundamentals, database architecture, and computer vision.',
    highlights: [
      'Maintained consistent academic performance, graduating with a 7.96 CGPA.',
      'Completed academic capstone project in computer vision: Intelligent Helmet Detection for motorcycles.',
      'Active participant in coding competitions, hackathons, and technical symposiums.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Progressive timeline scroll indicator
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 50%'],
  });

  const timelineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" ref={sectionRef} className="py-24 sm:py-28 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Natural Human Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="eyebrow-label mb-3">CAREER &amp; EDUCATION</span>
            <h2 className="h2-editorial mb-4">
              Where engineering meets real-world systems.
            </h2>
            <p className="body-editorial">
              A chronological look at my journey so far — from university and internships to building full-stack enterprise tools at Fidelity Investments.
            </p>
          </div>

          {/* Chronological Timeline Container */}
          <div ref={timelineRef} className="relative ml-2 sm:ml-4 pl-6 sm:pl-10 space-y-12">
            {/* Base Vertical Line */}
            <div 
              className="absolute left-0 top-3 bottom-6 w-[1.5px] bg-white/[0.08]" 
              aria-hidden="true" 
            />

            {/* Scroll-Illuminated Progress Line */}
            <motion.div
              style={{ scaleY: timelineScaleY, transformOrigin: 'top' }}
              className="absolute left-0 top-3 bottom-6 w-[2px] bg-gradient-to-b from-[#C7A86B] via-[#D8BA7E] to-[#C7A86B]/30"
              aria-hidden="true"
            />

            {TIMELINE_EVENTS.map((event, index) => {
              const isWork = event.type === 'work';
              const isEducation = event.type === 'education';
              const isHackathon = event.type === 'hackathon';

              return (
                <motion.div
                  key={event.organization + event.period}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative group"
                >
                  {/* Timeline Dot with Pulse Animation on Current Job */}
                  <div 
                    className={`absolute -left-[30px] sm:-left-[46px] top-2.5 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                      event.current
                        ? 'bg-[#C7A86B] border-[#0B0B0C] shadow-[0_0_12px_rgba(199,168,107,0.5)]'
                        : 'bg-[#1C1C1F] border-white/20 group-hover:border-[#C7A86B]/60'
                    }`}
                    aria-hidden="true"
                  >
                    {event.current && (
                      <span className="absolute -inset-1 rounded-full border border-[#C7A86B] animate-ping opacity-60" />
                    )}
                  </div>

                  {/* Card Surface with Interactive Hover Elevation */}
                  <SpotlightCard className="surface-luxury p-6 sm:p-8 rounded-2xl border border-white/[0.06] hover:border-[#C7A86B]/35 transition-all duration-300">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-5 border-b border-white/[0.06]">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-xs font-mono font-medium text-[#C7A86B]">
                            {event.period}
                          </span>
                          {event.current && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C7A86B]/15 border border-[#C7A86B]/30 text-[#C7A86B] flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Active Enterprise Role
                            </span>
                          )}
                        </div>

                        <h3 className="h3-sub text-lg sm:text-xl font-semibold text-ivory tracking-tight group-hover:text-white transition-colors">
                          {event.role}
                        </h3>

                        <div className="flex flex-wrap items-center gap-2 text-sm text-silver mt-1">
                          <span className="font-medium text-ivory flex items-center gap-1.5">
                            {isWork && <Building2 size={14} className="text-[#C7A86B]" />}
                            {isEducation && <GraduationCap size={15} className="text-[#C7A86B]" />}
                            {isHackathon && <Trophy size={14} className="text-[#C7A86B]" />}
                            {event.organization}
                          </span>
                          <span className="text-white/20">•</span>
                          <span className="text-silver flex items-center gap-1 text-xs">
                            <MapPin size={12} className="text-silver" />
                            {event.location}
                          </span>
                        </div>
                      </div>

                      {event.project && (
                        <div className="sm:text-right pt-1 sm:pt-0">
                          <span className="text-xs font-medium text-silver">
                            {event.project}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Context / Summary */}
                    <p className="text-sm text-silver leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 mb-6">
                      {event.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-sm text-silver leading-relaxed">
                          <span className="text-[#C7A86B] mt-1.5 text-xs flex-shrink-0">◆</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech & Topic Tags */}
                    <div className="pt-4 border-t border-white/[0.04] flex flex-wrap items-center gap-1.5">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="tag-standard hover:border-[#C7A86B]/40 hover:text-ivory transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

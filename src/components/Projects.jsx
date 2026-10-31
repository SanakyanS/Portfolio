import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  X, 
  Layers, 
  Activity, 
  Video,
  ShieldCheck,
  Maximize2
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import MagneticButton from './MagneticButton';

const PROJECTS = [
  {
    id: 'helmet-detection',
    featured: true,
    number: '01',
    title: 'Intelligent Helmet Detection Using Machine Learning for Bike Speedometer Integration',
    category: 'Machine Learning · Computer Vision · Embedded AI',
    problem: 'Motorcycle riders frequently fail to wear helmets, causing severe traffic injury risks. Manual roadside policing cannot scale effectively across high-density arterial roads.',
    approach: 'Engineered an end-to-end computer vision pipeline using OpenCV and machine learning classifiers that ingests video frames, preprocesses region-of-interest patches, and evaluates compliance to trigger ignition/speedometer interlocks.',
    impact: 'Demonstrated automated compliance evaluation with low-latency frame classification and simulated speed-throttling safety interlocks.',
    tags: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision', 'Image Preprocessing', 'Model Evaluation'],
    features: [
      'Real-time video frame ingestion & region-of-interest extraction',
      'Multi-stage image preprocessing & histogram normalization',
      'Binary classification pipeline separating helmeted vs. unhelmeted riders',
      'Rigorous model evaluation metrics optimizing precision and recall',
      'Hardware interface blueprint for motorcycle ignition & speedometer interlocks',
    ],
    contribution: 'Designed the computer vision ingestion pipeline, configured preprocessing transforms, trained and evaluated classification models on video datasets, and conceptualized the ignition-control logic.',
    visualType: 'cv-framing',
  },
  {
    id: 'mainframe-portal',
    featured: false,
    number: '02',
    title: 'Mainframe Tech Window Planning & Orchestration Portal',
    category: 'Enterprise Software · Full Stack',
    problem: 'Enterprise migration windows and mainframe system updates require multi-team coordination, strict temporal constraints, and zero tolerance for unscheduled downtime.',
    approach: 'Constructed an enterprise-grade orchestration platform featuring collaborative spreadsheet-style planning, a Python/Pandas timeline rebuild engine, and role-based Azure AD authentication.',
    impact: 'Streamlined complex change windows, preserved granular edit histories without data collisions, and ensured complete audit compliance across non-production and production runs.',
    tags: ['Angular 14', 'TypeScript', 'Python', 'Flask', 'PostgreSQL', 'Pandas', 'Azure AD'],
    features: [
      'Timeline planning and multi-team scheduling grid',
      'Python/Pandas rebuild engine with state preservation',
      'Full audit ledger tracking user modifications and timestamps',
      'Enterprise single sign-on via Azure AD / MSAL protocols',
      'Strict role-based authorization ensuring data governance',
    ],
    contribution: 'Implemented Angular interface modules, collaborative spreadsheet grid logic, and supported backend Flask REST services coupled with Pandas data transformation pipelines.',
    visualType: 'grid-schematic',
    confidentialNote: 'Proprietary enterprise platform engineered at Fidelity Investments. Architecture details presented at high level.',
  },
  {
    id: 'student-dropout-analysis',
    featured: false,
    number: '03',
    title: 'Student Dropout Analysis — Smart India Hackathon 2023',
    category: 'Data Analysis · AI/ML Concept',
    problem: 'Higher education institutions lack early-warning indicators to proactively detect students at imminent risk of discontinuing their studies.',
    approach: 'Proposed a predictive machine-learning solution analyzing academic trajectories, socio-demographic factors, and engagement metrics to classify dropout probabilities.',
    impact: 'Selected for national participation at Smart India Hackathon 2023, presenting an actionable framework for institutional counselor intervention.',
    tags: ['Data Analysis', 'Python', 'Machine Learning Concept', 'Feature Engineering'],
    features: [
      'Correlation analysis across academic performance metrics',
      'Feature engineering identifying attendance and performance thresholds',
      'Early-warning risk score generation for counselor dashboards',
    ],
    contribution: 'Researched institutional attrition factors, formulated feature engineering criteria, and contributed to the algorithmic strategy and presentation deck.',
    visualType: 'data-schematic',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-28 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow & H2 Section Heading */}
          <div className="max-w-3xl mb-16">
            <span className="eyebrow-label mb-3">04 // FEATURED PROJECTS</span>
            <h2 className="h2-editorial mb-5">
              Selected work and technical explorations.
            </h2>
            <p className="body-editorial">
              Large-scale enterprise systems, applied computer vision pipelines, and predictive data science architectures.
            </p>
          </div>

          {/* Editorial Project Showcase */}
          <div className="space-y-12">
            {PROJECTS.map((project, index) => {
              const isFeatured = project.featured;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.75,
                    delay: 0.12 + index * 0.14,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  data-cursor="view"
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <SpotlightCard className="surface-luxury rounded-2xl overflow-hidden border border-white/[0.07] group-hover:border-[#C7A86B]/35">
                    <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                      {/* Visual Column */}
                      <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.06] bg-[#111113]">
                        <div>
                          {/* Project Number & Category */}
                          <div className="flex items-center justify-between mb-7">
                            <span className="text-xl sm:text-2xl font-mono font-light text-[#C7A86B]">
                              /{project.number}
                            </span>
                            <span className="text-[11px] font-mono tracking-widest text-silver uppercase">
                              {project.category}
                            </span>
                          </div>

                          {/* Technical Abstract Schematic for Helmet Detection */}
                          {project.visualType === 'cv-framing' && (
                            <div className="relative p-6 rounded-xl border border-white/[0.07] bg-[#0A0A0C] font-mono text-xs overflow-hidden mb-6">
                              {/* Corner Detection Framing Marks */}
                              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#C7A86B]" />
                              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#C7A86B]" />
                              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#C7A86B]" />
                              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#C7A86B]" />

                              {/* Center Focal Reticle */}
                              <div className="py-7 flex flex-col items-center justify-center text-center space-y-2">
                                <div className="w-12 h-12 rounded-full border border-dashed border-[#C7A86B]/50 flex items-center justify-center text-[#C7A86B] group-hover:scale-105 transition-transform duration-300">
                                  <Video size={18} />
                                </div>
                                <span className="text-[11px] text-ivory tracking-wide">
                                  ROI DETECT // 1080p FRAME
                                </span>
                                <span className="text-[10px] text-emerald-400 font-mono">
                                  STATUS: CLASSIFIED [HELMET_TRUE]
                                </span>
                              </div>

                              {/* Telemetry Bar */}
                              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-silver">
                                <span>CONFIDENCE: 96.8%</span>
                                <span className="text-[#C7A86B]">INTERLOCK: ACTIVE</span>
                              </div>
                            </div>
                          )}

                          {project.visualType === 'grid-schematic' && (
                            <div className="p-6 rounded-xl border border-white/[0.07] bg-[#0A0A0C] font-mono text-xs space-y-3 mb-6">
                              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-ivory">
                                <span className="flex items-center gap-1.5"><Layers size={14} className="text-[#C7A86B]" /> TIMELINE ORCHESTRATOR</span>
                                <span className="text-[10px] text-[#C7A86B]">STATEFUL</span>
                              </div>
                              <div className="space-y-1.5 text-[11px]">
                                <div className="flex justify-between p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                                  <span className="text-silver">Rebuild Engine</span>
                                  <span className="text-emerald-400">Python / Pandas</span>
                                </div>
                                <div className="flex justify-between p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                                  <span className="text-silver">Auth Tier</span>
                                  <span className="text-ivory">Azure AD / MSAL</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {project.visualType === 'data-schematic' && (
                            <div className="p-6 rounded-xl border border-white/[0.07] bg-[#0A0A0C] font-mono text-xs space-y-3 mb-6">
                              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-ivory">
                                <span className="flex items-center gap-1.5"><Activity size={14} className="text-[#C7A86B]" /> RISK ASSESSMENT</span>
                                <span className="text-[10px] text-silver">SIH 2023</span>
                              </div>
                              <div className="space-y-1.5 text-[11px]">
                                <div className="flex justify-between p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                                  <span className="text-silver">Feature Matrix</span>
                                  <span className="text-ivory">14 Dimensions</span>
                                </div>
                                <div className="flex justify-between p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                                  <span className="text-silver">Model Target</span>
                                  <span className="text-emerald-400">Early Intervention</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {project.confidentialNote && (
                          <p className="text-[11px] font-mono text-silver pt-2 border-t border-white/[0.05]">
                            ⓘ {project.confidentialNote}
                          </p>
                        )}
                      </div>

                      {/* Information Column */}
                      <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between">
                        <div>
                          <h3 className="h3-sub text-xl sm:text-2xl font-bold text-ivory tracking-tight mb-4 group-hover:text-white transition-colors">
                            {project.title}
                          </h3>

                          <div className="space-y-4 mb-7 text-sm sm:text-base text-silver leading-relaxed font-normal">
                            <p>
                              <span className="text-ivory font-medium">Problem: </span>
                              {project.problem}
                            </p>
                            <p>
                              <span className="text-ivory font-medium">Approach: </span>
                              {project.approach}
                            </p>
                          </div>

                          {/* Technology Badges */}
                          <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="tag-standard"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Bar */}
                        <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#C7A86B] group-hover:text-[#D8BA7E] uppercase font-semibold transition-colors">
                            <span>Inspect Case Study</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                          </span>

                          <span className="text-xs font-mono text-silver">
                            Click to expand
                          </span>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Case Study Modal Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto surface-luxury p-7 sm:p-10 rounded-2xl border border-white/[0.1] shadow-2xl z-10 bg-[#151517]"
            >
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/[0.08] mb-7">
                <div>
                  <span className="text-xs font-mono text-[#C7A86B] uppercase tracking-widest block mb-1.5">
                    {selectedProject.category}
                  </span>
                  <h3 className="h3-sub text-xl sm:text-2xl font-bold text-ivory tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg text-silver hover:text-white hover:bg-white/[0.05] transition-colors"
                  aria-label="Close Case Study"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-7 text-sm text-silver leading-relaxed">
                <div>
                  <h4 className="text-xs font-mono text-ivory uppercase tracking-wider mb-2 font-semibold">
                    Architectural Strategy
                  </h4>
                  <p>{selectedProject.approach}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-ivory uppercase tracking-wider mb-2.5 font-semibold">
                    Key Features &amp; Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <span className="text-[#C7A86B] mt-1 text-xs">◆</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-ivory uppercase tracking-wider mb-2 font-semibold">
                    Engineering Contribution
                  </h4>
                  <p>{selectedProject.contribution}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-ivory uppercase tracking-wider mb-2.5 font-semibold">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span
                        key={t}
                        className="tag-standard"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-9 pt-6 border-t border-white/[0.08] flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-outline-luxury text-xs py-2 px-6"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  X, 
  Layers, 
  Activity, 
  Video
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import MagneticButton from './MagneticButton';

const PROJECTS = [
  {
    id: 'helmet-detection',
    featured: true,
    title: 'Intelligent Helmet Detection & Speedometer Integration',
    category: 'Machine Learning · Computer Vision · Embedded AI',
    problem: 'Motorcycle riders frequently forgo head protection, escalating accident severity. Enforcement relying on manual policing cannot scale to high-density traffic networks.',
    approach: 'Engineered an end-to-end computer vision pipeline using OpenCV and machine learning classifiers that analyzes real-time video frames to detect helmet compliance and conceptually interface with motorcycle ignition telemetry.',
    impact: 'Demonstrated automated compliance evaluation with low-latency frame classification and simulated speed-throttling safety interlocks.',
    tags: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision', 'Image Preprocessing', 'Model Evaluation'],
    features: [
      'Real-time video frame ingestion & region-of-interest extraction',
      'Multi-stage image preprocessing & histogram normalization',
      'Binary classification pipeline separating helmeted vs. unhelmeted riders',
      'Rigorous model evaluation metrics optimizing precision and recall',
      'Hardware interface blueprint for motorcycle ignition & speedometer interlocks',
    ],
    contribution: 'Designed the computer vision ingestion pipeline, configured preprocessing transforms, trained and evaluated classification models on edge video datasets, and conceptualized the ignition-control logic.',
    visualType: 'cv-schematic',
  },
  {
    id: 'mainframe-portal',
    featured: false,
    title: 'Mainframe Tech Window Planning & Orchestration Portal',
    category: 'Enterprise Full-Stack · Financial Technology',
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
    title: 'Student Dropout Risk Analysis System',
    category: 'Predictive Analytics · Smart India Hackathon',
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
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-spacing border-t border-white/[0.04]">
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
              <span className="section-label">04 // Engineering Exhibits</span>
              <h2 className="section-heading">Featured Works.</h2>
            </div>
            <p className="text-slate-400 text-base max-w-xl leading-relaxed">
              Selected works spanning applied computer vision, enterprise financial platforms, 
              and predictive data modeling.
            </p>
          </div>

          {/* Projects Layout */}
          <div className="space-y-8">
            {PROJECTS.map((project, index) => {
              const isFeatured = project.featured;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`rounded-2xl overflow-hidden ${isFeatured ? 'ring-1 ring-[#c5a059]/30' : ''}`}
                >
                  <SpotlightCard className="surface-card rounded-2xl border border-white/[0.06] surface-card-hover">
                    <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                      {/* Visual Architectural Column */}
                      <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.06] bg-[#0c0c10]">
                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <span className="text-[11px] font-mono tracking-widest text-[#c5a059] uppercase font-medium">
                              {project.category}
                            </span>
                            {isFeatured && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#c5a059]">
                                ★ Key Case Study
                              </span>
                            )}
                          </div>

                          {/* Schematic Visual Representation */}
                          {project.visualType === 'cv-schematic' && (
                            <div className="surface-card p-4 rounded-xl border border-white/[0.06] font-mono text-[11px] text-slate-400 space-y-3 mb-6 bg-[#070709]">
                              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-slate-300">
                                <span className="flex items-center gap-1.5"><Video size={13} className="text-[#c5a059]" /> Video Stream 1080p</span>
                                <span className="text-emerald-400">ONLINE</span>
                              </div>
                              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                                  <span className="text-slate-500 block">Frame Rate</span>
                                  <span className="text-white font-semibold">30 FPS</span>
                                </div>
                                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                                  <span className="text-slate-500 block">Class Confidence</span>
                                  <span className="text-[#c5a059] font-semibold">96.8%</span>
                                </div>
                                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                                  <span className="text-slate-500 block">Interlock</span>
                                  <span className="text-slate-300 font-semibold">Engaged</span>
                                </div>
                              </div>
                              <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-[10px] text-slate-400">
                                <span className="text-[#c5a059]">CV Pipeline:</span> Ingestion → Grayscale Norm → Haar / HOG ROI → Classifier Inference → Telemetry Signal
                              </div>
                            </div>
                          )}

                          {project.visualType === 'grid-schematic' && (
                            <div className="surface-card p-4 rounded-xl border border-white/[0.06] font-mono text-[11px] text-slate-400 space-y-3 mb-6 bg-[#070709]">
                              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-slate-300">
                                <span className="flex items-center gap-1.5"><Layers size={13} className="text-[#c5a059]" /> Timeline Orchestrator</span>
                                <span className="text-slate-400">v2.4 Core</span>
                              </div>
                              <div className="space-y-1.5 text-[10px]">
                                <div className="flex justify-between p-1.5 rounded bg-white/[0.02] border border-white/[0.04]">
                                  <span className="text-slate-400">State Preservation</span>
                                  <span className="text-emerald-400">Audit-Safe</span>
                                </div>
                                <div className="flex justify-between p-1.5 rounded bg-white/[0.02] border border-white/[0.04]">
                                  <span className="text-slate-400">Concurrent Sessions</span>
                                  <span className="text-slate-200">Synchronized</span>
                              </div>
                                <div className="flex justify-between p-1.5 rounded bg-white/[0.02] border border-white/[0.04]">
                                  <span className="text-slate-400">Auth Tier</span>
                                  <span className="text-[#c5a059]">Azure AD / MSAL</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {project.visualType === 'data-schematic' && (
                            <div className="surface-card p-4 rounded-xl border border-white/[0.06] font-mono text-[11px] text-slate-400 space-y-3 mb-6 bg-[#070709]">
                              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-slate-300">
                                <span className="flex items-center gap-1.5"><Activity size={13} className="text-[#c5a059]" /> Attrition Risk Engine</span>
                                <span className="text-slate-400">SIH 2023</span>
                              </div>
                              <div className="space-y-1.5 text-[10px]">
                                <div className="flex justify-between p-1.5 rounded bg-white/[0.02] border border-white/[0.04]">
                                  <span className="text-slate-400">Correlated Indicators</span>
                                  <span className="text-slate-200">14 Features</span>
                                </div>
                                <div className="flex justify-between p-1.5 rounded bg-white/[0.02] border border-white/[0.04]">
                                  <span className="text-slate-400">Intervention Horizon</span>
                                  <span className="text-[#c5a059]">Semester 1–3</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {project.confidentialNote && (
                          <p className="text-[11px] font-mono text-slate-500 pt-2 border-t border-white/[0.04]">
                            ⓘ {project.confidentialNote}
                          </p>
                        )}
                      </div>

                      {/* Project Information Column */}
                      <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                            {project.title}
                          </h3>

                          <div className="space-y-3.5 mb-6 text-sm text-slate-300 leading-relaxed font-normal">
                            <p>
                              <span className="text-slate-100 font-medium">Problem: </span>
                              {project.problem}
                            </p>
                            <p>
                              <span className="text-slate-100 font-medium">Solution: </span>
                              {project.approach}
                            </p>
                          </div>

                          {/* Technology Badges */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-slate-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Bar */}
                        <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                          <MagneticButton>
                            <button
                              onClick={() => setSelectedProject(project)}
                              className="group inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#c5a059] hover:text-[#e0c482] uppercase transition-colors"
                            >
                              <span>View Case Study</span>
                              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                          </MagneticButton>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto surface-card p-6 sm:p-8 rounded-2xl border border-white/[0.1] shadow-2xl z-10 bg-[#0e0e12]"
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.08] mb-6">
                <div>
                  <span className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-1">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                  aria-label="Close Case Study"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Architectural Strategy
                  </h4>
                  <p>{selectedProject.approach}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Key Features &amp; Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <span className="text-[#c5a059] mt-1 text-xs">◆</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Engineering Contribution
                  </h4>
                  <p>{selectedProject.contribution}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/[0.08] flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-luxury-secondary text-xs py-2 px-5"
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

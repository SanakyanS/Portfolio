import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  X, 
  Layers, 
  Activity, 
  Video,
  ShieldCheck
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import MagneticButton from './MagneticButton';

const PROJECTS = [
  {
    id: 'helmet-detection',
    featured: true,
    title: 'Intelligent Helmet Detection Using Machine Learning for Bike Speedometer Integration',
    category: 'Computer Vision · Machine Learning · Python',
    problem: 'Motorcycle accidents in high-density traffic are made far worse when riders do not wear helmets. Manual roadside monitoring by traffic police cannot cover all vehicles consistently.',
    approach: 'I built an end-to-end computer vision pipeline that processes camera video streams, normalizes and preprocesses image frames, and uses a trained machine learning classifier to detect helmet presence in real time. The system was conceptually designed to send an interlock signal to a motorcycle speedometer and ignition unit to enforce rider safety.',
    impact: 'Successfully achieved high classification accuracy on test video footage with low frame-processing latency, proving the feasibility of automated vehicle ignition safety interlocks.',
    tags: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision', 'Image Preprocessing', 'Model Evaluation'],
    features: [
      'Real-time video frame ingestion and region-of-interest cropping',
      'Multi-stage image preprocessing, grayscale conversion, and histogram equalization',
      'Binary classification pipeline separating helmeted from unhelmeted riders',
      'Model evaluation optimizing for low false-positive rates',
      'Hardware interface concept linking classification state to speedometer telemetry',
    ],
    contribution: 'Implemented the complete Python/OpenCV pipeline, prepared and preprocessed video training data, evaluated classifier accuracy, and designed the motorcycle ignition interlock logic.',
    visualType: 'cv-framing',
  },
  {
    id: 'mainframe-portal',
    featured: false,
    title: 'Mainframe Tech Window Planning & Orchestration Portal',
    category: 'Enterprise Full-Stack · Fidelity Investments',
    problem: 'Scheduling mainframe migration windows across large engineering teams is high-stakes. Teams need to collaborate on scheduling grids without overwriting each other or losing change history.',
    approach: 'Contributed to an enterprise full-stack web application featuring collaborative spreadsheet-style planning in Angular, a Python/Pandas timeline rebuild engine that preserves user edits, and Azure AD single sign-on.',
    impact: 'Streamlined complex change management windows, eliminated manual scheduling conflicts, and maintained an audit trail for mission-critical production migrations.',
    tags: ['Angular 14', 'TypeScript', 'Python', 'Flask', 'PostgreSQL', 'Pandas', 'Azure AD'],
    features: [
      'Spreadsheet-style collaborative scheduling grid built in Angular',
      'Python/Pandas rebuild engine that preserves granular chronological edits',
      'Audit log tracking every user edit, timestamp, and state change',
      'Enterprise single sign-on integration via Azure AD and MSAL',
      'Role-based access control protecting critical production plans',
    ],
    contribution: 'Developed Angular interface components for the scheduling grid, supported backend Flask APIs, and contributed to the timeline rebuild logic using Pandas.',
    visualType: 'grid-schematic',
    confidentialNote: 'Internal enterprise application developed at Fidelity Investments. Architecture shared at a high level without proprietary details.',
  },
  {
    id: 'student-dropout-analysis',
    featured: false,
    title: 'Student Dropout Analysis — Smart India Hackathon 2023',
    category: 'Data Analysis · Machine Learning Concept',
    problem: 'College faculty and counselors often discover that a student is dropping out only when it is too late to intervene.',
    approach: 'Proposed a predictive machine learning model to evaluate historical academic records, attendance trends, and socio-demographic indicators to flag students who may need proactive counseling.',
    impact: 'Selected as a national finalist project at the Smart India Hackathon 2023, presenting an actionable dashboard concept for university administrators.',
    tags: ['Data Analysis', 'Python', 'Machine Learning Concept', 'Feature Engineering'],
    features: [
      'Analysis of correlation between early semester attendance and course completion',
      'Feature engineering identifying high-risk performance drop thresholds',
      'Early warning dashboard concept designed for academic advisors',
    ],
    contribution: 'Researched attrition factors in Indian higher education, contributed to feature selection, and co-developed the algorithmic concept and presentation.',
    visualType: 'data-schematic',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 sm:py-28 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Natural Section Header */}
          <div className="max-w-3xl mb-14">
            <span className="eyebrow-label mb-3">SELECTED PROJECTS</span>
            <h2 className="h2-editorial mb-4">
              Selected work and technical explorations.
            </h2>
            <p className="body-editorial">
              A collection of projects highlighting enterprise software engineering, computer vision pipelines, and applied machine learning.
            </p>
          </div>

          {/* Project Showcase */}
          <div className="space-y-10">
            {PROJECTS.map((project, index) => {
              const isFeatured = project.featured;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.65,
                    delay: 0.1 + index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  data-cursor="view"
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <SpotlightCard className="surface-luxury rounded-2xl overflow-hidden border border-white/[0.07] group-hover:border-[#C7A86B]/35">
                    <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                      {/* Left Visual Column */}
                      <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.06] bg-[#111113]">
                        <div>
                          <div className="flex items-center justify-between mb-5">
                            <span className="text-xs font-mono font-medium text-[#C7A86B] uppercase tracking-wider">
                              {project.category}
                            </span>
                            {isFeatured && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C7A86B]/15 border border-[#C7A86B]/30 text-[#C7A86B]">
                                Featured Project
                              </span>
                            )}
                          </div>

                          {/* Technical Abstract Graphic for Helmet Detection */}
                          {project.visualType === 'cv-framing' && (
                            <div className="relative p-6 rounded-xl border border-white/[0.07] bg-[#0A0A0C] font-mono text-xs overflow-hidden mb-5">
                              {/* Corner marks */}
                              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#C7A86B]" />
                              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#C7A86B]" />
                              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#C7A86B]" />
                              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#C7A86B]" />

                              {/* Center Graphic */}
                              <div className="py-6 flex flex-col items-center justify-center text-center space-y-2">
                                <div className="w-11 h-11 rounded-full border border-dashed border-[#C7A86B]/60 flex items-center justify-center text-[#C7A86B] group-hover:scale-105 transition-transform duration-300">
                                  <Video size={17} />
                                </div>
                                <span className="text-[11px] text-ivory tracking-wide">
                                  Video Frame Preprocessing
                                </span>
                                <span className="text-[10px] text-emerald-400 font-mono">
                                  Classification: Helmet Detected
                                </span>
                              </div>

                              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-silver">
                                <span>Edge Inference: 30 FPS</span>
                                <span className="text-[#C7A86B]">Interlock Logic: Ready</span>
                              </div>
                            </div>
                          )}

                          {project.visualType === 'grid-schematic' && (
                            <div className="p-5 rounded-xl border border-white/[0.07] bg-[#0A0A0C] font-mono text-xs space-y-2.5 mb-5">
                              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-ivory">
                                <span className="flex items-center gap-1.5"><Layers size={14} className="text-[#C7A86B]" /> Scheduling Grid</span>
                                <span className="text-[10px] text-emerald-400">Collaborative</span>
                              </div>
                              <div className="space-y-1.5 text-[11px]">
                                <div className="flex justify-between p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                                  <span className="text-silver">Timeline Engine</span>
                                  <span className="text-ivory font-medium">Python / Pandas</span>
                                </div>
                                <div className="flex justify-between p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                                  <span className="text-silver">Authentication</span>
                                  <span className="text-[#C7A86B] font-medium">Azure AD / MSAL</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {project.visualType === 'data-schematic' && (
                            <div className="p-5 rounded-xl border border-white/[0.07] bg-[#0A0A0C] font-mono text-xs space-y-2.5 mb-5">
                              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-ivory">
                                <span className="flex items-center gap-1.5"><Activity size={14} className="text-[#C7A86B]" /> Predictive Model</span>
                                <span className="text-[10px] text-silver">Hackathon Finalist</span>
                              </div>
                              <div className="space-y-1.5 text-[11px]">
                                <div className="flex justify-between p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                                  <span className="text-silver">Data Factors</span>
                                  <span className="text-ivory font-medium">Academic &amp; Attendance</span>
                                </div>
                                <div className="flex justify-between p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                                  <span className="text-silver">Goal</span>
                                  <span className="text-emerald-400 font-medium">Proactive Retention</span>
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

                      {/* Right Information Column */}
                      <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="h3-sub text-lg sm:text-xl font-bold text-ivory tracking-tight mb-3 group-hover:text-white transition-colors">
                            {project.title}
                          </h3>

                          <div className="space-y-3 mb-6 text-sm text-silver leading-relaxed font-normal">
                            <p>
                              <span className="text-ivory font-medium">Problem: </span>
                              {project.problem}
                            </p>
                            <p>
                              <span className="text-ivory font-medium">Solution: </span>
                              {project.approach}
                            </p>
                          </div>

                          {/* Tech Badges */}
                          <div className="flex flex-wrap gap-1.5 mb-6">
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

                        {/* Action Link */}
                        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                          <span className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-[#C7A86B] group-hover:text-[#D8BA7E] uppercase transition-colors">
                            <span>View Case Study Details</span>
                            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                          </span>

                          <span className="text-xs font-mono text-silver hidden sm:inline">
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
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto surface-luxury p-6 sm:p-8 rounded-2xl border border-white/[0.1] shadow-2xl z-10 bg-[#151517]"
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.08] mb-6">
                <div>
                  <span className="text-xs font-mono text-[#C7A86B] uppercase tracking-wider block mb-1">
                    {selectedProject.category}
                  </span>
                  <h3 className="h3-sub text-lg sm:text-xl font-bold text-ivory tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-silver hover:text-white hover:bg-white/[0.05] transition-colors"
                  aria-label="Close Case Study"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-6 text-sm text-silver leading-relaxed">
                <div>
                  <h4 className="text-xs font-mono text-ivory uppercase tracking-wider mb-1.5 font-semibold">
                    How It Works
                  </h4>
                  <p>{selectedProject.approach}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-ivory uppercase tracking-wider mb-2 font-semibold">
                    Key Features
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
                  <h4 className="text-xs font-mono text-ivory uppercase tracking-wider mb-1.5 font-semibold">
                    My Role &amp; Contribution
                  </h4>
                  <p>{selectedProject.contribution}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-ivory uppercase tracking-wider mb-2 font-semibold">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
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

              <div className="mt-8 pt-5 border-t border-white/[0.08] flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-outline-luxury text-xs py-2 px-5"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

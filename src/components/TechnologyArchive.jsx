import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/audio';
import { 
  Code2, Database, Layout, Wrench, Brain, Layers, 
  Sparkles, X, ChevronRight, CheckCircle2, ShieldAlert
} from 'lucide-react';

export default function TechnologyArchive() {
  const [selectedArtifact, setSelectedArtifact] = useState(null);

  const categories = [
    {
      id: 'programming',
      title: 'PROGRAMMING LANGUAGES',
      icon: Code2,
      skills: [
        {
          name: 'Python',
          level: 'Proficient',
          experience: 'Academic & Projects',
          projects: ['Real-Time Chat Application', 'Data Processing Scripts'],
          related: ['Tkinter', 'Socket Programming', 'OOP', 'Data Analytics'],
          desc: 'High-level language used for building concurrent socket chat servers, backend logic, and data analysis pipelines.',
        },
        {
          name: 'Java',
          level: 'Basics',
          experience: 'Academic Coursework',
          projects: ['OOP Problem Solving'],
          related: ['JVM', 'Data Structures', 'Algorithms'],
          desc: 'Foundational programming language used for mastering Object-Oriented Programming (OOP) paradigms and DSA concepts.',
        },
      ],
    },
    {
      id: 'frontend',
      title: 'FRONTEND ARCHITECTURE',
      icon: Layout,
      skills: [
        {
          name: 'JavaScript (ES6+)',
          level: 'Intermediate / Advanced',
          experience: '2 Internships & Projects',
          projects: ['R.K. Pharma Corporate Website', 'HabitFlow', 'All India Translink'],
          related: ['Async/Await', 'DOM Manipulation', 'Event Loop', 'Fetch API'],
          desc: 'Core language for interactive client-side rendering, dynamic logic execution, and third-party API integrations.',
        },
        {
          name: 'React.js',
          level: 'Learning & Building',
          experience: 'Personal & Exhibition Projects',
          projects: ['Museum Portfolio', 'Interactive Components'],
          related: ['Hooks', 'State Management', 'Vite', 'Component Lifecycle'],
          desc: 'Modern declarative library used to engineer fast, reusable, and single-page web experiences.',
        },
        {
          name: 'HTML5 & CSS3',
          level: 'Expert',
          experience: '2 Internships',
          projects: ['R.K. Pharma Web Portal', 'HabitFlow', 'Translink UI'],
          related: ['Flexbox/Grid', 'Responsive Layouts', 'Glassmorphic CSS', 'Animations'],
          desc: 'Semantic web structuring and modern styling systems engineered for mobile responsiveness and cross-browser consistency.',
        },
        {
          name: 'Bootstrap',
          level: 'Proficient',
          experience: 'All India Translink Internship',
          projects: ['Translink Web Components'],
          related: ['Responsive Grid', 'Utility Classes', 'UI Components'],
          desc: 'Rapid UI prototyping framework used to build mobile-first components and responsive web interfaces.',
        },
      ],
    },
    {
      id: 'backend',
      title: 'BACKEND & DATABASE',
      icon: Database,
      skills: [
        {
          name: 'Node.js',
          level: 'Basics / Intermediate',
          experience: 'Full-Stack Explorations',
          projects: ['REST API Servers'],
          related: ['Express.js', 'NPM', 'JSON APIs', 'Middleware'],
          desc: 'Asynchronous event-driven JavaScript runtime for constructing scalable server-side endpoints and REST microservices.',
        },
        {
          name: 'SQL',
          level: 'Intermediate',
          experience: 'Academic & Relational DBs',
          projects: ['Relational Data Modeling', 'Database Schemas'],
          related: ['Queries', 'Joins', 'Indexes', 'Schema Design'],
          desc: 'Structured query language used to design, query, and manage relational database systems efficiently.',
        },
        {
          name: 'REST APIs',
          level: 'Proficient',
          experience: 'Corporate Web Development',
          projects: ['R.K. Pharma Rich Text Integration', 'Data Fetching'],
          related: ['HTTP Verbs', 'JSON', 'Endpoints', 'CORS'],
          desc: 'Architecture for integrating decoupled client-server data flows and third-party web services.',
        },
      ],
    },
    {
      id: 'tools',
      title: 'DEVELOPER TOOLS & PIPELINES',
      icon: Wrench,
      skills: [
        {
          name: 'GitHub & Git',
          level: 'Proficient',
          experience: 'Remote Workflows & Teamwork',
          projects: ['All India Translink Remote Setup', 'Causeve Agile Sprints'],
          related: ['Branching', 'Merge Conflicts', 'Pull Requests', 'Version Control'],
          desc: 'Distributed version control system for tracking code mutations, code reviews, and remote team collaboration.',
        },
        {
          name: 'VS Code',
          level: 'Daily Workspace',
          experience: 'Full Development Lifecycle',
          projects: ['All Engineering Projects'],
          related: ['Extensions', 'Debugging', 'Terminal Integration'],
          desc: 'Primary integrated development environment optimized with debugging tools, syntax highlighting, and extensions.',
        },
        {
          name: 'Jenkins',
          level: 'CI/CD Basics',
          experience: 'Pipeline Familiarity',
          projects: ['Build & Deployment Automation Basics'],
          related: ['Build Jobs', 'Automation', 'Integration Pipelines'],
          desc: 'Automation server utilized to understand Continuous Integration & Continuous Deployment (CI/CD) pipelines.',
        },
      ],
    },
    {
      id: 'concepts',
      title: 'CONCEPTS & INNOVATION',
      icon: Brain,
      skills: [
        {
          name: 'Data Structures & Algorithms',
          level: 'Intermediate',
          experience: 'Academic & Coding Problem Solving',
          projects: ['Habit Tracking Analytics', 'Chat Room Logic'],
          related: ['Arrays', 'Trees', 'Sorting', 'Time Complexity'],
          desc: 'Fundamental computer science problem-solving structures used to write space- and time-efficient code.',
        },
        {
          name: 'OOPS & SDLC',
          level: 'Core Knowledge',
          experience: 'Academic & Internship Teams',
          projects: ['Corporate Web Releases', 'Agile Weekly Sprints'],
          related: ['Encapsulated Classes', 'Inheritance', 'Agile Sprints', 'Code Quality'],
          desc: 'Object-Oriented Programming and Software Development Life Cycle methodologies applied across production sprints.',
        },
        {
          name: 'AI & Machine Learning',
          level: 'Beginner / Prototyping',
          experience: 'Smart India Hackathon & Certifications',
          projects: ['Student Dropout Analysis', 'Azure AI Foundry Explorations'],
          related: ['Azure AI SDK', 'IBM Chatbots', 'Data Acquisition'],
          desc: 'Exploring artificial intelligence, conversational agents, and machine learning models for predictive insights.',
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-28 relative bg-[#0c0a09] border-t border-[#c9a84c]/10">
      
      {/* Ambient Lighting */}
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] spotlight-gold blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#14110f] border border-[#c9a84c]/30 text-xs font-mono text-[#c9a84c]">
            <Layers className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">HALL III — TECHNOLOGY ARCHIVE</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-extrabold gold-gradient-text tracking-wide">
            TECHNOLOGY ARCHIVE
          </h2>
          <p className="text-sm sm:text-base text-[#b8b8b8] max-w-xl mx-auto font-sans">
            Interactive glass artifacts. Hover or tap any artifact to inspect technical specifications, 
            project links, and engineering parameters.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="space-y-6">
                
                {/* Category Header */}
                <div className="flex items-center space-x-3 border-b border-white/10 pb-3">
                  <div className="p-2 rounded-lg bg-[#14110f] border border-[#c9a84c]/40 text-[#c9a84c]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#fafaf9] tracking-wider">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -6, scale: 1.02 }}
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedArtifact(skill);
                      }}
                      onMouseEnter={() => soundFx.playHover()}
                      data-cursor-hover
                      data-cursor-text="INSPECT"
                      className="glass-card p-6 rounded-2xl cursor-pointer relative group border border-white/10 hover:border-[#c9a84c]/50 transition-all duration-300"
                    >
                      {/* Glow overlay */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c9a84c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#0c0a09] border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] group-hover:border-[#c9a84c] group-hover:shadow-[0_0_15px_rgba(201,168,76,0.3)] transition-all">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <span className="px-2.5 py-1 rounded bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[10px] font-mono text-[#c9a84c]">
                          {skill.level}
                        </span>
                      </div>

                      <h4 className="font-serif text-lg font-bold text-[#fafaf9] group-hover:text-[#c9a84c] transition-colors mb-2">
                        {skill.name}
                      </h4>

                      <p className="text-xs text-[#b8b8b8] line-clamp-2 mb-4 font-sans">
                        {skill.desc}
                      </p>

                      <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] font-mono text-[#c9a84c]">
                        <span>Click to Inspect</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Artifact Detailed Inspection Modal */}
      <AnimatePresence>
        {selectedArtifact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-lg glass-panel p-8 rounded-2xl relative border border-[#c9a84c]/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  setSelectedArtifact(null);
                }}
                className="absolute top-6 right-6 p-2 rounded-lg bg-[#14110f] border border-white/10 text-[#fafaf9] hover:text-[#c9a84c] hover:border-[#c9a84c] transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c] flex items-center justify-center text-[#c9a84c]">
                    <Sparkles className="w-6 h-6 animate-spin-slow" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#fafaf9]">{selectedArtifact.name}</h3>
                    <p className="text-xs font-mono text-[#c9a84c]">MASTERY: {selectedArtifact.level}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-[#b8b8b8]/60 uppercase tracking-widest">DESCRIPTION</h4>
                  <p className="text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans">
                    {selectedArtifact.desc}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-[#b8b8b8]/60 uppercase tracking-widest">EXPERIENCE & USAGE</h4>
                  <div className="p-3 rounded-lg bg-[#0c0a09] border border-white/10 text-xs font-mono text-[#fafaf9]">
                    {selectedArtifact.experience}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-[#b8b8b8]/60 uppercase tracking-widest">FEATURED IN PROJECTS</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedArtifact.projects.map((p) => (
                      <span key={p} className="px-3 py-1 rounded-full bg-[#14110f] border border-[#c9a84c]/30 text-xs font-mono text-[#c9a84c]">
                        ✦ {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-[#b8b8b8]/60 uppercase tracking-widest">RELATED CONCEPTS</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedArtifact.related.map((r) => (
                      <span key={r} className="px-2.5 py-1 rounded bg-white/5 text-[11px] font-mono text-[#b8b8b8]">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedArtifact(null);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#c9a84c] text-[#0c0a09] font-serif font-bold text-xs uppercase tracking-wider hover:bg-[#e6c86e] transition-all"
                  >
                    Close Inspection
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { soundFx } from '../utils/audio';
import { 
  Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2, 
  Sparkles, Award, GraduationCap, Flame
} from 'lucide-react';

export default function CareerTimeline() {
  const milestones = [
    {
      id: 'causeve',
      title: 'Junior Software Developer Intern',
      company: 'Causeve (Hybrid)',
      location: 'Chennai, Tamil Nadu',
      period: 'Oct 2024 – Feb 2025',
      type: 'EXPERIENCE',
      highlight: 'R.K. Pharma Corporate Website Deployment',
      badge: 'Agile & Full Frontend',
      bullets: [
        'Designed, developed, and deployed corporate website for R.K. Pharma, a Singapore-based pharmaceutical distribution company.',
        'Engineered responsive HTML5/CSS3 layouts and JavaScript interactive elements across homepage, about, products, and blog modules.',
        'Integrated third-party libraries for rich text editing and dynamic code syntax highlighting based on target user requests.',
        'Collaborated in an Agile sprint environment, participating in weekly code reviews that improved overall team code quality by 25%.',
        'Adapted to emerging project requirements rapidly, demonstrating strong problem-solving and software engineering capabilities.'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Rich Text APIs', 'Git', 'Agile Sprints']
    },
    {
      id: 'translink',
      title: 'Frontend Developer Intern',
      company: 'All India Translink (Remote)',
      location: 'Chennai, India',
      period: 'Feb 2024 – Apr 2024',
      type: 'EXPERIENCE',
      highlight: '+40% Cross-Browser Optimization',
      badge: 'Remote Collaboration',
      bullets: [
        'Built responsive, high-performance web components using HTML, CSS, Bootstrap, and JavaScript.',
        'Optimized component rendering and cross-browser compatibility, achieving a 40% performance gain.',
        'Collaborated in a remote setup, utilizing Git version control, branch management, and asynchronous developer workflows.'
      ],
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Git', 'Cross-Browser Testing']
    },
    {
      id: 'hackathon',
      title: 'Smart India Hackathon 2023',
      company: 'Internal Hackathon Innovation',
      location: 'National Innovation Forum',
      period: 'Sept 2023 – Dec 2023',
      type: 'HACKATHON',
      highlight: 'Student Dropout Analysis Platform',
      badge: 'Data & Policy AI Solution',
      bullets: [
        'Presented data-driven analytical solution for "STUDENT DROPOUT ANALYSIS FOR SCHOOL EDUCATION".',
        'Engineered predictive risk models to recognize key socio-economic metrics causing dropout rates and assist policy framing.'
      ],
      tech: ['Python', 'Data Analytics', 'Problem Statement Architecture', 'Policy Framing']
    },
    {
      id: 'education',
      title: 'B.Tech in Information Technology',
      company: 'Vels Institute of Science Technology and Advanced Studies (VISTAS)',
      location: 'Chennai, India',
      period: 'Aug 2021 – May 2025',
      type: 'EDUCATION',
      highlight: 'CGPA: 7.96 / 10.0',
      badge: 'Bachelor of Technology',
      bullets: [
        'Specialized in Software Engineering, Web Technologies, Data Structures & Algorithms, and Relational Databases.',
        'Maintained high academic standard with CGPA of 7.96, actively leading tech team initiatives.'
      ],
      tech: ['Data Structures', 'OOPS', 'SDLC', 'SQL', 'Web Architecture']
    }
  ];

  return (
    <section id="timeline" className="py-28 relative bg-[#0c0a09] border-t border-[#c9a84c]/10">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] spotlight-gold blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#14110f] border border-[#c9a84c]/30 text-xs font-mono text-[#c9a84c]">
            <Briefcase className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">HALL IV — CAREER TIMELINE</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-extrabold gold-gradient-text tracking-wide">
            CAREER TIMELINE
          </h2>
          <p className="text-sm sm:text-base text-[#b8b8b8] max-w-xl mx-auto font-sans">
            Chronological log of professional software engineering internships, hackathons, and academic milestones.
          </p>
        </div>

        {/* Vertical Glowing Timeline Structure */}
        <div className="relative wrap overflow-hidden p-2 sm:p-10">
          
          {/* Glowing Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c9a84c] via-[#8b1e1e] to-[#c9a84c] transform -translate-x-1/2 shadow-[0_0_15px_#c9a84c]" />

          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`mb-16 flex justify-between items-center w-full ${
                  isEven ? 'sm:flex-row-reverse' : 'sm:flex-row'
                } flex-col sm:flex-row pl-10 sm:pl-0`}
              >
                {/* Empty side for desktop spacing */}
                <div className="hidden sm:block w-5/12" />

                {/* Central Glowing Node */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#14110f] border-2 border-[#c9a84c] shadow-[0_0_20px_#c9a84c] flex items-center justify-center z-20">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c9a84c] animate-pulse" />
                </div>

                {/* Timeline Card Content */}
                <motion.div
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="w-full sm:w-5/12 glass-panel p-6 sm:p-8 rounded-2xl border border-[#c9a84c]/20 hover:border-[#c9a84c]/60 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.7)] relative group"
                >
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[10px] font-mono text-[#c9a84c] uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-[#b8b8b8] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#c9a84c]" /> {item.period}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#fafaf9] group-hover:text-[#c9a84c] transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono text-[#c9a84c] mt-1 mb-4 flex items-center gap-2">
                    <span>{item.company}</span>
                    <span>•</span>
                    <span className="text-[#b8b8b8] flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {item.location}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#b8b8b8] leading-relaxed font-sans">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded bg-[#0c0a09] border border-white/10 text-[11px] font-mono text-[#fafaf9]">
                        {t}
                      </span>
                    ))}
                  </div>

                </motion.div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

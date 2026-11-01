import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Cpu, Sparkles, Users, Award, Briefcase, GraduationCap } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import AnimatedCounter from './AnimatedCounter';

const FOCUS_AREAS = [
  {
    icon: Layers,
    title: 'Enterprise Full-Stack',
    description: 'Building internal tools and web apps using Angular, TypeScript, Python, Flask, and PostgreSQL with a focus on usability and reliability.',
  },
  {
    icon: Cpu,
    title: 'Computer Vision & ML',
    description: 'Hands-on experience training classifiers, preprocessing video streams with OpenCV, and evaluating models on real-world datasets.',
  },
  {
    icon: Sparkles,
    title: 'Applied AI & LLMs',
    description: 'Exploring practical generative AI workflows, structured prompt engineering, and the fundamentals of Retrieval-Augmented Generation (RAG).',
  },
  {
    icon: Users,
    title: 'Collaborative Engineering',
    description: 'Comfortable with Agile sprints, code reviews, Git collaboration, and communicating across cross-functional engineering teams.',
  },
];

const METRICS = [
  {
    label: 'B.Tech IT CGPA',
    value: 7.96,
    decimals: 2,
    suffix: ' / 10',
    subtitle: 'Vels Institute of Science & Technology',
    icon: GraduationCap,
  },
  {
    label: 'Enterprise Role',
    value: 2026,
    decimals: 0,
    prefix: '',
    suffix: '',
    subtitle: 'Software Engineer Apprentice at Fidelity',
    icon: Briefcase,
  },
  {
    label: 'Professional Certifications',
    value: 7,
    decimals: 0,
    suffix: '+',
    subtitle: 'Microsoft, Coursera, IBM, Vanderbilt',
    icon: Award,
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 sm:py-28 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Natural Human Section Header */}
          <div className="max-w-3xl mb-14">
            <span className="eyebrow-label mb-3">ABOUT ME</span>
            <h2 className="h2-editorial mb-5">
              A software engineer focused on building useful systems.
            </h2>
            <div className="space-y-4 body-editorial">
              <p>
                I'm Sanakyan, a software engineer based in Chennai, India. Right now, I'm at <span className="text-ivory font-medium">Fidelity Investments</span> where I build and maintain internal enterprise applications with Angular, TypeScript, Python/Flask, and PostgreSQL.
              </p>
              <p>
                My background is in Information Technology (B.Tech from Vels Institute, graduating with a 7.96 CGPA). Over the past couple of years, I've worked across two software internships and an enterprise apprenticeship, giving me practical experience in shipping code, collaborating in Agile sprints, and solving real user problems.
              </p>
              <p>
                Beyond standard web development, I have a strong interest in computer vision and applied machine learning. Whether it's training an image classifier to detect motorcycle helmets or experimenting with LLMs to streamline workflows, I love turning technical ideas into working code.
              </p>
            </div>
          </div>

          {/* Animated Highlight Metrics Strip */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {METRICS.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SpotlightCard className="surface-luxury p-5 rounded-xl border border-white/[0.06] flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C7A86B]/10 border border-[#C7A86B]/25 flex items-center justify-center text-[#C7A86B] shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-semibold text-ivory tracking-tight">
                        <AnimatedCounter
                          value={metric.value}
                          decimals={metric.decimals}
                          prefix={metric.prefix || ''}
                          suffix={metric.suffix || ''}
                        />
                      </div>
                      <div className="text-xs font-mono text-silver uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>

          {/* Core Areas of Competence */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FOCUS_AREAS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <SpotlightCard className="surface-luxury p-6 rounded-xl flex flex-col justify-between h-full border border-white/[0.06] hover:border-[#C7A86B]/40 transition-colors duration-300">
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-5 text-[#C7A86B] group-hover:scale-110 transition-transform duration-300">
                        <Icon size={18} />
                      </div>
                      <h3 className="h3-sub text-base font-semibold text-ivory mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-silver leading-relaxed font-normal">
                        {item.description}
                      </p>
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

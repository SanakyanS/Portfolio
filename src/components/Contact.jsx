import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const CONTACT_CHANNELS = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sanakyan2004@gmail.com',
      href: 'mailto:sanakyan2004@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sanakyan-s',
      href: 'https://linkedin.com/in/sanakyan-s',
    },
    {
      icon: Phone,
      label: 'Telephone',
      value: '+91 7604930970',
      href: 'tel:+917604930970',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-28 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow & H2 Section Heading */}
          <div className="max-w-3xl mb-16">
            <span className="eyebrow-label mb-3">06 // LET'S CONNECT</span>
            <h2 className="h2-editorial mb-5">
              Let's build something meaningful.
            </h2>
            <p className="body-editorial">
              Open to conversations around software engineering, full-stack development and intelligent technology.
              Feel free to connect directly or submit an inquiry below.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Direct Communication Channels Column */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="h3-sub text-xs font-mono uppercase tracking-widest text-[#C7A86B] mb-5 font-semibold">
                Direct Communication Channels
              </h3>

              <div className="space-y-3.5">
                {CONTACT_CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  const content = (
                    <SpotlightCard className="surface-luxury p-5 rounded-xl border border-white/[0.06] flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#C7A86B] group-hover:border-[#C7A86B]/45 transition-colors">
                          <Icon size={17} />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono text-silver uppercase tracking-wider block mb-0.5">
                            {channel.label}
                          </span>
                          <span className="text-sm font-medium text-ivory group-hover:text-white transition-colors">
                            {channel.value}
                          </span>
                        </div>
                      </div>
                      {channel.href && (
                        <ArrowUpRight size={15} className="text-silver group-hover:text-[#C7A86B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      )}
                    </SpotlightCard>
                  );

                  return channel.href ? (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={channel.label}>{content}</div>
                  );
                })}
              </div>

              {/* Status Note */}
              <div className="surface-luxury p-5 rounded-xl border border-white/[0.06] text-xs text-silver font-mono space-y-1.5 mt-6">
                <span className="text-[#C7A86B] block font-semibold">// Availability</span>
                <p className="text-silver">Typically responding within 24 hours to professional opportunities and technical inquiries.</p>
              </div>
            </div>

            {/* Inscription / Form Column */}
            <div className="lg:col-span-7">
              <SpotlightCard className="surface-luxury p-8 sm:p-10 rounded-2xl border border-white/[0.07]">
                <h3 className="h3-sub text-xl font-bold text-ivory mb-2 tracking-tight">
                  Send Me a Message
                </h3>
                <p className="text-xs text-silver mb-8 font-mono">
                  Direct correspondence pipeline.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-14 text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#C7A86B]/15 border border-[#C7A86B]/30 flex items-center justify-center mx-auto text-[#C7A86B]">
                      <CheckCircle2 size={24} />
                    </div>
                    <h4 className="h3-sub text-lg font-semibold text-ivory tracking-tight">
                      Message Inscribed
                    </h4>
                    <p className="text-sm text-silver max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. Your transmission has been recorded and I will respond promptly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="mt-4 text-xs font-mono text-[#C7A86B] hover:underline uppercase tracking-wider font-semibold"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-xs font-mono uppercase tracking-wider text-silver mb-2 font-medium"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-[#0B0B0C] border border-white/[0.08] focus:border-[#C7A86B]/60 rounded-xl px-4 py-3 text-sm text-ivory placeholder-slate-600 focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-xs font-mono uppercase tracking-wider text-silver mb-2 font-medium"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. eleanor@organization.com"
                        className="w-full bg-[#0B0B0C] border border-white/[0.08] focus:border-[#C7A86B]/60 rounded-xl px-4 py-3 text-sm text-ivory placeholder-slate-600 focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="message" 
                        className="block text-xs font-mono uppercase tracking-wider text-silver mb-2 font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Discuss a technical role, collaborative initiative, or engineering inquiry..."
                        className="w-full bg-[#0B0B0C] border border-white/[0.08] focus:border-[#C7A86B]/60 rounded-xl px-4 py-3 text-sm text-ivory placeholder-slate-600 focus:outline-none transition-colors duration-200 resize-none"
                      />
                    </div>

                    <p className="text-[11px] font-mono text-silver">
                      ⓘ Frontend-ready form structure. Wire directly to Formspree, EmailJS, or enterprise API endpoints.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full justify-center text-sm py-3.5 font-semibold"
                    >
                      {isSubmitting ? (
                        <span>Processing Transmission...</span>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </SpotlightCard>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

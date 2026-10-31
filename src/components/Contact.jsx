import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate frontend submission response
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
    <section id="contact" className="section-spacing border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="section-label">06 // Inquiry</span>
            <h2 className="section-heading mb-4">Let's build something meaningful.</h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Open to conversations around software engineering, full-stack development, and intelligent technology.
              Feel free to connect directly or submit a message below.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Direct Contact Channels Column */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#c5a059] mb-4">
                Direct Communication Channels
              </h3>

              <div className="space-y-3">
                {CONTACT_CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  const content = (
                    <div className="surface-card surface-card-hover p-4 sm:p-5 rounded-xl border border-white/[0.06] flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                        <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#c5a059] group-hover:border-[#c5a059]/40 transition-colors">
                          <Icon size={16} />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                            {channel.label}
                          </span>
                          <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                            {channel.value}
                          </span>
                        </div>
                      </div>
                      {channel.href && (
                        <ArrowUpRight size={14} className="text-slate-500 group-hover:text-[#c5a059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      )}
                    </div>
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
              <div className="surface-card p-5 rounded-xl border border-white/[0.06] text-xs text-slate-400 font-mono space-y-1 mt-6">
                <span className="text-[#c5a059] block">// Availability</span>
                <p className="text-slate-300">Typically responding within 24 hours to professional inquiries.</p>
              </div>
            </div>

            {/* Inscription / Form Column */}
            <div className="lg:col-span-7">
              <div className="surface-card p-7 sm:p-9 rounded-2xl border border-white/[0.06]">
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  Send Me a Message
                </h3>
                <p className="text-xs text-slate-400 mb-6 font-mono">
                  All fields are processed directly for correspondence.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center mx-auto text-[#c5a059]">
                      <CheckCircle2 size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-white tracking-tight">
                      Message Inscribed
                    </h4>
                    <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. Your transmission has been recorded and I will respond promptly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="mt-4 text-xs font-mono text-[#c5a059] hover:underline uppercase tracking-wider"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2"
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
                        className="w-full bg-[#0a0a0c] border border-white/[0.08] focus:border-[#c5a059]/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2"
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
                        className="w-full bg-[#0a0a0c] border border-white/[0.08] focus:border-[#c5a059]/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="message" 
                        className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2"
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
                        className="w-full bg-[#0a0a0c] border border-white/[0.08] focus:border-[#c5a059]/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors duration-200 resize-none"
                      />
                    </div>

                    <p className="text-[11px] font-mono text-slate-500">
                      ⓘ Frontend-ready form structure. Wire directly to Formspree, EmailJS, or enterprise API endpoints.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-luxury-primary w-full justify-center text-sm py-3 font-semibold"
                    >
                      {isSubmitting ? (
                        <span>Processing Transmission...</span>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

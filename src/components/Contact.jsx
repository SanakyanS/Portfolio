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
    }, 600);
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
      label: 'Phone',
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
    <section id="contact" className="py-24 sm:py-28 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <span className="eyebrow-label mb-3">GET IN TOUCH</span>
            <h2 className="h2-editorial mb-4">
              Let's build something meaningful.
            </h2>
            <p className="body-editorial">
              I'm always open to discussing software engineering roles, full-stack projects, or interesting technical ideas. 
              Feel free to reach out directly or send a message below.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Direct Contact Links */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="h3-sub text-xs font-mono uppercase tracking-wider text-[#C7A86B] mb-4 font-semibold">
                Direct Channels
              </h3>

              <div className="space-y-3">
                {CONTACT_CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  const content = (
                    <SpotlightCard className="surface-luxury p-4 sm:p-5 rounded-xl border border-white/[0.06] flex items-center justify-between group">
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#C7A86B] group-hover:border-[#C7A86B]/40 transition-colors">
                          <Icon size={16} />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono text-silver block mb-0.5">
                            {channel.label}
                          </span>
                          <span className="text-sm font-medium text-ivory group-hover:text-white transition-colors">
                            {channel.value}
                          </span>
                        </div>
                      </div>
                      {channel.href && (
                        <ArrowUpRight size={14} className="text-silver group-hover:text-[#C7A86B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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

              {/* Note */}
              <div className="surface-luxury p-5 rounded-xl border border-white/[0.06] text-xs text-silver font-mono space-y-1 mt-4">
                <span className="text-[#C7A86B] block font-semibold">// Availability</span>
                <p className="text-silver">I generally reply within 24–48 hours on business days.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <SpotlightCard className="surface-luxury p-7 sm:p-9 rounded-2xl border border-white/[0.07]">
                <h3 className="h3-sub text-lg sm:text-xl font-bold text-ivory mb-2 tracking-tight">
                  Send Me a Message
                </h3>
                <p className="text-xs text-silver mb-6 font-mono">
                  Drop a note and I'll get back to your email directly.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-3"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#C7A86B]/15 border border-[#C7A86B]/30 flex items-center justify-center mx-auto text-[#C7A86B]">
                      <CheckCircle2 size={22} />
                    </div>
                    <h4 className="h3-sub text-base font-semibold text-ivory tracking-tight">
                      Message Sent!
                    </h4>
                    <p className="text-sm text-silver max-w-sm mx-auto leading-relaxed">
                      Thanks for reaching out. I've received your note and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="mt-3 text-xs font-mono text-[#C7A86B] hover:underline uppercase tracking-wider font-medium"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-xs font-mono uppercase tracking-wider text-silver mb-1.5 font-medium"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-[#0B0B0C] border border-white/[0.08] focus:border-[#C7A86B]/60 rounded-xl px-4 py-2.5 text-sm text-ivory placeholder-slate-600 focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-xs font-mono uppercase tracking-wider text-silver mb-1.5 font-medium"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full bg-[#0B0B0C] border border-white/[0.08] focus:border-[#C7A86B]/60 rounded-xl px-4 py-2.5 text-sm text-ivory placeholder-slate-600 focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="message" 
                        className="block text-xs font-mono uppercase tracking-wider text-silver mb-1.5 font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="What would you like to discuss?"
                        className="w-full bg-[#0B0B0C] border border-white/[0.08] focus:border-[#C7A86B]/60 rounded-xl px-4 py-2.5 text-sm text-ivory placeholder-slate-600 focus:outline-none transition-colors duration-200 resize-none"
                      />
                    </div>

                    <p className="text-[11px] font-mono text-silver">
                      ⓘ Frontend-ready form. Can be easily wired to Formspree, EmailJS, or an API backend.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full justify-center text-sm py-3 font-medium"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send size={14} />
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

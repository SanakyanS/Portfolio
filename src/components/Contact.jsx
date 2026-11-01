import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin, Send, CheckCircle2, ArrowUpRight, AlertCircle, Loader2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

// ─────────────────────────────────────────────
// Formspree endpoint — replace YOUR_FORM_ID with
// the ID from https://formspree.io after you create
// a free form pointed at sanakyan2004@gmail.com
// ─────────────────────────────────────────────
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnndqogj';

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

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio contact from ${formData.name}`,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
      } else {
        // Formspree returns errors array on failure
        const msg =
          data?.errors?.map((err) => err.message).join(', ') ||
          'Something went wrong. Please try again.';
        setErrorMsg(msg);
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMsg('');
    setFormData({ name: '', email: '', message: '' });
  };

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
              I'm always open to discussing software engineering roles, full-stack projects, or
              interesting technical ideas. Feel free to reach out directly or send a message below.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* ── Left: Direct Contact Links ── */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="h3-sub text-xs font-mono uppercase tracking-wider text-[#C7A86B] mb-4 font-semibold">
                Direct Channels
              </h3>

              <div className="space-y-3">
                {CONTACT_CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  const card = (
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
                        <ArrowUpRight
                          size={14}
                          className="text-silver group-hover:text-[#C7A86B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        />
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
                      {card}
                    </a>
                  ) : (
                    <div key={channel.label}>{card}</div>
                  );
                })}
              </div>

              {/* Availability Note */}
              <div className="surface-luxury p-5 rounded-xl border border-white/[0.06] text-xs text-silver font-mono space-y-1 mt-4">
                <span className="text-[#C7A86B] block font-semibold">// Availability</span>
                <p className="text-silver">I generally reply within 24–48 hours on business days.</p>
              </div>
            </div>

            {/* ── Right: Contact Form ── */}
            <div className="lg:col-span-7">
              <SpotlightCard className="surface-luxury p-7 sm:p-9 rounded-2xl border border-white/[0.07]">
                <h3 className="h3-sub text-lg sm:text-xl font-bold text-ivory mb-2 tracking-tight">
                  Send Me a Message
                </h3>
                <p className="text-xs text-silver mb-6 font-mono">
                  Drop a note and I'll get back to your email directly.
                </p>

                {/* ── SUCCESS STATE ── */}
                {status === 'success' ? (
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
                      Thanks for reaching out. I've received your note and will get back to you
                      within 24–48 hours.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-3 text-xs font-mono text-[#C7A86B] hover:underline uppercase tracking-wider font-medium"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  /* ── FORM STATE ── */
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-silver mb-1.5 font-medium"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-[#0B0B0C] border border-white/[0.08] focus:border-[#C7A86B]/60 rounded-xl px-4 py-2.5 text-sm text-ivory placeholder-slate-600 focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-silver mb-1.5 font-medium"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full bg-[#0B0B0C] border border-white/[0.08] focus:border-[#C7A86B]/60 rounded-xl px-4 py-2.5 text-sm text-ivory placeholder-slate-600 focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono uppercase tracking-wider text-silver mb-1.5 font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What would you like to discuss?"
                        className="w-full bg-[#0B0B0C] border border-white/[0.08] focus:border-[#C7A86B]/60 rounded-xl px-4 py-2.5 text-sm text-ivory placeholder-slate-600 focus:outline-none transition-colors duration-200 resize-none"
                      />
                    </div>

                    {/* Error Banner */}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-mono"
                      >
                        <AlertCircle size={14} className="shrink-0 mt-0.5" />
                        <span>{errorMsg || 'Something went wrong. Please try again.'}</span>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-gold w-full justify-center text-sm py-3 font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          <span>Sending...</span>
                        </>
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

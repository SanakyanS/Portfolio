import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin, Send, CheckCircle2, ArrowUpRight, AlertCircle, Loader2, ExternalLink } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const RECIPIENT_EMAIL = 'sanakyan2004@gmail.com';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`;

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

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'activation_needed' | 'error'
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
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && (data.success === 'true' || data.success === true)) {
        setStatus('success');
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        // FormSubmit sent the one-time activation link to sanakyan2004@gmail.com
        setStatus('activation_needed');
      } else {
        const msg = data.message || 'Unable to deliver message right now. You can email me directly.';
        setErrorMsg(msg);
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. You can click "Open Email Client" below to send directly.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMsg('');
    setFormData({ name: '', email: '', message: '' });
  };

  const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
    formData.name ? `Portfolio Inquiry from ${formData.name}` : 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    formData.message ? `${formData.message}\n\n— From: ${formData.name} (${formData.email})` : ''
  )}`;

  return (
    <section id="contact" className="py-24 sm:py-28 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div ref={ref}>
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
            {/* Direct Contact Links */}
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

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <SpotlightCard className="surface-luxury p-7 sm:p-9 rounded-2xl border border-white/[0.07]">
                <h3 className="h3-sub text-lg sm:text-xl font-bold text-ivory mb-2 tracking-tight">
                  Send Me a Message
                </h3>
                <p className="text-xs text-silver mb-6 font-mono">
                  Drop a note and I'll get back to your email directly.
                </p>

                {/* SUCCESS STATE */}
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                      <CheckCircle2 size={24} />
                    </div>
                    <h4 className="h3-sub text-base font-semibold text-ivory tracking-tight">
                      Message Delivered!
                    </h4>
                    <p className="text-sm text-silver max-w-sm mx-auto leading-relaxed">
                      Thanks for reaching out! Your message was delivered straight to my inbox and I will respond to you shortly.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-3 text-xs font-mono text-[#C7A86B] hover:underline uppercase tracking-wider font-medium"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : status === 'activation_needed' ? (
                  /* FIRST-TIME ACTIVATION STATE */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#C7A86B]/15 border border-[#C7A86B]/30 flex items-center justify-center mx-auto text-[#C7A86B]">
                      <Mail size={22} />
                    </div>
                    <h4 className="h3-sub text-base font-semibold text-ivory tracking-tight">
                      One-Time Activation Sent!
                    </h4>
                    <p className="text-xs sm:text-sm text-silver max-w-md mx-auto leading-relaxed">
                      FormSubmit sent an <strong className="text-ivory">"Activate Form"</strong> confirmation email to <span className="text-[#C7A86B]">{RECIPIENT_EMAIL}</span>.
                      Please open that email and click the confirmation link once. Afterwards, every message from this form will immediately reach your inbox!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <a
                        href={mailtoLink}
                        className="btn-gold text-xs py-2.5 px-4 font-mono flex items-center gap-2"
                      >
                        <ExternalLink size={13} />
                        <span>Send via Email App Directly</span>
                      </a>
                      <button
                        onClick={handleReset}
                        className="btn-outline-luxury text-xs py-2.5 px-4 font-mono"
                      >
                        Back to Form
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* FORM INPUT STATE */
                  <form onSubmit={handleSubmit} className="space-y-5">
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
                        className="flex flex-col gap-2 p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-mono"
                      >
                        <div className="flex items-start gap-2">
                          <AlertCircle size={14} className="shrink-0 mt-0.5" />
                          <span>{errorMsg}</span>
                        </div>
                        <a
                          href={mailtoLink}
                          className="text-[#C7A86B] underline hover:text-[#D8BA7E] ml-5 flex items-center gap-1"
                        >
                          <span>Open in your default email app instead</span>
                          <ArrowUpRight size={11} />
                        </a>
                      </motion.div>
                    )}

                    {/* Submit Actions */}
                    <div className="space-y-3">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn-gold w-full justify-center text-sm py-3 font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 size={14} className="animate-spin" />
                            <span>Sending message...</span>
                          </>
                        ) : (
                          <>
                            <Send size={14} />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>

                      {/* Direct mailto fallback option */}
                      <div className="text-center pt-1">
                        <a
                          href={mailtoLink}
                          className="text-[11px] font-mono text-silver hover:text-[#C7A86B] transition-colors inline-flex items-center gap-1.5"
                        >
                          <span>Prefer your own email client?</span>
                          <span className="text-[#C7A86B] underline">Open Mail App</span>
                          <ArrowUpRight size={11} className="text-[#C7A86B]" />
                        </a>
                      </div>
                    </div>
                  </form>
                )}
              </SpotlightCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

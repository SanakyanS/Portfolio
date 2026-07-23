import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/audio';
import { Mail, Send, CheckCircle2, MapPin, Phone, Linkedin, Github, Sparkles, Feather } from 'lucide-react';

export default function CuratorsLedger() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFx.playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      soundFx.playStamp();
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    soundFx.playClick();
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-28 relative bg-[#0c0a09] border-t border-[#c9a84c]/10">
      
      {/* Background Spotlights */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] spotlight-gold blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#14110f] border border-[#c9a84c]/30 text-xs font-mono text-[#c9a84c]">
            <Feather className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">HALL VII — CURATOR'S LEDGER</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-extrabold gold-gradient-text tracking-wide">
            CURATOR'S LEDGER
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#b8b8b8] max-w-xl mx-auto">
            "Inscribe your message into the digital archives. Let us collaborate on building extraordinary software."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Info & Social Archives */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="glass-panel p-8 rounded-3xl border border-[#c9a84c]/30 space-y-6">
              
              <h3 className="font-serif text-2xl font-bold text-[#fafaf9]">
                ARCHIVE CURATOR CONTACT
              </h3>

              <div className="space-y-4 font-sans text-sm text-[#b8b8b8]">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-[#0c0a09] border border-white/5">
                  <div className="p-2 rounded-lg bg-[#c9a84c]/10 text-[#c9a84c]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#c9a84c] block">DIRECT EMAIL</span>
                    <a href="mailto:sanakyan2004@gmail.com" className="text-white hover:text-[#c9a84c] transition-colors font-mono">
                      sanakyan2004@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-[#0c0a09] border border-white/5">
                  <div className="p-2 rounded-lg bg-[#c9a84c]/10 text-[#c9a84c]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#c9a84c] block">TELEPHONE</span>
                    <a href="tel:+917604930970" className="text-white hover:text-[#c9a84c] transition-colors font-mono">
                      +91 7604930970
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-[#0c0a09] border border-white/5">
                  <div className="p-2 rounded-lg bg-[#c9a84c]/10 text-[#c9a84c]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#c9a84c] block">LOCATION</span>
                    <span className="text-white font-mono">Chennai, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs font-mono text-[#c9a84c] uppercase tracking-widest block">
                  DIGITAL ARCHIVE NODES
                </span>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/sanakyan-s/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    onMouseEnter={() => soundFx.playHover()}
                    className="p-3 rounded-xl bg-[#0c0a09] border border-white/10 text-white hover:text-[#c9a84c] hover:border-[#c9a84c] transition-all flex items-center space-x-2 text-xs font-mono"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/sanakyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    onMouseEnter={() => soundFx.playHover()}
                    className="p-3 rounded-xl bg-[#0c0a09] border border-white/10 text-white hover:text-[#c9a84c] hover:border-[#c9a84c] transition-all flex items-center space-x-2 text-xs font-mono"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Luxury Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#c9a84c]/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#0c0a09]/80 border border-white/10 text-sm text-white placeholder-neutral-500 font-sans focus:border-[#c9a84c] outline-none transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Your Email Address"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#0c0a09]/80 border border-white/10 text-sm text-white placeholder-neutral-500 font-sans focus:border-[#c9a84c] outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Subject / Project Inquiry"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0c0a09]/80 border border-white/10 text-sm text-white placeholder-neutral-500 font-sans focus:border-[#c9a84c] outline-none transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Inscribe message into archives..."
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0c0a09]/80 border border-white/10 text-sm text-white placeholder-neutral-500 font-sans focus:border-[#c9a84c] outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-cursor-hover
                      data-cursor-text="SEAL"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#c9a84c] to-[#997a29] text-[#0c0a09] font-serif font-bold text-base uppercase tracking-widest hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all flex items-center justify-center space-x-3"
                    >
                      {isSubmitting ? (
                        <span>Sealing Inscription...</span>
                      ) : (
                        <>
                          <span>Seal and Send</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Sealed Envelope Confirmation Screen */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6 flex flex-col items-center"
                  >
                    {/* Animated Gold Wax Seal Icon */}
                    <div className="w-20 h-20 rounded-full bg-[#c9a84c]/20 border-4 border-[#c9a84c] flex items-center justify-center text-[#c9a84c] shadow-[0_0_40px_rgba(201,168,76,0.6)]">
                      <Sparkles className="w-10 h-10 animate-pulse" />
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-extrabold gold-gradient-text">
                      Message Successfully Inscribed Into The Digital Archives
                    </h3>

                    <p className="font-serif italic text-sm text-[#b8b8b8] max-w-md">
                      Thank you for reaching out. Your entry has been securely stored. I will respond to your transmission promptly.
                    </p>

                    <button
                      onClick={handleReset}
                      className="px-6 py-3 rounded-xl bg-[#14110f] border border-[#c9a84c]/40 text-[#c9a84c] font-mono text-xs hover:border-[#c9a84c] transition-all"
                    >
                      Send Another Inscription
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, MapPin, Gamepad2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Game Design Role',
    message: ''
  });
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleCopyEmail = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(PERSONAL_INFO.email).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;

    setStatus({
      type: 'success',
      message: 'Opening your default email client to send message...'
    });
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-dossier-grid border-t border-white/10 text-slate-100 py-20"
    >
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-950/60 border border-sky-400/30 text-sky-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span>Studio Inquiries &amp; Recruitment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Space_Grotesk',sans-serif]">
            Direct Studio Contact
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Currently open to Technical Game Design, Systems Engineering, and Technical Artist roles across AAA and independent studios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Quick Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Quick Copy Email Card */}
            <div className="p-6 rounded-xl bg-[#0b0e14] border border-white/10 shadow-xl">
              <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
                Primary Correspondence
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                Click below to copy my direct email address to your clipboard:
              </p>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-3.5 rounded-lg bg-[#07090f] hover:bg-[#121620] border border-white/10 text-white font-mono text-xs sm:text-sm transition-colors group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>
                <div className="shrink-0 p-1.5 rounded bg-sky-500/20 text-sky-300 group-hover:bg-sky-500/30 transition-colors">
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </div>
              </button>

              <div aria-live="polite" className="min-h-[24px]">
                {copied && (
                  <p className="text-xs text-emerald-400 font-medium mt-2 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Email copied to clipboard!
                  </p>
                )}
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="p-6 rounded-xl bg-[#0b0e14] border border-white/10 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Location &amp; Availability</span>
              </div>
              <div className="text-base font-bold text-white mb-1">
                London, England, UK (GMT / BST)
              </div>
              <p className="text-xs text-slate-300">
                Available for hybrid or on-site studio roles in London and remote opportunities worldwide.
              </p>
            </div>

            {/* Social Links Bar */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-[#0b0e14] hover:bg-[#121620] border border-white/10 hover:border-sky-500/50 text-slate-300 hover:text-white transition-all text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <LinkedinIcon className="w-5 h-5 text-sky-400 mb-1" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-[#0b0e14] hover:bg-[#121620] border border-white/10 hover:border-slate-500 text-slate-300 hover:text-white transition-all text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <GithubIcon className="w-5 h-5 text-slate-200 mb-1" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-[#0b0e14] hover:bg-[#121620] border border-white/10 hover:border-rose-500/50 text-slate-300 hover:text-white transition-all text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Gamepad2 className="w-5 h-5 text-rose-400 mb-1" />
                <span>Itch.io</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#0b0e14] border border-white/10 shadow-xl"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <h3 className="text-xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                Send a Direct Studio Inquiry
              </h3>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                FORM // DIRECT-MAILTO
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-lg bg-[#07090f] border border-white/15 focus:border-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50 text-white text-sm transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@studio.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#07090f] border border-white/15 focus:border-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50 text-white text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                >
                  Inquiry Topic
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#07090f] border border-white/15 focus:border-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50 text-white text-sm transition-colors"
                >
                  <option value="Game Design Role">Technical Game Designer Role</option>
                  <option value="Systems / Shader Engineering">Systems / Shader Engineering</option>
                  <option value="Narrative Systems Opportunity">Narrative Architecture Opportunity</option>
                  <option value="Contract / Prototype Project">Contract / Prototype Project</option>
                  <option value="General Conversation">General Conversation</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the role, project, or technical challenge..."
                  className="w-full px-4 py-3 rounded-lg bg-[#07090f] border border-white/15 focus:border-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50 text-white text-sm transition-colors resize-none"
                />
              </div>

              <div aria-live="polite">
                {status.message && (
                  <div
                    className={`p-3 rounded-lg text-xs font-medium ${
                      status.type === 'success'
                        ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                        : 'bg-rose-950/60 text-rose-300 border border-rose-500/30'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm uppercase tracking-wider border border-sky-400/45 shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email Draft</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Sparkles, MapPin, Gamepad2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Game Design Inquiry',
    message: ''
  });
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#8b5cf6', '#38bdf8']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }

    // Prepare mailto link
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

    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="contact" className="relative py-24 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/25 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Mail className="w-3.5 h-3.5 text-indigo-400" />
          <span>Connect & Collaborate</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Syne',sans-serif]">
          Let's Build Something Exceptional
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Currently open to Technical Game Design, Systems Engineering, and Technical Artist roles across AAA and indie studios.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info & Quick Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Quick Copy Email Card */}
          <div className="p-6 rounded-3xl bg-[#0c0e1c]/80 border border-indigo-500/30 backdrop-blur-xl shadow-xl">
            <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
              Direct Contact
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Click below to copy my primary email address directly to your clipboard:
            </p>

            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-mono text-xs sm:text-sm transition-all group"
            >
              <div className="flex items-center gap-2.5 truncate">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </div>
              <div className="shrink-0 p-1.5 rounded-lg bg-indigo-600/30 text-indigo-300 group-hover:bg-indigo-600/50 transition-colors">
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </div>
            </button>

            {copied && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-emerald-400 font-medium mt-2 flex items-center gap-1"
              >
                <Check className="w-3.5 h-3.5" /> Email copied to clipboard!
              </motion.p>
            )}
          </div>

          {/* Location & Status Card */}
          <div className="p-6 rounded-3xl bg-[#0c0e1c]/80 border border-white/10 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>Location & Availability</span>
            </div>
            <div className="text-base font-bold text-white mb-1">
              London, England, UK (GMT / BST)
            </div>
            <p className="text-xs text-slate-300">
              Available for hybrid or on-site roles in London and remote opportunities worldwide.
            </p>
          </div>

          {/* Social Links Bar */}
          <div className="grid grid-cols-3 gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white/[0.03] hover:bg-indigo-950/40 border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all text-xs font-medium"
            >
              <LinkedinIcon className="w-5 h-5 text-indigo-400 mb-1" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white/[0.03] hover:bg-slate-900 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all text-xs font-medium"
            >
              <GithubIcon className="w-5 h-5 text-slate-200 mb-1" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.itch}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white/[0.03] hover:bg-rose-950/40 border border-white/10 hover:border-rose-500/40 text-slate-300 hover:text-white transition-all text-xs font-medium"
            >
              <Gamepad2 className="w-5 h-5 text-rose-400 mb-1" />
              <span>Itch.io</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Direct Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0c0e1c]/80 border border-white/10 backdrop-blur-xl shadow-xl"
        >
          <h3 className="text-xl font-bold text-white font-['Syne',sans-serif] mb-6">
            Send a Direct Inquiry
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Smith"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-indigo-500 focus:outline-none text-white text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@studio.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-indigo-500 focus:outline-none text-white text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Inquiry Topic
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#090b16] border border-white/10 focus:border-indigo-500 focus:outline-none text-white text-sm transition-colors"
              >
                <option value="Game Design Role">Technical Game Designer Role</option>
                <option value="Systems / Shader Engineering">Systems / Shader Engineering</option>
                <option value="Narrative Systems Opportunity">Narrative Architecture Opportunity</option>
                <option value="Contract / Prototype Project">Contract / Prototype Project</option>
                <option value="General Conversation">General Conversation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Message *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about the role, project, or technical challenge..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-indigo-500 focus:outline-none text-white text-sm transition-colors resize-none"
              />
            </div>

            {status.message && (
              <div
                className={`p-3 rounded-xl text-xs font-medium ${
                  status.type === 'success'
                    ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                    : 'bg-rose-950/60 text-rose-300 border border-rose-500/30'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Launch Email Draft</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

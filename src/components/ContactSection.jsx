import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, MapPin, Gamepad2, Radio } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { audioEngine } from '../utils/audioEngine';

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
    audioEngine.playTick(800, 150);
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#00F2FE', '#F59E0B', '#10B981']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    audioEngine.playSweep();
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

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00F2FE', '#F59E0B', '#10B981']
    });
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#06070D] border-t border-[#1A2234] text-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-[1360px] mx-auto w-full">
        {/* Header */}
        <div className="text-left max-w-2xl mb-12 pb-6 border-b border-[#1A2234]">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0D111A] border border-[#1A2234] text-[#00F2FE] text-xs font-mono uppercase tracking-wider mb-3">
            <Radio className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span>TRANSMISSION CHANNEL // DIRECT CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F8FAFC] tracking-tight mb-3 font-['Space_Grotesk',sans-serif] uppercase">
            Direct Studio Inquiry
          </h2>
          <p className="text-[#94A3B8] text-base font-['Plus_Jakarta_Sans',sans-serif]">
            Currently open to Technical Game Design, Systems Engineering, and Technical Artist roles across AAA and independent game studios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-4 font-mono">
            {/* Quick Copy Email Card */}
            <div className="p-5 sm:p-6 rounded bg-[#0D111A] border border-[#1A2234]">
              <h3 className="text-xs uppercase tracking-wider text-[#00F2FE] mb-2 font-bold">
                PRIMARY TRANSMISSION LINE
              </h3>
              <p className="text-xs text-[#94A3B8] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
                Click below to copy direct studio email address:
              </p>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-3.5 rounded bg-[#06070D] hover:bg-[#131926] border border-[#1A2234] hover:border-[#00F2FE] text-[#F8FAFC] text-xs sm:text-sm transition-all group cursor-pointer active:scale-[0.98]"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-[#00F2FE] shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>
                <div className="shrink-0 p-1.5 rounded bg-[#00F2FE]/20 text-[#00F2FE]">
                  {copied ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                </div>
              </button>

              {copied && (
                <p className="text-xs text-[#10B981] font-mono mt-2 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Location & Status Card */}
            <div className="p-5 sm:p-6 rounded bg-[#0D111A] border border-[#1A2234]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#64748B] mb-2 font-bold">
                <MapPin className="w-4 h-4 text-[#00F2FE]" />
                <span>LOCATION &amp; OPERATING STATUS</span>
              </div>
              <div className="text-sm font-bold text-[#F8FAFC] mb-1 font-['Space_Grotesk',sans-serif]">
                London, England, UK (GMT / BST)
              </div>
              <p className="text-xs text-[#94A3B8] font-['Plus_Jakarta_Sans',sans-serif]">
                Available for hybrid or on-site studio roles in London and remote partnerships worldwide.
              </p>
            </div>

            {/* Social Links Bar */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioEngine.playTick(600, 150)}
                className="flex flex-col items-center justify-center p-3 rounded bg-[#0D111A] hover:bg-[#131926] border border-[#1A2234] hover:border-[#00F2FE] text-[#94A3B8] hover:text-[#00F2FE] transition-colors text-xs font-mono active:scale-[0.97]"
              >
                <LinkedinIcon className="w-4 h-4 mb-1" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioEngine.playTick(600, 150)}
                className="flex flex-col items-center justify-center p-3 rounded bg-[#0D111A] hover:bg-[#131926] border border-[#1A2234] hover:border-[#00F2FE] text-[#94A3B8] hover:text-[#00F2FE] transition-colors text-xs font-mono active:scale-[0.97]"
              >
                <GithubIcon className="w-4 h-4 mb-1" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.itch}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioEngine.playTick(600, 150)}
                className="flex flex-col items-center justify-center p-3 rounded bg-[#0D111A] hover:bg-[#131926] border border-[#1A2234] hover:border-[#F59E0B] text-[#94A3B8] hover:text-[#F59E0B] transition-colors text-xs font-mono active:scale-[0.97]"
              >
                <Gamepad2 className="w-4 h-4 mb-1 text-[#F59E0B]" />
                <span>Itch.io</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded bg-[#0D111A] border border-[#1A2234]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1A2234]">
              <h3 className="text-xl font-bold text-[#F8FAFC] font-['Space_Grotesk',sans-serif] uppercase">
                Compose Direct Transmission
              </h3>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B]">
                DISPATCH // MAILTO
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3.5 py-2.5 rounded bg-[#06070D] border border-[#1A2234] focus:border-[#00F2FE] focus:outline-none text-[#F8FAFC] text-sm font-['Plus_Jakarta_Sans',sans-serif] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@studio.com"
                    className="w-full px-3.5 py-2.5 rounded bg-[#06070D] border border-[#1A2234] focus:border-[#00F2FE] focus:outline-none text-[#F8FAFC] text-sm font-['Plus_Jakarta_Sans',sans-serif] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                  Subject / Discipline Focus
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-[#06070D] border border-[#1A2234] focus:border-[#00F2FE] focus:outline-none text-[#F8FAFC] text-sm font-mono transition-colors"
                >
                  <option value="Game Design Role">Technical Game Designer Role</option>
                  <option value="Systems / Shader Engineering">Systems / Shader Engineering</option>
                  <option value="Narrative Systems Opportunity">Narrative Architecture Opportunity</option>
                  <option value="Contract / Prototype Project">Contract / Prototype Project</option>
                  <option value="General Conversation">General Conversation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the role, project, or technical challenge..."
                  className="w-full px-3.5 py-2.5 rounded bg-[#06070D] border border-[#1A2234] focus:border-[#00F2FE] focus:outline-none text-[#F8FAFC] text-sm font-['Plus_Jakarta_Sans',sans-serif] transition-colors resize-none"
                />
              </div>

              {status.message && (
                <div
                  className={`p-3 rounded text-xs font-mono ${
                    status.type === 'success'
                      ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40'
                      : 'bg-rose-950/60 text-rose-300 border border-rose-500/30'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 rounded bg-[#00F2FE] hover:bg-[#38BDF8] active:scale-[0.98] text-[#06070D] font-mono font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#06070D]" />
                <span>Transmit Email Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

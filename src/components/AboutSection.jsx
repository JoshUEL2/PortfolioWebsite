import { motion } from 'framer-motion';
import { Award, UserCheck, ShieldCheck, HeartHandshake, Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/25 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Background & Philosophy</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Syne',sans-serif]">
          About Joshua Johnson
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Uniting engineering tenacity, academic excellence, and stress-tested operational consistency.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Philosophy & Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Motto Box */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-[#0c0e1c] to-[#0c0e1c] border border-indigo-500/30 backdrop-blur-xl shadow-xl">
            <div className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
              Operating Philosophy
            </div>
            <blockquote className="text-xl sm:text-2xl font-extrabold text-white font-['Syne',sans-serif] leading-snug italic">
              "{PERSONAL_INFO.motto}"
            </blockquote>
          </div>

          <div className="space-y-4 text-slate-300 leading-relaxed font-normal text-sm sm:text-base">
            <p>
              I am a <strong className="text-white font-semibold">Technical Game Designer</strong> and{' '}
              <strong className="text-white font-semibold">School Representative at the University of East London (UEL)</strong>. 
              My work exists at the direct intersection of low-level gameplay engineering, shader mathematics, and high-fidelity ludonarrative design.
            </p>
            <p>
              When commercial motion capture solutions proved financially prohibitive, I engineered{' '}
              <strong className="text-white font-semibold">Project K.I.N.E.T.I.C.</strong>—a custom sensor fusion rig combining Xbox Kinect v2 infrared depth sensors with PSVR Move gyros to stream real-time skeletal motion directly into Unreal Engine 5 MetaHumans.
            </p>
            <p>
              When shader world-position offsets distorted projection decals in <strong className="text-white font-semibold">Rastacats (92% 1st Class)</strong>, 
              I derived custom mathematical compensation vectors inside the Blueprint Event Tick to dynamically eliminate clipping at 60fps+.
            </p>
            <p>
              Grounded by over three years as a Senior Team Member at Premier Inn (<strong className="text-white font-semibold">13,000+ guests welcomed, 0 disciplinaries, 0 sick days</strong>) 
              and as a Serve Legal compliance auditor, I bring an unwavering work ethic, clear communication under crisis, and dependable execution to game studio environments.
            </p>
          </div>

          {/* Social Proof Actions */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 font-semibold text-xs tracking-wider uppercase border border-indigo-500/30 transition-all hover:scale-105"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-white/10 transition-all hover:scale-105"
            >
              <span>Explore GitHub Repos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Achievements & Career Proof Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Card 1: Academic Excellence */}
          <div className="p-6 rounded-2xl bg-[#0c0e1c]/80 border border-white/10 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-500/30">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">University of East London</h4>
                <p className="text-xs text-indigo-300 font-medium">BSc (Hons) Computer Games Design</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 mt-2">
              School Representative for Architecture, Computing & Engineering. Consistent 1st Class marks including 92% in Gameplay Prototyping (MS5027) and 72% in Level Design (MS5028).
            </p>
          </div>

          {/* Card 2: Royal Docks Exhibition */}
          <div className="p-6 rounded-2xl bg-[#0c0e1c]/80 border border-white/10 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-amber-950/60 text-amber-400 border border-amber-500/30">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Royal Docks VR Exhibition</h4>
                <p className="text-xs text-amber-300 font-medium">Sole Level 5 Project in Level 6 Hall</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 mt-2">
              Hand-selected by faculty as the only Level 5 team exhibiting in the main exhibition hall alongside Level 6 final graduating games. Supervised room-scale VR playtesting.
            </p>
          </div>

          {/* Card 3: Operational Leadership */}
          <div className="p-6 rounded-2xl bg-[#0c0e1c]/80 border border-white/10 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Premier Inn & Hospitality</h4>
                <p className="text-xs text-emerald-300 font-medium">Senior Ground Floor Team Member (3+ Years)</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 mt-2">
              13,000+ guest interactions, 0 disciplinaries, 0 sick days. Trusted keyholder managing night operations, crisis response, and customer de-escalation under pressure.
            </p>
          </div>

          {/* Card 4: Honours & Awards */}
          <div className="p-6 rounded-2xl bg-[#0c0e1c]/80 border border-white/10 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-violet-950/60 text-violet-400 border border-violet-500/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Competitions & Certifications</h4>
                <p className="text-xs text-violet-300 font-medium">UK Nationwide Accreditations</p>
              </div>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 mt-2">
              <li>• <strong className="text-white">CyberCenturion:</strong> Top 60 UK Nationwide Finalist</li>
              <li>• <strong className="text-white">VEX Robotics:</strong> UK National Championship Finalist</li>
              <li>• <strong className="text-white">Harvard CS50x:</strong> Computer Science Certified</li>
              <li>• <strong className="text-white">Duke of Edinburgh:</strong> Gold Award Recipient</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

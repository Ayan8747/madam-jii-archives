import { motion } from 'framer-motion';
import { User, Tag, HeartHandshake, Flame, ShieldAlert, FileSearch } from 'lucide-react';
import { DOSSIER_DATA } from '../../data/story';
import { fadeInUp, staggerContainer } from '../../variants/motion';

export const DossierFile = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 z-10">

      <div className="max-w-4xl mx-auto w-full space-y-10">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-2 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-[#d4a373] uppercase bg-[#d4a373]/10 px-3 py-1 rounded-full border border-[#d4a373]/20">
            <FileSearch className="w-3.5 h-3.5" />
            FILE INTEL // PRIMARY DOSSIER
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-[#f2ede4] tracking-tight">
            CLASSIFIED SUBJECT REPORT
          </h2>
          <p className="text-sm text-[#a19d94] font-light">
            Declassified records regarding one exceptionally crazy best friend.
          </p>
        </motion.div>

        {/* Dossier Grid Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Card 1: Subject Name */}
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-2xl bg-[#121215]/60 border border-white/[0.08] backdrop-blur-md relative overflow-hidden group hover:border-[#d4a373]/40 transition-colors"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#a19d94] mb-3">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#d4a373]" />
                SUBJECT IDENTIFIER
              </span>
              <span className="text-[10px] text-[#d4a373]">#01</span>
            </div>
            <div className="text-2xl font-bold font-display text-[#f2ede4] tracking-wider">
              {DOSSIER_DATA.subject}
            </div>
            <div className="text-xs text-[#a19d94] mt-1">
              The one and only birthday girl
            </div>
          </motion.div>

          {/* Card 2: Known Aliases */}
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-2xl bg-[#121215]/60 border border-white/[0.08] backdrop-blur-md relative overflow-hidden group hover:border-[#d4a373]/40 transition-colors"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#a19d94] mb-3">
              <span className="flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#d4a373]" />
                RECORDED ALIASES
              </span>
              <span className="text-[10px] text-[#d4a373]">#02</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {DOSSIER_DATA.knownAliases.map((alias, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-white/[0.06] text-[#e2b49a] text-xs font-mono font-medium border border-white/[0.05]"
                >
                  {alias}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Designated Partner */}
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-2xl bg-[#121215]/60 border border-white/[0.08] backdrop-blur-md relative overflow-hidden group hover:border-[#d4a373]/40 transition-colors"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#a19d94] mb-3">
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-[#d4a373]" />
                ASSIGNED PARTNER
              </span>
              <span className="text-[10px] text-[#d4a373]">#03</span>
            </div>
            <div className="text-2xl font-bold font-display text-[#e2b49a]">
              {DOSSIER_DATA.assignedPartner}
            </div>
            <div className="text-xs text-[#a19d94] mt-1">
              Her official bestuu
            </div>
          </motion.div>

          {/* Card 4: Active Streak */}
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-2xl bg-[#121215]/60 border border-white/[0.08] backdrop-blur-md relative overflow-hidden group hover:border-[#d4a373]/40 transition-colors"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#a19d94] mb-3">
              <span className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                CURRENT STREAK
              </span>
              <span className="text-[10px] text-amber-400">UNBROKEN</span>
            </div>
            <div className="text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#d4a373]">
              {DOSSIER_DATA.activeStreak}
            </div>
            <div className="text-xs text-[#a19d94] mt-1">
              Surviving every broken streak
            </div>
          </motion.div>

          {/* Card 5: Origin Method */}
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-2xl bg-[#121215]/60 border border-white/[0.08] backdrop-blur-md relative overflow-hidden group hover:border-[#d4a373]/40 transition-colors md:col-span-2"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#a19d94] mb-3">
              <span className="flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-[#d4a373]" />
                CURRENT RECORD STATUS
              </span>
              <span className="text-[10px] text-[#d4a373]">PERMANENT</span>
            </div>
            <div className="text-lg md:text-xl font-bold text-[#f2ede4] font-display">
              {DOSSIER_DATA.status}
            </div>
            <div className="text-xs text-[#a19d94] mt-1 font-mono">
              Origin: {DOSSIER_DATA.firstContactMethod}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

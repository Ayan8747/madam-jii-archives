import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FolderLock, ArrowDown, Sparkles, ShieldCheck } from 'lucide-react';
import { DOSSIER_DATA } from '../../data/story';

interface ArchiveBootProps {
  onUnlock: () => void;
}

export const ArchiveBoot = ({ onUnlock }: ArchiveBootProps) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 800);
    const t2 = setTimeout(() => setStep(2), 1800);
    const t3 = setTimeout(() => setStep(3), 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden bg-[#08080a]">
      {/* Subtle radial aura */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#d4a373]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-xl w-full flex flex-col items-center space-y-8">

        {/* Top classified emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md"
        >
          <FolderLock className="w-3.5 h-3.5 text-[#d4a373]" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#a19d94] uppercase">
            THE DIGITAL VAULT // ARCHIVE 0913
          </span>
        </motion.div>

        {/* Title */}
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-[#f2ede4]"
          >
            THE MADAM JII <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] via-[#e2b49a] to-[#bc6c25]">
              ARCHIVES
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base text-[#a19d94] font-light max-w-md mx-auto leading-relaxed"
          >
            A completely unnecessary investigation into how one random Spotlight comment became a 145-day friendship.
          </motion.p>
        </div>

        {/* Status Sequence Indicator */}
        <div className="w-full max-w-md p-5 rounded-2xl bg-[#121215]/80 border border-white/[0.08] shadow-2xl backdrop-blur-xl text-left space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-[#a19d94] pb-2 border-b border-white/[0.06] text-[10px] tracking-wider">
            <span>FILE: {DOSSIER_DATA.fileNumber}</span>
            <span className="text-[#d4a373]">SEPTEMBER 13 SPECIAL</span>
          </div>

          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-[#a19d94]"
            >
              <span className="text-[#d4a373]">▸</span>
              <span>INITIALIZING FRIENDSHIP ARCHIVE...</span>
            </motion.div>

            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-[#a19d94]"
              >
                <span className="text-[#d4a373]">▸</span>
                <span>SCANNING 145 DAYS OF MEMORIES...</span>
              </motion.div>
            )}

            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-[#e2b49a] font-medium"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4a373]" />
                <span>RECORD LOCATED: SUBJECT [ARADHYA]</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Action Button */}
        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="pt-2"
          >
            <button
              onClick={onUnlock}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#d4a373] to-[#bc6c25] text-[#08080a] font-bold text-sm md:text-base tracking-wide shadow-[0_0_30px_rgba(212,163,115,0.35)] hover:shadow-[0_0_45px_rgba(212,163,115,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 font-display">
                <Sparkles className="w-4 h-4" />
                OPEN THE ARCHIVE
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
};

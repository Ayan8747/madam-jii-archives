import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { STORY_SECTIONS } from '../../data/story';
import { ConfettiCanvas } from '../ui/ConfettiCanvas';

export const BirthdayReveal = () => {
  const [stage, setStage] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const { birthday } = STORY_SECTIONS;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Cinematic sequential reveal
          const t1 = setTimeout(() => setStage(1), 1200); // ARCHIVE STATUS CLOSING...
          const t2 = setTimeout(() => setStage(2), 2600); // Image appears
          const t3 = setTimeout(() => setStage(3), 4000); // HAPPY BIRTHDAY MADAM JII
          const t4 = setTimeout(() => setStage(4), 5400); // Meri Pagluuii
          const t5 = setTimeout(() => setStage(5), 6800); // Signature
          const t6 = setTimeout(() => {
            setStage(6);
            setShowConfetti(true);
          }, 8000); // Confetti starts after everything is revealed

          return () => {
            clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
            clearTimeout(t4); clearTimeout(t5); clearTimeout(t6);
          };
        }
      });
    }, { threshold: 0.3 });

    const el = document.getElementById('birthday-reveal');
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      id="birthday-reveal"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 py-24 z-20 overflow-hidden select-none"
    >
      {/* Background Warm Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1510] via-[#2a1f15] to-[#08080a] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,163,115,0.1)_0%,transparent_70%)] pointer-events-none" />

      <ConfettiCanvas active={showConfetti} />

      <div className="relative z-10 max-w-4xl mx-auto w-full space-y-12 flex flex-col items-center text-center">

        {/* Archive Closing Animation */}
        <AnimatePresence>
          {stage < 2 && stage > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 1 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#121215]/60 border border-white/[0.1] backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-mono tracking-[0.2em] text-[#a19d94] uppercase">
                ARCHIVE STATUS: CLOSING...
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Meaningful Memory */}
        <AnimatePresence>
          {stage >= 2 && stage < 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-lg mb-8"
            >
              <img
                src="/assets/duo-bitmoji-sunset.jpeg"
                alt="Aradhya and Bestuu fist bump at sunset"
                className="w-full h-auto rounded-3xl shadow-2xl shadow-[#d4a373]/20 border border-white/10"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Birthday Headline */}
        <AnimatePresence>
          {stage >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#f2ede4] via-[#e2b49a] to-[#d4a373] leading-tight drop-shadow-md">
                {birthday.heading}
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Secondary Message */}
        <AnimatePresence>
          {stage >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="space-y-4"
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-[#f2ede4] tracking-wide">
                {birthday.subheading}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Signature & Final Quote */}
        <AnimatePresence>
          {stage >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="space-y-8 pt-8"
            >
              <p className="text-lg md:text-xl text-[#d4a373] font-display tracking-wider">
                {birthday.signature}
              </p>

              <div className="h-[1px] w-16 mx-auto bg-gradient-to-r from-transparent via-[#d4a373]/50 to-transparent" />

              <p className="text-sm md:text-base text-[#a19d94] font-light italic tracking-wide">
                ✦ {birthday.quote}
              </p>

              {/* Final subtle heart emblem */}
              <div className="pt-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08]">
                  <Heart className="w-3.5 h-3.5 text-[#d4a373] fill-[#d4a373]" />
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#a19d94] uppercase">
                    PERMANENTLY SPECIAL BEST FRIENDS
                  </span>
                  <Heart className="w-3.5 h-3.5 text-[#d4a373] fill-[#d4a373]" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

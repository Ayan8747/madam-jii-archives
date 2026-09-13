import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileWarning } from 'lucide-react';
import { STORY_SECTIONS } from '../../data/story';
import { fadeInUp } from '../../variants/motion';

export const MidnightConfession = () => {
  const [step, setStep] = useState(0);
  const { confession } = STORY_SECTIONS;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Auto-play the dramatic sequence when in view
          const t1 = setTimeout(() => setStep(1), 800);
          const t2 = setTimeout(() => setStep(2), 1600);
          const t3 = setTimeout(() => setStep(3), 2400);
          const t4 = setTimeout(() => setStep(4), 3200);
          const t5 = setTimeout(() => setStep(5), 4000);
          const t6 = setTimeout(() => setStep(6), 4800);
          const t7 = setTimeout(() => setStep(7), 5600);

          return () => {
            clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
            clearTimeout(t5); clearTimeout(t6); clearTimeout(t7);
          };
        }
      });
    }, { threshold: 0.3 });

    const el = document.getElementById('midnight-section');
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      id="midnight-section"
      className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 z-10"
    >
      <div className="max-w-3xl mx-auto w-full space-y-12">

        {/* Case Tag */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-amber-400 uppercase bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20"
        >
          <FileWarning className="w-3.5 h-3.5" />
          {confession.tag}
        </motion.div>

        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#f2ede4] tracking-tight">
            {confession.title}
          </h2>
        </motion.div>

        {/* Status Dashboard Box */}
        <div className="p-8 rounded-3xl bg-[#121215]/60 border border-white/[0.08] backdrop-blur-xl space-y-6 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between relative z-10">
            <span className="text-sm font-mono tracking-wider text-[#a19d94] uppercase">
              {confession.statusLabel}
            </span>
            <span className="text-2xl md:text-3xl font-extrabold font-display text-red-500 tracking-wider">
              {confession.statusValue}
            </span>
          </div>

          <div className="h-[1px] w-full bg-white/[0.06]" />

          {/* Dramatic text reveal */}
          <div className="space-y-4 min-h-[200px] relative z-10">
            {confession.jokeLines.map((line, idx) => (
              <AnimatePresence key={idx}>
                {step >= idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <p className={`leading-relaxed ${
                      idx === 1 ? 'text-xl md:text-2xl font-bold text-[#f2ede4]' :
                      idx === 5 || idx === 6 ? 'text-lg md:text-xl font-medium text-[#e2b49a]' :
                      'text-base md:text-lg text-[#f2ede4] font-light'
                    }`}>
                      {line}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

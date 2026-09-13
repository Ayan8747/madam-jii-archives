import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, TrendingUp } from 'lucide-react';
import { STORY_SECTIONS } from '../../data/story';
import { fadeInUp, fadeInScale } from '../../variants/motion';

export const StreakRecord = () => {
  const [displayCount, setDisplayCount] = useState(0);
  const { streak } = STORY_SECTIONS;
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          let current = 0;
          const target = streak.count;
          const duration = 2000; // 2 seconds
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            current = Math.floor(progress * target);
            setDisplayCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      });
    }, { threshold: 0.3 });

    const element = document.getElementById('streak-counter');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [streak.count]);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 z-10">
      <div className="max-w-5xl mx-auto w-full space-y-16">

        {/* Case Tag */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-amber-400 uppercase bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20"
        >
          <Flame className="w-3.5 h-3.5" />
          {streak.tag}
        </motion.div>

        {/* Counter Display */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInScale}
          id="streak-counter"
          className="space-y-8 text-center"
        >
          {/* The Big Number */}
          <div className="relative inline-block w-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-amber-500/20 via-[#d4a373]/10 to-transparent blur-3xl" />
            <motion.div
              className="relative text-8xl md:text-9xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-b from-amber-400 via-[#d4a373] to-[#bc6c25] tracking-tighter"
            >
              {String(displayCount).padStart(3, '0')}
            </motion.div>
          </div>

          {/* Unit Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-2"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#f2ede4] font-display tracking-wide">
              {streak.unit}
            </h3>
            <p className="text-sm md:text-base text-[#a19d94] font-light">
              aur aage bhi count hota rahega...
            </p>
          </motion.div>
        </motion.div>

        {/* Story Lines */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-8 max-w-2xl mx-auto"
        >
          {streak.storyLines.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 * idx }}
              className="p-6 rounded-2xl bg-[#121215]/60 border border-white/[0.08] backdrop-blur-md"
            >
              <p className="text-base md:text-lg text-[#f2ede4] leading-relaxed font-light">
                "{line}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Badge Emphasis */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInScale}
          className="flex justify-center pt-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-amber-500/20 to-[#d4a373]/20 border border-amber-400/40 backdrop-blur-lg">
            <Flame className="w-5 h-5 text-amber-400 animate-pulse fill-amber-400" />
            <span className="text-lg font-bold text-amber-300 font-display tracking-wide">
              {streak.badge}
            </span>
            <TrendingUp className="w-5 h-5 text-[#d4a373]" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChart3, Settings, Heart, Zap, Shield } from 'lucide-react';
import { STORY_SECTIONS } from '../../data/story';
import { fadeInUp, staggerContainer, fadeInScale } from '../../variants/motion';

export const AnalysisDashboard = () => {
  const { analysis } = STORY_SECTIONS;
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 z-10">
      <div className="max-w-5xl mx-auto w-full space-y-12">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-2"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-[#d4a373] uppercase bg-[#d4a373]/10 px-3 py-1 rounded-full border border-[#d4a373]/20">
            <BarChart3 className="w-3.5 h-3.5" />
            {analysis.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#f2ede4] tracking-tight">
            {analysis.title}
          </h2>
          <p className="text-sm text-[#a19d94] font-light max-w-xl">
            High-fidelity metrics tracking the behaviour of one chaotic best friend.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          ref={containerRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {analysis.metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={fadeInScale}
              className={`p-6 rounded-2xl bg-[#121215]/60 border border-white/[0.08] backdrop-blur-md relative overflow-hidden group hover:border-[#d4a373]/40 transition-colors ${
                idx === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Subtle background pulse element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a373]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#d4a373]/10 transition-colors" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-[0.2em] text-[#a19d94] uppercase">
                    {metric.label}
                  </span>
                  <span className="text-sm font-bold text-[#e2b49a] font-mono">
                    {metric.value}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 rounded-full bg-white/[0.05] overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${metric.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.2 }}
                    className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#d4a373] via-[#e2b49a] to-[#bc6c25]"
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#a19d94] italic">
                  <span className="flex items-center gap-1.5">
                    {idx === 0 && <Heart className="w-3 h-3 text-[#d4a373]" />}
                    {idx === 1 && <Settings className="w-3 h-3 text-[#d4a373] animate-spin-slow" />}
                    {idx === 2 && <Zap className="w-3 h-3 text-[#d4a373]" />}
                    {idx === 3 && <Shield className="w-3 h-3 text-[#d4a373]" />}
                    {idx === 4 && <BarChart3 className="w-3 h-3 text-[#d4a373]" />}
                    {metric.note}
                  </span>
                  <span className="text-[#e2b49a] font-semibold uppercase tracking-wider">{metric.value}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra Analytical Note */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="p-6 rounded-3xl bg-gradient-to-br from-[#d4a373]/10 to-transparent border border-white/[0.06] backdrop-blur-lg text-center"
        >
          <p className="text-sm md:text-base text-[#a19d94] italic">
            ✦ Confirmed: Madam Jii is a rare, one-of-a-kind individual who requires maximum safety and care.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

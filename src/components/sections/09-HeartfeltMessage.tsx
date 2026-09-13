import { motion } from 'framer-motion';
import { Heart, FileHeart } from 'lucide-react';
import { STORY_SECTIONS } from '../../data/story';
import { fadeInUp, staggerSlow } from '../../variants/motion';

export const HeartfeltMessage = () => {
  const { heartfelt } = STORY_SECTIONS;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 z-10">
      <div className="max-w-3xl mx-auto w-full space-y-16">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-3 text-center"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-[#e2b49a] uppercase bg-[#e2b49a]/10 px-3 py-1 rounded-full border border-[#e2b49a]/20 mx-auto">
            <FileHeart className="w-3.5 h-3.5" />
            {heartfelt.tag}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-[#f2ede4] tracking-tight">
            {heartfelt.title}
          </h2>
        </motion.div>

        {/* Message Lines - Slow, spacious reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerSlow}
          className="space-y-16 md:space-y-20"
        >
          {heartfelt.lines.map((line, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="flex flex-col items-center text-center"
            >
              {/* Decorative subtle line markers */}
              {idx === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-1.5 h-1.5 rounded-full bg-[#d4a373] mb-8"
                />
              )}

              <p className={`font-light italic leading-relaxed ${
                idx === 4 || idx === 5 || idx === 6
                  ? 'text-xl md:text-2xl lg:text-3xl font-medium text-[#e2b49a]'
                  : 'text-lg md:text-xl lg:text-2xl text-[#f2ede4]'
              }`}>
                "{line}"
              </p>

              {/* Decorative end markers */}
              {(idx === 3 || idx === 5) && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#d4a373]/50 to-transparent mt-8"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Sincere Footer Mark */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center pt-12"
        >
          <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-[#a19d94] uppercase">
            <Heart className="w-3 h-3 text-[#d4a373] fill-[#d4a373]" />
            SINCERITY LEVEL: MAXIMUM
            <Heart className="w-3 h-3 text-[#d4a373] fill-[#d4a373]" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

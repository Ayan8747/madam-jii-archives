import { motion } from 'framer-motion';
import { Calendar, BookOpen } from 'lucide-react';
import { STORY_SECTIONS } from '../../data/story';
import { fadeInUp, staggerContainer } from '../../variants/motion';

export const Chhuttiyan = () => {
  const { chhuttiyan } = STORY_SECTIONS;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 z-10">
      <div className="max-w-5xl mx-auto w-full space-y-12">

        {/* Case Badge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-[#e2b49a] uppercase bg-[#e2b49a]/10 px-3 py-1 rounded-full border border-[#e2b49a]/20"
        >
          <Calendar className="w-3.5 h-3.5" />
          {chhuttiyan.tag}
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#f2ede4] tracking-tight leading-tight">
            {chhuttiyan.heading}
          </h2>
          <p className="text-base md:text-lg text-[#a19d94] font-light max-w-2xl leading-relaxed">
            {chhuttiyan.subheading}
          </p>
        </motion.div>

        {/* Timeline Architecture */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative space-y-6"
        >
          {/* Central connecting line (vertical) */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#d4a373]/40 via-[#e2b49a]/60 to-[#d4a373]/20" />

          {/* Timeline nodes */}
          {chhuttiyan.timelineNodes.map((node, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className={`relative pl-24 md:pl-0 ${
                idx % 2 === 0 ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-[calc(50%+2rem)]'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 top-2 w-4 h-4 rounded-full bg-[#d4a373] border-2 border-[#08080a] shadow-lg shadow-[#d4a373]/20" />

              {/* Content card */}
              <div className="p-5 rounded-2xl bg-[#121215]/60 border border-white/[0.08] backdrop-blur-md hover:border-[#e2b49a]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#d4a373] uppercase px-2 py-0.5 rounded bg-[#d4a373]/10 border border-[#d4a373]/20">
                    {node.phase}
                  </span>
                  <span className="text-xs text-[#a19d94] font-mono">DAY {(idx + 1) * 15}</span>
                </div>
                <h3 className="text-lg font-bold text-[#f2ede4] font-display mb-1.5">
                  {node.title}
                </h3>
                <p className="text-sm text-[#a19d94] leading-relaxed">
                  {node.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Reflection */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#d4a373]/10 to-[#e2b49a]/5 border border-white/[0.08] backdrop-blur-lg"
        >
          <div className="flex items-start gap-4">
            <BookOpen className="w-5 h-5 text-[#d4a373] flex-shrink-0 mt-0.5" />
            <p className="text-base md:text-lg text-[#f2ede4] font-light leading-relaxed">
              <span className="font-semibold text-[#e2b49a]">Yahin se smjha:</span> Random holidays pe jo random baatein shuru hui, wo ek real, genuine friendship ban gayi. Koi planning nahi, koi force nahi. Bas ek natural aur beautiful connection.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

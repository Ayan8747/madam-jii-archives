import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, UserPlus } from 'lucide-react';
import { STORY_SECTIONS } from '../../data/story';
import { fadeInUp, fadeInScale } from '../../variants/motion';

export const RandomEncounter = () => {
  const { encounter } = STORY_SECTIONS;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 z-10">
      <div className="max-w-4xl mx-auto w-full space-y-12">

        {/* Case Badge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-[#d4a373] uppercase bg-[#d4a373]/10 px-3 py-1 rounded-full border border-[#d4a373]/20"
        >
          <Sparkles className="w-3.5 h-3.5" />
          {encounter.tag}
        </motion.div>

        {/* Main Editorial Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#f2ede4] tracking-tight leading-tight">
            {encounter.heading}
          </h2>
          <p className="text-base md:text-lg text-[#a19d94] font-light max-w-2xl leading-relaxed">
            {encounter.subheading}
          </p>
        </motion.div>

        {/* Visual Metaphor: The Spotlight Connection Architecture */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInScale}
          className="relative p-8 md:p-12 rounded-3xl bg-[#121215]/50 border border-white/[0.08] backdrop-blur-xl overflow-hidden"
        >
          {/* Subtle connecting pulse line */}
          <div className="absolute top-1/2 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#d4a373]/30 to-transparent hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

            {/* Step 1: The Comment */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-3 relative group hover:border-[#d4a373]/40 transition-all">
              <div className="flex items-center justify-between text-xs font-mono text-[#a19d94]">
                <span className="flex items-center gap-1.5 text-[#d4a373]">
                  <MessageSquare className="w-3.5 h-3.5" />
                  SPOTLIGHT
                </span>
                <span>STEP 01</span>
              </div>
              <p className="text-sm text-[#f2ede4] font-medium italic">
                "Ek anjaan Spotlight comment section..."
              </p>
              <div className="text-xs text-[#a19d94]">
                Scroll karte karte ek random interaction hui.
              </div>
            </div>

            {/* Step 2: Added Back */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-3 relative group hover:border-[#e2b49a]/40 transition-all">
              <div className="flex items-center justify-between text-xs font-mono text-[#a19d94]">
                <span className="flex items-center gap-1.5 text-[#e2b49a]">
                  <UserPlus className="w-3.5 h-3.5" />
                  MUTUAL ADD
                </span>
                <span>STEP 02</span>
              </div>
              <p className="text-sm text-[#f2ede4] font-medium italic">
                "She added me. I added her back."
              </p>
              <div className="text-xs text-[#a19d94]">
                Dono ne ek doosre ko Snapchat pe add kiya.
              </div>
            </div>

            {/* Step 3: The Beginning */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-3 relative group hover:border-[#bc6c25]/40 transition-all">
              <div className="flex items-center justify-between text-xs font-mono text-[#a19d94]">
                <span className="flex items-center gap-1.5 text-[#bc6c25]">
                  <Sparkles className="w-3.5 h-3.5" />
                  THE START
                </span>
                <span>STEP 03</span>
              </div>
              <p className="text-sm text-[#f2ede4] font-medium italic">
                "Baatein shuru hui..."
              </p>
              <div className="text-xs text-[#a19d94]">
                Zero expectation se ek special connection ki shuruat.
              </div>
            </div>

          </div>

          {/* Deep reflective quote at bottom */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] text-center md:text-left">
            <p className="text-sm md:text-base text-[#e2b49a] font-medium tracking-wide">
              ✦ "{encounter.highlight}"
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

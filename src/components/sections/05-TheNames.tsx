import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye } from 'lucide-react';
import { STORY_SECTIONS, EVIDENCE_ITEMS } from '../../data/story';
import { fadeInUp, fadeInScale } from '../../variants/motion';
import { LightboxModal } from '../ui/LightboxModal';

export const TheNames = () => {
  const [selectedImage, setSelectedImage] = useState<typeof EVIDENCE_ITEMS[0] | null>(null);
  const { names } = STORY_SECTIONS;
  const bestuuEvidence = EVIDENCE_ITEMS[0];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 z-10">
      <div className="max-w-5xl mx-auto w-full space-y-16">

        {/* Case Tag */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-[#e2b49a] uppercase bg-[#e2b49a]/10 px-3 py-1 rounded-full border border-[#e2b49a]/20"
        >
          <Heart className="w-3.5 h-3.5" />
          {names.tag}
        </motion.div>

        {/* Main Visual: The Names Reveal */}
        <div className="space-y-12">
          {/* Title Section */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#f2ede4] tracking-tight"
          >
            {names.title}
          </motion.h2>

          {/* The Names Grid - Two Names with Heavy Emphasis */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInScale}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Left: Bestuu */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#d4a373]/20 to-[#e2b49a]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative p-8 md:p-12 rounded-3xl bg-[#121215]/70 border border-white/[0.1] backdrop-blur-xl text-center md:text-left"
              >
                <div className="text-xs font-mono text-[#a19d94] uppercase tracking-[0.2em] mb-3">
                  Saved By
                </div>
                <h3 className="text-5xl md:text-6xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#e2b49a] mb-2 tracking-tight">
                  {names.leftName}
                </h3>
                <p className="text-sm text-[#a19d94] font-mono uppercase tracking-wider">
                  {names.leftSub}
                </p>
              </motion.div>
            </div>

            {/* Right: Meri Pagluuii */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-bl from-[#e2b49a]/20 to-[#bc6c25]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="relative p-8 md:p-12 rounded-3xl bg-[#121215]/70 border border-white/[0.1] backdrop-blur-xl text-center md:text-right"
              >
                <div className="text-xs font-mono text-[#a19d94] uppercase tracking-[0.2em] mb-3">
                  Saved By Aradhya As
                </div>
                <h3 className="text-5xl md:text-6xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-[#bc6c25] to-[#e2b49a] mb-2 tracking-tight">
                  {names.rightName}
                </h3>
                <p className="text-sm text-[#a19d94] font-mono uppercase tracking-wider">
                  {names.rightSub}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Divider Quote */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center space-y-4"
          >
            <div className="h-[1px] w-16 mx-auto bg-gradient-to-r from-transparent via-[#d4a373]/50 to-transparent" />
            <p className="text-lg md:text-xl text-[#e2b49a] font-medium leading-relaxed">
              {names.quote}
            </p>
            <div className="h-[1px] w-16 mx-auto bg-gradient-to-r from-transparent via-[#d4a373]/50 to-transparent" />
          </motion.div>
        </div>

        {/* Evidence Display: The Bestuu Screenshot */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInScale}
          className="relative rounded-3xl overflow-hidden border border-white/[0.1] backdrop-blur-xl group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#d4a373]/20 via-[#e2b49a]/20 to-[#d4a373]/10 blur-2xl" />

          <div className="relative bg-[#121215]/80 p-6 md:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#d4a373] uppercase px-3 py-1 rounded-full bg-[#d4a373]/10 border border-[#d4a373]/20 inline-flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  {names.evidenceNote}
                </span>
              </div>
              <button
                onClick={() => setSelectedImage(bestuuEvidence)}
                className="text-[10px] font-mono text-[#a19d94] hover:text-[#d4a373] transition-colors uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
              >
                VIEW FULL
              </button>
            </div>

            {/* Image Preview */}
            <motion.img
              src={bestuuEvidence.src}
              alt={bestuuEvidence.title}
              whileHover={{ scale: 1.02 }}
              className="w-full h-auto rounded-2xl object-cover max-h-[400px] cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => setSelectedImage(bestuuEvidence)}
            />

            <p className="text-sm text-[#a19d94] leading-relaxed italic">
              {names.caption}
            </p>
          </div>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal item={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
};

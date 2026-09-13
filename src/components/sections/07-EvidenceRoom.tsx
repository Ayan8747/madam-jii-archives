import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Eye, Film, ZoomIn, Play } from 'lucide-react';
import { EVIDENCE_ITEMS, EvidenceItem } from '../../data/story';
import { LightboxModal } from '../ui/LightboxModal';

export const EvidenceRoom = () => {
  const [selectedItem, setSelectedItem] = useState<EvidenceItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-[120vh] w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-2 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-[#d4a373] uppercase bg-[#d4a373]/10 px-3 py-1 rounded-full border border-[#d4a373]/20">
            <Eye className="w-3.5 h-3.5" />
            EVIDENCE VAULT // CLASSIFIED MEMORIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#f2ede4] tracking-tight">
            THE MEMORY ARCHIVE
          </h2>
          <p className="text-sm text-[#a19d94] font-light max-w-xl">
            Definitive visual proof of an unbreakable bond. Select any evidence to view the full record.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">

          {/* Decorative background blur elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4a373]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#e2b49a]/5 rounded-full blur-3xl pointer-events-none" />

          {EVIDENCE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`relative group ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Outer glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#d4a373]/20 via-[#e2b49a]/20 to-[#bc6c25]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div
                className="relative bg-[#121215]/80 border border-white/[0.08] rounded-3xl overflow-hidden cursor-pointer hover:border-[#d4a373]/40 transition-all duration-300 h-full flex flex-col"
                onClick={() => setSelectedItem(item)}
              >
                {/* Media Display */}
                <div className="relative h-64 md:h-72 w-full bg-black/40 overflow-hidden flex items-center justify-center p-4">
                  {item.type === 'image' ? (
                    <motion.img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  ) : (
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <video
                        src={item.src}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 flex-1 flex flex-col justify-between border-t border-white/[0.05]">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono tracking-[0.2em] text-[#d4a373] uppercase px-2 py-0.5 rounded bg-[#d4a373]/10 border border-[#d4a373]/20">
                        {item.tag}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-mono tracking-wider text-[#a19d94] uppercase">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold font-display text-[#f2ede4] mb-1.5 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#a19d94] line-clamp-2">
                      {item.caption}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-[#a19d94] mt-4 pt-3 border-t border-white/[0.06]">
                    <span className="flex items-center gap-1.5">
                      <ZoomIn className="w-3 h-3 text-[#d4a373]" />
                      VIEW EVIDENCE
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Film className="w-3 h-3 text-[#d4a373]" />
                      {item.type === 'image' ? 'PHOTO' : 'MOTION'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, FileText } from 'lucide-react';
import { EvidenceItem } from '../../data/story';

interface LightboxModalProps {
  item: EvidenceItem | null;
  onClose: () => void;
}

export const LightboxModal = ({ item, onClose }: LightboxModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#08080a]/90 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#f2ede4] transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#121215] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media Area */}
            <div className="flex-1 bg-black/60 flex items-center justify-center p-2 min-h-[300px] md:min-h-[500px] max-h-[60vh] md:max-h-[80vh] overflow-hidden">
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-lg max-h-[75vh]"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain rounded-lg max-h-[75vh]"
                />
              )}
            </div>

            {/* Sidebar / Meta info */}
            <div className="w-full md:w-80 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-[#121215]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#d4a373] uppercase px-2 py-0.5 rounded bg-[#d4a373]/10 border border-[#d4a373]/20">
                    {item.tag}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-mono tracking-wider text-[#a19d94] uppercase">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-[#f2ede4] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#a19d94] leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#d4a373]">
                    <FileText className="w-3.5 h-3.5" />
                    <span className="font-mono uppercase text-[10px] tracking-wider">ARCHIVAL SIGNIFICANCE:</span>
                  </div>
                  <p className="text-xs text-[#f2ede4]/80 italic">
                    "{item.significance}"
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#a19d94] font-mono">
                <span className="flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5 text-[#d4a373]" />
                  FULL RESOLUTION
                </span>
                <span>ESC TO CLOSE</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

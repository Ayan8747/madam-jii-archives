import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArchiveBoot } from './components/sections/01-ArchiveBoot';
import { DossierFile } from './components/sections/02-DossierFile';
import { RandomEncounter } from './components/sections/03-RandomEncounter';
import { Chhuttiyan } from './components/sections/04-Chhuttiyan';
import { TheNames } from './components/sections/05-TheNames';
import { StreakRecord } from './components/sections/06-StreakRecord';
import { EvidenceRoom } from './components/sections/07-EvidenceRoom';
import { AnalysisDashboard } from './components/sections/08-AnalysisDashboard';
import { HeartfeltMessage } from './components/sections/09-HeartfeltMessage';
import { MidnightConfession } from './components/sections/09b-MidnightConfession';
import { BirthdayReveal } from './components/sections/10-BirthdayReveal';
import { AmbientGlow } from './components/ui/AmbientGlow';
import { ArchiveHeader } from './components/ui/ArchiveHeader';

export default function App() {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Top scroll progress bar
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    // Prevent body scrolling while boot screen is active
    if (!isArchiveOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Scroll down slightly after opening
      setTimeout(() => {
        window.scrollTo({ top: 10, behavior: 'smooth' });
      }, 100);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isArchiveOpen]);

  return (
    <div className="relative min-h-screen bg-[#08080a] w-full font-sans text-[#f2ede4]">

      {/* Dynamic ambient background */}
      <AmbientGlow />

      {/* Top Progress Bar */}
      {isArchiveOpen && (
        <motion.div
          style={{ width: `${scaleX}%` }}
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d4a373] via-[#e2b49a] to-[#d4a373] z-50 origin-left"
        />
      )}

      {/* Header */}
      <ArchiveHeader isArchiveOpen={isArchiveOpen} />

      {/* Boot Screen Overlay */}
      {!isArchiveOpen && (
        <ArchiveBoot onUnlock={() => setIsArchiveOpen(true)} />
      )}

      {/* Main Journey Container */}
      <AnimatePresenceWrapper isOpen={isArchiveOpen}>
        <main className="relative z-10 w-full pb-32">
          {/* Subtle top separator after opening */}
          <div className="h-16 md:h-24 w-full" />

          <DossierFile />
          <SectionDivider />

          <RandomEncounter />
          <SectionDivider />

          <Chhuttiyan />
          <SectionDivider />

          <TheNames />
          <SectionDivider />

          <StreakRecord />
          <SectionDivider />

          <EvidenceRoom />
          <SectionDivider />

          <AnalysisDashboard />
          <SectionDivider />

          <HeartfeltMessage />

          <MidnightConfession />

          <BirthdayReveal />

          {/* Footer Seal */}
          <footer className="py-24 text-center space-y-4">
            <div className="h-[1px] w-16 mx-auto bg-gradient-to-r from-transparent via-[#d4a373]/30 to-transparent" />
            <p className="text-[10px] font-mono tracking-[0.2em] text-[#a19d94]/60 uppercase">
              THE MADAM JII ARCHIVES // DIGITAL EXPERIENCE CREATED FOR ARADHYA
            </p>
          </footer>
        </main>
      </AnimatePresenceWrapper>
    </div>
  );
}

// Simple wrapper to handle AnimatePresence elegantly
import { AnimatePresence } from 'framer-motion';
function AnimatePresenceWrapper({ children, isOpen }: { children: React.ReactNode; isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Section Divider element for continuous journey
function SectionDivider() {
  return (
    <div className="relative h-24 md:h-32 w-full flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-[#d4a373]/30 to-transparent"
      />
    </div>
  );
}

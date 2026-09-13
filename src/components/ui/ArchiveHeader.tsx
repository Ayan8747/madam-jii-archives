import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Shield, Flame } from 'lucide-react';
import { DOSSIER_DATA } from '../../data/story';

export const ArchiveHeader = ({ isArchiveOpen }: { isArchiveOpen: boolean }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Soft ambient audio generator using Web Audio API (warm harmonic drone, zero external dependencies)
  const toggleAudio = () => {
    if (!isPlayingAudio) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioContextRef.current = ctx;

        // Base peaceful harmonic drone (Warm C# major subtle shimmer)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(138.59, ctx.currentTime); // C#3 warm tone

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(277.18, ctx.currentTime); // C#4 overtone

        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start();
        osc2.start();

        oscillatorRef.current = osc1;
        gainNodeRef.current = gain;
        setIsPlayingAudio(true);
      } catch {
        // Safe fallback if audio context blocked
        setIsPlayingAudio(false);
      }
    } else {
      if (gainNodeRef.current && audioContextRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioContextRef.current.currentTime + 1);
        setTimeout(() => {
          audioContextRef.current?.close();
          setIsPlayingAudio(false);
        }, 1000);
      } else {
        setIsPlayingAudio(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  if (!isArchiveOpen) return null;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-3.5 backdrop-blur-md bg-[#08080a]/60 border-b border-white/[0.06] flex items-center justify-between"
    >
      {/* Left: Archive metadata */}
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#d4a373] animate-pulse" />
        <div className="flex flex-col">
          <span className="text-[10px] tracking-[0.25em] font-mono text-[#a19d94] uppercase flex items-center gap-1.5">
            <Shield className="w-3 h-3 text-[#d4a373]" />
            CLASSIFIED ARCHIVE // {DOSSIER_DATA.fileNumber}
          </span>
          <span className="text-xs font-medium tracking-wide text-[#f2ede4]">
            SUBJECT: <span className="text-[#d4a373] font-semibold">{DOSSIER_DATA.subject}</span>
          </span>
        </div>
      </div>

      {/* Right: Streak & Controls */}
      <div className="flex items-center gap-3 md:gap-5">
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[#e2b49a]">
          <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />
          <span>145 DAYS STREAK</span>
        </div>

        {/* Ambient Sound Toggle */}
        <button
          onClick={toggleAudio}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all text-xs text-[#f2ede4] cursor-pointer"
          title={isPlayingAudio ? "Mute ambient tone" : "Play ambient tone"}
        >
          {isPlayingAudio ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#d4a373]" />
              <span className="text-[10px] font-mono tracking-wider text-[#d4a373] hidden md:inline">AUDIO ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#a19d94]" />
              <span className="text-[10px] font-mono tracking-wider text-[#a19d94] hidden md:inline">AMBIENCE</span>
            </>
          )}
        </button>
      </div>
    </motion.header>
  );
};

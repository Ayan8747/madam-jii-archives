import { motion, useScroll, useTransform } from 'framer-motion';

export const AmbientGlow = () => {
  const { scrollYProgress } = useScroll();

  // Transitions from deep charcoal/obsidian to warm amber as user scrolls down
  const topGlowColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [
      "radial-gradient(ellipse at 50% 0%, rgba(212, 163, 115, 0.08) 0%, rgba(8, 8, 10, 0) 70%)",
      "radial-gradient(ellipse at 50% 20%, rgba(226, 180, 154, 0.12) 0%, rgba(8, 8, 10, 0) 70%)",
      "radial-gradient(ellipse at 50% 40%, rgba(188, 108, 37, 0.16) 0%, rgba(8, 8, 10, 0) 70%)",
      "radial-gradient(ellipse at 50% 50%, rgba(226, 180, 154, 0.22) 0%, rgba(8, 8, 10, 0) 80%)"
    ]
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic ambient gradient layer */}
      <motion.div
        className="absolute inset-0 transition-colors duration-1000"
        style={{ background: topGlowColor }}
      />

      {/* Subtle fine film grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Subtle ambient dust motes */}
      <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-[#d4a373]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-[#e2b49a]/5 rounded-full blur-3xl" />
    </div>
  );
};

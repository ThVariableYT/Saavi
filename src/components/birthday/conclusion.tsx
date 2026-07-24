"use client";

import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { Sunflower, LegoBrick, CuteAnimal, Sparkle, AmbientMotes, GlowOrb, mulberry32 } from "./decorations";

const rng = mulberry32(98765);
const CONFETTI = Array.from({ length: 32 }).map((_, i) => ({
  id: i,
  left: rng() * 100,
  delay: rng() * 5,
  duration: 4 + rng() * 5,
  color: ["#2563eb", "#0891b2", "#7c3aed", "#2a9d8f", "#d97706", "#e0527a", "#0ea5e9"][i % 7],
  shape: i % 3,
  size: 6 + rng() * 9,
}));

const STARS = Array.from({ length: 60 }).map((_, i) => ({
  id: i,
  top: rng() * 100,
  left: rng() * 100,
  size: rng() * 2 + 0.8,
  delay: rng() * 4,
  duration: 2 + rng() * 3,
}));

export default function Conclusion({ onRestart }: { onRestart?: () => void }) {
  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col items-center justify-center px-6 vignette"
      style={{
        background:
          "radial-gradient(circle at 50% 28%, #d8e8f8 0%, transparent 55%), radial-gradient(circle at 18% 82%, #d2e0f4 0%, transparent 45%), radial-gradient(circle at 82% 75%, #c9dcf2 0%, transparent 45%), linear-gradient(170deg, #eaf2fc 0%, #d6e6f6 100%)",
      }}
    >
      <GlowOrb className="absolute w-[40rem] h-[40rem] top-0 left-1/2 -translate-x-1/2" color="rgba(37,99,235,0.16)" />

      {STARS.map((s) => (
        <motion.div key={`star-${s.id}`} className="absolute rounded-full bg-blue-500" style={{ width: s.size, height: s.size, top: `${s.top}%`, left: `${s.left}%` }}
          animate={{ opacity: [0.15, 0.8, 0.15], scale: [0.7, 1.3, 0.7] }} transition={{ duration: s.duration, repeat: Infinity, delay: s.delay }} />
      ))}

      {CONFETTI.map((c) => (
        <motion.div key={c.id} className="absolute top-0" style={{ left: `${c.left}%` }}
          initial={{ y: "-10vh", opacity: 0, rotate: 0 }}
          animate={{ y: "110vh", opacity: [0, 1, 1, 0], rotate: 720 }}
          transition={{ duration: c.duration, repeat: Infinity, delay: c.delay, ease: "linear" }}>
          {c.shape === 0 ? (
            <div style={{ width: c.size, height: c.size, background: c.color, borderRadius: "50%", boxShadow: `0 0 8px ${c.color}` }} />
          ) : c.shape === 1 ? (
            <div style={{ width: c.size, height: c.size * 0.6, background: c.color, borderRadius: "2px", boxShadow: `0 0 8px ${c.color}` }} />
          ) : (
            <div style={{ width: 0, height: 0, borderLeft: `${c.size / 2}px solid transparent`, borderRight: `${c.size / 2}px solid transparent`, borderBottom: `${c.size}px solid ${c.color}` }} />
          )}
        </motion.div>
      ))}

      <AmbientMotes count={20} color="rgba(37,99,235,0.5)" />

      <Sunflower className="absolute w-11 h-11 sm:w-14 sm:h-14 opacity-80" style={{ top: "7%", left: "7%" }} delay={0.2} />
      <Sunflower className="absolute w-9 h-9 sm:w-12 sm:h-12 opacity-75" style={{ bottom: "12%", right: "7%" }} delay={0.5} />
      <Sunflower className="absolute w-8 h-8 sm:w-10 sm:h-10 opacity-70" style={{ top: "52%", left: "4%" }} delay={0.8} />
      <LegoBrick className="absolute w-10 h-8 opacity-75" style={{ top: "16%", right: "12%" }} delay={0.3} color="#2563eb" />
      <LegoBrick className="absolute w-9 h-7 opacity-70" style={{ bottom: "22%", left: "12%" }} delay={0.6} color="#E63946" />
      <CuteAnimal type="bunny" className="absolute w-10 h-12 sm:w-14 sm:h-16 opacity-80" style={{ bottom: "8%", left: "20%" }} delay={0.4} />
      <CuteAnimal type="fox" className="absolute w-9 h-9 sm:w-12 sm:h-12 opacity-75" style={{ top: "30%", right: "8%" }} delay={0.9} />
      <Sparkle className="absolute w-4 h-4 text-blue-500" style={{ top: "24%", left: "26%" }} delay={0.6} />
      <Sparkle className="absolute w-3 h-3 text-blue-400" style={{ bottom: "28%", right: "24%" }} delay={1.8} />
      <Sparkle className="absolute w-5 h-5 text-blue-500" style={{ top: "66%", left: "30%" }} delay={2.4} />

      <div className="relative z-10 text-center max-w-2xl">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="font-elegant tracking-[0.5em] uppercase text-blue-700/80 text-[0.6rem] sm:text-xs mb-3">And so, the wish</motion.p>

        <motion.h2 initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.3 }} className="font-serif-display gold-text leading-tight" style={{ fontSize: "clamp(2rem, 7vw, 4rem)" }}>Happy Birthday,</motion.h2>
        <div className="relative inline-block">
          <motion.div aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ width: "130%", height: "160%", background: "radial-gradient(ellipse at center, rgba(37,99,235,0.45) 0%, rgba(37,99,235,0.14) 35%, transparent 70%)", filter: "blur(34px)" }}
            animate={{ opacity: [0.55, 0.95, 0.55], scale: [0.92, 1.06, 0.92] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.h2 initial={{ opacity: 0, scale: 0.7, filter: "blur(16px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1.2, delay: 0.6, type: "spring", bounce: 0.3 }} className="relative font-script gold-text leading-none -mt-1" style={{ fontSize: "clamp(3.5rem, 13vw, 8rem)" }}>Saavi</motion.h2>
        </div>

        <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 1, delay: 1 }} className="mx-auto my-5 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent w-2/3" />

        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.2 }} className="font-elegant text-blue-900/80 text-balance" style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", lineHeight: 1.7 }}>
          May your year be full of sunflowers and soft things, of songs you can't stop humming, of friends who stay, and of small moments that turn into the big memories. You deserve all of it — and then some.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 0.9 }} className="font-script text-blue-700 text-xl sm:text-3xl mt-5">Here's to 25th July, and to you. Always.</motion.p>

        {onRestart && (
          <motion.button onClick={onRestart} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9, duration: 0.7 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
            className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-strong text-blue-900 font-elegant tracking-wide text-sm sm:text-base" style={{ boxShadow: "0 12px 34px -10px rgba(37,99,235,0.35), inset 0 0 0 1px rgba(37,99,235,0.3)" }}>
            <RotateCcw className="w-4 h-4" /> Read it all again
          </motion.button>
        )}
      </div>
    </div>
  );
}

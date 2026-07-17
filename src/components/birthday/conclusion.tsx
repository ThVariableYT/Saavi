"use client";

import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { Sunflower, LegoBrick, CuteAnimal } from "./decorations";

const CONFETTI = Array.from({ length: 28 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 4 + Math.random() * 4,
  color: ["#E8B923", "#E63946", "#2A9D8F", "#9D4EDD", "#F4A261", "#E07A8B"][i % 6],
  shape: i % 3,
  size: 6 + Math.random() * 8,
}));

export default function Conclusion({ onRestart }: { onRestart?: () => void }) {
  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col items-center justify-center px-6"
      style={{
        background:
          "radial-gradient(circle at 50% 30%, #2a2350 0%, transparent 55%), radial-gradient(circle at 20% 80%, #3a1f4a 0%, transparent 45%), linear-gradient(170deg, #14102a 0%, #0c0a1e 100%)",
      }}
    >
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}

      {CONFETTI.map((c) => (
        <motion.div
          key={c.id}
          className="absolute top-0"
          style={{ left: `${c.left}%` }}
          initial={{ y: "-10vh", opacity: 0, rotate: 0 }}
          animate={{ y: "110vh", opacity: [0, 1, 1, 0], rotate: 720 }}
          transition={{ duration: c.duration, repeat: Infinity, delay: c.delay, ease: "linear" }}
        >
          {c.shape === 0 ? (
            <div style={{ width: c.size, height: c.size, background: c.color, borderRadius: "50%" }} />
          ) : c.shape === 1 ? (
            <div style={{ width: c.size, height: c.size * 0.6, background: c.color, borderRadius: "2px" }} />
          ) : (
            <div style={{ width: 0, height: 0, borderLeft: `${c.size / 2}px solid transparent`, borderRight: `${c.size / 2}px solid transparent`, borderBottom: `${c.size}px solid ${c.color}` }} />
          )}
        </motion.div>
      ))}

      <Sunflower className="absolute w-10 h-10 sm:w-14 sm:h-14 opacity-70" style={{ top: "8%", left: "8%" }} delay={0.2} />
      <Sunflower className="absolute w-8 h-8 sm:w-12 sm:h-12 opacity-70" style={{ bottom: "14%", right: "8%" }} delay={0.5} />
      <LegoBrick className="absolute w-10 h-8 opacity-60" style={{ top: "16%", right: "14%" }} delay={0.3} color="#E8B923" />
      <CuteAnimal type="bunny" className="absolute w-10 h-12 sm:w-14 sm:h-16 opacity-70" style={{ bottom: "10%", left: "12%" }} delay={0.4} />

      <div className="relative z-10 text-center max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-elegant tracking-[0.4em] uppercase text-amber-200/70 text-[0.6rem] sm:text-xs mb-3"
        >
          And so, the wish
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.4 }}
          className="font-serif-display gold-text leading-tight"
          style={{ fontSize: "clamp(2rem, 7vw, 4rem)" }}
        >
          Happy Birthday,
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.4 }}
          className="font-script gold-text leading-none -mt-1"
          style={{ fontSize: "clamp(3.5rem, 13vw, 8rem)" }}
        >
          Saavi
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mx-auto my-5 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent w-2/3"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-elegant text-amber-50/80 text-balance"
          style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", lineHeight: 1.7 }}
        >
          May your year be full of sunflowers and soft things, of songs you can't stop
          humming, of friends who stay, and of small moments that turn into the big
          memories. You deserve all of it — and then some.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="font-script text-amber-200 text-xl sm:text-3xl mt-5"
        >
          Here's to 25th July, and to you. Always.
        </motion.p>

        {onRestart && (
          <motion.button
            onClick={onRestart}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-amber-100 font-elegant tracking-wide text-sm sm:text-base"
            style={{ boxShadow: "0 10px 30px -10px rgba(232,185,35,0.4), inset 0 0 0 1px rgba(232,185,35,0.3)" }}
          >
            <RotateCcw className="w-4 h-4" />
            Read it all again
          </motion.button>
        )}
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Sunflower, LegoBrick, CuteAnimal, MusicNote } from "./decorations";

export default function Landing() {
  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col items-center justify-center px-6"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, #fdf6e3 0%, transparent 45%), radial-gradient(circle at 80% 30%, #fbe8c2 0%, transparent 40%), radial-gradient(circle at 50% 90%, #f7e4b8 0%, transparent 50%), linear-gradient(160deg, #fcf5e7 0%, #f9eccf 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(140,100,30,0.18) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <Sunflower className="absolute w-20 h-20 sm:w-28 sm:h-28" style={{ top: "8%", left: "6%" }} delay={0.1} />
      <Sunflower className="absolute w-14 h-14 sm:w-20 sm:h-20" style={{ top: "14%", right: "10%" }} delay={0.3} />
      <Sunflower className="absolute w-16 h-16 sm:w-24 sm:h-24" style={{ bottom: "12%", left: "12%" }} delay={0.5} />
      <Sunflower className="absolute w-12 h-12 sm:w-16 sm:h-16" style={{ bottom: "20%", right: "8%" }} delay={0.7} />
      <LegoBrick className="absolute w-14 h-10 sm:w-20 sm:h-14" style={{ top: "30%", left: "14%" }} delay={0.2} color="#E63946" />
      <LegoBrick className="absolute w-12 h-9 sm:w-16 sm:h-12" style={{ bottom: "28%", right: "16%" }} delay={0.4} color="#2A9D8F" />
      <LegoBrick className="absolute w-10 h-8 sm:w-14 sm:h-10" style={{ top: "62%", left: "8%" }} delay={0.6} color="#9D4EDD" />
      <CuteAnimal type="bunny" className="absolute w-16 h-18 sm:w-24 sm:h-26" style={{ top: "18%", right: "20%" }} delay={0.3} />
      <CuteAnimal type="cat" className="absolute w-14 h-14 sm:w-20 sm:h-20" style={{ bottom: "16%", right: "26%" }} delay={0.5} />
      <CuteAnimal type="fox" className="absolute w-12 h-12 sm:w-16 sm:h-16" style={{ top: "46%", left: "4%" }} delay={0.8} />

      <div className="relative z-10 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-elegant tracking-[0.4em] uppercase text-amber-800/80 text-xs sm:text-sm md:text-base mb-4 sm:mb-6"
        >
          Happy Birthday
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.4 }}
          className="font-script gold-text leading-none"
          style={{ fontSize: "clamp(5rem, 22vw, 14rem)" }}
        >
          Saavi
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mx-auto my-5 sm:my-7 h-px bg-gradient-to-r from-transparent via-amber-700/60 to-transparent w-2/3"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-elegant text-amber-900/80 text-balance"
          style={{ fontSize: "clamp(1.1rem, 2.4vw, 1.6rem)", lineHeight: 1.5 }}
        >
          A little world made with love to celebrate the day you arrived —<br className="hidden sm:block" />
          <span className="font-serif-display italic text-amber-800"> the twenty-fifth of July.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-8 sm:mt-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass premium-shadow text-amber-900/80 font-elegant tracking-wide text-sm sm:text-base"
        >
          <span className="animate-pulse-glow w-2 h-2 rounded-full bg-amber-600" />
          Wander through the pages — your story begins
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Sunflower, LegoBrick, CuteAnimal, Sparkle, AmbientMotes, GlowOrb } from "./decorations";

export default function Landing() {
  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col items-center justify-center px-6 vignette"
      style={{
        background:
          "radial-gradient(circle at 22% 18%, #dceaff 0%, transparent 45%), radial-gradient(circle at 80% 28%, #cfe4fb 0%, transparent 42%), radial-gradient(circle at 50% 95%, #d8ecff 0%, transparent 55%), linear-gradient(160deg, #eef4fd 0%, #dce8f9 100%)",
      }}
    >
      <GlowOrb className="absolute w-[40rem] h-[40rem] -top-40 -left-40" color="rgba(90,140,220,0.2)" />
      <GlowOrb className="absolute w-[34rem] h-[34rem] -bottom-40 -right-32" color="rgba(120,170,235,0.18)" delay={3} />
      <AmbientMotes count={22} color="rgba(60,110,200,0.5)" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(40,90,180,0.14) 1px, transparent 0)", backgroundSize: "26px 26px" }}
      />

      <Sunflower className="absolute w-24 h-24 sm:w-32 sm:h-32" style={{ top: "6%", left: "4%" }} delay={0.1} />
      <Sunflower className="absolute w-14 h-14 sm:w-20 sm:h-20" style={{ top: "12%", right: "8%" }} delay={0.3} />
      <Sunflower className="absolute w-16 h-16 sm:w-24 sm:h-24" style={{ bottom: "10%", left: "9%" }} delay={0.5} />
      <Sunflower className="absolute w-12 h-12 sm:w-16 sm:h-16" style={{ bottom: "18%", right: "6%" }} delay={0.7} />
      <Sunflower className="absolute w-10 h-10 sm:w-14 sm:h-14" style={{ top: "44%", right: "3%" }} delay={0.9} />
      <LegoBrick className="absolute w-14 h-10 sm:w-20 sm:h-14" style={{ top: "28%", left: "12%" }} delay={0.2} color="#E63946" />
      <LegoBrick className="absolute w-12 h-9 sm:w-16 sm:h-12" style={{ bottom: "26%", right: "14%" }} delay={0.4} color="#2A9D8F" />
      <LegoBrick className="absolute w-10 h-8 sm:w-14 sm:h-10" style={{ top: "64%", left: "6%" }} delay={0.6} color="#9D4EDD" />
      <LegoBrick className="absolute w-9 h-7 sm:w-12 sm:h-9" style={{ top: "18%", left: "30%" }} delay={0.8} color="#2563eb" />
      <CuteAnimal type="bunny" className="absolute w-16 h-16 sm:w-24 sm:h-24" style={{ top: "16%", right: "20%" }} delay={0.3} />
      <CuteAnimal type="cat" className="absolute w-14 h-14 sm:w-20 sm:h-20" style={{ bottom: "14%", right: "26%" }} delay={0.5} />
      <CuteAnimal type="fox" className="absolute w-12 h-12 sm:w-16 sm:h-16" style={{ top: "48%", left: "3%" }} delay={0.8} />
      <Sparkle className="absolute w-4 h-4 text-blue-500" style={{ top: "24%", left: "24%" }} delay={0.5} />
      <Sparkle className="absolute w-3 h-3 text-blue-400" style={{ bottom: "30%", right: "22%" }} delay={1.5} />
      <Sparkle className="absolute w-5 h-5 text-blue-500" style={{ top: "70%", right: "12%" }} delay={2.2} />
      <Sparkle className="absolute w-3 h-3 text-blue-400" style={{ bottom: "8%", left: "28%" }} delay={0.9} />

      <div className="relative z-10 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-elegant tracking-[0.5em] uppercase text-blue-700/80 text-xs sm:text-base md:text-xl mb-4 sm:mb-6"
        >
          Happy Birthday
        </motion.p>

        <div className="relative inline-block">
          <motion.div
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ width: "135%", height: "170%", background: "radial-gradient(ellipse at center, rgba(37,99,235,0.45) 0%, rgba(37,99,235,0.14) 35%, transparent 70%)", filter: "blur(40px)" }}
            animate={{ opacity: [0.5, 0.92, 0.5], scale: [0.9, 1.08, 0.9] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.h1
            initial={{ opacity: 0, scale: 0.7, y: 30, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.4, type: "spring", bounce: 0.3 }}
            className="relative font-script gold-text leading-none"
            style={{ fontSize: "clamp(5rem, 22vw, 14rem)" }}
          >
            Saavi
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mx-auto my-5 sm:my-7 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent w-2/3"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="font-elegant text-blue-900/80 text-balance"
          style={{ fontSize: "clamp(1.1rem, 2.4vw, 1.6rem)", lineHeight: 1.55 }}
        >
          A little world made with love to celebrate the day you arrived —
          <span className="font-serif-display italic text-blue-700"> the twenty-fifth of July.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5 }}
          className="mt-8 sm:mt-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-strong premium-shadow text-blue-900/90 font-elegant tracking-wide text-sm sm:text-base"
        >
          <span className="animate-pulse-glow w-2 h-2 rounded-full bg-blue-600" />
          Wander through the pages — your story begins
        </motion.div>
      </div>
    </div>
  );
}

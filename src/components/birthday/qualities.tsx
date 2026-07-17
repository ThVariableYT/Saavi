"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Compass, Sun, Palette, ShieldCheck } from "lucide-react";
import { Sunflower, LegoBrick, CuteAnimal, Sparkle, AmbientMotes, GlowOrb } from "./decorations";

const QUALITIES = [
  { icon: Heart, title: "Kindness", text: "You meet the world softly, and somehow it softens back.", color: "#E07A8B" },
  { icon: Sparkles, title: "Creativity", text: "You build tiny universes from colour and imagination.", color: "#E8B923" },
  { icon: Compass, title: "Curiosity", text: "Always asking, always wandering, always growing.", color: "#6FB890" },
  { icon: Sun, title: "Warmth", text: "Walking into a room with you feels like the sun coming out.", color: "#E8A33D" },
  { icon: Palette, title: "Playfulness", text: "You never let the grown-up world win for too long.", color: "#B98AD8" },
  { icon: ShieldCheck, title: "Loyalty", text: "Once you love someone, you love them for keeps.", color: "#D8A07A" },
];

export default function Qualities() {
  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col items-center justify-center px-5 sm:px-8 py-6 vignette"
      style={{
        background:
          "radial-gradient(circle at 26% 24%, #2e1422 0%, transparent 50%), radial-gradient(circle at 78% 72%, #1e0e18 0%, transparent 45%), linear-gradient(160deg, #1a0d14 0%, #0e0608 100%)",
      }}
    >
      <GlowOrb className="absolute w-[32rem] h-[32rem] top-0 right-0" color="rgba(224,122,139,0.16)" />
      <GlowOrb className="absolute w-[26rem] h-[26rem] bottom-0 left-0" color="rgba(232,185,35,0.12)" delay={3} />
      <AmbientMotes count={18} color="rgba(224,160,176,0.55)" />

      <Sunflower className="absolute w-12 h-12 sm:w-16 sm:h-16 opacity-80" style={{ top: "6%", left: "5%" }} delay={0.2} />
      <Sunflower className="absolute w-9 h-9 sm:w-12 sm:h-12 opacity-70" style={{ bottom: "10%", right: "6%" }} delay={0.5} />
      <Sunflower className="absolute w-8 h-8 sm:w-10 sm:h-10 opacity-65" style={{ top: "60%", left: "3%" }} delay={0.7} />
      <LegoBrick className="absolute w-10 h-8 opacity-75" style={{ top: "14%", right: "12%" }} delay={0.3} color="#E63946" />
      <LegoBrick className="absolute w-8 h-6 opacity-65" style={{ bottom: "22%", left: "14%" }} delay={0.6} color="#9D4EDD" />
      <LegoBrick className="absolute w-9 h-7 opacity-70" style={{ top: "48%", right: "4%" }} delay={0.9} color="#2A9D8F" />
      <CuteAnimal type="cat" className="absolute w-10 h-10 sm:w-14 sm:h-14 opacity-80" style={{ bottom: "8%", left: "20%" }} delay={0.4} />
      <CuteAnimal type="fox" className="absolute w-9 h-9 sm:w-12 sm:h-12 opacity-70" style={{ top: "38%", right: "5%" }} delay={0.8} />
      <CuteAnimal type="bunny" className="absolute w-9 h-9 sm:w-12 sm:h-12 opacity-70" style={{ top: "22%", left: "24%" }} delay={1.1} />
      <Sparkle className="absolute w-3 h-3 text-rose-300" style={{ top: "30%", left: "40%" }} delay={0.8} />
      <Sparkle className="absolute w-4 h-4 text-amber-200" style={{ bottom: "30%", right: "26%" }} delay={2.2} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center mb-5 sm:mb-7">
        <p className="font-elegant tracking-[0.4em] uppercase text-rose-200/60 text-[0.6rem] sm:text-xs mb-1.5">The Things I Admire</p>
        <h2 className="font-serif-display text-amber-50" style={{ fontSize: "clamp(1.7rem, 4.8vw, 2.8rem)" }}>What Makes You, <span className="font-script text-rose-300">You</span></h2>
      </motion.div>

      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-3xl w-full thin-scrollbar" style={{ maxHeight: "56vh", overflowY: "auto", padding: "0.25rem" }}>
        {QUALITIES.map((q, i) => {
          const Icon = q.icon;
          return (
            <motion.div
              key={q.title}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -5, scale: 1.04 }}
              className="relative rounded-2xl p-3 sm:p-4 text-center"
              style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03))", boxShadow: `0 12px 34px -14px ${q.color}55, inset 0 0 0 1px ${q.color}33`, backdropFilter: "blur(10px)" }}
            >
              <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2" style={{ background: `${q.color}22`, boxShadow: `0 0 20px -4px ${q.color}66` }}>
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: q.color }} />
              </div>
              <p className="font-serif-display text-amber-50 text-sm sm:text-lg">{q.title}</p>
              <p className="font-elegant text-amber-100/60 text-[0.7rem] sm:text-xs leading-snug mt-1 hidden sm:block">{q.text}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }} className="relative z-10 text-center mt-5 sm:mt-6 font-script text-rose-200/80 text-lg sm:text-2xl">
        and a hundred little things I could never fit on one page.
      </motion.p>
    </div>
  );
}

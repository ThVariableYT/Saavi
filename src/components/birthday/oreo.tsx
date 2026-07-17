"use client";

import { motion } from "framer-motion";
import { Sunflower, LegoBrick, CuteAnimal, Paw, Sparkle, AmbientMotes, GlowOrb } from "./decorations";

const PAWS = [
  { top: "26%", left: "14%", delay: 0, rot: -12 },
  { top: "44%", right: "16%", delay: 1.2, rot: 8 },
  { top: "66%", left: "22%", delay: 2.4, rot: -4 },
  { top: "32%", right: "10%", delay: 0.6, rot: 14 },
  { top: "74%", right: "26%", delay: 1.8, rot: -8 },
];

export default function Oreo() {
  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col items-center justify-center px-5 sm:px-8 vignette"
      style={{
        background:
          "radial-gradient(circle at 30% 24%, #1c2418 0%, transparent 50%), radial-gradient(circle at 74% 76%, #14180e 0%, transparent 45%), linear-gradient(165deg, #10140e 0%, #080a07 100%)",
      }}
    >
      <GlowOrb className="absolute w-[30rem] h-[30rem] top-0 left-0" color="rgba(216,184,120,0.14)" />
      <AmbientMotes count={16} color="rgba(216,184,120,0.55)" />

      {PAWS.map((p, i) => (
        <Paw key={i} className={`absolute w-6 h-7 text-amber-200/20`} style={{ top: p.top, left: p.left as string, right: p.right as string, rotate: `${p.rot}deg` }} delay={p.delay} />
      ))}

      <Sunflower className="absolute w-11 h-11 sm:w-14 sm:h-14 opacity-80" style={{ top: "7%", left: "6%" }} delay={0.2} />
      <Sunflower className="absolute w-9 h-9 sm:w-12 sm:h-12 opacity-70" style={{ bottom: "12%", right: "7%" }} delay={0.5} />
      <Sunflower className="absolute w-8 h-8 sm:w-10 sm:h-10 opacity-65" style={{ top: "54%", left: "3%" }} delay={0.8} />
      <LegoBrick className="absolute w-9 h-7 opacity-70" style={{ top: "20%", right: "12%" }} delay={0.3} color="#2A9D8F" />
      <LegoBrick className="absolute w-8 h-6 opacity-65" style={{ bottom: "20%", left: "10%" }} delay={0.6} color="#F4A261" />
      <CuteAnimal type="bunny" className="absolute w-11 h-12 sm:w-14 sm:h-16 opacity-70" style={{ bottom: "8%", left: "5%" }} delay={0.4} />
      <CuteAnimal type="fox" className="absolute w-9 h-9 sm:w-12 sm:h-12 opacity-65" style={{ top: "36%", right: "5%" }} delay={0.9} />
      <Sparkle className="absolute w-3 h-3 text-amber-300" style={{ top: "30%", left: "26%" }} delay={0.7} />
      <Sparkle className="absolute w-4 h-4 text-amber-200" style={{ bottom: "34%", right: "24%" }} delay={2} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center mb-4">
        <p className="font-elegant tracking-[0.4em] uppercase text-amber-200/60 text-[0.6rem] sm:text-xs mb-1.5">In Loving Memory</p>
        <h2 className="font-serif-display text-amber-50" style={{ fontSize: "clamp(1.7rem, 4.8vw, 2.8rem)" }}>Oreo</h2>
      </motion.div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        <motion.div initial={{ opacity: 0, scale: 0.9, rotate: -3 }} animate={{ opacity: 1, scale: 1, rotate: -2 }} transition={{ duration: 0.9, delay: 0.15, type: "spring", bounce: 0.3 }} className="relative shrink-0">
          <div className="relative rounded-lg p-2.5 pb-4" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)", boxShadow: "0 25px 60px -15px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(216,184,120,0.25)", backdropFilter: "blur(8px)" }}>
            <div className="overflow-hidden rounded" style={{ width: "min(58vw, 14rem)", aspectRatio: "3 / 4" }}>
              <img src="/memories/oreo.jpg" alt="Oreo the dog" className="w-full h-full object-cover" />
            </div>
            <p className="text-center font-script text-amber-100 text-lg mt-2">our sweet Oreo</p>
          </div>
          <motion.div animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-3 -right-3 w-9 h-9">
            <svg viewBox="0 0 24 24" className="w-full h-full text-rose-400" fill="currentColor">
              <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5 6 5c2 0 3.5 1 4 2 0.5-1 2-2 4-2 3.5 0 5 4 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
            </svg>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex-1">
          <div className="relative p-5 sm:p-6 rounded-xl" style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))", boxShadow: "inset 0 0 0 1px rgba(216,184,120,0.22), 0 8px 40px -12px rgba(0,0,0,0.4)", backdropFilter: "blur(22px) saturate(160%)", WebkitBackdropFilter: "blur(22px) saturate(160%)" }}>
            <span className="font-script text-amber-100 text-2xl sm:text-3xl">in his memory</span>
            <div className="font-elegant text-amber-50/85 space-y-3 mt-2 text-center sm:text-left thin-scrollbar" style={{ fontSize: "clamp(1.02rem, 1.8vw, 1.16rem)", lineHeight: 1.8, maxHeight: "44vh", overflowY: "auto" }}>
              <p>Some souls leave paw prints that never quite fade. Oreo was one of them — a wagging tail at the door, a warm nose finding your hand on the hardest days, a small black-and-white heart that loved without ever needing a reason.</p>
              <p>He taught us what loyalty looks like when it has four paws, what joy sounds like in the rattle of a lead, what unconditional means before we ever knew the word. The garden is quieter now, but if you sit still, you can still hear him — running, always running, toward the people he loved.</p>
              <p className="font-script text-amber-100 text-xl sm:text-2xl pt-1">Forever a good boy. Forever missed. Forever ours.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Sunflower, LegoBrick, CuteAnimal } from "./decorations";

export default function Oreo() {
  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col items-center justify-center px-5 sm:px-8"
      style={{
        background:
          "radial-gradient(circle at 30% 25%, #eef3e4 0%, transparent 50%), radial-gradient(circle at 75% 75%, #f3ead8 0%, transparent 45%), linear-gradient(165deg, #f5f2e7 0%, #e8ede0 100%)",
      }}
    >
      <Sunflower className="absolute w-10 h-10 sm:w-14 sm:h-14 opacity-80" style={{ top: "8%", left: "7%" }} delay={0.2} />
      <Sunflower className="absolute w-8 h-8 sm:w-12 sm:h-12 opacity-70" style={{ bottom: "12%", right: "9%" }} delay={0.5} />
      <LegoBrick className="absolute w-9 h-7 opacity-70" style={{ top: "20%", right: "12%" }} delay={0.3} color="#06A77D" />
      <LegoBrick className="absolute w-8 h-6 opacity-70" style={{ bottom: "20%", left: "12%" }} delay={0.6} color="#F4A261" />
      <CuteAnimal type="bunny" className="absolute w-10 h-12 sm:w-14 sm:h-16 opacity-70" style={{ bottom: "10%", left: "5%" }} delay={0.4} />

      {[
        { top: "30%", left: "16%", d: "M2 4C2 4 0 6 2 8C4 10 4 12 2 14C0 16 2 18 2 18", delay: 0 },
        { top: "55%", right: "18%", d: "M2 4C2 4 0 6 2 8C4 10 4 12 2 14C0 16 2 18 2 18", delay: 1 },
        { top: "70%", left: "24%", d: "M2 4C2 4 0 6 2 8C4 10 4 12 2 14C0 16 2 18 2 18", delay: 2 },
      ].map((p, i) => (
        <motion.svg key={i} viewBox="0 0 4 20" className="absolute w-3 h-8 text-stone-400/30"
          style={{ top: p.top, left: p.left as string, right: p.right as string }}
          initial={{ opacity: 0 }} animate={{ opacity: [0, 0.4, 0] }} transition={{ duration: 4, repeat: Infinity, delay: p.delay }}
        >
          <path d={p.d} stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </motion.svg>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center mb-4"
      >
        <p className="font-elegant tracking-[0.35em] uppercase text-stone-600/70 text-[0.6rem] sm:text-xs mb-1.5">
          In Loving Memory
        </p>
        <h2 className="font-serif-display text-stone-800" style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.6rem)" }}>
          Oreo
        </h2>
      </motion.div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.9, delay: 0.15, type: "spring", bounce: 0.3 }}
          className="relative shrink-0"
        >
          <div className="relative rounded-lg p-2.5 pb-4"
            style={{ background: "linear-gradient(180deg, #ffffff 0%, #f7f2e6 100%)", boxShadow: "0 20px 50px -15px rgba(80,60,30,0.3)" }}
          >
            <div className="overflow-hidden rounded" style={{ width: "min(58vw, 14rem)", aspectRatio: "3 / 4" }}>
              <img src="/memories/oreo.jpg" alt="Oreo the dog" className="w-full h-full object-cover" />
            </div>
            <p className="text-center font-script text-stone-700 text-lg mt-2">our sweet Oreo</p>
          </div>
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 -right-3 w-8 h-8"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full text-rose-400" fill="currentColor">
              <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5 6 5c2 0 3.5 1 4 2 0.5-1 2-2 4-2 3.5 0 5 4 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
            </svg>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1"
        >
          <div className="font-elegant text-stone-700 space-y-3 text-center sm:text-left thin-scrollbar"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)", lineHeight: 1.75, maxHeight: "46vh", overflowY: "auto" }}
          >
            <p>
              Some souls leave paw prints that never quite fade. Oreo was one of them — a wagging tail
              at the door, a warm nose finding your hand on the hardest days, a small black-and-white
              heart that loved without ever needing a reason.
            </p>
            <p>
              He taught us what loyalty looks like when it has four paws, what joy sounds like in the
              rattle of a lead, what unconditional means before we ever knew the word. The garden is
              quieter now, but if you sit still, you can still hear him — running, always running,
              toward the people he loved.
            </p>
            <p className="font-script text-stone-800 text-xl sm:text-2xl pt-1">
              Forever a good boy. Forever missed. Forever ours.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

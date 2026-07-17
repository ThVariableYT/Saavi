"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Compass, Sun, Palette, ShieldCheck } from "lucide-react";
import { Sunflower, LegoBrick, CuteAnimal } from "./decorations";

const QUALITIES = [
  { icon: Heart, title: "Kindness", text: "You meet the world softly, and somehow it softens back.", color: "#E07A8B" },
  { icon: Sparkles, title: "Creativity", text: "You build tiny universes from colour and imagination.", color: "#C9A227" },
  { icon: Compass, title: "Curiosity", text: "Always asking, always wandering, always growing.", color: "#5B8A72" },
  { icon: Sun, title: "Warmth", text: "Walking into a room with you feels like the sun coming out.", color: "#E8A33D" },
  { icon: Palette, title: "Playfulness", text: "You never let the grown-up world win for too long.", color: "#9D6FB8" },
  { icon: ShieldCheck, title: "Loyalty", text: "Once you love someone, you love them for keeps.", color: "#3E7CB1" },
];

export default function Qualities() {
  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col items-center justify-center px-5 sm:px-8 py-6"
      style={{
        background:
          "radial-gradient(circle at 25% 25%, #fdeef0 0%, transparent 50%), radial-gradient(circle at 80% 70%, #fbeed4 0%, transparent 45%), linear-gradient(160deg, #fdf4f1 0%, #f7eede 100%)",
      }}
    >
      <Sunflower className="absolute w-12 h-12 sm:w-16 sm:h-16" style={{ top: "7%", left: "6%" }} delay={0.2} />
      <Sunflower className="absolute w-9 h-9 sm:w-12 sm:h-12" style={{ bottom: "12%", right: "7%" }} delay={0.5} />
      <Sunflower className="absolute w-8 h-8 sm:w-10 sm:h-10" style={{ top: "60%", left: "3%" }} delay={0.7} />
      <LegoBrick className="absolute w-10 h-8" style={{ top: "14%", right: "14%" }} delay={0.3} color="#E63946" />
      <LegoBrick className="absolute w-8 h-6" style={{ bottom: "24%", left: "16%" }} delay={0.6} color="#9D4EDD" />
      <CuteAnimal type="cat" className="absolute w-10 h-10 sm:w-14 sm:h-14" style={{ bottom: "8%", left: "22%" }} delay={0.4} />
      <CuteAnimal type="fox" className="absolute w-9 h-9 sm:w-12 sm:h-12" style={{ top: "40%", right: "4%" }} delay={0.8} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center mb-5 sm:mb-7"
      >
        <p className="font-elegant tracking-[0.35em] uppercase text-rose-700/70 text-[0.6rem] sm:text-xs mb-1.5">
          The Things I Admire
        </p>
        <h2 className="font-serif-display text-stone-800" style={{ fontSize: "clamp(1.7rem, 4.8vw, 2.8rem)" }}>
          What Makes You, <span className="font-script text-rose-700">You</span>
        </h2>
      </motion.div>

      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-3xl w-full thin-scrollbar"
        style={{ maxHeight: "58vh", overflowY: "auto", padding: "0.25rem" }}
      >
        {QUALITIES.map((q, i) => {
          const Icon = q.icon;
          return (
            <motion.div
              key={q.title}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="relative rounded-2xl p-3 sm:p-4 text-center"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.6))",
                boxShadow: `0 10px 30px -12px ${q.color}55, inset 0 0 0 1px ${q.color}22`,
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="mx-auto w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center mb-2"
                style={{ background: `${q.color}1a` }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: q.color }} />
              </div>
              <p className="font-serif-display text-stone-800 text-sm sm:text-lg">{q.title}</p>
              <p className="font-elegant text-stone-600 text-[0.7rem] sm:text-xs leading-snug mt-1 hidden sm:block">
                {q.text}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative z-10 text-center mt-5 sm:mt-6 font-script text-rose-700/80 text-lg sm:text-2xl"
      >
        and a hundred little things I could never fit on one page.
      </motion.p>
    </div>
  );
}

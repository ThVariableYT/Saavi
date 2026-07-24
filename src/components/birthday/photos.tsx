"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Sunflower, LegoBrick, CuteAnimal, Sparkle, AmbientMotes, GlowOrb } from "./decorations";

type Slide = { type: "image" | "video"; src: string; caption: string };

const SLIDES: Slide[] = [
  { type: "image", src: "/photos/saavi13.jpeg", caption: "Sunflowers & your laugh — the perfect afternoon" },
  { type: "image", src: "/photos/saavi2.jpeg", caption: "Quiet coffees that turned into long talks" },
  { type: "image", src: "/photos/saavi12.jpeg", caption: "Footprints by the sea, sunset in our eyes" },
  { type: "image", src: "/photos/saavi6.jpeg", caption: "A little moving memory — press play" },
  { type: "image", src: "/photos/saavi4.jpeg", caption: "Candles, wishes, and you in the glow" },
  { type: "image", src: "/photos/saavi10.jpeg", caption: "Where the wildflowers were, so were we" },
];

export default function Photos() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);

  const go = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + SLIDES.length) % SLIDES.length);
  };

  const onDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -60) go(1);
    else if (info.offset.x > 60) go(-1);
  };

  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 vignette"
      style={{
        background:
          "radial-gradient(circle at 28% 22%, #d3eef0 0%, transparent 48%), radial-gradient(circle at 76% 76%, #c4e0ea 0%, transparent 45%), linear-gradient(160deg, #eaf6f8 0%, #d2e6ee 100%)",
      }}
    >
      <GlowOrb className="absolute w-[30rem] h-[30rem] top-0 right-0" color="rgba(60,150,190,0.16)" />
      <AmbientMotes count={18} color="rgba(50,140,180,0.45)" />

      <Sunflower className="absolute w-11 h-11 sm:w-14 sm:h-14 opacity-85" style={{ top: "8%", left: "5%" }} delay={0.2} />
      <Sunflower className="absolute w-9 h-9 sm:w-12 sm:h-12 opacity-80" style={{ bottom: "12%", right: "6%" }} delay={0.5} />
      <Sunflower className="absolute w-8 h-8 sm:w-10 sm:h-10 opacity-75" style={{ top: "52%", right: "3%" }} delay={0.8} />
      <LegoBrick className="absolute w-10 h-8 opacity-80" style={{ top: "16%", right: "12%" }} delay={0.3} color="#9D4EDD" />
      <LegoBrick className="absolute w-9 h-7 opacity-75" style={{ bottom: "20%", left: "8%" }} delay={0.6} color="#2A9D8F" />
      <LegoBrick className="absolute w-8 h-6 opacity-70" style={{ top: "44%", left: "4%" }} delay={0.9} color="#2563eb" />
      <CuteAnimal type="fox" className="absolute w-11 h-11 sm:w-14 sm:h-14 opacity-85" style={{ bottom: "8%", left: "18%" }} delay={0.4} />
      <CuteAnimal type="bunny" className="absolute w-10 h-10 sm:w-12 sm:h-12 opacity-80" style={{ top: "26%", left: "16%" }} delay={0.7} />
      <Sparkle className="absolute w-3 h-3 text-cyan-500" style={{ top: "34%", right: "24%" }} delay={0.9} />
      <Sparkle className="absolute w-4 h-4 text-blue-400" style={{ bottom: "32%", left: "24%" }} delay={2.1} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center mb-3 sm:mb-5">
        <p className="font-elegant tracking-[0.4em] uppercase text-cyan-700/70 text-[0.6rem] sm:text-xs mb-1.5">A Box of Memories</p>
        <h2 className="font-serif-display text-cyan-900" style={{ fontSize: "clamp(1.6rem, 4.6vw, 2.7rem)" }}>Snapshots of Us</h2>
      </motion.div>

      <div className="relative z-10 w-full max-w-md sm:max-w-lg">
        <div className="relative" style={{ aspectRatio: "1 / 1" }}>
          <AnimatePresence custom={dir} mode="popLayout" initial={false}>
            <motion.div
              key={index}
              custom={dir}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={onDragEnd}
              initial={{ opacity: 0, x: dir >= 0 ? 120 : -120, rotate: dir >= 0 ? 5 : -5, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, rotate: -1.5, scale: 1 }}
              exit={{ opacity: 0, x: dir >= 0 ? -120 : 120, rotate: dir >= 0 ? -5 : 5, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full rounded-md p-3 pb-14"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 100%)", boxShadow: "0 25px 60px -18px rgba(30,80,100,0.3), inset 0 0 0 1px rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-sm bg-slate-200">
                  {SLIDES[index].type === "image" ? (
                    <img src={SLIDES[index].src} alt={SLIDES[index].caption} className="w-full h-full object-cover" draggable={false} />
                  ) : (
                    <video src={SLIDES[index].src} controls playsInline className="w-full h-full object-cover" poster="/photos/memory4.jpg" />
                  )}
                </div>
                <p className="absolute bottom-3 left-0 right-0 text-center font-script text-cyan-900 text-base sm:text-lg px-4">{SLIDES[index].caption}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={() => go(-1)} aria-label="Previous photo"
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-strong premium-shadow flex items-center justify-center text-cyan-900 hover:scale-110 transition-transform">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => go(1)} aria-label="Next photo"
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-strong premium-shadow flex items-center justify-center text-cyan-900 hover:scale-110 transition-transform">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-5">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }} aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all ${i === index ? "w-6 h-2 bg-cyan-600" : "w-2 h-2 bg-cyan-400/40 hover:bg-cyan-400/65"}`} />
          ))}
        </div>
        <p className="text-center mt-3 font-elegant text-cyan-800/60 text-xs sm:text-sm">{index + 1} / {SLIDES.length} · swipe or tap the arrows</p>
      </div>
    </div>
  );
}

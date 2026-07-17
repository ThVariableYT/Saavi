"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Sunflower, LegoBrick, CuteAnimal } from "./decorations";

type Slide = { type: "image" | "video"; src: string; caption: string };

const SLIDES: Slide[] = [
  { type: "image", src: "/photos/memory1.jpg", caption: "Sunflowers & your laugh — the perfect afternoon" },
  { type: "image", src: "/photos/memory2.jpg", caption: "Quiet coffees that turned into long talks" },
  { type: "image", src: "/photos/memory3.jpg", caption: "Footprints by the sea, sunset in our eyes" },
  { type: "video", src: "/photos/memory-video.mp4", caption: "A little moving memory — press play" },
  { type: "image", src: "/photos/memory4.jpg", caption: "Candles, wishes, and you in the glow" },
  { type: "image", src: "/photos/memory5.jpg", caption: "Where the wildflowers were, so were we" },
];

export default function Photos() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const dragStart = useRef(0);

  const go = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + SLIDES.length) % SLIDES.length);
  };

  const onDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -60) go(1);
    else if (info.offset.x > 60) go(-1);
  };

  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6"
      style={{
        background:
          "radial-gradient(circle at 30% 20%, #fbf3e0 0%, transparent 50%), radial-gradient(circle at 70% 80%, #f6e3c6 0%, transparent 45%), linear-gradient(160deg, #faf2e2 0%, #f0e0c2 100%)",
      }}
    >
      <Sunflower className="absolute w-10 h-10 sm:w-14 sm:h-14" style={{ top: "8%", left: "6%" }} delay={0.2} />
      <Sunflower className="absolute w-8 h-8 sm:w-12 sm:h-12" style={{ bottom: "14%", right: "8%" }} delay={0.5} />
      <LegoBrick className="absolute w-10 h-8" style={{ top: "16%", right: "14%" }} delay={0.3} color="#9D4EDD" />
      <LegoBrick className="absolute w-8 h-6" style={{ bottom: "22%", left: "10%" }} delay={0.6} color="#2A9D8F" />
      <CuteAnimal type="fox" className="absolute w-10 h-10 sm:w-14 sm:h-14" style={{ bottom: "10%", left: "20%" }} delay={0.4} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center mb-3 sm:mb-5"
      >
        <p className="font-elegant tracking-[0.35em] uppercase text-amber-800/70 text-[0.6rem] sm:text-xs mb-1.5">
          A Box of Memories
        </p>
        <h2 className="font-serif-display text-amber-900" style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.6rem)" }}>
          Snapshots of Us
        </h2>
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
              initial={{ opacity: 0, x: dir >= 0 ? 120 : -120, rotate: dir >= 0 ? 4 : -4, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, rotate: -1.5, scale: 1 }}
              exit={{ opacity: 0, x: dir >= 0 ? -120 : 120, rotate: dir >= 0 ? -4 : 4, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full rounded-sm p-3 pb-14"
                style={{
                  background: "linear-gradient(180deg, #fffdf7 0%, #fbf5e6 100%)",
                  boxShadow: "0 20px 50px -15px rgba(90,60,10,0.35), 0 2px 4px rgba(0,0,0,0.05)",
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-sm bg-stone-200">
                  {SLIDES[index].type === "image" ? (
                    <img src={SLIDES[index].src} alt={SLIDES[index].caption} className="w-full h-full object-cover" draggable={false} />
                  ) : (
                    <video src={SLIDES[index].src} controls playsInline className="w-full h-full object-cover" poster="/photos/memory4.jpg" />
                  )}
                </div>
                <p className="absolute bottom-3 left-0 right-0 text-center font-script text-amber-900 text-base sm:text-lg px-4">
                  {SLIDES[index].caption}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={() => go(-1)} aria-label="Previous photo"
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass premium-shadow flex items-center justify-center text-amber-900 hover:scale-110 transition-transform">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => go(1)} aria-label="Next photo"
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass premium-shadow flex items-center justify-center text-amber-900 hover:scale-110 transition-transform">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all ${i === index ? "w-6 h-2 bg-amber-700" : "w-2 h-2 bg-amber-700/30 hover:bg-amber-700/50"}`}
            />
          ))}
        </div>
        <p className="text-center mt-3 font-elegant text-amber-800/60 text-xs sm:text-sm">
          {index + 1} / {SLIDES.length} · swipe or tap the arrows
        </p>
      </div>
    </div>
  );
}

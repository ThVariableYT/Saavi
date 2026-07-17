"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sunflower, LegoBrick, CuteAnimal } from "./decorations";

export default function Envelope() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6"
      style={{
        background:
          "radial-gradient(circle at 50% 20%, #f7eed8 0%, transparent 55%), linear-gradient(170deg, #f3e6c8 0%, #e9d6ad 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(120,80,20,0.06) 0px, rgba(120,80,20,0.06) 1px, transparent 1px, transparent 7px)",
        }}
      />
      <Sunflower className="absolute w-12 h-12 sm:w-16 sm:h-16" style={{ top: "8%", left: "8%" }} delay={0.2} />
      <Sunflower className="absolute w-10 h-10 sm:w-14 sm:h-14" style={{ bottom: "16%", right: "8%" }} delay={0.5} />
      <LegoBrick className="absolute w-10 h-8" style={{ top: "16%", right: "12%" }} delay={0.3} color="#E9C46A" />
      <CuteAnimal type="bunny" className="absolute w-12 h-14 sm:w-16 sm:h-18" style={{ bottom: "12%", left: "10%" }} delay={0.4} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center mb-4 sm:mb-6"
      >
        <p className="font-elegant tracking-[0.35em] uppercase text-amber-800/70 text-[0.6rem] sm:text-xs mb-2">
          A Letter For You
        </p>
        <h2 className="font-serif-display text-amber-900" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
          {opened ? "Read slowly, with your heart" : "Tap to open your letter"}
        </h2>
      </motion.div>

      <div className="relative z-10 flex-1 w-full max-w-2xl flex items-start justify-center">
        <div className="relative" style={{ width: "min(90vw, 30rem)", height: "min(60vh, 24rem)" }}>
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background: "linear-gradient(160deg, #c98a4a 0%, #a86a32 100%)",
              boxShadow: "0 30px 60px -20px rgba(90,50,10,0.45), inset 0 0 0 1px rgba(255,255,255,0.1)",
            }}
          >
            <div className="absolute inset-0 opacity-30"
              style={{ backgroundImage: "repeating-linear-gradient(135deg, rgba(0,0,0,0.08) 0 2px, transparent 2px 8px)" }}
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-lg"
              style={{ background: "linear-gradient(180deg, #b87a3a 0%, #9c5f28 100%)", clipPath: "polygon(0 30%, 50% 0, 100% 30%, 100% 100%, 0 100%)" }}
            />
          </div>

          <AnimatePresence>
            {opened && (
              <motion.div
                initial={{ y: "20%", opacity: 0 }}
                animate={{ y: "-55%", opacity: 1 }}
                exit={{ y: "20%", opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/2 -translate-x-1/2 w-[92%] rounded-md overflow-hidden thin-scrollbar"
                style={{
                  background: "linear-gradient(180deg, #fdf6e3 0%, #f5ead0 100%)",
                  boxShadow: "0 20px 50px -15px rgba(80,50,10,0.4)",
                  padding: "1.5rem 1.25rem",
                  maxHeight: "120%",
                  overflowY: "auto",
                }}
              >
                <div className="text-center mb-3">
                  <p className="font-script text-amber-800 text-2xl sm:text-3xl">My dearest Saavi,</p>
                </div>
                <div className="font-elegant text-stone-700 space-y-3 text-center sm:text-left"
                  style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", lineHeight: 1.7 }}
                >
                  <p>
                    Another trip around the sun, and here you are — even brighter than the year before.
                    I wanted to gather a few small things, a few little corners of memories and music and
                    sunshine, and keep them all in one place for you.
                  </p>
                  <p>
                    This tiny website is not much, but it is stitched with thoughts of you — your laugh,
                    your kindness, the way you light up around animals and sunflowers and tiny coloured
                    bricks that snap together. You make ordinary days feel like something worth remembering.
                  </p>
                  <p>
                    So here is to your day. To the twenty-fifth of July. To the wonderful human you are,
                    and the even more wonderful one you are still becoming. May this year be soft where
                    you need it soft, and brave where you want to be brave.
                  </p>
                  <p className="text-center font-script text-amber-800 text-xl sm:text-2xl pt-2">
                    Happy Birthday, Saavi.
                  </p>
                  <p className="text-right font-script text-stone-600 text-lg sm:text-xl pr-2">
                    — always, with love
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="absolute left-1/2 -translate-x-1/2 origin-top cursor-pointer"
            style={{ top: 0, width: "100%", height: "50%", zIndex: opened ? 5 : 20 }}
            initial={false}
            animate={{ rotateX: opened ? -180 : 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setOpened(true)}
          >
            <div
              className="w-full h-full"
              style={{
                background: "linear-gradient(160deg, #d49a55 0%, #b87a3a 100%)",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                filter: opened ? "brightness(0.92)" : "none",
                boxShadow: opened ? "inset 0 -8px 16px rgba(0,0,0,0.2)" : "0 4px 12px rgba(0,0,0,0.15)",
              }}
            />
            {!opened && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                style={{
                  background: "radial-gradient(circle at 35% 30%, #e85a5a, #b33030)",
                  boxShadow: "0 4px 12px rgba(120,30,30,0.5), inset 0 2px 4px rgba(255,255,255,0.3)",
                }}
              >
                <span className="font-script text-amber-50 text-xl sm:text-2xl">S</span>
              </motion.div>
            )}
          </motion.div>

          {!opened && (
            <motion.button
              onClick={() => setOpened(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, -4, 0] }}
              transition={{ opacity: { delay: 0.5 }, y: { duration: 2, repeat: Infinity } }}
              className="absolute left-1/2 -translate-x-1/2 -bottom-12 z-30 px-5 py-2 rounded-full font-elegant tracking-wide text-amber-900 glass premium-shadow text-sm sm:text-base whitespace-nowrap"
            >
              ✦ Open the envelope ✦
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}

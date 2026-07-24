"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sunflower, LegoBrick, CuteAnimal, Sparkle, Petal, AmbientMotes, GlowOrb } from "./decorations";

export default function Envelope() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 vignette"
      style={{
        background:
          "radial-gradient(circle at 28% 20%, #d4e6fa 0%, transparent 48%), radial-gradient(circle at 78% 78%, #c9ddf5 0%, transparent 45%), linear-gradient(170deg, #e6f0fc 0%, #d2e2f6 100%)",
      }}
    >
      <GlowOrb className="absolute w-[34rem] h-[34rem] top-0 left-1/2 -translate-x-1/2" color="rgba(70,130,200,0.18)" />
      <AmbientMotes count={16} color="rgba(50,100,180,0.5)" />
      <Petal className="absolute w-3 h-5 text-blue-400/40" style={{ left: "12%", top: "0%" }} delay={0} />
      <Petal className="absolute w-3 h-5 text-blue-400/40" style={{ left: "70%", top: "0%" }} delay={2} />
      <Petal className="absolute w-3 h-5 text-blue-400/40" style={{ left: "40%", top: "0%" }} delay={4} />

      <Sunflower className="absolute w-12 h-12 sm:w-16 sm:h-16" style={{ top: "8%", left: "6%" }} delay={0.2} />
      <Sunflower className="absolute w-10 h-10 sm:w-14 sm:h-14" style={{ bottom: "12%", right: "6%" }} delay={0.5} />
      <Sunflower className="absolute w-8 h-8 sm:w-10 sm:h-10" style={{ top: "42%", right: "4%" }} delay={0.7} />
      <LegoBrick className="absolute w-10 h-8 sm:w-14 sm:h-10" style={{ top: "16%", right: "12%" }} delay={0.3} color="#2563eb" />
      <LegoBrick className="absolute w-9 h-7 sm:w-12 sm:h-9" style={{ bottom: "22%", left: "8%" }} delay={0.6} color="#E63946" />
      <CuteAnimal type="bunny" className="absolute w-12 h-14 sm:w-16 sm:h-18" style={{ bottom: "8%", left: "16%" }} delay={0.4} />
      <CuteAnimal type="fox" className="absolute w-10 h-10 sm:w-14 sm:h-14" style={{ top: "20%", left: "14%" }} delay={0.8} />
      <Sparkle className="absolute w-3 h-3 text-blue-500" style={{ top: "30%", left: "26%" }} delay={0.6} />
      <Sparkle className="absolute w-4 h-4 text-blue-400" style={{ bottom: "28%", right: "22%" }} delay={1.8} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-4 sm:mb-5"
      >
        <p className="font-elegant tracking-[0.45em] uppercase text-blue-700/70 text-[0.6rem] sm:text-xs mb-2">
          A Letter For You
        </p>
        <h2 className="font-serif-display text-blue-900" style={{ fontSize: "clamp(1.6rem, 4.6vw, 2.8rem)" }}>
          {opened ? <span className="italic">Read slowly, with your heart</span> : "Tap to open your letter"}
        </h2>
      </motion.div>

      <div className="relative z-10 flex-1 w-full flex items-center justify-center" style={{ minHeight: 0 }}>
        <div className="relative" style={{ width: "min(86vw, 30rem)", height: "min(40vh, 13rem)" }}>
          <div className="absolute inset-0 rounded-xl overflow-hidden"
            style={{
              background: "linear-gradient(160deg, #4a78b8 0%, #2e5390 100%)",
              boxShadow: "0 30px 70px -20px rgba(30,60,110,0.4), inset 0 0 0 1px rgba(255,255,255,0.3)",
            }}
          >
            <div className="absolute inset-0 opacity-30"
              style={{ backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 9px)" }}
            />
            <div className="absolute inset-x-0 bottom-0 h-[58%]"
              style={{ background: "linear-gradient(180deg, #3a6098 0%, #243f70 100%)", clipPath: "polygon(0 34%, 50% 0, 100% 34%, 100% 100%, 0 100%)" }}
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-[58%] z-20 pointer-events-none"
            style={{ clipPath: "polygon(0 34%, 50% 0, 100% 34%, 100% 100%, 0 100%)", background: "linear-gradient(180deg, rgba(58,96,152,0.0) 0%, rgba(36,63,112,0.4) 100%)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.25)" }}
          />

          <AnimatePresence>
            {opened && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="absolute z-30 left-1/2 -translate-x-1/2 w-[92%] rounded-lg thin-scrollbar"
                style={{
                  bottom: "26%",
                  background: "linear-gradient(180deg, #ffffff 0%, #f0f5fc 100%)",
                  boxShadow: "0 25px 60px -15px rgba(30,60,110,0.35), inset 0 0 0 1px rgba(70,130,200,0.3)",
                  padding: "1.5rem 1.35rem",
                  maxHeight: "min(62vh, 25rem)",
                  overflowY: "auto",
                }}
              >
                <div className="text-center mb-3">
                  <p className="font-script text-blue-800 text-2xl sm:text-3xl">My dearest Saavi,</p>
                </div>
                <div className="font-elegant text-slate-700 space-y-3 text-center sm:text-left"
                  style={{ fontSize: "clamp(0.98rem, 1.7vw, 1.12rem)", lineHeight: 1.75 }}
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
                  <p className="text-center font-script text-blue-800 text-xl sm:text-2xl pt-2">
                    Happy Birthday, Saavi.
                  </p>
                  <p className="text-right font-script text-slate-500 text-lg sm:text-xl pr-2">
                    — always, with love
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="absolute left-0 top-0 w-full origin-top cursor-pointer"
            style={{ height: "55%", zIndex: opened ? 5 : 25 }}
            initial={false}
            animate={{ rotateX: opened ? -178 : 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => !opened && setOpened(true)}
          >
            <div className="w-full h-full"
              style={{
                background: "linear-gradient(160deg, #5a8aca 0%, #3a6098 100%)",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                boxShadow: opened ? "inset 0 -10px 20px rgba(0,0,0,0.2)" : "0 6px 16px rgba(30,60,110,0.3), inset 0 0 0 1px rgba(255,255,255,0.3)",
              }}
            />
            {!opened && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, y: [0, -3, 0] }}
                transition={{ scale: { delay: 0.3, type: "spring", bounce: 0.5 }, y: { duration: 2.5, repeat: Infinity } }}
                className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                style={{ background: "radial-gradient(circle at 35% 30%, #5a9aea, #1e4a8a)", boxShadow: "0 6px 18px rgba(30,90,180,0.5), inset 0 2px 5px rgba(255,255,255,0.45)" }}
              >
                <span className="font-script text-white text-xl sm:text-2xl">S</span>
              </motion.div>
            )}
          </motion.div>

          {!opened && (
            <motion.button
              onClick={() => setOpened(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, -5, 0] }}
              transition={{ opacity: { delay: 0.5 }, y: { duration: 2.2, repeat: Infinity } }}
              className="absolute left-1/2 -translate-x-1/2 -bottom-12 z-40 px-5 py-2 rounded-full font-elegant tracking-wide text-blue-900 glass-strong premium-shadow text-sm sm:text-base whitespace-nowrap"
            >
              ✦ Open the envelope ✦
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}

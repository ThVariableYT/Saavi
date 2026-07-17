"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { MusicNote, Sunflower, LegoBrick, CuteAnimal } from "./decorations";

export default function Memories() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setProgress(audio.duration ? audio.currentTime / audio.duration : 0);
    const onEnd = () => { setPlaying(false); setProgress(0); };
    const onErr = () => { setError(true); setPlaying(false); };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    audio.addEventListener("error", onErr);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
      audio.removeEventListener("error", onErr);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { setError(false); audio.play().then(() => setPlaying(true)).catch(() => setError(true)); }
  };

  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #6b3a8a 0%, transparent 45%), radial-gradient(circle at 20% 80%, #c8762e 0%, transparent 40%), radial-gradient(circle at 85% 70%, #8a4a6a 0%, transparent 40%), linear-gradient(170deg, #2a1838 0%, #1a1228 100%)",
      }}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/3"
        style={{ background: "radial-gradient(ellipse at top, rgba(255,210,120,0.5), transparent 70%)", filter: "blur(20px)" }}
      />
      <MusicNote className="absolute w-5 h-6 text-amber-300/40" style={{ top: "14%", left: "10%" }} delay={0} />
      <MusicNote className="absolute w-4 h-5 text-amber-300/30" style={{ top: "24%", right: "12%" }} delay={1} />
      <MusicNote className="absolute w-6 h-7 text-amber-300/30" style={{ bottom: "22%", left: "16%" }} delay={2} />
      <Sunflower className="absolute w-10 h-10 sm:w-14 sm:h-14 opacity-60" style={{ bottom: "10%", right: "8%" }} delay={0.4} />
      <CuteAnimal type="bunny" className="absolute w-10 h-12 sm:w-14 sm:h-16 opacity-70" style={{ bottom: "12%", left: "6%" }} delay={0.6} />
      <LegoBrick className="absolute w-8 h-6 opacity-60" style={{ top: "40%", right: "6%" }} delay={0.5} color="#E63946" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center pt-6 sm:pt-8 px-6"
      >
        <p className="font-elegant tracking-[0.35em] uppercase text-amber-200/60 text-[0.6rem] sm:text-xs mb-1.5">
          The Soundtrack of Us
        </p>
        <h2 className="font-serif-display text-amber-50" style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.6rem)" }}>
          One Direction, One Heart
        </h2>
      </motion.div>

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 px-6 pb-6 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative shrink-0 w-full max-w-sm"
        >
          <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "4 / 3", boxShadow: "0 25px 60px -15px rgba(0,0,0,0.6)" }}>
            <img src="/memories/onedirection.jpg" alt="One Direction" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(20,10,30,0.7) 100%)" }} />
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[0.6rem] font-elegant tracking-widest uppercase text-amber-100 bg-black/40"
            >
              ● Live in memory
            </motion.div>
          </div>

          <div className="mt-4 p-3 rounded-xl glass flex items-center gap-3">
            <button onClick={toggle}
              className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-white"
              style={{ background: "linear-gradient(135deg, #e8b923, #c8762e)", boxShadow: "0 6px 16px -4px rgba(232,185,35,0.5)" }}
            >
              {playing ? <Pause className="w-5 h-5" fill="white" /> : <Play className="w-5 h-5 ml-0.5" fill="white" />}
            </button>
            <div className="flex-1 min-w-0">
              <p className="font-serif-display text-amber-50 truncate text-base sm:text-lg">What Makes You Beautiful</p>
              <p className="font-elegant text-amber-200/60 text-xs sm:text-sm truncate">One Direction</p>
              <div className="mt-2 h-0.5 bg-white/15 rounded-full overflow-hidden">
                <motion.div className="h-full bg-amber-300" animate={{ width: `${progress * 100}%` }} transition={{ ease: "linear" }} />
              </div>
            </div>
          </div>
          {error && (
            <p className="text-center mt-2 font-elegant text-amber-200/50 text-xs">
              Add your song at <span className="font-mono text-amber-200/70">/public/memories/onedirection-song.mp3</span>
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex-1 max-w-md"
        >
          <div className="relative p-5 sm:p-6 rounded-xl"
            style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)" }}
          >
            <span className="font-script text-amber-200 text-2xl">the memories</span>
            <div className="font-elegant text-amber-50/85 space-y-3 mt-2 thin-scrollbar"
              style={{ fontSize: "clamp(0.95rem, 1.7vw, 1.1rem)", lineHeight: 1.7, maxHeight: "44vh", overflowY: "auto" }}
            >
              <p>
                Do you remember turning the volume all the way up, windows down, singing every word
                like the whole street was our stage? Those four boys and their songs were the
                background music to everything — first crushes, late nights, inside jokes that still
                make us laugh until it hurts.
              </p>
              <p>
                "What Makes You Beautiful" came on and suddenly the world felt smaller, softer,
                ours. We danced badly and didn't care. We believed every lyric was written for us,
                and maybe — in some small way — it was.
              </p>
              <p className="font-script text-amber-200 text-lg">
                They grew up, and so did we. But the songs stayed.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <audio ref={audioRef} src="/memories/onedirection-song.mp3" preload="none" />
    </div>
  );
}

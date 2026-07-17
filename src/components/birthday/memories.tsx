"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { MusicNote, Sunflower, LegoBrick, CuteAnimal, Sparkle, AmbientMotes, GlowOrb } from "./decorations";

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
    <div className="relative h-full w-full overflow-hidden flex flex-col vignette"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #4a2a5a 0%, transparent 45%), radial-gradient(circle at 18% 82%, #6a3520 0%, transparent 40%), radial-gradient(circle at 85% 70%, #4a2050 0%, transparent 40%), linear-gradient(170deg, #1a1024 0%, #0e0816 100%)",
      }}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/3" style={{ background: "radial-gradient(ellipse at top, rgba(255,210,120,0.45), transparent 70%)", filter: "blur(24px)" }} />
      <GlowOrb className="absolute w-[30rem] h-[30rem] bottom-0 left-0" color="rgba(200,118,46,0.16)" />
      <AmbientMotes count={18} color="rgba(232,185,35,0.6)" />

      <MusicNote className="absolute w-6 h-7 text-amber-300/50" style={{ top: "14%", left: "8%" }} delay={0} />
      <MusicNote className="absolute w-5 h-6 text-amber-300/40" style={{ top: "24%", right: "10%" }} delay={1.2} />
      <MusicNote className="absolute w-7 h-8 text-amber-300/40" style={{ bottom: "20%", left: "12%" }} delay={2.4} />
      <MusicNote className="absolute w-4 h-5 text-amber-300/35" style={{ bottom: "30%", right: "16%" }} delay={0.8} />
      <Sunflower className="absolute w-10 h-10 sm:w-14 sm:h-14 opacity-65" style={{ bottom: "10%", right: "6%" }} delay={0.4} />
      <Sunflower className="absolute w-8 h-8 sm:w-10 sm:h-10 opacity-60" style={{ top: "40%", right: "4%" }} delay={0.9} />
      <CuteAnimal type="bunny" className="absolute w-10 h-12 sm:w-14 sm:h-16 opacity-70" style={{ bottom: "10%", left: "5%" }} delay={0.6} />
      <CuteAnimal type="cat" className="absolute w-9 h-9 sm:w-12 sm:h-12 opacity-65" style={{ top: "34%", left: "4%" }} delay={1.1} />
      <LegoBrick className="absolute w-9 h-7 opacity-65" style={{ top: "40%", right: "6%" }} delay={0.5} color="#E63946" />
      <LegoBrick className="absolute w-8 h-6 opacity-60" style={{ bottom: "26%", left: "22%" }} delay={1} color="#9D4EDD" />
      <Sparkle className="absolute w-3 h-3 text-amber-300" style={{ top: "30%", left: "30%" }} delay={1} />
      <Sparkle className="absolute w-4 h-4 text-amber-200" style={{ bottom: "40%", right: "28%" }} delay={2.3} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center pt-6 sm:pt-8 px-6">
        <p className="font-elegant tracking-[0.4em] uppercase text-amber-200/60 text-[0.6rem] sm:text-xs mb-1.5">The Soundtrack of Us</p>
        <h2 className="font-serif-display text-amber-50" style={{ fontSize: "clamp(1.6rem, 4.6vw, 2.7rem)" }}>One Direction, One Heart</h2>
      </motion.div>

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 px-6 pb-6 max-w-5xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative shrink-0 w-full max-w-sm">
          <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "4 / 3", boxShadow: "0 25px 60px -15px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(232,185,35,0.2)" }}>
            <img src="/memories/onedirection.jpg" alt="One Direction" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 45%, rgba(14,8,22,0.85) 100%)" }} />
            <motion.div animate={{ opacity: [0.35, 0.9, 0.35] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[0.6rem] font-elegant tracking-widest uppercase text-amber-100 bg-black/50" style={{ boxShadow: "inset 0 0 0 1px rgba(232,185,35,0.3)" }}>
              ● Live in memory
            </motion.div>
          </div>

          <div className="mt-4 p-3 rounded-xl glass-strong flex items-center gap-3">
            <button onClick={toggle} className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-white" style={{ background: "linear-gradient(135deg, #e8b923, #c8762e)", boxShadow: "0 6px 18px -4px rgba(232,185,35,0.6)" }}>
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
          {error && <p className="text-center mt-2 font-elegant text-amber-200/50 text-xs">Add your song at <span className="font-mono text-amber-200/70">/public/memories/onedirection-song.mp3</span></p>}
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="flex-1 max-w-md">
          <div className="relative p-5 sm:p-6 rounded-xl" style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))", boxShadow: "inset 0 0 0 1px rgba(232,185,35,0.22), 0 8px 40px -12px rgba(0,0,0,0.4)", backdropFilter: "blur(22px) saturate(160%)", WebkitBackdropFilter: "blur(22px) saturate(160%)" }}>
            <span className="font-script text-amber-200 text-2xl sm:text-3xl">the memories</span>
            <div className="font-elegant text-amber-50/85 space-y-3 mt-2 thin-scrollbar" style={{ fontSize: "clamp(0.98rem, 1.7vw, 1.12rem)", lineHeight: 1.75, maxHeight: "44vh", overflowY: "auto" }}>
              <p>Do you remember turning the volume all the way up, windows down, singing every word like the whole street was our stage? Those four boys and their songs were the background music to everything — first crushes, late nights, inside jokes that still make us laugh until it hurts.</p>
              <p>"What Makes You Beautiful" came on and suddenly the world felt smaller, softer, ours. We danced badly and didn't care. We believed every lyric was written for us, and maybe — in some small way — it was.</p>
              <p className="font-script text-amber-200 text-lg sm:text-xl">They grew up, and so did we. But the songs stayed.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <audio ref={audioRef} src="/memories/onedirection-song.mp3" preload="none" />
    </div>
  );
}

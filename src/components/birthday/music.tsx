"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { MusicNote, Sunflower, LegoBrick, CuteAnimal, Sparkle, AmbientMotes, GlowOrb } from "./decorations";

const TRACKS = [
  { title: "Golden Hour", artist: "Our favourite tune", cover: "/music/cover1.jpg", src: "public\\music\\Lay _Jaa.m4a", color: "#2563eb" },
  { title: "Starlight Lullaby", artist: "For the quiet nights", cover: "/music/cover2.jpg", src: "public\\music\\AZUL.m4a", color: "#7c5fd6" },
  { title: "Sunflower Days", artist: "Summer in a song", cover: "/music/cover3.jpg", src: "public\\music\\DOPAMINE.m4a", color: "#2a9d8f" },
];

export default function MusicPage() {
  const [current, setCurrent] = useState<number | null>(null);
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
  }, [current]);

  const select = (i: number) => {
    if (current === i) {
      if (playing) { audioRef.current?.pause(); setPlaying(false); }
      else { setError(false); audioRef.current?.play().then(() => setPlaying(true)).catch(() => setError(true)); }
    } else {
      setCurrent(i);
      setError(false);
      setProgress(0);
      setTimeout(() => { audioRef.current?.play().then(() => setPlaying(true)).catch(() => setError(true)); }, 80);
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col vignette"
      style={{
        background:
          "radial-gradient(circle at 25% 30%, #dce8f5 0%, transparent 45%), radial-gradient(circle at 80% 70%, #cdddf0 0%, transparent 42%), linear-gradient(160deg, #eef3fb 0%, #d8e6f4 100%)",
      }}
    >
      <GlowOrb className="absolute w-[32rem] h-[32rem] top-10 left-10" color="rgba(50,110,200,0.16)" />
      <GlowOrb className="absolute w-[28rem] h-[28rem] bottom-0 right-0" color="rgba(124,95,214,0.12)" delay={3} />
      <AmbientMotes count={20} color="rgba(50,110,200,0.5)" />

      <MusicNote className="absolute w-6 h-7 text-blue-500/50" style={{ top: "12%", left: "7%" }} delay={0} />
      <MusicNote className="absolute w-5 h-6 text-blue-500/40" style={{ top: "22%", right: "12%" }} delay={1.2} />
      <MusicNote className="absolute w-7 h-8 text-blue-500/40" style={{ bottom: "18%", left: "14%" }} delay={2.4} />
      <MusicNote className="absolute w-5 h-6 text-blue-500/50" style={{ bottom: "12%", right: "8%" }} delay={0.6} />
      <MusicNote className="absolute w-4 h-5 text-blue-500/30" style={{ top: "50%", left: "3%" }} delay={1.8} />
      <Sunflower className="absolute w-12 h-12 sm:w-16 sm:h-16 opacity-85" style={{ top: "7%", right: "5%" }} delay={0.3} />
      <Sunflower className="absolute w-9 h-9 sm:w-12 sm:h-12 opacity-80" style={{ bottom: "8%", left: "4%" }} delay={0.7} />
      <LegoBrick className="absolute w-10 h-8 opacity-80" style={{ top: "58%", left: "4%" }} delay={0.4} color="#2563eb" />
      <LegoBrick className="absolute w-9 h-7 opacity-75" style={{ bottom: "24%", right: "6%" }} delay={0.9} color="#E63946" />
      <CuteAnimal type="cat" className="absolute w-12 h-12 sm:w-16 sm:h-16 opacity-90" style={{ bottom: "10%", right: "22%" }} delay={0.6} />
      <CuteAnimal type="bunny" className="absolute w-10 h-10 sm:w-14 sm:h-14 opacity-80" style={{ top: "30%", right: "3%" }} delay={1.1} />
      <Sparkle className="absolute w-3 h-3 text-blue-500" style={{ top: "40%", left: "20%" }} delay={0.8} />
      <Sparkle className="absolute w-4 h-4 text-blue-400" style={{ bottom: "40%", right: "30%" }} delay={2} />

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-14 px-6 py-6 max-w-6xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative shrink-0">
          <div className="relative" style={{ width: "min(64vw, 18rem)", height: "min(64vw, 18rem)" }}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.18), transparent 65%)", filter: "blur(28px)", transform: "scale(1.1)" }}
            />
            <motion.div
              animate={{ rotate: playing ? 360 : 0 }}
              transition={{ duration: 3, repeat: playing ? Infinity : 0, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background: "#1a1a1a",
                boxShadow: "0 30px 70px -14px rgba(30,60,110,0.4), 0 0 0 1px rgba(255,255,255,0.5), inset 0 0 40px rgba(0,0,0,0.5)",
              }}
            >
              <div className="absolute inset-0 rounded-full" style={{ background: "repeating-radial-gradient(circle at center, #0c0c0c 0px, #0c0c0c 1.4px, #181818 2.4px, #0c0c0c 3.4px)" }} />
              <div className="absolute inset-0 rounded-full" style={{ background: "repeating-radial-gradient(circle at center, transparent 0px, transparent 7px, rgba(255,255,255,0.02) 7px, rgba(255,255,255,0.02) 8px)" }} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ width: "47%", height: "47%", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.6), 0 0 0 1px rgba(37,99,235,0.3)" }} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ width: "49%", height: "49%", boxShadow: "0 0 0 2px #0a0a0a, 0 0 0 3px rgba(37,99,235,0.5), 0 0 0 4px rgba(10,10,10,0.9)" }} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden"
                style={{ width: "44%", height: "44%", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.5)" }}
              >
                {current !== null ? (
                  <img src={TRACKS[current].cover} alt={TRACKS[current].title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ background: "radial-gradient(circle at 35% 30%, #4a6090, #1a2a48)" }}>
                    <MusicNote className="w-9 h-11 text-white/70" />
                  </div>
                )}
                <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.18), transparent 45%)" }} />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-10" style={{ background: "radial-gradient(circle at 35% 30%, #4a4a4a, #0a0a0a)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)" }} />
              <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 32% 26%, rgba(255,255,255,0.14), transparent 38%)" }} />
              <div className="absolute inset-0 rounded-full" style={{ background: "conic-gradient(from 220deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.05) 40deg, transparent 90deg, transparent 220deg, rgba(255,255,255,0.04) 260deg, transparent 310deg)" }} />
            </motion.div>

            <motion.div
              animate={{ rotate: playing ? 18 : -12 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute -right-2 sm:-right-3 -top-3 sm:-top-4 origin-top-right z-20"
              style={{ width: "9rem", height: "11rem" }}
            >
              <div className="absolute right-2 top-0 w-4 h-4 rounded-full" style={{ background: "radial-gradient(circle at 35% 30%, #e8e8e8, #6a6a6a)", boxShadow: "inset 0 1px 2px rgba(255,255,255,0.5), 0 2px 5px rgba(30,60,110,0.3)" }} />
              <div className="absolute right-3.5 top-3 w-7 h-7 rounded-full" style={{ background: "radial-gradient(circle at 35% 30%, #f0f0f0, #8a8a8a)", boxShadow: "inset 0 2px 3px rgba(255,255,255,0.5), 0 3px 8px rgba(30,60,110,0.3)" }} />
              <div className="absolute right-5 top-9 w-1.5 rounded-full" style={{ height: "7.5rem", transformOrigin: "top", rotate: "-10deg", background: "linear-gradient(to right, #4a4a4a, #d8d8d8 40%, #f4f4f4 50%, #b0b0b0 60%, #4a4a4a)", boxShadow: "0 1px 3px rgba(30,60,110,0.3)" }} />
              <div className="absolute right-[3.4rem] top-[7.2rem] w-6 h-3 rounded-sm" style={{ transform: "rotate(-10deg)", background: "linear-gradient(to right, #3a3a3a, #c0c0c0 50%, #3a3a3a)", boxShadow: "0 2px 5px rgba(30,60,110,0.35)" }} />
              <div className="absolute right-[4.6rem] top-[7.5rem] w-2 h-2 rounded-sm" style={{ transform: "rotate(-10deg)", background: "#1a1a1a", boxShadow: "0 0 4px rgba(37,99,235,0.5)" }} />
            </motion.div>
          </div>
          <p className="text-center mt-5 font-script text-blue-800 text-xl sm:text-2xl">Now Playing</p>
          <p className="text-center font-elegant text-blue-900/60 text-sm sm:text-base">
            {current !== null ? TRACKS[current].title : "Choose a track"}
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="flex-1 w-full max-w-md space-y-3">
          <p className="font-elegant tracking-[0.35em] uppercase text-blue-700/60 text-[0.6rem] sm:text-xs mb-2">Three of our favourites</p>
          {TRACKS.map((track, i) => {
            const active = current === i;
            return (
              <motion.button
                key={i}
                onClick={() => select(i)}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center gap-4 p-3 rounded-xl text-left transition-colors ${active ? "glass-strong" : "hover:bg-white/40"}`}
                style={{ boxShadow: active ? `inset 0 0 0 1px ${track.color}66, 0 0 30px -10px ${track.color}44` : "inset 0 0 0 1px rgba(70,120,200,0.15)" }}
              >
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0">
                  <img src={track.cover} alt={track.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    {active && playing ? <Pause className="w-5 h-5 text-white" fill="white" /> : <Play className="w-5 h-5 text-white" fill="white" />}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-serif-display truncate ${active ? "text-blue-900" : "text-blue-950"}`} style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)" }}>{track.title}</p>
                  <p className="font-elegant text-blue-800/60 text-xs sm:text-sm truncate">{track.artist}</p>
                  {active && (
                    <div className="mt-2 h-0.5 bg-blue-900/10 rounded-full overflow-hidden">
                      <motion.div className="h-full rounded-full" style={{ background: track.color }} animate={{ width: `${progress * 100}%` }} transition={{ ease: "linear" }} />
                    </div>
                  )}
                </div>
              </motion.button>
            );
          })}
          {error && (
            <AnimatePresence>
              <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center text-blue-700/70 font-elegant text-xs sm:text-sm pt-2">
                Add your <span className="font-mono text-blue-800">.flac</span> files in <span className="font-mono text-blue-800">/public/music/</span> to play these tracks
              </motion.p>
            </AnimatePresence>
          )}
        </motion.div>
      </div>

      {current !== null && <audio ref={audioRef} src={TRACKS[current].src} preload="none" crossOrigin="anonymous" />}
    </div>
  );
}

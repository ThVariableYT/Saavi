"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { MusicNote, Sunflower, LegoBrick, CuteAnimal } from "./decorations";

const TRACKS = [
  { title: "Golden Hour", artist: "Our favourite tune", cover: "/music/cover1.jpg", src: "/music/track1.flac", color: "#E8B923" },
  { title: "Starlight Lullaby", artist: "For the quiet nights", cover: "/music/cover2.jpg", src: "/music/track2.flac", color: "#7B68AE" },
  { title: "Sunflower Days", artist: "Summer in a song", cover: "/music/cover3.jpg", src: "/music/track3.flac", color: "#F2B90C" },
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
      setTimeout(() => {
        audioRef.current?.play().then(() => setPlaying(true)).catch(() => setError(true));
      }, 80);
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col"
      style={{
        background:
          "radial-gradient(circle at 25% 30%, #3a2a1a 0%, transparent 45%), radial-gradient(circle at 80% 70%, #2a1f33 0%, transparent 40%), linear-gradient(160deg, #1c1410 0%, #15101c 100%)",
      }}
    >
      <MusicNote className="absolute w-5 h-6 text-amber-300/40" style={{ top: "12%", left: "8%" }} delay={0} />
      <MusicNote className="absolute w-4 h-5 text-amber-300/30" style={{ top: "22%", right: "14%" }} delay={1} />
      <MusicNote className="absolute w-6 h-7 text-amber-300/30" style={{ bottom: "20%", left: "18%" }} delay={2} />
      <MusicNote className="absolute w-4 h-5 text-amber-300/40" style={{ bottom: "14%", right: "10%" }} delay={0.5} />
      <Sunflower className="absolute w-12 h-12 sm:w-16 sm:h-16 opacity-70" style={{ top: "8%", right: "6%" }} delay={0.3} />
      <CuteAnimal type="cat" className="absolute w-12 h-12 sm:w-16 sm:h-16 opacity-80" style={{ bottom: "10%", right: "24%" }} delay={0.6} />
      <LegoBrick className="absolute w-10 h-8 opacity-70" style={{ top: "60%", left: "4%" }} delay={0.4} color="#E9C46A" />

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 px-6 py-6 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative shrink-0"
        >
          <div className="relative" style={{ width: "min(60vw, 16rem)", height: "min(60vw, 16rem)" }}>
            <motion.div
              animate={{ rotate: playing ? 360 : 0 }}
              transition={{ duration: 3, repeat: playing ? Infinity : 0, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, #1a1a1a 30%, #0a0a0a 31%, #1a1a1a 32%, #0a0a0a 33%, #1a1a1a 34%, #111 35%, #0a0a0a 45%, #1a1a1a 46%, #0a0a0a 60%, #111 61%, #0a0a0a 75%, #1a1a1a 76%, #000 100%)",
                boxShadow: "0 20px 50px -10px rgba(0,0,0,0.7), inset 0 0 30px rgba(0,0,0,0.5)",
              }}
            >
              <div className="absolute inset-0 rounded-full" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)" }} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden"
                style={{ width: "42%", height: "42%", boxShadow: "0 0 0 2px rgba(0,0,0,0.4)" }}
              >
                {current !== null ? (
                  <img src={TRACKS[current].cover} alt={TRACKS[current].title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ background: TRACKS[0].color }}>
                    <MusicNote className="w-8 h-10 text-white/80" />
                  </div>
                )}
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-stone-800 border border-stone-600 z-10" />
            </motion.div>

            <motion.div
              animate={{ rotate: playing ? 22 : -8 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute -right-2 -top-2 origin-top-right z-20"
              style={{ width: "8rem", height: "10rem" }}
            >
              <div className="absolute right-3 top-0 w-2 h-2 rounded-full bg-stone-400" />
              <div className="absolute right-3.5 top-1 w-5 h-5 rounded-full bg-gradient-to-br from-stone-300 to-stone-500" />
              <div className="absolute right-4 top-4 w-1.5 rounded-full bg-gradient-to-b from-stone-300 to-stone-600" style={{ height: "8rem", transformOrigin: "top", rotate: "-8deg" }} />
            </motion.div>
          </div>
          <p className="text-center mt-4 font-script text-amber-200/80 text-xl">Now Playing</p>
          <p className="text-center font-elegant text-amber-100/60 text-sm">
            {current !== null ? TRACKS[current].title : "Choose a track"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex-1 w-full max-w-md space-y-3"
        >
          <p className="font-elegant tracking-[0.3em] uppercase text-amber-300/60 text-[0.6rem] sm:text-xs mb-2">
            Three of our favourites
          </p>
          {TRACKS.map((track, i) => {
            const active = current === i;
            return (
              <motion.button
                key={i}
                onClick={() => select(i)}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center gap-4 p-3 rounded-xl text-left transition-colors ${active ? "glass" : "hover:bg-white/5"}`}
                style={{ boxShadow: active ? `inset 0 0 0 1px ${track.color}55` : "none" }}
              >
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0">
                  <img src={track.cover} alt={track.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    {active && playing ? (
                      <Pause className="w-5 h-5 text-white" fill="white" />
                    ) : (
                      <Play className="w-5 h-5 text-white" fill="white" />
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-serif-display truncate ${active ? "text-amber-100" : "text-stone-200"}`}
                    style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
                  >
                    {track.title}
                  </p>
                  <p className="font-elegant text-stone-400 text-xs sm:text-sm truncate">{track.artist}</p>
                  {active && (
                    <div className="mt-2 h-0.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div className="h-full rounded-full" style={{ background: track.color }} animate={{ width: `${progress * 100}%` }} transition={{ ease: "linear" }} />
                    </div>
                  )}
                </div>
              </motion.button>
            );
          })}
          {error && (
            <AnimatePresence>
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center text-amber-300/60 font-elegant text-xs sm:text-sm pt-2"
              >
                Add your <span className="font-mono text-amber-200">.flac</span> files in <span className="font-mono text-amber-200">/public/music/</span> to play these tracks
              </motion.p>
            </AnimatePresence>
          )}
        </motion.div>
      </div>

      {current !== null && (
        <audio ref={audioRef} src={TRACKS[current].src} preload="none" crossOrigin="anonymous" />
      )}
    </div>
  );
}

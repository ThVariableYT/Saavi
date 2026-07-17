"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Landing from "@/components/birthday/landing";
import Envelope from "@/components/birthday/envelope";
import MusicPage from "@/components/birthday/music";
import Photos from "@/components/birthday/photos";
import Memories from "@/components/birthday/memories";
import Oreo from "@/components/birthday/oreo";
import Qualities from "@/components/birthday/qualities";
import Conclusion from "@/components/birthday/conclusion";

const PAGE_TITLES = [
  "Welcome",
  "Your Letter",
  "Our Songs",
  "Snapshots",
  "The Soundtrack",
  "In Memory",
  "What Makes You",
  "The Wish",
];

export default function Home() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const readHash = () => {
      const raw = window.location.hash.replace("#", "");
      const n = parseInt(raw, 10);
      if (!isNaN(n) && n >= 1 && n <= 8) setPage(n - 1);
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  const go = useCallback((next: number) => {
    setPage((prev) => {
      const clamped = Math.max(0, Math.min(7, next));
      setDirection(clamped > prev ? 1 : clamped < prev ? -1 : 0);
      if (typeof window !== "undefined") {
        const newHash = `#${clamped + 1}`;
        if (window.location.hash !== newHash) {
          window.history.pushState(null, "", newHash);
        }
      }
      return clamped;
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(page + 1);
      else if (e.key === "ArrowLeft") go(page - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [page, go]);

  const pages = [Landing, Envelope, MusicPage, Photos, Memories, Oreo, Qualities, Conclusion];
  const Current = pages[page];

  return (
    <main className="relative h-[100dvh] w-screen overflow-hidden bg-background">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          initial={{ opacity: 0, x: direction === 0 ? 0 : direction * 60, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: direction === 0 ? 0 : -direction * 60, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {page === 7 ? <Current onRestart={() => go(0)} /> : <Current />}
        </motion.div>
      </AnimatePresence>

      <a
        href={page > 0 ? `#${page}` : undefined}
        onClick={(e) => {
          if (page === 0) return;
          e.preventDefault();
          go(page - 1);
        }}
        aria-label="Previous page"
        className={`fixed bottom-5 left-4 sm:bottom-7 sm:left-7 z-50 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full font-elegant tracking-wide text-sm transition-all duration-300 ${page === 0 ? "opacity-0 pointer-events-none translate-y-2" : "glass premium-shadow text-stone-700 hover:scale-105 hover:-translate-x-0.5"}`}
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </a>

      <a
        href={page < 7 ? `#${page + 2}` : undefined}
        onClick={(e) => {
          if (page === 7) return;
          e.preventDefault();
          go(page + 1);
        }}
        aria-label="Next page"
        className={`fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-50 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full font-elegant tracking-wide text-sm transition-all duration-300 ${page === 7 ? "opacity-0 pointer-events-none translate-y-2" : "glass premium-shadow text-stone-700 hover:scale-105 hover:translate-x-0.5"}`}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </a>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full glass">
        {PAGE_TITLES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to page ${i + 1}`}
            className={`transition-all rounded-full ${i === page ? "w-6 h-1.5 bg-amber-700" : "w-1.5 h-1.5 bg-stone-500/40 hover:bg-stone-500/70"}`}
          />
        ))}
      </div>

      <div className="fixed top-3 right-4 sm:top-4 sm:right-5 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass">
        <span className="font-serif-display text-stone-700 text-sm">{String(page + 1).padStart(2, "0")}</span>
        <span className="font-elegant text-stone-400 text-xs">/ 08</span>
      </div>
    </main>
  );
}

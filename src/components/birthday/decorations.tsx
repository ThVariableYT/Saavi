"use client";

import { motion } from "framer-motion";
import { useId } from "react";

type DecorProps = {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
};

export function Sunflower({ className, style, delay = 0 }: DecorProps) {
  const id = useId().replace(/:/g, "");
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -10, 0], rotate: [0, 4, 0] }}
      transition={{
        opacity: { duration: 0.9, delay },
        scale: { duration: 0.9, delay, type: "spring", bounce: 0.4 },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <defs>
        <radialGradient id={`petal-${id}`} cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="55%" stopColor="#F2B90C" />
          <stop offset="100%" stopColor="#C8881A" />
        </radialGradient>
        <radialGradient id={`center-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7A4A1E" />
          <stop offset="100%" stopColor="#3A2410" />
        </radialGradient>
      </defs>
      {Array.from({ length: 14 }).map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="20"
          rx="8.5"
          ry="20"
          fill={`url(#petal-${id})`}
          stroke="#9c6b1a"
          strokeWidth="0.6"
          transform={`rotate(${i * 25.7} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="15" fill={`url(#center-${id})`} />
      {Array.from({ length: 18 }).map((_, i) => {
        const a = (i / 18) * Math.PI * 2;
        const r = 3 + (i % 3) * 3.2;
        return <circle key={i} cx={50 + Math.cos(a) * r} cy={50 + Math.sin(a) * r} r="1.1" fill="#2a1808" opacity="0.7" />;
      })}
      <circle cx="46" cy="46" r="3" fill="#9c6b1a" opacity="0.4" />
    </motion.svg>
  );
}

export function LegoBrick({ className, style, delay = 0, color = "#E63946" }: DecorProps & { color?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <motion.svg
      viewBox="0 0 80 60"
      className={className}
      style={style}
      initial={{ opacity: 0, rotate: -12, scale: 0.6 }}
      animate={{ opacity: 1, rotate: [-4, 3, -4], scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.7, delay },
        scale: { duration: 0.7, delay, type: "spring", bounce: 0.4 },
        rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <defs>
        <linearGradient id={`lego-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="4" y="20" width="72" height="36" rx="7" fill={`url(#lego-${id})`} />
      <rect x="4" y="20" width="72" height="10" rx="7" fill="white" opacity="0.18" />
      <rect x="4" y="46" width="72" height="10" rx="7" fill="black" opacity="0.18" />
      {[20, 40, 60].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="20" r="8" fill={`url(#lego-${id})`} />
          <circle cx={cx} cy="20" r="8" fill="white" opacity="0.12" />
          <ellipse cx={cx} cy="14" rx="3.4" ry="1.6" fill="white" opacity="0.55" />
        </g>
      ))}
    </motion.svg>
  );
}

export function CuteAnimal({ className, style, delay = 0, type = "bunny" }: DecorProps & { type?: "bunny" | "cat" | "fox" }) {
  const id = useId().replace(/:/g, "");
  const common = {
    className,
    style,
    initial: { opacity: 0, scale: 0.6, y: 12 } as const,
    animate: { opacity: 1, scale: 1, y: [0, -8, 0], rotate: [0, type === "fox" ? 3 : 1.5, 0] } as const,
    transition: {
      opacity: { duration: 0.8, delay },
      scale: { duration: 0.8, delay, type: "spring" as const, bounce: 0.4 },
      y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const, delay },
      rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" as const, delay },
    },
  };

  if (type === "bunny") {
    return (
      <motion.svg viewBox="0 0 120 120" {...common}>
        <defs>
          <radialGradient id={`fur-${id}`} cx="42%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f6efe2" />
            <stop offset="100%" stopColor="#dccfb8" />
          </radialGradient>
          <linearGradient id={`ear-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7b8c4" />
            <stop offset="100%" stopColor="#e0899a" />
          </linearGradient>
        </defs>
        <ellipse cx="42" cy="30" rx="11" ry="30" fill={`url(#fur-${id})`} stroke="#cdbfa3" strokeWidth="1" transform="rotate(-9 42 30)" />
        <ellipse cx="78" cy="30" rx="11" ry="30" fill={`url(#fur-${id})`} stroke="#cdbfa3" strokeWidth="1" transform="rotate(9 78 30)" />
        <ellipse cx="42" cy="34" rx="5" ry="20" fill={`url(#ear-${id})`} transform="rotate(-9 42 34)" />
        <ellipse cx="78" cy="34" rx="5" ry="20" fill={`url(#ear-${id})`} transform="rotate(9 78 34)" />
        <ellipse cx="60" cy="78" rx="34" ry="32" fill={`url(#fur-${id})`} stroke="#cdbfa3" strokeWidth="1" />
        <ellipse cx="32" cy="82" rx="9" ry="7" fill="#f3e8d4" opacity="0.7" />
        <ellipse cx="88" cy="82" rx="9" ry="7" fill="#f3e8d4" opacity="0.7" />
        <ellipse cx="46" cy="74" rx="4.5" ry="5.5" fill="#2a2018" />
        <ellipse cx="74" cy="74" rx="4.5" ry="5.5" fill="#2a2018" />
        <circle cx="47.5" cy="72" r="1.6" fill="white" />
        <circle cx="75.5" cy="72" r="1.6" fill="white" />
        <path d="M 60 82 L 56 86 L 64 86 Z" fill="#e0899a" />
        <path d="M 60 86 Q 60 92 55 93 M 60 86 Q 60 92 65 93" stroke="#5a4636" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <ellipse cx="40" cy="84" rx="3" ry="2" fill="#f4b8c0" opacity="0.5" />
        <ellipse cx="80" cy="84" rx="3" ry="2" fill="#f4b8c0" opacity="0.5" />
        <g stroke="#cdbfa3" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <line x1="22" y1="84" x2="38" y2="86" />
          <line x1="22" y1="88" x2="38" y2="89" />
          <line x1="98" y1="84" x2="82" y2="86" />
          <line x1="98" y1="88" x2="82" y2="89" />
        </g>
      </motion.svg>
    );
  }

  if (type === "cat") {
    return (
      <motion.svg viewBox="0 0 120 120" {...common}>
        <defs>
          <radialGradient id={`catfur-${id}`} cx="42%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#f4b06a" />
            <stop offset="60%" stopColor="#e08a3c" />
            <stop offset="100%" stopColor="#b5682a" />
          </radialGradient>
          <radialGradient id={`cateye-${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#aef2cf" />
            <stop offset="70%" stopColor="#3fa86a" />
            <stop offset="100%" stopColor="#1f5e3a" />
          </radialGradient>
        </defs>
        <path d="M 30 38 L 36 10 L 52 36 Z" fill={`url(#catfur-${id})`} stroke="#9c5a22" strokeWidth="0.8" />
        <path d="M 90 38 L 84 10 L 68 36 Z" fill={`url(#catfur-${id})`} stroke="#9c5a22" strokeWidth="0.8" />
        <path d="M 34 32 L 37 18 L 46 32 Z" fill="#f4b8c0" />
        <path d="M 86 32 L 83 18 L 74 32 Z" fill="#f4b8c0" />
        <ellipse cx="60" cy="72" rx="33" ry="31" fill={`url(#catfur-${id})`} stroke="#9c5a22" strokeWidth="0.8" />
        <path d="M 48 50 Q 52 44 56 50" stroke="#9c5a22" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 64 50 Q 68 44 72 50" stroke="#9c5a22" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 60 54 Q 56 60 60 64 Q 64 60 60 54" stroke="#9c5a22" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <ellipse cx="47" cy="70" rx="4" ry="6" fill="#2a1810" />
        <ellipse cx="73" cy="70" rx="4" ry="6" fill="#2a1810" />
        <ellipse cx="47" cy="70" rx="3" ry="5" fill={`url(#cateye-${id})`} />
        <ellipse cx="73" cy="70" rx="3" ry="5" fill={`url(#cateye-${id})`} />
        <ellipse cx="47" cy="68" rx="1" ry="3.5" fill="#0d0805" />
        <ellipse cx="73" cy="68" rx="1" ry="3.5" fill="#0d0805" />
        <circle cx="48" cy="67" r="0.8" fill="white" />
        <circle cx="74" cy="67" r="0.8" fill="white" />
        <path d="M 56 80 Q 60 84 64 80 Q 60 88 56 80" fill="#e0899a" />
        <path d="M 60 84 L 60 90 M 60 90 Q 54 93 50 90 M 60 90 Q 66 93 70 90" stroke="#5a4636" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <g stroke="#9c5a22" strokeWidth="0.7" strokeLinecap="round" opacity="0.7">
          <line x1="30" y1="80" x2="44" y2="82" />
          <line x1="30" y1="84" x2="44" y2="85" />
          <line x1="90" y1="80" x2="76" y2="82" />
          <line x1="90" y1="84" x2="76" y2="85" />
        </g>
      </motion.svg>
    );
  }

  return (
    <motion.svg viewBox="0 0 120 120" {...common}>
      <defs>
        <radialGradient id={`foxfur-${id}`} cx="42%" cy="38%" r="65%">
          <stop offset="0%" stopColor="#f0974a" />
          <stop offset="60%" stopColor="#d97534" />
          <stop offset="100%" stopColor="#a8501e" />
        </radialGradient>
        <radialGradient id={`foxeye-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff0b0" />
          <stop offset="70%" stopColor="#e8b020" />
          <stop offset="100%" stopColor="#8a5a10" />
        </radialGradient>
      </defs>
      <path d="M 28 40 L 34 8 L 54 38 Z" fill={`url(#foxfur-${id})`} stroke="#8a4218" strokeWidth="0.8" />
      <path d="M 92 40 L 86 8 L 66 38 Z" fill={`url(#foxfur-${id})`} stroke="#8a4218" strokeWidth="0.8" />
      <path d="M 33 33 L 36 18 L 46 33 Z" fill="#2a1a12" />
      <path d="M 87 33 L 84 18 L 74 33 Z" fill="#2a1a12" />
      <ellipse cx="60" cy="72" rx="33" ry="31" fill={`url(#foxfur-${id})`} stroke="#8a4218" strokeWidth="0.8" />
      <path d="M 34 72 Q 38 96 60 100 Q 82 96 86 72 Q 82 92 60 96 Q 38 92 34 72" fill="#fbf3e2" />
      <path d="M 60 58 Q 50 66 48 78 Q 52 70 60 68 Q 68 70 72 78 Q 70 66 60 58" fill="#fbf3e2" opacity="0.55" />
      <ellipse cx="47" cy="68" rx="4" ry="5.5" fill="#2a1810" />
      <ellipse cx="73" cy="68" rx="4" ry="5.5" fill="#2a1810" />
      <ellipse cx="47" cy="68" rx="3" ry="4.5" fill={`url(#foxeye-${id})`} />
      <ellipse cx="73" cy="68" rx="3" ry="4.5" fill={`url(#foxeye-${id})`} />
      <ellipse cx="47" cy="67" rx="0.9" ry="3" fill="#0d0805" />
      <ellipse cx="73" cy="67" rx="0.9" ry="3" fill="#0d0805" />
      <circle cx="48" cy="66" r="0.7" fill="white" />
      <circle cx="74" cy="66" r="0.7" fill="white" />
      <path d="M 54 80 Q 60 84 66 80" stroke="#2a1810" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <ellipse cx="60" cy="80" rx="3.5" ry="2.8" fill="#2a1810" />
        <circle cx="40" cy="80" r="2.6" fill="#e0899a" opacity="0.5" />
        <circle cx="80" cy="80" r="2.6" fill="#e0899a" opacity="0.5" />
      <path d="M 16 86 Q 30 78 44 84 Q 40 92 26 94 Q 18 92 16 86" fill={`url(#foxfur-${id})`} stroke="#8a4218" strokeWidth="0.8" />
      <ellipse cx="26" cy="88" rx="8" ry="5" fill="#fbf3e2" />
    </motion.svg>
  );
}

export function MusicNote({ className, style, delay = 0 }: DecorProps) {
  return (
    <motion.svg
      viewBox="0 0 40 52"
      className={className}
      style={style}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: [0, 1, 1, 0], y: [14, -4, -22, -40], rotate: [-6, 6, -6, 6] }}
      transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <ellipse cx="11" cy="42" rx="9" ry="6.5" fill="currentColor" transform="rotate(-20 11 42)" />
      <ellipse cx="9" cy="40" rx="3" ry="1.8" fill="white" opacity="0.35" transform="rotate(-20 9 40)" />
      <rect x="17" y="6" width="2.6" height="38" fill="currentColor" />
      <path d="M 19 6 Q 35 12 33 26 Q 33 17 19 17 Z" fill="currentColor" />
    </motion.svg>
  );
}

export function Sparkle({ className, style, delay = 0 }: DecorProps) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0], rotate: [0, 90, 180] }}
      transition={{ duration: 3.5, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <path d="M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z" fill="currentColor" />
    </motion.svg>
  );
}

export function Paw({ className, style, delay = 0 }: DecorProps) {
  return (
    <motion.svg
      viewBox="0 0 40 44"
      className={className}
      style={style}
      initial={{ opacity: 0, rotate: -10, scale: 0.6 }}
      animate={{ opacity: 1, rotate: [-6, 4, -6], scale: 1 }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay, type: "spring", bounce: 0.4 },
        rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <ellipse cx="20" cy="30" rx="11" ry="9" fill="currentColor" />
      <ellipse cx="9" cy="16" rx="4" ry="6" fill="currentColor" transform="rotate(-15 9 16)" />
      <ellipse cx="18" cy="10" rx="4" ry="6" fill="currentColor" />
      <ellipse cx="27" cy="10" rx="4" ry="6" fill="currentColor" />
      <ellipse cx="34" cy="17" rx="4" ry="6" fill="currentColor" transform="rotate(15 34 17)" />
    </motion.svg>
  );
}

export function Petal({ className, style, delay = 0 }: DecorProps) {
  return (
    <motion.svg
      viewBox="0 0 30 50"
      className={className}
      style={style}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: [0, 0.9, 0.9, 0], y: [-10, 40, 90, 140], x: [0, 12, -8, 6], rotate: [0, 90, 180, 270] }}
      transition={{ duration: 9, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <path d="M15 2 C25 12 25 30 15 48 C5 30 5 12 15 2 Z" fill="currentColor" />
      <path d="M15 2 C20 12 20 30 15 48" stroke="white" strokeWidth="0.5" opacity="0.4" fill="none" />
    </motion.svg>
  );
}

export function AmbientMotes({ count = 18, color = "rgba(232,185,35,0.7)" }: { count?: number; color?: string }) {
  const motes = Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 1.5 + Math.random() * 3,
    delay: Math.random() * 6,
    duration: 6 + Math.random() * 8,
    drift: (Math.random() - 0.5) * 40,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {motes.map((m) => (
        <motion.div
          key={m.id}
          className="absolute rounded-full"
          style={{ left: `${m.left}%`, top: `${m.top}%`, width: m.size, height: m.size, background: color, boxShadow: `0 0 ${m.size * 3}px ${color}` }}
          animate={{ y: [0, -50, 0], x: [0, m.drift, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: m.duration, repeat: Infinity, delay: m.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function GlowOrb({ className, style, color = "rgba(232,185,35,0.25)", delay = 0 }: DecorProps & { color?: string }) {
  return (
    <motion.div
      className={className}
      style={{ ...style, background: `radial-gradient(circle, ${color} 0%, transparent 70%)`, filter: "blur(30px)" }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5], x: [0, 20, 0], y: [0, -15, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

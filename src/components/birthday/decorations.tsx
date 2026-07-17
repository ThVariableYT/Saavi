"use client";

import { motion } from "framer-motion";

type DecorProps = {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
};

export function Sunflower({ className, style, delay = 0 }: DecorProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="22"
          rx="9"
          ry="20"
          fill="#F2B90C"
          stroke="#C8881A"
          strokeWidth="1.2"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="15" fill="#5C3A1E" />
      <circle cx="50" cy="50" r="15" fill="url(#seedPattern)" opacity="0.6" />
      <defs>
        <pattern id="seedPattern" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#3A2410" />
        </pattern>
      </defs>
    </motion.svg>
  );
}

export function LegoBrick({ className, style, delay = 0, color }: DecorProps & { color?: string }) {
  const c = color || "#E63946";
  return (
    <motion.svg
      viewBox="0 0 80 60"
      className={className}
      style={style}
      initial={{ opacity: 0, rotate: -8, scale: 0.7 }}
      animate={{ opacity: 1, rotate: 0, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.7, delay },
        rotate: { duration: 0.7, delay },
        scale: { duration: 0.7, delay },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <rect x="4" y="20" width="72" height="36" rx="6" fill={c} />
      <rect x="4" y="20" width="72" height="36" rx="6" fill="black" opacity="0.1" />
      <circle cx="20" cy="20" r="8" fill={c} />
      <circle cx="40" cy="20" r="8" fill={c} />
      <circle cx="60" cy="20" r="8" fill={c} />
      <ellipse cx="20" cy="14" rx="4" ry="2" fill="white" opacity="0.45" />
      <ellipse cx="40" cy="14" rx="4" ry="2" fill="white" opacity="0.45" />
      <ellipse cx="60" cy="14" rx="4" ry="2" fill="white" opacity="0.45" />
    </motion.svg>
  );
}

export function CuteAnimal({ className, style, delay = 0, type = "bunny" }: DecorProps & { type?: "bunny" | "cat" | "fox" }) {
  const common = {
    className,
    style,
    initial: { opacity: 0, scale: 0.7 } as const,
    animate: { opacity: 1, scale: 1, y: [0, -8, 0] } as const,
    transition: {
      opacity: { duration: 0.8, delay },
      scale: { duration: 0.8, delay },
      y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const, delay },
    },
  };
  if (type === "bunny") {
    return (
      <motion.svg viewBox="0 0 100 110" {...common}>
        <ellipse cx="35" cy="18" rx="9" ry="22" fill="#F5EFE6" stroke="#D9CDB8" strokeWidth="1.5" transform="rotate(-10 35 18)" />
        <ellipse cx="65" cy="18" rx="9" ry="22" fill="#F5EFE6" stroke="#D9CDB8" strokeWidth="1.5" transform="rotate(10 65 18)" />
        <ellipse cx="35" cy="20" rx="4" ry="14" fill="#F4B8C0" transform="rotate(-10 35 20)" />
        <ellipse cx="65" cy="20" rx="4" ry="14" fill="#F4B8C0" transform="rotate(10 65 20)" />
        <circle cx="50" cy="62" r="30" fill="#F5EFE6" stroke="#D9CDB8" strokeWidth="1.5" />
        <circle cx="40" cy="58" r="3.5" fill="#3A2A1E" />
        <circle cx="60" cy="58" r="3.5" fill="#3A2A1E" />
        <circle cx="41" cy="57" r="1.2" fill="white" />
        <circle cx="61" cy="57" r="1.2" fill="white" />
        <ellipse cx="50" cy="66" rx="3" ry="2.2" fill="#E89AA3" />
        <path d="M 50 68 Q 50 73 46 74 M 50 68 Q 50 73 54 74" stroke="#3A2A1E" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <circle cx="34" cy="70" r="3" fill="#F4B8C0" opacity="0.6" />
        <circle cx="66" cy="70" r="3" fill="#F4B8C0" opacity="0.6" />
      </motion.svg>
    );
  }
  if (type === "cat") {
    return (
      <motion.svg viewBox="0 0 100 100" {...common}>
        <path d="M 25 30 L 32 12 L 42 28 Z" fill="#E8A04C" />
        <path d="M 75 30 L 68 12 L 58 28 Z" fill="#E8A04C" />
        <path d="M 28 26 L 32 16 L 38 26 Z" fill="#F4B8C0" />
        <path d="M 72 26 L 68 16 L 62 26 Z" fill="#F4B8C0" />
        <circle cx="50" cy="55" r="30" fill="#E8A04C" />
        <ellipse cx="40" cy="52" rx="3.5" ry="5" fill="#3A2A1E" />
        <ellipse cx="60" cy="52" rx="3.5" ry="5" fill="#3A2A1E" />
        <circle cx="41" cy="50" r="1.3" fill="#7FE3C0" />
        <circle cx="61" cy="50" r="1.3" fill="#7FE3C0" />
        <path d="M 47 62 Q 50 65 53 62 Q 50 68 47 62" fill="#E89AA3" />
        <path d="M 50 65 L 50 70 M 50 70 Q 45 73 42 71 M 50 70 Q 55 73 58 71" stroke="#3A2A1E" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <line x1="28" y1="60" x2="40" y2="62" stroke="#8B5A2B" strokeWidth="0.8" />
        <line x1="28" y1="64" x2="40" y2="65" stroke="#8B5A2B" strokeWidth="0.8" />
        <line x1="72" y1="60" x2="60" y2="62" stroke="#8B5A2B" strokeWidth="0.8" />
        <line x1="72" y1="64" x2="60" y2="65" stroke="#8B5A2B" strokeWidth="0.8" />
      </motion.svg>
    );
  }
  return (
    <motion.svg viewBox="0 0 100 100" {...common}>
      <path d="M 28 28 L 35 10 L 45 28 Z" fill="#D97534" />
      <path d="M 72 28 L 65 10 L 55 28 Z" fill="#D97534" />
      <path d="M 30 25 L 35 16 L 41 25 Z" fill="#2A1A12" />
      <path d="M 70 25 L 65 16 L 59 25 Z" fill="#2A1A12" />
      <circle cx="50" cy="55" r="30" fill="#D97534" />
      <path d="M 30 60 Q 50 85 70 60 Q 70 75 50 80 Q 30 75 30 60" fill="#F5EFE6" />
      <ellipse cx="40" cy="52" rx="3.5" ry="4.5" fill="#2A1A12" />
      <ellipse cx="60" cy="52" rx="3.5" ry="4.5" fill="#2A1A12" />
      <circle cx="41" cy="51" r="1.2" fill="#FFE08A" />
      <circle cx="61" cy="51" r="1.2" fill="#FFE08A" />
      <path d="M 47 62 Q 50 64 53 62" stroke="#2A1A12" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="34" cy="68" r="2.5" fill="#E89AA3" opacity="0.5" />
      <circle cx="66" cy="68" r="2.5" fill="#E89AA3" opacity="0.5" />
    </motion.svg>
  );
}

export function MusicNote({ className, style, delay = 0 }: DecorProps) {
  return (
    <motion.svg
      viewBox="0 0 40 50"
      className={className}
      style={style}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: [0, 1, 1, 0], y: [10, -5, -20, -35], rotate: [-5, 5, -5, 5] }}
      transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <ellipse cx="10" cy="40" rx="8" ry="6" fill="currentColor" transform="rotate(-20 10 40)" />
      <rect x="16" y="6" width="2.5" height="36" fill="currentColor" />
      <path d="M 18 6 Q 32 12 30 24 Q 30 16 18 16 Z" fill="currentColor" />
    </motion.svg>
  );
}

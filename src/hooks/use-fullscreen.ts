"use client";

import { useState, useEffect, useCallback } from "react";

type FSElement = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void>;
  webkitEnterFullscreen?: () => void;
};
type FSDocument = Document & {
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => Promise<void>;
};

function isIOS() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(ua) || (ua.includes("Mac") && "ontouchend" in document);
}

function nativeSupported() {
  if (typeof document === "undefined") return false;
  const el = document.documentElement as FSElement;
  return !!(document.fullscreenEnabled || el.webkitRequestFullscreen);
}

export function useFullscreen() {
  const ios = isIOS();
  const isNative = nativeSupported();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const sync = () => {
      const doc = document as FSDocument;
      setActive(!!(document.fullscreenElement || doc.webkitFullscreenElement));
    };
    sync();
    document.addEventListener("fullscreenchange", sync);
    document.addEventListener("webkitfullscreenchange", sync);
    return () => {
      document.removeEventListener("fullscreenchange", sync);
      document.removeEventListener("webkitfullscreenchange", sync);
    };
  }, []);

  const enter = useCallback(async () => {
    const el = document.documentElement as FSElement;
    try {
      if (ios || !isNative) {
        setActive(true);
        if (typeof window !== "undefined") window.scrollTo(0, 0);
        return;
      }
      if (el.requestFullscreen) await el.requestFullscreen();
      else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
      else setActive(true);
    } catch {
      setActive(true);
    }
  }, [ios, isNative]);

  const exit = useCallback(async () => {
    const doc = document as FSDocument;
    if (document.fullscreenElement && document.exitFullscreen) {
      await document.exitFullscreen();
    } else if (doc.webkitFullscreenElement && doc.webkitExitFullscreen) {
      await doc.webkitExitFullscreen();
    }
    setActive(false);
  }, []);

  const toggle = useCallback(() => {
    const doc = document as FSDocument;
    const nativeActive = !!(document.fullscreenElement || doc.webkitFullscreenElement);
    if (nativeActive) exit();
    else if (active) exit();
    else enter();
  }, [active, enter, exit]);

  return { active, toggle, isNative, ios };
}

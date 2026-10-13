"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const LENS_RADIUS = 110; // px, size of the glass lens on hover
const FOLLOW = 0.18;     // 0–1, how quickly the lens catches up with the cursor (lower = more liquid lag)

/**
 * Black & white cut-out photo. On hover a liquid-glass lens follows the cursor
 * and reveals the original colours underneath.
 */
export default function HeroPhoto({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = 0, y = 0, tx = 0, ty = 0, raf = 0, hideTimer = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const paint = () => {
      x += (tx - x) * (reduced ? 1 : FOLLOW);
      y += (ty - y) * (reduced ? 1 : FOLLOW);
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.3 ? requestAnimationFrame(paint) : 0;
    };
    const target = (e: PointerEvent, jump = false) => {
      const r = el.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (jump) { x = tx; y = ty; }
      if (!raf) raf = requestAnimationFrame(paint);
    };
    const show = (e: PointerEvent) => {
      clearTimeout(hideTimer);
      target(e, !el.classList.contains("lens-on"));
      el.classList.add("lens-on");
    };
    const hide = () => el.classList.remove("lens-on");

    const onEnter = (e: PointerEvent) => { if (e.pointerType === "mouse") show(e); };
    const onMove = (e: PointerEvent) => { if (el.classList.contains("lens-on")) target(e); };
    const onLeave = (e: PointerEvent) => { if (e.pointerType === "mouse") hide(); };
    // Touch: tap or drag shows the lens, it melts away shortly after lifting the finger
    const onDown = (e: PointerEvent) => { if (e.pointerType !== "mouse") show(e); };
    const onUp = (e: PointerEvent) => { if (e.pointerType !== "mouse") hideTimer = window.setTimeout(hide, 1200); };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(hideTimer);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <figure ref={ref} className="hero-photo has-photo" style={{ "--lens": `${LENS_RADIUS}px` } as React.CSSProperties}>
      <Image className="photo-base" src={src} alt={alt} width={width} height={height} priority />

      {/* The liquid filter wobbles the edge of everything inside this layer */}
      <div className="liquid" aria-hidden="true">
        <Image className="photo-color" src={src} alt="" width={width} height={height} priority />
        <span className="lens-ring" />
      </div>

      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <filter id="liquid-glass" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.011 0.016" numOctaves="2" seed="7" result="noise">
            <animate attributeName="baseFrequency" dur="9s" values="0.011 0.016;0.016 0.011;0.011 0.016" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="16" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </figure>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    const onMouseEnterInteractive = () => {
      gsap.to(cursor, { scale: 2, duration: 0.3 });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);

    const addListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, [data-cursor-hover]"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };

    addListeners();

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-foreground/30 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-foreground pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}

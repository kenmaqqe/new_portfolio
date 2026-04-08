"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot || typeof window === "undefined") return;

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

    const onMouseEnterInteractive = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const text = target.getAttribute("data-cursor-text") || "";
      const img = target.getAttribute("data-cursor-img") || "";
      
      setLabel(text);
      setImage(img);

      gsap.to(cursor, { 
        scale: img ? 6 : (text ? 3 : 2), 
        backgroundColor: img ? "white" : (text ? "rgba(255,255,255,0.1)" : "transparent"),
        borderColor: img ? "white" : "rgba(255,255,255,0.3)",
        duration: 0.3 
      });
      
      if (text || img) gsap.to(dot, { opacity: 0, duration: 0.2 });
    };

    const onMouseLeaveInteractive = () => {
      setLabel("");
      setImage("");
      gsap.to(cursor, { 
        scale: 1, 
        backgroundColor: "transparent",
        borderColor: "rgba(255,255,255,0.3)",
        duration: 0.3 
      });
      gsap.to(dot, { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMouseMove);

    const addListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, [data-cursor-hover], [data-cursor-text]"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive as any);
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
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-foreground/30 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center overflow-hidden"
      >
        {image ? (
          <img 
            src={image} 
            alt="Preview" 
            className="w-full h-full object-cover scale-110" 
          />
        ) : label ? (
          <span className="text-[6px] font-bold tracking-tighter text-foreground uppercase">
            {label}
          </span>
        ) : null}
      </div>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-foreground pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}

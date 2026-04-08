"use client";

import { useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function EntryLoader() {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setComplete(true),
    });

    // Animate percentage
    const obj = { value: 0 };
    gsap.to(obj, {
      value: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => setPercent(Math.floor(obj.value)),
    });

    // Exit animation
    tl.to(".loader-content", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      delay: 2.2,
    })
    .to(".loader-bg", {
      height: 0,
      duration: 1.2,
      ease: "power4.inOut",
      stagger: 0.1,
    });
  }, []);

  if (complete) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <div className="loader-bg absolute inset-0 bg-foreground z-10" />
      <div className="loader-bg absolute inset-0 bg-surface z-0" />
      
      <div className="loader-content relative z-20 h-full flex items-center justify-center">
        <div className="text-center">
          <p className="font-mono text-xs tracking-widest text-foreground-muted mb-4 uppercase">
            Initializing Experience
          </p>
          <h2 className="text-6xl md:text-8xl font-bold text-background tracking-tighter">
            {percent}%
          </h2>
        </div>
      </div>
    </div>
  );
}

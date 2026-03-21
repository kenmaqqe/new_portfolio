"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const codeLines = [
  "const developer = {",
  '  name: "Dmytro Tymoshenko",',
  '  role: "Frontend Developer",',
  '  location: "Ukraine",',
  '  stack: [',
  '    "React",',
  '    "Next.js",',
  '    "TypeScript",',
  '    "Tailwind CSS",',
  '    "GSAP",',
  "  ],",
  "  openToWork: true,",
  "};",
];

export default function CodeAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayedChars, setDisplayedChars] = useState<number[]>(() =>
    codeLines.map(() => 0)
  );
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          let lineIndex = 0;

          function typeLine() {
            if (lineIndex >= codeLines.length) {
              gsap.delayedCall(1, () => setShowCursor(false));
              return;
            }

            const currentLine = lineIndex;
            const lineLength = codeLines[currentLine].length;

            if (lineLength === 0) {
              setDisplayedChars((prev) => {
                const next = [...prev];
                next[currentLine] = 0;
                return next;
              });
              lineIndex++;
              gsap.delayedCall(0.05, typeLine);
              return;
            }

            let charIndex = 0;

            gsap.to(
              {},
              {
                duration: lineLength * 0.03,
                ease: "none",
                onUpdate: function () {
                  charIndex = Math.round(this.progress() * lineLength);
                  setDisplayedChars((prev) => {
                    const next = [...prev];
                    next[currentLine] = charIndex;
                    return next;
                  });
                },
                onComplete: () => {
                  lineIndex++;
                  gsap.delayedCall(0.08, typeLine);
                },
              }
            );
          }

          typeLine();
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[280px] h-[280px] rounded-2xl bg-surface border border-border overflow-hidden flex flex-col"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <span className="w-3 h-3 rounded-full bg-foreground-subtle/50" />
        <span className="w-3 h-3 rounded-full bg-foreground-subtle/50" />
        <span className="w-3 h-3 rounded-full bg-foreground-subtle/50" />
      </div>

      <div className="flex-1 p-3 font-mono text-[9px] leading-[1.25] overflow-hidden">
        {codeLines.map((line, lineIdx) => (
          <div key={lineIdx} className="whitespace-pre h-[1.15rem]">
            <span className="text-foreground-subtle select-none">
              {String(lineIdx + 1).padStart(2, " ")}{" "}
            </span>
            <span className="text-foreground-muted">
              {line.slice(0, displayedChars[lineIdx])}
            </span>
            {showCursor &&
              lineIdx === displayedChars.findIndex((c, i) => c < codeLines[i].length) && (
                <span className="inline-block w-1 h-2.5 bg-foreground/70 ml-0.5 animate-pulse" />
              )}
          </div>
        ))}
      </div>
    </div>
  );
}

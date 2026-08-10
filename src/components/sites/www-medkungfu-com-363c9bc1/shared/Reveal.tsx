"use client";

// Scroll-reveal wrapper matching MedKungFu's Framer Motion whileInView animations.
// Initial state: opacity 0 + translateY(offset) (or scale). On entering the viewport,
// transitions to opacity 1 / transform none, once.
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Vertical slide distance in px (default 20). Set 0 for no slide. */
  y?: number;
  /** Horizontal slide distance in px (default 0). */
  x?: number;
  /** Optional scale-down start (e.g. 0.9). */
  scale?: number;
  className?: string;
  /** Optional transition delay in ms (stagger). */
  delay?: number;
}

export function Reveal({
  children,
  y,
  x = 0,
  scale,
  className,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // When a horizontal offset (x) is given without an explicit y, default y to 0
  // so the element slides purely horizontally (matching captured translateX transforms).
  const resolvedY = y ?? (x !== 0 ? 0 : 20);

  const hidden: CSSProperties = {
    opacity: 0,
    transform: scale != null ? `scale(${scale})` : `translate(${x}px, ${resolvedY}px)`,
  };
  const shown: CSSProperties = { opacity: 1, transform: "none" };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        ...(visible ? shown : hidden),
        transition: "opacity 0.3s ease, transform 0.3s ease",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

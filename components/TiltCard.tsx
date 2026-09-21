"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useSpring } from "framer-motion";

// A small, reusable 3D-tilt wrapper: the card leans toward the cursor and
// settles back with a spring on mouse-leave. Kept subtle on purpose — this
// is meant to feel premium, not gimmicky.
export function TiltCard({
  children,
  className = "",
  style,
  baseRotateY = 0,
  maxTilt = 12,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  baseRotateY?: number;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 220, damping: 18 });
  const rotateY = useSpring(baseRotateY, { stiffness: 220, damping: 18 });
  const scale = useSpring(1, { stiffness: 220, damping: 18 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * maxTilt);
    rotateY.set(baseRotateY + (px - 0.5) * maxTilt);
    scale.set(1.03);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(baseRotateY);
    scale.set(1);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

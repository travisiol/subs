"use client";

import { useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { SubscriptionStack } from "./SubscriptionStack";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbAX = useSpring(0, { stiffness: 40, damping: 20 });
  const orbAY = useSpring(0, { stiffness: 40, damping: 20 });
  const orbBX = useSpring(0, { stiffness: 40, damping: 20 });
  const orbBY = useSpring(0, { stiffness: 40, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    orbAX.set(px * 60);
    orbAY.set(py * 60);
    orbBX.set(px * -40);
    orbBY.set(py * -40);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden px-6 pb-24 pt-40 sm:px-10 sm:pt-48 lg:pb-32"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[560px] w-[560px] rounded-full opacity-30 blur-[120px]"
        style={{
          background: "radial-gradient(closest-side, rgba(139,92,246,0.5), transparent 70%)",
          x: orbAX,
          y: orbAY,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-0 h-[420px] w-[420px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(closest-side, rgba(217,70,239,0.4), transparent 70%)",
          x: orbBX,
          y: orbBY,
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-3 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet" />
            </span>
            <span className="eyebrow text-grey-2">YOU ALREADY PAY FOR THEM</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[10.5vw] font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[6.4vw] xl:text-[92px]"
          >
            YOUR SUBSCRIPTIONS
            <br />
            <span className="text-violet glow-text">PAY YOU BACK.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-md text-lg text-grey-2"
          >
            Turn the subscriptions you already pay for into rewards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a href="#upload" className="btn btn-primary text-sm">
              SUBMIT YOUR SUBSCRIPTION
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-semibold text-grey-2 transition-colors hover:text-white"
            >
              SEE HOW IT WORKS →
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <SubscriptionStack />
        </motion.div>
      </div>
    </section>
  );
}

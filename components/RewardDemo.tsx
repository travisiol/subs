"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { BASE_REWARD_PERCENT, formatCurrency, standardReward } from "@/config/subs";
import { TiltCard } from "./TiltCard";

const DEMO_PRICE = 19.99;
const DEMO_SERVICE = "Netflix";

function AnimatedReward({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      + {formatCurrency(display)}
    </span>
  );
}

export function RewardDemo() {
  const reward = standardReward(DEMO_PRICE);

  return (
    <section className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
            YOUR PAYMENT.
            <br />
            YOUR <span className="text-violet">REWARD.</span>
          </h2>
          <p className="mt-6 max-w-sm text-lg text-grey-2">
            Submit an eligible subscription payment and receive a reward
            after verification.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex justify-center"
          style={{ perspective: 1200 }}
        >
          <TiltCard
            maxTilt={9}
            className="w-full max-w-sm rounded-2xl border border-line bg-panel p-7 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] sm:p-9"
          >
            <span className="eyebrow">Subscription payment</span>

            <div className="hairline my-6" />

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-grey-2">{DEMO_SERVICE} · Streaming</span>
                <span className="font-semibold text-white">
                  {formatCurrency(DEMO_PRICE)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-grey-2">Status</span>
                <span className="font-bold tracking-wide text-violet">VERIFIED</span>
              </div>
            </div>

            <div className="hairline my-6" />

            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-grey-2">
                Reward · {BASE_REWARD_PERCENT}%
              </span>
              <span className="text-3xl font-black text-violet sm:text-4xl">
                <AnimatedReward value={reward} />
              </span>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}

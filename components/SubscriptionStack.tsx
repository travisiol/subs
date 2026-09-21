"use client";

import { motion } from "framer-motion";
import { Cloud, Music2, Tv, Wrench, type LucideIcon } from "lucide-react";
import {
  BASE_REWARD_PERCENT,
  DEMO_SUBSCRIPTIONS,
  formatCurrency,
  standardReward,
  type DemoSubscription,
} from "@/config/subs";
import { TiltCard } from "./TiltCard";

const ICONS = [Tv, Music2, Cloud, Wrench];

const OFFSETS = [
  { x: -70, y: -18, rotateY: -14, z: 1 },
  { x: -20, y: -6, rotateY: -5, z: 2 },
  { x: 30, y: 4, rotateY: 5, z: 3 },
  { x: 78, y: 16, rotateY: 14, z: 4 },
];

type Offset = (typeof OFFSETS)[number];

function StackCard({
  sub,
  icon: Icon,
  offset,
  index,
  glowing,
}: {
  sub: DemoSubscription;
  icon: LucideIcon;
  offset: Offset;
  index: number;
  glowing: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{
        opacity: 1,
        y: [offset.y, offset.y - 8, offset.y],
      }}
      transition={{
        opacity: { duration: 0.6, delay: index * 0.08 },
        y: { duration: 5 + index * 0.4, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{
        left: "50%",
        top: "10px",
        marginLeft: -140 + offset.x,
        zIndex: offset.z,
      }}
      className="absolute"
    >
      <TiltCard
        baseRotateY={offset.rotateY}
        maxTilt={14}
        className={`relative w-[240px] cursor-default rounded-2xl border border-line bg-panel p-5 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.85)] sm:w-[260px] ${
          glowing ? "card-edge-glow" : ""
        }`}
      >
        {glowing && (
          <div
            aria-hidden
            className="breathe-glow pointer-events-none absolute -inset-6 -z-10 rounded-[1.75rem] blur-2xl"
            style={{
              background: "radial-gradient(closest-side, rgba(139,92,246,0.45), transparent 70%)",
            }}
          />
        )}

        <div className="flex items-center justify-between">
          <span className="eyebrow">{sub.category}</span>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet/10">
            <Icon className="h-3.5 w-3.5 text-violet" strokeWidth={2} />
          </div>
        </div>

        <div className="mt-3 text-sm font-semibold text-grey-2">{sub.example}</div>

        <div className="mt-1 text-2xl font-black tabular-nums text-white sm:text-3xl">
          {formatCurrency(sub.price)}
          <span className="ml-1 text-sm font-medium text-grey-2">/ month</span>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function SubscriptionStack() {
  const total = DEMO_SUBSCRIPTIONS.reduce((sum, s) => sum + s.price, 0);
  const reward = standardReward(total);

  return (
    <div className="relative flex w-full flex-col items-center">
      <div
        className="relative h-[320px] w-full max-w-[420px] sm:h-[360px]"
        style={{ perspective: 1200 }}
      >
        {DEMO_SUBSCRIPTIONS.map((sub, i) => (
          <StackCard
            key={sub.example}
            sub={sub}
            icon={ICONS[i % ICONS.length]}
            offset={OFFSETS[i]}
            index={i}
            glowing={i === DEMO_SUBSCRIPTIONS.length - 1}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-4 flex w-full max-w-[320px] flex-col items-center gap-1 rounded-2xl border border-line bg-panel/60 px-6 py-5 text-center"
      >
        <span className="eyebrow">Monthly subscriptions</span>
        <span className="text-3xl font-black tabular-nums text-white">
          {formatCurrency(total)}
        </span>
        <span className="mt-1 text-sm font-semibold text-violet">
          Potential reward · +{formatCurrency(reward)}
        </span>
        <span className="text-xs text-grey-2">at {BASE_REWARD_PERCENT}% base rate</span>
      </motion.div>
    </div>
  );
}

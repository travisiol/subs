"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud, Dumbbell, Gamepad2, Music2, Tv, Wrench } from "lucide-react";
import { SUPPORTED_CATEGORIES, TRADEMARK_NOTE } from "@/config/subs";
import { TiltCard } from "./TiltCard";

const ICONS: Record<string, typeof Tv> = {
  streaming: Tv,
  music: Music2,
  gaming: Gamepad2,
  cloud: Cloud,
  software: Wrench,
  fitness: Dumbbell,
};

export function SubscriptionCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-8%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-line bg-black-2 px-6 py-28 sm:px-10 sm:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            YOU PAY FOR THEM
            <br />
            EVERY MONTH.
          </h2>
        </motion.div>

        <div className="mt-16 overflow-hidden">
          <motion.div
            style={{ x }}
            className="grid grid-cols-2 gap-3 sm:flex sm:flex-nowrap sm:gap-4"
          >
            {SUPPORTED_CATEGORIES.map((category, i) => {
              const Icon = ICONS[category.key];
              return (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="sm:flex-shrink-0"
                  style={{ perspective: 800 }}
                >
                  <TiltCard
                    maxTilt={10}
                    className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-panel/40 p-4 transition-colors hover:border-violet/30 sm:aspect-auto sm:h-48 sm:w-44"
                  >
                    <Icon
                      className="h-8 w-8 text-grey-2 transition-colors group-hover:text-violet sm:h-9 sm:w-9"
                      strokeWidth={1.5}
                    />
                    <div className="text-center">
                      <div className="text-xs font-bold tracking-widest text-white sm:text-sm">
                        {category.label}
                      </div>
                      <div className="mt-1 text-[11px] tracking-widest text-grey-2">
                        {category.verb}
                      </div>
                      <div className="mt-2 text-[11px] text-grey-2/70">
                        {category.examples}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center text-2xl font-black tracking-tight text-white sm:text-3xl"
        >
          SUBS GIVES SOMETHING BACK.
        </motion.p>

        <p className="mx-auto mt-6 max-w-xl text-center text-xs text-grey-2/60">
          {TRADEMARK_NOTE}
        </p>
      </div>
    </section>
  );
}

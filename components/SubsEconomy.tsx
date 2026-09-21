"use client";

import { motion } from "framer-motion";
import { ECONOMY_NOTE, TOKEN_SYMBOL } from "@/config/subs";

const FLOW = ["SUBSCRIPTION", "VERIFICATION", "REWARD"];

export function SubsEconomy() {
  return (
    <section className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black tracking-tight sm:text-6xl"
        >
          POWERED BY <span className="text-violet">{TOKEN_SYMBOL}.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 flex flex-col items-center justify-center gap-4"
        >
          {FLOW.map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-4">
              <span className="rounded-full border border-line px-6 py-2.5 text-sm font-bold tracking-wide">
                {step}
              </span>
              {i < FLOW.length - 1 && <span className="text-xl text-violet">↓</span>}
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-14 max-w-lg text-sm text-grey-2"
        >
          {ECONOMY_NOTE}
        </motion.p>
      </div>
    </section>
  );
}

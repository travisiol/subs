"use client";

import { motion } from "framer-motion";
import { BASE_REWARD_PERCENT, HOLDER_REWARD_PERCENT, TOKEN_SYMBOL } from "@/config/subs";

export function HolderBenefit() {
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
            HOLD {TOKEN_SYMBOL.replace("$", "")}.
            <br />
            EARN <span className="text-violet">MORE.</span>
          </h2>
          <p className="mt-6 max-w-sm text-lg text-grey-2">
            {TOKEN_SYMBOL} holders unlock a higher reward rate on verified
            subscription payments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="flex flex-col justify-between rounded-2xl border border-line p-6 sm:p-8">
            <span className="eyebrow">Standard</span>
            <span className="mt-10 text-5xl font-black tabular-nums text-white/70 sm:text-6xl">
              {BASE_REWARD_PERCENT}%
            </span>
          </div>
          <div className="flex flex-col justify-between rounded-2xl border border-violet/50 bg-violet p-6 sm:p-8">
            <span className="eyebrow text-white/70">{TOKEN_SYMBOL} holder</span>
            <span className="mt-10 text-5xl font-black tabular-nums text-white sm:text-6xl">
              {HOLDER_REWARD_PERCENT}%
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

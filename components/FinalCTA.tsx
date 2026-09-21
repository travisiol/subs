"use client";

import { motion } from "framer-motion";
import { APP_URL } from "@/config/subs";
import { SubsWordmark } from "./Logo";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-violet px-6 py-28 text-black sm:px-10 sm:py-36">
      <SubsWordmark className="pointer-events-none absolute -right-6 -top-10 select-none text-[16rem] leading-none text-black/10 sm:text-[22rem]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-black leading-[0.98] tracking-tight text-black sm:text-7xl lg:text-8xl"
        >
          STOP JUST
          <br />
          PAYING FOR SUBSCRIPTIONS.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-2xl font-bold tracking-tight text-black/70 sm:text-3xl"
        >
          GET REWARDED FOR THEM.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <a href={APP_URL} className="btn btn-dark text-sm">
            START WITH SUBS
          </a>
        </motion.div>
      </div>
    </section>
  );
}

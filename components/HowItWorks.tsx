"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UploadCloud, Wallet } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "SUBMIT",
    body: "Upload proof of your subscription payment.",
    icon: UploadCloud,
  },
  {
    n: "02",
    title: "VERIFY",
    body: "SUBS verifies the eligible payment.",
    icon: ShieldCheck,
  },
  {
    n: "03",
    title: "EARN",
    body: "Receive your reward.",
    icon: Wallet,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl"
        >
          SUBSCRIBE.
          <br />
          VERIFY.
          <br />
          GET REWARDED.
        </motion.h2>

        <div className="relative mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3">
          <div className="pointer-events-none absolute -top-px left-0 hidden h-px w-full bg-line sm:block" />
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-t border-line pt-8"
              >
                <div className="flex items-start justify-between">
                  <span className="text-6xl font-black text-white/10 sm:text-7xl">
                    {step.n}
                  </span>
                  <Icon className="h-6 w-6 text-violet" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-xl font-black tracking-tight sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-grey-2">{step.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

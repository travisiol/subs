"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { BASE_REWARD_PERCENT, DEMO_SUBSCRIPTIONS, formatCurrency, standardReward } from "@/config/subs";

type Item = { id: string; name: string; price: number };

let counter = 0;
function nextId() {
  counter += 1;
  return `item-${counter}`;
}

export function SubscriptionCalculator() {
  const [items, setItems] = useState<Item[]>(
    DEMO_SUBSCRIPTIONS.map((s) => ({ id: nextId(), name: s.example, price: s.price }))
  );
  const formId = useId();

  const monthly = items.reduce((sum, item) => sum + (Number.isFinite(item.price) ? item.price : 0), 0);
  const yearly = monthly * 12;
  const reward = standardReward(monthly);

  function updateItem(id: string, patch: Partial<Item>) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function addItem() {
    setItems((prev) => [...prev, { id: nextId(), name: "", price: 0 }]);
  }

  return (
    <section id="rewards" className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl"
        >
          WHAT DO YOUR
          <br />
          SUBSCRIPTIONS COST?
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-line bg-panel p-6 sm:p-8"
          >
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded-xl border border-line bg-black/30 px-4 py-3"
                >
                  <input
                    aria-label="Subscription name"
                    value={item.name}
                    onChange={(e) => updateItem(item.id, { name: e.target.value })}
                    placeholder="Subscription name"
                    className="min-w-0 flex-1 bg-transparent text-sm font-medium text-white placeholder:text-grey outline-none"
                  />
                  <div className="flex items-center gap-1 text-sm text-grey-2">
                    <span>€</span>
                    <input
                      aria-label="Monthly price"
                      type="number"
                      min={0}
                      step={0.01}
                      value={item.price === 0 ? "" : item.price}
                      onChange={(e) => updateItem(item.id, { price: Number(e.target.value) })}
                      placeholder="0.00"
                      className="w-20 bg-transparent text-right text-sm font-semibold tabular-nums text-white outline-none placeholder:text-grey"
                    />
                  </div>
                  <button
                    type="button"
                    aria-label="Remove subscription"
                    onClick={() => removeItem(item.id)}
                    className="text-grey-2 transition-colors hover:text-white"
                  >
                    <X className="h-4 w-4" strokeWidth={2} />
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addItem}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-xs font-bold tracking-wide text-grey-2 transition-colors hover:border-violet/50 hover:text-white"
            >
              <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
              ADD SUBSCRIPTION
            </button>
            <label htmlFor={formId} className="sr-only">
              Subscription calculator
            </label>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center gap-4"
          >
            <div className="rounded-2xl border border-line p-7">
              <span className="eyebrow">Monthly spend</span>
              <div className="mt-2 text-4xl font-black tabular-nums sm:text-5xl">
                {formatCurrency(monthly)}
              </div>
            </div>

            <div className="rounded-2xl border border-line p-7">
              <span className="eyebrow">Yearly spend</span>
              <div className="mt-2 text-4xl font-black tabular-nums sm:text-5xl">
                {formatCurrency(yearly)}
              </div>
            </div>

            <div className="rounded-2xl border border-violet/40 bg-violet/5 p-7">
              <span className="text-sm font-semibold text-violet">
                Estimated reward · {BASE_REWARD_PERCENT}%
              </span>
              <div className="mt-2 text-4xl font-black tabular-nums text-violet sm:text-5xl">
                {formatCurrency(reward)}
              </div>
            </div>

            <p className="mt-1 text-xs text-grey-2">
              Demo calculator. Not a claim about an actual submitted subscription.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

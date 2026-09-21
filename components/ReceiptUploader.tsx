"use client";

import { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, FileText, Loader2, UploadCloud, Wallet } from "lucide-react";
import { isAcceptedReceipt, simulateVerification, type VerificationStage } from "@/lib/verification";
import { shortenAddress, useWallet } from "@/lib/wallet";

type Status = "idle" | VerificationStage;

export function ReceiptUploader() {
  const { account, connecting, error, connect } = useWallet();
  const [status, setStatus] = useState<Status>("idle");
  const [fileName, setFileName] = useState<string>("");
  const [dragActive, setDragActive] = useState(false);
  const cancelRef = useRef<(() => void) | null>(null);

  const submitReceipt = useCallback((file: File) => {
    if (!isAcceptedReceipt(file)) return;

    cancelRef.current?.();
    setFileName(file.name);
    setStatus("received");
    cancelRef.current = simulateVerification((stage) => setStatus(stage));
  }, []);

  const connected = Boolean(account);

  return (
    <section id="upload" className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">
            DROP YOUR RECEIPT.
          </h2>
          <p className="mt-5 text-lg text-grey-2">
            Connect your wallet, then upload proof of your subscription payment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12"
        >
          {connected && (
            <div className="mb-4 flex items-center justify-center gap-2 text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-violet" />
              <span className="text-grey-2">Connected</span>
              <span className="font-mono text-white/80">
                {shortenAddress(account as string)}
              </span>
            </div>
          )}

          <motion.label
            onDragOver={(e) => {
              if (!connected) return;
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragActive(false);
              if (!connected) return;
              const file = e.dataTransfer.files?.[0];
              if (file) submitReceipt(file);
            }}
            className={`flex min-h-[300px] flex-col items-center justify-center gap-5 rounded-3xl border-2 border-dashed p-10 text-center transition-colors ${
              !connected
                ? "cursor-default border-line bg-panel/20"
                : dragActive
                  ? "cursor-pointer border-violet bg-violet/5"
                  : "cursor-pointer border-line bg-panel/40 hover:border-grey"
            }`}
          >
            <input
              type="file"
              accept="image/jpeg,image/png,application/pdf"
              className="sr-only"
              disabled={!connected}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) submitReceipt(file);
                e.target.value = "";
              }}
            />

            <AnimatePresence mode="wait">
              {!connected && (
                <motion.div
                  key="locked"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-5"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line">
                    <Wallet className="h-7 w-7 text-violet" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-lg font-bold tracking-tight">
                      CONNECT YOUR WALLET
                    </div>
                    <div className="mt-1 text-sm text-grey-2">
                      Required to submit a subscription receipt.
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      connect();
                    }}
                    disabled={connecting}
                    className="btn btn-primary text-sm disabled:opacity-60"
                  >
                    {connecting ? "CONNECTING..." : "CONNECT WALLET"}
                  </button>
                  {error && (
                    <div className="max-w-[280px] text-sm text-grey-2">{error}</div>
                  )}
                </motion.div>
              )}

              {connected && status === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-5"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line">
                    <UploadCloud className="h-7 w-7 text-violet" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-lg font-bold tracking-tight">
                      DROP YOUR RECEIPT
                    </div>
                    <div className="mt-1 text-sm text-grey-2">
                      or click to upload &middot; JPG, PNG, PDF
                    </div>
                  </div>
                  <span className="btn btn-ghost pointer-events-none text-xs">
                    CHOOSE FILE
                  </span>
                </motion.div>
              )}

              {status === "received" && (
                <motion.div
                  key="received"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet/10">
                    <FileText className="h-7 w-7 text-violet" strokeWidth={1.5} />
                  </div>
                  <div className="text-lg font-bold">Receipt uploaded ✓</div>
                  <div className="max-w-[240px] truncate text-sm text-grey-2">
                    {fileName}
                  </div>
                </motion.div>
              )}

              {status === "checking" && (
                <motion.div
                  key="checking"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-4"
                >
                  <Loader2 className="h-8 w-8 animate-spin text-violet" strokeWidth={1.75} />
                  <div className="text-lg font-bold tracking-tight">
                    Checking subscription...
                  </div>
                </motion.div>
              )}

              {status === "ready" && (
                <motion.div
                  key="ready"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet">
                    <Check className="h-7 w-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-lg font-bold tracking-tight">
                    Ready for verification.
                  </div>
                  <div className="text-sm text-grey-2">
                    You&apos;ll be notified once it&apos;s verified.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.label>
        </motion.div>
      </div>
    </section>
  );
}

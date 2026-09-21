// Frontend-only stub. No verification backend exists yet.
//
// Swap this implementation for a real API call (e.g. POST the file to
// `/api/verify`) once a verification service is connected — the
// ReceiptUploader component only depends on this function's shape
// (a promise resolving to a status), so nothing else needs to change.

export type VerificationStage = "received" | "checking" | "ready";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "application/pdf"];

export function isAcceptedReceipt(file: File): boolean {
  return ACCEPTED_TYPES.includes(file.type);
}

export function simulateVerification(
  onStage: (stage: VerificationStage) => void
): () => void {
  const timers = [
    setTimeout(() => onStage("checking"), 1000),
    setTimeout(() => onStage("ready"), 2600),
  ];
  return () => timers.forEach(clearTimeout);
}

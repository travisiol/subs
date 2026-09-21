// A simple recurring-cycle mark: two arcs chasing each other, standing in
// for "the subscription that keeps paying you back" — not a coin, not a bolt.
export function CycleMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 12a8 8 0 0 1 13.66-5.66L20 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M20 4v4h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 12a8 8 0 0 1-13.66 5.66L4 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M4 20v-4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SubsWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-black tracking-tight select-none ${className}`}
      style={{ fontStretch: "condensed" }}
    >
      SUBS
    </span>
  );
}

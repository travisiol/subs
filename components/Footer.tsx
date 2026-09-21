import { CONTRACT_ADDRESS, TWITTER_URL } from "@/config/subs";
import { SubsWordmark } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-14 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <SubsWordmark className="text-xl text-white" />
          <p className="mt-3 text-sm text-grey-2">
            Your subscriptions earn you rewards.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
          <div className="flex gap-6 text-sm text-grey-2">
            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-white"
            >
              X
            </a>
            <a href="/terms" className="transition-colors hover:text-white">
              Terms
            </a>
            <a href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </a>
          </div>

          <div className="text-sm">
            <span className="text-grey-2">Contract Address</span>
            <div className="mt-1 font-mono text-xs tracking-wide text-white/70">
              {CONTRACT_ADDRESS ?? "COMING SOON"}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl text-xs text-grey-2">
        © {new Date().getFullYear()} SUBS
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { APP_URL, TWITTER_URL } from "@/config/subs";
import { SubsWordmark } from "./Logo";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="flex items-center">
          <SubsWordmark className="text-xl text-white" />
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8">
          <a
            href="#how-it-works"
            className="hidden text-sm font-medium text-grey-2 transition-colors hover:text-white sm:inline"
          >
            HOW IT WORKS
          </a>
          <a
            href="#rewards"
            className="hidden text-sm font-medium text-grey-2 transition-colors hover:text-white sm:inline"
          >
            REWARDS
          </a>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="SUBS on X"
            className="text-grey-2 transition-colors hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.6L18.9 2Zm-1.2 18h1.7L6.4 3.9H4.6L17.7 20Z" />
            </svg>
          </a>
          <a href={APP_URL} className="btn btn-primary hidden text-xs sm:inline-flex">
            SUBMIT A SUBSCRIPTION
          </a>
        </nav>
      </div>
    </header>
  );
}

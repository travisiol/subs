import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SUBS — Your subscriptions earn you rewards.",
  description:
    "You already pay for subscriptions. Submit proof of payment and SUBS rewards you for it.",
  openGraph: {
    title: "SUBS — Your subscriptions earn you rewards.",
    description:
      "You already pay for subscriptions. Submit proof of payment and SUBS rewards you for it.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUBS — Your subscriptions earn you rewards.",
    description: "You already pay for subscriptions. SUBS rewards you for them.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}

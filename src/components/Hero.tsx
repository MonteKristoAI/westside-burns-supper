"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

const TICKETS_URL = "/tickets";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Candlelit Burns Supper banquet table set with tartan, thistle and crystal"
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover"
        />
        {/* Legibility overlays */}
        <div className="absolute inset-0 bg-navy-deep/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/65 via-navy-deep/25 to-navy-deep/85" />
        {/* Center-weighted scrim so the headline + body sit on a calm, dark base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 72% 62% at 50% 44%, rgba(14,24,43,0.82) 0%, rgba(14,24,43,0.5) 48%, rgba(14,24,43,0.12) 78%)",
          }}
        />
      </div>

      {/* Centered content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center [text-shadow:_0_2px_20px_rgba(8,14,26,0.65)]"
      >
        <motion.p
          variants={item}
          className="eyebrow text-gold-soft"
        >
          <span className="h-px w-8 bg-gold/70" />
          Houston · Established 2001
          <span className="h-px w-8 bg-gold/70" />
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-7 text-balance font-display text-[2.7rem] font-medium leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
        >
          An Evening in Honour
          <br className="hidden sm:block" /> of Robert Burns
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-pretty font-sans text-base leading-relaxed text-cream/95 sm:text-lg"
        >
          Houston&rsquo;s traditional Burns Supper — an evening of haggis and whisky,
          the Address to a Haggis, the Immortal Memory and live ceilidh dancing,
          raising funds for charity since 2001.
        </motion.p>

        {/* Event detail row */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center gap-3 text-sm text-cream/85 sm:flex-row sm:gap-7"
        >
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={17} className="text-gold" />
            Saturday, 30 January 2027 · 6:30 PM
          </span>
          <span className="hidden h-4 w-px bg-cream/25 sm:block" />
          <span className="inline-flex items-center gap-2">
            <MapPin size={17} className="text-gold" />
            Omni Houston Hotel, Galleria
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href={TICKETS_URL}
            className="rounded-full bg-gold px-9 py-3.5 font-sans text-sm font-semibold tracking-wide text-navy-deep transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_12px_32px_-10px_rgba(194,154,75,0.8)]"
          >
            Reserve Your Seat
          </Link>
          <a
            href="#evening"
            className="rounded-full border border-cream/35 px-9 py-3.5 font-sans text-sm font-semibold tracking-wide text-cream transition-all duration-300 hover:border-gold hover:text-gold"
          >
            Discover the Evening
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-cream/30 p-1.5">
          <span className="h-2 w-px animate-pulse rounded-full bg-cream/60" />
        </div>
      </div>
    </section>
  );
}

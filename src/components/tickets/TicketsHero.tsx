"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TicketsHero() {
  return (
    <section className="relative flex min-h-[56vh] items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Candlelit Burns Supper banquet"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/40 to-navy-deep/90" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 65% at 50% 46%, rgba(14,24,43,0.78) 0%, rgba(14,24,43,0.4) 55%, rgba(14,24,43,0.1) 80%)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center [text-shadow:_0_2px_20px_rgba(8,14,26,0.65)]"
      >
        <p className="eyebrow text-gold-soft">
          <span className="h-px w-8 bg-gold/70" />
          Tickets &amp; Packages
          <span className="h-px w-8 bg-gold/70" />
        </p>
        <h1 className="mt-6 text-balance font-display text-[2.5rem] font-medium leading-[1.07] text-cream sm:text-6xl">
          Reserve your place at the table
        </h1>
        <p className="mt-6 max-w-xl text-pretty font-sans text-base leading-relaxed text-cream/90 sm:text-lg">
          Tickets and sponsorships for the 2027 Burns Supper, Saturday 30 January at the
          Omni Houston Hotel.
        </p>
      </motion.div>
    </section>
  );
}

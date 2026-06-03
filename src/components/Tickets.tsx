"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SponsorPackages from "@/components/SponsorPackages";

const TICKETS_URL = "/tickets";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Tickets() {
  return (
    <section id="tickets" className="scroll-mt-24 bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow justify-center text-gold">
            <span className="h-px w-8 bg-gold/60" />
            Attend
            <span className="h-px w-8 bg-gold/60" />
          </p>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-navy sm:text-5xl">
            Take your seat at the table
          </h2>
          <p className="mt-5 text-pretty font-sans text-lg leading-relaxed text-ink/75">
            Membership is $25 and is required before purchasing tickets to the Burns Supper.
            Once you&rsquo;re a member, reserve your seat — or support the night as a sponsor.
          </p>
        </motion.div>

        {/* Membership / tickets banner */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-between gap-6 rounded-2xl border border-navy/10 bg-white p-7 text-center shadow-[0_18px_50px_-30px_rgba(14,24,43,0.5)] sm:flex-row sm:text-left"
        >
          <div>
            <p className="font-display text-xl font-medium text-navy">
              Membership &amp; tickets
            </p>
            <p className="mt-1 font-sans text-sm text-ink/65">
              $25 membership · required before you book your seat for the supper.
            </p>
          </div>
          <Link
            href={TICKETS_URL}
            className="shrink-0 rounded-full bg-navy px-8 py-3.5 font-sans text-sm font-semibold text-cream transition-all duration-300 hover:bg-navy-deep"
          >
            Tickets &amp; Pricing
          </Link>
        </motion.div>

        {/* Sponsorship */}
        <div id="sponsors" className="scroll-mt-24 pt-20">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="eyebrow justify-center text-gold">
              <span className="h-px w-8 bg-gold/60" />
              Sponsorship
              <span className="h-px w-8 bg-gold/60" />
            </p>
            <h3 className="mt-5 font-display text-3xl font-medium text-navy sm:text-4xl">
              Sponsor the supper
            </h3>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink/70">
              Sponsorship underwrites the evening and the charitable giving that follows.
              Now collecting for 2027.
            </p>
          </motion.div>

          <div className="mt-14">
            <SponsorPackages />
          </div>
        </div>
      </div>
    </section>
  );
}

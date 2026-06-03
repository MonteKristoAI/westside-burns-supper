"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { TICKETS, MEMBERSHIP_NOTE } from "@/lib/packages";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const grid = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export default function TicketPrices() {
  return (
    <section id="tickets" className="scroll-mt-24 bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow justify-center text-gold">
            <span className="h-px w-8 bg-gold/60" />
            Tickets
            <span className="h-px w-8 bg-gold/60" />
          </p>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-navy sm:text-5xl">
            Book your seats
          </h2>
          <p className="mt-5 text-pretty font-sans text-lg leading-relaxed text-ink/75">
            The supper is a private celebration for members and their guests. Membership is
            required to attend — a $25 fee is added to every purchase, and each table of ten
            needs at least one member.
          </p>
        </motion.div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {TICKETS.map((t) => (
            <motion.div
              key={t.name}
              variants={reveal}
              className="flex flex-col rounded-2xl border border-navy/10 bg-white p-9 text-center shadow-[0_18px_50px_-34px_rgba(14,24,43,0.5)]"
            >
              <h3 className="font-display text-2xl font-medium text-navy">{t.name}</h3>
              <p className="mt-4 font-display text-5xl font-semibold text-gold">{t.price}</p>
              <p className="mx-auto mt-4 max-w-xs flex-1 font-sans text-sm leading-relaxed text-ink/65">
                {t.note}
              </p>
              <a
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 rounded-full bg-navy px-7 py-3.5 font-sans text-sm font-semibold text-cream transition-all duration-300 hover:bg-navy-deep"
              >
                Buy Now
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 text-center font-sans text-sm text-ink/55"
        >
          <Info size={15} className="shrink-0 text-gold" />
          {MEMBERSHIP_NOTE}
        </motion.p>
      </div>
    </section>
  );
}

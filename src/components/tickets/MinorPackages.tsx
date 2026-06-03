"use client";

import { motion } from "framer-motion";
import { MINOR_PACKAGES } from "@/lib/packages";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};
const grid = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

export default function MinorPackages() {
  return (
    <motion.div
      variants={grid}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {MINOR_PACKAGES.map((p) => (
        <motion.div
          key={p.name}
          variants={reveal}
          className="flex items-center justify-between gap-4 rounded-xl border border-navy/10 bg-white p-6 shadow-[0_14px_40px_-34px_rgba(14,24,43,0.5)]"
        >
          <div>
            <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
              {p.tag}
            </p>
            <h4 className="mt-1 font-display text-lg font-medium text-navy">{p.name}</h4>
            <p className="mt-1.5 font-sans text-xs leading-relaxed text-ink/55">{p.note}</p>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-2">
            <span className="font-display text-2xl font-semibold text-navy">{p.price}</span>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-navy px-4 py-1.5 font-sans text-xs font-semibold text-cream transition-colors hover:bg-gold hover:text-navy-deep"
            >
              Buy
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

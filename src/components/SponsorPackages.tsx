"use client";

import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { PACKAGES } from "@/lib/packages";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const grid = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function SponsorPackages() {
  return (
    <motion.div
      variants={grid}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-7"
    >
      {PACKAGES.map((pkg) => (
        <motion.div
          key={pkg.name}
          variants={reveal}
          className={`relative flex flex-col rounded-2xl p-8 ${
            pkg.featured
              ? "bg-navy text-cream shadow-[0_30px_70px_-30px_rgba(14,24,43,0.7)] ring-1 ring-gold/40 lg:-mt-4 lg:mb-0"
              : "border border-navy/10 bg-white text-ink shadow-[0_18px_50px_-34px_rgba(14,24,43,0.5)]"
          }`}
        >
          {pkg.featured && (
            <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gold px-4 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-navy-deep">
              <Crown size={13} /> Most prestigious
            </span>
          )}
          <p
            className={`font-sans text-xs font-semibold uppercase tracking-[0.22em] ${
              pkg.featured ? "text-gold-soft" : "text-gold"
            }`}
          >
            {pkg.tag}
          </p>
          <h4
            className={`mt-2 font-display text-2xl font-medium ${
              pkg.featured ? "text-cream" : "text-navy"
            }`}
          >
            {pkg.name}
          </h4>
          <p
            className={`mt-4 font-display text-4xl font-semibold ${
              pkg.featured ? "text-gold" : "text-navy"
            }`}
          >
            {pkg.price}
          </p>

          <ul className="mt-7 flex-1 space-y-3">
            {pkg.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check size={18} className="mt-0.5 shrink-0 text-gold" />
                <span
                  className={`font-sans text-sm leading-relaxed ${
                    pkg.featured ? "text-cream/85" : "text-ink/70"
                  }`}
                >
                  {f}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={pkg.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-8 rounded-full px-6 py-3.5 text-center font-sans text-sm font-semibold transition-all duration-300 ${
              pkg.featured
                ? "bg-gold text-navy-deep hover:bg-gold-soft"
                : "bg-navy text-cream hover:bg-navy-deep"
            }`}
          >
            Become a sponsor
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Sponsor = { name: string; logo: string; url?: string; w: number; h: number };

const SPONSORS: Sponsor[] = [
  { name: "Megarme", logo: "/sponsors/megarme.png", url: "https://www.megarme-group.com/", w: 600, h: 229 },
  { name: "NES Fircroft", logo: "/sponsors/nes.png", url: "https://www.nesfircroft.com/", w: 367, h: 165 },
  { name: "Guardian Decommissioning", logo: "/sponsors/gd.png", url: "https://www.guardiandecom.com", w: 600, h: 540 },
  { name: "Source IEx", logo: "/sponsors/source.png", url: "https://www.sourceiex.com/index.html", w: 193, h: 199 },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const grid = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };

export default function SponsorWall() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="eyebrow justify-center text-gold">
            <span className="h-px w-8 bg-gold/60" />
            Thank You
            <span className="h-px w-8 bg-gold/60" />
          </p>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-navy sm:text-5xl">
            Our 2025 sponsors
          </h2>
          <p className="mt-5 text-pretty font-sans text-lg leading-relaxed text-ink/75">
            As a 501(c)(3) non-profit, the Association relies on the generosity of its
            sponsors and donors. Thanks to them, we have given over $200,000 to local
            charities — supporting hospitals, scholarships, anti-trafficking organizations
            and more.
          </p>
        </motion.div>

        {/* Logo wall */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4"
        >
          {SPONSORS.map((s) => {
            const inner = (
              <span className="flex h-32 w-full items-center justify-center rounded-2xl border border-navy/10 bg-white p-7 shadow-[0_18px_50px_-36px_rgba(14,24,43,0.5)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_-34px_rgba(14,24,43,0.6)] sm:h-36 sm:p-9">
                <Image
                  src={s.logo}
                  alt={`${s.name} logo`}
                  width={s.w}
                  height={s.h}
                  className="max-h-full w-auto object-contain"
                />
              </span>
            );
            return (
              <motion.div key={s.name} variants={reveal} className="group">
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${s.name}`}
                    className="block"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-14 text-center font-display text-xl font-medium tracking-wide text-gold"
        >
          Now collecting donations for 2027
        </motion.p>
      </div>
    </section>
  );
}

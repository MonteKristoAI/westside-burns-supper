"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Sponsor = { name: string; logo: string; url?: string; w: number; h: number };
type Tier = { label: string; size: "lead" | "table"; sponsors: Sponsor[] };

const MEGARME: Sponsor = {
  name: "Megarme",
  logo: "/sponsors/megarme.png",
  url: "https://www.megarme-group.com/",
  w: 600,
  h: 229,
};
const GUARDIAN: Sponsor = {
  name: "Guardian Decommissioning",
  logo: "/sponsors/gd.png",
  url: "https://www.guardiandecom.com",
  w: 700,
  h: 620,
};
const SOURCE_IEX: Sponsor = {
  name: "Source IEx",
  logo: "/sponsors/source.png",
  url: "https://www.sourceiex.com/index.html",
  w: 187,
  h: 83,
};
const SHORES: Sponsor = {
  name: "Shores MDS Inc",
  logo: "/sponsors/shores.png",
  url: "https://www.shoresmds.com/",
  w: 255,
  h: 49,
};

/* The 2027 supporters, as the board gave them. Guardian sits in two tiers by their own
   instruction. Add a new logo by dropping it into /public/sponsors and listing it here. */
const TIERS: Tier[] = [
  { label: "Bard Sponsor", size: "lead", sponsors: [MEGARME, GUARDIAN] },
  { label: "Duke Sponsor", size: "table", sponsors: [GUARDIAN, SOURCE_IEX] },
  { label: "2026 Auction Winner", size: "table", sponsors: [SHORES] },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const grid = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };

function LogoCard({ sponsor, size }: { sponsor: Sponsor; size: "lead" | "table" }) {
  const box =
    size === "lead"
      ? "flex h-40 w-full items-center justify-center rounded-2xl border border-gold/35 bg-white p-9 shadow-[0_22px_60px_-34px_rgba(14,24,43,0.55)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_28px_70px_-32px_rgba(14,24,43,0.65)] sm:h-48 sm:p-12"
      : "flex h-36 w-full items-center justify-center rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_18px_50px_-36px_rgba(14,24,43,0.5)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_-34px_rgba(14,24,43,0.6)] sm:h-44 sm:p-8";

  const inner = (
    <span className={box}>
      <Image
        src={sponsor.logo}
        alt={`${sponsor.name} logo`}
        width={sponsor.w}
        height={sponsor.h}
        className="max-h-full w-auto object-contain"
      />
    </span>
  );

  return (
    <motion.div variants={reveal} className="group">
      {sponsor.url ? (
        <a
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${sponsor.name}`}
          className="block"
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </motion.div>
  );
}

function TierBlock({ tier }: { tier: Tier }) {
  const single = tier.sponsors.length === 1;
  const width = single ? "max-w-sm" : tier.size === "lead" ? "max-w-4xl" : "max-w-3xl";
  const cols = single ? "grid-cols-1" : "grid-cols-2";

  return (
    <motion.div
      variants={grid}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-16 text-center"
    >
      <motion.p variants={reveal} className="eyebrow justify-center text-gold">
        <span className="h-px w-8 bg-gold/60" />
        {tier.label}
        <span className="h-px w-8 bg-gold/60" />
      </motion.p>
      <div className={`mx-auto mt-6 grid gap-5 sm:gap-6 ${width} ${cols}`}>
        {tier.sponsors.map((s) => (
          <LogoCard key={`${tier.label}-${s.name}`} sponsor={s} size={tier.size} />
        ))}
      </div>
    </motion.div>
  );
}

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
            Our 2027 sponsors
          </h2>
          <p className="mt-5 text-pretty font-sans text-lg leading-relaxed text-ink/75">
            As a 501(c)(3) non-profit, the Association relies on the generosity of its
            sponsors and donors. Thanks to them, we have given over $200,000 to local
            charities, supporting hospitals, scholarships, anti-trafficking organizations
            and more.
          </p>
        </motion.div>

        {TIERS.map((tier) => (
          <TierBlock key={tier.label} tier={tier} />
        ))}

        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-14 text-center font-display text-xl font-medium tracking-wide text-gold"
        >
          Sponsorship for 2027 is still open
        </motion.p>
      </div>
    </section>
  );
}

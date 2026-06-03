"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STATS = [
  { stat: "2001", label: "First Burns Supper held" },
  { stat: "64 → 350", label: "Inaugural guests to capacity" },
  { stat: "60 / 40", label: "Expat Scots to international guests" },
  { stat: "$200K+", label: "Given to charity to date" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function AboutStory() {
  return (
    <>
      {/* Story */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-7"
            >
              <p className="eyebrow text-gold">
                <span className="h-px w-8 bg-gold/60" />
                Our Story
              </p>
              <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-navy sm:text-5xl">
                Twenty-five years of fellowship
              </h2>
              <div className="mt-6 space-y-5 font-sans text-lg leading-relaxed text-ink/75">
                <p>
                  It began in 2001 as a Houston reunion for former BP and Britoil colleagues
                  from Glasgow, convened by Peter Foster. The inaugural night drew sixty-four
                  guests — but it struck a chord, and within a few years it had grown to a
                  capacity of three hundred and fifty.
                </p>
                <p>
                  As it grew, a dedicated Burns Night Committee took over the running of it,
                  and in 2010 the event was incorporated as the non-profit Westside Burns
                  Night Association. Today the room is roughly sixty percent expatriate Scots
                  and forty percent guests from every corner of the world — and visitors from
                  all countries are warmly welcomed.
                </p>
                <p>
                  A registered 501(c)(3), the Association exists to promote the life, works and
                  fellowship of Robert Burns. Every year&rsquo;s surplus is donated to local,
                  state and national charities — more than $200,000 to date.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-5"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(14,24,43,0.55)] ring-1 ring-navy/10">
                <Image
                  src="/gallery/g4.jpg"
                  alt="Guests in kilts and Highland dress gathered at the Westside Burns Supper"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stat band */}
      <section className="border-y border-gold/20 bg-navy text-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-14 sm:px-8 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center px-2 text-center lg:border-r lg:border-cream/10 lg:last:border-r-0"
            >
              <span className="font-display text-3xl font-semibold text-gold sm:text-4xl">
                {s.stat}
              </span>
              <span className="mt-2 max-w-[15rem] font-sans text-sm leading-snug text-cream/70">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

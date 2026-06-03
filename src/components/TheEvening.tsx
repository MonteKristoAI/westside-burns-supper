"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PROGRAMME = [
  {
    title: "Champagne Reception",
    body: "The evening opens with a champagne reception as the pipers warm the room.",
  },
  {
    title: "Pipers & the Grand Entrance",
    body: "Pipers lead the Grand Entrance into the ballroom to begin the night.",
  },
  {
    title: "Address tae a Haggis",
    body: "The haggis is piped in and honoured with Burns' own words, knife in hand — then toasted with a dram.",
  },
  {
    title: "A Three-Course Supper",
    body: "The supper is served — a traditional dinner with wine, the haggis taking pride of place.",
  },
  {
    title: "The Immortal Memory",
    body: "The keynote tribute to the life, works and fellowship of Robert Burns.",
  },
  {
    title: "Toast tae the Lassies & Reply",
    body: "The night's wittiest exchange, given and answered in fine Burns spirit.",
  },
  {
    title: "Whisky Kiss, Live",
    body: "Scotland's own ceilidh band, brought all the way to Houston.",
  },
  {
    title: "Ceilidh til the Wee Hours",
    body: "Vigorous dancing enjoyed by all — no experience required.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function TheEvening() {
  return (
    <section id="evening" className="scroll-mt-24 bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <p className="eyebrow text-gold">
            <span className="h-px w-8 bg-gold/60" />
            The Evening
          </p>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-navy sm:text-5xl">
            The order of a proper Burns Supper
          </h2>
          <p className="mt-5 text-pretty font-sans text-lg leading-relaxed text-ink/75">
            The evening follows the form it has held for twenty-five years — equal parts
            ceremony, feast and good company, with special guest speakers joining us from
            Scotland in recent years. Here is how the night unfolds.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Programme list */}
          <motion.ol
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7"
          >
            {PROGRAMME.map((step, i) => (
              <li
                key={step.title}
                className="group flex gap-5 border-l border-gold/25 pb-9 pl-6 last:pb-0"
              >
                <div className="flex flex-1 flex-col">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-sm font-semibold text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-medium text-navy">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 max-w-md font-sans text-[0.95rem] leading-relaxed text-ink/65">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </motion.ol>

          {/* Food image */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(14,24,43,0.55)] ring-1 ring-gold/20">
                <Image
                  src="/images/menu.jpg"
                  alt="Traditional haggis with neeps and tatties, served beside a wee dram of whisky"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 to-transparent p-6 pt-14">
                  <p className="font-display text-lg font-medium text-cream">
                    Haggis, neeps &amp; tatties
                  </p>
                  <p className="mt-1 font-sans text-sm text-cream/75">
                    The centrepiece of the table — honoured in verse, then enjoyed with a dram.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

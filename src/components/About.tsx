"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const MILESTONES = [
  { year: "2001", label: "Founded as a Glasgow reunion" },
  { year: "2010", label: "Incorporated as a 501(c)(3)" },
  { year: "$200K+", label: "Given to charity to date" },
];

const CHARITIES = ["REDM", "Saltire Foundation", "Accelerator School Houston"];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(14,24,43,0.55)] ring-1 ring-navy/10">
              <Image
                src="/gallery/g1.jpg"
                alt="Members and guests in kilts and black-tie gathered with champagne at the Westside Burns Supper"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
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
              Twenty-five years of fellowship in Houston
            </h2>

            <div className="mt-6 space-y-5 font-sans text-lg leading-relaxed text-ink/75">
              <p>
                It began in 2001 as a Houston reunion for former BP and Britoil colleagues
                from Glasgow, convened by Peter Foster. The night struck a chord and grew
                quickly — a dedicated Burns Night Committee soon took over the running of it,
                and in 2010 it was incorporated as the non-profit Westside Burns Night Association.
              </p>
              <p>
                A registered 501(c)(3), the Association hosts its annual Burns Supper to
                promote the life, works and fellowship of Robert Burns. Every year&rsquo;s
                surplus is donated to local, state and national charities — more than
                $200,000 to date.
              </p>
            </div>

            {/* Milestones */}
            <div className="mt-9 grid grid-cols-3 gap-6 border-t border-navy/10 pt-7">
              {MILESTONES.map((m) => (
                <div key={m.label}>
                  <p className="font-display text-2xl font-semibold text-gold sm:text-3xl">
                    {m.year}
                  </p>
                  <p className="mt-1 font-sans text-sm leading-snug text-ink/60">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Charities */}
            <div className="mt-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-ink/45">
                Recent charities supported
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {CHARITIES.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-navy/15 bg-cream px-4 py-1.5 font-sans text-sm text-navy"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Read more → About page */}
            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 font-sans text-sm font-semibold text-cream transition-all duration-300 hover:bg-navy-deep"
            >
              Read our full story
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

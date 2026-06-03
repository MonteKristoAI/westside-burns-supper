"use client";

import { motion } from "framer-motion";

const CHARITIES = ["REDM", "Saltire Foundation", "Accelerator School Houston"];
const EMAIL = "westsideburns@gmail.com";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function AboutJoin() {
  return (
    <section className="bg-cream py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="overflow-hidden rounded-3xl bg-navy px-8 py-14 text-center text-cream sm:px-14 sm:py-16"
        >
          <p className="eyebrow justify-center text-gold-soft">
            <span className="h-px w-8 bg-gold/50" />
            Get Involved
            <span className="h-px w-8 bg-gold/50" />
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance font-display text-3xl font-medium leading-tight text-cream sm:text-4xl">
            Join the Celebration Committee
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-cream/75 sm:text-lg">
            Our committee promotes, organizes and runs the supper — and decides where the
            surplus goes. If you&rsquo;d like to be part of it, we&rsquo;d love to hear from you.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="mt-8 inline-flex rounded-full bg-gold px-9 py-3.5 font-sans text-sm font-semibold text-navy-deep transition-all duration-300 hover:bg-gold-soft"
          >
            Email the Committee
          </a>

          <div className="mt-12 border-t border-cream/10 pt-9">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
              Recent charities supported
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2.5">
              {CHARITIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-cream/20 px-4 py-1.5 font-sans text-sm text-cream/85"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, Shirt, BedDouble } from "lucide-react";

const ROOM_BLOCK_URL =
  "https://bookings.omnihotels.com/event/houston/westside-burns-night-2026-room-block";
const MAP_SRC =
  "https://www.google.com/maps?q=Omni+Houston+Hotel+4+Riverway+Dr+Houston+TX+77056&output=embed";

const DETAILS = [
  {
    icon: CalendarDays,
    label: "Date & Time",
    value: "Saturday, 30 January 2027 · 6:30 PM",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Omni Houston Hotel, Galleria · 4 Riverway Dr, Houston, TX 77056",
  },
  {
    icon: Shirt,
    label: "Dress Code",
    value: "Kilts and formal attire encouraged",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Venue() {
  return (
    <section id="venue" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <p className="eyebrow text-gold">
            <span className="h-px w-8 bg-gold/60" />
            Venue &amp; Travel
          </p>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-navy sm:text-5xl">
            An evening at the Omni, Houston
          </h2>
          <p className="mt-5 text-pretty font-sans text-lg leading-relaxed text-ink/75">
            The supper is held at the Omni Houston Hotel in the Galleria. A room block is
            available for guests who wish to stay the night.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Detail panel */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col rounded-2xl bg-navy p-8 text-cream sm:p-10"
          >
            <ul className="flex-1 space-y-7">
              {DETAILS.map((d) => {
                const Icon = d.icon;
                return (
                  <li key={d.label} className="flex gap-4">
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/5 ring-1 ring-gold/30">
                      <Icon size={19} className="text-gold" />
                    </span>
                    <div>
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                        {d.label}
                      </p>
                      <p className="mt-1 font-sans text-[1.02rem] leading-relaxed text-cream/90">
                        {d.value}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-9 border-t border-cream/10 pt-8">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/5 ring-1 ring-gold/30">
                  <BedDouble size={19} className="text-gold" />
                </span>
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                    Stay the Night
                  </p>
                  <p className="mt-1 font-sans text-[1.02rem] leading-relaxed text-cream/90">
                    Reserve a room in the Westside Burns Night block at the Omni.
                  </p>
                </div>
              </div>
              <a
                href={ROOM_BLOCK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-gold px-8 py-3.5 font-sans text-sm font-semibold text-navy-deep transition-all duration-300 hover:bg-gold-soft"
              >
                Book Your Room
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="min-h-[380px] overflow-hidden rounded-2xl ring-1 ring-navy/10 lg:min-h-0"
          >
            <iframe
              title="Omni Houston Hotel location map"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[380px] w-full border-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

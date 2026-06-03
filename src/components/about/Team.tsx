"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const TEAM = [
  { name: "Maxine Aitkenhead", role: "President", photo: "/team/maxine.jpg", linkedin: "https://www.linkedin.com/in/maxineaitkenhead/" },
  { name: "Nina Spencer", role: "Vice President", photo: "/team/nina.jpg", linkedin: "https://www.linkedin.com/in/nina-spencer-42673944/" },
  { name: "Lynda Hull", role: "Secretary", photo: "/team/lynda.jpg", linkedin: "https://www.linkedin.com/in/lynda-hull-cne-2240111a/" },
  { name: "Paul Goonan", role: "Treasurer", photo: "/team/paul.jpg", linkedin: "https://www.linkedin.com/in/goonan88/" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const grid = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow justify-center text-gold">
            <span className="h-px w-8 bg-gold/60" />
            Our Team
            <span className="h-px w-8 bg-gold/60" />
          </p>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-navy sm:text-5xl">
            The Celebration Committee
          </h2>
          <p className="mt-5 text-pretty font-sans text-lg leading-relaxed text-ink/75">
            A volunteer committee that promotes, organizes and runs the supper each
            year — and manages every dollar of charitable giving.
          </p>
        </motion.div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4"
        >
          {TEAM.map((m) => (
            <motion.div key={m.name} variants={reveal} className="group flex flex-col">
              <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-navy/10">
                <Image
                  src={m.photo}
                  alt={`${m.name}, ${m.role} of the Westside Burns Night Association`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/45 via-transparent to-transparent" />
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-navy-deep/55 text-cream backdrop-blur-sm transition-colors hover:bg-gold hover:text-navy-deep"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
              <h3 className="mt-5 font-display text-xl font-medium text-navy">{m.name}</h3>
              <p className="mt-0.5 font-sans text-sm font-medium uppercase tracking-[0.16em] text-gold">
                {m.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, BedDouble } from "lucide-react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const TICKETS_URL = "/tickets";
const ROOM_BLOCK_URL =
  "https://bookings.omnihotels.com/event/houston/westside-burns-night-2026-room-block";
const LINKEDIN_URL = "https://www.linkedin.com/company/westsideburnsnight/about/";

const EXPLORE = [
  { label: "The Evening", href: "/#evening" },
  { label: "Our Story", href: "/about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Sponsorship", href: "/sponsors" },
  { label: "Venue & Travel", href: "/#venue" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      {/* Closing CTA band */}
      <div className="border-b border-cream/10">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:py-24">
          <p className="eyebrow justify-center text-gold-soft">
            <span className="h-px w-8 bg-gold/50" />
            Slàinte Mhath
            <span className="h-px w-8 bg-gold/50" />
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance font-display text-4xl font-medium leading-tight text-cream sm:text-5xl">
            Join us on the 30th of January, 2027
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-lg leading-relaxed text-cream/70">
            An evening of haggis, whisky, poetry and dancing — in good company, and in
            aid of good causes.
          </p>
          <Link
            href={TICKETS_URL}
            className="mt-9 inline-flex rounded-full bg-gold px-9 py-3.5 font-sans text-sm font-semibold tracking-wide text-navy-deep transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_12px_32px_-10px_rgba(194,154,75,0.7)]"
          >
            Reserve Your Seat
          </Link>
        </div>
      </div>

      {/* Footer columns */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-cream.png"
                alt="Westside Burns Night Association crest"
                width={48}
                height={44}
                className="h-11 w-auto"
              />
              <span className="font-display text-lg font-semibold leading-tight text-cream">
                Westside Burns
                <br />
                Night Association
              </span>
            </div>
            <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-cream/60">
              Houston&rsquo;s traditional Burns Supper, promoting the life and works of
              Robert Burns since 2001.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Westside Burns Night Association on LinkedIn"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-cream/20 text-cream/70 transition-colors hover:text-gold hover:ring-gold/40"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>

          {/* Explore */}
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {EXPLORE.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-sans text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href={TICKETS_URL}
                  className="font-sans text-sm text-cream/70 transition-colors hover:text-cream"
                >
                  Tickets &amp; Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
              Visit
            </p>
            <ul className="mt-5 space-y-4 font-sans text-sm text-cream/70">
              <li className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  Omni Houston Hotel, Galleria
                  <br />4 Riverway Dr, Houston, TX 77056
                </span>
              </li>
              <li className="flex gap-3">
                <BedDouble size={17} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={ROOM_BLOCK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cream"
                >
                  Book your room at the Omni
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
              Contact
            </p>
            <ul className="mt-5 space-y-4 font-sans text-sm text-cream/70">
              <li className="flex gap-3">
                <Mail size={17} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  1321 Upland Drive PMB 724
                  <br />
                  Houston, TX 77043
                </span>
              </li>
            </ul>
            <p className="mt-6 max-w-xs font-sans text-xs leading-relaxed text-cream/45">
              A registered 501(c)(3) non-profit. Surplus funds are donated to local, state
              and national charities.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-7 sm:flex-row">
          <p className="font-sans text-xs text-cream/45">
            © 2026 Westside Burns Night Association. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream/45">Slàinte! 🥃</p>
        </div>
      </div>
    </footer>
  );
}

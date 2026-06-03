import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TicketsHero from "@/components/tickets/TicketsHero";
import TicketPrices from "@/components/tickets/TicketPrices";
import SponsorPackages from "@/components/SponsorPackages";
import MinorPackages from "@/components/tickets/MinorPackages";

const ROOM_BLOCK_URL =
  "https://bookings.omnihotels.com/event/houston/westside-burns-night-2026-room-block";

export const metadata: Metadata = {
  title: "Tickets & Packages",
  description:
    "Book your seats for the 2027 Westside Burns Supper — tables of ten, couples tickets, and sponsorship packages from $500 to $10,000. Saturday 30 January, Omni Houston Hotel.",
  alternates: { canonical: "/tickets" },
  openGraph: {
    title: "Tickets & Packages | Westside Burns Night",
    description:
      "Tickets and sponsorships for the 2027 Burns Supper at the Omni Houston Hotel.",
    url: "https://westsideburnssupper.com/tickets",
  },
};

export default function TicketsPage() {
  return (
    <main>
      <Navbar />
      <TicketsHero />
      <TicketPrices />

      {/* Sponsorship */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center text-gold">
              <span className="h-px w-8 bg-gold/60" />
              Sponsorship
              <span className="h-px w-8 bg-gold/60" />
            </p>
            <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-navy sm:text-5xl">
              Sponsorship packages for 2027
            </h2>
            <p className="mt-5 text-pretty font-sans text-lg leading-relaxed text-ink/75">
              Every tier underwrites the evening and the charitable giving that follows it.
              Choose the one that suits you.
            </p>
          </div>

          <div className="mt-14">
            <SponsorPackages />
          </div>

          <div className="mt-12">
            <MinorPackages />
          </div>
        </div>
      </section>

      {/* Group rates */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <h2 className="font-display text-3xl font-medium text-navy">
            Staying over?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-base leading-relaxed text-ink/70">
            Group rates are available at the Omni Houston Hotel for guests of the supper.
          </p>
          <a
            href={ROOM_BLOCK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-full bg-navy px-8 py-3.5 font-sans text-sm font-semibold text-cream transition-all duration-300 hover:bg-navy-deep"
          >
            Book Your Room at the Omni
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

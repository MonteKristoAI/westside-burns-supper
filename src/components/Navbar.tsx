"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ROOM_BLOCK_URL } from "@/lib/event";

const NAV_LINKS = [
  { label: "The Evening", href: "/#evening" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Sponsors", href: "/sponsors" },
];

const TICKETS_URL = "/tickets";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 shadow-[0_1px_0_rgba(194,154,75,0.25)] backdrop-blur-md"
          : "bg-gradient-to-b from-navy-deep/70 to-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3.5"
          aria-label="Westside Burns Night Association — home"
        >
          <Image
            src="/images/logo-badge.png"
            alt="Westside Burns Night Association crest"
            width={48}
            height={48}
            priority
            className="h-11 w-auto"
          />
          {/* The two lines are a lockup: same measure, and the tracked line carries a
              negative right margin so its trailing letter-space does not widen it. */}
          <span className="hidden flex-col gap-[3px] leading-none sm:flex">
            <span className="font-display text-[1.05rem] font-semibold tracking-wide text-cream">
              Westside Burns Night
            </span>
            <span className="-mr-[0.25em] font-sans text-[0.62rem] uppercase tracking-[0.25em] text-gold-soft">
              Association · Houston
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative whitespace-nowrap font-sans text-sm font-medium tracking-wide text-cream/85 transition-colors hover:text-cream"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={ROOM_BLOCK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full border border-cream/40 px-5 py-2.5 font-sans text-sm font-semibold text-cream transition-all duration-300 hover:border-gold hover:text-gold"
          >
            Book Your Room
          </a>
          <Link
            href={TICKETS_URL}
            className="whitespace-nowrap rounded-full bg-gold px-6 py-2.5 font-sans text-sm font-semibold text-navy-deep transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_8px_24px_-8px_rgba(194,154,75,0.7)]"
          >
            Get Tickets
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(true)}
          className="text-cream xl:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 z-50 bg-navy-deep transition-opacity duration-300 xl:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-5">
          <span className="font-display text-lg font-semibold text-cream">
            Westside Burns Night
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-cream"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-8 px-8 pt-16">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl text-cream/90 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <Link
            href={TICKETS_URL}
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-gold px-10 py-3.5 font-sans text-base font-semibold text-navy-deep"
          >
            Get Tickets
          </Link>
          <a
            href={ROOM_BLOCK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-full border border-cream/40 px-10 py-3.5 font-sans text-base font-semibold text-cream"
          >
            Book Your Room
          </a>
        </div>
      </div>
    </header>
  );
}

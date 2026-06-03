"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

const PHOTOS = [
  { src: "/gallery/g1.jpg", alt: "Members and guests gathered with champagne at the Westside Burns Supper" },
  { src: "/gallery/g2.jpg", alt: "Guests raising a toast in formal dress and kilts" },
  { src: "/gallery/g3.jpg", alt: "A group of guests in evening gowns and tartan at the supper" },
  { src: "/gallery/g4.jpg", alt: "Friends in kilts and black-tie sharing a laugh" },
  { src: "/gallery/g5.jpg", alt: "Members gathered with champagne at the reception" },
  { src: "/gallery/g6.jpg", alt: "Guests in Highland dress enjoying the evening" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % PHOTOS.length)),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length)),
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, next, prev]);

  return (
    <section id="gallery" className="scroll-mt-24 bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">
              <span className="h-px w-8 bg-gold/60" />
              The Gallery
            </p>
            <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-cream sm:text-5xl">
              Scenes from the night
            </h2>
            <p className="mt-5 max-w-xl text-pretty font-sans text-lg leading-relaxed text-cream/70">
              Kilts and gowns, a dram in hand and good company until the wee hours.
              Tap any photo to take a closer look.
            </p>
          </div>
          <span className="shrink-0 font-sans text-sm uppercase tracking-[0.22em] text-gold-soft">
            Burns Night 2024
          </span>
        </motion.div>

        {/* Photo grid — all six, uniform */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5"
        >
          {PHOTOS.map((photo, i) => (
            <motion.button
              key={photo.src}
              variants={reveal}
              onClick={() => setIndex(i)}
              aria-label={`Open photo ${i + 1} of ${PHOTOS.length}`}
              className="group relative aspect-[3/2] overflow-hidden rounded-xl ring-1 ring-cream/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-deep/15 transition-colors duration-500 group-hover:bg-navy-deep/35" />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/40 bg-navy-deep/40 backdrop-blur-sm">
                  <Expand size={20} className="text-cream" />
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {open && index !== null && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-navy-deep/96 backdrop-blur-md"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between px-5 py-4 sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-sans text-sm tracking-[0.2em] text-cream/70">
              {String(index + 1).padStart(2, "0")} / {String(PHOTOS.length).padStart(2, "0")}
            </span>
            <button
              onClick={close}
              aria-label="Close"
              className="flex h-10 w-10 items-center justify-center rounded-full text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream"
            >
              <X size={24} />
            </button>
          </div>

          {/* Stage */}
          <div
            className="relative flex flex-1 items-center justify-center px-4 sm:px-16"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (dx < -50) next();
              else if (dx > 50) prev();
              touchX.current = null;
            }}
          >
            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream sm:left-5"
            >
              <ChevronLeft size={30} />
            </button>

            <div className="relative h-full max-h-[74vh] w-full max-w-5xl">
              <Image
                key={PHOTOS[index].src}
                src={PHOTOS[index].src}
                alt={PHOTOS[index].alt}
                fill
                sizes="100vw"
                priority
                className="object-contain"
              />
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next photo"
              className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream sm:right-5"
            >
              <ChevronRight size={30} />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div
            className="flex justify-start gap-3 overflow-x-auto px-5 py-5 sm:justify-center sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            {PHOTOS.map((photo, i) => (
              <button
                key={photo.src}
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md ring-1 transition-all ${
                  i === index
                    ? "ring-2 ring-gold opacity-100"
                    : "ring-cream/15 opacity-50 hover:opacity-90"
                }`}
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

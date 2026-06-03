const HIGHLIGHTS = [
  { stat: "$200K+", label: "Raised for charity since 2001" },
  { stat: "350", label: "Members & guests each year" },
  { stat: "25th", label: "Anniversary celebration" },
  { stat: "Live", label: "Whisky Kiss, all the way from Scotland" },
];

export default function HighlightsBar() {
  return (
    <section className="border-y border-gold/20 bg-navy text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-12 sm:px-8 lg:grid-cols-4 lg:py-14">
        {HIGHLIGHTS.map((h) => (
          <div
            key={h.label}
            className="flex flex-col items-center text-center lg:border-r lg:border-cream/10 lg:last:border-r-0"
          >
            <span className="font-display text-4xl font-semibold text-gold sm:text-5xl">
              {h.stat}
            </span>
            <span className="mt-2 max-w-[14rem] font-sans text-sm leading-snug text-cream/70">
              {h.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

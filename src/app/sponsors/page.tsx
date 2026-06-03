import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SponsorsHero from "@/components/sponsors/SponsorsHero";
import SponsorWall from "@/components/sponsors/SponsorWall";
import SponsorPackages from "@/components/SponsorPackages";

export const metadata: Metadata = {
  title: "Our Sponsors",
  description:
    "Meet the sponsors behind Houston's Burns Supper and become one yourself. A 501(c)(3) that has given over $200,000 to hospitals, scholarships and more. Now collecting for 2027.",
  alternates: { canonical: "/sponsors" },
  openGraph: {
    title: "Sponsor the Westside Burns Night Association",
    description:
      "The generosity behind the night — meet our sponsors and become one. Now collecting for 2027.",
    url: "https://westsideburnssupper.com/sponsors",
  },
};

export default function SponsorsPage() {
  return (
    <main>
      <Navbar />
      <SponsorsHero />
      <SponsorWall />

      {/* Become a sponsor */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center text-gold">
              <span className="h-px w-8 bg-gold/60" />
              Become a Sponsor
              <span className="h-px w-8 bg-gold/60" />
            </p>
            <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-navy sm:text-5xl">
              Add your logo to the night
            </h2>
            <p className="mt-5 text-pretty font-sans text-lg leading-relaxed text-ink/75">
              Choose a sponsorship tier below. Each one underwrites the evening and the
              charitable giving that follows it.
            </p>
          </div>
          <div className="mt-14">
            <SponsorPackages />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

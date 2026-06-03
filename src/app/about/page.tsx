import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import Team from "@/components/about/Team";
import AboutJoin from "@/components/about/AboutJoin";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "From a 2001 Glasgow reunion to a 350-guest Houston tradition. Meet the committee behind the Westside Burns Night Association — a 501(c)(3) that has given over $200,000 to charity.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About the Westside Burns Night Association",
    description:
      "A Glasgow reunion that became a Houston tradition — meet the committee behind the supper.",
    url: "https://westsideburnssupper.com/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <AboutStory />
      <Team />
      <AboutJoin />
      <Footer />
    </main>
  );
}

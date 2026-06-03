import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HighlightsBar from "@/components/HighlightsBar";
import TheEvening from "@/components/TheEvening";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Tickets from "@/components/Tickets";
import Venue from "@/components/Venue";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HighlightsBar />
      <TheEvening />
      <About />
      <Gallery />
      <Tickets />
      <Venue />
      <Footer />
    </main>
  );
}

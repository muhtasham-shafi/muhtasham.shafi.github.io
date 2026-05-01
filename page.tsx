import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <div className="grid-bg" />
      
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Journey />
        <Footer />
      </div>
    </main>
  );
}

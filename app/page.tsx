import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FocusBand from "@/components/FocusBand";
import Feature from "@/components/Feature";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import CaseStudy from "@/components/CaseStudy";
import Changelog from "@/components/Changelog";
import Teardowns from "@/components/Teardowns";
import Toolkit from "@/components/Toolkit";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import ScrollEffects from "@/components/ScrollEffects";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <FocusBand />
        <Feature />
        <Stats />
        <Work />
        <CaseStudy />
        <Changelog />
        <Teardowns />
        <Toolkit />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
      <ScrollEffects />
    </>
  );
}

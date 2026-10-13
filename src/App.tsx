import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import FunctionsSection from "./sections/About";
import AnniversaryBanner from "./sections/Anniversary";
import News from "./sections/News";
import Footer from "./sections/Footer";
import Support from "./sections/Support";
import Plans from "./sections/Plans";

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <main className="relative">
        <div className={isNavOpen ? "blur-xs transition duration-300" : "transition duration-300"}>
          <Hero onOpenNav={() => setIsNavOpen(true)} />
        </div>

        {isNavOpen && <Navbar onClose={() => setIsNavOpen(false)} />}

        <FunctionsSection />
        <AnniversaryBanner />
        <Plans />
        <Support />
        <News />
      </main>

      <Footer />
    </>
  );
}

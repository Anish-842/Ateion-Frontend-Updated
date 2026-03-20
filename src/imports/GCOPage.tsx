import React, { useEffect } from "react";
import HeroSection from "./gco/HeroSection";
import Slide from "./gco/Slide";
import GCOComparison from "./gco/GCOComparison";
import TimelineSection from "./gco/TimelineSection";

import "../styles/gco/index.css";
import "../styles/gco/fonts.css";
import "../styles/gco/theme.css";

const GCOPage = () => {
  // Ensure the page scrolls to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="gco-root" className="gco-wrapper w-screen overflow-x-hidden bg-[#f3efe7] min-h-screen">
      <main>
        {/* Homepage Sections */}
        <HeroSection />
        <Slide />
        <GCOComparison />
        <TimelineSection />
      </main>
    </div>
  );
};

export default GCOPage;

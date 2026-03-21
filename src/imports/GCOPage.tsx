import React, { useEffect } from "react";
import HeroSection from "./gco/HeroSection";
import Slide from "./gco/Slide";
import GCOComparison from "./gco/GCOComparison";
import TimelineSection from "./gco/TimelineSection";
import Navbar from "../app/components/Navbar";
import SharedFooter from "./SharedFooter";

import "../styles/gco/index.css";
import "../styles/gco/fonts.css";
import "../styles/gco/theme.css";

const GCOPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f7f3eb] w-full min-h-screen overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="flex flex-col w-full pt-[80px]">
        <main>
          <HeroSection />
          <Slide />
          <GCOComparison />
          <TimelineSection />
        </main>
        <div className="shared-navbar-spacer" />
        <SharedFooter />
      </div>
    </div>
  );
};

export default GCOPage;

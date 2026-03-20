import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "../imports/Homepage";
import GCOPage from "../imports/GCOPage";

const BASE_WIDTH = 1280;

function ScaledHomepage() {
  const [scale, setScale] = useState(1);
  const [outerHeight, setOuterHeight] = useState("100vh");
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function recalculate() {
      const vw = window.innerWidth;
      const newScale = vw / BASE_WIDTH;
      setScale(newScale);
      // After scaling, the outer container must be exactly (natural content height * scale)
      if (innerRef.current) {
        setOuterHeight(`${innerRef.current.offsetHeight * newScale}px`);
      }
    }

    recalculate();
    window.addEventListener("resize", recalculate);

    // Also watch for content height changes (FAQ open/close etc.)
    const observer = new ResizeObserver(recalculate);
    if (innerRef.current) observer.observe(innerRef.current);

    return () => {
      window.removeEventListener("resize", recalculate);
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ width: "100%", height: outerHeight, overflow: "hidden", position: "relative", backgroundColor: "#f7f3eb" }}>
      <div
        ref={innerRef}
        style={{
          width: `${BASE_WIDTH}px`,
          position: "absolute",
          top: 0,
          left: "50%",
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <Homepage />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScaledHomepage />} />
        <Route path="/gco" element={<GCOPage />} />
      </Routes>
    </BrowserRouter>
  );
}

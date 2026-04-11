import React, { useRef, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { ImageTrail } from "../../app/components/ui/image-trail";
import "../../styles/gco/HeroSection.css";
import logoEducation from "../../assets/gco/logo-education.png";
import logoPolicy from "../../assets/gco/education-ministry-logo.jpg";
import trail1 from "../../assets/gco/trail-images/olympiad-students-1.png";
import trail2 from "../../assets/gco/trail-images/olympiad-students-2.png";
import trail3 from "../../assets/gco/trail-images/olympiad-students-3.png";
import trail4 from "../../assets/gco/trail-images/olympiad-students-4.png";
import trail5 from "../../assets/gco/trail-images/olympiad-students-5.png";
import "../../styles/fonts.css";

function useIsMouseInSection(sectionRef: React.RefObject<HTMLElement>) {
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      setIsInside(inside);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [sectionRef]);

  return isInside;
}

function HeroSection() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const trailZoneRef = useRef<HTMLDivElement>(null);
  const isMouseInSection = useIsMouseInSection(heroRef);
  const [disableTrail, setDisableTrail] = useState(false);

  const alignedLogos = [
    { src: logoEducation, alt: "Education Logo" },
    { src: logoPolicy, alt: "Education Policy 2020 Logo" },
  ];

  const images = [trail1, trail2, trail3, trail4, trail5];

  return (
    <section className="hero" ref={heroRef}>
      {/* ─── Upper part: text + buttons + logos (NO trail) ─── */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title" style={{ fontFamily: "'OV Soge', sans-serif" }}>
            Global Capability Olympiad
          </h1>
          <p className="hero-subtitle">
            The Global Capability Olympiad is the world&apos;s first preparation-free,
            syllabus-free, AI-integrated Master Olympiad designed to measure
            thinking, not memory.
          </p>

          <div className="hero-buttons">
            <button type="button" className="btn-secondary" onClick={() => navigate('/contact')} onMouseEnter={() => setDisableTrail(true)} onMouseLeave={() => setDisableTrail(false)}>Contact us</button>
            <button type="button" className="btn-black" onClick={() => navigate('/gco')} onMouseEnter={() => setDisableTrail(true)} onMouseLeave={() => setDisableTrail(false)}>Explore more</button>
          </div>

          <div className="aligned-with">
            <h3 className="aligned-title">Aligned with:</h3>
            <div className="logos">
              {alignedLogos.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom zone: ImageTrail effect lives ONLY here ─── */}
      <div className="hero-trail-zone" ref={trailZoneRef}>
        <ImageTrail containerRef={trailZoneRef} disabled={!isMouseInSection || disableTrail}>
          {images.map((url, index) => (
            <div
              key={index}
              className="flex relative overflow-hidden w-24 h-24"
            >
              <img
                src={url}
                alt=""
                className="object-cover absolute inset-0 w-full h-full"
                aria-hidden="true"
              />
            </div>
          ))}
        </ImageTrail>
      </div>
    </section>
  );
}

export default HeroSection;

import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImageTrail } from "../../app/components/ui/image-trail";
import logoEducation from "../../assets/gco/logo-education.png";
import logoPolicy from "../../assets/gco/education-ministry-logo.jpg";
import trail2 from "../../assets/gco/trail-images/olympiad-students-2.png";
import trail4 from "../../assets/gco/trail-images/olympiad-students-4.png";
import trail5 from "../../assets/gco/trail-images/olympiad-students-5.png";
import "../../styles/gco/HeroSection.css";
import "../../styles/fonts.css";

// Hook
function useIsMouseInSection(sectionRef: React.RefObject<HTMLElement | null>) {
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

  const heroRef = useRef<HTMLElement | null>(null);
  const trailZoneRef = useRef<HTMLDivElement | null>(null);

  // ✅ Separate refs
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  const isMouseInHero = useIsMouseInSection(heroRef);
  const isOnTitle = useIsMouseInSection(titleRef);
  const isOnDesc = useIsMouseInSection(descRef);
  const isOnButtons = useIsMouseInSection(buttonsRef);

  const [disableTrail, setDisableTrail] = useState(false);

  const alignedLogos = [
    { src: logoEducation, alt: "Education Logo" },
    { src: logoPolicy, alt: "Education Policy 2020 Logo" },
  ];

  const images = [trail2, trail4, trail5];

  return (
    <section className="hero relative" ref={heroRef}>
      
      {/* TEXT LAYER (ABOVE) */}
      <div className="hero-overlay relative z-10">
        <div className="hero-content">

          {/* TITLE */}
          <h1
            ref={titleRef}
            className="hero-title"
            style={{ fontFamily: "'OV Soge', sans-serif" }}
          >
            Global Capability Olympiad
          </h1>

          {/* DESCRIPTION */}
          <p ref={descRef} className="hero-subtitle mb-8 md:mb-12">
            The Global Capability Olympiad is the world&apos;s first preparation-free,
            syllabus-free, AI-integrated Master Olympiad designed to measure
            thinking, not memory.
          </p>

          {/* BUTTONS */}
          <div ref={buttonsRef} className="hero-buttons">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate("/contact")}
              onMouseEnter={() => setDisableTrail(true)}
              onMouseLeave={() => setDisableTrail(false)}
            >
              Contact us
            </button>

            <button
              type="button"
              className="btn-black"
              onClick={() => navigate("/gco")}
              onMouseEnter={() => setDisableTrail(true)}
              onMouseLeave={() => setDisableTrail(false)}
            >
              Explore more
            </button>
          </div>

          {/* LOGOS */}
          <div className="aligned-with pt-4 md:pt-8 bg-transparent">
            <h3 className="aligned-title">Aligned with:</h3>
            <div className="logos">
              {alignedLogos.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TRAIL LAYER (BELOW) */}
      <div className="hero-trail-zone absolute inset-0 z-0" ref={trailZoneRef}>
        <ImageTrail
          containerRef={trailZoneRef}
          disabled={
            !isMouseInHero ||
            isOnTitle ||
            isOnDesc ||
            isOnButtons ||
            disableTrail
          }
        >
          {images.map((url, index) => (
            <div key={index} className="flex relative overflow-hidden w-24 h-24">
              <img
                src={url}
                alt=""
                className="object-cover absolute inset-0 w-full h-full"
              />
            </div>
          ))}
        </ImageTrail>
      </div>
    </section>
  );
}

export default HeroSection;
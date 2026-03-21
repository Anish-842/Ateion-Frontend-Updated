import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import svgPaths from "../../imports/svg-paths";
import logo from "../../assets/logo.png";

function LogoContainer() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <img
        src={logo}
        alt="Ateion Logo"
        className="h-[60px] object-contain w-auto"
      />
    </div>
  );
}

function NavButtonAboutUs() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[rgba(235,235,235,0.8)] flex h-[34px] items-center justify-center px-[22px] relative rounded-full shrink-0 group cursor-pointer hover:bg-[rgba(215,215,215,0.95)] transition-colors"
    >
      <p className="font-bold leading-none relative shrink-0 text-[#292929] text-[13px] whitespace-nowrap pt-[1px]" style={{ fontFamily: "'Manrope', sans-serif" }}>About Us</p>
    </motion.div>
  );
}

function NavButtonWorkshops() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[rgba(235,235,235,0.8)] flex gap-[6px] h-[34px] items-center justify-center px-[20px] relative rounded-full shrink-0 group cursor-pointer hover:bg-[rgba(215,215,215,0.95)] transition-colors"
    >
      <p className="font-bold leading-none relative shrink-0 text-[#292929] text-[13px] whitespace-nowrap pt-[1px]" style={{ fontFamily: "'Manrope', sans-serif" }}>Workshops</p>
      <div className="flex items-center justify-center relative shrink-0 opacity-80 group-hover:translate-y-0.5 transition-transform">
        <div className="flex-none rotate-180">
          <div className="relative size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.06516 7.25">
              <path d={svgPaths.p3367e500} fill="#292929" id="Polygon 1" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function NavButtonGlobalOlympiad() {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate('/gco')}
      className="bg-[rgba(227,227,227,0.72)] content-stretch flex h-[32px] items-center justify-center px-[20px] relative rounded-full shrink-0 group cursor-pointer hover:bg-[rgba(200,200,200,0.85)] transition-colors"
    >
      <p className="font-bold leading-none relative shrink-0 text-[#292929] text-[13px] whitespace-nowrap" style={{ fontFamily: "'Manrope', sans-serif" }}>Global Olympiad</p>
    </motion.div>
  );
}

function NavButtonResources() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[rgba(227,227,227,0.72)] content-stretch flex h-[32px] items-center justify-center px-[20px] relative rounded-full shrink-0 group cursor-pointer hover:bg-[rgba(200,200,200,0.85)] transition-colors"
    >
      <p className="font-bold leading-none relative shrink-0 text-[#292929] text-[13px] whitespace-nowrap" style={{ fontFamily: "'Manrope', sans-serif" }}>Resources</p>
    </motion.div>
  );
}

function NavLinks() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <NavButtonAboutUs />
      <NavButtonWorkshops />
      <NavButtonGlobalOlympiad />
      <NavButtonResources />
    </div>
  );
}

function NavActions() {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(251, 68, 68, 0.3)" }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate('/contact')}
      className="bg-[#fb4444] content-stretch flex h-[36px] items-center justify-center px-[20px] relative rounded-full shrink-0 group cursor-pointer hover:bg-[#ff5555] transition-all"
    >
      <p className="font-bold leading-none relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontFamily: "'Manrope', sans-serif" }}>Get Connected</p>
    </motion.div>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="bg-transparent">
      <div className="content-stretch flex items-center justify-between px-[24px] py-[20px] relative shrink-0 w-full max-w-[1280px] mx-auto">
        <div className="flex flex-1 items-center justify-start">
          <button className="cursor-pointer" onClick={() => navigate('/')} aria-label="Go to homepage">
            <LogoContainer />
          </button>
        </div>
        <div className="flex-[2] flex items-center justify-center">
          <NavLinks />
        </div>
        <div className="flex flex-1 items-center justify-end">
          <NavActions />
        </div>
      </div>
    </div>
  );
}

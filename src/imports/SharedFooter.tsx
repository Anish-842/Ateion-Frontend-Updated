import React from "react";
import svgPaths from "./svg-paths";
import imgGcoLogo from "../assets/a440209918fa81a1c528e2e95290d4f1f12546e7.png";

function FooterBrandName() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Lato:Bold',sans-serif] font-bold leading-tight not-italic relative shrink-0 text-[18px] text-black">Ateion Pvt. Ltd.</p>
    </div>
  );
}

function FooterSocialLinks() {
  return (
    <div className="content-stretch flex gap-[22.273px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[22.273px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.2726 22.2726">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.peb98800} fill="var(--fill-0, black)" fillOpacity="0.7" id="Vector_2" />
          </g>
        </svg>
      </div>
      <div className="relative shrink-0 size-[22.273px]">
        <div className="absolute inset-[0_0.24%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.1669 22.2727">
            <path d={svgPaths.p7943900} fill="var(--fill-0, black)" fillOpacity="0.7" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[18.561px]">
        <img alt="YouTube" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGcoLogo} />
      </div>
      <div className="relative shrink-0 size-[22.273px]">
        <div className="absolute inset-[14.77%_0]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.2726 15.6929">
            <path d={svgPaths.p13c87470} fill="var(--fill-0, black)" fillOpacity="0.7" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FooterAteionBrand() {
  return (
    <div className="content-stretch flex flex-col gap-[37.121px] items-start relative shrink-0">
      <FooterBrandName />
      <FooterSocialLinks />
    </div>
  );
}

function FooterColumnLeft() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <FooterAteionBrand />
    </div>
  );
}

function FooterAddress() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Lato:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[15.78px] text-[rgba(0,0,0,0.6)] whitespace-pre-wrap">{`PCMC , Pune , Maharashtra  - 500034`}</p>
    </div>
  );
}

function FooterPhone() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Lato:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[15.78px] text-[rgba(0,0,0,0.6)] whitespace-nowrap">+91 93569 76878</p>
    </div>
  );
}

function FooterEmail() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13.78px] text-[rgba(0,0,0,0.6)] whitespace-nowrap">destiny@ateion.com</p>
    </div>
  );
}

function FooterContactInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <FooterAddress />
      <FooterPhone />
      <FooterEmail />
    </div>
  );
}

function FooterColumnMiddle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <FooterContactInfo />
    </div>
  );
}

function FooterLegalLinks() {
  return (
    <div className="content-stretch flex flex-col font-['Lato:Regular',sans-serif] gap-[14.848px] items-start leading-[normal] not-italic relative shrink-0 text-[14.85px] text-[rgba(0,0,0,0.6)] w-full">
      <p className="relative shrink-0 w-full cursor-pointer hover:text-black transition-colors">Terms of Use</p>
      <p className="relative shrink-0 w-full cursor-pointer hover:text-black transition-colors">Privacy Policy</p>
      <p className="relative shrink-0 w-full cursor-pointer hover:text-black transition-colors">{`Data Collection & Consent`}</p>
    </div>
  );
}

function FooterColumnRight() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <FooterLegalLinks />
    </div>
  );
}

function FooterColumnsContainer() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full max-w-[1240px] mx-auto px-[64px] gap-[64px]">
      <FooterColumnLeft />
      <FooterColumnMiddle />
      <FooterColumnRight />
    </div>
  );
}

function FooterMainArea() {
  return (
    <div className="bg-[#f7f3eb] relative shrink-0 w-full py-[48px]">
      <div className="content-stretch flex flex-col items-center justify-center relative size-full">
        <FooterColumnsContainer />
      </div>
    </div>
  );
}

function FooterCopyrightBar() {
  return (
    <div className="bg-[#1e1632] h-[64px] relative shrink-0 w-full flex items-center justify-center px-[32px]">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-solid border-t-[1px] inset-[0_0_auto_0] pointer-events-none opacity-20" />
      <p className="font-['Lato:Regular',sans-serif] leading-normal not-italic relative shrink-0 text-[14px] text-center text-white opacity-80">
        Copyright ©Ateion 2026. All Rights Reserved.
      </p>
    </div>
  );
}

function FooterSection() {
  return (
    <div className="flex flex-col items-center w-full">
      <FooterMainArea />
      <FooterCopyrightBar />
    </div>
  );
}

export default function SharedFooter() {
  return <FooterSection />;
}

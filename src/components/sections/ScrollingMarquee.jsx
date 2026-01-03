"use client";

import React from 'react';

const ScrollingMarquee = () => {
  const marqueeItems = [
    "TRAVEL IN STYLE",
    "TRAVEL IN STYLE",
    "TRAVEL IN STYLE",
    "TRAVEL IN STYLE",
    "TRAVEL IN STYLE",
    "TRAVEL IN STYLE",
    "TRAVEL IN STYLE",
    "TRAVEL IN STYLE",
  ];

  return (
    <section 
      className="relative overflow-hidden bg-[#1A1A1A] py-[32px] sm:py-[40px]"
      aria-label="Brand ticker"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
      `}} />
      <div className="flex whitespace-nowrap">
        <div className="flex animate-marquee shrink-0">
          {marqueeItems.map((text, index) => (
            <span
              key={`marquee-1-${index}`}
              className="mx-[2.5rem] text-[24px] md:text-[32px] font-medium tracking-[0.2em] text-[#FFFFFF] uppercase select-none"
            >
              {text}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee shrink-0" aria-hidden="true">
          {marqueeItems.map((text, index) => (
            <span
              key={`marquee-2-${index}`}
              className="mx-[2.5rem] text-[24px] md:text-[32px] font-medium tracking-[0.2em] text-[#FFFFFF] uppercase select-none"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingMarquee;

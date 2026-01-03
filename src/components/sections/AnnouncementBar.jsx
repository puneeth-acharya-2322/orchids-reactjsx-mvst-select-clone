import React from 'react';

/**
 * AnnouncementBar Component
 * 
 * A premium, high-contrast black announcement bar featuring:
 * - An accessibility trigger on the left
 * - A centered, uppercase scrolling/marquee text for shipping information
 * 
 * Styled based on the provided design system:
 * - Background: #000000 (absolute black)
 * - Text: #FFFFFF (pure white)
 * - Font: Helvetica/GT Standard (approximated with system sans-serif per design)
 * - Size: 10px - 11px
 * - Letter spacing: 0.15em
 */

const AnnouncementBar = () => {
  return (
    <aside className="w-full bg-[#000000] text-white overflow-hidden relative z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-[5%] py-[9px] flex items-center justify-center relative min-h-[34px]">
        
        {/* Left: Accessibility Trigger */}
        <div className="absolute left-4 sm:left-[5%] top-1/2 -translate-y-1/2 hidden md:flex items-center">
          <button 
            type="button" 
            className="flex items-center gap-1.5 group cursor-pointer border-none bg-transparent p-0 m-0 outline-none"
            aria-label="Accessibility Settings"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] leading-none transition-opacity group-hover:opacity-70">
              Accessibility
            </span>
            <div className="w-4 h-4 text-white flex items-center justify-center group-hover:opacity-70 transition-opacity">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-3.5 h-3.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
            </div>
          </button>
        </div>

        {/* Center: Scrolling Announcement Text */}
        <div className="flex-1 flex justify-center items-center overflow-hidden">
          {/* Simple marquee wrapper for scrolling effect */}
          <div className="relative flex whitespace-nowrap overflow-hidden">
            <div className="animate-marquee inline-block px-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-center leading-tight">
                FREE SHIPPING & RETURNS for all Contiguous us and select Canada & Europe orders
              </p>
            </div>
            {/* Duplicate for infinite loop appearance if needed, though often these are centered stationary or rotating */}
            <div className="hidden lg:inline-block animate-marquee2 absolute top-0 px-4 whitespace-nowrap">
               <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-center leading-tight">
                FREE SHIPPING & RETURNS for all Contiguous us and select Canada & Europe orders
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
        @media (max-width: 1024px) {
          .animate-marquee, .animate-marquee2 {
            animation: none;
            white-space: normal;
          }
        }
      `}</style>
    </aside>
  );
};

export default AnnouncementBar;
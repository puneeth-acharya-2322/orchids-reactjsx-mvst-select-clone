import React from 'react';

const AnnouncementBar = () => {
  return (
    <aside id="shopify-section-sections--18548534935808__announcement-bar" className="shopify-section shopify-section-group-header-group shopify-section--announcement-bar">
      <div className="relative w-full overflow-hidden bg-[#1A1A1A] text-white py-[10px] md:py-[10px]">
        <div className="container mx-auto px-5 lg:px-10 flex items-center justify-center min-h-[16.5px]">
          
          {/* Accessibility Trigger - Left Aligned */}
          <div className="absolute left-5 lg:left-10 top-1/2 -translate-y-1/2 flex items-center">
            <button 
              type="button"
              className="group flex items-center gap-1.5 p-0 bg-transparent border-none cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white transition-opacity hover:opacity-80"
              aria-label="Accessibility Menu"
            >
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] font-sans leading-none">
                Accessibility
              </span>
              <div className="w-[14px] h-[14px] flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-full h-full fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
                </svg>
              </div>
            </button>
          </div>

          {/* Centered Announcement Text */}
          <div className="flex-1 flex justify-center items-center text-center">
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] font-sans m-0 leading-tight max-w-[80%] md:max-w-none">
              FREE SHIPPING & RETURNS for all Contiguous us and select Canada & Europe orders
            </p>
          </div>

          {/* Hidden Spacer for Balance on Desktop if needed */}
          <div className="hidden lg:block w-[100px] pointer-events-none"></div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1440px;
        }
      `}</style>
    </aside>
  );
};

export default AnnouncementBar;
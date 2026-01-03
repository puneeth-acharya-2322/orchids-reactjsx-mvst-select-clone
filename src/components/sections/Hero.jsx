import React from 'react';

const Hero = () => {
  // Using the provided assets for the hero section
  const videoUrl = "https://mvstselect.com/cdn/shop/videos/c/vp/85d0cd5c2ca0417592a22831aafc048d/85d0cd5c2ca0417592a22831aafc048d.HD-1080p-4.8Mbps-35342740.mp4?v=0";
  const posterUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/MVST_Essential_Shooting_Final-8-16_9-9.jpg";

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden flex flex-col justify-end">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterUrl}
          className="w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Subtle dark overlay for text readability as per visual_effects_treatments */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-1"></div>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-[5%] pb-[80px] md:pb-[120px]">
        <div className="flex flex-col items-start gap-4">
          {/* Caption Text - Small Uppercase */}
          <p className="text-[#FFFFFF] text-[10px] md:text-[12px] font-semibold tracking-[0.15em] uppercase opacity-90 font-sans">
            100% German Makrolon® Virgin Polycarbonate
          </p>

          {/* Main Headline - Heading 1 (Hero) styles */}
          <h1 className="text-[#FFFFFF] text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-[0.02em] uppercase max-w-[800px] font-display">
            Essential Polycarbonate Collection
          </h1>

          {/* CTA Button - Ghost Button style */}
          <div className="mt-4">
            <a
              href="/collections/polycarbonate-collections"
              className="inline-flex items-center justify-center px-10 py-4 border border-white text-white text-[12px] font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-white hover:text-[#1A1A1A] font-display"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Slider Indicators (Visual only as per screenshots) */}
      <div className="absolute bottom-6 right-[5%] z-20 flex items-center gap-3">
        <div className="flex gap-2">
          <button className="w-1.5 h-1.5 rounded-full bg-white opacity-100" aria-label="Slide 1"></button>
          <button className="w-1.5 h-1.5 rounded-full bg-white opacity-40 hover:opacity-100" aria-label="Slide 2"></button>
        </div>
        <button className="text-white ml-2 p-1" aria-label="Toggle autoplay">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
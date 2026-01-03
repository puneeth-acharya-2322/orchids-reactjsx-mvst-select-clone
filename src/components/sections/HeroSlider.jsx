import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'video',
      src: 'https://mvstselect.com/cdn/shop/videos/c/vp/85d0cd5c2ca0417592a22831aafc048d/85d0cd5c2ca0417592a22831aafc048d.HD-1080p-4.8Mbps-35342740.mp4?v=0',
      tagline: 'Upgraded Best Seller',
      title: 'TREVA Aluminum Collection',
      ctaText: 'Shop Now',
      ctaLink: '/collections/treva',
    },
    {
      type: 'image',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/MVST_Essential_Shooting_Final-8-16_9-9.jpg',
      tagline: '100% German Makrolon® Virgin Polycarbonate',
      title: 'Essential Polycarbonate Collection',
      ctaText: 'Shop Now',
      ctaLink: '/collections/polycarbonate-collections',
    },
    {
      type: 'video',
      src: 'https://mvstselect.com/cdn/shop/videos/c/vp/f67b742cb1b04143b8a06bc178cf0167/f67b742cb1b04143b8a06bc178cf0167.HD-1080p-7.2Mbps-63836045.mp4?v=0',
      tagline: 'Fully Customizable',
      title: 'Carbon S Collection',
      ctaText: 'Shop Now',
      ctaLink: '/collections/carbon-s-1',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[60vh] sm:h-[75vh] md:h-screen min-h-[500px] bg-black overflow-hidden group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Media Layer */}
          <div className="absolute inset-0 w-full h-full">
            {slide.type === 'video' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            )}
            {/* Overlay for legibility */}
            <div className="absolute inset-0 bg-black/10 transition-opacity duration-500" />
          </div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end md:justify-center text-center px-6 pb-16 md:pb-0 z-20">
            <div className="max-w-[1440px] w-full mx-auto md:px-10 flex flex-col items-start text-left md:items-start">
              <span 
                className="text-white text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-3 md:mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ fontFamily: 'var(--font-sans)', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
              >
                {slide.tagline}
              </span>
              <h1 
                className="text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold uppercase leading-tight tracking-[0.05em] mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000"
                style={{ fontFamily: 'var(--font-display)', textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}
              >
                {slide.title}
              </h1>
              <a
                href={slide.ctaLink}
                className="inline-block bg-white text-black font-bold text-[11px] md:text-[12px] uppercase tracking-[0.15em] px-8 md:px-10 py-3 md:py-4 transition-all duration-300 hover:bg-black hover:text-white border border-white animate-in fade-in slide-in-from-bottom-8 duration-1000"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {slide.ctaText}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls (Visible on Hover in desktop) */}
      <div className="hidden md:flex absolute inset-x-0 top-1/2 -translate-y-1/2 justify-between px-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white rounded-full pointer-events-auto transition-transform active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} strokeWidth={2.5} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white rounded-full pointer-events-auto transition-transform active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
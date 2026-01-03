"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const INSTAGRAM_POSTS = [
  { id: 1, type: "image", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/Y4A6857-2-4_5-3.jpg" },
  { id: 2, type: "image", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/DSCF1221_7ffd5d4b-f466-43c9-af61-5ee51cd58582-7.jpg" },
  { id: 3, type: "image", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/DSC07176-Bearbeitet-8.jpg" },
  { id: 4, type: "image", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/MVST_Essential_Shooting_Final-8-16_9-9.jpg" },
  { id: 5, type: "image", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/Y-jaydonguiler-Img-14-Unlimited-5.jpg" },
];

const InstagramCarousel = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      checkScroll();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.clientWidth / (window.innerWidth < 768 ? 1.5 : 4);
      const scrollAmount = direction === "left" ? -itemWidth : itemWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-[120px] bg-[#F5F5F3] overflow-hidden" id="instagram-feed">
      <div className="container mx-auto px-[5%]">
        <h2 className="text-[32px] font-medium tracking-[0.1em] text-center mb-12 uppercase text-[#1A1A1A]">
          MVST on Instagram
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-transparent transition-opacity duration-300 ${
              canScrollLeft ? "opacity-100 hover:opacity-70" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft strokeWidth={1} size={32} className="text-[#1A1A1A]" />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-transparent transition-opacity duration-300 ${
              canScrollRight ? "opacity-100 hover:opacity-70" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight strokeWidth={1} size={32} className="text-[#1A1A1A]" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-2 md:gap-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {INSTAGRAM_POSTS.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 w-[80vw] md:w-[24%] aspect-square snap-start relative group"
              >
                <div className="w-full h-full bg-white overflow-hidden">
                  <img
                    src={post.url}
                    alt="Instagram post"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramCarousel;

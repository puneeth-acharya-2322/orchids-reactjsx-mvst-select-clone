import React from 'react';
import { RotateCcw, Truck, ShieldCheck } from 'lucide-react';

/**
 * ServiceHighlights Component
 * 
 * Clones the trust icons section with three columns: Free Returns, Free Shipping, 
 * and Lifetime Warranty. It follows the "High-End Minimalist Luxury" design system
 * with a light grey background, centered text, and specific spacing.
 */
const ServiceHighlights = () => {
  const highlights = [
    {
      icon: <RotateCcw size={20} strokeWidth={1.5} />,
      title: "Free Returns",
      description: "If you don't love it, send it back for a full refund and we'll cover the return shipping."
    },
    {
      icon: <Truck size={20} strokeWidth={1.5} />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders to the contiguous US, Canada and most European countries."
    },
    {
      icon: <ShieldCheck size={20} strokeWidth={1.5} />,
      title: "Lifetime warranty",
      description: "Every suitcase comes with a limited lifetime warranty."
    }
  ];

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24 border-t border-[#E5E5E5]">
      <div className="container mx-auto px-5 md:px-10 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[380px] mx-auto">
              {/* Icon Container */}
              <div className="mb-6 flex items-center justify-center text-black">
                {item.icon}
              </div>

              {/* Title - Set in Helvetica/Arial based on globals.css h2/h6 styles */}
              <h3 className="font-display text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-4 text-black">
                {item.title}
              </h3>

              {/* Description - Set in Nunito Sans based on design system body (small) */}
              <p className="font-sans text-[13px] md:text-[14px] leading-[1.6] text-black/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
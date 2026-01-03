import React from 'react';
import Image from 'next/image';

/**
 * ShopByMaterial Component
 * 
 * Clones the "Shop By Material" grid with three large vertical cards 
 * for Aluminum, Carbon Fiber, and Polycarbonate.
 */
const ShopByMaterial = () => {
  const materials = [
    {
      title: 'Aluminum',
      subtitle: 'Sleek and Strong',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/DSCF1221_7ffd5d4b-f466-43c9-af61-5ee51cd58582-7.jpg',
      link: '/collections/aluminum-collections'
    },
    {
      title: 'Carbon Fiber',
      subtitle: 'Luxurious and Unbreakable',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/DSC07176-Bearbeitet-8.jpg',
      link: '/collections/carbon-fiber-collection'
    },
    {
      title: 'POLYCARBONATE',
      subtitle: 'Lightweight and Durable',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/MVST_Essential_Shooting_Final-8-16_9-9.jpg',
      link: '/collections/polycarbonate-collections'
    }
  ];

  return (
    <section className="py-[60px] md:py-[80px] bg-[#F5F5F5]">
      <div className="container mx-auto px-5 md:px-10">
        <h2 className="text-center mb-10 md:mb-14 text-[24px] md:text-[30px] font-semibold tracking-[0.1em] uppercase font-display text-black">
          SHOP BY MATERIAL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[15px]">
          {materials.map((material, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden aspect-[4/6] md:aspect-[3/5]"
            >
              {/* Image with hover zoom effect */}
              <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src={material.image}
                  alt={material.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
              </div>

              {/* Bottom-left overlay text */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col items-start justify-end">
                <p className="text-white text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                  {material.subtitle}
                </p>
                <h3 className="text-white text-[24px] md:text-[28px] font-bold tracking-[0.1em] uppercase mb-6 font-display">
                  {material.title}
                </h3>
                
                <a 
                  href={material.link}
                  className="bg-white text-black px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] transition-all hover:bg-black hover:text-white"
                >
                  View products
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByMaterial;
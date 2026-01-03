import React from 'react';

const ShopByMaterial = () => {
  const materials = [
    {
      id: 'aluminum',
      subtitle: 'Sleek and Strong',
      title: 'Aluminum',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/DSCF1221_7ffd5d4b-f466-43c9-af61-5ee51cd58582-7.jpg',
      link: '/collections/aluminum-collections'
    },
    {
      id: 'carbon-fiber',
      subtitle: 'Luxurious and Unbreakable',
      title: 'Carbon Fiber',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/DSC07176-Bearbeitet-8.jpg',
      link: '/collections/carbon-fiber-collection'
    },
    {
      id: 'polycarbonate',
      subtitle: 'Lightweight and Durable',
      title: 'POLYCARBONATE',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/MVST_Essential_Shooting_Final-8-16_9-9.jpg',
      link: '/collections/polycarbonate-collections'
    }
  ];

  return (
    <section className="bg-[#F5F5F3] py-[80px] md:py-[100px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-[5%]">
        <h2 className="text-[#1A1A1A] text-[24px] md:text-[32px] font-medium tracking-[0.1em] text-center mb-[40px] md:mb-[60px] uppercase">
          SHOP BY MATERIAL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[30px]">
          {materials.map((material) => (
            <a 
              key={material.id} 
              href={material.link} 
              className="group relative block aspect-[2/3] overflow-hidden"
            >
              {/* Image with hover zoom effect */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={material.image} 
                  alt={material.title}
                  className="w-full h-full object-cover transition-transform duration-[800ms] cubic-bezier(0.165, 0.84, 0.44, 1) group-hover:scale-105"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-[30px] md:p-[40px] bg-gradient-to-t from-black/20 to-transparent">
                <div className="v-stack gap-4">
                  <div className="space-y-[10px]">
                    <p className="text-white text-[10px] md:text-[12px] font-bold tracking-[0.15em] uppercase">
                      {material.subtitle}
                    </p>
                    <h3 className="text-white text-[20px] md:text-[24px] font-medium tracking-[0.1em] uppercase">
                      {material.title}
                    </h3>
                  </div>
                  
                  <div className="pt-2">
                    <span className="inline-block bg-white text-[#1A1A1A] text-[10px] md:text-[11px] font-semibold tracking-[0.1em] uppercase px-[20px] py-[10px] transition-all duration-300 hover:bg-[#1A1A1A] hover:text-white">
                      View products
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByMaterial;
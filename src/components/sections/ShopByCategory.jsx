"use client";

import React from 'react';

const categories = [
  {
    title: 'SUITCASES',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/91db50d0353d9d00f2de2da6bb5e0c9b_48564afd-bcaa-4d0-10.png',
    link: '/collections/all-collections-1',
  },
  {
    title: 'BAGS',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/XU_08648_1_25e63296-256c-4f5a-9c96-9e76af89df0b-4.png',
    link: '/collections/bags',
  },
  {
    title: 'ACCESSORIES',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/d2cb1f7a28cb8cf0c7c12c46f2917db7_b14ab76b-1e08-4d7-16.png',
    link: '/collections/accesssories',
  },
];

const ShopByCategory = () => {
  return (
    <section className="bg-[#F5F5F3] py-[60px] md:py-[100px]">
      <div className="container mx-auto px-[5%]">
        <h2 className="text-center text-[24px] md:text-[32px] font-medium tracking-[0.1em] uppercase mb-[40px] md:mb-[60px] text-[#1A1A1A]">
          SHOP BY CATEGORY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[40px]">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href={category.link}
              className="group relative block aspect-[3/4] overflow-hidden"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-[24px] md:p-[40px] bg-gradient-to-t from-black/40 to-transparent">
                <h3 className="text-white text-[16px] md:text-[18px] font-medium tracking-[0.1em] uppercase mb-[16px] md:mb-[24px]">
                  {category.title}
                </h3>
                <div className="inline-block bg-white text-[#1A1A1A] px-[24px] py-[12px] text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 hover:bg-[#1A1A1A] hover:text-white">
                  View products
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;

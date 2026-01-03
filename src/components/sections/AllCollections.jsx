"use client";

import React from 'react';

const products = [
  {
    id: 'treva-silver',
    name: 'TREVA ALUMINUM SUITCASE SILVER',
    price: 'FROM $399.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/91db50d0353d9d00f2de2da6bb5e0c9b_48564afd-bcaa-4d0-10.png',
    href: '/products/treva-silver',
  },
  {
    id: 'treva-gunmetal',
    name: 'TREVA ALUMINUM SUITCASE GUNMETAL',
    price: 'FROM $399.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/90f4169e298a9acebde49e2ee329e31a_65930d9d-ae80-407-11.png',
    href: '/products/treva-gunmetal',
  },
  {
    id: 'carbon-s',
    name: 'CARBON S 2.0 CARBON FIBER SUITCASE BLACK',
    price: 'FROM $885.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/0923S-S_21904-26.png',
    href: '/products/carbon-s-black',
  },
  {
    id: 'carbon-x',
    name: 'CARBON X 2.0 CARBON FIBER SUITCASE BLACK',
    price: 'FROM $885.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/033A2808-0-28.png',
    href: '/products/carbon-x-black',
  },
  {
    id: 'treva-black',
    name: 'TREVA ALUMINUM SUITCASE BLACK',
    price: 'FROM $399.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/91db50d0353d9d00f2de2da6bb5e0c9b_131b6d84-ffd4-488-18.png',
    href: '/products/treva-black',
  },
  {
    id: 'treva-champagne',
    name: 'TREVA ALUMINUM SUITCASE CHAMPAGNE',
    price: 'FROM $399.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/TrekChampagne_size_Carry-on1311b09-5355-41e5-9c85--20.png',
    href: '/products/treva-champagne',
  },
];

const AllCollections = () => {
  return (
    <section className="bg-[#F5F5F3] py-[80px] md:py-[100px] overflow-hidden">
      <div className="container mx-auto px-[5%] max-w-[1440px]">
        <div className="mb-[60px] text-center">
          <h2 className="text-[24px] md:text-[32px] font-medium tracking-[0.1em] text-[#1A1A1A] uppercase mb-0">
            ALL COLLECTIONS
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-[20px] gap-y-[40px]">
          {products.map((product) => (
            <a 
              key={product.id} 
              href={product.href} 
              className="group flex flex-col items-center text-center no-underline"
            >
              <div className="w-full aspect-square relative mb-6 overflow-hidden bg-transparent">
                <div className="relative w-full h-full transition-transform duration-[800ms] group-hover:scale-105">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain p-2 w-full h-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 px-2 max-w-[200px]">
                <h6 className="text-[10px] md:text-[11px] font-semibold tracking-[0.1em] text-[#1A1A1A] uppercase leading-[1.4] min-h-[30px]">
                  {product.name}
                </h6>
                <p className="text-[11px] md:text-[12px] text-[#737373] uppercase tracking-[0.05em]">
                  {product.price}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/collections/all-collections"
            className="inline-block bg-[#1A1A1A] text-[#FFFFFF] px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-transparent hover:text-[#1A1A1A] border border-[#1A1A1A]"
          >
            View all
          </a>
        </div>
      </div>
    </section>
  );
};

export default AllCollections;

import React from 'react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'TREVA ALUMINUM SUITCASE SILVER',
    price: 'FROM $399.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/91db50d0353d9d00f2de2da6bb5e0c9b_48564afd-bcaa-4d0-10.png',
  },
  {
    id: 2,
    name: 'TREVA ALUMINUM SUITCASE GUNMETAL',
    price: 'FROM $399.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/90f4169e298a9acebde49e2ee329e31a_65930d9d-ae80-407-11.png',
  },
  {
    id: 3,
    name: 'CARBON S 2.0 CARBON FIBER SUITCASE BLACK',
    price: 'FROM $885.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/91db50d0353d9d00f2de2da6bb5e0c9b_2d683158-0f4a-465-12.png',
  },
  {
    id: 4,
    name: 'CARBON X 2.0 CARBON FIBER SUITCASE BLACK',
    price: 'FROM $885.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/90f4169e298a9acebde49e2ee329e31a_a1189c2c-2644-490-13.png',
  },
  {
    id: 5,
    name: 'TREVA ALUMINUM SUITCASE BLACK',
    price: 'FROM $399.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/481044c5d5650dfb2a22a7cd50591512_92d12602-f8ff-4ac-14.png',
  },
  {
    id: 6,
    name: 'TREVA ALUMINUM SUITCASE CHAMPAGNE',
    price: 'FROM $399.00 USD',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/91db50d0353d9d00f2de2da6bb5e0c9b_48564afd-bcaa-4d0-10.png', // Fallback as champagne wasn't unique in section assets
  },
];

const ProductCarousel = () => {
  return (
    <section className="bg-[#F5F5F5] py-20 px-5 md:px-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto overflow-hidden">
        <h2 className="text-center text-[24px] tracking-[0.2em] font-medium uppercase mb-12 text-[#000000]">
          All Collections
        </h2>

        <div className="flex gap-4 md:gap-8 overflow-x-auto pb-8 snap-x no-scrollbar">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex-none w-[200px] md:w-[calc(16.666%-1.5rem)] snap-start group"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 200px, 240px"
                />
              </div>
              
              <div className="flex flex-col items-center text-center px-2">
                <h3 className="product-card-title text-[10px] leading-[1.4] mb-2 min-h-[28px]">
                  {product.name}
                </h3>
                <span className="product-card-price text-[11px] font-semibold text-[#000000]">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="/collections/all-collections-1"
            className="inline-block bg-[#1A1A1A] text-white text-[10px] font-bold tracking-[0.15em] uppercase px-8 py-3.5 hover:bg-[#333333] transition-colors duration-200"
          >
            View all
          </a>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProductCarousel;
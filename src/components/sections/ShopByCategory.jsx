import React from 'react';
import Image from 'next/image';

const CategoryCard = ({ title, imageSrc, link, altText }) => {
  return (
    <a 
      href={link} 
      className="group relative block overflow-hidden aspect-[4/5] sm:aspect-[3/4] md:aspect-auto md:h-[700px] w-full"
    >
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      
      <div className="absolute bottom-10 left-10 z-10">
        <h3 className="text-white text-[14px] md:text-[18px] font-bold tracking-[0.15em] uppercase mb-4 drop-shadow-sm">
          {title}
        </h3>
        <span className="inline-flex items-center justify-center bg-white text-black px-6 py-3 text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-gray-100 transition-colors duration-200">
          View products
        </span>
      </div>
    </a>
  );
};

const ShopByCategory = () => {
  const categories = [
    {
      title: "SUITCASES",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/033A2808-0-28.png",
      link: "/collections/all-collections-1",
      altText: "Suitcases category featuring aluminum luggage"
    },
    {
      title: "Bags",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/02_2198f17c-ceb4-4f1b-9e39-ef3bc6a83c92-29.png",
      link: "/collections/bags",
      altText: "Bags category featuring premium weekenders"
    },
    {
      title: "Accessories",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/1_5_7465-30.png",
      link: "/collections/accesssories",
      altText: "Accessories category featuring wallets and tags"
    }
  ];

  return (
    <section className="bg-[#F5F5F5] py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 max-w-[1440px]">
        <div className="mb-12 md:mb-16">
          <h2 className="text-center text-[24px] md:text-[28px] lg:text-[32px] font-semibold tracking-[0.1em] uppercase text-black">
            SHOP BY CATEGORY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              title={category.title}
              imageSrc={category.imageSrc}
              link={category.link}
              altText={category.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;

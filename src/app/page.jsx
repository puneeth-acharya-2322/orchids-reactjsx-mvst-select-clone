"use client";

import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Header from "@/components/sections/Header";
import HeroSlider from "@/components/sections/HeroSlider";
import ProductCarousel from "@/components/sections/ProductCarousel";
import ShopByMaterial from "@/components/sections/ShopByMaterial";
import ShopByCategory from "@/components/sections/ShopByCategory";
import InstagramFeed from "@/components/sections/InstagramFeed";
import ServiceHighlights from "@/components/sections/ServiceHighlights";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <ProductCarousel />
        <ShopByMaterial />
        <ShopByCategory />
        <InstagramFeed />
        <ServiceHighlights />
      </main>
      <Footer />
    </div>
  );
}

"use client";

import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import AllCollections from "@/components/sections/AllCollections";
import ScrollingMarquee from "@/components/sections/ScrollingMarquee";
import ShopByMaterial from "@/components/sections/ShopByMaterial";
import ShopByCategory from "@/components/sections/ShopByCategory";
import InstagramCarousel from "@/components/sections/InstagramCarousel";
import TrustSignals from "@/components/sections/TrustSignals";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <AllCollections />
        <ScrollingMarquee />
        <ShopByMaterial />
        <ShopByCategory />
        <InstagramCarousel />
        <TrustSignals />
      </main>
      <Footer />
    </div>
  );
}

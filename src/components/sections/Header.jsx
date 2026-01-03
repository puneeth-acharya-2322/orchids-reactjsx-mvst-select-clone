"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search, ShoppingCart, User, ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      title: "Suitcases",
      links: [
        {
          category: "Aluminum",
          href: "/collections/aluminum-collections",
          subLinks: [
            { name: "TREVA", href: "/collections/treva" },
            { name: "SPACE", href: "/collections/space-aluminum-luggage" },
          ],
        },
        {
          category: "Carbon Fiber",
          href: "/collections/carbon-fiber-collection",
          subLinks: [
            { name: "CARBON S", href: "/collections/carbon-s-1" },
            { name: "CARBON X", href: "/collections/carbon-x-1" },
          ],
        },
        {
          category: "Polycarbonate",
          href: "/collections/polycarbonate-collections",
          subLinks: [
            { name: "ESSENTIAL", href: "/collections/polycarbonate-collections" },
          ],
        },
      ],
      promos: [
        {
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/XU_03092_1-2.png",
          title: "CARBON X 2.0",
          href: "/collections/carbon-x-1",
        },
        {
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/Y4A6857-2-4_5-3.jpg",
          title: "Carbon S 2.0",
          href: "/collections/carbon-s-1",
        },
      ],
    },
    {
      title: "Bags",
      links: [
        {
          category: "Bags",
          href: "/collections/bags",
          subLinks: [
            { name: "Duffle Bag Garment Bag 2 in 1", href: "/products/garment-duffel-bag" },
            { name: "Duffle Bag", href: "/products/duffle-bag" },
          ],
        },
      ],
      promos: [
        {
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/XU_08648_1_25e63296-256c-4f5a-9c96-9e76af89df0b-4.png",
          title: "DUFFLE BAG",
          href: "https://mvstselect.com/products/duffle-bag",
        },
      ],
    },
    {
      title: "Accessories",
      links: [
        {
          category: "Accessories",
          href: "/collections/accesssories",
          subLinks: [
            { name: "RFID-Blocking Alcantara Slim Wallet", href: "/products/slim-wallet" },
            { name: "Alcantara Luggage Tag", href: "/products/alcantara-luggage-tag" },
            { name: "Alcantara Keychain Tag", href: "/products/alcantara-keychain-tag" },
            { name: "The Toiletry Bag", href: "/products/the-toiletry-bag" },
            { name: "Premium Luggage Cover", href: "/products/luggage-cover-for-carbon-fiber-collections" },
          ],
        },
      ],
    },
    { title: "M Rewards", href: "#smile-home" },
    {
      title: "LAST CHANCE",
      links: [
        {
          category: "TREK",
          href: "/collections/trek-aluminum-suitcase",
          subLinks: [],
        },
      ],
      promos: [
        {
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/Y-jaydonguiler-Img-14-Unlimited-5.jpg",
          title: "Final TREK Clearance",
          href: "/collections/trek-aluminum-suitcase",
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-[#1A1A1A] text-white py-[10px] text-center overflow-hidden">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] whitespace-nowrap animate-marquee">
          FREE SHIPPING & RETURNS for all Contiguous us and select Canada & Europe orders
        </p>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-5 md:px-10 h-[70px] flex items-center justify-between">
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6 text-black" />
          </button>

          <div className="flex-shrink-0">
            <a href="/" className="block">
              <span className="sr-only">MVST</span>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/500px_png02_725cc26e-d0a6-421d-b993-1435983ccf06-1.png"
                alt="MVST Logo"
                width={120}
                height={37}
                className="h-auto w-[120px]"
                priority
              />
            </a>
          </div>

          <nav className="hidden md:flex flex-grow justify-center">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(item.title)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <a
                    href={item.href || "#"}
                    className="nav-link flex items-center gap-1 py-6 hover:opacity-100 transition-opacity"
                    style={{ fontSize: "12px", fontWeight: 700 }}
                  >
                    {item.title}
                  </a>

                  {item.links && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-[1440px] bg-white border-t border-border p-10 grid grid-cols-12 gap-8 shadow-xl transition-all duration-200 transform origin-top ${
                        activeMenu === item.title
                          ? "opacity-100 scale-y-100 pointer-events-auto"
                          : "opacity-0 scale-y-95 pointer-events-none"
                      }`}
                    >
                      <div className="col-span-8 grid grid-cols-3 gap-8">
                        {item.links.map((col) => (
                          <div key={col.category} className="space-y-5">
                            <a
                              href={col.href}
                              className="block h6 mb-4 hover:underline"
                            >
                              {col.category}
                            </a>
                            <ul className="space-y-3">
                              {col.subLinks.map((sub) => (
                                <li key={sub.name}>
                                  <a
                                    href={sub.href}
                                    className="text-[13px] text-[#6A6A6A] hover:text-black transition-colors"
                                  >
                                    {sub.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {item.promos && (
                        <div className="col-span-4 flex gap-4">
                          {item.promos.map((promo, idx) => (
                            <a
                              key={idx}
                              href={promo.href}
                              className="group flex-1 text-center"
                            >
                              <div className="overflow-hidden mb-4">
                                <img
                                  src={promo.image}
                                  alt={promo.title}
                                  className="w-full h-auto aspect-[4/5] object-cover duration-500 group-hover:scale-105"
                                />
                              </div>
                              <p className="h6 text-[10px] tracking-[0.15em]">
                                {promo.title}
                              </p>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden lg:flex items-center gap-1 cursor-pointer group">
              <img
                src="//cdn.shopify.com/static/images/flags/us.svg?format=jpg&width=60"
                alt="US"
                className="w-4 h-3 object-cover"
              />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6A6A6A] group-hover:text-black">
                USD $
              </span>
              <ChevronDown className="w-3 h-3 text-[#6A6A6A]" />
            </div>

            <div className="flex items-center gap-4">
              <button className="p-1 hover:text-[#6A6A6A] transition-colors">
                <User className="w-[18px] h-[18px]" />
              </button>
              <button className="p-1 hover:text-[#6A6A6A] transition-colors">
                <Search className="w-[18px] h-[18px]" />
              </button>
              <button className="p-1 relative hover:text-[#6A6A6A] transition-colors">
                <ShoppingCart className="w-[18px] h-[18px]" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] flex items-center justify-center w-3.5 h-3.5 rounded-full">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
            display: inline-block;
          }
          .h6 {
            font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: #000000;
          }
          .nav-link {
             font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
          }
        `}</style>
      </header>
    </>
  );
};

export default Header;

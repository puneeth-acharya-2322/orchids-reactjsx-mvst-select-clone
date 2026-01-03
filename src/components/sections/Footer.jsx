"use client";

import React from 'react';
import { Facebook, Instagram, Youtube, Music2, ChevronDown } from 'lucide-react';

const Footer = () => {
  const shopLinks = [
    { label: 'Luggage', href: '/collections/all-collections-1' },
    { label: 'Bags', href: '/collections/bags' },
    { label: 'Accessories', href: '/collections/accesssories' },
    { label: 'Corporate Gifting', href: '#' },
  ];

  const aboutLinks = [
    { label: 'Our Story', href: '#' },
    { label: 'M Rewards', href: '#smile-home' },
    { label: 'Press', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Collaboration', href: '#' },
  ];

  const helpLinks = [
    { label: 'Contact Us', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Shipping', href: '#' },
    { label: 'Returns & Exchanges', href: '#' },
    { label: 'Warranty Policy', href: '#' },
    { label: 'Do not sell my personal information', href: '#' },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white pt-[5rem] pb-[2rem]">
      <div className="container mx-auto px-[5%] max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-x-8 mb-[4rem]">
          <div className="lg:col-span-3">
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase mb-[1.5rem]">ABOUT</h4>
            <p className="text-[#A3A3A3] text-[13px] leading-[1.6] mb-6">
              A premium luggage company.
            </p>
            <div className="bg-[#5C4AFF] rounded-full px-4 py-2 inline-flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
              <span className="text-[12px] font-bold">Follow on shop</span>
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#5C4AFF">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase mb-[1.5rem]">SHOP</h4>
            <ul className="space-y-[0.75rem]">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#A3A3A3] text-[13px] hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase mb-[1.5rem]">ABOUT</h4>
            <ul className="space-y-[0.75rem]">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#A3A3A3] text-[13px] hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase mb-[1.5rem]">HELP</h4>
            <ul className="space-y-[0.75rem]">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#A3A3A3] text-[13px] hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase mb-[1.5rem]">NEWSLETTER</h4>
            <p className="text-[#A3A3A3] text-[13px] leading-[1.6] mb-6">
              Sign up to our newsletter to receive exclusive offers.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full bg-transparent border border-[#333333] text-white py-[12px] px-[16px] text-[13px] outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-white text-black py-[12px] text-[12px] font-bold tracking-[0.15em] uppercase hover:bg-[#1A1A1A] hover:text-white hover:border hover:border-white transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex gap-6 pt-8 border-t border-[#333333] mb-8">
          <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors duration-300">
            <Facebook size={18} />
          </a>
          <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors duration-300">
            <Instagram size={18} />
          </a>
          <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors duration-300">
            <Music2 size={18} />
          </a>
          <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors duration-300">
            <Youtube size={18} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 cursor-pointer group">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/svgs/us-1.svg" 
                alt="US" 
                className="w-4 h-3 opacity-80"
              />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#A3A3A3] group-hover:text-white transition-colors">
                United States (USD $)
              </span>
              <ChevronDown size={12} className="text-[#A3A3A3]" />
            </div>

            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#A3A3A3] group-hover:text-white transition-colors">
                English
              </span>
              <ChevronDown size={12} className="text-[#A3A3A3]" />
            </div>
            
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#A3A3A3]">
              © 2026 - MVST
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

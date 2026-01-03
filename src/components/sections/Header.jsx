import React from 'react';
import Image from 'next/image';
import { Search, User, ShoppingBag, ChevronDown, Menu } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Announcement Bar */}
      <div className="w-full bg-[#000000] text-[#FFFFFF] py-[8px] px-4 text-center overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex justify-center items-center relative">
          <div className="flex items-center gap-2 absolute left-0 md:flex hidden">
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1">
              Accessibility
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="w-3 h-3" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </span>
          </div>
          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase">
            FREE SHIPPING & RETURNS for all Contiguous us and select Canada & Europe orders
          </p>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="w-full bg-[#F5F5F3] border-b border-[#E5E5E5] sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-[5%] h-[80px] flex items-center justify-between">
          
          {/* Mobile Menu Icon */}
          <button className="md:hidden p-2 -ml-2">
            <Menu className="w-6 h-6 text-[#1A1A1A]" />
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <span className="sr-only">MVST</span>
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/images/500px_png02_725cc26e-d0a6-421d-b993-1435983ccf06-1.png" 
                alt="MVST Logo" 
                width={125} 
                height={39}
                className="h-[39px] w-auto object-contain"
              />
            </a>
          </div>

          {/* Primary Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8 mx-4">
            <div className="group relative">
              <a href="/collections/all-collections-1" className="nav-link font-display text-[13px] font-medium tracking-[0.1em] uppercase text-[#1A1A1A] hover:opacity-70 transition-opacity cursor-pointer">
                Suitcases
              </a>
              {/* Mega Menu Placeholder Style - Logic would go here for hover states */}
            </div>
            <div className="group">
              <a href="/collections/bags" className="nav-link font-display text-[13px] font-medium tracking-[0.1em] uppercase text-[#1A1A1A] hover:opacity-70 transition-opacity">
                Bags
              </a>
            </div>
            <div className="group">
              <a href="/collections/accesssories" className="nav-link font-display text-[13px] font-medium tracking-[0.1em] uppercase text-[#1A1A1A] hover:opacity-70 transition-opacity">
                Accessories
              </a>
            </div>
            <div>
              <a href="#smile-home" className="nav-link font-display text-[13px] font-medium tracking-[0.1em] uppercase text-[#1A1A1A] hover:opacity-70 transition-opacity">
                M Rewards
              </a>
            </div>
            <div>
              <a href="/collections/trek-aluminum-suitcase" className="nav-link font-display text-[13px] font-medium tracking-[0.1em] uppercase text-[#1A1A1A] hover:opacity-70 transition-opacity">
                LAST CHANCE
              </a>
            </div>
          </nav>

          {/* Secondary Navigation */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* Country Selector */}
            <div className="hidden lg:flex items-center gap-1.5 cursor-pointer hover:opacity-70 transition-opacity">
              <img 
                src="//cdn.shopify.com/static/images/flags/us.svg?format=jpg&width=60" 
                alt="US Flag" 
                width={20} 
                height={15} 
                className="object-cover"
              />
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#1A1A1A]">USD $</span>
              <ChevronDown className="w-3 h-3 text-[#1A1A1A]" />
            </div>

            {/* Language Selector */}
            <div className="hidden lg:flex items-center gap-1.5 cursor-pointer hover:opacity-70 transition-opacity">
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#1A1A1A]">English</span>
              <ChevronDown className="w-3 h-3 text-[#1A1A1A]" />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4 sm:gap-5">
              <a href="/account/login" className="text-[#1A1A1A] hover:opacity-70 transition-opacity">
                <User className="w-[18px] h-[18px]" />
                <span className="sr-only">Account</span>
              </a>
              <button className="text-[#1A1A1A] hover:opacity-70 transition-opacity">
                <Search className="w-[18px] h-[18px]" />
                <span className="sr-only">Search</span>
              </button>
              <a href="/cart" className="text-[#1A1A1A] hover:opacity-70 transition-opacity relative">
                <ShoppingBag className="w-[18px] h-[18px]" />
                <span className="sr-only">Cart</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Twitter, ChevronDown } from 'lucide-react';

/**
 * Footer component for MVST Select.
 * Focuses on a high-end minimalist luxury aesthetic with a black background and white/grey text.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white pt-[60px] pb-5">
      <div className="container mx-auto px-5 lg:px-10 max-w-[1440px]">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* About Column */}
          <div className="lg:col-span-1">
            <h6 className="footer-heading mb-6">About</h6>
            <p className="footer-link text-[13px] leading-relaxed mb-6">
              A premium luggage company.
            </p>
            <div className="mt-4">
              <a 
                href="#" 
                className="inline-flex items-center bg-[#5865F2] rounded-[4px] px-3 py-1.5 text-xs font-semibold gap-2 transition-transform hover:scale-105"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                    <span className="text-[#5865F2] text-[10px] leading-none">❤</span>
                </div>
                Follow on shop
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="lg:col-span-1">
            <h6 className="footer-heading mb-6">Shop</h6>
            <nav className="flex flex-col gap-3">
              <a href="/collections/luggage" className="footer-link">Luggage</a>
              <a href="/collections/bags" className="footer-link">Bags</a>
              <a href="/collections/accessories" className="footer-link">Accessories</a>
              <a href="/pages/corporate-gifting" className="footer-link">Corporate Gifting</a>
            </nav>
          </div>

          {/* About/Info Column */}
          <div className="lg:col-span-1">
            <h6 className="footer-heading mb-6">About</h6>
            <nav className="flex flex-col gap-3">
              <a href="/pages/our-story" className="footer-link">Our Story</a>
              <a href="/pages/m-rewards" className="footer-link">M Rewards</a>
              <a href="/pages/press" className="footer-link">Press</a>
              <a href="/pages/terms-of-service" className="footer-link">Terms of Service</a>
              <a href="/pages/privacy-policy" className="footer-link">Privacy Policy</a>
              <a href="/pages/collaboration" className="footer-link">Collaboration</a>
            </nav>
          </div>

          {/* Help Column */}
          <div className="lg:col-span-1">
            <h6 className="footer-heading mb-6">Help</h6>
            <nav className="flex flex-col gap-3">
              <a href="/pages/contact-us" className="footer-link">Contact Us</a>
              <a href="/pages/faq" className="footer-link">FAQ</a>
              <a href="/pages/shipping" className="footer-link">Shipping</a>
              <a href="/pages/returns-exchanges" className="footer-link">Returns & Exchanges</a>
              <a href="/pages/warranty-policy" className="footer-link">Warranty Policy</a>
              <a href="/pages/do-not-sell-my-info" className="footer-link">Do not sell my personal information</a>
            </nav>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <h6 className="footer-heading mb-6">Newsletter</h6>
            <p className="footer-link mb-6">
              Sign up to our newsletter to receive exclusive offers.
            </p>
            <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative border-b border-[#A3A3A3] pb-2 mb-4">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="bg-transparent w-full text-[13px] text-white placeholder-[#A3A3A3] outline-none py-1"
                />
              </div>
              <button 
                type="submit" 
                className="btn-white w-full text-[11px] py-3 font-bold tracking-[0.1em] uppercase transition-colors hover:bg-gray-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Sub-Footer Divider */}
        <hr className="border-[#262626] mb-10" />

        {/* Sub-Footer Content */}
        <div className="flex flex-col gap-8 md:gap-0">
          {/* Social Icons Row */}
          <div className="flex items-center gap-6 mb-8 lg:mb-10">
            <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors" aria-label="Facebook">
              <Facebook size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors" aria-label="Pinterest">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-70 hover:opacity-100 transition-opacity">
                    <path d="M12.289 2C6.617 2 2 6.617 2 12.289c0 4.305 2.605 7.942 6.328 9.531-.086-.789-.164-1.992.031-2.852.176-.773 1.133-4.805 1.133-4.805s-.289-.578-.289-1.43c0-1.344.781-2.344 1.742-2.344.82 0 1.219.617 1.219 1.352 0 .828-.527 2.062-.801 3.203-.227.961.484 1.742 1.43 1.742 1.719 0 3.047-1.812 3.047-4.43 0-2.312-1.664-3.93-4.031-3.93-2.742 0-4.352 2.062-4.352 4.187 0 .828.32 1.719.719 2.195a.301.301 0 0 1 .07.297c-.078.336-.266 1.078-.305 1.227a.235.235 0 0 1-.219.148c-1.445-.672-2.344-2.781-2.344-4.477 0-3.648 2.656-7 7.648-7 4.008 0 7.133 2.859 7.133 6.68 0 3.984-2.516 7.195-6.008 7.195-1.172 0-2.273-.609-2.648-1.328 0 0-.578 2.203-.719 2.766-.266.992-.984 2.234-1.469 3.023 1.156.344 2.383.531 3.656.531 6.672 0 12.289-5.617 12.289-12.289C24.578 6.617 19.961 2 12.289 2z"/>
                </svg>
            </a>
            <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors" aria-label="YouTube">
              <Youtube size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors" aria-label="TikTok">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-70 hover:opacity-100 transition-opacity">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.8.12-.9.38-1.6 1.12-1.87 2.1-.09.38-.07.78-.07 1.17.02.58.14 1.17.36 1.71.53 1.19 1.68 2.1 2.9 2.33 1.34.28 2.8-.23 3.73-1.29.58-.63.85-1.48.88-2.33.02-3.32-.01-6.64.01-9.96z"/>
                </svg>
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-4 pb-8">
            {/* Country/Language Selectors */}
            <div className="flex flex-wrap items-center gap-6">
              <button className="flex items-center gap-2 group">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8191ec80-d426-4083-83a6-e287368d4486-mvstselect-com/assets/svgs/us-1.svg" 
                  alt="US Flag" 
                  width={18} 
                  height={13} 
                  className="rounded-sm"
                />
                <span className="text-[11px] font-bold tracking-widest text-[#A3A3A3] group-hover:text-white transition-colors uppercase">
                  United States (USD $)
                </span>
                <ChevronDown size={12} className="text-[#A3A3A3] group-hover:text-white" />
              </button>

              <button className="flex items-center gap-2 group">
                <span className="text-[11px] font-bold tracking-widest text-[#A3A3A3] group-hover:text-white transition-colors uppercase">
                  English
                </span>
                <ChevronDown size={12} className="text-[#A3A3A3] group-hover:text-white" />
              </button>
            </div>

            {/* Copyright */}
            <div className="text-[11px] font-bold tracking-widest text-[#A3A3A3] uppercase md:absolute md:left-1/2 md:-translate-x-1/2">
              © {currentYear} - MVST
            </div>

            {/* Payment Icons */}
            <div className="flex flex-wrap items-center gap-2.5">
              {[
                'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b3365737085f31bd5989f3cd9288e3ad386526136df2013f9f6eeb0c69.svg',
                'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/apple_pay-6666a8dca99db0972691656828859942a08f51df31d871982b64d603a113f9e9.svg',
                'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/diners_club-72782480629847755c9216997033877995f5fd0d15e47192ea401777d06637e1.svg',
                'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/discover-884b2566ec484643f8edabb9434851179669567990c74fb9f38f7119106093ca.svg',
                'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/google_pay-f7481f33777f9862804f32c027d75dc6e174415fa9d784196728eb7cb6b986b2.svg',
                'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc23f6634c034739276495d4f3b6a953b06de8ae2c34bc0de01833c8b9.svg',
                'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/paypal-17367c0065aae25e2277d7042858f0003058b88d2d6bc216259ce137da93bf6f.svg',
                'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/shop_pay-636c74ad6913693e545806669894f06bc91f2115e581e2858b991da714777a8b.svg',
                'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-433b680efe57235dc98030239634861c4704b44983058f918809eccdfc959737.svg'
              ].map((icon, idx) => (
                <div key={idx} className="bg-white rounded-[2px] w-[35px] h-[22px] flex items-center justify-center pointer-events-none">
                   <img src={icon} alt="Payment Method" className="w-[28px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Trigger (Optional UI Polish based on screenshots) */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
          <div className="w-5 h-5 bg-[#1A1A1A] rounded-full flex items-center justify-center">
            <div className="w-2.5 h-1 bg-white rounded-full"></div>
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
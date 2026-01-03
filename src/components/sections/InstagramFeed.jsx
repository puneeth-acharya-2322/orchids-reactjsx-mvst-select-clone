import React from 'react';
import Image from 'next/image';

const InstagramFeed = () => {
  // Asset data from provided lists
  const assets = [
    {
      type: 'video',
      url: "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQP7Op8f6daGk2o2NMuBzrEMkKZKDxEigb82iKky7lT5MJng5oEvvh-v_6vPUGT_550MfrJwseBlrVnk7eaBMQu3LiDLjTgX4Px3rF8.mp4?_nc_cat=102&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=gyWyh-z7ZSQQ7kNvwFYRzSY&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuOTYwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NzY0MTE1MTQ5NTM0NTAwLCJhc3NldF9hZ2VfZGF5cyI6MTQzLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NDMsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=2u_is-7Tn_cWKbFhDC-Erg&edm=ANo9K5cEAAAA&_nc_zt=28&vs=ce62a8bc56c0d5b6&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9DMTQ2OTA5RUREQzRCMTFBN0I1Rjg1ODJBQTQwMThCRF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRTQ3bmhfLXNHXzlXZndCQUk3b0dsdnhERlJIYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmyNTxwK292wIVAigCQzMsF0BF4EGJN0vHGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_tpa=Q5bMBQFDCnKtttXbxE2X3Lhcv_hPB16KkLYb0e9xYF8tPES2GHQykuUbDQfb9CoazlaeDja3VqKOSwua&oh=00_Afq9AyjAmLysJYiwOJk8rioPBQV1B9cVq2xOBMMEFfXbvg&oe=695AA347",
    },
    {
      type: 'image',
      url: "https://mvstselect.com/cdn/shop/files/Y-jaydonguiler-Img-14-Unlimited.jpg?v=1743235036&width=3912",
      alt: "MVST select aluminum suitcase in car"
    },
    {
      type: 'image',
      url: "https://mvstselect.com/cdn/shop/files/Y4A6857-2-4_5.jpg?v=1755853426&width=2000",
      alt: "MVST select carbon fiber suitcase"
    },
    {
      type: 'video',
      url: "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQNAAWYnE0P8HlVHywjGGGz2feQFTpyhmRo1wgtqqNcwu3WsAMAgFnmegClco5UcBq7iTv3j23SI7_uwCvxUzQVzn1HIxMpeOHKhgWE.mp4?_nc_cat=106&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=Xfz4TO76ep4Q7kNvwGERJjr&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTYzMjU0NTQ0NzQwNzk3NiwiYXNzZXRfYWdlX2RheXMiOjE4NCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjMzLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=c2d4abe07a9897c4&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xODQyMjZBMTIzNEUwNjM0NTU2RUVCQzJDQkEwOEVCRV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQzAydEI3YXEwNTh3UWtDQURuakRJcXZEYlJEYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm0MXHt9Oy5gUVAigCQzMsF0BA8AAAAAAAGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=4ACaDdYjg1CPHXJYLpMAog&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQHsZvvQzIVxwwPoK8btBFaUKlLQ1OOZuouf1VQPuWXiwxZtCwC6niaWarWOoca49pxidzyG94eh&oh=00_Afouf5-QLAiQi8Ti4p_9HNCQqaOO5t2PpcOjFeVvVaDuYg&oe=695AB30B",
    },
    {
      type: 'image',
      url: "https://mvstselect.com/cdn/shop/files/XU_03092_1.png?v=1743388283&width=2848",
      alt: "Travel lifestyle with MVST"
    },
    {
      type: 'image',
      url: "https://mvstselect.com/cdn/shop/files/Y-vadymbattenko-Img-7-Unlimited_fc9d5d19-0424-41fc-870c-ae39250e8f64.jpg?v=1762134581&width=3000",
      alt: "MVST luggage detail"
    },
  ];

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="mb-10 text-center">
        <h2 className="text-[24px] md:text-[28px] font-semibold tracking-[0.1em] text-[#000000] uppercase mb-12">
          MVST on Instagram
        </h2>
      </div>

      {/* Horizontal Scrollable Feed */}
      <div className="relative w-full overflow-hidden">
        <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 md:px-0 gap-2 md:gap-4 no-scrollbar">
          {assets.map((item, index) => (
            <div 
              key={index} 
              className="flex-none w-[70vw] md:w-[24.5vw] lg:w-[16.6vw] aspect-square relative bg-white overflow-hidden group snap-start"
            >
              {item.type === 'video' ? (
                <video
                  src={item.url}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <Image
                  src={item.url}
                  alt={item.alt || "Instagram post"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 70vw, (max-width: 1024px) 25vw, 17vw"
                />
              )}
              
              {/* Instagram Icon Overlay on Hover */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <svg 
                  className="w-8 h-8 text-white drop-shadow-md" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="container mx-auto mt-24 px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Free Returns */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5">
                <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C9.5 2 7.2 2.9 5.5 4.5M2 4V9H7" />
              </svg>
            </div>
            <h6 className="text-[12px] font-bold tracking-[0.15em] uppercase mb-4 text-[#000000]">
              Free Returns
            </h6>
            <p className="text-[13px] leading-[1.6] text-[#6A6A6A] max-w-[280px]">
              If you don't love it, send it back for a full refund and we'll cover the return shipping.
            </p>
          </div>

          {/* Free Shipping */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.2">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <h6 className="text-[12px] font-bold tracking-[0.15em] uppercase mb-4 text-[#000000]">
              Free Shipping
            </h6>
            <p className="text-[13px] leading-[1.6] text-[#6A6A6A] max-w-[280px]">
              Enjoy free shipping on all orders to the contiguous US, Canada and most European countries.
            </p>
          </div>

          {/* Lifetime Warranty */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h6 className="text-[12px] font-bold tracking-[0.15em] uppercase mb-4 text-[#000000]">
              Lifetime warranty
            </h6>
            <p className="text-[13px] leading-[1.6] text-[#6A6A6A] max-w-[280px]">
              Every suitcase comes with a limited lifetime warranty.
            </p>
          </div>
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

export default InstagramFeed;
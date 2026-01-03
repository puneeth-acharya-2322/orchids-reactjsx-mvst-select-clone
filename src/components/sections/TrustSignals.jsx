import React from 'react';
import { RotateCcw, Truck, ShieldCheck } from 'lucide-react';

const TrustSignals = () => {
  const signalData = [
    {
      icon: <RotateCcw size={24} strokeWidth={1.2} />,
      title: "Free Returns",
      description: "If you don't love it, send it back for a full refund and we'll cover the return shipping."
    },
    {
      icon: <Truck size={24} strokeWidth={1.2} />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders to the contiguous US, Canada and most European countries."
    },
    {
      icon: <ShieldCheck size={24} strokeWidth={1.2} />,
      title: "Lifetime warranty",
      description: "Every suitcase comes with a limited lifetime warranty."
    }
  ];

  return (
    <section className="bg-[#F5F5F3] py-[80px] md:py-[100px] border-t border-[#E5E5E5]">
      <div className="container mx-auto px-[5%] max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {signalData.map((signal, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 text-[#1A1A1A]">
                {/* Icons match the visual weight and style from the screenshots */}
                <div className="w-10 h-10 flex items-center justify-center">
                  {signal.icon}
                </div>
              </div>
              
              <h3 className="font-display text-[14px] font-[600] tracking-[0.15em] uppercase mb-4 text-[#1A1A1A]">
                {signal.title}
              </h3>
              
              <p className="font-sans text-[14px] leading-[1.6] text-[#1A1A1A] max-w-[320px] mx-auto opacity-90">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
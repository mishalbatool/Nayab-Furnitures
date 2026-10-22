import React from "react";
import { WHY_CHOOSE_US } from "../data/furnitureData";
import { Palette, Hammer, Armchair, HeartHandshake } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <Palette key="1" className="w-6 h-6 text-[#8c6a2a]" />,
    <Hammer key="2" className="w-6 h-6 text-[#8c6a2a]" />,
    <Armchair key="3" className="w-6 h-6 text-[#8c6a2a]" />,
    <HeartHandshake key="4" className="w-6 h-6 text-[#8c6a2a]" />
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#faf8f5] text-[#2c1e18] border-t border-[#2c1e18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#8c6a2a] mb-2.5">
            Our Commitments
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1f140e] tracking-tight leading-tight [text-wrap:balance]">
            Why Choose Nayab Furnitures?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#543b2f] font-light leading-relaxed">
            Rooted in Chiniot’s respected furniture tradition, dedicated to honest woodwork and timeless home aesthetics.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col p-7 bg-[#f5f0e8] rounded-xl border border-[#2c1e18]/8 hover:border-[#c5a869]/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#faf8f5] flex items-center justify-center mb-6 shadow-xs border border-[#2c1e18]/5">
                {icons[index]}
              </div>

              {/* Number indicator */}
              <div className="font-mono text-xs text-[#8c6a2a] mb-2 font-medium">
                0{index + 1}.
              </div>

              <h3 className="font-serif text-xl font-medium text-[#1f140e] mb-3">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#543b2f] font-light leading-relaxed flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

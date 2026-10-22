import React from "react";
import { MessageCircle, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "../data/furnitureData";

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const whatsappHref = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    BUSINESS_INFO.defaultWhatsAppMessage
  )}`;

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#1a120c]">
      {/* Background Image with Measured Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_luxury_furniture_living_1792674977567.jpg"
          alt="Nayab Furnitures luxury living room showroom in Chiniot"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient scrim for crisp contrast and warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140d09]/95 via-[#1a120c]/70 to-[#140d09]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#140d09_90%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        {/* Location & Brand Origin Kicker (Clean unboxed typography) */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-widest uppercase text-[#d4b472] mb-5">
          <MapPin className="w-3.5 h-3.5" />
          <span>Chiniot Road, Chiniot, Punjab, Pakistan</span>
          <span aria-hidden="true">·</span>
          <span>Artisan Showroom</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#faf8f5] tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
          Transform Your Home with Timeless Furniture
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#f5f0e8]/85 font-light leading-relaxed mb-10 [text-wrap:balance]">
          Discover beautiful furniture designs that bring comfort, elegance, and lasting style to your living space.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-14">
          <button
            type="button"
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#c5a869] text-[#140d09] text-sm font-semibold tracking-wide hover:bg-[#d4b472] transition-colors shadow-lg whitespace-nowrap cursor-pointer"
          >
            <span>Explore Our Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#25D366] text-white text-sm font-medium hover:bg-[#20ba59] transition-colors shadow-lg whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contact Us on WhatsApp</span>
          </a>
        </div>

        {/* Trust Markers Bar */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#faf8f5]/80">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#c5a869]" />
            <span>Chiniot Woodcraft Heritage</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a869]" />
            <span>Pure Seasoned Hardwoods</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a869]" />
            <span>Direct Showroom Assistance</span>
          </div>
        </div>
      </div>
    </section>
  );
};

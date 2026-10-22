import React from "react";
import { Star, ExternalLink, MapPin, CheckCircle, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "../data/furnitureData";

export const Reviews: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#f5f0e8] text-[#2c1e18] border-t border-[#2c1e18]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf8f5] rounded-2xl p-8 sm:p-12 border border-[#2c1e18]/10 shadow-xs text-center">
          {/* Header Tag */}
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#8c6a2a] mb-3">
            <MessageSquare className="w-4 h-4" />
            <span>Customer Feedback & Ratings</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1f140e] tracking-tight leading-tight mb-4">
            Trusted by Homeowners & Interior Enthusiasts
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#543b2f] font-light leading-relaxed mb-8">
            We value genuine client satisfaction. Visit our official Google listing to read real customer impressions, explore visitor photos, or share your own showroom experience.
          </p>

          {/* Scoreboard Card (Honest framing with demo label) */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 p-6 rounded-xl bg-[#f5f0e8] border border-[#2c1e18]/10 mb-8 max-w-xl mx-auto w-full">
            <div className="flex flex-col items-center">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#1f140e] tabular-nums">
                {BUSINESS_INFO.googleRating.toFixed(1)}
              </div>
              <div className="flex items-center gap-1 mt-1 text-[#c5a869]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            <div className="h-10 w-px bg-[#2c1e18]/15 hidden sm:block" />

            <div className="text-center sm:text-left text-xs sm:text-sm text-[#543b2f]">
              <div className="font-semibold text-[#1f140e]">
                Google Maps Showcase Rating
              </div>
              <div className="text-[#543b2f]/80 mt-0.5">
                {BUSINESS_INFO.reviewCount} Reviews recorded on Google
              </div>
              <div className="text-[11px] text-[#8c6a2a] italic mt-1">
                *Demo information — please verify directly on Google Maps
              </div>
            </div>
          </div>

          {/* Action to Google Maps */}
          <div>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-[#2c1e18] text-[#faf8f5] text-sm font-medium hover:bg-[#3b2820] transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4 text-[#c5a869]" />
              <span>View Verified Reviews on Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { MapPin, Phone, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO, FALLBACK_IMAGES } from "../data/furnitureData";
import { SafeImage } from "./SafeImage";

export const AboutUs: React.FC = () => {
  const whatsappHref = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    "Hello Nayab Furnitures, I would like to learn more about your showroom and custom furniture services."
  )}`;

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#faf8f5] text-[#2c1e18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Imagery Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#2c1e18]/10 bg-[#2c1e18]">
              <SafeImage
                src="/images/artisan.jpg"
                fallbackSrc={FALLBACK_IMAGES.artisan}
                alt="Master woodcarver at work in Chiniot, Pakistan"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-widest text-[#d4b472] font-semibold mb-1">
                  Chiniot, Punjab
                </div>
                <div className="text-sm font-light text-white/90">
                  Renowned worldwide for exquisite hand-carved Sheesham, Rosewood, and Teak artistry.
                </div>
              </div>
            </div>

            {/* Subtle decorative frame element */}
            <div className="hidden sm:block absolute -bottom-5 -right-5 w-40 h-40 border-2 border-[#c5a869]/30 rounded-2xl -z-10" />
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-6">
            <div className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#8c6a2a] mb-2.5">
              About Nayab Furnitures
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1f140e] tracking-tight leading-tight mb-6 [text-wrap:balance]">
              Bringing Elegance to Your Home
            </h2>

            <p className="text-base sm:text-lg text-[#3b2820] font-light leading-relaxed mb-5">
              Nayab Furnitures is a premier furniture showroom and sales destination located on Chiniot Road in Chiniot, Punjab, Pakistan. We are dedicated to helping families, homeowners, and interior designers discover fine furniture thoughtfully tailored to their spaces.
            </p>

            <p className="text-sm sm:text-base text-[#543b2f] font-light leading-relaxed mb-6">
              Chiniot has long stood at the heart of Pakistan's woodcraft heritage. At Nayab Furnitures, we celebrate this rich local artistry by offering both heritage hand-carved woodwork and sleek, contemporary luxury furniture designed for comfort, durability, and daily elegance.
            </p>

            {/* Highlights List */}
            <div className="space-y-3 mb-8 text-sm text-[#2c1e18]">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8c6a2a] shrink-0" />
                <span>Extensive showroom display on Chiniot Road</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8c6a2a] shrink-0" />
                <span>Bedroom suites, drawing room sofas, and grand dining sets</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8c6a2a] shrink-0" />
                <span>Custom design consultations and tailored wood polishing</span>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white text-sm font-medium hover:bg-[#20ba59] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Showroom Team</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#faf8f5] text-[#2c1e18] border border-[#2c1e18]/20 hover:border-[#8c6a2a] text-sm font-medium transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#8c6a2a]" />
                <span>Showroom Location & Inquiries</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { MessageCircle, MapPin, Phone, Heart } from "lucide-react";
import { BUSINESS_INFO } from "../data/furnitureData";

export const Footer: React.FC = () => {
  const whatsappHref = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    BUSINESS_INFO.defaultWhatsAppMessage
  )}`;

  return (
    <footer className="bg-[#140d09] text-[#faf8f5] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold tracking-wide text-[#faf8f5]">
              Nayab Furnitures
            </h3>
            <p className="text-xs sm:text-sm text-[#faf8f5]/70 font-light leading-relaxed">
              Exquisite handcrafted wooden furniture, luxury bedroom sets, and living room collections showcasing the legendary woodworking artistry of Chiniot, Pakistan.
            </p>
            <div className="pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366] text-white text-xs font-medium hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#d4b472] mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#faf8f5]/80">
              <li>
                <a href="#home" className="hover:text-[#c5a869] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#c5a869] transition-colors">
                  Furniture Categories
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#c5a869] transition-colors">
                  Featured Collection
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#c5a869] transition-colors">
                  About Us & Heritage
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#c5a869] transition-colors">
                  Gallery & Workshop
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#c5a869] transition-colors">
                  Showroom Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Furniture Categories */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#d4b472] mb-4">
              Showroom Collections
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#faf8f5]/80">
              <li>Bedroom Sets & King Beds</li>
              <li>Hand-Carved Living Sofas</li>
              <li>Rosewood Dining Suites</li>
              <li>Wardrobes & Almirahs</li>
              <li>Custom Architectural Furniture</li>
              <li>Traditional Chinioti Woodcraft</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#d4b472] mb-4">
              Showroom Inquiries
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#faf8f5]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a869] shrink-0 mt-0.5" />
                <span>Chiniot Road, Chiniot, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Direct WhatsApp Consultation
                </a>
              </div>
              <div className="text-xs text-[#faf8f5]/60 pt-1">
                Showroom visits & custom design consultations by appointment.
              </div>
            </div>
          </div>
        </div>

        {/* Demo Notice & Disclaimer */}
        <div className="pt-8 border-t border-white/10 text-[11px] text-[#faf8f5]/55 text-center space-y-2">
          <p>
            Demonstration website created for <strong>Nayab Furnitures</strong>. All product images, pricing placeholders, and operational details are presented for preview purposes and subject to direct confirmation by the business owner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 pt-2">
            <span>© {new Date().getFullYear()} Nayab Furnitures, Chiniot. All rights reserved.</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>Handcrafted in Chiniot, Punjab, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

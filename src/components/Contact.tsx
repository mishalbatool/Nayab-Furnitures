import React, { useState } from "react";
import { MapPin, Phone, MessageCircle, Clock, Navigation, Send, Check } from "lucide-react";
import { BUSINESS_INFO, CATEGORIES } from "../data/furnitureData";

export const Contact: React.FC = () => {
  const [selectedInterest, setSelectedInterest] = useState("General Collection Inquiry");
  const [userName, setUserName] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userNote, setUserNote] = useState("");

  const defaultWhatsappHref = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    BUSINESS_INFO.defaultWhatsAppMessage
  )}`;

  const handleCustomInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hello Nayab Furnitures, I am interested in: ${selectedInterest}.`;
    if (userName) text += ` My name is ${userName}.`;
    if (userCity) text += ` I am contacting you from ${userCity}.`;
    if (userNote) text += ` Details: ${userNote}`;

    const url = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#faf8f5] text-[#2c1e18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#8c6a2a] mb-2.5">
            Visit & Connect
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1f140e] tracking-tight leading-tight [text-wrap:balance]">
            Contact Nayab Furnitures
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#543b2f] font-light leading-relaxed">
            We welcome you to visit our showroom in Chiniot or get in touch for custom furniture requirements, delivery inquiries, and pricing.
          </p>
        </div>

        {/* Contact Grid: Details + Interactive Inquiry Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Showroom Location Box */}
            <div className="p-6 rounded-xl bg-[#f5f0e8] border border-[#2c1e18]/10 space-y-4">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#8c6a2a] shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#1f140e]">
                    Showroom Location
                  </h3>
                  <p className="text-sm text-[#3b2820] mt-1 font-light leading-relaxed">
                    <strong>Nayab Furnitures</strong><br />
                    Chiniot Road, Chiniot,<br />
                    Punjab, Pakistan
                  </p>
                  <div className="mt-3">
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8c6a2a] hover:underline"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions on Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Consultation & WhatsApp Box */}
            <div className="p-6 rounded-xl bg-[#f5f0e8] border border-[#2c1e18]/10 space-y-4">
              <div className="flex items-start gap-3.5">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-medium text-[#1f140e]">
                    Direct Showroom Consultation
                  </h3>
                  <p className="text-sm text-[#3b2820] mt-1 font-light leading-relaxed">
                    Connect instantly with our showroom team on WhatsApp for catalogue pricing, wood finish options, and custom dimensions.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#2c1e18]/10">
                <a
                  href={defaultWhatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] text-white text-sm font-medium hover:bg-[#20ba59] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Showroom on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Business Hours Box */}
            <div className="p-6 rounded-xl bg-[#f5f0e8] border border-[#2c1e18]/10">
              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#8c6a2a] shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#1f140e]">
                    Showroom Hours
                  </h3>
                  <div className="text-xs sm:text-sm text-[#3b2820] mt-1 space-y-1">
                    <div>Monday – Saturday: 10:00 AM – 9:00 PM</div>
                    <div>Sunday: By Appointment</div>
                  </div>
                  <div className="text-[11px] text-[#8c6a2a] italic mt-2">
                    *Placeholder hours — to be confirmed by business owner
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive WhatsApp Inquiry Builder */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#f5f0e8] border border-[#2c1e18]/10">
              <h3 className="font-serif text-2xl font-medium text-[#1f140e] mb-2">
                Send an Inquiry to Showroom
              </h3>
              <p className="text-xs sm:text-sm text-[#543b2f] font-light leading-relaxed mb-6">
                Tell us about your furniture requirements. This form prepares a formatted WhatsApp inquiry directly to our sales team.
              </p>

              <form onSubmit={handleCustomInquiry} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1f140e] uppercase tracking-wider mb-1.5">
                    Furniture Category of Interest
                  </label>
                  <select
                    value={selectedInterest}
                    onChange={(e) => setSelectedInterest(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#faf8f5] border border-[#2c1e18]/15 rounded-lg text-xs sm:text-sm text-[#1f140e] focus:outline-none focus:ring-1 focus:ring-[#c5a869]"
                  >
                    <option value="General Collection Inquiry">General Furniture Inquiries</option>
                    <option value="Bedroom Sets & King Beds">Bedroom Sets & King Bed Frames</option>
                    <option value="Living Room Sofas & Seating">Living Room Sofas & Luxury Seating</option>
                    <option value="Rosewood Dining Table & Chairs">Dining Tables and Chairs</option>
                    <option value="Wardrobes & Almirahs">Wardrobes and Cabinets</option>
                    <option value="Custom Hand-Carved Woodwork">Custom Bespoke Woodcraft</option>
                    <option value="Showroom Visit Booking">Booking a Showroom Visit</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1f140e] uppercase tracking-wider mb-1.5">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="e.g. Ahmad / Sarah"
                      className="w-full px-3.5 py-2.5 bg-[#faf8f5] border border-[#2c1e18]/15 rounded-lg text-xs sm:text-sm text-[#1f140e] placeholder:text-[#543b2f]/40 focus:outline-none focus:ring-1 focus:ring-[#c5a869]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1f140e] uppercase tracking-wider mb-1.5">
                      Your City (Optional)
                    </label>
                    <input
                      type="text"
                      value={userCity}
                      onChange={(e) => setUserCity(e.target.value)}
                      placeholder="e.g. Chiniot, Lahore, Islamabad"
                      className="w-full px-3.5 py-2.5 bg-[#faf8f5] border border-[#2c1e18]/15 rounded-lg text-xs sm:text-sm text-[#1f140e] placeholder:text-[#543b2f]/40 focus:outline-none focus:ring-1 focus:ring-[#c5a869]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1f140e] uppercase tracking-wider mb-1.5">
                    Your Requirements / Message
                  </label>
                  <textarea
                    rows={3}
                    value={userNote}
                    onChange={(e) => setUserNote(e.target.value)}
                    placeholder="Describe specific room dimensions, wood polish preference (matte, gloss, walnut), or questions..."
                    className="w-full px-3.5 py-2.5 bg-[#faf8f5] border border-[#2c1e18]/15 rounded-lg text-xs sm:text-sm text-[#1f140e] placeholder:text-[#543b2f]/40 focus:outline-none focus:ring-1 focus:ring-[#c5a869]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-[#25D366] text-white text-sm font-medium hover:bg-[#20ba59] transition-colors shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

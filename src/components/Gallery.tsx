import React, { useState } from "react";
import { GALLERY_ITEMS, GalleryItem, BUSINESS_INFO } from "../data/furnitureData";
import { Maximize2, X, MessageCircle } from "lucide-react";

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filterTabs = ["All", "Living", "Bedroom", "Dining", "Craftsmanship"];

  const filteredItems = activeFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleWhatsAppFromGallery = (item: GalleryItem) => {
    const msg = `Hello Nayab Furnitures, I am interested in the design shown in your gallery: "${item.title}". Could you provide more details?`;
    window.open(`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#1f140e] text-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#d4b472] mb-2.5">
              Visual Portfolio
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#faf8f5] tracking-tight leading-tight">
              Furniture Gallery & Workshop
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#faf8f5]/75 font-light max-w-xl">
              An intimate look into our showroom settings, handcrafted details, and time-honored Chinioti woodcarving techniques.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  activeFilter === tab
                    ? "bg-[#c5a869] text-[#140d09]"
                    : "bg-white/5 text-[#faf8f5]/80 hover:bg-white/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#2c1e18] cursor-pointer shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Measured Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Overlay Details */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[#d4b472]">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#faf8f5] mt-1 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <div className="p-2 rounded-full bg-white/15 text-white backdrop-blur-xs group-hover:bg-[#c5a869] group-hover:text-[#140d09] transition-colors shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1a120c] rounded-2xl overflow-hidden border border-white/15 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Image View */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-contain object-center"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Footer Details */}
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#140d09]">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#d4b472]">
                  {activeItem.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#faf8f5] mt-1">
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#faf8f5]/70 mt-1 max-w-xl font-light">
                  {activeItem.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleWhatsAppFromGallery(activeItem)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white text-xs sm:text-sm font-medium hover:bg-[#20ba59] transition-colors whitespace-nowrap cursor-pointer shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire About This Design</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

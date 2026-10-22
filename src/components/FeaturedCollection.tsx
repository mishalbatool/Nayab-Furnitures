import React, { useState, useMemo } from "react";
import { MessageCircle, Search, Eye, Info, Sparkles } from "lucide-react";
import { PRODUCTS, Product, BUSINESS_INFO } from "../data/furnitureData";
import { SafeImage } from "./SafeImage";

interface FeaturedCollectionProps {
  selectedCategoryId: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  onOpenProductModal: (product: Product) => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  selectedCategoryId,
  onSelectCategory,
  onOpenProductModal
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filterTabs = [
    { id: "all", label: "All Designs" },
    { id: "bedroom-sets", label: "Bedroom Sets" },
    { id: "sofas", label: "Sofas & Living" },
    { id: "dining", label: "Dining Suites" },
    { id: "wardrobes", label: "Wardrobes & Cabinets" },
    { id: "custom", label: "Custom Woodcraft" }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        !selectedCategoryId ||
        selectedCategoryId === "all" ||
        item.categoryId === selectedCategoryId ||
        (selectedCategoryId === "beds" && item.categoryId === "bedroom-sets");

      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.woodType.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategoryId, searchQuery]);

  const handleWhatsAppProduct = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const message = `Hello Nayab Furnitures, I am inquiring about the ${product.name} from your collection. Could you please share current availability, pricing, and finish options?`;
    const url = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="collection" className="py-20 sm:py-28 bg-[#f5f0e8] text-[#2c1e18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#8c6a2a] mb-2.5">
              Showroom Showcase
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1f140e] tracking-tight leading-tight">
              Featured Furniture Collection
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#543b2f] font-light">
              Carefully curated pieces blending authentic Chinioti Sheesham woodwork with modern luxury ergonomics.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#543b2f]/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search designs or timber..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#faf8f5] border border-[#2c1e18]/15 rounded-lg text-[#2c1e18] placeholder:text-[#543b2f]/50 focus:outline-none focus:ring-1 focus:ring-[#c5a869] focus:border-[#c5a869] transition-all"
            />
          </div>
        </div>

        {/* Category Filter Tabs (Interactive Functional Segmented Control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive =
              (!selectedCategoryId && tab.id === "all") ||
              selectedCategoryId === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectCategory(tab.id === "all" ? null : tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#2c1e18] text-[#faf8f5] shadow-sm"
                    : "bg-[#faf8f5] text-[#543b2f] hover:text-[#1f140e] border border-[#2c1e18]/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Demo Disclaimer Alert */}
        <div className="mb-10 p-4 rounded-xl bg-[#faf8f5] border border-[#c5a869]/30 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-[#543b2f]">
          <Info className="w-4 h-4 text-[#8c6a2a] shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong className="font-semibold text-[#2c1e18]">Client Demonstration Notice:</strong> Product designs, specifications, and prices are sample showcase items. Contact Nayab Furnitures directly on WhatsApp to verify current showroom stock, custom dimensions, and finalized pricing.
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#faf8f5] rounded-2xl border border-[#2c1e18]/10 p-8">
            <p className="text-base text-[#543b2f]">No designs found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                onSelectCategory(null);
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#8c6a2a] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onOpenProductModal(product)}
                className="group flex flex-col bg-[#faf8f5] rounded-xl overflow-hidden border border-[#2c1e18]/10 hover:border-[#c5a869]/50 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Image Container with 4:3 Aspect Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e8e2d5]">
                  <SafeImage
                    src={product.image}
                    fallbackSrc={product.fallbackImage}
                    alt={`${product.name} - Nayab Furnitures Chiniot`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {product.isPopular && (
                    <div className="absolute top-3 left-3 bg-[#1f140e]/85 backdrop-blur-sm text-[#d4b472] text-[11px] font-medium tracking-wider px-2.5 py-1 rounded-sm uppercase">
                      Popular Design
                    </div>
                  )}

                  {/* Quick Inspect Button on Hover */}
                  <div className="absolute inset-0 bg-[#1f140e]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#faf8f5] text-[#1f140e] text-xs font-medium shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      View Details
                    </span>
                  </div>
                </div>

                {/* Product Content Details */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Clean unboxed category metadata */}
                  <div className="text-[11px] font-semibold tracking-wider uppercase text-[#8c6a2a] mb-1.5">
                    {product.category}
                  </div>

                  <h3 className="font-serif text-lg font-medium text-[#1f140e] leading-snug group-hover:text-[#8c6a2a] transition-colors mb-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#543b2f] line-clamp-2 leading-relaxed mb-4 flex-1">
                    {product.shortDescription}
                  </p>

                  {/* Clean metadata strip */}
                  <div className="py-2 border-t border-[#2c1e18]/5 text-[11px] text-[#543b2f]/80 space-y-1 mb-4">
                    <div className="flex justify-between">
                      <span className="text-[#543b2f]/60">Wood:</span>
                      <span className="font-medium text-[#2c1e18] text-right truncate max-w-[160px]">
                        {product.woodType.split("/")[0]}
                      </span>
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-3 border-t border-[#2c1e18]/10 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] text-[#543b2f]/70 block">Pricing</span>
                      <span className="text-xs font-semibold text-[#1f140e] tracking-tight">
                        {product.priceNote}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleWhatsAppProduct(e, product)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-medium transition-colors shadow-xs whitespace-nowrap cursor-pointer"
                      title="Inquire on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

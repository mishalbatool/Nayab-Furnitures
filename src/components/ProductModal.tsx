import React from "react";
import { X, MessageCircle, Ruler, TreePine, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { Product, BUSINESS_INFO } from "../data/furnitureData";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappMessage = `Hello Nayab Furnitures, I am inquiring about the "${product.name}" (${product.category}) from your Chiniot showroom. Could you provide available finishes, custom sizes, and pricing details?`;
  const whatsappUrl = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#faf8f5] rounded-2xl shadow-2xl border border-[#2c1e18]/15 flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#1f140e]/60 text-white hover:bg-[#1f140e] transition-colors cursor-pointer"
          aria-label="Close product preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Media Column */}
        <div className="w-full md:w-1/2 bg-[#1f140e] relative min-h-[280px] md:min-h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
        </div>

        {/* Product Details Column */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#8c6a2a] mb-1">
              {product.category}
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1f140e] mb-3 leading-tight">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#543b2f] leading-relaxed mb-6 font-light">
              {product.fullDescription}
            </p>

            {/* Specifications list */}
            <div className="space-y-3.5 py-4 border-y border-[#2c1e18]/10 text-xs text-[#3b2820]">
              <div className="flex items-start gap-2.5">
                <TreePine className="w-4 h-4 text-[#8c6a2a] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#1f140e]">Wood Material:</span>
                  <span>{product.woodType}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#8c6a2a] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#1f140e]">Finish & Polish:</span>
                  <span>{product.finish}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Ruler className="w-4 h-4 text-[#8c6a2a] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#1f140e]">Dimensions:</span>
                  <span>{product.dimensions}</span>
                </div>
              </div>
            </div>

            {/* Price Note & Demo notice */}
            <div className="mt-5 p-3 rounded-lg bg-[#f5f0e8] text-[11px] text-[#543b2f]/90 leading-relaxed">
              <span className="font-semibold text-[#1f140e] block mb-0.5">Price & Availability:</span>
              <span>
                {product.priceNote} (Demo catalog). Custom sizing, wood polish selections, and nationwide delivery arrangements available upon WhatsApp inquiry.
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-6 pt-4 border-t border-[#2c1e18]/10 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366] text-white text-xs sm:text-sm font-medium hover:bg-[#20ba59] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-3 text-xs sm:text-sm font-medium text-[#543b2f] hover:text-[#1f140e] hover:bg-[#2c1e18]/5 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

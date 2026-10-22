import React from "react";
import { MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "../data/furnitureData";

export const FloatingWhatsApp: React.FC = () => {
  const whatsappHref = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    BUSINESS_INFO.defaultWhatsAppMessage
  )}`;

  return (
    <aside aria-label="WhatsApp quick contact">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-300 group"
        aria-label="Direct WhatsApp chat with Nayab Furnitures"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline whitespace-nowrap">
          Chat with Showroom
        </span>
      </a>
    </aside>
  );
};

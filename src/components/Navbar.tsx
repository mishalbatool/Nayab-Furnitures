import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Phone } from "lucide-react";
import { BUSINESS_INFO } from "../data/furnitureData";

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(targetId);
    }
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappHref = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    BUSINESS_INFO.defaultWhatsAppMessage
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#faf8f5]/95 backdrop-blur-md shadow-sm border-b border-[#2c1e18]/10 py-3.5"
          : "bg-[#1f140e]/75 backdrop-blur-sm border-b border-white/10 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className={`font-serif text-2xl sm:text-3xl font-semibold tracking-wide whitespace-nowrap shrink-0 transition-colors ${
            isScrolled ? "text-[#2c1e18]" : "text-[#faf8f5]"
          }`}
        >
          Nayab Furnitures
        </a>

        {/* Zone 2: Navigation Links (Clean single-line text links) */}
        <nav
          className={`hidden md:flex items-center gap-7 text-sm font-medium transition-colors ${
            isScrolled ? "text-[#3b2820]" : "text-[#faf8f5]/90"
          }`}
        >
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="hover:text-[#c5a869] transition-colors whitespace-nowrap shrink-0"
          >
            Home
          </a>
          <a
            href="#categories"
            onClick={(e) => handleNavClick(e, "categories")}
            className="hover:text-[#c5a869] transition-colors whitespace-nowrap shrink-0"
          >
            Categories
          </a>
          <a
            href="#collection"
            onClick={(e) => handleNavClick(e, "collection")}
            className="hover:text-[#c5a869] transition-colors whitespace-nowrap shrink-0"
          >
            Collection
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="hover:text-[#c5a869] transition-colors whitespace-nowrap shrink-0"
          >
            About Us
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleNavClick(e, "gallery")}
            className="hover:text-[#c5a869] transition-colors whitespace-nowrap shrink-0"
          >
            Gallery
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hover:text-[#c5a869] transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white text-xs sm:text-sm font-medium hover:bg-[#20ba59] transition-colors shadow-sm whitespace-nowrap shrink-0"
            aria-label="Contact Nayab Furnitures on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Inquiry</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-[#2c1e18] hover:bg-[#2c1e18]/5"
                : "text-[#faf8f5] hover:bg-white/10"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1f140e] border-t border-white/10 px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-[#faf8f5]">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="py-1 hover:text-[#c5a869] transition-colors"
            >
              Home
            </a>
            <a
              href="#categories"
              onClick={(e) => handleNavClick(e, "categories")}
              className="py-1 hover:text-[#c5a869] transition-colors"
            >
              Furniture Categories
            </a>
            <a
              href="#collection"
              onClick={(e) => handleNavClick(e, "collection")}
              className="py-1 hover:text-[#c5a869] transition-colors"
            >
              Furniture Collection
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="py-1 hover:text-[#c5a869] transition-colors"
            >
              About Us
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, "gallery")}
              className="py-1 hover:text-[#c5a869] transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="py-1 hover:text-[#c5a869] transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="flex items-center gap-2 text-sm text-[#faf8f5]/80 hover:text-white"
            >
              <Phone className="w-4 h-4 text-[#c5a869]" />
              <span>Showroom Inquiries & Location</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#25D366] text-white text-sm font-medium hover:bg-[#20ba59] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with Showroom on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { FeaturedCollection } from "./components/FeaturedCollection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Gallery } from "./components/Gallery";
import { AboutUs } from "./components/AboutUs";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProductModal } from "./components/ProductModal";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Product } from "./data/furnitureData";

export default function App() {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const handleSelectCategoryFromCards = (categoryId: string) => {
    setSelectedCategoryFilter(categoryId);
    const collectionElem = document.getElementById("collection");
    if (collectionElem) {
      collectionElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreHero = () => {
    const collectionElem = document.getElementById("collection");
    if (collectionElem) {
      collectionElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2c1e18] flex flex-col font-sans selection:bg-[#c5a869] selection:text-[#1f140e]">
      {/* 1. Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onExploreClick={handleExploreHero} />

        {/* 3. Furniture Categories */}
        <Categories onSelectCategory={handleSelectCategoryFromCards} />

        {/* 4. Featured Furniture Collection */}
        <FeaturedCollection
          selectedCategoryId={selectedCategoryFilter}
          onSelectCategory={setSelectedCategoryFilter}
          onOpenProductModal={setActiveModalProduct}
        />

        {/* 5. Why Choose Nayab Furnitures? */}
        <WhyChooseUs />

        {/* 6. Furniture Gallery */}
        <Gallery />

        {/* 7. About Us */}
        <AboutUs />

        {/* 8. Customer Reviews */}
        <Reviews />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}

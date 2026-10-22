import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, Category } from "../data/furnitureData";
import { SafeImage } from "./SafeImage";

interface CategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-20 sm:py-28 bg-[#faf8f5] text-[#2c1e18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#8c6a2a] mb-2.5">
            Curated Categories
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1f140e] tracking-tight leading-tight [text-wrap:balance]">
            Explore Furniture by Living Space
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#543b2f] font-light leading-relaxed">
            From imperial master bedroom sets to welcoming drawing room suites, discover handcrafted Chinioti timber and refined modern aesthetics.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {CATEGORIES.map((cat: Category) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative flex flex-col justify-end h-80 sm:h-96 rounded-2xl overflow-hidden bg-[#2c1e18] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Category Imagery */}
              <SafeImage
                src={cat.image}
                fallbackSrc={cat.fallbackImage}
                alt={`${cat.name} by Nayab Furnitures Chiniot`}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#140d09]/95 via-[#1a120c]/60 to-transparent transition-opacity duration-300" />

              {/* Content Block */}
              <div className="relative z-10 p-6 sm:p-7 text-white">
                <h3 className="font-serif text-2xl sm:text-2xl font-medium tracking-tight text-[#faf8f5] group-hover:text-[#d4b472] transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-[#faf8f5]/80 line-clamp-2 font-light">
                  {cat.tagline}
                </p>

                {/* Explore Link */}
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#c5a869] group-hover:text-white transition-colors">
                  <span>Explore Collection</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

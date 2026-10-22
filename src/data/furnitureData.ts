export interface Category {
  id: string;
  name: string;
  tagline: string;
  image: string;
  fallbackImage: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  image: string;
  fallbackImage: string;
  shortDescription: string;
  fullDescription: string;
  woodType: string;
  finish: string;
  dimensions: string;
  priceNote: string;
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  fallbackImage: string;
  description: string;
}

export const FALLBACK_IMAGES = {
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
  bedroom: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  sofa: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
  dining: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
  artisan: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80",
  wardrobe: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
  custom: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80"
};

export const BUSINESS_INFO = {
  name: "Nayab Furnitures",
  city: "Chiniot",
  province: "Punjab",
  country: "Pakistan",
  fullAddress: "Chiniot Road, Chiniot, Punjab, Pakistan",
  phoneDisplay: "0342 7717438",
  phoneRaw: "03427717438",
  whatsappNumber: "923427717438",
  googleRating: 5.0,
  reviewCount: 29,
  ratingNote: "Demo information — verify on Google before publishing",
  openingHours: "Monday to Saturday: 10:00 AM – 9:00 PM · Sunday: By Appointment (Showroom hours to be confirmed by owner)",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nayab+Furnitures+Chiniot+Road+Chiniot+Punjab+Pakistan",
  whatsappBaseUrl: "https://wa.me/923427717438",
  defaultWhatsAppMessage: "Hello Nayab Furnitures, I would like to inquire about your furniture collection."
};

export const CATEGORIES: Category[] = [
  {
    id: "bedroom-sets",
    name: "Bedroom Sets",
    tagline: "Complete master suites with artisan carving and king headboards",
    image: "/images/bedroom.jpg",
    fallbackImage: FALLBACK_IMAGES.bedroom
  },
  {
    id: "beds",
    name: "Beds and Bed Frames",
    tagline: "Solid Sheesham & walnut bed frames crafted for longevity",
    image: "/images/bedroom.jpg",
    fallbackImage: FALLBACK_IMAGES.bedroom
  },
  {
    id: "sofas",
    name: "Sofas and Living Room Furniture",
    tagline: "Classic royal carved woodwork meets plush contemporary comfort",
    image: "/images/sofa.jpg",
    fallbackImage: FALLBACK_IMAGES.sofa
  },
  {
    id: "dining",
    name: "Dining Tables and Chairs",
    tagline: "Grand family dining suites in rich polished rosewood and teak",
    image: "/images/dining.jpg",
    fallbackImage: FALLBACK_IMAGES.dining
  },
  {
    id: "wardrobes",
    name: "Wardrobes and Cabinets",
    tagline: "Spacious multi-door almirahs, credenzas, and display showcases",
    image: "/images/artisan.jpg",
    fallbackImage: FALLBACK_IMAGES.wardrobe
  },
  {
    id: "custom",
    name: "Custom Furniture",
    tagline: "Bespoke dimensions, carvings, and finishes tailored to your home",
    image: "/images/hero.jpg",
    fallbackImage: FALLBACK_IMAGES.custom
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "royal-chinioti-sheesham-bed",
    name: "Royal Chinioti Sheesham Bed Suite",
    category: "Bedroom Sets",
    categoryId: "bedroom-sets",
    image: "/images/bedroom.jpg",
    fallbackImage: FALLBACK_IMAGES.bedroom,
    shortDescription: "Majestic solid Sheesham king-size bed with signature hand-carved floral lattice headboard and pair of nightstands.",
    fullDescription: "An exemplary specimen of world-renowned Chiniot woodworking. Built from seasoned solid Sheesham (Dalbergia sissoo) rosewood with exquisite crown carvings, sturdy joinery, and matching bedside tables with brass drop handles.",
    woodType: "Solid Seasoned Sheesham / Rosewood",
    finish: "Hand-rubbed Walnut Satin Lacquer",
    dimensions: "King Size (Headboard H: 64″ × W: 78″ × L: 84″)",
    priceNote: "Contact for Price",
    isPopular: true
  },
  {
    id: "imperial-carved-sofa-set",
    name: "Imperial Hand-Carved Living Room Sofa Set",
    category: "Sofas & Living Room",
    categoryId: "sofas",
    image: "/images/sofa.jpg",
    fallbackImage: FALLBACK_IMAGES.sofa,
    shortDescription: "Elegant 3+2+1 seating suite featuring contoured walnut wood cresting and textured warm oatmeal upholstery.",
    fullDescription: "Balances classic Chinioti heritage carving with relaxed modern ergonomics. High-density resilience foam seating, tailored stain-resistant weave, and solid wood foundation designed to grace your formal drawing room.",
    woodType: "Pure Seasoned Teak & Walnut Trim",
    finish: "Deep Antique Brown with Matte Sealant",
    dimensions: "3-Seater: 88″W × 36″D × 38″H; 1-Seater: 36″W × 34″D × 38″H",
    priceNote: "Contact for Price",
    isPopular: true
  },
  {
    id: "heritage-rosewood-dining-suite",
    name: "Heritage 8-Seater Rosewood Dining Suite",
    category: "Dining Tables & Chairs",
    categoryId: "dining",
    image: "/images/dining.jpg",
    fallbackImage: FALLBACK_IMAGES.dining,
    shortDescription: "Generous banquet-sized dining table with carved pedestal columns and 8 high-back upholstered chairs.",
    fullDescription: "Crafted for memorable family gatherings. The solid tabletop displays natural interlocking grain patterns, supported by hand-turned pedestal bases with acanthus leaf motifs.",
    woodType: "Premium Seasoned Rosewood (Sheesham)",
    finish: "Warm Golden Walnut High-Luster Polish",
    dimensions: "Table: 96″L × 44″W × 30″H; Chairs: 20″W × 22″D × 42″H",
    priceNote: "Contact for Price",
    isPopular: true
  },
  {
    id: "modern-minimalist-walnut-credenza",
    name: "Artisan Low-Profile Walnut Coffee Table",
    category: "Custom Furniture",
    categoryId: "custom",
    image: "/images/hero.jpg",
    fallbackImage: FALLBACK_IMAGES.custom,
    shortDescription: "Sculptural organic live-edge inspired wooden coffee table with geometric solid timber pedestal base.",
    fullDescription: "A showpiece centerpiece bringing organic warmth into contemporary interiors. Milled from thick timber planks and treated with natural wax oil to celebrate wood grain variations.",
    woodType: "Kiln-Dried Dark Walnut",
    finish: "Natural Matte Protective Oil Finish",
    dimensions: "54″L × 32″W × 17″H",
    priceNote: "Contact for Price"
  },
  {
    id: "chiniot-heritage-wardrobe",
    name: "Master Crafted 4-Door Almirah Wardrobe",
    category: "Wardrobes & Cabinets",
    categoryId: "wardrobes",
    image: "/images/artisan.jpg",
    fallbackImage: FALLBACK_IMAGES.wardrobe,
    shortDescription: "Grand solid wood wardrobe with interior shelving, hanging rail, secret lockboxes, and hand-carved cornice.",
    fullDescription: "Substantial heirloom storage handcrafted by master Chinioti woodcarvers. Features traditional mortise-and-tenon construction, full-extension hardwood drawers, and brass locking hardware.",
    woodType: "Solid Sheesham Hardwood",
    finish: "Rich Traditional Walnut Sheen",
    dimensions: "84″W × 24″D × 86″H",
    priceNote: "Contact for Price"
  },
  {
    id: "classic-tufted-wingback-chair",
    name: "Royal Accent Armchair & Ottoman",
    category: "Sofas & Living Room",
    categoryId: "sofas",
    image: "/images/sofa.jpg",
    fallbackImage: FALLBACK_IMAGES.sofa,
    shortDescription: "Deeply padded accent armchair with carved cabriole legs and supportive lumbar contouring.",
    fullDescription: "An inviting corner seat for reading or fireside relaxation. Accented with brass studding and hand-finished wood curves.",
    woodType: "Carved Solid Teak",
    finish: "Deep Mahogany Stain",
    dimensions: "34″W × 32″D × 40″H",
    priceNote: "Contact for Price"
  },
  {
    id: "regal-dressing-table-mirror",
    name: "Chinioti Ornate Vanity & Beveled Mirror",
    category: "Bedroom Sets",
    categoryId: "bedroom-sets",
    image: "/images/bedroom.jpg",
    fallbackImage: FALLBACK_IMAGES.bedroom,
    shortDescription: "Curved dressing console with six velvet-lined drawers, floral filigree carving, and matching upholstered stool.",
    fullDescription: "A timeless bedroom staple featuring authentic Chinioti jali-relief carving around the mirror frame and delicate cabriole legs.",
    woodType: "Solid Seasoned Sheesham",
    finish: "Warm Walnut with Subtle Gold Patina Highlights",
    dimensions: "Console: 48″W × 20″D × 32″H; Mirror: 36″W × 48″H",
    priceNote: "Contact for Price"
  },
  {
    id: "bespoke-hand-carved-console",
    name: "Bespoke Entryway Console Table",
    category: "Custom Furniture",
    categoryId: "custom",
    image: "/images/hero.jpg",
    fallbackImage: FALLBACK_IMAGES.custom,
    shortDescription: "Slim hallway console table with fluted wooden pillars, brass tips, and double storage drawers.",
    fullDescription: "Customizable in width and timber species to fit your foyer, corridor, or living space. Made to order by Nayab Furnitures craftsmen.",
    woodType: "Selected Sheesham or Teak",
    finish: "Natural Satin or Dark Espresso Polish",
    dimensions: "Custom sizing (Standard: 52″W × 16″D × 33″H)",
    priceNote: "Contact for Price"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Luxury Living Room Interior",
    category: "Living",
    image: "/images/hero.jpg",
    fallbackImage: FALLBACK_IMAGES.hero,
    description: "Harmonious drawing room setup featuring custom walnut coffee table and luxury seating in warm beige."
  },
  {
    id: "gal-2",
    title: "Master Bedroom Suite Setup",
    category: "Bedroom",
    image: "/images/bedroom.jpg",
    fallbackImage: FALLBACK_IMAGES.bedroom,
    description: "Solid Sheesham king bed with matching carved bedside nightstands in rich dark finish."
  },
  {
    id: "gal-3",
    title: "Royal Drawing Room Sofa Suite",
    category: "Living",
    image: "/images/sofa.jpg",
    fallbackImage: FALLBACK_IMAGES.sofa,
    description: "Handcrafted woodwork frame with intricate crown carvings and oatmeal luxury fabric."
  },
  {
    id: "gal-4",
    title: "Banquet Dining Suite & Chandelier",
    category: "Dining",
    image: "/images/dining.jpg",
    fallbackImage: FALLBACK_IMAGES.dining,
    description: "8-seater grand dining table crafted from heavy seasoned timber with comfortable cushioned chairs."
  },
  {
    id: "gal-5",
    title: "Chiniot Master Woodcarver at Work",
    category: "Craftsmanship",
    image: "/images/artisan.jpg",
    fallbackImage: FALLBACK_IMAGES.artisan,
    description: "Traditional chisel hand-carving in our workshop, preserving centuries-old Chinioti woodcraft."
  },
  {
    id: "gal-6",
    title: "Custom Timber Joinery & Detailing",
    category: "Craftsmanship",
    image: "/images/hero.jpg",
    fallbackImage: FALLBACK_IMAGES.custom,
    description: "Close inspection of kiln-dried solid timber joints and hand-applied protective finish."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Beautiful Furniture Designs",
    description: "A refined curation of classic Chinioti heritage woodcraft and clean modern luxury furniture tailored to elevate any Pakistani home."
  },
  {
    title: "Quality-Focused Craftsmanship",
    description: "Constructed with selected seasoned hardwoods like Sheesham, Rosewood, and Teak, utilizing time-tested joinery for lasting stability."
  },
  {
    title: "Comfortable and Practical Designs",
    description: "Furniture engineered for real living—ergonomic seating postures, resilient high-density cushioning, and functional storage dimensions."
  },
  {
    title: "Customer-Focused Service",
    description: "Attentive guidance from inquiry to delivery, transparent showroom consultations, and flexible custom sizing options for your space."
  }
];

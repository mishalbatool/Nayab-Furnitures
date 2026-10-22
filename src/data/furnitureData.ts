export interface Category {
  id: string;
  name: string;
  tagline: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  image: string;
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
  description: string;
}

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
    image: "/src/assets/images/cat_bedroom_suite_chiniot_1792674978858.jpg"
  },
  {
    id: "beds",
    name: "Beds and Bed Frames",
    tagline: "Solid Sheesham & walnut bed frames crafted for longevity",
    image: "/src/assets/images/cat_bedroom_suite_chiniot_1792674978858.jpg"
  },
  {
    id: "sofas",
    name: "Sofas and Living Room Furniture",
    tagline: "Classic royal carved woodwork meets plush contemporary comfort",
    image: "/src/assets/images/cat_luxury_sofa_living_1792674978695.jpg"
  },
  {
    id: "dining",
    name: "Dining Tables and Chairs",
    tagline: "Grand family dining suites in rich polished rosewood and teak",
    image: "/src/assets/images/cat_dining_room_teak_1792674980061.jpg"
  },
  {
    id: "wardrobes",
    name: "Wardrobes and Cabinets",
    tagline: "Spacious multi-door almirahs, credenzas, and display showcases",
    image: "/src/assets/images/craft_artisan_woodcarving_1792674979934.jpg"
  },
  {
    id: "custom",
    name: "Custom Furniture",
    tagline: "Bespoke dimensions, carvings, and finishes tailored to your home",
    image: "/src/assets/images/hero_luxury_furniture_living_1792674977567.jpg"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "royal-chinioti-sheesham-bed",
    name: "Royal Chinioti Sheesham Bed Suite",
    category: "Bedroom Sets",
    categoryId: "bedroom-sets",
    image: "/src/assets/images/cat_bedroom_suite_chiniot_1792674978858.jpg",
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
    image: "/src/assets/images/cat_luxury_sofa_living_1792674978695.jpg",
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
    image: "/src/assets/images/cat_dining_room_teak_1792674980061.jpg",
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
    image: "/src/assets/images/hero_luxury_furniture_living_1792674977567.jpg",
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
    image: "/src/assets/images/craft_artisan_woodcarving_1792674979934.jpg",
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
    image: "/src/assets/images/cat_luxury_sofa_living_1792674978695.jpg",
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
    image: "/src/assets/images/cat_bedroom_suite_chiniot_1792674978858.jpg",
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
    image: "/src/assets/images/hero_luxury_furniture_living_1792674977567.jpg",
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
    image: "/src/assets/images/hero_luxury_furniture_living_1792674977567.jpg",
    description: "Harmonious drawing room setup featuring custom walnut coffee table and luxury seating in warm beige."
  },
  {
    id: "gal-2",
    title: "Master Bedroom Suite Setup",
    category: "Bedroom",
    image: "/src/assets/images/cat_bedroom_suite_chiniot_1792674978858.jpg",
    description: "Solid Sheesham king bed with matching carved bedside nightstands in rich dark finish."
  },
  {
    id: "gal-3",
    title: "Royal Drawing Room Sofa Suite",
    category: "Living",
    image: "/src/assets/images/cat_luxury_sofa_living_1792674978695.jpg",
    description: "Handcrafted woodwork frame with intricate crown carvings and oatmeal luxury fabric."
  },
  {
    id: "gal-4",
    title: "Banquet Dining Suite & Chandelier",
    category: "Dining",
    image: "/src/assets/images/cat_dining_room_teak_1792674980061.jpg",
    description: "8-seater grand dining table crafted from heavy seasoned timber with comfortable cushioned chairs."
  },
  {
    id: "gal-5",
    title: "Chiniot Master Woodcarver at Work",
    category: "Craftsmanship",
    image: "/src/assets/images/craft_artisan_woodcarving_1792674979934.jpg",
    description: "Traditional chisel hand-carving in our workshop, preserving centuries-old Chinioti woodcraft."
  },
  {
    id: "gal-6",
    title: "Custom Timber Joinery & Detailing",
    category: "Craftsmanship",
    image: "/src/assets/images/hero_luxury_furniture_living_1792674977567.jpg",
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

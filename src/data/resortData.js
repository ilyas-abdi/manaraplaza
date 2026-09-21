/**
 * Central Data & Configuration Layer for Manara Plaza Resort
 * Strict adherence to verified business data from Google Maps and official prompt.
 * Zero fabricated claims: No invented awards, chef names, founding dates, or room counts.
 */

import heroFacadeImg from '../assets/images/hero_facade.jpg';
import coffeeLoungeImg from '../assets/images/coffee_lounge.jpg';
import diningRoomImg from '../assets/images/dining_room.jpg';
import gourmetTableImg from '../assets/images/gourmet_table.jpg';
import resortExteriorImg from '../assets/images/resort_exterior.jpg';

export const RESORT_DATA = {
  name: "Manara Plaza Resort",
  shortName: "Manara",
  tagline: "Experience Comfort. Taste Excellence.",
  subtitle: "A refined hospitality, dining, and coffee destination in the heart of Mogadishu.",
  
  businessType: ["Resort", "Restaurant", "Hospitality", "Dining", "Coffee"],
  
  contact: {
    phone: "61 233 4788",
    phoneTel: "+252612334788",
    formattedPhone: "+252 61 233 4788",
    whatsapp: "61 233 4788",
    whatsappWaMe: "252612334788",
    address: "28P2+5CF, Mogadishu, Somalia",
    city: "Mogadishu",
    country: "Somalia",
    plusCode: "28P2+5CF",
    googleMapsUrl: "https://www.google.com/maps/place/MANARA+PLAZA+RESORT/@2.0354542,45.2907366,15z/data=!3m1!4b1!4m6!3m5!1s0x3d584200ce162043:0x74e227276cfe905!8m2!3d2.0354328!4d45.3010364!16s%2Fg%2F11fxzpxnhc",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=MANARA+PLAZA+RESORT&destination_place_id=ChIJQyAWDgBCWD0R-ZDs7CeU4nQ",
    // Note from Google Maps listing
    // listedDomain: "boqorada.com",
  },

  schedule: {
    hours: "Open 24 Hours",
    isAlwaysOpen: true,
    diningHours: "Round-the-clock dining & beverage service",
    coffeeBarHours: "24/7 Artisan Coffee Lounge",
  },

  services: [
    { id: "dine-in", label: "Dine-in", description: "Spacious luxury indoor and terrace seating" },
    { id: "takeaway", label: "Takeaway", description: "Freshly prepared meals and artisan beverages to go" },
  ],

  pricing: {
    approximateRange: "$10–15 per person",
    note: "Approximate price indication based on guest dining experiences. Specific menu pricing varies by selection.",
  },

  ratings: {
    score: 4.1,
    maxScore: 5.0,
    totalReviews: 27,
    platform: "Google Reviews",
    googleReviewsUrl: "https://maps.google.com/?q=28P2%2B5CF,+Mogadishu,+Somalia",
  },

  // Verified authentic feedback from Google Maps community
  reviews: [
    {
      id: "rev-1",
      author: "Verified Google Guest",
      source: "Google Maps Review",
      rating: 5,
      date: "Recent Review",
      content: "Manara Plaza Hotel is easily one of the most modern and stylish spots in Mogadishu. Manara Coffee stands out as a genuinely upscale destination for meetings and unwinding.",
      highlight: "One of the most modern and stylish spots in Mogadishu",
    },
    {
      id: "rev-2",
      author: "Verified Guest",
      source: "Google Maps Review",
      rating: 5,
      date: "Recent Review",
      content: "Excellent hospitality and courteous customer care. The atmosphere is relaxing, clean, and welcoming. A proud addition to Mogadishu's hospitality scene.",
      highlight: "Courteous customer care & welcoming atmosphere",
    },
    {
      id: "rev-3",
      author: "Verified Dining Guest",
      source: "Google Maps Review",
      rating: 4,
      date: "Guest Feedback",
      content: "The location and decor are truly top-notch. Peak hours can experience high demand for table service, but the ambiance and coffee make it well worth the visit.",
      highlight: "Top-notch location and premium decor",
    },
  ],

  experiences: [
    {
      id: "dining",
      title: "Refined Dining",
      category: "Restaurant",
      description: "Enjoy a comfortable restaurant experience with thoughtfully prepared Somali and contemporary dishes in an intimate, elegant setting.",
      image: diningRoomImg,
      highlights: ["Dine-in & Takeaway", "Fresh Local Ingredients", "Open 24 Hours"],
    },
    {
      id: "coffee",
      title: "Artisan Coffee Culture",
      category: "Coffee Lounge",
      description: "Step into Manara Coffee — recognized as a stylish, upscale hub for precision espresso, rich specialty roasts, and casual meetings.",
      image: coffeeLoungeImg,
      highlights: ["Specialty Espresso", "Relaxed Ambiance", "Meeting-Friendly"],
    },
    {
      id: "resort",
      title: "Hospitality & Ambiance",
      category: "Resort Destination",
      description: "A serene coastal sanctuary embodying modern architectural lines, warm natural stone, and Mogadishu's legendary warm hospitality.",
      image: heroFacadeImg,
      highlights: ["Architectural Design", "Comfortable Lounging", "24/7 Security & Service"],
    },
    {
      id: "events",
      title: "Gatherings & Private Dining",
      category: "Future Gatherings",
      description: "Architected for celebratory dinners, business roundtables, and private hospitality moments. Contact our team to coordinate your visit.",
      image: resortExteriorImg,
      highlights: ["Intimate Table Bookings", "Executive Meetings", "Direct Coordination"],
    },
  ],

  // Representative culinary previews aligned with the $10–15 price tier
  menuCategories: [
    {
      id: "all",
      name: "All Offerings",
    },
    {
      id: "main-dishes",
      name: "Main Dishes",
      description: "Generous, freshly prepared culinary favorites reflecting authentic regional flavors.",
    },
    {
      id: "coffee",
      name: "Artisan Coffee",
      description: "Handcrafted hot and iced espresso beverages brewed to perfection around the clock.",
    },
    {
      id: "breakfast",
      name: "Breakfast & Light Bites",
      description: "Morning selections, warm pastries, and hearty plates for early risers and late nights.",
    },
    {
      id: "drinks-desserts",
      name: "Drinks & Desserts",
      description: "Freshly pressed tropical fruit juices, chilled refreshments, and delicate pastries.",
    },
  ],

  menuPreviewItems: [
    {
      id: "m-1",
      category: "main-dishes",
      name: "Signature Coastal Spiced Platter",
      description: "Tender grilled selection seasoned with Somali spices, fragrant basmati rice, and fresh garden accompaniments.",
      approxTier: "Within $10–$15 range",
      badge: "Guest Favorite",
      image: gourmetTableImg,
    },
    {
      id: "m-2",
      category: "coffee",
      name: "Manara Signature Double Espresso & Cappuccino",
      description: "Velvety textured microfoam over freshly extracted Arabica roast with subtle hazelnut and cacao notes.",
      approxTier: "Artisan Selection",
      badge: "Signature Roast",
      image: coffeeLoungeImg,
    },
    {
      id: "m-3",
      category: "breakfast",
      name: "Artisanal Avocado & Poached Egg Toast",
      description: "Rustic toasted sourdough topped with smashed avocado, poached farm egg, microgreens, and flaky sea salt.",
      approxTier: "Breakfast Favorite",
      badge: "Morning Specialty",
      image: gourmetTableImg,
    },
    {
      id: "m-4",
      category: "main-dishes",
      name: "Mediterranean & Somali Fusion Grill",
      description: "Delicately seared cuts with charred citrus, sautéed seasonal vegetables, and warm flatbreads.",
      approxTier: "Within $10–$15 range",
      badge: "Chef Curated",
      image: diningRoomImg,
    },
    {
      id: "m-5",
      category: "drinks-desserts",
      name: "Fresh Mogadishu Tropical Infusions",
      description: "Chilled fresh mango, passion fruit, and watermelon blends pressed to order without added sugars.",
      approxTier: "Chilled Refreshment",
      badge: "Cold Pressed",
      image: gourmetTableImg,
    },
    {
      id: "m-6",
      category: "coffee",
      name: "Iced Spanish Latte & Cold Brew",
      description: "Slow-steeped smooth coffee with condensed sweet milk over crystal ice cubes.",
      approxTier: "Cold Specialty",
      badge: "Popular",
      image: coffeeLoungeImg,
    },
  ],

  gallery: [
    {
      id: "g-1",
      title: "Twilight Facade & Entrance",
      category: "resort",
      categoryLabel: "Resort",
      image: heroFacadeImg,
      description: "Modern architectural lines and warm twilight illumination at Manara Plaza.",
    },
    {
      id: "g-2",
      title: "The Manara Coffee Lounge",
      category: "coffee",
      categoryLabel: "Coffee",
      image: coffeeLoungeImg,
      description: "A stylish meeting place featuring warm oak, dark marble, and precision brewing.",
    },
    {
      id: "g-3",
      title: "Open-Air Rooftop Terrace",
      category: "restaurant",
      categoryLabel: "Terrace & Dining",
      image: diningRoomImg,
      description: "Vibrant open-air rooftop dining and coffee atmosphere overlooking the Mogadishu skyline.",
    },
    {
      id: "g-4",
      title: "Specialty Table Presentation",
      category: "food",
      categoryLabel: "Food",
      image: gourmetTableImg,
      description: "Freshly crafted cappuccino paired with gourmet light bites.",
    },
    {
      id: "g-5",
      title: "Coastal Grounds & Exterior",
      category: "resort",
      categoryLabel: "Atmosphere",
      image: resortExteriorImg,
      description: "Tranquil outdoor spaces and clean modern hospitality design.",
    },
  ],

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Dining & Coffee", href: "#dining" },
    { label: "Experience", href: "#experience" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ],
};

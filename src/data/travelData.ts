// ─── Destination Data ────────────────────────────────────────────────────────

export interface Destination {
  id: string;
  name: string;
  city: string;
  state?: string;
  country: string;
  continent: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  visited?: boolean;
  wishlist?: boolean;
  coordinates?: { lat: number; lng: number };
  bestTime?: string;
  rating?: number;
  tags?: string[];
}

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Varanasi",
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    continent: "Asia",
    category: "Religious",
    description: "The spiritual capital of India, Varanasi is one of the world's oldest living cities. The sacred ghats along the Ganges hold centuries of rituals, prayers, and timeless stories.",
    image: "/varanasi.png",
    slug: "india/uttar-pradesh/varanasi",
    coordinates: { lat: 25.3176, lng: 82.9739 },
    bestTime: "November – March",
    rating: 4.8,
    tags: ["spiritual", "ghat", "ganges", "heritage"],
  },
  {
    id: "2",
    name: "Manali",
    city: "Manali",
    state: "Himachal Pradesh",
    country: "India",
    continent: "Asia",
    category: "Mountains",
    description: "Nestled in the Beas River Valley, Manali is a high-altitude Himalayan resort town known for snow-capped peaks, adventure sports, and serene mountain landscapes.",
    image: "/manali.png",
    slug: "india/himachal-pradesh/manali",
    coordinates: { lat: 32.2432, lng: 77.1892 },
    bestTime: "October – June",
    rating: 4.7,
    tags: ["mountains", "snow", "adventure", "himalaya"],
  },
  {
    id: "3",
    name: "Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    continent: "Asia",
    category: "Historical",
    description: "The Pink City of India, Jaipur dazzles with majestic forts, opulent palaces, vibrant bazaars, and rich Rajput heritage. A city where every street tells a royal story.",
    image: "/jaipur.png",
    slug: "india/rajasthan/jaipur",
    coordinates: { lat: 26.9124, lng: 75.7873 },
    bestTime: "October – March",
    rating: 4.6,
    tags: ["heritage", "fort", "culture", "royal"],
  },
  {
    id: "4",
    name: "Rishikesh",
    city: "Rishikesh",
    state: "Uttarakhand",
    country: "India",
    continent: "Asia",
    category: "Adventure",
    description: "The Yoga Capital of the World and gateway to the Himalayas, Rishikesh offers world-class white-water rafting, trekking, spiritual retreats, and breathtaking river landscapes.",
    image: "/rishikesh.png",
    slug: "india/uttarakhand/rishikesh",
    coordinates: { lat: 30.0869, lng: 78.2676 },
    bestTime: "September – June",
    rating: 4.7,
    tags: ["yoga", "rafting", "adventure", "spiritual"],
  },
  {
    id: "5",
    name: "Kerala Backwaters",
    city: "Alleppey",
    state: "Kerala",
    country: "India",
    continent: "Asia",
    category: "Nature",
    description: "God's Own Country, Kerala's emerald backwaters with traditional houseboats drifting through palm-fringed canals offer an unforgettable journey through nature's paradise.",
    image: "/kerala.png",
    slug: "india/kerala/alleppey",
    coordinates: { lat: 9.4981, lng: 76.3388 },
    bestTime: "October – March",
    rating: 4.8,
    tags: ["backwaters", "houseboat", "nature", "tropical"],
  },
  {
    id: "6",
    name: "Agra",
    city: "Agra",
    state: "Uttar Pradesh",
    country: "India",
    continent: "Asia",
    category: "Historical",
    description: "Home to the iconic Taj Mahal, one of the Seven Wonders of the World, Agra is a testament to Mughal grandeur, eternal love, and exquisite craftsmanship.",
    image: "/agra.png",
    slug: "india/uttar-pradesh/agra",
    coordinates: { lat: 27.1767, lng: 78.0081 },
    bestTime: "October – March",
    rating: 4.9,
    tags: ["taj mahal", "mughal", "wonder", "heritage"],
  },
  {
    id: "7",
    name: "Bali",
    city: "Bali",
    country: "Indonesia",
    continent: "Asia",
    category: "Beaches",
    description: "The Island of the Gods, Bali enchants with terraced rice paddies, ancient temples perched on sea cliffs, vibrant festivals, and some of the world's most beautiful beaches.",
    image: "/bali.png",
    slug: "indonesia/bali",
    coordinates: { lat: -8.3405, lng: 115.0920 },
    bestTime: "April – October",
    rating: 4.9,
    tags: ["temple", "beach", "culture", "tropical"],
  },
  {
    id: "8",
    name: "Paris",
    city: "Paris",
    country: "France",
    continent: "Europe",
    category: "City",
    description: "The City of Light captivates with its iconic Eiffel Tower, world-class art museums, romantic boulevards, and a café culture that has inspired generations of artists and dreamers.",
    image: "/paris.png",
    slug: "france/paris",
    coordinates: { lat: 48.8566, lng: 2.3522 },
    bestTime: "April – June, September – November",
    rating: 4.8,
    tags: ["romantic", "eiffel", "art", "culture"],
  },
  {
    id: "9",
    name: "Tokyo",
    city: "Tokyo",
    country: "Japan",
    continent: "Asia",
    category: "City",
    description: "Where ancient traditions meet cutting-edge modernity, Tokyo pulses with energy through neon-lit districts, serene temples, Michelin-starred street food, and futuristic architecture.",
    image: "/tokyo.png",
    slug: "japan/tokyo",
    coordinates: { lat: 35.6762, lng: 139.6503 },
    bestTime: "March – May, September – November",
    rating: 4.9,
    tags: ["futuristic", "food", "culture", "anime"],
  },
];

// ─── Video Data ───────────────────────────────────────────────────────────────

export interface TravelVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  destination: string;
  duration: string;
  date: string;
  views: string;
  category: string;
  placeholder?: boolean;
}

export const travelVideos: TravelVideo[] = [
  {
    id: "v1",
    title: "Dawn at the Ghats — Varanasi",
    description: "A cinematic sunrise walk by the sacred ghats of Varanasi, where prayer, ritual, and daily life meet at the edge of the Ganga.",
    thumbnail: "/varanasi.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-indian-city-people-walking-through-a-street-44234-large.mp4",
    destination: "Varanasi, Uttar Pradesh",
    duration: "12s",
    date: "March 2024",
    views: "12.4K",
    category: "Religious",
    placeholder: true,
  },
  {
    id: "v2",
    title: "Snow Roads of Manali",
    description: "A quick mountain drive through the snow-clad valley roads of Manali, framed with crisp Himalayan air and dramatic alpine scenery.",
    thumbnail: "/manali.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-snow-covered-mountains-35036-large.mp4",
    destination: "Manali, Himachal Pradesh",
    duration: "11s",
    date: "January 2024",
    views: "9.8K",
    category: "Mountains",
    placeholder: true,
  },
  {
    id: "v3",
    title: "The Royal Forts of Jaipur",
    description: "A short heritage reel through Jaipur's majestic forts and palaces, filled with sandstone colors, courtyards, and royal atmosphere.",
    thumbnail: "/jaipur.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-couple-tourists-walking-through-old-city-43973-large.mp4",
    destination: "Jaipur, Rajasthan",
    duration: "13s",
    date: "December 2023",
    views: "7.2K",
    category: "Historical",
    placeholder: true,
  },
  {
    id: "v4",
    title: "Rafting the Ganga — Rishikesh",
    description: "Short bursts of the Ganga's rapids and the thrill of rafting in Rishikesh, where adventure meets the river valley.",
    thumbnail: "/rishikesh.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-doing-white-water-rafting-on-the-river-28776-large.mp4",
    destination: "Rishikesh, Uttarakhand",
    duration: "10s",
    date: "October 2023",
    views: "15.6K",
    category: "Adventure",
    placeholder: true,
  },
  {
    id: "v5",
    title: "Drifting Through Kerala Backwaters",
    description: "A calm glide through Kerala's backwaters with palms, canals, and the slow rhythm of life on the water.",
    thumbnail: "/kerala.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-lake-surrounded-by-palms-and-mountains-45827-large.mp4",
    destination: "Alleppey, Kerala",
    duration: "12s",
    date: "February 2024",
    views: "11.3K",
    category: "Nature",
    placeholder: true,
  },
  {
    id: "v6",
    title: "Sunrise at the Taj Mahal",
    description: "A gentle dawn sequence capturing the Taj Mahal in soft morning light and the peaceful movement of early visitors.",
    thumbnail: "/agra.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-tourists-walking-in-front-of-a-historical-monument-45673-large.mp4",
    destination: "Agra, Uttar Pradesh",
    duration: "14s",
    date: "November 2023",
    views: "18.9K",
    category: "Historical",
    placeholder: true,
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  author: string;
  date: string;
  readTime: string;
  destination: string;
  category: string;
  tags?: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "My Travel Experience in the Mountains of Manali",
    excerpt: "From the moment the snow-capped Himalayan peaks came into view, I knew this trip would change me. Here's everything about my journey through Manali's magical landscapes.",
    coverImage: "/manali.png",
    author: "RoamVerse",
    date: "January 15, 2024",
    readTime: "8 min read",
    destination: "Manali, Himachal Pradesh",
    category: "Mountains",
    tags: ["manali", "himachal", "snow", "adventure"],
    slug: "travel-experience-manali-mountains",
  },
  {
    id: "b2",
    title: "Exploring the Hidden Places of Uttar Pradesh",
    excerpt: "Beyond the Taj Mahal and Varanasi lies a world of hidden gems in UP. From ancient stepwells to forgotten forts — this is the state's untold story.",
    coverImage: "/varanasi.png",
    author: "RoamVerse",
    date: "March 2, 2024",
    readTime: "10 min read",
    destination: "Uttar Pradesh, India",
    category: "Hidden Gems",
    tags: ["up", "hidden", "heritage", "explore"],
    slug: "hidden-places-uttar-pradesh",
  },
  {
    id: "b3",
    title: "A Weekend Road Trip Through Rajasthan",
    excerpt: "Packed our bags on a Friday evening, hit the highway, and discovered that Rajasthan is best experienced with the windows down and no fixed plans.",
    coverImage: "/jaipur.png",
    author: "RoamVerse",
    date: "December 20, 2023",
    readTime: "7 min read",
    destination: "Rajasthan, India",
    category: "Road Trip",
    tags: ["roadtrip", "rajasthan", "weekend", "friends"],
    slug: "weekend-road-trip-rajasthan",
  },
];

// ─── India States Data ────────────────────────────────────────────────────────

export interface IndiaState {
  id: string;
  name: string;
  region: string;
  cities: { name: string; slug: string; description: string; type: string }[];
  description: string;
}

export const indiaStates: IndiaState[] = [
  {
    id: "up",
    name: "Uttar Pradesh",
    region: "North India",
    description: "The heartland of India, home to the Taj Mahal, spiritual Varanasi, and the sacred city of Prayagraj.",
    cities: [
      { name: "Varanasi", slug: "varanasi", description: "The Spiritual Capital", type: "Religious" },
      { name: "Agra", slug: "agra", description: "Home of the Taj Mahal", type: "Historical" },
      { name: "Lucknow", slug: "lucknow", description: "City of Nawabs", type: "Culture" },
      { name: "Prayagraj", slug: "prayagraj", description: "The Sangam City", type: "Religious" },
      { name: "Mathura", slug: "mathura", description: "Birthplace of Lord Krishna", type: "Religious" },
    ],
  },
  {
    id: "hp",
    name: "Himachal Pradesh",
    region: "North India",
    description: "Land of the Gods with breathtaking Himalayan peaks, alpine valleys, and adventure destinations.",
    cities: [
      { name: "Manali", slug: "manali", description: "Adventure Capital of India", type: "Mountains" },
      { name: "Shimla", slug: "shimla", description: "Queen of Hill Stations", type: "Hill Station" },
      { name: "Dharamshala", slug: "dharamshala", description: "Little Lhasa of India", type: "Culture" },
      { name: "Kasol", slug: "kasol", description: "Mini Israel of India", type: "Nature" },
      { name: "Spiti Valley", slug: "spiti-valley", description: "Middle Land of High Pass", type: "Adventure" },
    ],
  },
  {
    id: "rj",
    name: "Rajasthan",
    region: "West India",
    description: "The Land of Kings with magnificent forts, vibrant culture, desert landscapes, and royal heritage.",
    cities: [
      { name: "Jaipur", slug: "jaipur", description: "The Pink City", type: "Historical" },
      { name: "Udaipur", slug: "udaipur", description: "City of Lakes", type: "Romantic" },
      { name: "Jaisalmer", slug: "jaisalmer", description: "The Golden City", type: "Desert" },
      { name: "Jodhpur", slug: "jodhpur", description: "The Blue City", type: "Historical" },
      { name: "Pushkar", slug: "pushkar", description: "Land of the Sacred Lake", type: "Religious" },
    ],
  },
  {
    id: "uk",
    name: "Uttarakhand",
    region: "North India",
    description: "Devbhoomi — Land of Gods, with Himalayan peaks, spiritual towns, and adventure sports.",
    cities: [
      { name: "Rishikesh", slug: "rishikesh", description: "Yoga Capital of the World", type: "Spiritual" },
      { name: "Mussoorie", slug: "mussoorie", description: "Queen of the Hills", type: "Hill Station" },
      { name: "Nainital", slug: "nainital", description: "Lake District of India", type: "Nature" },
      { name: "Dehradun", slug: "dehradun", description: "Gateway to the Himalayas", type: "City" },
      { name: "Auli", slug: "auli", description: "Skiing Paradise", type: "Adventure" },
    ],
  },
  {
    id: "kl",
    name: "Kerala",
    region: "South India",
    description: "God's Own Country with backwaters, lush forests, pristine beaches, and cultural treasures.",
    cities: [
      { name: "Alleppey", slug: "alleppey", description: "Venice of the East", type: "Backwaters" },
      { name: "Munnar", slug: "munnar", description: "Tea Gardens Capital", type: "Nature" },
      { name: "Wayanad", slug: "wayanad", description: "Green Paradise", type: "Nature" },
      { name: "Kochi", slug: "kochi", description: "Queen of the Arabian Sea", type: "City" },
      { name: "Thekkady", slug: "thekkady", description: "Spice & Wildlife Haven", type: "Wildlife" },
    ],
  },
  {
    id: "goa",
    name: "Goa",
    region: "West India",
    description: "India's beach paradise with pristine coastlines, Portuguese heritage, and vibrant nightlife.",
    cities: [
      { name: "Panaji", slug: "panaji", description: "Capital City", type: "City" },
      { name: "Calangute", slug: "calangute", description: "Queen of Beaches", type: "Beach" },
      { name: "Baga", slug: "baga", description: "Party Beach", type: "Beach" },
      { name: "Colva", slug: "colva", description: "Peaceful South Goa", type: "Beach" },
      { name: "Old Goa", slug: "old-goa", description: "Heritage Churches", type: "Historical" },
    ],
  },
];

// ─── World Continents ─────────────────────────────────────────────────────────

export const continents = [
  {
    name: "Asia",
    emoji: "🌏",
    color: "from-amber-600 to-orange-700",
    countries: ["India", "Japan", "Indonesia", "Thailand", "UAE", "Singapore", "Nepal", "Bhutan"],
    destinations: 4,
  },
  {
    name: "Europe",
    emoji: "🌍",
    color: "from-blue-600 to-indigo-700",
    countries: ["France", "Italy", "UK", "Germany", "Spain", "Switzerland", "Greece", "Portugal"],
    destinations: 1,
  },
  {
    name: "North America",
    emoji: "🌎",
    color: "from-green-600 to-emerald-700",
    countries: ["USA", "Canada", "Mexico", "Costa Rica", "Cuba"],
    destinations: 0,
  },
  {
    name: "South America",
    emoji: "🌎",
    color: "from-yellow-600 to-lime-700",
    countries: ["Brazil", "Peru", "Argentina", "Colombia", "Chile", "Ecuador"],
    destinations: 0,
  },
  {
    name: "Africa",
    emoji: "🌍",
    color: "from-red-600 to-rose-700",
    countries: ["South Africa", "Kenya", "Egypt", "Morocco", "Tanzania", "Ethiopia"],
    destinations: 0,
  },
  {
    name: "Oceania",
    emoji: "🌏",
    color: "from-cyan-600 to-teal-700",
    countries: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"],
    destinations: 0,
  },
];

// ─── Travel Stats ─────────────────────────────────────────────────────────────

export const travelStats = {
  citiesExplored: 0,
  statesExplored: 0,
  countriesExplored: 0,
  videosUploaded: travelVideos.filter(v => v.placeholder).length,
  blogsPublished: blogPosts.length,
  note: "Stats will update as you mark destinations as visited.",
};

export interface WishlistItem {
  id: string;
  name: string;
  country: string;
  status: 'Dream Destination' | 'Planning' | 'Booked' | 'Upcoming' | 'Completed';
  plannedDate?: string;
  budget?: string;
  notes?: string;
  image?: string;
  priority?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  destination: string;
  date: string;
  category: string;
  type: 'photo' | 'video';
  url: string;
}

export const STORAGE_KEYS = {
  customDestinations: 'roamverse.customDestinations',
  wishlist: 'roamverse.wishlist',
  gallery: 'roamverse.gallery',
  blogs: 'roamverse.blogs',
  adminSession: 'roamverse.adminSession',
  visitedDestinations: 'roamverse.visitedDestinations',
};

export interface AdminSession {
  email: string;
  name: string;
  loggedInAt: string;
  isAdmin: boolean;
}

const readStored = <T,>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

export const loadStoredDestinations = (): Destination[] => {
  const custom = readStored<Destination[]>(STORAGE_KEYS.customDestinations, []);
  return [...destinations, ...custom];
};

export const loadStoredWishlist = (): WishlistItem[] => readStored<WishlistItem[]>(STORAGE_KEYS.wishlist, []);
export const loadStoredGallery = (): GalleryItem[] => readStored<GalleryItem[]>(STORAGE_KEYS.gallery, []);
export const loadStoredBlogs = (): BlogPost[] => readStored<BlogPost[]>(STORAGE_KEYS.blogs, blogPosts);
export const loadAdminSession = (): AdminSession | null => readStored<AdminSession | null>(STORAGE_KEYS.adminSession, null);
export const loadStoredVisitedDestinations = (): string[] => readStored<string[]>(STORAGE_KEYS.visitedDestinations, []);

export const persistStored = <T,>(key: string, value: T) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const saveCustomDestination = (destination: Destination) => {
  const existing = readStored<Destination[]>(STORAGE_KEYS.customDestinations, []);
  const next = [...existing, destination];
  persistStored(STORAGE_KEYS.customDestinations, next);
};

export const saveWishlistItem = (item: WishlistItem) => {
  const existing = loadStoredWishlist();
  const next = [item, ...existing];
  persistStored(STORAGE_KEYS.wishlist, next);
};

export const saveGalleryItem = (item: GalleryItem) => {
  const existing = loadStoredGallery();
  const next = [item, ...existing];
  persistStored(STORAGE_KEYS.gallery, next);
};

export const saveBlogPost = (post: BlogPost) => {
  const existing = loadStoredBlogs();
  const next = [post, ...existing];
  persistStored(STORAGE_KEYS.blogs, next);
};

export const toggleStoredVisitedDestination = (destinationId: string, visited: boolean) => {
  const current = loadStoredVisitedDestinations();
  const next = visited ? [...new Set([...current, destinationId])] : current.filter(id => id !== destinationId);
  persistStored(STORAGE_KEYS.visitedDestinations, next);
};

export const saveAdminSession = (session: AdminSession) => {
  persistStored(STORAGE_KEYS.adminSession, session);
};

export const clearAdminSession = () => {
  persistStored(STORAGE_KEYS.adminSession, null);
};

export const toggleDestinationVisit = (destinationId: string, visited: boolean) => {
  toggleStoredVisitedDestination(destinationId, visited);
  const custom = readStored<Destination[]>(STORAGE_KEYS.customDestinations, []);
  const merged = [...destinations, ...custom].map(item => item.id === destinationId ? { ...item, visited } : item);
  const customNext = merged.filter(item => item.id !== 'seed' && item.id.startsWith('custom-'));
  persistStored(STORAGE_KEYS.customDestinations, customNext);
};

export const setDestinationState = (destinationId: string, patch: Partial<Destination>) => {
  const custom = readStored<Destination[]>(STORAGE_KEYS.customDestinations, []);
  const updated = custom.map(item => item.id === destinationId ? { ...item, ...patch } : item);
  persistStored(STORAGE_KEYS.customDestinations, updated);
};

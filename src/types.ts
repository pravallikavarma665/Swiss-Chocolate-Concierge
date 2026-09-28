export type ChocolateCategory = 
  | 'Milk' 
  | 'Dark' 
  | 'White' 
  | 'Hazelnut' 
  | 'Caramel' 
  | 'Truffle' 
  | 'Fruit' 
  | 'Limited Edition';

export type SweetnessProfile = 
  | 'Low / Intense' 
  | 'Balanced' 
  | 'Creamy' 
  | 'Delicate' 
  | 'Caramelized';

export interface ChocolateProduct {
  id: string;
  name: string;
  chocolatier: string;
  region: 'Zurich' | 'Geneva' | 'Bern' | 'Gruyère & Broc' | 'Glarus' | 'Lucerne & Schwyz' | 'Fribourg';
  canton: string;
  category: ChocolateCategory;
  cacaoPercentage: number | null;
  sweetness: SweetnessProfile;
  priceINR: number;
  weightGrams: number;
  pieceCount?: number;
  flavorNotes: string[];
  shortStory: string;
  longStory: string;
  ingredients: string[];
  craftingMethod: string;
  pairings: string[];
  isFeatured?: boolean;
  isLimited?: boolean;
  editionNumber?: string;
  visualColor: {
    bgGradient: string;
    accent: string;
    glow: string;
    border: string;
  };
}

export type BoxSize = 4 | 8 | 12 | 16;

export type RibbonColor = 'gold' | 'crimson' | 'emerald' | 'navy' | 'silver';

export type IndianOccasion =
  | 'Birthday'
  | 'Anniversary'
  | 'Wedding Gift'
  | 'Diwali'
  | 'Raksha Bandhan'
  | "Valentine's Day"
  | 'Friendship Day'
  | 'Housewarming'
  | 'Just Because';

export interface CustomBox {
  size: BoxSize;
  items: ChocolateProduct[];
  ribbonColor: RibbonColor;
  giftMessage: string;
  recipientName: string;
  occasion: IndianOccasion;
  budgetCapINR: number;
}

export interface SwissRegion {
  id: string;
  name: string;
  cantonCode: string;
  title: string;
  tagline: string;
  description: string;
  historicalPioneers: string;
  signatureTradition: string;
  coordinates: { x: number; y: number }; // percentage on Switzerland vector map
  popularChocolates: string[];
  color: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    id: string;
    label: string;
    detail: string;
    icon: string;
    traitCategory: ChocolateCategory;
  }[];
}

export interface QuizPersona {
  id: string;
  title: string;
  archetype: string;
  summary: string;
  matchingChocolateId: string;
  palateTraits: string[];
  suggestedPairing: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  heroExcerpt: string;
  sections: {
    title: string;
    content: string;
    highlightQuote?: string;
  }[];
}

import { QuizQuestion, QuizPersona } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'How do you prefer to spend an ideal relaxing evening?',
    subtitle: 'Choose the atmosphere that speaks to your senses.',
    options: [
      {
        id: '1a',
        label: 'A quiet, contemplative evening with dark roast coffee & a book',
        detail: 'Appreciating rich, quiet moments and sophisticated depth.',
        icon: '🏔️',
        traitCategory: 'Dark'
      },
      {
        id: '1b',
        label: 'A festive family celebration with laughter & sweet delicacies',
        detail: 'Sharing celebratory sweets, joy, and handcrafted confections.',
        icon: '🥂',
        traitCategory: 'Truffle'
      },
      {
        id: '1c',
        label: 'A cozy get-together with steaming chai & roasted nuts',
        detail: 'Warm conversations, generous platters, and crunchy bites.',
        icon: '☕',
        traitCategory: 'Hazelnut'
      },
      {
        id: '1d',
        label: 'A scenic rooftop evening with salted caramel desserts',
        detail: 'Indulging in golden pastries, butter toffee, and pleasant breezes.',
        icon: '⛵',
        traitCategory: 'Caramel'
      }
    ]
  },
  {
    id: 2,
    question: 'What texture excites your palate the most?',
    subtitle: 'The acoustic and tactile sensation of each bite.',
    options: [
      {
        id: '2a',
        label: 'A clean, crisp acoustic snap that melts into velvety dark silk',
        detail: 'Zero graininess; pure conched cacao clarity.',
        icon: '✨',
        traitCategory: 'Dark'
      },
      {
        id: '2b',
        label: 'Generous crunch of whole roasted hazelnuts or almonds',
        detail: 'Substantial, artisanal mouthfeel with every fracture.',
        icon: '🌰',
        traitCategory: 'Hazelnut'
      },
      {
        id: '2c',
        label: 'A thin chocolate shell that surrenders into molten ganache',
        detail: 'Instant luxury that coats the tongue effortlessly.',
        icon: '🍫',
        traitCategory: 'Truffle'
      },
      {
        id: '2d',
        label: 'Chewy golden toffee with crunchy flakes of mineral rock salt',
        detail: 'Sweet and savory balance with dynamic textural surprises.',
        icon: '🍯',
        traitCategory: 'Caramel'
      }
    ]
  },
  {
    id: 3,
    question: 'When tasting fine chocolate, what flavor notes do you seek?',
    subtitle: 'Your aromatic signature.',
    options: [
      {
        id: '3a',
        label: 'Dark cocoa, roasted coffee beans, and subtle smoky wood',
        detail: 'Complex, sophisticated, and deeply bittersweet.',
        icon: '🍒',
        traitCategory: 'Dark'
      },
      {
        id: '3b',
        label: 'Warm alpine pasture milk, toasted butter, and honey nougat',
        detail: 'Comforting, creamy, and nostalgic chocolate comfort.',
        icon: '🥛',
        traitCategory: 'Milk'
      },
      {
        id: '3c',
        label: 'Rich roasted hazelnuts and golden almonds',
        detail: 'Earthy, robust nuttiness balanced with smooth chocolate.',
        icon: '🌰',
        traitCategory: 'Hazelnut'
      },
      {
        id: '3d',
        label: 'Zesty citrus peel or sweet mountain strawberries',
        detail: 'Bright, refreshing, aromatic and delicately balanced.',
        icon: '🍓',
        traitCategory: 'Fruit'
      }
    ]
  },
  {
    id: 4,
    question: 'What is your philosophy on life’s sweet indulgences?',
    subtitle: 'The soul of your chocolate personality.',
    options: [
      {
        id: '4a',
        label: 'Patience and purity produce timeless masterpieces.',
        detail: 'Never rush perfection; true quality needs unhurried time.',
        icon: '⏳',
        traitCategory: 'Dark'
      },
      {
        id: '4b',
        label: 'Life is meant to be shared generously with friends and family.',
        detail: 'Big platters, broken slabs, and joyous abundance.',
        icon: '🎉',
        traitCategory: 'Hazelnut'
      },
      {
        id: '4c',
        label: 'Every single celebration deserves a touch of ceremony and elegance.',
        detail: 'Even the smallest treat should feel royal and special.',
        icon: '👑',
        traitCategory: 'Truffle'
      },
      {
        id: '4d',
        label: 'Delight lies in the contrast of unexpected harmonies.',
        detail: 'Salt with sweet, bold with subtle, caramel with cocoa.',
        icon: '🧭',
        traitCategory: 'Caramel'
      }
    ]
  }
];

export const QUIZ_PERSONAS: Record<string, QuizPersona> = {
  Dark: {
    id: 'alpine-purist',
    title: 'The Alpine Purist',
    archetype: 'Connoisseur of Terroir & Intense Cacao',
    summary: 'You revere authenticity, depth, and unhurried craftsmanship. You appreciate dark chocolate conched for 72+ hours, where smoky cedar, red berries, and intense cacao speak for themselves without needing excessive sugar.',
    matchingChocolateId: 'lindt-excellence-dark-70',
    palateTraits: ['Prefers 70%+ Cacao', 'Enjoys Bitter-Sweet Balance', 'Subtle Red Fruit Notes', 'Appreciates Slow Conching'],
    suggestedPairing: 'Single malt or double espresso ristretto'
  },
  Hazelnut: {
    id: 'glarus-artisan',
    title: 'The Glarus Artisan',
    archetype: 'Lover of Hand-Broken Slabs & Nutty Abundance',
    summary: 'Warm, generous, and tactile. You appreciate freshly made chocolate loaded with whole golden hazelnuts batch-roasted in copper drums. To you, chocolate is joyous, crunchy, and meant to be shared with those you cherish.',
    matchingChocolateId: 'laderach-frischschoggi-hazelnut',
    palateTraits: ['Whole Roasted Inclusions', 'Creamy Alpine Dairy', 'Acoustic Snap', 'Generous Sharing Format'],
    suggestedPairing: 'Cardamom Masala Chai or South Indian Filter Coffee'
  },
  Truffle: {
    id: 'paradeplatz-sovereign',
    title: 'The Paradeplatz Connoisseur',
    archetype: 'Emissary of Haute Chocolaterie & Silk Ganaches',
    summary: 'Sophisticated and ceremonial. You demand fresh confectionery crafted with fresh alpine cream and dusted in featherlight cocoa. You savor each bite mindfully, appreciating the moment when silk ganache surrenders at body temperature.',
    matchingChocolateId: 'spruengli-swiss-truffles',
    palateTraits: ['Fresh Whipped Ganache', 'Rare Grand Cru Cacao', 'Ceremonial Velvet Packaging', 'Featherlight Cocoa Dust'],
    suggestedPairing: 'Darjeeling First Flush Tea or Sparkling Wine'
  },
  Caramel: {
    id: 'fribourg-alchemist',
    title: 'The Fribourg Alchemist',
    archetype: 'Master of Sweet-Savory Contrasts & Salted Toffee',
    summary: 'Creative, curious, and indulgent. You delight in the interplay of slow caramelized toffee and crunchy crystals of subterranean Bex alpine salt. You believe the greatest flavors happen when rich sweetness meets mineral crunch.',
    matchingChocolateId: 'lindt-caramel-sea-salt',
    palateTraits: ['Slow-Cooked Golden Toffee', 'Bex Alpine Rock Salt', 'Bittersweet Dark Chocolate', 'Dynamic Textures'],
    suggestedPairing: 'Caramel Macchiato or Iced Vanilla Latte'
  },
  Fruit: {
    id: 'valais-botanist',
    title: 'The Valais Botanist',
    archetype: 'Lover of Sun-Drenched Orchards & Zesty Aromas',
    summary: 'Vibrant, refreshing, and poetic. You adore when fine Swiss dark chocolate meets the aromatic zest of candied Mediterranean orange peel and slivered almonds. You love bright confectionery that surprises the palate.',
    matchingChocolateId: 'lindt-orange-dark',
    palateTraits: ['Zesty Candied Orange Peel', 'Crisp Almond Slivers', 'Aromatic Citrus Oils', 'Delicate Sweetness'],
    suggestedPairing: 'Ginger Cinnamon Tea or Green Jasmine Tea'
  },
  Milk: {
    id: 'gruyere-traditionalist',
    title: 'The Alpine Traditionalist',
    archetype: 'Guardian of 1875 Swiss Milk Chocolate Perfection',
    summary: 'Kind-hearted and nostalgic. You appreciate the legendary gift Swiss chocolatiers gave the world: rich, comforting milk chocolate born from lush alpine meadow pastures and slow stone-milled nut pralines.',
    matchingChocolateId: 'lindt-classic-milk',
    palateTraits: ['Fresh Pasture Butterfat', 'Silky Melting Texture', 'Gentle Vanilla Notes', 'Warm Nostalgia'],
    suggestedPairing: 'Warm Milk with Saffron or Classic Hot Chocolate'
  }
};

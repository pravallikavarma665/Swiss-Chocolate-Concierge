import { SwissRegion } from '../types';

export const SWISS_REGIONS: SwissRegion[] = [
  {
    id: 'zurich',
    name: 'Zurich',
    cantonCode: 'ZH',
    title: 'The Haute Confectionery Capital',
    tagline: 'Paradeplatz Gold, Fresh Truffes & Conching Heritage',
    description: 'Zurich is the financial and confiserie crown of Switzerland. Along Paradeplatz and Lake Zurich in Kilchberg, generations of master chocolatiers refined daily-fresh ganaches and international conching standards.',
    historicalPioneers: 'David Sprüngli & Rodolphe Sprüngli (1836), Kilchberg Conche Guilds',
    signatureTradition: 'Fresh Truffles (made daily with a freshness covenant), Lindt Excellence dark bars, and grand luxury gift coffrets.',
    coordinates: { x: 68, y: 32 },
    popularChocolates: ['spruengli-swiss-truffles', 'lindt-classic-milk', 'lindt-excellence-dark-70', 'lindt-assorted-luxury-box'],
    color: '#D4AF37'
  },
  {
    id: 'geneva',
    name: 'Geneva',
    cantonCode: 'GE',
    title: 'The Diplomatic City of Pavés',
    tagline: 'Old Town Cobblestone Meltaways & Belle Époque Artisans',
    description: 'Perched at the southern tip of Lac Léman, Geneva’s chocolate history is rooted in delicate hand-cut truffles and historic water-mill confectionery workshops along the Rhône and Versoix rivers.',
    historicalPioneers: 'Jacques Favarger (1826), Du Rhône Chocolatier (1875), Chocolaterie Auer (1939)',
    signatureTradition: 'Pavés de Genève (smooth cubes dusted with cocoa mimicking wet Old Town cobblestones) and roasted almond confections.',
    coordinates: { x: 18, y: 78 },
    popularChocolates: ['lindt-classic-almond', 'lindt-orange-dark'],
    color: '#E11D48'
  },
  {
    id: 'bern',
    name: 'Bern',
    cantonCode: 'BE',
    title: 'The Cradle of the Conche & Matterhorn Peaks',
    tagline: 'Where Rodolphe Lindt Invented Melty Chocolate in 1879',
    description: 'In the Swiss federal capital, nestled in a loop of the turquoise river Aare, two of chocolate’s greatest innovations occurred: the accidental invention of the conching process in 1879 and the triangular honey-almond torrone peak in 1908.',
    historicalPioneers: 'Rodolphe Lindt (1879 conche invention), Theodor Tobler & Emil Baumann (1908), Camille Bloch (1942)',
    signatureTradition: 'Matterhorn triangular bars and roasted almond nougat clusters loved across generations.',
    coordinates: { x: 42, y: 46 },
    popularChocolates: ['toblerone-classic-honey-almond'],
    color: '#F59E0B'
  },
  {
    id: 'gruyere-broc',
    name: 'Broc & Gruyère',
    cantonCode: 'FR/VD',
    title: 'The Valley of Alpine Milk Terroir',
    tagline: 'Home of the Oldest Swiss Chocolate Brand (1819) & Mountain Pastures',
    description: 'Surrounded by the pre-Alpine peaks of Gruyère, Broc is home to Switzerland’s historic "Maison Cailler". Here, fresh whole milk from local dairy cows is condensed directly into chocolate liquor.',
    historicalPioneers: 'François-Louis Cailler (1819 Vevey & 1898 Broc factory), Daniel Peter (invented milk chocolate in 1875)',
    signatureTradition: 'Frigor melting hazelnut cream squares and condensed alpine whole milk chocolate bars.',
    coordinates: { x: 34, y: 64 },
    popularChocolates: ['cailler-frigor-noisette'],
    color: '#10B981'
  },
  {
    id: 'lucerne-schwyz',
    name: 'Lucerne & Schwyz',
    cantonCode: 'LU/SZ',
    title: 'The Grand Cru & Lakefront Masters',
    tagline: 'World-Champion Criollo Couvertures & Chapel Bridge Pralines',
    description: 'Under the shadow of Mount Pilatus and Lake Lucerne, master chocolatiers collaborate with Felchlin in Schwyz—the legendary supplier of Grand Cru Maracaibo cacao that won the title of World’s Best Chocolate in Italy.',
    historicalPioneers: 'Max Heini & Felchlin Confectioners (1908)',
    signatureTradition: 'Micro-batch single-origin Criollo bars, 90-hour longitudinal conching, and lakefront confiserie artistry.',
    coordinates: { x: 58, y: 44 },
    popularChocolates: ['felchlin-grand-cru-maracaibo'],
    color: '#8B5CF6'
  },
  {
    id: 'glarus',
    name: 'Glarus',
    cantonCode: 'GL',
    title: 'The Fresh Slab Pioneer',
    tagline: 'Hand-Fractured FrischSchoggi & Whole Roasted Hazelnuts',
    description: 'Surrounded by jagged mountain faces in Ennenda, Canton Glarus is the birthplace of freshly cast chocolate slabs loaded with whole nuts and berries, broken by hand and sold by weight.',
    historicalPioneers: 'Rudolf Läderach (1962), Elias Läderach (World Chocolate Master 2018)',
    signatureTradition: 'FrischSchoggi (hand-snapped slabs consumed fresh within weeks of casting) and Masterpiece gift coffrets.',
    coordinates: { x: 74, y: 42 },
    popularChocolates: ['laderach-frischschoggi-hazelnut', 'laderach-masterpiece-box', 'laderach-white-strawberry'],
    color: '#EC4899'
  },
  {
    id: 'fribourg',
    name: 'Fribourg',
    cantonCode: 'FR',
    title: 'The Artisan Blonde & Rock Salt Haven',
    tagline: 'Slow Maillard Caramelization with Bex Alpine Salt',
    description: 'Canton Fribourg balances Swiss-French culinary refinement with deep dairy traditions. Known for slow-cooking milk in copper cauldrons until natural toffee and caramel chocolate notes bloom.',
    historicalPioneers: 'Wilhelm Kaiser (Villars Maître Chocolatier 1901)',
    signatureTradition: 'Blonde caramel chocolate with alpine rock salt crystals and rich milk pralines.',
    coordinates: { x: 38, y: 55 },
    popularChocolates: ['lindt-caramel-sea-salt', 'cailler-frigor-noisette'],
    color: '#3B82F6'
  }
];

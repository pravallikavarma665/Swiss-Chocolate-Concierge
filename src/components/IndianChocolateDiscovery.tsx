import React, { useState } from 'react';
import { ChocolateProduct } from '../types';
import { ChocolateGraphic } from './ChocolateGraphic';
import { Sparkles, Eye, Plus, Check, Heart, MapPin } from 'lucide-react';

interface IndianChocolateDiscoveryProps {
  products: ChocolateProduct[];
  onSelectProduct: (product: ChocolateProduct) => void;
  onAddToBox: (product: ChocolateProduct) => void;
  isItemInBox: (productId: string) => boolean;
}

export type TastePreference = 
  | 'Very Sweet'
  | 'Mildly Sweet'
  | 'Rich & Creamy'
  | 'Dark & Intense'
  | 'Nutty'
  | 'Fruity'
  | 'Caramel';

interface PreferenceConfig {
  id: TastePreference;
  label: string;
  icon: string;
  description: string;
  matches: (product: ChocolateProduct) => boolean;
  matchReason: string;
}

const PREFERENCES: PreferenceConfig[] = [
  {
    id: 'Rich & Creamy',
    label: 'Rich & Creamy',
    icon: '🥛',
    description: 'Silky alpine pasture milk and slow-melt cocoa butter with zero graininess.',
    matches: (p) => p.category === 'Milk' || p.sweetness === 'Creamy' || p.flavorNotes.some(n => n.toLowerCase().includes('cream') || n.toLowerCase().includes('milk')),
    matchReason: 'Made with pure Swiss alpine dairy milk that coats the palate with luxurious creaminess.'
  },
  {
    id: 'Dark & Intense',
    label: 'Dark & Intense',
    icon: '🍫',
    description: 'High-cacao dark chocolates (55% to 70%+) with profound roasted depth and complex tannins.',
    matches: (p) => p.category === 'Dark' || (p.cacaoPercentage !== null && p.cacaoPercentage >= 55) || p.sweetness === 'Low / Intense',
    matchReason: 'Masterfully conched high-percentage cacao delivering bittersweet chocolate depth with zero harshness.'
  },
  {
    id: 'Nutty',
    label: 'Nutty',
    icon: '🌰',
    description: 'Abundance of whole roasted Piedmont hazelnuts, golden almonds, and stone-ground praline.',
    matches: (p) => p.category === 'Hazelnut' || p.name.toLowerCase().includes('hazelnut') || p.name.toLowerCase().includes('almond') || p.name.toLowerCase().includes('praline') || p.name.toLowerCase().includes('toblerone'),
    matchReason: 'Packed with whole freshly roasted nuts and slow-milled praline for an acoustic crunch.'
  },
  {
    id: 'Caramel',
    label: 'Caramel',
    icon: '🍯',
    description: 'Golden browned butter toffee, blonde chocolate, and delicate rock salt crystals.',
    matches: (p) => p.category === 'Caramel' || p.sweetness === 'Caramelized' || p.flavorNotes.some(n => n.toLowerCase().includes('caramel') || n.toLowerCase().includes('toffee')),
    matchReason: 'Slow Maillard caramelized sugars paired with subtle alpine rock salt for an irresistible sweet-savory note.'
  },
  {
    id: 'Fruity',
    label: 'Fruity',
    icon: '🍊',
    description: 'Zesty candied orange peel, mountain strawberries, and vibrant berry notes.',
    matches: (p) => p.category === 'Fruit' || p.flavorNotes.some(n => n.toLowerCase().includes('orange') || n.toLowerCase().includes('berry') || n.toLowerCase().includes('strawberry') || n.toLowerCase().includes('citrus')),
    matchReason: 'Enriched with real fruit inclusions and aromatic citrus oils that refresh the palate.'
  },
  {
    id: 'Mildly Sweet',
    label: 'Mildly Sweet',
    icon: '⚖️',
    description: 'Equilibrium between sweetness and cacao—neither overwhelmingly sugary nor bitter.',
    matches: (p) => p.sweetness === 'Balanced' || (p.cacaoPercentage !== null && p.cacaoPercentage >= 45 && p.cacaoPercentage <= 65),
    matchReason: 'Balanced sugar formulation that highlights authentic cacao aromatics without cloying sweetness.'
  },
  {
    id: 'Very Sweet',
    label: 'Very Sweet',
    icon: '✨',
    description: 'Comforting, dessert-style confections featuring white cocoa butter, nougat, or honey.',
    matches: (p) => p.category === 'White' || p.name.toLowerCase().includes('white') || p.name.toLowerCase().includes('honey') || p.name.toLowerCase().includes('toblerone') || p.sweetness === 'Delicate' || p.sweetness === 'Caramelized',
    matchReason: 'Sweet tooth dream infused with wildflower honey, nougat, or delicate vanilla white chocolate.'
  }
];

export const IndianChocolateDiscovery: React.FC<IndianChocolateDiscoveryProps> = ({
  products,
  onSelectProduct,
  onAddToBox,
  isItemInBox
}) => {
  const [selectedPref, setSelectedPref] = useState<TastePreference>('Rich & Creamy');

  const currentConfig = PREFERENCES.find((p) => p.id === selectedPref) || PREFERENCES[0];

  const matchedChocolates = products.filter(currentConfig.matches);

  return (
    <section id="chocolate-discovery" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#2A180E]">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B63] mb-2 flex items-center justify-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Personal Taste Palate Matcher</span>
          <span aria-hidden="true">·</span>
          <span>Find Your Favorite</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF6F0]">
          Which Swiss Chocolate Would You Love?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#C8B6AC] leading-relaxed">
          Select what you crave today—from velvety rich milk and crunchy roasted hazelnuts to intense dark cacao or zesty fruit—and our sommelier logic reveals your ideal match.
        </p>
      </div>

      {/* 7 Preference Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2.5 mb-10">
        {PREFERENCES.map((pref) => {
          const isSelected = selectedPref === pref.id;
          return (
            <button
              key={pref.id}
              type="button"
              onClick={() => setSelectedPref(pref.id)}
              className={`px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#C59B63] text-[#120804] shadow-lg shadow-[#D4AF37]/25 font-bold scale-105'
                  : 'bg-[#180E0A] text-[#C8B6AC] hover:text-[#FAF6F0] border border-[#382116] hover:border-[#5C3725]'
              }`}
            >
              <span>{pref.icon}</span>
              <span>{pref.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Preference Description Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#180E0A] border border-[#3E2416] mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#26150E] border border-[#5A351D] flex items-center justify-center text-xl shrink-0">
            {currentConfig.icon}
          </div>
          <div>
            <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
              {currentConfig.label} Palate Profile
            </div>
            <p className="text-xs sm:text-sm text-[#C8B6AC]">
              {currentConfig.description}
            </p>
          </div>
        </div>

        <div className="text-xs text-[#A8968C] shrink-0 font-mono bg-[#120804] px-3 py-1.5 rounded-lg border border-[#2F190E]">
          Found <strong className="text-[#D4AF37]">{matchedChocolates.length}</strong> Matching Chocolates
        </div>
      </div>

      {/* Grid of Recommended Chocolates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matchedChocolates.map((product) => {
          const inBox = isItemInBox(product.id);

          return (
            <div
              key={product.id}
              className="bg-[#180E0A] border border-[#382116] hover:border-[#D4AF37]/60 rounded-xl overflow-hidden shadow-xl flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Visual Header */}
                <div className="relative">
                  <ChocolateGraphic type={product.category} className="h-40 w-full" />
                  
                  {/* Cacao % */}
                  <div className="absolute top-3 left-3 bg-[#120804]/90 backdrop-blur-sm border border-[#523422] rounded px-2.5 py-1 text-xs font-mono font-semibold text-[#D4AF37]">
                    {product.cacaoPercentage ? `${product.cacaoPercentage}% Cacao` : 'Pure Cocoa Butter'}
                  </div>

                  {/* Origin */}
                  <div className="absolute top-3 right-3 bg-[#120804]/90 backdrop-blur-sm border border-[#523422] rounded px-2.5 py-1 text-xs font-medium text-[#FAF6F0] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C59B63]" />
                    <span>{product.region}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <div className="text-xs text-[#C59B63] font-medium tracking-wide">
                      {product.chocolatier}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-[#FAF6F0] group-hover:text-[#D4AF37] transition-colors line-clamp-1 mt-0.5">
                      {product.name}
                    </h3>
                  </div>

                  {/* Indian Rupee Pricing */}
                  <div className="flex items-baseline justify-between border-y border-[#28150E] py-2">
                    <div className="font-mono text-xl font-bold text-[#FAF6F0] tabular-nums">
                      ₹{product.priceINR.toLocaleString('en-IN')}
                    </div>
                    <span className="text-xs text-[#A8968C]">
                      {product.weightGrams}g {product.pieceCount ? `· ${product.pieceCount} pcs` : ''}
                    </span>
                  </div>

                  {/* Match Reason highlight */}
                  <div className="p-2.5 rounded-lg bg-[#140C08] border border-[#2F1A0F] text-xs text-[#D6C4B8]">
                    <div className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-wider mb-0.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Why you will love this:</span>
                    </div>
                    <p className="line-clamp-2 text-[#C8B6AC] text-[11px]">
                      {currentConfig.matchReason}
                    </p>
                  </div>

                  {/* Flavor Notes */}
                  <div className="text-[11px] text-[#A8968C] line-clamp-1">
                    <strong className="text-[#C59B63]">Notes: </strong>
                    {product.flavorNotes.join(' · ')}
                  </div>

                </div>
              </div>

              {/* Actions */}
              <div className="p-5 pt-0">
                <div className="border-t border-[#26150E] pt-3 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="py-2.5 px-2 rounded-lg bg-[#20120B] border border-[#3A2216] text-xs font-semibold text-[#FAF6F0] hover:text-[#D4AF37] hover:border-[#C59B63] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Story</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onAddToBox(product)}
                    className={`py-2.5 px-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      inBox
                        ? 'bg-[#2E1E16] text-[#D4AF37] border border-[#D4AF37]'
                        : 'bg-gradient-to-r from-[#D4AF37] to-[#C59B63] text-[#120804] hover:brightness-110 shadow-sm'
                    }`}
                  >
                    {inBox ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>In Box</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Box</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};

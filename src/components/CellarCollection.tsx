import React, { useState } from 'react';
import { ChocolateProduct, ChocolateCategory } from '../types';
import { ChocolateGraphic } from './ChocolateGraphic';
import { Search, MapPin, Eye, Plus, Check } from 'lucide-react';

interface CellarCollectionProps {
  products: ChocolateProduct[];
  onSelectProduct: (product: ChocolateProduct) => void;
  onAddToBox: (product: ChocolateProduct) => void;
  isItemInBox: (productId: string) => boolean;
}

const CATEGORIES: { id: 'All' | ChocolateCategory; label: string; count?: number }[] = [
  { id: 'All', label: 'All Cellar Reserves' },
  { id: 'Milk', label: 'Milk Chocolate' },
  { id: 'Dark', label: 'Dark Chocolate (55%–70%)' },
  { id: 'White', label: 'White Chocolate' },
  { id: 'Hazelnut', label: 'Hazelnut & Almond' },
  { id: 'Caramel', label: 'Caramel & Sea Salt' },
  { id: 'Truffle', label: 'Swiss Truffles' },
  { id: 'Fruit', label: 'Orange & Strawberry' },
  { id: 'Limited Edition', label: 'Assorted & Gift Boxes' },
];

export const CellarCollection: React.FC<CellarCollectionProps> = ({
  products,
  onSelectProduct,
  onAddToBox,
  isItemInBox,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ChocolateCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'cacao-desc' | 'price-asc' | 'price-desc'>('featured');

  // Filter products
  const filtered = products.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.chocolatier.toLowerCase().includes(query) ||
      p.region.toLowerCase().includes(query) ||
      p.flavorNotes.some((n) => n.toLowerCase().includes(query));
    return matchesCat && matchesSearch;
  });

  // Sort products
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'cacao-desc') {
      return (b.cacaoPercentage || 0) - (a.cacaoPercentage || 0);
    }
    if (sortBy === 'price-asc') {
      return a.priceINR - b.priceINR;
    }
    if (sortBy === 'price-desc') {
      return b.priceINR - a.priceINR;
    }
    return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
  });

  return (
    <section id="collection" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Title & Philosophy */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B63] mb-2">
          The Vault & Tasting Cellar
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF6F0]">
          Explore the Cellar
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#C8B6AC] leading-relaxed">
          Browse Switzerland’s definitive vault of fine confections with pricing in Indian Rupees (₹). Filter by chocolate category, explore Swiss cantons, and discover the craftsmanship behind every piece.
        </p>
      </div>

      {/* Filter Tabs & Search Control Bar */}
      <div className="space-y-4 mb-10">
        
        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#C59B63] text-[#120804] shadow-md shadow-[#D4AF37]/15'
                    : 'bg-[#1C100B] text-[#C8B6AC] hover:text-[#FAF6F0] border border-[#382116] hover:border-[#5C3725]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-[#180E0A] border border-[#362116] rounded-xl">
          
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#8A766C] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, chocolate type, or flavor note..."
              className="w-full pl-10 pr-4 py-2 bg-[#120804] border border-[#3A2216] rounded-lg text-xs text-[#FAF6F0] placeholder-[#7A665C] focus:outline-none focus:border-[#C59B63]"
            />
          </div>

          {/* Results count & Sort */}
          <div className="flex items-center justify-between w-full sm:w-auto gap-4 text-xs text-[#A8968C]">
            <span className="tabular-nums">
              Showing <strong className="text-[#FAF6F0]">{sorted.length}</strong> chocolates
            </span>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#120804] border border-[#3A2216] text-[#FAF6F0] rounded-md px-3 py-1.5 text-xs focus:outline-none focus:border-[#C59B63] cursor-pointer"
              >
                <option value="featured">Cellar Curated</option>
                <option value="cacao-desc">Cocoa % (Highest First)</option>
                <option value="price-asc">Price (Lowest First)</option>
                <option value="price-desc">Price (Highest First)</option>
              </select>
            </div>
          </div>

        </div>

      </div>

      {/* Grid of Chocolates */}
      {sorted.length === 0 ? (
        <div className="p-12 text-center border border-dashed border-[#3A2216] rounded-xl bg-[#160D09]">
          <p className="text-sm text-[#A8968C]">No chocolates matched your filter criteria.</p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-3 text-xs text-[#D4AF37] underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sorted.map((product) => {
            const inBox = isItemInBox(product.id);

            return (
              <div
                key={product.id}
                className="bg-[#180E0A] border border-[#341F15] rounded-xl overflow-hidden hover:border-[#C59B63]/60 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="relative">
                    <ChocolateGraphic type={product.category} className="h-36 w-full" />
                    
                    {/* Cacao Pill */}
                    <div className="absolute top-2.5 left-2.5 bg-[#120804]/90 backdrop-blur-sm border border-[#4D2E1B] rounded px-2 py-0.5 text-[11px] font-mono text-[#D4AF37]">
                      {product.cacaoPercentage ? `${product.cacaoPercentage}% Cacao` : 'Pure Cocoa Butter'}
                    </div>

                    {product.isLimited && (
                      <div className="absolute top-2.5 right-2.5 bg-[#A81A1A] text-white px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase">
                        Limited
                      </div>
                    )}
                  </div>

                  {/* Card Info */}
                  <div className="p-4 space-y-3">
                    <div>
                      <div className="flex items-center gap-1 text-[11px] text-[#C59B63]">
                        <MapPin className="w-2.5 h-2.5" />
                        <span>{product.region}, {product.canton}</span>
                      </div>
                      <h3 className="font-serif text-base font-semibold text-[#FAF6F0] mt-0.5 group-hover:text-[#D4AF37] transition-colors leading-snug line-clamp-1">
                        {product.name}
                      </h3>
                      <div className="text-[11px] text-[#8A766C]">
                        {product.chocolatier}
                      </div>
                    </div>

                    {/* Price in INR and weight */}
                    <div className="flex items-baseline justify-between border-y border-[#26150E] py-2">
                      <div className="font-mono text-base font-bold text-[#FAF6F0] tabular-nums">
                        ₹{product.priceINR.toLocaleString('en-IN')}
                      </div>
                      <span className="text-[11px] text-[#A8968C]">
                        {product.weightGrams}g
                      </span>
                    </div>

                    {/* Flavor Notes */}
                    <div className="text-[11px] text-[#C8B6AC] line-clamp-1">
                      {product.flavorNotes.join(' · ')}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-4 pt-0 space-y-2">
                  <div className="border-t border-[#26150E] pt-3 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      className="py-2 px-2 rounded bg-[#20120B] border border-[#3A2216] text-[11px] font-semibold text-[#FAF6F0] hover:text-[#D4AF37] hover:border-[#C59B63] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Details</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onAddToBox(product)}
                      className={`py-2 px-2 rounded text-[11px] font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1 cursor-pointer ${
                        inBox
                          ? 'bg-[#2E1E16] text-[#D4AF37] border border-[#D4AF37]'
                          : 'bg-gradient-to-r from-[#D4AF37] to-[#C59B63] text-[#120804] hover:brightness-110 shadow-sm'
                      }`}
                    >
                      {inBox ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>In Box</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          <span>+ Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </section>
  );
};

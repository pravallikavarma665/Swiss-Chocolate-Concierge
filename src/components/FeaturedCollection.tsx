import React from 'react';
import { ChocolateProduct } from '../types';
import { ChocolateGraphic } from './ChocolateGraphic';
import { Sparkles, Plus, MapPin, Eye, Check } from 'lucide-react';

interface FeaturedCollectionProps {
  products: ChocolateProduct[];
  onSelectProduct: (product: ChocolateProduct) => void;
  onAddToBox: (product: ChocolateProduct) => void;
  isItemInBox: (productId: string) => boolean;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  products,
  onSelectProduct,
  onAddToBox,
  isItemInBox,
}) => {
  const featured = products.filter((p) => p.isFeatured).slice(0, 6);

  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#2A180E]">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C59B63] flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Cellar Reserves</span>
            <span aria-hidden="true">·</span>
            <span>Master Sommelier Selection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#FAF6F0]">
            Featured Swiss Confections
          </h2>
        </div>
        <p className="text-sm text-[#A8968C] max-w-md">
          Six masterworks representing the highest expression of Swiss cacao conching, alpine dairy terroir, and historic confiserie craft, curated for chocolate lovers in India.
        </p>
      </div>

      {/* Featured Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {featured.map((product) => {
          const inBox = isItemInBox(product.id);

          return (
            <div
              key={product.id}
              className="bg-[#180E0A] border border-[#3A2216] rounded-xl overflow-hidden shadow-xl hover:border-[#C59B63]/70 transition-all flex flex-col justify-between group"
            >
              {/* Card Graphic Header */}
              <div>
                <div className="relative">
                  <ChocolateGraphic type={product.category} className="h-44 w-full" />
                  
                  {/* Cocoa percentage badge */}
                  <div className="absolute top-3 left-3 bg-[#120804]/90 backdrop-blur-sm border border-[#523422] rounded px-2.5 py-1 text-xs font-mono font-semibold text-[#D4AF37]">
                    {product.cacaoPercentage ? `${product.cacaoPercentage}% Cacao` : 'Pure Cocoa Butter'}
                  </div>

                  {/* Origin Badge */}
                  <div className="absolute top-3 right-3 bg-[#120804]/90 backdrop-blur-sm border border-[#523422] rounded px-2.5 py-1 text-xs font-medium text-[#FAF6F0] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C59B63]" />
                    <span>{product.region}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  
                  {/* Chocolatier & Name */}
                  <div>
                    <div className="text-xs text-[#C59B63] font-medium tracking-wide">
                      {product.chocolatier}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#FAF6F0] mt-0.5 group-hover:text-[#D4AF37] transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  {/* Price in INR */}
                  <div className="flex items-baseline justify-between border-y border-[#2B180F] py-2.5">
                    <div className="font-mono text-xl font-bold text-[#FAF6F0] tabular-nums">
                      ₹{product.priceINR.toLocaleString('en-IN')}
                    </div>
                    <span className="text-xs text-[#A8968C]">
                      {product.weightGrams}g {product.pieceCount ? `· ${product.pieceCount} pcs` : ''}
                    </span>
                  </div>

                  {/* Flavor Notes */}
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#A8968C] mb-1">
                      Flavor Notes:
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#E8DCD4]">
                      {product.flavorNotes.map((note, idx) => (
                        <React.Fragment key={idx}>
                          <span>{note}</span>
                          {idx < product.flavorNotes.length - 1 && (
                            <span aria-hidden="true" className="text-[#C59B63]">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Short Story */}
                  <p className="text-xs text-[#C8B6AC] leading-relaxed line-clamp-3">
                    {product.shortStory}
                  </p>

                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 space-y-2">
                <div className="border-t border-[#2B180F] pt-4 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="w-full py-2.5 px-3 rounded-md bg-[#22130C] border border-[#3E2417] text-xs font-semibold text-[#FAF6F0] hover:text-[#D4AF37] hover:border-[#C59B63] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Story & Profile</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onAddToBox(product)}
                    className={`w-full py-2.5 px-3 rounded-md text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      inBox
                        ? 'bg-[#2E1E16] text-[#D4AF37] border border-[#D4AF37]'
                        : 'bg-gradient-to-r from-[#D4AF37] to-[#C59B63] text-[#120804] hover:brightness-110 shadow-sm'
                    }`}
                  >
                    {inBox ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>In Gift Box</span>
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

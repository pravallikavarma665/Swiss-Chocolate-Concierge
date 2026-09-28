import React from 'react';
import { ChocolateProduct } from '../types';
import { ChocolateGraphic } from './ChocolateGraphic';
import { X, MapPin, Sparkles, Plus, Check, Coffee, ShieldCheck, Heart, ThermometerSnowflake } from 'lucide-react';

interface ProductModalProps {
  product: ChocolateProduct | null;
  onClose: () => void;
  onAddToBox: (product: ChocolateProduct) => void;
  isItemInBox: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToBox,
  isItemInBox,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="bg-[#180E0A] border border-[#442718] rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#120804]/80 hover:bg-[#22120A] border border-[#4A2D1B] text-[#C8B6AC] hover:text-[#FAF6F0] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto">
          
          {/* Header Banner Graphic */}
          <div className="relative">
            <ChocolateGraphic type={product.category} className="h-56 sm:h-64 w-full" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#180E0A] via-transparent to-black/30 pointer-events-none" />

            {/* Badges on Banner */}
            <div className="absolute bottom-4 left-6 flex flex-wrap items-center gap-2">
              <span className="bg-[#120804]/90 backdrop-blur-md border border-[#523422] rounded px-3 py-1 text-xs font-mono font-semibold text-[#D4AF37]">
                {product.cacaoPercentage ? `${product.cacaoPercentage}% Cacao Mass` : 'Pure Alpine Cocoa Butter'}
              </span>
              <span className="bg-[#120804]/90 backdrop-blur-md border border-[#523422] rounded px-3 py-1 text-xs text-[#FAF6F0] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C59B63]" />
                <span>{product.region}, Canton {product.canton}</span>
              </span>
              {product.isLimited && (
                <span className="bg-[#A81A1A] text-white px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase">
                  {product.editionNumber || 'Limited Harvest Release'}
                </span>
              )}
            </div>
          </div>

          {/* Detailed Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Title, Chocolatier & Price Block */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#2C180E] pb-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#C59B63] flex items-center gap-1.5 mb-1">
                  <span>{product.chocolatier}</span>
                  <span aria-hidden="true">·</span>
                  <span>{product.category} Reserve</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#FAF6F0]">
                  {product.name}
                </h2>
                <div className="mt-1 text-xs text-[#A8968C] flex items-center gap-3">
                  <span>Weight: {product.weightGrams}g</span>
                  {product.pieceCount && <span>· Piece Count: {product.pieceCount} pcs</span>}
                  <span>· Sweetness Profile: <strong className="text-[#FAF6F0]">{product.sweetness}</strong></span>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <div className="font-mono text-3xl font-bold text-[#FAF6F0] tabular-nums">
                  ₹{product.priceINR.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-[#A8968C] mt-0.5 flex items-center sm:justify-end gap-1">
                  <ThermometerSnowflake className="w-3 h-3 text-cyan-400" />
                  <span>Cold-chain delivery across India</span>
                </div>
              </div>
            </div>

            {/* Flavor Profile Notes */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C59B63] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Flavor Profile & Palate Architecture</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.flavorNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#22130C] border border-[#3E2519] text-xs font-medium text-[#FAF6F0]"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* The Confection Story */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C59B63]">
                The Story Behind The Confection
              </h3>
              <p className="text-sm text-[#D6C4B8] leading-relaxed">
                {product.longStory}
              </p>
            </div>

            {/* Crafting & Conching Method & Ingredients (Side by Side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Crafting Method */}
              <div className="p-4 rounded-xl bg-[#140C08] border border-[#301B11] space-y-2">
                <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Swiss Crafting & Conching Method</span>
                </div>
                <p className="text-xs text-[#A8968C] leading-relaxed">
                  {product.craftingMethod}
                </p>
              </div>

              {/* Ingredients */}
              <div className="p-4 rounded-xl bg-[#140C08] border border-[#301B11] space-y-2">
                <div className="text-xs font-semibold text-[#C59B63] uppercase tracking-wider flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5" />
                  <span>Authentic Ingredients</span>
                </div>
                <ul className="text-xs text-[#A8968C] space-y-1 list-disc list-inside">
                  {product.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Sommelier Pairings */}
            <div className="p-4 rounded-xl bg-[#20120B] border border-[#3E2519] space-y-2">
              <div className="text-xs font-semibold text-[#FAF6F0] flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Recommended Sommelier Pairings:</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-[#D4AF37]">
                {product.pairings.map((p, i) => (
                  <span key={i} className="bg-[#140C08] px-2.5 py-1 rounded border border-[#3E2519]">
                    {p}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Modal Bottom Action */}
          <div className="p-5 sm:p-6 bg-[#140C08] border-t border-[#2C180E] flex items-center justify-between gap-4">
            <div className="text-xs text-[#A8968C]">
              <span>Handcrafted in Switzerland</span>
              <span className="mx-2">·</span>
              <span className="text-[#C59B63]">Shipped in Temperature-Controlled Packaging to India</span>
            </div>

            <button
              type="button"
              onClick={() => {
                onAddToBox(product);
              }}
              className={`py-3 px-6 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                isItemInBox
                  ? 'bg-[#2E1E16] text-[#D4AF37] border border-[#D4AF37]'
                  : 'bg-gradient-to-r from-[#D4AF37] to-[#C59B63] text-[#120804] hover:brightness-110 shadow-lg shadow-[#D4AF37]/20'
              }`}
            >
              {isItemInBox ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>In Custom Gift Box</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add To Custom Gift Box (₹{product.priceINR.toLocaleString('en-IN')})</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

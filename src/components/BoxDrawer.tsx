import React from 'react';
import { CustomBox } from '../types';
import { X, Trash2, Gift, ArrowRight, Sparkles } from 'lucide-react';

interface BoxDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  customBox: CustomBox;
  onRemoveItem: (index: number) => void;
  onClearBox: () => void;
  onScrollToBuilder: () => void;
}

export const BoxDrawer: React.FC<BoxDrawerProps> = ({
  isOpen,
  onClose,
  customBox,
  onRemoveItem,
  onClearBox,
  onScrollToBuilder,
}) => {
  if (!isOpen) return null;

  // Compute total in INR
  const baseBoxEstimate = customBox.size === 4 ? 699 : customBox.size === 8 ? 1299 : customBox.size === 12 ? 1899 : 2499;
  const itemsSum = customBox.items.reduce((acc, curr) => acc + curr.priceINR, 0);
  const totalPriceINR = Math.round(baseBoxEstimate * 0.45 + itemsSum * 0.55);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="absolute inset-y-0 right-0 max-w-full flex pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-[#180E0A] border-l border-[#3E2416] shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Top Header */}
          <div className="p-6 border-b border-[#2C180E] bg-[#140C08] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#2A180E] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <Gift className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-normal text-[#FAF6F0]">
                  Your Custom Gift Box
                </h3>
                <div className="text-[11px] text-[#A8968C]">
                  {customBox.items.length} of {customBox.size} Pieces Selected ({customBox.occasion})
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#20120B] border border-[#3E2519] text-[#C8B6AC] hover:text-[#FAF6F0] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Items Body */}
          <div className="p-6 overflow-y-auto space-y-4 flex-1">
            
            {/* Box Progress Bar */}
            <div className="p-3 rounded-xl bg-[#140C08] border border-[#301B11] space-y-1.5">
              <div className="flex items-center justify-between text-xs text-[#A8968C]">
                <span>Box Capacity</span>
                <span className="font-mono text-[#D4AF37]">
                  {customBox.items.length}/{customBox.size} Slots
                </span>
              </div>
              <div className="w-full h-1.5 bg-[#26150E] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-[#C59B63] transition-all"
                  style={{ width: `${(customBox.items.length / customBox.size) * 100}%` }}
                />
              </div>
            </div>

            {/* List of items */}
            {customBox.items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#20120B] border border-[#3A2216] flex items-center justify-center mx-auto text-[#7A665C]">
                  <Gift className="w-6 h-6" />
                </div>
                <div className="font-serif text-base text-[#FAF6F0]">
                  Your gift box is empty
                </div>
                <p className="text-xs text-[#A8968C] max-w-xs mx-auto">
                  Browse our cellar collection or use the interactive box builder to add your favorite Swiss chocolates.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onScrollToBuilder();
                  }}
                  className="mt-2 px-4 py-2 rounded-lg bg-[#2E1B12] border border-[#D4AF37] text-xs font-semibold text-[#D4AF37] hover:bg-[#3E2418] transition-colors cursor-pointer"
                >
                  Open Box Builder
                </button>
              </div>
            ) : (
              <div className="space-y-2.5">
                {customBox.items.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="p-3 rounded-xl bg-[#140C08] border border-[#301B11] flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="text-xs font-serif font-semibold text-[#FAF6F0] truncate">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-[#A8968C]">
                        {item.region} · {item.category}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-xs text-[#D4AF37] font-semibold">
                        ₹{item.priceINR.toLocaleString('en-IN')}
                      </span>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(idx)}
                        className="text-[#8A766C] hover:text-red-400 transition-colors p-1 cursor-pointer"
                        title="Remove piece"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Personalized Note Preview if any */}
            {customBox.giftMessage && (
              <div className="p-3.5 rounded-xl bg-[#22130C] border border-[#442718] text-xs space-y-1">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                  Handwritten Card Note ({customBox.recipientName || 'Gift Recipient'}):
                </div>
                <p className="text-[#C8B6AC] italic">
                  "{customBox.giftMessage}"
                </p>
              </div>
            )}

          </div>

          {/* Drawer Bottom Actions */}
          <div className="p-6 bg-[#140C08] border-t border-[#2C180E] space-y-4">
            
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs text-[#A8968C]">Estimated Box Total</span>
                <div className="text-[11px] text-[#6E594F]">Including Keepsake Coffret & Cold Gel Pack</div>
              </div>
              <div className="font-mono text-2xl font-bold text-[#FAF6F0]">
                ₹{totalPriceINR.toLocaleString('en-IN')}
              </div>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onScrollToBuilder();
                }}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#120804] bg-gradient-to-r from-[#D4AF37] to-[#C59B63] hover:brightness-110 shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#120804]" />
                <span>Configure in Box Atelier</span>
                <ArrowRight className="w-4 h-4 text-[#120804]" />
              </button>

              {customBox.items.length > 0 && (
                <button
                  type="button"
                  onClick={onClearBox}
                  className="w-full py-2 text-[11px] text-[#8A766C] hover:text-[#FAF6F0] transition-colors cursor-pointer"
                >
                  Empty Box Contents
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { SWISS_REGIONS } from '../data/regions';
import { ChocolateProduct, SwissRegion } from '../types';
import { MapPin, Sparkles, Plus, Eye, Check } from 'lucide-react';

interface SwissMapProps {
  products: ChocolateProduct[];
  onSelectProduct: (product: ChocolateProduct) => void;
  onAddToBox: (product: ChocolateProduct) => void;
  isItemInBox: (productId: string) => boolean;
}

export const SwissMap: React.FC<SwissMapProps> = ({
  products,
  onSelectProduct,
  onAddToBox,
  isItemInBox,
}) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('zurich');

  const activeRegion: SwissRegion = 
    SWISS_REGIONS.find((r) => r.id === selectedRegionId) || SWISS_REGIONS[0];

  const regionProducts = products.filter((p) => 
    activeRegion.popularChocolates.includes(p.id)
  );

  return (
    <section id="swiss-map" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#2A180E]">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B63] mb-2 flex items-center justify-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Regional Confectionery Terroirs</span>
          <span aria-hidden="true">·</span>
          <span>Seven Historic Cantons</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF6F0]">
          The Swiss Terroir Map
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#C8B6AC] leading-relaxed">
          From the cobblestones of Geneva to the alpine pastures of Broc and the grand conching halls of Zurich, explore Switzerland’s legendary chocolate regions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Switzerland Silhouette & Region Selector (7 cols) */}
        <div className="lg:col-span-7 bg-[#180E0A] border border-[#3A2216] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          
          <div className="flex items-center justify-between pb-3 border-b border-[#2C180E]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FAF6F0]">
              Interactive Cantonal Explorer
            </span>
            <span className="text-[11px] text-[#A8968C]">
              Click a city or region pin below
            </span>
          </div>

          {/* Switzerland Map Vector Canvas */}
          <div className="relative aspect-[16/10] bg-gradient-to-br from-[#120804] via-[#1A0E08] to-[#0E0502] rounded-xl border border-[#3E2417] overflow-hidden p-4 flex items-center justify-center shadow-inner">
            
            {/* Ambient topo lines background */}
            <svg 
              viewBox="0 0 800 500" 
              className="w-full h-full object-contain pointer-events-none opacity-40"
            >
              {/* Switzerland country outline path abstraction */}
              <path
                d="M 120 320 C 100 370 140 420 180 410 C 220 400 260 440 310 420 C 370 410 420 460 480 440 C 540 430 580 460 640 410 C 690 380 740 350 720 280 C 710 220 740 180 690 140 C 630 110 580 130 530 100 C 470 80 410 110 350 90 C 280 80 230 110 180 140 C 130 180 150 230 130 270 Z"
                fill="#22120A"
                stroke="#542F1B"
                strokeWidth="2.5"
              />

              {/* Swiss Alpine Mountain Ridge curves */}
              <path d="M 200 340 Q 320 280 440 320 T 660 300" stroke="#784224" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
              <path d="M 160 380 Q 280 320 400 360 T 600 330" stroke="#784224" strokeWidth="1.5" strokeDasharray="3,3" fill="none" />

              {/* Major Swiss Lakes */}
              {/* Lake Geneva / Lac Léman */}
              <path d="M 125 365 C 145 375 195 380 230 360 C 205 355 160 350 125 365 Z" fill="#1E3A8A" opacity="0.6" />
              {/* Lake Zurich */}
              <ellipse cx="540" cy="180" rx="35" ry="12" fill="#1E3A8A" opacity="0.6" transform="rotate(-30 540 180)" />
              {/* Lake Lucerne */}
              <ellipse cx="460" cy="230" rx="25" ry="15" fill="#1E3A8A" opacity="0.6" />
            </svg>

            {/* Region Interactive Pin Buttons */}
            {SWISS_REGIONS.map((region) => {
              const isSelected = selectedRegionId === region.id;

              return (
                <button
                  key={region.id}
                  type="button"
                  onClick={() => setSelectedRegionId(region.id)}
                  style={{
                    left: `${region.coordinates.x}%`,
                    top: `${region.coordinates.y}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer focus:outline-none"
                >
                  {/* Pulsing ring if selected */}
                  {isSelected && (
                    <div 
                      className="absolute inset-0 -m-2 rounded-full animate-ping opacity-60"
                      style={{ backgroundColor: region.color }}
                    />
                  )}

                  {/* Pin Dot */}
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected
                        ? 'scale-125 border-white shadow-lg'
                        : 'border-[#120804] group-hover:scale-110 shadow-md'
                    }`}
                    style={{ backgroundColor: region.color }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Label tooltip */}
                  <div className={`mt-1.5 px-2 py-0.5 rounded text-[11px] font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#FAF6F0] text-[#120804] shadow-md font-bold'
                      : 'bg-[#180E0A]/90 text-[#C8B6AC] border border-[#3D2316] group-hover:text-[#FAF6F0]'
                  }`}>
                    {region.name}
                  </div>
                </button>
              );
            })}

          </div>

          {/* Quick Region Selector Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {SWISS_REGIONS.map((r) => {
              const isSelected = selectedRegionId === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setSelectedRegionId(r.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#2E1B12] text-[#D4AF37] border border-[#D4AF37]'
                      : 'bg-[#140C08] text-[#A8968C] hover:text-[#FAF6F0] border border-[#321E14]'
                  }`}
                >
                  {r.name} ({r.cantonCode})
                </button>
              );
            })}
          </div>

        </div>

        {/* Right Column: Selected Region Details & Signature Chocolates (5 cols) */}
        <div className="lg:col-span-5 bg-[#180E0A] border border-[#3A2216] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          
          {/* Active Region Header */}
          <div className="border-b border-[#2C180E] pb-5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B63] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" style={{ color: activeRegion.color }} />
                <span>Canton {activeRegion.cantonCode} · {activeRegion.name}</span>
              </span>
              <span className="text-[10px] font-mono text-[#8A766C]">
                Swiss Terroir Profile
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FAF6F0]">
              {activeRegion.title}
            </h3>
            <p className="text-xs text-[#D4AF37] mt-1 font-medium">
              {activeRegion.tagline}
            </p>
          </div>

          {/* Region Lore & Pioneers */}
          <div className="space-y-4 text-xs text-[#C8B6AC] leading-relaxed">
            <p>{activeRegion.description}</p>

            <div className="p-3.5 rounded-xl bg-[#140C08] border border-[#301B11] space-y-1">
              <div className="text-[11px] font-semibold text-[#FAF6F0]">
                Historic Pioneers & Guilds:
              </div>
              <div className="text-[#A8968C]">{activeRegion.historicalPioneers}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#140C08] border border-[#301B11] space-y-1">
              <div className="text-[11px] font-semibold text-[#D4AF37]">
                Signature Confectionery Tradition:
              </div>
              <div className="text-[#A8968C]">{activeRegion.signatureTradition}</div>
            </div>
          </div>

          {/* Chocolates Born in This Region */}
          <div className="pt-2 border-t border-[#2C180E] space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#FAF6F0] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Cellar Chocolates from {activeRegion.name}:</span>
            </div>

            <div className="space-y-2.5">
              {regionProducts.map((p) => {
                const inBox = isItemInBox(p.id);

                return (
                  <div
                    key={p.id}
                    className="p-3 rounded-xl bg-[#140C08] border border-[#321E14] hover:border-[#4D2E1B] transition-colors flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="font-serif text-sm font-semibold text-[#FAF6F0] truncate">
                        {p.name}
                      </div>
                      <div className="text-[11px] text-[#A8968C]">
                        {p.chocolatier} · <span className="text-[#D4AF37] font-semibold">₹{p.priceINR.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => onSelectProduct(p)}
                        className="p-1.5 rounded bg-[#20120B] border border-[#3A2216] text-[#FAF6F0] hover:text-[#D4AF37] transition-colors cursor-pointer"
                        title="View details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onAddToBox(p)}
                        className={`px-2.5 py-1.5 rounded text-[11px] font-semibold transition-all cursor-pointer ${
                          inBox
                            ? 'bg-[#2E1B12] text-[#D4AF37] border border-[#D4AF37]'
                            : 'bg-gradient-to-r from-[#D4AF37] to-[#C59B63] text-[#120804] hover:brightness-110'
                        }`}
                      >
                        {inBox ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

import React, { useState } from 'react';
import { ChocolateProduct, CustomBox, BoxSize, RibbonColor, IndianOccasion } from '../types';
import { Sparkles, Trash2, Plus, Gift, Check, Wand2 } from 'lucide-react';

interface BuildYourBoxProps {
  customBox: CustomBox;
  allProducts: ChocolateProduct[];
  onUpdateBox: (updated: CustomBox) => void;
  onSelectProduct: (product: ChocolateProduct) => void;
}

const BOX_SIZES: { size: BoxSize; name: string; desc: string; basePriceINR: number }[] = [
  { size: 4, name: 'Petite Coffret', desc: '4 hand-selected confections · Intimate tasting', basePriceINR: 699 },
  { size: 8, name: 'Dégustation Box', desc: '8 signature pieces · Ideal festive sharing', basePriceINR: 1299 },
  { size: 12, name: 'Grand Cellar Chest', desc: '12 master confections · Family celebrations & weddings', basePriceINR: 1899 },
  { size: 16, name: 'Imperial Prestige Vault', desc: '16 luxury pieces · Grand Diwali & corporate gift', basePriceINR: 2499 },
];

const FLAVOR_OPTIONS = [
  { id: 'hazelnut', label: 'Nutty & Roasted Hazelnut', icon: '🌰' },
  { id: 'dark', label: 'Intense Dark Cacao (55%–70%)', icon: '🍫' },
  { id: 'milk', label: 'Silky Swiss Alpine Milk', icon: '🥛' },
  { id: 'caramel', label: 'Golden Salted Caramel', icon: '🍯' },
  { id: 'fruit', label: 'Orange & Mountain Strawberry', icon: '🍓' },
];

const SWEETNESS_OPTIONS = [
  'Low / Intense',
  'Balanced',
  'Creamy',
  'Caramelized',
];

const INDIAN_OCCASIONS: IndianOccasion[] = [
  'Birthday',
  'Anniversary',
  'Wedding Gift',
  'Diwali',
  'Raksha Bandhan',
  "Valentine's Day",
  'Friendship Day',
  'Housewarming',
  'Just Because',
];

const BUDGET_OPTIONS = [
  { label: '₹1,500', value: 1500 },
  { label: '₹2,500', value: 2500 },
  { label: '₹3,500', value: 3500 },
  { label: '₹5,000', value: 5000 },
  { label: '₹7,500', value: 7500 },
  { label: '₹10,000+', value: 10000 },
];

const RIBBON_COLORS: { id: RibbonColor; name: string; hex: string }[] = [
  { id: 'gold', name: 'Swiss Gold', hex: '#D4AF37' },
  { id: 'crimson', name: 'Festive Crimson', hex: '#A81A1A' },
  { id: 'emerald', name: 'Alpine Forest Emerald', hex: '#065F46' },
  { id: 'navy', name: 'Royal Navy', hex: '#1E3A8A' },
  { id: 'silver', name: 'Glacier Silver', hex: '#94A3B8' },
];

export const BuildYourBox: React.FC<BuildYourBoxProps> = ({
  customBox,
  allProducts,
  onUpdateBox,
  onSelectProduct,
}) => {
  const [selectedFlavor, setSelectedFlavor] = useState<string>('hazelnut');
  const [selectedSweetness, setSelectedSweetness] = useState<string>('Balanced');
  const [selectedOccasion, setSelectedOccasion] = useState<IndianOccasion>(customBox.occasion || 'Diwali');
  const [selectedBudget, setSelectedBudget] = useState<number>(customBox.budgetCapINR || 2500);
  const [isReserved, setIsReserved] = useState(false);
  const [activeSlotToFill, setActiveSlotToFill] = useState<number | null>(null);

  // Handle Box Size change
  const handleSizeChange = (newSize: BoxSize) => {
    let newItems = [...customBox.items];
    if (newItems.length > newSize) {
      newItems = newItems.slice(0, newSize);
    }
    onUpdateBox({
      ...customBox,
      size: newSize,
      items: newItems,
    });
  };

  // Remove chocolate from box
  const handleRemoveItem = (index: number) => {
    const newItems = customBox.items.filter((_, i) => i !== index);
    onUpdateBox({
      ...customBox,
      items: newItems,
    });
  };

  // Add chocolate to next open slot
  const handleAddItem = (product: ChocolateProduct) => {
    if (customBox.items.length < customBox.size) {
      onUpdateBox({
        ...customBox,
        items: [...customBox.items, product],
      });
      setActiveSlotToFill(null);
    }
  };

  // Autofill Sommelier Curation based on user preferences and Indian occasions
  const handleAutofill = () => {
    let pool = [...allProducts];

    // Score products based on user flavor & sweetness & occasion
    const ranked = pool.sort((a, b) => {
      let scoreA = 0;
      let scoreB = 0;

      if (a.category.toLowerCase().includes(selectedFlavor.toLowerCase())) scoreA += 5;
      if (b.category.toLowerCase().includes(selectedFlavor.toLowerCase())) scoreB += 5;

      if (a.sweetness.toLowerCase() === selectedSweetness.toLowerCase()) scoreA += 3;
      if (b.sweetness.toLowerCase() === selectedSweetness.toLowerCase()) scoreB += 3;

      if ((selectedOccasion === 'Diwali' || selectedOccasion === 'Wedding Gift') && (a.category === 'Truffle' || a.category === 'Limited Edition')) scoreA += 4;
      if ((selectedOccasion === 'Diwali' || selectedOccasion === 'Wedding Gift') && (b.category === 'Truffle' || b.category === 'Limited Edition')) scoreB += 4;

      if (selectedOccasion === 'Raksha Bandhan' && (a.category === 'Hazelnut' || a.category === 'Milk')) scoreA += 4;
      if (selectedOccasion === 'Raksha Bandhan' && (b.category === 'Hazelnut' || b.category === 'Milk')) scoreB += 4;

      return scoreB - scoreA;
    });

    const chosen = ranked.slice(0, customBox.size);
    onUpdateBox({
      ...customBox,
      items: chosen,
      occasion: selectedOccasion,
      budgetCapINR: selectedBudget,
    });
  };

  // Calculate box total price in INR
  const baseBox = BOX_SIZES.find((b) => b.size === customBox.size) || BOX_SIZES[1];
  const itemsSum = customBox.items.reduce((acc, curr) => acc + curr.priceINR, 0);
  const totalPriceINR = Math.round(baseBox.basePriceINR * 0.45 + itemsSum * 0.55);

  const ribbonColorHex = RIBBON_COLORS.find((r) => r.id === customBox.ribbonColor)?.hex || '#D4AF37';

  return (
    <section id="build-box" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#2A180E]">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B63] flex items-center justify-center gap-1.5 mb-2">
          <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Atelier de Confiserie</span>
          <span aria-hidden="true">·</span>
          <span>Bespoke Gifting</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF6F0]">
          Build Your Swiss Box
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#C8B6AC] leading-relaxed">
          Design a custom gift box tailored to your taste, Indian festive occasion, and budget in Indian Rupees (₹). Choose your presentation coffret, select your favorite Swiss masterworks, and personalize with custom ribbon and seal.
        </p>
      </div>

      {/* Main Builder Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Preferences & Customization Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-8 bg-[#180E0A] border border-[#382116] rounded-2xl p-6 sm:p-8 shadow-xl">
          
          {/* Step 1: Box Size */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#FAF6F0]">
                1. Select Box Size & Capacity
              </label>
              <span className="text-xs text-[#D4AF37] font-mono">
                {customBox.size} Pieces
              </span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {BOX_SIZES.map((b) => {
                const isSelected = customBox.size === b.size;
                return (
                  <button
                    key={b.size}
                    type="button"
                    onClick={() => handleSizeChange(b.size)}
                    className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#2E1B12] border-[#D4AF37] shadow-md shadow-[#D4AF37]/15'
                        : 'bg-[#140C08] border-[#362117] hover:border-[#5C3725]'
                    }`}
                  >
                    <div className="font-mono text-xs font-bold text-[#D4AF37]">
                      {b.size} Pieces
                    </div>
                    <div className={`text-xs font-semibold mt-0.5 ${isSelected ? 'text-[#FAF6F0]' : 'text-[#C8B6AC]'}`}>
                      {b.name}
                    </div>
                    <div className="text-[10px] text-[#8A766C] mt-1 leading-snug">
                      From ₹{b.basePriceINR.toLocaleString('en-IN')}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Indian Occasion & Budget Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-[#26150E]">
            
            {/* Indian Occasion */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#FAF6F0] mb-2">
                2. Indian Gift Occasion
              </label>
              <select
                value={selectedOccasion}
                onChange={(e) => {
                  const val = e.target.value as IndianOccasion;
                  setSelectedOccasion(val);
                  onUpdateBox({ ...customBox, occasion: val });
                }}
                className="w-full px-3 py-2.5 rounded-lg bg-[#140C08] border border-[#382116] text-xs text-[#FAF6F0] focus:outline-none focus:border-[#D4AF37] cursor-pointer"
              >
                {INDIAN_OCCASIONS.map((occ) => (
                  <option key={occ} value={occ}>
                    {occ}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget in Indian Rupees */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#FAF6F0] mb-2">
                3. Target Budget (₹ INR)
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {BUDGET_OPTIONS.map((bg) => {
                  const isSelected = selectedBudget === bg.value;
                  return (
                    <button
                      key={bg.value}
                      type="button"
                      onClick={() => {
                        setSelectedBudget(bg.value);
                        onUpdateBox({ ...customBox, budgetCapINR: bg.value });
                      }}
                      className={`px-2 py-1.5 rounded-lg border text-xs font-mono font-medium transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#2E1B12] border-[#D4AF37] text-[#D4AF37] font-bold'
                          : 'bg-[#140C08] border-[#321E14] text-[#A8968C] hover:border-[#4D2E1B]'
                      }`}
                    >
                      {bg.label}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Step 3: Flavor & Sweetness Preferences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-[#26150E]">
            
            {/* Flavor preference */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#FAF6F0] mb-2">
                4. Primary Flavor Tone
              </label>
              <div className="space-y-1.5">
                {FLAVOR_OPTIONS.map((f) => {
                  const isSelected = selectedFlavor === f.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setSelectedFlavor(f.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg border text-xs flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#2E1B12] border-[#D4AF37] text-[#FAF6F0]'
                          : 'bg-[#140C08] border-[#321E14] text-[#C8B6AC] hover:border-[#4D2D1E]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{f.icon}</span>
                        <span>{f.label}</span>
                      </span>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sweetness Preference */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#FAF6F0] mb-2">
                5. Sweetness Level
              </label>
              <div className="space-y-1.5">
                {SWEETNESS_OPTIONS.map((s) => {
                  const isSelected = selectedSweetness === s;
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSweetness(s)}
                      className={`w-full text-left px-3 py-2 rounded-lg border text-xs flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#2E1B12] border-[#D4AF37] text-[#FAF6F0]'
                          : 'bg-[#140C08] border-[#321E14] text-[#C8B6AC] hover:border-[#4D2D1E]'
                      }`}
                    >
                      <span>{s}</span>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Step 4: Ribbon & Personal Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-[#26150E]">
            
            {/* Satin Ribbon Color */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#FAF6F0] mb-2">
                6. Satin Gift Ribbon
              </label>
              <div className="flex items-center gap-2">
                {RIBBON_COLORS.map((ribbon) => {
                  const isSelected = customBox.ribbonColor === ribbon.id;
                  return (
                    <button
                      key={ribbon.id}
                      type="button"
                      onClick={() => onUpdateBox({ ...customBox, ribbonColor: ribbon.id })}
                      title={ribbon.name}
                      className={`w-8 h-8 rounded-full border-2 transition-transform cursor-pointer relative ${
                        isSelected ? 'scale-110 border-white shadow-md' : 'border-[#382116] hover:scale-105'
                      }`}
                      style={{ backgroundColor: ribbon.hex }}
                    />
                  );
                })}
                <span className="text-[11px] text-[#A8968C] ml-2">
                  {RIBBON_COLORS.find((r) => r.id === customBox.ribbonColor)?.name}
                </span>
              </div>
            </div>

            {/* Recipient Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#FAF6F0] mb-2">
                7. Recipient Name
              </label>
              <input
                type="text"
                value={customBox.recipientName}
                onChange={(e) => onUpdateBox({ ...customBox, recipientName: e.target.value })}
                placeholder="Recipient Name (e.g. Aarav & Ananya)"
                className="w-full px-3.5 py-2 rounded-lg bg-[#140C08] border border-[#382116] text-xs text-[#FAF6F0] placeholder-[#7A665C] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

          </div>

          {/* Step 5: Personalized Gift Card Message */}
          <div className="pt-2 border-t border-[#26150E]">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#FAF6F0] mb-2">
              8. Personalized Handwritten Card Note (Complimentary)
            </label>
            <textarea
              rows={2}
              value={customBox.giftMessage}
              onChange={(e) => onUpdateBox({ ...customBox, giftMessage: e.target.value })}
              placeholder="Your festive or celebration message to accompany the chocolates..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#140C08] border border-[#382116] text-xs text-[#FAF6F0] placeholder-[#7A665C] focus:outline-none focus:border-[#D4AF37]"
            />
            <div className="text-[11px] text-[#8A766C] mt-1">
              Printed on Swiss alpine cotton-parchment with golden wax seal · Temperature-shielded dispatch across India
            </div>
          </div>

          {/* Autofill Helper Button */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={handleAutofill}
              className="px-4 py-2.5 rounded-lg bg-[#24150E] border border-[#4D2E1B] text-xs font-semibold text-[#D4AF37] hover:bg-[#2F1B12] hover:border-[#D4AF37] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>Autofill Sommelier Curation for {selectedOccasion}</span>
            </button>
            <span className="text-[11px] text-[#8A766C]">
              Fills all {customBox.size} slots
            </span>
          </div>

        </div>

        {/* Right Column: Visual Gift Box Experience (5 cols) */}
        <div className="lg:col-span-5 sticky top-24 space-y-6">
          
          <div className="bg-[#180E0A] border-2 border-[#4A2C1B] rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            
            {/* Box Header & Ribbon visual representation */}
            <div className="flex items-center justify-between pb-4 border-b border-[#2C180E] relative z-10">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block">
                  Bespoke Swiss Gift Box · {customBox.occasion}
                </span>
                <h3 className="font-serif text-xl font-normal text-[#FAF6F0]">
                  {baseBox.name}
                </h3>
              </div>

              {/* Visual Ribbon Knot */}
              <div className="flex items-center gap-1.5">
                <div 
                  className="w-5 h-5 rounded-full shadow-md border border-white/40"
                  style={{ backgroundColor: ribbonColorHex }}
                />
                <span className="text-xs font-semibold text-[#FAF6F0]">
                  {customBox.items.length}/{customBox.size} Pieces
                </span>
              </div>
            </div>

            {/* Visual Box Interior Tray */}
            <div className="mt-5 p-4 bg-[#110704] rounded-xl border border-[#3D2316] relative shadow-inner">
              
              {/* Velvet Texture Accent Lines */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-black/40 pointer-events-none rounded-xl" />

              {/* Grid of Chocolate Compartments */}
              <div 
                className={`grid gap-3 relative z-10 ${
                  customBox.size === 4
                    ? 'grid-cols-2'
                    : customBox.size === 8
                    ? 'grid-cols-2 sm:grid-cols-4'
                    : 'grid-cols-3 sm:grid-cols-4'
                }`}
              >
                {Array.from({ length: customBox.size }).map((_, slotIdx) => {
                  const item = customBox.items[slotIdx];

                  if (item) {
                    return (
                      <div
                        key={slotIdx}
                        className="aspect-square bg-[#22130C] border border-[#523320] rounded-lg p-2 flex flex-col justify-between relative group hover:border-[#D4AF37] transition-all shadow-md"
                      >
                        {/* Mini Chocolate Swirl visual */}
                        <div className="h-7 w-full rounded bg-gradient-to-r from-[#3B2114] to-[#1C0F08] flex items-center justify-center text-[10px] text-[#D4AF37] font-mono">
                          {item.cacaoPercentage ? `${item.cacaoPercentage}%` : 'Swiss'}
                        </div>

                        <div className="text-[10px] font-semibold text-[#FAF6F0] line-clamp-1 mt-1 leading-tight">
                          {item.name.split(' ')[0]} {item.name.split(' ')[1] || ''}
                        </div>

                        <div className="flex items-center justify-between text-[9px] text-[#A8968C]">
                          <span className="font-mono text-[#D4AF37]">₹{item.priceINR}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(slotIdx)}
                            className="text-red-400 hover:text-red-300 opacity-60 group-hover:opacity-100 transition-opacity p-0.5 cursor-pointer"
                            title="Remove from box"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  }

                  // Empty Slot
                  return (
                    <button
                      key={slotIdx}
                      type="button"
                      onClick={() => setActiveSlotToFill(slotIdx)}
                      className={`aspect-square rounded-lg border-2 border-dashed flex flex-col items-center justify-center p-2 transition-all cursor-pointer ${
                        activeSlotToFill === slotIdx
                          ? 'border-[#D4AF37] bg-[#2E1B12]/60 text-[#D4AF37]'
                          : 'border-[#362117] hover:border-[#5C3725] bg-[#140C08]/50 text-[#7A665C] hover:text-[#C8B6AC]'
                      }`}
                    >
                      <Plus className="w-4 h-4 mb-1" />
                      <span className="text-[9px] font-medium tracking-tight">Slot #{slotIdx + 1}</span>
                    </button>
                  );
                })}
              </div>

              {/* Slot picker drawer if an empty slot is clicked */}
              {activeSlotToFill !== null && (
                <div className="mt-4 p-3 bg-[#1C100B] border border-[#4D2E1B] rounded-lg">
                  <div className="flex items-center justify-between text-xs text-[#FAF6F0] mb-2 font-medium">
                    <span>Select chocolate for Slot #{activeSlotToFill + 1}:</span>
                    <button
                      type="button"
                      onClick={() => setActiveSlotToFill(null)}
                      className="text-[10px] text-[#A8968C] hover:text-[#FAF6F0] cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="max-h-40 overflow-y-auto space-y-1.5">
                    {allProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => handleAddItem(p)}
                        className="p-2 rounded bg-[#140C08] border border-[#321E14] hover:border-[#D4AF37] flex items-center justify-between text-xs text-[#C8B6AC] hover:text-[#FAF6F0] cursor-pointer transition-colors"
                      >
                        <div className="truncate pr-2">
                          <span className="font-semibold text-[#FAF6F0]">{p.name}</span>
                          <span className="text-[10px] text-[#A8968C] ml-1.5">({p.region})</span>
                        </div>
                        <span className="font-mono text-[11px] text-[#D4AF37] shrink-0">
                          ₹{p.priceINR.toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Box Price & Checkout Summary */}
            <div className="mt-5 space-y-3 pt-3 border-t border-[#2C180E]">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-[#A8968C]">Total Box Value</span>
                  <div className="text-[11px] text-[#6E594F]">Includes Keepsake Coffret & Ribbon</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-2xl font-bold text-[#FAF6F0] tabular-nums">
                    ₹{totalPriceINR.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-[#8A766C]">
                    Target Budget: ₹{customBox.budgetCapINR?.toLocaleString('en-IN') || selectedBudget.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Reservation Button */}
              <button
                type="button"
                onClick={() => setIsReserved(true)}
                disabled={customBox.items.length === 0}
                className={`w-full py-3.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  customBox.items.length === 0
                    ? 'bg-[#26160F] text-[#6E594F] cursor-not-allowed'
                    : isReserved
                    ? 'bg-emerald-900 border border-emerald-500 text-emerald-200'
                    : 'bg-gradient-to-r from-[#D4AF37] via-[#E2BE5E] to-[#C59B63] text-[#120804] hover:brightness-110 shadow-lg shadow-[#D4AF37]/20'
                }`}
              >
                {isReserved ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Gift Box Sealed & Reserved for India Dispatch</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#120804]" />
                    <span>Pack & Reserve Custom Box</span>
                  </>
                )}
              </button>

              {isReserved && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-lg text-xs text-emerald-200 text-center animate-fade-in">
                  🎉 Your bespoke Swiss Box for {customBox.occasion} ({customBox.recipientName || 'Gift Recipient'}) has been curated and packed with {RIBBON_COLORS.find(r => r.id === customBox.ribbonColor)?.name} ribbon for India cold-chain delivery!
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

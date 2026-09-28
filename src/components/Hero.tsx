import React from 'react';
import { ArrowDown, Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreCollection: () => void;
  onOpenBuildBox: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCollection,
  onOpenBuildBox,
  onOpenQuiz
}) => {
  return (
    <section className="relative overflow-hidden border-b border-[#362117] bg-gradient-to-b from-[#180E09] via-[#140C08] to-[#0F0704] py-20 sm:py-28">
      
      {/* Decorative ambient warm light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#D4AF37]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#A81A1A]/8 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle unboxed kicker */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B63] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A81A1A]" />
          <span>Haute Chocolaterie Suisse</span>
          <span aria-hidden="true">·</span>
          <span>1819 — 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#A81A1A]" />
        </div>

        {/* Mandatory exact Hero headline and subtitle */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#FAF6F0] leading-[1.1] text-balance max-w-4xl mx-auto">
          Enter the Cellar.
        </h1>

        <p className="mt-6 text-lg sm:text-2xl text-[#D6C4B8] font-light leading-relaxed max-w-3xl mx-auto text-balance font-serif italic">
          “Discover the stories, flavors and craftsmanship behind Switzerland's finest chocolates.”
        </p>

        {/* Trust & Heritage Markers */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#A8968C]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>100% Authentic Swiss AOC Heritage</span>
          </span>
          <span aria-hidden="true" className="text-[#4A2D1F]">·</span>
          <span>Simmental Alpine Milk Terroirs</span>
          <span aria-hidden="true" className="text-[#4A2D1F]">·</span>
          <span>Traditional 72-Hour Longitudinal Conche</span>
          <span aria-hidden="true" className="text-[#4A2D1F]">·</span>
          <span>Seven Historic Cantons</span>
        </div>

        {/* Primary and Secondary Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Prominent Explore the Collection button */}
          <button
            type="button"
            onClick={onExploreCollection}
            className="w-full sm:w-auto px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#120804] bg-gradient-to-r from-[#D4AF37] via-[#E2BE5E] to-[#C59B63] hover:brightness-110 rounded-md transition-all shadow-xl hover:shadow-[#D4AF37]/20 flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <span>Explore the Collection</span>
            <ArrowDown className="w-4 h-4 text-[#120804] group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* Build Custom Gift Box */}
          <button
            type="button"
            onClick={onOpenBuildBox}
            className="w-full sm:w-auto px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#FAF6F0] bg-[#22130C] hover:bg-[#2C1910] border border-[#523422] hover:border-[#D4AF37] rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Build Your Custom Box</span>
          </button>

          {/* Tasting Quiz */}
          <button
            type="button"
            onClick={onOpenQuiz}
            className="w-full sm:w-auto px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#C59B63] hover:text-[#FAF6F0] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>Take Tasting Quiz</span>
          </button>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ShoppingBag, Compass, MapPin, BookOpen, HelpCircle, Heart, Plane } from 'lucide-react';
import { CustomBox } from '../types';

interface HeaderProps {
  customBox: CustomBox;
  onOpenBoxDrawer: () => void;
  onOpenQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  customBox,
  onOpenBoxDrawer,
  onOpenQuiz
}) => {
  const boxFilledCount = customBox.items.length;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#362117] bg-[#140C08]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark with Swiss cross */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-sm bg-[#A81A1A] border border-[#E53E3E]/40 flex items-center justify-center shadow-md">
            {/* Swiss cross symbol */}
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-current">
              <rect x="10" y="4" width="4" height="16" rx="0.5" />
              <rect x="4" y="10" width="16" height="4" rx="0.5" />
            </svg>
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-normal tracking-wide text-[#FAF6F0] group-hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              SWISS CHOCOLATE CELLAR
            </span>
            <span className="hidden sm:block text-[10px] tracking-[0.25em] text-[#C59B63] uppercase -mt-0.5">
              Confectionery Heritage · India Dispatch
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#C8B6AC]">
          <a href="#collection" className="hover:text-[#FAF6F0] transition-colors whitespace-nowrap">
            The Collection
          </a>
          <a href="#chocolate-discovery" className="hover:text-[#FAF6F0] text-[#D4AF37] transition-colors whitespace-nowrap flex items-center gap-1">
            <Heart className="w-3.5 h-3.5" />
            Taste Discovery
          </a>
          <a href="#build-box" className="hover:text-[#FAF6F0] transition-colors whitespace-nowrap flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            Build Your Box
          </a>
          <a href="#switzerland-to-india" className="hover:text-[#FAF6F0] transition-colors whitespace-nowrap flex items-center gap-1">
            <Plane className="w-3.5 h-3.5 text-[#C59B63]" />
            Swiss to India
          </a>
          <a href="#swiss-map" className="hover:text-[#FAF6F0] transition-colors whitespace-nowrap flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#C59B63]" />
            Swiss Terroirs
          </a>
          <a href="#journey" className="hover:text-[#FAF6F0] transition-colors whitespace-nowrap flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-[#C59B63]" />
            Craft Journey
          </a>
          <button
            type="button"
            onClick={onOpenQuiz}
            className="hover:text-[#FAF6F0] text-[#D4AF37] transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Tasting Quiz
          </button>
          <a href="#journal" className="hover:text-[#FAF6F0] transition-colors whitespace-nowrap flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-[#C59B63]" />
            Cellar Journal
          </a>
        </nav>

        {/* Zone 3: Indian Currency Badge & Box Cart */}
        <div className="flex items-center gap-3">
          
          {/* Indian Rupee Badge */}
          <div 
            className="px-3 py-1.5 text-xs font-mono font-semibold rounded-md border border-[#442718] bg-[#1C100B] text-[#D4AF37] flex items-center gap-1.5 shadow-sm"
            title="All prices displayed in Indian Rupees (₹)"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>₹ INR</span>
          </div>

          {/* Custom Box Cart Button */}
          <button
            type="button"
            onClick={onOpenBoxDrawer}
            className="relative px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#120804] bg-gradient-to-r from-[#D4AF37] to-[#C59B63] hover:from-[#E5BF47] hover:to-[#D4AA73] rounded-md transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#120804]" />
            <span className="hidden sm:inline">My Gift Box</span>
            <span className="bg-[#120804] text-[#D4AF37] font-mono text-[11px] font-bold px-1.5 py-0.5 rounded-full">
              {boxFilledCount}/{customBox.size}
            </span>
          </button>

        </div>

      </div>
    </header>
  );
};

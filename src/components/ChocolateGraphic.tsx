import React from 'react';
import { ChocolateCategory } from '../types';

interface ChocolateGraphicProps {
  type: ChocolateCategory | string;
  className?: string;
  title?: string;
}

export const ChocolateGraphic: React.FC<ChocolateGraphicProps> = ({ type, className = "h-48 w-full" }) => {
  const t = type.toLowerCase();

  // Limited Edition
  if (t.includes('limited')) {
    return (
      <div className={`relative overflow-hidden rounded-t-xl bg-gradient-to-br from-[#2D0D14] via-[#1D080E] to-[#0A0205] flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover select-none">
          <defs>
            <linearGradient id="limitedGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
          </defs>
          <rect x="25" y="25" width="350" height="190" rx="14" fill="#1C090F" stroke="#7A1C2E" strokeWidth="2" />
          <rect x="35" y="35" width="330" height="170" rx="10" fill="none" stroke="url(#limitedGold)" strokeWidth="1.5" strokeDasharray="6,3" />
          
          {/* Gold Ingot / Seal */}
          <circle cx="200" cy="120" r="32" fill="#2E0E18" stroke="#D4AF37" strokeWidth="2" />
          <path d="M 188 120 L 212 120 M 200 108 L 200 132" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
          <circle cx="200" cy="120" r="26" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2,2" />

          {/* Luxury Pink Peppercorns or Cacao Flakes */}
          <circle cx="120" cy="80" r="5" fill="#FB7185" />
          <circle cx="140" cy="70" r="4" fill="#F43F5E" />
          <circle cx="280" cy="85" r="5" fill="#FB7185" />
          <circle cx="260" cy="160" r="4.5" fill="#F43F5E" />
          <circle cx="110" cy="150" r="5" fill="#FB7185" />
        </svg>
        <span className="absolute bottom-2 right-3 text-[11px] font-medium tracking-wider uppercase text-rose-300 bg-[#120804]/80 px-2 py-0.5 rounded">
          Grand Cru Cask Release · Limited
        </span>
      </div>
    );
  }

  // Fruit Infusion
  if (t.includes('fruit')) {
    return (
      <div className={`relative overflow-hidden rounded-t-xl bg-gradient-to-br from-[#2D0D25] via-[#200A1A] to-[#0E030B] flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover select-none">
          <defs>
            <linearGradient id="berryGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#831843" />
            </linearGradient>
          </defs>
          <rect x="30" y="30" width="340" height="180" rx="14" fill="#240A1E" stroke="#701A53" strokeWidth="2" />
          
          {/* Alpine Wild Berries & Medallions */}
          <circle cx="130" cy="120" r="26" fill="url(#berryGlow)" opacity="0.85" />
          <circle cx="200" cy="100" r="32" fill="url(#berryGlow)" opacity="0.9" />
          <circle cx="270" cy="130" r="24" fill="url(#berryGlow)" opacity="0.8" />

          {/* Seeds / Crunchies */}
          <circle cx="195" cy="95" r="2" fill="#FCE7F3" />
          <circle cx="205" cy="105" r="2" fill="#FCE7F3" />
          <circle cx="125" cy="115" r="2" fill="#FCE7F3" />
          <circle cx="275" cy="128" r="2" fill="#FCE7F3" />

          {/* Swiss cross */}
          <g transform="translate(325, 45)">
            <circle cx="15" cy="15" r="14" fill="#1C0C06" stroke="#EC4899" strokeWidth="1.5" />
            <rect x="13" y="7" width="4" height="16" fill="#EC4899" rx="1" />
            <rect x="7" y="13" width="16" height="4" fill="#EC4899" rx="1" />
          </g>
        </svg>
        <span className="absolute bottom-2 right-3 text-[11px] font-medium tracking-wider uppercase text-pink-300 bg-[#120804]/80 px-2 py-0.5 rounded">
          Valais Wild Mountain Berries
        </span>
      </div>
    );
  }

  if (t.includes('hazelnut')) {
    return (
      <div className={`relative overflow-hidden rounded-t-xl bg-gradient-to-br from-[#2D160A] via-[#3E2111] to-[#1F0E06] flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover select-none">
          <defs>
            <linearGradient id="chocSurface" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A2615" />
              <stop offset="50%" stopColor="#32170B" />
              <stop offset="100%" stopColor="#220D05" />
            </linearGradient>
            <linearGradient id="nutGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5A852" />
              <stop offset="50%" stopColor="#9C6020" />
              <stop offset="100%" stopColor="#5E330D" />
            </linearGradient>
            <radialGradient id="chocSheen" cx="40%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
            </radialGradient>
          </defs>

          <rect x="25" y="30" width="350" height="180" rx="14" fill="url(#chocSurface)" stroke="#683F20" strokeWidth="2" />
          <rect x="25" y="30" width="350" height="180" rx="14" fill="url(#chocSheen)" />

          {/* Broken artisanal edge effect */}
          <path d="M 25 100 Q 40 105 50 115 Q 65 110 75 130 Q 80 145 70 160 Q 60 180 50 200 Q 35 210 25 210 Z" fill="#200E06" opacity="0.6" />

          {/* Roasted Whole Hazelnuts */}
          <g transform="translate(110, 75)">
            <ellipse cx="20" cy="20" rx="22" ry="19" fill="url(#nutGold)" stroke="#3B1E0C" strokeWidth="2" />
            <path d="M 12 10 Q 22 6 28 14 Q 25 24 15 26 Z" fill="#FFE2B3" opacity="0.4" />
          </g>
          <g transform="translate(240, 65)">
            <ellipse cx="22" cy="22" rx="24" ry="21" fill="url(#nutGold)" stroke="#3B1E0C" strokeWidth="2" />
            <path d="M 14 12 Q 26 8 32 16 Q 28 28 17 29 Z" fill="#FFE2B3" opacity="0.35" />
          </g>
          <g transform="translate(170, 120)">
            <ellipse cx="26" cy="24" rx="26" ry="23" fill="url(#nutGold)" stroke="#3B1E0C" strokeWidth="2" />
            <path d="M 18 14 Q 30 10 38 18 Q 34 32 20 33 Z" fill="#FFE2B3" opacity="0.4" />
          </g>
          <g transform="translate(70, 140)">
            <ellipse cx="18" cy="18" rx="18" ry="16" fill="url(#nutGold)" opacity="0.85" />
          </g>
          <g transform="translate(300, 130)">
            <ellipse cx="20" cy="20" rx="20" ry="18" fill="url(#nutGold)" opacity="0.85" />
          </g>

          {/* Swiss Cross */}
          <g transform="translate(325, 45)">
            <circle cx="15" cy="15" r="14" fill="#1C0C06" stroke="#C59B63" strokeWidth="1.5" />
            <rect x="13" y="7" width="4" height="16" fill="#C59B63" rx="1" />
            <rect x="7" y="13" width="16" height="4" fill="#C59B63" rx="1" />
          </g>
        </svg>
        <span className="absolute bottom-2 right-3 text-[11px] font-medium tracking-wider uppercase text-[#D4AF37]/90 bg-[#120804]/75 px-2 py-0.5 rounded">
          Piedmont Hazelnut · FrischSchoggi
        </span>
      </div>
    );
  }

  if (t.includes('dark')) {
    return (
      <div className={`relative overflow-hidden rounded-t-xl bg-gradient-to-br from-[#1A0D07] via-[#241209] to-[#0E0603] flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover select-none">
          <defs>
            <linearGradient id="darkSquare" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E170E" />
              <stop offset="100%" stopColor="#140904" />
            </linearGradient>
          </defs>

          <g transform="translate(50, 35)">
            <rect x="0" y="0" width="85" height="75" rx="6" fill="url(#darkSquare)" stroke="#4A2617" strokeWidth="1.5" />
            <rect x="8" y="8" width="69" height="59" rx="3" fill="#1C0E07" />
            <rect x="105" y="0" width="85" height="75" rx="6" fill="url(#darkSquare)" stroke="#4A2617" strokeWidth="1.5" />
            <rect x="113" y="8" width="69" height="59" rx="3" fill="#1C0E07" />
            <rect x="210" y="0" width="85" height="75" rx="6" fill="url(#darkSquare)" stroke="#4A2617" strokeWidth="1.5" />
            <rect x="218" y="8" width="69" height="59" rx="3" fill="#1C0E07" />
            <rect x="0" y="90" width="85" height="75" rx="6" fill="url(#darkSquare)" stroke="#4A2617" strokeWidth="1.5" />
            <rect x="8" y="98" width="69" height="59" rx="3" fill="#1C0E07" />
            <rect x="105" y="90" width="85" height="75" rx="6" fill="url(#darkSquare)" stroke="#4A2617" strokeWidth="1.5" />
            <rect x="113" y="98" width="69" height="59" rx="3" fill="#1C0E07" />
            <rect x="210" y="90" width="85" height="75" rx="6" fill="url(#darkSquare)" stroke="#4A2617" strokeWidth="1.5" />
            <rect x="218" y="98" width="69" height="59" rx="3" fill="#1C0E07" />
          </g>

          <polygon points="120,45 125,48 123,54 117,52 116,47" fill="#FFFFFF" opacity="0.85" />
          <polygon points="245,65 249,67 248,72 243,71" fill="#FFFFFF" opacity="0.9" />

          <g transform="translate(355, 30)">
            <circle cx="12" cy="12" r="11" fill="#140904" stroke="#A87948" strokeWidth="1.2" />
            <rect x="10.5" y="6" width="3" height="12" fill="#A87948" rx="0.5" />
            <rect x="6" y="10.5" width="12" height="3" fill="#A87948" rx="0.5" />
          </g>
        </svg>
        <span className="absolute bottom-2 right-3 text-[11px] font-medium tracking-wider uppercase text-[#E5A852] bg-[#120804]/75 px-2 py-0.5 rounded">
          78% Grand Cru · 72h Conche
        </span>
      </div>
    );
  }

  if (t.includes('truffle') || t.includes('praline')) {
    return (
      <div className={`relative overflow-hidden rounded-t-xl bg-gradient-to-br from-[#2D0D18] via-[#200B13] to-[#12050B] flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover select-none">
          <defs>
            <linearGradient id="pralineBox" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A1024" />
              <stop offset="100%" stopColor="#200710" />
            </linearGradient>
            <radialGradient id="truffleGlow" cx="40%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#E5A852" />
              <stop offset="60%" stopColor="#542310" />
              <stop offset="100%" stopColor="#22080E" />
            </radialGradient>
          </defs>

          <rect x="35" y="25" width="330" height="190" rx="16" fill="url(#pralineBox)" stroke="#872944" strokeWidth="2" />
          <rect x="43" y="33" width="314" height="174" rx="12" fill="none" stroke="#C59B63" strokeWidth="1" strokeDasharray="4,2" />

          <g transform="translate(75, 45)">
            <ellipse cx="25" cy="30" rx="24" ry="18" fill="#C59B63" opacity="0.6" />
            <circle cx="25" cy="24" r="20" fill="url(#truffleGlow)" />
          </g>
          <g transform="translate(250, 45)">
            <ellipse cx="25" cy="30" rx="24" ry="18" fill="#C59B63" opacity="0.6" />
            <circle cx="25" cy="24" r="20" fill="url(#truffleGlow)" />
          </g>
          <g transform="translate(75, 135)">
            <ellipse cx="25" cy="30" rx="24" ry="18" fill="#C59B63" opacity="0.6" />
            <circle cx="25" cy="24" r="20" fill="url(#truffleGlow)" />
          </g>
          <g transform="translate(250, 135)">
            <ellipse cx="25" cy="30" rx="24" ry="18" fill="#C59B63" opacity="0.6" />
            <circle cx="25" cy="24" r="20" fill="url(#truffleGlow)" />
          </g>
        </svg>
        <span className="absolute bottom-2 right-3 text-[11px] font-medium tracking-wider uppercase text-rose-300 bg-[#120804]/75 px-2 py-0.5 rounded">
          Haute Chocolaterie · Truffes du Jour
        </span>
      </div>
    );
  }

  if (t.includes('caramel')) {
    return (
      <div className={`relative overflow-hidden rounded-t-xl bg-gradient-to-br from-[#381F08] via-[#2A1605] to-[#140A02] flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover select-none">
          <defs>
            <linearGradient id="caramelSwirl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
          </defs>

          <rect x="30" y="30" width="340" height="180" rx="14" fill="#6B3A12" stroke="#B45309" strokeWidth="2" />
          <path d="M 30 110 Q 120 70 200 120 T 370 90 L 370 160 Q 280 200 200 150 T 30 170 Z" fill="url(#caramelSwirl)" opacity="0.85" />
          <path d="M 50 120 Q 130 90 200 130 T 350 110" stroke="#FDE68A" strokeWidth="3" fill="none" opacity="0.6" />

          <polygon points="110,65 116,68 114,75 107,73" fill="#FFFBEB" opacity="0.9" />
          <polygon points="260,85 267,89 265,97 258,94" fill="#FFFBEB" opacity="0.95" />
        </svg>
        <span className="absolute bottom-2 right-3 text-[11px] font-medium tracking-wider uppercase text-amber-300 bg-[#120804]/75 px-2 py-0.5 rounded">
          Blonde Caramel · Sel des Alpes
        </span>
      </div>
    );
  }

  // White or Milk default
  return (
    <div className={`relative overflow-hidden rounded-t-xl bg-gradient-to-br from-[#291710] via-[#351E14] to-[#170B06] flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 400 240" className="w-full h-full object-cover select-none">
        <defs>
          <linearGradient id="milkSwirl" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5E351E" />
            <stop offset="50%" stopColor="#432211" />
            <stop offset="100%" stopColor="#2B1408" />
          </linearGradient>
        </defs>

        <rect x="30" y="30" width="340" height="180" rx="14" fill="url(#milkSwirl)" stroke="#804726" strokeWidth="2" />
        <path d="M 40 140 Q 150 80 230 130 T 360 110" stroke="#FFF" strokeWidth="6" strokeOpacity="0.25" fill="none" strokeLinecap="round" />
        <path d="M 50 155 Q 160 95 240 145 T 350 125" stroke="#E5A852" strokeWidth="2" strokeOpacity="0.4" fill="none" />

        <g transform="translate(325, 45)">
          <circle cx="15" cy="15" r="14" fill="#1C0C06" stroke="#C59B63" strokeWidth="1.5" />
          <rect x="13" y="7" width="4" height="16" fill="#C59B63" rx="1" />
          <rect x="7" y="13" width="16" height="4" fill="#C59B63" rx="1" />
        </g>
      </svg>
      <span className="absolute bottom-2 right-3 text-[11px] font-medium tracking-wider uppercase text-amber-200 bg-[#120804]/75 px-2 py-0.5 rounded">
        Pure Swiss Alpine Milk · Tradition 1875
      </span>
    </div>
  );
};

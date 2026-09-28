import React from 'react';
import { ShieldCheck, Mail, MapPin, Plane } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#2C180E] bg-[#0E0604] py-16 text-xs text-[#8A766C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4-column brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Wordmark & Heritage */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-sm bg-[#A81A1A] border border-[#E53E3E]/40 flex items-center justify-center text-white font-bold text-xs">
                +
              </div>
              <span className="font-serif text-lg font-normal tracking-wide text-[#FAF6F0]">
                SWISS CHOCOLATE CELLAR
              </span>
            </div>
            <p className="text-xs text-[#A8968C] leading-relaxed">
              Switzerland’s definitive discovery vault of artisanal chocolates, single-origin cacaos, and alpine milk terroir. Sample product showcase curated for chocolate lovers in India.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-[#C59B63]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Certified Swiss Confectionery Heritage (AOC)</span>
            </div>
          </div>

          {/* Col 2: India Delivery Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF6F0] flex items-center gap-1.5">
              <Plane className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>India Cold-Chain Hubs</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-[#A8968C]">
              <li><span className="text-[#C59B63]">Mumbai:</span> CSMIA Air Cargo Gateway</li>
              <li><span className="text-[#C59B63]">Delhi:</span> IGI Express Air Terminal</li>
              <li><span className="text-[#C59B63]">Bengaluru:</span> KIA Devanahalli Hub</li>
              <li><span className="text-[#C59B63]">Hyderabad:</span> RGIA Shamshabad Gateway</li>
              <li><span className="text-[#C59B63]">Chennai:</span> Meenambakkam Air Complex</li>
              <li><span className="text-[#C59B63]">Visakhapatnam:</span> Coastal Logistics Center</li>
              <li><span className="text-[#C59B63]">Pune · Kolkata · Ahmedabad</span></li>
            </ul>
          </div>

          {/* Col 3: Cellar Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF6F0]">
              The Cellar
            </h4>
            <ul className="space-y-1.5 text-xs text-[#A8968C]">
              <li><a href="#collection" className="hover:text-[#D4AF37] transition-colors">Complete Reserve Collection</a></li>
              <li><a href="#chocolate-discovery" className="hover:text-[#D4AF37] transition-colors">Taste Discovery (Find Your Match)</a></li>
              <li><a href="#build-box" className="hover:text-[#D4AF37] transition-colors">Build Custom Gift Box (₹ INR)</a></li>
              <li><a href="#switzerland-to-india" className="hover:text-[#D4AF37] transition-colors">From Switzerland to India</a></li>
              <li><a href="#swiss-map" className="hover:text-[#D4AF37] transition-colors">Swiss Terroirs & Cantons</a></li>
              <li><a href="#journey" className="hover:text-[#D4AF37] transition-colors">The 6-Stage Craft Journey</a></li>
              <li><a href="#quiz" className="hover:text-[#D4AF37] transition-colors">Palate Personality Quiz</a></li>
              <li><a href="#journal" className="hover:text-[#D4AF37] transition-colors">The Cellar Journal & Essays</a></li>
            </ul>
          </div>

          {/* Col 4: Seasonal Harvest Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF6F0]">
              The Cellar Dispatch
            </h4>
            <p className="text-xs text-[#A8968C] leading-relaxed">
              Receive private invitations to seasonal Swiss harvest allocations, festive box previews, and masterclasses.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 rounded-l-lg bg-[#140C08] border border-[#3A2216] text-xs text-[#FAF6F0] placeholder-[#7A665C] focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-r-lg bg-gradient-to-r from-[#D4AF37] to-[#C59B63] text-[#120804] text-xs font-semibold uppercase tracking-wider hover:brightness-110 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="text-[10px] text-[#6E594F] block">
                Educational demo platform. Sample products presented for workshop experience.
              </span>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#22120B] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A665C]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C59B63]" />
            <span>Zurich & Broc, Switzerland · Express Cold Transit to Indian Metros</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Swiss Chocolate Cellar. All Rights Reserved.</span>
            <span>·</span>
            <span className="text-[#C59B63]">₹ Indian Rupee Pricing Edition</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React from 'react';
import { Star, ShieldCheck, MapPin, Quote } from 'lucide-react';

interface CustomerReview {
  id: string;
  name: string;
  city: string;
  occasion: string;
  productPurchased: string;
  pricePaidINR: number;
  date: string;
  rating: number;
  quote: string;
}

const SAMPLE_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Aarav Sharma',
    city: 'Mumbai',
    occasion: 'Diwali Festive Gifting',
    productPurchased: 'Assorted Swiss Chocolate Box (Lindt Luxury Selection)',
    pricePaidINR: 1499,
    date: '24 September 2026',
    rating: 5,
    quote: 'Ordered three boxes for Diwali corporate clients in Nariman Point. The cold-gel insulated packaging was remarkable—arrived in 30°C Mumbai heat completely intact with that pristine mirror shine!'
  },
  {
    id: 'rev-2',
    name: 'Ananya Iyer',
    city: 'Bengaluru',
    occasion: 'Husband’s 35th Birthday',
    productPurchased: 'Hazelnut Chocolate (Läderach FrischSchoggi Slab)',
    pricePaidINR: 699,
    date: '18 September 2026',
    rating: 5,
    quote: 'The whole roasted hazelnuts are genuinely fresh, nothing like ordinary supermarket bars. The acoustic snap and creamy Swiss milk melt made our family celebration in Indiranagar so memorable.'
  },
  {
    id: 'rev-3',
    name: 'Vikram Verma',
    city: 'Hyderabad',
    occasion: 'Wedding Anniversary',
    productPurchased: 'Swiss Truffle Collection (Confiserie Sprüngli)',
    pricePaidINR: 1999,
    date: '12 September 2026',
    rating: 5,
    quote: 'My wife and I visited Zurich a few years ago. Tasting these Sprüngli truffles at our home in Jubilee Hills brought back the exact taste of Paradeplatz. True luxury confiserie worth every rupee.'
  },
  {
    id: 'rev-4',
    name: 'Sneha Reddy',
    city: 'Visakhapatnam',
    occasion: 'Raksha Bandhan Celebration',
    productPurchased: 'Bespoke 8-Piece Swiss Gift Box',
    pricePaidINR: 2499,
    date: '28 August 2026',
    rating: 5,
    quote: 'I had doubts about ordering imported chocolate to coastal Vizag, but the insulated pack with thermal foil kept everything chilled below 18°C. My brother was over the moon!'
  },
  {
    id: 'rev-5',
    name: 'Rohan Mehta',
    city: 'Delhi',
    occasion: 'Housewarming Gift',
    productPurchased: 'Premium Mixed Chocolate Box (Läderach Masterpiece)',
    pricePaidINR: 2499,
    date: '15 August 2026',
    rating: 5,
    quote: 'The handwritten Swiss parchment card and gold satin ribbon made this the standout present at our family housewarming in Vasant Vihar. Exceptional curation.'
  },
  {
    id: 'rev-6',
    name: 'Priya Patel',
    city: 'Ahmedabad',
    occasion: 'Personal Treat',
    productPurchased: 'Dark Chocolate 70% & Caramel Sea Salt Bars',
    pricePaidINR: 998,
    date: '04 August 2026',
    rating: 5,
    quote: 'The 70% dark chocolate has none of that harsh bitterness—just pure, velvety cacao richness. Seamless UPI/card payment and delivered right to our door in Satellite.'
  }
];

export const IndianReviews: React.FC = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#2A180E]">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B63] mb-2 flex items-center justify-center gap-1.5">
          <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
          <span>Connoisseur Stories Across India</span>
          <span aria-hidden="true">·</span>
          <span>Sample Guest Impressions</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF6F0]">
          Cherished Across Indian Homes
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#C8B6AC] leading-relaxed">
          From festival banquets in Mumbai and Delhi to intimate milestones in Bengaluru, Hyderabad, and Visakhapatnam—hear why chocolate lovers treasure our cellar selections.
        </p>
      </div>

      {/* Grid of Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="p-6 rounded-2xl bg-[#180E0A] border border-[#3A2216] hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between shadow-xl space-y-4"
          >
            <div className="space-y-3">
              {/* Star Rating & Date */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-[11px] text-[#8A766C] font-mono">
                  {rev.date}
                </span>
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-[#D6C4B8] leading-relaxed italic relative pl-4 border-l-2 border-[#D4AF37]">
                "{rev.quote}"
              </p>
            </div>

            {/* Customer Details & Product */}
            <div className="pt-4 border-t border-[#26150E] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm font-semibold text-[#FAF6F0]">
                  {rev.name}
                </span>
                <span className="text-xs text-[#C59B63] flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{rev.city}</span>
                </span>
              </div>

              <div className="text-[11px] text-[#A8968C] flex items-center justify-between">
                <span className="truncate max-w-[190px]">{rev.productPurchased}</span>
                <span className="font-mono text-[#D4AF37] font-semibold">₹{rev.pricePaidINR.toLocaleString('en-IN')}</span>
              </div>

              <div className="text-[10px] text-[#7A665C]">
                Occasion: <strong className="text-[#A8968C]">{rev.occasion}</strong>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

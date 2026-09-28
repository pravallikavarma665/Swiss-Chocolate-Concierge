import React, { useState } from 'react';
import { Plane, ShieldCheck, MapPin, Sparkles, ThermometerSnowflake, PackageCheck, Truck, Home } from 'lucide-react';

interface IndianCityRoute {
  name: string;
  state: string;
  transitTime: string;
  transitHub: string;
  temperatureControl: string;
  sampleAddress: string;
}

const INDIAN_CITIES: IndianCityRoute[] = [
  {
    name: 'Mumbai',
    state: 'Maharashtra',
    transitTime: '24–36 Hours from Import Gate',
    transitHub: 'Chhatrapati Shivaji Maharaj Air Cargo Terminal',
    temperatureControl: 'Phase-Change 16°C Ice Gel Shielding',
    sampleAddress: 'Bandra West, Nariman Point, Powai'
  },
  {
    name: 'Hyderabad',
    state: 'Telangana',
    transitTime: '36–48 Hours from Import Gate',
    transitHub: 'Rajiv Gandhi International Logistics Hub',
    temperatureControl: 'Multi-layer Foil Thermal Vault',
    sampleAddress: 'Banjara Hills, Jubilee Hills, Gachibowli'
  },
  {
    name: 'Bengaluru',
    state: 'Karnataka',
    transitTime: '24–40 Hours from Import Gate',
    transitHub: 'Kempegowda International Air Freight Hub',
    temperatureControl: 'Dry Ice-Free Thermal Gel Packets',
    sampleAddress: 'Indiranagar, Koramangala, Whitefield'
  },
  {
    name: 'Chennai',
    state: 'Tamil Nadu',
    transitTime: '36–48 Hours from Import Gate',
    transitHub: 'Meenambakkam Air Cargo Complex',
    temperatureControl: 'Humidity-Shielded Sealed Cold Pouch',
    sampleAddress: 'Adyar, Anna Nagar, Nungambakkam'
  },
  {
    name: 'Delhi',
    state: 'NCR',
    transitTime: '24–36 Hours from Import Gate',
    transitHub: 'Indira Gandhi International Cargo Hub',
    temperatureControl: 'Climate-Monitored Insulated Pack',
    sampleAddress: 'Chanakyapuri, Vasant Vihar, Greater Kailash'
  },
  {
    name: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    transitTime: '48–60 Hours from Import Gate',
    transitHub: 'Visakhapatnam Transit Logistics Center',
    temperatureControl: 'Thermal Insulated Coffret Box',
    sampleAddress: 'Beach Road, Siripuram, Waltair Uplands'
  },
  {
    name: 'Pune',
    state: 'Maharashtra',
    transitTime: '36–48 Hours from Import Gate',
    transitHub: 'Pune Express Surface-Air Logistics',
    temperatureControl: 'Triple-Layered Alpine Foam Enclosure',
    sampleAddress: 'Koregaon Park, Kalyani Nagar, Kothrud'
  },
  {
    name: 'Ahmedabad',
    state: 'Gujarat',
    transitTime: '36–48 Hours from Import Gate',
    transitHub: 'Sardar Vallabhbhai Patel International Gateway',
    temperatureControl: 'Double Thermal Barrier Foil',
    sampleAddress: 'Bodakdev, Satellite, Vastrapur'
  },
  {
    name: 'Kolkata',
    state: 'West Bengal',
    transitTime: '40–52 Hours from Import Gate',
    transitHub: 'Netaji Subhash Chandra Bose Air Transit',
    temperatureControl: 'Constant 16°C Sealed Gel Technology',
    sampleAddress: 'Alipore, Salt Lake, Ballygunge'
  }
];

export const SwissToIndiaJourney: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<IndianCityRoute>(INDIAN_CITIES[0]);

  return (
    <section id="switzerland-to-india" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#2A180E]">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B63] mb-2 flex items-center justify-center gap-1.5">
          <Plane className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Alpine Confectionery to the Subcontinent</span>
          <span aria-hidden="true">·</span>
          <span>Curated Sample Route</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF6F0]">
          From Switzerland to India
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#C8B6AC] leading-relaxed">
          How Switzerland's finest artisanal confections travel from high alpine workshops to doorstep across major Indian cities in pristine temperature-protected condition.
        </p>
      </div>

      {/* 4-Stage Horizontal Journey Banner */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-14">
        
        {/* Step 1 */}
        <div className="p-6 rounded-2xl bg-[#180E0A] border border-[#3E2416] hover:border-[#D4AF37]/50 transition-colors relative overflow-hidden group">
          <div className="w-10 h-10 rounded-xl bg-[#26150E] border border-[#54301B] flex items-center justify-center text-[#D4AF37] mb-4">
            <span className="font-mono text-sm font-bold">01</span>
          </div>
          <div className="text-xs text-[#C59B63] font-semibold uppercase tracking-wider mb-1">
            Stage 1 · Origin
          </div>
          <h3 className="font-serif text-lg font-semibold text-[#FAF6F0] mb-2">
            Swiss Alpine Origin
          </h3>
          <p className="text-xs text-[#A8968C] leading-relaxed">
            Freshly cast in Zurich, Glarus, Bern & Broc using 100% Swiss dairy milk and slow 72-hour longitudinal conching.
          </p>
          <div className="mt-4 pt-3 border-t border-[#2A160D] text-[11px] text-[#D4AF37] flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>Master Chocolatier Sealed</span>
          </div>
        </div>

        {/* Step 2 */}
        <div className="p-6 rounded-2xl bg-[#180E0A] border border-[#3E2416] hover:border-[#D4AF37]/50 transition-colors relative overflow-hidden group">
          <div className="w-10 h-10 rounded-xl bg-[#26150E] border border-[#54301B] flex items-center justify-center text-[#D4AF37] mb-4">
            <Plane className="w-5 h-5" />
          </div>
          <div className="text-xs text-[#C59B63] font-semibold uppercase tracking-wider mb-1">
            Stage 2 · Transit
          </div>
          <h3 className="font-serif text-lg font-semibold text-[#FAF6F0] mb-2">
            Temperature Air Import
          </h3>
          <p className="text-xs text-[#A8968C] leading-relaxed">
            Direct air freight dispatch from Zurich Kloten (ZRH) to Indian international gateways in pressurized cold-cargo pods.
          </p>
          <div className="mt-4 pt-3 border-t border-[#2A160D] text-[11px] text-[#C59B63] flex items-center gap-1">
            <ThermometerSnowflake className="w-3 h-3 text-cyan-400" />
            <span>Maintained at 16°C – 18°C</span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="p-6 rounded-2xl bg-[#180E0A] border border-[#3E2416] hover:border-[#D4AF37]/50 transition-colors relative overflow-hidden group">
          <div className="w-10 h-10 rounded-xl bg-[#26150E] border border-[#54301B] flex items-center justify-center text-[#D4AF37] mb-4">
            <Truck className="w-5 h-5" />
          </div>
          <div className="text-xs text-[#C59B63] font-semibold uppercase tracking-wider mb-1">
            Stage 3 · Hubs
          </div>
          <h3 className="font-serif text-lg font-semibold text-[#FAF6F0] mb-2">
            Indian Metro Hubs
          </h3>
          <p className="text-xs text-[#A8968C] leading-relaxed">
            Expedited customs clearance with dedicated cold storage warehousing across Mumbai, Delhi, Bengaluru, Hyderabad, Chennai & more.
          </p>
          <div className="mt-4 pt-3 border-t border-[#2A160D] text-[11px] text-[#D4AF37] flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            <span>FSSAI Compliant Storage</span>
          </div>
        </div>

        {/* Step 4 */}
        <div className="p-6 rounded-2xl bg-[#180E0A] border border-[#3E2416] hover:border-[#D4AF37]/50 transition-colors relative overflow-hidden group">
          <div className="w-10 h-10 rounded-xl bg-[#26150E] border border-[#54301B] flex items-center justify-center text-[#D4AF37] mb-4">
            <Home className="w-5 h-5" />
          </div>
          <div className="text-xs text-[#C59B63] font-semibold uppercase tracking-wider mb-1">
            Stage 4 · Final
          </div>
          <h3 className="font-serif text-lg font-semibold text-[#FAF6F0] mb-2">
            Your Doorstep
          </h3>
          <p className="text-xs text-[#A8968C] leading-relaxed">
            Delivered in insulated velvet coffrets with reusable non-toxic ice gel packs, ensuring chocolate never melts under Indian weather.
          </p>
          <div className="mt-4 pt-3 border-t border-[#2A160D] text-[11px] text-emerald-400 flex items-center gap-1">
            <PackageCheck className="w-3 h-3" />
            <span>100% Zero-Melt Guarantee</span>
          </div>
        </div>

      </div>

      {/* Interactive Indian Delivery Destination Explorer */}
      <div className="bg-[#180E0A] border-2 border-[#4A2D1C] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2C180E] pb-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C59B63] flex items-center gap-1.5 mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Sample Delivery Network Across India</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FAF6F0]">
              Select an Indian City to View Sample Logistics
            </h3>
          </div>
          <div className="text-xs text-[#8A766C] bg-[#140C08] px-3.5 py-1.5 rounded-lg border border-[#362117]">
            <span className="text-[#D4AF37] font-semibold">Demo Notice:</span> Example delivery locations for workshop demonstration.
          </div>
        </div>

        {/* City Filter Pills */}
        <div className="flex flex-wrap gap-2.5">
          {INDIAN_CITIES.map((city) => {
            const isSelected = selectedCity.name === city.name;
            return (
              <button
                key={city.name}
                type="button"
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#C59B63] text-[#120804] shadow-md shadow-[#D4AF37]/20 font-bold'
                    : 'bg-[#140C08] text-[#C8B6AC] hover:text-[#FAF6F0] border border-[#321E14] hover:border-[#4D2E1B]'
                }`}
              >
                <span>{city.name}</span>
                <span className="text-[10px] opacity-75 font-normal">({city.state})</span>
              </button>
            );
          })}
        </div>

        {/* Selected City Details Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl bg-[#140C08] border border-[#382116]">
          
          <div className="space-y-2">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A766C]">
              Destination City & State
            </div>
            <div className="font-serif text-2xl font-normal text-[#FAF6F0]">
              {selectedCity.name}, {selectedCity.state}
            </div>
            <div className="text-xs text-[#C59B63]">
              Sample localities: {selectedCity.sampleAddress}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A766C]">
              Air Cargo Hub & Clearance
            </div>
            <div className="text-sm font-semibold text-[#FAF6F0]">
              {selectedCity.transitHub}
            </div>
            <div className="text-xs text-[#A8968C] flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{selectedCity.transitTime}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A766C]">
              Tropical Thermal Protection
            </div>
            <div className="text-sm font-semibold text-emerald-300 flex items-center gap-1.5">
              <ThermometerSnowflake className="w-4 h-4 text-cyan-400" />
              <span>{selectedCity.temperatureControl}</span>
            </div>
            <p className="text-[11px] text-[#A8968C] leading-snug">
              Specialized packaging with food-grade gel ice preserves the delicate Swiss conche temper even at 40°C Indian summer temperatures.
            </p>
          </div>

        </div>

        {/* Clarification banner */}
        <div className="p-4 rounded-xl bg-[#22130C] border border-[#442718] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A8968C]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>
              All imported sample confections adhere to international food safety and Swiss export preservation guidelines.
            </span>
          </div>
          <span className="text-[11px] text-[#C59B63] shrink-0 font-medium">
            Demo/Educational Logistics Showcase
          </span>
        </div>

      </div>

    </section>
  );
};

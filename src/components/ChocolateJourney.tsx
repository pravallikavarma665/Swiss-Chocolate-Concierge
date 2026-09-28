import React, { useState } from 'react';
import { ArrowRight, Flame, Wind, Sparkles, CheckCircle2 } from 'lucide-react';

interface JourneyStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  durationOrTemp: string;
  icon: string;
  summary: string;
  technicalSecret: string;
  sensoryNote: string;
  historicSwissImpact: string;
}

const STEPS: JourneyStep[] = [
  {
    id: 'bean',
    stepNumber: '01',
    title: 'Cocoa Bean',
    subtitle: 'Wild Criollo Pods & Fermentation',
    durationOrTemp: '6 Days Fermentation',
    icon: '🌱',
    summary: 'The journey begins in ancient Andean and Sambirano river valleys. Hand-harvested cacao pods are cracked open, and the pulp-covered beans ferment beneath wild banana leaves to develop intrinsic fruity and floral precursor esters.',
    technicalSecret: 'Aerobic acetic fermentation converts bitter polyphenols into complex anthocyanin aromatics.',
    sensoryNote: 'Aromas of wild dark cherry, honey blossom, and tropical earth.',
    historicSwissImpact: 'Direct trade relationships established by Swiss confectioners in 1819 guaranteed fair compensation and pristine single-estate bean harvests.'
  },
  {
    id: 'roasting',
    stepNumber: '02',
    title: 'Roasting',
    subtitle: 'Copper Drum Gentle Radiance',
    durationOrTemp: '120°C – 140°C · 35 min',
    icon: '🔥',
    summary: 'Raw cocoa nibs enter rotating copper roasting drums. Controlled thermal radiance develops the deep chocolate aroma while eliminating moisture, allowing the thin outer husks to winnow cleanly away.',
    technicalSecret: 'Careful temperature calibration preserves delicate top floral notes without generating burnt pyrazines.',
    sensoryNote: 'Rich roasted cocoa bean, browned butter, and subtle hazelnut warmth.',
    historicSwissImpact: 'Swiss master roasters calibrate timing by ear—listening for the subtle second crack of the cacao shells.'
  },
  {
    id: 'grinding',
    stepNumber: '03',
    title: 'Grinding & Refining',
    subtitle: 'Five-Roll Micro-Milling',
    durationOrTemp: '< 18 Microns Particle Size',
    icon: '⚙️',
    summary: 'Roasted nibs and crystalline beet sugar are crushed beneath colossal chilled granite and steel cylinders. The microscopic particle size is reduced below 18 microns—finer than the human tongue can detect as individual grit.',
    technicalSecret: 'High friction releases natural cocoa butter from the cellular matrix, transforming dry nibs into thick cocoa liquor.',
    sensoryNote: 'A deep, dark chocolate liquid with intense earthy warmth.',
    historicSwissImpact: 'In 1826, Jacques Favarger harnessed river hydropower in Versoix to automate stone grinding with unmatched consistency.'
  },
  {
    id: 'conching',
    stepNumber: '04',
    title: 'Conching',
    subtitle: 'The 1879 Bern Miracle',
    durationOrTemp: '58°C · Up to 72 Hours',
    icon: '🌊',
    summary: 'The signature crowning achievement of Swiss chocolate. In 1879, Rodolphe Lindt invented the conche machine. Heavy granite rollers continuously knead, aerate, and slosh warm liquid chocolate for up to 72 hours.',
    technicalSecret: 'Relentless mechanical shear coats every microscopic sugar grain in a thin jacket of cocoa butter while driving off harsh volatile acids.',
    sensoryNote: 'Velvety smooth, melt-in-the-mouth emulsion with zero astringency.',
    historicSwissImpact: 'Transformed chocolate forever from a brittle, gritty crumb into the world’s most celebrated silk luxury.'
  },
  {
    id: 'tempering',
    stepNumber: '05',
    title: 'Tempering',
    subtitle: 'The Beta-V Crystal Matrix',
    durationOrTemp: '31.5°C Working Window',
    icon: '✨',
    summary: 'Cocoa butter is polymorphic—it can solidify into six chaotic crystal formations. Master chocolatiers cycle temperatures with surgical precision to ensure solely the coveted Beta-V (β-V) crystal matrix forms.',
    technicalSecret: 'Beta-V crystals contract upon cooling, allowing clean release from polished molds with a mirror gloss.',
    sensoryNote: 'Crisp acoustic snap, mirror-like gloss, and complete melt at 34°C body temperature.',
    historicSwissImpact: 'Gives authentic Swiss tablets their world-renowned mirror shine and distinct ringing fracture.'
  },
  {
    id: 'swiss-chocolate',
    stepNumber: '06',
    title: 'Swiss Chocolate',
    subtitle: 'The Finished Confection',
    durationOrTemp: '16°C – 18°C Cellar Aging',
    icon: '🇨🇭',
    summary: 'Blended with fresh alpine cream, whole roasted Piedmont hazelnuts, or single-origin Maracaibo beans, the tempered chocolate is cast into fresh slabs, hand-cut into ganaches, or poured into triangular Matterhorn peaks.',
    technicalSecret: 'Aged in stone cellars for several weeks to allow flavor esters to marry into harmonious complexity.',
    sensoryNote: 'Pure luxury: immediate silky surrender, balanced cacao, and lingering finish.',
    historicSwissImpact: 'The global standard of confectionery prestige, protected by Swiss federal law and 200 years of mastery.'
  }
];

export const ChocolateJourney: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(3); // Default on Conching (the Swiss hallmark)
  const activeStep = STEPS[activeStepIndex];

  return (
    <section id="journey" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#2A180E]">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B63] mb-2 flex items-center justify-center gap-1.5">
          <Wind className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>The Alchemy of Chocolate</span>
          <span aria-hidden="true">·</span>
          <span>From Bean to Bar</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF6F0]">
          The Swiss Chocolate Journey
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#C8B6AC] leading-relaxed">
          Witness how wild harvested cacao beans are transformed through slow heat, mechanical shear, and centuries of Swiss innovation into pure confectionery velvet.
        </p>
      </div>

      {/* Interactive Process Pipeline Steps */}
      <div className="mb-12 overflow-x-auto pb-4 scrollbar-none">
        <div className="flex items-center justify-between min-w-[760px] relative">
          
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-0.5 bg-[#362117] -z-0" />

          {STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            const isCompleted = idx < activeStepIndex;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className="relative z-10 flex flex-col items-center group cursor-pointer"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-lg border-2 transition-all ${
                    isActive
                      ? 'bg-[#2E1B12] border-[#D4AF37] text-white scale-110 shadow-lg shadow-[#D4AF37]/25'
                      : isCompleted
                      ? 'bg-[#180E0A] border-[#C59B63] text-[#FAF6F0]'
                      : 'bg-[#140C08] border-[#382116] text-[#7A665C] group-hover:border-[#5C3725]'
                  }`}
                >
                  <span>{step.icon}</span>
                </div>

                <span className="mt-2 text-xs font-mono font-bold text-[#D4AF37]">
                  {step.stepNumber}
                </span>
                <span className={`text-xs font-semibold whitespace-nowrap mt-0.5 ${isActive ? 'text-[#FAF6F0]' : 'text-[#8A766C]'}`}>
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Detailed Showcase Panel */}
      <div className="bg-[#180E0A] border-2 border-[#4A2D1C] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left: Step Lore & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#120804] bg-[#D4AF37] px-2.5 py-1 rounded">
                Stage {activeStep.stepNumber} of 06
              </span>
              <span className="text-xs text-[#C59B63] font-medium tracking-wide">
                {activeStep.durationOrTemp}
              </span>
            </div>

            <div>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#FAF6F0]">
                {activeStep.title}
              </h3>
              <div className="text-sm text-[#C59B63] mt-0.5 font-medium">
                {activeStep.subtitle}
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#D6C4B8] leading-relaxed">
              {activeStep.summary}
            </p>

            <div className="p-4 rounded-xl bg-[#140C08] border border-[#382116] space-y-1.5">
              <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Master Chocolatier’s Secret</span>
              </div>
              <p className="text-xs text-[#A8968C] leading-relaxed">
                {activeStep.technicalSecret}
              </p>
            </div>

          </div>

          {/* Right: Sensory & Historic Impact Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Sensory note card */}
            <div className="p-5 rounded-xl bg-[#22130C] border border-[#442718] space-y-2">
              <div className="text-xs font-semibold text-[#FAF6F0] flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Sensory Development:</span>
              </div>
              <p className="text-xs text-[#C8B6AC] leading-relaxed italic">
                “{activeStep.sensoryNote}”
              </p>
            </div>

            {/* Swiss historic breakthrough */}
            <div className="p-5 rounded-xl bg-[#140C08] border border-[#3A2216] space-y-2">
              <div className="text-xs font-semibold text-[#C59B63] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Swiss Historical Impact:</span>
              </div>
              <p className="text-xs text-[#A8968C] leading-relaxed">
                {activeStep.historicSwissImpact}
              </p>
            </div>

            {/* Next Step Nav Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveStepIndex((prev) => (prev + 1) % STEPS.length)}
                className="text-xs text-[#D4AF37] hover:text-[#FAF6F0] font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <span>Advance to Step {(activeStepIndex + 1) % STEPS.length + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

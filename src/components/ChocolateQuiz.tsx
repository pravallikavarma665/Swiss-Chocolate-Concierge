import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QUIZ_PERSONAS } from '../data/quiz';
import { ChocolateProduct, QuizPersona } from '../types';
import { HelpCircle, RotateCcw, Plus, Check } from 'lucide-react';

interface ChocolateQuizProps {
  allProducts: ChocolateProduct[];
  onSelectProduct: (product: ChocolateProduct) => void;
  onAddToBox: (product: ChocolateProduct) => void;
  isItemInBox: (productId: string) => boolean;
}

export const ChocolateQuiz: React.FC<ChocolateQuizProps> = ({
  allProducts,
  onSelectProduct,
  onAddToBox,
  isItemInBox,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [resultPersona, setResultPersona] = useState<QuizPersona | null>(null);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (traitCategory: string) => {
    const updatedAnswers = [...answers, traitCategory];
    setAnswers(updatedAnswers);

    if (currentQuestionIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Calculate persona based on most frequent trait category
      const counts: Record<string, number> = {};
      updatedAnswers.forEach((trait) => {
        counts[trait] = (counts[trait] || 0) + 1;
      });

      let topTrait = 'Dark';
      let maxCount = 0;
      Object.entries(counts).forEach(([trait, count]) => {
        if (count > maxCount) {
          maxCount = count;
          topTrait = trait;
        }
      });

      const matchedPersona = QUIZ_PERSONAS[topTrait] || QUIZ_PERSONAS['Dark'];
      setResultPersona(matchedPersona);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResultPersona(null);
  };

  // Find the matching chocolate product
  const matchingChocolate = resultPersona
    ? allProducts.find((p) => p.id === resultPersona.matchingChocolateId) || allProducts[0]
    : null;

  return (
    <section id="quiz" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#2A180E]">
      <div className="bg-[#180E0A] border-2 border-[#4A2D1C] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Glow accent */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#D4AF37]/10 blur-3xl pointer-events-none rounded-full" />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B63] flex items-center justify-center gap-1.5 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Palate Sommelier</span>
            <span aria-hidden="true">·</span>
            <span>Personality Discovery</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#FAF6F0]">
            What Kind of Swiss Chocolate Are You?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#C8B6AC]">
            Answer four sensory reflections to reveal your authentic Swiss chocolate archetype and ideal cellar pairing.
          </p>
        </div>

        {/* Quiz Flow or Persona Result */}
        {!resultPersona ? (
          <div className="space-y-8">
            
            {/* Progress Bar & Question Counter */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#A8968C]">
                <span>Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</span>
                <span className="font-mono text-[#D4AF37]">
                  {Math.round(((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100)}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-[#26150E] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-[#C59B63] transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="text-center space-y-1">
              <h3 className="font-serif text-2xl font-normal text-[#FAF6F0]">
                {currentQ.question}
              </h3>
              <p className="text-xs text-[#C59B63]">
                {currentQ.subtitle}
              </p>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {currentQ.options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectOption(opt.traitCategory)}
                  className="p-4 rounded-xl bg-[#140C08] border border-[#362117] hover:border-[#D4AF37] hover:bg-[#20120B] text-left transition-all cursor-pointer group shadow-md"
                >
                  <div className="text-2xl mb-2">{opt.icon}</div>
                  <div className="font-serif text-sm font-semibold text-[#FAF6F0] group-hover:text-[#D4AF37] transition-colors">
                    {opt.label}
                  </div>
                  <p className="text-xs text-[#A8968C] mt-1 leading-snug">
                    {opt.detail}
                  </p>
                </button>
              ))}
            </div>

          </div>
        ) : (
          /* Persona Reveal Screen */
          <div className="space-y-8 animate-fade-in">
            
            {/* Persona Hero Badge */}
            <div className="text-center space-y-2 pb-6 border-b border-[#2C180E]">
              <span className="font-mono text-xs font-bold text-[#120804] bg-[#D4AF37] px-3 py-1 rounded-full uppercase tracking-wider">
                Your Swiss Confectionery Archetype
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#FAF6F0] mt-2">
                {resultPersona.title}
              </h3>
              <div className="text-xs sm:text-sm text-[#C59B63] font-medium">
                {resultPersona.archetype}
              </div>
              <p className="text-xs sm:text-sm text-[#D6C4B8] max-w-xl mx-auto leading-relaxed mt-3">
                {resultPersona.summary}
              </p>
            </div>

            {/* Palate traits & Matching Chocolate card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              {/* Left: Sommelier Tasting Notes for this Persona */}
              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#FAF6F0]">
                  Your Palate DNA:
                </div>
                <div className="space-y-2">
                  {resultPersona.palateTraits.map((trait, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#C8B6AC]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{trait}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-[#140C08] border border-[#382116] text-xs text-[#A8968C] space-y-1">
                  <span className="font-semibold text-[#D4AF37]">Ideal Beverage Pairing:</span>
                  <p>{resultPersona.suggestedPairing}</p>
                </div>
              </div>

              {/* Right: The Matched Chocolate Product Card */}
              {matchingChocolate && (
                <div className="bg-[#140C08] border border-[#442718] rounded-xl p-5 shadow-xl space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#C59B63] font-semibold">{matchingChocolate.chocolatier}</span>
                    <span className="font-mono text-[#FAF6F0] font-bold">
                      ₹{matchingChocolate.priceINR.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-semibold text-[#FAF6F0]">
                    {matchingChocolate.name}
                  </h4>

                  <p className="text-xs text-[#A8968C] line-clamp-2">
                    {matchingChocolate.shortStory}
                  </p>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(matchingChocolate)}
                      className="py-2 px-3 rounded bg-[#20120B] border border-[#3A2216] text-xs text-[#FAF6F0] hover:text-[#D4AF37] transition-colors cursor-pointer"
                    >
                      Read Full Story
                    </button>

                    <button
                      type="button"
                      onClick={() => onAddToBox(matchingChocolate)}
                      className={`flex-1 py-2 px-3 rounded text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isItemInBox(matchingChocolate.id)
                          ? 'bg-[#2E1B12] text-[#D4AF37] border border-[#D4AF37]'
                          : 'bg-gradient-to-r from-[#D4AF37] to-[#C59B63] text-[#120804] hover:brightness-110 shadow-sm'
                      }`}
                    >
                      {isItemInBox(matchingChocolate.id) ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>In Your Gift Box</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to My Box</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Reset / Retake Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-[#A8968C] hover:text-[#FAF6F0] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Palate Quiz</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

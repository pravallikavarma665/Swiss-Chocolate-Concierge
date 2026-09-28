import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/journal';
import { JournalArticle } from '../types';
import { BookOpen, Clock, ArrowRight, X, User } from 'lucide-react';

export const CellarJournal: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#2A180E]">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B63] mb-2 flex items-center justify-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>The Cellar Journal</span>
          <span aria-hidden="true">·</span>
          <span>Chronicles of Swiss Confectionery</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF6F0]">
          Stories, Science & Heritage
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#C8B6AC] leading-relaxed">
          Deep dives into the accidental breakthroughs, microscopic physics, and cultural lore that established Switzerland as the world’s confectionery capital.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {JOURNAL_ARTICLES.map((article) => (
          <article
            key={article.id}
            className="bg-[#180E0A] border border-[#3A2216] rounded-2xl p-6 sm:p-8 hover:border-[#C59B63]/60 transition-all flex flex-col justify-between group shadow-xl"
          >
            <div className="space-y-4">
              
              <div className="flex items-center justify-between text-xs text-[#C59B63]">
                <span className="font-semibold uppercase tracking-wider">{article.category}</span>
                <span className="flex items-center gap-1 text-[#8A766C]">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-normal text-[#FAF6F0] group-hover:text-[#D4AF37] transition-colors">
                  {article.title}
                </h3>
                <div className="text-xs text-[#C59B63] mt-1 font-medium">
                  {article.subtitle}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#C8B6AC] leading-relaxed line-clamp-3">
                {article.heroExcerpt}
              </p>

            </div>

            <div className="pt-6 border-t border-[#26150E] mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#8A766C]">
                <User className="w-3.5 h-3.5" />
                <span>{article.author.split(',')[0]}</span>
              </div>

              <button
                type="button"
                onClick={() => setActiveArticle(article)}
                className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-[#FAF6F0] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Read Essay</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </article>
        ))}
      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveArticle(null)}
        >
          <div 
            className="bg-[#180E0A] border border-[#442718] rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-[#2C180E] bg-[#140C08] flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B63]">
                  {activeArticle.category} · {activeArticle.readTime}
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#FAF6F0] mt-0.5">
                  {activeArticle.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="w-9 h-9 rounded-full bg-[#20120B] border border-[#3E2519] text-[#C8B6AC] hover:text-[#FAF6F0] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Essay Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#D6C4B8] leading-relaxed">
              
              <div className="p-4 rounded-xl bg-[#22130C] border border-[#442718] text-xs text-[#FAF6F0] italic leading-relaxed">
                {activeArticle.heroExcerpt}
              </div>

              <div className="text-xs text-[#8A766C]">
                By <strong className="text-[#C59B63]">{activeArticle.author}</strong> · {activeArticle.publishedDate}
              </div>

              {activeArticle.sections.map((section, idx) => (
                <div key={idx} className="space-y-2 pt-2">
                  <h4 className="font-serif text-lg font-semibold text-[#FAF6F0]">
                    {section.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#C8B6AC] leading-relaxed">
                    {section.content}
                  </p>

                  {section.highlightQuote && (
                    <blockquote className="my-4 p-4 border-l-2 border-[#D4AF37] bg-[#140C08] text-xs italic text-[#D4AF37]">
                      {section.highlightQuote}
                    </blockquote>
                  )}
                </div>
              ))}

              <div className="pt-6 border-t border-[#2C180E] flex justify-between items-center text-xs text-[#8A766C]">
                <span>Swiss Chocolate Cellar Archives</span>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="text-[#D4AF37] hover:underline cursor-pointer"
                >
                  Close Essay
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

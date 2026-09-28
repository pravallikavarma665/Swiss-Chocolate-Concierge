import { JournalArticle } from '../types';

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'why-swiss-chocolate-became-famous',
    slug: 'why-swiss-chocolate-became-famous',
    title: 'Why Swiss Chocolate Became Famous',
    subtitle: 'The Accidental Conche of 1879 & The Alpine Milk Miracle of Vevey',
    category: 'Heritage & Lore',
    readTime: '4 min read',
    publishedDate: '28 September 2026',
    author: 'Henriette von Graffenried, Cellar Historian',
    heroExcerpt: 'Before Switzerland conquered the confectionery world, chocolate was a bitter, gritty medicinal paste chewed like stale bread. Two pivotal Swiss breakthroughs forever changed sensory history.',
    sections: [
      {
        title: 'The Gritty Past of Chocolate',
        content: 'Throughout the 17th and 18th centuries across Europe, cocoa was primarily consumed as an oily medicinal beverage. Solid bars were coarse, dry, and chalky—sugar crystals remained unmelted against the tongue, and cocoa solids separated unpleasantly from fat.'
      },
      {
        title: '1875: Daniel Peter and the Vevey Discovery',
        content: 'In the canton of Vaud, chocolatier Daniel Peter spent eight exhausting years trying to blend fresh cow’s milk into chocolate liquor. Fresh milk contained too much water, causing the cocoa butter to seize into an unworkable lump. Down the street in Vevey, Henri Nestlé had just perfected condensed powdered milk for infants. In 1875, Peter combined Nestlé’s dehydrated milk solids with cocoa butter: solid milk chocolate was born.',
        highlightQuote: '“For eight years, every experiment curdled. Then, infant milk powder from a Vevey neighbor unlocked the smoothest confectionery the world had ever tasted.”'
      },
      {
        title: '1879: The Stormy Weekend in Bern',
        content: 'Four years later in Bern along the turquoise river Aare, manufacturer Rodolphe Lindt sought a way to make chocolate melt like butter. On a Friday evening, Lindt allegedly forgot to switch off his newly built granite conche engine. Over the entire weekend, heavy granite rollers sloshed and heated the warm cocoa liquor relentlessly. When Lindt returned on Monday morning, expecting ruined burnt sludge, he instead discovered an intoxicating aroma and a shimmering liquid that dissolved on the tongue like silk.'
      },
      {
        title: 'The Conching Standard',
        content: 'Prolonged friction (up to 72 hours) and gentle aeration eliminate unwanted volatile acids, coat every microscopic sugar particle in a microscopic jacket of cocoa butter, and create the velvet emulsion that cemented Switzerland’s global culinary crown.'
      }
    ]
  },
  {
    id: 'the-art-of-tempering',
    slug: 'the-art-of-tempering',
    title: 'The Art of Tempering',
    subtitle: 'The Microscopic Physics of Beta-V Crystals & The Acoustic Snap',
    category: 'Craftsmanship & Science',
    readTime: '5 min read',
    publishedDate: '15 August 2026',
    author: 'Chef Marc Delacrétaz, Master Chocolatier',
    heroExcerpt: 'Every master confiseur knows that chocolate is polymorphic: its cocoa butter can solidify into six distinct crystal structures, but only one creates the legendary Swiss sheen and crisp acoustic fracture.',
    sections: [
      {
        title: 'The Six Crystal Polymorphs',
        content: 'Cocoa butter is one of nature’s most sophisticated vegetable lipids. When liquid chocolate cools haphazardly, it forms chaotic Form I through IV crystals. These yield a dull grayish surface, soft squishy texture, and catastrophic bloom where fats migrate to the surface like white powder.'
      },
      {
        title: 'The Holy Grail: Form Beta-V (β-V)',
        content: 'Master chocolatiers manipulate temperature with surgical precision: heating to 45°C to melt all existing crystals, cooling down to 27°C to initiate seed crystallization, then gently reheating to 31°C–32°C to eliminate unstable lower crystals while preserving solely the prized Beta-V polymorph.',
        highlightQuote: '“Beta-V crystals pack into an ultra-dense geometric matrix. When cooled, they contract slightly—causing the chocolate to pull cleanly away from molds with a mirror gloss.”'
      },
      {
        title: 'The Acoustic Snap Test',
        content: 'When evaluating authentic Swiss chocolate in our cellar, hold a piece to your ear and break it. An impeccably tempered bar produces a clean, sharp, ringing acoustic "clink" rather than a dull thud. The fractured edge should be razor-sharp with no crumbs.'
      },
      {
        title: 'The 34°C Surrender',
        content: 'Beta-V crystals melt precisely between 33.8°C and 34.5°C—just below the 37°C temperature of the human mouth. The chocolate remains solid in your hand, yet surrenders into liquid luxury the instant it touches your palate.'
      }
    ]
  },
  {
    id: 'milk-vs-dark-alpine-terroir',
    slug: 'milk-vs-dark-alpine-terroir',
    title: 'Milk vs Dark Chocolate: The Alpine Terroir Debate',
    subtitle: 'Simmental Cow Meadow Grasses vs Rare Wild Criollo Beans',
    category: 'Tasting & Sommelier',
    readTime: '4 min read',
    publishedDate: '02 July 2026',
    author: 'Elena Rossi, Palate Sommelier',
    heroExcerpt: 'Can a chocolate bar possess terroir like fine Burgundy wine? In Switzerland, the answer is an emphatic yes. The debate between pure dark cacao purists and alpine milk enthusiasts is rooted in geography.',
    sections: [
      {
        title: 'The Dairy Terroir of Fribourg and Gruyère',
        content: 'Milk is not a sterile additive in Swiss chocolaterie—it is a live expression of altitude and botany. During the summer "inalpe", Swiss Simmental and Brown Swiss cows climb to 2,000 meters to graze on alpine clover, mountain thyme, and wild meadow flowers.'
      },
      {
        title: 'Beta-Carotene & Fat Globule Architecture',
        content: 'These high-altitude alpine forages infuse milk fat with natural beta-carotene and distinct polyunsaturated fatty acids. When blended into chocolate liquor, the milk imparts caramel, brioche, and wildflower notes that industrial reconstituted milk powders can never simulate.',
        highlightQuote: '“In summer, the butterfat of cows grazing on alpine thyme melts at a slightly lower temperature, giving high-pasture Swiss milk chocolate an unmatched velvety glide.”'
      },
      {
        title: 'The Pure Dark Terroir: Single-Estate Criollo',
        content: 'On the opposing side of the cellar table stand the dark purists. Sourcing single-origin beans from Lake Maracaibo or Madagascar’s Sambirano Valley, Swiss masters conche at lower temperatures to preserve the delicate plum, cedar, and floral notes native to ancient cacao cultivars.'
      },
      {
        title: 'The Sommelier’s Verdict',
        content: 'There is no contest of superiority—only occasion. Savor 78% single-origin dark when you seek contemplative contemplation with aged spirits; surrender to authentic 36% alpine milk when you seek comfort, warmth, and nostalgic Swiss hospitality.'
      }
    ]
  },
  {
    id: 'inside-a-swiss-chocolate-factory',
    slug: 'inside-a-swiss-chocolate-factory',
    title: 'Inside a Swiss Chocolate Factory',
    subtitle: 'From Andean Cacao Pods to Hand-Broken Slabs in Canton Glarus',
    category: 'Behind the Scenes',
    readTime: '6 min read',
    publishedDate: '18 May 2026',
    author: 'Lukas Bär, Confectionery Journalist',
    heroExcerpt: 'Step through the heavy oak cellar doors into Ennenda, where alpine glacier water powers machinery that transforms raw fermented beans into the legendary FrischSchoggi slabs.',
    sections: [
      {
        title: 'The Roasting Roar of Copper Drums',
        content: 'The journey begins in the bean cellar, stacked with burlap sacks from Venezuela, Bolivia, and Madagascar. Whole hazelnuts from Piedmont arrive raw and are roasted in small 50-kilogram batches inside rotating copper drums until the skins flake away to reveal golden caramelized cores.'
      },
      {
        title: 'Stone Grinding & The Five-Roll Refiner',
        content: 'Cocoa nibs and sugar pass through colossal steel rollers calibrated to narrow the particle size down to less than 18 microns—smaller than the human taste bud can detect as individual grains.'
      },
      {
        title: 'The Rhythm of the Conche Floor',
        content: 'Entering the conche floor is a sensory bath. The air is warm and heavy with cocoa aromas and sweet milk vapor. Giant mechanical paddles knead tons of liquid chocolate day and night in rhythmic, hypnotic sweeps.',
        highlightQuote: '“You cannot rush the conche. Any attempt to speed up the process traps volatile tannins that ruin the lingering finish.”'
      },
      {
        title: 'The Art of the Fresh Fracture',
        content: 'Unlike mass-manufactured bars sealed in airtight plastic foil, FrischSchoggi is poured into shallow marble trays, cooling slowly under alpine mountain air. Confectioners in white aprons use specialized brass hammers to crack the slabs by hand, creating raw, tactile edges ready for the cellar glass counters.'
      }
    ]
  }
];

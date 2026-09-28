import { useState } from 'react';
import { SWISS_CHOCOLATES } from './data/chocolates';
import { ChocolateProduct, CustomBox } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedCollection } from './components/FeaturedCollection';
import { CellarCollection } from './components/CellarCollection';
import { IndianChocolateDiscovery } from './components/IndianChocolateDiscovery';
import { BuildYourBox } from './components/BuildYourBox';
import { ChocolateJourney } from './components/ChocolateJourney';
import { SwissToIndiaJourney } from './components/SwissToIndiaJourney';
import { SwissMap } from './components/SwissMap';
import { ChocolateQuiz } from './components/ChocolateQuiz';
import { IndianReviews } from './components/IndianReviews';
import { CellarJournal } from './components/CellarJournal';
import { ProductModal } from './components/ProductModal';
import { BoxDrawer } from './components/BoxDrawer';
import { Footer } from './components/Footer';
import { SwissChocolateConcierge } from './components/SwissChocolateConcierge';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ChocolateProduct | null>(null);
  const [isBoxDrawerOpen, setIsBoxDrawerOpen] = useState<boolean>(false);

  // Custom Gift Box state in Indian Rupees & Indian Occasions
  const [customBox, setCustomBox] = useState<CustomBox>({
    size: 8,
    items: [
      SWISS_CHOCOLATES[0], // Milk Chocolate (Lindt Swiss Classic)
      SWISS_CHOCOLATES[1], // Dark Chocolate 70% (Lindt Excellence Intense)
      SWISS_CHOCOLATES[2], // Hazelnut Chocolate (Läderach FrischSchoggi Slab)
      SWISS_CHOCOLATES[4], // Caramel Chocolate (Lindt Excellence Salted Caramel)
    ],
    ribbonColor: 'gold',
    giftMessage: 'Wishing you joyous celebrations and sweet moments with authentic Swiss artisanal confections.',
    recipientName: 'Aarav & Ananya',
    occasion: 'Diwali',
    budgetCapINR: 2500,
  });

  const isItemInBox = (productId: string) => {
    return customBox.items.some((item) => item.id === productId);
  };

  const handleAddToBox = (product: ChocolateProduct) => {
    if (customBox.items.length < customBox.size) {
      setCustomBox((prev) => ({
        ...prev,
        items: [...prev.items, product],
      }));
    } else {
      // If full, open the drawer gently to show status
      setIsBoxDrawerOpen(true);
    }
  };

  const handleRemoveFromBox = (index: number) => {
    setCustomBox((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const handleClearBox = () => {
    setCustomBox((prev) => ({
      ...prev,
      items: [],
    }));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#120A07] text-[#FAF6F0] flex flex-col selection:bg-[#D4AF37] selection:text-[#120804]">
      
      {/* Top Header */}
      <Header
        customBox={customBox}
        onOpenBoxDrawer={() => setIsBoxDrawerOpen(true)}
        onOpenQuiz={() => scrollToSection('quiz')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero
          onExploreCollection={() => scrollToSection('collection')}
          onOpenBuildBox={() => scrollToSection('build-box')}
          onOpenQuiz={() => scrollToSection('quiz')}
        />

        {/* 2. Featured Swiss Chocolates (in ₹ INR) */}
        <FeaturedCollection
          products={SWISS_CHOCOLATES}
          onSelectProduct={setSelectedProduct}
          onAddToBox={handleAddToBox}
          isItemInBox={isItemInBox}
        />

        {/* 3. Which Swiss Chocolate Would You Love? (Indian Chocolate Discovery) */}
        <IndianChocolateDiscovery
          products={SWISS_CHOCOLATES}
          onSelectProduct={setSelectedProduct}
          onAddToBox={handleAddToBox}
          isItemInBox={isItemInBox}
        />

        {/* 4. Explore the Cellar (Full Interactive Collection with ₹ INR Pricing) */}
        <CellarCollection
          products={SWISS_CHOCOLATES}
          onSelectProduct={setSelectedProduct}
          onAddToBox={handleAddToBox}
          isItemInBox={isItemInBox}
        />

        {/* 5. Build Your Box (Indian Occasions & ₹ Rupee Budget Atelier) */}
        <BuildYourBox
          customBox={customBox}
          allProducts={SWISS_CHOCOLATES}
          onUpdateBox={setCustomBox}
          onSelectProduct={setSelectedProduct}
        />

        {/* 6. From Switzerland to India (Import, Cold-Chain Transit & Doorstep Delivery) */}
        <SwissToIndiaJourney />

        {/* 7. The 6-Stage Chocolate Craft Journey */}
        <ChocolateJourney />

        {/* 8. Swiss Terroirs & Cantons Map */}
        <SwissMap
          products={SWISS_CHOCOLATES}
          onSelectProduct={setSelectedProduct}
          onAddToBox={handleAddToBox}
          isItemInBox={isItemInBox}
        />

        {/* 9. Tasting Quiz: "What kind of Swiss chocolate are you?" */}
        <ChocolateQuiz
          allProducts={SWISS_CHOCOLATES}
          onSelectProduct={setSelectedProduct}
          onAddToBox={handleAddToBox}
          isItemInBox={isItemInBox}
        />

        {/* 10. Connoisseur Stories Across India (Customer Reviews & Experiences) */}
        <IndianReviews />

        {/* 11. The Cellar Journal & Stories (Indian Date Formatted) */}
        <CellarJournal />

      </main>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToBox={handleAddToBox}
        isItemInBox={selectedProduct ? isItemInBox(selectedProduct.id) : false}
      />

      {/* Box Cart Slide-out Drawer */}
      <BoxDrawer
        isOpen={isBoxDrawerOpen}
        onClose={() => setIsBoxDrawerOpen(false)}
        customBox={customBox}
        onRemoveItem={handleRemoveFromBox}
        onClearBox={handleClearBox}
        onScrollToBuilder={() => scrollToSection('build-box')}
      />

      {/* Floating n8n AI Chat Widget: Swiss Chocolate Concierge */}
      <SwissChocolateConcierge />

      {/* Footer with India Hubs & Demo Notices */}
      <Footer />

    </div>
  );
}

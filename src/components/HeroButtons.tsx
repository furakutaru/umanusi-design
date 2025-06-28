import React from "react";

export function HeroButtons() {
  const handleConsultationClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handlePortfolioClick = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 w-[90vw] md:w-auto items-center mx-auto">
      <button
        className="px-8 py-4 rounded-full bg-red-600 text-white text-lg font-bold shadow-md transition-all duration-200 ease-out hover:bg-white hover:text-red-600 hover:scale-105 min-w-[240px] w-[90%] md:w-auto max-w-full"
        onClick={handleConsultationClick}
      >
        制作を相談・依頼する
      </button>
      <button
        className="px-8 py-4 rounded-full bg-white text-red-600 text-lg font-bold shadow-md border border-red-600 border-solid transition-all duration-200 ease-out hover:bg-red-600 hover:text-white hover:scale-105 min-w-[240px] w-[90%] md:w-auto max-w-full md:ml-4"
        onClick={handlePortfolioClick}
      >
        制作実績を見る
      </button>
    </div>
  );
} 
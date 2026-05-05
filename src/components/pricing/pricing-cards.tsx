"use client";

import PricingCard from "./pricing-card";

const PricingCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6">
      <PricingCard type="free" />
      <PricingCard type="starter" />
      <PricingCard type="enterprise" />
    </div>
  );
};

export default PricingCards;

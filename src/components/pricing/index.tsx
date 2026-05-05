import {
  MaxWidthWrapper,
  AnimationContainer,
  PricingCards,
} from "@/components";
// import PricingCards from "./pricing-cards";
import { CreditCardIcon } from "lucide-react";

const PricingSection = () => {
  return (
    <MaxWidthWrapper className="py-10">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center justify-center w-full py-8 max-w-xl mx-auto">
          <h2 className="text-center text-3xl md:text-5xl font-medium mt-6">
            Simple, scalable pricing
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
            Start free, upgrade as you grow. Only pay for the properties you
            manage.
          </p>
        </div>
      </AnimationContainer>

      <AnimationContainer delay={0.2}>
        <PricingCards />
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};

export default PricingSection;

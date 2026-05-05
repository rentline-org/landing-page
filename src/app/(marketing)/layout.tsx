import React from "react";
import { Footer, Navbar } from "@/components";
import Grainient from "@/components/ui/granient";
import { HeroBackground } from "@/components/hero-background";

interface Props {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <>
      <HeroBackground />
      {/* <div
        className="pointer-events-none
    absolute inset-0
    overflow-hidden
    bg-size-[3rem_3rem]
    [mask:radial-gradient(ellipse_50%_60%_at_80%_15%,#000_60%,transparent_120%)]
    h-full"
      >
        <Grainient
          color1="#6b26d9"
          color2="#f3edfd"
          color3="#401782"
          timeSpeed={0.55}
          colorBalance={-0.07}
          warpStrength={2.05}
          warpFrequency={5.6}
          warpSpeed={0.9}
          warpAmplitude={73}
          blendAngle={99}
          blendSoftness={0.48}
          rotationAmount={650}
          noiseScale={1}
          grainAmount={0.09}
          grainScale={4.9}
          grainAnimated={false}
          contrast={1.55}
          gamma={0.9}
          saturation={1.2}
          centerX={-0.18}
          centerY={0.04}
          zoom={0.85}
        />
      </div> */}
      {/* <div id="home" className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full" /> */}
      <Navbar />
      <main className="mt-20 mx-auto w-full z-0 relative">{children}</main>
      <Footer />
    </>
  );
};

export default MarketingLayout;

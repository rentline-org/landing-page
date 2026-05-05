"use client";

import { useState, useEffect } from "react";
import Grainient from "./ui/granient";

export function HeroBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 h-full overflow-hidden 
      [mask:linear-gradient(to_bottom,#000_0%,transparent_50%)] 
      
      md:[mask:radial-gradient(ellipse_50%_60%_at_80%_15%,#000_60%,transparent_120%)]"
    >
      <Grainient
        color1="#6b26d9"
        color2="#f3edfd"
        color3="#401782"
        timeSpeed={0.55}
        colorBalance={-0.07}
        /* MOBILE FIXES */
        warpStrength={isMobile ? 1.0 : 2.05} // Less distortion on mobile for cleaner look
        warpFrequency={isMobile ? 3.0 : 5.6} // Smoother waves
        warpSpeed={0.9}
        warpAmplitude={isMobile ? 30 : 73} // Much lower amplitude so it doesn't "clash" with text
        blendAngle={99}
        blendSoftness={isMobile ? 0.8 : 0.48} // Higher softness blends the colors away from the center
        rotationAmount={650}
        noiseScale={1}
        grainAmount={isMobile ? 0.05 : 0.09} // Reduced grain for mobile clarity
        grainScale={isMobile ? 2.5 : 4.9} // Finer grain on mobile
        grainAnimated={false}
        contrast={isMobile ? 1.1 : 1.55} // Lower contrast to prevent dark "blobs"
        gamma={isMobile ? 1.2 : 0.9} // Higher gamma lightens the midtones
        saturation={isMobile ? 0.7 : 1.2} // Desaturate slightly on mobile for legibility
        centerX={isMobile ? 0.5 : -0.18} // Move focal point
        centerY={isMobile ? -0.2 : 0.04} // Push color toward the top/away from text
        zoom={isMobile ? 0.5 : 0.85}
      />
    </div>
  );
}

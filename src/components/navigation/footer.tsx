import Link from "next/link";
import { AnimationContainer } from "@/components";
import Grainient from "../ui/granient";
import {
  LinkedinLogoIcon,
  InstagramLogoIcon,
  FacebookLogoIcon,
} from "@phosphor-icons/react/ssr";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] overflow-hidden">
      {/* Center bar indicator */}
      <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-neutral-800 rounded-full z-20"></div>

      {/* GRAINIENT OVERLAY */}
      <div className="pointer-events-none absolute inset-0 right-0 w-full overflow-hidden opacity-80 z-0 [mask:radial-gradient(ellipse_80%_100%_at_80%_50%,#000_10%,transparent_100%)]">
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
      </div>

      <div className="flex flex-col items-center w-full z-10">
        {/* LOGO & TAGLINE */}
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center justify-center mb-12">
            <Image
              src="/logo_full.png"
              alt="Rentline Logo"
              width={220}
              height={70}
              className="mix-blend-multiply"
            />
          </div>
        </AnimationContainer>

        {/* TIGHT NAVIGATION LINKS */}
        <AnimationContainer delay={0.2}>
          {/* Using a flex container with a fixed max-width and 'gap' keeps them close together */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 md:gap-x-20 pb-16 w-full max-w-3xl border-b border-neutral-200/30">
            <div className="flex flex-col items-center">
              <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-widest">
                Product
              </h3>
              <ul className="mt-4 space-y-3 text-center">
                {["Features", "Pricing"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors font-medium"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-widest">
                Resources
              </h3>
              <ul className="mt-4 space-y-3 text-center">
                {["Blog", "Support", "Guides", "FAQ"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors font-medium"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-widest">
                Company
              </h3>
              <ul className="mt-4 space-y-3 text-center">
                {["About", "Privacy", "Terms", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors font-medium"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimationContainer>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-8 pb-12 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl z-10 gap-6">
        <div className="flex items-center gap-4 text-sm text-neutral-500 font-medium">
          <span>&copy; {new Date().getFullYear()} rentline.io.</span>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: <LinkedinLogoIcon size={18} />, label: "LinkedIn" },
            { icon: <InstagramLogoIcon size={18} />, label: "Instagram" },
            { icon: <FacebookLogoIcon size={18} />, label: "Facebook" },
          ].map((social, idx) => (
            <Link
              key={idx}
              href="#"
              className="p-2 bg-neutral-50 border border-neutral-200 rounded-full text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              <Tooltip>
                <TooltipTrigger asChild>{social.icon}</TooltipTrigger>
                <TooltipContent>Follow us</TooltipContent>
              </Tooltip>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

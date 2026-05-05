"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { CheckCircleIcon, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import PropertyCounter from "./property-counter";
import { cn } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";

type PlanType = "free" | "starter" | "enterprise";

type Props = {
  type: PlanType;
};

const PricingCard = ({ type }: Props) => {
  const [properties, setProperties] = useState(5);

  const isStarter = type === "starter";
  const isFree = type === "free";

  const basePrice = 20;
  const extraPrice = 5;

  const extraUnits = Math.max(0, properties - 5);

  const totalPrice = isStarter ? basePrice + extraUnits * extraPrice : 0;

  /* ---------------- ENTERPRISE ---------------- */
  if (type === "enterprise") {
    return (
      <Card className="flex flex-col relative overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Enterprise
            <Sparkles className="w-4 h-4 text-primary" />
          </CardTitle>

          <p className="text-muted-foreground">
            Built for agencies and large portfolios
          </p>

          <div className="text-2xl font-semibold mt-2">Custom pricing</div>
        </CardHeader>

        <CardContent className="space-y-3">
          <Feature text="Unlimited properties" />
          <Feature text="Dedicated account manager" />
          <Feature text="Advanced reporting & analytics" />
          <Feature text="Priority support" />
          <Feature text="Custom integrations" />
        </CardContent>

        <CardFooter className="mt-auto flex flex-col gap-2">
          <Link
            href="/contact"
            className={buttonVariants({
              className: "w-full flex items-center justify-center gap-2",
            })}
          >
            Talk to sales
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-xs text-muted-foreground text-center">
            Tailored solutions for your business
          </p>
        </CardFooter>
      </Card>
    );
  }

  /* ---------------- FREE + STARTER ---------------- */
  return (
    <Card
      className={cn(
        "flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        isStarter && "border-2 border-primary",
      )}
    >
      {/* MOST POPULAR BADGE */}
      {isStarter && (
        <div className="absolute top-3 right-3 text-xs bg-primary text-white px-2 py-1 rounded-md">
          Most popular
        </div>
      )}

      <CardHeader>
        <CardTitle>{isFree ? "Free" : "Starter"}</CardTitle>

        <p className="text-muted-foreground">
          {isFree ? "Perfect to get started" : "Scale as your portfolio grows"}
        </p>

        {/* PRICE */}
        <div className="mt-3">
          {isFree ? (
            <div className="text-3xl font-semibold">$0</div>
          ) : (
            <div className="flex items-end gap-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={totalPrice}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-3xl font-semibold"
                >
                  ${totalPrice}
                </motion.span>
              </AnimatePresence>

              <span className="text-sm text-muted-foreground mb-1">/month</span>
            </div>
          )}

          {/* dynamic breakdown */}
          {isStarter && extraUnits > 0 && (
            <p className="text-xs text-muted-foreground mt-1">
              Includes ${basePrice} base + ${extraUnits * extraPrice} for{" "}
              {extraUnits} extra properties
            </p>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {isFree ? (
          <>
            <Feature text="Up to 2 properties" />
            <Feature text="Tenant & lease management" />
            <Feature text="Basic accounting" />
            <Feature text="Documents & contacts" />
            <Feature text="Mobile app access" />
          </>
        ) : (
          <>
            <Feature text="5 properties included" />
            <Feature text="Full accounting suite" />
            <Feature text="Tenant dashboard access" />
            <Feature text="$5 per extra property" />

            <PropertyCounter value={properties} setValue={setProperties} />
          </>
        )}
      </CardContent>

      <CardFooter className="mt-auto flex flex-col gap-3">
        <Link
          href="/"
          className={buttonVariants({
            className: cn(
              "w-full",
              isStarter && "bg-primary hover:bg-primary/90 text-white",
            ),
          })}
        >
          {isFree ? "Start for free" : "Get started"}
        </Link>

        <p className="text-xs text-muted-foreground text-center">
          {isFree ? "No credit card required" : "Upgrade or downgrade anytime"}
        </p>
      </CardFooter>
    </Card>
  );
};

const Feature = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 text-sm">
    <CheckCircleIcon className="w-4 h-4 text-primary" />
    {text}
  </div>
);

export default PricingCard;

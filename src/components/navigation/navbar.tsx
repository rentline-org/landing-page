"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LucideIcon, ZapIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn, NAV_LINKS } from "@/utils";
import MaxWidthWrapper from "../global/max-width-wrapper";
import MobileNavbar from "./mobile-navbar";
import AnimationContainer from "../global/animation-container";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 inset-x-0 z-50 h-14 w-full border-b border-transparent select-none",
        "transition-all duration-200",
        "border-border/60 bg-background/50 backdrop-blur-xl",
      )}
    >
      <AnimationContainer reverse delay={0.1} className="size-full">
        <MaxWidthWrapper className="flex h-14 items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <Link
              href="/#home"
              className="shrink-0 text-lg font-semibold tracking-tight transition-opacity hover:opacity-80"
            >
              <Image
                src="/logo.png"
                alt="Rentline Logo"
                width={300}
                height={100}
                className="h-14 w-auto "
              />
            </Link>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-1 text-foreground/90">
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.title}>
                    {link.menu ? (
                      <>
                        <NavigationMenuTrigger className="h-9 rounded-md px-3 text-sm font-medium">
                          {link.title}
                        </NavigationMenuTrigger>

                        <NavigationMenuContent>
                          <div
                            className={cn(
                              "rounded-xl border bg-popover p-2 shadow-lg",
                              "w-[min(36rem,calc(100vw-2rem))]",
                            )}
                          >
                            <ul
                              className={cn(
                                "grid gap-2",
                                link.title === "Features"
                                  ? "lg:grid-cols-[1.1fr_1fr]"
                                  : "md:grid-cols-2",
                              )}
                            >
                              {/* {link.title === "Features" && (
                                <li className="md:row-span-2">
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href="/"
                                      className={cn(
                                        "group flex h-full min-h-[14rem] w-full flex-col justify-end rounded-lg border",
                                        "bg-gradient-to-b from-muted/40 to-muted p-4 no-underline",
                                        "transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md",
                                        "focus:outline-none focus:ring-2 focus:ring-ring",
                                      )}
                                    >
                                      <div className="mb-3 inline-flex w-fit rounded-md border bg-background px-2 py-1 text-xs font-medium text-muted-foreground">
                                        Overview
                                      </div>
                                      <h6 className="text-base font-semibold leading-snug tracking-tight">
                                        All Features
                                      </h6>
                                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                                        Manage properties, track performance,
                                        and handle everything in one place with
                                        a clean, modern workflow.
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              )} */}

                              {link.menu.map((menuItem) => (
                                <ListItem
                                  key={menuItem.title}
                                  title={menuItem.title}
                                  href={menuItem.href}
                                  icon={menuItem.icon}
                                >
                                  {menuItem.tagline}
                                </ListItem>
                              ))}
                            </ul>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href={link.href}>{link.title}</Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center gap-x-3">
            <Link
              href="https://app.rentline.io/sign-in"
              target="_blank"
              className={buttonVariants({ size: "lg", variant: "ghost" })}
            >
              Sign In
            </Link>

            <Link
              href="https://app.rentline.io"
              className={buttonVariants({ size: "lg" })}
            >
              Get Started
            </Link>
          </div>

          <MobileNavbar />
        </MaxWidthWrapper>
      </AnimationContainer>
    </header>
  );
};

const ListItem = ({
  className,
  title,
  href,
  icon: Icon,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & {
  title: string;
  icon: LucideIcon;
}) => {
  const description =
    typeof children === "string" ? children : String(children ?? "");

  return (
    <li className="min-w-0">
      <NavigationMenuLink asChild>
        <Link
          // {...props}
          href={href ?? "/"}
          title={title}
          className={cn(
            "group block min-w-0 rounded-lg border border-transparent p-3 no-underline outline-none",
            "transition-all duration-150 hover:border-border hover:bg-accent hover:text-accent-foreground",
            "focus:border-border focus:bg-accent focus:text-accent-foreground",
            "active:scale-[0.99]",
            className,
          )}
        >
          <div className="flex min-w-0 items-start gap-2.5">
            <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border bg-background text-muted-foreground transition-colors group-hover:text-foreground">
              <Icon className="size-4" />
            </div>

            <div className="min-w-0 flex-1">
              <h6 className="text-sm font-medium leading-snug line-clamp-2 break-words">
                {title}
              </h6>

              <p
                className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-2 break-words"
                title={description}
              >
                {description}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default Navbar;

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn, NAV_LINKS } from "@/utils";
import { LucideIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex lg:hidden items-center justify-end">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-full sm:max-w-sm px-0 pt-12 border-l bg-background/95 backdrop-blur-xl"
        >
          {/* Header */}
          {/* <div className="flex items-center justify-between px-5 py-4 border-b">
            <span className="font-semibold text-base">Menu</span>

            <SheetClose asChild>
              <Button size="icon" variant="ghost">
                <X className="w-5 h-5" />
              </Button>
            </SheetClose>
          </div> */}

          {/* Content */}
          <div className="flex flex-col h-full overflow-y-auto px-4 py-6">
            {/* Auth buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <Link
                href="/"
                onClick={handleClose}
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "w-full",
                })}
              >
                Get Started
              </Link>

              <Link
                href="/"
                onClick={handleClose}
                className={buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  className: "w-full",
                })}
              >
                Sign In
              </Link>
            </div>

            {/* Navigation */}
            <Accordion type="single" collapsible className="w-full">
              {NAV_LINKS.map((link) => (
                <AccordionItem
                  key={link.title}
                  value={link.title}
                  className="border-b last:border-none no-underline"
                >
                  {link.menu ? (
                    <>
                      <AccordionTrigger className="text-base no-underline font-medium py-4">
                        {link.title}
                      </AccordionTrigger>

                      <AccordionContent className="pb-2 no-underline">
                        <ul className="flex flex-col gap-2">
                          {link.menu.map((menuItem) => (
                            <ListItem
                              key={menuItem.title}
                              title={menuItem.title}
                              href={menuItem.href}
                              icon={menuItem.icon}
                              onClick={handleClose}
                            >
                              {menuItem.tagline}
                            </ListItem>
                          ))}
                        </ul>
                      </AccordionContent>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={handleClose}
                      className="block py-4 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.title}
                    </Link>
                  )}
                </AccordionItem>
              ))}
            </Accordion>

            {/* Bottom spacing */}
            <div className="h-6" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const ListItem = ({
  className,
  title,
  href,
  icon: Icon,
  children,
  onClick,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & {
  title: string;
  icon: LucideIcon;
  onClick?: () => void;
}) => {
  return (
    <li>
      <Link
        href={href ?? "/"}
        onClick={onClick}
        className={cn(
          "group flex items-start gap-3 rounded-lg p-3 transition-all",
          "hover:bg-accent hover:text-accent-foreground no-underline",
          className,
        )}
        {...props}
      >
        <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border bg-background text-muted-foreground group-hover:text-foreground">
          <Icon className="size-4" />
        </div>

        <div className="flex flex-col min-w-0">
          <span className="text-sm font-medium no-underline! leading-tight wrap-break-word">
            {title}
          </span>

          <span className="text-sm text-muted-foreground no-underline! leading-snug line-clamp-2 wrap-break-word">
            {children}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default MobileNavbar;

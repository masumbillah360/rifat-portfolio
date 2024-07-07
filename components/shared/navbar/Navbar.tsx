"use client";

import React from "react";
import Logo from "./Logo";
import { useTheme } from "next-themes";
import { routes } from "@/constatns";
import NavLink from "./NavLink";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <nav className="w-full h-[52px] content-center">
      <section className="flex justify-between items-center max-w-7xl mx-auto">
        {theme === "dark" ? (
          <Logo src="/assets/images/logo-white.png" />
        ) : (
          <Logo src="/assets/images/logo-black.png" />
        )}
        <div>
          <div className="hidden md:flex">
            {routes.map((route) => (
              <NavLink
                key={route.name + "desktop"}
                label={route.name}
                path={route.path}
              />
            ))}
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu size={32} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <h1 className="font-extrabold text-xl tracking-tighter text-gray-800 dark:text-gray-300">
                      RI<span className="text-green-400 text-2xl">F</span>AT
                    </h1>
                  </SheetTitle>
                </SheetHeader>
                {routes.map((route) => (
                  <NavLink
                    key={route.name + "mobile"}
                    label={route.name}
                    path={route.path}
                  />
                ))}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

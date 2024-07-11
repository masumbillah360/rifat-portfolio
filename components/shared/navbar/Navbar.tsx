"use client";

import { Menu } from "lucide-react";
import { routes } from "@/constatns";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import Logo from "./Logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import NavLink from "./NavLink";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-theme";

const Navbar = () => {
  // const { theme } = useTheme();
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
  return (
    <nav className="w-full  content-center shadow-md sticky top-0 z-50 bg-white/35 dark:bg-slate-800/35 backdrop-blur-sm">
      <section className="flex justify-between items-center max-w-7xl mx-auto">
        {/* {theme === "dark" ? ( */}
        <Logo src="/assets/images/logo-white.png" />
        {/* ) : (
          <Logo src="/assets/images/logo-black.png" />
        )} */}
        <div className="flex flex-row gap-3">
          <ModeToggle />
          <div className="hidden md:flex">
            {routes.map((route) => (
              <NavLink
                key={route.name + "desktop"}
                label={route.name}
                path={route.path}
                isActive={route.path === pathname}
              />
            ))}
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="border">
                  <Menu size={32} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="font-extrabold text-xl tracking-tighter text-gray-800 dark:text-gray-300">
                      RI<span className="text-green-400 text-2xl">F</span>AT
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="w-full flex flex-col gap-3">
                  {routes.map((route) => (
                    <SheetClose asChild key={"mobile" + route.name}>
                      <NavLink
                        label={route.name}
                        path={route.path}
                        isActive={route.path === pathname}
                      />
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

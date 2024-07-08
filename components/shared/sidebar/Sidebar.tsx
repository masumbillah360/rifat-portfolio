"use client";

import React from "react";
import { User } from "next-auth";
import NavLink from "../navbar/NavLink";
import { Button } from "@/components/ui/button";
import { adminDashboardRoutes } from "@/constatns";
import { usePathname, useRouter } from "next/navigation";


interface Props {
  user: User | null;
}
const Sidebar = ({ user }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(user)
  if (!user) {
    router.push("/");
  }
  return (
    <div className="h-[80vh]  sticky top-20">
      <h3 className="text-center text-green-400 dark:text-slate-400">
        Admin Dashboard
      </h3>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          {adminDashboardRoutes.map((route) => (
            <NavLink
              key={route.name + "desktop"}
              label={route.name}
              path={route.path}
              isActive={route.path === pathname}
            />
          ))}
        </div>
        <div>
          <Button variant="secondary"  className="w-full">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

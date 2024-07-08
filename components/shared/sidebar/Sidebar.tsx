"use client";

import React from "react";
import NavLink from "../navbar/NavLink";
import { usePathname } from "next/navigation";
import { adminDashboardRoutes } from "@/constatns";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div>
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
    </div>
  );
};

export default Sidebar;

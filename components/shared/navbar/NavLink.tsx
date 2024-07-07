"use client";
import Link from "next/link";
import React from "react";

interface NavLinkProps {
  label: string;
  path: string;
  isActive?: boolean;
}
const NavLink = ({ label, path, isActive }: NavLinkProps) => {
  return (
    <div
      className={`w-full border m-[2px] px-2 py-1 rounded ${
        isActive
          ? "bg-gray-100 dark:bg-gray-600 border-b-green-300"
          : ""
      }`}
    >
      <Link className="text-base text-gray-800 dark:text-gray-300" href={path}>
        {label}
      </Link>
    </div>
  );
};

export default NavLink;
